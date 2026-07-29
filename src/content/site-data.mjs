const asset = (path) => `/assets/${path.split('/').map(encodeURIComponent).join('/')}`;
const eventImage = (filename) => asset(`content-images/events/${filename}`);

export const settings = {
  siteName: 'The Cynthia Woods Mitchell Pavilion',
  logoWhite: asset('logos/CWMP Logo Sponsored Horizontal White.png'),
  logoBlue: asset('logos/CWMP Logo Sponsored Horizontal Blue.png'),
  homeBackgroundImage: asset('content-images/landing-pages/DSC00552.jpg'),
  fallbackImage: asset('content-images/plan-your-visit/Fans-7.jpg'),
  integrations: {
    ticketmaster: 'CONFIGURE_TICKETMASTER_URL_IN_CMS',
    accountManager: 'CONFIGURE_ACCOUNT_MANAGER_URL_IN_CMS',
    foundant: 'CONFIGURE_FOUNDANT_URL_IN_CMS',
    donorPerfect: 'CONFIGURE_DONORPERFECT_URL_IN_CMS',
    acceptd: 'CONFIGURE_ACCEPTD_URL_IN_CMS',
    paycom: 'CONFIGURE_PAYCOM_URL_IN_CMS',
    googleSheets: 'CONFIGURE_GOOGLE_SHEETS_URL_IN_CMS'
  }
};

export const navigation = {
  desktopPrimary: [
    { label: 'Plan your visit', href: '/plan-your-visit', icon: 'location-dot' },
    { label: 'Events', href: '/events', icon: 'ticket' },
    { label: 'Arts Access Mission', href: '/mission', icon: 'violin' }
  ],
  utility: [
    { label: 'Contact', href: '#contact', popoverId: 'contact' },
    { label: 'Get Emails', href: '#get-emails', popoverId: 'get-emails' }
  ],
  mobileDock: [
    { label: 'Season Seats', href: '/season-seats', icon: 'crown' },
    { label: 'Donate', href: 'CONFIGURE_DONORPERFECT_DONATION_URL_IN_CMS', icon: 'hand-holding-heart' },
    { label: 'Events', href: '/events', icon: 'ticket' },
    { label: 'Visit', href: '/plan-your-visit', icon: 'location-dot' },
    { label: 'Mission', href: '/mission', icon: 'violin' }
  ],
  footer: [
    { label: 'Staff', href: '/staff' },
    { label: 'Leadership', href: '/staff' },
    { label: 'History', href: '/history' },
    { label: 'Press', href: '/press' },
    { label: 'Work at CWMP', href: '/work-at-cwmp' },
    { label: 'Staff Log In', href: '/staff-login' },
    { label: 'Rent The Pavilion', href: '/rent' },
    { label: 'Volunteers', href: '/volunteer' },
    { label: 'Donate', href: 'CONFIGURE_DONORPERFECT_DONATION_URL_IN_CMS' },
    { label: 'Sponsors', href: '/sponsors' }
  ]
};

const partnersJoinCTA = { label: 'Join Partners', href: 'CONFIGURE_DONORPERFECT_URL_IN_CMS', type: 'external', openInNewTab: true };

const corporateSponsorGroups = [
  {
    title: 'Live Nation Sponsors',
    subtitle: 'Corporate partners supporting major concert experiences and Pavilion audiences.',
    sponsors: [
      { name: 'Live Nation', subtitle: 'Concert sponsorship partner', logo: asset('logos/sponsors/live-nation.png') },
      { name: 'Ticketmaster', subtitle: 'Ticketing partner', logo: asset('logos/sponsors/ticketmaster.png') },
      { name: 'Aramark', subtitle: 'Food and beverage partner', logo: asset('logos/sponsors/aramark.png') },
      { name: 'Sewell', subtitle: 'Corporate sponsor', logo: asset('logos/sponsors/sewell.png') },
      { name: 'Xfinity', subtitle: 'Corporate sponsor', logo: asset('logos/sponsors/xfinity.png') },
      { name: 'ExxonMobil', subtitle: 'Corporate sponsor', logo: asset('logos/sponsors/exxonmobil.png') },
      { name: 'Waste Connections', subtitle: 'Corporate sponsor', logo: asset('logos/sponsors/waste-connections.png') },
      { name: 'Huntsman', subtitle: 'Corporate sponsor', logo: asset('logos/sponsors/huntsman.png') }
    ]
  },
  {
    title: 'Performing Arts Season Sponsors',
    subtitle: 'Mission-focused partners helping keep performing arts accessible to the community.',
    sponsors: [
      { name: "The Republic Grille", subtitle: 'Performing arts sponsor', logo: asset('logos/sponsors/republic-grille.png') },
      { name: "Texas Children's", subtitle: 'Performing arts sponsor', logo: asset('logos/sponsors/texas-childrens.png') },
      { name: 'Houston Methodist', subtitle: 'Performing arts sponsor', logo: asset('logos/sponsors/houston-methodist.png') },
      { name: 'Woodforest National Bank', subtitle: 'Performing arts sponsor', logo: asset('logos/sponsors/woodforest.png') },
      { name: 'Aloha', subtitle: 'Performing arts sponsor', logo: asset('logos/sponsors/aloha.png') },
      { name: 'The Wortham Foundation', subtitle: 'Performing arts sponsor', logo: asset('logos/sponsors/wortham-foundation.png') },
      { name: 'The Woodlands Township', subtitle: 'Performing arts sponsor', logo: asset('logos/sponsors/woodlands-township.png') },
      { name: 'Ovintiv', subtitle: 'Performing arts sponsor', logo: asset('logos/sponsors/ovintiv.png') },
      { name: 'The Pavilion Partners', subtitle: 'Volunteer membership partner', logo: asset('logos/sponsors/pavilion-partners.png') }
    ]
  }
];

const staffDepartmentTabs = [
  {
    label: 'Admin',
    slug: 'admin',
    body: 'The administrative team guides organizational planning, people operations and executive support.',
    items: [
      'Jeff Young - President and CEO - jyoung@woodlandscenter.org',
      'Mallory Marlowe - Executive Assistant to CEO - mmarlowe@woodlandscenter.org',
      'Tabitha Harmeyer - Human Resources Manager - tharmeyer@woodlandscenter.org'
    ]
  },
  {
    label: 'Arts Outreach',
    slug: 'arts-outreach',
    body: 'Arts Outreach connects students, educators, families and community groups with mission programs.',
    items: [
      'Cameron Klepac - Director of Marketing & Arts Outreach - cklepac@woodlandscenter.org',
      'Ashley Gravois - Assistant Director of Arts Outreach - agravois@woodlandscenter.org',
      'Cheryl Worley - Grants Specialist - cworley@woodlandscenter.org',
      'Erin Kelly - Volunteer Manager - ekelly@woodlandscenter.org'
    ]
  },
  {
    label: 'Development',
    slug: 'development',
    body: 'Development supports giving, sponsorship, membership and relationship-building that fund arts access.',
    items: ['Joan Dieden - Assistant Director of Development - jdieden@woodlandscenter.org']
  },
  {
    label: 'Finance',
    slug: 'finance',
    body: 'Finance stewards resources, reporting and operational support across the organization.',
    items: [
      'Craig A. Bourgeois - Chief Financial Officer - cbourgeois@woodlandscenter.org',
      'Natalia Baker - Controller - nbaker@woodlandscenter.org',
      'Jenny Lewis - Accounting Manager - jlewis@woodlandscenter.org',
      'Loretha Warren - Staff Accountant - lwarren@woodlandscenter.org'
    ]
  },
  {
    label: 'Marketing',
    slug: 'marketing',
    body: 'Marketing shares show information, mission stories, campaigns and guest communications.',
    items: [
      'Cameron Klepac - Director of Marketing & Arts Outreach - cklepac@woodlandscenter.org',
      'Scott Shaver - Marketing Manager - sshaver@woodlandscenter.org',
      'Laine Harper - Communications Specialist - lharper@woodlandscenter.org',
      'Brooke Huff - Digital Marketing Coordinator - bhuff@woodlandscenter.org'
    ]
  },
  {
    label: 'Operations - Events',
    slug: 'operations-events',
    body: 'Event Operations prepares the guest experience, event logistics and onsite coordination.',
    items: [
      'Kelly Rich - Director of Event Operations - krich@woodlandscenter.org',
      'Shara Trevino - Event Coordinator - strevino@woodlandscenter.org'
    ]
  },
  {
    label: 'Operations - Facilities + Production',
    slug: 'operations-facilities-production',
    body: 'Facilities and Production supports the site, stage and technical details that make events possible.',
    items: [
      'Matt Meyer - Director of Operations - mmeyer@woodlandscenter.org',
      'Kenny Oberhoff - Assistant Facilities Manager - koberhoff@woodlandscenter.org',
      'David Schlauch - Maintenance Manager'
    ]
  },
  {
    label: 'Ticketing',
    slug: 'ticketing',
    body: 'Ticketing supports box office operations, ticket access and guest questions.',
    items: [
      'Josie Moore - Director of Ticketing - jmoore@woodlandscenter.org',
      'JD Villaseñor - Director of Premium Seat Sales - jvillasenor@woodlandscenter.org',
      'Bryanna Gayosso - Ticketing Coordinator - bgayosso@woodlandscenter.org'
    ]
  },
  {
    label: 'Leadership',
    slug: 'leadership',
    body: 'The Pavilion is governed by a volunteer Board of Directors.',
    items: [
      'Officers: Bob Abendschein - Chairman of the Board; Jeff Young - President and CEO; Bill Braun - Vice Chairman; Maryann T. Mannen - Secretary; Craig A. Bourgeois - Treasurer',
      'Board of Directors: Eric Allum; Steve Campbell; Dr. Yong Choi; Mark Folkes; Jonathan Homeyer; Peter R. Huntsman; Troy Kirby; J. Colter Lewis; Robert E. Marling, Jr.; Roger A. Nicholson; Cole Pate; Adrienne Ropp; Aaron M. Rubin; Sondra Ruhman; Crystal Sled; Jeff Swift; Jena Taylor; Jeff E. Urban; Kenneth Warren',
      'Director in Memoriam: Cynthia Woods Mitchell (1922-2009)'
    ]
  }
];

export const forms = {
  contact: {
    title: 'Contact The Pavilion',
    subtitle: 'Send a note to the team and a staff member will point you in the right direction.',
    type: 'hubspot',
    portalId: 'CONFIGURE_HUBSPOT_PORTAL_ID',
    formId: 'CONFIGURE_CONTACT_FORM_ID',
    fallbackUrl: 'mailto:info@woodlandscenter.org',
    privacyCopy: 'We’ll route your note to the right Pavilion team member.'
  },
  'get-emails': {
    title: 'Get Pavilion Emails',
    subtitle: 'Be first to hear about shows, arts access programs and venue updates.',
    type: 'hubspot',
    portalId: 'CONFIGURE_HUBSPOT_PORTAL_ID',
    formId: 'CONFIGURE_EMAIL_FORM_ID',
    fallbackUrl: 'mailto:info@woodlandscenter.org?subject=Email%20Signup',
    privacyCopy: 'Email signup is ready for HubSpot configuration.'
  },
  seasonSeats: {
    title: 'Request Season Seats Information',
    subtitle: 'Tell us how you want to use Season Seats and a Pavilion team member will follow up with availability, options and next steps.',
    type: 'hubspot',
    portalId: 'CONFIGURE_HUBSPOT_PORTAL_ID',
    formId: 'CONFIGURE_SEASON_SEATS_FORM_ID',
    fallbackUrl: 'mailto:info@woodlandscenter.org?subject=Season%20Seats%20Interest',
    privacyCopy: 'Your request goes to the Pavilion team that handles Season Seats conversations.'
  },
  missionSeekers: {
    title: 'Mission Seekers',
    subtitle: 'Get emails from The Pavilion to learn more about our arts outreach programs and the people they impact.',
    type: 'hubspot',
    portalId: 'CONFIGURE_HUBSPOT_PORTAL_ID',
    formId: 'CONFIGURE_MISSION_SEEKERS_FORM_ID',
    fallbackUrl: 'mailto:info@woodlandscenter.org?subject=Mission%20Updates'
  },
  programReminder: {
    title: 'Program Reminders',
    subtitle: 'Get reminders about program dates, registration windows and next steps.',
    type: 'hubspot',
    portalId: 'CONFIGURE_HUBSPOT_PORTAL_ID',
    formId: 'CONFIGURE_PROGRAM_REMINDER_FORM_ID',
    fallbackUrl: 'mailto:info@woodlandscenter.org?subject=Program%20Reminder'
  },
  grants: {
    title: 'Grant Updates',
    subtitle: 'Get updates about grant timelines, requirements and application reminders.',
    type: 'hubspot',
    portalId: 'CONFIGURE_HUBSPOT_PORTAL_ID',
    formId: 'CONFIGURE_GRANTS_FORM_ID',
    fallbackUrl: 'mailto:info@woodlandscenter.org?subject=Grant%20Updates'
  }
};

export const alert = {
  title: 'Venue policies can vary by event',
  message: 'Check your event detail page before you arrive for gate times, ticketing notes and artist-specific updates.',
  severity: 'info',
  dismissible: true,
  cta: { label: 'See events', href: '/events' }
};

export const events = [
  {
    title: 'Rod Stewart',
    slug: 'rod-stewart',
    subheader: 'One Last Time Tour',
    eventDate: '2026-04-19',
    eventStartTime: '7:30 PM',
    gateOpenTime: '6:00 PM',
    headerImage: eventImage('4.19 - Rod Stewart.jpg'),
    cardImage: eventImage('4.19 - Rod Stewart.jpg'),
    ticketLink: 'CONFIGURE_TICKET_LINK_IN_CMS',
    eventType: 'liveNation',
    isFeatured: false
  },
  {
    title: 'Jim Gaffigan',
    slug: 'jim-gaffigan',
    subheader: 'Everything is Wonderful!',
    eventDate: '2026-05-02',
    eventStartTime: '8:00 PM',
    gateOpenTime: '6:30 PM',
    headerImage: eventImage('5.02 - Jim Gaffigan.jpg'),
    cardImage: eventImage('5.02 - Jim Gaffigan.jpg'),
    ticketLink: 'CONFIGURE_TICKET_LINK_IN_CMS',
    eventType: 'liveNation'
  },
  {
    title: 'Sting',
    slug: 'sting',
    subheader: 'STING 3.0',
    eventDate: '2026-05-13',
    eventStartTime: '8:00 PM',
    gateOpenTime: '6:30 PM',
    headerImage: eventImage('5.13 - Sting.jpg'),
    cardImage: eventImage('5.13 - Sting.jpg'),
    ticketLink: 'CONFIGURE_TICKET_LINK_IN_CMS',
    eventType: 'liveNation'
  },
  {
    title: 'Dave Matthews Band',
    slug: 'dave-matthews-band',
    subheader: 'Summer Tour',
    eventDate: '2026-05-08',
    eventStartTime: '7:30 PM',
    gateOpenTime: '6:00 PM',
    headerImage: eventImage('5.8 - Dave Matthews Band.jpg'),
    cardImage: eventImage('5.8 - Dave Matthews Band.jpg'),
    ticketLink: 'CONFIGURE_TICKET_LINK_IN_CMS',
    eventType: 'liveNation'
  },
  {
    title: 'MGK',
    slug: 'mgk',
    subheader: 'with special guests',
    eventDate: '2026-05-23',
    eventStartTime: '7:00 PM',
    gateOpenTime: '5:30 PM',
    headerImage: eventImage('5.23 - MGK.png'),
    cardImage: eventImage('5.23 - MGK.png'),
    ticketLink: 'CONFIGURE_TICKET_LINK_IN_CMS',
    eventType: 'liveNation'
  },
  {
    title: "Jimmy Buffett's Coral Reefer Band",
    slug: 'jimmy-buffetts-coral-reefer-band',
    subheader: 'Keep The Party Going Tour',
    eventDate: '2026-07-24',
    eventStartTime: '7:00 PM',
    gateOpenTime: '5:30 PM',
    headerImage: eventImage('7.24 - Coral Reefer Band.jpg'),
    cardImage: eventImage('7.24 - Coral Reefer Band.jpg'),
    ticketLink: 'CONFIGURE_TICKET_LINK_IN_CMS',
    eventType: 'liveNation'
  },
  {
    title: 'Motionless In White',
    slug: 'motionless-in-white',
    subheader: 'with Lorna Shore, Fit For A King and Static Dress',
    eventDate: '2026-07-25',
    eventStartTime: '7:00 PM',
    gateOpenTime: '5:30 PM',
    headerImage: eventImage('7.25 - Motionless in White.jpg'),
    cardImage: eventImage('7.25 - Motionless in White.jpg'),
    ticketLink: 'CONFIGURE_TICKET_LINK_IN_CMS',
    eventType: 'liveNation'
  },
  {
    title: 'John Mellencamp',
    slug: 'john-mellencamp',
    subheader: 'The Dancing Words Tour: The Greatest Hits',
    eventDate: '2026-08-06',
    eventStartTime: '7:00 PM',
    gateOpenTime: '5:30 PM',
    headerImage: eventImage('8.6 - John Mellencamp.jpg'),
    cardImage: eventImage('8.6 - John Mellencamp.jpg'),
    ticketLink: 'CONFIGURE_TICKET_LINK_IN_CMS',
    eventType: 'liveNation'
  },
  {
    title: 'TOTO + Christopher Cross + The Romantics',
    slug: 'toto-christopher-cross-the-romantics',
    subheader: '',
    eventDate: '2026-08-07',
    eventStartTime: '7:00 PM',
    gateOpenTime: '5:30 PM',
    headerImage: eventImage('8.7 - Toto.jpg'),
    cardImage: eventImage('8.7 - Toto.jpg'),
    ticketLink: 'CONFIGURE_TICKET_LINK_IN_CMS',
    eventType: 'liveNation'
  },
  {
    title: 'The Black Crowes & Whiskey Myers',
    slug: 'the-black-crowes-whiskey-myers',
    subheader: 'with Southall',
    eventDate: '2026-08-08',
    eventStartTime: '7:00 PM',
    gateOpenTime: '5:30 PM',
    headerImage: eventImage('8.8 - The Black Crowes.jpg'),
    cardImage: eventImage('8.8 - Whiskey Myers.jpg'),
    ticketLink: 'CONFIGURE_TICKET_LINK_IN_CMS',
    eventType: 'liveNation'
  },
  {
    title: 'NE-YO & AKON',
    slug: 'ne-yo-akon',
    subheader: 'Nights Like This Tour',
    eventDate: '2026-08-09',
    eventStartTime: '7:00 PM',
    gateOpenTime: '5:30 PM',
    headerImage: eventImage('8.9 - NE-YO.jpg'),
    cardImage: eventImage('8.9 - NE-YO.jpg'),
    ticketLink: 'CONFIGURE_TICKET_LINK_IN_CMS',
    eventType: 'liveNation'
  },
  {
    title: 'Train',
    slug: 'train',
    subheader: 'with Barenaked Ladies & Matt Nathanson',
    eventDate: '2026-08-14',
    eventStartTime: '7:00 PM',
    gateOpenTime: '5:30 PM',
    headerImage: eventImage('8.14 - Train.png'),
    cardImage: eventImage('8.14 - Train.png'),
    ticketLink: 'CONFIGURE_TICKET_LINK_IN_CMS',
    eventType: 'liveNation'
  },
  {
    title: 'Chicago & Styx',
    slug: 'chicago-styx',
    subheader: 'The Windy Cities Tour - All The Hits... Your Kind of Tour',
    eventDate: '2026-08-20',
    eventStartTime: '7:00 PM',
    gateOpenTime: '5:30 PM',
    headerImage: eventImage('8.20 - Chicago.jpg'),
    cardImage: eventImage('8.20 - Styx.jpg'),
    ticketLink: 'CONFIGURE_TICKET_LINK_IN_CMS',
    eventType: 'liveNation'
  },
  {
    title: 'Santana & The Doobie Brothers',
    slug: 'santana-the-doobie-brothers',
    subheader: 'Oneness Tour 2026',
    eventDate: '2026-08-21',
    eventStartTime: '7:00 PM',
    gateOpenTime: '5:30 PM',
    headerImage: eventImage('8.21 - Santana & The Doobie Brothers.jpg'),
    cardImage: eventImage('8.21 - Santana.png'),
    ticketLink: 'CONFIGURE_TICKET_LINK_IN_CMS',
    eventType: 'liveNation'
  },
  {
    title: '311 & Dirty Heads',
    slug: '311-dirty-heads',
    subheader: 'with Atmosphere and Rome',
    eventDate: '2026-08-23',
    eventStartTime: '7:00 PM',
    gateOpenTime: '5:30 PM',
    headerImage: eventImage('8.23 - 311 and Dirty Heads.jpg'),
    cardImage: eventImage('8.23 - 311 and Dirty Heads.jpg'),
    ticketLink: 'CONFIGURE_TICKET_LINK_IN_CMS',
    eventType: 'liveNation'
  },
  {
    title: 'Lynyrd Skynyrd & Foreigner',
    slug: 'lynyrd-skynyrd-foreigner',
    subheader: 'with Six Gun Sally',
    eventDate: '2026-08-27',
    eventStartTime: '7:00 PM',
    gateOpenTime: '5:30 PM',
    headerImage: eventImage('8.27 - Lynyrd Skynyrd.jpg'),
    cardImage: eventImage('8.27 - Foreigner.jpg'),
    ticketLink: 'CONFIGURE_TICKET_LINK_IN_CMS',
    eventType: 'liveNation'
  },
  {
    title: 'Jack Johnson',
    slug: 'jack-johnson',
    subheader: 'with Lake Street Dive',
    eventDate: '2026-08-28',
    eventStartTime: '7:00 PM',
    gateOpenTime: '5:30 PM',
    headerImage: eventImage('8.28 - Jack Johnson.jpg'),
    cardImage: eventImage('8.28 - Jack Johnson.jpg'),
    ticketLink: 'CONFIGURE_TICKET_LINK_IN_CMS',
    eventType: 'liveNation'
  },
  {
    title: 'Buddy Guy Blues Festival',
    slug: 'buddy-guy-blues-festival',
    subheader: 'with Gary Clark Jr., Jimmie Vaughan, Ally Venable and special guest Christone "Kingfish" Ingram',
    eventDate: '2026-08-29',
    eventStartTime: '7:00 PM',
    gateOpenTime: '5:30 PM',
    headerImage: eventImage('8.29 - Buddy Guy Blues Festival.png'),
    cardImage: eventImage('8.29 - Buddy Guy Blues Festival.png'),
    ticketLink: 'CONFIGURE_TICKET_LINK_IN_CMS',
    eventType: 'liveNation'
  },
  {
    title: 'El Bueno La Mala y El Feo Fest',
    slug: 'el-bueno-la-mala-y-el-feo-fest',
    subheader: 'with Grupo Pesado, Los Dos De Tamaulipas, Xavi, Los Ligaditos and Mariangela',
    eventDate: '2026-08-30',
    eventStartTime: '7:00 PM',
    gateOpenTime: '5:30 PM',
    headerImage: eventImage('8.30 - El Bueno.png'),
    cardImage: eventImage('8.30 - El Bueno.png'),
    ticketLink: 'CONFIGURE_TICKET_LINK_IN_CMS',
    eventType: 'liveNation'
  },
  {
    title: 'Josh Groban',
    slug: 'josh-groban',
    subheader: 'Stage, Screen and Symphony',
    eventDate: '2026-09-03',
    eventStartTime: '7:00 PM',
    gateOpenTime: '5:30 PM',
    headerImage: eventImage('9.3 - Josh Groban.jpg'),
    cardImage: eventImage('9.3 - Josh Groban.jpg'),
    ticketLink: 'CONFIGURE_TICKET_LINK_IN_CMS',
    eventType: 'liveNation'
  },
  {
    title: 'ZOÉ',
    slug: 'zoe',
    subheader: 'MEMOREX + RESEXEX + MÁS',
    eventDate: '2026-09-05',
    eventStartTime: '7:00 PM',
    gateOpenTime: '5:30 PM',
    headerImage: eventImage('9.5 - ZOE.jpg'),
    cardImage: eventImage('9.5 - ZOE.jpg'),
    ticketLink: 'CONFIGURE_TICKET_LINK_IN_CMS',
    eventType: 'liveNation'
  },
  {
    title: 'When Instruments Roamed the Earth',
    slug: 'when-instruments-roamed-the-earth',
    subheader: 'Houston Symphony | Free Show | No Ticket Required',
    eventDate: '2026-09-09',
    eventStartTime: '8:00 PM',
    gateOpenTime: '6:30 PM',
    headerImage: asset('content-images/mission/SSS HSO-11.jpg'),
    cardImage: asset('content-images/mission/SSS HSO-16.jpg'),
    ticketLink: 'CONFIGURE_FREE_SHOW_REGISTRATION_IN_CMS',
    eventType: 'freeCommunity',
    ctaLabel: 'RSVP for this Show',
    eventDescription: 'The Houston Symphony brings a free performing arts night to The Pavilion with no ticket required.'
  },
  {
    title: 'The Return Of The Carnival Of Sins: Mötley Crüe',
    slug: 'motley-crue',
    subheader: 'with Tesla & Extreme',
    eventDate: '2026-09-11',
    eventStartTime: '7:00 PM',
    gateOpenTime: '5:30 PM',
    headerImage: eventImage('9.11 - Motley Crue.jpg'),
    cardImage: eventImage('9.11 - Motley Crue.jpg'),
    ticketLink: 'CONFIGURE_TICKET_LINK_IN_CMS',
    eventType: 'liveNation',
    isFeatured: true,
    featuredOrder: 1,
    policyOverrides: 'Artist policies may require extra flexibility for reusable bottles and lawn-chair rental availability.'
  },
  {
    title: 'Kehlani',
    slug: 'kehlani',
    subheader: 'with Durand Bernarr, Isaia Huron, TheArti$t and WASEEL',
    eventDate: '2026-09-13',
    eventStartTime: '7:00 PM',
    gateOpenTime: '5:30 PM',
    headerImage: eventImage('9.13 - Kehlani.jpg'),
    cardImage: eventImage('9.13 - Kehlani.jpg'),
    ticketLink: 'CONFIGURE_TICKET_LINK_IN_CMS',
    eventType: 'liveNation'
  },
  {
    title: 'Empire of the Sun',
    slug: 'empire-of-the-sun',
    subheader: 'with Midnight Generation and Polo & Pan',
    eventDate: '2026-09-24',
    eventStartTime: '7:00 PM',
    gateOpenTime: '5:30 PM',
    headerImage: eventImage('9.24 - Empire of the Sun.png'),
    cardImage: eventImage('9.24 - Empire of the Sun.png'),
    ticketLink: 'CONFIGURE_TICKET_LINK_IN_CMS',
    eventType: 'liveNation'
  },
  {
    title: 'BABYMETAL',
    slug: 'babymetal',
    subheader: 'with Halestorm and Violent Vira',
    eventDate: '2026-09-25',
    eventStartTime: '7:00 PM',
    gateOpenTime: '5:30 PM',
    headerImage: eventImage('9.25 - BABYMETAL.png'),
    cardImage: eventImage('9.25 - BABYMETAL.png'),
    ticketLink: 'CONFIGURE_TICKET_LINK_IN_CMS',
    eventType: 'liveNation'
  },
  {
    title: 'Roxette',
    slug: 'roxette',
    subheader: 'with Taylor Dayne and Nick Lowe & The Straitjackets',
    eventDate: '2026-09-26',
    eventStartTime: '7:00 PM',
    gateOpenTime: '5:30 PM',
    headerImage: eventImage('9.26 - Roxette.jpg'),
    cardImage: eventImage('9.26 - Roxette.jpg'),
    ticketLink: 'CONFIGURE_TICKET_LINK_IN_CMS',
    eventType: 'liveNation'
  },
  {
    title: 'Five Finger Death Punch',
    slug: 'five-finger-death-punch',
    subheader: 'with Cody Jinks and Eva Under Fire',
    eventDate: '2026-09-27',
    eventStartTime: '7:00 PM',
    gateOpenTime: '5:30 PM',
    headerImage: eventImage('9.27 - Five Finger Death Punch.jpg'),
    cardImage: eventImage('9.27 - Five Finger Death Punch.jpg'),
    ticketLink: 'CONFIGURE_TICKET_LINK_IN_CMS',
    eventType: 'liveNation'
  },
  {
    title: 'Dead Symphony: The Music of Grateful Dead and More',
    slug: 'dead-symphony-the-music-of-grateful-dead-and-more',
    subheader: 'The Woodlands Symphony Orchestra | Free Show | No Ticket Required',
    eventDate: '2026-09-29',
    eventStartTime: '8:00 PM',
    gateOpenTime: '6:30 PM',
    headerImage: asset('content-images/mission/SSS HSO-23.jpg'),
    cardImage: asset('content-images/mission/SSS HSO-1.jpg'),
    ticketLink: 'CONFIGURE_FREE_SHOW_REGISTRATION_IN_CMS',
    eventType: 'freeCommunity',
    ctaLabel: 'RSVP for this Show',
    eventDescription: 'The Woodlands Symphony Orchestra brings a free performing arts night to The Pavilion with no ticket required.'
  },
  {
    title: 'Mumford & Sons',
    slug: 'mumford-and-sons',
    subheader: 'with Marcus King Band',
    eventDate: '2026-10-01',
    eventStartTime: '7:00 PM',
    gateOpenTime: '5:30 PM',
    headerImage: eventImage('10.1 - Mumford and Sons.jpeg'),
    cardImage: eventImage('10.1 - Mumford and Sons.jpeg'),
    ticketLink: 'CONFIGURE_TICKET_LINK_IN_CMS',
    eventType: 'liveNation'
  },
  {
    title: 'Boz Scaggs',
    slug: 'boz-scaggs',
    subheader: 'Rhythm Review 2026',
    eventDate: '2026-10-02',
    eventStartTime: '7:00 PM',
    gateOpenTime: '5:30 PM',
    headerImage: eventImage('10.2 - Boz Scaggs.jpg'),
    cardImage: eventImage('10.2 - Boz Scaggs.jpg'),
    ticketLink: 'CONFIGURE_TICKET_LINK_IN_CMS',
    eventType: 'liveNation'
  },
  {
    title: 'Eagle Fest Featuring ZZ Top',
    slug: 'eagle-fest-featuring-zz-top',
    subheader: 'with Cheap Trick',
    eventDate: '2026-10-03',
    eventStartTime: '7:00 PM',
    gateOpenTime: '5:30 PM',
    headerImage: eventImage('10.3 - ZZ Top.jpg'),
    cardImage: eventImage('10.3 - ZZ Top.jpg'),
    ticketLink: 'CONFIGURE_TICKET_LINK_IN_CMS',
    eventType: 'liveNation'
  },
  {
    title: 'TLC & Salt-N-Pepa',
    slug: 'tlc-salt-n-pepa',
    subheader: 'with En Vogue',
    eventDate: '2026-10-04',
    eventStartTime: '7:00 PM',
    gateOpenTime: '5:30 PM',
    headerImage: eventImage('10.4 - TLC & Salt-N-Pepa.jpg'),
    cardImage: eventImage('10.4 - TLC & Salt-N-Pepa.jpg'),
    ticketLink: 'CONFIGURE_TICKET_LINK_IN_CMS',
    eventType: 'liveNation'
  },
  {
    title: 'Brad Paisley',
    slug: 'brad-paisley',
    subheader: 'with Jake Worthington & Mackenzie Carpenter',
    eventDate: '2026-10-08',
    eventStartTime: '7:00 PM',
    gateOpenTime: '5:30 PM',
    headerImage: eventImage('10.8 - Brad Paisley.jpg'),
    cardImage: eventImage('10.8 - Brad Paisley.jpg'),
    ticketLink: 'CONFIGURE_TICKET_LINK_IN_CMS',
    eventType: 'liveNation'
  },
  {
    title: 'Hayley Williams',
    slug: 'hayley-williams',
    subheader: 'with Magdalena Bay & Rico Nasty',
    eventDate: '2026-10-09',
    eventStartTime: '7:00 PM',
    gateOpenTime: '5:30 PM',
    headerImage: eventImage('10.9 - Hayley Williams.jpg'),
    cardImage: eventImage('10.9 - Hayley Williams.jpg'),
    ticketLink: 'CONFIGURE_TICKET_LINK_IN_CMS',
    eventType: 'liveNation'
  },
  {
    title: 'Breaking Benjamin',
    slug: 'breaking-benjamin',
    subheader: 'Kami Kehoe, Starset and Chevelle',
    eventDate: '2026-10-10',
    eventStartTime: '7:00 PM',
    gateOpenTime: '5:30 PM',
    headerImage: eventImage('10.10 - Breaking Benjamin.jpg'),
    cardImage: eventImage('10.10 - Breaking Benjamin.jpg'),
    ticketLink: 'CONFIGURE_TICKET_LINK_IN_CMS',
    eventType: 'liveNation'
  },
  {
    title: 'Bryson Tiller',
    slug: 'bryson-tiller',
    subheader: 'with Majid Jordan, Ty Dolla $ign and Austin Millz',
    eventDate: '2026-10-15',
    eventStartTime: '7:00 PM',
    gateOpenTime: '5:30 PM',
    headerImage: eventImage('10.15 - Bryson Tiller.jpg'),
    cardImage: eventImage('10.15 - Bryson Tiller.jpg'),
    ticketLink: 'CONFIGURE_TICKET_LINK_IN_CMS',
    eventType: 'liveNation'
  },
  {
    title: 'beabadoobee',
    slug: 'beabadoobee',
    subheader: 'with Wisp',
    eventDate: '2026-10-16',
    eventStartTime: '7:00 PM',
    gateOpenTime: '5:30 PM',
    headerImage: eventImage('10.16 - beabadoobee.jpg'),
    cardImage: eventImage('10.16 - beabadoobee.jpg'),
    ticketLink: 'CONFIGURE_TICKET_LINK_IN_CMS',
    eventType: 'liveNation'
  },
  {
    title: 'Staind',
    slug: 'staind',
    subheader: 'with Seether, Hoobastank and Hinder',
    eventDate: '2026-10-17',
    eventStartTime: '7:00 PM',
    gateOpenTime: '5:30 PM',
    headerImage: eventImage('10.17 - Staind.jpeg'),
    cardImage: eventImage('10.17 - Staind.jpeg'),
    ticketLink: 'CONFIGURE_TICKET_LINK_IN_CMS',
    eventType: 'liveNation'
  },
  {
    title: 'Hocus Pocus Pops',
    slug: 'hocus-pocus-pops',
    subheader: 'Houston Symphony | Free Show | No Ticket Required',
    eventDate: '2026-10-23',
    eventStartTime: '8:00 PM',
    gateOpenTime: '6:30 PM',
    headerImage: asset('content-images/partners-sponsors/HPP-25.jpg'),
    cardImage: asset('content-images/partners-sponsors/HPP-40.jpg'),
    ticketLink: 'CONFIGURE_FREE_SHOW_REGISTRATION_IN_CMS',
    eventType: 'freeCommunity',
    ctaLabel: 'RSVP for this Show',
    eventDescription: 'The Houston Symphony brings a free Halloween-season performing arts night to The Pavilion with no ticket required.'
  },
  {
    title: 'Three Days Grace',
    slug: 'three-days-grace',
    subheader: 'with I Prevail and the Funeral Portrait',
    eventDate: '2026-10-25',
    eventStartTime: '7:00 PM',
    gateOpenTime: '5:30 PM',
    headerImage: eventImage('10.25 - Three Days Grace.jpg'),
    cardImage: eventImage('10.25 - Three Days Grace.jpg'),
    ticketLink: 'CONFIGURE_TICKET_LINK_IN_CMS',
    eventType: 'liveNation'
  },
  {
    title: 'MercyMe',
    slug: 'mercyme',
    subheader: 'with Jeremy Camp, Tim Timmons and Sam Wesley',
    eventDate: '2026-10-31',
    eventStartTime: '7:00 PM',
    gateOpenTime: '5:30 PM',
    headerImage: eventImage('10.31 - MercyMe.png'),
    cardImage: eventImage('10.31 - MercyMe.png'),
    ticketLink: 'CONFIGURE_TICKET_LINK_IN_CMS',
    eventType: 'liveNation'
  },
  {
    title: 'Treaty Oak Revival',
    slug: 'treaty-oak-revival',
    subheader: 'with 49 Winchester, Gannon Fremin & CCREV',
    eventDate: '2026-11-13',
    eventStartTime: '7:00 PM',
    gateOpenTime: '5:30 PM',
    headerImage: eventImage('11.13 - Treaty Oak Revival.jpg'),
    cardImage: eventImage('11.13 - Treaty Oak Revival.jpg'),
    ticketLink: 'CONFIGURE_TICKET_LINK_IN_CMS',
    eventType: 'liveNation'
  },
  {
    title: 'Holly Jolly Jingle',
    slug: 'holly-jolly-jingle',
    subheader: 'Free Show | No Ticket Required',
    eventDate: '2026-12-03',
    eventStartTime: '7:00 PM',
    gateOpenTime: '5:30 PM',
    headerImage: asset('content-images/mission/SSS HSO-1.jpg'),
    cardImage: asset('content-images/mission/SSS HSO-11.jpg'),
    ticketLink: 'CONFIGURE_FREE_SHOW_REGISTRATION_IN_CMS',
    eventType: 'freeCommunity',
    ctaLabel: 'RSVP for this Show',
    eventDescription: 'Holly Jolly Jingle closes the season with a free community performance at The Pavilion.'
  },
  {
    title: 'The Houston Symphony: Star-Spangled Salute',
    slug: 'houston-symphony-star-spangled-salute',
    subheader: 'Free Performing Arts show',
    eventDate: '2026-07-03',
    eventStartTime: '8:00 PM',
    gateOpenTime: '6:30 PM',
    headerImage: asset('content-images/mission/SSS HSO-23.jpg'),
    cardImage: asset('content-images/mission/SSS HSO-1.jpg'),
    ticketLink: 'CONFIGURE_FREE_SHOW_REGISTRATION_IN_CMS',
    eventType: 'freeCommunity',
    ctaLabel: 'RSVP for this Show'
  }
].map((event) => ({
  listingStatus: 'published',
  ctaLabel: event.eventType === 'freeCommunity' ? 'RSVP for this Show' : 'Get Tickets',
  bagPolicyLink: '/plan-your-visit#bag-policy',
  parkingLink: '/plan-your-visit#parking',
  lawnChairLink: '/plan-your-visit#lawn-chairs',
  hotelLink: 'CONFIGURE_HOTEL_PARTNER_URL_IN_CMS',
  parkingPurchaseLink: 'CONFIGURE_PARKING_PURCHASE_URL_IN_CMS',
  lawnChairPurchaseLink: 'CONFIGURE_LAWN_CHAIR_RENTAL_URL_IN_CMS',
  textUpdatesCode: 'TEXT CWMP TO 888777',
  textUpdatesBody: 'Get weather, traffic and show-time updates sent to your phone before and during the event.',
  showSchedule: [
    { time: event.gateOpenTime, label: 'Gates open' },
    { time: event.eventStartTime, label: 'Show begins' }
  ],
  eventDescription: `${event.title} comes to The Pavilion with a full evening designed around easy arrival, clear policies and a high-energy amphitheater experience.`,
  ...event
}));

export const planVisitTopics = [
  {
    title: 'What to Bring',
    slug: 'what-to-bring',
    icon: 'bag-shopping',
    summary: 'Policy essentials for bags, blankets, umbrellas, food, drinks, cameras and lawn chairs.',
    aiKeywords: ['bag', 'clear bag', 'umbrella', 'blanket', 'food', 'drink', 'camera', 'chair', 'lawn chair', 'bring'],
    sections: [
      {
        heading: 'Policy Note',
        slug: 'policy-note',
        body: 'Please note that these policies are subject to change on the day of the event and that the information listed here is not all-inclusive.'
      },
      {
        heading: 'Bag Policy',
        slug: 'bag-policy',
        body: 'Clear bags sized 12" x 12" or smaller are permitted. Tinted bags or bags with printed patterns are not accepted. Non-clear handheld clutches sized 4.5" x 6.5" or smaller are permitted.',
        items: [
          'Bags for medical equipment sized appropriately to the size of the equipment are permitted, but will be subject to search. Small items like medication need to follow the standard bag policy above.',
          'Diaper bags accompanied by infant/toddler are permitted, but will be subject to search.',
          'Nursing/Pumping bags including bottles, ice and pumping equipment are permitted, but will be subject to search.',
          'Following standard safety protocol, all unattended items and bags outside the gates or within the venue will be removed from the facility immediately.',
          'Bags, purses or backpacks of any kind will not be accepted by Pavilion Info Booths.'
        ],
        sourceLabel: 'Plan Your Visit: Bag Policy'
      },
      {
        heading: 'Do Bring',
        slug: 'do-bring',
        body: 'The following items are allowed into The Pavilion at most shows. Please be prepared to have your belongings searched.',
        items: [
          'Non-detachable lens cameras',
          'Signs 8.5"x11" or smaller',
          'Small blankets or tarps',
          'Small umbrellas',
          'Rain jackets',
          'Most wearable neck fans and small handheld fans'
        ]
      },
      {
        heading: 'Don’t Bring',
        slug: 'dont-bring',
        body: 'The following items are not allowed into The Pavilion.',
        items: [
          'Clothing items that do not provide adequate coverage and/or opacity.',
          'Animals: The only exceptions to this rule are service animals. We follow The U.S. Department of Justice guidelines regarding service animals.',
          'Aerosol cans (hairspray, bug spray, sunscreen).',
          'Audio and video recording equipment.',
          'Beverages of any kind.',
          'Detachable lens cameras.',
          'E-liquid or vape juice.',
          'Glass of any kind, to include perfume bottles.',
          'Grills.',
          'Fireworks.',
          'Ice chests.',
          'Laptops and tablets (including Kindles and e-readers).',
          'Laser pointers.',
          'Medication in unmarked containers.',
          'Non-medical masks.',
          'Outside lawn chairs. Specially designed lawn chairs are available for rent at most Live Nation shows for $10. Lawn chairs are free at all performing arts events.',
          'Play pens.',
          'Pocket knives.',
          'Selfie sticks.',
          'Strollers are allowed in the plaza areas, but not under the tent or on the lawn.',
          'Tents or sun shades.',
          'Large umbrellas.',
          'Weapons: While it is legal to open carry or carry a concealed handgun in Texas, we do not allow guns in our facility.'
        ],
        sourceLabel: 'Plan Your Visit: Don’t Bring'
      },
      {
        heading: 'Food & Drink',
        slug: 'food-drink',
        body: 'Outside liquids of any kind are not allowed at any Pavilion events.',
        items: [
          'Personal food is allowed at Live Nation (rock, country, pop, etc.) shows in the amount of one, one-gallon ziploc bag per person. This amount restriction does not apply to Performing Arts (symphony, ballet, opera, etc.) shows.',
          'Empty, reusable bottles/cups are allowed at most shows. Chilled water fountains/bottle fillers are available at The Pavilion. Some artists may have more specific policies, such as the removal of lids or only allowing crushable, disposable bottles. We will do our best to communicate these policies as soon as we are made aware of them, but if you bring a reusable bottle or cup we ask that you please remain flexible and are prepared not to bring it in if the artist requires.'
        ]
      }
    ]
  },
  {
    title: 'Rules',
    slug: 'rules',
    icon: 'triangle-exclamation',
    summary: 'Entry, re-entry, seating, weather, drone, tailgating, smoking and ticket-stub rules.',
    aiKeywords: ['rules', 're-entry', 'smoking', 'tailgating', 'drone', 'seat', 'mosh', 'crowd surf'],
    sections: [
      {
        heading: 'Venue Rules',
        slug: 'venue-rules',
        body: 'Guests are always subject to a search upon entering the facility. Guests who refuse the search will be denied entrance. No re-entry is permitted once leaving the gates. No smoking is allowed in the reserved seating areas. This includes e-cigarettes/vapes.',
        items: [
          'Soliciting or vending is not permitted on Pavilion grounds unless previously authorized by Pavilion management.',
          'Small blankets are allowed at most shows. Blankets that wrap into a carrying case must be permanently attached to the case and will be subject to review upon entry.',
          'Guests who show signs of illegal substance abuse or intoxication may be refused entry.',
          'Guests are permitted to stand or dance in front of their seat. Standing ON seats is not allowed.',
          'Standing or dancing in the aisles is not permitted.',
          'Guests (even children) are not allowed to sit or stand on the shoulders of another guest. No throwing objects of any kind.',
          'No reselling (scalping) tickets at any time on The Pavilion grounds.',
          'No tailgating is allowed at The Pavilion or in surrounding parking lots.',
          "Flying drones on or over The Pavilion's property is not permitted at any time.",
          "In an effort to keep unticketed guests from occupying your reserved seat, ticket stubs or your live mobile ticket (no screenshots) are required for entry into the reserved seating area. It's a good idea to transfer a ticket to each member of your group for this reason.",
          'Moshing and crowd surfing can be dangerous and are strongly discouraged. Guests assume all risk associated with such activities. Please be aware of your surroundings and avoid these activities and those associated with them for your own safety.'
        ]
      }
    ]
  },
  {
    title: 'Parking',
    slug: 'parking',
    icon: 'square-parking',
    summary: 'Most guests should navigate to 2203 Timberloch Place for free parking. Lots open 30 minutes before gates.',
    aiKeywords: ['parking', 'park', 'drop off', 'pickup', 'paid parking', 'accessible parking', 'address'],
    sections: [
      {
        heading: 'Free Parking',
        slug: 'free-parking',
        body: 'Lots open 30 minutes before gates. Most guests should navigate to 2203 Timberloch Place for free parking.',
        cta: { label: 'Get Me to Free Parking', href: 'https://maps.app.goo.gl/9Xxa95dCiio6uY6K8', type: 'external', openInNewTab: true }
      },
      {
        heading: 'Paid and Accessible Parking',
        slug: 'paid-accessible-parking',
        body: 'Paid Parking uses 9809 Six Pines Drive, The Woodlands, TX 77380. Please note that paid parking is limited in space. Paid parking can be purchased prior to the event, as available and is typically $45. Parking at Performing Arts shows is typically $15.',
        items: [
          'Accessible Parking - 9809 Six Pines Drive, The Woodlands, TX 77380.',
          'Accessible Parking is free on a first-come, first-served basis. Please have your proper credentials displayed upon arrival. Overflow accessible parking is available at 9669 Grogans Mill Road.',
          'Overflow accessible parking is available at 9669 Grogans Mill Road.',
          'Drop-Off and Pick-Up - 2005 Lake Robbins Drive, The Woodlands, TX 77380.'
        ]
      }
    ]
  },
  {
    title: 'Accessibility',
    slug: 'accessibility',
    icon: 'wheelchair',
    summary: 'Arrival, mobility assistance, accessible tickets, facilities, ASL, listening devices, service animals and sensory accommodations.',
    aiKeywords: ['accessibility', 'wheelchair', 'asl', 'service animal', 'sensory', 'accessible tickets'],
    sections: [
      {
        heading: 'Accessibility Support',
        slug: 'accessibility-support',
        body: 'The Pavilion is committed to creating an enjoyable and accessible experience for all guests. Guests who need assistance before their visit are encouraged to contact The Pavilion in advance or call the Box Office at 281-364-3024.',
        items: [
          'Arrival and Parking',
          'Passenger drop-off and pick-up is available in front of the North Plaza at 2005 Lake Robbins Drive.',
          'Free accessible parking is available on a first-come, first-served basis in the Gold Lot, located next to the Town Center Parking Garage. Access to the Gold Lot is available from Six Pines Drive.',
          'Wheelchair and Mobility Assistance',
          'Guests who need wheelchair assistance to reach their seat should notify a Pavilion staff member upon arrival. Wheelchairs are available only for escorted transport to seating areas and cannot be kept or rented for use during the event.',
          'Guests with temporary mobility needs, including injuries or recent surgery, may also request assistance from Pavilion staff.',
          'Accessible Tickets',
          'Accessible tickets may be purchased online through Ticketmaster or in person at The Pavilion Box Office.',
          'For questions about accessible seating or ticketing, please call the Box Office at 281-364-3024.',
          'Accessible Facilities',
          'Accessible restrooms, ramps and concession windows are available throughout the venue.',
          'ASL Interpretation and Assistive Listening',
          'American Sign Language interpretation is available by request. Requests must be made at least three weeks before the event so qualified interpreters can be arranged.',
          'Assistive listening headsets are available at no charge during all performances. Guests may request a headset at the Information Booth in the North Plaza.',
          'Service Animals',
          'Service animals are welcome at The Pavilion in accordance with applicable law and must remain under the handler’s control at all times.',
          'Pets and emotional support animals are not permitted unless otherwise allowed by venue policy.',
          'Sensory Accommodations',
          'Guests with sensory needs are encouraged to contact The Pavilion before their visit to discuss available accommodations.'
        ]
      }
    ]
  },
  {
    title: 'Concessions',
    slug: 'concessions',
    icon: 'utensils',
    summary: 'Food, drinks, cashless transactions, plaza locations and roaming concessions support.',
    aiKeywords: ['concessions', 'food', 'drinks', 'cash', 'cashless', 'beer', 'cocktail'],
    sections: [
      {
        heading: 'What’s on the Menu',
        slug: 'menu',
        body: 'Awesome eats and cold drinks amplify the experience of an epic show. Stay fueled up with a variety of concessions options located in the North, South and Lawn plazas. All transactions are now cashless.',
        items: [
          "Alongside our concessions partner, Aramark, we're excited to offer you a wide range of concessions options. Whether you're looking for a quick bite to eat or grabbing a whole meal to enjoy on the lawn, we've got you covered. There's traditional concert fare like hamburgers and nachos right alongside special eats you're sure to love. With cold drinks ranging from Pepsi products to an ever-changing variety of St. Arnold's brews, craft beers, wines and speciality cocktails, there's always a thirst-quenching option right around the corner. Keep an eye (and an ear) out for concessions team members ready to bring drinks and bites to you, too."
        ]
      }
    ]
  },
  {
    title: 'Ticket Info',
    slug: 'ticket-info',
    icon: 'ticket',
    summary: 'Mobile tickets, will call, official Ticketmaster source, transfer tips, children and box office hours.',
    aiKeywords: ['ticket', 'tickets', 'box office', 'will call', 'screenshot', 'children', 'ticketmaster'],
    sections: [
      {
        heading: 'Accepted Tickets',
        slug: 'accepted-tickets',
        body: 'All shows at The Pavilion are rain or shine. Please have your digital tickets pulled up in your Ticketmaster or Live Nation app when you arrive at the gates.',
        items: [
          'Accepted Tickets',
          'Mobile entry with Safetix rolling barcode.',
          'Will call pick-up',
          'Hard tickets (old school tickets)',
          'Unaccepted Ticket Examples',
          'Static QR Codes',
          'Screenshots of tickets',
          "Print-at-home tickets or other PDF's (printed or digital)"
        ]
      },
      {
        heading: 'Box Office Hours',
        slug: 'box-office',
        body: 'Tickets for most events can be purchased in person at The Pavilion Box Office. The Cynthia Woods Mitchell Pavilion has two onsite Box Offices: The North Box Office and the South Box Office. To contact the Box Office please call 281.364.3024 or email boxoffice@woodlandscenter.org.',
        items: [
          'North Box Office:',
          'Located at 2005 Lake Robbins Drive, The Woodlands, TX 77380',
          'Box Office hours are Monday - Friday 10 a.m. to 5 p.m.',
          'On event days, The Box Office is open from 10 a.m. through intermission Monday- Saturday',
          'For Sunday events, the Box Office is open at noon through intermission. The Box Office may be closed on holidays and during non-ticketed events',
          'South Box Office:',
          'The South Box Office is located at the South Gate of the venue and is only open on events days.',
          'The South Box Office will open at gates on event days.'
        ]
      },
      {
        heading: 'Official Ticketing Source',
        slug: 'official-ticketing-source',
        body: 'Ticketmaster is the official ticketing source for The Pavilion. The Pavilion does not endorse or recommend any other ticketing source for events held at The Pavilion. Please use caution when purchasing tickets from any website other than ticketmaster.com for events held at The Pavilion. Guests who purchase invalid tickets from a re-sale site must contact that vendor for resolution. If you have already purchased tickets from a re-seller the safest way to ensure that your tickets are good is to insist that the re-seller transfers the tickets to your Ticketmaster / Live Nation account (there is no cost for the re-seller to do this).'
      },
      {
        heading: 'Transfer Tickets to Each Member of Your Party',
        slug: 'transfer-tickets',
        body: "Once you have entered our gates, it's a good idea to transfer a ticket to each member of your group before entering the seating area. Transferring your tickets will allow everyone to re-enter the seating area even if your group splits up. It's the same idea as making sure everyone has a ticket stub before they go to the restroom or concessions.",
        items: ['Get started by opening the Ticketmaster or Live Nation app and tapping the "Transfer" button. Please note that each ticket recipient will also need a Ticketmaster or Live Nation account.']
      },
      {
        heading: 'Children',
        slug: 'children',
        body: 'For most contemporary events, children age five and under are admitted free to the lawn without a ticket when accompanied by a ticketed adult. Children age two and under can sit free in the reserved section if seated in an adult’s lap. Some exceptions apply to specific children’s performances. For the Children’s Festival, children age two and under can enter without a ticket.'
      }
    ]
  },
  {
    title: 'Facilities & Rentals',
    slug: 'facilities-rentals',
    icon: 'hotel',
    summary: 'Venue rental and facility-use questions route to the Rent The Pavilion page and Contact popover.',
    aiKeywords: ['rent', 'facility', 'facilities', 'rental', 'book'],
    sections: [
      {
        heading: 'Rent The Pavilion',
        slug: 'rent-the-pavilion',
        body: 'For facility rental and private event information, use the Rent The Pavilion page or contact the venue team.',
        cta: { label: 'Rent The Pavilion', href: '/rent', type: 'internal' }
      }
    ]
  }
];

export const mission = {
  title: 'Arts access for you. Arts access for all.',
  subtitle: 'The Arts are the live performances and invigorating creations that bind us together through a shared experience of beauty. We believe access to the Arts is fundamental to human thriving. That’s why our non-profit mission is to make sure that everyone has the chance to experience the arts for themselves - today and far into the future.',
  heroImage: asset('content-images/mission/26_Arts Access Mission_Hero .jpg'),
  video: {
    title: 'Mission Video',
    poster: asset('video-placeholders/School Dayz-2.jpg'),
    href: 'CONFIGURE_MISSION_VIDEO_URL_IN_CMS'
  },
  donateCTA: { label: 'Support The Arts', href: '/mission/support-the-arts' },
  programsCTA: { label: 'See how the mission works', href: '#mission-pathways' },
  impactHeading: {
    eyebrow: 'Data Highlight',
    title: 'Missional Impact in 2025',
    subtitle: 'A quick look at how arts access moved from the stage into classrooms, scholarships and community programs.'
  },
  humanProof: {
    eyebrow: 'Mission Story',
    title: "Tarvia's Story",
    body: 'Use this feature spot for a short video or cut-out portrait that lets one real Pavilion person connect the impact numbers to a human story.',
    image: asset('content-images/mission/Schol-Award-82.jpg'),
    cta: { label: 'Add story video', href: 'CONFIGURE_TARVIA_STORY_VIDEO_URL_IN_CMS', type: 'external', openInNewTab: true }
  },
  impactStats: [
    { value: '225K', label: 'People Impacted by Arts Programs' },
    { value: '$1.31M', label: 'Awarded in Arts Scholarships and Grants' },
    { value: '67', label: 'Arts Outreach Events across the city' }
  ],
  tabs: [
    { label: 'Funding the Arts', slug: 'funding', body: 'Scholarships, professional development grants, resource grants, travel grants and community arts grants help artists and educators remove practical barriers to arts access.' },
    { label: 'Arts Outreach', slug: 'outreach', body: 'Free, high-impact arts programs meet students, families, educators and community groups at The Pavilion, in classrooms and across the region.' },
    { label: 'Arts Shows', slug: 'arts-shows', body: 'Free community shows create a laid-back first step into classical music, performing arts and world-class live performance.' }
  ]
};

export const seasonSeats = {
  title: 'Turn every concert night into the best seat in the house.',
  subtitle: 'Season Seats give clients, employees, friends and family a premium Pavilion experience with reserved seats, club access and a team ready to help you plan the nights that matter most.',
  image: asset('content-images/landing-pages/DSC00552.jpg'),
  primaryCTA: { label: 'Request Availability', type: 'popover', popoverId: 'seasonSeats' },
  learnMoreCTA: { label: 'Learn More', href: '/season-seats' },
  holderLoginCTA: { label: 'SS Holder Log-In', href: 'CONFIGURE_ACCOUNT_MANAGER_URL_IN_CMS', type: 'external', openInNewTab: true },
  placeMap: {
    title: 'Find Your Place at The Pavilion',
    image: {
      src: asset('content-images/season-seats/pricing-map-ss-26.png'),
      alt: 'Season Seats pricing map and seating chart'
    }
  },
  pricing: {
    eyebrow: 'How it works',
    title: 'A guided purchase, not a guessing game',
    body: 'Share how many seats you need, who you want to host and the kinds of shows you care about. The Pavilion team will walk you through available locations, package timing and the right fit before you commit.',
    cta: { label: 'Start the Conversation', type: 'popover', popoverId: 'seasonSeats' }
  },
  seatingMap: {
    eyebrow: 'Seat guidance',
    title: 'Find the right view for the way you host',
    body: 'Prefer easy arrival, a memorable client night, a close-to-the-stage feel or a comfortable home base for family and friends? We will help compare options around your priorities instead of making you sort through every section alone.'
  },
  conversion: {
    eyebrow: 'Ready when you are',
    title: 'Ask about Season Seats availability',
    body: 'Tell us whether you are entertaining clients, rewarding employees or making family concert nights easier. A Pavilion team member will follow up with practical options and next steps.',
    cta: { label: 'Request Availability', type: 'popover', popoverId: 'seasonSeats' }
  },
  tabs: [
    { label: 'Host with Ease', slug: 'host-with-ease', image: asset('content-images/partners-sponsors/Fans-27.jpg'), body: 'Invite clients, partners or employees without rebuilding the plan every time. Season Seats create a polished, repeatable way to host around major concert nights.', cta: { label: 'Request Availability', type: 'popover', popoverId: 'seasonSeats' } },
    { label: 'Club Access', slug: 'club-access', image: asset('content-images/partners-sponsors/SSS Fans-27.jpg'), body: 'Make the night feel elevated before the show starts. Club access gives your guests a comfortable place to gather, connect and settle into the Pavilion experience.', cta: { label: 'Explore Options', type: 'popover', popoverId: 'seasonSeats' } },
    { label: 'Easy to Share', slug: 'easy-to-share', image: asset('content-images/partners-sponsors/Fans-13.jpg'), body: 'Use your seats for business development, employee recognition, family nights or friends who never miss a show. The value is in having an easy yes ready when the calendar fills.', cta: { label: 'Talk to the Team', type: 'popover', popoverId: 'seasonSeats' } }
  ]
};

export const grantPrograms = [
  {
    title: 'Professional Development Grants for Arts Educators',
    slug: 'professional-development',
    subtitle: 'Helping visual and performing arts educators in the Greater Houston Area improve teaching methods and curriculum through impactful PD experiences.',
    image: asset('content-images/landing-pages/Brainstormers-19.jpg'),
    applicationCTA: { label: 'Apply Now', href: 'CONFIGURE_FOUNDANT_URL_IN_CMS', type: 'external', openInNewTab: true },
    quoteHighlight: '“I was captivated by the opportunity to engage with fellow educators, exchanging ideas, tools and strategies to further advance and enrich our students’ learning experiences. Being surrounded by individuals who deeply understand and live for the art of dance was incredibly motivating. It was uplifting to connect with those who not only use dance as a medium for education but also as a source of personal fulfillment and creative expression.”',
    tabs: [
      { label: 'Qualifications', slug: 'qualifications', body: 'This grant program is designed to financially assist arts educators who want to participate in workshops, conferences and seminars that further their personal development in arts instruction and arts education. The program is open to visual arts and performing arts educators in K-12 public schools, including charter schools, within the Greater Houston area and located in the following counties: Austin, Brazoria, Chambers, Fort Bend, Galveston, Grimes, Harris, Liberty, Montgomery, San Jacinto, Walker and Waller.' },
      {
        label: 'Dates',
        slug: 'dates',
        items: [
          'Fall applications will be accepted from August 11, 2025 to September 15, 2025.',
          'Events must occur between January 1, 2026 and May 31, 2026.',
          'Proof of Expenses and Final Report Due By June 30, 2026.',
          'Spring 2026 Application Dates will be announced soon.'
        ]
      },
      { label: 'Impact', slug: 'impact', body: 'Teachers who have received grants to attend conferences say the experience is transformative. From hands-on training with expert mentors to fresh inspiration for student projects, these opportunities help educators grow as both artists and instructors. They return to the classroom energized—with new demos, creative strategies and deeper skills to share.' }
    ]
  },
  {
    title: 'Arts Resource Grants',
    slug: 'resources',
    subtitle: 'Assisting arts curriculum programs in acquiring essential instruments, equipment, supplies and funding for performances, exhibitions, learning experiences and group training.',
    image: asset('content-images/mission/MSP IPZ-33.jpg'),
    applicationCTA: { label: 'Apply Now', href: 'CONFIGURE_FOUNDANT_URL_IN_CMS', type: 'external', openInNewTab: true }
  },
  {
    title: 'Arts Travel Grants',
    slug: 'travel',
    subtitle: 'Empowering arts programs to share their skill and inspiration beyond local communities by providing key funding for travel and special performance opportunities.',
    image: asset('content-images/mission/SSS HSO-16.jpg'),
    applicationCTA: { label: 'Apply Now', href: 'CONFIGURE_FOUNDANT_URL_IN_CMS', type: 'external', openInNewTab: true }
  },
  {
    title: 'Community Arts Grants',
    slug: 'arts-organizations',
    subtitle: 'Supporting nonprofit community arts organizations in Harris and Montgomery Counties that are breaking down barriers, amplifying impact and bringing meaningful artistic experiences to our local communities.',
    image: asset('content-images/partners-sponsors/BostonPops-13.jpg'),
    applicationCTA: { label: 'Apply Now', href: 'CONFIGURE_FOUNDANT_URL_IN_CMS', type: 'external', openInNewTab: true }
  },
  {
    title: 'Fine Arts Scholarships',
    slug: 'scholarships',
    subtitle: 'Enabling aspiring artists to pursue their dreams at the collegiate level through life-changing funding for graduating high school seniors, with over $2.9 million in scholarships awarded since the program’s inception.',
    image: asset('content-images/mission/Scholarship Recipients 2025.jpg'),
    applicationCTA: { label: 'Apply Now', href: 'CONFIGURE_ACCEPTD_URL_IN_CMS', type: 'external', openInNewTab: true }
  }
].map((program) => ({
  quoteHighlight: program.quoteHighlight || 'Every grant helps educators and artists turn practical support into deeper arts experiences.',
  finalCTA: program.applicationCTA ? { ...program.applicationCTA, label: 'Apply Today' } : null,
  tabs: program.tabs || (program.slug === 'scholarships'
    ? [
        {
          label: 'Qualifications',
          slug: 'qualifications',
          body: 'An applicant must:',
          items: [
            'Be a graduating high school senior.',
            'Major in a fine arts discipline at a college or university or focus on their fine arts discipline at an institute, conservatory or other similar higher education school of the arts.',
            'Reside or attend school within the following school district attendance zones: Aldine ISD, Conroe ISD, Cypress-Fairbanks ISD, Houston ISD, Humble ISD, Klein ISD, Magnolia ISD, Montgomery ISD, New Caney ISD, Richards ISD, Splendora ISD, Spring ISD, Tomball ISD and Willis ISD.',
            'Applicants must attend a public school, a Texas Education Agency (TEA) accredited charter school or TEA accredited online school. Applicants who attend TEA accredited online schools operated by school districts not listed are eligible only if they reside within the above school district boundaries.'
          ]
        },
        { label: 'Dates', slug: 'dates', body: 'Applications open in October and close in January.' },
        { label: 'Impact', slug: 'impact', body: 'Marie Video' },
        { label: 'Renewal Scholarships', slug: 'renewal-scholarships', body: 'Past Pavilion Partners Fine Arts Scholarship recipients who are continuing their undergraduate fine arts studies may renew their awards, based on eligibility criteria.' }
      ]
    : [
        { label: 'Qualifications', slug: 'qualifications', body: `${program.title} supports eligible arts educators, schools and organizations ready to expand access and opportunity.` },
        { label: 'Dates', slug: 'dates', body: 'Applications open seasonally, with clear review windows and reporting expectations for selected recipients.' },
        { label: 'Impact', slug: 'impact', body: 'Grant support helps remove practical barriers so more students, teachers, artists and audiences can participate.' }
      ]),
  status: 'open',
  ...program
}));

const outreachProgramDetails = {
  'instrument-petting-zoo': {
    primaryCTA: { label: 'Host a Zoo', type: 'popover', popoverId: 'contact' },
    tabs: [
      { label: 'Impact', slug: 'impact', body: 'The Pavilion’s Instrument Petting Zoo, powered by Ovintiv, is a free outreach program where children have the chance to get up close and personal with the orchestral instruments they see professionally played on stage.' },
      { label: 'Upcoming Dates', slug: 'upcoming-dates', body: 'Use this area for seasonal host dates, school visits and community appearances as they are confirmed.' },
      { label: 'Frequently Asked Questions', slug: 'faqs', body: 'Staff can answer space needs, age range, timing and volunteer questions before a school or community partner hosts a zoo.' },
      { label: 'Become a Zookeeper', slug: 'become-a-zookeeper', body: 'Volunteers can help students safely explore instruments, keep the activity moving and make the experience welcoming for first-time learners.', cta: { label: 'Ask about volunteering', type: 'popover', popoverId: 'contact' } },
      { label: 'Donate an Instrument', slug: 'donate-an-instrument', body: 'Instrument donations help keep the zoo hands-on and accessible for more children across the community.', cta: { label: 'Donate an instrument', type: 'popover', popoverId: 'contact' } }
    ]
  },
  'fine-arts-education-days': {
    primaryCTA: { label: 'Register Your Class', type: 'popover', popoverId: 'contact' },
    tabs: [
      { label: 'Impact', slug: 'impact', body: 'Students jaws drop as they experience the thrilling power of a full symphony, most for the first time. They hear their favorite movie soundtracks alongside iconic classical pieces – and are often inspired to pick up an instrument and start playing themselves.' },
      {
        label: 'Upcoming Dates',
        slug: 'upcoming-dates',
        items: [
          'Registration Opens in August',
          'Fine Arts Education Days typically take place on the third Wednesday and Thursday in October'
        ]
      },
      { label: 'Newsletter Sign-Up', slug: 'newsletter', body: 'Newsletter Sign-Up > Hubspot Form', cta: { label: 'Newsletter Sign-Up', type: 'popover', popoverId: 'get-emails' } }
    ]
  },
  'hats-off-to-reading': {
    primaryCTA: { label: 'Get Reminders', type: 'popover', popoverId: 'get-emails' },
    tabs: [
      { label: 'Impact', slug: 'impact', body: 'Our founder, Cynthia Mitchell, believed in the power of literacy paired with the inspiration of the arts. We do, too. Each year, we see thousands of kids and families walk out of the Event Center with a free book in their hands – and straight into a stunning, free performing arts experience tailored just for them.' },
      { label: 'Upcoming Dates', slug: 'upcoming-dates', body: 'Hats Off to Reading typically takes place in September before a kid-friendly symphony performance.' }
    ]
  },
  'mini-pavilion-maestros': {
    primaryCTA: { label: 'Sign Up For Free', type: 'popover', popoverId: 'get-emails' },
    tabs: [
      {
        label: 'Perks',
        slug: 'perks',
        items: [
          'Free reserved Mezzanine seating at performing arts events (open to Maestros and their families)',
          'Opportunities to meet the conductor and artists',
          'Early gate entry at select events and at Hocus Pocus Pops',
          'Opportunity to Check-in at the Mini Maestros Booth in the North Plaza to earn rewards'
        ]
      },
      {
        label: 'Rewards Program',
        slug: 'rewards-program',
        items: [
          'A special membership lanyard and badge when attending your first Performing Arts Show',
          'A free ticket to Children’s Festival after attending (2) Performing Arts Shows',
          'A free Mini Maestros T-Shirt after attending (4) Performing Arts Shows',
          'A special surprise if you attend ALL Performing Arts Shows in a season'
        ]
      },
      { label: 'Ask a Question', slug: 'ask-a-question', body: 'Ask a Question > agravois@woodlandscenter.org', cta: { label: 'Ask a Question', type: 'popover', popoverId: 'contact' } }
    ]
  },
  'arts-in-action-awards': {
    primaryCTA: { label: 'Nominate Your Student', type: 'popover', popoverId: 'contact' },
    tabs: [
      { label: 'Qualifications', slug: 'qualifications', body: 'The Arts in Action awards program honors middle and junior high school performing arts students nominated by their music teacher/director, not only for their excellence as artists, but for the dedication, leadership and commitment to their entire school community.' },
      { label: 'Impact', slug: 'impact', body: 'Excellence and energy in the arts needs to be recognized. Students who receive these awards are propelled towards greater future accomplishments, even as they inspire their classmates and communities.' },
      {
        label: 'Upcoming Dates',
        slug: 'upcoming-dates',
        items: [
          'Arts in Actions Awards nominations are submitted in January',
          'Awardees are selected and notified in March'
        ]
      }
    ]
  },
  'arts-on-the-go': {
    primaryCTA: { label: 'Register Your Class or School', href: 'CONFIGURE_GOOGLE_SHEETS_URL_IN_CMS', type: 'external', openInNewTab: true },
    tabs: [
      {
        label: 'Key Information',
        slug: 'key-information',
        items: [
          'Registration is required.',
          'Boxes are available on a first-come, first-served basis.',
          'Boxes are expected to be delivered to schools in early March.',
          'Items and books may vary due to availability.'
        ]
      },
      { label: 'K-2nd Grade A', slug: 'k-2-a', body: 'A grade level-tailored Exploration Box delivered to your classroom - filled with hands-on activities, standards-aligned curriculum ideas, craft supplies with instructions and fun prizes for students to take home – for free.' },
      { label: 'K-2nd Grade B', slug: 'k-2-b', body: 'A second K-2nd grade Exploration Box option gives teachers another age-appropriate set of hands-on arts activities and take-home materials.' },
      { label: '3rd-5th Grade', slug: 'third-fifth', body: 'Older elementary students receive activities and materials designed to connect classroom learning with accessible arts exploration.' }
    ]
  },
  'chamberfest-strings-camp': {
    primaryCTA: { label: 'Register for Chamberfest', href: 'CONFIGURE_CHAMBERFEST_URL_IN_CMS', type: 'external', openInNewTab: true },
    tabs: [
      { label: 'Impact', slug: 'impact', body: 'Students hone their musical skills as they learn from the best of the best, but also have the opportunity to engage with crucial topics like public speaking, the balance of practice and play and the realities of leading a life in the arts. Chamberfest students leave with new friendships, deeper inspiration and powerful confidence.' },
      { label: 'History', slug: 'history', body: 'Chamberfest was founded by Pavilion Scholarship Recipient Marie Daniels in 2013 and adopted as one of The Pavilion’s Arts Outreach programs the next year.' },
      { label: 'Curriculum', slug: 'curriculum', body: 'This week-long intensive entails four days of rehearsals and coaching and one 45-minute individual lesson for each student. At the week’s end there is a Festival Finale student performance. Students also have daily workshops on topics such as public speaking, improvisation, music history and communication through music.' }
    ]
  },
  'scout-days': {
    primaryCTA: { label: 'Register for Scout Day', type: 'popover', popoverId: 'contact' },
    tabs: [
      { label: 'Date 1', slug: 'date-1', body: 'Use this area for the first Scout Day event date and registration window as it is confirmed.' },
      { label: 'Date 2', slug: 'date-2', body: 'Use this area for the second Scout Day event date and registration window as it is confirmed.' },
      {
        label: 'Registration Information',
        slug: 'registration-information',
        items: [
          'Scout Day is a completely FREE event but scouts must pre-register online in order to participate. Please see the links below to register your scout! View the list of available badges.',
          'Note: Badges will not be available at the Scout Day event. BSA Scouts will have a Merit Badge Counselor sign their blue card application which can be taken to a Scout store to purchase a badge. All other Scouts will receive a signed certificate stating their completion of badge requirements.'
        ]
      },
      { label: 'Badge Experience', slug: 'badge-experience', body: 'Scout Day connects live performance with free, fun, interactive activities that satisfy Music Merit Badge or equivalent arts badge requirements.' }
    ]
  }
};

export const outreachPrograms = [
  ['Instrument Petting Zoo', 'instrument-petting-zoo', 'The Pavilion’s Instrument Petting Zoo, powered by Ovintiv, is a free outreach program where children have the chance to get up close and personal with the orchestral instruments they see professionally played on stage.', asset('content-images/mission/MSP IPZ-22.jpg')],
  ['Fine Arts Education Days', 'fine-arts-education-days', '4th and 5th graders from nearby school districts are invited to The Pavilion for an inspiring, educational and engaging performance from the full Houston Symphony.', asset('content-images/mission/School Dayz-7.jpg')],
  ['Hats Off to Reading', 'hats-off-to-reading', 'Families are invited to engage with the arts at a sprawling, fun and free literacy event in The Pavilion’s Event Center just before a kid-friendly symphony performance kicks off on our Main Stage.', asset('content-images/landing-pages/Brainstormers-5.jpg')],
  ['Mini Pavilion Maestros', 'mini-pavilion-maestros', 'Mini Pavilion Maestros is a FREE program that makes the arts both fun and accessible for kids of all ages!', asset('content-images/mission/Moorehead JHS-3.jpg')],
  ['Arts in Action Awards', 'arts-in-action-awards', 'Arts in Action Awards recognize and reward talented and high-achieving arts students in the Greater Houston Area.', asset('content-images/mission/Schol-Award-55.jpg')],
  ['Arts On The Go', 'arts-on-the-go', 'Get a grade level-tailored Exploration Box delivered to your classroom - filled with hands-on activities, standards-aligned curriculum ideas, craft supplies with instructions and fun prizes for students to take home – for free', asset('content-images/mission/Moorehead JHS-28.jpg')],
  ['Chamberfest Strings Camp', 'chamberfest-strings-camp', 'Chamberfest is a week-long summer camp for Middle School and High School students who play the violin, viola, cello and bass and led by professional musicians. Chamberfest takes place on-site at The Pavilion.', asset('content-images/mission/SSS HSO-11.jpg')],
  ['Scout Days', 'scout-days', 'Scout Day at The Pavilion is designed to provide an opportunity for scouts to earn their Music Merit Badge (or equivalent arts badge) through attending a live concert and participating in FREE, fun and interactive activities that satisfy badge requirements.', asset('content-images/partners-sponsors/Girl Scouts-25.jpg')]
].map(([title, slug, subtitle, image]) => ({
  title,
  slug,
  subtitle,
  image,
  primaryCTA: outreachProgramDetails[slug]?.primaryCTA || { label: 'Start here', type: 'popover', popoverId: 'contact' },
  conversion: {
    eyebrow: 'Mission seekers',
    title: title.includes('Education') || title.includes('Educator') || title.includes('Zoo') || title.includes('Maestros') || title.includes('Scout') || title.includes('Arts On The Go') ? 'Get educator and outreach updates' : 'Get mission stories in your inbox',
    body: 'Get emails from The Pavilion to learn more about our arts outreach programs and the people they impact.',
    cta: { label: 'Join the mission email list', type: 'popover', popoverId: 'get-emails' }
  },
  video: {
    title: `${title} in action`,
    poster: image,
    href: 'CONFIGURE_PROGRAM_VIDEO_URL_IN_CMS',
    subtitle: 'Share a short video here when staff want families, educators or partners to see the program before they register.'
  },
  tabs: outreachProgramDetails[slug]?.tabs || [
    { label: 'Overview', slug: 'overview', body: subtitle },
    { label: 'Who it serves', slug: 'who-it-serves', body: 'Designed for educators, families and community partners who want an approachable first step into live arts learning.' },
    { label: 'Get involved', slug: 'get-involved', body: 'Start with the form and our team will help confirm fit, timing, registration details and next steps.' }
  ],
  seasonalVisibility: { visibility: 'public' }
}));

export const landingPages = [
  {
    title: 'Support The Arts',
    slug: 'mission/support-the-arts',
    subtitle: 'Your gift helps open the gates wider: free performing arts, student programs, educator resources, scholarships, grants and outreach that bring live arts within reach.',
    templatePreset: 'supportArts',
    heroImage: asset('content-images/partners-sponsors/SSS Fans-28.jpg'),
    primaryCTA: { label: 'Make a Gift', href: 'CONFIGURE_DONORPERFECT_DONATION_URL_IN_CMS', type: 'external', openInNewTab: true },
    secondaryCTA: { label: 'Find My Best Way to Help', type: 'popover', popoverId: 'contact' },
    supportIntro: {
      eyebrow: 'Ways to support',
      title: 'Pick the path that matches how you want to make arts access possible',
      subtitle: 'Some supporters want to give now. Some want membership, volunteer leadership or a company partnership. This page gets each visitor to the right next step quickly.'
    },
    supportProof: {
      eyebrow: 'Mission proof',
      title: 'Support becomes access people can feel.',
      body: 'The Pavilion turns donor, volunteer and partner support into free community performances, scholarships, grants, educator resources and outreach across the region.',
      cta: { label: 'Make a Gift', href: 'CONFIGURE_DONORPERFECT_DONATION_URL_IN_CMS', type: 'external', openInNewTab: true }
    },
    conversion: {
      eyebrow: 'Your next step',
      title: 'Choose the support path that fits you',
      body: 'Make a direct gift, become a Stage Lighter, volunteer, or start a corporate partnership. Every path helps more students, families, educators and neighbors experience the arts.',
      cta: { label: 'Get guidance', type: 'popover', popoverId: 'contact' }
    },
    tabs: [
      { label: 'Give Today', slug: 'give-today', summary: 'Fastest way to fund arts access.', body: 'Make a direct gift that supports free performances, arts education, scholarships, grants and outreach that make The Pavilion more accessible for everyone.', cta: { label: 'Donate Now', href: 'CONFIGURE_DONORPERFECT_DONATION_URL_IN_CMS', type: 'external', openInNewTab: true } },
      { label: 'Join Stage Lighters', slug: 'stage-lighters', summary: 'A deeper membership connection.', body: 'Become a Stage Lighter to fund powerful performing arts experiences while enjoying elevated access, remarkable perks and a closer connection to the mission.', cta: { label: 'See Membership', href: '/mission/performing-arts-membership' } },
      { label: 'Volunteer', slug: 'volunteer', summary: 'Give time and leadership.', body: 'Join the Pavilion Partners community and help make arts access possible through fundraising, organization and hands-on event support.', cta: { label: 'Volunteer', href: '/mission/volunteer-membership' } },
      { label: 'Corporate Partnership', slug: 'corporate-partnership', summary: 'Align your company with access.', body: 'Create a partnership that can include sponsorships, volunteerism, brand exposure, activations, event support and program sponsorship.', cta: { label: 'Partner with Us', href: '/mission/corporate-partnership' } }
    ]
  },
  {
    title: 'Arts Membership at The Pavilion',
    slug: 'mission/performing-arts-membership',
    subtitle: 'Join the exclusive group of Stage Lighters that fund our most powerful performances - and enjoy remarkable perks, too. This is the best way to make a donation to The Pavilion.',
    templatePreset: 'supportArts',
    heroImage: asset('content-images/partners-sponsors/4.5.25 - Boston Pops-9006.jpg'),
    primaryCTA: { label: 'Join Stage Lighters', href: 'CONFIGURE_ACCOUNT_MANAGER_URL_IN_CMS', type: 'accountManager', openInNewTab: true },
    secondaryCTA: { label: 'Call Joan', type: 'popover', popoverId: 'contact' },
    tabs: [
      { label: 'Member Impact', slug: 'member-impact', body: 'Your membership makes it possible for thousands to attend our performing arts shows, completely for free.' },
      { label: 'Elevated Experience', slug: 'elevated-experience', body: 'Tickets delivered straight to your phone, private parking and entry and the best seats in the house to every performing arts show give you the ultimate arts experience.' },
      { label: 'Exclusive Access', slug: 'exclusive-access', body: 'Gain entry to the exclusive Woodforest Bank Club (dinner included), open the door to remarkable behind-the-scenes experiences and garner recognition as a true patron of the arts in your community.' }
    ]
  },
  {
    title: 'Pavilion Partners',
    slug: 'mission/volunteer-membership',
    subtitle: 'Partners are a remarkable, thriving community of volunteers that help make The Pavilion’s mission for arts access possible through fundraising, organization and hands-on efforts. This volunteer membership program offers access to volunteer at all Pavilion Live Nation, Performing Arts and Education events - all while receiving some fun perks, of course.',
    templatePreset: 'supportArts',
    heroImage: asset('content-images/partners-sponsors/HPP-68.jpg'),
    primaryCTA: { label: 'Become a Pavilion Partner', href: 'CONFIGURE_DONORPERFECT_URL_IN_CMS', type: 'external', openInNewTab: true },
    tabs: [
      { label: 'Support Mission', slug: 'support-mission', body: 'Volunteers at The Pavilion participate the meaningful work of making the arts accessible to all by giving of their time, talents and leadership.', cta: partnersJoinCTA },
      { label: 'Work Events', slug: 'work-events', body: 'Volunteers work with Pavilion Staff to park buses, provide directions to teachers and students (20,000+ each year) and assist with seating assignments.', cta: partnersJoinCTA },
      { label: 'Operate Activities', slug: 'operate-activities', body: 'Our Performing Arts shows are all about removing barriers and free, welcoming, kid-friendly fun in the plazas before the show plays a key role in making that possible.', cta: partnersJoinCTA },
      { label: 'Usher', slug: 'usher', body: 'Help provide directions to seating, answer common questions clearly and courteously and know where to point guests for more detailed information.' },
      { label: 'Info Booths', slug: 'info-booths', body: 'Our Information Booths are often the first point of contact for guests at Performing Arts shows. Info Booth volunteers also help field a wide variety of questions and connect guests with the resources they need.', cta: partnersJoinCTA },
      { label: 'Committees', slug: 'committees', body: "The Pavilion Partners are crucial to supporting many of The Pavilion's fundraising, education and scholarship efforts - and that starts at the committee level.", cta: partnersJoinCTA }
    ]
  },
  {
    title: 'Partners Resource Page',
    slug: 'mission/volunteer-membership/resources',
    subtitle: 'A seasonal resource hub for Pavilion Partners, event lists, weather guidance, parking and Paycom reminders.',
    templatePreset: 'blankFlow',
    heroImage: asset('content-images/partners-sponsors/HPP-40.jpg'),
    primaryCTA: { label: 'Sign Up to Volunteer', href: 'CONFIGURE_PAYCOM_URL_IN_CMS', type: 'external', openInNewTab: true },
    tabs: [
      { label: 'Performing Arts Events List', slug: 'performing-arts-events-list', body: 'Find upcoming Performing Arts events where Partners help welcome guests and support the night.' },
      { label: 'Education Event List', slug: 'education-event-list', body: 'Explore education events where volunteers help students and educators feel prepared and cared for.' },
      {
        label: 'Weather and Heat Awareness',
        slug: 'weather',
        body: 'In the event of serious inclement weather during a show at The Pavilion:',
        items: [
          'Pavilion shows are rain or shine, which means that rain alone will not deter a show from continuing as planned.',
          "Severe inclement weather may cause a show to be delayed, rescheduled or even canceled. In these circumstances, the most up to date information will be displayed on the screens on-site, as well as on The Pavilion's social media and website. The show will only be rescheduled or canceled if it is unsafe to continue.",
          'Under certain circumstances, The Pavilion may enter into a 30 minute weather delay. During this time, all volunteers, guests and staff are urged to take shelter until given the ALL CLEAR on the screens, social media and website. If you have any questions about where to take shelter, please speak with a red-shirted supervisor.',
          'If you are on-site during an inclement weather event, you can help by remaining calm and staying under shelter. If guests approach you to ask questions, it is best to direct them to a red-shirted supervisor. Also, please remember that The Pavilion Lounge is an excellent and free place to take shelter during an inclement weather event.',
          'Get to know the signs of heat exhaustion so that you can assist yourself and others throughout the summer.'
        ]
      },
      { label: 'Parking', slug: 'parking', body: 'Please allow for additional time to arrive at The Pavilion at the designated report time. For Performing Arts, Education Events and Graduations, parking in the Flat Lot and Gravel Lot. For Live Nation Concerts, park in the Silver Lot and take the shuttle.' },
      { label: 'Paycom', slug: 'paycom', body: 'All Partners must have a Paycom login. Paycom is used for tracking hours and annual background checks.' },
      { label: 'Renew Partners Membership', slug: 'renew-partners-membership', body: 'Returning Partners can renew membership here before signing up for new volunteer shifts.', cta: { label: 'Renew membership', href: 'CONFIGURE_DONORPERFECT_URL_IN_CMS', type: 'external', openInNewTab: true } },
      { label: 'Contact Erin', slug: 'contact-erin', body: 'Partners with questions about membership, shifts, resources or event expectations can contact Erin for help.', cta: { label: 'Contact Erin', type: 'popover', popoverId: 'contact' } }
    ]
  },
  {
    title: 'Corporate Partnership',
    slug: 'mission/corporate-partnership',
    subtitle: 'Partner with The Cynthia Woods Mitchell Pavilion - consistently ranked as one of the top amphitheaters in the world and nestled among the picturesque pines of The Woodlands, Texas.',
    templatePreset: 'supportArts',
    eyebrow: 'Arts Access',
    heroImage: asset('content-images/partners-sponsors/Fans-13.jpg'),
    primaryCTA: { label: 'Become a Corporate Partner', type: 'popover', popoverId: 'contact' },
    conversion: {
      eyebrow: 'Keep exploring',
      title: 'Stay close to the mission',
      body: 'Get stories, program opportunities and simple next steps for connecting with The Pavilion’s arts access work.',
      cta: { label: 'Join the email list', type: 'popover', popoverId: 'get-emails' }
    },
    tabs: [
      {
        label: 'Live Nation Sponsorships',
        slug: 'live-nation-sponsorships',
        body: 'Find your place among the remarkable family of sponsors that support our biggest shows by becoming a Live Nation Sponsor. Be a part of:',
        items: ['60+ performances', '600k attendees', '16,500 capacity', 'Diverse programming that includes everything from classical symphonies to metal, country and rap', 'Remarkable facility flexibility'],
        cta: { label: 'Download Deck', href: '/assets/documents/decks/25_LN_Sponsorships.pdf', type: 'download' }
      },
      {
        label: 'Performing Arts Sponsorships',
        slug: 'performing-arts-sponsorships',
        body: "Support The Pavilion's arts outreach programs even more directly by becoming a Performing Arts sponsor. In 2024...",
        items: ['57,000+ attendees at free arts shows', '25,000+ students and teachers reached through Arts Outreach - on and off the stage', '$400k+ awarded in arts scholarship and grants', '9900+ volunteer hours donated'],
        cta: { label: 'Download Deck', href: '/assets/documents/decks/25_PA_Spnosorships.pdf', type: 'download' }
      },
      { label: 'Volunteerism', slug: 'volunteerism', body: 'The Pavilion is ready to partner with your organization to create impactful, memorable volunteer opportunities for your employees.', cta: { label: 'Download Deck', href: '/assets/documents/decks/25_Corporate_Volunteers.pdf', type: 'download' } },
      { label: 'Event Sponsorship', slug: 'event-sponsorship', body: "By sponsoring an event at The Pavilion, you'll not only get your brand in front of thousands of eyes in a highly focused, energized environment, but also strengthen bonds in your community by creating spaces where everyone can belong.", cta: { label: 'Start a Conversation', type: 'popover', popoverId: 'contact' } },
      { label: 'Brand Exposure', slug: 'brand-exposure', body: 'Partner with The Pavilion team to drive brand exposure across digital and physical channels including social media, email, on-site signage and more.', cta: { label: 'Email for Info', type: 'popover', popoverId: 'contact' } },
      { label: 'Activations', slug: 'activations', body: "From hosting a private event in our Woodforest Bank Club to setting up a highly trafficked booth in The Pavilion's signature North Plaza, the possibilities for our corporate partners to create engaging on-site experiences are nearly limitless.", cta: { label: 'Get In Touch', type: 'popover', popoverId: 'contact' } },
      { label: 'Program Sponsorship', slug: 'program-sponsorship', body: 'Sponsoring one of our outreach programs – like our one-of-a-kind arts field trips or educator grants - leaves a lasting impact by extending arts access to even more members of our community.', cta: { label: 'Get Involved', type: 'popover', popoverId: 'contact' } }
    ],
    sponsorGroups: corporateSponsorGroups
  },
  {
    title: 'Arts Educator Resources and Programs',
    slug: 'mission/arts-educators',
    subtitle: 'We support arts educators in their efforts to make the arts more accessible through free, high-impact arts programs and resources.',
    templatePreset: 'blankFlow',
    heroImage: asset('content-images/mission/School Dayz-36.jpg'),
    visibility: 'hidden',
    primaryCTA: { label: 'Newsletter Sign-Up', type: 'popover', popoverId: 'get-emails' },
    tabs: [
      { label: 'Fine Arts Education Days', slug: 'fine-arts-education-days', body: '4th and 5th graders from Conroe, Spring and Willis ISD are invited to The Pavilion for an inspiring, educational and engaging performance from the full Houston Symphony.', cta: { label: 'Register Your Class', href: '/mission/outreach/fine-arts-education-days' } },
      { label: 'Arts in Action Awards', slug: 'arts-in-action-awards', body: 'Arts in Action Awards recognize and reward talented and high-achieving arts students in the Greater Houston Area.', cta: { label: 'Nominate Your Student', href: '/mission/outreach/arts-in-action-awards' } },
      { label: 'Arts On The Go Boxes', slug: 'arts-on-the-go-boxes', body: 'Get a grade level-tailored Exploration Box delivered to your classroom - filled with hands-on activities, standards-aligned curriculum ideas, craft supplies with instructions and fun prizes for students to take home – for free', cta: { label: 'Register Your School', href: '/mission/outreach/arts-on-the-go' } },
      { label: 'Scholarships for Graduating Seniors', slug: 'scholarships-for-graduating-seniors', body: 'Enabling aspiring artists to pursue their dreams at the collegiate level through life-changing funding for graduating High School seniors, with over $2.9 million in scholarships awarded since the program’s inception.', cta: { label: 'Learn More', href: '/mission/funding/scholarships' } },
      { label: 'Grants for Arts Educators', slug: 'grants-for-arts-educators', body: 'Receive funding for crucial professional development opportunities, necessary arts resources and arts travel or performance opportunities through our Arts Grants program.', cta: { label: 'Apply for a Grant', href: '/mission/funding/professional-development' } }
    ]
  },
  {
    title: 'Free Community Shows',
    slug: 'arts-shows/free-shows',
    subtitle: 'Entertaining shows in a laid back environment featuring music you love played by world-class musicians – all for free! Even better, these shows serve as the perfect introduction to the brilliant world of classical music and the performing arts.',
    templatePreset: 'freeShows',
    heroImage: asset('content-images/mission/SSS HSO-1 (1).jpg'),
    primaryCTA: { label: 'Get Show Emails', type: 'popover', popoverId: 'get-emails' },
    tabs: [
      { label: 'Entertaining', slug: 'entertaining', body: 'Whether a classic kids movie or the epic catalogue of an iconic rock band, our community arts shows prioritize accessibility, entertainment and fun.' },
      { label: 'Laid Back', slug: 'laid-back', body: 'Kick your feet up on the lawn and give your kids a little space to move around or come early to grab front row seats so you don’t miss a note. This isn’t your standard night at the symphony – it’s an open door where everyone belongs.' },
      { label: 'World Class', slug: 'world-class', body: 'From local talent to the prestigious Houston Symphony, all of our shows feature musicians that will take your breath away.' }
    ]
  },
  {
    title: 'The Pavilion’s Staff',
    slug: 'staff',
    subtitle: "Our arts access mission and core values drive The Pavilion's team.",
    templatePreset: 'footerPage',
    heroImage: asset('content-images/partners-sponsors/Fan BB-26.jpg'),
    primaryCTA: { label: 'Join Our Team', href: '/work-at-cwmp' },
    tabs: staffDepartmentTabs,
    valuesGraphic: {
      eyebrow: 'Core Values',
      title: 'Our Values',
      body: 'Add the current core values graphic here in Sanity so it appears below the staff department tabs.'
    }
  },
  {
    title: 'Board of Directors',
    slug: 'leadership',
    subtitle: 'This page has moved into the Leadership tab on the Staff page.',
    templatePreset: 'footerPage',
    heroImage: asset('content-images/partners-sponsors/BostonPops-4.jpg'),
    visibility: 'archived',
    primaryCTA: { label: 'View Staff and Leadership', href: '/staff' },
    tabs: [
      { label: 'Leadership', slug: 'leadership', body: 'The Pavilion is governed by a volunteer Board of Directors. Current board information is maintained in the Leadership tab on the Staff page.', cta: { label: 'Open Staff and Leadership', href: '/staff' } }
    ]
  },
  {
    title: 'The Pavilion’s Powerful History',
    slug: 'history',
    subtitle: 'Since 1990 we’ve had one mission - make the arts accessible to all.',
    templatePreset: 'footerPage',
    heroImage: asset('content-images/partners-sponsors/Movies-44.jpg'),
    primaryCTA: { label: 'Support Our Mission', href: '/mission/support-the-arts' },
    tabs: [
      { label: 'The Dream', slug: 'the-dream', body: 'The Pavilion began with a dream for a cultural gathering place rooted in The Woodlands community.' },
      { label: 'Opening Weekend', slug: 'opening-weekend', body: 'Opening moments set the tone for decades of live music, community celebration and shared arts experiences.' },
      { label: 'Early Arts Outreach', slug: 'early-arts-outreach', body: 'Arts outreach has been part of the story from the beginning, connecting students and families to live performance.' },
      { label: 'Iconic Acts', slug: 'iconic-acts', body: 'The stage has welcomed iconic artists across genres while continuing to serve a local arts access mission.' },
      { label: 'Reconstruction', slug: 'reconstruction', body: 'The Pavilion’s resilience and reconstruction are part of its community legacy.' },
      { label: 'Missional Focus', slug: 'missional-focus', body: 'The mission sharpened around removing barriers so more people can experience the arts.' },
      { label: 'The Dream Continues', slug: 'the-dream-continues', body: 'Today, The Pavilion continues to bring world-class performance and arts access together.' }
    ]
  },
  {
    title: 'Press Inquiries',
    slug: 'press',
    subtitle: 'Press should connect with Communications Specialist Laine Harper.',
    templatePreset: 'footerPage',
    heroImage: asset('content-images/plan-your-visit/BostonPops-1.jpg'),
    primaryCTA: { label: 'Email Laine', type: 'popover', popoverId: 'contact' },
    tabs: [
      { label: 'Live Nation Press Coverage', slug: 'live-nation-press-coverage', body: 'A flexible area for press coverage related to major concert announcements and Live Nation events.' },
      { label: 'Latest News', slug: 'latest-news', body: 'Use this section for announcements, releases and timely Pavilion updates.' },
      { label: 'Press Assets', slug: 'press-assets', body: 'Provide downloadable logos, approved images, boilerplate and other press resources once updated.' }
    ]
  },
  {
    title: 'Work at The Pavilion',
    slug: 'work-at-cwmp',
    subtitle: 'We hire full-time and part-time team members who excel at collaborating, prioritize compassion and have the energy and adaptability to do excellent work. You must be at least 16 years old to be considered for employment at The Pavilion.',
    templatePreset: 'footerPage',
    heroImage: asset('content-images/plan-your-visit/6.1.24 - Supervisors-.jpg'),
    primaryCTA: { label: 'Apply to Work at The Pavilion', href: 'CONFIGURE_PAYCOM_URL_IN_CMS', type: 'external', openInNewTab: true },
    tabs: [
      { label: 'Paycom Log In', slug: 'paycom-log-in', body: 'Current employees can use Paycom for employment resources, time, payroll and required updates.', cta: { label: 'Open Paycom', href: 'CONFIGURE_PAYCOM_URL_IN_CMS', type: 'external', openInNewTab: true } },
      { label: 'Scheduling Log In', slug: 'scheduling-log-in', body: 'Use this area for the staff scheduling login or seasonal scheduling instructions.' }
    ]
  },
  {
    title: 'Rent The Pavilion',
    slug: 'rent',
    subtitle: 'Three dynamic event spaces on-site provide the perfect setting for your next meeting, celebration or fundraiser. Our partners at Wicked Whisk Catering and our experienced staff will make sure you have a remarkable experience.',
    templatePreset: 'footerPage',
    heroImage: asset('content-images/partners-sponsors/Movies-6.jpg'),
    primaryCTA: { label: 'Book Your Event', type: 'popover', popoverId: 'contact' },
    tabs: [
      { label: 'The Main Stage', slug: 'the-main-stage', body: 'Iconic tent + seating for over 16,000. There is no bigger exclamation point than hosting your event on this storied stage.' },
      { label: 'The Pavilion Event Center', slug: 'the-pavilion-event-center', body: 'This multi-purpose, 21,000 square foot facility provides The Pavilion with an event space that is dynamic in both structure and amenities. Two moveable walls allow for the space to be divided into three separate rooms, each complete with state-of-the-art multimedia capabilities. The Event Center also has its own entrance and restrooms.' },
      { label: 'The Woodforest Bank Club', slug: 'the-woodforest-bank-club', body: 'The Woodforest Bank Club boasts three full bars, two floors of seating, a covered outdoor patio, a private entrance and outstanding multimedia capabilities, all in an upscale environment tailor-made to suit your needs.' }
    ]
  },
  {
    title: 'Volunteer at The Pavilion',
    slug: 'volunteer',
    subtitle: 'Find volunteer opportunities, Pavilion Partner information, member resources and mission-supporting ways to serve.',
    templatePreset: 'footerPage',
    heroImage: asset('content-images/partners-sponsors/HPP-25.jpg'),
    primaryCTA: { label: 'Become a Pavilion Partner', href: '/mission/volunteer-membership' },
    tabs: [
      { label: 'Pavilion Partners', slug: 'pavilion-partners', body: 'Partners are a volunteer membership community supporting fundraising, education, guest service and hands-on event needs.', cta: { label: 'Learn about Partners', href: '/mission/volunteer-membership' } },
      { label: 'Member Resources', slug: 'member-resources', body: 'Current Partners can find event lists, weather guidance, parking, Paycom reminders and renewal paths.', cta: { label: 'Open resources', href: '/mission/volunteer-membership/resources' } }
    ]
  },
  {
    title: 'Sponsorships at The Pavilion',
    slug: 'sponsors',
    subtitle: 'Explore sponsorships, corporate partnership opportunities, current corporate partners and the organizations supporting The Pavilion.',
    templatePreset: 'footerPage',
    heroImage: asset('content-images/partners-sponsors/DiscoNight-19.jpg'),
    primaryCTA: { label: 'Become a Sponsor', href: '/mission/corporate-partnership' },
    tabs: [
      { label: 'Live Nation Sponsorships', slug: 'live-nation-sponsorships', body: 'Support major concerts and reach large, diverse audiences through Live Nation sponsorship opportunities.', cta: { label: 'Explore sponsorships', href: '/mission/corporate-partnership' } },
      { label: 'Performing Arts Sponsorships', slug: 'performing-arts-sponsorships', body: 'Support free shows, outreach, scholarships, grants and arts access through Performing Arts sponsorships.', cta: { label: 'Support the mission', href: '/mission/corporate-partnership' } }
    ],
    sponsorGroups: corporateSponsorGroups
  }
];

export const stories = [
  {
    title: 'A Day When Students Own the Stage',
    slug: 'students-own-the-stage',
    dek: 'Education events turn a concert venue into a classroom full of sound, movement and first discoveries.',
    body: 'On education event days, the venue becomes a place where students can hear, move, ask questions and see themselves as part of the arts.',
    topics: ['Arts in Schools', 'Outreach'],
    featuredSlot: 'hero',
    publishDate: '2026-04-10',
    thumbnail: asset('content-images/story-hub/CER Edited Photos-10.jpg'),
    heroImage: asset('content-images/story-hub/CER Edited Photos-12.jpg'),
    ctaLabel: 'Read the story'
  },
  {
    title: 'Scholarship Recipients Step Forward',
    slug: 'scholarship-recipients-step-forward',
    dek: 'Fine arts scholarships help young artists imagine what comes next.',
    body: 'Scholarship stories connect impact numbers with the students behind them.',
    topics: ['Scholarships', 'Supporters'],
    featuredSlot: 'recent',
    publishDate: '2026-03-22',
    thumbnail: asset('content-images/mission/Scholarship Recipients 2025.jpg'),
    heroImage: asset('content-images/mission/Schol-Award-82.jpg'),
    ctaLabel: 'Hear from students'
  },
  {
    title: 'Behind the North Plaza',
    slug: 'behind-the-north-plaza',
    dek: 'A quick look at the teams and volunteers who make arrival feel easy.',
    body: 'Behind every easy arrival is a network of staff, volunteers and partners helping guests feel oriented before the music begins.',
    topics: ['Backstage', 'Fans'],
    featuredSlot: 'recent',
    publishDate: '2026-03-14',
    thumbnail: asset('content-images/plan-your-visit/Fan BB-26.jpg'),
    heroImage: asset('content-images/plan-your-visit/Fans-2.jpg'),
    ctaLabel: 'Read the story'
  },
  {
    title: 'When a Free Show Becomes a Family Tradition',
    slug: 'free-show-family-tradition',
    dek: 'Performing arts nights bring generations together under the tent and on the lawn.',
    body: 'Free performing arts nights invite families to return year after year, building traditions that begin with a first live performance.',
    topics: ['Shows', 'Fans'],
    featuredSlot: 'largeFeature',
    publishDate: '2026-02-20',
    thumbnail: asset('content-images/partners-sponsors/SSS Fans-28.jpg'),
    heroImage: asset('content-images/partners-sponsors/SSS Fans-27.jpg'),
    ctaLabel: 'Watch the video'
  },
  {
    title: 'Grant Dollars, Real Classrooms',
    slug: 'grant-dollars-real-classrooms',
    dek: 'Arts educators turn funding into instruments, travel, supplies and deeper instruction.',
    body: 'Arts grants help teachers and organizations turn ideas into instruments, supplies, travel, performances and classroom momentum.',
    topics: ['Grants', 'Arts in Schools'],
    featuredSlot: 'recent',
    publishDate: '2026-01-28',
    thumbnail: asset('content-images/mission/MSP IPZ-33.jpg'),
    heroImage: asset('content-images/mission/MSP IPZ-22.jpg'),
    ctaLabel: 'Read the story'
  }
];

export const externalRoutes = {
  '/donate': {
    title: 'Donate',
    subtitle: 'Support free performances, arts education, scholarships, grants and outreach that make The Pavilion more accessible for everyone.',
    cta: { label: 'Open Donation Page', href: 'CONFIGURE_DONORPERFECT_DONATION_URL_IN_CMS', type: 'external', openInNewTab: true }
  },
  '/staff-login': {
    title: 'Staff Login',
    subtitle: 'A direct path for staff resources, scheduling and internal tools.',
    cta: { label: 'Open Staff Login', href: 'CONFIGURE_STAFF_LOGIN_URL_IN_CMS', type: 'external', openInNewTab: true }
  }
};

export const storyTopics = ['Arts in Schools', 'Fans', 'Shows', 'Scholarships', 'Grants', 'Backstage', 'Supporters', 'Outreach'];

export const storyPillars = [
  {
    title: 'Mission in Motion',
    body: 'Stories that show how arts access reaches classrooms, community groups, families and first-time arts participants.',
    href: '/story-hub/topic/outreach/',
    ctaLabel: 'Read outreach stories'
  },
  {
    title: 'People of The Pavilion',
    body: 'Profiles of students, educators, volunteers, artists, fans and supporters who make the mission visible.',
    href: '/story-hub/topic/supporters/',
    ctaLabel: 'Meet supporters'
  },
  {
    title: 'Behind the Experience',
    body: 'A closer look at what happens backstage, before the gates open and after the encore fades.',
    href: '/story-hub/topic/backstage/',
    ctaLabel: 'Go backstage'
  }
];

export const blocks = {
  feature: {
    title: 'Get ready before the gates open',
    subtitle: 'Find parking, policy and ticket answers before your night starts.',
    image: asset('content-images/plan-your-visit/Rae Lynn-19.jpg'),
    cta: { label: 'Plan your visit', href: '/plan-your-visit' }
  },
  video: {
    title: 'The mission, live and loud',
    subtitle: 'Arts access lives in classrooms, plazas, lawns and moments families remember.',
    image: asset('video-placeholders/Moorehead JHS-32.jpg'),
    cta: { label: 'Explore the mission', href: '/mission' }
  },
  eventsSeasonCTA: {
    eyebrow: 'Season Seats',
    title: 'Make every show easier to say yes to.',
    body: 'Reserve your place at The Pavilion with premium seating, club access and a team ready to help you make the most of every night.',
    cta: { label: 'Explore Season Seats', href: '/season-seats', style: 'secondary' }
  },
  email: {
    title: 'Sign up for emails',
    subtitle: 'Show announcements, arts access stories and venue updates in one clean feed.'
  },
  sponsorGroups: [
    {
      title: 'Live Nation',
      subtitle: 'Concert season support',
      sponsors: [{ name: 'Live Nation' }]
    },
    {
      title: 'Performing Arts Season Sponsors',
      subtitle: 'Organizations helping keep performing arts accessible',
      sponsors: []
    }
  ]
};
