import { siteConfig } from '../../data/site';
import { Button } from '../ui/Button';
import { Container } from './Container';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-slate-950/70 backdrop-blur-xl">
      <Container className="flex items-center justify-between gap-4 py-4">
        <a href="#top" className="font-display text-lg font-bold tracking-tight text-slate-50">
          {siteConfig.name}
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition hover:text-cyan-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Button href="#readiness" variant="secondary" className="px-4 py-2">
          Sprint 0
        </Button>
      </Container>
    </header>
  );
}
