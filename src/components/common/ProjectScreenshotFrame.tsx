import clsx from "clsx";
import type { ScreenshotAsset } from "../../types/asset.types";
import { ResponsiveImage } from "./ResponsiveImage";

type ProjectScreenshotFrameProps = {
  screenshot: ScreenshotAsset;
  language: "id" | "en";
  accent?: "blue" | "orange" | "lime" | "purple";
  className?: string;
  priority?: boolean;
};

const accentMap = {
  blue: "border-blue-500",
  orange: "border-orange-500",
  lime: "border-lime-500",
  purple: "border-purple-500",
};

export const ProjectScreenshotFrame = ({
  screenshot,
  language,
  accent = "blue",
  className,
  priority = false,
}: ProjectScreenshotFrameProps) => {
  const label = screenshot.label[language];

  return (
    <div className={clsx("flex flex-col group", className)}>
      <div
        className={clsx(
          "relative overflow-hidden rounded-xl border-[3px] shadow-brutal-sm transition-all duration-300",
          "hover:shadow-brutal hover:-translate-y-1 bg-card flex flex-col",
          accentMap[accent],
          "border-border"
        )}
      >
        {/* Browser Top Bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b-[3px] border-border bg-muted/50">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400 border-2 border-black/10" />
            <div className="w-3 h-3 rounded-full bg-amber-400 border-2 border-black/10" />
            <div className="w-3 h-3 rounded-full bg-green-400 border-2 border-black/10" />
          </div>
          <div className="ml-4 flex-1 h-5 bg-background rounded border-2 border-border/20 max-w-[200px]" />
        </div>

        {/* Image Area */}
        <div className="relative w-full overflow-hidden bg-muted aspect-video">
          <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.02]">
            <ResponsiveImage
              asset={screenshot}
              language={language}
              fallbackLabel="SCREENSHOT"
              fallbackDescription={label}
              className="w-full h-full"
              imgClassName="object-cover object-top"
              loading={priority ? "eager" : "lazy"}
              fetchPriority={priority ? "high" : "auto"}
              accent={accent}
            />
          </div>
        </div>
      </div>

      {/* Label */}
      <div className="mt-3 px-1 flex justify-between items-start">
        <p className="font-mono text-sm font-semibold text-foreground">
          {label}
        </p>
      </div>
    </div>
  );
};
