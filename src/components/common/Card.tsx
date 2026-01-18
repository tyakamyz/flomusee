import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-3xl border border-border-subtle/70 bg-gradient-to-br from-white via-bg-surface to-white shadow-[0_18px_40px_rgba(20,30,25,0.08)] backdrop-blur ${className}`}
    >
      {children}
    </div>
  );
}
