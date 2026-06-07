import type { ImportantMoment } from "@/data/seasons";

interface ImportantMomentsProps {
  moments: ImportantMoment[];
}

export function ImportantMoments({ moments }: ImportantMomentsProps) {
  if (!moments.length) {
    return (
      <div className="rounded-lg border border-dashed bg-white p-8 text-center text-sm text-muted-foreground">
        Data momen penting belum tersedia
      </div>
    );
  }

  return (
    <div className="min-w-0 space-y-4 border-l-2 border-united-red/25 pl-5">
      {moments.map((moment) => (
        <article
          key={`${moment.month}-${moment.title}`}
          className="relative min-w-0 rounded-lg border bg-white p-5"
        >
          <span className="absolute -left-[29px] top-6 h-4 w-4 rounded-full border-4 border-background bg-united-red" />
          <p className="break-words text-sm font-bold uppercase tracking-[0.16em] text-united-red">
            {moment.month}
          </p>
          <h3 className="mt-2 break-words text-xl font-black text-united-black">
            {moment.title}
          </h3>
          <p className="mt-2 break-words text-sm leading-6 text-muted-foreground">
            {moment.description}
          </p>
          <p className="mt-3 break-words rounded-md bg-muted p-3 text-sm">
            <strong>Dampak:</strong> {moment.impact}
          </p>
        </article>
      ))}
    </div>
  );
}
