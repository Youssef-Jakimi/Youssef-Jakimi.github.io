'use client';

import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import { CAPABILITIES } from '@/lib/data';

export default function Capabilities() {
  return (
    <section id="capabilities" className="section relative">
      <div className="container-w">
        <SectionHeading
          eyebrow="How I think"
          title={<>Four layers I move fluidly between.</>}
          description="Most of the value is in connecting them — an agent that's brilliant but unbillable isn't a product. I build across the whole stack so the seams disappear."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-card border border-edge bg-edge sm:grid-cols-2">
          {CAPABILITIES.map((c, i) => (
            <Reveal key={c.title} delay={i % 2} className="bg-base-900">
              <div className="group flex h-full flex-col gap-4 p-8 transition-colors hover:bg-base-800/60 md:p-10">
                <span className="font-mono text-xs text-ink-tertiary">0{i + 1}</span>
                <h3 className="text-xl font-semibold text-ink">{c.title}</h3>
                <p className="text-sm leading-relaxed text-ink-secondary">{c.blurb}</p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {c.points.map((p) => (
                    <li
                      key={p}
                      className="rounded-full border border-edge px-3 py-1 text-xs text-ink-secondary transition-colors group-hover:border-accent-500/30"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
