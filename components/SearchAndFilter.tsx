"use client";

import { useEffect, useMemo, useState } from "react";
import { Search } from "lucide-react";
import type { Season, SeasonEra } from "@/data/seasons";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SeasonCard } from "@/components/SeasonCard";
import { SectionHeader } from "@/components/SectionHeader";

interface SearchAndFilterProps {
  seasons: Season[];
  eras: SeasonEra[];
}

export function SearchAndFilter({ seasons, eras }: SearchAndFilterProps) {
  const [query, setQuery] = useState("");
  const [selectedEra, setSelectedEra] = useState<SeasonEra | "Semua">("Semua");
  const [isLoading, setIsLoading] = useState(false);
  const hasActiveSearch = query.trim().length > 0 || selectedEra !== "Semua";

  useEffect(() => {
    setIsLoading(true);
    const timer = window.setTimeout(() => setIsLoading(false), 140);
    return () => window.clearTimeout(timer);
  }, [query, selectedEra]);

  const filteredSeasons = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return seasons.filter((season) => {
      const matchesEra =
        selectedEra === "Semua" ? true : season.era === selectedEra;

      const searchableText = [
        season.label,
        season.title,
        season.summary,
        season.leaguePosition,
        season.managers.join(" "),
        season.trophies.join(" "),
        season.squad.map((player) => player.name).join(" ")
      ]
        .join(" ")
        .toLowerCase();

      return matchesEra && searchableText.includes(normalizedQuery);
    });
  }, [query, seasons, selectedEra]);

  return (
    <section
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      id="arsip-musim"
    >
      <SectionHeader
        eyebrow="Cari arsip"
        title="Search dan filter musim"
        description="Cari berdasarkan musim, pemain, manajer, atau trofi."
      />

      <div className="mt-8 rounded-lg border bg-white p-4 shadow-sm">
        <div className="grid gap-4">
          <label className="relative block">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="pl-10"
              placeholder="Cari musim, pemain, manajer, atau trofi..."
            />
          </label>
          <div className="flex flex-wrap gap-2">
            <Button
              type="button"
              variant={selectedEra === "Semua" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedEra("Semua")}
            >
              Semua
            </Button>
            {eras.map((era) => (
              <Button
                key={era}
                type="button"
                variant={selectedEra === era ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedEra(era)}
              >
                {era}
              </Button>
            ))}
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between gap-4 text-sm text-muted-foreground">
          <span>
            {hasActiveSearch
              ? isLoading
                ? "Memfilter data..."
                : `${filteredSeasons.length} musim ditemukan`
              : "Lakukan search atau pilih filter untuk menampilkan arsip."}
          </span>
          {selectedEra !== "Semua" ? (
            <Badge variant="gold">{selectedEra}</Badge>
          ) : null}
        </div>
      </div>

      {!hasActiveSearch ? (
        <div className="mt-8 rounded-lg border border-dashed bg-white p-10 text-center">
          <p className="text-lg font-bold">Cari atau filter arsip musim</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Masukkan kata kunci atau pilih kategori era untuk melihat data musim.
          </p>
        </div>
      ) : filteredSeasons.length ? (
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredSeasons.map((season) => (
            <SeasonCard key={season.id} season={season} />
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-lg border border-dashed bg-white p-10 text-center">
          <p className="text-lg font-bold">Data belum tersedia</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Coba kata kunci lain atau tambahkan musim baru ke data lokal.
          </p>
        </div>
      )}
    </section>
  );
}
