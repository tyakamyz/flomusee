type BadgeProps = {
  label: string;
  variant?: "default" | "accent";
};

export function Badge({ label, variant = "default" }: BadgeProps) {
  const styles =
    variant === "accent"
      ? "bg-black text-white dark:bg-white dark:text-black"
      : "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200";

  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${styles}`}>
      {label}
    </span>
  );
}
