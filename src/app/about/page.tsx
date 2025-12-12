import { Section } from "@/components/common/Section";
import { SectionTitle } from "@/components/common/SectionTitle";

export default function AboutPage() {
  return (
    <Section>
      <SectionTitle
        title="FLOMUSÉE의 이야기"
        subtitle="꽃과 예술을 하나의 전시처럼 경험할 수 있도록, 지속 가능한 순환형 구독을 만듭니다."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <h3 className="text-lg font-semibold">브랜드 미션</h3>
          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">
            일상의 공간이 갤러리가 되도록, 계절의 꽃과 작가들의 작품을 함께
            큐레이션합니다. 회수·세척까지 포함된 흐름으로 불필요한 폐기물과
            관리 부담을 줄입니다.
          </p>
        </div>
        <div className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <h3 className="text-lg font-semibold">이름의 의미</h3>
          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">
            FLO(ral) + MUSÉE(뮤지엄)의 합성어로, 꽃과 작품을 전시하듯 경험하는
            구독형 뮤지엄을 뜻합니다. 한 달마다 새 전시를 여는 마음으로
            큐레이션합니다.
          </p>
        </div>
        <div className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <h3 className="text-lg font-semibold">지속 가능성</h3>
          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">
            화병 재사용, 친환경 포장재, 지역 플로리스트 협업을 통해 탄소
            발자국을 줄입니다. 남은 꽃은 드라이 플라워나 워크숍 재료로
            재활용합니다.
          </p>
        </div>
        <div className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <h3 className="text-lg font-semibold">팀</h3>
          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">
            플로리스트, 그래픽 디자이너, 테크 멤버가 함께 운영합니다. 고객
            경험, 아트 콜라보, 서비스 자동화를 꾸준히 개선합니다.
          </p>
        </div>
      </div>
    </Section>
  );
}
