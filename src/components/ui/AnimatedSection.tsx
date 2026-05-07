import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "../../utils/cn";
import * as variants from "../../utils/motion";
import { ANIMATION } from "../../constants/animation";

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
  const selectedVariant = shouldReduceMotion ? variants.fadeIn : variants[variant];

  // If we only want simple fadeIn on reduce motion, fadeIn is applied.
  // Add delay to the variant transition if present
  const mergedVariant = {
    ...selectedVariant,
    visible: {
      ...selectedVariant.visible,
      transition: {
        ...(selectedVariant.visible as any).transition,
        delay,
      }
    }
  };

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
