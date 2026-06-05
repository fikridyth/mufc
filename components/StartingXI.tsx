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
    <div className="overflow-hidden rounded-lg border bg-united-black text-white shadow-archive">
      <div className="flex flex-col gap-3 border-b border-white/10 bg-[linear-gradient(135deg,#0b0b0d,#7f0611)] p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-united-gold">
            Tactical board
          </p>
          <h3 className="mt-1 text-2xl font-black">Starting XI</h3>
        </div>
        <Badge variant="gold" className="w-fit bg-united-gold text-united-black">
          {data.formation}
        </Badge>
      </div>

      <div className="relative overflow-hidden bg-[linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(180deg,#146b3a,#0b552f)] bg-[size:46px_46px] p-4 sm:p-6">
        <div className="absolute inset-4 rounded-lg border-2 border-white/28" />
        <div className="absolute inset-x-4 top-1/2 h-0.5 bg-white/25" />
        <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white/25" />
        <div className="absolute left-1/2 top-4 h-20 w-44 -translate-x-1/2 rounded-b-lg border-x-2 border-b-2 border-white/25" />
        <div className="absolute bottom-4 left-1/2 h-20 w-44 -translate-x-1/2 rounded-t-lg border-x-2 border-t-2 border-white/25" />

        <div className="relative grid min-h-[640px] content-between gap-6 py-7">
          {rows.map((row) => (
            <div
              key={row.join("-")}
              className="grid grid-flow-col justify-stretch gap-3"
              style={{ gridTemplateColumns: `repeat(${row.length}, minmax(0, 1fr))` }}
            >
              {row.map((position) => (
                <div
                  key={position}
                  className="mx-auto flex min-h-24 w-full max-w-[160px] flex-col items-center justify-center rounded-lg border border-white/20 bg-united-black/78 p-3 text-center shadow-xl ring-1 ring-white/10 backdrop-blur transition hover:-translate-y-1 hover:border-united-gold"
                >
                  <p className="rounded-full bg-united-gold px-2 py-1 text-[11px] font-black text-united-black">
                    {labels[position]}
                  </p>
                  <p className="mt-3 text-sm font-bold leading-5">
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
