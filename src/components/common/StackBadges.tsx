import { Badge } from "../ui/Badge";

type StackBadgesProps = {
  stack: string[];
  max?: number;
};

export function StackBadges({ stack, max = 5 }: StackBadgesProps) {
  const visibleStack = stack.slice(0, max);
  const hiddenCount = Math.max(stack.length - visibleStack.length, 0);

  return (
    <div className="flex flex-wrap gap-2">
      {visibleStack.map((tech) => (
        <Badge key={tech} variant="tech">
          {tech}
        </Badge>
      ))}
      {hiddenCount > 0 ? <Badge variant="status">+{hiddenCount}</Badge> : null}
    </div>
  );
}
