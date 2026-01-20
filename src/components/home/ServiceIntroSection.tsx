import { Card } from "@/components/common/Card";
import { Section } from "@/components/common/Section";
import { SectionTitle } from "@/components/common/SectionTitle";
import { includedItems } from "@/data/site";

export function ServiceIntroSection() {
  return (
    <Section variant="muted" id="about">
      <SectionTitle
        eyebrow="ABOUT"
        title="GALLERYNOOK은 무엇을 보내나요?"
        subtitle="작품, 향, 노트, 캡션 카드가 한 박스에 담겨 도착합니다."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {includedItems.map((feature) => (
          <Card key={feature.title} className="group flex h-full flex-col gap-3 p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface-2 text-sm font-semibold text-ink">
              ●
            </div>
            <h3 className="text-h4">{feature.title}</h3>
            <p className="text-sm leading-6 text-muted">{feature.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
