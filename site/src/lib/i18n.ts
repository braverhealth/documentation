// UI strings for our own components (Starlight's strings cover the rest).
const strings = {
  fr: {
    download: 'Télécharger',
    open: 'Ouvrir',
    playVideo: 'Lire la vidéo',
    openIn: (host: string) => `Ouvrir dans ${host}`,
    file: 'Fichier',
  },
  en: {
    download: 'Download',
    open: 'Open',
    playVideo: 'Play video',
    openIn: (host: string) => `Open in ${host}`,
    file: 'File',
  },
}

/** Page language. Starlight's `starlightRoute` getter throws outside a page (e.g. when starlight-llms-txt renders an entry). */
export const pageLang = (astro: { locals: App.Locals }): string => {
  try {
    return astro.locals.starlightRoute.lang
  } catch {
    return 'fr-CA'
  }
}

export const ui = (astro: { locals: App.Locals }) => strings[pageLang(astro).startsWith('fr') ? 'fr' : 'en']
