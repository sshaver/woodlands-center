const asset = (path) => `/assets/${path.split('/').map(encodeURIComponent).join('/')}`;

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
    { label: 'Plan your visit', href: '/plan-your-visit', icon: '📍' },
    { label: 'Events', href: '/events', icon: '🎟' },
    { label: 'Arts Access Mission', href: '/mission', icon: '✦' }
  ],
  utility: [
    { label: 'Contact', href: '#contact', popoverId: 'contact' },
    { label: 'Get Emails', href: '#get-emails', popoverId: 'get-emails' }
  ],
  mobileDock: [
    { label: 'Season Seats', href: '/season-seats', icon: '♛' },
    { label: 'Donate', href: '/donate', icon: '♥' },
    { label: 'Events', href: '/events', icon: '●' },
    { label: 'Visit', href: '/plan-your-visit', icon: '⌖' },
    { label: 'Mission', href: '/mission', icon: '✦' }
  ],
  footer: [
    { label: 'Staff', href: '/staff' },
    { label: 'Leadership', href: '/leadership' },
    { label: 'History', href: '/history' },
    { label: 'Press', href: '/press' },
    { label: 'Work at CWMP', href: '/work-at-cwmp' },
    { label: 'Staff Log In', href: '/staff-login' },
    { label: 'Rent The Pavilion', href: '/rent' },
    { label: 'Volunteers', href: '/volunteer' },
    { label: 'Donate', href: '/donate' },
    { label: 'Sponsors', href: '/sponsors' }
  ]
};

export const forms = {
  contact: {
    title: 'Contact The Pavilion',
    subtitle: 'Send a note to the team and a staff member will point you in the right direction.',
    type: 'hubspot',
    portalId: 'CONFIGURE_HUBSPOT_PORTAL_ID',
    formId: 'CONFIGURE_CONTACT_FORM_ID',
    fallbackUrl: 'mailto:info@woodlandscenter.org',
    privacyCopy: 'Form destinations and privacy copy are CMS-configurable.'
  },
  'get-emails': {
    title: 'Get Pavilion Emails',
    subtitle: 'Be first to hear about shows, arts access programs, and venue updates.',
    type: 'hubspot',
    portalId: 'CONFIGURE_HUBSPOT_PORTAL_ID',
    formId: 'CONFIGURE_EMAIL_FORM_ID',
    fallbackUrl: 'mailto:info@woodlandscenter.org?subject=Email%20Signup',
    privacyCopy: 'Email signup is ready for HubSpot configuration.'
  },
  seasonSeats: {
    title: 'Season Seats Interest',
    type: 'hubspot',
    portalId: 'CONFIGURE_HUBSPOT_PORTAL_ID',
    formId: 'CONFIGURE_SEASON_SEATS_FORM_ID'
  }
};

export const alert = {
  title: 'Venue policies can vary by event',
  message: 'Check your event detail page before you arrive for gate times, ticketing notes, and artist-specific updates.',
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
    headerImage: asset('content-images/events/4.19 - Rod Stewart.jpg'),
    cardImage: asset('content-images/events/4.19 - Rod Stewart.jpg'),
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
    headerImage: asset('content-images/events/5.02 - Jim Gaffigan.jpg'),
    cardImage: asset('content-images/events/5.02 - Jim Gaffigan.jpg'),
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
    headerImage: asset('content-images/events/5.13 - Sting.jpg'),
    cardImage: asset('content-images/events/5.13 - Sting.jpg'),
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
    headerImage: asset('content-images/events/5.8 - Dave Matthews Band.jpg'),
    cardImage: asset('content-images/events/5.8 - Dave Matthews Band.jpg'),
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
    headerImage: asset('content-images/events/5.23 - MGK.png'),
    cardImage: asset('content-images/events/5.23 - MGK.png'),
    ticketLink: 'CONFIGURE_TICKET_LINK_IN_CMS',
    eventType: 'liveNation'
  },
  {
    title: 'Train',
    slug: 'train',
    subheader: 'Summer Road Trip',
    eventDate: '2026-08-14',
    eventStartTime: '7:00 PM',
    gateOpenTime: '5:30 PM',
    headerImage: asset('content-images/events/8.14 - Train.png'),
    cardImage: asset('content-images/events/8.14 - Train.png'),
    ticketLink: 'CONFIGURE_TICKET_LINK_IN_CMS',
    eventType: 'liveNation'
  },
  {
    title: 'Lynyrd Skynyrd & Foreigner',
    slug: 'lynyrd-skynyrd-foreigner',
    subheader: 'Double headliner night',
    eventDate: '2026-08-27',
    eventStartTime: '7:00 PM',
    gateOpenTime: '5:30 PM',
    headerImage: asset('content-images/events/8.27 - Lynyrd Skynyrd.jpg'),
    cardImage: asset('content-images/events/8.27 - Foreigner.jpg'),
    ticketLink: 'CONFIGURE_TICKET_LINK_IN_CMS',
    eventType: 'liveNation'
  },
  {
    title: 'Mötley Crüe',
    slug: 'motley-crue',
    subheader: 'with Tesla & Extreme',
    eventDate: '2026-09-11',
    eventStartTime: '7:00 PM',
    gateOpenTime: '5:30 PM',
    headerImage: asset('content-images/events/9.11 - MÖTLEY CRÜE.jpg'),
    cardImage: asset('content-images/events/9.11 - MÖTLEY CRÜE.jpg'),
    ticketLink: 'CONFIGURE_TICKET_LINK_IN_CMS',
    eventType: 'liveNation',
    isFeatured: true,
    featuredOrder: 1,
    policyOverrides: 'Artist policies may require extra flexibility for reusable bottles and lawn-chair rental availability.'
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
    eventType: 'freeCommunity'
  }
].map((event) => ({
  listingStatus: 'published',
  ctaLabel: 'Get Tickets',
  bagPolicyLink: '/plan-your-visit#bag-policy',
  parkingLink: '/plan-your-visit#parking',
  lawnChairLink: '/plan-your-visit#lawn-chairs',
  showSchedule: [
    { time: event.gateOpenTime, label: 'Gates open' },
    { time: event.eventStartTime, label: 'Show begins' }
  ],
  eventDescription: `${event.title} comes to The Pavilion with a full evening designed around easy arrival, clear policies, and a high-energy amphitheater experience. Staff can replace this fixture copy from the Events collection.`,
  ...event
}));

export const planVisitTopics = [
  {
    title: 'What to Bring',
    slug: 'what-to-bring',
    icon: '▣',
    summary: 'Policy essentials for bags, blankets, umbrellas, food, drinks, cameras, and lawn chairs.',
    aiKeywords: ['bag', 'clear bag', 'umbrella', 'blanket', 'food', 'drink', 'camera', 'chair', 'lawn chair', 'bring'],
    sections: [
      {
        heading: 'Bag Policy',
        slug: 'bag-policy',
        body: 'Clear bags sized 12" x 12" or smaller are permitted. Tinted bags or bags with printed patterns are not accepted. Non-clear handheld clutches sized 4.5" x 6.5" or smaller are permitted.',
        items: [
          'Medical equipment bags, diaper bags, and nursing/pumping bags are permitted when appropriate and are subject to search.',
          'Unattended items and bags outside the gates or within the venue will be removed immediately.',
          'Bags, purses, or backpacks of any kind will not be accepted by Pavilion Info Booths.'
        ],
        sourceLabel: 'Plan Your Visit: Bag Policy'
      },
      {
        heading: 'Do Bring',
        slug: 'do-bring',
        body: 'Most shows allow non-detachable lens cameras, signs 8.5" x 11" or smaller, small blankets or tarps, small umbrellas, rain jackets, and most wearable neck fans and small handheld fans.',
        items: ['Please be prepared to have belongings searched.']
      },
      {
        heading: 'Don’t Bring',
        slug: 'dont-bring',
        body: 'Outside beverages, detachable lens cameras, grills, fireworks, ice chests, laptops/tablets, laser pointers, pocket knives, selfie sticks, large umbrellas, tents, weapons, and outside lawn chairs are not allowed.',
        items: ['Specially designed lawn chairs are available for rent at most Live Nation shows. Lawn chairs are free at performing arts events.'],
        sourceLabel: 'Plan Your Visit: Don’t Bring'
      },
      {
        heading: 'Food & Drink',
        slug: 'food-drink',
        body: 'Outside liquids are not allowed. Personal food is allowed at Live Nation shows in the amount of one one-gallon zip-top bag per person. That amount restriction does not apply to Performing Arts shows.',
        items: ['Empty reusable bottles/cups are allowed at most shows, but artist policies may vary.']
      }
    ]
  },
  {
    title: 'Rules',
    slug: 'rules',
    icon: '!',
    summary: 'Entry, re-entry, seating, weather, drone, tailgating, smoking, and ticket-stub rules.',
    aiKeywords: ['rules', 're-entry', 'smoking', 'tailgating', 'drone', 'seat', 'mosh', 'crowd surf'],
    sections: [
      {
        heading: 'Venue Rules',
        slug: 'venue-rules',
        body: 'Guests are subject to search upon entering. No re-entry is permitted once leaving the gates. No smoking is allowed in the reserved seating areas, including e-cigarettes and vapes.',
        items: [
          'Soliciting or vending is not permitted unless authorized by Pavilion management.',
          'Standing or dancing in front of your seat is permitted; standing on seats or dancing in aisles is not.',
          'No reselling tickets on Pavilion grounds. No tailgating in surrounding lots. Drones are not permitted on or over Pavilion property.'
        ]
      }
    ]
  },
  {
    title: 'Parking',
    slug: 'parking',
    icon: 'P',
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
        body: 'Paid Parking and Accessible Parking use 9809 Six Pines Drive, The Woodlands, TX 77380. Accessible Parking is free on a first-come, first-served basis with proper credentials displayed.',
        items: ['Overflow accessible parking is available at 9669 Grogans Mill Road.', 'Passenger drop-off and pick-up is available at 2005 Lake Robbins Drive.']
      }
    ]
  },
  {
    title: 'Accessibility',
    slug: 'accessibility',
    icon: '♿',
    summary: 'Arrival, mobility assistance, accessible tickets, facilities, ASL, listening devices, service animals, and sensory accommodations.',
    aiKeywords: ['accessibility', 'wheelchair', 'asl', 'service animal', 'sensory', 'accessible tickets'],
    sections: [
      {
        heading: 'Accessibility Support',
        slug: 'accessibility-support',
        body: 'Guests who need assistance before their visit are encouraged to contact The Pavilion in advance or call the Box Office at 281-364-3024.',
        items: [
          'Wheelchairs are available only for escorted transport to seating areas and cannot be kept or rented during the event.',
          'American Sign Language interpretation is available by request at least three weeks before the event.',
          'Assistive listening headsets are available at no charge at the Information Booth in the North Plaza.'
        ]
      }
    ]
  },
  {
    title: 'Concessions',
    slug: 'concessions',
    icon: '☰',
    summary: 'Food, drinks, cashless transactions, plaza locations, and roaming concessions support.',
    aiKeywords: ['concessions', 'food', 'drinks', 'cash', 'cashless', 'beer', 'cocktail'],
    sections: [
      {
        heading: 'What’s on the Menu',
        slug: 'menu',
        body: 'Concessions are located in the North, South, and Lawn plazas. All transactions are cashless. Expect traditional concert fare, rotating specials, Pepsi products, St. Arnold’s brews, craft beers, wines, and specialty cocktails.'
      }
    ]
  },
  {
    title: 'Ticket Info',
    slug: 'ticket-info',
    icon: '🎟',
    summary: 'Mobile tickets, will call, official Ticketmaster source, transfer tips, children, and box office hours.',
    aiKeywords: ['ticket', 'tickets', 'box office', 'will call', 'screenshot', 'children', 'ticketmaster'],
    sections: [
      {
        heading: 'Accepted Tickets',
        slug: 'accepted-tickets',
        body: 'Accepted tickets include mobile entry with Safetix rolling barcode, will call pick-up, and hard tickets. Static QR codes, screenshots, and print-at-home PDFs are not accepted.',
        items: ['Ticketmaster is the official ticketing source for events held at The Pavilion.']
      },
      {
        heading: 'Box Office Hours',
        slug: 'box-office',
        body: 'The North Box Office is located at 2005 Lake Robbins Drive and is open Monday-Friday 10 a.m. to 5 p.m. On event days, hours extend from 10 a.m. through intermission Monday-Saturday and noon through intermission on Sundays.'
      }
    ]
  },
  {
    title: 'Facilities & Rentals',
    slug: 'facilities-rentals',
    icon: '⌂',
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
  subtitle: 'The Arts are the live performances and invigorating creations that bind us together through a shared experience of beauty. We believe access to the Arts is fundamental to human thriving. That’s why our non-profit mission is to make sure that everyone has the chance to experience the arts for themselves - today, and far into the future.',
  heroImage: asset('content-images/mission/School Dayz-36.jpg'),
  video: {
    title: 'Mission Video',
    poster: asset('video-placeholders/School Dayz-2.jpg'),
    href: 'CONFIGURE_MISSION_VIDEO_URL_IN_CMS'
  },
  donateCTA: { label: 'Support The Arts', type: 'popover', popoverId: 'contact' },
  impactStats: [
    { value: '225K', label: 'People Impacted by Arts Programs' },
    { value: '$1.31M', label: 'Awarded in Arts Scholarships and Grants' },
    { value: '67', label: 'Arts Outreach Events across the city' }
  ],
  tabs: [
    { label: 'Support The Arts', slug: 'support', body: 'Membership, volunteerism, corporate partnership, and direct giving help The Pavilion remove barriers to live arts experiences.' },
    { label: 'Funding the Arts', slug: 'funding', body: 'Scholarships, educator grants, resource grants, travel grants, and community arts grants support artists and educators across the region.' },
    { label: 'Arts Outreach', slug: 'outreach', body: 'In-school and on-site programs bring students, families, educators, and community groups closer to the arts.' },
    { label: 'Arts Shows', slug: 'arts-shows', body: 'Free and accessible performing arts shows invite everyone into the shared experience of live performance.' }
  ]
};

export const seasonSeats = {
  title: 'Season Seats at The Pavilion',
  subtitle: 'Season Seats at The Pavilion are the ideal way to entertain clients, reward employees or share with friends and family as you enjoy ultimate amenities and experience world-class entertainment from the best seats in the house.',
  image: asset('content-images/partners-sponsors/Fans-27.jpg'),
  primaryCTA: { label: 'Request Season Seats', href: '/season-seats', type: 'internal' },
  tabs: [
    { label: 'Seamless Experience', slug: 'seamless-experience', body: 'From arrival to beyond the encore, every detail is designed for your ease and enjoyment. Private entry and parking and a dedicated support team let you put the focus back on the music, the moment and the memories.' },
    { label: 'Club Access', slug: 'club-access', body: 'Whether you’re hosting clients, sharing the night with friends, or creating lasting memories with family, the Woodforest Bank Club is where The Pavilion experience truly comes together.' },
    { label: 'Dining Included', slug: 'dining-included', body: 'Food and non-alcoholic beverages are included with your Season Seats, plus three full service bars and nightly happy hour.' }
  ]
};

export const grantPrograms = [
  {
    title: 'Professional Development Grants for Arts Educators',
    slug: 'professional-development',
    subtitle: 'Helping visual and performing arts educators in the Greater Houston Area improve teaching methods and curriculum through impactful PD experiences.',
    image: asset('content-images/landing-pages/Brainstormers-19.jpg'),
    applicationCTA: { label: 'Apply Now', href: 'CONFIGURE_FOUNDANT_URL_IN_CMS', type: 'external', openInNewTab: true },
    quoteHighlight: 'Teachers who have received grants to attend conferences say the experience is transformative.',
    tabs: [
      { label: 'Qualifications', slug: 'qualifications', body: 'This grant program financially assists K-12 public school arts educators in the Greater Houston area who want to participate in workshops, conferences and seminars.' },
      { label: 'Dates', slug: 'dates', body: 'Fall applications will be accepted from August 11, 2025 to September 15, 2025. Events must occur between January 1, 2026 and May 31, 2026.' },
      { label: 'Impact', slug: 'impact', body: 'Educators return to the classroom energized with new demos, strategies, and deeper skills to share.' }
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
    subtitle: 'Supporting nonprofit community arts organizations in Harris and Montgomery Counties that are breaking down barriers and bringing meaningful artistic experiences to local communities.',
    image: asset('content-images/partners-sponsors/BostonPops-13.jpg'),
    applicationCTA: { label: 'Apply Now', href: 'CONFIGURE_FOUNDANT_URL_IN_CMS', type: 'external', openInNewTab: true }
  },
  {
    title: 'Fine Arts Scholarships',
    slug: 'scholarships',
    subtitle: 'Enabling aspiring artists to pursue their dreams at the collegiate level through life-changing funding for graduating High School seniors.',
    image: asset('content-images/mission/Scholarship Recipients 2025.jpg'),
    applicationCTA: { label: 'Apply Now', href: 'CONFIGURE_ACCEPTD_URL_IN_CMS', type: 'external', openInNewTab: true }
  }
].map((program) => ({
  quoteHighlight: program.quoteHighlight || 'Program-specific quote highlight can be updated by staff in the CMS.',
  finalCTA: program.applicationCTA,
  tabs: program.tabs || [
    { label: 'Qualifications', slug: 'qualifications', body: `${program.title} qualifications are managed in the Grant Programs collection.` },
    { label: 'Dates', slug: 'dates', body: 'Application windows and reporting deadlines are CMS-managed so staff can keep seasonal information current.' },
    { label: 'Impact', slug: 'impact', body: 'Impact stories, quotes, and outcomes can be attached to each program.' }
  ],
  status: 'open',
  ...program
}));

export const outreachPrograms = [
  ['Instrument Petting Zoo', 'instrument-petting-zoo', 'Host a hands-on music discovery experience where students meet orchestral instruments up close.', asset('content-images/mission/MSP IPZ-22.jpg')],
  ['Fine Arts Education Days', 'fine-arts-education-days', 'Bring students to The Pavilion for free, curriculum-connected performing arts experiences.', asset('content-images/mission/School Dayz-7.jpg')],
  ['Hats Off to Reading', 'hats-off-to-reading', 'Celebrate literacy and live performance through family-friendly arts access programming.', asset('content-images/landing-pages/Brainstormers-5.jpg')],
  ['Mini Pavilion Maestros', 'mini-pavilion-maestros', 'Invite young children into sound, rhythm, creativity, and playful music learning.', asset('content-images/mission/Moorehead JHS-3.jpg')],
  ['Arts in Action Awards', 'arts-in-action-awards', 'Recognize students and educators making the arts part of everyday community life.', asset('content-images/mission/Schol-Award-55.jpg')],
  ['Arts On The Go', 'arts-on-the-go', 'Bring Pavilion teaching artists and programs directly into community spaces.', asset('content-images/mission/Moorehead JHS-28.jpg')],
  ['Chamberfest Strings Camp', 'chamberfest-strings-camp', 'Support young string musicians through camp experiences and performance opportunities.', asset('content-images/mission/SSS HSO-11.jpg')],
  ['Scout Days', 'scout-days', 'Connect scout groups with live performance, venue experiences, and arts learning.', asset('content-images/partners-sponsors/Girl Scouts-25.jpg')]
].map(([title, slug, subtitle, image]) => ({
  title,
  slug,
  subtitle,
  image,
  primaryCTA: { label: 'Start here', type: 'popover', popoverId: 'contact' },
  tabs: [
    { label: 'Overview', slug: 'overview', body: subtitle },
    { label: 'Who it serves', slug: 'who-it-serves', body: 'Audience, grade-level, and partner eligibility details are CMS-editable.' },
    { label: 'Get involved', slug: 'get-involved', body: 'Registration, host forms, reminders, and contact CTAs connect to configured integrations.' }
  ],
  seasonalVisibility: { visibility: 'public' }
}));

export const landingPages = [
  {
    title: 'Arts Membership at The Pavilion',
    slug: 'mission/performing-arts-membership',
    subtitle: 'Join the exclusive group of Stage Lighters that fund our most powerful performances - and enjoy remarkable perks, too.',
    templatePreset: 'supportArts',
    heroImage: asset('content-images/partners-sponsors/4.5.25 - Boston Pops-9006.jpg'),
    primaryCTA: { label: 'Join Stage Lighters', href: 'CONFIGURE_ACCOUNT_MANAGER_URL_IN_CMS', type: 'accountManager', openInNewTab: true },
    secondaryCTA: { label: 'Call Joan', type: 'popover', popoverId: 'contact' },
    tabs: [
      { label: 'Member Impact', slug: 'member-impact', body: 'Your membership makes it possible for thousands to attend performing arts shows completely for free.' },
      { label: 'Elevated Experience', slug: 'elevated-experience', body: 'Tickets delivered straight to your phone, private parking and entry, and the best seats in the house.' },
      { label: 'Exclusive Access', slug: 'exclusive-access', body: 'Gain entry to Woodforest Bank Club, behind-the-scenes experiences, and recognition as a patron of the arts.' }
    ]
  },
  {
    title: 'Pavilion Partners',
    slug: 'mission/volunteer-membership',
    subtitle: 'Partners are a remarkable, thriving community of volunteers that help make The Pavilion’s mission for arts access possible.',
    templatePreset: 'supportArts',
    heroImage: asset('content-images/partners-sponsors/HPP-68.jpg'),
    primaryCTA: { label: 'Become a Pavilion Partner', href: 'CONFIGURE_DONORPERFECT_URL_IN_CMS', type: 'external', openInNewTab: true },
    tabs: [
      { label: 'Support Mission', slug: 'support-mission', body: 'Volunteers participate in meaningful work by giving time, talents and leadership.' },
      { label: 'Work Events', slug: 'work-events', body: 'Volunteers help park buses, provide directions, and assist with seating assignments.' },
      { label: 'Operate Activities', slug: 'operate-activities', body: 'Free, welcoming, kid-friendly plaza activities help remove barriers at performing arts shows.' },
      { label: 'Info Booths', slug: 'info-booths', body: 'Info Booth volunteers connect guests with the resources they need.' }
    ]
  },
  {
    title: 'Partners Resource Page',
    slug: 'mission/volunteer-membership/resources',
    subtitle: 'A seasonal resource hub for Pavilion Partners, event lists, weather guidance, parking, and Paycom reminders.',
    templatePreset: 'blankFlow',
    heroImage: asset('content-images/partners-sponsors/HPP-40.jpg'),
    primaryCTA: { label: 'Sign Up to Volunteer', href: 'CONFIGURE_PAYCOM_URL_IN_CMS', type: 'external', openInNewTab: true },
    tabs: [
      { label: 'Performing Arts Events List', slug: 'performing-arts-events-list', body: 'CMS-managed list of volunteer opportunities for Performing Arts events.' },
      { label: 'Education Event List', slug: 'education-event-list', body: 'CMS-managed list of education event opportunities.' },
      { label: 'Weather and Heat Awareness', slug: 'weather', body: 'Pavilion shows are rain or shine. Severe weather may cause delay, reschedule, or cancellation. Volunteers should shelter until the ALL CLEAR appears on screens, social, and website.' },
      { label: 'Parking', slug: 'parking', body: 'For Performing Arts, Education Events and Graduations, park in the Flat Lot and Gravel Lot. For Live Nation concerts, park in the Silver Lot and take the shuttle.' },
      { label: 'Paycom', slug: 'paycom', body: 'All Partners must have a Paycom login for tracking hours and annual background checks.' }
    ]
  },
  {
    title: 'Corporate Partnership',
    slug: 'mission/corporate-partnership',
    subtitle: 'Partner with The Cynthia Woods Mitchell Pavilion - consistently ranked as one of the top amphitheaters in the world.',
    templatePreset: 'supportArts',
    heroImage: asset('content-images/partners-sponsors/Fans-13.jpg'),
    primaryCTA: { label: 'Become a Corporate Partner', type: 'popover', popoverId: 'contact' },
    tabs: [
      { label: 'Live Nation Sponsorships', slug: 'live-nation-sponsorships', body: 'Be part of 60+ performances, 600k attendees, 16,500 capacity, and diverse programming.', cta: { label: 'Download Deck', href: '/assets/documents/decks/25_LN_Sponsorships.pdf', type: 'download' } },
      { label: 'Performing Arts Sponsorships', slug: 'performing-arts-sponsorships', body: 'Support arts outreach through free shows, student reach, grants, scholarships, and volunteer hours.', cta: { label: 'Download Deck', href: '/assets/documents/decks/25_PA_Spnosorships.pdf', type: 'download' } },
      { label: 'Volunteerism', slug: 'volunteerism', body: 'Create impactful volunteer opportunities for your employees.', cta: { label: 'Download Deck', href: '/assets/documents/decks/25_Corporate_Volunteers.pdf', type: 'download' } },
      { label: 'Brand Exposure', slug: 'brand-exposure', body: 'Drive brand exposure across digital and physical channels including social media, email, and on-site signage.' }
    ]
  },
  {
    title: 'Arts Educator Resources and Programs',
    slug: 'mission/arts-educators',
    subtitle: 'A hidden-by-default resource page for educator newsletters, outreach programs, grants, and contacts.',
    templatePreset: 'blankFlow',
    heroImage: asset('content-images/mission/School Dayz-36.jpg'),
    visibility: 'hidden'
  },
  {
    title: 'Arts Membership',
    slug: 'arts-shows/membership',
    subtitle: 'Arts Membership routes guests to the CMS-configurable Account Manager destination.',
    templatePreset: 'redirect',
    primaryCTA: { label: 'Open Arts Membership', href: 'CONFIGURE_ACCOUNT_MANAGER_URL_IN_CMS', type: 'external', openInNewTab: true }
  },
  {
    title: 'Free Community Shows',
    slug: 'arts-shows/free-shows',
    subtitle: 'Free performing arts and community shows are part of The Pavilion’s arts access mission.',
    templatePreset: 'freeShows',
    heroImage: asset('content-images/mission/SSS HSO-1 (1).jpg'),
    primaryCTA: { label: 'Get Show Emails', type: 'popover', popoverId: 'get-emails' }
  },
  {
    title: 'The Pavilion’s Staff',
    slug: 'staff',
    subtitle: 'Meet the team supporting artists, audiences, students, volunteers, and the venue experience.',
    templatePreset: 'footerPage',
    heroImage: asset('content-images/partners-sponsors/Fan BB-26.jpg')
  },
  {
    title: 'Board of Directors',
    slug: 'leadership',
    subtitle: 'Leadership and board content can be updated by Pavilion staff through the landing page collection.',
    templatePreset: 'footerPage',
    heroImage: asset('content-images/partners-sponsors/BostonPops-4.jpg')
  },
  {
    title: 'The Pavilion’s Powerful History',
    slug: 'history',
    subtitle: 'A flexible page for the story, milestones, and community legacy of The Pavilion.',
    templatePreset: 'footerPage',
    heroImage: asset('content-images/partners-sponsors/Movies-44.jpg')
  },
  {
    title: 'Press Inquiries',
    slug: 'press',
    subtitle: 'Press contacts, brand resources, announcements, and media inquiry paths are CMS-managed.',
    templatePreset: 'footerPage',
    heroImage: asset('content-images/plan-your-visit/BostonPops-1.jpg'),
    primaryCTA: { label: 'Contact Press Team', type: 'popover', popoverId: 'contact' }
  },
  {
    title: 'Work at The Pavilion',
    slug: 'work-at-cwmp',
    subtitle: 'Paycom job and staff pathways are configurable here without code changes.',
    templatePreset: 'footerPage',
    heroImage: asset('content-images/plan-your-visit/6.1.24 - Supervisors-.jpg'),
    primaryCTA: { label: 'Open Paycom', href: 'CONFIGURE_PAYCOM_URL_IN_CMS', type: 'external', openInNewTab: true }
  },
  {
    title: 'Rent The Pavilion',
    slug: 'rent',
    subtitle: 'Book the venue, explore flexible spaces, and start a facilities conversation.',
    templatePreset: 'footerPage',
    heroImage: asset('content-images/partners-sponsors/Movies-6.jpg'),
    primaryCTA: { label: 'Start a Booking Conversation', type: 'popover', popoverId: 'contact' }
  },
  {
    title: 'Volunteer Landing Page',
    slug: 'volunteer',
    subtitle: 'Find volunteer opportunities, Pavilion Partner information, and mission-supporting ways to serve.',
    templatePreset: 'footerPage',
    heroImage: asset('content-images/partners-sponsors/HPP-25.jpg'),
    primaryCTA: { label: 'Become a Pavilion Partner', href: '/mission/volunteer-membership' }
  },
  {
    title: 'Sponsors Landing Page',
    slug: 'sponsors',
    subtitle: 'Explore sponsorships, corporate partnership opportunities, and the organizations supporting The Pavilion.',
    templatePreset: 'footerPage',
    heroImage: asset('content-images/partners-sponsors/DiscoNight-19.jpg'),
    primaryCTA: { label: 'Become a Sponsor', href: '/mission/corporate-partnership' }
  }
];

export const stories = [
  {
    title: 'A Day When Students Own the Stage',
    slug: 'students-own-the-stage',
    dek: 'Education events turn a concert venue into a classroom full of sound, movement, and first discoveries.',
    body: 'Story bodies support rich text, media, quotes, and related CTAs through the Stories collection.',
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
    body: 'Backstage stories can include operations, staff, sponsors, and volunteer voices.',
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
    body: 'Free-show content can tie stories directly to upcoming community performances.',
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
    dek: 'Arts educators turn funding into instruments, travel, supplies, and deeper instruction.',
    body: 'Grant stories can relate to grant program pages and Foundant CTAs.',
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
    subtitle: 'This placeholder keeps Donate CMS-configurable until the DonorPerfect destination is connected.',
    cta: { label: 'Open Donation Page', href: 'CONFIGURE_DONORPERFECT_DONATION_URL_IN_CMS', type: 'external', openInNewTab: true }
  },
  '/staff-login': {
    title: 'Staff Login',
    subtitle: 'This placeholder keeps staff login CMS-configurable until the Paycom or staff portal destination is connected.',
    cta: { label: 'Open Staff Login', href: 'CONFIGURE_STAFF_LOGIN_URL_IN_CMS', type: 'external', openInNewTab: true }
  }
};

export const storyTopics = ['Arts in Schools', 'Fans', 'Shows', 'Scholarships', 'Grants', 'Backstage', 'Supporters', 'Outreach'];

export const blocks = {
  feature: {
    title: 'Get ready before the gates open',
    subtitle: 'Find parking, policy, and ticket answers before your night starts.',
    image: asset('content-images/plan-your-visit/RUFUSphotos-1.jpg'),
    cta: { label: 'Plan your visit', href: '/plan-your-visit' }
  },
  video: {
    title: 'The mission, live and loud',
    subtitle: 'Arts access lives in classrooms, plazas, lawns, and moments families remember.',
    image: asset('video-placeholders/Moorehead JHS-32.jpg'),
    cta: { label: 'Explore the mission', href: '/mission' }
  },
  email: {
    title: 'Sign up for emails',
    subtitle: 'Show announcements, arts access stories, and venue updates in one clean feed.'
  }
};
