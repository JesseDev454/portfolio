import { profile } from '../../data/portfolio';
import { Container } from './Container';

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 py-8">
      <Container className="flex flex-col gap-3 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>
          {profile.name} • {profile.role}
        </p>
        <p>Built with React, TypeScript, Vite, and Tailwind CSS.</p>
      </Container>
    </footer>
  );
}

