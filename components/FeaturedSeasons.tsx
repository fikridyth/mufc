"use client";

import { useState } from "react";
import type { Season } from "@/data/seasons";
import { Button } from "@/components/ui/button";
import { SeasonCard } from "@/components/SeasonCard";
import { SectionHeader } from "@/components/SectionHeader";

interface FeaturedSeasonsProps {
  seasons: Season[];
}

export function FeaturedSeasons({ seasons }: FeaturedSeasonsProps) {
  const [visibleCount, setVisibleCount] = useState(3);
  const visibleSeasons = seasons.slice(0, visibleCount);
  const hasMore = visibleCount < seasons.length;

  return (
    <section id="featured-season" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Featured seasons"
        title="Musim yang menjadi titik balik"
        description="Awal kedatangan Sir Alex Ferguson."
      />
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {visibleSeasons.map((season) => (
          <SeasonCard key={season.id} season={season} />
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
    </section>
  );
}
