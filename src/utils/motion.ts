import type { Variants } from "motion/react";
import { ANIMATION } from "../constants/animation";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: ANIMATION.duration.normal, 
      ease: ANIMATION.easing.easeOut 
    } 
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      duration: ANIMATION.duration.normal, 
      ease: ANIMATION.easing.easeOut 
    } 
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
      duration: ANIMATION.duration.normal, 
      ease: ANIMATION.easing.easeOut 
    } 
  },
};

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: 28 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: ANIMATION.duration.normal, 
      ease: ANIMATION.easing.easeOut 
    } 
  },
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: -28 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: ANIMATION.duration.normal, 
      ease: ANIMATION.easing.easeOut 
    } 
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};
