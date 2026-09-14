import { siteConfig, socialLinks } from '../../data/site';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="editorial-container footer-top">
        <a className="brand-mark" href="#home" aria-label="Goodluck Jesse Kassa home"><span>G</span><b>K</b></a>
        <div><strong>{siteConfig.name}</strong><p>Building for a better campus — and beyond.</p></div>
        <div className="footer-socials">{socialLinks.map((link) => <a key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noreferrer noopener' : undefined}>{link.label}</a>)}</div>
      </div>
      <div className="editorial-container footer-bottom"><span>© {new Date().getFullYear()} Goodluck Jesse Kassa.</span><span>{siteConfig.location}</span></div>
    </footer>
  );
}
