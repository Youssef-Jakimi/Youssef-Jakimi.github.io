'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';

const PIPELINE = [
  { n: '01', name: 'Ingestion', note: 'Normalize · resolve patient · compress memory' },
  { n: '02', name: 'Language', note: 'Darija · French · Arabic · English' },
  { n: '03', name: 'Intent', note: 'Vector memory + LLM extraction · sentiment' },
  { n: '04', name: 'Clarify Router', note: 'Confidence → decide → route or escalate' },
  { n: '05', name: 'Dispatch', note: '5 sub-agents · priority handoff' },
  { n: '06', name: 'Respond', note: 'Tone modifier + critic self-correction' },
  { n: '07', name: 'Learn', note: 'Store to vector memory · label · improve' },
];

const CHANNELS = ['WhatsApp', 'Instagram', 'Facebook'];

const PILLARS = [
  {
    title: 'Multi-tenant by design',
    body: 'One shared Postgres. Clinic isolation enforced at the ORM layer by SQLAlchemy event listeners — a safety net that injects the tenant filter on every query, not a hopeful WHERE clause.',
  },
  {
    title: 'Secure & metered',
    body: 'Fernet-encrypted per-clinic credentials, JWT with httpOnly refresh + Redis JTI, RBAC across three roles, and usage-based billing with an overage ledger.',
  },
  {
    title: 'Learns from humans',
    body: 'Operators take over any live chat via WebSocket. Their corrections feed a self-improvement loop that promotes approved examples into the training dataset.',
  },
];

export default function CaseStudy() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const lineScale = useTransform(scrollYProgress, [0.15, 0.6], [0, 1]);

  return (
    <section id="case-study" className="section relative overflow-hidden">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-radial-fade opacity-60 blur-3xl" />

      <div className="container-w relative">
        <SectionHeading
          eyebrow="Flagship case study"
          title={
            <>
              Dental AI — an autonomous front desk,<br className="hidden md:block" /> running as real SaaS.
            </>
          }
          description="The clearest proof of how I work: not a feature, but a full system. An AI agent that books, reschedules, cancels and triages — across channels and languages — wrapped in the billing, auth and observability a real product needs."
        />

        {/* Pipeline visualization */}
        <div ref={ref} className="mt-16">
          <Reveal>
            <div className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-wider text-ink-tertiary">
              <span className="h-px w-6 bg-accent-400/60" />
              The agent pipeline · LangGraph
            </div>
          </Reveal>

          {/* Channels in */}
          <div className="mb-8 flex flex-wrap items-center gap-3">
            {CHANNELS.map((c, i) => (
              <Reveal key={c} delay={i}>
                <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm text-ink-secondary">
                  <span className="h-2 w-2 rounded-full bg-accent-400" />
                  {c}
                </span>
              </Reveal>
            ))}
            <span className="font-mono text-ink-tertiary">→ one agent</span>
          </div>

          {/* Nodes */}
          <div className="relative">
            {/* Progress line (desktop) */}
            <div className="absolute left-0 right-0 top-7 hidden h-px bg-edge lg:block">
              <motion.div className="h-full origin-left bg-accent-gradient" style={{ scaleX: lineScale }} />
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-7">
              {PIPELINE.map((node, i) => (
                <motion.div
                  key={node.n}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative rounded-xl border border-edge bg-base-800/60 p-4 transition-colors hover:border-accent-500/40"
                >
                  <div className="mb-3 grid h-8 w-8 place-items-center rounded-full border border-accent-500/40 bg-base-900 font-mono text-xs text-accent-300 transition-colors group-hover:bg-accent-500/15">
                    {node.n}
                  </div>
                  <p className="text-sm font-medium text-ink">{node.name}</p>
                  <p className="mt-1 text-xs leading-relaxed text-ink-tertiary">{node.note}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Pillars */}
        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i}>
              <div className="h-full rounded-card border border-edge bg-base-800/30 p-7">
                <h3 className="text-lg font-semibold text-ink">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-secondary">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
