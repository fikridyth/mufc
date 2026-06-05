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
        description="Era sudah disiapkan sejak awal, tetapi hanya musim yang datanya tersedia yang akan muncul sebagai tautan aktif."
      />
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {eras.map((era) => {
          const availableSeasons = era.seasonIds
            .map((id) => seasonMap.get(id))
            .filter(Boolean) as Season[];

          return (
            <Card key={era.name}>
              <CardHeader>
                <CardTitle className="text-lg">{era.name}</CardTitle>
                <CardDescription>{era.description}</CardDescription>
              </CardHeader>
              <CardContent>
                {availableSeasons.length ? (
                  <div className="flex flex-wrap gap-2">
                    {availableSeasons.map((season) => (
                      <Badge key={season.id} variant="gold">
                        {season.label}
                      </Badge>
                    ))}
                  </div>
                ) : (
                  <p className="rounded-md bg-muted p-3 text-sm text-muted-foreground">
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
