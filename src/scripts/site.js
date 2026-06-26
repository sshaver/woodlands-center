const focusableSelector = 'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';
let lastFocused = null;

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
    missionPreview.style.transform = `translate(${Math.max(16, left)}px, ${Math.max(16, top)}px)`;
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

document.querySelectorAll('[data-event-view]').forEach((button) => {
  button.addEventListener('click', () => {
    const view = button.dataset.eventView;
    const section = button.closest('.events-section');
    section.querySelectorAll('[data-event-view]').forEach((toggle) => toggle.classList.toggle('is-active', toggle === button));
    section.querySelector('[data-event-cards]').hidden = view !== 'cards';
    section.querySelector('[data-event-rows]').hidden = view !== 'list';
  });
});

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

const scoreChunk = (chunk, terms) => {
  const haystack = `${chunk.title} ${chunk.body} ${(chunk.keywords || []).join(' ')}`.toLowerCase();
  return terms.reduce((score, term) => score + (haystack.includes(term) ? 2 : 0) + (chunk.title.toLowerCase().includes(term) ? 3 : 0), chunk.priority || 0);
};

searchForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const query = new FormData(searchForm).get('query')?.toString().trim() || '';
  const terms = query.toLowerCase().split(/[^a-z0-9]+/).filter(Boolean);
  resultBox.hidden = false;
  if (!terms.length) {
    resultBox.innerHTML = '<strong>Ask a question first.</strong><p>Try “Can I bring an umbrella?” or “Is Sting playing?”</p>';
    return;
  }
  const matches = knowledge
    .map((chunk) => ({ chunk, score: scoreChunk(chunk, terms) }))
    .filter((match) => match.score > (match.chunk.priority || 0))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
  if (!matches.length) {
    resultBox.innerHTML = '<strong>I do not have a reliable answer in the current Pavilion content.</strong><p>Please use Contact or call the Box Office so staff can help.</p><a class="btn btn-secondary" href="#contact" data-popover-open="contact">Contact</a>';
    resultBox.querySelector('[data-popover-open]')?.addEventListener('click', (openEvent) => {
      openEvent.preventDefault();
      openPopover('contact');
    });
    return;
  }
  const best = matches[0].chunk;
  resultBox.innerHTML = `
    <strong>${best.title}</strong>
    <p>${best.body.split('. ').slice(0, 2).join('. ')}.</p>
    <div class="source-links">
      ${matches.map(({ chunk }) => `<a href="${chunk.url}">${chunk.title}</a>`).join('')}
    </div>
  `;
});
