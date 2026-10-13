import { defineCollection } from 'astro:content'
import { z } from 'astro/zod'
import { docsLoader } from '@astrojs/starlight/loaders'
import { docsSchema } from '@astrojs/starlight/schema'

// Keep the converter's paths verbatim (dots included: /changelog/1.10/version-1.10.0).
// French pages live at docs/<path>, English pages at docs/en/<path>.
const generateId = ({ entry }: { entry: string }) => {
  const id = entry.replace(/\.mdx?$/, '').toLowerCase()
  return id === 'index' ? id : id.replace(/\/index$/, '')
}

export const collections = {
  docs: defineCollection({
    loader: docsLoader({ generateId }),
    schema: docsSchema({
      extend: ({ image }) =>
        z.object({
          /** Lucide icon name shown before the title (and in the sidebar). */
          icon: z.string().optional(),
          /** Banner image above the title (GitBook page cover). */
          cover: image().optional(),
          coverY: z.number().optional(),
          hideTitle: z.boolean().optional(),
          hideDescription: z.boolean().optional(),
        }),
    }),
  }),
}
