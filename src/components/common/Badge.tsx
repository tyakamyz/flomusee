type BadgeProps = {
  label: string;
  variant?: "default" | "accent";
};

export function Badge({ label, variant = "default" }: BadgeProps) {
  const styles =
    variant === "accent"
      ? "border-accent-gold/60 text-accent-gold"
      : "border-border text-muted";

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] ${styles}`}
    >
      {label}
    </span>
  );
}
