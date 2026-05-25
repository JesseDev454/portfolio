import { ReactNode } from 'react';
import { motion, type Variants } from 'framer-motion';
import { fadeInUp, revealViewport } from '../../lib/motion';

type SectionHeadingProps = {
  eyebrow: string;
  title?: string;
  description?: ReactNode;
  align?: 'left' | 'center';
  motionVariant?: Variants;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  motionVariant = fadeInUp,
}: SectionHeadingProps) {
  return (
    <motion.div
      className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-[44rem]'}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
      variants={motionVariant}
    >
      <p className="section-label">{eyebrow}</p>
      {title ? (
        <h2 className="mt-5 font-display text-3xl font-bold text-[#e5e2e1] sm:text-4xl lg:text-5xl lg:leading-tight">
          {title}
        </h2>
      ) : null}
      {description ? <div className="mt-6 text-base leading-8 text-[#bbc9cf]">{description}</div> : null}
    </motion.div>
  );
}
