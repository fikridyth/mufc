import type { TransferRecord } from "@/data/seasons";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";

interface TransferTableProps {
  records: TransferRecord[];
  type: "in" | "out";
}

export function TransferTable({ records, type }: TransferTableProps) {
  if (!records.length) {
    return <EmptyTableState label="Data transfer belum tersedia" />;
  }

  return (
    <div className="rounded-lg border bg-card">
      <Table className="min-w-[760px]">
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead>Pemain</TableHead>
            <TableHead>{type === "in" ? "Dari klub" : "Ke klub"}</TableHead>
            <TableHead>Biaya</TableHead>
            <TableHead>Tanggal</TableHead>
            <TableHead>Catatan</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {records.map((record) => (
            <TableRow key={`${record.player}-${record.date}-${record.note}`}>
              <TableCell className="font-semibold text-foreground">
                {record.player}
              </TableCell>
              <TableCell>
                {type === "in" ? record.from : record.to}
              </TableCell>
              <TableCell>{record.fee}</TableCell>
              <TableCell>{record.date}</TableCell>
              <TableCell className="max-w-md text-muted-foreground">
                {record.note}
              </TableCell>
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
