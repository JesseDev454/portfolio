import { motion } from 'framer-motion';
import { Card } from '../../components/ui/Card';
import { Section } from '../../components/ui/Section';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { aboutContent } from '../../data/site';
import { fadeInUp, revealViewport } from '../../lib/motion';

export function AboutSection() {
  return (
    <Section id="about">
      <div className="grid gap-12 lg:grid-cols-[0.94fr_1.06fr] lg:items-start">
        <SectionHeading
          eyebrow={aboutContent.eyebrow}
          title={aboutContent.title}
          description={
            <>
              {aboutContent.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mb-4 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </>
          }
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          variants={fadeInUp}
        >
          <Card className="p-6 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">Approach</p>
            <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-white">{aboutContent.highlightsTitle}</h3>

            <div className="mt-7 grid gap-3">
              {aboutContent.highlights.map((item) => (
                <div
                  key={item}
                  className="interactive-surface flex items-start gap-3 rounded-[1.35rem] border border-white/10 bg-white/[0.04] px-4 py-4 text-sm leading-7 text-slate-200"
                >
                  <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(103,232,249,0.55)]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}
