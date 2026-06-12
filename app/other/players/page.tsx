import type { Metadata } from "next";
import { Medal, UserRoundCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { OtherFixedHeader } from "@/components/OtherFixedHeader";
import { OtherPageFooter } from "@/components/OtherPageFooter";

export const metadata: Metadata = {
  title: "30 Pemain Terbaik | Manchester United History Archive",
  description:
    "Daftar 30 pemain terbaik yang pernah dimiliki Manchester United dari berbagai era."
};

const bestPlayers = [
  {
    name: "Ryan Giggs",
    role: "Winger kiri",
    era: "Era Premier League",
    note: "Legenda dengan koleksi gelar liga terbanyak dan karier senior yang sangat panjang di United."
  },
  {
    name: "Sir Bobby Charlton",
    role: "Gelandang serang",
    era: "Era Busby",
    note: "Simbol klub, pemenang Ballon d'Or, dan tokoh utama kebangkitan pasca-Munich."
  },
  {
    name: "George Best",
    role: "Winger / forward",
    era: "Era Busby",
    note: "Salah satu pemain paling berbakat dalam sejarah klub dan ikon juara Eropa 1968."
  },
  {
    name: "Cristiano Ronaldo",
    role: "Winger / forward",
    era: "Era Ronaldo & Rooney",
    note: "Bintang Ballon d'Or 2008 dan motor serangan United saat meraih Premier League serta Champions League."
  },
  {
    name: "Eric Cantona",
    role: "Second striker",
    era: "Era Premier League awal",
    note: "Katalis mental juara United pada awal Premier League."
  },
  {
    name: "Wayne Rooney",
    role: "Forward",
    era: "Era Ronaldo & Rooney",
    note: "Pencetak gol terbanyak sepanjang masa klub dan pemain serba bisa di lini depan."
  },
  {
    name: "Paul Scholes",
    role: "Gelandang tengah",
    era: "Era Treble",
    note: "Pengatur tempo elite dengan teknik, visi, dan konsistensi luar biasa."
  },
  {
    name: "Roy Keane",
    role: "Gelandang tengah",
    era: "Era Treble",
    note: "Kapten paling berpengaruh dalam era dominasi Sir Alex Ferguson."
  },
  {
    name: "Peter Schmeichel",
    role: "Kiper",
    era: "Era Treble",
    note: "Kiper legendaris dan fondasi besar dari skuad juara 1990-an."
  },
  {
    name: "Denis Law",
    role: "Striker",
    era: "Era Busby",
    note: "Bagian dari United Trinity dan salah satu penyerang terbaik klub."
  },
  {
    name: "Bryan Robson",
    role: "Gelandang tengah",
    era: "Era Ron Atkinson / Sir Alex awal",
    note: "Captain Marvel, pemimpin besar United pada masa transisi sebelum dominasi Premier League."
  },
  {
    name: "Duncan Edwards",
    role: "Gelandang / bek",
    era: "Busby Babes",
    note: "Talenta luar biasa Busby Babes yang dikenang sebagai salah satu pemain paling komplet."
  },
  {
    name: "David Beckham",
    role: "Winger kanan",
    era: "Era Treble",
    note: "Spesialis umpan dan bola mati, bagian penting Class of '92."
  },
  {
    name: "Rio Ferdinand",
    role: "Bek tengah",
    era: "Era Ronaldo & Rooney",
    note: "Bek modern elite yang menjadi tulang punggung pertahanan juara Eropa 2008."
  },
  {
    name: "Nemanja Vidic",
    role: "Bek tengah",
    era: "Era Ronaldo & Rooney",
    note: "Bek tangguh, kapten, dan pasangan ikonik Ferdinand di lini belakang."
  },
  {
    name: "Denis Irwin",
    role: "Bek kiri / kanan",
    era: "Era Premier League awal",
    note: "Salah satu pemain paling konsisten dan reliable dalam era Ferguson."
  },
  {
    name: "Gary Neville",
    role: "Bek kanan",
    era: "Era Treble",
    note: "Produk akademi, kapten klub, dan bek kanan utama selama bertahun-tahun."
  },
  {
    name: "Ruud van Nistelrooy",
    role: "Striker",
    era: "Era Ronaldo & Rooney",
    note: "Finisher klinis dengan rasio gol luar biasa untuk United."
  },
  {
    name: "Mark Hughes",
    role: "Striker",
    era: "Era Sir Alex awal",
    note: "Penyerang kuat dan pencetak gol penting dalam fondasi awal Ferguson."
  },
  {
    name: "Ole Gunnar Solskjaer",
    role: "Striker",
    era: "Era Treble",
    note: "Super-sub legendaris dan pencetak gol kemenangan final Champions League 1999."
  },
  {
    name: "Nobby Stiles",
    role: "Gelandang bertahan",
    era: "Era Busby",
    note: "Pemain pekerja keras yang penting dalam kesuksesan Eropa 1968."
  },
  {
    name: "Steve Bruce",
    role: "Bek tengah",
    era: "Era Premier League awal",
    note: "Kapten tangguh dan pemimpin lini belakang pada awal dominasi Premier League."
  },
  {
    name: "Bill Foulkes",
    role: "Bek",
    era: "Era Busby",
    note: "Bek loyal dengan kontribusi panjang dan bagian dari perjalanan menuju Eropa 1968."
  },
  {
    name: "Roger Byrne",
    role: "Bek kiri",
    era: "Busby Babes",
    note: "Kapten Busby Babes dan salah satu full-back terbaik pada eranya."
  },
  {
    name: "Tommy Taylor",
    role: "Striker",
    era: "Busby Babes",
    note: "Penyerang tajam Busby Babes dengan reputasi besar di Inggris."
  },
  {
    name: "Edwin van der Sar",
    role: "Kiper",
    era: "Era akhir Sir Alex",
    note: "Kiper tenang dan krusial dalam era juara Premier League serta Champions League 2008."
  },
  {
    name: "Patrice Evra",
    role: "Bek kiri",
    era: "Era Ronaldo & Rooney",
    note: "Full-back eksplosif dan pemimpin ruang ganti dalam era sukses modern."
  },
  {
    name: "Jaap Stam",
    role: "Bek tengah",
    era: "Era Treble",
    note: "Bek dominan yang memberi kualitas kelas dunia pada pertahanan United."
  },
  {
    name: "Michael Carrick",
    role: "Gelandang tengah",
    era: "Era akhir Sir Alex",
    note: "Pengontrol ritme yang menjadi konektor penting antara pertahanan dan serangan."
  },
  {
    name: "Bruno Fernandes",
    role: "Gelandang serang",
    era: "Era pasca Sir Alex",
    note: "Playmaker produktif dan pemimpin utama United pada era modern."
  }
];

export default function PlayersPage() {
  return (
    <main className="min-h-screen bg-background pb-28">
      <OtherFixedHeader title="Players" />
      <section className="relative mb-2 overflow-hidden bg-united-black text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(212,175,55,0.28),transparent_28%),radial-gradient(circle_at_82%_20%,rgba(179,18,28,0.72),transparent_34%),linear-gradient(135deg,#0b0b0d_0%,#7f0611_52%,#120609_100%)]" />
        <div className="absolute inset-x-0 -bottom-24 h-48 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="absolute -right-16 top-12 h-72 w-72 rounded-full border border-white/10" />
        <div className="absolute -right-4 top-28 h-44 w-44 rounded-full border border-united-gold/25" />

        <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-24 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <Badge variant="gold">Players</Badge>
            <h1 className="text-4xl font-black tracking-tight md:text-5xl">
              30 pemain terbaik Manchester United
            </h1>
            <p className="text-base leading-7 text-white/70">
              Pilihan editorial lintas era berdasarkan pengaruh, kualitas, prestasi, dan warisan di klub.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserRoundCheck className="h-5 w-5 text-united-red" />
                {bestPlayers.length}
              </CardTitle>
              <CardDescription>Pemain dalam daftar</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Lintas era</CardTitle>
              <CardDescription>Dari Busby Babes sampai era modern</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Medal className="h-5 w-5 text-united-red" />
                Top 30
              </CardTitle>
              <CardDescription>Disusun sebagai rangking 1 sampai 30</CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {bestPlayers.map((player, index) => (
            <Card key={player.name} className="flex h-full flex-col">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <Badge variant="gold">#{index + 1}</Badge>
                    <CardTitle>{player.name}</CardTitle>
                  </div>
                  <Badge variant="secondary" className="shrink-0">
                    {player.role}
                  </Badge>
                </div>
                <CardDescription>{player.note}</CardDescription>
              </CardHeader>
              <div className="mt-auto px-6 pb-6">
                <p className="rounded-md bg-muted p-3 text-sm font-semibold text-muted-foreground">
                  {player.era}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>
      <OtherPageFooter previous={{ href: "/other/trophies", label: "Trophies" }} />
    </main>
  );
}
