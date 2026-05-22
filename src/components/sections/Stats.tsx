'use client';

import { motion } from 'framer-motion';
import { STATS } from '@/lib/data';

export default function Stats() {
  return (
    <section aria-label="Highlights" className="relative border-y border-edge py-0">
      <div className="container-w">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-none bg-edge sm:grid-cols-3 lg:grid-cols-5">
          {STATS.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col gap-2.5 bg-base px-7 py-10 transition-colors hover:bg-base-800/50 md:px-8 md:py-12"
            >
              <span className="font-display text-3xl font-semibold text-gradient leading-none md:text-4xl xl:text-5xl">
                {s.value}
              </span>
              <span className="text-xs leading-snug text-ink-tertiary md:text-sm md:text-ink-secondary">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
