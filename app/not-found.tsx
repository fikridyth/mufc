import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-united-red">
          404
        </p>
        <h1 className="mt-3 text-3xl font-black text-united-black">
          Musim tidak ditemukan
        </h1>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          Data musim ini belum tersedia di arsip lokal.
        </p>
        <Button asChild className="mt-6">
          <Link href="/#arsip-musim">Kembali ke arsip musim</Link>
        </Button>
      </div>
    </main>
  );
}
