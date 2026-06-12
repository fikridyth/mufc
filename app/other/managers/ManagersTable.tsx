"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowDown, ArrowDownAZ, ArrowUp, ArrowUpZA } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";

interface ManagerSeason {
  id: string;
  label: string;
  era: string;
  trophies: string[];
}

interface ManagerSummary {
  name: string;
  seasons: ManagerSeason[];
}

interface ManagersTableProps {
  managers: ManagerSummary[];
}

type SortDirection = "asc" | "desc";
type SortKey = "manager" | "season" | "era" | "trophies";

function getSeasonStartYear(seasonId: string) {
  return Number(seasonId.split("-")[0]);
}

function getLatestSeasonYear(manager: ManagerSummary) {
  return Math.max(
    ...manager.seasons.map((season) => getSeasonStartYear(season.id))
  );
}

function getEraText(manager: ManagerSummary) {
  return Array.from(new Set(manager.seasons.map((season) => season.era))).join(
    " / "
  );
}

function getTrophyCount(manager: ManagerSummary) {
  return manager.seasons.reduce(
    (total, season) => total + season.trophies.length,
    0
  );
}

export function ManagersTable({ managers }: ManagersTableProps) {
  const [sortKey, setSortKey] = useState<SortKey>("season");
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");

  const sortedManagers = useMemo(
    () =>
      [...managers].sort((a, b) => {
        let result = 0;

        if (sortKey === "manager") {
          result = a.name.localeCompare(b.name);
        }

        if (sortKey === "season") {
          result = getLatestSeasonYear(a) - getLatestSeasonYear(b);
        }

        if (sortKey === "era") {
          result = getEraText(a).localeCompare(getEraText(b));
        }

        if (sortKey === "trophies") {
          result = getTrophyCount(a) - getTrophyCount(b);
        }

        return sortDirection === "asc" ? result : -result;
      }),
    [managers, sortDirection, sortKey]
  );

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDirection((direction) => (direction === "asc" ? "desc" : "asc"));
      return;
    }

    setSortKey(key);
    setSortDirection(key === "manager" || key === "era" ? "asc" : "desc");
  };

  const renderSortIcon = (key: SortKey) => {
    if (sortKey !== key) {
      return <ArrowDown className="h-4 w-4 opacity-30" />;
    }

    if (key === "manager" || key === "era") {
      return sortDirection === "asc" ? (
        <ArrowDownAZ className="h-4 w-4" />
      ) : (
        <ArrowUpZA className="h-4 w-4" />
      );
    }

    return sortDirection === "asc" ? (
      <ArrowUp className="h-4 w-4" />
    ) : (
      <ArrowDown className="h-4 w-4" />
    );
  };

  const renderSortButton = (key: SortKey, label: string, className = "") => (
    <button
      type="button"
      className={`inline-flex items-center gap-2 font-bold text-united-black transition hover:text-united-red ${className}`}
      onClick={() => handleSort(key)}
    >
      {label}
      {renderSortIcon(key)}
    </button>
  );

  return (
    <Card className="mt-8 overflow-hidden">
      <CardHeader>
        <CardTitle>Manajer dan musim</CardTitle>
        <CardDescription>
          Setiap musim bisa memiliki lebih dari satu manajer jika data mencatat pergantian.
        </CardDescription>
      </CardHeader>
      <CardContent className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-16">No.</TableHead>
              <TableHead>
                {renderSortButton("manager", "Manajer")}
              </TableHead>
              <TableHead>
                {renderSortButton("season", "Musim")}
              </TableHead>
              <TableHead>
                {renderSortButton("era", "Era")}
              </TableHead>
              <TableHead className="text-right">
                {renderSortButton("trophies", "Trofi", "justify-end")}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedManagers.map((manager, index) => {
              const managerTrophies = getTrophyCount(manager);
              const eras = getEraText(manager);

              return (
                <TableRow key={manager.name}>
                  <TableCell className="font-bold text-muted-foreground">
                    {index + 1}
                  </TableCell>
                  <TableCell className="font-bold text-united-black">
                    {manager.name}
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-2">
                      {manager.seasons.map((season) => (
                        <Link key={season.id} href={`/history/${season.id}`}>
                          <Badge variant="gold">{season.label}</Badge>
                        </Link>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>{eras}</TableCell>
                  <TableCell className="text-right font-bold">
                    {managerTrophies}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
