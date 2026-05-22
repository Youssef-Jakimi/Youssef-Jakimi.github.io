'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * Custom cursor: a small dot that trails a soft ring. The ring grows and
 * tints when hovering [data-cursor="hover"] targets. Hidden on touch devices.
 */
export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 350, damping: 28, mass: 0.4 });
  const ringY = useSpring(y, { stiffness: 350, damping: 28, mass: 0.4 });

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    if (!fine) return;
    setEnabled(true);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as HTMLElement;
      setHovering(Boolean(t.closest('[data-cursor="hover"], a, button')));
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] hidden md:block" aria-hidden="true">
      <motion.div
        className="absolute h-1.5 w-1.5 rounded-full bg-accent-300"
        style={{ x, y, translateX: '-50%', translateY: '-50%' }}
      />
      <motion.div
        className="absolute rounded-full border border-accent-400/50"
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
        animate={{
          width: hovering ? 48 : 28,
          height: hovering ? 48 : 28,
          borderColor: hovering ? 'rgba(161,75,255,0.6)' : 'rgba(124,108,255,0.4)',
          backgroundColor: hovering ? 'rgba(124,108,255,0.08)' : 'rgba(124,108,255,0)',
        }}
        transition={{ type: 'spring', stiffness: 250, damping: 20 }}
      />
    </div>
  );
}
