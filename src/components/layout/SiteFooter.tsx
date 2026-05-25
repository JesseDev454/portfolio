import { siteConfig } from '../../data/site';
import { Container } from './Container';
import { SocialIcon } from '../ui/SocialIcon';

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-divider mt-8 border-t border-white/10 bg-[#0e0e0e]/72 py-10 sm:py-12">
      <Container className="flex flex-col items-center gap-6 text-center text-sm text-[#bbc9cf]">
        <a href="#home" className="text-glow font-display text-3xl font-extrabold text-[#e5e2e1]">
          GK
        </a>

        <div className="flex flex-wrap items-center justify-center gap-5">
          {siteConfig.socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${link.label} profile`}
              className="hover-link inline-flex items-center gap-2 font-mono text-xs text-[#bbc9cf]"
            >
              <SocialIcon label={link.label} className="h-4 w-4" />
              {link.label}
            </a>
          ))}
        </div>

        <p className="font-mono text-xs uppercase tracking-[0.08em] text-[#bbc9cf]">
          (c) {year} Goodluck Kassa. Engineered for precision.
        </p>
      </Container>
    </footer>
  );
}
