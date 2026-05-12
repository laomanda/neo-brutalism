import { useEffect, useState, useCallback } from "react";
import { motion, useSpring, useMotionValue } from "motion/react";
import { cn } from "../../utils/cn";

type CursorState = "default" | "open" | "view" | "build" | "drag" | "ship" | "hidden";

export function CustomCursor() {
  const [cursorState, setCursorState] = useState<CursorState>("default");
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Motion values for smooth following
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring configuration for premium feel
  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const onMouseMove = useCallback((e: MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
    if (!isVisible) setIsVisible(true);

    // Detect cursor type from data-cursor attributes
    const target = e.target as HTMLElement;
    const interactiveElement = target.closest("[data-cursor], a, button, [role='button']");
    
    if (interactiveElement) {
      const type = interactiveElement.getAttribute("data-cursor") as CursorState;
      if (type) {
        setCursorState(type);
      } else {
        setCursorState("open"); // Default for links/buttons
      }
    } else {
      setCursorState("default");
    }
  }, [mouseX, mouseY, isVisible]);

  const onMouseDown = () => setIsClicking(true);
  const onMouseUp = () => setIsClicking(false);
  const onMouseLeave = () => setIsVisible(false);
  const onMouseEnter = () => setIsVisible(true);

  useEffect(() => {
    window.addEventListener("pointermove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.body.addEventListener("mouseleave", onMouseLeave);
    document.body.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("pointermove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.body.removeEventListener("mouseleave", onMouseLeave);
      document.body.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [onMouseMove]);

  if (typeof window === "undefined") return null;

  // Hide on touch devices (where hover is not supported)
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  if (isTouchDevice) return null;

  const variants = {
    default: {
      width: 16,
      height: 16,
      rotate: 0,
      borderRadius: "4px",
    },
    open: {
      width: 80,
      height: 32,
      rotate: -4,
      borderRadius: "8px",
    },
    view: {
      width: 80,
      height: 32,
      rotate: 4,
      borderRadius: "8px",
    },
    build: {
      width: 80,
      height: 32,
      rotate: -2,
      borderRadius: "8px",
    },
    drag: {
      width: 80,
      height: 32,
      rotate: 6,
      borderRadius: "8px",
    },
    ship: {
      width: 80,
      height: 32,
      rotate: -6,
      borderRadius: "8px",
    },
  };

  return (
    <motion.div
      className={cn(
        "pointer-events-none fixed left-0 top-0 z-[9999] flex items-center justify-center border-[3px] border-black bg-[#F4F1E8] shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-opacity duration-300",
        isVisible ? "opacity-100" : "opacity-0"
      )}
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        ...(variants[cursorState as keyof typeof variants] || variants.default),
        scale: isClicking ? 0.85 : 1,
      }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 300,
        mass: 0.5,
      }}
    >
      {cursorState !== "default" && (
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-[10px] font-black uppercase tracking-widest text-black"
        >
          {cursorState}
        </motion.span>
      )}
    </motion.div>
  );
}
