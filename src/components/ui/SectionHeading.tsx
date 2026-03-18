import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, revealViewport } from '../../lib/motion';

type SectionHeadingProps = {
  eyebrow: string;
  title?: string;
  description?: ReactNode;
  align?: 'left' | 'center';
};

export function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  return (
    <motion.div
      className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-[44rem]'}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
      variants={fadeInUp}
    >
      <p className="eyebrow-chip text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-100">{eyebrow}</p>
      {title ? (
        <h2 className="mt-5 font-display text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl lg:text-[3rem] lg:leading-[1.02]">
          {title}
        </h2>
      ) : null}
      {description ? <div className="mt-6 text-base leading-8 text-slate-300">{description}</div> : null}
    </motion.div>
  );
}
