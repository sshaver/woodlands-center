export const cta = {
  name: 'cta',
  title: 'CTA',
  type: 'object',
  fields: [
    {
      name: 'label',
      title: 'Button Text',
      type: 'string',
      description: 'Text shown on the button. If this is blank, no button appears.',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'href',
      title: 'Destination URL',
      type: 'string',
      description: 'Where the button goes. Use a site path like /season-seats/ or a full external URL.'
    },
    {
      name: 'type',
      title: 'CTA Type',
      type: 'string',
      description: 'Use popover for an on-site form, external for another website, download for a PDF/file, or internal/link for normal site links.',
      options: { list: ['link', 'internal', 'external', 'popover', 'download'] }
    },
    {
      name: 'popoverId',
      title: 'Popover Form ID',
      type: 'string',
      description: 'Only used when CTA Type is popover. Current options include contact, get-emails and seasonSeats.'
    },
    {
      name: 'style',
      title: 'Button Style',
      type: 'string',
      description: 'Primary is the bright main button. Secondary is the outline/supporting button.',
      options: { list: ['primary', 'secondary'] }
    },
    {
      name: 'openInNewTab',
      title: 'Open in new tab',
      type: 'boolean',
      description: 'Recommended for external links, downloads, Ticketmaster, DonorPerfect and account portals.',
      initialValue: false
    }
  ]
};

export const mediaAsset = {
  name: 'mediaAsset',
  title: 'Image or Media',
  type: 'object',
  fields: [
    {
      name: 'asset',
      title: 'Sanity Image',
      type: 'image',
      description: 'Upload or select an image from Sanity. Preferred for images staff will update.',
      options: { hotspot: true }
    },
    {
      name: 'src',
      title: 'Existing Static Asset Path',
      type: 'string',
      description: 'Developer-managed image path already in the site files. Leave blank when using Sanity Image.'
    },
    {
      name: 'alt',
      title: 'Alt text',
      type: 'string',
      description: 'Short description for accessibility and image fallback text.',
      validation: (Rule) => Rule.required()
    },
    { name: 'caption', title: 'Caption', type: 'string', description: 'Optional visible or editorial caption, depending on the page design.' }
  ]
};

export const seo = {
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    { name: 'metaTitle', title: 'Meta title', type: 'string', description: 'Optional browser/search/social title. Leave blank to use the page title.' },
    { name: 'metaDescription', title: 'Meta description', type: 'text', rows: 3, description: 'Optional search/social summary. Leave blank to use the page body/description.' },
    { name: 'shareImage', title: 'Share image', type: 'mediaAsset', description: 'Optional image for social sharing previews.' }
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
    {
      name: 'label',
      title: 'Tab Button Label',
      type: 'string',
      description: 'Text shown on the clickable tab button.',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'slug',
      title: 'Tab Anchor',
      type: 'slug',
      description: 'Internal anchor for this tab. Usually auto-generated from the label.',
      options: { source: 'label' }
    },
    { name: 'summary', title: 'Card Summary', type: 'text', rows: 3, description: 'Short preview text used by some card-style tab layouts.' },
    { name: 'body', title: 'Tab Body', type: 'text', rows: 5, description: 'Main copy shown inside this tab panel.' },
    { name: 'image', title: 'Tab Image', type: 'mediaAsset', description: 'Optional image shown inside this tab panel when the layout supports it.' },
    { name: 'items', title: 'Bulleted Items', type: 'array', description: 'Optional bullet list shown under the tab body.', of: [{ type: 'string' }] },
    { name: 'cta', title: 'Tab CTA', type: 'cta', description: 'Optional button shown inside this tab panel.' }
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
    { name: 'eyebrow', title: 'Eyebrow', type: 'string', description: 'Small label at the top of the callout card.' },
    { name: 'title', title: 'Title', type: 'string', description: 'Main heading in the callout card.', validation: (Rule) => Rule.required() },
    { name: 'body', title: 'Body', type: 'text', rows: 4, description: 'Supporting text in the callout card.' },
    { name: 'cta', title: 'CTA', type: 'cta', description: 'Optional button in the callout card.' }
  ]
};

export const mediaBlock = {
  name: 'mediaBlock',
  title: 'Media Block',
  type: 'object',
  fields: [
    { name: 'eyebrow', title: 'Eyebrow', type: 'string', description: 'Small label above this block title when the layout displays one.' },
    { name: 'title', title: 'Title', type: 'string', description: 'Main heading for this reusable block.' },
    { name: 'subtitle', title: 'Subtitle', type: 'text', rows: 3, description: 'Short supporting line or paragraph shown near the title.' },
    { name: 'body', title: 'Body', type: 'text', rows: 4, description: 'Longer supporting copy shown when the layout has room for it.' },
    { name: 'image', title: 'Image', type: 'mediaAsset', description: 'Primary image for this block.' },
    { name: 'poster', title: 'Video Poster', type: 'mediaAsset', description: 'Image shown for video-style blocks before someone clicks play.' },
    { name: 'href', title: 'URL', type: 'string', description: 'Optional video, download or destination URL used by this block.' },
    { name: 'cta', title: 'CTA', type: 'cta', description: 'Optional button attached to this block.' }
  ]
};

export const sponsorItem = {
  name: 'sponsorItem',
  title: 'Sponsor',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Sponsor Name',
      type: 'string',
      description: 'Sponsor name shown in the logo card, especially if no logo is uploaded.',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'subtitle',
      title: 'Optional Subtitle',
      type: 'string',
      description: 'Small supporting label under the sponsor name, such as sponsor type or relationship.'
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'mediaAsset',
      description: 'Logo shown in the white sponsor card. Transparent PNG or SVG-style artwork usually works best.'
    },
    {
      name: 'href',
      title: 'Sponsor URL',
      type: 'string',
      description: 'Optional website link. If blank, the sponsor card is not linked.'
    }
  ],
  preview: {
    select: { title: 'name', subtitle: 'subtitle', media: 'logo' }
  }
};

export const sponsorGroup = {
  name: 'sponsorGroup',
  title: 'Sponsor Group',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Group Title',
      type: 'string',
      description: 'Heading for this sponsor section, such as Live Nation Sponsors or Performing Arts Season Sponsors.',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'subtitle',
      title: 'Group Subtitle',
      type: 'text',
      rows: 2,
      description: 'Optional short intro text shown under the sponsor group title.'
    },
    {
      name: 'sponsors',
      title: 'Sponsors',
      type: 'array',
      description: 'Sponsor logo/name cards shown in this group.',
      of: [{ type: 'sponsorItem' }]
    }
  ],
  preview: {
    select: { title: 'title', sponsors: 'sponsors' },
    prepare({ title, sponsors }) {
      const count = Array.isArray(sponsors) ? sponsors.length : 0;
      return { title, subtitle: `${count} sponsor${count === 1 ? '' : 's'}` };
    }
  }
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
