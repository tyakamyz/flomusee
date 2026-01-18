import { Section } from "@/components/common/Section";
import { SectionTitle } from "@/components/common/SectionTitle";
import { FAQItem } from "@/components/domain/FAQItem";
import { faqs } from "@/data/site";

export function FAQSection() {
  return (
    <Section id="faq">
      <SectionTitle
        eyebrow="FAQ"
        title="자주 묻는 질문"
        subtitle="배송, 회수, 구독 변경까지 기본 정책을 먼저 안내드립니다."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {faqs.map((item) => (
          <FAQItem key={item.question} item={item} />
        ))}
      </div>
    </Section>
  );
}
