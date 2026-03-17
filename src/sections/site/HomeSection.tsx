import { motion } from 'framer-motion';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Section } from '../../components/ui/Section';
import { siteConfig } from '../../data/site';
import { fadeInUp } from '../../lib/motion';

type HomeSectionProps = {
  section: {
    id: string;
    eyebrow: string;
    title: string;
    description: string;
    accent: string;
    points: readonly string[];
  };
};

export function HomeSection({ section }: HomeSectionProps) {
  return (
    <Section id={section.id} spacing="hero" className="pt-12 sm:pt-16">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">{section.eyebrow}</p>
          <h1 className="mt-5 max-w-4xl font-display text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            {section.title}
          </h1>
          <p className="mt-6 max-w-3xl text-balance text-lg leading-8 text-slate-300 sm:text-xl">
            {section.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#projects">View Section Map</Button>
            <Button href={siteConfig.githubUrl} target="_blank" rel="noreferrer" variant="secondary">
              GitHub Profile
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {section.points.map((point) => (
              <span
                key={point}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
              >
                {point}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.08 }}
          className="grid gap-4"
        >
          <Card className="p-6 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">Site Shell</p>
            <h2 className="mt-3 font-display text-2xl font-bold text-white">Sticky header, section anchors, and refined spacing.</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Sprint 1 establishes the user flow across desktop and mobile before the real portfolio content arrives.
            </p>
          </Card>

          <Card className="overflow-hidden p-0">
            <div className="border-b border-white/10 px-6 py-4">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-cyan-300/90" />
                <span className="h-2.5 w-2.5 rounded-full bg-blue-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-500/70" />
              </div>
            </div>
            <div className="grid gap-3 px-6 py-6">
              <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/8 px-4 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">Focus</p>
                <p className="mt-3 text-sm leading-7 text-slate-200">{section.accent}</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="h-3 w-20 rounded-full bg-cyan-300/20" />
                  <div className="mt-4 h-8 w-28 rounded-full bg-white/10" />
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="h-3 w-24 rounded-full bg-cyan-300/20" />
                  <div className="mt-4 h-8 w-24 rounded-full bg-white/10" />
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}
