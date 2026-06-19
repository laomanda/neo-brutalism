import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "../../utils/cn";
import * as variants from "../../utils/motion";
import { ANIMATION } from "../../constants/animation";
import { useIsMobile } from "../../hooks/useIsMobile";

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "fadeUp" | "fadeIn" | "scaleIn" | "slideLeft" | "slideRight";
  amount?: number;
  once?: boolean;
};

export function AnimatedSection({ 
  children, 
  className, 
  delay = 0,
  variant = "fadeUp",
  amount = ANIMATION.viewport.amount,
  once = ANIMATION.viewport.once
}: AnimatedSectionProps) {
  const shouldReduceMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const selectedVariant = shouldReduceMotion ? variants.fadeIn : variants[variant];

  // If we only want simple fadeIn on reduce motion, fadeIn is applied.
  // Add delay to the variant transition if present
  const visibleState = selectedVariant.visible as Record<string, unknown>;
  const existingTransition =
    typeof visibleState.transition === "object" && visibleState.transition !== null
      ? visibleState.transition
      : {};

  const mergedVariant: Variants = {
    ...selectedVariant,
    visible: {
      ...visibleState,
      transition: {
        ...existingTransition,
        delay,
      }
    }
  };

  if (isMobile) {
    return (
      <div className={cn(className)}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={cn(className)}
      variants={mergedVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
    >
      {children}
    </motion.div>
  );
}
