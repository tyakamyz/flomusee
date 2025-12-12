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
    <Card className={`flex flex-col gap-6 p-6 ${plan.highlight ? "border-black dark:border-white" : ""}`}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold">{plan.name}</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-300">{plan.cycle}</p>
        </div>
        {plan.tag ? <Badge label={plan.tag} variant={plan.highlight ? "accent" : "default"} /> : null}
      </div>
      <div className="text-3xl font-bold">{plan.price}</div>
      <ul className="flex flex-col gap-3 text-sm text-zinc-700 dark:text-zinc-200">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <span className="mt-1 h-2 w-2 rounded-full bg-black dark:bg-white" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button as="a" href={ctaHref} variant={plan.highlight ? "primary" : "secondary"} className="w-full">
        플랜 상세 보기
      </Button>
    </Card>
  );
}
