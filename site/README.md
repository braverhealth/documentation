# Braver help centre (Starlight)

One site, two languages, deployed on Netlify (base directory `site`):

- French at `support.braver.net/<path>`, English at `support.braver.net/en/<path>`.
- Both languages share the same English path, so the language switch, `hreflang` and Starlight's "not translated yet" pages work.
- `support-en.braver.net` is a domain alias of the same Netlify site; `public/_redirects` sends its URLs to `/en/...`.
- Old French URLs (French paths) redirect to the English paths.
- No trailing slash (`build.format: 'file'`); heading anchors are ASCII-only, like GitBook's.

## Layout

- `site.config.mjs`: languages, titles, header links.
- `src/content/docs/`: French pages. `src/content/docs/en/`: English pages at the same paths.
- [English screenshot ledger](english-screenshot-ledger.md): English pages that still show French UI images, with review status and source links.
- `src/sidebar.generated.mjs`: navigation (sections = header tabs). English labels sit in `translations`; entries tagged `data-only` exist in one language and are hidden in the other.
- `src/theme/`: the theme, started from [starlight-theme-nova](https://github.com/ocavue/starlight-theme-nova) 0.12.3 and now owned here (`nova/NOTICE.md`). `braver.css` holds the brand layer.
- `src/components/`: content components used in MDX.
  - `Figure`: screenshots at GitBook's display width, optimised.
  - `Embed`: Loom/YouTube (click-to-play preview), Pitch, Typeform, Vimeo; anything else becomes a link card.
  - `FileCard`: downloads, with an inline preview for PDFs.
  - `Video`: self-hosted video files.
  - `cards/`: GitBook card grids with cover images.

## Plugins

- [starlight-llms-txt](https://github.com/delucis/starlight-llms-txt): `/llms.txt`, `/llms-full.txt`, `/llms-small.txt` and per-section sets under `/_llms-txt/`. French only (the plugin reads the default language).
- [starlight-md-txt](https://github.com/max-ostapenko/starlight-md-txt): every page as Markdown at `<page>.md`, like GitBook's (the home page is `/.md`).
- [starlight-docsearch-typesense](https://github.com/typesense/starlight-docsearch-typesense): search through Typesense when the `PUBLIC_TYPESENSE_*` variables are set; Pagefind otherwise. See `typesense/README.md`.

## Private pages

Sections listed in `privateGroups` (`scripts/gitbook/site.json`, today "Pages privées") are reachable by direct link only:
hidden from the sidebar, `noindex` (meta tag and an `X-Robots-Tag` header in `public/_headers`, which also covers `.md` copies),
out of site search, the sitemap, all `llms*.txt` files and the Typesense crawl. The lists live in `src/private.generated.mjs`.

## Page front matter

Starlight's keys plus `icon` (a [Lucide](https://lucide.dev/icons) name), `cover`, `coverY`, `hideTitle` and `hideDescription`.

## Local development

```sh
pnpm install
pnpm dev        # or: pnpm build && pnpm preview
```

## Migration scripts

The pages in `src/content/docs` are generated from the GitBook Git Sync folders at the root of this repo.
While GitBook is still the editing tool, refresh them with (from `site/`):

```sh
scripts/gitbook/migrate.sh .. origin/main
```
The French/English page map is reviewable data in `scripts/gitbook/i18n-map/`:

- `pairs.json`: English page -> French page, overriding the git-history matches.
- `slugs.json`: English slugs for French-only pages.
- `groups.json`: English names for French-only sidebar sections.

`linkcheck.py`, `assetcheck.py` and `redirect-sim.py` check a built `dist/`.
