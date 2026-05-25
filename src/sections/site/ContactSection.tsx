import { motion } from 'framer-motion';
import { Section } from '../../components/ui/Section';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { SocialIcon } from '../../components/ui/SocialIcon';
import { contactContent, siteConfig } from '../../data/site';
import { revealViewport, slideInLeft, slideInRight } from '../../lib/motion';

export function ContactSection() {
  return (
    <Section id="contact" className="pb-24 sm:pb-28">
      <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
        <SectionHeading
          eyebrow={contactContent.eyebrow}
          title={contactContent.title}
          motionVariant={slideInLeft}
        />

        <motion.div initial="hidden" whileInView="visible" viewport={revealViewport} variants={slideInRight}>
          <div className="max-w-2xl">
            <p className="mb-8 text-base leading-8 text-[#bbc9cf]">{contactContent.description}</p>
            <div className="space-y-4">
              <address className="not-italic">
                <a
                  href={contactContent.primaryHref}
                  className="group inline-flex max-w-full items-center gap-4 text-left text-[#e5e2e1] transition hover:text-[#a5e7ff]"
                >
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded border border-white/10 bg-white/[0.04] text-[#a5e7ff]">
                    <MailIcon />
                  </span>
                  <span className="break-all text-lg font-medium leading-7 sm:text-xl">{contactContent.primaryValue}</span>
                </a>
              </address>

              <a
                href={contactContent.phoneHref}
                className="group inline-flex max-w-full items-center gap-4 text-left text-[#e5e2e1] transition hover:text-[#a5e7ff]"
                aria-label={`Call ${contactContent.phoneValue}`}
              >
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded border border-white/10 bg-white/[0.04] text-[#a5e7ff]">
                  <PhoneIcon />
                </span>
                <span className="break-words text-lg font-medium leading-7 sm:text-xl">{contactContent.phoneValue}</span>
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
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
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        d="M4 7.5h16v9A1.5 1.5 0 0 1 18.5 18h-13A1.5 1.5 0 0 1 4 16.5v-9Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="m5 8 7 5 7-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        d="M7.7 4.5h2.07c.39 0 .74.25.87.62l.76 2.17c.11.32.04.67-.2.92l-1.36 1.49a13.74 13.74 0 0 0 4.39 4.39l1.49-1.36c.25-.23.61-.31.92-.19l2.17.75c.37.13.62.48.62.87v2.08c0 .48-.36.89-.83.94l-1.55.17c-1.48.16-2.98-.16-4.27-.92a16.76 16.76 0 0 1-5.58-5.58 7.28 7.28 0 0 1-.92-4.27l.17-1.55c.05-.47.46-.83.95-.83Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
