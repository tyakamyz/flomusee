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
    "bg-primary text-white hover:bg-primary-dark focus-visible:outline-primary",
  secondary:
    "bg-primary-soft text-primary hover:bg-primary/10 focus-visible:outline-primary",
  outline:
    "border border-border-strong text-text-main hover:border-primary hover:text-primary focus-visible:outline-primary",
  ghost:
    "text-text-muted hover:bg-primary-soft hover:text-primary focus-visible:outline-primary",
};

export function Button(props: ButtonProps) {
  const { children, variant = "primary", className = "", as, ...rest } = props;
  const styles = `inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors ${variantStyles[variant]} ${className}`;

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
