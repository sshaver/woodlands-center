export const cta = {
  name: 'cta',
  title: 'CTA',
  type: 'object',
  fields: [
    { name: 'label', title: 'Label', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'href', title: 'Destination URL', type: 'string' },
    { name: 'type', title: 'CTA Type', type: 'string', options: { list: ['link', 'internal', 'external', 'popover', 'download'] } },
    { name: 'popoverId', title: 'Popover ID', type: 'string' },
    { name: 'style', title: 'Style', type: 'string', options: { list: ['primary', 'secondary'] } },
    { name: 'openInNewTab', title: 'Open in new tab', type: 'boolean', initialValue: false }
  ]
};

export const mediaAsset = {
  name: 'mediaAsset',
  title: 'Image or Media',
  type: 'object',
  fields: [
    { name: 'asset', title: 'Sanity Image', type: 'image', options: { hotspot: true } },
    { name: 'src', title: 'Existing Static Asset Path', type: 'string' },
    { name: 'alt', title: 'Alt text', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'caption', title: 'Caption', type: 'string' }
  ]
};

export const seo = {
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    { name: 'metaTitle', title: 'Meta title', type: 'string' },
    { name: 'metaDescription', title: 'Meta description', type: 'text', rows: 3 },
    { name: 'shareImage', title: 'Share image', type: 'mediaAsset' }
  ]
};

export const stat = {
  name: 'stat',
  title: 'Impact Stat',
  type: 'object',
  fields: [
    { name: 'value', title: 'Value', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'label', title: 'Label', type: 'string', validation: (Rule) => Rule.required() }
  ]
};

export const scheduleRow = {
  name: 'scheduleRow',
  title: 'Schedule Row',
  type: 'object',
  fields: [
    { name: 'time', title: 'Time', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'label', title: 'Label', type: 'string', validation: (Rule) => Rule.required() }
  ],
  preview: {
    select: { title: 'time', subtitle: 'label' }
  }
};

export const tab = {
  name: 'tab',
  title: 'Tab',
  type: 'object',
  fields: [
    { name: 'label', title: 'Label', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'label' } },
    { name: 'summary', title: 'Summary', type: 'text', rows: 3 },
    { name: 'body', title: 'Body', type: 'text', rows: 5 },
    { name: 'image', title: 'Image', type: 'mediaAsset' },
    { name: 'items', title: 'Bulleted Items', type: 'array', of: [{ type: 'string' }] },
    { name: 'cta', title: 'CTA', type: 'cta' }
  ],
  preview: {
    select: { title: 'label', subtitle: 'summary', media: 'image' }
  }
};

export const routeItem = {
  name: 'routeItem',
  title: 'External Route',
  type: 'object',
  fields: [
    { name: 'path', title: 'Path', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'subtitle', title: 'Subtitle', type: 'text', rows: 2 },
    { name: 'cta', title: 'CTA', type: 'cta' }
  ],
  preview: {
    select: { title: 'title', subtitle: 'path' }
  }
};

export const tabGroup = {
  name: 'tabGroup',
  title: 'Tab Group',
  type: 'object',
  fields: [
    { name: 'label', title: 'Group Label', type: 'string' },
    { name: 'tabs', title: 'Tabs', type: 'array', of: [{ type: 'tab' }] }
  ]
};

export const policySection = {
  name: 'policySection',
  title: 'Policy Section',
  type: 'object',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'body', title: 'Body', type: 'text', rows: 5 },
    { name: 'items', title: 'Items', type: 'array', of: [{ type: 'string' }] },
    { name: 'cta', title: 'CTA', type: 'cta' }
  ],
  preview: {
    select: { title: 'title', subtitle: 'body' }
  }
};

export const formReference = {
  name: 'formReference',
  title: 'HubSpot Form',
  type: 'object',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'subtitle', title: 'Subtitle', type: 'text', rows: 2 },
    { name: 'type', title: 'Form Type', type: 'string', initialValue: 'hubspot', readOnly: true },
    { name: 'portalId', title: 'HubSpot Portal ID', type: 'string' },
    { name: 'region', title: 'HubSpot Region', type: 'string', initialValue: 'na1' },
    { name: 'formId', title: 'HubSpot Form ID', type: 'string' },
    { name: 'fallbackUrl', title: 'Fallback URL', type: 'string' },
    { name: 'privacyCopy', title: 'Privacy Copy', type: 'text', rows: 2 }
  ]
};

export const conversionBlock = {
  name: 'conversionBlock',
  title: 'Conversion Block',
  type: 'object',
  fields: [
    { name: 'eyebrow', title: 'Eyebrow', type: 'string' },
    { name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'body', title: 'Body', type: 'text', rows: 4 },
    { name: 'cta', title: 'CTA', type: 'cta' }
  ]
};

export const mediaBlock = {
  name: 'mediaBlock',
  title: 'Media Block',
  type: 'object',
  fields: [
    { name: 'eyebrow', title: 'Eyebrow', type: 'string' },
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'subtitle', title: 'Subtitle', type: 'text', rows: 3 },
    { name: 'body', title: 'Body', type: 'text', rows: 4 },
    { name: 'image', title: 'Image', type: 'mediaAsset' },
    { name: 'poster', title: 'Video Poster', type: 'mediaAsset' },
    { name: 'href', title: 'URL', type: 'string' },
    { name: 'cta', title: 'CTA', type: 'cta' }
  ]
};

export const navItem = {
  name: 'navItem',
  title: 'Navigation Item',
  type: 'object',
  fields: [
    { name: 'label', title: 'Label', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'href', title: 'URL', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'icon', title: 'Icon Name', type: 'string' },
    { name: 'popoverId', title: 'Popover ID', type: 'string' }
  ]
};
