import { CompactProjectCard } from '../../components/projects/CompactProjectCard';
import { Section } from '../../components/ui/Section';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { otherProjectsContent } from '../../data/site';

export function OtherProjectsSection() {
  return (
    <Section className="pt-0 sm:pt-6" containerClassName="border-t border-white/5 pt-20 sm:pt-24">
      <SectionHeading
        eyebrow={otherProjectsContent.eyebrow}
        title={otherProjectsContent.title}
        description={otherProjectsContent.description}
      />

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {otherProjectsContent.projects.map((project, index) => (
          <CompactProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
}
