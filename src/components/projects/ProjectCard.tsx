import { motion } from 'framer-motion';
import { cn } from '../../lib/cn';
import { fadeInUp } from '../../lib/motion';

type ProjectCardProps = {
  project: {
    title: string;
    type: string;
    summary: string;
    technologies: readonly string[];
    highlights: readonly string[];
    repoUrl: string;
    liveUrl?: string;
  };
  className?: string;
};

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <motion.article
      className={cn('glass-panel rounded-3xl p-6 shadow-glow', className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={fadeInUp}
    >
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">{project.type}</p>
        <h3 className="font-display text-2xl font-bold tracking-tight text-white">{project.title}</h3>
      </div>

      <p className="mt-4 text-sm leading-7 text-slate-300">{project.summary}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 space-y-3">
        {project.highlights.map((highlight) => (
          <p key={highlight} className="text-sm text-slate-300">
            <span className="mr-2 text-cyan-300">/</span>
            {highlight}
          </p>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold">
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noreferrer"
          className="text-slate-100 transition hover:text-cyan-300"
        >
          View Repository
        </a>
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="text-cyan-300 transition hover:text-cyan-200"
          >
            Live Demo
          </a>
        ) : null}
      </div>
    </motion.article>
  );
}

