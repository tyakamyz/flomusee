import type { ReactNode } from "react";

type SectionVariant = "default" | "muted" | "dark";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: SectionVariant;
};

const variantClasses: Record<SectionVariant, string> = {
  default:
    "bg-[radial-gradient(circle_at_20%_20%,rgba(231,240,232,0.6),transparent_38%),radial-gradient(circle_at_85%_5%,rgba(230,218,200,0.5),transparent_32%),linear-gradient(180deg,#f8f3ec_0%,#f3eee6_45%,#f8f3ec_100%)] text-text-main",
  muted:
    "border-y border-border-subtle bg-[radial-gradient(circle_at_15%_0%,rgba(231,240,232,0.55),transparent_30%),linear-gradient(180deg,#f3eee6_0%,#f8f3ec_80%)] text-text-main",
  dark: "bg-primary text-white",
};

export function Section({
  children,
  className = "",
  id,
  variant = "default",
}: SectionProps) {
  return (
    <section id={id} className={`relative overflow-hidden ${variantClasses[variant]} ${className}`}>
      <div aria-hidden className="noise-overlay" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-5 py-16 sm:px-8 lg:px-12">
        {children}
      </div>
    </section>
  );
}
