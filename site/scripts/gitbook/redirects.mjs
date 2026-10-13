// Rebuild GitBook's server-side redirect history as a Netlify `_redirects` file.
// Usage: node redirects.mjs <repo-dir> <site-config.json> <out-file> [ref=origin/main]
//
// Walks the first-parent history of <ref>, tracks each page's identity across
// renames, computes every URL each page was published at (same SUMMARY.md rule
// as convert.mjs), and redirects every past URL to the page's current URL.
import fs from 'node:fs'
import path from 'node:path'
import { execFileSync } from 'node:child_process'

const [REPO, CONFIG, OUT, REF = 'origin/main'] = process.argv.slice(2)
const cfg = JSON.parse(fs.readFileSync(CONFIG, 'utf8'))
const posix = path.posix
const git = (...args) => execFileSync('git', ['-C', REPO, ...args], { encoding: 'utf8', maxBuffer: 1 << 28, stdio: ['ignore', 'pipe', 'pipe'] })

// ---------- URL rule (kept identical to convert.mjs) ----------
const decodeEntities = (s) => s.replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16))).replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(+d)).replace(/&amp;/g, '&')
const safeDecode = (s) => { s = decodeEntities(s); try { return decodeURI(s) } catch { return s } }
const gitbookSlug = (t) => t.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9.]+/g, '-').replace(/^-|-$/g, '')
const pageUrl = (space, rel) => {
  let p = rel.replace(/\.md$/, '').replace(/(^|\/)README$/i, '')
  p = [space.prefix, p].filter(Boolean).join('/')
  return '/' + p.toLowerCase()
}
function parseSummary(text) {
  const groups = [{ label: null, items: [] }]
  const stack = []
  for (const line of text.split('\n')) {
    const g = line.match(/^## (.+)$/)
    if (g) { groups.push({ label: g[1].trim(), items: [] }); stack.length = 0; continue }
    if (/^\*\*\*\s*$/.test(line)) { groups.push({ label: null, items: [] }); stack.length = 0; continue }
    // old SUMMARY.md files use `-` bullets; convert.mjs only needs `*` (HEAD)
    const it = line.match(/^(\s*)[*-] \[(.*)\]\((.+)\)\s*$/)
    if (!it) continue
    const depth = Math.floor(it[1].length / 2)
    const node = { label: it[2], rel: safeDecode(it[3]), children: [] }
    stack.length = depth
    if (depth === 0) groups.at(-1).items.push(node)
    else if (stack[depth - 1]) stack[depth - 1].children.push(node)
    else groups.at(-1).items.push(node) // malformed indent in an old SUMMARY: treat as top level
    stack[depth] = node
  }
  return groups.filter((g) => g.label || g.items.length)
}
// rel (space-relative) -> url, for one SUMMARY.md text
function summaryUrls(space, text) {
  const groups = parseSummary(text)
  const urls = new Map([['README.md', pageUrl(space, 'README.md')]])
  const slugOf = (rel) => /(^|\/)README\.md$/i.test(rel) ? posix.basename(posix.dirname(rel)) : posix.basename(rel, '.md')
  const walk = (items, base) => items.forEach((n) => {
    if (n.rel === 'README.md') return walk(n.children, base)
    const segs = [...base, slugOf(n.rel)]
    if (!urls.has(n.rel)) urls.set(n.rel, '/' + segs.filter(Boolean).join('/').toLowerCase())
    walk(n.children, segs)
  })
  for (const g of groups) walk(g.items, [space.prefix, g.label && gitbookSlug(g.label)])
  return urls
}

// rel -> tree position ("<group>/<i>/<j>…"), to spot a page replaced in place by a new file
function summaryPositions(text) {
  const pos = new Map()
  const walk = (items, key) => items.forEach((n, i) => { if (!pos.has(n.rel)) pos.set(n.rel, `${key}/${i}`); walk(n.children, `${key}/${i}`) })
  parseSummary(text).forEach((g, gi) => walk(g.items, g.label ?? `#${gi}`))
  return pos
}

// ---------- page identity across renames ----------
const idOf = new Map() // repo path -> id
const lastPath = new Map() // id -> last repo path
const born = new Map() // id -> commit index of creation
const firstPath = new Map() // id -> repo path at creation
const died = new Map() // id -> commit index of deletion
let nextId = 0, curIdx = 0
const addPath = (p) => { const id = nextId++; idOf.set(p, id); lastPath.set(id, p); born.set(id, curIdx); firstPath.set(id, p); return id }
const lookup = (p) => {
  if (idOf.has(p)) return idOf.get(p)
  const lower = p.toLowerCase()
  for (const [k, v] of idOf) if (k.toLowerCase() === lower) return v
  return undefined
}

const spaceOf = new Map(cfg.spaces.map((s) => [s.dir, s]))
const history = new Map() // url -> { id, idx, space }
const navIn = new Map() // id -> commit index it first appeared in a SUMMARY.md
const navOut = new Map() // id -> commit index it last left a SUMMARY.md
const prevNav = new Map() // space dir -> ids in its previous SUMMARY.md state
const prevPos = new Map() // space dir -> Map(id -> tree position) in its previous state
const successor = new Map() // id -> id of the file that replaced it in place
const raw = git('log', '--first-parent', '--diff-merges=first-parent', '-M', '--name-status', '-z', '--reverse', '--pretty=format:%x01%H', REF)
const commits = raw.split('\x01').filter(Boolean)
const stats = { commits: commits.length, summaryStates: 0, renames: 0 }
const shas = []

commits.forEach((chunk, idx) => {
  curIdx = idx
  const nl = chunk.indexOf('\n')
  const sha = nl < 0 ? chunk.trim() : chunk.slice(0, nl)
  shas[idx] = sha
  const toks = nl < 0 ? [] : chunk.slice(nl + 1).split('\0').filter((t) => t !== '')
  const touched = new Set()
  for (let i = 0; i < toks.length;) {
    const st = toks[i++]
    if (st[0] === 'R') {
      const [from, to] = [toks[i++], toks[i++]]
      const id = idOf.get(from) ?? addPath(from)
      idOf.delete(from); idOf.set(to, id); lastPath.set(id, to); stats.renames++
      touched.add(from.split('/')[0]); touched.add(to.split('/')[0])
    } else if (st[0] === 'C') {
      i++; addPath(toks[i++]); touched.add(toks[i - 1].split('/')[0])
    } else {
      const p = toks[i++]
      if (st[0] === 'A') { if (!idOf.has(p)) addPath(p) }
      else if (st[0] === 'D') { if (idOf.has(p)) died.set(idOf.get(p), idx); idOf.delete(p) }
      else if (!idOf.has(p)) addPath(p) // M/T on a path first seen mid-history
      touched.add(p.split('/')[0])
    }
  }
  for (const dir of touched) {
    const space = spaceOf.get(dir)
    if (!space) continue
    let text
    try { text = git('show', `${sha}:${dir}/SUMMARY.md`) } catch { continue }
    stats.summaryStates++
    const nav = new Set()
    const posOf = new Map()
    const positions = summaryPositions(text)
    for (const [rel, url] of summaryUrls(space, text)) {
      const id = lookup(`${dir}/${rel}`)
      if (id === undefined) continue
      nav.add(id)
      if (positions.has(rel)) posOf.set(id, positions.get(rel))
      if (!navIn.has(id)) navIn.set(id, idx)
      history.set(url, { id, idx, space: dir }) // later holders of a URL win
    }
    const entered = [...nav].filter((id) => !(prevNav.get(dir) ?? new Set()).has(id))
    for (const id of prevNav.get(dir) ?? []) {
      if (nav.has(id)) continue
      navOut.set(id, idx)
      // GitBook renames that change most of the content arrive as delete + add in one commit:
      // a file created at the exact tree position a deleted file left is the same page
      const key = prevPos.get(dir)?.get(id)
      const twin = key && died.get(id) === idx && entered.find((e) => posOf.get(e) === key && born.get(e) === idx)
      if (twin !== undefined) successor.set(id, twin)
    }
    prevNav.set(dir, nav)
    prevPos.set(dir, posOf)
  }
})

// ---------- current state at REF ----------
const currentUrl = new Map() // id -> url
const currentSpace = new Map() // id -> space dir
const currentUrls = new Set()
const alias = new Map() // url -> { to, kind }  (rules GitBook derives from the current structure)
const addAlias = (from, to, kind) => { if (from !== to && !alias.has(from)) alias.set(from, { to, kind }) }
for (const space of cfg.spaces) {
  const text = git('show', `${REF}:${space.dir}/SUMMARY.md`)
  const urls = summaryUrls(space, text)
  for (const [rel, url] of urls) {
    currentUrls.add(url)
    const id = lookup(`${space.dir}/${rel}`)
    if (id !== undefined && !currentUrl.has(id)) { currentUrl.set(id, url); currentSpace.set(id, space.dir) }
  }
  for (const g of parseSummary(text)) {
    const base = [space.prefix, g.label && gitbookSlug(g.label)].filter(Boolean)
    // a group heading has a URL of its own that GitBook sends to the group's first page
    if (g.label && g.items[0]) addAlias('/' + base.join('/'), urls.get(g.items[0].rel), 'group')
    // the space's root README is also reachable at <group path>/readme
    if (g.items.some((n) => n.rel === 'README.md')) addAlias('/' + [...base, 'readme'].join('/'), urls.get('README.md'), 'readme')
  }
  if (!parseSummary(text).some((g) => g.items.some((n) => n.rel === 'README.md'))) addAlias('/' + [space.prefix, 'readme'].filter(Boolean).join('/'), urls.get('README.md'), 'readme')
  // GitBook also answers a page's file path (README -> its folder) with a redirect to the page
  for (const [rel, url] of urls) addAlias(pageUrl(space, rel), url, 'filepath')
}

// precedence when one old URL has several candidates: current structure (group, readme) > history > file path
const byName = new Map() // `${space}/${file name}` -> current id, or 'ambiguous'
for (const [id, url] of currentUrl) {
  const p = lastPath.get(id), k = `${currentSpace.get(id)}/${posix.basename(p)}`
  if (posix.basename(p).toLowerCase() === 'readme.md') continue
  byName.set(k, byName.has(k) ? 'ambiguous' : id)
}
const resolve = (id) => { const seen = new Set(); while (successor.has(id) && !seen.has(id)) { seen.add(id); id = successor.get(id) } return id }
const rules = new Map() // from -> { to, kind }
const gone = []
const conflicts = []
for (const [from, a] of alias) if (a.kind !== 'filepath' && !currentUrls.has(from)) rules.set(from, a)
for (const [url, h] of history) {
  if (currentUrls.has(url)) continue
  const cur = currentUrl.has(h.id) ? h.id : resolve(h.id)
  const to = currentUrl.get(cur)
  const replaced = cur !== h.id && to !== undefined
  if (rules.has(url)) { if (to && rules.get(url).to !== to) conflicts.push([url, rules.get(url).to, to, 'history']); continue }
  // GitBook drops a page's URLs when it moves to another space (live answers 404); we recover them
  if (to) rules.set(url, { to, kind: currentSpace.get(cur) !== h.space ? 'cross' : replaced ? 'replaced' : 'history' })
  else if (alias.has(url)) continue
  else {
    // GitBook sometimes moves a page by writing a new file and leaving the old one for a later commit,
    // which breaks rename tracking: take the one current page in the same space with the same file name
    // that entered SUMMARY.md in the very commit the old entry left it
    const last = lastPath.get(h.id)
    const twin = byName.get(`${h.space}/${posix.basename(last)}`)
    const copied = twin !== undefined && twin !== 'ambiguous' && navIn.get(twin) !== undefined && navIn.get(twin) === navOut.get(h.id)
    if (copied) rules.set(url, { to: currentUrl.get(twin), kind: 'samename' })
    else gone.push([url, last])
  }
}
for (const [from, a] of alias) {
  if (a.kind !== 'filepath' || currentUrls.has(from)) continue
  if (rules.has(from)) { if (rules.get(from).to !== a.to) conflicts.push([from, rules.get(from).to, a.to, 'filepath']); continue }
  rules.set(from, a)
}
gone.sort(([a], [b]) => a.localeCompare(b))

const kinds = ['history', 'replaced', 'samename', 'cross', 'filepath', 'group', 'readme']
const title = {
  history: 'Past URLs -> current URL of the same page (tracked across renames)',
  replaced: 'Past URLs of pages GitBook replaced in place (new file at the same SUMMARY.md position, same commit)',
  samename: 'Past URLs of files copied to a new path then deleted -> the copy (same space, same file name)',
  cross: 'Past URLs of pages that moved to another space (GitBook 404s these today; recovered here)',
  filepath: "Page file paths -> page URL (GitBook answers a page's file path)",
  group: "Group headings -> the group's first page",
  readme: 'Root README alias -> space root',
}
const out = [`# Generated by redirects.mjs from ${REF} (${commits.length} first-parent commits) for ${cfg.host}.`, '']
for (const k of kinds) {
  const rs = [...rules].filter(([, r]) => r.kind === k).sort(([a], [b]) => a.localeCompare(b))
  out.push(`# ${title[k]} (${rs.length})`, ...rs.map(([a, r]) => `${a} ${r.to} 301`), '')
}
out.push(`# Past URLs whose page was deleted or dropped from SUMMARY.md (${gone.length}); not redirected.`,
  ...gone.map(([a, p]) => `# ${a}    (last file: ${p})`), '')
if (conflicts.length) out.push(`# Conflicts: kept first target (${conflicts.length})`, ...conflicts.map(([u, kept, other, k]) => `# ${u} kept ${kept}, dropped ${k} ${other}`), '')
fs.writeFileSync(OUT, out.join('\n'))
const count = Object.fromEntries(kinds.map((k) => [k, [...rules.values()].filter((r) => r.kind === k).length]))
console.log(JSON.stringify({ site: cfg.host, ...stats, historicalUrls: history.size, current: currentUrls.size, rules: rules.size, ...count, gone: gone.length, conflicts: conflicts.length }))
