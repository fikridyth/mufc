"use client";

import { useMemo, useState } from "react";
import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";
import type { TransferRecord } from "@/data/seasons";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

interface TransferTableProps {
  records: TransferRecord[];
  type: "in" | "out";
}

type SortKey = "player" | "club" | "fee" | "date" | "note";
type SortDirection = "asc" | "desc";

export function TransferTable({ records, type }: TransferTableProps) {
  const [sortKey, setSortKey] = useState<SortKey>("player");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");

  const sortedRecords = useMemo(() => {
    return [...records].sort((a, b) => {
      const first = getComparableValue(a, type, sortKey);
      const second = getComparableValue(b, type, sortKey);
      const modifier = sortDirection === "asc" ? 1 : -1;

      return String(first).localeCompare(String(second), "id", {
        numeric: true,
        sensitivity: "base"
      }) * modifier;
    });
  }, [records, sortDirection, sortKey, type]);

  function handleSort(key: SortKey) {
    if (key === sortKey) {
      setSortDirection((current) => (current === "asc" ? "desc" : "asc"));
      return;
    }

    setSortKey(key);
    setSortDirection("asc");
  }

  if (!records.length) {
    return <EmptyTableState label="Data transfer belum tersedia" />;
  }

  return (
    <div className="max-h-[360px] overflow-auto rounded-lg border bg-card shadow-sm">
      <Table className="min-w-[760px]">
        <TableHeader className="sticky top-0 z-10 bg-card">
          <TableRow className="bg-muted/70 hover:bg-muted/70">
            <TableHead>
              <SortableHeader
                active={sortKey === "player"}
                direction={sortDirection}
                label="Pemain"
                onClick={() => handleSort("player")}
              />
            </TableHead>
            <TableHead>
              <SortableHeader
                active={sortKey === "club"}
                direction={sortDirection}
                label={type === "in" ? "Dari klub" : "Ke klub"}
                onClick={() => handleSort("club")}
              />
            </TableHead>
            <TableHead>
              <SortableHeader
                active={sortKey === "fee"}
                direction={sortDirection}
                label="Biaya"
                onClick={() => handleSort("fee")}
              />
            </TableHead>
            <TableHead>
              <SortableHeader
                active={sortKey === "date"}
                direction={sortDirection}
                label="Tanggal"
                onClick={() => handleSort("date")}
              />
            </TableHead>
            <TableHead>
              <SortableHeader
                active={sortKey === "note"}
                direction={sortDirection}
                label="Catatan"
                onClick={() => handleSort("note")}
              />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedRecords.map((record) => (
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

function SortableHeader({
  active,
  direction,
  label,
  onClick
}: {
  active: boolean;
  direction: SortDirection;
  label: string;
  onClick: () => void;
}) {
  const Icon = active ? (direction === "asc" ? ArrowUp : ArrowDown) : ArrowUpDown;

  return (
    <Button
      type="button"
      variant="ghost"
      size="sm"
      className="-ml-3 h-8 px-2 text-muted-foreground hover:text-foreground"
      onClick={onClick}
    >
      {label}
      <Icon className="h-3.5 w-3.5" />
    </Button>
  );
}

function getComparableValue(
  record: TransferRecord,
  type: "in" | "out",
  key: SortKey
) {
  if (key === "club") {
    return type === "in" ? record.from ?? "" : record.to ?? "";
  }

  return record[key];
}

function EmptyTableState({ label }: { label: string }) {
  return (
    <div className="rounded-lg border border-dashed bg-card p-8 text-center text-sm text-muted-foreground">
      {label}
    </div>
  );
}
