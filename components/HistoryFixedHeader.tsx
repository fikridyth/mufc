"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface HistoryFixedHeaderProps {
  seasonLabel: string;
  seasonEra: string;
}

export function HistoryFixedHeader({ seasonLabel, seasonEra }: HistoryFixedHeaderProps) {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsLight(window.scrollY > 560);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 border-b shadow-lg backdrop-blur transition-colors duration-300",
        isLight
          ? "border-border bg-white/92 text-foreground"
          : "border-white/10 bg-united-black/88 text-white"
      ].join(" ")}
    >
      <div className="relative mx-auto flex h-14 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex min-w-0 flex-1 items-center gap-4">
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              src="https://upload.wikimedia.org/wikipedia/id/thumb/7/7a/Manchester_United_FC_crest.svg/1280px-Manchester_United_FC_crest.svg.png"
              alt="Manchester United"
              width={32}
              height={32}
            />
          </Link>
          <nav
            className={[
              "flex min-w-0 items-center gap-2 text-sm font-semibold",
              isLight ? "text-muted-foreground" : "text-white/70"
            ].join(" ")}
          >
            <Link href="/" className="hover:text-current">
              Beranda
            </Link>
            <span>/</span>
            <Link href="/#arsip-musim" className="hover:text-current">
              History
            </Link>
            <span>/</span>
            <span className={isLight ? "truncate text-foreground" : "truncate text-white"}>
              {seasonLabel}
            </span>
          </nav>
        </div>
        <nav
          className={[
            "absolute left-1/2 hidden -translate-x-[50%] items-center gap-1 text-sm font-bold md:flex",
            isLight ? "text-foreground" : "text-white/78"
          ].join(" ")}
        >
          {[
            ["#statistik", "Statistik"],
            ["#cerita", "Cerita"],
            ["#starting-xi", "XI"],
            ["#skuad", "Skuad"],
            ["#transfer", "Transfer"],
            ["#momen", "Momen"],
            ["#player", "Player"],
            ["#trivia", "Trivia"]
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className={[
                "rounded-md px-3 py-2",
                isLight
                  ? "hover:bg-muted hover:text-foreground"
                  : "hover:bg-white/10 hover:text-white"
              ].join(" ")}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="hidden shrink-0 sm:block">
          <p 
            className={[
              "text-sm font-semibold",
              isLight
                ? "hover:bg-muted hover:text-foreground"
                : "hover:bg-white/10 hover:text-white"
            ].join(" ")}
          >
            {seasonEra}
          </p>
        </div>
      </div>
    </header>
  );
}
