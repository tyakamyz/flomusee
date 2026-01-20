import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-bg-subtle">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 text-sm text-text-muted sm:flex-row sm:items-start sm:justify-between sm:px-8 lg:px-12">
        <div className="flex max-w-md flex-col gap-2">
          <span className="text-base font-semibold text-text-main">GALLERYNOOK</span>
          <p className="text-sm leading-relaxed">
            집 안의 한 켠, 한 점의 작품과 그 작품을 닮은 향을 함께 보내는 구독입니다.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 text-sm sm:grid-cols-3">
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-text-main">Navigation</span>
            <Link href="/" className="transition-colors hover:text-text-main">
              작가의 향
            </Link>
            <Link href="/subscribe" className="transition-colors hover:text-text-main">
              구독
            </Link>
            <Link href="/editions" className="transition-colors hover:text-text-main">
              월호
            </Link>
            <Link href="/artists" className="transition-colors hover:text-text-main">
              작가
            </Link>
            <Link href="/about" className="transition-colors hover:text-text-main">
              브랜드
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-text-main">Contact</span>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="transition-colors hover:text-text-main"
            >
              {siteConfig.contactEmail}
            </a>
            <a
              href={siteConfig.kakaoUrl}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-text-main"
            >
              Kakao Channel
            </a>
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-text-main"
            >
              Instagram
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-text-main">Policy</span>
            <span className="text-text-muted/70">Terms / Privacy (준비중)</span>
            <p className="text-xs text-text-muted/70">
              서울 · 플로리스트 & 디자이너 팀이 함께 운영합니다.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
