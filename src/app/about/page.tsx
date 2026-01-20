import { Card } from "@/components/common/Card";
import { Section } from "@/components/common/Section";
import { SectionTitle } from "@/components/common/SectionTitle";

export const metadata = {
  title: "GALLERYNOOK | About",
  description: "갤러리눅, 작가의 향 구독의 철학과 운영 방식을 소개합니다.",
};

const values = [
  {
    title: "작품 × 향",
    description: "작품을 먼저 고르고, 향은 작품의 감정을 공간으로 확장합니다.",
  },
  {
    title: "월 작가 큐레이션",
    description: "매달 한 명의 작가와 함께 작품·향 페어링을 제안합니다.",
  },
  {
    title: "도록 같은 정보",
    description: "큐레이션 노트, 설치 가이드, 캡션 카드로 조용하지만 확신 있게 안내합니다.",
  },
  {
    title: "정직한 정책",
    description: "교체/파손/향 강도/스킵·해지를 투명하게 안내합니다.",
  },
];

export default function AboutPage() {
  return (
    <Section>
      <SectionTitle
        eyebrow="ABOUT"
        title="갤러리눅, 작가의 향"
        subtitle="집 안의 한 켠을 위한 작은 전시. 작품과 향, 큐레이션 노트가 함께 도착합니다."
      />
      <div className="grid gap-4 sm:grid-cols-2">
        {values.map((item) => (
          <Card key={item.title} className="flex flex-col gap-2 p-5">
            <h3 className="text-h4">{item.title}</h3>
            <p className="text-sm leading-6 text-muted">{item.description}</p>
          </Card>
        ))}
      </div>
      <Card className="mt-6 p-6">
        <h3 className="text-h4">믿을 수 있는 약속</h3>
        <ul className="mt-3 flex list-disc flex-col gap-2 pl-4 text-sm text-muted">
          <li>파손/누수/향 문제 시 48시간 내 보상/교체</li>
          <li>향 강도/알러지 가이드를 동봉하고 공간별 사용법을 안내</li>
          <li>배송 5일 전까지 스킵/해지/주소 변경 접수</li>
          <li>작가와의 공정한 협업을 기반으로 한 월호 발행</li>
        </ul>
      </Card>
    </Section>
  );
}
