import fs from 'node:fs';
import path from 'node:path';
import { content } from '../src/content/client.mjs';

const dist = path.resolve('dist');
const routeManifest = JSON.parse(fs.readFileSync('cwmp_codex_build_package/data/route_manifest.json', 'utf8'));

const esc = (value = '') =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

const attr = esc;

const fmtDate = (date) =>
  new Intl.DateTimeFormat('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC'
  }).format(new Date(date));

const routeFile = (routePath) => {
  if (routePath === '/') return path.join(dist, 'index.html');
  return path.join(dist, routePath.replace(/^\//, ''), 'index.html');
};

const writeRoute = (routePath, html) => {
  const file = routeFile(routePath);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
};

const copyRecursive = (source, target) => {
  if (!fs.existsSync(source)) return;
  const stat = fs.statSync(source);
  if (stat.isDirectory()) {
    fs.mkdirSync(target, { recursive: true });
    for (const entry of fs.readdirSync(source)) {
      copyRecursive(path.join(source, entry), path.join(target, entry));
    }
    return;
  }
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.copyFileSync(source, target);
};

const slugifyTopic = (topic) => topic.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const cta = (item = {}, style = item.style || 'primary') => {
  if (!item.label) return '';
  const href = item.href || (item.type === 'popover' ? `#${item.popoverId}` : '#');
  const popoverAttrs = item.popoverId ? ` data-popover-open="${attr(item.popoverId)}"` : '';
  const externalAttrs = item.openInNewTab ? ' target="_blank" rel="noopener noreferrer"' : '';
  return `<a class="btn btn-${style}" href="${attr(href)}"${popoverAttrs}${externalAttrs}>${esc(item.label)}<span aria-hidden="true">→</span></a>`;
};

const image = (media, className = '', loading = 'lazy') =>
  `<img class="${attr(className)}" src="${attr(media?.src || media || content.settings.fallbackImage)}" alt="${attr(media?.alt || '')}" loading="${loading}" decoding="async">`;

const sectionHeading = (eyebrow, title, subtitle, extra = '') => `
  <div class="section-heading">
    ${eyebrow ? `<p class="eyebrow">${esc(eyebrow)}</p>` : ''}
    <h2>${esc(title)}</h2>
    ${subtitle ? `<p>${esc(subtitle)}</p>` : ''}
    ${extra}
  </div>
`;

const tabs = (items, idPrefix) => {
  const tabItems = items || [];
  if (!tabItems.length) return '';
  const buttons = tabItems
    .map(
      (tab, index) =>
        `<button class="tab-pill" id="${idPrefix}-tab-${index}" type="button" role="tab" aria-selected="${index === 0}" aria-controls="${idPrefix}-panel-${index}" tabindex="${index === 0 ? '0' : '-1'}">${esc(tab.label)}</button>`
    )
    .join('');
  const panels = tabItems
    .map(
      (tab, index) => `
        <div class="tab-panel" id="${idPrefix}-panel-${index}" role="tabpanel" aria-labelledby="${idPrefix}-tab-${index}" ${index === 0 ? '' : 'hidden'}>
          <h3>${esc(tab.label)}</h3>
          <p>${esc(tab.body || tab.summary || '')}</p>
          ${tab.cta ? cta(tab.cta, 'secondary') : ''}
        </div>
      `
    )
    .join('');
  return `
    <div class="tabs" data-tabs>
      <div class="tab-list" role="tablist" aria-label="${attr(idPrefix.replaceAll('-', ' '))}">${buttons}</div>
      ${panels}
    </div>
  `;
};

const eventCard = (event, featured = false) => `
  <article class="event-card ${featured ? 'is-featured' : ''}">
    <a href="/events/${attr(event.slug)}/" class="event-card-image" aria-label="${attr(event.title)} event details">
      <img src="${attr(event.cardImage || event.headerImage)}" alt="${attr(event.title)}" loading="lazy" decoding="async">
    </a>
    <div class="event-card-body">
      <p class="event-date">${esc(fmtDate(event.eventDate))}</p>
      <h3><a href="/events/${attr(event.slug)}/">${esc(event.title)}</a></h3>
      ${event.subheader ? `<p>${esc(event.subheader)}</p>` : ''}
      <div class="card-actions">
        ${cta({ label: event.ctaLabel || 'Get Tickets', href: event.ticketLink, openInNewTab: true }, 'primary')}
        ${cta({ label: 'Details', href: `/events/${event.slug}/` }, 'secondary')}
      </div>
    </div>
  </article>
`;

const eventRows = (events) => `
  <div class="event-rows" data-event-rows hidden>
    ${events
      .map(
        (event) => `
          <article class="event-row">
            <time datetime="${attr(event.eventDate)}">${esc(fmtDate(event.eventDate))}</time>
            <div>
              <h3><a href="/events/${attr(event.slug)}/">${esc(event.title)}</a></h3>
              <p>${esc(event.subheader || event.eventStartTime)}</p>
            </div>
            ${cta({ label: event.ctaLabel || 'Get Tickets', href: event.ticketLink, openInNewTab: true }, 'primary')}
          </article>
        `
      )
      .join('')}
  </div>
`;

const eventListBlock = (heading = 'Upcoming Events', filterType = null) => {
  const events = filterType ? content.events.filter((event) => event.eventType === filterType) : content.events;
  return `
    <section class="section events-section" id="events">
      <div class="container">
        <div class="section-row">
          ${sectionHeading('Home / Events', heading, 'Choose a card-forward concert view or a quick list view.')}
          <div class="view-toggle" role="group" aria-label="Event display">
            <button class="is-active" type="button" data-event-view="cards">Cards</button>
            <button type="button" data-event-view="list">List</button>
          </div>
        </div>
        <div class="event-carousel" data-event-cards>
          ${events.map((event) => eventCard(event, false)).join('')}
        </div>
        ${eventRows(events)}
      </div>
    </section>
  `;
};

const missionSubnav = () => {
  const supportPage = (slug) => content.getLandingPage(slug) || {};
  const supportLinks = [
    { label: 'Performing Arts Membership', href: '/mission/performing-arts-membership', page: supportPage('mission/performing-arts-membership') },
    { label: 'Volunteer Membership', href: '/mission/volunteer-membership', page: supportPage('mission/volunteer-membership') },
    { label: 'Corporate Partnership', href: '/mission/corporate-partnership', page: supportPage('mission/corporate-partnership') }
  ].map((link) => ({
    label: link.label,
    href: link.href,
    image: link.page.heroImage || content.mission.heroImage,
    copy: link.page.subtitle || 'Support arts access through this mission pathway.'
  }));
  const fundingLinks = content.grantPrograms.map((program) => ({
    label: program.title,
    href: `/mission/funding/${program.slug}`,
    image: program.image,
    copy: program.subtitle
  }));
  const outreachLinks = content.outreachPrograms.map((program) => ({
    label: program.title,
    href: `/mission/outreach/${program.slug}`,
    image: program.image,
    copy: program.subtitle
  }));
  const showLinks = content.events
    .filter((event) => event.eventType === 'freeCommunity' || event.eventType === 'performingArts')
    .map((event) => ({
      label: event.title,
      href: `/events/${event.slug}/`,
      image: event.cardImage || event.headerImage,
      copy: `${event.subheader || 'Performing Arts show'} · ${fmtDate(event.eventDate)}`
    }));
  const previewLink = (link) => `
    <a href="${attr(link.href)}" class="mission-preview-link" data-preview-title="${attr(link.label)}" data-preview-copy="${attr(link.copy)}" data-preview-image="${attr(link.image)}">${esc(link.label)}</a>
  `;
  const groups = [
    supportLinks,
    fundingLinks,
    outreachLinks,
    showLinks.length
      ? showLinks
      : [
          {
            label: 'Free Community Shows',
            href: '/arts-shows/free-shows',
            image: content.mission.heroImage,
            copy: 'Browse free community and performing arts show opportunities.'
          }
        ]
  ];
  return `
    <div class="mission-subnav" data-mission-subnav>
      ${groups
        .map(
          (links, index) => `
            <div class="mission-subnav-panel" data-mission-subnav-panel="${index}" ${index === 0 ? '' : 'hidden'}>
              <div class="link-grid mission-link-grid">
                ${links.map(previewLink).join('')}
              </div>
            </div>
          `
        )
        .join('')}
      <aside class="mission-preview-card" data-mission-preview-card hidden aria-live="polite">
        <img data-mission-preview-image src="" alt="" loading="lazy" decoding="async">
        <div>
          <p class="eyebrow">Explore</p>
          <h3 data-mission-preview-title></h3>
          <p data-mission-preview-copy></p>
        </div>
      </aside>
    </div>
  `;
};

const featureBlock = (tone = 'section-wash-blue') => `
  <section class="section feature-band ${attr(tone)}">
    <div class="container feature-grid">
      <div class="glow-media">${image({ src: content.blocks.feature.image, alt: 'Fans entering The Pavilion plaza.' })}</div>
      <div>
        ${sectionHeading('Fan essentials', content.blocks.feature.title, content.blocks.feature.subtitle, cta(content.blocks.feature.cta, 'primary'))}
      </div>
    </div>
  </section>
`;

const videoBlock = (video = content.blocks.video, tone = 'section-wash-deep') => `
  <section class="section ${attr(tone)}">
    <div class="container video-block">
      <div class="video-poster">
        <img src="${attr(video.poster || video.image)}" alt="${attr(video.title)}" loading="lazy" decoding="async">
        <a class="play-button" href="${attr(video.href || '/mission')}" aria-label="Play ${attr(video.title)}">▶</a>
      </div>
      ${sectionHeading('Video', video.title, video.subtitle || 'A reusable video feature block with CMS-managed poster, caption, and embed URL.', cta(video.cta || { label: 'Explore', href: '/mission' }, 'secondary'))}
    </div>
  </section>
`;

const statsBlock = (stats, tone = 'section-wash-blue') => `
  <section class="section stats-section ${attr(tone)}" aria-label="Data highlights">
    <div class="container stat-strip">
      ${stats.map((stat) => `<div><strong>${esc(stat.value)}</strong><span>${esc(stat.label)}</span></div>`).join('')}
    </div>
  </section>
`;

const seasonSeatsBlock = (tone = 'section-wash-lift') => `
  <section class="section season-block ${attr(tone)}">
    <div class="container landing-grid">
      <div class="glow-media">${image({ src: content.seasonSeats.image, alt: 'Pavilion audience enjoying a concert.' })}</div>
      <div>
        ${sectionHeading('Season Seats', content.seasonSeats.title, content.seasonSeats.subtitle)}
        <div class="cta-row season-cta-row">${cta(content.seasonSeats.primaryCTA)}</div>
        ${tabs(content.seasonSeats.tabs, 'season-seats')}
      </div>
    </div>
  </section>
`;

const storyCards = (stories = content.stories.slice(0, 3)) => `
  <div class="story-grid">
    ${stories
      .map(
        (story) => `
          <article class="story-card">
            <img src="${attr(story.thumbnail)}" alt="${attr(story.title)}" loading="lazy" decoding="async">
            <div>
              <p class="eyebrow">${esc(story.topics.join(' / '))}</p>
              <h3><a href="/story-hub/${attr(story.slug)}/">${esc(story.title)}</a></h3>
              <p>${esc(story.dek)}</p>
              ${cta({ label: story.ctaLabel, href: `/story-hub/${story.slug}/` }, 'secondary')}
            </div>
          </article>
        `
      )
      .join('')}
  </div>
`;

const storyBlock = (tone = 'section-wash-deep') => `
  <section class="section ${attr(tone)}">
    <div class="container">
      ${sectionHeading('Story Hub', 'Arts access has stories behind it', 'Stories can be featured by slot, topic, publish date, or page relationship.', cta({ label: 'Visit Story Hub', href: '/story-hub' }, 'primary'))}
      ${storyCards()}
    </div>
  </section>
`;

const shell = ({ title, description, path: routePath, theme = 'dark', body, extraHead = '' }) => `<!doctype html>
<html lang="en" data-theme="${attr(theme)}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)} | ${esc(content.settings.siteName)}</title>
  <meta name="description" content="${attr(description || 'The redesigned Cynthia Woods Mitchell Pavilion website prototype.')}">
  <link rel="stylesheet" href="/styles/site.css">
  ${extraHead}
</head>
<body data-route="${attr(routePath)}">
  <a class="skip-link" href="#main">Skip to content</a>
  ${alertBanner()}
  ${header(routePath, theme)}
  <main id="main">
    ${body}
  </main>
  ${footer(theme)}
  ${mobileDock(routePath)}
  ${popoverMarkup()}
  <script type="module" src="/scripts/site.js"></script>
</body>
</html>`;

const alertBanner = () => `
  <aside class="alert-banner" data-alert role="status">
    <div class="container alert-inner">
      <strong>${esc(content.alert.title)}</strong>
      <span>${esc(content.alert.message)}</span>
      ${content.alert.cta ? `<a href="${attr(content.alert.cta.href)}">${esc(content.alert.cta.label)}</a>` : ''}
      ${content.alert.dismissible ? '<button type="button" data-alert-close aria-label="Dismiss alert">×</button>' : ''}
    </div>
  </aside>
`;

const header = (routePath, theme) => `
  <header class="site-header ${theme === 'light' ? 'is-light' : ''}">
    <div class="header-inner">
      <a class="brand" href="/" aria-label="${attr(content.settings.siteName)} home">
        <img src="${attr(theme === 'light' ? content.settings.logoBlue : content.settings.logoWhite)}" alt="${attr(content.settings.siteName)}">
      </a>
      <nav class="desktop-nav" aria-label="Primary">
        ${content.navigation.desktopPrimary
          .map((item) => `<a class="${routePath.startsWith(item.href) ? 'is-active' : ''}" href="${attr(item.href)}"><span>${esc(item.icon)}</span>${esc(item.label)}</a>`)
          .join('')}
      </nav>
      <div class="utility-nav">
        ${content.navigation.utility.map((item) => `<a href="${attr(item.href)}" data-popover-open="${attr(item.popoverId)}">${esc(item.label)}</a>`).join('')}
        <button type="button" class="menu-button" data-menu-open aria-label="Open menu">☰</button>
      </div>
    </div>
    <div class="mobile-menu" data-mobile-menu hidden>
      <div class="mobile-menu-panel" role="dialog" aria-modal="true" aria-label="Site menu">
        <button type="button" data-menu-close aria-label="Close menu">×</button>
        <img src="${attr(content.settings.logoWhite)}" alt="" aria-hidden="true">
        <nav aria-label="Mobile menu">
          ${[...content.navigation.desktopPrimary, ...content.navigation.footer.slice(0, 6)]
            .map((item) => `<a href="${attr(item.href)}">${esc(item.label)}</a>`)
            .join('')}
        </nav>
      </div>
    </div>
  </header>
`;

const footer = (theme) => `
  <footer class="site-footer ${theme === 'light' ? 'is-light' : ''}">
    <div class="footer-mountains" aria-hidden="true"></div>
    <div class="container footer-grid">
      <div>
        <img src="${attr(theme === 'light' ? content.settings.logoBlue : content.settings.logoWhite)}" alt="${attr(content.settings.siteName)}">
        <p>Real HTML, CMS-shaped content, reusable blocks, configurable CTAs, and local fixture data ready for a future CMS adapter.</p>
      </div>
      <nav aria-label="Footer">
        ${content.navigation.footer.map((item) => `<a href="${attr(item.href)}">${esc(item.label)}</a>`).join('')}
      </nav>
      <div class="footer-actions">
        ${cta({ label: 'Contact', type: 'popover', popoverId: 'contact' }, 'secondary')}
        ${cta({ label: 'Get Emails', type: 'popover', popoverId: 'get-emails' }, 'primary')}
      </div>
    </div>
  </footer>
`;

const mobileDock = (routePath) => `
  <nav class="mobile-dock" aria-label="Mobile dock">
    ${content.navigation.mobileDock
      .map((item) => `<a class="${routePath.startsWith(item.href) ? 'is-active' : ''}" href="${attr(item.href)}"><span aria-hidden="true">${esc(item.icon)}</span>${esc(item.label)}</a>`)
      .join('')}
  </nav>
`;

const popoverMarkup = () => `
  <div class="popover-layer" data-popover-layer hidden>
    ${Object.entries(content.forms)
      .filter(([id]) => id === 'contact' || id === 'get-emails')
      .map(
        ([id, form]) => `
          <section class="popover" data-popover="${attr(id)}" role="dialog" aria-modal="true" aria-labelledby="${attr(id)}-title" hidden>
            <button type="button" class="popover-close" data-popover-close aria-label="Close">×</button>
            <p class="eyebrow">${esc(form.type)} form placeholder</p>
            <h2 id="${attr(id)}-title">${esc(form.title)}</h2>
            <p>${esc(form.subtitle)}</p>
            <form class="native-form" data-placeholder-form>
              <label>Email <input type="email" name="email" required placeholder="you@example.com"></label>
              <label>Message <textarea name="message" rows="4" placeholder="How can we help?"></textarea></label>
              <button class="btn btn-primary" type="submit">Submit placeholder <span aria-hidden="true">→</span></button>
            </form>
            <p class="fine-print">${esc(form.privacyCopy || 'Configure HubSpot IDs in the CMS or .env before launch.')}</p>
            <a href="${attr(form.fallbackUrl || 'mailto:info@woodlandscenter.org')}">Fallback contact link</a>
          </section>
        `
      )
      .join('')}
  </div>
`;

const homePage = (routePath = '/') => {
  return shell({
    title: routePath === '/' ? 'Home / Events' : 'Events',
    description: 'Upcoming events at The Cynthia Woods Mitchell Pavilion.',
    path: routePath,
    body: `
      <section class="home-hero home-events-hero" style="--hero-image:url('${attr(content.settings.homeBackgroundImage)}')">
        <div class="container home-hero-layout">
          <div class="hero-copy">
            <p class="eyebrow">Home / Events</p>
            <h1>Shows at The Pavilion</h1>
            <p>Browse the rail of upcoming concerts, performing arts nights, and community shows.</p>
            <div class="cta-row">
              ${cta({ label: 'All Events', href: '/events' }, 'primary')}
              ${cta({ label: 'Plan Your Visit', href: '/plan-your-visit' }, 'secondary')}
            </div>
          </div>
          <div class="home-show-rail" aria-label="Upcoming shows">
            ${content.events
              .slice(0, 7)
              .map(
                (event, index) => `
                  <article class="rail-show-card">
                    <a href="/events/${attr(event.slug)}/">
                      <img src="${attr(event.cardImage || event.headerImage)}" alt="${attr(event.title)}" loading="${index < 2 ? 'eager' : 'lazy'}" decoding="async">
                      <span>
                        <small>${esc(fmtDate(event.eventDate))}</small>
                        <strong>${esc(event.title)}</strong>
                      </span>
                    </a>
                  </article>
                `
              )
              .join('')}
          </div>
        </div>
      </section>
      ${featureBlock('section-wash-blue')}
      ${videoBlock(content.blocks.video, 'section-wash-deep')}
      ${seasonSeatsBlock('section-wash-lift')}
      ${storyBlock('section-wash-blue')}
    `
  });
};

const eventDetailPage = (event) =>
  shell({
    title: event.title,
    description: event.eventDescription,
    path: `/events/${event.slug}`,
    body: `
      <article>
        <section class="detail-hero" style="--hero-image:url('${attr(event.headerImage)}')">
          <div class="container event-hero-grid">
            <div class="detail-copy">
              <p class="eyebrow">${esc(fmtDate(event.eventDate))} · ${esc(event.eventStartTime)}</p>
              <h1>${esc(event.title)}</h1>
              <p>${esc(event.subheader || '')}</p>
              <div class="cta-row">${cta({ label: event.ctaLabel, href: event.ticketLink, openInNewTab: true })}</div>
            </div>
            <nav class="event-action-icons" aria-label="Event add-ons">
              <a href="${attr(event.lawnChairPurchaseLink || event.lawnChairLink)}" target="_blank" rel="noopener noreferrer">
                <span aria-hidden="true">▤</span>
                <strong><span class="action-label-full">Rent Lawn Chairs</span><span class="action-label-short">Chairs</span></strong>
                <small>Reserve seating</small>
              </a>
              <a href="${attr(event.parkingPurchaseLink || event.parkingLink)}" target="_blank" rel="noopener noreferrer">
                <span aria-hidden="true">⌖</span>
                <strong><span class="action-label-full">Buy Parking</span><span class="action-label-short">Parking</span></strong>
                <small>Buy or view lots</small>
              </a>
              <a href="${attr(event.hotelLink || '#')}" target="_blank" rel="noopener noreferrer">
                <span aria-hidden="true">⌂</span>
                <strong><span class="action-label-full">Book Hotel</span><span class="action-label-short">Hotel</span></strong>
                <small>Book nearby</small>
              </a>
            </nav>
          </div>
        </section>
        <section class="section">
          <div class="container detail-grid">
            <div>
              <div class="rich-text">
                <h2>Event Description</h2>
                <p>${esc(event.eventDescription)}</p>
                ${event.policyOverrides ? `<p><strong>Event note:</strong> ${esc(event.policyOverrides)}</p>` : ''}
              </div>
            </div>
            <aside class="event-side-card">
              <div class="text-code-card">
                <p class="eyebrow">Text Updates</p>
                <h2>${esc(event.textUpdatesCode || 'Text CWMP for updates')}</h2>
                <p>${esc(event.textUpdatesBody || 'Receive important event updates by text.')}</p>
              </div>
              <div class="schedule-card">
                <p class="eyebrow">Show Schedule</p>
                <dl class="schedule-list">
                  ${event.showSchedule.map((row) => `<div><dt>${esc(row.time)}</dt><dd>${esc(row.label)}</dd></div>`).join('')}
                </dl>
              </div>
            </aside>
          </div>
        </section>
        <section class="section know-before-band">
          <div class="container">
            ${sectionHeading('Know Before You Go', 'Key arrival and entry information', 'The most important Plan Your Visit details for this event.')}
            <div class="know-before-grid">
              <article>
                <span aria-hidden="true">▣</span>
                <h3>Bag Policy and Rules</h3>
                <p>Clear bags 12" x 12" or smaller are permitted. Small clutches are allowed, and all belongings are subject to search. Outside chairs, large umbrellas, weapons, coolers, and outside liquids are not allowed.</p>
                <a href="${attr(event.bagPolicyLink)}">Review bag policy</a>
              </article>
              <article>
                <span aria-hidden="true">⌖</span>
                <h3>Parking Directions</h3>
                <p>Check your event parking before you arrive. Lots, shuttle service, and traffic flow can vary by show, so give yourself extra time around gate opening.</p>
                <a href="${attr(event.parkingLink)}">See parking details</a>
              </article>
              <article>
                <span aria-hidden="true">🎟</span>
                <h3>Ticket Information</h3>
                <p>Have mobile tickets ready before you reach the gate. Event timing, entry policies, and artist-specific notes may change, so review this page again before leaving.</p>
                <a href="${attr(event.ticketLink)}" target="_blank" rel="noopener noreferrer">Open tickets</a>
              </article>
            </div>
          </div>
        </section>
        ${eventListBlock('More Events')}
      </article>
    `
  });

const landingHero = (page, eyebrow = page.templatePreset || 'Landing Page') => `
  <section class="landing-hero" style="--hero-image:url('${attr(page.heroImage || content.settings.fallbackImage)}')">
    <div class="container landing-hero-copy">
      <p class="eyebrow">${esc(eyebrow)}</p>
      <h1>${esc(page.title)}</h1>
      <p>${esc(page.subtitle || '')}</p>
      <div class="cta-row">${cta(page.primaryCTA)}${page.secondaryCTA ? cta(page.secondaryCTA, 'secondary') : ''}</div>
    </div>
  </section>
`;

const landingPage = (page, routePath = `/${page.slug}`) =>
  shell({
    title: page.title,
    description: page.subtitle,
    path: routePath,
    body: `
      ${landingHero(page)}
      <section class="section">
        <div class="container landing-grid">
          <div>
            ${sectionHeading('CMS block stack', page.title, page.subtitle || 'This page uses the reusable Landing Page template.')}
            ${tabs(page.tabs || [{ label: 'Overview', slug: 'overview', body: `${page.title} content is ready for CMS editing.` }], `tabs-${page.slug.replaceAll('/', '-')}`)}
          </div>
          <div class="html-card">
            <h2>Editable Content Areas</h2>
            <p>This template supports hero, video, stats, tabs, media/text, HTML, story, event listing, CTA band, and footer link blocks.</p>
            <ul>
              <li>Primary and secondary CTAs are CMS configurable.</li>
              <li>External links are placeholders until integrations are connected.</li>
              <li>Seasonal visibility can hide or dim program tabs.</li>
            </ul>
          </div>
        </div>
      </section>
      ${page.templatePreset === 'freeShows' ? eventListBlock('Free Community Shows', 'freeCommunity') : ''}
      ${storyBlock()}
    `
  });

const seasonSeatsPage = () =>
  shell({
    title: content.seasonSeats.title,
    description: content.seasonSeats.subtitle,
    path: '/season-seats',
    body: `
      ${landingHero({ ...content.seasonSeats, heroImage: content.seasonSeats.image, templatePreset: 'Season Seats' })}
      ${seasonSeatsBlock()}
      ${eventListBlock('Concert Nights for Clients, Friends, and Family')}
    `
  });

const missionPage = () =>
  shell({
    title: content.mission.title,
    description: content.mission.subtitle,
    path: '/mission',
    body: `
      <section class="mission-hero" style="--hero-image:url('${attr(content.mission.heroImage)}')">
        <div class="container mission-copy">
          <p class="eyebrow">Arts Access Mission</p>
          <h1>${esc(content.mission.title)}</h1>
          <p>${esc(content.mission.subtitle)}</p>
          ${cta(content.mission.donateCTA)}
        </div>
      </section>
      ${statsBlock(content.mission.impactStats, 'section-wash-blue')}
      ${videoBlock(content.mission.video, 'section-wash-deep')}
      <section class="section section-wash-lift">
        <div class="container">
          ${sectionHeading('Mission pathways', 'Support, funding, outreach, shows, and stories', 'The mission page links the full outline hierarchy into reusable CMS sections.')}
          ${tabs(content.mission.tabs, 'mission-tabs')}
          ${missionSubnav()}
        </div>
      </section>
      ${storyBlock('section-wash-blue')}
    `
  });

const grantPage = (program) =>
  landingPage({
    title: program.title,
    subtitle: program.subtitle,
    heroImage: program.image,
    templatePreset: 'Funding the Arts',
    primaryCTA: program.applicationCTA,
    tabs: program.tabs,
    slug: `mission/funding/${program.slug}`
  });

const outreachPage = (program) =>
  landingPage({
    title: program.title,
    subtitle: program.subtitle,
    heroImage: program.image,
    templatePreset: 'Arts Outreach',
    primaryCTA: program.primaryCTA,
    tabs: program.tabs,
    slug: `mission/outreach/${program.slug}`
  });

const planVisitPage = () =>
  shell({
    title: 'Plan Your Visit',
    description: 'Search Pavilion policies and browse topic-based answers.',
    path: '/plan-your-visit',
    body: `
      <section class="visit-hero" style="--hero-image:url('${attr('/assets/content-images/plan-your-visit/Fans-7.jpg')}')">
        <div class="container visit-copy">
          <p class="eyebrow">Plan Your Visit</p>
          <h1>Plan your visit</h1>
          <p>How can we help get you rocking today?</p>
          <form class="ai-search" data-ai-search>
            <label class="sr-only" for="visit-search">Ask a question about visiting The Pavilion</label>
            <input id="visit-search" name="query" type="search" placeholder="Bag policy, parking, umbrellas, gate times..." autocomplete="off">
            <button type="submit" aria-label="Search">→</button>
          </form>
          <div class="ai-result" data-ai-result hidden></div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          ${sectionHeading('Or find answers by topic', 'Venue policies and visit essentials', 'Tabs update the content below and all sections are indexed by the local search MVP.')}
          <div class="topic-tabs" data-topic-tabs>
            ${content.planVisitTopics.map((topic, index) => `<button type="button" class="${index === 0 ? 'is-active' : ''}" data-topic-target="${attr(topic.slug)}">${esc(topic.icon)} ${esc(topic.title)}</button>`).join('')}
          </div>
          <div class="answer-grid">
            ${content.planVisitTopics
              .map(
                (topic, index) => `
                  <article class="answer-card" data-topic-card="${attr(topic.slug)}" ${index > 2 ? 'hidden' : ''}>
                    <h3>${esc(topic.title)}</h3>
                    <p>${esc(topic.summary)}</p>
                    <a href="#${attr(topic.slug)}">Review ${esc(topic.title)}</a>
                  </article>
                `
              )
              .join('')}
          </div>
        </div>
      </section>
      <section class="section policy-sections">
        <div class="container">
          ${content.planVisitTopics
            .map(
              (topic) => `
                <section class="policy-topic" id="${attr(topic.slug)}">
                  <h2>${esc(topic.title)}</h2>
                  <p>${esc(topic.summary)}</p>
                  ${topic.sections
                    .map(
                      (section) => `
                        <article id="${attr(section.slug)}" class="policy-section">
                          <h3>${esc(section.heading)}</h3>
                          <p>${esc(section.body)}</p>
                          ${section.items?.length ? `<ul>${section.items.map((item) => `<li>${esc(item)}</li>`).join('')}</ul>` : ''}
                          ${section.cta ? cta(section.cta, 'secondary') : ''}
                        </article>
                      `
                    )
                    .join('')}
                </section>
              `
            )
            .join('')}
        </div>
      </section>
      ${emailSignup()}
    `,
    extraHead: `<script type="application/json" id="knowledge-data">${JSON.stringify(knowledgeChunks()).replaceAll('<', '\\u003c')}</script>`
  });

const knowledgeChunks = () => {
  const chunks = [];
  for (const topic of content.planVisitTopics) {
    for (const section of topic.sections) {
      chunks.push({
        id: `plan-${topic.slug}-${section.slug}`,
        title: `${topic.title}: ${section.heading}`,
        body: [topic.summary, section.body, ...(section.items || [])].join(' '),
        sourceType: 'planVisit',
        url: `/plan-your-visit/#${section.slug}`,
        keywords: topic.aiKeywords || [],
        priority: 10
      });
    }
  }
  for (const event of content.events) {
    chunks.push({
      id: `event-${event.slug}`,
      title: event.title,
      body: `${event.title} ${event.subheader || ''} plays ${fmtDate(event.eventDate)}. Gates open ${event.gateOpenTime}; show begins ${event.eventStartTime}. ${event.policyOverrides || ''}`,
      sourceType: 'event',
      url: `/events/${event.slug}/`,
      keywords: [event.title, event.subheader || '', event.eventType],
      priority: event.isFeatured ? 9 : 6,
      eventDate: event.eventDate
    });
  }
  chunks.push({
    id: 'active-alert',
    title: content.alert.title,
    body: content.alert.message,
    sourceType: 'alert',
    url: '/events/',
    keywords: ['alert', 'policy', 'weather', 'update'],
    priority: 12
  });
  return chunks;
};

const emailSignup = () => `
  <section class="section email-band">
    <div class="container email-grid">
      <div>
        <p class="eyebrow">Emails</p>
        <h2>${esc(content.blocks.email.title)}</h2>
        <p>${esc(content.blocks.email.subtitle)}</p>
      </div>
      <form class="email-form" data-placeholder-form>
        <label class="sr-only" for="email-signup">Email address</label>
        <input id="email-signup" type="email" required placeholder="you@example.com">
        <button type="submit" aria-label="Submit email signup">→</button>
      </form>
    </div>
  </section>
`;

const storyHubPage = (topic = null) => {
  const stories = topic ? content.stories.filter((story) => story.topics.map(slugifyTopic).includes(topic)) : content.stories;
  const hero = content.stories.find((story) => story.featuredSlot === 'hero') || content.stories[0];
  const large = content.stories.find((story) => story.featuredSlot === 'largeFeature') || content.stories[1];
  return shell({
    title: topic ? `Stories: ${topic}` : 'Story Hub',
    description: 'Stories from The Pavilion mission, fans, shows, scholarships, grants, and backstage.',
    path: topic ? `/story-hub/topic/${topic}` : '/story-hub',
    theme: 'light',
    body: `
      <section class="story-hub-hero">
        <div class="container">
          <a class="back-link" href="/">← Back to Main Site</a>
          <h1>Story Hub</h1>
          <article class="story-feature">
            <img src="${attr(hero.heroImage)}" alt="${attr(hero.title)}" loading="eager" decoding="async">
            <div>
              <p class="eyebrow">${esc(hero.topics.join(' / '))}</p>
              <h2>${esc(hero.title)}</h2>
              <p>${esc(hero.dek)}</p>
              ${cta({ label: hero.ctaLabel, href: `/story-hub/${hero.slug}/` }, 'primary')}
            </div>
          </article>
        </div>
      </section>
      <section class="section">
        <div class="container">
          ${sectionHeading('Recent Stories', 'Fresh from The Pavilion', 'Filter by topic or browse the latest stories.')}
          <div class="topic-filter-row">
            <a class="${topic ? '' : 'is-active'}" href="/story-hub/">All</a>
            ${content.storyTopics.map((item) => `<a class="${topic === slugifyTopic(item) ? 'is-active' : ''}" href="/story-hub/topic/${slugifyTopic(item)}/">${esc(item)}</a>`).join('')}
          </div>
          ${storyCards(stories)}
        </div>
      </section>
      <section class="section large-story-band">
        <div class="container landing-grid">
          <div>${sectionHeading('Featured', large.title, large.dek, cta({ label: large.ctaLabel, href: `/story-hub/${large.slug}/` }, 'secondary'))}</div>
          <div class="glow-media">${image({ src: large.heroImage, alt: large.title })}</div>
        </div>
      </section>
    `
  });
};

const storyDetailPage = (story) =>
  shell({
    title: story.title,
    description: story.dek,
    path: `/story-hub/${story.slug}`,
    theme: 'light',
    body: `
      <article class="article-page">
        <header class="article-hero">
          <div class="container">
            <a class="back-link" href="/story-hub/">← Story Hub</a>
            <p class="eyebrow">${esc(story.topics.join(' / '))}</p>
            <h1>${esc(story.title)}</h1>
            <p>${esc(story.dek)}</p>
          </div>
          <img src="${attr(story.heroImage)}" alt="${attr(story.title)}" loading="eager" decoding="async">
        </header>
        <section class="section">
          <div class="container article-body">
            <p>${esc(story.body)}</p>
            <p>Publication date: ${esc(fmtDate(story.publishDate))}. Story metadata, body blocks, topic tags, and media are CMS-editable.</p>
          </div>
        </section>
      </article>
    `
  });

const externalPlaceholderPage = (routePath) => {
  const page = content.externalRoutes[routePath];
  return shell({
    title: page.title,
    description: page.subtitle,
    path: routePath,
    body: `
      <section class="landing-hero external-placeholder">
        <div class="container landing-hero-copy">
          <p class="eyebrow">External Link Placeholder</p>
          <h1>${esc(page.title)}</h1>
          <p>${esc(page.subtitle)}</p>
          ${cta(page.cta)}
        </div>
      </section>
    `
  });
};

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });
copyRecursive('cwmp_codex_build_package/assets', path.join(dist, 'assets'));
copyRecursive('src/styles', path.join(dist, 'styles'));
copyRecursive('src/scripts', path.join(dist, 'scripts'));

writeRoute('/', homePage('/'));
writeRoute('/events', homePage('/events'));

for (const event of content.events) {
  writeRoute(`/events/${event.slug}`, eventDetailPage(event));
}

writeRoute('/season-seats', seasonSeatsPage());
writeRoute('/plan-your-visit', planVisitPage());
writeRoute('/mission', missionPage());

for (const page of content.landingPages) {
  writeRoute(`/${page.slug}`, landingPage(page, `/${page.slug}`));
}

for (const program of content.grantPrograms) {
  writeRoute(`/mission/funding/${program.slug}`, grantPage(program));
}

for (const program of content.outreachPrograms) {
  writeRoute(`/mission/outreach/${program.slug}`, outreachPage(program));
}

writeRoute('/story-hub', storyHubPage());
for (const topic of content.storyTopics) {
  writeRoute(`/story-hub/topic/${slugifyTopic(topic)}`, storyHubPage(slugifyTopic(topic)));
}
for (const story of content.stories) {
  writeRoute(`/story-hub/${story.slug}`, storyDetailPage(story));
}

for (const routePath of Object.keys(content.externalRoutes)) {
  writeRoute(routePath, externalPlaceholderPage(routePath));
}

const manifestPaths = new Set(routeManifest.routes.map((route) => route.path));
const generated = [];
const walk = (directory) => {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const full = path.join(directory, entry.name);
    if (entry.isDirectory()) walk(full);
    if (entry.isFile() && entry.name === 'index.html') generated.push(full);
  }
};
walk(dist);

console.log(`Generated ${generated.length} HTML files from ${manifestPaths.size} manifest route patterns plus dynamic event/story/topic pages.`);
