import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";

type ButtonBaseProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

type ButtonProps =
  | (ButtonBaseProps &
      React.ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" })
  | (ButtonBaseProps &
      React.AnchorHTMLAttributes<HTMLAnchorElement> & {
        as: "a";
        href: string;
      });

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-primary text-white shadow-[0_12px_30px_rgba(31,58,50,0.16)] hover:-translate-y-[1px] hover:bg-primary-dark hover:shadow-[0_16px_36px_rgba(31,58,50,0.18)] focus-visible:ring-primary/70",
  secondary:
    "bg-primary-soft text-primary shadow-[0_10px_24px_rgba(31,58,50,0.08)] hover:-translate-y-[1px] hover:bg-white hover:text-primary-dark focus-visible:ring-primary/60",
  outline:
    "border border-border-strong bg-white text-text-main hover:-translate-y-[1px] hover:border-primary hover:text-primary focus-visible:ring-primary/50",
  ghost:
    "text-text-muted hover:-translate-y-[1px] hover:bg-primary-soft hover:text-primary focus-visible:ring-primary/40",
};

export function Button(props: ButtonProps) {
  const { children, variant = "primary", className = "", as, ...rest } = props;
  const styles = `inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base ${variantStyles[variant]} ${className}`;

  if (as === "a" && "href" in rest) {
    const { href, ...anchorProps } =
      rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <Link className={styles} href={href} {...anchorProps}>
        {children}
      </Link>
    );
  }

  const buttonProps = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={styles} type="button" {...buttonProps}>
      {children}
    </button>
  );
}
