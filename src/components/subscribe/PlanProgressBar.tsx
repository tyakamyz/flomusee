"use client";

import { useScrollProgress } from "@/hooks/useScrollProgress";

export function PlanProgressBar() {
  const progress = useScrollProgress();

  return (
    <div className="fixed left-0 top-0 z-50 h-0.5 w-full bg-border/70 backdrop-blur">
      <div
        className="h-full bg-primary transition-[width] duration-150"
        style={{ width: `${Math.round(progress * 100)}%` }}
        aria-hidden
      />
    </div>
  );
}
