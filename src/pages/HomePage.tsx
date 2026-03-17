import { SiteShell } from '../components/layout/SiteShell';
import { AboutSection } from '../sections/site/AboutSection';
import { HomeSection } from '../sections/site/HomeSection';
import { PlaceholderSection } from '../sections/site/PlaceholderSection';
import { SkillsSection } from '../sections/site/SkillsSection';
import { placeholderSections } from '../data/site';

export function HomePage() {
  return (
    <SiteShell>
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      {placeholderSections.map((section) => (
        <PlaceholderSection key={section.id} section={section} />
      ))}
    </SiteShell>
  );
}
