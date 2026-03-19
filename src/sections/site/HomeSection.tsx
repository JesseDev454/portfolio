import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Section } from '../../components/ui/Section';
import { SocialIcon } from '../../components/ui/SocialIcon';
import { TypewriterText } from '../../components/ui/TypewriterText';
import { heroContent, siteConfig } from '../../data/site';
import { fadeInUp, staggerContainer, standardEase } from '../../lib/motion';

export function HomeSection() {
  const shouldReduceMotion = useReducedMotion();
  const [isNameVisible, setIsNameVisible] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion) {
      setIsNameVisible(true);
    }
  }, [shouldReduceMotion]);

  return (
    <Section id="home" spacing="hero" className="relative overflow-hidden pt-12 sm:pt-16 lg:pt-20">
      <div className="relative">
        <div className="pointer-events-none absolute inset-x-[-4%] inset-y-[-10%] -z-10 overflow-hidden sm:inset-x-[-8%] sm:inset-y-[-12%]">
          <div className="hero-radial-glow" />
          <div className="hero-radial-glow hero-radial-glow-secondary" />
          <div className="hero-grid-drift" />
          <div className="hero-scan-sweep" />
          <div className="hero-signal-noise" />
        </div>

        <div className="grid gap-12 sm:gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-16">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="relative z-10">
            <motion.p variants={fadeInUp} className="text-[0.82rem] font-semibold uppercase tracking-[0.28em] text-slate-400 sm:text-[0.9rem]">
              {heroContent.intro}
            </motion.p>

            <motion.h1
              variants={fadeInUp}
              className="mt-4 max-w-[10ch] pr-2 font-display text-[clamp(2.35rem,11vw,5rem)] font-bold tracking-[-0.07em] text-white leading-[0.94] sm:max-w-none sm:pr-0 sm:text-[clamp(4.15rem,9vw,6.8rem)] lg:leading-[0.92]"
            >
              <TypewriterText text={heroContent.title} onComplete={() => setIsNameVisible(true)} />
            </motion.h1>

            <motion.p
              initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 16 }}
              animate={{ opacity: isNameVisible ? 1 : 0, y: isNameVisible ? 0 : 16 }}
              transition={{ duration: 0.45, ease: standardEase }}
              className="mt-5 text-xl font-semibold tracking-[0.02em] text-cyan-100 sm:text-2xl"
            >
              {heroContent.subtitle}
            </motion.p>

            <motion.div
              initial="hidden"
              animate={isNameVisible ? 'visible' : 'hidden'}
              variants={staggerContainer}
              className="mt-6"
            >
              <motion.p variants={fadeInUp} className="max-w-2xl text-lg leading-8 text-slate-300">
                {heroContent.description}
              </motion.p>

              <motion.div variants={fadeInUp} className="mt-9 flex flex-wrap gap-3">
                <Button href={heroContent.primaryCta.href}>{heroContent.primaryCta.label}</Button>
                <Button href={heroContent.secondaryCta.href} variant="secondary">
                  {heroContent.secondaryCta.label}
                </Button>
              </motion.div>

              <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap items-center gap-3">
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
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.08 }}
            className="relative mx-auto w-full max-w-[21rem] px-1 sm:max-w-xl sm:px-0 lg:max-w-none"
          >
            <div className="pointer-events-none absolute inset-1 -z-10 rounded-[2.4rem] bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.16),transparent_44%)] blur-3xl sm:inset-0 sm:rounded-[2.8rem]" />
            <Card className="overflow-hidden p-4 sm:p-5">
              <div className="panel-grid relative overflow-hidden rounded-[1.85rem] border border-white/10 bg-slate-950/75 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_65%_18%,rgba(103,232,249,0.12),transparent_28%)]" />
                <div className="pointer-events-none absolute inset-0 hero-portrait-grid" />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-[linear-gradient(180deg,rgba(103,232,249,0.14),transparent)]" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,transparent,rgba(2,6,23,0.38))]" />
                <div className="pointer-events-none absolute left-5 right-5 top-5 z-10 flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan-300/90" />
                  <span className="h-2.5 w-2.5 rounded-full bg-blue-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-500/70" />
                </div>
                <div className="hero-badge absolute bottom-4 right-4 z-10 flex h-14 w-14 items-center justify-center rounded-full text-base font-semibold tracking-[0.08em] text-cyan-50 sm:bottom-6 sm:right-6 sm:h-16 sm:w-16 sm:text-lg">
                  GK
                </div>
                <img
                  src={heroContent.portrait.src}
                  alt={heroContent.portrait.alt}
                  width="720"
                  height="860"
                  fetchPriority="high"
                  decoding="async"
                  className="aspect-[0.84] w-full object-cover object-center"
                />
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
