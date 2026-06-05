import Link from "next/link";
import { ArrowRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-united-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(179,18,28,0.72),transparent_38%),linear-gradient(135deg,rgba(127,6,17,0.98),rgba(11,11,13,0.96)_55%,rgba(11,11,13,1))]" />
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background to-transparent" />
      <div className="relative mx-auto flex min-h-[620px] max-w-7xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-8">
          <Badge variant="gold" className="w-fit bg-united-gold text-united-black">
            Arsip musim Manchester United
          </Badge>
          <div className="space-y-5">
            <h1 className="max-w-4xl text-5xl font-black leading-[1.02] tracking-tight md:text-7xl">
              Manchester United History Archive
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-white/78 md:text-xl">
              Menjelajahi perjalanan Manchester United dari musim ke musim
              melalui cerita, skuad, transfer, statistik, dan momen penting.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" variant="gold">
              <Link href="#arsip-musim">
                Lihat Arsip Musim
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/25 bg-white/8 text-white hover:bg-white/14 hover:text-white"
            >
              <Link href="#era">
                <Shield className="h-4 w-4" />
                Mulai dari Era Sir Alex Ferguson
              </Link>
            </Button>
          </div>
        </div>
        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {[
            ["3", "contoh musim awal"],
            ["1986", "awal kedatangan Ferguson"],
            ["Lokal", "data mudah ditambah manual"]
          ].map(([value, label]) => (
            <div
              key={label}
              className="rounded-lg border border-white/12 bg-white/8 p-5 backdrop-blur"
            >
              <p className="text-3xl font-black text-united-gold">{value}</p>
              <p className="mt-1 text-sm text-white/72">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
