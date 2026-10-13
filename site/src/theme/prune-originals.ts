// Astro keeps the original of every image imported in MDX, although pages only use the optimised
// variants. After the build, delete image files under _astro/ that no HTML, CSS or JS file references.
import fs from 'node:fs'
import path from 'node:path'
import type { AstroIntegrationLogger } from 'astro'

const IMAGE = /\.(png|jpe?g|gif|webp|avif|svg)$/i

export function pruneUnreferencedImages(outDir: URL, logger: AstroIntegrationLogger) {
  const root = outDir.pathname
  const assetsDir = path.join(root, '_astro')
  if (!fs.existsSync(assetsDir)) return
  const referenced = new Set<string>()
  const walk = (dir: string) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name)
      if (entry.isDirectory()) walk(full)
      else if (/\.(html|css|js|xml|json)$/.test(entry.name)) {
        // HTML attributes are double-quoted and URL-encoded, so names may hold ' ( ) and commas;
        // in CSS/JS a quote or parenthesis ends the URL
        const pattern = entry.name.endsWith('.html') ? /_astro\/([^"\s?#]+)/g : /_astro\/([^"'\s?#()]+)/g
        for (const m of fs.readFileSync(full, 'utf8').matchAll(pattern)) {
          referenced.add(decodeURIComponent(m[1].replace(/,$/, '')))
        }
      }
    }
  }
  walk(root)
  let removed = 0
  let bytes = 0
  for (const name of fs.readdirSync(assetsDir)) {
    if (!IMAGE.test(name) || referenced.has(name)) continue
    const file = path.join(assetsDir, name)
    bytes += fs.statSync(file).size
    fs.rmSync(file)
    removed++
  }
  logger.info(`removed ${removed} unreferenced original images (${(bytes / 1e6).toFixed(1)} MB)`)
}
