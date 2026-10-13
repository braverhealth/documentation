// Build the FR<->EN page map: every SUMMARY entry of both languages with its URL, label and partner.
// Usage: node pairmap.mjs <src-content> <repo> > pairmap.json
import fs from 'node:fs'
import path from 'node:path'
import { execFileSync } from 'node:child_process'
const [SRC, REPO] = process.argv.slice(2)
const posix = path.posix
const SPACES = [
  { fr: 'documentation-fr', en: 'documentation-en', prefix: '' },
  { fr: 'guides-fr', en: 'guides-en', prefix: 'guides' },
  { fr: 'formations-fr', en: 'formations-en', prefix: 'training' },
  { fr: 'changelog', en: 'changelog-en', prefix: 'changelog' },
]
const safeDecode = (s) => { try { return decodeURI(s) } catch { return s } }
const gitbookSlug = (t) => t.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9.]+/g, '-').replace(/^-|-$/g, '')
function parseSummary(dir) {
  const text = fs.readFileSync(path.join(SRC, dir, 'SUMMARY.md'), 'utf8')
  const groups = [{ label: null, items: [] }]; const stack = []
  for (const line of text.split('\n')) {
    const g = line.match(/^## (.+)$/)
    if (g) { groups.push({ label: g[1].trim(), items: [] }); stack.length = 0; continue }
    if (/^\*\*\*\s*$/.test(line)) { groups.push({ label: null, items: [] }); stack.length = 0; continue }
    const it = line.match(/^(\s*)[*-] \[(.*)\]\((.+)\)\s*$/)
    if (!it) continue
    const depth = Math.floor(it[1].length / 2)
    const node = { label: it[2], rel: safeDecode(it[3]), children: [] }
    stack.length = depth
    if (depth === 0) groups.at(-1).items.push(node); else stack[depth - 1].children.push(node)
    stack[depth] = node
  }
  return groups.filter((g) => g.label || g.items.length)
}
function index(dir, prefix) {
  const out = new Map()
  const slugOf = (rel) => /(^|\/)README\.md$/i.test(rel) ? posix.basename(posix.dirname(rel)) : posix.basename(rel, '.md')
  const groups = parseSummary(dir)
  out.set('README.md', { rel: 'README.md', url: '/' + prefix, label: null, group: null, parent: null, segs: [prefix] })
  groups.forEach((g, gi) => {
    const walk = (items, base, parent) => items.forEach((n) => {
      if (n.rel === 'README.md') return walk(n.children, base, parent)
      const segs = [...base, slugOf(n.rel)]
      out.set(n.rel, { rel: n.rel, url: '/' + segs.filter(Boolean).join('/').toLowerCase(), label: n.label, group: g.label, groupIndex: gi, parent, segs, hasChildren: n.children.length > 0 })
      walk(n.children, segs, n.rel)
    })
    walk(g.items, [prefix, g.label && gitbookSlug(g.label)], null)
  })
  return out
}
// EN file -> FR file through rename history of both languages
const fwd = {}
for (const line of execFileSync('git', ['-C', REPO, 'log', '--reverse', '-M', '--name-status', '--format=', 'origin/main', '--', ...SPACES.map((s) => s.fr)], { encoding: 'utf8', maxBuffer: 1 << 28 }).split('\n')) {
  const p = line.split('\t'); if (p.length === 3 && p[0].startsWith('R')) fwd[p[1]] = p[2]
}
const resolve = (p) => { for (let i = 0; i < 60 && fwd[p]; i++) p = fwd[p]; return p }
const result = []
for (const s of SPACES) {
  const fr = index(s.fr, s.prefix), en = index(s.en, s.prefix)
  const frByRel = new Set(fr.keys())
  const enToFr = new Map()
  for (const rel of en.keys()) {
    if (s.fr === 'changelog' && frByRel.has(rel)) { enToFr.set(rel, rel); continue }
    if (rel === 'README.md') { enToFr.set(rel, 'README.md'); continue }
    const names = execFileSync('git', ['-C', REPO, 'log', '--follow', '--name-only', '--format=', 'origin/main', '--', `${s.en}/${rel}`], { encoding: 'utf8' }).split('\n').filter(Boolean)
    for (const n of names.reverse()) {
      const [sp, ...rest] = n.split('/')
      const cand = resolve([sp.replace(/-en$/, '-fr').replace(/^changelog-en$/, 'changelog'), ...rest].join('/'))
      const frRel = cand.slice(s.fr.length + 1)
      if (cand.startsWith(s.fr + '/') && frByRel.has(frRel)) { enToFr.set(rel, frRel); break }
    }
  }
  result.push({ ...s, fr: [...fr.values()], en: [...en.values()].map((e) => ({ ...e, frRel: enToFr.get(e.rel) ?? null })) })
}
// forward renames of every page file (both languages), to repair links to files renamed long ago
const renames = {}
for (const line of execFileSync('git', ['-C', REPO, 'log', '--reverse', '-M', '--name-status', '--format=', 'origin/main', '--', ...SPACES.flatMap((s) => [s.fr, s.en])], { encoding: 'utf8', maxBuffer: 1 << 28 }).split('\n')) {
  const p = line.split('\t'); if (p.length === 3 && p[0].startsWith('R') && p[1].endsWith('.md')) renames[p[1]] = p[2]
}
console.log(JSON.stringify({ sections: result, renames }, null, 1))
