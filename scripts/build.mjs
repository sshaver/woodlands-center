import fs from 'node:fs';
import path from 'node:path';
import { loadContent } from '../src/content/client.mjs';
import { loadEnvFile } from './load-env.mjs';

const dist = path.resolve('dist');
const routeManifest = JSON.parse(fs.readFileSync('cwmp_codex_build_package/data/route_manifest.json', 'utf8'));
loadEnvFile();

const placeholderEnvMap = {
  CONFIGURE_ACCEPTD_URL_IN_CMS: 'ACCEPTD_APPLICATION_URL',
  CONFIGURE_ACCOUNT_MANAGER_URL_IN_CMS: 'ACCOUNT_MANAGER_URL',
  CONFIGURE_CHAMBERFEST_URL_IN_CMS: 'CHAMBERFEST_URL',
  CONFIGURE_CONTACT_FORM_ID: 'HUBSPOT_CONTACT_FORM_ID',
  CONFIGURE_DONORPERFECT_DONATION_URL_IN_CMS: 'DONORPERFECT_DONATION_URL',
  CONFIGURE_DONORPERFECT_URL_IN_CMS: 'DONORPERFECT_DONATION_URL',
  CONFIGURE_EMAIL_FORM_ID: 'HUBSPOT_EMAIL_FORM_ID',
  CONFIGURE_FOUNDANT_URL_IN_CMS: 'FOUNDANT_BASE_URL',
  CONFIGURE_FREE_SHOW_REGISTRATION_IN_CMS: 'TICKETMASTER_BASE_URL',
  CONFIGURE_GOOGLE_SHEETS_URL_IN_CMS: 'GOOGLE_SHEETS_BASE_URL',
  CONFIGURE_GRANTS_FORM_ID: 'HUBSPOT_GRANTS_FORM_ID',
  CONFIGURE_HOTEL_PARTNER_URL_IN_CMS: 'HOTEL_PARTNER_URL',
  CONFIGURE_HUBSPOT_PORTAL_ID: 'HUBSPOT_PORTAL_ID',
  CONFIGURE_LAWN_CHAIR_RENTAL_URL_IN_CMS: 'LAWN_CHAIR_RENTAL_URL',
  CONFIGURE_MISSION_SEEKERS_FORM_ID: 'HUBSPOT_MISSION_SEEKERS_FORM_ID',
  CONFIGURE_MISSION_VIDEO_URL_IN_CMS: 'MISSION_VIDEO_URL',
  CONFIGURE_PARKING_PURCHASE_URL_IN_CMS: 'PARKING_PURCHASE_URL',
  CONFIGURE_PAYCOM_URL_IN_CMS: 'PAYCOM_URL',
  CONFIGURE_PROGRAM_REMINDER_FORM_ID: 'HUBSPOT_PROGRAM_REMINDER_FORM_ID',
  CONFIGURE_PROGRAM_VIDEO_URL_IN_CMS: 'PROGRAM_VIDEO_URL',
  CONFIGURE_SEASON_SEATS_FORM_ID: 'HUBSPOT_SEASON_SEATS_FORM_ID',
  CONFIGURE_STAFF_LOGIN_URL_IN_CMS: 'STAFF_LOGIN_URL',
  CONFIGURE_TARVIA_STORY_VIDEO_URL_IN_CMS: 'TARVIA_STORY_VIDEO_URL',
  CONFIGURE_TICKET_LINK_IN_CMS: 'TICKETMASTER_BASE_URL',
  CONFIGURE_TICKETMASTER_URL_IN_CMS: 'TICKETMASTER_BASE_URL'
};

const configuredValue = (value, envKey = '') => {
  if (!value) return '';
  const stringValue = String(value);
  if (!stringValue.startsWith('CONFIGURE_')) return value;
  return process.env[placeholderEnvMap[stringValue] || envKey] || '';
};

const resolvePlaceholdersInContent = (value) => {
  if (typeof value === 'string') return configuredValue(value);
  if (Array.isArray(value)) {
    value.forEach((item, index) => {
      value[index] = resolvePlaceholdersInContent(item);
    });
    return value;
  }
  if (value && typeof value === 'object') {
    for (const [key, item] of Object.entries(value)) {
      if (typeof item !== 'function') value[key] = resolvePlaceholdersInContent(item);
    }
  }
  return value;
};

const content = resolvePlaceholdersInContent(await loadContent());

const esc = (value = '') =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

const attr = esc;

const svgIconCache = new Map();

const fallbackIconPath = (name) => {
  const paths = {
    'arrow-right': '<path d="M5 12h13m-5-5 5 5-5 5" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>',
    'bag-shopping': '<path d="M7 8h10l1 12H6L7 8Zm3 0a4 4 0 0 1 8 0" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>',
    chair: '<path d="M7 4v8h9a3 3 0 0 1 3 3v5M7 12v8m0-8H5m2 8h10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    crown: '<path d="m4 8 4 4 4-7 4 7 4-4v11H4V8Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>',
    'hand-holding-heart': '<path d="M3 15h5l3 3h4l6-5m-9-2c-2-2-5-1-5 2 0 2 3 4 5 6 2-2 5-4 5-6 0-3-3-4-5-2Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    hotel: '<path d="M4 20V5h9v15M4 11h16v9M8 8h1m3 0h1m-5 4h1m3 0h1m4 2h3" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    'location-dot': '<path d="M12 21s7-6 7-12a7 7 0 1 0-14 0c0 6 7 12 7 12Zm0-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>',
    play: '<path d="M8 5v14l11-7L8 5Z" fill="currentColor"/>',
    'square-parking': '<path d="M5 4h14v16H5V4Zm5 12V8h3a2.5 2.5 0 0 1 0 5h-3" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    ticket: '<path d="M4 8h16v4a2 2 0 0 0 0 4v4H4v-4a2 2 0 0 0 0-4V8Zm6 3v6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    violin: '<path d="M14 4c3 2 3 6 0 9l-5 5c-2 2-5-1-3-3l5-5c3-3 7-3 9 0M5 19l-2 2m12-17 4-2m-2 4 4-2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
    xmark: '<path d="M6 6l12 12M18 6 6 18" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>'
  };
  return paths[name] || '<circle cx="12" cy="12" r="7" fill="none" stroke="currentColor" stroke-width="2"/>';
};

const fallbackSvgIcon = (name) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">${fallbackIconPath(name)}</svg>`;

const svgIcon = (name, options = {}) => {
  const { className = 'site-icon', label = '', style = 'regular' } = options;
  if (!name) return '';
  const iconKey = `${style}/${name}`;
  if (!svgIconCache.has(iconKey)) {
    const iconPaths = [
      path.resolve('public/assets/icons/svgs', style, `${name}.svg`),
      path.resolve('public/assets/icons/svgs/regular', `${name}.svg`),
      path.resolve('public/assets/icons/svgs/solid', `${name}.svg`),
      path.resolve('cwmp_codex_build_package/assets/icons/svgs', style, `${name}.svg`),
      path.resolve('cwmp_codex_build_package/assets/icons/svgs/solid', `${name}.svg`)
    ];
    const iconPath = iconPaths.find((candidate) => fs.existsSync(candidate));
    svgIconCache.set(
      iconKey,
      iconPath
        ? fs.readFileSync(iconPath, 'utf8').replace(/<!--[\s\S]*?-->/g, '').trim()
        : fallbackSvgIcon(name)
    );
  }
  const labelAttrs = label ? ` role="img" aria-label="${attr(label)}"` : ' aria-hidden="true"';
  return svgIconCache
    .get(iconKey)
    .replace('<svg ', `<svg class="${attr(className)}" focusable="false"${labelAttrs} `);
};

const fmtDate = (date) =>
  new Intl.DateTimeFormat('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC'
  }).format(new Date(date));

const byEventDate = (a, b) => new Date(a.eventDate) - new Date(b.eventDate);

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

const gtmContainerId = configuredValue(process.env.GTM_CONTAINER_ID);
const ga4MeasurementId = configuredValue(process.env.GA4_MEASUREMENT_ID);
const hubspotPortalId = configuredValue(process.env.HUBSPOT_PORTAL_ID);
const hubspotTrackingMode = configuredValue(process.env.HUBSPOT_TRACKING_MODE) || 'gtm';

const analyticsAttrs = (eventName, params = {}) => {
  if (!eventName) return '';
  return Object.entries({ event: eventName, ...params })
    .filter(([, value]) => value !== undefined && value !== null && value !== '')
    .map(([key, value]) => ` data-analytics-${attr(key.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`))}="${attr(value)}"`)
    .join('');
};

const analyticsEventForCta = (item = {}) => {
  const label = String(item.label || '').toLowerCase();
  const href = String(item.href || '').toLowerCase();
  if (item.analyticsEvent) return item.analyticsEvent;
  if (label.includes('ticket') || label.includes('rsvp')) return 'get_tickets_click';
  if (label.includes('parking') || href.includes('parking')) return 'parking_click';
  if (label.includes('lawn') || label.includes('chair')) return 'lawn_chair_click';
  if (label.includes('hotel')) return 'hotel_click';
  if (label.includes('email') || label.includes('mission') || label.includes('support') || item.popoverId === 'get-emails') return 'mission_signup_click';
  return 'cta_click';
};

const cta = (item = {}, style = item.style || 'primary') => {
  if (!item.label) return '';
  const href = item.href || (item.type === 'popover' ? `#${item.popoverId}` : '#');
  const popoverAttrs = item.popoverId ? ` data-popover-open="${attr(item.popoverId)}"` : '';
  const externalAttrs = item.openInNewTab ? ' target="_blank" rel="noopener noreferrer"' : '';
  const trackingAttrs = analyticsAttrs(analyticsEventForCta(item), {
    label: item.label,
    url: href,
    context: item.analyticsContext || ''
  });
  return `<a class="btn btn-${style}" href="${attr(href)}"${popoverAttrs}${externalAttrs}${trackingAttrs}>${esc(item.label)}${svgIcon('arrow-right', { className: 'btn-icon icon-white' })}</a>`;
};

const donorPerfectDonationUrl = configuredValue(
  content.settings.integrations?.donorPerfect || 'CONFIGURE_DONORPERFECT_DONATION_URL_IN_CMS',
  'DONORPERFECT_DONATION_URL'
);

const isDonationItem = (item = {}) => {
  const label = String(item.label || '').toLowerCase();
  const href = String(item.href || '').toLowerCase();
  return label.includes('donate') || label.includes('gift') || href === '/donate';
};

const donationItem = (item = {}) => {
  if (!isDonationItem(item) || !donorPerfectDonationUrl) return item;
  return {
    ...item,
    href: donorPerfectDonationUrl,
    type: 'external',
    openInNewTab: true
  };
};

const supportDonationPage = (page) => ({
  ...page,
  primaryCTA: donationItem(page.primaryCTA),
  secondaryCTA: donationItem(page.secondaryCTA),
  conversion: page.conversion ? { ...page.conversion, cta: donationItem(page.conversion.cta) } : page.conversion,
  tabs: (page.tabs || []).map((tab) => ({ ...tab, cta: donationItem(tab.cta) }))
});

const navItem = (item = {}) => donationItem(item);

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

const templateEyebrow = (page) => {
  const labels = {
    supportArts: 'Arts Access',
    blankFlow: 'Resources',
    redirect: 'Arts Access',
    freeShows: 'Free Performing Arts',
    footerPage: 'The Pavilion'
  };
  return labels[page.templatePreset] || page.templatePreset || 'Explore';
};

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
          ${tab.image ? image(tab.image, 'tab-panel-image') : ''}
          <h3>${esc(tab.label)}</h3>
          ${tab.body || tab.summary ? `<p>${esc(tab.body || tab.summary || '')}</p>` : ''}
          ${tab.items?.length ? `<ul>${tab.items.map((item) => `<li>${esc(item)}</li>`).join('')}</ul>` : ''}
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

const statCards = (items = [], className = 'landing-stat-grid') => {
  if (!items.length) return '';
  return `
    <div class="${attr(className)}">
      ${items
        .map(
          (item) => `
            <article class="landing-stat-card">
              <strong>${esc(item.value)}</strong>
              <span>${esc(item.label)}</span>
            </article>
          `
        )
        .join('')}
    </div>
  `;
};

const pathwayCards = (items = [], className = 'pathway-card-grid') => {
  if (!items.length) return '';
  return `
    <div class="${attr(className)}">
      ${items
        .map(
          (item) => `
            <article class="pathway-card">
              ${item.image ? image(item.image, 'pathway-card-image') : ''}
              <div class="pathway-card-copy">
                <p class="eyebrow">${esc(item.summary || item.slug || 'Option')}</p>
                <h3>${esc(item.label)}</h3>
                <p>${esc(item.body || '')}</p>
                ${item.cta ? cta(item.cta, 'secondary') : ''}
              </div>
            </article>
          `
        )
        .join('')}
    </div>
  `;
};

const missionPathwayTabs = () => `
  <div class="tabs mission-pathway-tabs" data-tabs>
    <div class="tab-list" role="tablist" aria-label="Mission pathways">
      ${content.mission.tabs
        .map(
          (tab, index) =>
            `<button class="tab-pill" id="mission-pathways-tab-${index}" type="button" role="tab" aria-selected="${index === 0}" aria-controls="mission-pathways-panel-${index}" tabindex="${index === 0 ? '0' : '-1'}">${esc(tab.label)}</button>`
        )
        .join('')}
    </div>
    <div class="mission-pathway-descriptions">
      ${content.mission.tabs
        .map(
          (tab, index) =>
            `<div class="mission-pathway-description" id="mission-pathways-description-${index}" role="tabpanel" aria-labelledby="mission-pathways-tab-${index}" ${index === 0 ? '' : 'hidden'}><p>${esc(tab.body)}</p></div>`
        )
        .join('')}
    </div>
  </div>
`;

const eventCard = (event, featured = false) => `
  <article class="event-card event-type-${attr(event.eventType)} ${featured ? 'is-featured' : ''}">
    <a href="/events/${attr(event.slug)}/" class="event-card-image" aria-label="${attr(event.title)} event details"${analyticsAttrs('event_card_click', { eventName: event.title, eventSlug: event.slug, eventType: event.eventType })}>
      <img src="${attr(event.cardImage || event.headerImage)}" alt="${attr(event.title)}" loading="lazy" decoding="async">
      <span class="card-link-arrow" aria-hidden="true">${svgIcon('arrow-right', { className: 'btn-icon icon-white' })}</span>
    </a>
    <div class="event-card-body">
      <p class="event-date">${esc(fmtDate(event.eventDate))}</p>
      <h3><a href="/events/${attr(event.slug)}/">${esc(event.title)}</a></h3>
      ${event.subheader ? `<p>${esc(event.subheader)}</p>` : ''}
    </div>
  </article>
`;

const eventRows = (events) => `
  <div class="event-rows" data-event-rows hidden>
    ${events
      .map(
        (event) => `
          <article class="event-row event-type-${attr(event.eventType)}">
            <time datetime="${attr(event.eventDate)}">${esc(fmtDate(event.eventDate))}</time>
            <div>
              <h3><a href="/events/${attr(event.slug)}/">${esc(event.title)}</a></h3>
              <p>${esc(event.subheader || event.eventStartTime)}</p>
            </div>
            <a class="row-link-arrow" href="/events/${attr(event.slug)}/" aria-label="${attr(event.title)} event details">${svgIcon('arrow-right', { className: 'btn-icon icon-white' })}</a>
          </article>
        `
      )
      .join('')}
  </div>
`;

const showRail = (events = content.events, { eagerCount = 0 } = {}) => `
  <div class="home-show-rail" aria-label="Upcoming shows">
    ${events
      .slice()
      .sort(byEventDate)
      .map(
        (event, index) => `
          <article class="rail-show-card event-type-${attr(event.eventType)}">
            <a href="/events/${attr(event.slug)}/"${analyticsAttrs('event_card_click', { eventName: event.title, eventSlug: event.slug, eventType: event.eventType, context: 'show_rail' })}>
              <img src="${attr(event.cardImage || event.headerImage)}" alt="${attr(event.title)}" loading="${index < eagerCount ? 'eager' : 'lazy'}" decoding="async">
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
`;

const eventListBlock = (heading = 'Upcoming Events', filterType = null) => {
  const events = (filterType ? content.events.filter((event) => event.eventType === filterType) : content.events)
    .slice()
    .sort(byEventDate);
  return `
    <section class="section events-section" id="events">
      <div class="container">
        ${sectionHeading('Home / Events', heading, 'Browse upcoming concerts, performing arts nights and community events.')}
        ${showRail(events)}
      </div>
    </section>
  `;
};

const missionSubnav = () => {
  const supportPage = (slug) => content.getLandingPage(slug) || {};
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
  const showLinks = [
    {
      label: 'Performing Arts Membership',
      href: '/mission/performing-arts-membership',
      image: supportPage('mission/performing-arts-membership').heroImage || content.mission.heroImage,
      copy: 'Support free performing arts and enjoy a closer connection to the season.'
    },
    ...content.events
      .filter((event) => event.eventType === 'freeCommunity' || event.eventType === 'performingArts')
      .map((event) => ({
        label: event.title,
        href: `/events/${event.slug}/`,
        image: event.cardImage || event.headerImage,
        copy: `${event.subheader || 'Performing Arts show'} · ${fmtDate(event.eventDate)}`
      }))
  ];
  const previewLink = (link) => `
    <a href="${attr(link.href)}" class="mission-preview-link" data-preview-title="${attr(link.label)}" data-preview-copy="${attr(link.copy)}" data-preview-image="${attr(link.image)}">${esc(link.label)}</a>
  `;
  const groups = [
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
            <div class="mission-subnav-panel" id="mission-pathways-panel-${index}" data-mission-subnav-panel="${index}" ${index === 0 ? '' : 'hidden'}>
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

const featureBlock = (tone = 'section-wash-blue', imageSide = 'left') => `
  <section class="section feature-band ${attr(tone)}">
    <div class="container feature-grid media-block media-${attr(imageSide)}">
      <div class="glow-media">${image({ src: content.blocks.feature.image, alt: 'Fans entering The Pavilion plaza.' })}</div>
      <div>
        ${sectionHeading('Fan essentials', content.blocks.feature.title, content.blocks.feature.subtitle, cta(content.blocks.feature.cta, 'primary'))}
      </div>
    </div>
  </section>
`;

const videoBlock = (video = content.blocks.video, tone = 'section-wash-deep', imageSide = 'left') => `
  <section class="section ${attr(tone)}">
    <div class="container video-block media-block media-${attr(imageSide)}">
      <div class="video-poster">
        <img src="${attr(video.poster || video.image)}" alt="${attr(video.title)}" loading="lazy" decoding="async">
        <a class="play-button" href="${attr(video.href || '/mission')}" aria-label="Play ${attr(video.title)}">${svgIcon('play', { className: 'play-icon icon-white' })}</a>
      </div>
      ${sectionHeading('Video', video.title, video.subtitle || 'See how Pavilion programs turn live arts into lasting community moments.', cta(video.cta || { label: 'Explore', href: '/mission' }, 'secondary'))}
    </div>
  </section>
`;

const statsBlock = (stats, tone = 'section-wash-blue', heading = null, proof = null) => `
  <section class="section stats-section ${attr(tone)}" aria-label="Data highlights">
    <div class="container">
      ${heading ? sectionHeading(heading.eyebrow, heading.title, heading.subtitle) : ''}
    </div>
    <div class="container impact-proof-grid">
      <div class="stat-strip">
        ${stats.map((stat) => `<div><strong>${esc(stat.value)}</strong><span>${esc(stat.label)}</span></div>`).join('')}
      </div>
      ${
        proof
          ? `<article class="mission-proof-card">
              <img src="${attr(proof.image)}" alt="${attr(proof.title)}" loading="lazy" decoding="async">
              <div>
                <p class="eyebrow">${esc(proof.eyebrow || 'Mission Story')}</p>
                <h3>${esc(proof.title)}</h3>
                <p>${esc(proof.body)}</p>
                ${proof.cta ? cta(proof.cta, 'secondary') : ''}
              </div>
            </article>`
          : ''
      }
    </div>
  </section>
`;

const seasonSeatsBlock = (tone = 'section-wash-lift', imageSide = 'left') => `
  <section class="section season-block ${attr(tone)}">
    <div class="container landing-grid media-block media-${attr(imageSide)}">
      <div class="glow-media">${image({ src: content.seasonSeats.image, alt: 'Pavilion audience enjoying a concert.' })}</div>
      <div>
        ${sectionHeading('Season Seats', content.seasonSeats.title, content.seasonSeats.subtitle, `<div class="cta-row season-cta-row">${cta(content.seasonSeats.learnMoreCTA || { label: 'Learn More', href: '/season-seats' })}</div>`)}
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
  <section class="section story-prefooter ${attr(tone)}">
    <div class="container">
      ${sectionHeading('Story Hub', 'Arts access has stories behind it', 'Meet the students, families, artists, educators, volunteers and supporters who bring The Pavilion mission to life.', cta({ label: 'Visit Story Hub', href: '/story-hub' }, 'primary'))}
      ${storyCards()}
    </div>
  </section>
`;

const analyticsHead = () => {
  const snippets = [];
  if (gtmContainerId) {
    snippets.push(`<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${attr(gtmContainerId)}');</script>`);
  } else if (ga4MeasurementId) {
    snippets.push(`<script async src="https://www.googletagmanager.com/gtag/js?id=${attr(ga4MeasurementId)}"></script><script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${attr(ga4MeasurementId)}');</script>`);
  }
  if (hubspotPortalId && hubspotTrackingMode === 'direct') {
    snippets.push(`<script async defer id="hs-script-loader" src="https://js.hs-scripts.com/${attr(hubspotPortalId)}.js"></script>`);
  }
  return snippets.join('\n  ');
};

const gtmBody = () =>
  gtmContainerId
    ? `<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${attr(gtmContainerId)}" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>`
    : '';

const shell = ({ title, description, path: routePath, theme = 'dark', body, extraHead = '', storyFooter = true }) => `<!doctype html>
<html lang="en" data-theme="${attr(theme)}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)} | ${esc(content.settings.siteName)}</title>
  <meta name="description" content="${attr(description || 'The redesigned Cynthia Woods Mitchell Pavilion website prototype.')}">
  ${analyticsHead()}
  <link rel="stylesheet" href="/styles/site.css">
  ${extraHead}
</head>
<body data-route="${attr(routePath)}" data-fallback-image="${attr(content.settings.fallbackImage)}">
  ${gtmBody()}
  <a class="skip-link" href="#main">Skip to content</a>
  ${alertBanner()}
  ${header(routePath, theme)}
  <main id="main">
    ${body}
  </main>
  ${storyFooter ? storyBlock(theme === 'light' ? 'story-prefooter-light' : 'section-wash-blue') : ''}
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
      ${content.alert.dismissible ? `<button type="button" data-alert-close aria-label="Dismiss alert">${svgIcon('xmark', { className: 'control-icon icon-white' })}</button>` : ''}
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
          .map((item) => `<a class="${routePath.startsWith(item.href) ? 'is-active' : ''}" href="${attr(item.href)}"><span class="nav-icon">${svgIcon(item.icon, { className: 'site-icon icon-blue' })}</span>${esc(item.label)}</a>`)
          .join('')}
      </nav>
      <div class="utility-nav">
        ${content.navigation.utility.map((item) => `<a href="${attr(item.href)}" data-popover-open="${attr(item.popoverId)}">${esc(item.label)}</a>`).join('')}
        <button type="button" class="menu-button" data-menu-open aria-label="Open menu">${svgIcon('bars', { className: 'control-icon' })}</button>
      </div>
    </div>
    <div class="mobile-menu" data-mobile-menu hidden>
      <div class="mobile-menu-panel" role="dialog" aria-modal="true" aria-label="Site menu">
        <button type="button" data-menu-close aria-label="Close menu">${svgIcon('xmark', { className: 'control-icon icon-white' })}</button>
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
        <p>The Pavilion brings world-class performances, free arts experiences, education programs and community moments to The Woodlands all season long.</p>
      </div>
      <nav aria-label="Footer">
        ${content.navigation.footer.map((item) => {
          const link = navItem(item);
          return `<a href="${attr(link.href)}">${esc(link.label)}</a>`;
        }).join('')}
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
      .map((item) => {
        const link = navItem(item);
        return `<a class="${routePath.startsWith(link.href) ? 'is-active' : ''}" href="${attr(link.href)}"><span class="dock-icon">${svgIcon(link.icon, { className: 'site-icon icon-blue' })}</span>${esc(link.label)}</a>`;
      })
      .join('')}
  </nav>
`;

const popoverMarkup = () => `
  <div class="popover-layer" data-popover-layer hidden>
    ${Object.entries(content.forms)
      .filter(([id]) => ['contact', 'get-emails', 'seasonSeats'].includes(id))
      .map(([id, form]) => {
        const portalId = configuredValue(form.portalId, 'HUBSPOT_PORTAL_ID');
        const region = configuredValue(form.region, 'HUBSPOT_REGION') || 'na1';
        const formId = configuredValue(form.formId);
        return `
          <section class="popover" data-popover="${attr(id)}" role="dialog" aria-modal="true" aria-labelledby="${attr(id)}-title" hidden>
            <button type="button" class="popover-close" data-popover-close aria-label="Close">${svgIcon('xmark', { className: 'control-icon icon-white' })}</button>
            <p class="eyebrow">Send a note</p>
            <h2 id="${attr(id)}-title">${esc(form.title)}</h2>
            ${form.subtitle ? `<p>${esc(form.subtitle)}</p>` : ''}
            <div
              class="hubspot-form-shell"
              id="hubspot-${attr(id)}"
              data-hubspot-form
              data-portal-id="${attr(portalId)}"
              data-region="${attr(region)}"
              data-form-id="${attr(formId)}"
              data-fallback-url="${attr(form.fallbackUrl || 'mailto:info@woodlandscenter.org')}"
            >
              <p class="hubspot-form-status">Loading form...</p>
            </div>
            <p class="fine-print">${esc(form.privacyCopy || 'A Pavilion team member will follow up with the next best step.')}</p>
            <a class="hubspot-fallback-link" href="${attr(form.fallbackUrl || 'mailto:info@woodlandscenter.org')}">Use fallback contact link</a>
          </section>
        `;
      })
      .join('')}
  </div>
`;

const homePage = (routePath = '/') => {
  const homeMissionBlock = {
    ...content.blocks.video,
    title: content.mission.title,
    subtitle: content.mission.subtitle,
    cta: { label: 'Explore the mission', href: '/mission' }
  };
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
            <div class="cta-row">
              ${cta({ label: 'Get Tickets', href: '/events' }, 'primary')}
              ${cta({ label: 'Plan Your Visit', href: '/plan-your-visit' }, 'secondary')}
            </div>
          </div>
          ${showRail(content.events, { eagerCount: 2 })}
        </div>
      </section>
      ${videoBlock(homeMissionBlock, 'section-wash-blue', 'left')}
      ${seasonSeatsBlock('section-wash-lift', 'left')}
      ${featureBlock('section-wash-deep', 'left')}
    `
  });
};

const eventsPage = () => {
  const events = content.events.slice().sort(byEventDate);
  return shell({
    title: 'Events',
    description: 'Find tickets, parking and lawn chair rentals for upcoming Pavilion shows.',
    path: '/events',
    storyFooter: false,
    body: `
      <section class="section events-chart-hero">
        <div class="container">
          ${sectionHeading('Events', 'Tickets, parking and lawn chairs', 'One simple place to get ready for every upcoming Pavilion show.')}
        </div>
      </section>
      <section class="section events-chart-section">
        <div class="container events-chart">
          ${events
            .map(
              (event) => `
                <article class="events-chart-row event-type-${attr(event.eventType)}">
                  <a class="events-chart-image" href="/events/${attr(event.slug)}/" aria-label="${attr(event.title)} event details"${analyticsAttrs('event_card_click', { eventName: event.title, eventSlug: event.slug, eventType: event.eventType, context: 'events_chart' })}>
                    <img src="${attr(event.cardImage || event.headerImage)}" alt="${attr(event.title)}" loading="lazy" decoding="async">
                  </a>
                  <div class="events-chart-copy">
                    <time datetime="${attr(event.eventDate)}">${esc(fmtDate(event.eventDate))} · ${esc(event.eventStartTime)}</time>
                    <h2><a href="/events/${attr(event.slug)}/">${esc(event.title)}</a></h2>
                    ${event.subheader ? `<p>${esc(event.subheader)}</p>` : ''}
                  </div>
                  <div class="events-chart-actions">
                    ${cta({ label: event.ctaLabel || 'Get Tickets', href: event.ticketLink, openInNewTab: true, analyticsContext: 'events_chart' }, 'primary')}
                    <a class="icon-action" href="${attr(event.parkingPurchaseLink || event.parkingLink)}" target="_blank" rel="noopener noreferrer" aria-label="Buy parking for ${attr(event.title)}"${analyticsAttrs('parking_click', { eventName: event.title, eventSlug: event.slug, context: 'events_chart' })}>
                      ${svgIcon('square-parking', { className: 'site-icon icon-blue' })}
                      <span>Parking</span>
                    </a>
                    <a class="icon-action" href="${attr(event.lawnChairPurchaseLink || event.lawnChairLink)}" target="_blank" rel="noopener noreferrer" aria-label="Rent lawn chairs for ${attr(event.title)}"${analyticsAttrs('lawn_chair_click', { eventName: event.title, eventSlug: event.slug, context: 'events_chart' })}>
                      ${svgIcon('chair', { className: 'site-icon icon-blue' })}
                      <span>Lawn Chairs</span>
                    </a>
                  </div>
                </article>
              `
            )
            .join('')}
        </div>
      </section>
    `
  });
};

const eventDetailPage = (event) => {
  const scheduleRows = Array.isArray(event.showSchedule) && event.showSchedule.length
    ? event.showSchedule
    : [{ time: event.gateOpenTime || event.eventStartTime || 'Event day', label: 'Check event updates for final timing.' }];
  const heroImage = event.headerImage || event.cardImage || content.settings.fallbackImage;

  return shell({
    title: event.title,
    description: event.eventDescription,
    path: `/events/${event.slug}`,
    storyFooter: false,
    body: `
      <article>
        <section class="detail-hero" style="--hero-image:url('${attr(heroImage)}')">
          <div class="container event-hero-grid">
            <div class="detail-copy">
              <p class="eyebrow">${esc(fmtDate(event.eventDate))} · ${esc(event.eventStartTime)}</p>
              <h1>${esc(event.title)}</h1>
              <p>${esc(event.subheader || '')}</p>
              <div class="cta-row">${cta({ label: event.ctaLabel, href: event.ticketLink, openInNewTab: true, analyticsContext: 'event_hero' })}</div>
            </div>
            <nav class="event-action-icons" aria-label="Event add-ons">
              ${
                event.eventType === 'freeCommunity'
                  ? ''
                  : `<a href="${attr(event.lawnChairPurchaseLink || event.lawnChairLink)}" target="_blank" rel="noopener noreferrer" aria-label="Rent lawn chairs"${analyticsAttrs('lawn_chair_click', { eventName: event.title, eventSlug: event.slug, context: 'event_hero' })}>
                      <span class="action-icon">${svgIcon('chair', { className: 'site-icon icon-blue' })}</span>
                      <strong><span class="action-label-full">Rent Lawn Chairs</span><span class="action-label-short" aria-hidden="true">Chairs</span></strong>
                      <small>Reserve seating</small>
                    </a>`
              }
              <a href="${attr(event.parkingPurchaseLink || event.parkingLink)}" target="_blank" rel="noopener noreferrer" aria-label="Buy parking"${analyticsAttrs('parking_click', { eventName: event.title, eventSlug: event.slug, context: 'event_hero' })}>
                <span class="action-icon">${svgIcon('square-parking', { className: 'site-icon icon-blue' })}</span>
                <strong><span class="action-label-full">Buy Parking</span><span class="action-label-short" aria-hidden="true">Parking</span></strong>
                <small>Buy or view lots</small>
              </a>
              <a href="${attr(event.hotelLink || '#')}" target="_blank" rel="noopener noreferrer" aria-label="Book hotel"${analyticsAttrs('hotel_click', { eventName: event.title, eventSlug: event.slug, context: 'event_hero' })}>
                <span class="action-icon">${svgIcon('hotel', { className: 'site-icon icon-blue' })}</span>
                <strong><span class="action-label-full">Book Hotel</span><span class="action-label-short" aria-hidden="true">Hotel</span></strong>
                <small>Book nearby</small>
              </a>
            </nav>
          </div>
        </section>
        <nav class="event-sticky-bar" data-event-sticky-bar aria-label="Quick event actions">
          <a href="${attr(event.ticketLink)}" target="_blank" rel="noopener noreferrer"${analyticsAttrs('get_tickets_click', { eventName: event.title, eventSlug: event.slug, context: 'sticky_bar' })}>${svgIcon('ticket', { className: 'site-icon icon-blue' })}<span>${esc(event.ctaLabel || 'Get Tickets')}</span></a>
          <a href="${attr(event.parkingLink)}"${analyticsAttrs('parking_click', { eventName: event.title, eventSlug: event.slug, context: 'sticky_bar' })}>${svgIcon('square-parking', { className: 'site-icon icon-blue' })}<span>Parking</span></a>
          <a href="${attr(event.bagPolicyLink)}"${analyticsAttrs('bag_policy_click', { eventName: event.title, eventSlug: event.slug, context: 'sticky_bar' })}>${svgIcon('bag-shopping', { className: 'site-icon icon-blue' })}<span>Bag Policy</span></a>
        </nav>
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
              <div class="schedule-card">
                <p class="eyebrow">Show Schedule</p>
                <dl class="schedule-list">
                  ${scheduleRows.map((row) => `<div><dt>${esc(row.time)}</dt><dd>${esc(row.label)}</dd></div>`).join('')}
                </dl>
              </div>
              <div class="text-code-card">
                <p class="eyebrow">Text Updates</p>
                <h2>${esc(event.textUpdatesCode || 'Text CWMP for updates')}</h2>
                <p>${esc(event.textUpdatesBody || 'Receive important event updates by text.')}</p>
              </div>
            </aside>
          </div>
        </section>
        <section class="section know-before-band">
          <div class="container">
            ${sectionHeading('Know Before You Go', 'Key arrival and entry information', 'The most important Plan Your Visit details for this event.')}
            <div class="know-before-grid">
              <article>
                <span class="info-icon">${svgIcon('bag-shopping', { className: 'site-icon icon-blue' })}</span>
                <h3>Bag Policy and Rules</h3>
                <p>Clear bags 12" x 12" or smaller are permitted. Small clutches are allowed and all belongings are subject to search. Outside chairs, large umbrellas, weapons, coolers and outside liquids are not allowed.</p>
                <a href="${attr(event.bagPolicyLink)}">Review bag policy</a>
              </article>
              <article>
                <span class="info-icon">${svgIcon('square-parking', { className: 'site-icon icon-blue' })}</span>
                <h3>Parking Directions</h3>
                <p>Check your event parking before you arrive. Lots, shuttle service and traffic flow can vary by show, so give yourself extra time around gate opening.</p>
                <a href="${attr(event.parkingLink)}"${analyticsAttrs('parking_click', { eventName: event.title, eventSlug: event.slug, context: 'know_before_you_go' })}>See parking details</a>
              </article>
              <article>
                <span class="info-icon">${svgIcon('ticket', { className: 'site-icon icon-blue' })}</span>
                <h3>Ticket Information</h3>
                <p>Have mobile tickets ready before you reach the gate. Event timing, entry policies and artist-specific notes may change, so review this page again before leaving.</p>
                <a href="${attr(event.ticketLink)}" target="_blank" rel="noopener noreferrer"${analyticsAttrs('get_tickets_click', { eventName: event.title, eventSlug: event.slug, context: 'know_before_you_go' })}>Open tickets</a>
              </article>
            </div>
          </div>
        </section>
        ${eventListBlock('More Events')}
      </article>
    `
  });
};

const landingHero = (page, eyebrow = templateEyebrow(page)) => `
  <section class="landing-hero" style="--hero-image:url('${attr(page.heroImage || content.settings.fallbackImage)}')">
    <div class="container landing-hero-copy">
      <p class="eyebrow">${esc(eyebrow)}</p>
      <h1>${esc(page.title)}</h1>
      <p>${esc(page.subtitle || '')}</p>
      <div class="cta-row">${cta(page.primaryCTA)}${page.secondaryCTA ? cta(page.secondaryCTA, 'secondary') : ''}</div>
    </div>
  </section>
`;

const conversionCard = (page) => {
  const conversion = page.conversion || {
    eyebrow: 'Keep exploring',
    title: 'Stay close to the mission',
    body: 'Get stories, program opportunities and simple next steps for connecting with The Pavilion’s arts access work.',
    cta: { label: 'Join the email list', type: 'popover', popoverId: 'get-emails' }
  };
  return `
    <aside class="conversion-card">
      <p class="eyebrow">${esc(conversion.eyebrow || 'Next Step')}</p>
      <h2>${esc(conversion.title)}</h2>
      <p>${esc(conversion.body)}</p>
      ${conversion.cta ? cta(conversion.cta, 'primary') : ''}
    </aside>
  `;
};

const programDetailSection = (page) => `
  <section class="section program-detail-section">
    <div class="container program-detail-grid">
      <div>
        ${sectionHeading(templateEyebrow(page), page.title, page.subtitle || 'Find the details, benefits and next steps for this Pavilion experience.')}
        ${tabs(page.tabs || [{ label: 'Overview', slug: 'overview', body: `${page.title} connects people with The Pavilion experience.` }], `tabs-${page.slug.replaceAll('/', '-')}`)}
        ${
          page.quoteHighlight || page.finalCTA
            ? `<div class="outline-callout">
                ${page.quoteHighlight ? `<p>${esc(page.quoteHighlight)}</p>` : ''}
                ${page.finalCTA ? cta(page.finalCTA, 'primary') : ''}
              </div>`
            : ''
        }
      </div>
      ${conversionCard(page)}
    </div>
  </section>
  ${page.video ? videoBlock(page.video, 'section-wash-deep', 'left') : ''}
`;

const seasonSeatsExtras = () => `
  <section class="section season-extras-section section-wash-lift">
    <div class="container season-extras-grid">
      <article class="info-card">
        <p class="eyebrow">${esc(content.seasonSeats.pricing.eyebrow)}</p>
        <h2>${esc(content.seasonSeats.pricing.title)}</h2>
        <p>${esc(content.seasonSeats.pricing.body)}</p>
        ${content.seasonSeats.pricing.cta ? cta(content.seasonSeats.pricing.cta, 'primary') : ''}
      </article>
      <article class="info-card seating-map-card">
        <p class="eyebrow">${esc(content.seasonSeats.seatingMap.eyebrow)}</p>
        <h2>${esc(content.seasonSeats.seatingMap.title)}</h2>
        <div class="seat-guidance-visual" aria-hidden="true">
          <span>Stage</span>
          <span>Premium Reserved</span>
          <span>Club Access</span>
          <span>Lawn</span>
        </div>
        <p>${esc(content.seasonSeats.seatingMap.body)}</p>
      </article>
    </div>
  </section>
`;

const seasonSeatsLandingSection = () => `
  <section class="section season-conversion-section section-wash-deep">
    <div class="container season-conversion-grid">
      <div>
        ${sectionHeading(
          'Why Season Seats',
          'A premium plan for the people you want beside you',
          'Use Season Seats as a business development tool, a team reward, a family tradition or the easiest way to say yes when the right show lands on the calendar.'
        )}
        ${pathwayCards(content.seasonSeats.tabs || [], 'season-benefit-grid')}
      </div>
      ${conversionCard(content.seasonSeats)}
    </div>
  </section>
`;

const supportArtsLandingSection = (page) => `
  <section class="section support-landing-section section-wash-deep">
    <div class="container support-landing-grid">
      <div>
        ${sectionHeading(
          'Ways to support',
          'Pick the path that matches how you want to make arts access possible',
          'Some supporters want to give now. Some want membership, volunteer leadership or a company partnership. This page gets each visitor to the right next step quickly.'
        )}
        ${pathwayCards(page.tabs || [], 'support-pathway-grid')}
      </div>
      <aside class="support-proof-panel">
        <p class="eyebrow">Mission proof</p>
        <h2>Support becomes access people can feel.</h2>
        <p>The Pavilion turns donor, volunteer and partner support into free community performances, scholarships, grants, educator resources and outreach across the region.</p>
        ${statCards(content.mission.impactStats || [], 'support-stat-grid')}
        ${page.primaryCTA ? cta(page.primaryCTA, 'primary') : ''}
      </aside>
    </div>
  </section>
  <section class="section support-conversion-band section-wash-lift">
    <div class="container support-conversion-grid">
      <div>
        <p class="eyebrow">${esc(page.conversion?.eyebrow || 'Next step')}</p>
        <h2>${esc(page.conversion?.title || 'Find your way into the mission')}</h2>
        <p>${esc(page.conversion?.body || '')}</p>
      </div>
      <div class="cta-row">
        ${page.primaryCTA ? cta(page.primaryCTA, 'primary') : ''}
        ${page.secondaryCTA ? cta(page.secondaryCTA, 'secondary') : ''}
        ${page.conversion?.cta ? cta(page.conversion.cta, 'secondary') : ''}
      </div>
    </div>
  </section>
`;

const landingPage = (page, routePath = `/${page.slug}`) => {
  const isSupportArtsPage = page.templatePreset === 'supportArts' && page.slug === 'mission/support-the-arts';
  const renderPage = isSupportArtsPage ? supportDonationPage(page) : page;
  return shell({
    title: page.title,
    description: page.subtitle,
    path: routePath,
    storyFooter: false,
    body: `
      ${landingHero(renderPage)}
      ${isSupportArtsPage ? supportArtsLandingSection(renderPage) : programDetailSection(renderPage)}
      ${renderPage.templatePreset === 'freeShows' ? eventListBlock('Free Community Shows', 'freeCommunity') : ''}
    `
  });
};

const seasonSeatsPage = () =>
  shell({
    title: content.seasonSeats.title,
    description: content.seasonSeats.subtitle,
    path: '/season-seats',
    body: `
      ${landingHero({
        ...content.seasonSeats,
        heroImage: content.seasonSeats.image,
        templatePreset: 'Season Seats',
        secondaryCTA: content.seasonSeats.holderLoginCTA
      })}
      ${seasonSeatsLandingSection()}
      ${seasonSeatsExtras()}
      ${eventListBlock('Concert Nights for Clients, Friends and Family')}
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
          <div class="cta-row mission-hero-actions">
            ${cta(content.mission.donateCTA)}
            ${cta(content.mission.programsCTA, 'secondary')}
          </div>
        </div>
      </section>
      ${statsBlock(content.mission.impactStats, 'section-wash-blue', content.mission.impactHeading, content.mission.humanProof)}
      ${videoBlock(content.mission.video, 'section-wash-deep')}
      <section class="section section-wash-lift mission-pathways-section" id="mission-pathways">
        <div class="container mission-pathways-layout">
          <div class="mission-pathways-intro">
            <p class="eyebrow">Mission pathways</p>
            <h2>How We Expand Arts Access</h2>
            <p>Explore the programs, grants, scholarships and free performances that help more people find their way into the arts.</p>
          </div>
          ${missionPathwayTabs()}
          ${missionSubnav()}
        </div>
      </section>
    `
  });

const grantPage = (program) =>
  landingPage({
    title: program.title,
    subtitle: program.subtitle,
    heroImage: program.image,
    templatePreset: 'Funding the Arts',
    primaryCTA: program.applicationCTA,
    conversion: {
      eyebrow: 'Mission seekers',
      title: program.slug === 'scholarships' ? 'Get scholarship and mission updates' : 'Get grant and outreach updates',
      body: 'Get emails from The Pavilion to learn more about our arts outreach programs and the people they impact.',
      cta: { label: 'Join the mission email list', type: 'popover', popoverId: 'get-emails' }
    },
    tabs: program.tabs,
    quoteHighlight: program.quoteHighlight,
    finalCTA: program.finalCTA,
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
      <section class="visit-hero" style="--hero-image:url('${attr('/assets/content-images/mission/26_Plan Your Visit_Hero.jpg')}')">
        <div class="container visit-copy">
          <p class="eyebrow">Plan Your Visit</p>
          <h1>Plan your visit</h1>
          <p>How can we help get you rocking today?</p>
          <form class="ai-search" data-ai-search>
            <label class="sr-only" for="visit-search">Ask a question about visiting The Pavilion</label>
            <input id="visit-search" name="query" type="search" placeholder="Bag policy, parking, umbrellas, gate times..." autocomplete="off">
            <button type="submit" aria-label="Search">${svgIcon('arrow-right', { className: 'control-icon icon-white' })}</button>
          </form>
          <div class="ai-result" data-ai-result hidden></div>
        </div>
      </section>
      <section class="section topic-picker-section">
        <div class="container">
          ${sectionHeading('Or find answers by topic', 'Venue policies and visit essentials', 'Choose a topic to see the full set of related policies, tips and arrival details.')}
          <div class="topic-tabs" data-topic-tabs>
            ${content.planVisitTopics.map((topic, index) => `<button type="button" class="${index === 0 ? 'is-active' : ''}" data-topic-target="${attr(topic.slug)}">${svgIcon(topic.icon, { className: 'topic-tab-icon icon-blue' })}<span>${esc(topic.title)}</span></button>`).join('')}
          </div>
        </div>
      </section>
      <section class="section policy-sections">
        <div class="container">
          ${content.planVisitTopics
            .map(
              (topic, index) => `
                <section class="policy-topic" id="${attr(topic.slug)}" data-topic-panel="${attr(topic.slug)}" ${index === 0 ? '' : 'hidden'}>
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
        topicSlug: topic.slug,
        sectionSlug: section.slug,
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
      <div class="email-actions">
        ${cta({ label: 'Join the email list', type: 'popover', popoverId: 'get-emails' }, 'primary')}
      </div>
    </div>
  </section>
`;

const storyHubPage = (topic = null) => {
  const stories = topic ? content.stories.filter((story) => story.topics.map(slugifyTopic).includes(topic)) : content.stories;
  const hero = content.stories.find((story) => story.featuredSlot === 'hero') || content.stories[0];
  const large = content.stories.find((story) => story.featuredSlot === 'largeFeature') || content.stories[1];
  return shell({
    title: topic ? `Stories: ${topic}` : 'Story Hub',
    description: 'Stories from The Pavilion mission, fans, shows, scholarships, grants and backstage.',
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
            <a class="${topic ? '' : 'is-active'}" href="/story-hub/"${analyticsAttrs('story_filter', { topic: 'All' })}>All</a>
            ${content.storyTopics.map((item) => `<a class="${topic === slugifyTopic(item) ? 'is-active' : ''}" href="/story-hub/topic/${slugifyTopic(item)}/"${analyticsAttrs('story_filter', { topic: item })}>${esc(item)}</a>`).join('')}
          </div>
          <div class="story-pillar-grid" aria-label="Story pillars">
            ${content.storyPillars
              .map(
                (pillar) => `
                  <a class="story-pillar-card" href="${attr(pillar.href)}">
                    <span>Pillar</span>
                    <strong>${esc(pillar.title)}</strong>
                    <em>${esc(pillar.body)}</em>
                    <b>${esc(pillar.ctaLabel || 'Read stories')}${svgIcon('arrow-right', { className: 'btn-icon icon-blue' })}</b>
                  </a>
                `
              )
              .join('')}
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
            <p>Published ${esc(fmtDate(story.publishDate))}. More voices, photos and related resources can be added as the story grows.</p>
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
          <p class="eyebrow">Next Step</p>
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
copyRecursive('public/assets', path.join(dist, 'assets'));
copyRecursive('src/styles', path.join(dist, 'styles'));
copyRecursive('src/scripts', path.join(dist, 'scripts'));
copyRecursive('cloudflare/_headers', path.join(dist, '_headers'));
copyRecursive('cloudflare/_redirects', path.join(dist, '_redirects'));

writeRoute('/', homePage('/'));
writeRoute('/events', eventsPage());

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
