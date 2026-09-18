import {getCliClient} from 'sanity/cli'
import {grantPrograms, landingPages, outreachPrograms} from '../../../src/content/site-data.mjs'

const client = getCliClient({apiVersion: '2025-02-19'})
const pageKey = (page) => `${page.documentType}:${page.slug}`
const reportQuoteKeys = new Set([
  'grantProgram:professional-development',
  'grantProgram:resources',
  'grantProgram:travel',
  'outreachProgram:arts-in-action-awards',
  'outreachProgram:arts-on-the-go',
  'outreachProgram:free-event-center-performances',
  'outreachProgram:mini-pavilion-maestros',
  'outreachProgram:scout-days',
  'landingPage:arts-shows/free-shows',
  'landingPage:mission/volunteer-membership',
])
const clearQuoteKeys = new Set([
  'grantProgram:arts-organizations',
  'grantProgram:scholarships',
])

const reportOnlyPages = [
  {
    documentType: 'outreachProgram',
    slug: 'free-event-center-performances',
    impactStats: [
      {value: '1,280', label: 'guests attended performances'},
      {value: '4', label: 'engaging arts events'},
    ],
    quoteHighlight:
      '“We love the opportunity to expose our children to all the arts without the expensive price tag, especially with young children where sometimes it doesn’t always go as planned.”',
  },
]

const sourcePages = [
  ...grantPrograms.map((page) => ({...page, documentType: 'grantProgram'})),
  ...outreachPrograms.map((page) => ({...page, documentType: 'outreachProgram'})),
  ...landingPages.map((page) => ({...page, documentType: 'landingPage'})),
  ...reportOnlyPages,
].filter(
  (page) =>
    page.impactStats?.length || reportQuoteKeys.has(pageKey(page)) || clearQuoteKeys.has(pageKey(page)),
)

const documentTypes = [...new Set(sourcePages.map((page) => page.documentType))]
const slugs = [...new Set(sourcePages.map((page) => page.slug))]
const documents = await client.fetch(
  '*[_type in $documentTypes && slug.current in $slugs]{_id, _type, title, "slug": slug.current}',
  {documentTypes, slugs},
)

const sourceByKey = new Map(sourcePages.map((page) => [pageKey(page), page]))
const foundKeys = new Set(documents.map((document) => `${document._type}:${document.slug}`))
const missingKeys = [...sourceByKey.keys()].filter((key) => !foundKeys.has(key))

if (missingKeys.length) {
  throw new Error(`Cannot sync report content. Missing Sanity pages: ${missingKeys.join(', ')}`)
}

let transaction = client.transaction()

for (const document of documents) {
  const key = `${document._type}:${document.slug}`
  const page = sourceByKey.get(key)
  if (!page) continue

  const values = {}
  if (page.impactStats?.length) {
    values.impactStats = page.impactStats.map((stat, index) => ({
      _key: `impact-${page.slug.replaceAll('/', '-')}-${index + 1}`,
      _type: 'stat',
      value: stat.value,
      label: stat.label,
    }))
  }
  if (reportQuoteKeys.has(key) && page.quoteHighlight) {
    values.quoteHighlight = page.quoteHighlight
  }

  transaction = transaction.patch(document._id, (patch) => {
    const nextPatch = patch.set(values)
    return clearQuoteKeys.has(key) ? nextPatch.unset(['quoteHighlight']) : nextPatch
  })
}

const result = await transaction.commit()

console.log(
  `Synced report impact and quotes for ${sourcePages.length} mission pages across ${documents.length} published/draft documents at ${result.transactionId}`,
)
