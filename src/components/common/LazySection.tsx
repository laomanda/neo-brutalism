import { useEffect, useRef, useState, type ReactNode } from "react";

type LazySectionProps = {
  children: ReactNode;
  height?: string;
  className?: string;
  id?: string;
};

export function LazySection({ children, height = "400px", className, id }: LazySectionProps) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip lazy loading if user prefers reduced motion or on server-side rendering
    if (typeof window === "undefined") return;
    
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsIntersecting(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "350px 0px", // Loads 350px before entering viewport for a seamless scroll
        threshold: 0.01,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      id={id}
      className={className}
      style={{
        minHeight: isIntersecting ? "auto" : height,
        scrollMarginTop: "7rem",
      }}
    >
      {isIntersecting ? children : null}
    </div>
  );
}
