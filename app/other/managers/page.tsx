import type { Metadata } from "next";
import { UsersRound } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { OtherFixedHeader } from "@/components/OtherFixedHeader";
import { OtherPageFooter } from "@/components/OtherPageFooter";
import { seasons, type Season } from "@/data/seasons";
import { ManagersTable } from "./ManagersTable";

export const metadata: Metadata = {
  title: "Daftar Manajer | Manchester United History Archive",
  description:
    "Daftar manajer Manchester United berdasarkan data musim di arsip lokal."
};

const ignoredValues = new Set(["Data perlu diverifikasi", "Data belum tersedia", "-"]);

interface ManagerSeason {
  id: string;
  label: string;
  era: string;
  trophies: string[];
}

interface ManagerSummary {
  name: string;
  seasons: ManagerSeason[];
}

function getSeasonStartYear(season: Season | ManagerSeason) {
  return Number(season.id.split("-")[0]);
}

function getManagerSummaries() {
  const managerMap = new Map<string, ManagerSeason[]>();

  seasons.forEach((season) => {
    season.managers
      .filter((manager) => !ignoredValues.has(manager))
      .forEach((manager) => {
        const managerSeasons = managerMap.get(manager) ?? [];
        managerSeasons.push({
          id: season.id,
          label: season.label,
          era: season.era,
          trophies: season.trophies
        });
        managerMap.set(manager, managerSeasons);
      });
  });

  return Array.from(managerMap, ([name, managerSeasons]) => ({
    name,
    seasons: managerSeasons.sort((a, b) => getSeasonStartYear(a) - getSeasonStartYear(b))
  })).sort(
    (a, b) =>
      getSeasonStartYear(a.seasons[0]) - getSeasonStartYear(b.seasons[0])
  );
}

export default function ManagersPage() {
  const managers = getManagerSummaries();
  const totalManagerSeasons = managers.reduce(
    (total, manager) => total + manager.seasons.length,
    0
  );

  return (
    <main className="min-h-screen bg-background pb-28">
      <OtherFixedHeader title="Managers" />
      <section className="relative mb-2 overflow-hidden bg-united-black text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(212,175,55,0.28),transparent_28%),radial-gradient(circle_at_82%_20%,rgba(179,18,28,0.72),transparent_34%),linear-gradient(135deg,#0b0b0d_0%,#7f0611_52%,#120609_100%)]" />
        <div className="absolute inset-x-0 -bottom-24 h-48 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="absolute -right-16 top-12 h-72 w-72 rounded-full border border-white/10" />
        <div className="absolute -right-4 top-28 h-44 w-44 rounded-full border border-united-gold/25" />

        <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-24 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <Badge variant="gold">Managers</Badge>
            <h1 className="text-4xl font-black tracking-tight md:text-5xl">
              Daftar manajer Manchester United
            </h1>
            <p className="text-base leading-7 text-white/70">
              Rangkuman ini dibuat dari data musim yang tersedia di arsip lokal.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UsersRound className="h-5 w-5 text-united-red" />
                {managers.length}
              </CardTitle>
              <CardDescription>Manajer tercatat</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>{totalManagerSeasons}</CardTitle>
              <CardDescription>Musim-manajer dalam arsip</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>{seasons.length}</CardTitle>
              <CardDescription>Total musim arsip</CardDescription>
            </CardHeader>
          </Card>
        </div>

        <ManagersTable managers={managers} />
      </section>
      <OtherPageFooter next={{ href: "/other/trophies", label: "Trophies" }} />
    </main>
  );
}
