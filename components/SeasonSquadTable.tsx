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
  | "status";

type SortDirection = "asc" | "desc";

const columns: Array<{ key: SortKey; label: string }> = [
  { key: "shirtNumber", label: "No punggung" },
  { key: "name", label: "Nama pemain" },
  { key: "position", label: "Posisi" },
  { key: "age", label: "Umur" },
  { key: "country", label: "Negara" },
  { key: "appearances", label: "Main" },
  { key: "goals", label: "Gol" },
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
    setSortDirection(key === "appearances" || key === "goals" ? "desc" : "asc");
  }

  if (!players.length) {
    return <EmptyTableState label="Data skuad belum tersedia" />;
  }

  return (
    <div className="max-h-[520px] overflow-auto rounded-lg border bg-card shadow-sm">
      <Table className="min-w-[860px]">
        <TableHeader className="sticky top-0 z-10 bg-card">
          <TableRow className="bg-muted/70 hover:bg-muted/70">
            {columns.map((column) => (
              <TableHead key={column.key}>
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
          {sortedPlayers.map((player) => (
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

function EmptyTableState({ label }: { label: string }) {
  return (
    <div className="rounded-lg border border-dashed bg-card p-8 text-center text-sm text-muted-foreground">
      {label}
    </div>
  );
}
