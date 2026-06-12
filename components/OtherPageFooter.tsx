import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface OtherPageFooterProps {
  previous?: {
    href: string;
    label: string;
  };
  next?: {
    href: string;
    label: string;
  };
}

export function OtherPageFooter({ previous, next }: OtherPageFooterProps) {
  return (
    <footer className="fixed inset-x-0 bottom-0 z-50 border-t border-united-gold/25 bg-gradient-to-r from-united-black/95 via-united-red/95 to-united-black/95 px-2 py-3 shadow-[0_-14px_38px_rgba(10,10,12,0.34)] backdrop-blur-xl sm:px-3">
      <nav
        aria-label="Navigasi halaman lain"
        className="mx-auto grid w-full min-w-0 max-w-7xl grid-cols-[6.25rem_minmax(0,1fr)_6.25rem] items-center gap-1 sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] sm:gap-3"
      >
        <div className="flex justify-start">
          {previous ? (
            <Button
              asChild
              variant="outline"
              size="sm"
              className="h-9 w-full min-w-0 justify-center overflow-hidden rounded-full border-white/20 bg-white/10 px-1.5 text-left font-bold text-white shadow-sm hover:border-united-gold/60 hover:bg-white/20 hover:text-united-gold sm:w-auto sm:max-w-[42vw] sm:justify-start sm:px-4"
            >
              <Link href={previous.href} aria-label={`Halaman sebelumnya: ${previous.label}`}>
                <ArrowLeft className="h-4 w-4 shrink-0" />
                <span className="whitespace-nowrap text-[11px] sm:min-w-0 sm:truncate sm:text-sm">
                  <span className="hidden sm:inline">Sebelumnya - </span>
                  {previous.label}
                </span>
              </Link>
            </Button>
          ) : (
            <Button
              variant="outline"
              size="sm"
              disabled
              aria-label="Tidak ada halaman sebelumnya"
              className="h-9 w-full justify-center overflow-hidden rounded-full border-white/10 bg-white/5 px-1.5 text-left text-white/50 sm:w-auto sm:justify-start sm:px-4"
            >
              <ArrowLeft className="h-4 w-4 shrink-0" />
              <span className="hidden sm:inline">Sebelumnya</span>
            </Button>
          )}
        </div>

        <p className="min-w-0 justify-self-center rounded-full border border-white/15 bg-white/10 px-2 py-1.5 text-center text-[11px] font-black uppercase tracking-[0.08em] text-united-gold shadow-sm sm:px-4 sm:text-xs sm:tracking-[0.22em]">
          @beta
        </p>

        <div className="flex justify-end">
          {next ? (
            <Button
              asChild
              variant="outline"
              size="sm"
              className="h-9 w-full min-w-0 justify-center overflow-hidden rounded-full border-white/20 bg-white/10 px-1.5 text-right font-bold text-white shadow-sm hover:border-united-gold/60 hover:bg-white/20 hover:text-united-gold sm:w-auto sm:max-w-[42vw] sm:justify-end sm:px-4"
            >
              <Link href={next.href} aria-label={`Halaman selanjutnya: ${next.label}`}>
                <span className="whitespace-nowrap text-[11px] sm:min-w-0 sm:truncate sm:text-sm">
                  <span className="hidden sm:inline">Selanjutnya - </span>
                  {next.label}
                </span>
                <ArrowRight className="h-4 w-4 shrink-0" />
              </Link>
            </Button>
          ) : (
            <Button
              variant="outline"
              size="sm"
              disabled
              aria-label="Tidak ada halaman selanjutnya"
              className="h-9 w-full justify-center overflow-hidden rounded-full border-white/10 bg-white/5 px-1.5 text-right text-white/50 sm:w-auto sm:justify-end sm:px-4"
            >
              <span className="hidden sm:inline">Selanjutnya</span>
              <ArrowRight className="h-4 w-4 shrink-0" />
            </Button>
          )}
        </div>
      </nav>
    </footer>
  );
}
