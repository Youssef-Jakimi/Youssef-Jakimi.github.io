/**
 * Single source of truth for site content. Edit copy here, not in components.
 */

export const SITE = {
  name: 'Youssef Jakimi',
  role: 'AI Systems Engineer',
  location: 'Morocco',
  email: 'jakimiyoussef@gmail.com',
  phone: '+212 7 18 04 12 86',
  github: 'https://github.com/Youssef-Jakimi',
  linkedin: 'https://linkedin.com/in/jakimiyoussef',
  url: 'https://youssef-jakimi.github.io',
  tagline: 'I build production AI systems — agents, backends, and the products around them.',
  description:
    'Youssef Jakimi — AI Systems Engineer. I design and ship production-grade, multi-tenant AI products end to end: agent architectures, distributed backends, and the interfaces on top.',
} as const;

export type Stat = { value: string; label: string };

export const STATS: Stat[] = [
  { value: '7-node', label: 'LangGraph agent pipeline in production' },
  { value: '4', label: 'languages handled by one AI agent' },
  { value: '3', label: 'messaging channels unified (WhatsApp · IG · FB)' },
  { value: '49', label: 'database migrations on the flagship SaaS' },
  { value: '$10K', label: 'IBM hackathon — built solo in 48h' },
];

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  year: string;
  category: 'AI SaaS' | 'AI Tooling' | 'Applied ML' | 'Backend Systems';
  featured: boolean;
  summary: string;
  highlights: string[];
  stack: string[];
  metrics?: { value: string; label: string }[];
  links?: { label: string; href: string }[];
  accent?: string; // tailwind gradient stops
};

export const PROJECTS: Project[] = [
  {
    slug: 'dental-ai',
    name: 'Dental AI',
    tagline: 'A production multi-tenant SaaS with an autonomous AI receptionist.',
    year: '2025 — Present',
    category: 'AI SaaS',
    featured: true,
    accent: 'from-accent-500 to-glow-500',
    summary:
      'A full SaaS platform that runs the front desk for dental clinics. One conversational agent books, reschedules, cancels, and triages emergencies over WhatsApp, Instagram and Facebook — in Darija, French, Arabic and English — while clinic owners watch every conversation live and can take over at any time.',
    highlights: [
      'A 7-node LangGraph agent pipeline (intent → clarification routing → multi-agent dispatch → critic loop → memory) with 5 specialized sub-agents that hand off by priority.',
      'True multi-tenancy: one shared Postgres, clinic isolation enforced at the ORM layer by SQLAlchemy event listeners — a tenant safety net, not just WHERE clauses.',
      'Provider-abstracted messaging (Twilio + Meta Cloud API) with Fernet-encrypted per-clinic credentials and Redis sliding-window rate limiting.',
      'Usage-based billing with overage ledgers, RBAC, JWT auth with httpOnly refresh, WebSocket live-chat takeover, and a self-improvement loop that turns human corrections into training data.',
    ],
    stack: ['Python', 'FastAPI', 'LangGraph', 'PostgreSQL', 'Redis', 'ChromaDB', 'React', 'Next.js', 'Docker'],
    metrics: [
      { value: '7-node', label: 'agent pipeline' },
      { value: '4 langs', label: 'one agent' },
      { value: '49', label: 'migrations' },
    ],
  },
  {
    slug: 'reposense',
    name: 'RepoSense',
    tagline: 'Paste a GitHub URL. Understand and risk-score any codebase in seconds.',
    year: '2026',
    category: 'AI Tooling',
    featured: true,
    accent: 'from-glow-500 to-accent-600',
    summary:
      'A developer tool built for the IBM Bob hackathon ($10K prize pool). Drop in a repository and RepoSense ingests every source file, embeds it into a vector store, then runs two parallel pipelines: a conversational RAG engine to explore the code, and a risk engine that produces an instant 0–100 score across test coverage, complexity, and security.',
    highlights: [
      'Two engines on one ingestion: a RAG Q&A pipeline and an automated risk-review pipeline, both grounded in the full repository — not snippets.',
      'Instant payoff: a 0–100 Risk Score appears the moment ingestion finishes, with sub-scores for coverage, complexity and security smells.',
      'GitHub REST ingestion → semantic chunking → ChromaDB embeddings → LangChain RAG, served by FastAPI and deployed on Vercel.',
      'Built solo, end to end, in a 48-hour hackathon window.',
    ],
    stack: ['Python', 'FastAPI', 'LangChain', 'ChromaDB', 'IBM watsonx', 'Vercel'],
    metrics: [
      { value: '0–100', label: 'risk score' },
      { value: '2', label: 'engines, 1 ingest' },
      { value: '48h', label: 'solo build' },
    ],
  },
  {
    slug: 'tradai',
    name: 'TradAI',
    tagline: 'A disciplined quant trading system — where the LLM analyzes, never trades.',
    year: '2026',
    category: 'Applied ML',
    featured: false,
    accent: 'from-accent-400 to-accent-700',
    summary:
      'A modular, data-driven quantitative trading system with a strict separation of concerns: market data → features → signal models → strategy → risk engine → execution → logging → offline training. The LLM sits outside the trading loop as an analyst that reads logs and proposes validated improvements.',
    highlights: [
      'Pipeline architecture with the risk engine holding final authority — capital protection overrides every other signal.',
      'Signal models are explainable and backtestable (XGBoost baseline); no black-box, LLM-driven trade decisions.',
      'Offline learning loop: extract dataset from immutable logs → train → walk-forward backtest → deploy only if Sharpe/drawdown improve.',
      'Engineering judgment over hype: explicitly refuses online learning with real money.',
    ],
    stack: ['Python', 'XGBoost', 'LangGraph', 'PostgreSQL', 'Redis', 'Docker'],
  },
  {
    slug: 'gestion-hotel',
    name: 'GestionHotel',
    tagline: 'A multi-tenant hotel SaaS built on textbook Clean Architecture.',
    year: '2026',
    category: 'Backend Systems',
    featured: false,
    accent: 'from-accent-600 to-glow-600',
    summary:
      'A multi-tenant hotel-management SaaS with three portals (admin, reception, client). Five Maven modules in strict Clean Architecture, a rich domain model (tariff calculation, cancellation penalties, a reservation state machine), and an architecture enforced by ArchUnit and verified with Testcontainers.',
    highlights: [
      'Clean Architecture across 5 Maven modules — dependency rules enforced in CI by ArchUnit.',
      'Domain-driven core: TariffCalculator, CancellationPenaltyCalculator and a ReservationStateMachine with ≥90% test coverage.',
      'Java 21 + Spring Boot 3.3 backend, React 18 + TypeScript (strict) + Tailwind frontend, Flyway migrations.',
      'Integration tests on real MySQL via Testcontainers — the architecture is tested, not just the code.',
    ],
    stack: ['Java 21', 'Spring Boot', 'React', 'TypeScript', 'MySQL', 'Flyway', 'Testcontainers'],
  },
  {
    slug: 'yr-hotels',
    name: 'YR Hotels',
    tagline: 'Multi-service booking with a fine-tuned GPT-4o concierge.',
    year: '2024 — 2025',
    category: 'AI SaaS',
    featured: false,
    accent: 'from-glow-400 to-accent-500',
    summary:
      'A hotel platform handling rooms, restaurant tables and spa sessions through one booking flow, with a real-time admin dashboard. Its concierge chatbot runs on a custom fine-tuned GPT-4o model scoped tightly to the hotel’s services.',
    highlights: [
      'Custom fine-tuned GPT-4o model as a domain-scoped booking concierge.',
      'Unified booking across three service types with a live admin dashboard.',
      'Laravel 11 + MySQL, OAuth, and the OpenAI API integrated end to end.',
    ],
    stack: ['Laravel', 'PHP', 'MySQL', 'OpenAI (fine-tuned GPT-4o)'],
  },
  {
    slug: 'opxgnn',
    name: 'OPxGNN',
    tagline: 'Graph neural networks vs. tabular ML for energy-grid congestion.',
    year: '2025',
    category: 'Applied ML',
    featured: false,
    accent: 'from-accent-500 to-accent-800',
    summary:
      'A research project comparing a tabular ML baseline (XGBoost) against a graph neural network (GCN via PyTorch Geometric) for detecting congestion across a 370-client electricity distribution network — with leak-free temporal splits over 2011–2014 data.',
    highlights: [
      'Built a similarity graph from consumption-profile correlations to feed a GCN.',
      'Strict anti-leakage temporal split (train 2011–13, val/test 2014) — no lookahead.',
      'XGBoost baseline vs. GNN comparison on a real 711MB UCI dataset.',
    ],
    stack: ['Python', 'PyTorch Geometric', 'XGBoost', 'pandas', 'scikit-learn'],
  },
];

export type Capability = {
  title: string;
  blurb: string;
  points: string[];
};

export const CAPABILITIES: Capability[] = [
  {
    title: 'AI Agent Architecture',
    blurb: 'Multi-step, multi-agent systems that reason, route, and recover — not single prompts.',
    points: ['LangGraph pipelines & sub-agents', 'RAG + vector memory', 'Critic / self-correction loops', 'Tool use & escalation'],
  },
  {
    title: 'Distributed Backends',
    blurb: 'Multi-tenant systems with the unglamorous parts done right.',
    points: ['Tenant isolation & RBAC', 'JWT auth, encrypted secrets', 'Usage-based billing', 'Redis, WebSockets, queues'],
  },
  {
    title: 'Applied Machine Learning',
    blurb: 'Models that are explainable, backtestable, and shipped with discipline.',
    points: ['XGBoost & GNNs', 'Leak-free pipelines', 'Walk-forward validation', 'Offline training loops'],
  },
  {
    title: 'Product & Frontend',
    blurb: 'I ship the dashboards and the marketing site, not just the API.',
    points: ['Next.js / React / TypeScript', 'Cinematic, accessible UI', 'Real-time dashboards', 'i18n (FR/AR/EN)'],
  },
];

export const STACK_GROUPS: { label: string; items: string[] }[] = [
  { label: 'languages', items: ['Python', 'Java', 'TypeScript', 'PHP', 'SQL', 'C/C++'] },
  { label: 'ai', items: ['LangGraph', 'LangChain', 'RAG', 'OpenAI / o3', 'IBM watsonx', 'fine-tuning'] },
  { label: 'backend', items: ['FastAPI', 'Spring Boot', 'Laravel', 'PostgreSQL', 'Redis', 'ChromaDB'] },
  { label: 'frontend', items: ['Next.js', 'React', 'Tailwind', 'Framer Motion'] },
  { label: 'infra', items: ['Docker', 'Vercel', 'GCP', 'Linux', 'Git'] },
];

export type TimelineItem = { period: string; title: string; org: string; detail: string };

export const TIMELINE: TimelineItem[] = [
  {
    period: 'Oct 2025 — Present',
    title: 'State Engineering Degree — Software Engineering & AI',
    org: 'FST Errachidia',
    detail: 'First-year engineering student, building production systems in parallel with coursework.',
  },
  {
    period: 'Apr — Jun 2025',
    title: 'Back-End Development Intern',
    org: 'Provincial Delegation of Health & Social Protection',
    detail: 'Designed and built an intranet mail-management platform — Spring Boot, REST API, JWT.',
  },
  {
    period: 'Jul 2024',
    title: 'Full-Stack Development Intern',
    org: 'Provincial Delegation of Health & Social Protection',
    detail: 'IT-equipment management web app in Laravel — CRUD, complaint tracking, authentication.',
  },
  {
    period: '2023 — 2025',
    title: 'University Technology Diploma — Computer Engineering',
    org: 'EST Fès',
    detail: 'Foundations in software engineering, databases and systems.',
  },
];

export const CERTS = [
  'GCP Core Infrastructure',
  'Intro to Docker',
  'JUnit',
  'Fundamentals of Building AI Agents — IBM',
];
