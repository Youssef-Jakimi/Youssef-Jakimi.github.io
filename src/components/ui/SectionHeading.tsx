'use client';

import Reveal from './Reveal';
import { cn } from '@/lib/utils';

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
};

export default function SectionHeading({ eyebrow, title, description, align = 'left', className }: Props) {
  return (
    <div className={cn('flex flex-col gap-4', align === 'center' && 'items-center text-center', className)}>
      {eyebrow && (
        <Reveal>
          <span className="eyebrow">
            <span className="h-px w-6 bg-accent-400/60" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={1}>
        <h2 className="max-w-3xl text-display-md font-semibold text-balance">{title}</h2>
      </Reveal>
      {description && (
        <Reveal delay={2}>
          <p className={cn('max-w-2xl text-base leading-relaxed text-ink-secondary md:text-lg')}>{description}</p>
        </Reveal>
      )}
    </div>
  );
}
