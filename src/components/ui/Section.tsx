import { ReactNode } from 'react';
import { cn } from '../../lib/cn';
import { Container } from '../layout/Container';

type SectionProps = {
  id?: string;
  className?: string;
  containerClassName?: string;
  children: ReactNode;
};

export function Section({ id, className, containerClassName, children }: SectionProps) {
  return (
    <section id={id} className={cn('section-anchor py-20 sm:py-24', className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
