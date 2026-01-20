"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { href: "/", label: "작가의 향" },
  { href: "/subscribe", label: "구독" },
  { href: "/editions", label: "월호" },
  { href: "/artists", label: "작가" },
  { href: "/about", label: "브랜드" },
  { href: "/contact", label: "문의" },
] as const;

function NavLinks({ activePath, mobile = false }: { activePath: string; mobile?: boolean }) {
  return (
    <nav className={`flex ${mobile ? "flex-col gap-3" : "items-center gap-6"} text-sm text-muted`}>
      {navItems.map((item) => {
        const isActive = activePath === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`lux-link relative px-1 py-1 transition-colors ${
              isActive ? "text-ink" : "hover:text-ink"
            }`}
          >
            {item.label}
            {isActive ? (
              <span className="absolute -bottom-1 left-0 h-px w-full bg-accent-gold" aria-hidden />
            ) : null}
          </Link>
        );
      })}
    </nav>
  );
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const focusable = menuRef.current?.querySelectorAll<HTMLElement>("a, button");
    focusable?.[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        return;
      }

      if (event.key === "Tab" && focusable && focusable.length > 0) {
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          last.focus();
          event.preventDefault();
        } else if (!event.shiftKey && document.activeElement === last) {
          first.focus();
          event.preventDefault();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const headerStyle = scrolled
    ? "bg-surface/90 border-b border-border shadow-[0_6px_24px_rgba(20,18,15,0.08)] backdrop-blur"
    : "bg-transparent";

  return (
    <header className={`sticky top-0 z-40 transition-colors duration-300 ${headerStyle}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        <Link
          href="/"
          aria-label="GALLERYNOOK 홈으로 이동"
          className="flex items-center gap-3 text-lg font-semibold tracking-tight text-ink"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-xs font-semibold tracking-[0.18em] text-primary">
            GN
          </span>
          <span className="text-sm font-semibold leading-tight text-ink">
            갤러리눅
            <br />
            <span className="text-[10px] uppercase tracking-[0.24em] text-muted">GALLERYNOOK</span>
          </span>
        </Link>
        <div className="hidden items-center gap-6 sm:flex">
          <NavLinks activePath={pathname} />
          <Link href="/subscribe" className="lux-link text-sm font-semibold text-ink">
            구독 플랜 보기
          </Link>
        </div>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-ink shadow-[0_6px_16px_rgba(20,18,15,0.08)] sm:hidden"
          aria-label="메뉴 열기"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="sr-only">메뉴</span>
          <span className="block h-0.5 w-5 bg-ink shadow-[0_6px_0_0_currentColor,0_-6px_0_0_currentColor]" />
        </button>
      </div>

      {menuOpen ? (
        <div className="fixed inset-0 z-40 bg-ink/40 backdrop-blur-sm sm:hidden">
          <div
            ref={menuRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            className="absolute inset-0 flex h-full flex-col gap-6 bg-surface px-6 py-8"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.3em] text-muted">MENU</span>
              <button
                type="button"
                className="rounded-full border border-border px-3 py-2 text-xs font-semibold text-ink"
                onClick={() => setMenuOpen(false)}
              >
                닫기
              </button>
            </div>
            <NavLinks activePath={pathname} mobile />
            <Link href="/subscribe" className="lux-link text-sm font-semibold text-ink">
              구독 플랜 보기
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
