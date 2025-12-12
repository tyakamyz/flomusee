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
    "bg-black text-white hover:bg-zinc-800 focus-visible:outline-black dark:bg-white dark:text-black dark:hover:bg-zinc-200",
  secondary:
    "bg-zinc-100 text-black hover:bg-zinc-200 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800",
  outline:
    "border border-black text-black hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black",
  ghost:
    "text-black hover:bg-zinc-100 dark:text-white dark:hover:bg-zinc-900",
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
