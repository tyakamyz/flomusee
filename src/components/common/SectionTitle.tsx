type SectionTitleProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionTitle({
  title,
  subtitle,
  align = "left",
}: SectionTitleProps) {
  const alignment = align === "center" ? "items-center text-center" : "";

  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-text-muted">
        FLOMUSÉE
      </p>
      <h2 className="text-h2">
        {title}
      </h2>
      {subtitle ? (
        <p className="max-w-2xl text-base text-text-muted">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
