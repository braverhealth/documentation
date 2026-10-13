// Route-data adjustments shared by every page.
import { defineRouteMiddleware } from '@astrojs/starlight/route-data'
import { counterpartId, hasPage, pathOf, visibleIn } from './translations'

export const onRequest = defineRouteMiddleware(async (context) => {
  const route = context.locals.starlightRoute
  const origin = context.site?.origin

  // Canonical, og:url and hreflang come from the emitted file path (`page.html`); publish the served URL (`/page`).
  if (origin) {
    for (const tag of route.head) {
      for (const key of ['href', 'content'] as const) {
        const value = tag.attrs?.[key]
        if (typeof value === 'string' && value.startsWith(origin)) {
          tag.attrs![key] = value.replace(/\/index\.html$/, '/').replace(/\.html$/, '')
        }
      }
    }
  }

  // language facet for the Typesense DocSearch scraper
  route.head.push({ tag: 'meta', attrs: { name: 'docsearch:language', content: route.lang.toLowerCase().startsWith('en') ? 'en' : 'fr' } })

  if (route.isFallback) {
    // A page not translated yet: Starlight shows the French text. Keep it out of search and search engines,
    // and point its canonical at the French page. (The entry is shared with the French route, so copy it.)
    route.entry = { ...route.entry, data: { ...route.entry.data, pagefind: false } }
    const french = origin && new URL(pathOf(counterpartId(route.id, undefined)), origin).href
    route.head = route.head.filter((t) => !(t.tag === 'link' && (t.attrs?.rel === 'canonical' || t.attrs?.rel === 'alternate')))
    route.head.push({ tag: 'meta', attrs: { name: 'robots', content: 'noindex' } })
    if (french) route.head.push({ tag: 'link', attrs: { rel: 'canonical', href: french } })
  } else {
    // hreflang alternates only for translations that exist
    const keep = await Promise.all(
      route.head.map(async (t) => {
        if (t.tag !== 'link' || t.attrs?.rel !== 'alternate' || typeof t.attrs.hreflang !== 'string') return true
        const locale = t.attrs.hreflang.toLowerCase().startsWith('en') ? 'en' : undefined
        return hasPage(counterpartId(route.id, locale))
      }),
    )
    route.head = route.head.filter((_, i) => keep[i])
  }

  // Previous/next follow the sidebar the reader sees: skip pages that don't exist in this language.
  type Entry = (typeof route.sidebar)[number]
  type Link = Extract<Entry, { type: 'link' }>
  const flat = (entries: Entry[]): Link[] => entries.flatMap((e) => (e.type === 'link' ? [e] : flat(e.entries)))
  const links = flat(route.sidebar)
  const at = links.findIndex((l) => l.isCurrent)
  if (at >= 0) {
    const seen = (l: Link) => visibleIn(l.attrs, route.locale)
    const { prev, next } = route.entry.data
    if (prev === undefined || prev === true) route.pagination.prev = links.slice(0, at).reverse().find(seen)
    if (next === undefined || next === true) route.pagination.next = links.slice(at + 1).find(seen)
  }

  // Like GitBook, no "On this page" box when the page has no headings (only Starlight's overview entry).
  if (route.toc && route.toc.items.length <= 1 && !route.toc.items[0]?.children.length) route.toc = undefined
})
