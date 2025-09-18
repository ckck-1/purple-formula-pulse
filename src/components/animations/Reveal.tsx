import React from "react";
import { useInView } from "./useInView";

interface RevealProps {
  children: React.ReactNode;
  delay?: number; // seconds
  duration?: number; // seconds
  x?: number; // px offset
  y?: number; // px offset
  blur?: number; // px
  as?: keyof JSX.IntrinsicElements;
  className?: string;
}

export function Reveal({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 24,
  blur = 6,
  as = "div",
  className,
}: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ rootMargin: "0px 0px -10% 0px", threshold: 0.2 });
  const Comp: any = as;
  const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const style: React.CSSProperties = prefersReduced
    ? { opacity: 1, transform: 'none', filter: 'none' }
    : {
        opacity: inView ? 1 : 0,
        transform: inView ? "translate3d(0,0,0)" : `translate3d(${x}px, ${y}px, 0)`,
        filter: inView ? "blur(0px)" : `blur(${blur}px)`,
        transitionProperty: "opacity, transform, filter",
        transitionDuration: `${duration}s`,
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
        transitionDelay: `${delay}s`,
        willChange: "opacity, transform, filter",
      };

  return (
    <Comp ref={ref} style={style} className={className}>
      {children}
    </Comp>
  );
}
