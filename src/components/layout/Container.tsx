import { ReactNode } from 'react';
import { cn } from '../../lib/cn';

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className }: ContainerProps) {
  return <div className={cn('mx-auto w-full max-w-8xl px-6 sm:px-8 lg:px-12', className)}>{children}</div>;
}
