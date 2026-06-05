import type { SquadPlayer } from "@/data/seasons";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";

interface SeasonSquadTableProps {
  players: SquadPlayer[];
}

export function SeasonSquadTable({ players }: SeasonSquadTableProps) {
  if (!players.length) {
    return <EmptyTableState label="Data skuad belum tersedia" />;
  }

  return (
    <div className="rounded-lg border bg-card">
      <Table className="min-w-[860px]">
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead>No punggung</TableHead>
            <TableHead>Nama pemain</TableHead>
            <TableHead>Posisi</TableHead>
            <TableHead>Umur</TableHead>
            <TableHead>Negara</TableHead>
            <TableHead>Main</TableHead>
            <TableHead>Gol</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {players.map((player) => (
            <TableRow key={player.name}>
              <TableCell className="font-medium">{player.shirtNumber}</TableCell>
              <TableCell className="font-semibold text-foreground">
                {player.name}
              </TableCell>
              <TableCell>{player.position}</TableCell>
              <TableCell>{player.age}</TableCell>
              <TableCell>{player.country}</TableCell>
              <TableCell>{player.appearances ?? "Data belum tersedia"}</TableCell>
              <TableCell>{player.goals ?? "Data belum tersedia"}</TableCell>
              <TableCell>{player.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

function EmptyTableState({ label }: { label: string }) {
  return (
    <div className="rounded-lg border border-dashed bg-card p-8 text-center text-sm text-muted-foreground">
      {label}
    </div>
  );
}
