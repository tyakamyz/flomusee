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
  eyebrow = "FLOMUSÉE",
}: SectionTitleProps) {
  const alignment = align === "center" ? "items-center text-center" : "";

  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.14em] text-text-muted">
        <span className="h-px w-8 bg-border-subtle" aria-hidden />
        {eyebrow}
      </p>
      <h2 className="text-h2">{title}</h2>
      {subtitle ? <p className="max-w-2xl text-base text-text-muted">{subtitle}</p> : null}
    </div>
  );
}
