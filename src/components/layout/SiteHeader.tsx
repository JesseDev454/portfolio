import { useEffect, useRef, useState } from 'react';
import { siteConfig, type ViewId } from '../../data/site';
import { cn } from '../../lib/cn';

type SiteHeaderProps = {
  activeView: ViewId;
  onNavigate: (view: ViewId) => void;
};

export function SiteHeader({ activeView, onNavigate }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const closeOnResize = () => { if (window.innerWidth >= 820) setMenuOpen(false); };
    const closeOnOutsidePointer = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setMenuOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    window.addEventListener('resize', closeOnResize);
    window.addEventListener('pointerdown', closeOnOutsidePointer);
    return () => {
      window.removeEventListener('keydown', closeOnEscape);
      window.removeEventListener('resize', closeOnResize);
      window.removeEventListener('pointerdown', closeOnOutsidePointer);
    };
  }, [menuOpen]);

  const handleNav = (view: ViewId) => {
    setMenuOpen(false);
    onNavigate(view);
  };

  return (
    <header ref={headerRef} className="site-header">
      <div className="editorial-container header-inner">
        <a className="brand-mark" href="#home" onClick={() => handleNav('home')} aria-label="Goodluck Jesse Kassa home"><span>G</span><b>K</b></a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {siteConfig.nav.map((item) => <a key={item.id} href={item.href} onClick={() => handleNav(item.id)} aria-current={activeView === item.id ? 'page' : undefined} className={cn(activeView === item.id && 'nav-active')}>{item.label}</a>)}
        </nav>
        <a className="resume-link" href={siteConfig.resumeHref} download="Goodluck_Jesse_Kassa_Resume.docx">Resume <span aria-hidden="true">↓</span></a>
        <button ref={menuButtonRef} type="button" className="menu-button" aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} onClick={() => setMenuOpen((open) => !open)}><span /><span /><span /></button>
      </div>
      {menuOpen ? <div id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">{siteConfig.nav.map((item) => <a key={item.id} href={item.href} onClick={() => handleNav(item.id)} aria-current={activeView === item.id ? 'page' : undefined}>{item.label}</a>)}<a href={siteConfig.resumeHref} download="Goodluck_Jesse_Kassa_Resume.docx" onClick={() => setMenuOpen(false)}>Resume <span aria-hidden="true">↓</span></a></div> : null}
    </header>
  );
}
