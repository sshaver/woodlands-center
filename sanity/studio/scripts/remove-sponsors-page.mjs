import {getCliClient} from 'sanity/cli'
import {navigation} from '../../../src/content/site-data.mjs'

const client = getCliClient({apiVersion: '2025-02-19'})

let keyIndex = 0

const withFooterKeys = (items = []) =>
  items.map((item) => ({
    _key: item._key || `footer${(keyIndex += 1).toString(36)}`,
    _type: 'navItem',
    ...item,
  }))

await client.patch('navigation').set({footer: withFooterKeys(navigation.footer)}).commit()
console.log('Updated navigation footer')

const sponsorPageIds = await client.fetch(
  '*[_type == "landingPage" && slug.current == "sponsors"]._id'
)

for (const id of sponsorPageIds) {
  await client.delete(id)
  console.log(`Deleted ${id}`)
}

if (!sponsorPageIds.length) {
  console.log('No sponsors landing page document found')
}
