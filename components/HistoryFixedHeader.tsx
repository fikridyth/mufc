"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HistoryFixedHeaderProps {
  seasonLabel: string;
}

export function HistoryFixedHeader({ seasonLabel }: HistoryFixedHeaderProps) {
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
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-united-gold text-sm font-black text-united-black">
              MU
            </span>
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
            <span>History</span>
            <span>/</span>
            <span className={isLight ? "truncate text-foreground" : "truncate text-white"}>
              {seasonLabel}
            </span>
          </nav>
        </div>
        <nav
          className={[
            "absolute left-1/2 hidden -translate-x-[58%] items-center gap-1 text-sm font-bold md:flex",
            isLight ? "text-foreground" : "text-white/78"
          ].join(" ")}
        >
          {[
            ["#statistik", "Statistik"],
            ["#cerita", "Cerita"],
            ["#starting-xi", "XI"],
            ["#skuad", "Skuad"],
            ["#transfer", "Transfer"],
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
        <Button asChild variant="gold" size="sm" className="shrink-0">
          <Link href="/#arsip-musim">
            <ArrowLeft className="h-4 w-4" />
            Arsip
          </Link>
        </Button>
      </div>
    </header>
  );
}
