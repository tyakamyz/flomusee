import { Card } from "@/components/common/Card";
import { Section } from "@/components/common/Section";
import { SectionTitle } from "@/components/common/SectionTitle";

const storyPoints = [
  {
    title: "작품이 중심",
    description: "작품을 먼저 고르고, 향은 그 여운을 공간으로 확장합니다.",
    bullets: ["작품 우선 큐레이션", "향은 감정의 연장", "설치 가이드 제공"],
  },
  {
    title: "정제된 구성",
    description: "불필요한 장식을 덜고, 필요한 것만 담았습니다.",
    bullets: ["작품·향·노트", "월 1회 배송", "명확한 정책"],
  },
  {
    title: "조용한 설렘",
    description: "미세한 하이라이트와 여백으로 기대감을 만듭니다.",
    bullets: ["에디토리얼 레이아웃", "미세한 하이라이트", "절제된 톤"],
  },
];

export function StorySection() {
  return (
    <Section variant="default">
      <SectionTitle
        eyebrow="STORY"
        title="브랜드 스토리"
        subtitle="집 안의 한 켠에 작품과 향이 머무는 시간을 만듭니다."
      />
      <div className="grid gap-5 md:grid-cols-3">
        {storyPoints.map((story) => (
          <Card key={story.title} className="flex h-full flex-col gap-4 p-6">
            <div className="flex items-center gap-3">
              <span className="h-10 w-10 rounded-2xl border border-border bg-surface-2" aria-hidden />
              <h3 className="text-h4">{story.title}</h3>
            </div>
            <p className="text-sm leading-6 text-muted">{story.description}</p>
            <ul className="flex flex-col gap-2 text-sm text-muted">
              {story.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2">
                  <span className="mt-2 h-1 w-6 bg-accent-gold/70" aria-hidden />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}
