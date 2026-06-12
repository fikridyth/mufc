import type { Metadata } from "next";
import Link from "next/link";
import { Trophy } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { OtherFixedHeader } from "@/components/OtherFixedHeader";
import { OtherPageFooter } from "@/components/OtherPageFooter";
import { seasons } from "@/data/seasons";

export const metadata: Metadata = {
  title: "Daftar Trofi | Manchester United History Archive",
  description:
    "Jumlah trofi Manchester United dan daftar musim ketika trofi didapatkan berdasarkan arsip lokal."
};

interface TrophySeason {
  id: string;
  label: string;
  era: string;
}

interface TrophySummary {
  name: string;
  seasons: TrophySeason[];
}

function getTrophySummaries() {
  const trophyMap = new Map<string, TrophySeason[]>();

  seasons.forEach((season) => {
    season.trophies.forEach((trophy) => {
      const trophySeasons = trophyMap.get(trophy) ?? [];
      trophySeasons.push({
        id: season.id,
        label: season.label,
        era: season.era
      });
      trophyMap.set(trophy, trophySeasons);
    });
  });

  return Array.from(trophyMap, ([name, trophySeasons]) => ({
    name,
    seasons: trophySeasons
  })).sort((a, b) => b.seasons.length - a.seasons.length || a.name.localeCompare(b.name));
}

export default function TrophiesPage() {
  const trophies = getTrophySummaries();
  const totalTrophies = trophies.reduce(
    (total, trophy) => total + trophy.seasons.length,
    0
  );

  return (
    <main className="min-h-screen bg-background pb-28">
      <OtherFixedHeader title="Trophies" />
      <section className="relative mb-2 overflow-hidden bg-united-black text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(212,175,55,0.28),transparent_28%),radial-gradient(circle_at_82%_20%,rgba(179,18,28,0.72),transparent_34%),linear-gradient(135deg,#0b0b0d_0%,#7f0611_52%,#120609_100%)]" />
        <div className="absolute inset-x-0 -bottom-24 h-48 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="absolute -right-16 top-12 h-72 w-72 rounded-full border border-white/10" />
        <div className="absolute -right-4 top-28 h-44 w-44 rounded-full border border-united-gold/25" />

        <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-24 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <Badge variant="gold">Trophies</Badge>
            <h1 className="text-4xl font-black tracking-tight md:text-5xl">
              Daftar trofi Manchester United
            </h1>
            <p className="text-base leading-7 text-white/70">
              Jumlah dan daftar tahun trofi berdasarkan musim yang tersedia di arsip lokal.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-united-red" />
                {totalTrophies}
              </CardTitle>
              <CardDescription>Total trofi dalam arsip</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>{trophies.length}</CardTitle>
              <CardDescription>Jenis trofi tercatat</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>{seasons.length}</CardTitle>
              <CardDescription>Total musim arsip</CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {trophies.map((trophy) => (
            <Card key={trophy.name} className="flex h-full flex-col">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <CardTitle>{trophy.name}</CardTitle>
                  <Badge variant="gold" className="shrink-0">
                    {trophy.seasons.length}x
                  </Badge>
                </div>
                <CardDescription>
                  Tahun atau musim ketika trofi ini tercatat didapatkan.
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto flex min-h-[96px] w-full items-start justify-center">
                <div className="mx-auto flex w-full max-w-[380px] flex-wrap items-start justify-center gap-2">
                  {trophy.seasons.map((season) => (
                    <Link
                      key={season.id}
                      href={`/history/${season.id}`}
                      className="flex shrink-0 items-center justify-center"
                    >
                      <Badge variant="gold">{season.label}</Badge>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <OtherPageFooter
        previous={{ href: "/other/managers", label: "Managers" }}
        next={{ href: "/other/players", label: "Players" }}
      />
    </main>
  );
}
