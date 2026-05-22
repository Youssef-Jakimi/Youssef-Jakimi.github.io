'use client';

import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { Project } from '@/lib/data';

/**
 * Interactive project card with cursor-tracked spotlight + subtle 3D tilt.
 * Featured cards span two columns and surface metrics + highlights.
 */
export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);

  // Pointer position (0..1) for spotlight + tilt
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rx = useSpring(useTransform(py, [0, 1], [6, -6]), { stiffness: 150, damping: 18 });
  const ry = useSpring(useTransform(px, [0, 1], [-6, 6]), { stiffness: 150, damping: 18 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
    el.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`);
    el.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay: (index % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={onMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
        px.set(0.5);
        py.set(0.5);
      }}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1200 }}
      data-cursor="hover"
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-card border border-edge bg-base-800/40 p-7 transition-colors duration-500 hover:border-edge-strong md:p-9',
        project.featured ? 'md:col-span-2' : 'md:col-span-1',
      )}
    >
      {/* Cursor spotlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: 'radial-gradient(420px circle at var(--mx) var(--my), rgba(124,108,255,0.14), transparent 60%)',
        }}
      />
      {/* Top gradient hairline */}
      <div className={cn('absolute inset-x-0 top-0 h-px bg-gradient-to-r opacity-60', project.accent)} />

      <div className="relative z-10 flex flex-col gap-5" style={{ transform: 'translateZ(40px)' }}>
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-ink-tertiary">/{String(index + 1).padStart(2, '0')}</span>
            <span className="rounded-full border border-edge px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-accent-300">
              {project.category}
            </span>
          </div>
          <span className="font-mono text-xs text-ink-tertiary">{project.year}</span>
        </div>

        <div>
          <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">{project.name}</h3>
          <p className="mt-2 text-base text-ink-secondary">{project.tagline}</p>
        </div>

        {project.featured && (
          <p className="max-w-2xl text-sm leading-relaxed text-ink-secondary/90">{project.summary}</p>
        )}

        {project.featured && project.highlights && (
          <ul className="grid gap-2.5 md:grid-cols-2">
            {project.highlights.slice(0, 4).map((h) => (
              <li key={h} className="flex gap-2.5 text-sm text-ink-secondary">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-gradient" />
                <span className="leading-relaxed">{h}</span>
              </li>
            ))}
          </ul>
        )}

        {project.metrics && (
          <div className="mt-1 flex flex-wrap gap-6">
            {project.metrics.map((m) => (
              <div key={m.label}>
                <div className="font-display text-xl font-semibold text-gradient">{m.value}</div>
                <div className="text-xs text-ink-tertiary">{m.label}</div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {project.stack.map((s) => (
            <span key={s} className="rounded-full bg-white/[0.04] px-3 py-1 font-mono text-[11px] text-ink-secondary">
              {s}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
