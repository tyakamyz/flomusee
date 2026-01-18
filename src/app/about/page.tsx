import { Card } from "@/components/common/Card";
import { Section } from "@/components/common/Section";
import { SectionTitle } from "@/components/common/SectionTitle";

export const metadata = {
  title: "FLOMUSÉE | About",
  description: "꽃과 예술이 만나는 구독형 뮤지엄, 플로뮤제의 철학과 운영 방식을 소개합니다.",
};

const values = [
  {
    title: "꽃+뮤지엄 세계관",
    description: "매달 하나의 테마와 작가를 큐레이션해 집 안에 작은 전시를 엽니다.",
  },
  {
    title: "순환형 운영",
    description: "화병 대여·회수·세척, 친환경 포장, 남은 꽃의 드라이/워크숍 재활용을 원칙으로 합니다.",
  },
  {
    title: "아트 콜라보",
    description: "세라믹, 프린트, 텍스타일, 향 등 다양한 매체의 작가와 협업해 컬렉터블 경험을 만듭니다.",
  },
  {
    title: "정직한 안내",
    description: "배송/회수/보상/해지 정책을 명확히 안내해 신뢰할 수 있는 구독 경험을 제공합니다.",
  },
];

export default function AboutPage() {
  return (
    <Section>
      <SectionTitle
        eyebrow="ABOUT"
        title="FLOMUSÉE는 전시형 플라워 구독입니다"
        subtitle="꽃과 오브제, 향, 스타일링 가이드가 한 박스로 도착해 홈 갤러리를 완성합니다."
      />
      <div className="grid gap-4 sm:grid-cols-2">
        {values.map((item) => (
          <Card key={item.title} className="flex flex-col gap-2 p-5">
            <h3 className="text-h4">{item.title}</h3>
            <p className="text-sm leading-6 text-text-muted">{item.description}</p>
          </Card>
        ))}
      </div>
      <Card className="mt-6 p-6">
        <h3 className="text-h4">지속 가능성을 위한 약속</h3>
        <ul className="mt-3 flex list-disc flex-col gap-2 pl-4 text-sm text-text-muted">
          <li>화병 재사용 및 세척, 완충재 최소화</li>
          <li>시듦 보상/교체, 파손/분실 가이드 투명 공개</li>
          <li>지역 플로리스트/작가와의 공정한 협업</li>
          <li>구독 스킵/해지 요청 시 빠른 반영</li>
        </ul>
      </Card>
    </Section>
  );
}
