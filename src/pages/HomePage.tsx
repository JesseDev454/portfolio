import { SiteShell } from '../components/layout/SiteShell';
import { HomeSection } from '../sections/site/HomeSection';
import { PlaceholderSection } from '../sections/site/PlaceholderSection';
import { placeholderSections } from '../data/site';

export function HomePage() {
  return (
    <SiteShell>
      <HomeSection />
      {placeholderSections.map((section) => (
        <PlaceholderSection key={section.id} section={section} />
      ))}
    </SiteShell>
  );
}
