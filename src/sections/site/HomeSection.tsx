import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Button } from '../../components/ui/Button';
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
    <Section id="home" spacing="hero" className="relative overflow-hidden pt-16 sm:pt-20 lg:pt-28">
      <div className="relative min-h-[650px]">
        <div className="pointer-events-none absolute left-1/2 top-1/4 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-[#a5e7ff]/5 blur-[120px] sm:h-[34rem] sm:w-[34rem]" />

        <div className="grid gap-12 pt-10 sm:gap-14 md:pt-16 lg:grid-cols-[1.24fr_0.76fr] lg:items-center lg:gap-14 lg:pt-24">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="relative z-10">
            <motion.p variants={fadeInUp} className="font-mono text-xs uppercase tracking-[0.16em] text-[#a5e7ff]">
              {heroContent.intro}
            </motion.p>

            <motion.h1
              variants={fadeInUp}
              className="text-glow mt-5 max-w-full font-display text-[2rem] font-extrabold leading-tight text-[#e5e2e1] min-[380px]:text-[2.25rem] sm:whitespace-nowrap sm:text-5xl md:text-6xl xl:text-7xl"
            >
              <TypewriterText
                text={heroContent.title}
                onComplete={() => setIsNameVisible(true)}
                className="whitespace-nowrap"
                cursorClassName="w-1 bg-[#a5e7ff] align-[-0.05em]"
              />
            </motion.h1>

            <motion.p
              initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 16 }}
              animate={{ opacity: isNameVisible ? 1 : 0, y: isNameVisible ? 0 : 16 }}
              transition={{ duration: 0.45, ease: standardEase }}
              className="gradient-text mt-5 font-display text-2xl font-semibold sm:text-3xl"
            >
              {heroContent.subtitle}
            </motion.p>

            <motion.div
              initial="hidden"
              animate={isNameVisible ? 'visible' : 'hidden'}
              variants={staggerContainer}
              className="mt-8"
            >
              <motion.p variants={fadeInUp} className="max-w-2xl text-base leading-8 text-[#bbc9cf] sm:text-lg">
                {heroContent.description}
              </motion.p>

              <motion.div variants={fadeInUp} className="mt-9 flex flex-wrap gap-3">
                <Button href={heroContent.primaryCta.href}>{heroContent.primaryCta.label}</Button>
                <Button href={heroContent.secondaryCta.href} variant="secondary">
                  {heroContent.secondaryCta.label}
                </Button>
              </motion.div>

              <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap items-center gap-3">
                {siteConfig.socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`${link.label} profile`}
                    className="interactive-surface inline-flex items-center gap-3 rounded border border-white/10 bg-black/30 px-4 py-3 font-mono text-xs uppercase tracking-[0.1em] text-[#e5e2e1]"
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
            className="relative mx-auto w-full max-w-[19.5rem] sm:max-w-[24rem] lg:max-w-[24rem]"
          >
            <div className="pointer-events-none absolute inset-[-1.25rem] -z-10 rounded-full bg-[radial-gradient(circle,rgba(165,231,255,0.13),transparent_64%)] blur-3xl" />
            <div className="glass-panel relative aspect-square rounded-full border-[#a5e7ff]/30 p-3 shadow-[0_0_50px_rgba(165,231,255,0.1)]">
              <div className="hero-orbit pointer-events-none absolute inset-0 rounded-full border border-[#dfb7ff]/20" />
              <div className="hero-orbit-reverse pointer-events-none absolute inset-5 rounded-full border border-[#00fd93]/20" />
              <div className="portrait-scan relative h-full overflow-hidden rounded-full border border-white/10 bg-[#201f1f]">
                <img
                  src={heroContent.portrait.src}
                  alt={heroContent.portrait.alt}
                  width="720"
                  height="720"
                  decoding="async"
                  className="h-full w-full object-cover object-center"
                />
                <div className="text-glow absolute bottom-5 right-5 flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#a5e7ff]/50 bg-[#131313]/82 font-display text-lg font-extrabold text-[#e5e2e1] backdrop-blur sm:h-16 sm:w-16 sm:text-xl">
                  GK
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
