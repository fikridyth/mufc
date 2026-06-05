import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Season } from "@/data/seasons";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

interface SeasonCardProps {
  season: Season;
}

export function SeasonCard({ season }: SeasonCardProps) {
  return (
    <Card className="group h-full overflow-hidden transition hover:-translate-y-1 hover:shadow-archive">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <Badge variant="gold">{season.era}</Badge>
            <CardTitle>{season.label}</CardTitle>
          </div>
          <Link
            href={`/history/${season.id}`}
            aria-label={`Buka musim ${season.label}`}
            className="rounded-md border border-border p-2 text-muted-foreground transition group-hover:border-united-gold group-hover:text-united-red"
          >
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <CardDescription>{season.summary}</CardDescription>
      </CardHeader>
      <CardContent>
        <dl className="grid gap-3 text-sm">
          <div className="flex justify-between gap-4 border-t pt-3">
            <dt className="text-muted-foreground">Manajer</dt>
            <dd className="text-right font-semibold">
              {season.managers.join(" / ")}
            </dd>
          </div>
          <div className="flex justify-between gap-4 border-t pt-3">
            <dt className="text-muted-foreground">Posisi liga</dt>
            <dd className="text-right font-semibold">{season.leaguePosition}</dd>
          </div>
          <div className="flex justify-between gap-4 border-t pt-3">
            <dt className="text-muted-foreground">Trofi</dt>
            <dd className="text-right font-semibold">
              {season.trophies.length ? season.trophies.join(", ") : "Tanpa trofi"}
            </dd>
          </div>
        </dl>
      </CardContent>
    </Card>
  );
}
