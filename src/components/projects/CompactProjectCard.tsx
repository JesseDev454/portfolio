import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { SkillIcon } from '../ui/SkillIcon';
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
      <Card className="h-full p-5 sm:p-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">{project.category}</p>
          <h3 className="mt-3 font-display text-[1.35rem] font-bold tracking-[-0.03em] text-white">{project.name}</h3>
        </div>

        <p className="mt-4 text-sm leading-7 text-slate-300">{project.summary}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-100"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-slate-950/70 text-cyan-200">
                <SkillIcon skill={item} className="h-3.5 w-3.5" />
              </span>
              {item}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${link.label} for ${project.name}`}
              className="hover-link text-slate-100"
            >
              {link.label}
            </a>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}

