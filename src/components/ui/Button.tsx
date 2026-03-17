import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/cn';

type SharedProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
};

type AnchorProps = SharedProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof SharedProps> & {
    href: string;
  };

type NativeButtonProps = SharedProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof SharedProps | 'href'> & {
    href?: never;
  };

type ButtonProps = AnchorProps | NativeButtonProps;

const baseClassName =
  'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950';

const variants = {
  primary: 'bg-cyan-400 text-slate-950 hover:bg-cyan-300',
  secondary: 'border border-white/10 bg-white/5 text-slate-100 hover:border-cyan-400/40 hover:bg-white/10',
  ghost: 'text-slate-200 hover:bg-white/5 hover:text-cyan-200',
} as const;

export function Button(props: ButtonProps) {
  const { children, className, variant = 'primary' } = props;
  const composedClassName = cn(baseClassName, variants[variant], className);

  if (typeof props.href === 'string') {
    const { href, children: _children, className: _className, variant: _variant, ...anchorProps } = props;
    return (
      <a href={href} className={composedClassName} {...anchorProps}>
        {children}
      </a>
    );
  }

  const { children: _children, className: _className, variant: _variant, ...buttonProps } = props;
  return (
    <button className={composedClassName} {...buttonProps}>
      {children}
    </button>
  );
}
