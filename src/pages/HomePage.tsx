import { SiteShell } from '../components/layout/SiteShell';
import { HomeSection } from '../sections/site/HomeSection';
import { PlaceholderSection } from '../sections/site/PlaceholderSection';
import { placeholderSections } from '../data/site';

export function HomePage() {
  const [homeSection, ...contentSections] = placeholderSections;

  return (
    <SiteShell>
      <HomeSection section={homeSection} />
      {contentSections.map((section) => (
        <PlaceholderSection key={section.id} section={section} />
      ))}
    </SiteShell>
  );
}

