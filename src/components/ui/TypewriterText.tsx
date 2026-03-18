import { useLayoutEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { cn } from '../../lib/cn';

let hasCompletedTypewriter = false;

type TypewriterTextProps = {
  text: string;
  className?: string;
  cursorClassName?: string;
  speed?: number;
  startDelay?: number;
  onComplete?: () => void;
};

export function TypewriterText({
  text,
  className,
  cursorClassName,
  speed = 72,
  startDelay = 120,
  onComplete,
}: TypewriterTextProps) {
  const shouldReduceMotion = useReducedMotion();
  const [displayedText, setDisplayedText] = useState(text);
  const [isComplete, setIsComplete] = useState(() => shouldReduceMotion || hasCompletedTypewriter);
  const hasCompletedRef = useRef(false);
  const timeoutIdsRef = useRef<number[]>([]);

  useLayoutEffect(() => {
    const completeAnimation = () => {
      setDisplayedText(text);
      setIsComplete(true);
      hasCompletedTypewriter = true;

      if (!hasCompletedRef.current) {
        hasCompletedRef.current = true;
        onComplete?.();
      }
    };

    if (shouldReduceMotion || hasCompletedTypewriter) {
      completeAnimation();
      return;
    }

    let cancelled = false;
    setDisplayedText('');
    setIsComplete(false);

    const queueTimeout = (callback: () => void, delay: number) => {
      const timeoutId = window.setTimeout(callback, delay);
      timeoutIdsRef.current.push(timeoutId);
    };

    const revealNext = (nextCount: number) => {
      if (cancelled) {
        return;
      }

      setDisplayedText(text.slice(0, nextCount));

      if (nextCount >= text.length) {
        completeAnimation();
        return;
      }

      queueTimeout(() => revealNext(nextCount + 1), speed);
    };

    queueTimeout(() => revealNext(1), startDelay);
    queueTimeout(() => completeAnimation(), startDelay + text.length * speed + 240);

    return () => {
      cancelled = true;
      timeoutIdsRef.current.forEach((timeoutId) => window.clearTimeout(timeoutId));
      timeoutIdsRef.current = [];
    };
  }, [onComplete, shouldReduceMotion, speed, startDelay, text]);

  return (
    <span className={cn('inline-flex items-end whitespace-nowrap', className)}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">{displayedText}</span>
      {!isComplete ? (
        <span
          aria-hidden="true"
          className={cn('hero-type-cursor ml-1 inline-block h-[0.9em] w-px rounded-full bg-cyan-200/90 align-[-0.08em]', cursorClassName)}
        />
      ) : null}
    </span>
  );
}
