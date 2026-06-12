import Link from "next/link";
import { ArrowUpRight, Trophy, UserRoundCheck, UsersRound } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { SectionHeader } from "@/components/SectionHeader";

const items = [
  {
    href: "/other/managers",
    title: "Daftar manajer",
    description:
      "Lihat siapa saja manajer yang pernah melatih Manchester United berdasarkan data arsip.",
    icon: UsersRound,
    label: "Managers"
  },
  {
    href: "/other/trophies",
    title: "Daftar trofi",
    description:
      "Ringkasan jumlah trofi, jenis trofi, dan musim ketika trofi tersebut didapatkan.",
    icon: Trophy,
    label: "Trophies"
  },
  {
    href: "/other/players",
    title: "Pemain terbaik",
    description:
      "Daftar 30 pemain terbaik yang pernah dimiliki Manchester United dari berbagai era.",
    icon: UserRoundCheck,
    label: "Players"
  }
];

export function OtherInformation() {
  return (
    <section
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      id="other-information"
    >
      <SectionHeader
        eyebrow="Informasi lain"
        title="Informasi lain"
        description="Akses cepat ke data rangkuman di luar halaman musim."
      />
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <Card
              key={item.href}
              className="group h-full overflow-hidden transition hover:-translate-y-1 hover:shadow-archive"
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-md bg-united-gold/20 text-united-red">
                      <Icon className="h-5 w-5" />
                    </span>
                    <Badge variant="gold">{item.label}</Badge>
                    <CardTitle>{item.title}</CardTitle>
                  </div>
                  <Link
                    href={item.href}
                    aria-label={`Buka ${item.title}`}
                    className="rounded-md border border-border p-2 text-muted-foreground transition group-hover:border-united-gold group-hover:text-united-red"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href={item.href}
                  className="text-sm font-bold text-united-red transition hover:text-united-black"
                >
                  Lihat detail
                </Link>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
