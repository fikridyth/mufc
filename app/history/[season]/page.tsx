import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Home } from "lucide-react";
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

  return (
    <main className="bg-background">
      <section className="bg-united-black text-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <nav className="flex flex-wrap items-center gap-2 text-sm text-white/72">
            <Link href="/" className="inline-flex items-center gap-2 hover:text-white">
              <Home className="h-4 w-4" />
              Beranda
            </Link>
            <span>/</span>
            <span>History</span>
            <span>/</span>
            <span className="text-white">{season.label}</span>
          </nav>

          <div className="grid gap-8 py-14 lg:grid-cols-[1fr_360px] lg:items-end">
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <Badge variant="gold">{season.era}</Badge>
                {season.trophies.length ? (
                  season.trophies.map((trophy) => (
                    <Badge key={trophy} variant="outline" className="border-white/30 text-white">
                      {trophy}
                    </Badge>
                  ))
                ) : (
                  <Badge variant="outline" className="border-white/30 text-white">
                    Tanpa trofi
                  </Badge>
                )}
              </div>
              <div className="space-y-4">
                <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
                  {season.title}
                </h1>
                <p className="max-w-3xl text-lg leading-8 text-white/76">
                  {season.summary}
                </p>
              </div>
              <Button asChild variant="gold">
                <Link href="/#arsip-musim">
                  <ArrowLeft className="h-4 w-4" />
                  Kembali ke daftar musim
                </Link>
              </Button>
            </div>

            <Card className="border-white/15 bg-white/8 text-white">
              <CardHeader>
                <CardTitle>Ringkasan musim</CardTitle>
                <CardDescription className="text-white/65">
                  Informasi inti yang paling sering dicari.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <dl className="grid gap-4 text-sm">
                  <SummaryItem label="Manajer" value={season.managers.join(" / ")} />
                  <SummaryItem label="Kompetisi" value={season.competitions.join(", ")} />
                  <SummaryItem label="Posisi liga" value={season.leaguePosition} />
                  <SummaryItem
                    label="Trofi"
                    value={season.trophies.length ? season.trophies.join(", ") : "Tanpa trofi"}
                  />
                </dl>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:px-8">
        <DetailSection
          title="Cerita musim"
          description="Narasi utama musim. Bagian ini bisa diperluas manual saat sumber historis sudah dipastikan."
        >
          <div className="grid gap-4">
            {season.story.map((paragraph) => (
              <p
                key={paragraph}
                className="rounded-lg border bg-white p-5 text-sm leading-7 text-muted-foreground"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </DetailSection>

        <DetailSection title="Skuad pemain">
          <SeasonSquadTable players={season.squad} />
        </DetailSection>

        <div className="grid gap-10 lg:grid-cols-2">
          <DetailSection title="Transfer masuk">
            <TransferTable records={season.transfersIn} type="in" />
          </DetailSection>
          <DetailSection title="Transfer keluar">
            <TransferTable records={season.transfersOut} type="out" />
          </DetailSection>
        </div>

        <DetailSection
          title="Starting eleven"
          description="Formasi visual sederhana. Gunakan placeholder sampai susunan paling sering digunakan sudah terverifikasi."
        >
          <StartingXI data={season.commonStartingXI} />
        </DetailSection>

        <DetailSection title="Statistik musim">
          <SeasonStatGrid statistics={season.statistics} />
        </DetailSection>

        <DetailSection title="Pemain kunci">
          {season.keyPlayers.length ? (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {season.keyPlayers.map((player) => (
                <Card key={player.name}>
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

        <DetailSection title="Momen penting">
          <ImportantMoments moments={season.importantMoments} />
        </DetailSection>

        <DetailSection title="Info penting lainnya">
          {season.additionalInfo.length ? (
            <div className="grid gap-3 md:grid-cols-2">
              {season.additionalInfo.map((info) => (
                <div key={info} className="rounded-lg border bg-white p-5 text-sm leading-6">
                  {info}
                </div>
              ))}
            </div>
          ) : (
            <EmptyState label="Data belum tersedia" />
          )}
        </DetailSection>
      </div>
    </main>
  );
}

function SummaryItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-white/12 pt-3">
      <dt className="text-white/55">{label}</dt>
      <dd className="mt-1 font-semibold text-white">{value}</dd>
    </div>
  );
}

function EmptyState({ label }: { label: string }) {
  return (
    <div className="rounded-lg border border-dashed bg-white p-8 text-center text-sm text-muted-foreground">
      {label}
    </div>
  );
}
