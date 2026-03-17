import { motion } from 'framer-motion';
import { Container } from '../components/layout/Container';
import { LinkButton } from '../components/ui/LinkButton';
import { Pill } from '../components/ui/Pill';
import { SocialIcon } from '../components/ui/SocialIcon';
import { profile } from '../data/portfolio';
import { fadeInUp } from '../lib/motion';

export function HeroSection() {
  return (
    <section className="section-anchor relative overflow-hidden pb-16 pt-16 sm:pb-20 sm:pt-20 lg:pb-24" aria-label="Hero">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <motion.div className="max-w-3xl" initial="hidden" animate="visible" variants={fadeInUp}>
            <Pill>{profile.availability}</Pill>
            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">{profile.role}</p>
            <h1 className="mt-5 font-display text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              {profile.name}
            </h1>
            <p className="mt-6 max-w-2xl text-2xl font-semibold leading-tight text-slate-100 sm:text-3xl">
              {profile.headline}
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{profile.summary}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <LinkButton href="#projects">See Projects</LinkButton>
              <LinkButton href={`mailto:${profile.email}`} variant="secondary">
                Email Me
              </LinkButton>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {profile.introHighlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-5">
              {profile.socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-cyan-400/40 hover:text-cyan-300"
                >
                  <SocialIcon label={link.label as 'GitHub' | 'LinkedIn' | 'Facebook'} className="h-5 w-5" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative mx-auto w-full max-w-md lg:max-w-none"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.08 }}
          >
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-cyan-400/10 blur-3xl" />
            <div className="glass-panel rounded-[2rem] p-4 shadow-glow">
              <img
                src={profile.portrait.src}
                alt={profile.portrait.alt}
                className="w-full rounded-[1.5rem] border border-white/10 object-cover"
              />
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">Location</p>
                  <p className="mt-2 text-sm text-slate-200">{profile.location}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">Focus</p>
                  <p className="mt-2 text-sm text-slate-200">Frontend, backend, and product delivery</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

