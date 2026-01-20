import { Section } from "@/components/common/Section";
import { SectionTitle } from "@/components/common/SectionTitle";
import { steps } from "@/data/site";
import Image from "next/image";

const bullets = ["월 단위 큐레이션", "작품 중심 페어링", "정기 발송"];

export function HowItWorksSection() {
  return (
    <Section variant="default" id="flow">
      <SectionTitle
        eyebrow="HOW IT WORKS"
        title="한 달의 흐름, 4단계"
        subtitle="작가 선정부터 설치 가이드까지 간결하게 연결됩니다."
      />
      <ul className="grid gap-2 text-sm text-muted sm:grid-cols-3">
        {bullets.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <span className="h-px w-8 bg-accent-gold/60" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="relative flex flex-col gap-3 rounded-2xl border border-border bg-surface p-5 shadow-[0_10px_26px_rgba(20,18,15,0.08)]"
          >
            <div className="relative h-28 overflow-hidden rounded-xl">
              <Image
                src={`/images/flow-${index + 1}.svg`}
                alt={`${step.title} 플레이스홀더 이미지`}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 260px, (min-width: 640px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/20 to-transparent" />
              <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-xs font-semibold text-ink">
                {index + 1}
              </div>
            </div>
            <h3 className="text-h4">{step.title}</h3>
            <p className="text-sm text-muted">{step.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
