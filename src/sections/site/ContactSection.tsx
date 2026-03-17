import { motion } from 'framer-motion';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Section } from '../../components/ui/Section';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { SocialIcon } from '../../components/ui/SocialIcon';
import { contactContent, siteConfig } from '../../data/site';
import { fadeInUp, revealViewport } from '../../lib/motion';

export function ContactSection() {
  return (
    <Section id="contact" className="pb-24 sm:pb-28">
      <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
        <SectionHeading
          eyebrow={contactContent.eyebrow}
          title={contactContent.title}
          description={contactContent.description}
        />

        <motion.div initial="hidden" whileInView="visible" viewport={revealViewport} variants={fadeInUp}>
          <Card className="p-6 sm:p-7">
            <div className="rounded-[1.55rem] border border-white/10 bg-[linear-gradient(180deg,rgba(103,232,249,0.1),rgba(255,255,255,0.03))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">{contactContent.primaryLabel}</p>
              <address className="mt-4 not-italic">
                <a
                  href={contactContent.primaryHref}
                  className="inline-block font-display text-3xl font-bold tracking-[-0.03em] text-white transition hover:text-cyan-200 sm:text-4xl"
                >
                  {contactContent.primaryValue}
                </a>
              </address>
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">{contactContent.secondaryLabel}</p>
            <p className="mt-3 max-w-2xl text-base leading-8 text-slate-300">{contactContent.secondaryValue}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={contactContent.primaryHref}>Start an Email</Button>
              <Button href={siteConfig.githubUrl} target="_blank" variant="secondary">
                GitHub Profile
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              {siteConfig.socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`${link.label} profile`}
                  className="interactive-surface inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-slate-100"
                >
                  <SocialIcon label={link.label} className="h-4 w-4" />
                  {link.label}
                </a>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}
