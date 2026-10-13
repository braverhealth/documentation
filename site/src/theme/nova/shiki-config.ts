import type { ShikiConfig } from 'astro'

import { createBaseShikiConfig } from './shiki-config-base'

// Braver: twoslash removed (help-centre pages have no TypeScript samples).
export function createShikiConfig(): ShikiConfig {
  return createBaseShikiConfig()
}
