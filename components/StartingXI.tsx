import type { StartingXI as StartingXIType } from "@/data/seasons";
import { Badge } from "@/components/ui/badge";

interface StartingXIProps {
  data: StartingXIType;
}

const rows = [
  ["ST1", "ST2"],
  ["LM", "CM1", "CM2", "RM"],
  ["LB", "CB1", "CB2", "RB"],
  ["GK"]
] as const;

const labels: Record<string, string> = {
  GK: "GK",
  RB: "RB",
  CB1: "CB",
  CB2: "CB",
  LB: "LB",
  RM: "RM",
  CM1: "CM",
  CM2: "CM",
  LM: "LM",
  ST1: "ST",
  ST2: "ST"
};

export function StartingXI({ data }: StartingXIProps) {
  return (
    <div className="rounded-lg border bg-[linear-gradient(180deg,#0f6b3f,#0b5a35)] p-4 text-white shadow-sm">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h3 className="text-lg font-black">Starting XI paling sering digunakan</h3>
        <Badge variant="gold">Formasi: {data.formation}</Badge>
      </div>
      <div className="relative overflow-hidden rounded-md border border-white/20 bg-white/8 p-4">
        <div className="absolute inset-x-8 top-1/2 h-px bg-white/20" />
        <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20" />
        <div className="relative grid gap-5">
          {rows.map((row) => (
            <div
              key={row.join("-")}
              className="grid grid-flow-col justify-stretch gap-3"
              style={{ gridTemplateColumns: `repeat(${row.length}, minmax(0, 1fr))` }}
            >
              {row.map((position) => (
                <div
                  key={position}
                  className="min-h-20 rounded-md border border-white/20 bg-united-black/70 p-3 text-center shadow"
                >
                  <p className="text-xs font-black text-united-gold">
                    {labels[position]}
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-5">
                    {data.players[position]}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
