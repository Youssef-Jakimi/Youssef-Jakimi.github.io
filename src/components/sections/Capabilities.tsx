'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
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

        <div className="mt-14 divide-y divide-edge">
          {CAPABILITIES.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col gap-6 py-10 transition-colors hover:bg-white/[0.012] md:flex-row md:items-start md:gap-0 md:py-12"
            >
              {/* Large number */}
              <div className="shrink-0 md:w-36 lg:w-44">
                <span className="font-display text-[72px] font-semibold leading-none text-gradient opacity-50 transition-opacity duration-500 group-hover:opacity-75 md:text-[88px]">
                  0{i + 1}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col gap-4 md:pt-2">
                <h3 className="text-2xl font-semibold text-ink transition-colors group-hover:text-ink md:text-3xl">
                  {c.title}
                </h3>
                <p className="max-w-xl text-base leading-relaxed text-ink-secondary">{c.blurb}</p>
                <ul className="mt-1 flex flex-wrap gap-2">
                  {c.points.map((p) => (
                    <li
                      key={p}
                      className="rounded-full border border-edge px-3.5 py-1.5 text-xs text-ink-secondary transition-colors group-hover:border-accent-500/30 group-hover:text-ink-secondary"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Subtle right accent */}
              <div className="pointer-events-none absolute right-0 top-1/2 hidden h-px w-12 -translate-y-1/2 bg-accent-gradient opacity-0 transition-opacity duration-500 group-hover:opacity-40 md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
