import { motion } from 'framer-motion';
import { Card } from '../../components/ui/Card';
import { Section } from '../../components/ui/Section';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { designPillars, primitiveCards } from '../../data/site';
import { fadeInUp } from '../../lib/motion';

export function PrimitiveShowcase() {
  return (
    <Section id="primitives">
      <SectionHeading
        eyebrow="Primitives"
        title="Core building blocks are ready before content sections land."
        description="Sprint 0 is intentionally focused on infrastructure for the UI: spacing, surface treatment, shared wrappers, and components that the real portfolio sections will reuse later."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="grid gap-6">
          {designPillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="p-6 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">{pillar.eyebrow}</p>
                <h3 className="mt-3 font-display text-2xl font-bold text-white">{pillar.title}</h3>
                <p className="mt-4 text-base leading-8 text-slate-300">{pillar.body}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <Card className="h-full p-6 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">UI Kit</p>
            <h3 className="mt-3 font-display text-2xl font-bold text-white">Reusable primitives for future sprints</h3>
            <div className="mt-6 grid gap-3">
              {primitiveCards.map((item) => (
                <div
                  key={item.name}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 transition hover:border-cyan-400/30"
                >
                  <p className="text-sm font-semibold text-white">{item.name}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{item.detail}</p>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}

