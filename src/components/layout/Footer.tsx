import { SITE } from '@/lib/data';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-edge">
      <div className="container-w flex flex-col gap-8 py-12 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-accent-gradient text-sm font-bold text-white">
            YJ
          </span>
          <div>
            <p className="text-sm font-medium text-ink">{SITE.name}</p>
            <p className="text-xs text-ink-tertiary">{SITE.role} · {SITE.location}</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-secondary">
          <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ink" data-cursor="hover">
            GitHub
          </a>
          <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ink" data-cursor="hover">
            LinkedIn
          </a>
          <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-ink" data-cursor="hover">
            Email
          </a>
        </div>
      </div>
      <div className="container-w flex flex-col gap-2 border-t border-edge py-6 text-xs text-ink-tertiary sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} {SITE.name}. Designed & built end to end.</p>
        <p className="font-mono">Next.js · Framer Motion · Lenis</p>
      </div>
    </footer>
  );
}
