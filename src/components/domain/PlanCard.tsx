import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { Card } from "@/components/common/Card";

export type Plan = {
  slug?: string;
  name: string;
  price: string;
  cycle: string;
  features: string[];
  highlight?: boolean;
  tag?: string;
  tagline?: string;
  priceNote?: string;
  note?: string;
};

type PlanCardProps = {
  plan: Plan;
  ctaHref?: string;
  ctaLabel?: string;
};

export function PlanCard({
  plan,
  ctaHref = plan.slug ? `/subscribe/${plan.slug}` : "/#contact",
  ctaLabel = "상담 요청하기",
}: PlanCardProps) {
  return (
    <Card
      className={`flex flex-col gap-6 p-7 ${
        plan.highlight ? "border-accent-gold/60 shadow-[0_14px_40px_rgba(198,165,106,0.18)]" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-col gap-2">
          <h3 className="text-h3">{plan.name}</h3>
          <p className="text-sm text-muted">{plan.cycle}</p>
          {plan.tagline ? <p className="text-sm text-muted">{plan.tagline}</p> : null}
        </div>
        {plan.tag ? <Badge label={plan.tag} variant={plan.highlight ? "accent" : "default"} /> : null}
      </div>
      <div className="flex items-baseline gap-2">
        <div className="text-3xl font-semibold text-ink">{plan.price}</div>
        <span className="text-sm text-muted">/ 배송</span>
      </div>
      <ul className="flex flex-col gap-3 text-sm text-muted">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <span className="mt-2 h-1 w-6 bg-accent-gold/70" aria-hidden />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-col gap-3">
        <Button as="a" href={ctaHref} variant={plan.highlight ? "primary" : "secondary"} className="w-full">
          {ctaLabel}
        </Button>
        {plan.note ? <p className="text-xs text-muted">{plan.note}</p> : null}
      </div>
    </Card>
  );
}
