import { useEffect, useState } from 'react';
import { siteConfig } from '../../data/site';
import { useActiveSection } from '../../hooks/useActiveSection';
import { cn } from '../../lib/cn';
import { Container } from './Container';
import { SocialIcon } from '../ui/SocialIcon';

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useActiveSection(siteConfig.nav.map((item) => item.id));

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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/68 shadow-[0_10px_35px_rgba(2,6,23,0.22)] backdrop-blur-2xl">
      <Container className="flex items-center justify-between gap-4 py-4">
        <a href="#home" className="hover-link font-display text-lg font-bold tracking-tight text-slate-50">
          {siteConfig.name}
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-2 md:flex">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={activeSection === item.id ? 'page' : undefined}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-medium transition duration-200',
                activeSection === item.id
                  ? 'bg-cyan-400/12 text-cyan-200 shadow-[0_8px_24px_rgba(34,211,238,0.08)]'
                  : 'text-slate-300 hover:-translate-y-0.5 hover:bg-white/5 hover:text-cyan-200',
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
            rel="noreferrer"
            aria-label="GitHub"
            className="interactive-surface flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200"
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
          className="interactive-surface flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 md:hidden"
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
                'surface tech-outline absolute inset-x-6 top-3 rounded-3xl p-4 shadow-glow transition duration-200 sm:inset-x-8',
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
                      ? 'bg-cyan-400/12 text-cyan-200'
                      : 'text-slate-200 hover:bg-white/5 hover:text-cyan-200',
                  )}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <span className="text-sm text-slate-300">GitHub</span>
              <a
                href={siteConfig.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="interactive-surface flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-950/60 text-slate-100"
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
