'use client';

import Reveal from '@/components/ui/Reveal';
import { STACK_GROUPS } from '@/lib/data';

export default function Stack() {
  return (
    <section className="section relative">
      <div className="container-w">
        <Reveal>
          <div className="overflow-hidden rounded-card border border-edge bg-base-900/80 shadow-card">
            {/* Terminal chrome */}
            <div className="flex items-center gap-2 border-b border-edge bg-base-800/60 px-5 py-3.5">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 font-mono text-xs text-ink-tertiary">youssef@systems:~ — stack.sh</span>
            </div>

            {/* Body */}
            <div className="space-y-5 p-6 font-mono text-sm md:p-8">
              <p className="text-ink-tertiary">
                <span className="text-accent-300">$</span> cat ./toolchain --grouped
              </p>
              {STACK_GROUPS.map((g, gi) => (
                <Reveal key={g.label} delay={gi}>
                  <div className="flex flex-col gap-2 md:flex-row md:gap-6">
                    <span className="w-24 shrink-0 text-glow-400">{g.label}</span>
                    <div className="flex flex-wrap gap-x-4 gap-y-1.5">
                      {g.items.map((item) => (
                        <span key={item} className="text-ink-secondary transition-colors hover:text-ink">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
              <p className="flex items-center gap-2 pt-2 text-ink-tertiary">
                <span className="text-accent-300">$</span>
                <span className="inline-block h-4 w-2 animate-pulse-glow bg-accent-400" />
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
