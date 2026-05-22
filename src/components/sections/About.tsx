'use client';

import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import { TIMELINE, CERTS, SITE } from '@/lib/data';

export default function About() {
  return (
    <section id="about" className="section relative">
      <div className="container-w grid gap-14 lg:grid-cols-[1fr_1.1fr]">
        {/* Left: narrative */}
        <div className="flex flex-col gap-6">
          <SectionHeading
            eyebrow="About"
            title={<>A builder who started shipping before being asked to.</>}
          />
          <Reveal delay={1}>
            <div className="space-y-4 text-base leading-relaxed text-ink-secondary">
              <p>
                I&apos;m Youssef — a Software Engineering &amp; AI student at FST Errachidia,
                Morocco. While most of my coursework is just beginning, I&apos;ve already taken a
                multi-tenant AI SaaS into production and built tools developers actually want to use.
              </p>
              <p>
                I&apos;m happiest at the intersection of <span className="text-ink">AI agents</span>,{' '}
                <span className="text-ink">distributed backends</span>, and the{' '}
                <span className="text-ink">product</span> wrapped around them — the place where
                architecture decisions decide whether something is a demo or a business.
              </p>
              <p>
                I work autonomously in production environments, ship in three languages
                (FR / AR / EN), and care about the unglamorous parts: isolation, security, billing,
                observability. The parts that make AI trustworthy.
              </p>
            </div>
          </Reveal>

          <Reveal delay={2}>
            <div className="flex flex-wrap gap-2 pt-2">
              {CERTS.map((c) => (
                <span key={c} className="rounded-full border border-edge px-3.5 py-1.5 text-xs text-ink-secondary">
                  {c}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Right: timeline */}
        <Reveal delay={1}>
          <ol className="relative space-y-8 border-l border-edge pl-7">
            {TIMELINE.map((t) => (
              <li key={t.title} className="relative">
                <span className="absolute -left-[34px] top-1 grid h-4 w-4 place-items-center rounded-full border border-accent-500/50 bg-base-900">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
                </span>
                <p className="font-mono text-xs uppercase tracking-wider text-accent-300">{t.period}</p>
                <h3 className="mt-1.5 text-base font-semibold text-ink">{t.title}</h3>
                <p className="text-sm text-ink-secondary">{t.org}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-tertiary">{t.detail}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
