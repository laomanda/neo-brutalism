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
          "relative overflow-hidden rounded-xl border-[3px] shadow-brutal-sm bg-card flex flex-col",
          accentMap[accent],
          "border-border"
        )}
      >
        {/* Browser Top Bar */}
        <div className="flex items-center px-4 py-2 border-b-[3px] border-border bg-muted/50 relative min-h-[40px]">
          <div className="flex gap-1.5 absolute left-4">
            <div className="w-3 h-3 rounded-full bg-red-400 border-[1.5px] border-black/20" />
            <div className="w-3 h-3 rounded-full bg-amber-400 border-[1.5px] border-black/20" />
            <div className="w-3 h-3 rounded-full bg-green-400 border-[1.5px] border-black/20" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="border-2 border-border/40 bg-background px-4 py-0.5 rounded-full text-[10px] sm:text-xs font-mono font-semibold text-foreground/70 truncate max-w-[80%] lg:max-w-[60%]">
              {label}
            </div>
          </div>
        </div>

        {/* Image Area */}
        <div className="relative w-full overflow-hidden bg-muted aspect-video">
          <div className="absolute inset-0">
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
    </div>
  );
};
