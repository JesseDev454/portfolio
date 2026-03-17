import { motion } from 'framer-motion';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Section } from '../../components/ui/Section';
import { SocialIcon } from '../../components/ui/SocialIcon';
import { heroContent, siteConfig } from '../../data/site';
import { fadeInUp } from '../../lib/motion';

export function HomeSection() {
  return (
    <Section id="home" spacing="hero" className="pt-10 sm:pt-14 lg:pt-16">
      <div className="grid gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
            {heroContent.eyebrow}
          </div>

          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">{siteConfig.role}</p>
          <h1 className="mt-4 font-display text-6xl font-bold tracking-tight text-white sm:text-7xl lg:text-[5.75rem] lg:leading-[0.96]">
            {heroContent.title}
          </h1>
          <p className="mt-6 max-w-3xl text-balance text-2xl font-semibold leading-tight text-slate-100 sm:text-3xl">
            {heroContent.subtitle}
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{heroContent.description}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={heroContent.primaryCta.href}>{heroContent.primaryCta.label}</Button>
            <Button href={heroContent.secondaryCta.href} variant="secondary">
              {heroContent.secondaryCta.label}
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {heroContent.highlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            {siteConfig.socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-100 transition hover:border-cyan-400/35 hover:text-cyan-200"
              >
                <SocialIcon label={link.label} className="h-4 w-4" />
                {link.label}
              </a>
            ))}
          </div>
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
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-[linear-gradient(180deg,rgba(34,211,238,0.16),transparent)]" />
              <img
                src={heroContent.portrait.src}
                alt={heroContent.portrait.alt}
                className="aspect-[0.84] w-full object-cover"
              />
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {heroContent.stats.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
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
