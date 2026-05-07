import { useEffect, useMemo, useRef, useState } from "react";

type CounterNumberProps = {
  value: number | string;
  suffix?: string;
  duration?: number;
};

function getNumericValue(value: number | string) {
  if (typeof value === "number") {
    return Number.isFinite(value) ? value : null;
  }

  return /^-?\d+(\.\d+)?$/.test(value) ? Number(value) : null;
}

export function CounterNumber({ value, suffix = "", duration = 900 }: CounterNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);
  const numericValue = useMemo(() => getNumericValue(value), [value]);
  const shouldReduceMotion =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [displayValue, setDisplayValue] = useState(() =>
    numericValue === null ? String(value) : shouldReduceMotion ? String(numericValue) : "0",
  );

  useEffect(() => {
    if (numericValue === null || !ref.current || hasAnimated.current) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      hasAnimated.current = true;
      return;
    }

    const element = ref.current;
    let frameId = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) {
          return;
        }

        hasAnimated.current = true;
        const startTime = performance.now();

        const tick = (time: number) => {
          const progress = Math.min((time - startTime) / duration, 1);
          const easedProgress = 1 - Math.pow(1 - progress, 3);
          setDisplayValue(String(Math.round(easedProgress * numericValue)));

          if (progress < 1) {
            frameId = requestAnimationFrame(tick);
          }
        };

        frameId = requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.35 },
    );

    observer.observe(element);

    return () => {
      cancelAnimationFrame(frameId);
      observer.disconnect();
    };
  }, [duration, numericValue]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}
