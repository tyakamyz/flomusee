import type { CSSProperties } from "react";

type PlaceholderImageProps = {
  label: string;
  ratio?: "square" | "landscape" | "portrait";
  className?: string;
};

const ratioMap: Record<NonNullable<PlaceholderImageProps["ratio"]>, string> = {
  square: "aspect-square",
  landscape: "aspect-[16/9]",
  portrait: "aspect-[4/5]",
};

export function PlaceholderImage({ label, ratio = "landscape", className = "" }: PlaceholderImageProps) {
  const styles: CSSProperties = {
    backgroundImage:
      "linear-gradient(135deg, rgba(244,240,234,0.9) 0%, rgba(251,248,244,0.95) 55%, rgba(230,222,210,0.9) 100%)",
  };

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_10px_26px_rgba(20,18,15,0.08)] ${ratioMap[ratio]} ${className}`}
      style={styles}
    >
      <div className="noise-overlay" aria-hidden />
      <span className="absolute left-4 top-4 rounded-full border border-border/80 bg-surface/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
        {label}
      </span>
      <span className="absolute bottom-5 left-6 text-xs uppercase tracking-[0.24em] text-ink/60">
        GALLERYNOOK
      </span>
    </div>
  );
}
