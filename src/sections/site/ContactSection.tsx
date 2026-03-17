import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Section } from '../../components/ui/Section';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { SocialIcon } from '../../components/ui/SocialIcon';
import { contactContent, siteConfig } from '../../data/site';

export function ContactSection() {
  return (
    <Section id="contact">
      <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
        <SectionHeading
          eyebrow={contactContent.eyebrow}
          title={contactContent.title}
          description={contactContent.description}
        />

        <Card className="p-6 sm:p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">{contactContent.primaryLabel}</p>
          <a
            href={contactContent.primaryHref}
            className="mt-4 inline-block font-display text-3xl font-bold tracking-tight text-white transition hover:text-cyan-200 sm:text-4xl"
          >
            {contactContent.primaryValue}
          </a>

          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">{contactContent.secondaryLabel}</p>
          <p className="mt-3 max-w-2xl text-base leading-8 text-slate-300">{contactContent.secondaryValue}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={contactContent.primaryHref}>Start an Email</Button>
            <Button href={siteConfig.githubUrl} target="_blank" rel="noreferrer" variant="secondary">
              GitHub Profile
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
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
        </Card>
      </div>
    </Section>
  );
}
