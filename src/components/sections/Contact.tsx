'use client';

import { motion } from 'framer-motion';
import MagneticButton from '@/components/ui/MagneticButton';
import Reveal from '@/components/ui/Reveal';
import AuroraBackground from '@/components/ui/AuroraBackground';
import { SITE } from '@/lib/data';

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-32 md:py-44">
      <AuroraBackground className="absolute inset-0 h-full w-full opacity-50" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-base via-transparent to-base" />

      <div className="container-n relative z-10 flex flex-col items-center text-center">
        <Reveal>
          <span className="eyebrow">
            <span className="h-px w-6 bg-accent-400/60" />
            Let&apos;s build
          </span>
        </Reveal>

        <Reveal delay={1}>
          <h2 className="mt-6 text-display-lg font-semibold text-balance">
            Have a system worth <span className="text-gradient">building right?</span>
          </h2>
        </Reveal>

        <Reveal delay={2}>
          <p className="mt-6 max-w-xl text-lg text-ink-secondary">
            Whether you&apos;re a founder needing a product built, a team hiring, or you just want to
            talk agents and architecture — my inbox is open.
          </p>
        </Reveal>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton href={`mailto:${SITE.email}`}>
            {SITE.email}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </MagneticButton>
          <MagneticButton href={SITE.github} variant="ghost">
            GitHub
          </MagneticButton>
          <MagneticButton href={SITE.linkedin} variant="ghost">
            LinkedIn
          </MagneticButton>
        </motion.div>

        <Reveal delay={3}>
          <p className="mt-10 font-mono text-xs text-ink-tertiary">
            {SITE.phone} · {SITE.location}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
