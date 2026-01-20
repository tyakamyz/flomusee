import type { ReactNode } from "react";

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen text-ink">
      <div className="noise-overlay" aria-hidden />
      <div className="relative">{children}</div>
    </div>
  );
}
