import { ReactNode } from 'react';
import { type ViewId } from '../../data/site';
import { SiteFooter } from './SiteFooter';
import { SiteHeader } from './SiteHeader';

type SiteShellProps = {
  children: ReactNode;
  activeView: ViewId;
  onNavigate: (view: ViewId) => void;
};

export function SiteShell({ children, activeView, onNavigate }: SiteShellProps) {
  return (
    <div id="top" className="site-shell">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <SiteHeader activeView={activeView} onNavigate={onNavigate} />
      <main id="main-content" tabIndex={-1}>{children}</main>
      <SiteFooter />
    </div>
  );
}
