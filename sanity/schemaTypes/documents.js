const statusField = {
  name: 'listingStatus',
  title: 'Listing Status',
  type: 'string',
  initialValue: 'published',
  options: { list: ['draft', 'published', 'hidden', 'seasonal', 'archived'] }
};

export const event = {
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: (Rule) => Rule.required() },
    { name: 'subheader', title: 'Subheader', type: 'string' },
    { name: 'eventDate', title: 'Event Date', type: 'date', validation: (Rule) => Rule.required() },
    { name: 'eventStartTime', title: 'Start Time', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'gateOpenTime', title: 'Gate Open Time', type: 'string' },
    { name: 'headerImage', title: 'Hero Image', type: 'mediaAsset', validation: (Rule) => Rule.required() },
    { name: 'cardImage', title: 'Listing Image', type: 'mediaAsset', validation: (Rule) => Rule.required() },
    { name: 'eventType', title: 'Event Type', type: 'string', options: { list: ['liveNation', 'performingArts', 'freeCommunity', 'rental'] } },
    statusField,
    { name: 'isFeatured', title: 'Featured Event', type: 'boolean', initialValue: false },
    { name: 'featuredOrder', title: 'Featured Order', type: 'number' },
    { name: 'ctaLabel', title: 'CTA Label', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'ticketLink', title: 'Ticket Link', type: 'string' },
    { name: 'parkingPurchaseLink', title: 'Parking Purchase Link', type: 'string' },
    { name: 'lawnChairPurchaseLink', title: 'Lawn Chair Purchase Link', type: 'string' },
    { name: 'hotelLink', title: 'Hotel Link', type: 'string' },
    { name: 'bagPolicyLink', title: 'Bag Policy Link', type: 'string' },
    { name: 'parkingLink', title: 'Parking Info Link', type: 'string' },
    { name: 'lawnChairLink', title: 'Lawn Chair Info Link', type: 'string' },
    { name: 'showSchedule', title: 'Show Schedule', type: 'array', of: [{ type: 'scheduleRow' }] },
    { name: 'textUpdatesCode', title: 'Text Updates Code', type: 'string' },
    { name: 'textUpdatesBody', title: 'Text Updates Body', type: 'text', rows: 3 },
    { name: 'eventDescription', title: 'Event Description', type: 'text', rows: 6 },
    { name: 'policyOverrides', title: 'Event Policy Overrides', type: 'text', rows: 3 },
    { name: 'seo', title: 'SEO', type: 'seo' }
  ],
  preview: {
    select: { title: 'title', subtitle: 'eventDate', media: 'cardImage' }
  }
};

export const planVisitTopic = {
  name: 'planVisitTopic',
  title: 'Plan Your Visit Page Section',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: (Rule) => Rule.required() },
    { name: 'summary', title: 'Summary', type: 'text', rows: 3, validation: (Rule) => Rule.required() },
    { name: 'icon', title: 'Icon Name', type: 'string' },
    { name: 'aiKeywords', title: 'Search Keywords', type: 'array', of: [{ type: 'string' }] },
    { name: 'orderRank', title: 'Order', type: 'number' },
    statusField,
    { name: 'image', title: 'Image', type: 'mediaAsset' },
    { name: 'sections', title: 'Full Lower Modules', type: 'array', of: [{ type: 'policySection' }] },
    { name: 'seo', title: 'SEO', type: 'seo' }
  ],
  preview: {
    select: { title: 'title', subtitle: 'summary', media: 'image' }
  }
};

export const grantProgram = {
  name: 'grantProgram',
  title: 'Funding and Scholarship Page',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: (Rule) => Rule.required() },
    { name: 'subtitle', title: 'Subtitle', type: 'text', rows: 3 },
    { name: 'image', title: 'Hero Image', type: 'mediaAsset' },
    { name: 'heroImage', title: 'Legacy Hero Image', type: 'mediaAsset', hidden: true },
    { name: 'orderRank', title: 'Order', type: 'number' },
    statusField,
    { name: 'status', title: 'Application Status', type: 'string', options: { list: ['open', 'closed', 'comingSoon'] } },
    { name: 'primaryCTA', title: 'Primary CTA', type: 'cta' },
    { name: 'secondaryCTA', title: 'Secondary CTA', type: 'cta' },
    { name: 'applicationCTA', title: 'Application CTA', type: 'cta' },
    { name: 'tabs', title: 'Informational Tabs', type: 'array', of: [{ type: 'tab' }] },
    { name: 'conversion', title: 'Conversion Block', type: 'conversionBlock' },
    { name: 'video', title: 'Optional Video Block', type: 'mediaBlock' },
    { name: 'quoteHighlight', title: 'Quote Highlight', type: 'text', rows: 3 },
    { name: 'finalCTA', title: 'Final CTA', type: 'cta' },
    { name: 'seo', title: 'SEO', type: 'seo' }
  ],
  preview: {
    select: { title: 'title', subtitle: 'subtitle', media: 'image' }
  }
};

export const outreachProgram = {
  name: 'outreachProgram',
  title: 'Arts Outreach Page',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: (Rule) => Rule.required() },
    { name: 'subtitle', title: 'Subtitle', type: 'text', rows: 3 },
    { name: 'image', title: 'Hero Image', type: 'mediaAsset' },
    { name: 'heroImage', title: 'Legacy Hero Image', type: 'mediaAsset', hidden: true },
    { name: 'orderRank', title: 'Order', type: 'number' },
    statusField,
    { name: 'seasonalVisibility', title: 'Seasonal Visibility', type: 'object', fields: [{ name: 'visibility', title: 'Visibility', type: 'string' }] },
    { name: 'primaryCTA', title: 'Primary CTA', type: 'cta' },
    { name: 'secondaryCTA', title: 'Secondary CTA', type: 'cta' },
    { name: 'tabs', title: 'Informational Tabs', type: 'array', of: [{ type: 'tab' }] },
    { name: 'conversion', title: 'Conversion Block', type: 'conversionBlock' },
    { name: 'video', title: 'Optional Video Block', type: 'mediaBlock' },
    { name: 'quoteHighlight', title: 'Quote Highlight', type: 'text', rows: 3 },
    { name: 'finalCTA', title: 'Final CTA', type: 'cta' },
    { name: 'seo', title: 'SEO', type: 'seo' }
  ],
  preview: {
    select: { title: 'title', subtitle: 'subtitle', media: 'image' }
  }
};

export const landingPage = {
  name: 'landingPage',
  title: 'Support / General Page',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: (Rule) => Rule.required() },
    { name: 'templatePreset', title: 'Template Preset', type: 'string' },
    {
      name: 'eyebrow',
      title: 'Page Eyebrow',
      type: 'string',
      description: 'Small label shown above the main page title. If left blank, the template default is used.'
    },
    { name: 'subtitle', title: 'Subtitle', type: 'text', rows: 4 },
    { name: 'heroImage', title: 'Hero Image', type: 'mediaAsset' },
    { name: 'visibility', title: 'Visibility', type: 'string', options: { list: ['public', 'hidden', 'seasonal', 'archived'] } },
    { name: 'orderRank', title: 'Order', type: 'number' },
    statusField,
    { name: 'primaryCTA', title: 'Primary CTA', type: 'cta' },
    { name: 'secondaryCTA', title: 'Secondary CTA', type: 'cta' },
    { name: 'supportIntro', title: 'Support Landing Intro', type: 'mediaBlock' },
    { name: 'supportProof', title: 'Support Proof Panel', type: 'mediaBlock' },
    { name: 'tabs', title: 'Tabs', type: 'array', of: [{ type: 'tab' }] },
    {
      name: 'sponsorGroups',
      title: 'Page Sponsor Groups',
      type: 'array',
      description: 'Optional sponsor/logo groups shown below this page’s tab content.',
      of: [{ type: 'sponsorGroup' }]
    },
    {
      name: 'valuesGraphic',
      title: 'Values Graphic',
      type: 'mediaBlock',
      description: 'Optional graphic area shown below the Staff page department tabs.'
    },
    { name: 'sections', title: 'Sections', type: 'array', of: [{ type: 'policySection' }] },
    { name: 'conversion', title: 'Conversion Block', type: 'conversionBlock' },
    { name: 'video', title: 'Optional Video Block', type: 'mediaBlock' },
    { name: 'quoteHighlight', title: 'Quote Highlight', type: 'text', rows: 3 },
    { name: 'finalCTA', title: 'Final CTA', type: 'cta' },
    { name: 'seo', title: 'SEO', type: 'seo' }
  ],
  preview: {
    select: { title: 'title', slug: 'slug.current', subtitle: 'subtitle', media: 'heroImage' },
    prepare({ title, slug, subtitle, media }) {
      return {
        title,
        subtitle: slug ? `/${slug}` : subtitle,
        media
      };
    }
  }
};

export const story = {
  name: 'story',
  title: 'Story',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: (Rule) => Rule.required() },
    { name: 'topics', title: 'Topics', type: 'array', of: [{ type: 'string' }] },
    { name: 'topic', title: 'Legacy Topic', type: 'string', hidden: true },
    { name: 'pillar', title: 'Pillar', type: 'string' },
    { name: 'publishDate', title: 'Publish Date', type: 'date', validation: (Rule) => Rule.required() },
    statusField,
    { name: 'thumbnail', title: 'Card Image', type: 'mediaAsset' },
    { name: 'cardImage', title: 'Legacy Card Image', type: 'mediaAsset', hidden: true },
    { name: 'heroImage', title: 'Hero Image', type: 'mediaAsset' },
    {
      name: 'youtubeUrl',
      title: 'YouTube Link',
      type: 'url',
      description: 'Optional. When populated, the story hero image links to this video and shows a play overlay.'
    },
    { name: 'dek', title: 'Dek', type: 'text', rows: 3 },
    { name: 'body', title: 'Body', type: 'text', rows: 10 },
    { name: 'featuredSlot', title: 'Featured Slot', type: 'string', options: { list: ['hero', 'largeFeature'] } },
    { name: 'ctaLabel', title: 'CTA Label', type: 'string' },
    { name: 'cta', title: 'CTA', type: 'cta' },
    { name: 'seo', title: 'SEO', type: 'seo' }
  ],
  preview: {
    select: { title: 'title', subtitle: 'dek', media: 'thumbnail' }
  }
};

export const storyPillar = {
  name: 'storyPillar',
  title: 'Story Pillar',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    { name: 'body', title: 'Description', type: 'text', rows: 3 },
    { name: 'description', title: 'Legacy Description', type: 'text', rows: 3, hidden: true },
    { name: 'href', title: 'Link', type: 'string' },
    { name: 'ctaLabel', title: 'CTA Label', type: 'string' },
    { name: 'cta', title: 'CTA', type: 'cta' },
    { name: 'orderRank', title: 'Order', type: 'number' }
  ]
};

export const storyTopic = {
  name: 'storyTopic',
  title: 'Story Topic',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    { name: 'orderRank', title: 'Order', type: 'number' }
  ]
};
