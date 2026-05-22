'use client';

import { useEffect, useRef } from 'react';

type Blob = { x: number; y: number; vx: number; vy: number; r: number; color: string };

/**
 * Lightweight canvas aurora — slow-drifting blurred color blobs in the
 * accent palette. No WebGL; pauses when off-screen or reduced-motion.
 */
export default function AuroraBackground({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let raf = 0;
    let running = true;

    const colors = ['124,108,255', '161,75,255', '109,75,255', '139,133,255'];
    let blobs: Blob[] = [];

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
    };

    const seed = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      blobs = Array.from({ length: 5 }, (_, i) => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: Math.min(w, h) * (0.35 + Math.random() * 0.3),
        color: colors[i % colors.length],
      }));
    };

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.globalCompositeOperation = 'lighter';

      for (const b of blobs) {
        if (!reduced) {
          b.x += b.vx;
          b.y += b.vy;
          if (b.x < -b.r * 0.5 || b.x > w + b.r * 0.5) b.vx *= -1;
          if (b.y < -b.r * 0.5 || b.y > h + b.r * 0.5) b.vy *= -1;
        }
        const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
        g.addColorStop(0, `rgba(${b.color}, 0.22)`);
        g.addColorStop(1, `rgba(${b.color}, 0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
      if (running && !reduced) raf = requestAnimationFrame(draw);
    };

    resize();
    seed();
    draw();

    const onResize = () => {
      resize();
      seed();
      if (reduced) draw();
    };
    window.addEventListener('resize', onResize);

    const io = new IntersectionObserver(
      ([entry]) => {
        running = entry.isIntersecting;
        if (running && !reduced) {
          cancelAnimationFrame(raf);
          raf = requestAnimationFrame(draw);
        } else {
          cancelAnimationFrame(raf);
        }
      },
      { threshold: 0 },
    );
    io.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      io.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
