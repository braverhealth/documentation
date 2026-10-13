// GitBook heading anchors are ASCII-folded ("Scénario 1: Ajouter" -> "scenario-1-ajouter").
// Sätteri's default slugger keeps accents, which would break every existing #anchor link.
import type { HastPluginEntry } from 'satteri'

export function gitbookSlug(text: string): string {
  let slug = text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/['’]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9.]+/g, '-')
    .replace(/^-|-$/g, '')
  if (/^[0-9]/.test(slug)) slug = `id-${slug}` // GitBook prefixes digit-leading anchors
  return slug
}

// A factory runs once per document, so duplicate tracking resets per page.
export const gitbookSlugs: HastPluginEntry = () => {
  const seen = new Map<string, number>()
  return {
    name: 'braver-gitbook-slugs',
    element: {
      filter: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      visit(node, ctx) {
        if (node.properties?.id) return
        const slug = gitbookSlug(ctx.textContent(node))
        const n = seen.get(slug) ?? 0
        seen.set(slug, n + 1)
        ctx.setProperty(node, 'id', n ? `${slug}-${n}` : slug)
      },
    },
  }
}
