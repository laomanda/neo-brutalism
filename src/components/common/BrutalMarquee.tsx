const marqueeItems = [
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Laravel",
  "MySQL",
  "UI Engineering",
  "Frontend Developer",
];

export function BrutalMarquee() {
  const repeatedItems = [...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <div className="mt-12 overflow-hidden border-y-[3px] border-[var(--border)] bg-[var(--marquee-bg)] py-3 text-[var(--marquee-text)]">
      <div className="marquee-track flex w-max items-center gap-8">
        {repeatedItems.map((item, index) => (
          <span key={`${item}-${index}`} className="font-heading text-sm font-extrabold uppercase tracking-normal sm:text-base">
            {item} <span className="mx-4 text-[var(--marquee-dot)]">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
