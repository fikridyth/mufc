"use client";

import { useMemo, useState } from "react";
import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";
import type { SquadPlayer } from "@/data/seasons";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

interface SeasonSquadTableProps {
  players: SquadPlayer[];
}

type SortKey =
  | "shirtNumber"
  | "name"
  | "position"
  | "age"
  | "country"
  | "appearances"
  | "goals"
  | "assists"
  | "status";

type SortDirection = "asc" | "desc";

const columns: Array<{ key: SortKey; label: string }> = [
  { key: "name", label: "Nama pemain" },
  { key: "shirtNumber", label: "No punggung" },
  { key: "position", label: "Posisi" },
  { key: "age", label: "Umur" },
  { key: "country", label: "Negara" },
  { key: "appearances", label: "Main" },
  { key: "goals", label: "Gol" },
  { key: "assists", label: "Assist" },
  { key: "status", label: "Status" }
];

export function SeasonSquadTable({ players }: SeasonSquadTableProps) {
  const [sortKey, setSortKey] = useState<SortKey>("appearances");
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");

  const sortedPlayers = useMemo(() => {
    return [...players].sort((a, b) => {
      const first = getComparableValue(a, sortKey);
      const second = getComparableValue(b, sortKey);
      const modifier = sortDirection === "asc" ? 1 : -1;

      if (typeof first === "number" && typeof second === "number") {
        return (first - second) * modifier;
      }

      return String(first).localeCompare(String(second), "id", {
        numeric: true,
        sensitivity: "base"
      }) * modifier;
    });
  }, [players, sortDirection, sortKey]);

  function handleSort(key: SortKey) {
    if (key === sortKey) {
      setSortDirection((current) => (current === "asc" ? "desc" : "asc"));
      return;
    }

    setSortKey(key);
    setSortDirection(
      key === "appearances" || key === "goals" || key === "assists"
        ? "desc"
        : "asc"
    );
  }

  if (!players.length) {
    return <EmptyTableState label="Data skuad belum tersedia" />;
  }

  return (
    <div className="max-h-[520px] w-full max-w-full overflow-auto rounded-lg border bg-card shadow-sm">
      <Table className="min-w-[980px]">
        <TableHeader>
          <TableRow className="bg-muted/70 hover:bg-muted/70">
            <TableHead className="sticky top-0 z-20 w-16 bg-muted">
              No
            </TableHead>
            {columns.map((column) => (
              <TableHead key={column.key} className="sticky top-0 z-20 bg-muted">
                <SortableHeader
                  active={sortKey === column.key}
                  direction={sortDirection}
                  label={column.label}
                  onClick={() => handleSort(column.key)}
                />
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedPlayers.map((player, index) => (
            <TableRow key={player.name}>
              <TableCell className="font-medium text-muted-foreground">
                {index + 1}
              </TableCell>
              <TableCell className="font-semibold text-foreground">
                {player.name}
              </TableCell>
              <TableCell className="font-medium">
                {formatTableValue(player.shirtNumber)}
              </TableCell>
              <TableCell>{formatTableValue(player.position)}</TableCell>
              <TableCell>{formatTableValue(player.age)}</TableCell>
              <TableCell>{formatTableValue(player.country)}</TableCell>
              <TableCell>{formatTableValue(player.appearances)}</TableCell>
              <TableCell>{formatTableValue(player.goals)}</TableCell>
              <TableCell>{formatTableValue(player.assists)}</TableCell>
              <TableCell>{formatTableValue(player.status)}</TableCell>
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

function getComparableValue(player: SquadPlayer, key: SortKey) {
  const value = player[key];

  if (typeof value === "number") {
    return value;
  }

  if (value === undefined) {
    return "";
  }

  return value;
}

function formatTableValue(value: number | string | undefined) {
  if (
    value === undefined ||
    value === "" ||
    value === "Tidak diketahui" ||
    value === "Data belum tersedia" ||
    value === "Data perlu diverifikasi"
  ) {
    return "-";
  }

  return value;
}

function EmptyTableState({ label }: { label: string }) {
  return (
    <div className="rounded-lg border border-dashed bg-card p-8 text-center text-sm text-muted-foreground">
      {label}
    </div>
  );
}
