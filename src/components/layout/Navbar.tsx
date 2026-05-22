'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { SITE } from '@/lib/data';

const LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'Case study', href: '#case-study' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'About', href: '#about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={cn(
          'flex w-full max-w-5xl items-center justify-between gap-4 rounded-full px-5 py-2.5 transition-all duration-500',
          scrolled ? 'glass shadow-card' : 'border border-transparent bg-transparent',
        )}
      >
        <a href="#top" className="group flex items-center gap-2.5" data-cursor="hover">
          <span className="relative grid h-8 w-8 place-items-center rounded-full bg-accent-gradient text-sm font-bold text-white shadow-glow">
            YJ
          </span>
          <span className="hidden text-sm font-medium tracking-tight text-ink sm:block">
            Youssef Jakimi
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm text-ink-secondary transition-colors hover:text-ink"
              data-cursor="hover"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-full bg-accent-gradient px-5 py-2 text-sm font-medium text-white shadow-glow transition-shadow hover:shadow-glow-lg sm:block"
            data-cursor="hover"
          >
            Get in touch
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="grid h-9 w-9 place-items-center rounded-full glass md:hidden"
          >
            <div className="flex flex-col gap-1.5">
              <span className={cn('h-px w-4 bg-ink transition-transform', open && 'translate-y-[3px] rotate-45')} />
              <span className={cn('h-px w-4 bg-ink transition-transform', open && '-translate-y-[3px] -rotate-45')} />
            </div>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-20 mx-4 w-[calc(100%-2rem)] max-w-5xl rounded-card glass p-4 md:hidden"
          >
            <div className="flex flex-col">
              {[...LINKS, { label: 'Get in touch', href: '#contact' }].map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm text-ink-secondary transition-colors hover:bg-white/5 hover:text-ink"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
