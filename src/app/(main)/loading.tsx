export default function MainLoading() {
  return (
    <div className="space-y-6 animate-pulse">
      {/* Hero skeleton */}
      <div className="h-48 bg-surface rounded-2xl" />

      {/* Grid skeleton */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="space-y-3">
            <div className="aspect-square bg-surface rounded-xl" />
            <div className="h-4 bg-surface rounded w-3/4" />
            <div className="h-3 bg-surface rounded w-1/2" />
          </div>
        ))}
      </div>
    </div>
  );
}
