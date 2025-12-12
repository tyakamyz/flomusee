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
      <p className="text-sm font-semibold uppercase tracking-[0.12em] text-zinc-500 dark:text-zinc-400">
        FLOMUSÉE
      </p>
      <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="max-w-2xl text-base text-zinc-600 dark:text-zinc-300">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
