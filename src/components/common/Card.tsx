import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`rounded-2xl border border-zinc-100 bg-white/70 shadow-sm backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/70 ${className}`}>
      {children}
    </div>
  );
}
