type SectionTitleProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  eyebrow?: string;
};

export function SectionTitle({
  title,
  subtitle,
  align = "left",
  eyebrow = "GALLERYNOOK",
}: SectionTitleProps) {
  const alignment = align === "center" ? "items-center text-center" : "items-start";

  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      <div className="flex items-center gap-3">
        <span className="text-caption text-muted">{eyebrow}</span>
        <span className="h-px w-10 bg-accent-gold/70" aria-hidden />
      </div>
      <h2 className="text-h2 text-balance">{title}</h2>
      {subtitle ? <p className="max-w-2xl text-base text-muted text-balance">{subtitle}</p> : null}
    </div>
  );
}
