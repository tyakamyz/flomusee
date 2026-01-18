import { Section } from "@/components/common/Section";
import { SectionTitle } from "@/components/common/SectionTitle";
import { PlanCard } from "@/components/domain/PlanCard";
import { plans } from "@/data/site";

export function PlanSection() {
  return (
    <Section id="plans">
      <SectionTitle
        eyebrow="PLANS"
        title="구독 플랜을 선택하세요"
        subtitle="배송 주기, 포함 구성, 추천 대상에 맞춰 준비했습니다."
      />
      <div className="grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <PlanCard key={plan.name} plan={plan} />
        ))}
      </div>
      <p className="text-sm text-text-muted">
        모든 플랜은 화병 회수·세척을 포함합니다. 기업/행사 공간 큐레이션이 필요하면 별도 문의를 남겨주세요.
      </p>
    </Section>
  );
}
