import { ReactNode } from 'react';

type PillProps = {
  children: ReactNode;
};

export function Pill({ children }: PillProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
      {children}
    </span>
  );
}

