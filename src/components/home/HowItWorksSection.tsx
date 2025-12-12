import { Section } from "@/components/common/Section";
import { SectionTitle } from "@/components/common/SectionTitle";
import { steps } from "@/data/site";

export function HowItWorksSection() {
  return (
    <Section variant="muted" id="how-it-works">
      <SectionTitle
        title="플로뮤제 구독 흐름"
        subtitle="브랜드 큐레이션부터 배송·회수까지, 간결한 4단계로 운영합니다."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="relative flex flex-col gap-3 rounded-2xl border border-border-subtle bg-bg-surface p-5 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-soft text-sm font-semibold text-primary">
                {index + 1}
              </div>
              <h3 className="text-h4">{step.title}</h3>
            </div>
            <p className="text-sm text-text-muted">{step.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
