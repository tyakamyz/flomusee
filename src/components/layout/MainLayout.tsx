import type { ReactNode } from "react";

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-zinc-50 to-white text-zinc-900 dark:from-black dark:via-zinc-950 dark:to-black dark:text-zinc-100">
      {children}
    </div>
  );
}
