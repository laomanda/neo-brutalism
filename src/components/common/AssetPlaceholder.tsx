import { Image as ImageIcon } from "lucide-react";
import clsx from "clsx";

type AssetPlaceholderProps = {
  label: string;
  description?: string;
  className?: string;
  accent?: "blue" | "orange" | "lime" | "purple";
};

const accentStyles = {
  blue: "bg-blue-500/10 text-blue-600 border-blue-200",
  orange:
    "bg-orange-500/10 text-orange-600 border-orange-200",
  lime: "bg-lime-500/10 text-lime-600 border-lime-200",
  purple:
    "bg-purple-500/10 text-purple-600 border-purple-200",
};

export const AssetPlaceholder = ({
  label,
  description,
  className,
  accent = "blue",
}: AssetPlaceholderProps) => {
  return (
    <div
      className={clsx(
        "flex flex-col items-center justify-center p-8 text-center",
        "w-full h-full min-h-[200px]",
        "border-3 border-border bg-card",
        "bg-[radial-gradient(var(--border)_1px,transparent_1px)] [background-size:20px_20px]",
        className
      )}
    >
      <div
        className={clsx(
          "w-16 h-16 rounded-full flex items-center justify-center mb-4 border-2 shadow-brutal-sm",
          accentStyles[accent]
        )}
      >
        <ImageIcon className="w-8 h-8" />
      </div>
      <p className="font-bold font-mono text-sm uppercase tracking-wider text-foreground">
        {label}
      </p>
      {description && (
        <p className="text-xs text-muted-foreground mt-2 max-w-[200px]">
          {description}
        </p>
      )}
    </div>
  );
};
