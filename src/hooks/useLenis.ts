import { useEffect } from "react";

export function useLenis() {
  useEffect(() => {
    // Disable Lenis on mobile devices to save battery and improve Lighthouse performance scores
    const isMobile = window.innerWidth < 1024;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isMobile || prefersReducedMotion) {
      return;
    }

    // Dynamically import Lenis + GSAP only when needed (desktop only)
    // This prevents ~80KB of JS from being loaded on mobile or when reduced motion is preferred
    let cleanup: (() => void) | undefined;

    import("lenis").then(({ default: Lenis }) =>
      import("gsap").then(({ gsap }) =>
        import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
          gsap.registerPlugin(ScrollTrigger);

          const lenis = new Lenis({
            duration: 0.9,
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 1.15,
          });

          lenis.on("scroll", ScrollTrigger.update);

          let frameId = 0;
          const raf = (time: number) => {
            lenis.raf(time);
            frameId = requestAnimationFrame(raf);
          };
          frameId = requestAnimationFrame(raf);

          cleanup = () => {
            cancelAnimationFrame(frameId);
            lenis.destroy();
          };
        })
      )
    );

    return () => {
      cleanup?.();
    };
  }, []);
}
