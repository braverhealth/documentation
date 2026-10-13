# Typesense search

Search switches from the built-in Pagefind index to Typesense when these build environment variables are set
(Netlify: Site configuration -> Environment variables):

| Variable | Value |
|---|---|
| `PUBLIC_TYPESENSE_HOST` | e.g. `xxx.a1.typesense.net` |
| `PUBLIC_TYPESENSE_SEARCH_KEY` | a **search-only** API key (it is sent to browsers) |
| `PUBLIC_TYPESENSE_COLLECTION` | `braver-help` (must match `index_name` below) |
| `PUBLIC_TYPESENSE_PORT` / `PUBLIC_TYPESENSE_PROTOCOL` | optional, default `443` / `https` |

The index is filled by [typesense-docsearch-scraper](https://github.com/typesense/typesense-docsearch-scraper)
with `docsearch-scraper.config.json` after each deploy. It crawls both languages; every page carries
`<meta name="docsearch:language" content="fr|en">`, which the scraper stores as `language`, and the site filters
results to the reader's language. Check the first crawl's records for that field. Run it with an **admin** key
that never reaches the site:

```sh
docker run -it --env TYPESENSE_API_KEY=<admin key> --env TYPESENSE_HOST=<host> --env TYPESENSE_PORT=443 \
  --env TYPESENSE_PROTOCOL=https --env "CONFIG=$(cat typesense/docsearch-scraper.config.json | jq -r tostring)" \
  typesense/docsearch-scraper:0.12.2
```
