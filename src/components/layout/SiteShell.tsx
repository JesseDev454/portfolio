import { ReactNode } from 'react';
import { ParticleField } from './ParticleField';
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
      <ParticleField />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_top,rgba(165,231,255,0.08),transparent_42%)]" />
      <div className="pointer-events-none absolute left-[-12rem] top-[22rem] -z-10 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(157,5,255,0.07),transparent_62%)] blur-3xl" />
      <div className="pointer-events-none absolute right-[-14rem] top-[60rem] -z-10 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(0,253,147,0.045),transparent_64%)] blur-3xl" />
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="relative z-10">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
