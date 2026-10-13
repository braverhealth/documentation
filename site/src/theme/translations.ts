// Which pages exist in which language. Pages share one path: French at /<path>, English at /en/<path>.
import { getCollection } from 'astro:content'

let ids: Promise<Set<string>> | undefined
const allIds = () => (ids ??= getCollection('docs').then((docs) => new Set(docs.map((d) => d.id))))

export const EN = 'en'
/** Content id of the same page in the other language. */
export const counterpartId = (id: string, toLocale: string | undefined) => {
  const base = id === '' || id === 'index' || id === EN ? 'index' : id.startsWith(`${EN}/`) ? id.slice(EN.length + 1) : id
  return toLocale ? (base === 'index' ? toLocale : `${toLocale}/${base}`) : base
}
export const hasPage = async (id: string) => (await allIds()).has(id)
/** Site path of a content id (French at the root). */
export const pathOf = (id: string) => (id === 'index' || id === '' ? '/' : `/${id}`)
/** `data-only` marks sidebar entries and topics that exist in one language only. */
export const visibleIn = (attrs: Record<string, unknown> | undefined, locale: string | undefined) =>
  !attrs?.['data-only'] || attrs['data-only'] === (locale ?? 'fr')
