import { uiCopy } from "../../data/uiCopy.data";
import { useLanguage } from "../../hooks/useLanguage";
import { cn } from "../../utils/cn";
import { getText } from "../../utils/getText";

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      aria-label={getText(uiCopy.languageToggle, language)}
      className="relative flex h-10 w-[84px] items-center rounded-full border-2 border-[var(--border)] bg-[var(--background)] p-1 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[3px_3px_0_var(--border)] focus-brutal"
      type="button"
      onClick={toggleLanguage}
    >
      <div 
        className={cn(
          "absolute top-1 bottom-1 w-[36px] rounded-full bg-[var(--lime)] border-2 border-[var(--border)] transition-transform duration-300 ease-out",
          language === "en" ? "translate-x-9" : "translate-x-0"
        )} 
      />
      
      <div className="relative z-10 flex w-full justify-between px-0.5 pointer-events-none">
        <div className="flex h-[28px] w-[34px] items-center justify-center">
          <span 
            className={cn(
              "font-heading text-[10px] font-black tracking-tighter transition-all duration-300", 
              language === "id" ? "scale-110 text-black opacity-100" : "scale-90 text-[var(--foreground)] opacity-40"
            )}
          >
            IDN
          </span>
        </div>
        <div className="flex h-[28px] w-[34px] items-center justify-center">
          <span 
            className={cn(
              "font-heading text-[10px] font-black tracking-tighter transition-all duration-300", 
              language === "en" ? "scale-110 text-black opacity-100" : "scale-90 text-[var(--foreground)] opacity-40"
            )}
          >
            ENG
          </span>
        </div>
      </div>
    </button>
  );
}
