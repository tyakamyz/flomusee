import type { ReactNode } from "react";

type SectionVariant = "default" | "muted" | "dark";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: SectionVariant;
};

const variantClasses: Record<SectionVariant, string> = {
  default: "bg-white text-zinc-900 dark:bg-black dark:text-white",
  muted:
    "bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 border-y border-zinc-100 dark:border-zinc-900",
  dark: "bg-zinc-900 text-white dark:bg-zinc-900 dark:text-white",
};

export function Section({
  children,
  className = "",
  id,
  variant = "default",
}: SectionProps) {
  return (
    <section id={id} className={`${variantClasses[variant]} ${className}`}>
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-16 sm:px-8 lg:px-12">
        {children}
      </div>
    </section>
  );
}
