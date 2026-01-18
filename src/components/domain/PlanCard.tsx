import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { Card } from "@/components/common/Card";

export type Plan = {
  name: string;
  price: string;
  cycle: string;
  features: string[];
  highlight?: boolean;
  tag?: string;
  tagline?: string;
  note?: string;
};

type PlanCardProps = {
  plan: Plan;
  ctaHref?: string;
  ctaLabel?: string;
};

export function PlanCard({
  plan,
  ctaHref = "/#contact",
  ctaLabel = "상담 요청하기",
}: PlanCardProps) {
  return (
    <Card
      className={`flex flex-col gap-6 p-7 ${
        plan.highlight
          ? "border-primary shadow-[0_24px_48px_rgba(31,58,50,0.16)]"
          : "shadow-[0_18px_40px_rgba(20,30,25,0.08)]"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-col gap-2">
          <h3 className="text-h4">{plan.name}</h3>
          <p className="text-sm text-text-muted">{plan.cycle}</p>
          {plan.tagline ? (
            <p className="text-sm text-text-muted">{plan.tagline}</p>
          ) : null}
        </div>
        {plan.tag ? <Badge label={plan.tag} variant={plan.highlight ? "accent" : "default"} /> : null}
      </div>
      <div className="flex items-baseline gap-2">
        <div className="text-3xl font-bold text-text-main">{plan.price}</div>
        <span className="text-sm text-text-muted">/ 배송</span>
      </div>
      <ul className="flex flex-col gap-3 text-sm text-text-muted">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-col gap-3">
        <Button as="a" href={ctaHref} variant={plan.highlight ? "primary" : "secondary"} className="w-full">
          {ctaLabel}
        </Button>
        {plan.note ? <p className="text-xs text-text-muted">{plan.note}</p> : null}
      </div>
    </Card>
  );
}
