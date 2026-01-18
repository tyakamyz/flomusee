"use client";

import { useScrollProgress } from "@/hooks/useScrollProgress";

export function PlanProgressBar() {
  const progress = useScrollProgress();

  return (
    <div className="fixed left-0 top-0 z-50 h-1 w-full bg-border-subtle/60 backdrop-blur">
      <div
        className="h-full bg-primary transition-[width]"
        style={{ width: `${Math.round(progress * 100)}%` }}
        aria-hidden
      />
    </div>
  );
}
