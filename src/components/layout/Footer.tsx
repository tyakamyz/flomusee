export function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-bg-subtle">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-text-muted sm:flex-row sm:items-start sm:justify-between sm:px-8 lg:px-12">
        <div className="flex flex-col gap-2">
          <span className="text-base font-semibold text-text-main">
            FLOMUSÉE
          </span>
          <p className="max-w-sm text-sm leading-relaxed">
            집 안에 열리는 작은 미술관. 계절의 꽃과 아티스트 오브제를 함께
            큐레이션합니다.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <span className="font-semibold text-text-main">Links</span>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-text-main"
          >
            Instagram
          </a>
          <a
            href="https://pf.kakao.com"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-text-main"
          >
            Kakao Channel
          </a>
          <a
            href="/contact"
            className="transition-colors hover:text-text-main"
          >
            Contact
          </a>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <span className="font-semibold text-text-main">Policies</span>
          <a href="#" className="transition-colors hover:text-text-main">
            Terms
          </a>
          <a href="#" className="transition-colors hover:text-text-main">
            Privacy
          </a>
          <a
            href="mailto:team@flomusee.co.kr"
            className="transition-colors hover:text-text-main"
          >
            team@flomusee.co.kr
          </a>
        </div>
      </div>
    </footer>
  );
}
