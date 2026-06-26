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
    { label: 'Donate', href: '/donate', icon: 'hand-holding-heart' },
    { label: 'Events', href: '/events', icon: 'ticket' },
    { label: 'Visit', href: '/plan-your-visit', icon: 'location-dot' },
    { label: 'Mission', href: '/mission', icon: 'violin' }
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
    title: 'Season Seats Interest',
    type: 'hubspot',
    portalId: 'CONFIGURE_HUBSPOT_PORTAL_ID',
    formId: 'CONFIGURE_SEASON_SEATS_FORM_ID'
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
  impactHeading: {
    eyebrow: 'Data Highlight',
    title: 'Missional Impact in 2025',
    subtitle: 'A quick look at how arts access moved from the stage into classrooms, scholarships and community programs.'
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
  title: 'Season Seats at The Pavilion',
  subtitle: 'Season Seats at The Pavilion are the ideal way to entertain clients, reward employees or share with friends and family as you enjoy ultimate amenities and experience world-class entertainment from the best seats in the house.',
  image: asset('content-images/landing-pages/DSC00552.jpg'),
  primaryCTA: { label: 'Request Season Seats', href: '/season-seats', type: 'internal' },
  learnMoreCTA: { label: 'Learn More', href: '/season-seats' },
  holderLoginCTA: { label: 'SS Holder Log-In', href: 'CONFIGURE_ACCOUNT_MANAGER_URL_IN_CMS', type: 'external', openInNewTab: true },
  pricing: {
    eyebrow: 'Pricing',
    title: 'Season Seats pricing',
    body: 'Add pricing ranges, payment timing, membership notes and package details here as the Season Seats offer is finalized.'
  },
  seatingMap: {
    eyebrow: 'Seating Map',
    title: 'Find your place in the house',
    body: 'This space can hold a seating map, downloadable PDF or interactive map embed so guests can compare views and locations.'
  },
  conversion: {
    eyebrow: 'Season Seats',
    title: 'Connect with JD',
    body: 'Tell us how you want to host, reward or celebrate and JD will help shape the Season Seats experience around your nights at The Pavilion.',
    cta: { label: 'Connect with JD', type: 'popover', popoverId: 'contact' }
  },
  tabs: [
    { label: 'Seamless Experience', slug: 'seamless-experience', image: asset('content-images/partners-sponsors/Fans-27.jpg'), body: 'From arrival to beyond the encore, every detail is designed for your ease and enjoyment. Private entry and parking and a dedicated support team let you put the focus back on the music, the moment and the memories.' },
    { label: 'Club Access', slug: 'club-access', image: asset('content-images/partners-sponsors/SSS Fans-27.jpg'), body: 'Whether you’re hosting clients, sharing the night with friends or creating lasting memories with family, the Woodforest Bank Club is where The Pavilion experience truly comes together.' },
      { label: 'Dining Included', slug: 'dining-included', image: asset('content-images/partners-sponsors/Fans-13.jpg'), body: 'Food and NA beverages are included with your Season Seats + enjoy three full service bars and nightly happy hour.' }
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
    title: 'Keep exploring arts access',
    body: `Curious how ${title} fits into The Pavilion's larger mission? Join our email list for program stories, educator opportunities and invitations to mission moments throughout the season.`,
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
    subtitle: 'Choose the pathway that matches how you want to help more people experience live arts, education programs, scholarships, grants and outreach at The Pavilion.',
    templatePreset: 'supportArts',
    heroImage: asset('content-images/partners-sponsors/SSS Fans-28.jpg'),
    primaryCTA: { label: 'Make a Gift', href: '/donate' },
    conversion: {
      eyebrow: 'Your next step',
      title: 'Find your way into the mission',
      body: 'Whether you give, volunteer, sponsor or become a Stage Lighter, your support opens the gate for students, families, educators and neighbors across the region.',
      cta: { label: 'Get guidance', type: 'popover', popoverId: 'contact' }
    },
    tabs: [
      { label: 'Donate', slug: 'donate', body: 'Make a direct gift that supports free performances, arts education, scholarships, grants and outreach that make The Pavilion more accessible for everyone.', cta: { label: 'Donate', href: '/donate' } },
      { label: 'Volunteer', slug: 'volunteer', body: 'Join the Pavilion Partners community and help make arts access possible through fundraising, organization and hands-on event support.', cta: { label: 'Volunteer', href: '/mission/volunteer-membership' } },
      { label: 'Corporate Partnership', slug: 'corporate-partnership', body: 'Create a partnership that can include sponsorships, volunteerism, brand exposure, activations, event support and program sponsorship.', cta: { label: 'Partner with us', href: '/mission/corporate-partnership' } },
      { label: 'SL Membership', slug: 'sl-membership', body: 'Become a Stage Lighter to fund powerful performing arts experiences while enjoying elevated access, remarkable perks and a closer connection to the mission.', cta: { label: 'Join Stage Lighters', href: '/mission/performing-arts-membership' } }
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
      { label: 'Support Mission', slug: 'support-mission', body: 'Volunteers at The Pavilion participate the meaningful work of making the arts accessible to all by giving of their time, talents and leadership. > Join Partners' },
      { label: 'Work Events', slug: 'work-events', body: 'Volunteers work with Pavilion Staff to park buses, provide directions to teachers and students (20,000+ each year) and assist with seating assignments. > Join Partners' },
      { label: 'Operate Activities', slug: 'operate-activities', body: 'Our Performing Arts shows are all about removing barriers and free, welcoming, kid-friendly fun in the plazas before the show plays a key role in making that possible. > Join Partners' },
      { label: 'Usher', slug: 'usher', body: 'Help provide directions to seating, answer common questions clearly and courteously and know where to point guests for more detailed information.' },
      { label: 'Info Booths', slug: 'info-booths', body: 'Our Information Booths are often the first point of contact for guests at Performing Arts shows. Info Booth volunteers also help field a wide variety of questions and connect guests with the resources they need. > Join Partners' },
      { label: 'Committees', slug: 'committees', body: "The Pavilion Partners are crucial to supporting many of The Pavilion's fundraising, education and scholarship efforts - and that starts at the committee level. > Join Partners" }
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
    heroImage: asset('content-images/partners-sponsors/Fans-13.jpg'),
    primaryCTA: { label: 'Become a Corporate Partner', type: 'popover', popoverId: 'contact' },
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
      { label: 'Program Sponsorship', slug: 'program-sponsorship', body: 'Sponsoring one of our outreach programs – like our one-of-a-kind arts field trips or educator grants - leaves a lasting impact by extending arts access to even more members of our community.', cta: { label: 'Get Involved', type: 'popover', popoverId: 'contact' } },
      { label: 'Current Corporate Partners', slug: 'current-corporate-partners', body: 'Use this space to feature current corporate partners and recognize organizations supporting The Pavilion’s mission.' }
    ]
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
    title: 'Arts Membership',
    slug: 'arts-shows/membership',
    subtitle: 'Support free performing arts and enjoy a closer connection to The Pavilion season.',
    templatePreset: 'redirect',
    primaryCTA: { label: 'Open Arts Membership', href: 'CONFIGURE_ACCOUNT_MANAGER_URL_IN_CMS', type: 'external', openInNewTab: true }
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
    tabs: [
      { label: 'Relentless', slug: 'relentless', body: 'We keep moving toward the mission with energy, preparation and follow-through.' },
      { label: 'Collaborative', slug: 'collaborative', body: 'We work across teams, partners, artists, volunteers and community groups to create remarkable experiences.' },
      { label: 'Compassionate', slug: 'compassionate', body: 'We care for guests, students, staff and volunteers with patience, clarity and respect.' },
      { label: 'Adaptive', slug: 'adaptive', body: 'Live events require flexibility. The team adjusts quickly while keeping guests and mission first.' },
      { label: 'Proactive', slug: 'proactive', body: 'We anticipate needs before they become barriers and help people feel ready for their Pavilion experience.' },
      { label: 'Administration', slug: 'administration', body: 'Administration team content can list the staff members who guide organizational planning and daily operations.' },
      { label: 'Finance', slug: 'finance', body: 'Finance team content can highlight the staff members who steward resources, reporting and operational support.' },
      { label: 'Operations - Facilities and Production', slug: 'operations-facilities-production', body: 'Facilities and Production staff support the site, stage and technical details that make events possible.' },
      { label: 'Arts Outreach', slug: 'arts-outreach', body: 'Arts Outreach staff connect students, educators, families and community groups with mission programs.' },
      { label: 'Development', slug: 'development', body: 'Development staff support giving, sponsorship, membership and relationship-building that fund arts access.' },
      { label: 'Marketing', slug: 'marketing', body: 'Marketing staff share show information, mission stories, campaigns and guest communications.' },
      { label: 'Operations - Events', slug: 'operations-events', body: 'Events staff prepare the guest experience, event logistics and onsite coordination.' },
      { label: 'Ticketing', slug: 'ticketing', body: 'Ticketing staff support box office operations, ticket access and guest questions.' }
    ]
  },
  {
    title: 'Board of Directors',
    slug: 'leadership',
    subtitle: 'The Pavilion is governed by a volunteer Board of Directors.',
    templatePreset: 'footerPage',
    heroImage: asset('content-images/partners-sponsors/BostonPops-4.jpg'),
    primaryCTA: { label: 'Support Our Mission', href: '/mission/support-the-arts' },
    tabs: [
      { label: 'Officers', slug: 'officers', body: 'Use this area for current board officers and leadership roles.' },
      { label: 'Board', slug: 'board', body: 'Use this area for the full volunteer Board of Directors.' },
      { label: 'Director in Memoriam', slug: 'director-in-memoriam', body: 'Honor directors whose service helped shape The Pavilion’s mission and community legacy.' }
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
      { label: 'Performing Arts Sponsorships', slug: 'performing-arts-sponsorships', body: 'Support free shows, outreach, scholarships, grants and arts access through Performing Arts sponsorships.', cta: { label: 'Support the mission', href: '/mission/corporate-partnership' } },
      { label: 'Current Corporate Partners', slug: 'current-corporate-partners', body: 'Use this area to recognize current partners and the organizations helping make Pavilion experiences possible.' }
    ]
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
    href: '/story-hub/topic/outreach/'
  },
  {
    title: 'People of The Pavilion',
    body: 'Profiles of students, educators, volunteers, artists, fans and supporters who make the mission visible.',
    href: '/story-hub/topic/supporters/'
  },
  {
    title: 'Behind the Experience',
    body: 'A closer look at what happens backstage, before the gates open and after the encore fades.',
    href: '/story-hub/topic/backstage/'
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
  email: {
    title: 'Sign up for emails',
    subtitle: 'Show announcements, arts access stories and venue updates in one clean feed.'
  }
};
