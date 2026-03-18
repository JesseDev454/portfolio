import { ReactNode } from 'react';
import { cn } from '../../lib/cn';
import { Container } from '../layout/Container';

type SectionProps = {
  id?: string;
  navId?: string;
  className?: string;
  containerClassName?: string;
  spacing?: 'default' | 'compact' | 'hero';
  children: ReactNode;
};

export function Section({ id, navId, className, containerClassName, spacing = 'default', children }: SectionProps) {
  const spacingClassName =
    spacing === 'hero' ? 'py-20 sm:py-24 lg:py-32' : spacing === 'compact' ? 'py-16 sm:py-20' : 'py-20 sm:py-24 lg:py-28';

  return (
    <section id={id} data-section={navId ?? id} className={cn('section-anchor', spacingClassName, className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
