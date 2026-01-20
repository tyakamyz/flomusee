import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-border bg-surface shadow-[0_10px_30px_rgba(20,18,15,0.08)] ${className}`}
    >
      {children}
    </div>
  );
}
