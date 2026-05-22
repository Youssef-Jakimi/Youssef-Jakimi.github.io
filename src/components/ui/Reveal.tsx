'use client';

import { motion, type Variants } from 'framer-motion';
import { type ReactNode } from 'react';

const variants: Variants = {
  hidden: { opacity: 0, y: 28, filter: 'blur(8px)' },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: 'div' | 'span' | 'li' | 'section';
};

/** Scroll-triggered fade-up + de-blur. Fires once when ~20% in view. */
export default function Reveal({ children, delay = 0, className, as = 'div' }: RevealProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      variants={variants}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </MotionTag>
  );
}
