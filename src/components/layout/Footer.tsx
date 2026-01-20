import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-2">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 text-sm text-muted sm:flex-row sm:items-start sm:justify-between sm:px-8 lg:px-12">
        <div className="flex max-w-md flex-col gap-3">
          <span className="text-xs uppercase tracking-[0.24em] text-muted">GALLERYNOOK</span>
          <p className="text-sm leading-relaxed text-ink">
            집 안의 한 켠, 매달 한 점의 작품과 그 작품을 닮은 향을 큐레이션합니다.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 text-sm sm:grid-cols-3">
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-ink">Navigation</span>
            <Link href="/" className="lux-link text-sm">
              작가의 향
            </Link>
            <Link href="/subscribe" className="lux-link text-sm">
              구독
            </Link>
            <Link href="/editions" className="lux-link text-sm">
              월호
            </Link>
            <Link href="/artists" className="lux-link text-sm">
              작가
            </Link>
            <Link href="/about" className="lux-link text-sm">
              브랜드
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-ink">Contact</span>
            <a href={`mailto:${siteConfig.contactEmail}`} className="lux-link text-sm">
              {siteConfig.contactEmail}
            </a>
            <a href={siteConfig.kakaoUrl} target="_blank" rel="noreferrer" className="lux-link text-sm">
              Kakao Channel
            </a>
            <a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer" className="lux-link text-sm">
              Instagram
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-ink">Policy</span>
            <span className="text-muted/70">Terms / Privacy (준비중)</span>
            <p className="text-xs text-muted/70">서울 · 큐레이터 & 디자이너 팀이 함께 운영합니다.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
