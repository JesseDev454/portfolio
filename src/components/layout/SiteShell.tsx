import { ReactNode } from 'react';
import { SiteFooter } from './SiteFooter';
import { SiteHeader } from './SiteHeader';

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div id="top" className="relative overflow-x-clip">
      <a
        href="#main-content"
        className="sr-only fixed left-4 top-4 z-[70] rounded-full bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950 focus:not-sr-only focus:outline-none"
      >
        Skip to content
      </a>
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.14),transparent_42%)]" />
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="relative z-10">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
