import { motion } from 'framer-motion';
import { Card } from '../../components/ui/Card';
import { Section } from '../../components/ui/Section';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { SkillIcon } from '../../components/ui/SkillIcon';
import { skillsContent } from '../../data/site';
import { fadeInUp, revealViewport, staggerContainer } from '../../lib/motion';

export function SkillsSection() {
  const skills = skillsContent.groups.flatMap((group) =>
    group.items.map((item) => ({
      name: item,
      category: group.title,
    })),
  );

  return (
    <Section id="skills">
      <SectionHeading eyebrow={skillsContent.eyebrow} />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        variants={staggerContainer}
        className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      >
        {skills.map((skill) => (
          <motion.div key={skill.name} variants={fadeInUp} className="h-full">
            <Card className="group h-full p-4 sm:p-5">
              <div className="flex h-full flex-col justify-between">
                <div className="flex items-start justify-between gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/70 text-cyan-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                    <SkillIcon skill={skill.name} className="h-5 w-5" />
                  </span>
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan-300/80 shadow-[0_0_18px_rgba(103,232,249,0.35)]" />
                </div>

                <div className="mt-8">
                  <h3 className="text-base font-semibold tracking-[-0.02em] text-white sm:text-[1.02rem]">{skill.name}</h3>
                  <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">{skill.category}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
