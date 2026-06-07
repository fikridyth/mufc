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

type SortKey = "player" | "club" | "fee" | "note";
type SortDirection = "asc" | "desc";

export function TransferTable({ records, type }: TransferTableProps) {
  const [sortKey, setSortKey] = useState<SortKey>("fee");
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");

  const sortedRecords = useMemo(() => {
    return [...records].sort((a, b) => {
      if (sortKey === "fee") {
        return compareFees(a, b, sortDirection);
      }

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
    setSortDirection(key === "fee" ? "desc" : "asc");
  }

  if (!records.length) {
    return <EmptyTableState label="Data transfer belum tersedia" />;
  }

  return (
    <div className="max-h-[360px] w-full max-w-full overflow-auto rounded-lg border bg-card shadow-sm">
      <Table className="min-w-[740px]">
        <TableHeader>
          <TableRow className="bg-muted/70 hover:bg-muted/70">
            <TableHead className="sticky top-0 z-20 w-16 bg-muted">
              No
            </TableHead>
            <TableHead className="sticky top-0 z-20 bg-muted">
              <SortableHeader
                active={sortKey === "player"}
                direction={sortDirection}
                label="Pemain"
                onClick={() => handleSort("player")}
              />
            </TableHead>
            <TableHead className="sticky top-0 z-20 bg-muted">
              <SortableHeader
                active={sortKey === "club"}
                direction={sortDirection}
                label={type === "in" ? "Dari klub" : "Ke klub"}
                onClick={() => handleSort("club")}
              />
            </TableHead>
            <TableHead className="sticky top-0 z-20 bg-muted">
              <SortableHeader
                active={sortKey === "fee"}
                direction={sortDirection}
                label="Biaya"
                onClick={() => handleSort("fee")}
              />
            </TableHead>
            <TableHead className="sticky top-0 z-20 bg-muted">
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
          {sortedRecords.map((record, index) => (
            <TableRow key={`${record.player}-${record.date}-${record.note}`}>
              <TableCell className="font-medium text-muted-foreground">
                {index + 1}
              </TableCell>
              <TableCell className="font-semibold text-foreground">
                {record.player}
              </TableCell>
              <TableCell>
                {formatTableValue(type === "in" ? record.from : record.to)}
              </TableCell>
              <TableCell>{formatFee(record.fee)}</TableCell>
              <TableCell className="max-w-md text-muted-foreground">
                {formatTableValue(record.note)}
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

function compareFees(
  firstRecord: TransferRecord,
  secondRecord: TransferRecord,
  direction: SortDirection
) {
  const first = getFeeSortValue(firstRecord.fee);
  const second = getFeeSortValue(secondRecord.fee);

  if (first.category !== second.category) {
    return first.category - second.category;
  }

  if (first.category === 0) {
    return direction === "asc"
      ? first.amount - second.amount
      : second.amount - first.amount;
  }

  return firstRecord.player.localeCompare(secondRecord.player, "id", {
    numeric: true,
    sensitivity: "base"
  });
}

function getFeeSortValue(fee: string) {
  if (/promosi internal/i.test(fee)) {
    return { amount: 0, category: 3 };
  }

  if (isUnknownValue(fee)) {
    return { amount: 0, category: 2 };
  }

  if (/free transfer|loan transfer/i.test(fee)) {
    return { amount: 0, category: 1 };
  }

  const amount = parseFeeAmount(fee);

  if (amount !== undefined) {
    return { amount, category: 0 };
  }

  return { amount: 0, category: 4 };
}

function parseFeeAmount(fee: string) {
  const normalizedFee = fee.replace(/^\u20ac/u, "EUR ");
  const match = normalizedFee.match(/^EUR\s+([\d.]+)\s*(k|m|juta)?$/i);

  if (!match) {
    return undefined;
  }

  const value = Number(match[1]);
  const unit = match[2]?.toLowerCase();

  if (Number.isNaN(value)) {
    return undefined;
  }

  if (unit === "k") {
    return value * 1000;
  }

  if (unit === "m" || unit === "juta") {
    return value * 1000000;
  }

  return value;
}

function formatFee(fee: string) {
  if (isUnknownValue(fee)) {
    return "-";
  }

  if (fee === "Free transfer") {
    return "Free";
  }

  if (/^EUR\s+/i.test(fee)) {
    return fee.replace(/^EUR\s+/i, "\u20ac").replace(/\s*juta$/i, "m");
  }

  return fee;
}

function formatTableValue(value: string | undefined) {
  if (value === undefined || isUnknownValue(value)) {
    return "-";
  }

  return value;
}

function isUnknownValue(value: string) {
  return (
    value === "" ||
    value === "Tidak diketahui" ||
    value === "Data belum tersedia" ||
    value === "Data perlu diverifikasi"
  );
}

function EmptyTableState({ label }: { label: string }) {
  return (
    <div className="rounded-lg border border-dashed bg-card p-8 text-center text-sm text-muted-foreground">
      {label}
    </div>
  );
}
