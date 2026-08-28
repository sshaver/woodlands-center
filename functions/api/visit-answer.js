const MAX_QUESTION_LENGTH = 280;
const DEFAULT_MAX_CONTEXT_CHUNKS = 7;
const DEFAULT_TIMEOUT_MS = 10000;
const DEFAULT_RATE_LIMIT = 20;
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const STOP_WORDS = new Set([
  'a',
  'an',
  'and',
  'are',
  'can',
  'bring',
  'do',
  'does',
  'for',
  'how',
  'i',
  'is',
  'it',
  'me',
  'my',
  'of',
  'please',
  'should',
  'tell',
  'the',
  'to',
  'we',
  'what',
  'where',
  'with'
]);

const SEARCH_SYNONYMS = {
  alcohol: ['beverages', 'liquids', 'drinks'],
  arrive: ['arrival', 'parking', 'gate'],
  bag: ['bags', 'clear', 'clutch', 'purse'],
  bags: ['bag', 'clear', 'clutch', 'purse'],
  bottle: ['bottles', 'cups', 'drink', 'liquids'],
  chair: ['chairs', 'lawn'],
  chairs: ['chair', 'lawn'],
  donate: ['donation', 'gift', 'support', 'donor'],
  donation: ['donate', 'gift', 'support', 'donor'],
  drink: ['drinks', 'beverages', 'liquids'],
  drinks: ['drink', 'beverages', 'liquids'],
  education: ['educator', 'school', 'students', 'outreach'],
  gate: ['gates', 'arrival', 'opens'],
  gates: ['gate', 'arrival', 'opens'],
  membership: ['member', 'stage lighters', 'partners', 'volunteer'],
  mission: ['arts access', 'nonprofit', 'non profit', 'outreach', 'education'],
  park: ['parking', 'lot', 'address'],
  parking: ['park', 'lot', 'address'],
  purse: ['bag', 'bags', 'clear', 'clutch'],
  scholarship: ['scholarships', 'fine arts', 'funding'],
  scholarships: ['scholarship', 'fine arts', 'funding'],
  seats: ['season seats', 'premium seats', 'reserved seats'],
  sponsor: ['sponsors', 'partnership', 'corporate'],
  sponsors: ['sponsor', 'partnership', 'corporate'],
  start: ['begins', 'show'],
  starts: ['begins', 'show'],
  ticket: ['tickets', 'ticketmaster', 'mobile'],
  tickets: ['ticket', 'ticketmaster', 'mobile'],
  umbrella: ['umbrellas', 'rain'],
  umbrellas: ['umbrella', 'rain']
};

const POLICY_EVASION_PATTERN = /\b(bypass|evade|get around|hide|sneak|smuggle)\b/i;

const buckets = new Map();

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store'
    }
  });

const normalizeText = (value = '') => String(value).toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

const searchTerms = (question) =>
  [
    ...new Set(
      normalizeText(question)
        .split(' ')
        .flatMap((term) => [term, ...(SEARCH_SYNONYMS[term] || [])])
        .filter((term) => term.length > 2 && !STOP_WORDS.has(term))
    )
  ];

const sanitizeQuestion = (value = '') =>
  String(value)
    .replace(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi, '[email]')
    .replace(/\b(?:\+?1[-.\s]?)?(?:\(?\d{3}\)?[-.\s]?)\d{3}[-.\s]?\d{4}\b/g, '[phone]')
    .trim()
    .slice(0, MAX_QUESTION_LENGTH);

const scoreChunk = (chunk, terms) => {
  const specificTitle = String(chunk.title || '').includes(':')
    ? String(chunk.title || '').split(':').slice(1).join(':')
    : chunk.title;
  const title = normalizeText(specificTitle);
  const body = normalizeText(chunk.body);
  const keywords = normalizeText((chunk.keywords || []).join(' '));
  const titleWords = new Set(title.split(' ').filter(Boolean));
  const bodyWords = new Set(body.split(' ').filter(Boolean));
  const keywordWords = new Set(keywords.split(' ').filter(Boolean));
  const hasTerm = (text, words, term) => (term.includes(' ') ? text.includes(term) : words.has(term));
  return terms.reduce((score, term) => {
    const titleMatch = hasTerm(title, titleWords, term) ? 8 : 0;
    const keywordMatch = hasTerm(keywords, keywordWords, term) ? 5 : 0;
    const bodyMatch = hasTerm(body, bodyWords, term) ? 2 : 0;
    return score + titleMatch + keywordMatch + bodyMatch;
  }, chunk.priority || 0);
};

const relevantChunks = (knowledge, question, maxChunks) => {
  const terms = searchTerms(question);
  if (!terms.length) return [];
  return knowledge
    .map((chunk) => ({ chunk, score: scoreChunk(chunk, terms) }))
    .filter((match) => match.score > (match.chunk.priority || 0))
    .sort((a, b) => b.score - a.score)
    .slice(0, maxChunks)
    .map(({ chunk }) => chunk);
};

const quoteForMatch = (chunk, question) => {
  const terms = searchTerms(question);
  const sentences = String(chunk.body || '')
    .split(/(?<=[.!?])\s+|\n+/)
    .map((sentence) => sentence.trim())
    .filter(Boolean);
  const scored = sentences
    .map((sentence) => {
      const normalized = normalizeText(sentence);
      const words = new Set(normalized.split(' ').filter(Boolean));
      const score = terms.reduce((total, term) => {
        if (words.has(term)) return total + 3;
        if (normalized.includes(term)) return total + 1;
        return total;
      }, 0);
      return { sentence, score };
    })
    .sort((a, b) => b.score - a.score);
  return scored.find((item) => item.score > 0)?.sentence || sentences[0] || '';
};

const policyGuardAnswer = (knowledge, chunks) => {
  const preferredIds = new Set([
    'plan-what-to-bring-dont-bring',
    'plan-what-to-bring-food-drink',
    'plan-rules-venue-rules'
  ]);
  const preferred = knowledge.filter((chunk) => preferredIds.has(chunk.id));
  const sources = preferred.slice(0, 3);
  return {
    answer:
      'I cannot help with bypassing Pavilion policies. Please follow the published venue rules for your event; outside beverages, outside liquids and prohibited items should be left at home or in your vehicle before entry.',
    sources: sourceList(sources),
    matchedTopics: sources.map((chunk) => chunk.topicSlug || chunk.sourceType).filter(Boolean),
    fallbackUsed: false
  };
};

const sourceList = (chunks) =>
  chunks.map((chunk) => ({
    title: chunk.title,
    url: chunk.url,
    topicSlug: chunk.topicSlug || '',
    sectionSlug: chunk.sectionSlug || '',
    sourceType: chunk.sourceType || ''
  }));

const displaySourceChunks = (chunks, question) => {
  if (!chunks.length) return [];
  if (chunks[0].sourceType === 'event') return [chunks[0]];

  const terms = searchTerms(question);
  if (!terms.length) return chunks.slice(0, 1);
  if (terms.some((term) => ['rain', 'umbrella', 'umbrellas'].includes(term))) {
    const umbrellaSources = ['plan-what-to-bring-do-bring', 'plan-what-to-bring-dont-bring']
      .map((id) => chunks.find((chunk) => chunk.id === id))
      .filter(Boolean);
    if (umbrellaSources.length) return umbrellaSources;
  }

  const scored = chunks
    .map((chunk) => ({ chunk, score: scoreChunk(chunk, terms) }))
    .sort((a, b) => b.score - a.score);
  const topScore = scored[0]?.score || 0;
  const sourceCap = terms.some((term) => ['park', 'parking', 'rain', 'umbrella', 'umbrellas'].includes(term)) ? 2 : 1;

  return scored
    .filter((match, index) => index === 0 || match.score >= topScore - 6)
    .slice(0, sourceCap)
    .map((match) => match.chunk);
};

const clientIp = (request) =>
  request.headers.get('CF-Connecting-IP') ||
  request.headers.get('X-Forwarded-For')?.split(',')[0]?.trim() ||
  'anonymous';

const allowedByRateLimit = (request, env) => {
  const limit = Number(env.AI_RATE_LIMIT || DEFAULT_RATE_LIMIT);
  if (!Number.isFinite(limit) || limit <= 0) return true;

  const key = clientIp(request);
  const now = Date.now();
  const bucket = buckets.get(key);
  if (!bucket || now > bucket.resetAt) {
    buckets.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  bucket.count += 1;
  return bucket.count <= limit;
};

const loadKnowledge = async (request, env) => {
  const url = new URL('/data/visit-knowledge.json', request.url);
  const response = env.ASSETS
    ? await env.ASSETS.fetch(new Request(url.toString(), { method: 'GET' }))
    : await fetch(url.toString());

  if (!response.ok) throw new Error(`Knowledge file unavailable: ${response.status}`);
  return response.json();
};

const extractOutputText = (payload) => {
  if (typeof payload.output_text === 'string') return payload.output_text;
  const content = payload.output
    ?.flatMap((item) => item.content || [])
    ?.map((part) => part.text || part.output_text || '')
    ?.filter(Boolean)
    ?.join('\n');
  return content || '';
};

const parseModelAnswer = (text, fallbackSources) => {
  try {
    const parsed = JSON.parse(text);
    return {
      answer: String(parsed.answer || '').trim(),
      sources: fallbackSources,
      matchedTopics: Array.isArray(parsed.matchedTopics) ? parsed.matchedTopics : []
    };
  } catch {
    return {
      answer: text.trim(),
      sources: fallbackSources,
      matchedTopics: []
    };
  }
};

const cleanJsonAnswerText = (answer = '') => {
  const text = String(answer).trim();
  const answerMatch = text.match(/^\{?\s*"answer"\s*:\s*"((?:\\.|[^"\\])*)/);
  if (!answerMatch) return text;
  try {
    return JSON.parse(`"${answerMatch[1]}"`).trim();
  } catch {
    return answerMatch[1].replace(/\\"/g, '"').trim();
  }
};

const cleanAnswer = (answer = '') =>
  cleanJsonAnswerText(answer)
    .replace(/^The closest Pavilion information I found is under [^.]+\.?\s*/i, '')
    .trim();

const fallbackAnswer = (chunks, question) => {
  if (!chunks.length) {
    return {
      answer:
        'I do not have a reliable answer in the current Pavilion content. Please use Contact or call the Box Office so staff can help.',
      sources: [],
      matchedTopics: [],
      fallbackUsed: true
    };
  }

  const best = chunks[0];
  const quote = quoteForMatch(best, question);
  return {
    answer:
      `${cleanAnswer(quote) || `Please see ${best.title} for the most relevant Pavilion information.`} The link below has the full Pavilion context if you want to keep checking details.`,
    sources: sourceList(displaySourceChunks(chunks, question)),
    matchedTopics: chunks.map((chunk) => chunk.topicSlug || chunk.sourceType).filter(Boolean),
    fallbackUsed: true,
    question
  };
};

const askOpenAI = async ({ env, question, chunks }) => {
  const controller = new AbortController();
  const timeoutMs = Number(env.AI_TIMEOUT_MS || DEFAULT_TIMEOUT_MS);
  const timeout = setTimeout(() => controller.abort(), Number.isFinite(timeoutMs) ? timeoutMs : DEFAULT_TIMEOUT_MS);

  const contextText = chunks
    .map(
      (chunk, index) =>
        `[${index + 1}] ${chunk.title}\nURL: ${chunk.url}\nTYPE: ${chunk.sourceType || 'site'}\nCONTENT: ${chunk.body}`
    )
    .join('\n\n');

  try {
    const response = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      signal: controller.signal,
      headers: {
        Authorization: `Bearer ${env.AI_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: env.AI_MODEL || 'gpt-5-mini',
        store: false,
        max_output_tokens: 650,
        instructions:
          'You are The Cynthia Woods Mitchell Pavilion guest-services assistant. Answer the guest question directly using only the provided Pavilion context. Use a warm, helpful, welcoming tone, like a calm venue staff member helping a guest plan their night. Prefer 2 to 3 concise sentences when the context supports it, and include one practical next step when useful. If the answer spans several Pavilion programs or pages, briefly connect the dots in plain language. If asked about an event time, include the show-begins time when it is present. If asked whether an item is allowed, say what is allowed and what is not allowed when both appear in context. If asked how to bypass, sneak, hide or evade a rule, refuse to help bypass policy and state the relevant Pavilion rule instead. Do not use the phrase "closest Pavilion information." Do not invent policies, dates, prices, exceptions or artist-specific details. If the context does not contain a reliable answer, say that and direct the guest to contact The Pavilion or the Box Office. Do not include raw URLs, Markdown, bullets or source links in the answer text; source links are rendered separately by the website. Return only the guest-facing answer text, not JSON.',
        input: `Guest question: ${question}\n\nApproved Pavilion context:\n${contextText}`
      })
    });

    if (!response.ok) {
      const detail = await response.text();
      throw new Error(`OpenAI request failed: ${response.status} ${detail.slice(0, 160)}`);
    }

    return response.json();
  } finally {
    clearTimeout(timeout);
  }
};

export const onRequestPost = async ({ request, env }) => {
  if (env.AI_PROVIDER && env.AI_PROVIDER !== 'openai') {
    return json({ error: 'AI provider is not configured for OpenAI.' }, 503);
  }

  if (!allowedByRateLimit(request, env)) {
    return json({ error: 'Please wait a moment before asking another question.' }, 429);
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: 'Invalid request body.' }, 400);
  }

  const question = sanitizeQuestion(body?.question || body?.query || '');
  if (!question) return json({ error: 'Ask a question first.' }, 400);
  if (String(body?.question || body?.query || '').length > MAX_QUESTION_LENGTH * 2) {
    return json({ error: 'Please shorten the question and try again.' }, 400);
  }

  let knowledge = [];
  let chunks = [];
  try {
    knowledge = await loadKnowledge(request, env);
    const maxChunks = Number(env.AI_MAX_CONTEXT_CHUNKS || DEFAULT_MAX_CONTEXT_CHUNKS);
    chunks = relevantChunks(knowledge, question, Number.isFinite(maxChunks) ? maxChunks : DEFAULT_MAX_CONTEXT_CHUNKS);
  } catch {
    return json({
      answer:
        'I cannot reach the Pavilion visit content right now. Please use Contact or call the Box Office so staff can help.',
      sources: [],
      matchedTopics: [],
      fallbackUsed: true
    });
  }

  if (POLICY_EVASION_PATTERN.test(question)) return json(policyGuardAnswer(knowledge, chunks));
  if (!env.AI_API_KEY || !chunks.length) return json(fallbackAnswer(chunks, question));

  try {
    const payload = await askOpenAI({ env, question, chunks });
    const modelAnswer = parseModelAnswer(extractOutputText(payload), sourceList(displaySourceChunks(chunks, question)));
    return json({
      answer: cleanAnswer(modelAnswer.answer) || fallbackAnswer(chunks, question).answer,
      sources: modelAnswer.sources,
      matchedTopics: modelAnswer.matchedTopics,
      fallbackUsed: false
    });
  } catch {
    return json(fallbackAnswer(chunks, question));
  }
};

export const onRequestOptions = async () => json({});

export const onRequestGet = async () => json({ error: 'Method not allowed.' }, 405);
