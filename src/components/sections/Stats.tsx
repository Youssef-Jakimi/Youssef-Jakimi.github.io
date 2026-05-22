'use client';

import { STATS } from '@/lib/data';

export default function Stats() {
  // Duplicate the list so the marquee can loop seamlessly.
  const row = [...STATS, ...STATS];

  return (
    <section aria-label="Highlights" className="relative border-y border-edge py-8">
      <div className="mask-fade-r overflow-hidden">
        <div className="flex w-max animate-marquee gap-12 pr-12 hover:[animation-play-state:paused]">
          {row.map((s, i) => (
            <div key={i} className="flex shrink-0 items-baseline gap-3">
              <span className="font-display text-2xl font-semibold text-gradient">{s.value}</span>
              <span className="text-sm text-ink-secondary">{s.label}</span>
              <span className="ml-9 h-4 w-px bg-edge" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
