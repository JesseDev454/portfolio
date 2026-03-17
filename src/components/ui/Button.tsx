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
  'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold tracking-[0.01em] transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 active:translate-y-px';

const variants = {
  primary:
    'bg-[linear-gradient(180deg,#8af0ff,#38bdf8)] text-slate-950 shadow-[0_16px_38px_rgba(8,145,178,0.18)] hover:-translate-y-0.5 hover:brightness-105 hover:shadow-[0_20px_44px_rgba(8,145,178,0.24)]',
  secondary:
    'border border-white/10 bg-white/[0.04] text-slate-100 hover:-translate-y-0.5 hover:border-cyan-400/30 hover:bg-white/[0.08]',
  ghost: 'text-slate-300 hover:bg-white/5 hover:text-white',
} as const;

export function Button(props: ButtonProps) {
  const { children, className, variant = 'primary' } = props;
  const composedClassName = cn(baseClassName, variants[variant], className);

  if (typeof props.href === 'string') {
    const { href, children: _children, className: _className, variant: _variant, rel, ...anchorProps } = props;
    const computedRel = anchorProps.target === '_blank' ? (rel ?? 'noreferrer noopener') : rel;

    return (
      <a href={href} className={composedClassName} {...anchorProps} rel={computedRel}>
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
