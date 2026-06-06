import type { EraGroup, Season } from "@/data/seasons";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { SectionHeader } from "@/components/SectionHeader";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface EraSectionProps {
  eras: EraGroup[];
  seasons: Season[];
}

export function EraSection({ eras, seasons }: EraSectionProps) {
  const seasonMap = new Map(seasons.map((season) => [season.id, season]));

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8" id="era">
      <SectionHeader
        eyebrow="Era"
        title="Kategori era klub"
        description="List era klub Manchester United."
      />
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {eras.map((era) => {
          const availableSeasons = era.seasonIds
            .map((id) => seasonMap.get(id))
            .filter(Boolean) as Season[];

          return (
            <Card key={era.name} className="flex h-full flex-col">
              <CardHeader>
                <CardTitle className="text-lg">{era.name}</CardTitle>
                <CardDescription>{era.description}</CardDescription>
              </CardHeader>
              <CardContent
                className={cn(
                  "mt-auto flex w-full items-start justify-center",
                  availableSeasons.length > 1 && "min-h-[96px]"
                )}
              >
                {availableSeasons.length ? (
                  <div className="mx-auto flex w-full max-w-[380px] flex-wrap items-start justify-center gap-2">
                    {availableSeasons.map((season) => (
                      <Link
                        key={season.id}
                        href={`/history/${season.id}`}
                        className="flex shrink-0 items-center justify-center"
                      >
                        <Badge variant="gold">
                          {season.label}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="w-full rounded-md bg-muted p-3 text-center text-sm text-muted-foreground">
                    Data belum tersedia
                  </p>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
