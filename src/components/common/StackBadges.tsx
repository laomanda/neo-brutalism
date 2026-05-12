import { Badge } from "../ui/Badge";
import { cn } from "../../utils/cn";

type StackBadgesProps = {
  stack: string[];
  max?: number;
};

export function StackBadges({ stack, max = 5 }: StackBadgesProps) {
  const visibleStack = stack.slice(0, max);
  const hiddenCount = Math.max(stack.length - visibleStack.length, 0);

  return (
    <div className="flex flex-wrap gap-3">
      {visibleStack.map((tech) => {
        const name = tech.toLowerCase();
        let colorClass = "bg-white";
        
        if (name.includes("php") || name.includes("laravel")) colorClass = "bg-[var(--orange)]";
        else if (name.includes("css") || name.includes("tailwind") || name.includes("blade") || name.includes("vite")) colorClass = "bg-[var(--blue)]";
        else if (name.includes("sql") || name.includes("database") || name.includes("mongo")) colorClass = "bg-[var(--lime)]";
        else if (name.includes("pdf") || name.includes("excel") || name.includes("log")) colorClass = "bg-purple-300";

        return (
          <Badge 
            key={tech} 
            variant="tech" 
            className={cn(
              "border-[3px] border-black px-4 py-1.5 shadow-[3px_3px_0_black] transition-all hover:-translate-y-1 hover:translate-x-0.5 hover:shadow-[1px_1px_0_black]",
              colorClass
            )}
          >
            {tech}
          </Badge>
        );
      })}
      {hiddenCount > 0 ? (
        <Badge variant="status" className="border-[3px] border-black px-4 py-1.5 shadow-[3px_3px_0_black]">
          +{hiddenCount} More
        </Badge>
      ) : null}
    </div>
  );
}
