import { motion } from 'framer-motion';
import { Card } from '../../components/ui/Card';
import { Section } from '../../components/ui/Section';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { fadeInUp } from '../../lib/motion';

type PlaceholderSectionProps = {
  section: {
    id: string;
    eyebrow: string;
    title: string;
    description: string;
    accent: string;
    points: readonly string[];
  };
};

export function PlaceholderSection({ section }: PlaceholderSectionProps) {
  return (
    <Section id={section.id}>
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionHeading eyebrow={section.eyebrow} title={section.title} description={section.description} />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <Card className="p-6 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">Placeholder Anchor</p>
            <p className="mt-3 font-display text-2xl font-bold text-white">{section.accent}</p>
            <div className="mt-6 grid gap-3">
              {section.points.map((point) => (
                <div key={point} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-slate-200">
                  {point}
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}
