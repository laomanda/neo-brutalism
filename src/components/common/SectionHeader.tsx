import { cn } from "../../utils/cn";
import { Badge } from "../ui/Badge";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-9 max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      <div className="mb-4">
        <Badge variant="category">{eyebrow}</Badge>
      </div>
      <h2 className="text-balance-custom text-3xl font-extrabold uppercase leading-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 max-w-2xl text-base font-semibold leading-7 text-[var(--foreground)]/80",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
