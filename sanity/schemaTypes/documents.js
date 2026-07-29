const statusField = {
  name: 'listingStatus',
  title: 'Listing Status',
  type: 'string',
  initialValue: 'published',
  options: { list: ['draft', 'published', 'hidden', 'seasonal', 'archived'] }
};

const tabsIntroFields = [
  {
    name: 'tabsEyebrow',
    title: 'Tabs Eyebrow',
    type: 'string',
    description: 'Small blue label in the intro section immediately above the tabs.'
  },
  {
    name: 'tabsTitle',
    title: 'Tabs Title',
    type: 'string',
    description: 'Large heading in the intro section immediately above the tabs.'
  },
  {
    name: 'tabsBody',
    title: 'Tabs Body',
    type: 'text',
    rows: 4,
    description: 'Short paragraph under the Tabs Title and above the tab buttons.'
  },
  {
    name: 'tabsCTA',
    title: 'Tabs CTA',
    type: 'cta',
    description: 'Optional button shown in the tabs intro area. Leave blank to show no button.'
  }
];

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
    ...tabsIntroFields,
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
    ...tabsIntroFields,
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
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      description: 'Main H1 at the top of the page, usually over the hero image.',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'slug',
      title: 'Page URL',
      type: 'slug',
      options: { source: 'title' },
      description: 'Controls the public page address. Example: mission/corporate-partnership creates /mission/corporate-partnership/.',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'templatePreset',
      title: 'Template Preset',
      type: 'string',
      description: 'Controls which page layout is used. Change only when intentionally moving the page to a different design pattern.'
    },
    {
      name: 'eyebrow',
      title: 'Page Eyebrow',
      type: 'string',
      description: 'Small label shown above the main page title. If left blank, the template default is used.'
    },
    {
      name: 'subtitle',
      title: 'Hero Body',
      type: 'text',
      rows: 4,
      description: 'Intro paragraph shown with the main page title in the hero area.'
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'mediaAsset',
      description: 'Large background image used behind the hero title/body at the top of the page.'
    },
    {
      name: 'visibility',
      title: 'Visibility',
      type: 'string',
      description: 'Editorial status for whether this page should be treated as public, hidden, seasonal or archived.',
      options: { list: ['public', 'hidden', 'seasonal', 'archived'] }
    },
    {
      name: 'orderRank',
      title: 'Order',
      type: 'number',
      description: 'Sort order used in editor lists and any ordered page groupings.'
    },
    statusField,
    {
      name: 'primaryCTA',
      title: 'Hero Primary CTA',
      type: 'cta',
      description: 'Main button shown in the hero area directly under the hero body.'
    },
    {
      name: 'secondaryCTA',
      title: 'Hero Secondary CTA',
      type: 'cta',
      description: 'Optional second button shown next to the hero primary button.'
    },
    ...tabsIntroFields,
    {
      name: 'supportIntro',
      title: 'Support Landing Intro',
      type: 'mediaBlock',
      description: 'Support The Arts only: intro copy above the support pathway cards.'
    },
    {
      name: 'supportProof',
      title: 'Support Proof Panel',
      type: 'mediaBlock',
      description: 'Support The Arts only: right-side proof panel with stats and an optional CTA.'
    },
    {
      name: 'tabs',
      title: 'Tabs',
      type: 'array',
      description: 'The tab buttons and tab-panel content shown below the Tabs intro section.',
      of: [{ type: 'tab' }]
    },
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
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      description: 'Flexible lower-page text sections used by simple resource pages.',
      of: [{ type: 'policySection' }]
    },
    {
      name: 'conversion',
      title: 'Right-Side Conversion Card',
      type: 'conversionBlock',
      description: 'Callout card shown beside the tab content on most support/general pages.'
    },
    {
      name: 'video',
      title: 'Optional Video Block',
      type: 'mediaBlock',
      description: 'Optional video/image feature block for pages that include a media section.'
    },
    {
      name: 'quoteHighlight',
      title: 'Quote Highlight',
      type: 'text',
      rows: 3,
      description: 'Optional quote or short callout displayed below the tabs.'
    },
    {
      name: 'finalCTA',
      title: 'Final CTA',
      type: 'cta',
      description: 'Optional button displayed with the quote/callout below the tabs.'
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      description: 'Optional browser/search/social metadata. If blank, the page title and hero body are used.'
    }
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
    { name: 'seo', title: 'SEO', type: 'seo' }
  ],
  preview: {
    select: { title: 'title', subtitle: 'dek', media: 'thumbnail' }
  }
};

export const storyTopic = {
  name: 'storyTopic',
  title: 'Story Topic',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'orderRank', title: 'Order', type: 'number' }
  ]
};
