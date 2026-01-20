"use client";

import type { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const { ref, inView } = useInView({ threshold: 0.2, rootMargin: "0px 0px -10% 0px" });
  const prefersReducedMotion =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const base =
    "transition-all duration-700 ease-out will-change-transform will-change-opacity [transform-origin:50%_60%]";
  const hidden = prefersReducedMotion ? "" : "translate-y-3 opacity-0 blur-[6px]";
  const visible = "translate-y-0 opacity-100 blur-0";

  return (
    <div
      ref={ref as never}
      className={`${base} ${inView ? visible : hidden} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
