type BadgeProps = {
  label: string;
  variant?: "default" | "accent";
};

export function Badge({ label, variant = "default" }: BadgeProps) {
  const styles =
    variant === "accent"
      ? "bg-accent-coral text-white"
      : "bg-primary-soft text-primary";

  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${styles}`}>
      {label}
    </span>
  );
}
