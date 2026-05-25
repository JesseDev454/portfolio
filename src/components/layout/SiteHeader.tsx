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
    <header ref={headerRef} className="sticky top-0 z-50 border-b border-white/10 bg-[#131313]/70 shadow-[0_0_30px_rgba(71,214,255,0.1)] backdrop-blur-lg">
      <Container className="flex items-center justify-between gap-3 py-3.5 sm:gap-4">
        <a href="#home" className="group inline-flex min-w-0 items-center gap-2.5 text-[#e5e2e1] sm:gap-3">
          <span className="text-glow font-display text-2xl font-extrabold text-[#a5e7ff] transition duration-200 group-hover:text-white">
            GK
          </span>
          <span className="sr-only">{siteConfig.name}</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex lg:gap-10">
          {siteConfig.nav.filter((item) => item.id !== 'home').map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={activeSection === item.id ? 'page' : undefined}
              className={cn(
                'rounded px-3 py-2 font-mono text-[0.68rem] uppercase tracking-[0.14em] transition duration-200',
                activeSection === item.id
                  ? 'bg-white/5 text-[#a5e7ff]'
                  : 'text-[#e5e2e1] hover:-translate-y-0.5 hover:bg-white/5 hover:text-[#a5e7ff]',
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="/Goodluck_Kassa.docx"
          download="Goodluck_Kassa_Resume.docx"
          className="hidden rounded bg-[linear-gradient(90deg,#a5e7ff,#9d05ff)] px-5 py-2.5 font-mono text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[#003543] shadow-[0_0_20px_rgba(165,231,255,0.16)] transition hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(165,231,255,0.44)] md:inline-flex"
        >
          Resume
        </a>

        <button
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsMenuOpen((value) => !value)}
          className="interactive-surface flex h-10 w-10 flex-none items-center justify-center rounded border border-white/10 bg-white/[0.04] text-[#e5e2e1] md:hidden"
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </Container>

      {isMenuOpen ? (
        <div className="absolute inset-x-0 top-full z-50 md:hidden">
          <Container className="relative">
            <div
              id="mobile-navigation"
              className="glass-panel tech-outline absolute right-0 top-2 w-full max-w-[15.5rem] max-h-[min(16rem,calc(100vh-5rem))] overflow-y-auto rounded-lg p-2 shadow-glow"
            >
              <nav aria-label="Mobile Primary" className="flex flex-col gap-1">
                {siteConfig.nav.filter((item) => item.id !== 'home').map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    aria-current={activeSection === item.id ? 'page' : undefined}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      'rounded px-3 py-2.5 font-mono text-xs uppercase tracking-[0.1em] transition duration-200',
                      activeSection === item.id
                        ? 'bg-white/5 text-[#a5e7ff]'
                        : 'text-[#e5e2e1] hover:bg-white/5 hover:text-white',
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
