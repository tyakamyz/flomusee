import { Section } from "@/components/common/Section";
import { SectionTitle } from "@/components/common/SectionTitle";
import { FAQItem } from "@/components/domain/FAQItem";
import { faqs } from "@/data/site";

const bullets = ["배송 일정", "향 강도", "스킵/해지"];

export function FAQSection() {
  return (
    <Section id="faq">
      <SectionTitle
        eyebrow="FAQ"
        title="자주 묻는 질문"
        subtitle="배송, 향 강도, 스킵 정책을 먼저 확인하세요."
      />
      <ul className="grid gap-2 text-sm text-muted sm:grid-cols-3">
        {bullets.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <span className="h-px w-8 bg-accent-gold/60" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="grid gap-4 md:grid-cols-2">
        {faqs.map((item) => (
          <FAQItem key={item.question} item={item} />
        ))}
      </div>
    </Section>
  );
}
