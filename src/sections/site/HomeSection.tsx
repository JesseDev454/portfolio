import { motion } from 'framer-motion';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Section } from '../../components/ui/Section';
import { SocialIcon } from '../../components/ui/SocialIcon';
import { heroContent, siteConfig } from '../../data/site';
import { fadeInUp, staggerContainer } from '../../lib/motion';

export function HomeSection() {
  return (
    <Section id="home" spacing="hero" className="pt-10 sm:pt-14 lg:pt-16">
      <div className="grid gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="relative">
          <motion.div variants={fadeInUp} className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200 shadow-[0_0_0_1px_rgba(34,211,238,0.06)]">
            {heroContent.eyebrow}
          </motion.div>

          <motion.p variants={fadeInUp} className="mt-8 text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
            {siteConfig.role}
          </motion.p>
          <motion.h1 variants={fadeInUp} className="mt-4 font-display text-6xl font-bold tracking-tight text-white sm:text-7xl lg:text-[5.75rem] lg:leading-[0.96]">
            {heroContent.title}
          </motion.h1>
          <motion.p variants={fadeInUp} className="mt-6 max-w-3xl text-balance text-2xl font-semibold leading-tight text-slate-100 sm:text-3xl">
            {heroContent.subtitle}
          </motion.p>
          <motion.p variants={fadeInUp} className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{heroContent.description}</motion.p>

          <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap gap-3">
            <Button href={heroContent.primaryCta.href}>{heroContent.primaryCta.label}</Button>
            <Button href={heroContent.secondaryCta.href} variant="secondary">
              {heroContent.secondaryCta.label}
            </Button>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap gap-3">
            {heroContent.highlights.map((item) => (
              <span
                key={item}
                className="interactive-surface rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
              >
                {item}
              </span>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap items-center gap-4">
            {siteConfig.socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${link.label} profile`}
                className="interactive-surface inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-100"
              >
                <SocialIcon label={link.label} className="h-4 w-4" />
                {link.label}
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.08 }}
          className="relative mx-auto w-full max-w-xl lg:max-w-none"
        >
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-[2.5rem] bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.18),transparent_44%)] blur-2xl" />
          <Card className="overflow-hidden p-4 sm:p-5">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-[linear-gradient(180deg,rgba(34,211,238,0.16),transparent)]" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,transparent,rgba(2,6,23,0.32))]" />
              <img
                src={heroContent.portrait.src}
                alt={heroContent.portrait.alt}
                width="720"
                height="860"
                fetchPriority="high"
                decoding="async"
                className="aspect-[0.84] w-full scale-[1.01] object-cover"
              />
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {heroContent.stats.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">{item.label}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-200">{item.value}</p>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}
