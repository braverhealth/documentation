export interface HeaderLink {
  label: string
  href: string
  /** `primary` renders as the accent-coloured button (GitBook's "Aller à →"). */
  variant?: 'plain' | 'primary'
  /** Turns the link into a menu (GitBook header link with sub-links). `href` stays the no-JS fallback. */
  items?: { label: string; href: string }[]
}

export interface SiteFooter {
  heading: string
  links: { label: string; href: string }[]
  copyright: string
}

export interface ThemeOptions {
  /** Links on the right of the header (and in the mobile menu footer), keyed by locale `lang`. */
  links?: Record<string, HeaderLink[]>
  /** Footer below every page ("Ressources" + copyright), keyed by locale `lang`. */
  footer?: Record<string, SiteFooter>
  /** `typesense` leaves the Search component to starlight-docsearch-typesense; default keeps Nova's Pagefind search. */
  search?: 'pagefind' | 'typesense'
}

/**
 * @internal
 */
export interface ConfigSerialized extends ThemeOptions {
  rootHref: string
}
