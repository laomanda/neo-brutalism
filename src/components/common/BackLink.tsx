import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { buttonVariants } from "../ui/buttonVariants";

type BackLinkProps = {
  to: string;
  children: ReactNode;
};

export function BackLink({ to, children }: BackLinkProps) {
  return (
    <Link className={buttonVariants("outline", "md")} to={to}>
      <ArrowLeft size={18} strokeWidth={3} aria-hidden="true" />
      {children}
    </Link>
  );
}
