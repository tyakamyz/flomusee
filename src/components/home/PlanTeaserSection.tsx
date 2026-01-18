import { PlanCard } from "@/components/domain/PlanCard";
import { Section } from "@/components/common/Section";
import { SectionTitle } from "@/components/common/SectionTitle";
import { planDetails } from "@/data/site";

export function PlanTeaserSection() {
  return (
    <Section>
      <SectionTitle
        eyebrow="PLANS"
        title="나에게 맞는 구독을 고르세요"
        subtitle="Standard · Premium · Gift 세 가지 플랜을 준비했습니다. 자세한 구성은 각 상세페이지에서 확인하세요."
      />
      <div className="grid gap-6 lg:grid-cols-3">
        {planDetails.map((plan) => (
          <PlanCard key={plan.slug} plan={plan} />
        ))}
      </div>
      <p className="text-sm text-text-muted">
        플랜을 선택하면 /subscribe/[slug] 상세페이지에서 포함 구성과 배송/정책, 추천 대상 정보를 확인할 수 있습니다.
      </p>
    </Section>
  );
}
