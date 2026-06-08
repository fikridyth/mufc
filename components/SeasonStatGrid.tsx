import type { SeasonStatistics } from "@/data/seasons";

interface SeasonStatGridProps {
  statistics: SeasonStatistics;
}

export function SeasonStatGrid({ statistics }: SeasonStatGridProps) {
  const items = [
    ["Posisi liga", statistics.leaguePosition],
    ["Gol memasukkan", statistics.goalsFor],
    ["Gol kebobolan", statistics.goalsAgainst],
    ["Selisih gol", Number(statistics.goalsFor) - Number(statistics.goalsAgainst)],
    ["Pertandingan", statistics.matches],
    ["Menang", statistics.wins],
    ["Seri", statistics.draws],
    ["Kalah", statistics.losses]
  ];
  const itemsSecond = [
    ["Top scorer", statistics.topScorer],
    ["Top assist", statistics.topAssist],
    ["Penampilan terbanyak", statistics.mostAppearances]
  ]

  return (
    <>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(([label, value]) => (
          <div key={label} className="min-w-0 rounded-lg border bg-white p-4">
            <p className="break-words text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
              {label}
            </p>
            <p className="mt-2 break-words text-lg font-black text-united-black">{String(value) ?? ""}</p>
          </div>
        ))}
      </div>
      <div className="grid gap-3 sm:grid-cols-1 lg:grid-cols-3">
        {itemsSecond.map(([label, value]) => (
          <div key={label} className="min-w-0 rounded-lg border bg-white p-4">
            <p className="break-words text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
              {label}
            </p>
            <p className="mt-2 break-words text-base font-black text-united-black">{value}</p>
          </div>
        ))}
      </div>
    </>
  );
}
