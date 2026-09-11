// ============================================================================
// Reveal.tsx — SCROLL REVEAL ANIMATION (no library needed)
// Wrap any element: it fades + slides up the first time it enters the
// viewport, using IntersectionObserver.
//   <Reveal delay={150}> ...content... </Reveal>
// ============================================================================
import { useEffect, useRef } from 'react';
import type { CSSProperties, ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number; // milliseconds before the element starts animating
  style?: CSSProperties;
}

export function Reveal({ children, className = '', delay = 0, style }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add('reveal'); // starts hidden (see global.css)
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('is-visible'); // animate in
            io.disconnect();                // animate only once
          }
        });
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{ ...style, '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
