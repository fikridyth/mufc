"use client";

import { useState } from "react";
import Link from "next/link";
import type { Season } from "@/data/seasons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/SectionHeader";

interface SeasonTimelineProps {
  seasons: Season[];
}

export function SeasonTimeline({ seasons }: SeasonTimelineProps) {
  const [visibleCount, setVisibleCount] = useState(3);
  const visibleSeasons = seasons.slice(0, visibleCount);
  const hasMore = visibleCount < seasons.length;

  return (
    <section className="bg-white py-16" id="timeline">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Timeline"
          title="Garis waktu musim"
          description="Setiap kartu mengarah ke halaman detail musim. Musim baru cukup ditambahkan ke data lokal."
        />
        <div className="mt-10 space-y-5 border-l-2 border-united-red/25 pl-5">
          {visibleSeasons.map((season) => (
            <Link
              key={season.id}
              href={`/history/${season.id}`}
              className="group relative block rounded-lg border bg-background p-5 transition hover:border-united-gold hover:shadow-archive"
            >
              <span className="absolute -left-[31px] top-7 h-4 w-4 rounded-full border-4 border-white bg-united-red" />
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="space-y-2">
                  <Badge variant="secondary">{season.era}</Badge>
                  <h3 className="text-2xl font-black text-united-black">
                    Musim {season.label}
                  </h3>
                  <p className="max-w-3xl text-sm leading-6 text-muted-foreground">
                    {season.summary}
                  </p>
                </div>
                <div className="grid min-w-56 gap-2 rounded-md bg-white p-4 text-sm">
                  <p>
                    <span className="text-muted-foreground">Manajer: </span>
                    <strong>{season.managers.join(" / ")}</strong>
                  </p>
                  <p>
                    <span className="text-muted-foreground">Liga: </span>
                    <strong>{season.leaguePosition}</strong>
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {hasMore ? (
          <div className="mt-8 flex justify-center">
            <Button
              type="button"
              variant="outline"
              onClick={() => setVisibleCount((count) => count + 3)}
            >
              Load more
            </Button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
