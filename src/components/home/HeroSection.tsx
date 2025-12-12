import { Button } from "@/components/common/Button";
import { Section } from "@/components/common/Section";
import { SectionTitle } from "@/components/common/SectionTitle";

export function HeroSection() {
  return (
    <Section className="pt-12 sm:pt-16" variant="default">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex max-w-2xl flex-col gap-6">
          <SectionTitle
            title="꽃과 예술이 만나는 구독형 뮤지엄"
            subtitle="FLOMUSÉE는 계절의 꽃과 아티스트의 오브제를 함께 큐레이션하여, 매달 새로운 전시를 집으로 전달합니다."
            align="left"
          />
          <div className="flex flex-wrap gap-3">
            <Button as="a" href="/subscribe">
              구독 플랜 보기
            </Button>
            <Button as="a" href="/artists" variant="secondary">
              협업 작가 살펴보기
            </Button>
          </div>
        </div>
        <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900 via-indigo-800 to-pink-500 p-[1px] shadow-lg">
          <div className="h-full w-full rounded-[22px] bg-white p-8 dark:bg-black">
            <div className="flex h-full flex-col justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">
                  Signature Edition
                </p>
                <h3 className="mt-2 text-2xl font-semibold">
                  Botanical Art Curation
                </h3>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">
                계절 꽃다발, 작가 오브제, 향초 또는 포스터가 함께 배송됩니다.
                화병 회수/세척까지 포함된 순환형 구독을 제공합니다.
              </p>
              <div className="flex items-center justify-between rounded-2xl bg-zinc-50 p-4 text-sm font-semibold text-zinc-800 dark:bg-zinc-900 dark:text-zinc-100">
                <span>월 68,000원부터</span>
                <span className="text-zinc-500 dark:text-zinc-400">
                  매월 첫째 주 배송
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
