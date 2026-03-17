import { SiteShell } from '../components/layout/SiteShell';
import { AboutSection } from '../sections/site/AboutSection';
import { ContactSection } from '../sections/site/ContactSection';
import { FeaturedProjectsSection } from '../sections/site/FeaturedProjectsSection';
import { HomeSection } from '../sections/site/HomeSection';
import { OtherProjectsSection } from '../sections/site/OtherProjectsSection';
import { SkillsSection } from '../sections/site/SkillsSection';

export function HomePage() {
  return (
    <SiteShell>
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <FeaturedProjectsSection />
      <OtherProjectsSection />
      <ContactSection />
    </SiteShell>
  );
}
