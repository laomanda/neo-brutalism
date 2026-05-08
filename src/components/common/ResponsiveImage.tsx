import { ImageWithFallback } from "./ImageWithFallback";
import type { ImageAsset } from "../../types/asset.types";

type ResponsiveImageProps = {
  asset: ImageAsset;
  language: "id" | "en";
  fallbackLabel: string;
  fallbackDescription?: string;
  className?: string;
  imgClassName?: string;
  loading?: "lazy" | "eager";
  fetchPriority?: "high" | "low" | "auto";
  accent?: "blue" | "orange" | "lime" | "purple";
};

export const ResponsiveImage = ({
  asset,
  language,
  fallbackLabel,
  fallbackDescription,
  className,
  imgClassName,
  loading = "lazy",
  fetchPriority = "auto",
  accent = "blue",
}: ResponsiveImageProps) => {
  const altText = asset.alt[language];

  return (
    <ImageWithFallback
      src={asset.status === "ready" ? asset.src : undefined}
      alt={altText}
      fallbackLabel={fallbackLabel}
      fallbackDescription={fallbackDescription}
      className={className}
      imgClassName={imgClassName}
      width={asset.width}
      height={asset.height}
      loading={loading}
      fetchPriority={fetchPriority}
      accent={accent}
    />
  );
};
