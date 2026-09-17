import {getCliClient} from 'sanity/cli'
import {aiKnowledge, planVisitTopics} from '../../../src/content/site-data.mjs'

const client = getCliClient({apiVersion: '2025-02-19'})

const slugify = (value) =>
  String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')

const documentId = (prefix, value) => `${prefix}.${slugify(value)}`
const sectionSlug = (section) => section?.slug?.current || section?.slug || slugify(section?.heading || section?.title || '')

const publicKnowledgeDocs = aiKnowledge.map((entry) => ({
  _id: documentId('aiKnowledge', entry.question),
  _type: 'aiKnowledge',
  ...entry,
}))

const correctionPlan = new Map([
  ['what-to-bring', new Set(['dont-bring', 'food-drink'])],
  ['rules', new Set(['venue-rules'])],
  ['concessions', new Set(['menu'])],
])

const sourceTopics = new Map(planVisitTopics.map((topic) => [topic.slug, topic]))
const topicSlugs = [...correctionPlan.keys()]
const currentTopics = await client.fetch(
  '*[_type == "planVisitTopic" && slug.current in $slugs]{_id, title, slug, summary, sections}',
  {slugs: topicSlugs},
)

if (currentTopics.length !== topicSlugs.length) {
  const found = new Set(currentTopics.map((topic) => topic.slug?.current))
  const missing = topicSlugs.filter((slug) => !found.has(slug))
  throw new Error(`Cannot reconcile Plan Your Visit content. Missing Sanity documents: ${missing.join(', ')}`)
}

let transaction = client.transaction()

for (const document of publicKnowledgeDocs) {
  transaction = transaction.createOrReplace(document)
}

for (const currentTopic of currentTopics) {
  const topicSlug = currentTopic.slug.current
  const sourceTopic = sourceTopics.get(topicSlug)
  const correctedSectionSlugs = correctionPlan.get(topicSlug)
  const sourceSections = new Map(sourceTopic.sections.map((section) => [section.slug, section]))
  const matched = new Set()

  const sections = (currentTopic.sections || []).map((currentSection, index) => {
    const slug = sectionSlug(currentSection)
    if (!correctedSectionSlugs.has(slug)) return currentSection

    const sourceSection = sourceSections.get(slug)
    matched.add(slug)
    const {title: _legacyTitle, ...currentFields} = currentSection

    return {
      ...currentFields,
      _key: currentSection._key || `${topicSlug}-${slug}-${index}`,
      _type: 'policySection',
      heading: sourceSection.heading,
      slug: {_type: 'slug', current: sourceSection.slug},
      body: sourceSection.body,
      ...(sourceSection.items ? {items: sourceSection.items} : {}),
      ...(sourceSection.sourceLabel ? {sourceLabel: sourceSection.sourceLabel} : {}),
    }
  })

  const missingSections = [...correctedSectionSlugs].filter((slug) => !matched.has(slug))
  if (missingSections.length) {
    throw new Error(`Cannot reconcile ${topicSlug}. Missing sections: ${missingSections.join(', ')}`)
  }

  transaction = transaction.patch(currentTopic._id, (patch) =>
    patch.set({
      sections,
      ...(topicSlug === 'concessions' ? {summary: sourceTopic.summary} : {}),
    }),
  )
}

const result = await transaction.commit()

console.log(
  `Synced ${publicKnowledgeDocs.length} public AI Knowledge entries and reconciled ${currentTopics.length} Plan Your Visit topics at ${result.transactionId}`,
)
