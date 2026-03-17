import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { fadeInUp } from '../../lib/motion';

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
      viewport={{ once: true, amount: 0.15 }}
      variants={fadeInUp}
      transition={{ delay: index * 0.04 }}
      className="h-full"
    >
      <Card className="h-full p-5 transition hover:-translate-y-1 hover:shadow-glow sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">{project.category}</p>
            <h3 className="mt-3 font-display text-xl font-bold tracking-tight text-white">{project.name}</h3>
          </div>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300">
            {project.previewLabel}
          </span>
        </div>

        <p className="mt-4 text-sm leading-7 text-slate-300">{project.summary}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-100"
            >
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
              rel="noreferrer"
              className="text-slate-100 transition hover:text-cyan-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}

