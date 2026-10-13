// Keep private customer pages out of llms-full.txt (starlight-llms-txt can only exclude pages from llms-small.txt).
import fs from 'node:fs'
import path from 'node:path'
import type { AstroIntegration } from 'astro'

/** Page separator passed to starlight-llms-txt, so pages can be told apart after the build. */
export const LLMS_PAGE_SEPARATOR = '\n\n---\n\n'

export function dropPrivatePagesFromLlms(titles: string[]): AstroIntegration {
  const drop = new Set(titles.map((t) => `# ${t}`))
  return {
    name: 'braver-private-llms',
    hooks: {
      'astro:build:done': ({ dir, logger }) => {
        const file = path.join(dir.pathname, 'llms-full.txt')
        if (!fs.existsSync(file)) return
        // a page starts with "# <title>"; a segment that doesn't is a `---` rule inside the previous page
        let keep = true
        let removed = 0
        const kept = fs.readFileSync(file, 'utf8').split(LLMS_PAGE_SEPARATOR).filter((segment) => {
          if (segment.startsWith('# ')) {
            keep = !drop.has(segment.split('\n')[0])
            if (!keep) removed++
          }
          return keep
        })
        fs.writeFileSync(file, kept.join(LLMS_PAGE_SEPARATOR))
        logger.info(`removed ${removed} private pages from llms-full.txt`)
      },
    },
  }
}
