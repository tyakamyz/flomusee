import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`rounded-2xl border border-border-subtle bg-bg-surface shadow-[0_10px_30px_rgba(20,30,25,0.08)] ${className}`}>
      {children}
    </div>
  );
}
