import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { ANIMATION } from "../../constants/animation";

type PageTransitionProps = {
  children: ReactNode;
  className?: string;
  keyId?: string;
};

export function PageTransition({ children, className, keyId }: PageTransitionProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className} key={keyId}>{children}</div>;
  }

  return (
    <motion.div
      key={keyId}
      className={className}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ 
        duration: 0.28, 
        ease: ANIMATION.easing.easeOut 
      }}
    >
      {children}
    </motion.div>
  );
}
