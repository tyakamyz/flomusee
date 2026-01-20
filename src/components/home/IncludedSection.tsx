import { Card } from "@/components/common/Card";
import { Reveal } from "@/components/common/Reveal";
import { Section } from "@/components/common/Section";
import { SectionTitle } from "@/components/common/SectionTitle";
import { includedItems } from "@/data/site";

const bullets = ["작품이 주인공", "향은 여운", "설치 가이드 포함"];

export function IncludedSection() {
  return (
    <Section>
      <SectionTitle
        eyebrow="WHAT'S INSIDE"
        title="이번 달, 상자 안에는"
        subtitle="작품과 향, 노트까지 단정한 구성으로 전달합니다."
      />
      <ul className="grid gap-2 text-sm text-muted sm:grid-cols-3">
        {bullets.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <span className="h-px w-8 bg-accent-gold/60" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {includedItems.map((item, idx) => (
          <Reveal key={item.title} delay={idx * 70}>
            <Card className="flex h-full flex-col gap-3 p-5">
              <span className="text-caption text-muted">Included</span>
              <h3 className="text-h4 text-ink">{item.title}</h3>
              <p className="text-sm leading-6 text-muted">{item.description}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
