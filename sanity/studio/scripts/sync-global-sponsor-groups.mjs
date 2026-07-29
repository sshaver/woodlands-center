import {getCliClient} from 'sanity/cli'
import {blocks} from '../../../src/content/site-data.mjs'

const client = getCliClient({apiVersion: '2025-02-19'})

let keyIndex = 0
const arrayItemTypes = {
  sponsorGroups: 'sponsorGroup',
  sponsors: 'sponsorItem',
}
const mediaFieldNames = new Set(['logo'])

const altFromPath = (value) =>
  String(value)
    .split('/')
    .pop()
    .replace(/\.[^.]+$/, '')
    .replace(/[-_]+/g, ' ')
    .trim()

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
          _key: `globalSponsor${(keyIndex += 1).toString(36)}`,
          ...(itemType && !next._type ? {_type: itemType} : {}),
          ...next,
        }
      }
      return next
    })
  }
  if (!value || typeof value !== 'object') return value
  return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, withKeys(item, key)]))
}

await client
  .patch('blocks')
  .set({sponsorGroups: withKeys(blocks.sponsorGroups, 'sponsorGroups')})
  .commit()

console.log('Updated global bottom sponsor groups')
