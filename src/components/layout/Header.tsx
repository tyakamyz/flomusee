import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/artists", label: "Artists" },
  { href: "/subscribe", label: "Subscribe" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border-subtle/80 bg-bg-base/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="flex items-center gap-3 text-lg font-semibold tracking-tight text-text-main"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-border-subtle bg-primary-soft text-sm font-bold text-primary">
            F
          </span>
          <span className="text-sm font-medium leading-tight text-text-muted">
            플로뮤제
            <br />
            <span className="text-xs uppercase tracking-[0.18em] text-text-main">
              FLOMUSÉE
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-text-muted sm:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-text-main"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/subscribe"
          className="rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-primary-dark"
        >
          구독 알아보기
        </Link>
      </div>
    </header>
  );
}
