import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  BookOpenText,
  CalendarDays,
  Sparkles,
  Star,
  Users
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { DetailSection } from "@/components/DetailSection";
import { HistoryFixedHeader } from "@/components/HistoryFixedHeader";
import { ImportantMoments } from "@/components/ImportantMoments";
import { SeasonSquadTable } from "@/components/SeasonSquadTable";
import { SeasonStatGrid } from "@/components/SeasonStatGrid";
import { StartingXI } from "@/components/StartingXI";
import { TransferTable } from "@/components/TransferTable";
import { getSeasonById, seasons } from "@/data/seasons";

interface SeasonPageProps {
  params: Promise<{
    season: string;
  }>;
}

export function generateStaticParams() {
  return seasons.map((season) => ({
    season: season.id
  }));
}

export async function generateMetadata({
  params
}: SeasonPageProps): Promise<Metadata> {
  const { season: seasonId } = await params;
  const season = getSeasonById(seasonId);

  if (!season) {
    return {
      title: "Musim tidak ditemukan"
    };
  }

  return {
    title: `${season.title} | Manchester United History Archive`,
    description: season.summary
  };
}

export default async function SeasonDetailPage({ params }: SeasonPageProps) {
  const { season: seasonId } = await params;
  const season = getSeasonById(seasonId);

  if (!season) {
    notFound();
  }

  const currentSeasonIndex = seasons.findIndex((item) => item.id === season.id);
  const previousSeason =
    currentSeasonIndex > 0 ? seasons[currentSeasonIndex - 1] : undefined;
  const nextSeason =
    currentSeasonIndex >= 0 && currentSeasonIndex < seasons.length - 1
      ? seasons[currentSeasonIndex + 1]
      : undefined;

  return (
    <main className="bg-background pb-28">
      <HistoryFixedHeader seasonLabel={season.label} seasonEra={season.era} />

      <section className="relative mb-2 overflow-hidden bg-united-black text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(212,175,55,0.28),transparent_28%),radial-gradient(circle_at_82%_20%,rgba(179,18,28,0.72),transparent_34%),linear-gradient(135deg,#0b0b0d_0%,#7f0611_52%,#120609_100%)]" />
        <div className="absolute inset-x-0 -bottom-24 h-48 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="absolute -right-16 top-12 h-72 w-72 rounded-full border border-white/10" />
        <div className="absolute -right-4 top-28 h-44 w-44 rounded-full border border-united-gold/25" />

        <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 py-10 lg:grid-cols-[1fr_390px] lg:items-end">
            <div className="space-y-7">
              <div className="flex flex-wrap gap-2">
                {season.trophies.length ? (
                  season.trophies.map((trophy) => (
                    <Badge key={trophy} variant="outline" className="border-white/30 text-white">
                      {trophy}
                    </Badge>
                  ))
                ) : (
                  <Badge variant="outline" className="border-white/30 text-white">
                    -
                  </Badge>
                )}
              </div>
              <div className="space-y-4">
                <p className="inline-flex items-center gap-2 text-base font-bold uppercase tracking-[0.22em] text-united-gold">
                  <Sparkles className="h-4 w-4" />
                  {season.era}
                </p>
                <h1 className="max-w-3xl text-3xl font-black leading-tight tracking-tight md:text-5xl">
                  {season.title}
                </h1>
                <p className="max-w-3xl text-lg leading-8 text-white/76">
                  {season.summary}
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="gold" size="lg">
                  <Link href="/#arsip-musim">
                    <ArrowLeft className="h-4 w-4" />
                    Kembali ke daftar musim
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white/25 bg-white/10 text-white hover:bg-white/15 hover:text-white"
                >
                  <a href="#skuad">Lihat skuad</a>
                </Button>
              </div>
            </div>

            <Card className="overflow-hidden border-white/15 bg-white/10 text-white shadow-2xl backdrop-blur">
              <div className="h-1.5 bg-gradient-to-r from-united-gold via-white/70 to-united-red" />
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <CalendarDays className="h-5 w-5 text-united-gold" />
                  Ringkasan musim
                </CardTitle>
                <CardDescription className="text-white/65">
                  Informasi inti yang paling sering dicari.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <dl className="grid gap-4 text-sm">
                  <SummaryItem label="Manajer" value={season.managers.join(" / ")} />
                  <SummaryItem label="Kompetisi" value={season.competitions.join(", ")} />
                  <SummaryItem
                    label="Skuad"
                    value={`${season.squad.length} pemain`}
                    icon={<Users className="h-4 w-4 text-united-gold" />}
                  />
                  <SummaryItem
                    label="Trofi"
                    value={season.trophies.length ? season.trophies.join(", ") : "-"}
                  />
                </dl>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:px-8">
        <DetailSection
          id="statistik"
          title="Statistik musim"
          description="Angka inti liga untuk membaca performa secara cepat."
        >
          <SeasonStatGrid statistics={season.statistics} />
        </DetailSection>

        <DetailSection
          id="cerita"
          title="Cerita musim"
          description="Narasi utama musim ini dalam urutan singkat."
        >
          {season.story.length ? (
            <div className="grid gap-4">
              {season.story.map((story, index) => (
                <Card
                  key={`${index}-${story}`}
                  className="overflow-hidden border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-archive"
                >
                  <div className="h-1 bg-gradient-to-r from-united-red to-united-gold" />
                  <CardContent className="flex gap-4 p-5">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-united-gold/20 text-united-red">
                      <BookOpenText className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-sm leading-6 text-foreground/80">
                        {index + 1}. {story}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <EmptyState label="Cerita musim belum tersedia" />
          )}
        </DetailSection>

        <DetailSection
          id="starting-xi"
          title="Starting eleven"
          description="Susunan visual berdasarkan pola starter yang paling kuat sepanjang musim."
        >
          <StartingXI data={season.commonStartingXI} />
        </DetailSection>

        <DetailSection
          id="skuad"
          title="Skuad pemain"
          description="Data keseluruhan pemain."
        >
          <SeasonSquadTable players={season.squad} />
        </DetailSection>

        <DetailSection
          id="transfer"
          title="Transfer"
          description="Transfer masuk dan keluar."
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-3">
              <h3 className="text-lg font-black text-foreground">Transfer masuk</h3>
              <TransferTable records={season.transfersIn} type="in" />
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-black text-foreground">Transfer keluar</h3>
              <TransferTable records={season.transfersOut} type="out" />
            </div>
          </div>
        </DetailSection>

        <DetailSection title="Momen penting">
          <ImportantMoments moments={season.importantMoments} />
        </DetailSection>

        <DetailSection title="Pemain kunci">
          {season.keyPlayers.length ? (
            <div className="grid gap-5 md:grid-cols-2">
              {season.keyPlayers.map((player) => (
                <Card
                  key={player.name}
                  className="overflow-hidden transition hover:-translate-y-1 hover:shadow-archive"
                >
                  <div className="h-1 bg-gradient-to-r from-united-red to-united-gold" />
                  <CardHeader>
                    <Badge variant="gold" className="w-fit">
                      {player.position}
                    </Badge>
                    <CardTitle>{player.name}</CardTitle>
                    <CardDescription>{player.contribution}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-6 text-muted-foreground">
                      {player.story}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <EmptyState label="Data pemain kunci belum tersedia" />
          )}
        </DetailSection>

        <DetailSection id="trivia" title="Trivia">
          {season.additionalInfo.length ? (
            <div className="grid gap-3">
              {season.additionalInfo.map((info, index) => (
                <div
                  key={`${index}-${info}`}
                  className="flex gap-4 rounded-lg border bg-card p-5 text-sm leading-6 shadow-sm"
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-united-gold/20 text-united-red">
                    <Star className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
                      Trivia {index + 1}
                    </p>
                    <p className="mt-1 text-foreground/80">
                      {info}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <EmptyState label="Data belum tersedia" />
          )}
        </DetailSection>

      </div>

      <footer className="fixed inset-x-0 bottom-0 z-50 border-t border-united-gold/25 bg-gradient-to-r from-united-black/95 via-united-red/95 to-united-black/95 px-3 py-3 shadow-[0_-14px_38px_rgba(10,10,12,0.34)] backdrop-blur-xl">
        <nav
          aria-label="Navigasi musim"
          className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-3"
        >
          <div className="flex justify-start">
            {previousSeason ? (
              <Button
                asChild
                variant="outline"
                size="sm"
                className="max-w-[42vw] justify-start rounded-full border-white/20 bg-white/10 px-3 text-left font-bold text-white shadow-sm hover:border-united-gold/60 hover:bg-white/20 hover:text-united-gold sm:px-4"
              >
                <Link href={`/history/${previousSeason.id}`}>
                  <ArrowLeft className="h-4 w-4 shrink-0" />
                  <span className="min-w-0 truncate">
                    Sebelumnya - {previousSeason.label}
                  </span>
                </Link>
              </Button>
            ) : (
              <Button
                variant="outline"
                size="sm"
                disabled
                className="justify-start rounded-full border-white/10 bg-white/5 px-3 text-left text-white/50 sm:px-4"
              >
                <ArrowLeft className="h-4 w-4 shrink-0" />
                <span className="hidden sm:inline">Sebelumnya</span>
              </Button>
            )}
          </div>

          <p className="rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-center text-xs font-black uppercase tracking-[0.22em] text-united-gold shadow-sm">
            @beta
          </p>

          <div className="flex justify-end">
            {nextSeason ? (
              <Button
                asChild
                variant="outline"
                size="sm"
                className="max-w-[42vw] justify-end rounded-full border-white/20 bg-white/10 px-3 text-right font-bold text-white shadow-sm hover:border-united-gold/60 hover:bg-white/20 hover:text-united-gold sm:px-4"
              >
                <Link href={`/history/${nextSeason.id}`}>
                  <span className="min-w-0 truncate">
                    Selanjutnya - {nextSeason.label}
                  </span>
                  <ArrowRight className="h-4 w-4 shrink-0" />
                </Link>
              </Button>
            ) : (
              <Button
                variant="outline"
                size="sm"
                disabled
                className="justify-end rounded-full border-white/10 bg-white/5 px-3 text-right text-white/50 sm:px-4"
              >
                <span className="hidden sm:inline">Selanjutnya</span>
                <ArrowRight className="h-4 w-4 shrink-0" />
              </Button>
            )}
          </div>
        </nav>
      </footer>
    </main>
  );
}

function SummaryItem({
  icon,
  label,
  value
}: {
  icon?: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="border-t border-white/12 pt-3">
      <dt className="flex items-center gap-2 text-white/55">
        {icon}
        {label}
      </dt>
      <dd className="mt-1 text-base font-semibold text-white">{value}</dd>
    </div>
  );
}

function EmptyState({ label }: { label: string }) {
  return (
    <div className="rounded-lg border border-dashed bg-card p-8 text-center text-sm text-muted-foreground">
      {label}
    </div>
  );
}
