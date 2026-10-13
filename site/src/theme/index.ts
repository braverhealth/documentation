// Braver theme: a local Starlight plugin built on the vendored Nova components.
import { isSatteriProcessor } from '@astrojs/markdown-satteri'
import type { StarlightPlugin } from '@astrojs/starlight/types'
import type { AstroConfig } from 'astro'
import { satteriCustomHeaderId } from 'satteri-custom-header-id'

import { gitbookSlugs } from './gitbook-slugs'
import { pruneUnreferencedImages } from './prune-originals'
import { createShikiConfig } from './nova/shiki-config'
import type { ThemeOptions } from './nova/user-options'
import { vitePluginUserConfig } from './nova/virtual-user-config'

const c = (name: string) => `./src/theme/nova/components/${name}.astro`
const components = Object.fromEntries(
  [
    'Header', 'Search', 'ThemeProvider', 'ThemeSelect', 'SocialIcons', 'SiteTitle', 'PageFrame',
    'Pagination', 'MobileMenuToggle', 'TwoColumnContent', 'MarkdownContent', 'Hero',
    'MobileTableOfContents', 'MobileMenuFooter', 'LanguageSelect',
  ].map((n) => [n, c(n)]),
)
// Braver-specific overrides
components.Sidebar = './src/theme/components/Sidebar.astro'
components.PageTitle = './src/theme/components/PageTitle.astro'
components.FallbackContentNotice = './src/theme/components/FallbackContentNotice.astro'
components.Footer = './src/theme/components/Footer.astro'

// Pages are emitted as `page.html` (build.format 'file') so Netlify serves `/page` without a trailing-slash
// redirect, but Starlight would then print every link as `/page.html`. Starlight formats links from this
// virtual module only, so we hand it the 'directory' format: links come out as `/page`.
function prettyLinks(config: AstroConfig) {
  const id = 'virtual:starlight/project-context'
  return {
    name: 'braver-pretty-links',
    enforce: 'pre' as const,
    resolveId: (source: string) => (source === id ? `\0braver:${id}` : undefined),
    load: (resolved: string) =>
      resolved === `\0braver:${id}`
        ? `export default ${JSON.stringify({ build: { format: 'directory' }, root: config.root, srcDir: config.srcDir, trailingSlash: config.trailingSlash })}`
        : undefined,
  }
}

export default function braverTheme(options: ThemeOptions & { css?: string[] } = {}): StarlightPlugin {
  return {
    name: 'braver-theme',
    hooks: {
      'config:setup': ({ config, updateConfig, addIntegration, addRouteMiddleware, astroConfig }) => {
        addRouteMiddleware({ entrypoint: './src/theme/route-middleware.ts' })
        updateConfig({
          customCss: [
            './src/theme/nova/styles/layer.css',
            './src/theme/tailwind.css',
            ...(config.customCss || []),
            './src/theme/nova/styles/styles.css',
            './src/theme/braver.css',
            ...(options.css ?? []),
          ],
          components: Object.fromEntries(
            Object.entries({ ...components, ...config.components }).filter(([name]) => !(name === 'Search' && options.search === 'typesense')),
          ),
          expressiveCode: config.expressiveCode ?? false,
        })
        addIntegration({
          name: 'braver-theme-integration',
          hooks: {
            'astro:build:done': ({ dir, logger }) => pruneUnreferencedImages(dir, logger),
            'astro:config:setup': ({ config, updateConfig }) => {
              updateConfig({
                markdown: { shikiConfig: createShikiConfig() },
                vite: {
                  plugins: [
                    vitePluginUserConfig({ links: options.links, footer: options.footer, rootHref: astroConfig.root.href }),
                    prettyLinks(config),
                  ],
                },
              })
              const processor = config.markdown.processor
              if (processor && isSatteriProcessor(processor)) {
                processor.options.hastPlugins.unshift(gitbookSlugs, satteriCustomHeaderId())
              }
            },
          },
        })
      },
    },
  }
}
