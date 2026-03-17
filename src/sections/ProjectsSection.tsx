import { ProjectCard } from '../components/projects/ProjectCard';
import { SectionHeading } from '../components/ui/SectionHeading';
import { SectionShell } from '../components/ui/SectionShell';
import { projects } from '../data/portfolio';

export function ProjectsSection() {
  return (
    <SectionShell id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work across frontend, backend, full-stack, and mobile."
        description="These projects are meant to show breadth as well as execution: product interfaces, backend services, platform thinking, and practical build discipline."
      />

      <div className="mt-12 grid gap-6 xl:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </SectionShell>
  );
}

