"use client";

import { Card } from "@/components/common/Card";
import { useState } from "react";

export type FAQ = {
  question: string;
  answer: string;
};

export function FAQItem({ item }: { item: FAQ }) {
  const [open, setOpen] = useState(false);

  return (
    <Card className="p-0">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="text-base font-semibold text-text-main">{item.question}</span>
        <span
          className={`flex h-8 w-8 items-center justify-center rounded-full border border-border-subtle text-sm transition-transform ${
            open ? "rotate-45 bg-primary-soft text-primary" : "bg-white text-text-muted"
          }`}
          aria-hidden
        >
          +
        </span>
      </button>
      {open ? (
        <div className="border-t border-border-subtle/80 px-5 py-4">
          <p className="text-sm leading-6 text-text-muted">{item.answer}</p>
        </div>
      ) : null}
    </Card>
  );
}
