import type { Season } from "@/data/seasons";
import { SeasonCard } from "@/components/SeasonCard";
import { SectionHeader } from "@/components/SectionHeader";

interface FeaturedSeasonsProps {
  seasons: Season[];
}

export function FeaturedSeasons({ seasons }: FeaturedSeasonsProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Featured seasons"
        title="Musim yang menjadi titik balik"
        description="Saat ini arsip hanya memuat 3 contoh musim awal agar struktur data rapi dan mudah dilanjutkan tanpa mengarang data historis."
      />
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {seasons.map((season) => (
          <SeasonCard key={season.id} season={season} />
        ))}
      </div>
    </section>
  );
}
