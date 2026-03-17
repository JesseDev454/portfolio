import { motion } from 'framer-motion';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Section } from '../../components/ui/Section';
import { foundationHighlights, siteConfig } from '../../data/site';
import { fadeInUp } from '../../lib/motion';

export function FoundationIntro() {
  return (
    <Section className="pt-14 sm:pt-20">
      <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
            {siteConfig.status}
          </div>

          <h1 className="mt-8 max-w-4xl font-display text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            A modern developer portfolio foundation with a sharp product feel.
          </h1>

          <p className="mt-6 max-w-3xl text-balance text-lg leading-8 text-slate-300 sm:text-xl">
            Sprint 0 establishes the visual system, layout shell, and reusable UI layer so the portfolio already
            feels credible before the real content sections arrive.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#primitives">Explore Primitives</Button>
            <Button href={`mailto:${siteConfig.email}`} variant="secondary">
              Prepare Contact Layer
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.08 }}
          className="grid gap-4"
        >
          <Card className="p-5 sm:p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">Interface Mode</p>
                <p className="mt-3 font-display text-2xl font-bold text-white">Dark, restrained, and product-ready</p>
              </div>
              <div className="h-14 w-14 rounded-2xl bg-[radial-gradient(circle_at_30%_30%,rgba(34,211,238,0.55),rgba(14,165,233,0.08))]" />
            </div>
          </Card>

          <Card className="overflow-hidden p-0">
            <div className="border-b border-white/10 px-5 py-4 sm:px-6">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-cyan-300/90" />
                <span className="h-2.5 w-2.5 rounded-full bg-blue-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-500/70" />
              </div>
            </div>
            <div className="space-y-4 px-5 py-5 sm:px-6 sm:py-6">
              <div className="h-3 w-28 rounded-full bg-white/10" />
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="h-3 w-16 rounded-full bg-cyan-300/20" />
                  <div className="mt-4 h-8 w-24 rounded-full bg-white/10" />
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="h-3 w-20 rounded-full bg-cyan-300/20" />
                  <div className="mt-4 h-8 w-28 rounded-full bg-white/10" />
                </div>
              </div>
              <div className="grid gap-3">
                <div className="h-16 rounded-2xl border border-white/10 bg-white/5" />
                <div className="h-16 rounded-2xl border border-white/10 bg-white/5" />
              </div>
            </div>
          </Card>
        </motion.div>
      </div>

      <div id="foundation" className="mt-14 grid gap-4 md:grid-cols-3">
        {foundationHighlights.map((item, index) => (
          <motion.div
            key={item.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            transition={{ delay: index * 0.05 }}
          >
            <Card className="h-full p-6">
              <p className="text-sm font-semibold text-white">{item.title}</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
