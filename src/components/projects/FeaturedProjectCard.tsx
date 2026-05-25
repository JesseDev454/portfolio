import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { revealViewport, slideInLeft, slideInRight } from '../../lib/motion';

type FeaturedProjectCardProps = {
  project: {
    name: string;
    category: string;
    description: string;
    stack: readonly string[];
    previewLabel: string;
    links: readonly {
      label: string;
      href: string;
    }[];
  };
  index: number;
};

export function FeaturedProjectCard({ project, index }: FeaturedProjectCardProps) {
  const revealVariant = index % 2 === 0 ? slideInLeft : slideInRight;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
      variants={revealVariant}
      transition={{ delay: index * 0.06 }}
      className="h-full"
    >
      <Card className="group h-full p-6 sm:p-7 lg:p-8">
        <span className="font-mono text-sm text-[#00fd93]">{String(index + 1).padStart(2, '0')}</span>
        <div className="mt-7">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.12em] text-[#00fd93]">{project.category}</p>
          <h3 className="mt-3 font-display text-2xl font-bold leading-tight text-[#e5e2e1] transition-colors group-hover:text-[#a5e7ff] sm:text-3xl">
            {project.name}
          </h3>
          <p className="mt-4 text-base leading-7 text-[#bbc9cf]">{project.description}</p>

          <div className="mt-7 flex flex-wrap gap-3">
            {project.stack.map((item) => (
              <span
                key={item}
                className="inline-flex items-center rounded border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-xs text-[#e5e2e1]"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
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
        </div>
      </Card>
    </motion.div>
  );
}
