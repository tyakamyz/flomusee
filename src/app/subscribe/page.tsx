import { Badge } from "@/components/common/Badge";
import { Card } from "@/components/common/Card";
import { Section } from "@/components/common/Section";
import { SectionTitle } from "@/components/common/SectionTitle";
import { PlanCard } from "@/components/domain/PlanCard";
import { planDetails } from "@/data/site";
import Link from "next/link";

export const metadata = {
  title: "GALLERYNOOK | 작가의 향 구독 플랜 비교",
  description: "Standard, Premium, Collector 플랜을 비교하고 나에게 맞는 구독을 선택하세요.",
};

const columns = ["구성", "배송/회수", "특징"] as const;

export default function SubscribePage() {
  return (
    <>
      <Section>
        <SectionTitle
          eyebrow="PLANS"
          title="플랜 비교"
          subtitle="세 가지 플랜을 비교하고, 상세페이지에서 더 깊이 확인하세요."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {planDetails.map((plan) => (
            <PlanCard key={plan.slug} plan={plan} ctaLabel="상세 보기" ctaHref={`/subscribe/${plan.slug}`} />
          ))}
        </div>
      </Section>
      <Section variant="muted">
        <SectionTitle
          eyebrow="COMPARE"
          title="한눈에 보는 비교"
          subtitle="배송 주기, 포함 구성, 추천 대상, 정책을 요약했습니다."
        />
        <div className="grid gap-4">
          {planDetails.map((plan) => (
            <Card key={plan.slug} className="flex flex-col gap-3 p-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-col gap-1">
                  <h3 className="text-h4">{plan.name}</h3>
                  <p className="text-sm text-text-muted">{plan.cycle}</p>
                </div>
                <div className="flex items-center gap-2">
                  {plan.highlight ? <Badge label="추천" variant="accent" /> : null}
                  {plan.tag ? <Badge label={plan.tag} /> : null}
                  <span className="text-base font-semibold text-text-main">{plan.price}</span>
                </div>
              </div>
              <div className="grid gap-3 md:grid-cols-3">
                {columns.map((col) => (
                  <div key={col} className="rounded-2xl border border-border-subtle/70 bg-white/80 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-text-muted">{col}</p>
                    <ul className="mt-2 flex list-disc flex-col gap-2 pl-4 text-sm text-text-muted">
                      {(col === "구성" ? plan.included : col === "배송/회수" ? plan.delivery : plan.highlights).map(
                        (item) => (
                          <li key={item}>{item}</li>
                        ),
                      )}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-text-muted">
                <span>{plan.tagline}</span>
                <Link
                  href={`/subscribe/${plan.slug}`}
                  className="text-sm font-semibold text-primary underline-offset-4 transition hover:underline"
                >
                  상세 보기 →
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
