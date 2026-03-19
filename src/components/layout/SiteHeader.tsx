import { useEffect, useMemo, useRef, useState } from 'react';
import { siteConfig } from '../../data/site';
import { useActiveSection } from '../../hooks/useActiveSection';
import { cn } from '../../lib/cn';
import { Container } from './Container';

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
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
    if (!isMenuOpen) {
      return;
    }

    const closeOnOutsidePointer = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    const closeOnResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('pointerdown', closeOnOutsidePointer);
    window.addEventListener('resize', closeOnResize);

    return () => {
      window.removeEventListener('pointerdown', closeOnOutsidePointer);
      window.removeEventListener('resize', closeOnResize);
    };
  }, [isMenuOpen]);

  return (
    <header ref={headerRef} className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/64 shadow-[0_12px_38px_rgba(2,6,23,0.26)] backdrop-blur-2xl">
      <Container className="flex items-center justify-between gap-3 py-3 sm:gap-4 sm:py-4">
        <a href="#home" className="group inline-flex min-w-0 items-center gap-2.5 text-slate-50 sm:gap-3">
          <span className="flex h-8 w-8 flex-none items-center justify-center rounded-[1rem] border border-cyan-400/16 bg-[linear-gradient(180deg,rgba(103,232,249,0.18),rgba(255,255,255,0.02))] text-[0.72rem] font-bold tracking-[0.04em] text-cyan-100 shadow-[0_12px_30px_rgba(8,145,178,0.12)] transition duration-200 group-hover:border-cyan-300/28 group-hover:text-white sm:h-9 sm:w-9 sm:rounded-2xl sm:text-sm">
            GK
          </span>
          <span className="truncate font-display text-[0.98rem] font-bold tracking-tight sm:text-lg">{siteConfig.name}</span>
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

        <button
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsMenuOpen((value) => !value)}
          className="interactive-surface flex h-10 w-10 flex-none items-center justify-center rounded-[1rem] border border-white/10 bg-white/[0.04] text-slate-100 md:hidden"
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </Container>

      {isMenuOpen ? (
        <div className="absolute inset-x-0 top-full z-50 md:hidden">
          <Container className="relative">
            <div
              id="mobile-navigation"
              className="surface tech-outline absolute right-0 top-2 w-full max-w-[17.5rem] max-h-[min(17rem,calc(100vh-5rem))] overflow-y-auto rounded-[1.3rem] p-3 shadow-glow"
            >
              <nav aria-label="Mobile Primary" className="flex flex-col gap-1">
                {siteConfig.nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    aria-current={activeSection === item.id ? 'page' : undefined}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      'rounded-[0.95rem] px-3 py-2.5 text-[0.94rem] font-medium transition duration-200',
                      activeSection === item.id
                        ? 'bg-[linear-gradient(180deg,rgba(103,232,249,0.14),rgba(255,255,255,0.04))] text-cyan-100'
                        : 'text-slate-200 hover:bg-white/5 hover:text-white',
                    )}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </Container>
        </div>
      ) : null}
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
