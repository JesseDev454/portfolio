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
  'inline-flex items-center justify-center rounded px-6 py-3 font-mono text-[0.72rem] font-bold uppercase tracking-[0.12em] transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a5e7ff]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#131313] active:translate-y-px sm:px-8 sm:py-4';

const variants = {
  primary:
    'bg-[linear-gradient(90deg,#a5e7ff,#9d05ff)] text-[#003543] shadow-[0_0_24px_rgba(165,231,255,0.18)] hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_0_30px_rgba(165,231,255,0.46)]',
  secondary:
    'border border-[#a5e7ff]/30 bg-black/20 text-[#a5e7ff] backdrop-blur hover:-translate-y-0.5 hover:border-[#a5e7ff]/80 hover:bg-[#a5e7ff]/10 hover:shadow-[0_0_24px_rgba(165,231,255,0.22)]',
  ghost: 'text-[#bbc9cf] hover:bg-white/5 hover:text-white',
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
