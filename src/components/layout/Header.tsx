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
    <header className="sticky top-0 z-40 border-b border-zinc-100 bg-white/80 backdrop-blur dark:border-zinc-900 dark:bg-black/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          FLOMUSÉE
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-zinc-700 dark:text-zinc-200 sm:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-black dark:hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/subscribe"
          className="rounded-full bg-black px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
        >
          구독 알아보기
        </Link>
      </div>
    </header>
  );
}
