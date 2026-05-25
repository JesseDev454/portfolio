import { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/cn';

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div className={cn('glass-panel tech-outline interactive-surface scanline-card relative rounded-lg', className)} {...props}>
      {children}
    </div>
  );
}
