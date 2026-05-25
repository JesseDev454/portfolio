import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { fadeInUp, revealViewport } from '../../lib/motion';

type CompactProjectCardProps = {
  project: {
    name: string;
    category: string;
    summary: string;
    stack: readonly string[];
    previewLabel: string;
    links: readonly {
      label: string;
      href: string;
    }[];
  };
  index: number;
};

export function CompactProjectCard({ project, index }: CompactProjectCardProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
      variants={fadeInUp}
      transition={{ delay: index * 0.04 }}
      className="h-full"
    >
      <Card className="group h-full p-5 sm:p-6">
        <span className="font-mono text-sm text-[#00fd93]">{String(index + 1).padStart(2, '0')}</span>
        <div>
          <p className="mt-6 font-mono text-xs font-bold uppercase tracking-[0.12em] text-[#00fd93]">{project.category}</p>
          <h3 className="mt-3 font-display text-xl font-bold leading-tight text-[#e5e2e1] transition-colors group-hover:text-[#a5e7ff]">
            {project.name}
          </h3>
        </div>

        <p className="mt-4 text-sm leading-7 text-[#bbc9cf]">{project.summary}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="inline-flex items-center rounded border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-[0.68rem] text-[#e5e2e1]"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${link.label} for ${project.name}`}
              className="interactive-surface inline-flex items-center rounded border border-[#a5e7ff]/25 bg-black/20 px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-[0.1em] text-[#a5e7ff]"
            >
              {link.label}
            </a>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}

