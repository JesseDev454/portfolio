import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { fadeInUp } from '../../lib/motion';

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
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      variants={fadeInUp}
      transition={{ delay: index * 0.06 }}
      className="h-full"
    >
      <Card className="group h-full overflow-hidden p-0 transition hover:-translate-y-1 hover:shadow-glow">
        <div className="border-b border-white/10 p-6 sm:p-7">
          <div className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(34,211,238,0.12),rgba(255,255,255,0.03))] p-5">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-cyan-300/90" />
              <span className="h-2.5 w-2.5 rounded-full bg-blue-400/75" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-500/70" />
            </div>
            <div className="mt-6 grid gap-3">
              <div className="h-3 w-24 rounded-full bg-cyan-300/25" />
              <div className="h-16 rounded-2xl border border-white/10 bg-white/5" />
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="h-14 rounded-2xl border border-white/10 bg-white/5" />
                <div className="h-14 rounded-2xl border border-white/10 bg-white/5" />
              </div>
            </div>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">{project.previewLabel}</p>
          </div>
        </div>

        <div className="p-6 sm:p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">{project.category}</p>
          <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-white">{project.name}</h3>
          <p className="mt-4 text-base leading-8 text-slate-300">{project.description}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-medium text-slate-100"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-5 text-sm font-semibold">
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
        </div>
      </Card>
    </motion.div>
  );
}

