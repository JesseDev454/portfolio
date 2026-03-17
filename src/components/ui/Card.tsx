import { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/cn';

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div className={cn('surface tech-outline rounded-3xl shadow-soft', className)} {...props}>
      {children}
    </div>
  );
}

