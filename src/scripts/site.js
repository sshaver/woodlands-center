const focusableSelector = 'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';
let lastFocused = null;

window.dataLayer = window.dataLayer || [];

const fallbackImage = document.body?.dataset.fallbackImage;

if (fallbackImage) {
  document.addEventListener(
    'error',
    (event) => {
      const target = event.target;
      if (!(target instanceof HTMLImageElement) || target.dataset.fallbackApplied === 'true') return;
      target.dataset.fallbackApplied = 'true';
      target.src = fallbackImage;
      pushAnalyticsEvent('image_fallback_loaded', {
        image_alt: target.alt || '',
        image_context: target.closest('article, section')?.className || ''
      });
    },
    true
  );
}

const analyticsDatasetToParams = (dataset = {}) => {
  const params = {};
  Object.entries(dataset).forEach(([key, value]) => {
    if (!key.startsWith('analytics') || key === 'analyticsEvent') return;
    const paramKey = key
      .replace(/^analytics/, '')
      .replace(/^[A-Z]/, (letter) => letter.toLowerCase())
      .replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
    params[paramKey] = value;
  });
  return params;
};

const pushAnalyticsEvent = (eventName, params = {}) => {
  if (!eventName) return;
  window.dataLayer.push({
    event: eventName,
    page_path: window.location.pathname,
    ...params
  });
};

document.addEventListener('click', (event) => {
  const target = event.target.closest('[data-analytics-event]');
  if (!target) return;
  pushAnalyticsEvent(target.dataset.analyticsEvent, analyticsDatasetToParams(target.dataset));
});

document.querySelectorAll('[data-alert-close]').forEach((button) => {
  button.addEventListener('click', () => button.closest('[data-alert]')?.remove());
});

document.querySelectorAll('[data-tabs]').forEach((tabs) => {
  const buttons = [...tabs.querySelectorAll('[role="tab"]')];
  const panels = [...tabs.querySelectorAll('[role="tabpanel"]')];
  const activate = (index) => {
    buttons.forEach((button, buttonIndex) => {
      const active = buttonIndex === index;
      button.setAttribute('aria-selected', String(active));
      button.tabIndex = active ? 0 : -1;
      if (panels[buttonIndex]) panels[buttonIndex].hidden = !active;
    });
    tabs.dispatchEvent(new CustomEvent('tabs:change', { detail: { index } }));
    buttons[index].focus();
  };
  buttons.forEach((button, index) => {
    button.addEventListener('click', () => activate(index));
    button.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowRight') activate((index + 1) % buttons.length);
      if (event.key === 'ArrowLeft') activate((index - 1 + buttons.length) % buttons.length);
      if (event.key === 'Home') activate(0);
      if (event.key === 'End') activate(buttons.length - 1);
    });
  });
});

document.querySelector('[data-mission-subnav]')?.closest('.container')?.querySelector('[data-tabs]')?.addEventListener('tabs:change', (event) => {
  document.querySelectorAll('[data-mission-subnav-panel]').forEach((panel) => {
    panel.hidden = panel.dataset.missionSubnavPanel !== String(event.detail.index);
  });
});

const missionPreview = document.querySelector('[data-mission-preview-card]');
if (missionPreview) {
  document.body.append(missionPreview);
  const supportsHoverPreview = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const image = missionPreview.querySelector('[data-mission-preview-image]');
  const title = missionPreview.querySelector('[data-mission-preview-title]');
  const copy = missionPreview.querySelector('[data-mission-preview-copy]');
  const positionPreview = (x, y) => {
    const offset = 22;
    const width = missionPreview.offsetWidth || 340;
    const height = missionPreview.offsetHeight || 360;
    const left = Math.min(x + offset, window.innerWidth - width - 16);
    const top = Math.min(y + offset, window.innerHeight - height - 16);
    missionPreview.style.transform = `translate3d(${Math.max(16, left)}px, ${Math.max(16, top)}px, 0)`;
  };
  const showPreview = (link, event) => {
    image.src = link.dataset.previewImage;
    image.alt = link.dataset.previewTitle;
    title.textContent = link.dataset.previewTitle;
    copy.textContent = link.dataset.previewCopy;
    missionPreview.hidden = false;
    missionPreview.classList.add('is-active');
    if (event?.clientX) {
      positionPreview(event.clientX, event.clientY);
    } else {
      const rect = link.getBoundingClientRect();
      positionPreview(rect.left + rect.width / 2, rect.bottom);
    }
  };
  const hidePreview = () => {
    missionPreview.classList.remove('is-active');
    missionPreview.hidden = true;
  };
  if (supportsHoverPreview) {
    document.querySelectorAll('[data-preview-title]').forEach((link) => {
      link.addEventListener('mouseenter', (event) => showPreview(link, event));
      link.addEventListener('mousemove', (event) => positionPreview(event.clientX, event.clientY));
      link.addEventListener('mouseleave', hidePreview);
      link.addEventListener('focus', () => showPreview(link));
      link.addEventListener('blur', hidePreview);
    });
  }
}

const eventStickyBar = document.querySelector('[data-event-sticky-bar]');
const eventHeroActions = document.querySelector('.event-action-icons');
if (eventStickyBar && eventHeroActions) {
  const setStickyVisibility = (visible) => {
    eventStickyBar.classList.toggle('is-visible', visible);
    eventStickyBar.setAttribute('aria-hidden', String(!visible));
  };
  setStickyVisibility(false);
  if ('IntersectionObserver' in window) {
    const stickyObserver = new IntersectionObserver(
      ([entry]) => setStickyVisibility(!entry.isIntersecting),
      { threshold: 0, rootMargin: '-84px 0px 0px 0px' }
    );
    stickyObserver.observe(eventHeroActions);
  } else {
    const checkSticky = () => setStickyVisibility(eventHeroActions.getBoundingClientRect().bottom < 84);
    checkSticky();
    window.addEventListener('scroll', checkSticky, { passive: true });
  }
}

document.querySelectorAll('[data-event-view]').forEach((button) => {
  button.addEventListener('click', () => {
    const view = button.dataset.eventView;
    const section = button.closest('.events-section');
    section.querySelectorAll('[data-event-view]').forEach((toggle) => toggle.classList.toggle('is-active', toggle === button));
    section.querySelector('[data-event-cards]').hidden = view !== 'cards';
    section.querySelector('[data-event-rows]').hidden = view !== 'list';
  });
});

const pastEventSearch = document.querySelector('[data-past-event-search]');
if (pastEventSearch) {
  const pastEventRows = [...document.querySelectorAll('[data-past-event]')];
  const pastEventEmpty = document.querySelector('[data-past-event-empty]');
  const searchableText = (row) => `${row.dataset.searchText || ''} ${row.textContent || ''}`.toLowerCase();
  const filterPastEvents = () => {
    const query = pastEventSearch.value.trim().toLowerCase();
    let visibleCount = 0;
    pastEventRows.forEach((row) => {
      const visible = !query || searchableText(row).includes(query);
      row.hidden = !visible;
      if (visible) visibleCount += 1;
    });
    if (pastEventEmpty) pastEventEmpty.hidden = visibleCount !== 0;
  };
  pastEventSearch.addEventListener('input', filterPastEvents);
  pastEventSearch.addEventListener('search', filterPastEvents);
}

const menu = document.querySelector('[data-mobile-menu]');
const openMenu = document.querySelector('[data-menu-open]');
const closeMenu = document.querySelector('[data-menu-close]');
openMenu?.addEventListener('click', () => {
  lastFocused = document.activeElement;
  menu.hidden = false;
  closeMenu.focus();
});
closeMenu?.addEventListener('click', () => {
  menu.hidden = true;
  lastFocused?.focus();
});

const popoverLayer = document.querySelector('[data-popover-layer]');
const openPopover = (id) => {
  const popover = document.querySelector(`[data-popover="${CSS.escape(id)}"]`);
  if (!popover || !popoverLayer) return;
  lastFocused = document.activeElement;
  popoverLayer.hidden = false;
  document.querySelectorAll('[data-popover]').forEach((item) => (item.hidden = true));
  popover.hidden = false;
  popover.querySelector(focusableSelector)?.focus();
};
const closePopover = () => {
  document.querySelectorAll('[data-popover]').forEach((item) => (item.hidden = true));
  if (popoverLayer) popoverLayer.hidden = true;
  lastFocused?.focus();
};

document.querySelectorAll('[data-popover-open]').forEach((trigger) => {
  trigger.addEventListener('click', (event) => {
    event.preventDefault();
    openPopover(trigger.dataset.popoverOpen);
  });
});

document.querySelectorAll('[data-popover-close]').forEach((button) => {
  button.addEventListener('click', closePopover);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closePopover();
    if (menu && !menu.hidden) {
      menu.hidden = true;
      lastFocused?.focus();
    }
  }
  if (event.key !== 'Tab' || !popoverLayer || popoverLayer.hidden) return;
  const activePopover = document.querySelector('[data-popover]:not([hidden])');
  const focusables = [...activePopover.querySelectorAll(focusableSelector)];
  if (!focusables.length) return;
  const first = focusables[0];
  const last = focusables[focusables.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});

const hubspotTargets = [...document.querySelectorAll('[data-hubspot-form]')];
const hubspotConfigured = (target) =>
  target.dataset.portalId &&
  target.dataset.formId &&
  !target.dataset.portalId.startsWith('CONFIGURE_') &&
  !target.dataset.formId.startsWith('CONFIGURE_');
const showHubspotFallback = (target) => {
  const fallbackUrl = target.dataset.fallbackUrl || 'mailto:info@woodlandscenter.org';
  const wrapper = document.createElement('div');
  const message = document.createElement('p');
  const link = document.createElement('a');
  wrapper.className = 'hubspot-fallback';
  message.textContent = 'This form is ready for HubSpot configuration.';
  link.className = 'btn btn-secondary';
  link.href = fallbackUrl;
  link.textContent = 'Contact The Pavilion';
  wrapper.append(message, link);
  target.replaceChildren(wrapper);
  pushAnalyticsEvent('hubspot_form_fallback', {
    form_id: target.dataset.formId || '',
    portal_id: target.dataset.portalId || ''
  });
};
const loadHubspotScript = (() => {
  let promise;
  return () => {
    promise ??= new Promise((resolve, reject) => {
      if (window.hbspt?.forms?.create) {
        resolve();
        return;
      }
      const script = document.createElement('script');
      script.src = 'https://js.hsforms.net/forms/embed/v2.js';
      script.async = true;
      script.onload = resolve;
      script.onerror = reject;
      document.head.append(script);
    });
    return promise;
  };
})();

if (hubspotTargets.length) {
  hubspotTargets.forEach((target) => {
    if (!hubspotConfigured(target)) {
      showHubspotFallback(target);
      return;
    }
    loadHubspotScript()
      .then(() => {
        target.querySelector('.hubspot-form-status')?.remove();
        window.hbspt.forms.create({
          region: target.dataset.region || 'na1',
          portalId: target.dataset.portalId,
          formId: target.dataset.formId,
          target: `#${CSS.escape(target.id)}`,
          onFormReady: () => {
            pushAnalyticsEvent('hubspot_form_load', {
              form_id: target.dataset.formId || '',
              portal_id: target.dataset.portalId || ''
            });
          },
          onFormSubmitted: () => {
            pushAnalyticsEvent('hubspot_form_submit', {
              form_id: target.dataset.formId || '',
              portal_id: target.dataset.portalId || ''
            });
          }
        });
      })
      .catch(() => showHubspotFallback(target));
  });
}

document.querySelectorAll('[data-placeholder-form]').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const message = document.createElement('p');
    message.className = 'form-success';
    message.textContent = 'Thanks. A Pavilion team member will follow up with the next best step.';
    form.replaceWith(message);
  });
});

const topicTabs = document.querySelector('[data-topic-tabs]');
topicTabs?.addEventListener('click', (event) => {
  const button = event.target.closest('[data-topic-target]');
  if (!button) return;
  topicTabs.querySelectorAll('button').forEach((tab) => tab.classList.toggle('is-active', tab === button));
  document.querySelectorAll('[data-topic-panel]').forEach((panel) => {
    panel.hidden = panel.dataset.topicPanel !== button.dataset.topicTarget;
  });
});

const searchForm = document.querySelector('[data-ai-search]');
const resultBox = document.querySelector('[data-ai-result]');
const knowledgeNode = document.querySelector('#knowledge-data');
const knowledge = knowledgeNode ? JSON.parse(knowledgeNode.textContent) : [];
let visitAnswerRenderId = 0;

const searchSynonyms = {
  bags: ['bag', 'clear', 'clutch'],
  bag: ['bags', 'clear', 'clutch'],
  parking: ['park', 'lot', 'shuttle', 'directions'],
  park: ['parking', 'lot', 'shuttle'],
  tickets: ['ticket', 'ticketmaster', 'mobile', 'box office'],
  ticket: ['tickets', 'ticketmaster', 'mobile', 'box office'],
  umbrella: ['umbrellas', 'rain'],
  umbrellas: ['umbrella', 'rain'],
  food: ['drink', 'concessions', 'menu'],
  drinks: ['food', 'concessions', 'bottle'],
  accessible: ['accessibility', 'wheelchair', 'service animals'],
  accessibility: ['accessible', 'wheelchair', 'service animals'],
  rules: ['policy', 'policies', 'prohibited'],
  policy: ['rules', 'policies', 'prohibited'],
  policies: ['policy', 'rules', 'prohibited']
};

const normalizeText = (value = '') => value.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
const escapeHtml = (value = '') =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
const sanitizeSearchTerm = (value = '') =>
  normalizeText(
    value
      .toLowerCase()
      .replace(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi, '[email]')
      .replace(/\b(?:\+?1[-.\s]?)?(?:\(?\d{3}\)?[-.\s]?)\d{3}[-.\s]?\d{4}\b/g, '[phone]')
  )
    .slice(0, 120);

const expandTerms = (terms) => [...new Set(terms.flatMap((term) => [term, ...(searchSynonyms[term] || [])].flatMap((item) => normalizeText(item).split(' '))).filter(Boolean))];

const scoreChunk = (chunk, terms) => {
  const title = normalizeText(chunk.title);
  const body = normalizeText(chunk.body);
  const keywords = normalizeText((chunk.keywords || []).join(' '));
  return terms.reduce((score, term) => {
    const titleMatch = title.includes(term) ? 8 : 0;
    const keywordMatch = keywords.includes(term) ? 5 : 0;
    const bodyMatch = body.includes(term) ? 2 : 0;
    return score + titleMatch + keywordMatch + bodyMatch;
  }, chunk.priority || 0);
};

const quoteForMatch = (chunk, terms) => {
  const sentences = chunk.body
    .split(/(?<=[.!?])\s+|\n+/)
    .map((sentence) => sentence.trim())
    .filter(Boolean);
  return sentences.find((sentence) => terms.some((term) => normalizeText(sentence).includes(term))) || sentences[0] || chunk.body;
};

const localVisitMatches = (query) => {
  const terms = expandTerms(query.toLowerCase().split(/[^a-z0-9]+/).filter(Boolean));
  if (!terms.length) return { empty: true, matches: [] };
  const matches = knowledge
    .map((chunk) => ({ chunk, score: scoreChunk(chunk, terms) }))
    .filter((match) => match.score > (match.chunk.priority || 0))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
  return { terms, matches };
};

const renderVisitSources = (sources = []) =>
  sources.length
    ? `<div class="source-links">${sources
        .map((source) => {
          const topicAttrs = source.topicSlug
            ? ` data-topic-source="${escapeHtml(source.topicSlug)}" data-section-source="${escapeHtml(source.sectionSlug || source.topicSlug)}"`
            : '';
          return `<a href="${escapeHtml(source.url || '#')}"${topicAttrs}>${escapeHtml(source.title || 'Source')}</a>`;
        })
        .join('')}</div>`
    : '';

const typeVisitAnswer = (answerNode, answer, renderId, done) => {
  if (!answerNode) return;
  const text = String(answer || '');
  const charactersPerFrame = Math.max(3, Math.ceil(text.length / 90));
  let index = 0;
  answerNode.textContent = '';
  answerNode.classList.add('is-typing');

  const step = () => {
    if (!answerNode.isConnected || renderId !== visitAnswerRenderId) return;
    index = Math.min(text.length, index + charactersPerFrame);
    answerNode.textContent = text.slice(0, index);
    if (index < text.length) {
      requestAnimationFrame(step);
      return;
    }
    answerNode.classList.remove('is-typing');
    done?.();
  };

  requestAnimationFrame(step);
};

const renderVisitAnswer = ({ title = '', answer = '', sources = [], fallbackUsed = false }) => {
  const renderId = (visitAnswerRenderId += 1);
  resultBox.hidden = false;
  resultBox.innerHTML = `
    ${title ? `<strong>${escapeHtml(title)}</strong>` : ''}
    <p class="ai-answer-text" data-ai-answer-text></p>
    <div data-ai-answer-meta></div>
  `;
  const answerNode = resultBox.querySelector('[data-ai-answer-text]');
  const metaNode = resultBox.querySelector('[data-ai-answer-meta]');
  typeVisitAnswer(answerNode, answer, renderId, () => {
    if (!metaNode || renderId !== visitAnswerRenderId) return;
    metaNode.innerHTML = `
      ${fallbackUsed ? '<small>Using the site content fallback.</small>' : ''}
      ${renderVisitSources(sources)}
    `;
  });
};

const renderLocalVisitAnswer = (query) => {
  const { empty, terms, matches } = localVisitMatches(query);
  resultBox.hidden = false;
  if (empty) {
    resultBox.innerHTML = '<strong>Ask a question first.</strong><p>Try “Can I bring an umbrella?” or “Is Sting playing?”</p>';
    return;
  }
  if (!matches.length) {
    resultBox.innerHTML = '<strong>I do not have a reliable answer in the current Pavilion content.</strong><p>Please use Contact or call the Box Office so staff can help.</p><a class="btn btn-secondary" href="#contact" data-popover-open="contact">Contact</a>';
    resultBox.querySelector('[data-popover-open]')?.addEventListener('click', (openEvent) => {
      openEvent.preventDefault();
      openPopover('contact');
    });
    return;
  }
  const best = matches[0].chunk;
  const fallbackQuote = quoteForMatch(best, terms);
  renderVisitAnswer({
    title: best.title,
    answer: `${fallbackQuote} The link below has the full Pavilion context if you want to keep checking details.`,
    sources: matches.map(({ chunk }) => ({
      title: chunk.title,
      url: chunk.url,
      topicSlug: chunk.topicSlug,
      sectionSlug: chunk.sectionSlug || chunk.topicSlug
    })),
    fallbackUsed: true
  });
};

const activateVisitTopic = (chunk) => {
  if (!chunk.topicSlug) return;
  const button = document.querySelector(`[data-topic-target="${CSS.escape(chunk.topicSlug)}"]`);
  if (button) {
    topicTabs?.querySelectorAll('button').forEach((tab) => tab.classList.toggle('is-active', tab === button));
  }
  document.querySelectorAll('[data-topic-panel]').forEach((panel) => {
    panel.hidden = panel.dataset.topicPanel !== chunk.topicSlug;
  });
  const source = document.querySelector(`#${CSS.escape(chunk.sectionSlug || chunk.topicSlug)}`) || document.querySelector(`#${CSS.escape(chunk.topicSlug)}`);
  source?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

searchForm?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const query = new FormData(searchForm).get('query')?.toString().trim() || '';
  pushAnalyticsEvent('plan_visit_search', {
    search_term: sanitizeSearchTerm(query)
  });
  resultBox.hidden = false;
  if (!query) {
    renderLocalVisitAnswer(query);
    return;
  }

  resultBox.innerHTML = `
    <div class="ai-loading" role="status">
      <span class="sr-only">Checking the latest Pavilion visit information.</span>
      <span class="ai-loading-dot"></span>
      <span class="ai-loading-dot"></span>
      <span class="ai-loading-dot"></span>
    </div>
  `;
  try {
    const response = await fetch('/api/visit-answer', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question: query })
    });
    if (!response.ok) throw new Error(`Visit answer request failed with ${response.status}`);
    const payload = await response.json();
    if (payload.error) throw new Error(payload.error);
    renderVisitAnswer({
      answer: payload.answer,
      sources: payload.sources || [],
      fallbackUsed: Boolean(payload.fallbackUsed)
    });
  } catch {
    renderLocalVisitAnswer(query);
  }
});

resultBox?.addEventListener('click', (event) => {
  const sourceLink = event.target.closest('[data-topic-source]');
  if (!sourceLink) return;
  event.preventDefault();
  activateVisitTopic({
    topicSlug: sourceLink.dataset.topicSource,
    sectionSlug: sourceLink.dataset.sectionSource
  });
});
