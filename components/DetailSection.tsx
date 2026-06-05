import type { ReactNode } from "react";

interface DetailSectionProps {
  id?: string;
  title: string;
  description?: string;
  children: ReactNode;
}

export function DetailSection({
  id,
  title,
  description,
  children
}: DetailSectionProps) {
  return (
    <section id={id} className="space-y-5">
      <div className="space-y-2">
        <h2 className="text-2xl font-black text-united-black md:text-3xl">
          {title}
        </h2>
        {description ? (
          <p className="max-w-3xl text-sm leading-6 text-muted-foreground">
            {description}
          </p>
        ) : null}
      </div>
      {children}
    </section>
  );
}
