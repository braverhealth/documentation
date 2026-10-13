// Lucide icons (same family as the Nova chrome). Page front matter uses Lucide names: `icon: plug`.
import lucide from '@iconify-json/lucide/icons.json' with { type: 'json' }

type IconSet = { icons: Record<string, { body: string }>; aliases?: Record<string, { parent: string }> }
const set = lucide as IconSet

export function iconSvg(name: string, size = 24): string | undefined {
  const icon = set.icons[name] ?? set.icons[set.aliases?.[name]?.parent ?? '']
  if (!icon) return undefined
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${size}" height="${size}" aria-hidden="true">${icon.body}</svg>`
}

/** CSS custom properties for icons used as masks (sidebar links carry `data-icon`). */
export function iconsCss(names: Iterable<string>): string {
  return [...new Set(names)]
    .sort()
    .map((n) => {
      const svg = iconSvg(n)
      if (!svg) throw new Error(`Unknown Lucide icon "${n}"`)
      return `[data-icon='${n}'] { --gb-icon: url("data:image/svg+xml,${encodeURIComponent(svg)}"); }`
    })
    .join('\n')
}
