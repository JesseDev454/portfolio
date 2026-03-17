import { SiteFooter } from '../components/layout/SiteFooter';
import { SiteHeader } from '../components/layout/SiteHeader';
import { AboutSection } from '../sections/AboutSection';
import { ContactSection } from '../sections/ContactSection';
import { HeroSection } from '../sections/HeroSection';
import { ProjectsSection } from '../sections/ProjectsSection';
import { SkillsSection } from '../sections/SkillsSection';

export function HomePage() {
  return (
    <div id="top" className="relative overflow-x-clip">
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}

