import Image from "next/image";
import { Card } from "@/components/common/Card";
import { Reveal } from "@/components/common/Reveal";
import { Section } from "@/components/common/Section";
import { SectionTitle } from "@/components/common/SectionTitle";
import { pairing } from "@/data/site";

export function ProductStorySection() {
  return (
    <Section>
      <SectionTitle eyebrow="PAIRING" title={pairing.title} subtitle={pairing.description} />
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <Card className="overflow-hidden p-0">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image src={pairing.artworkImage} alt="작품 설치 예시" fill className="object-cover" />
            </div>
            <div className="p-5">
              <p className="text-sm font-semibold text-ink">월 작가 작품</p>
              <p className="mt-2 text-sm text-muted">
                작품이 먼저 시선을 잡고, 향은 그 장면을 천천히 이어갑니다.
              </p>
            </div>
          </Card>
        </Reveal>
        <div className="grid gap-4">
          <Card className="p-5">
            <h3 className="text-h4">이 섹션의 핵심</h3>
            <ul className="mt-3 flex flex-col gap-2 text-sm text-muted">
              {pairing.bullets.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 h-1 w-6 bg-accent-gold/70" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Reveal delay={120}>
            <Card className="flex flex-col gap-3 p-5">
              <h3 className="text-h4">향 페어링 노트</h3>
              <ul className="flex flex-col gap-2 text-sm text-muted">
                {pairing.scentNotes.map((note) => (
                  <li key={note} className="flex items-start gap-2">
                    <span className="mt-2 h-1 w-6 bg-border" aria-hidden />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
          <Reveal delay={200}>
            <Card className="flex flex-col gap-3 p-5">
              <h3 className="text-h4">공간 제안</h3>
              <ul className="flex flex-col gap-2 text-sm text-muted">
                {pairing.spaceTips.map((tip) => (
                  <li key={tip} className="flex items-start gap-2">
                    <span className="mt-2 h-1 w-6 bg-border" aria-hidden />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
