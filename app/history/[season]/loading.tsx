export default function SeasonLoading() {
  return (
    <main className="mx-auto grid min-h-screen max-w-7xl gap-5 px-4 py-12 sm:px-6 lg:px-8">
      <div className="h-10 w-48 animate-pulse rounded-md bg-muted" />
      <div className="h-56 animate-pulse rounded-lg bg-muted" />
      <div className="grid gap-4 md:grid-cols-3">
        <div className="h-32 animate-pulse rounded-lg bg-muted" />
        <div className="h-32 animate-pulse rounded-lg bg-muted" />
        <div className="h-32 animate-pulse rounded-lg bg-muted" />
      </div>
    </main>
  );
}
