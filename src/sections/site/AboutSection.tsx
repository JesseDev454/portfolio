import { Card } from '../../components/ui/Card';
import { Section } from '../../components/ui/Section';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { aboutContent } from '../../data/site';
import { slideInLeft } from '../../lib/motion';

export function AboutSection() {
  return (
    <Section id="about">
      <SectionHeading eyebrow={aboutContent.eyebrow} motionVariant={slideInLeft} />

      <Card className="mt-12 p-7 sm:p-9 lg:p-12">
        <div className="max-w-5xl space-y-5 text-base leading-8 text-[#bbc9cf] sm:text-lg">
          {aboutContent.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Card>
    </Section>
  );
}
