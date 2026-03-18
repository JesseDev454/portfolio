import { useEffect, useMemo, useState } from 'react';
import { siteConfig } from '../../data/site';
import { useActiveSection } from '../../hooks/useActiveSection';
import { cn } from '../../lib/cn';
import { Container } from './Container';
import { SocialIcon } from '../ui/SocialIcon';

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navSectionIds = useMemo(() => siteConfig.nav.map((item) => item.id), []);
  const activeSection = useActiveSection(navSectionIds);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', closeOnEscape);

    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/64 shadow-[0_12px_38px_rgba(2,6,23,0.26)] backdrop-blur-2xl">
      <Container className="flex items-center justify-between gap-4 py-4">
        <a href="#home" className="group inline-flex items-center gap-3 text-slate-50">
          <span className="flex h-9 w-9 items-center justify-center rounded-2xl border border-cyan-400/16 bg-[linear-gradient(180deg,rgba(103,232,249,0.18),rgba(255,255,255,0.02))] text-sm font-bold tracking-[0.04em] text-cyan-100 shadow-[0_12px_30px_rgba(8,145,178,0.12)] transition duration-200 group-hover:border-cyan-300/28 group-hover:text-white">
            GK
          </span>
          <span className="font-display text-lg font-bold tracking-tight">{siteConfig.name}</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-2 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] md:flex">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={activeSection === item.id ? 'page' : undefined}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-medium transition duration-200',
                activeSection === item.id
                  ? 'bg-[linear-gradient(180deg,rgba(103,232,249,0.14),rgba(255,255,255,0.04))] text-cyan-100 shadow-[0_10px_30px_rgba(8,145,178,0.1)]'
                  : 'text-slate-400 hover:-translate-y-0.5 hover:bg-white/5 hover:text-slate-100',
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="interactive-surface flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-slate-200"
          >
            <SocialIcon label="GitHub" className="h-5 w-5" />
          </a>
        </div>

        <button
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsMenuOpen((value) => !value)}
          className="interactive-surface flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-slate-100 md:hidden"
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </Container>

      <div
        className={cn(
          'md:hidden',
          isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none',
        )}
      >
        <div
          className={cn(
            'fixed inset-0 z-40 bg-slate-950/70 transition-opacity duration-200',
            isMenuOpen ? 'opacity-100' : 'opacity-0',
          )}
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
        <Container className="relative z-50">
          <div
            id="mobile-navigation"
            className={cn(
              'surface tech-outline absolute inset-x-6 top-3 rounded-[1.75rem] p-4 shadow-glow transition duration-200 sm:inset-x-8',
              isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0',
            )}
          >
            <nav aria-label="Mobile Primary" className="flex flex-col gap-2">
              {siteConfig.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={activeSection === item.id ? 'page' : undefined}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    'rounded-2xl px-4 py-3 text-sm font-medium transition duration-200',
                    activeSection === item.id
                      ? 'bg-[linear-gradient(180deg,rgba(103,232,249,0.14),rgba(255,255,255,0.04))] text-cyan-100'
                      : 'text-slate-200 hover:bg-white/5 hover:text-white',
                  )}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
              <span className="text-sm text-slate-300">GitHub</span>
              <a
                href={siteConfig.githubUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="interactive-surface flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/60 text-slate-100"
                aria-label="GitHub"
              >
                <SocialIcon label="GitHub" className="h-5 w-5" />
              </a>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
