import { Section } from "@/components/common/Section";
import { SectionTitle } from "@/components/common/SectionTitle";
import { steps } from "@/data/site";

export function HowItWorksSection() {
  return (
    <Section variant="muted" id="how-it-works">
      <SectionTitle
        title="어떻게 서비스하나요?"
        subtitle="브랜드 큐레이션부터 배송·회수까지, 간결한 4단계로 운영합니다."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="flex flex-col gap-3 rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-sm font-semibold text-white dark:bg-white dark:text-black">
              {index + 1}
            </div>
            <h3 className="text-lg font-semibold">{step.title}</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-300">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
