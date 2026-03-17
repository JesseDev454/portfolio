import { motion } from 'framer-motion';
import { Card } from '../../components/ui/Card';
import { Section } from '../../components/ui/Section';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { readinessItems } from '../../data/site';
import { fadeInUp } from '../../lib/motion';

export function FoundationReadiness() {
  return (
    <Section id="readiness" className="pb-24">
      <SectionHeading
        eyebrow="Readiness"
        title="The portfolio is set up to grow sprint by sprint."
        description="This placeholder page is intentionally minimal, but it already reflects the final product direction: technical, polished, structured, and ready for real content modules."
        align="center"
      />

      <motion.div
        className="mt-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <Card className="overflow-hidden">
          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="border-b border-white/10 p-6 sm:p-8 lg:border-b-0 lg:border-r">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">Next Layer</p>
              <h3 className="mt-3 max-w-md font-display text-3xl font-bold tracking-tight text-white">
                Content sections can now be added without changing the foundation.
              </h3>
              <p className="mt-4 max-w-lg text-base leading-8 text-slate-300">
                The next sprints can focus on identity, projects, and contact strategy because the visual system and
                layout language are already in place.
              </p>
            </div>

            <div className="p-6 sm:p-8">
              <div className="grid gap-4">
                {readinessItems.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </Section>
  );
}
