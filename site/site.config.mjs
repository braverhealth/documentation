// One site, two languages: French at /, English at /en (support-en.braver.net redirects there).
export const site = 'https://support.braver.net'

export const locales = {
  root: { label: 'Français', lang: 'fr-CA' },
  en: { label: 'English', lang: 'en-CA' },
}

export const title = { 'fr-CA': "Centre d'assistance Braver", 'en-CA': 'Braver Help Center' }

/** Header links per language (keyed by `lang`). */
export const links = {
  'fr-CA': [
    { label: 'Site Web', href: 'https://www.braver.net/' },
    {
      label: 'Aller à',
      href: 'https://app.braver.net/',
      variant: 'primary',
      items: [
        { label: 'Application Web', href: 'https://app.braver.net/' },
        { label: 'Console Administrative', href: 'https://admin.braver.net/' },
      ],
    },
  ],
  'en-CA': [
    { label: 'Website', href: 'https://www.braver.net/' },
    {
      label: 'Go to',
      href: 'https://app.braver.net/',
      variant: 'primary',
      items: [
        { label: 'Web App', href: 'https://app.braver.net/' },
        { label: 'Admin Console', href: 'https://admin.braver.net/' },
      ],
    },
  ],
}

/** Footer below every page (as on GitBook), keyed by `lang`. */
const year = new Date().getFullYear()
export const footer = {
  'fr-CA': {
    heading: 'Ressources',
    links: [
      { label: 'Politiques de confidentialité', href: 'https://www.braver.net/fr/resources/privacy-policy/' },
      { label: "Conditions générales d'utilisation", href: 'https://www.braver.net/fr/resources/tos/' },
    ],
    copyright: `© ${year} Braver`,
  },
  'en-CA': {
    heading: 'Resources',
    links: [
      { label: 'Privacy policy', href: 'https://www.braver.net/en/resources/privacy-policy/' },
      { label: 'General terms of use', href: 'https://www.braver.net/en/resources/tos/' },
    ],
    copyright: `© ${year} Braver`,
  },
}
