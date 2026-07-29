import {getCliClient} from 'sanity/cli'
import {landingPages, navigation} from '../../../src/content/site-data.mjs'

const client = getCliClient({apiVersion: '2025-02-19'})

let keyIndex = 0
const ctaFieldNames = new Set(['cta', 'primaryCTA', 'secondaryCTA', 'finalCTA'])
const mediaBlockFieldNames = new Set(['valuesGraphic'])
const arrayItemTypes = {
  footer: 'navItem',
  sponsorGroups: 'sponsorGroup',
  sponsors: 'sponsorItem',
  tabs: 'tab',
}
const mediaFieldNames = new Set(['heroImage', 'image', 'logo'])

const altFromPath = (value) =>
  String(value)
    .split('/')
    .pop()
    .replace(/\.[^.]+$/, '')
    .replace(/[-_]+/g, ' ')
    .trim()

const objectTypeForField = (keyName) => {
  if (ctaFieldNames.has(keyName)) return 'cta'
  if (mediaBlockFieldNames.has(keyName)) return 'mediaBlock'
  return ''
}

const withKeys = (value, keyName = '') => {
  if (mediaFieldNames.has(keyName) && typeof value === 'string') {
    return {_type: 'mediaAsset', src: value, alt: altFromPath(value)}
  }
  if (Array.isArray(value)) {
    const itemType = arrayItemTypes[keyName]
    return value.map((item) => {
      const next = withKeys(item)
      if (next && typeof next === 'object' && !Array.isArray(next) && !next._key) {
        return {
          _key: `sync${(keyIndex += 1).toString(36)}`,
          ...(itemType && !next._type ? {_type: itemType} : {}),
          ...next,
        }
      }
      return next
    })
  }
  if (!value || typeof value !== 'object') return value
  const explicitType = objectTypeForField(keyName)
  return {
    ...(explicitType && !value._type ? {_type: explicitType} : {}),
    ...Object.fromEntries(Object.entries(value).map(([key, item]) => [key, withKeys(item, key)])),
  }
}

const pageBySlug = new Map(landingPages.map((page) => [page.slug, page]))

const getLandingId = (slug) =>
  client.fetch('*[_type == "landingPage" && slug.current == $slug][0]._id', {slug})

const patchLanding = async (slug, fields) => {
  const id = await getLandingId(slug)
  if (!id) throw new Error(`No Sanity landingPage found for ${slug}`)
  await client.patch(id).set(withKeys(fields)).commit()
  console.log(`Updated ${slug}`)
}

await client.patch('navigation').set({footer: withKeys(navigation.footer, 'footer')}).commit()
console.log('Updated navigation footer')

await patchLanding('mission/volunteer-membership', {
  tabs: pageBySlug.get('mission/volunteer-membership').tabs,
})

await patchLanding('mission/corporate-partnership', {
  eyebrow: pageBySlug.get('mission/corporate-partnership').eyebrow,
  tabsEyebrow: pageBySlug.get('mission/corporate-partnership').tabsEyebrow,
  tabsTitle: pageBySlug.get('mission/corporate-partnership').tabsTitle,
  tabsBody: pageBySlug.get('mission/corporate-partnership').tabsBody,
  tabsCTA: pageBySlug.get('mission/corporate-partnership').tabsCTA,
  conversion: pageBySlug.get('mission/corporate-partnership').conversion,
  tabs: pageBySlug.get('mission/corporate-partnership').tabs,
  sponsorGroups: pageBySlug.get('mission/corporate-partnership').sponsorGroups,
})

await patchLanding('staff', {
  tabs: pageBySlug.get('staff').tabs,
  valuesGraphic: pageBySlug.get('staff').valuesGraphic,
})

await patchLanding('sponsors', {
  tabs: pageBySlug.get('sponsors').tabs,
  sponsorGroups: pageBySlug.get('sponsors').sponsorGroups,
})

const leadershipId = await getLandingId('leadership')
if (leadershipId) {
  await client
    .patch(leadershipId)
    .set({
      listingStatus: 'archived',
      visibility: 'archived',
      subtitle: 'This page has moved into the Leadership tab on the Staff page.',
    })
    .commit()
  console.log('Archived leadership page')
}
