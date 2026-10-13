// Convert the GitBook spaces (Git Sync export) into one multilingual Starlight site.
// Every page gets one English path shared by both languages: French at /<path>, English at /en/<path>.
// Usage: node convert.mjs <src-content> <site-dir> <site.json> <pairmap.json> [<redirects-fr.txt> <redirects-en.txt>]
//   pairmap.json: automatic EN->FR matches from git history (pairmap.mjs); i18n-map/*.json: reviewed overrides.
//   redirects-*.txt: GitBook URL history (redirects.mjs), used to resolve stale links and in _redirects.
import fs from 'node:fs'
import path from 'node:path'
import { createRequire } from 'node:module'
import { execFileSync } from 'node:child_process'

const [SRC, SITE, CONFIG, PAIRMAP, HISTORY_FR, HISTORY_EN] = process.argv.slice(2)
const require = createRequire(path.join(SITE, 'package.json'))
const YAML = require('yaml')
const here = (f) => new URL(f, import.meta.url)
const readJson = (f) => JSON.parse(fs.readFileSync(f, 'utf8'))
const cfg = readJson(CONFIG)
const iconMap = readJson(here('./icon-map.json'))
const overrides = { pairs: readJson(here('./i18n-map/pairs.json')), slugs: readJson(here('./i18n-map/slugs.json')), groups: readJson(here('./i18n-map/groups.json')) }
const REMOTE_CACHE = here('./remote-cache/').pathname
const DOCS = path.join(SITE, 'src/content/docs')
const LANGS = ['fr', 'en']
const localePrefix = (lang) => (lang === cfg.defaultLang ? '' : `/${lang}`)

const log = { brokenLinks: [], unknownGitbook: [], missingSummary: [], warnings: [], pairing: [] }
const posix = path.posix

// ---------- helpers ----------
function parseFrontmatter(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---\n?/)
  if (!m) return { fm: {}, body: text }
  return { fm: YAML.parse(m[1]) || {}, body: text.slice(m[0].length) }
}
const decodeEntities = (s) => s.replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16))).replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(+d)).replace(/&amp;/g, '&')
const safeDecode = (s) => { s = decodeEntities(s); try { return decodeURI(s) } catch { return s } }
const gitbookSlug = (t) => t.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9.]+/g, '-').replace(/^-|-$/g, '')
// ---------- SUMMARY.md -> tree ----------
function parseSummary(dir) {
  const text = fs.readFileSync(path.join(SRC, dir, 'SUMMARY.md'), 'utf8')
  const groups = [{ label: null, items: [] }]
  const stack = []
  for (const line of text.split('\n')) {
    const g = line.match(/^## (.+)$/)
    if (g) { groups.push({ label: g[1].trim(), items: [] }); stack.length = 0; continue }
    // a divider closes the current group: following pages are ungrouped (no group slug in the URL)
    if (/^\*\*\*\s*$/.test(line)) { groups.push({ label: null, items: [] }); stack.length = 0; continue }
    const it = line.match(/^(\s*)[*-] \[(.*)\]\((.+)\)\s*$/)
    if (!it) continue
    const depth = Math.floor(it[1].length / 2)
    const node = { label: it[2], rel: safeDecode(it[3]), children: [] }
    stack.length = depth
    if (depth === 0) groups.at(-1).items.push(node)
    else stack[depth - 1].children.push(node)
    stack[depth] = node
  }
  return groups.filter((g) => g.label || g.items.length)
}
const slugOf = (rel) => /(^|\/)README\.md$/i.test(rel) ? posix.basename(posix.dirname(rel)) : posix.basename(rel, '.md')

// ---------- pass 1: index every page of both languages, with its old (GitBook) URL ----------
// A "space" here is one language of one section: { id, prefix, lang, dir, gitbookId, published, section }.
const spaces = cfg.spaces.flatMap((section) => LANGS.filter((l) => section[l]).map((lang) => ({
  id: section.id, prefix: section.prefix, lang, section, ...section[lang], published: section[lang].published !== false,
})))
const pages = new Map() // `${dir}/${rel}` -> page
const trees = new Map() // dir -> groups
for (const space of spaces) {
  const groups = parseSummary(space.dir)
  trees.set(space.dir, groups)
  const info = new Map([['README.md', { oldUrl: '/' + space.prefix, label: null, group: null, hasChildren: true, parent: null }]])
  groups.forEach((g) => {
    const walk = (items, base, parent) => items.forEach((n) => {
      if (n.rel === 'README.md') return walk(n.children, base, parent)
      const segs = [...base, slugOf(n.rel)]
      info.set(n.rel, { oldUrl: '/' + segs.filter(Boolean).join('/').toLowerCase(), label: n.label, group: g, hasChildren: n.children.length > 0, parent })
      walk(n.children, segs, n.rel)
    })
    walk(g.items, [space.prefix, g.label && gitbookSlug(g.label)], null)
  })
  for (const [rel, i] of info) {
    const abs = path.join(SRC, space.dir, rel)
    if (!fs.existsSync(abs)) { log.missingSummary.push(`${space.dir}/${rel}`); continue }
    const { fm, body } = parseFrontmatter(fs.readFileSync(abs, 'utf8'))
    const h1 = body.match(/^\s*# (.+)$/m)
    pages.set(`${space.dir}/${rel}`, {
      space, rel, abs, fm, body, ...i,
      title: (h1 ? h1[1] : fm.title || i.label || rel).replace(/<[^>]+>/g, '').trim(),
      // customer pages (sections listed in `privateGroups`, e.g. "Pages privées"): reachable by direct link only
      private: (space.section.privateGroups ?? []).includes(i.group?.label),
      hidden: fm.hidden === true || (space.section.privateGroups ?? []).includes(i.group?.label),
    })
  }
}
const pagesOf = (space) => [...pages.values()].filter((p) => p.space === space)
const spaceOf = (id, lang) => spaces.find((s) => s.id === id && s.lang === lang)

// ---------- pass 2: pair English pages with French pages ----------
// Start from the git-history matches, then apply the reviewed overrides (keyed by old URLs).
const pairmap = readJson(PAIRMAP)
const auto = new Map(pairmap.sections.flatMap((s) => {
  const section = cfg.spaces.find((x) => x.prefix === s.prefix)
  return section ? s.en.filter((e) => e.frRel).map((e) => [`${section.en.dir}/${e.rel}`, `${section.fr.dir}/${e.frRel}`]) : []
}))
for (const section of cfg.spaces) {
  const fr = spaceOf(section.id, 'fr'), en = spaceOf(section.id, 'en')
  if (!fr || !en) continue
  const frByOld = new Map(pagesOf(fr).map((p) => [p.oldUrl, p]))
  const sectionOverrides = overrides.pairs[section.overrides ?? section.id] ?? {}
  for (const p of pagesOf(en)) {
    let partner = pages.get(auto.get(`${en.dir}/${p.rel}`))
    if (section.pairBy === 'path') partner = pages.get(`${fr.dir}/${p.rel}`)
    if (p.oldUrl in sectionOverrides) {
      const target = sectionOverrides[p.oldUrl]
      partner = target === null ? undefined : frByOld.get(target)
      if (target !== null && !partner) log.pairing.push(`override target missing: ${target}`)
    }
    if (!partner) continue
    if (partner.partner) { log.pairing.push(`${p.oldUrl} and ${partner.partner.oldUrl} both match ${partner.oldUrl}; keeping the first`); continue }
    p.partner = partner
    partner.partner = p
  }
}

// ---------- pass 3: one English path per page ----------
// French tree is the master structure. A segment is the English partner's slug, or a reviewed translation.
const groupEnglish = new Map() // FR group object -> { label, slug }
for (const section of cfg.spaces) {
  const fr = spaceOf(section.id, 'fr')
  for (const g of trees.get(fr.dir)) {
    if (!g.label) continue
    const votes = new Map()
    for (const p of pagesOf(fr)) if (p.group === g && p.partner?.group?.label) votes.set(p.partner.group.label, (votes.get(p.partner.group.label) ?? 0) + 1)
    const best = [...votes].sort((a, b) => b[1] - a[1])[0]?.[0] ?? overrides.groups[section.id]?.[g.label]
    if (!best) log.warnings.push(`no English name for group "${g.label}" (${fr.dir}); keeping the French slug`)
    groupEnglish.set(g, { label: best ?? g.label, slug: gitbookSlug(best ?? g.label) })
  }
}
const canonicalOf = new Map() // page -> path without locale prefix
for (const section of cfg.spaces) {
  const fr = spaceOf(section.id, 'fr')
  canonicalOf.set(pages.get(`${fr.dir}/README.md`), '/' + section.prefix)
  for (const g of trees.get(fr.dir)) {
    const walk = (items, base) => items.forEach((n) => {
      const p = pages.get(`${fr.dir}/${n.rel}`)
      if (n.rel === 'README.md') return walk(n.children, base)
      let seg = p?.partner ? slugOf(p.partner.rel) : overrides.slugs[p?.oldUrl]
      if (!seg) { seg = slugOf(n.rel); log.warnings.push(`no English slug for ${p?.oldUrl ?? n.rel}; keeping "${seg}"`) }
      const segs = [...base, seg]
      if (p) canonicalOf.set(p, '/' + segs.filter(Boolean).join('/').toLowerCase())
      walk(n.children, segs)
    })
    walk(g.items, [section.prefix, g.label && groupEnglish.get(g).slug])
  }
  // English pages share their partner's path; English-only pages keep their own URL
  const en = spaceOf(section.id, 'en')
  if (en) for (const p of pagesOf(en)) canonicalOf.set(p, p.partner ? canonicalOf.get(p.partner) : p.oldUrl)
}
for (const lang of LANGS) {
  const seen = new Map()
  for (const p of pages.values()) {
    if (p.space.lang !== lang) continue
    const c = canonicalOf.get(p)
    if (seen.has(c)) log.warnings.push(`path collision ${lang} ${c}: ${seen.get(c).oldUrl} and ${p.oldUrl}`)
    seen.set(c, p)
  }
}
for (const p of pages.values()) {
  p.canonical = canonicalOf.get(p)
  p.url = (localePrefix(p.space.lang) + (p.canonical === '/' ? '' : p.canonical)) || '/'
}
// Sections with `landing: "latest"` (release notes) have no home page: their home is the first entry
// of the SUMMARY (the newest version), so the tab, links and the old home URL all land there.
for (const space of spaces) {
  if (space.section.landing !== 'latest') continue
  const first = pagesOf(space).find((p) => p.rel !== 'README.md')
  const home = pages.get(`${space.dir}/README.md`)
  if (home && first) home.redirectTo = first
}
const written = (p) => p.space.published && !p.redirectTo
// the page a link should land on: follow a home redirect, and stay in the reader's language when possible
const landing = (p, lang) => {
  if (p?.redirectTo) p = p.redirectTo
  if (p && lang && p.space.lang !== lang && p.partner && written(p.partner)) p = p.partner.redirectTo ?? p.partner
  return p && written(p) ? p : p?.partner && written(p.partner) ? p.partner : null
}
const byUrl = new Map([...pages.values()].filter(written).map((p) => [p.url, p]))
const frCanonicals = new Set([...pages.values()].filter((p) => p.space.lang === 'fr' && written(p)).map((p) => p.canonical))

// ---------- link resolution ----------
// English pages were copied from French ones, and many English links still use French file or URL names.
// Translate such paths segment by segment (EN<->FR names learned from paired pages) and link to the
// page's English path; untranslated pages get Starlight's fallback at the same path.
const segMap = new Map()
const learn = (a, b) => { if (a.length === b.length) a.forEach((seg, i) => { if (!segMap.has(seg)) segMap.set(seg, b[i]) }) }
for (const p of pages.values()) {
  if (p.space.lang !== 'en' || !p.partner) continue
  learn(p.rel.replace(/\.md$/, '').split('/'), p.partner.rel.replace(/\.md$/, '').split('/'))
  learn(p.oldUrl.split('/'), p.partner.oldUrl.split('/'))
}
function repairEnglish(frSpace, segments, viaRel) {
  for (const segs of [segments.map((x) => segMap.get(x) ?? x), segments]) {
    const fr = viaRel
      ? pages.get(`${frSpace.dir}/${segs.join('/')}.md`) ?? pages.get(`${frSpace.dir}/${segs.join('/')}/README.md`) ?? pages.get(`${frSpace.dir}/${segs.join('/')}`)
      : oldIndex.fr.get(segs.join('/') || '/')
    if (fr) return localePrefix('en') + (fr.canonical === '/' ? '' : fr.canonical)
  }
  return null
}

// Old URLs (and their GitBook history) of each language resolve to the page.
const oldIndex = Object.fromEntries(LANGS.map((l) => [l, new Map([...pages.values()].filter((p) => p.space.lang === l).map((p) => [p.oldUrl, p]))]))
const history = { fr: new Map(), en: new Map() }
for (const [lang, file] of [['fr', HISTORY_FR], ['en', HISTORY_EN]]) {
  if (!file || !fs.existsSync(file)) continue
  for (const line of fs.readFileSync(file, 'utf8').split('\n')) {
    const [from, to] = line.split(/\s+/)
    if (from?.startsWith('/') && to?.startsWith('/')) history[lang].set(from, to)
  }
}
function resolveOld(lang, oldPath) {
  const clean = (oldPath.replace(/\/~\/revisions\/[A-Za-z0-9]+/, '').replace(/\/$/, '') || '/').toLowerCase()
  return oldIndex[lang].get(clean) ?? oldIndex[lang].get(history[lang].get(clean))
}
const hostLang = Object.fromEntries(LANGS.map((l) => [cfg.langs[l].oldHost, l]))
function resolveOwnUrl(url, readerLang) {
  const m = url.match(/^https?:\/\/([^/\s]+)(\/[^\s#?]*)?(?:\?[^#\s]*)?(#\S*)?$/)
  const lang = m && hostLang[m[1]]
  if (!lang) return null
  return { page: landing(resolveOld(lang, m[2] || '/'), readerLang), hash: m[3] ?? '' }
}
const byGitbookId = new Map(spaces.filter((s) => s.gitbookId).map((s) => [s.gitbookId, s]))
function rewriteHref(href, space, fromRel) {
  if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return href
  const own = resolveOwnUrl(href, space.lang)
  if (own) {
    if (own.page) return own.page.url + own.hash
    const m = href.match(/^https?:\/\/[^/]+(\/[^\s#?]*)/)
    const repaired = space.lang === 'en' && m && repairEnglish(null, m[1].replace(/\/$/, '').split('/'), false)
    if (repaired) return repaired + own.hash
    log.brokenLinks.push(`${space.dir}/${fromRel} -> ${href}`)
    return href
  }
  const gb = href.match(/^https:\/\/app\.gitbook\.com\/(?:o\/[^/]+\/)?s\/([A-Za-z0-9]+)(\/[^\s#?]*)?([#?].*)?$/)
  if (gb) {
    const target = byGitbookId.get(gb[1])
    if (!target) { log.unknownGitbook.push(href); return href }
    const p = (gb[2] || '').replace(/\/readme$/i, '')
    const found = resolveOld(target.lang, '/' + [target.prefix, p.replace(/^\//, '')].filter(Boolean).join('/'))
      ?? (p.replace(/\/$/, '').split('/').length <= 3 ? pages.get(`${target.dir}/README.md`) : undefined) // a section page that no longer exists
    const page = landing(found, space.lang)
    if (page) return page.url + (gb[3]?.startsWith('#') && page === found ? gb[3] : '')
    log.brokenLinks.push(`${space.dir}/${fromRel} -> ${href}`)
    return href
  }
  // a file uploaded to GitBook disappears with GitBook: serve our own copy
  if (/^https:\/\/files\.gitbook\.com\//.test(href)) return localizeRemoteFile(space, decodeEntities(href)).href
  if (/^[a-z]+:/i.test(href)) return href
  // already a site path (links are rewritten once per pass, cards and attributes may be seen twice)
  if (href.startsWith('/')) {
    const path = href.split('#')[0]
    // English path of a French-only page: Starlight renders its "not translated yet" fallback there
    const fallback = path.startsWith(localePrefix('en') + '/') && frCanonicals.has(path.slice(localePrefix('en').length))
    if (!byUrl.has(path) && !fallback && !href.startsWith('/files/')) log.brokenLinks.push(`${space.dir}/${fromRel} -> ${href}`)
    return href
  }
  const [rawPath, hash = ''] = href.split('#')
  let target = posix.normalize(posix.join(posix.dirname(fromRel), safeDecode(rawPath)))
  if (target.includes('.gitbook/assets/')) {
    const file = target.slice(target.indexOf('.gitbook/assets/') + '.gitbook/assets/'.length)
    return publicFile(space, path.join(SRC, space.dir, '.gitbook/assets', file), file)
  }
  if (rawPath.endsWith('/') || rawPath === '') target = posix.join(target, 'README.md')
  let page = pages.get(`${space.dir}/${target}`)
  if (!page) {
    // the file was renamed since the link was written: follow git renames to today's file
    let file = `${space.dir}/${target}`
    for (let i = 0; i < 60 && pairmap.renames[file]; i++) file = pairmap.renames[file]
    page = pages.get(file)
  }
  if (!page && space.lang === 'en') {
    const fr = spaceOf(space.id, 'fr')
    const repaired = repairEnglish(fr, target.replace(/(\/README)?\.md$/i, '').replace(/\/$/, '').split('/'), true)
    if (repaired) return repaired + (hash ? '#' + hash : '')
    // a sibling page that only exists in French, linked by its English slug
    const siblingBase = (page0) => page0 && (page0.hasChildren || page0.rel.endsWith('README.md') ? page0.canonical : posix.dirname(page0.canonical))
    const from = pages.get(`${space.dir}/${fromRel}`)
    const guess = from && posix.join(siblingBase(from), slugOf(target))
    const sib = guess && [...pages.values()].find((x) => x.space.lang === 'fr' && x.canonical === guess)
    if (sib) return localePrefix('en') + sib.canonical + (hash ? '#' + hash : '')
  }
  const dest = landing(page, space.lang)
  if (!dest) { log.brokenLinks.push(`${space.dir}/${fromRel} -> ${href}`); return href }
  return dest.url + (hash && dest === page ? '#' + hash : '')
}

// copy a file into public/files/<space>/ and return its URL
function publicFile(space, srcAbs, file) {
  const dest = path.join(SITE, 'public/files', space.dir, file)
  fs.mkdirSync(path.dirname(dest), { recursive: true })
  fs.copyFileSync(srcAbs, dest)
  return encodeURI(`/files/${space.dir}/${file}`)
}
// files embedded from GitBook's CDN: use the copy in .gitbook/assets when there is one, else download once
function localizeRemoteFile(space, url) {
  const name = decodeURIComponent(url.match(/\/o\/([^?]+)/)[1]).split('/').pop()
  const local = spaces.map((s) => path.join(SRC, s.dir, '.gitbook/assets', name)).find((f) => fs.existsSync(f))
  if (local) return { href: publicFile(space, local, name), name }
  const cached = path.join(REMOTE_CACHE, name)
  if (!fs.existsSync(cached)) {
    fs.mkdirSync(REMOTE_CACHE, { recursive: true })
    execFileSync('curl', ['-sSfL', '-o', cached, url])
    log.warnings.push(`downloaded remote file ${name}`)
  }
  return { href: publicFile(space, cached, name), name }
}
const relFrom = (from, to) => { const r = path.relative(path.dirname(from), to).split(path.sep).join('/'); return r.startsWith('.') ? r : './' + r }

// ---------- body conversion ----------
// JSX attribute as a plain string when possible: Markdown exporters (starlight-md-txt) only read string attributes
const attr = (name, value) => {
  const v = String(value)
  if (!v.includes('"') && !/[{}<>]/.test(v)) return `${name}="${v}"`
  if (!v.includes("'") && !/[{}<>]/.test(v)) return `${name}='${v}'`
  return `${name}={${JSON.stringify(v)}}`
}
// link text inside self-closing media components, so plain-Markdown exports keep the URL
const mdLink = (text, url) => `[${String(text).replace(/[[\]]/g, '')}](${url})`

const asideType = { info: 'note', warning: 'caution', danger: 'danger', success: 'tip' }
const styleToJsx = (s) =>
  '{{' + s.split(';').filter((d) => d.trim()).map((d) => {
    const [k, ...v] = d.split(':')
    const key = k.trim().replace(/-([a-z])/g, (_, c) => c.toUpperCase())
    return `${JSON.stringify(key)}: ${JSON.stringify(v.join(':').trim())}`
  }).join(', ') + '}}'

function convertBody(body, space, fromRel, outPath) {
  const imports = new Map() // spec -> local name
  const used = new Set()
  const addImport = (spec, name) => { if (!imports.has(spec)) imports.set(spec, name ?? `img${imports.size}`); return imports.get(spec) }
  const assetImport = (src) => {
    if (/^https?:/.test(src)) return null
    const target = posix.normalize(posix.join(posix.dirname(fromRel), safeDecode(src)))
    const i = target.indexOf('.gitbook/assets/')
    if (i < 0) { log.warnings.push(`non-asset image ${space.dir}/${fromRel}: ${src}`); return null }
    const file = target.slice(i + '.gitbook/assets/'.length)
    const srcAbs = path.join(SRC, space.dir, '.gitbook/assets', file)
    if (!fs.existsSync(srcAbs)) { log.warnings.push(`missing asset ${space.dir}/${fromRel}: ${file}`); return null }
    const dest = path.join(SITE, 'src/assets', space.dir, file)
    fs.mkdirSync(path.dirname(dest), { recursive: true })
    if (!fs.existsSync(dest)) fs.copyFileSync(srcAbs, dest)
    return addImport(`~/assets/${space.dir}/${file}`)
  }
  const figure = (inner, align) => {
    const img = inner.match(/<img\s+src="([^"]+)"(?:\s+alt="([^"]*)")?(?:\s+width="(\d+)")?[^>]*>/)
    if (!img) return inner
    const cap = (inner.match(/<figcaption>([\s\S]*?)<\/figcaption>/) || [])[1]?.trim()
    if (/\.(mp4|mov|webm)$/i.test(img[1])) {
      used.add('Video')
      const src = rewriteHref(img[1], space, fromRel)
      return `<Video ${attr('src', src)}${cap ? ` ${attr('caption', cap)}` : ''}>${mdLink(cap || posix.basename(safeDecode(img[1])), src)}</Video>`
    }
    const name = assetImport(img[1])
    used.add('Figure')
    const attrs = [
      `src={${name ?? JSON.stringify(img[1])}}`,
      attr('alt', img[2] || ''),
      img[3] && `width={${img[3]}}`,
      align && `align="${align}"`,
      cap && attr('caption', cap),
    ].filter(Boolean)
    return `<Figure ${attrs.join(' ')} />`
  }

  let b = body
  // park HTML comments so nothing inside them is converted; restored as MDX comments at the end
  const comments = []
  b = b.replace(/<!--([\s\S]*?)-->/g, (_, c) => `\u0000C${comments.push(c) - 1}\u0000`)
  // H1 becomes the frontmatter title
  b = b.replace(/^\s*# .+\n?/, '')
  // GitBook figures (optionally wrapped in an alignment div, possibly several side by side)
  b = b.replace(/<div([^>]*)>((?:\s*<figure>[\s\S]*?<\/figure>)+)\s*<\/div>/g, (_, divAttrs, figs) => {
    const align = (divAttrs.match(/align="(\w+)"/) || [])[1] || (divAttrs.includes('full-width') ? 'full' : undefined)
    const out = [...figs.matchAll(/<figure>([\s\S]*?)<\/figure>/g)].map((m) => figure(m[1], align))
    return out.length > 1 ? `<div class="gb-figure-row">\n${out.join('\n')}\n</div>` : out[0]
  })
  b = b.replace(/<figure>([\s\S]*?)<\/figure>/g, (_, inner) => figure(inner))
  // card tables -> CoverCards (cover image + visible cells, whole card links to the target)
  b = b.replace(/<table([^>]*data-view="cards"[^>]*)>([\s\S]*?)<\/table>/g, (_, tableAttrs, t) => {
    const ths = [...(t.match(/<thead>([\s\S]*?)<\/thead>/)?.[1] ?? '').matchAll(/<th([^>]*)>/g)].map((m) => m[1])
    const rows = [...(t.match(/<tbody>([\s\S]*?)<\/tbody>/)?.[1] ?? '').matchAll(/<tr>([\s\S]*?)<\/tr>/g)].map((r) => [...r[1].matchAll(/<td>([\s\S]*?)<\/td>/g)].map((c) => c[1]))
    const col = (pred) => ths.findIndex(pred)
    const coverCol = col((h) => h.includes('data-card-cover'))
    const targetCol = col((h) => h.includes('data-card-target'))
    const refCol = col((h) => h.includes('content-ref') && !h.includes('data-hidden'))
    used.add('CoverCards')
    const cards = rows.map((cells) => {
      const href = (i) => (cells[i]?.match(/href="([^"]+)"/) || [])[1]
      const parts = cells.map((c, i) => (ths[i]?.includes('data-hidden') || i === refCol ? '' : c.trim())).filter((c) => c.replace(/<[^>]+>/g, '').trim())
      let target = targetCol >= 0 ? href(targetCol) : refCol >= 0 ? href(refCol) : undefined
      const links = parts.join(' ').match(/href="[^"]+"/g) || []
      if (!target && links.length === 1) target = links[0].slice(6, -1)
      const url = target && rewriteHref(decodeEntities(target), space, fromRel)
      if (refCol >= 0 && url) parts.push(`<span class="gb-card-link">${byUrl.get(url.split('#')[0])?.title ?? ''}</span>`)
      const coverSrc = coverCol >= 0 ? href(coverCol) : undefined
      const cover = coverSrc && assetImport(decodeEntities(coverSrc))
      const attrs = [url && attr('href', url), cover && `cover={${cover}}`].filter(Boolean).join(' ')
      // a card is one link: drop inner anchors that point at the card target
      const body = parts.map((p) => (url && links.length === 1 ? p.replace(/<a [^>]*>([\s\S]*?)<\/a>/g, '$1') : p))
      return `<CoverCard ${attrs}>\n${body.map((p) => `<div>${p}</div>`).join('\n')}\n</CoverCard>`
    })
    const size = (tableAttrs.match(/data-card-size="(\w+)"/) || [])[1]
    return `<CoverCards${size ? ` size="${size}"` : ''}>\n${cards.join('\n')}\n</CoverCards>`
  })
  // content-ref -> LinkCard
  b = b.replace(/\{% content-ref url="([^"]+)" %\}[\s\S]*?\{% endcontent-ref %\}/g, (_, url) => {
    used.add('LinkCard')
    const href = rewriteHref(url, space, fromRel)
    const p = byUrl.get(href.split('#')[0])
    return `<LinkCard ${attr('title', p?.title ?? url)} ${attr('href', href)} />`
  })
  // embeds (caption form has an endembed)
  b = b.replace(/\{% embed url="([^"]+)"[^%]*%\}(?:((?:(?!\{%)[\s\S])*?)\{% endembed %\})?/g, (_, url, cap) => {
    const caption = cap?.trim()
    // a page of this site: GitBook shows a link preview, we show the page's own card
    const own = resolveOwnUrl(url, space.lang)
    if (own?.page) {
      used.add('LinkCard')
      const { page } = own
      const desc = page.fm.description ? ` ${attr('description', String(page.fm.description).trim())}` : ''
      return `<LinkCard ${attr('title', caption || page.title)}${desc} ${attr('href', page.url + own.hash)} />`
    }
    if (own) log.brokenLinks.push(`${space.dir}/${fromRel} -> embed ${url}`)
    // a file uploaded to GitBook: serve our own copy
    if (/^https:\/\/files\.gitbook\.com\//.test(url)) {
      const f = localizeRemoteFile(space, url)
      used.add('FileCard')
      return `<FileCard ${attr('href', f.href)}${caption ? ` ${attr('title', caption)}` : ''}>${mdLink(caption || f.name, f.href)}</FileCard>`
    }
    used.add('Embed')
    return `<Embed ${attr('url', url)}${caption ? ` ${attr('caption', caption)}` : ''}>${mdLink(caption || url, url)}</Embed>`
  })
  // files
  b = b.replace(/\{% file src="([^"]+)" %\}(?:((?:(?!\{%)[\s\S])*?)\{% endfile %\})?/g, (_, src, cap) => {
    used.add('FileCard')
    const href = rewriteHref(src, space, fromRel)
    return `<FileCard ${attr('href', href)}${cap?.trim() ? ` ${attr('title', cap.trim())}` : ''}>${mdLink(cap?.trim() || posix.basename(safeDecode(src)), href)}</FileCard>`
  })
  // includes -> MDX partial import
  b = b.replace(/\{% include "([^"]+)" %\}/g, (_, inc) => {
    const target = posix.normalize(posix.join(posix.dirname(fromRel), inc))
    const name = convertInclude(space, target)
    const local = addImport(`~/includes/${space.dir}/${name}.mdx`, `Inc${imports.size}`)
    return `<${local} />`
  })
  // block tags
  b = b.replace(/\{% hint style="(\w+)" %\}/g, (_, s) => {
    used.add('Aside')
    // GitBook "success" is green with a check mark; Starlight's tip is restyled green in the theme
    return `\n<Aside type="${asideType[s] ?? 'note'}"${s === 'success' ? ' icon="approve-check-circle"' : ''}>\n`
  })
    .replace(/\{% endhint %\}/g, '\n</Aside>\n')
    .replace(/\{% stepper %\}/g, () => { used.add('Steps'); return '\n<Steps>\n<ol>\n' })
    .replace(/\{% endstepper %\}/g, '\n</ol>\n</Steps>\n')
    .replace(/\{% step %\}/g, '\n<li>\n')
    .replace(/\{% endstep %\}/g, '\n</li>\n')
    .replace(/\{% tabs %\}/g, () => { used.add('Tabs'); used.add('TabItem'); return '\n<Tabs>\n' })
    .replace(/\{% endtabs %\}/g, '\n</Tabs>\n')
    .replace(/\{% tab title="([^"]*)" %\}/g, (_, t) => `\n<TabItem ${attr('label', t)}>\n`)
    .replace(/\{% endtab %\}/g, '\n</TabItem>\n')
  const leftover = b.match(/\{%[^%]*%\}/g)
  if (leftover) log.warnings.push(`leftover tags ${space.dir}/${fromRel}: ${[...new Set(leftover)].join(' ')}`)
  // links (markdown + HTML)
  b = b.replace(/(!?)\[([^\]]*)\]\((<[^>]+>|[^)\s]+)(\s+"[^"]*")?\)/g, (m, bang, text, href, title = '') => {
    const raw = href.replace(/^<|>$/g, '')
    if (bang) {
      const name = assetImport(raw)
      if (!name) return m
      used.add('Figure')
      return `<Figure src={${name}} ${attr('alt', text)} />`
    }
    return `[${text}](${rewriteHref(raw, space, fromRel)}${title})`
  })
  b = b.replace(/href="([^"]+)"/g, (_, h) => `href="${rewriteHref(h, space, fromRel)}"`)
  // MDX strictness: void elements, inline styles, comments
  // markdown is parsed inside JSX, so literal `*`/`_` in inline HTML <code> must become expressions
  b = b.replace(/<code>([^<]*)<\/code>/g, (_, c) => `<code>{${JSON.stringify(decodeEntities(c))}}</code>`)
  // GitBook coloured text: <mark style="color:purple;"> is a text colour, not a highlight
  b = b.replace(/<mark style="((?:background-)?color):\s*(\w+);?">([\s\S]*?)<\/mark>/g, (_, prop, c, t) =>
    `<span class="gb-${prop === 'color' ? 'text' : 'bg'}-${c}">${t}</span>`)
  b = b.replace(/<br\s*>/g, '<br />')
    .replace(/<img([^>]*?)\s*\/?>/g, '<img$1 />')
    .replace(/style="([^"]*)"/g, (_, s) => `style=${styleToJsx(s)}`)
    .replace(/\u0000C(\d+)\u0000/g, (_, i) => `{/*${comments[i].replace(/\*\//g, '* /')}*/}`)
  b = b.replace(/\n{3,}/g, '\n\n').trim() + '\n'

  // imports
  const outDir = path.dirname(outPath)
  const sl = ['Aside', 'Steps', 'Tabs', 'TabItem', 'LinkCard', 'CardGrid'].filter((c) => used.has(c))
  const lines = []
  if (sl.length) lines.push(`import { ${sl.join(', ')} } from '@astrojs/starlight/components'`)
  if (used.has('Figure')) lines.push(`import Figure from '~/components/Figure.astro'`)
  for (const c of ['Embed', 'FileCard', 'Video']) if (used.has(c)) lines.push(`import ${c} from '~/components/${c}.astro'`)
  if (used.has('CoverCards')) lines.push(`import { CoverCards, CoverCard } from '~/components/cards'`)
  for (const [spec, name] of imports) lines.push(`import ${name} from ${JSON.stringify(spec)}`)
  void outDir
  return (lines.length ? lines.join('\n') + '\n\n' : '') + b
}

const doneIncludes = new Map()
function convertInclude(space, rel) {
  const key = `${space.dir}/${rel}`
  if (doneIncludes.has(key)) return doneIncludes.get(key)
  const name = posix.basename(rel, '.md').replace(/\.+$/, '').replace(/[^a-z0-9-]+/gi, '-')
  doneIncludes.set(key, name)
  const out = path.join(SITE, 'src/includes', space.dir, `${name}.mdx`)
  const { body } = parseFrontmatter(fs.readFileSync(path.join(SRC, space.dir, rel), 'utf8'))
  fs.mkdirSync(path.dirname(out), { recursive: true })
  fs.writeFileSync(out, convertBody(body, space, rel, out))
  return name
}

// ---------- pass 4: write pages (French at docs/<path>, English at docs/en/<path>) ----------
let writtenCount = 0
for (const page of pages.values()) {
  if (!written(page)) continue
  const rel = page.url === '/' ? 'index.mdx' : page.url.slice(1) + (page.hasChildren || page.rel === 'README.md' ? '/index.mdx' : '.mdx')
  const out = path.join(DOCS, rel)
  const body = convertBody(page.body, page.space, page.rel, out)
  const { fm: gfm } = page
  const layout = gfm.layout || {}
  const hiddenPart = (k) => layout[k]?.visible === false
  const fm = { title: page.title }
  if (gfm.description) fm.description = String(gfm.description).trim()
  if (gfm.icon) {
    if (iconMap[gfm.icon]) fm.icon = iconMap[gfm.icon]
    else log.warnings.push(`unmapped icon ${gfm.icon}`)
  }
  if (gfm.cover) {
    const file = posix.normalize(posix.join(posix.dirname(page.rel), safeDecode(gfm.cover))).split('.gitbook/assets/')[1]
    const dest = path.join(SITE, 'src/assets', page.space.dir, file)
    fs.mkdirSync(path.dirname(dest), { recursive: true })
    fs.copyFileSync(path.join(SRC, page.space.dir, '.gitbook/assets', file), dest)
    fm.cover = relFrom(out, dest)
  }
  if (hiddenPart('title')) fm.hideTitle = true
  if (hiddenPart('description')) fm.hideDescription = true
  if (hiddenPart('outline')) fm.tableOfContents = false
  if (hiddenPart('pagination')) { fm.prev = false; fm.next = false }
  if (page.hidden) fm.sidebar = { hidden: true }
  if (gfm.noIndex || page.private) { fm.pagefind = false; fm.head = [{ tag: 'meta', attrs: { name: 'robots', content: 'noindex' } }] }
  fs.mkdirSync(path.dirname(out), { recursive: true })
  fs.writeFileSync(out, `---\n${YAML.stringify(fm)}---\n\n${body}`)
  writtenCount++
}

// ---------- sidebar: one tree (French structure) with English labels ----------
// `data-only` marks entries that exist in one language; the theme hides them in the other.
const labelOf = (p) => p?.label ?? p?.title
// Starlight picks sidebar translations by language tag (en-CA); sidebar-topics by locale (en). Give both.
const enKeys = (label) => ({ en: label, [cfg.langs.en.lang]: label })
function sidebarItem(p, children) {
  const icon = iconMap[p.fm.icon] ?? iconMap[p.partner?.fm.icon]
  const frOnly = p.space.lang === 'fr' && !(p.partner && written(p.partner))
  const enOnly = p.space.lang === 'en' && !p.partner
  const attrs = {
    ...(icon && { 'data-icon': icon }),
    ...(children.length && { 'data-self': '' }),
    ...(frOnly && { 'data-only': 'fr' }),
    ...(enOnly && { 'data-only': 'en' }),
  }
  const enLabel = p.space.lang === 'fr' && p.partner && written(p.partner) ? labelOf(p.partner) : undefined
  const item = { label: labelOf(p), ...(enLabel && enLabel !== labelOf(p) && { translations: enKeys(enLabel) }), link: p.canonical, attrs }
  // a page with children: the theme renders the group label as this page's link (GitBook behaviour)
  return children.length ? [{ label: item.label, ...(item.translations && { translations: item.translations }), collapsed: true, items: [item, ...children] }] : [item]
}
function frItems(fr, items) {
  return items.flatMap((n) => {
    const p = pages.get(`${fr.dir}/${n.rel}`)
    if (!p || p.hidden || n.rel === 'README.md') return n.rel === 'README.md' ? frItems(fr, n.children) : []
    return sidebarItem(p, [...frItems(fr, n.children), ...enOnlyChildren(p)])
  })
}
// English-only pages hang under their English parent's French partner (or at the end of their group)
const enOnlyByParent = new Map()
for (const p of pages.values()) {
  if (p.space.lang !== 'en' || p.partner || !written(p) || p.hidden || p.rel === 'README.md') continue
  const parent = p.parent && pages.get(`${p.space.dir}/${p.parent}`)?.partner
  const key = parent ?? `group:${p.space.id}:${p.group?.label ?? ''}`
  enOnlyByParent.set(key, [...(enOnlyByParent.get(key) ?? []), p])
}
const enOnlyChildren = (key) => (enOnlyByParent.get(key) ?? []).flatMap((p) => sidebarItem(p, []))
const topics = cfg.spaces.map((section) => {
  const fr = spaceOf(section.id, 'fr')
  const en = spaceOf(section.id, 'en')
  const items = trees.get(fr.dir).flatMap((g) => {
    const its = frItems(fr, g.items)
    const enGroup = g.label && groupEnglish.get(g)
    const enOnlyHere = enOnlyChildren(`group:${section.id}:${en ? (trees.get(en.dir).find((eg) => gitbookSlug(eg.label ?? '') === enGroup?.slug)?.label ?? '') : ''}`)
    const all = [...its, ...(g.label ? enOnlyHere : [])]
    if (g.label && !all.length) return [] // every page of the section is hidden
    return g.label ? [{ label: g.label, ...(enGroup && enGroup.label !== g.label && { translations: enKeys(enGroup.label) }), items: all }] : all
  })
  return {
    id: section.id,
    label: { [cfg.langs.fr.lang]: section.label.fr, ...enKeys(section.label.en) },
    link: pages.get(`${fr.dir}/README.md`)?.redirectTo?.canonical ?? '/' + section.prefix,
    attrs: { 'data-icon': section.icon, ...(!(en?.published) && { 'data-only': 'fr' }) },
    items,
  }
})
const topicMap = Object.fromEntries(cfg.spaces.filter((s) => s.prefix).map((s) => [s.id, [`/${s.prefix}/**`, `/en/${s.prefix}/**`]]))
fs.writeFileSync(path.join(SITE, 'src/sidebar.generated.mjs'),
  `// generated by scripts/gitbook/convert.mjs\nexport const topics = ${JSON.stringify(topics, null, 2)}\nexport const topicMap = ${JSON.stringify(topicMap)}\n`)

// ---------- private pages and untranslated fallbacks: kept out of the sitemap, LLM files and crawlers ----------
const privatePages = [...pages.values()].filter((p) => p.private && written(p))
const enPath = (p) => localePrefix('en') + (p.canonical === '/' ? '' : p.canonical)
// English paths where Starlight renders a "not translated yet" copy of a French page
const fallbackPaths = [...pages.values()].filter((p) => p.space.lang === 'fr' && written(p) && !(p.partner && written(p.partner))).map(enPath)
const privatePaths = [...new Set(privatePages.flatMap((p) => [p.url, enPath(p)]))]
fs.writeFileSync(path.join(SITE, 'src/private.generated.mjs'), `// generated by scripts/gitbook/convert.mjs
/** Private customer pages (French path and the English fallback path). */
export const privatePaths = ${JSON.stringify(privatePaths, null, 2)}
/** Their titles, used to drop them from llms-full.txt. */
export const privateTitles = ${JSON.stringify(privatePages.map((p) => p.title), null, 2)}
/** English paths that only show a French page with a "not translated yet" notice. */
export const fallbackPaths = ${JSON.stringify(fallbackPaths, null, 2)}
`)
// Netlify headers: noindex at the HTTP level too, which also covers each page's .md copy
fs.writeFileSync(path.join(SITE, 'public/_headers'), [
  '# Generated by scripts/gitbook/convert.mjs. Private customer pages: never indexed (HTML and .md).',
  ...privatePaths.flatMap((u) => [u, `${u}.md`].flatMap((x) => [x, '  X-Robots-Tag: noindex'])),
  '',
].join('\n'))

// ---------- Netlify _redirects: every old GitBook URL to its page's new path ----------
const rules = { fr: [], frHistory: [], en: [], enHistory: [] }
const pathOf = (p) => landing(p, p?.space.lang)?.url ?? null
// a home that forwards to the newest entry changes target with each release: temporary redirect
const code = (p) => (p?.redirectTo ? '302' : '301')
const enHost = `https://${cfg.langs.en.oldHost}`
const site = `https://${cfg.host}`
for (const p of oldIndex.fr.values()) {
  const to = pathOf(p)
  if (to && to !== p.oldUrl) rules.fr.push(`${p.oldUrl} ${to} ${code(p)}`)
}
for (const [from, to] of history.fr) {
  const target = pathOf(oldIndex.fr.get(to))
  if (target && !oldIndex.fr.has(from) && from !== target) rules.frHistory.push(`${from} ${target} 301`)
}
for (const p of oldIndex.en.values()) {
  const to = pathOf(p)
  if (to) rules.en.push(`${enHost}${p.oldUrl === '/' ? '/' : p.oldUrl} ${site}${to} ${code(p)}!`)
}
for (const [from, to] of history.en) {
  const target = pathOf(oldIndex.en.get(to))
  if (target && !oldIndex.en.has(from)) rules.enHistory.push(`${enHost}${from} ${site}${target} 301!`)
}
// the English home of a forwarding section (/en/changelog) has no page either
for (const p of pages.values()) {
  if (p.redirectTo && p.space.lang === 'en' && written(p.redirectTo)) rules.en.push(`${localePrefix('en')}${p.canonical} ${p.redirectTo.url} 302`)
}
// a French URL that is now another page's path must not be redirected
const livePaths = new Set(byUrl.keys())
rules.fr = rules.fr.filter((r) => !livePaths.has(r.split(' ')[0]))
rules.frHistory = rules.frHistory.filter((r) => !livePaths.has(r.split(' ')[0]))
fs.writeFileSync(path.join(SITE, 'public/_redirects'), [
  '# Generated by scripts/gitbook/convert.mjs. GitBook URLs -> shared English paths.',
  '', `# support.braver.net: French pages moved from French to English paths (${rules.fr.length})`, ...rules.fr,
  '', `# support.braver.net: older French URLs from GitBook history (${rules.frHistory.length})`, ...rules.frHistory,
  '', `# support-en.braver.net: English pages now live under /en on support.braver.net (${rules.en.length})`, ...rules.en,
  '', `# support-en.braver.net: older English URLs from GitBook history (${rules.enHistory.length})`, ...rules.enHistory,
  `${enHost}/* ${site}/en/:splat 301!`, '',
].join('\n'))

const count = (lang) => [...pages.values()].filter((p) => p.space.lang === lang && written(p)).length
console.log(JSON.stringify({
  pagesWritten: writtenCount, fr: count('fr'), en: count('en'),
  paired: [...pages.values()].filter((p) => p.space.lang === 'en' && p.partner && written(p)).length,
  frOnly: [...pages.values()].filter((p) => p.space.lang === 'fr' && !(p.partner && written(p.partner))).length,
  enOnly: [...pages.values()].filter((p) => p.space.lang === 'en' && !p.partner && written(p)).map((p) => p.oldUrl),
  includes: doneIncludes.size,
  redirects: Object.fromEntries(Object.entries(rules).map(([k, v]) => [k, v.length])),
  pairing: log.pairing, missingSummary: log.missingSummary, unknownGitbook: [...new Set(log.unknownGitbook)],
  brokenLinks: [...new Set(log.brokenLinks)], warnings: log.warnings,
}, null, 2))
