import type { BilingualText } from "./common.types";

export type AssetStatus = "ready" | "placeholder";

export type ImageAsset = {
  src: string;
  alt: BilingualText;
  status: AssetStatus;
  width?: number;
  height?: number;
};

export type ScreenshotAsset = ImageAsset & {
  label: BilingualText;
};

export type ProjectScreenshotKey = "dpfWakaf" | "donetea" | "laundry";
