import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "../../utils/cn";

type ContainerProps<T extends ElementType = "div"> = {
  as?: T;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function Container<T extends ElementType = "div">({
  as,
  children,
  className,
  ...props
}: ContainerProps<T>) {
  const Component = as ?? "div";

  return (
    <Component className={cn("container-custom", className)} {...props}>
      {children}
    </Component>
  );
}
