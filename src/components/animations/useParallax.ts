import { useEffect, useRef, useState } from "react";

// Simple performant parallax using rAF. Positive speed moves slower than scroll.
// Example: const { ref, style } = useParallax(0.2)
// <div ref={ref} style={style} />
export function useParallax<T extends HTMLElement = HTMLDivElement>(speed = 0.2) {
  const ref = useRef<T | null>(null);
  const [style, setStyle] = useState<React.CSSProperties>({ transform: "translate3d(0,0,0)" });

  useEffect(() => {
    const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setStyle({ transform: 'none' });
      return;
    }
    let frame = 0;

    const handleScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        // Parallax amount based on element's distance from viewport center
        const viewportCenter = window.innerHeight / 2;
        const delta = rect.top + rect.height / 2 - viewportCenter;
        const translateY = -delta * speed * 0.2; // tune factor
        setStyle((prev) => ({ ...prev, transform: `translate3d(0, ${translateY.toFixed(2)}px, 0)` }));
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [speed]);

  return { ref, style } as const;
}
