import { profile, navigation } from '../../data/portfolio';
import { Container } from './Container';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-slate-950/70 backdrop-blur-xl">
      <Container className="flex items-center justify-between gap-4 py-4">
        <a href="#top" className="font-display text-lg font-bold tracking-tight text-slate-50">
          {profile.name}
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition hover:text-cyan-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300/50 hover:bg-cyan-400/15"
        >
          Let&apos;s Work
        </a>
      </Container>
    </header>
  );
}

