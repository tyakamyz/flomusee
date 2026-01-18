import { Card } from "@/components/common/Card";
import { Section } from "@/components/common/Section";
import { SectionTitle } from "@/components/common/SectionTitle";
import { storyPoints } from "@/data/site";

export function StorySection() {
  return (
    <Section variant="default">
      <SectionTitle
        eyebrow="STORY"
        title="브랜드 스토리"
        subtitle="집 안에서 열리는 작은 전시. 꽃과 아트 오브제를 지속 가능한 방식으로 큐레이션합니다."
      />
      <div className="grid gap-5 md:grid-cols-3">
        {storyPoints.map((story) => (
          <Card key={story.title} className="flex h-full flex-col gap-4 p-6">
            <div className="flex items-center gap-3">
              <span className="h-10 w-10 rounded-2xl bg-primary-soft" aria-hidden />
              <h3 className="text-h4">{story.title}</h3>
            </div>
            <p className="text-sm leading-6 text-text-muted">{story.description}</p>
            <ul className="flex flex-col gap-2 text-sm text-text-muted">
              {story.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
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
