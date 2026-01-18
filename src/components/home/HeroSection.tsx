import { Button } from "@/components/common/Button";
import { Section } from "@/components/common/Section";
import { heroHighlights } from "@/data/site";
import Image from "next/image";

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
            계절의 꽃과 아티스트 오브제를 함께 큐레이션해 한 달에 한 번 전시 박스를 보내드립니다. 화병
            회수/세척까지 포함된 순환형 구독으로 집 안을 홈 갤러리로 완성하세요.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button as="a" href="/#plans">
              구독 플랜 보기
            </Button>
            <Button as="a" href="/#artists" variant="secondary">
              플로뮤제 전시 미리보기
            </Button>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {heroHighlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border-subtle/70 bg-white/70 px-4 py-3 shadow-[0_12px_28px_rgba(31,58,50,0.08)] backdrop-blur"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-text-muted">
                  {item.title}
                </p>
                <p className="text-sm text-text-main">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-border-subtle bg-gradient-to-b from-white/90 via-primary-soft/70 to-white shadow-[0_24px_60px_rgba(20,30,25,0.16)] backdrop-blur">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.6),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(230,218,200,0.35),transparent_30%)]" />
          <div className="relative flex flex-col gap-5 p-6">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-primary shadow-inner">
                Monthly Exhibition Box
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-text-muted">
                Signature
              </span>
            </div>
            <div className="overflow-hidden rounded-2xl border border-border-subtle">
              <Image
                src="/images/hero-ambient.svg"
                alt="플로뮤제 전시 박스"
                width={640}
                height={400}
                priority
                className="h-48 w-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-3 rounded-2xl border border-border-subtle/80 bg-white/80 p-5 backdrop-blur">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-caption text-text-muted">Botanical Art Curation</p>
                  <h3 className="text-h3">월 68,000원 / 1회</h3>
                </div>
                <span className="rounded-full bg-primary text-xs font-semibold uppercase tracking-[0.12em] text-white px-3 py-1">
                  Premium
                </span>
              </div>
              <p className="text-sm leading-6 text-text-muted">
                꽃다발 + 작가 오브제/포스터 + 스타일링 가이드. 배송 알림과 함께 화병 회수/세척까지
                포함됩니다.
              </p>
              <div className="grid grid-cols-2 gap-3 text-sm font-semibold text-text-main">
                <div className="rounded-2xl border border-border-subtle bg-primary-soft px-4 py-3">
                  매월 첫째 주 배송
                </div>
                <div className="rounded-2xl border border-border-subtle bg-white px-4 py-3 text-text-muted">
                  회수/세척 포함
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
