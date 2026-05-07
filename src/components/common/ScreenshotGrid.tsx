import type { ScreenshotAsset } from "../../types/asset.types";
import { ProjectScreenshotFrame } from "./ProjectScreenshotFrame";
import { AssetPlaceholder } from "./AssetPlaceholder";

type ScreenshotGridProps = {
  screenshots?: ScreenshotAsset[];
  language: "id" | "en";
  accent?: "blue" | "orange" | "lime" | "purple";
  maxItems?: number;
};

export function ScreenshotGrid({
  screenshots,
  language,
  accent = "blue",
  maxItems,
}: ScreenshotGridProps) {
  const itemsToShow =
    maxItems && screenshots ? screenshots.slice(0, maxItems) : screenshots;

  if (!itemsToShow || itemsToShow.length === 0) {
    return (
      <div className="grid gap-5 md:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <AssetPlaceholder
            key={i}
            label={language === "id" ? `Tampilan ${i}` : `View ${i}`}
            accent={accent}
            className="aspect-video"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {itemsToShow.map((screenshot, index) => (
        <ProjectScreenshotFrame
          key={screenshot.src}
          screenshot={screenshot}
          language={language}
          accent={accent}
          priority={index < 2}
        />
      ))}
    </div>
  );
}
