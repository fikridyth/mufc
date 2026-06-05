import type { SeasonStatistics } from "@/data/seasons";

interface SeasonStatGridProps {
  statistics: SeasonStatistics;
}

export function SeasonStatGrid({ statistics }: SeasonStatGridProps) {
  const items = [
    ["Posisi liga", statistics.leaguePosition],
    ["Pertandingan", statistics.matches],
    ["Menang", statistics.wins],
    ["Seri", statistics.draws],
    ["Kalah", statistics.losses],
    ["Gol memasukkan", statistics.goalsFor],
    ["Gol kebobolan", statistics.goalsAgainst],
    ["Top scorer", statistics.topScorer],
    ["Penampilan terbanyak", statistics.mostAppearances]
  ];

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map(([label, value]) => (
        <div key={label} className="rounded-lg border bg-white p-4">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
            {label}
          </p>
          <p className="mt-2 text-lg font-black text-united-black">{value}</p>
        </div>
      ))}
    </div>
  );
}
