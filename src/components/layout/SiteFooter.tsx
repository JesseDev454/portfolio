import { siteConfig } from '../../data/site';
import { Container } from './Container';

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 py-8">
      <Container className="flex flex-col gap-3 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>
          {siteConfig.name} | {siteConfig.role}
        </p>
        <p>Foundation sprint built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.</p>
      </Container>
    </footer>
  );
}
