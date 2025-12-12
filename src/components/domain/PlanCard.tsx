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
};

type PlanCardProps = {
  plan: Plan;
  ctaHref?: string;
};

export function PlanCard({ plan, ctaHref = "/subscribe" }: PlanCardProps) {
  return (
    <Card
      className={`flex flex-col gap-6 p-6 ${
        plan.highlight ? "border-primary shadow-[0_20px_40px_rgba(31,58,50,0.12)]" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-col gap-2">
          <h3 className="text-h4">{plan.name}</h3>
          <p className="text-sm text-text-muted">{plan.cycle}</p>
        </div>
        {plan.tag ? <Badge label={plan.tag} variant={plan.highlight ? "accent" : "default"} /> : null}
      </div>
      <div className="text-3xl font-bold text-text-main">{plan.price}</div>
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
          플랜 상세 보기
        </Button>
        {plan.highlight ? (
          <p className="text-xs text-text-muted">
            추천 플랜: 프리미엄 꽃다발과 아티스트 에디션이 포함됩니다.
          </p>
        ) : null}
      </div>
    </Card>
  );
}
