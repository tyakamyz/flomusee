import Image from "next/image";
import { Reveal } from "@/components/common/Reveal";
import { Section } from "@/components/common/Section";
import { SectionTitle } from "@/components/common/SectionTitle";
import { lookbookImages } from "@/data/site";

const bullets = ["자연광과 여백", "작품 아래 향 배치", "조도에 따른 분위기"];

export function LookbookSection() {
  return (
    <Section variant="muted">
      <SectionTitle
        eyebrow="INSTALLATION"
        title="공간에 걸면, 분위기가 바뀌어요"
        subtitle="설치는 간단하지만 결과는 선명합니다. 작품과 향이 머무는 위치를 기준으로 제안합니다."
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
        {lookbookImages.map((item, idx) => (
          <Reveal key={`${item.src}-${idx}`} delay={idx * 60}>
            <div className="flex flex-col gap-3">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-[0_10px_26px_rgba(20,18,15,0.08)]">
                <Image src={item.src} alt={item.caption} fill className="object-cover" />
              </div>
              <p className="text-sm text-muted">{item.caption}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
