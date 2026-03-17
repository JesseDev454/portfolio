import { motion } from 'framer-motion';
import { Card } from '../../components/ui/Card';
import { Section } from '../../components/ui/Section';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { skillsContent } from '../../data/site';
import { fadeInUp } from '../../lib/motion';

export function SkillsSection() {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow={skillsContent.eyebrow}
        title={skillsContent.title}
        description={skillsContent.description}
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {skillsContent.groups.map((group, index) => (
          <motion.div
            key={group.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            transition={{ delay: index * 0.05 }}
          >
            <Card className="h-full p-6 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">{group.title}</p>
              <p className="mt-3 text-base leading-8 text-slate-300">{group.summary}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-cyan-400/25 hover:text-cyan-200"
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
