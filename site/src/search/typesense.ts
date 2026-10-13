// Typesense DocSearch client options (starlight-docsearch-typesense `clientOptionsModule`).
// Runs in the browser: values come from PUBLIC_* environment variables inlined at build time.
// The search-only API key is meant to be public; never put the admin key here.
import type { DocSearchClientOptions } from 'starlight-docsearch-typesense'

const env = import.meta.env
// Results stay in the reader's language (pages carry <meta name="docsearch:language">).
const language = typeof document !== 'undefined' && document.documentElement.lang.toLowerCase().startsWith('en') ? 'en' : 'fr'

export default {
  typesenseCollectionName: env.PUBLIC_TYPESENSE_COLLECTION,
  typesenseServerConfig: {
    apiKey: env.PUBLIC_TYPESENSE_SEARCH_KEY,
    nodes: [
      {
        host: env.PUBLIC_TYPESENSE_HOST,
        port: Number(env.PUBLIC_TYPESENSE_PORT ?? 443),
        protocol: (env.PUBLIC_TYPESENSE_PROTOCOL ?? 'https') as 'https' | 'http',
      },
    ],
  },
  typesenseSearchParameters: { filter_by: `language:=${language}` },
} satisfies DocSearchClientOptions
