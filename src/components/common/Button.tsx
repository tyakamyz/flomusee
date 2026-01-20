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
    "bg-primary !text-white hover:!text-white active:!text-white shadow-[0_10px_30px_rgba(31,58,50,0.18)] hover:bg-[#2a5247] active:bg-[#173129] hover:shadow-[0_12px_30px_rgba(31,58,50,0.2)]",
  secondary:
    "border border-border bg-transparent text-ink hover:border-primary/60 hover:text-primary",
  outline:
    "border border-border bg-surface text-ink hover:border-accent-gold/70 hover:text-ink",
  ghost:
    "text-ink/80 hover:text-ink",
};

export function Button(props: ButtonProps) {
  const { children, variant = "primary", className = "", as, ...rest } = props;
  const styles = `inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold tracking-[0.02em] transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-bg ${variantStyles[variant]} ${className}`;
  const finalClassName = styles;

  if (as === "a" && "href" in rest) {
    const { href, ...anchorProps } =
      rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <Link className={finalClassName} href={href} {...anchorProps}>
        {children}
      </Link>
    );
  }

  const buttonProps = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={finalClassName} type="button" {...buttonProps}>
      {children}
    </button>
  );
}
