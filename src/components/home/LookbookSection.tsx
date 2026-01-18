import Image from "next/image";
import { PlaceholderImage } from "@/components/common/PlaceholderImage";
import { Reveal } from "@/components/common/Reveal";
import { Section } from "@/components/common/Section";
import { SectionTitle } from "@/components/common/SectionTitle";
import { lookbookImages } from "@/data/site";

export function LookbookSection() {
  return (
    <Section variant="muted">
      <SectionTitle
        eyebrow="LOOKBOOK"
        title="플로뮤제가 담는 장면들"
        subtitle="웜 아이보리 톤의 공간에 자연광과 낮은 채도의 꽃, 작가 오브제가 어우러진 모습을 상상해 보세요."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {lookbookImages.map((item, idx) => (
          <Reveal key={`${item.src}-${idx}`} delay={idx * 60}>
            <div className="flex flex-col gap-3">
              {item.src.endsWith(".svg") ? (
                <PlaceholderImage label="Lookbook Placeholder" />
              ) : (
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border-subtle/70">
                  <Image src={item.src} alt={item.caption} fill className="object-cover" />
                </div>
              )}
              <p className="text-sm text-text-muted">{item.caption}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
