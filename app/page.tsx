import { EraSection } from "@/components/EraSection";
import { FeaturedSeasons } from "@/components/FeaturedSeasons";
import { HeroSection } from "@/components/HeroSection";
import { SearchAndFilter } from "@/components/SearchAndFilter";
import { SeasonTimeline } from "@/components/SeasonTimeline";
import {
  eraGroups,
  getFeaturedSeasons,
  seasons,
  type SeasonEra
} from "@/data/seasons";

export default function HomePage() {
  const eras = Array.from(new Set(seasons.map((season) => season.era))) as SeasonEra[];

  return (
    <main>
      <HeroSection />
      <FeaturedSeasons seasons={getFeaturedSeasons()} />
      <SearchAndFilter seasons={seasons} eras={eras} />
      <SeasonTimeline seasons={seasons} />
      <EraSection eras={eraGroups} seasons={seasons} />
    </main>
  );
}
