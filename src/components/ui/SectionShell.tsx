import { ReactNode } from 'react';
import { cn } from '../../lib/cn';
import { Container } from '../layout/Container';

type SectionShellProps = {
  id: string;
  children: ReactNode;
  className?: string;
};

export function SectionShell({ id, children, className }: SectionShellProps) {
  return (
    <section id={id} className={cn('section-anchor py-20 sm:py-24', className)}>
      <Container>{children}</Container>
    </section>
  );
}

