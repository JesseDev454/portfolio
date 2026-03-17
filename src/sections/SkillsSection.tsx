import { motion } from 'framer-motion';
import { SectionHeading } from '../components/ui/SectionHeading';
import { SectionShell } from '../components/ui/SectionShell';
import { skillGroups } from '../data/portfolio';
import { fadeInUp } from '../lib/motion';

export function SkillsSection() {
  return (
    <SectionShell id="skills">
      <SectionHeading
        eyebrow="Skills"
        title="A stack built for modern product development."
        description="I work across the frontend, backend, and supporting infrastructure with an emphasis on maintainable systems, clean implementation, and practical product value."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {skillGroups.map((group, index) => (
          <motion.article
            key={group.title}
            className="glass-panel rounded-3xl p-6 shadow-glow sm:p-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            transition={{ delay: index * 0.05 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">{group.title}</p>
            <h3 className="mt-3 font-display text-2xl font-bold text-white">{group.description}</h3>
            <div className="mt-6 flex flex-wrap gap-3">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}

