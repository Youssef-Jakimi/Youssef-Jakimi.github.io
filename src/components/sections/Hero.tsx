'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import AuroraBackground from '@/components/ui/AuroraBackground';
import MagneticButton from '@/components/ui/MagneticButton';
import { SITE } from '@/lib/data';

const TITLE = ['AI Systems', 'Engineer'];

const word = {
  hidden: { y: '110%' },
  visible: (i: number) => ({
    y: 0,
    transition: { duration: 1, delay: 0.3 + i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);

  return (
    <section ref={ref} id="top" className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Backgrounds */}
      <AuroraBackground className="absolute inset-0 h-full w-full opacity-70" />
      <div className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:64px_64px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-base to-transparent" />

      <motion.div style={{ y, opacity, scale }} className="container-w relative z-10 pt-28">
        {/* Availability pill */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-8 inline-flex items-center gap-2.5 rounded-full glass px-4 py-2 text-xs text-ink-secondary"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-400" />
          </span>
          Available for select projects & roles
        </motion.div>

        {/* Kinetic headline */}
        <h1 className="text-display-xl font-semibold">
          {TITLE.map((line, i) => (
            <span key={line} className="block overflow-hidden pb-[0.06em]">
              <motion.span
                className={i === 0 ? 'inline-block' : 'inline-block text-gradient'}
                variants={word}
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
          transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-ink-secondary md:text-xl"
        >
          I design and ship production AI products end to end — agent
          architectures, multi-tenant backends, and the interfaces on top.
          <span className="text-ink"> One person, the whole system.</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85 }}
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
          className="mt-16 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-wider text-ink-tertiary"
        >
          <span>{SITE.location}</span>
          <span className="h-1 w-1 rounded-full bg-ink-tertiary/60" />
          <span>LangGraph · FastAPI · Next.js</span>
          <span className="h-1 w-1 rounded-full bg-ink-tertiary/60" />
          <span>FR · AR · EN</span>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
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
