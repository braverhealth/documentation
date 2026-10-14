// Manual sidebar adjustments, applied on top of sidebar.generated.mjs by astro.config.mjs.
// Kept separate so they survive scripts/gitbook/convert.mjs regenerating the sidebar.
// Each key is the link of a generated leaf; the leaf is replaced by the given item (e.g. a group).

const trajectory = '/guides/for-administrators/modules/create-trajectory'

const overrides = {
  [trajectory]: {
    label: 'Créer une trajectoire',
    collapsed: true,
    items: [
      { label: 'Créer une trajectoire', link: trajectory, attrs: { 'data-self': '', 'data-only': 'fr' } },
      { label: 'Configurer les acteurs', link: `${trajectory}/configure-actors`, attrs: { 'data-only': 'fr' } },
      { label: 'Créer des modèles de fil', link: `${trajectory}/create-thread-templates`, attrs: { 'data-only': 'fr' } },
      { label: 'Configurer la suggestion automatique', link: `${trajectory}/configure-automatic-suggestion`, attrs: { 'data-only': 'fr' } },
    ],
  },
}

const apply = (items) => items.map((item) => {
  if (item.items) return { ...item, items: apply(item.items) }
  if (item.link && overrides[item.link]) return overrides[item.link]
  return item
})

export const applySidebarOverrides = (topics) => apply(topics)
