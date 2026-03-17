import { motion } from 'framer-motion';
import { Card } from '../../components/ui/Card';
import { Section } from '../../components/ui/Section';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { skillsContent } from '../../data/site';
import { fadeInUp, revealViewport } from '../../lib/motion';

export function SkillsSection() {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow={skillsContent.eyebrow}
        title={skillsContent.title}
        description={skillsContent.description}
      />

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {skillsContent.groups.map((group, index) => (
          <motion.div
            key={group.title}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            variants={fadeInUp}
            transition={{ delay: index * 0.05 }}
          >
            <Card className="h-full p-6 sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">{group.title}</p>
                  <p className="mt-3 max-w-sm text-base leading-8 text-slate-300">{group.summary}</p>
                </div>
                <span className="hidden rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 sm:inline-flex">
                  {String(group.items.length).padStart(2, '0')}
                </span>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="interactive-surface rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-slate-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
