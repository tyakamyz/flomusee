import { Card } from "@/components/common/Card";
import { Section } from "@/components/common/Section";
import { SectionTitle } from "@/components/common/SectionTitle";
import { features } from "@/data/site";

export function ServiceIntroSection() {
  return (
    <Section variant="muted" id="about">
      <SectionTitle
        eyebrow="ABOUT"
        title="FLOMUSÉE는 무엇을 보내나요?"
        subtitle="꽃, 오브제, 아트 프린트, 연출 가이드가 한 박스에 담겨 도착합니다."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <Card
            key={feature.title}
            className="group flex h-full flex-col gap-3 border-border-subtle/80 bg-bg-surface p-5 transition-transform duration-200 hover:-translate-y-1"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-soft text-sm font-semibold text-primary">
              ●
            </div>
            <h3 className="text-h4">{feature.title}</h3>
            <p className="text-sm leading-6 text-text-muted">{feature.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
