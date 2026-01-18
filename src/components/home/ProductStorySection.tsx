import { Card } from "@/components/common/Card";
import { Reveal } from "@/components/common/Reveal";
import { Section } from "@/components/common/Section";
import { SectionTitle } from "@/components/common/SectionTitle";
import { heroHighlights, productStory } from "@/data/site";

export function ProductStorySection() {
  return (
    <Section>
      <SectionTitle
        eyebrow="PRODUCT STORY"
        title="플로뮤제가 특별한 이유"
        subtitle="꽃과 아트, 향까지 한 번에 경험하는 전시형 구독. 회수·세척을 포함한 지속 가능한 흐름으로 운영합니다."
      />
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="grid gap-4 md:grid-cols-3">
          {heroHighlights.map((item, idx) => (
            <Reveal key={item.title} delay={idx * 80}>
              <Card className="flex h-full flex-col gap-2 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">{item.title}</p>
                <p className="text-sm leading-6 text-text-muted">{item.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
        <div className="grid gap-4">
          {productStory.map((story, idx) => (
            <Reveal key={story.title} delay={120 + idx * 100}>
              <Card className="flex h-full flex-col gap-3 p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-h4">{story.title}</h3>
                  <span className="rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-primary">
                    0{idx + 1}
                  </span>
                </div>
                <p className="text-sm leading-6 text-text-muted">{story.description}</p>
                <ul className="flex flex-wrap gap-2 text-xs text-text-muted">
                  {story.points.map((point) => (
                    <li
                      key={point}
                      className="rounded-full bg-bg-subtle px-3 py-1 font-semibold text-text-main shadow-[0_6px_18px_rgba(20,30,25,0.04)]"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
