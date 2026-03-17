import { siteConfig } from '../../data/site';
import { Container } from './Container';
import { SocialIcon } from '../ui/SocialIcon';

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-divider mt-6 border-t border-white/10 py-10 sm:py-12">
      <Container className="flex flex-col gap-6 text-sm text-slate-400 lg:flex-row lg:items-center lg:justify-between">
        <p>
          {siteConfig.name} | {year}
        </p>

        <div className="flex flex-wrap items-center gap-3">
          {siteConfig.socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="interactive-surface inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-slate-200"
            >
              <SocialIcon label={link.label} className="h-4 w-4" />
              {link.label}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}
