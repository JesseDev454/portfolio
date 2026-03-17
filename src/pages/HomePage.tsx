import { SiteShell } from '../components/layout/SiteShell';
import { FoundationIntro } from '../sections/home/FoundationIntro';
import { FoundationReadiness } from '../sections/home/FoundationReadiness';
import { PrimitiveShowcase } from '../sections/home/PrimitiveShowcase';

export function HomePage() {
  return (
    <SiteShell>
      <FoundationIntro />
      <PrimitiveShowcase />
      <FoundationReadiness />
    </SiteShell>
  );
}

