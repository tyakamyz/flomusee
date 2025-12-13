import type { ReactNode } from "react";

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-zinc-50 to-white text-primary-dark dark:from-primary dark:via-primary dark:to-primary dark:text-zinc-100">
      {children}
    </div>
  );
}
