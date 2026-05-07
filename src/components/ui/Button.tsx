import type { ButtonHTMLAttributes, ReactNode } from "react";
import { motion } from "motion/react";
import { buttonVariants, type ButtonSize, type ButtonVariant } from "./buttonVariants";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  type = "button",
  disabled,
  ...props
}: ButtonProps) {
  return (
    <motion.button 
      className={buttonVariants(variant, size, className)} 
      type={type} 
      disabled={disabled}
      whileTap={disabled ? undefined : { scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
