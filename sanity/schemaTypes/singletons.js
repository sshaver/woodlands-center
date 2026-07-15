export const settings = {
  name: 'settings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    { name: 'siteName', title: 'Site Name', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'logoWhite', title: 'White Logo', type: 'mediaAsset' },
    { name: 'logoBlue', title: 'Blue Logo', type: 'mediaAsset' },
    { name: 'homeBackgroundImage', title: 'Home Background Image', type: 'mediaAsset' },
    { name: 'fallbackImage', title: 'Fallback Image', type: 'mediaAsset' },
    {
      name: 'integrations',
      title: 'External Destinations',
      type: 'object',
      fields: [
        { name: 'ticketmaster', title: 'Ticketmaster URL', type: 'string' },
        { name: 'accountManager', title: 'Account Manager URL', type: 'string' },
        { name: 'foundant', title: 'Foundant URL', type: 'string' },
        { name: 'donorPerfect', title: 'DonorPerfect URL', type: 'string' },
        { name: 'acceptd', title: 'Acceptd URL', type: 'string' },
        { name: 'paycom', title: 'Paycom URL', type: 'string' },
        { name: 'googleSheets', title: 'Google Sheets URL', type: 'string' }
      ]
    }
  ],
  preview: { prepare: () => ({ title: 'Site Settings' }) }
};

export const navigation = {
  name: 'navigation',
  title: 'Site Navigation',
  type: 'document',
  fields: [
    { name: 'desktopPrimary', title: 'Desktop Primary', type: 'array', of: [{ type: 'navItem' }] },
    { name: 'utility', title: 'Utility Links', type: 'array', of: [{ type: 'navItem' }] },
    { name: 'mobileDock', title: 'Mobile Dock', type: 'array', of: [{ type: 'navItem' }] },
    { name: 'footer', title: 'Footer Links', type: 'array', of: [{ type: 'navItem' }] }
  ],
  preview: { prepare: () => ({ title: 'Site Navigation' }) }
};

export const forms = {
  name: 'forms',
  title: 'HubSpot Forms',
  type: 'document',
  fields: [
    { name: 'contact', title: 'Contact Form', type: 'formReference' },
    { name: 'getEmails', title: 'Get Emails Form', type: 'formReference' },
    { name: 'seasonSeats', title: 'Season Seats Interest Form', type: 'formReference' },
    { name: 'missionSeekers', title: 'Mission Seekers Form', type: 'formReference' },
    { name: 'programReminder', title: 'Program Reminder Form', type: 'formReference' }
  ],
  preview: { prepare: () => ({ title: 'HubSpot Forms' }) }
};

export const alert = {
  name: 'alert',
  title: 'Alert Banner',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'message', title: 'Message', type: 'text', rows: 2 },
    { name: 'severity', title: 'Severity', type: 'string', options: { list: ['info', 'warning', 'urgent'] } },
    { name: 'dismissible', title: 'Dismissible', type: 'boolean', initialValue: true },
    { name: 'cta', title: 'CTA', type: 'cta' }
  ],
  preview: { select: { title: 'title', subtitle: 'message' } }
};

export const mission = {
  name: 'mission',
  title: 'Arts Access Mission',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'subtitle', title: 'Descriptor', type: 'text', rows: 5 },
    { name: 'heroImage', title: 'Hero Image', type: 'mediaAsset' },
    { name: 'donateCTA', title: 'Support the Arts CTA', type: 'cta' },
    { name: 'programsCTA', title: 'Programs CTA', type: 'cta' },
    { name: 'impactHeading', title: 'Impact Heading', type: 'mediaBlock' },
    { name: 'impactStats', title: 'Impact Stats', type: 'array', of: [{ type: 'stat' }] },
    { name: 'humanProof', title: 'Human Proof Story', type: 'mediaBlock' },
    { name: 'video', title: 'Mission Video', type: 'mediaBlock' },
    { name: 'tabs', title: 'Main Pathway Tabs', type: 'array', of: [{ type: 'tab' }] }
  ],
  preview: { select: { title: 'title', subtitle: 'subtitle', media: 'heroImage' } }
};

export const seasonSeats = {
  name: 'seasonSeats',
  title: 'Season Seats',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'subtitle', title: 'Subtitle', type: 'text', rows: 4 },
    { name: 'image', title: 'Hero Image', type: 'mediaAsset' },
    { name: 'primaryCTA', title: 'Primary CTA', type: 'cta' },
    { name: 'learnMoreCTA', title: 'Learn More CTA', type: 'cta' },
    { name: 'holderLoginCTA', title: 'Holder Login CTA', type: 'cta' },
    {
      name: 'placeMap',
      title: 'Find Your Place Map + Pricing Chart',
      type: 'mediaBlock',
      description: 'Controls the Find Your Place at The Pavilion section. Use the image field for the current seating map and pricing chart.'
    },
    { name: 'pricing', title: 'Legacy Pricing Block', type: 'mediaBlock', hidden: true },
    { name: 'seatingMap', title: 'Legacy Seating Map Block', type: 'mediaBlock', hidden: true },
    { name: 'conversion', title: 'Conversion Block', type: 'conversionBlock' },
    { name: 'tabs', title: 'Experience Tabs', type: 'array', of: [{ type: 'tab' }] }
  ],
  preview: { select: { title: 'title', subtitle: 'subtitle', media: 'image' } }
};

export const blocks = {
  name: 'blocks',
  title: 'Reusable Page Blocks',
  type: 'document',
  fields: [
    { name: 'feature', title: 'Fan Essentials / Feature Block', type: 'mediaBlock' },
    { name: 'video', title: 'Mission Video Block', type: 'mediaBlock' },
    { name: 'seasonSeats', title: 'Season Seats Home Block', type: 'mediaBlock' },
    {
      name: 'eventsSeasonCTA',
      title: 'Events Page Season Seats CTA',
      type: 'conversionBlock',
      description: 'Controls the Season Seats CTA box directly below the Events page intro.'
    },
    { name: 'email', title: 'Email Signup Block', type: 'mediaBlock' },
    { name: 'storyPrefooter', title: 'Story Prefooter Block', type: 'mediaBlock' },
    {
      name: 'sponsorGroups',
      title: 'Bottom Sponsor Section',
      type: 'array',
      of: [{ type: 'sponsorGroup' }],
      description: 'Controls the sponsor recognition section that appears near the bottom of the site.'
    }
  ],
  preview: { prepare: () => ({ title: 'Reusable Page Blocks' }) }
};

export const externalRoutes = {
  name: 'externalRoutes',
  title: 'External Route Placeholders',
  type: 'document',
  fields: [
    {
      name: 'routes',
      title: 'Routes',
      type: 'array',
      of: [{ type: 'routeItem' }]
    }
  ],
  preview: { prepare: () => ({ title: 'External Route Placeholders' }) }
};
