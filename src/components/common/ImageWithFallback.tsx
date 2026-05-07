import { useState } from "react";
import clsx from "clsx";
import { AssetPlaceholder } from "./AssetPlaceholder";

type ImageWithFallbackProps = {
  src?: string;
  alt: string;
  fallbackLabel: string;
  fallbackDescription?: string;
  className?: string;
  imgClassName?: string;
  width?: number;
  height?: number;
  loading?: "lazy" | "eager";
  fetchPriority?: "high" | "low" | "auto";
  accent?: "blue" | "orange" | "lime" | "purple";
};

export const ImageWithFallback = ({
  src,
  alt,
  fallbackLabel,
  fallbackDescription,
  className,
  imgClassName,
  width,
  height,
  loading = "lazy",
  fetchPriority = "auto",
  accent = "blue",
}: ImageWithFallbackProps) => {
  const [error, setError] = useState(false);

  if (!src || error) {
    return (
      <div className={clsx("w-full h-full", className)}>
        <AssetPlaceholder
          label={fallbackLabel}
          description={fallbackDescription}
          accent={accent}
          className="w-full h-full"
        />
      </div>
    );
  }

  return (
    <div className={clsx("w-full h-full relative overflow-hidden", className)}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        // @ts-expect-error React 18 types don't officially support fetchpriority on img, but standard HTML does
        fetchPriority={fetchPriority}
        decoding="async"
        onError={() => setError(true)}
        className={clsx("w-full h-full object-cover", imgClassName)}
      />
    </div>
  );
};
