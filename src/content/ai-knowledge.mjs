const reviewed = '2026-09-17';

const withDefaults = (item, index) => ({
  listingStatus: 'published',
  priority: 12,
  lastReviewed: reviewed,
  orderRank: index + 1,
  alternateQuestions: [],
  keywords: [],
  ...item
});

export const aiKnowledge = [
  {
    question: 'What kind of bags can I bring?',
    alternateQuestions: ['Can I bring a purse?', 'What is the clear bag policy?'],
    answer: 'Clear bags sized 12 inches by 12 inches or smaller are permitted. Tinted or patterned clear bags are not accepted. Non-clear handheld clutches sized 4.5 inches by 6.5 inches or smaller are also permitted. Event-specific rules may be more restrictive.',
    category: 'Guest Services',
    sourceTitle: 'Bag Policy',
    sourceUrl: '/plan-your-visit/#bag-policy',
    keywords: ['purse', 'backpack', 'clutch', 'clear bag']
  },
  {
    question: 'Can I bring a diaper bag?',
    answer: 'Diaper bags are permitted when accompanied by an infant or toddler and will be subject to search at the gate.',
    category: 'Guest Services',
    sourceTitle: 'Bag Policy',
    sourceUrl: '/plan-your-visit/#bag-policy',
    keywords: ['baby', 'infant', 'toddler']
  },
  {
    question: 'Can I bring a medically necessary bag?',
    alternateQuestions: ['Can I bring a medical bag?', 'Are medical bags allowed?'],
    answer: 'Bags for medical equipment are permitted when they are sized appropriately for the medical need. They will be inspected at the gate. Small medication-only items should follow the standard bag policy when possible.',
    category: 'Accessibility',
    sourceTitle: 'Bag Policy',
    sourceUrl: '/plan-your-visit/#bag-policy',
    keywords: ['medicine', 'medical equipment']
  },
  {
    question: 'Can I bring a clear backpack?',
    answer: 'A clear backpack is permitted if it fits within the 12-inch by 12-inch bag-size limit and does not have tinting or a printed pattern. It will be subject to inspection at the gate.',
    category: 'Guest Services',
    sourceTitle: 'Bag Policy',
    sourceUrl: '/plan-your-visit/#bag-policy',
    keywords: ['backpack', 'clear bag']
  },
  {
    question: 'Why is the bag policy enforced so strictly?',
    alternateQuestions: ['I did not know about the bag policy', 'I am upset about the bag policy', 'Can security make an exception to the bag policy?'],
    answer: 'The bag policy is enforced consistently to maintain a safe and efficient entry process for guests, staff and artists. Gate staff cannot make individual exceptions, so guests should review the current policy before arriving.',
    category: 'Guest Services',
    sourceTitle: 'Bag Policy',
    sourceUrl: '/plan-your-visit/#bag-policy',
    keywords: ['complaint', 'exception', 'security']
  },
  {
    question: 'Can I rent lawn chairs?',
    alternateQuestions: ['How much are lawn chairs?', 'Where do I pick up a rented lawn chair?'],
    answer: 'Lawn chairs are typically available at most Live Nation shows for $8 in advance or $10 upon arrival, while supplies last. Pickup stations are near the bottom of the lawn on the north and south sides. Lawn chairs are free at Performing Arts events.',
    category: 'Guest Services',
    sourceTitle: 'What to Bring',
    sourceUrl: '/plan-your-visit/#dont-bring',
    keywords: ['chair rental', 'lawn', 'advance rental']
  },
  {
    question: 'Can I bring my own lawn chair?',
    alternateQuestions: ['Are outside lawn chairs allowed?'],
    answer: 'Outside lawn chairs are not permitted. Specially designed lawn chairs are typically available to rent at Live Nation shows, and chairs are provided free at Performing Arts events.',
    category: 'Guest Services',
    sourceTitle: 'What to Bring',
    sourceUrl: '/plan-your-visit/#dont-bring',
    keywords: ['outside chair', 'camp chair']
  },
  {
    question: 'What if advance lawn-chair rentals are sold out?',
    alternateQuestions: ['Pre-sale lawn chairs sold out'],
    answer: 'When advance lawn-chair rentals sell out, chairs may still be available for $10 upon arrival while supplies last. Pickup stations are near the bottom of the lawn on the north and south sides.',
    category: 'Guest Services',
    sourceTitle: 'What to Bring',
    sourceUrl: '/plan-your-visit/#dont-bring',
    keywords: ['presale', 'sold out', 'chair rental']
  },
  {
    question: 'Where can I rent lawn chairs in advance?',
    answer: 'Advance lawn-chair rentals for most eligible shows are available through The Pavilion venue page on Ticketmaster. Choose the show, open Events and Add-ons, and look for the lawn-chair or concession-voucher option.',
    category: 'Guest Services',
    sourceTitle: 'Ticketmaster Venue Page',
    sourceUrl: 'https://www.ticketmaster.com/the-cynthia-woods-mitchell-pavilion-presented-tickets-woodlands/venue/475245',
    keywords: ['presale', 'add-on', 'concession voucher']
  },
  {
    question: 'Is the lawn split into sections?',
    answer: 'The lawn is general admission and is not divided into reserved sections. Guests with lawn tickets may sit together wherever space is available.',
    category: 'Tickets',
    sourceTitle: 'Plan Your Visit',
    sourceUrl: '/plan-your-visit/',
    keywords: ['general admission', 'GA lawn', 'sit together']
  },
  {
    question: 'Why are there numbers on my lawn ticket?',
    answer: 'The lawn is general admission. Numbers printed on a lawn ticket are generally used for ticketing and inventory tracking and do not assign a specific lawn section or seat.',
    category: 'Tickets',
    sourceTitle: 'Plan Your Visit',
    sourceUrl: '/plan-your-visit/',
    keywords: ['seat number', 'section number', 'GA lawn']
  },
  {
    question: 'Why are lawn tickets listed at different prices?',
    answer: 'The Pavilion lawn is general admission, so differently priced lawn listings do not represent different lawn sections. Higher-priced listings may be resale tickets. Ticketmaster and The Pavilion Box Office are the official ticket sources.',
    category: 'Tickets',
    sourceTitle: 'Official Ticketing Source',
    sourceUrl: '/plan-your-visit/#official-ticketing-source',
    keywords: ['resale', 'ticket price', 'GA lawn']
  },
  {
    question: 'I have a lawn ticket but need accessible seating. What should I do?',
    alternateQuestions: ['Can my lawn ticket be accommodated for a wheelchair?', 'I need accessible seating after buying a lawn ticket'],
    answer: 'Ask a red-shirted supervisor for help as soon as you arrive. Staff may be able to accommodate accessibility needs in an accessible area on a first-come, first-served basis, subject to availability. For advance help, call the Box Office at 281-364-3024.',
    category: 'Accessibility',
    sourceTitle: 'Accessibility',
    sourceUrl: '/plan-your-visit/#accessibility-support',
    keywords: ['wheelchair', 'mobility', 'lawn ticket']
  },
  {
    question: 'Can I bring a blanket and a lawn chair?',
    answer: 'Small blankets are typically allowed. Outside lawn chairs are not permitted, but rental chairs are usually available at Live Nation shows and are provided free at Performing Arts events.',
    category: 'Guest Services',
    sourceTitle: 'What to Bring',
    sourceUrl: '/plan-your-visit/#dont-bring',
    keywords: ['blanket', 'chair']
  },
  {
    question: 'Can I bring a blanket?',
    answer: 'Small blankets or tarps are allowed at most shows. Blankets that wrap into a carrying case must remain permanently attached to the case and will be reviewed at entry.',
    category: 'Guest Services',
    sourceTitle: 'Venue Rules',
    sourceUrl: '/plan-your-visit/#venue-rules',
    keywords: ['tarp', 'lawn blanket']
  },
  {
    question: 'Will lawn chairs be provided at graduation?',
    answer: 'Yes. Lawn chairs are provided for graduation events at The Pavilion.',
    category: 'Events',
    sourceTitle: 'Plan Your Visit',
    sourceUrl: '/plan-your-visit/',
    keywords: ['graduation', 'commencement']
  },
  {
    question: 'What are the Box Office hours?',
    answer: 'The North Box Office is normally open Monday through Friday from 10 a.m. to 5 p.m. On event days Monday through Saturday, it is open from 10 a.m. through intermission. For Sunday events, it opens at noon and remains open through intermission. Holiday and non-ticketed-event closures may apply.',
    category: 'Tickets',
    sourceTitle: 'Box Office Hours',
    sourceUrl: '/plan-your-visit/#box-office',
    keywords: ['hours', 'north box office', 'south box office']
  },
  {
    question: 'Are children admitted free?',
    alternateQuestions: ['Do kids need tickets?', 'Are kids free?'],
    answer: 'For most contemporary events, children age five and under are admitted free on the lawn with a ticketed adult. Children age two and under may sit free in the reserved section on an adult lap. Event-specific and children-focused performances may have different requirements.',
    category: 'Tickets',
    sourceTitle: 'Children and Tickets',
    sourceUrl: '/plan-your-visit/#children',
    keywords: ['child ticket', 'baby', 'lap child']
  },
  {
    question: 'Can I get a refund or exchange?',
    answer: 'Tickets are generally nonrefundable and cannot be exchanged after purchase. If an event is canceled or rescheduled, follow the instructions from the original ticketing source.',
    category: 'Tickets',
    sourceTitle: 'Ticket Information',
    sourceUrl: '/plan-your-visit/#ticket-info',
    keywords: ['refund', 'exchange', 'canceled event']
  },
  {
    question: 'Can I upgrade or change my tickets?',
    answer: 'Seats generally cannot be upgraded or changed after purchase. Contact the original ticketing source or The Pavilion Box Office if you need help understanding the options attached to your order.',
    category: 'Tickets',
    sourceTitle: 'Ticket Information',
    sourceUrl: '/plan-your-visit/#ticket-info',
    keywords: ['upgrade seat', 'change seat']
  },
  {
    question: 'What do ticket fees pay for?',
    alternateQuestions: ['Why are ticket fees so high?'],
    answer: 'Online ticket fees may include taxes, credit-card processing, ticketing technology, secure ticket delivery and entry systems designed to reduce counterfeit tickets. The exact fees are shown by the ticketing provider before purchase.',
    category: 'Tickets',
    sourceTitle: 'Ticket Information',
    sourceUrl: '/plan-your-visit/#ticket-info',
    keywords: ['service fee', 'convenience fee']
  },
  {
    question: 'Can I avoid ticket fees?',
    answer: 'Tickets may be purchased at The Pavilion Box Office at 2005 Lake Robbins Drive. In-person purchases can still include fees, but they are typically lower than online fees.',
    category: 'Tickets',
    sourceTitle: 'Box Office Hours',
    sourceUrl: '/plan-your-visit/#box-office',
    keywords: ['service fee', 'in person tickets']
  },
  {
    question: 'Do I have to be a certain age to attend?',
    answer: 'The Pavilion does not generally set a venue-wide age restriction for shows, but parents and guardians should review the event listing and use their judgment. Artist or event-specific restrictions will be noted when applicable.',
    category: 'Tickets',
    sourceTitle: 'Events',
    sourceUrl: '/events/',
    keywords: ['age limit', 'minor', 'children']
  },
  {
    question: 'What should I do if I am having trouble buying tickets?',
    answer: 'Confirm that you are purchasing through Ticketmaster, then try another device or clear your browser cache. If the problem continues, call the Box Office at 281-364-3024 or email boxoffice@woodlandscenter.org.',
    category: 'Tickets',
    sourceTitle: 'Official Ticketing Source',
    sourceUrl: '/plan-your-visit/#official-ticketing-source',
    keywords: ['purchase error', 'ticketmaster problem', 'checkout']
  },
  {
    question: 'What happens if it rains?',
    alternateQuestions: ['Are events rain or shine?', 'Will the show be canceled for weather?'],
    answer: 'Pavilion events are rain or shine. The venue monitors weather conditions and will communicate safety or schedule changes when needed. Check the event page and official Pavilion updates before leaving for the show.',
    category: 'Events',
    sourceTitle: 'Ticket Information',
    sourceUrl: '/plan-your-visit/#accepted-tickets',
    keywords: ['weather', 'storm', 'rain delay']
  },
  {
    question: 'Where should I buy tickets?',
    answer: 'Ticketmaster and The Pavilion Box Office are the official ticket sources. The Pavilion does not endorse other ticket sellers and cannot guarantee tickets purchased through an unaffiliated third party.',
    category: 'Tickets',
    sourceTitle: 'Official Ticketing Source',
    sourceUrl: '/plan-your-visit/#official-ticketing-source',
    keywords: ['ticketmaster', 'official tickets']
  },
  {
    question: 'Where are my tickets?',
    alternateQuestions: ['I cannot find my tickets', 'My tickets are missing'],
    answer: 'Open the Ticketmaster or Live Nation account used for the purchase and look under My Events. If the tickets are still missing, call the Box Office at 281-364-3024 or email boxoffice@woodlandscenter.org.',
    category: 'Tickets',
    sourceTitle: 'Accepted Tickets',
    sourceUrl: '/plan-your-visit/#accepted-tickets',
    keywords: ['mobile ticket', 'ticket delivery']
  },
  {
    question: 'Should I buy tickets from a third-party site?',
    answer: 'The only official ticket sources are Ticketmaster and The Pavilion Box Office. A third-party ticket may be valid, but The Pavilion cannot verify or resolve it. If you already purchased from a reseller, ask the seller to transfer the ticket into your Ticketmaster or Live Nation account.',
    category: 'Tickets',
    sourceTitle: 'Official Ticketing Source',
    sourceUrl: '/plan-your-visit/#official-ticketing-source',
    keywords: ['reseller', 'stubhub', 'vivid seats', 'resale']
  },
  {
    question: 'What is included with a Platinum ticket?',
    alternateQuestions: ['What does Platinum mean on Ticketmaster?'],
    answer: 'Platinum tickets typically include the seat only and are priced according to demand. Review the offer details before purchase because Platinum does not automatically include parking, club access, merchandise or a VIP package.',
    category: 'Tickets',
    sourceTitle: 'Ticket Information',
    sourceUrl: '/plan-your-visit/#ticket-info',
    keywords: ['official platinum', 'premium ticket']
  },
  {
    question: 'Can I bring outside food and drinks?',
    answer: 'At Live Nation shows, each guest may bring personal food in one one-gallon zip-top bag. At Performing Arts shows, that amount limit does not apply, but food must fit within the bag-size policy or remain in original packaging such as a takeout container, pizza box or sealed snack package. Outside drinks are not permitted at any show.',
    category: 'Guest Services',
    sourceTitle: 'Food and Drink',
    sourceUrl: '/plan-your-visit/#food-drink',
    keywords: ['outside food', 'outside drinks', 'snacks']
  },
  {
    question: 'Can I wear chains on my clothing?',
    answer: 'Lightweight fashion jewelry is typically permitted. Heavy, solid or bulky chains may be refused because final entry decisions are made by security staff at the gate.',
    category: 'Guest Services',
    sourceTitle: 'What to Bring',
    sourceUrl: '/plan-your-visit/#what-to-bring',
    keywords: ['chain', 'jewelry', 'clothing']
  },
  {
    question: 'Does The Pavilion have a lost and found?',
    alternateQuestions: ['I lost something at the show', 'How do I report a lost item?'],
    answer: 'Call The Pavilion lost and found at 281-364-3010, Monday through Friday from 9 a.m. to 5 p.m. Staff can check whether your item was turned in.',
    category: 'Guest Services',
    sourceTitle: 'Plan Your Visit',
    sourceUrl: '/plan-your-visit/',
    keywords: ['lost item', 'lost phone', 'lost wallet']
  },
  {
    question: 'What can I bring into The Pavilion?',
    answer: 'Commonly permitted items include clear bags within the size limit, small non-clear clutches, non-detachable-lens cameras, small blankets, small umbrellas, rain jackets and most small personal fans. Policies can change for a specific event, so review the full list before arriving.',
    category: 'Guest Services',
    sourceTitle: 'What to Bring',
    sourceUrl: '/plan-your-visit/#what-to-bring',
    keywords: ['allowed items', 'prohibited items']
  },
  {
    question: 'Can I bring a reusable bottle or Yeti-style cup?',
    answer: 'Empty reusable bottles and cups are allowed at most shows. Some artists may require lids to be removed or may allow only crushable disposable bottles. Be prepared to return the item to your vehicle if the event policy is more restrictive.',
    category: 'Guest Services',
    sourceTitle: 'Food and Drink',
    sourceUrl: '/plan-your-visit/#food-drink',
    keywords: ['yeti', 'tumbler', 'water bottle']
  },
  {
    question: 'Can I bring a camera?',
    answer: 'Cameras without a detachable lens are generally permitted. Detachable-lens cameras and audio or video recording equipment are not allowed unless the event or tour has issued specific approval.',
    category: 'Guest Services',
    sourceTitle: 'What to Bring',
    sourceUrl: '/plan-your-visit/#dont-bring',
    keywords: ['dslr', 'professional camera', 'detachable lens']
  },
  {
    question: 'Can I bring or use a vape?',
    answer: 'Vaping devices may be used only on the lawn and in plaza areas. Smoking or vaping is not allowed in reserved seating. E-liquid or vape juice may be refused at entry, and event-specific restrictions may apply.',
    category: 'Guest Services',
    sourceTitle: 'Venue Rules',
    sourceUrl: '/plan-your-visit/#venue-rules',
    keywords: ['e-cigarette', 'vaping', 'vape juice']
  },
  {
    question: 'Can I bring an emotional-support animal?',
    answer: 'Service animals are welcome in accordance with applicable law. Pets and animals whose sole function is comfort or emotional support are not considered service animals under the ADA and are not permitted.',
    category: 'Accessibility',
    sourceTitle: 'Accessibility',
    sourceUrl: '/plan-your-visit/#accessibility-support',
    keywords: ['ESA', 'service dog', 'pet']
  },
  {
    question: 'Can I bring pepper spray?',
    answer: 'Pepper spray is not permitted inside the venue. Before entry, guests may ask an Information Booth whether it can be held during the show and retrieved on the way out.',
    category: 'Guest Services',
    sourceTitle: 'What Not to Bring',
    sourceUrl: '/plan-your-visit/#dont-bring',
    keywords: ['mace', 'self defense spray']
  },
  {
    question: 'Can I bring CBD products?',
    answer: 'CBD products are not permitted inside The Pavilion because staff cannot reliably distinguish them from prohibited substances during entry screening.',
    category: 'Guest Services',
    sourceTitle: 'What Not to Bring',
    sourceUrl: '/plan-your-visit/#dont-bring',
    keywords: ['CBD', 'hemp', 'gummy']
  },
  {
    question: 'Is accessible parking available?',
    answer: 'Free accessible parking is available in the Gold Lot on a first-come, first-served basis. Enter from Six Pines Drive at 9809 Six Pines Drive and display the appropriate accessible-parking credentials. Overflow accessible parking is available at 9669 Grogans Mill Road.',
    category: 'Parking',
    sourceTitle: 'Paid and Accessible Parking',
    sourceUrl: '/plan-your-visit/#paid-accessible-parking',
    keywords: ['ADA parking', 'handicap placard', 'Gold Lot']
  },
  {
    question: 'Are there seats that may better accommodate larger guests?',
    alternateQuestions: ['Do accessible seats have armrests?'],
    answer: 'Accessible seating without armrests may better accommodate some guests. Purchase an accessible seat through Ticketmaster or The Pavilion Box Office, subject to availability.',
    category: 'Accessibility',
    sourceTitle: 'Accessibility',
    sourceUrl: '/plan-your-visit/#accessibility-support',
    keywords: ['armless seat', 'accessible chair']
  },
  {
    question: 'Can I bring a wheelchair or mobility scooter?',
    answer: 'Wheelchairs and mobility scooters are welcome. Guests using a mobility device should use an accessible seating area with room for the device. Ask a red-shirted supervisor at the gate for help reaching the correct area.',
    category: 'Accessibility',
    sourceTitle: 'Accessibility',
    sourceUrl: '/plan-your-visit/#accessibility-support',
    keywords: ['scooter', 'mobility device']
  },
  {
    question: 'How do I buy accessible seating?',
    alternateQuestions: ['How do I find wheelchair seats?', 'Handicap seating'],
    answer: 'Accessible seats can be purchased online through Ticketmaster or in person at The Pavilion Box Office. On Ticketmaster, open Filters, turn on the Accessibility option, choose the appropriate needs and apply the filter. All seating is subject to availability.',
    category: 'Accessibility',
    sourceTitle: 'Accessibility',
    sourceUrl: '/plan-your-visit/#accessibility-support',
    keywords: ['ADA tickets', 'wheelchair seating']
  },
  {
    question: 'Can I purchase paid parking?',
    answer: 'Gold Lot parking passes may be purchased in advance through The Pavilion venue page on Ticketmaster, pending availability. Free parking is also available in designated lots.',
    category: 'Parking',
    sourceTitle: 'Paid and Accessible Parking',
    sourceUrl: '/plan-your-visit/#paid-accessible-parking',
    keywords: ['Gold Lot pass', 'parking pass']
  },
  {
    question: 'What is the parking-garage clearance?',
    alternateQuestions: ['Will my tall vehicle fit in the Town Center Garage?', 'Gold Lot garage clearance'],
    answer: 'The first floor of the Town Center Parking Garage has 8 feet 6 inches of clearance. Other floors and ramps have 7 feet of clearance.',
    category: 'Parking',
    sourceTitle: 'Parking',
    sourceUrl: '/plan-your-visit/#parking',
    keywords: ['truck clearance', 'van height', 'garage height']
  },
  {
    question: 'Do I need tickets for a Performing Arts show?',
    answer: 'For The Pavilion free Performing Arts shows, guests do not need tickets for lawn or mezzanine seating and may arrive when gates open. Review the event listing because special programs or reserved group seating may use a different process.',
    category: 'Events',
    sourceTitle: 'Free Performing Arts Shows',
    sourceUrl: '/arts-shows/free-shows/',
    keywords: ['symphony ticket', 'ballet ticket', 'free show']
  },
  {
    question: 'What does OV mean on a ticket?',
    answer: 'OV means obstructed view. Two large poles support The Pavilion tent structure and can partially block the stage view from certain seats.',
    category: 'Tickets',
    sourceTitle: 'Ticket Information',
    sourceUrl: '/plan-your-visit/#ticket-info',
    keywords: ['obstructed view', 'limited view']
  },
  {
    question: 'Where can I learn about Season Seats?',
    alternateQuestions: ['How do I become a season-seat holder?', 'Can I buy season tickets?'],
    answer: 'The Season Seats page explains seating options, included amenities and how to contact the Premium Seat Sales team. Use the inquiry form there for current availability and pricing.',
    category: 'Membership',
    sourceTitle: 'Season Seats',
    sourceUrl: '/season-seats/',
    keywords: ['season tickets', 'premium seats', 'box seats']
  },
  {
    question: 'Can I get into the Woodforest Bank Club?',
    answer: 'The Woodforest Bank Club is reserved for Season Seat holders and box-seat owners. The Season Seats team can explain current options for gaining club access.',
    category: 'Membership',
    sourceTitle: 'Season Seats',
    sourceUrl: '/season-seats/',
    keywords: ['club access', 'premium club']
  },
  {
    question: 'Can I rent The Pavilion for a private event?',
    alternateQuestions: ['Can I rent the Event Center?', 'How much does it cost to rent The Pavilion?'],
    answer: 'The Main Stage, Pavilion Event Center and Woodforest Bank Club are available for private-event inquiries. Use the booking form on the Rent The Pavilion page to request availability and pricing.',
    category: 'Venue',
    sourceTitle: 'Rent The Pavilion',
    sourceUrl: '/rent/',
    keywords: ['wedding', 'meeting', 'private party', 'rental']
  },
  {
    question: 'Can I photograph a show as media?',
    alternateQuestions: ['How do I request a photo pass?', 'Can I review a concert?'],
    answer: 'Media photography and review requests for Live Nation shows must be submitted through the Live Nation marketing and public-relations request portal. The tour generally responds during the week of the show with approval or denial.',
    category: 'Events',
    sourceTitle: 'Live Nation Media Request',
    sourceUrl: 'https://lne.my.site.com/mktPRRequest/MKT_MarketingPortalLogin?startURL=%2FmktPRRequest%2F',
    keywords: ['media pass', 'photo credential', 'press request']
  },
  {
    question: 'What should I do if I was overcharged at concessions?',
    answer: 'Contact The Pavilion concessions partner, Aramark, at lopez-anthony4@aramark.com to discuss the charge and possible refund options. Include the event date, stand location and receipt details when available.',
    category: 'Guest Services',
    sourceTitle: 'Concessions',
    sourceUrl: '/plan-your-visit/#concessions',
    keywords: ['refund', 'food charge', 'Aramark']
  },
  {
    question: 'What should I do if I was overcharged for merchandise?',
    answer: 'Contact the merchandise partner at rollis@consolidated.net to discuss the charge and possible refund options. Include the event date, merchandise location and receipt details when available.',
    category: 'Guest Services',
    sourceTitle: 'Plan Your Visit',
    sourceUrl: '/plan-your-visit/',
    keywords: ['merch refund', 'merchandise charge']
  },
  {
    question: 'Will The Pavilion donate an item or tickets to my organization?',
    answer: 'To focus resources on free shows and arts-access programs, The Pavilion is not able to provide outside donations at this time.',
    category: 'Giving',
    sourceTitle: 'Support the Arts',
    sourceUrl: '/mission/support-the-arts/',
    keywords: ['donation request', 'raffle item', 'charity tickets']
  },
  {
    question: 'Can my nonprofit raise money at The Pavilion?',
    alternateQuestions: ['Are there concession fundraising opportunities?'],
    answer: 'Nonprofit groups may be able to fundraise by working with the concessions team. Review the concessions information and contact The Pavilion for current Aramark fundraising opportunities.',
    category: 'Giving',
    sourceTitle: 'Concessions',
    sourceUrl: '/plan-your-visit/#concessions',
    keywords: ['nonprofit fundraiser', 'concession stand fundraiser']
  },
  {
    question: 'Can I reserve seats at a Performing Arts event?',
    answer: 'Mezzanine and lawn seating for free Performing Arts shows is normally first come, first served, and no ticket is required. Larger groups may be eligible for advance reserved seating; contact The Pavilion before the event to ask about current group options.',
    category: 'Events',
    sourceTitle: 'Free Performing Arts Shows',
    sourceUrl: '/arts-shows/free-shows/',
    keywords: ['group seating', 'reserved seats', 'symphony']
  },
  {
    question: 'Can I work at The Pavilion?',
    alternateQuestions: ['Is The Pavilion hiring?', 'Where are Pavilion jobs posted?'],
    answer: 'Current full-time and part-time opportunities are listed on the Work at The Pavilion page. Applicants must be at least 16 years old.',
    category: 'Other',
    sourceTitle: 'Work at The Pavilion',
    sourceUrl: '/work-at-cwmp/',
    keywords: ['jobs', 'employment', 'hiring']
  },
  {
    question: 'Do concessions accept cash?',
    alternateQuestions: ['Is The Pavilion cashless?'],
    answer: 'Card payment is preferred at concession stands. Some vendors may still accept cash, so guests who need a guaranteed payment method should bring a card or mobile wallet.',
    category: 'Guest Services',
    sourceTitle: 'Concessions',
    sourceUrl: '/plan-your-visit/#concessions',
    keywords: ['cashless', 'credit card', 'mobile wallet']
  },
  {
    question: 'Is The Pavilion bringing a particular artist this year?',
    alternateQuestions: ['Will a specific artist play The Pavilion?', 'Can you book my favorite band?'],
    answer: 'Only announced events can be confirmed. Check the Events page and Pavilion email updates for the latest show announcements.',
    category: 'Events',
    sourceTitle: 'Events',
    sourceUrl: '/events/',
    keywords: ['artist request', 'show announcement', 'concert lineup']
  },
  {
    question: 'Is the lawn shaded?',
    answer: 'The lawn is generally not shaded. Guests can cool down in the air-conditioned Pavilion Lounge, and some shade is usually available in the north and south plazas.',
    category: 'Venue',
    sourceTitle: 'Plan Your Visit',
    sourceUrl: '/plan-your-visit/',
    keywords: ['sun', 'heat', 'cooling area']
  },
  {
    question: 'Can I use a general-admission lawn ticket to enter the pit?',
    alternateQuestions: ['Does GA get me into the pit?'],
    answer: 'No. The pit requires a pit-specific ticket. Unreserved general admission in the pit means there are no assigned seats within that pit area; a general-admission lawn ticket does not provide pit access.',
    category: 'Tickets',
    sourceTitle: 'Ticket Information',
    sourceUrl: '/plan-your-visit/#ticket-info',
    keywords: ['GA pit', 'lawn ticket', 'pit access']
  },
  {
    question: 'What is The Pavilion Partners?',
    alternateQuestions: ['How can I volunteer at The Pavilion?'],
    answer: 'The Pavilion Partners is the venue volunteer membership organization. Members support fundraising, education, guest service and hands-on event needs throughout the season.',
    category: 'Membership',
    sourceTitle: 'Pavilion Partners',
    sourceUrl: '/mission/volunteer-membership/',
    keywords: ['volunteer', 'Partners membership']
  },
  {
    question: 'Can I book a concert at The Pavilion?',
    alternateQuestions: ['How do I submit an artist for booking?'],
    answer: 'Concert booking at The Pavilion is handled through Live Nation. The Pavilion guest-services team does not select or accept artist submissions directly.',
    category: 'Events',
    sourceTitle: 'Contact The Pavilion',
    sourceUrl: '/plan-your-visit/#contact',
    keywords: ['artist booking', 'promoter', 'Live Nation']
  },
  {
    question: 'When will I receive information about my VIP package?',
    alternateQuestions: ['I need information about my VIP activation'],
    answer: 'The tour normally emails VIP-package instructions during the week of the show. If the email does not arrive, call The Pavilion Box Office at 281-364-3024 for the best next contact.',
    category: 'Tickets',
    sourceTitle: 'Ticket Information',
    sourceUrl: '/plan-your-visit/#ticket-info',
    keywords: ['VIP activation', 'VIP email', 'VIP instructions']
  },
  {
    question: 'Where should I park for an early VIP activation?',
    answer: 'Free Pavilion lots may not be available before their normal event opening time. Preferred parking may be available in the Town Center Garage off Six Pines Drive, and other paid garages and lots are nearby. Follow the parking directions included with the VIP package whenever they differ.',
    category: 'Parking',
    sourceTitle: 'Parking',
    sourceUrl: '/plan-your-visit/#parking',
    keywords: ['VIP parking', 'early entry', 'Town Center Garage']
  },
  {
    question: 'Are there hotels near The Pavilion?',
    answer: 'Nearby options include The Woodlands Waterway Marriott, Hyatt Centric The Woodlands and The Westin at The Woodlands. Visit The Woodlands maintains a broader hotel directory.',
    category: 'Venue',
    sourceTitle: 'The Woodlands Hotels',
    sourceUrl: 'https://www.visitthewoodlands.com/hotels/',
    keywords: ['lodging', 'Marriott', 'Hyatt', 'Westin']
  },
  {
    question: 'How do I sign up for Pavilion emails?',
    alternateQuestions: ['Does The Pavilion have a newsletter?', 'Where can I get show announcements?'],
    answer: 'Use the Get Emails form to receive show announcements, arts-access stories and venue updates from The Pavilion.',
    category: 'Other',
    sourceTitle: 'Get Pavilion Emails',
    sourceUrl: '/plan-your-visit/#get-emails',
    keywords: ['newsletter', 'email list', 'show announcements']
  },
  {
    question: 'Are guests allowed to stand during a performance?',
    alternateQuestions: ['People are standing in front of me', 'Can staff make people sit down?'],
    answer: 'Guests may stand or dance in front of their own seat or lawn spot, although standing on seats or in aisles is not allowed. Artists often encourage standing, so staff generally cannot require a guest to sit simply because another guest prefers a seated view.',
    category: 'Guest Services',
    sourceTitle: 'Venue Rules',
    sourceUrl: '/plan-your-visit/#venue-rules',
    keywords: ['blocked view', 'standing guest', 'dancing']
  },
  {
    question: 'How can I report a bad experience?',
    alternateQuestions: ['I have a complaint', 'How do I send feedback about a show?'],
    answer: 'Use The Pavilion contact form to share the event date, location and specific details of the experience. The appropriate Pavilion team can review the feedback and follow up when needed.',
    category: 'Guest Services',
    sourceTitle: 'Contact The Pavilion',
    sourceUrl: '/plan-your-visit/#contact',
    keywords: ['complaint', 'feedback', 'guest experience']
  }
].map(withDefaults);
