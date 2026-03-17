import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../lib/motion';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: ReactNode;
  align?: 'left' | 'center';
};

export function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  return (
    <motion.div
      className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      variants={fadeInUp}
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">{eyebrow}</p>
      <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
      <div className="mt-4 text-base leading-8 text-slate-300">{description}</div>
    </motion.div>
  );
}
