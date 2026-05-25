import { motion } from 'framer-motion';
import { Card } from '../../components/ui/Card';
import { Section } from '../../components/ui/Section';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { SkillIcon } from '../../components/ui/SkillIcon';
import { skillsContent } from '../../data/site';
import { fadeInUp, revealViewport, staggerContainer } from '../../lib/motion';

export function SkillsSection() {
  return (
    <Section id="skills">
      <SectionHeading eyebrow={skillsContent.eyebrow} />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        variants={staggerContainer}
        className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
      >
        {skillsContent.items.map((skill, index) => (
          <motion.div key={skill} variants={fadeInUp} transition={{ delay: index * 0.035 }} className="h-full">
            <Card className="group h-full min-h-[7.25rem] p-4 sm:p-5">
              <div className="flex h-full flex-col justify-between gap-5">
                <div className="flex items-start justify-between gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded border border-white/10 bg-black/40 text-[#a5e7ff] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                    <SkillIcon skill={skill} className="h-5 w-5" />
                  </span>
                  <span className="h-2 w-2 rounded-full bg-[#00fd93] shadow-[0_0_18px_rgba(0,253,147,0.5)]" />
                </div>

                <h3 className="font-mono text-sm font-medium text-[#e5e2e1] sm:text-base">{skill}</h3>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
