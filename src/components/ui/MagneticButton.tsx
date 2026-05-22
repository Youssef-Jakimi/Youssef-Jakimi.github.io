'use client';

import { useRef, type ReactNode } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'ghost';
  className?: string;
  strength?: number;
};

/**
 * Button/link with a subtle magnetic pull toward the cursor.
 * Falls back to a normal interactive element on touch / reduced motion.
 */
export default function MagneticButton({
  children,
  href,
  onClick,
  variant = 'primary',
  className,
  strength = 0.4,
}: Props) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 200, damping: 15, mass: 0.3 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const base = cn(
    'group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium transition-colors duration-300',
    variant === 'primary'
      ? 'bg-accent-gradient text-white shadow-glow hover:shadow-glow-lg'
      : 'glass text-ink hover:border-edge-strong hover:bg-white/[0.05]',
    className,
  );

  const inner = <span className="relative z-10 inline-flex items-center gap-2">{children}</span>;

  if (href) {
    const external = href.startsWith('http') || href.startsWith('mailto');
    return (
      <motion.a
        ref={ref}
        href={href}
        target={external && href.startsWith('http') ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={base}
        style={{ x: sx, y: sy }}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        data-cursor="hover"
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      className={base}
      style={{ x: sx, y: sy }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      data-cursor="hover"
    >
      {inner}
    </motion.button>
  );
}
