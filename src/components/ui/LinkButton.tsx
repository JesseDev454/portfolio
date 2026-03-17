import { AnchorHTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/cn';

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
};

export function LinkButton({
  children,
  className,
  variant = 'primary',
  ...props
}: LinkButtonProps) {
  return (
    <a
      className={cn(
        'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-200',
        variant === 'primary'
          ? 'bg-cyan-400 text-slate-950 hover:bg-cyan-300'
          : 'border border-white/10 bg-white/5 text-slate-100 hover:border-cyan-400/40 hover:bg-white/10',
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}

