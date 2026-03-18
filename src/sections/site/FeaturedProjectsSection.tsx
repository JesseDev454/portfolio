import { FeaturedProjectCard } from '../../components/projects/FeaturedProjectCard';
import { Section } from '../../components/ui/Section';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { featuredProjectsContent } from '../../data/site';

export function FeaturedProjectsSection() {
  return (
    <Section id="projects">
      <SectionHeading eyebrow={featuredProjectsContent.eyebrow} />

      <div className="mt-12 grid gap-6 xl:grid-cols-2">
        {featuredProjectsContent.projects.map((project, index) => (
          <FeaturedProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
}
