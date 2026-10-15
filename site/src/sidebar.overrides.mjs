// Manual sidebar adjustments, applied on top of sidebar.generated.mjs by astro.config.mjs.
// Kept separate so they survive scripts/gitbook/convert.mjs regenerating the sidebar.
// - `overrides`: each key is the link of a generated leaf; the leaf is replaced by the given item (e.g. a group).
// - `translated`: English labels for pages translated directly in the site (src/content/docs/en/...).
//   The matching generated leaves get `translations` and lose their `data-only: fr` flag; a group whose
//   own page (`data-self`) is listed gets the same English label.

const en = (label) => ({ en: label, 'en-CA': label })

const trajectory = '/guides/for-administrators/modules/create-trajectory'
const android = '/technical-details/compatibility/android-specific-settings'

const translated = {
  // Documentation
  '/for-administrators/organization': 'Organization',
  [android]: 'Android-Specific Settings',
  [`${android}/global-power-and-data-saving-mode`]: 'Global Power and Data Saving Mode',
  [`${android}/individual-battery-and-data-restrictions`]: 'Individual Battery and Data Restrictions',
  [`${android}/adaptive-battery`]: 'Adaptive Battery',
  [`${android}/smart-wifi-usage-reduction`]: 'Smart Wi-Fi Usage Reduction',
  [`${android}/adaptive-notifications`]: 'Adaptive Notifications',
  [`${android}/background-app-standby`]: 'Background App Standby',
  '/technical-details/call-tests': 'Call Tests',
  // Guides, healthcare professionals
  '/guides/for-healthcare-professionals/network/view-clinic-locations-on-map': 'View Clinic Locations on a Map',
  '/guides/for-healthcare-professionals/network/use-braver-invitation-kit': 'Use the Braver Invitation Kit',
  '/guides/for-healthcare-professionals/braver-connect': 'Braver Connect',
  '/guides/for-healthcare-professionals/braver-connect/contact-professional-without-braver-account': "Contact a Professional Who Doesn't Have a Braver Account",
  '/guides/for-healthcare-professionals/discussion-threads/copy-message-from-discussion-thread': 'Copy a Message from a Discussion Thread',
  '/guides/for-healthcare-professionals/patient-caregiver-communication/preallocate-patient-or-caregiver': 'Pre-Allocate a Patient and/or Caregiver',
  '/guides/for-healthcare-professionals/patient-caregiver-communication/prefill-patient-or-caregiver-information': 'Prefill Patient or Caregiver Information',
  '/guides/for-healthcare-professionals/profile-management/add-workplace-to-profile': 'Add a Workplace to My Profile',
  '/guides/for-healthcare-professionals/notification-management/enable-notifications-in-web-browser': 'Enable Notifications in a Web Browser',
  '/guides/for-healthcare-professionals/notification-management/add-or-modify-email': 'Add or Change Your Email',
  // Guides, patients and caregivers
  '/guides/for-patients-and-caregivers/braver-connect': 'Braver Connect',
  '/guides/for-patients-and-caregivers/braver-connect/add-file-photo-or-video-to-discussion-thread': 'Add a File, Photo or Video to a Discussion Thread',
  '/guides/for-patients-and-caregivers/braver-connect/answer-call': 'Answer a Call',
  // Guides, administrators
  '/guides/for-administrators/teams/create-team-template-coming-soon': 'Create a Team Template (Coming Soon)',
  '/guides/for-administrators/users/bulk-provision-users': 'Bulk Provision Users',
  '/guides/for-administrators/modules': 'Modules',
  '/guides/for-administrators/modules/create-module': 'Create a Module',
  // Guides, integrations and others
  '/guides/integrations/gustav/activate-account-via-integrated-bubble': 'Activate Your Account via the Bubble Integrated in Gustav',
  '/guides/integrations/gustav/use-contextual-navigation': 'Use Contextual Navigation',
  '/guides/braver': 'Braver',
}

const overrides = {
  [trajectory]: {
    label: 'Créer une trajectoire',
    translations: en('Create a Trajectory'),
    collapsed: true,
    items: [
      { label: 'Créer une trajectoire', translations: en('Create a Trajectory'), link: trajectory, attrs: { 'data-self': '' } },
      { label: 'Configurer les acteurs', translations: en('Configure Actors'), link: `${trajectory}/configure-actors`, attrs: {} },
      { label: 'Créer des modèles de fil', translations: en('Create Thread Templates'), link: `${trajectory}/create-thread-templates`, attrs: {} },
      { label: 'Configurer la suggestion automatique', translations: en('Configure Auto-suggestion'), link: `${trajectory}/configure-automatic-suggestion`, attrs: {} },
    ],
  },
}

const translate = (item) => {
  const label = item.link && translated[item.link]
  if (!label) return item
  const { 'data-only': _only, ...attrs } = item.attrs ?? {}
  return { ...item, translations: item.translations ?? en(label), attrs }
}

const apply = (items) => items.map((item) => {
  if (item.items) {
    const self = item.items.find((i) => i.attrs && 'data-self' in i.attrs)
    const label = !item.translations && self?.link && translated[self.link]
    return { ...item, ...(label ? { translations: en(label) } : {}), items: apply(item.items) }
  }
  if (item.link && overrides[item.link]) return overrides[item.link]
  return translate(item)
})

export const applySidebarOverrides = (topics) => apply(topics)
