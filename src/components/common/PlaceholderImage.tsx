import type { CSSProperties } from "react";

type PlaceholderImageProps = {
  label: string;
  ratio?: "square" | "landscape" | "portrait";
  className?: string;
};

const ratioMap: Record<NonNullable<PlaceholderImageProps["ratio"]>, string> = {
  square: "aspect-[4/4]",
  landscape: "aspect-[16/9]",
  portrait: "aspect-[4/5]",
};

export function PlaceholderImage({ label, ratio = "landscape", className = "" }: PlaceholderImageProps) {
  const styles: CSSProperties = {
    backgroundImage:
      "radial-gradient(circle at 20% 20%, rgba(231,240,232,0.55), transparent 38%), radial-gradient(circle at 80% 10%, rgba(230,218,200,0.45), transparent 34%), linear-gradient(135deg, #f8f3ec 0%, #e7f0e8 100%)",
  };

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-border-subtle/70 shadow-[0_14px_36px_rgba(20,30,25,0.08)] ${ratioMap[ratio]} ${className}`}
      style={styles}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-white/40" />
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-sm font-semibold text-text-muted">
        {label}
      </span>
    </div>
  );
}
