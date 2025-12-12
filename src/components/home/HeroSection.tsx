import { Button } from "@/components/common/Button";
import { Section } from "@/components/common/Section";

export function HeroSection() {
  return (
    <Section className="pt-12 sm:pt-16" variant="default">
      <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex max-w-2xl flex-col gap-6">
          <p className="text-sm uppercase tracking-[0.16em] text-text-muted">
            A small museum at home
          </p>
          <h1 className="text-h1">
            집 안에 열리는
            <br />
            작은 미술관, 플로뮤제
          </h1>
          <p className="max-w-xl text-body text-text-muted">
            계절의 꽃과 아티스트 오브제를 함께 큐레이션해 한 달에 한 번,
            작은 전시를 보내드립니다. 화병 회수/세척까지 포함된 순환형
            구독으로 집 안을 홈 갤러리로 완성하세요.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button as="a" href="/subscribe">
              첫 전시 구독하기
            </Button>
            <Button as="a" href="/artists" variant="secondary">
              협업 작가 살펴보기
            </Button>
          </div>
        </div>
        <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-border-subtle bg-gradient-to-br from-bg-surface via-primary-soft to-bg-surface p-6 shadow-[0_14px_45px_rgba(20,30,25,0.12)]">
          <div className="flex flex-col gap-4 rounded-2xl bg-bg-surface/80 p-6 backdrop-blur">
            <div className="flex items-center justify-between">
              <span className="text-caption text-text-muted">
                Monthly Exhibition Box
              </span>
              <span className="rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-primary">
                Signature
              </span>
            </div>
            <h3 className="text-h3">Botanical Art Curation</h3>
            <p className="text-sm leading-6 text-text-muted">
              꽃다발 + 아티스트 오브제 + 아트 포스터/엽서. 배송 알림과 함께
              화병 회수/세척까지 포함된 순환형 구독입니다.
            </p>
            <div className="grid grid-cols-2 gap-3 text-sm font-semibold text-text-main">
              <div className="rounded-2xl border border-border-subtle bg-primary-soft px-4 py-3">
                월 68,000원부터
              </div>
              <div className="rounded-2xl border border-border-subtle px-4 py-3 text-text-muted">
                매월 첫째 주 배송
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
