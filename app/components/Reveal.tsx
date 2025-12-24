"use client";

import { useEffect, useRef } from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  from?: 'up' | 'down' | 'left' | 'right';
  delay?: number; // milliseconds
}

export default function Reveal({ children, className = '', threshold = 0.15, from, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (delay) entry.target.animate([], { duration: 0 });
            entry.target.classList.add('reveal-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    el.classList.add('reveal');
    if (from) el.classList.add(`reveal-${from}`);
    if (delay) (el.style as any).transitionDelay = `${delay}ms`;
    obs.observe(el);

    return () => obs.disconnect();
  }, [threshold, from, delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
