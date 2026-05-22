'use client';

import { useEffect, useRef } from 'react';

type Node = { x: number; y: number; label: string; pulse: number };

const NODES: Node[] = [
  { x: 0.18, y: 0.22, label: 'Ingest', pulse: 0 },
  { x: 0.50, y: 0.12, label: 'Language', pulse: 0.4 },
  { x: 0.82, y: 0.22, label: 'Intent', pulse: 0.8 },
  { x: 0.82, y: 0.52, label: 'Router', pulse: 1.2 },
  { x: 0.50, y: 0.65, label: 'Dispatch', pulse: 1.6 },
  { x: 0.18, y: 0.52, label: 'Respond', pulse: 2.0 },
  { x: 0.50, y: 0.88, label: 'Learn', pulse: 2.4 },
];

const EDGES = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0],
  [4, 6], [6, 0],
];

export default function PipelineVisual({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let raf = 0;
    let running = true;
    let t = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    const draw = () => {
      const W = canvas.offsetWidth;
      const H = canvas.offsetHeight;
      ctx.clearRect(0, 0, W, H);

      const pts = NODES.map((n) => ({ x: n.x * W, y: n.y * H, label: n.label, pulse: n.pulse }));

      // Draw edges
      for (const [a, b] of EDGES) {
        const from = pts[a];
        const to = pts[b];
        const grad = ctx.createLinearGradient(from.x, from.y, to.x, to.y);
        grad.addColorStop(0, 'rgba(124,108,255,0.25)');
        grad.addColorStop(1, 'rgba(161,75,255,0.10)');
        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Travelling particle
        if (!reduced) {
          const speed = 0.0004;
          const phase = (t * speed + (a / EDGES.length)) % 1;
          const px = from.x + (to.x - from.x) * phase;
          const py = from.y + (to.y - from.y) * phase;
          ctx.beginPath();
          ctx.arc(px, py, 2, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(161,75,255,0.9)';
          ctx.fill();
        }
      }

      // Draw nodes
      for (const pt of pts) {
        const pulse = reduced ? 1 : 0.6 + 0.4 * Math.sin(t * 0.0015 + pt.pulse);

        // Outer glow ring
        const glow = ctx.createRadialGradient(pt.x, pt.y, 0, pt.x, pt.y, 22);
        glow.addColorStop(0, `rgba(124,108,255,${0.18 * pulse})`);
        glow.addColorStop(1, 'rgba(124,108,255,0)');
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 22, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        // Node circle
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(124,108,255,${0.7 * pulse})`;
        ctx.fill();
        ctx.strokeStyle = `rgba(163,168,255,${0.5 * pulse})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Label
        ctx.font = '10px JetBrains Mono, monospace';
        ctx.fillStyle = `rgba(163,168,255,${0.55 * pulse})`;
        ctx.textAlign = 'center';
        ctx.fillText(pt.label, pt.x, pt.y + 20);
      }

      if (!reduced) t++;
      if (running && !reduced) raf = requestAnimationFrame(draw);
    };

    resize();
    if (reduced) draw();
    else raf = requestAnimationFrame(draw);

    const ro = new ResizeObserver(() => {
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      resize();
      if (reduced) draw();
    });
    ro.observe(canvas);

    const io = new IntersectionObserver(([entry]) => {
      running = entry.isIntersecting;
      if (running && !reduced) { cancelAnimationFrame(raf); raf = requestAnimationFrame(draw); }
      else cancelAnimationFrame(raf);
    }, { threshold: 0 });
    io.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
