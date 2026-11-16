import fs from 'node:fs'
import {getCliClient} from 'sanity/cli'

const client = getCliClient({apiVersion: '2025-02-19'})
const seedPath = new URL('../../seed/cwmp-content.ndjson', import.meta.url)
const seasonSeatsDocument = fs
  .readFileSync(seedPath, 'utf8')
  .split(/\r?\n/)
  .filter(Boolean)
  .map((line) => JSON.parse(line))
  .find((document) => document._id === 'seasonSeats')

if (!seasonSeatsDocument) {
  throw new Error('The generated Sanity seed does not contain the Season Seats singleton.')
}

const fields = [
  'holderLoginCTA',
  'campaignHero',
  'experienceIntro',
  'experiencePerks',
  'clubFeature',
  'clubSecondaryImage',
  'clubFacts',
  'useCasesIntro',
  'useCases',
  'seatingIntro',
  'pricingOptions',
  'faqIntro',
  'faqs',
  'salesContact',
  'campaignConversion',
]

const values = Object.fromEntries(fields.map((field) => [field, seasonSeatsDocument[field]]))
const result = await client.patch('seasonSeats').set(values).commit()

console.log(`Synced the Season Seats campaign content at ${result._updatedAt}`)
