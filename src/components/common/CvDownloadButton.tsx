import { Download } from "lucide-react";
import { SITE_CONFIG } from "../../constants/site";
import { uiCopy } from "../../data/uiCopy.data";
import { useLanguage } from "../../hooks/useLanguage";
import type { ButtonVariant } from "../ui/buttonVariants";
import { buttonVariants } from "../ui/buttonVariants";
import { getText } from "../../utils/getText";

type CvDownloadButtonProps = {
  variant?: ButtonVariant;
  className?: string;
};

export function CvDownloadButton({ variant = "outline", className }: CvDownloadButtonProps) {
  const { language } = useLanguage();

  if (SITE_CONFIG.cvReady) {
    return (
      <a
        className={buttonVariants(variant, "md", className)}
        href={SITE_CONFIG.cvPath}
        rel="noopener noreferrer"
        target="_blank"
        download
      >
        <Download size={18} strokeWidth={3} aria-hidden="true" />
        {getText(uiCopy.downloadCv, language)}
      </a>
    );
  }

  return (
    <div className={className}>
      <button className={buttonVariants(variant, "md")} type="button" disabled aria-disabled="true">
        <Download size={18} strokeWidth={3} aria-hidden="true" />
        {getText(uiCopy.cvComingSoon, language)}
      </button>
      <p className="mt-2 max-w-xs text-xs font-bold leading-5 text-[var(--foreground)]/70">
        {getText(uiCopy.cvHelper, language)}
      </p>
    </div>
  );
}
