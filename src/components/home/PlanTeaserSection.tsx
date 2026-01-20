import { PlanCard } from "@/components/domain/PlanCard";
import { Section } from "@/components/common/Section";
import { SectionTitle } from "@/components/common/SectionTitle";
import { planDetails } from "@/data/site";

const bullets = ["Standard · Premium · Collector", "추천 플랜 1개 강조", "상세에서 구성 확인"];

export function PlanTeaserSection() {
  return (
    <Section>
      <SectionTitle
        eyebrow="PLANS"
        title="플랜은 심플하게 고르기"
        subtitle="Standard · Premium · Collector 세 가지 플랜을 준비했습니다."
      />
      <ul className="grid gap-2 text-sm text-muted sm:grid-cols-3">
        {bullets.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <span className="h-px w-8 bg-accent-gold/60" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="grid gap-6 lg:grid-cols-3">
        {planDetails.map((plan) => (
          <PlanCard key={plan.slug} plan={plan} />
        ))}
      </div>
      <p className="text-sm text-muted">플랜을 선택하면 상세 페이지에서 구성, 정책, 추천 대상을 확인할 수 있습니다.</p>
    </Section>
  );
}
