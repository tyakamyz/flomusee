import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { Card } from "@/components/common/Card";
import { Section } from "@/components/common/Section";
import { SectionTitle } from "@/components/common/SectionTitle";
import { planDetails } from "@/data/site";

export default function FlomuseePricing() {
  return (
    <Section>
      <SectionTitle
        eyebrow="PLANS"
        title="구독 플랜을 선택하세요"
        subtitle="배송 주기, 포함 구성, 추천 대상에 맞춰 준비했습니다."
        align="center"
      />

      <div className="grid gap-6 md:grid-cols-3">
        {planDetails.map((plan) => (
          <Card
            key={plan.name}
            className={`relative flex h-full flex-col gap-6 p-6 ${
              plan.highlight ? "border-accent-gold/60 shadow-[0_14px_40px_rgba(198,165,106,0.18)]" : ""
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex flex-col gap-2">
                <h3 className="text-h3">{plan.name}</h3>
                <p className="text-sm text-muted">{plan.cycle}</p>
              </div>
              {plan.tag ? <Badge label={plan.tag} variant={plan.highlight ? "accent" : "default"} /> : null}
            </div>

            <div className="text-3xl font-semibold text-ink">{plan.price}</div>

            <ul className="flex flex-col gap-3 text-sm text-muted">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <span className="mt-2 h-1 w-6 bg-accent-gold/70" aria-hidden />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto">
              <Button
                as="a"
                href={`/subscribe/${plan.slug}`}
                variant={plan.highlight ? "primary" : "secondary"}
                className="w-full"
              >
                플랜 상세 보기
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-muted">
        <span className="font-semibold text-ink">커스텀 플랜 상담이 필요하신가요?</span>
        <Button as="a" href="/contact" variant="outline">
          상담 문의하기
        </Button>
      </div>
    </Section>
  );
}
