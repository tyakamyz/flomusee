import { Section } from "@/components/common/Section";
import { SectionTitle } from "@/components/common/SectionTitle";
import { steps } from "@/data/site";
import Image from "next/image";

export function HowItWorksSection() {
  return (
    <Section variant="default" id="flow">
      <SectionTitle
        eyebrow="HOW IT WORKS"
        title="플로뮤제 구독 흐름"
        subtitle="브랜드 큐레이션부터 배송·회수까지, 간결한 4단계로 운영합니다."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="relative flex flex-col gap-3 rounded-3xl border border-border-subtle bg-white/80 p-5 shadow-[0_18px_40px_rgba(20,30,25,0.08)] backdrop-blur"
          >
            <div className="relative h-28 overflow-hidden rounded-2xl">
              <Image
                src={`/images/flow-${index + 1}.svg`}
                alt={`${step.title} 플레이스홀더 이미지`}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 260px, (min-width: 640px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-sm font-semibold text-primary shadow">
                {index + 1}
              </div>
            </div>
            <h3 className="text-h4">{step.title}</h3>
            <p className="text-sm text-text-muted">{step.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
