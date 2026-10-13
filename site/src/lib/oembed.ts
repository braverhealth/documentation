// Build-time oEmbed lookups (one request per URL per build). Failures fall back to defaults.
export interface OEmbed {
  width?: number
  height?: number
  title?: string
  duration?: number
  thumbnail_url?: string
}

const cache = new Map<string, Promise<OEmbed | undefined>>()

export function oembed(endpoint: string, url: string): Promise<OEmbed | undefined> {
  const key = `${endpoint}?url=${encodeURIComponent(url)}`
  if (!cache.has(key)) {
    cache.set(
      key,
      fetch(key, { signal: AbortSignal.timeout(10_000) })
        .then((r) => (r.ok ? (r.json() as Promise<OEmbed>) : undefined))
        .catch(() => undefined),
    )
  }
  return cache.get(key)!
}
