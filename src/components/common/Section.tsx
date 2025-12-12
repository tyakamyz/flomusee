import type { ReactNode } from "react";

type SectionVariant = "default" | "muted" | "dark";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: SectionVariant;
};

const variantClasses: Record<SectionVariant, string> = {
  default: "bg-bg-base text-text-main",
  muted: "bg-bg-subtle text-text-main border-y border-border-subtle",
  dark: "bg-primary text-white",
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
