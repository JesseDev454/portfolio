import { SectionHeading } from '../components/ui/SectionHeading';
import { SectionShell } from '../components/ui/SectionShell';
import { about } from '../data/portfolio';

export function AboutSection() {
  return (
    <SectionShell id="about">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <SectionHeading
          eyebrow="About"
          title={about.title}
          description={
            <>
              {about.body.map((paragraph) => (
                <p key={paragraph} className="mb-4 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </>
          }
        />

        <div className="glass-panel rounded-3xl p-6 shadow-glow sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Working Style</p>
          <div className="mt-6 space-y-4">
            {about.points.map((point) => (
              <div key={point} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-200">
                {point}
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

