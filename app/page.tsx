import { DashboardFixedHeader } from "@/components/DashboardFixedHeader";
import { EraSection } from "@/components/EraSection";
import { FeaturedSeasons } from "@/components/FeaturedSeasons";
import { HeroSection } from "@/components/HeroSection";
import { OtherInformation } from "@/components/OtherInformation";
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
    <main className="pb-20">
      <DashboardFixedHeader />
      <HeroSection />
      <FeaturedSeasons seasons={getFeaturedSeasons()} />
      <SearchAndFilter seasons={seasons} eras={eras} />
      <SeasonTimeline seasons={seasons} />
      <EraSection eras={eraGroups} seasons={seasons} />
      <OtherInformation />
      <footer className="fixed inset-x-0 bottom-0 z-50 border-t border-united-gold/25 bg-gradient-to-r from-united-black/95 via-united-red/95 to-united-black/95 px-4 py-3 text-center shadow-[0_-12px_34px_rgba(10,10,12,0.28)] backdrop-blur-xl">
        <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-black uppercase tracking-[0.22em] text-united-gold shadow-sm">
          @beta
        </span>
      </footer>
    </main>
  );
}
