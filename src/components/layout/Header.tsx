"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/subscribe", label: "Subscribe" },
  { href: "/artists", label: "Artists" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

function NavLinks({ activePath, mobile = false }: { activePath: string; mobile?: boolean }) {
  return (
    <nav className={`flex ${mobile ? "flex-col gap-2" : "items-center gap-6"} text-sm font-medium text-text-muted`}>
      {navItems.map((item) => {
        const isActive = activePath === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`rounded-full px-3 py-2 transition-colors ${
              isActive ? "bg-primary-soft text-primary" : "hover:text-text-main"
            }`}
          >
            {item.label}
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
    ? "bg-bg-base/95 border-b border-border-subtle backdrop-blur"
    : "bg-gradient-to-b from-bg-base/80 via-bg-base/30 to-transparent backdrop-blur border-b border-transparent";

  return (
    <header className={`sticky top-0 z-40 transition-colors duration-300 ${headerStyle}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        <Link
          href="/"
          aria-label="FLOMUSÉE 홈으로 이동"
          className="flex items-center gap-3 text-lg font-semibold tracking-tight text-text-main"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-border-subtle bg-primary-soft text-base font-bold text-primary shadow-inner">
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
        <div className="hidden items-center gap-6 sm:flex">
          <NavLinks activePath={pathname} />
          <Link
            href="/subscribe"
            className="rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white shadow-[0_10px_30px_rgba(31,58,50,0.16)] transition-all hover:-translate-y-[1px] hover:bg-primary-dark"
          >
            구독 플랜 보기
          </Link>
        </div>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-border-subtle bg-white text-text-main shadow sm:hidden"
          aria-label="메뉴 열기"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="sr-only">메뉴</span>
          <span className="block h-0.5 w-5 bg-text-main shadow-[0_6px_0_0_currentColor,0_-6px_0_0_currentColor]" />
        </button>
      </div>

      {menuOpen ? (
        <div className="sm:hidden">
          <div
            ref={menuRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            className="border-t border-border-subtle bg-bg-base/95 px-5 py-4 shadow-xl backdrop-blur"
          >
            <NavLinks activePath={pathname} mobile />
            <div className="mt-3">
              <Link
                href="/subscribe"
                className="inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(31,58,50,0.16)] transition-colors hover:bg-primary-dark"
              >
                구독 플랜 보기
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
