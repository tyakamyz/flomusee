export function Footer() {
  return (
    <footer className="border-t border-zinc-100 bg-white/80 backdrop-blur dark:border-zinc-900 dark:bg-black/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-6 text-sm text-zinc-600 dark:text-zinc-300 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <span className="font-semibold text-zinc-800 dark:text-zinc-100">
          FLOMUSÉE
        </span>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-black dark:hover:text-white"
          >
            Instagram
          </a>
          <a
            href="https://pf.kakao.com"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-black dark:hover:text-white"
          >
            Kakao Channel
          </a>
          <a
            href="/contact"
            className="transition-colors hover:text-black dark:hover:text-white"
          >
            Contact
          </a>
        </div>
        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          꽃과 예술이 만나는 정기 구독 뮤지엄, FLOMUSÉE.
        </p>
      </div>
    </footer>
  );
}
