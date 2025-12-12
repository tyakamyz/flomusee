import { Section } from "@/components/common/Section";
import { SectionTitle } from "@/components/common/SectionTitle";
import { PlanCard } from "@/components/domain/PlanCard";
import { FAQItem } from "@/components/domain/FAQItem";
import { Button } from "@/components/common/Button";
import { faqs, plans } from "@/data/site";

export default function SubscribePage() {
  return (
    <>
      <Section>
        <SectionTitle
          title="FLOMUSÉE 구독 가이드"
          subtitle="원하는 플랜을 선택하고 배송 주기를 맞추세요. 향후 결제 연동 시 이 페이지에서 체크아웃으로 이어집니다."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} ctaHref="/contact" />
          ))}
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-zinc-700 dark:text-zinc-200">
          <span className="font-semibold">커스텀 플랜 상담이 필요하신가요?</span>
          <Button as="a" href="/contact" variant="secondary">
            문의하기
          </Button>
        </div>
      </Section>
      <Section variant="muted">
        <SectionTitle
          title="정책 및 FAQ"
          subtitle="결제, 배송, 회수 정책을 먼저 확인해 주세요."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((item) => (
            <FAQItem key={item.question} item={item} />
          ))}
        </div>
      </Section>
    </>
  );
}
