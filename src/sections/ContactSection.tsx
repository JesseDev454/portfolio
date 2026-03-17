import { motion } from 'framer-motion';
import { SectionHeading } from '../components/ui/SectionHeading';
import { SectionShell } from '../components/ui/SectionShell';
import { SocialIcon } from '../components/ui/SocialIcon';
import { profile } from '../data/portfolio';
import { fadeInUp } from '../lib/motion';

export function ContactSection() {
  return (
    <SectionShell id="contact" className="pb-24">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <SectionHeading
          eyebrow="Contact"
          title="Have a product idea, role, or collaboration in mind?"
          description="Email is the fastest way to reach me. If the work needs strong frontend execution, dependable backend systems, or full-stack delivery, let’s talk."
        />

        <motion.div
          className="glass-panel rounded-3xl p-6 shadow-glow sm:p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">Primary Contact</p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-4 inline-block font-display text-2xl font-bold tracking-tight text-white transition hover:text-cyan-300 sm:text-3xl"
          >
            {profile.email}
          </a>

          <p className="mt-4 max-w-xl text-base leading-8 text-slate-300">
            Open to building modern web products, improving existing applications, and collaborating on systems that need thoughtful engineering.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            {profile.socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-100 transition hover:border-cyan-400/40 hover:text-cyan-300"
              >
                <SocialIcon label={link.label as 'GitHub' | 'LinkedIn' | 'Facebook'} className="h-4 w-4" />
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionShell>
  );
}
