'use client';

import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '@/lib/data';
import { cn } from '@/lib/utils';

const FILTERS = ['All', 'AI SaaS', 'AI Tooling', 'Applied ML', 'Backend Systems'] as const;

export default function Work() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('All');

  const projects = useMemo(() => {
    const list = filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === filter);
    // Keep featured projects first for visual rhythm.
    return [...list].sort((a, b) => Number(b.featured) - Number(a.featured));
  }, [filter]);

  return (
    <section id="work" className="section relative">
      <div className="container-w">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Selected work"
            title={<>Systems I&apos;ve designed, built, and shipped.</>}
            description="A few projects that show the range — from a production multi-tenant AI SaaS to a hackathon dev tool and applied-ML research."
          />
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                data-cursor="hover"
                className={cn(
                  'rounded-full border px-4 py-2 text-xs transition-all duration-300',
                  filter === f
                    ? 'border-accent-500/50 bg-accent-500/10 text-accent-200'
                    : 'border-edge text-ink-secondary hover:border-edge-strong hover:text-ink',
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {projects.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
