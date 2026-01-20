import { Card } from "@/components/common/Card";
import { Reveal } from "@/components/common/Reveal";
import { Section } from "@/components/common/Section";
import { SectionTitle } from "@/components/common/SectionTitle";
import { includedItems } from "@/data/site";

export function IncludedSection() {
  return (
    <Section>
      <SectionTitle
        eyebrow="WHAT'S INSIDE"
        title="박스에 담긴 것들"
        subtitle="꽃, 오브제, 향, 가이드까지 전시를 완성하는 구성 요소를 한 번에 받아보세요."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {includedItems.map((item, idx) => (
          <Reveal key={item.title} delay={idx * 70}>
            <Card className="flex h-full flex-col gap-3 p-5">
              <span className="rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-primary w-fit">포함</span>
              <h3 className="text-h4">{item.title}</h3>
              <p className="text-sm leading-6 text-text-muted">{item.description}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
