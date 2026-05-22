'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import MagneticButton from '@/components/ui/MagneticButton';
import PipelineVisual from '@/components/ui/PipelineVisual';
import { SITE } from '@/lib/data';

const TITLE_LINES = ['AI Systems', 'Engineer'];

const lineVariant = {
  hidden: { y: '110%' },
  visible: (i: number) => ({
    y: 0,
    transition: { duration: 1.05, delay: 0.28 + i * 0.13, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <section ref={ref} id="top" className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Faint grid */}
      <div className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:64px_64px] [mask-image:radial-gradient(ellipse_90%_80%_at_50%_30%,black,transparent)]" />
      {/* Bottom fade to next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-base to-transparent" />
      {/* Radial accent bloom top-left */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-accent-500/[0.07] blur-3xl" />

      <motion.div style={{ y, opacity }} className="container-w relative z-10 pt-24 pb-20">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_460px]">

          {/* ── Left: text ── */}
          <div className="flex flex-col">
            {/* Availability pill */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mb-9 inline-flex items-center gap-2.5 self-start rounded-full glass px-4 py-2 text-xs text-ink-secondary"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-400" />
              </span>
              Available for select projects &amp; roles
            </motion.div>

            {/* Kinetic headline */}
            <h1 className="text-display-xl font-semibold">
              {TITLE_LINES.map((line, i) => (
                <span key={line} className="block overflow-hidden pb-[0.06em]">
                  <motion.span
                    className={i === 0 ? 'inline-block' : 'inline-block text-gradient'}
                    variants={lineVariant}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>

            {/* Thesis */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.72, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 max-w-lg text-lg leading-relaxed text-ink-secondary"
            >
              I design and ship production AI products end to end — agent
              architectures, multi-tenant backends, and the interfaces on top.{' '}
              <span className="text-ink">One person, the whole system.</span>
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.88 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <MagneticButton href="#work">
                View selected work
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-0.5">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </MagneticButton>
              <MagneticButton href="#contact" variant="ghost">
                Get in touch
              </MagneticButton>
            </motion.div>

            {/* Identity strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
              className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-wider text-ink-tertiary"
            >
              <span>{SITE.location}</span>
              <span className="h-1 w-1 rounded-full bg-ink-tertiary/60" />
              <span>LangGraph · FastAPI · Next.js</span>
              <span className="h-1 w-1 rounded-full bg-ink-tertiary/60" />
              <span>FR · AR · EN</span>
            </motion.div>
          </div>

          {/* ── Right: pipeline visual ── */}
          <motion.div
            initial={{ opacity: 0, x: 24, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.3, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:block"
          >
            {/* Ambient glow */}
            <div className="absolute -inset-6 rounded-[32px] bg-accent-500/[0.08] blur-3xl" />

            {/* Card */}
            <div className="relative overflow-hidden rounded-[20px] border border-edge bg-base-800/60 shadow-card">
              {/* Top accent line */}
              <div className="absolute inset-x-0 top-0 h-px bg-accent-gradient opacity-50" />

              {/* Grid texture */}
              <div className="absolute inset-0 bg-grid-faint [background-size:32px_32px] opacity-60" />

              {/* Canvas */}
              <PipelineVisual className="relative z-10 h-[500px] w-full" />

              {/* Bottom info bar */}
              <div className="relative z-10 flex items-center justify-between border-t border-edge bg-base-900/60 px-5 py-3.5">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-tertiary">
                  LangGraph · 7-node pipeline
                </span>
                <span className="flex items-center gap-1.5 font-mono text-[10px] text-accent-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-400 animate-pulse-glow" />
                  Live architecture
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink-tertiary">Scroll</span>
        <span className="relative h-10 w-px overflow-hidden bg-edge-strong">
          <motion.span
            className="absolute inset-x-0 top-0 h-4 bg-accent-400"
            animate={{ y: [-16, 40] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </span>
      </motion.div>
    </section>
  );
}
