export default function DetailLoading() {
  return (
    <div className="space-y-6 animate-pulse">
      {/* Hero skeleton */}
      <div className="section-card p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2 aspect-square bg-surface rounded-xl" />
          <div className="flex-1 space-y-4">
            <div className="h-6 bg-surface rounded w-1/4" />
            <div className="h-8 bg-surface rounded w-3/4" />
            <div className="h-4 bg-surface rounded w-full" />
            <div className="h-4 bg-surface rounded w-2/3" />
            <div className="flex gap-2 mt-6">
              <div className="h-10 w-24 bg-surface rounded-full" />
              <div className="h-10 w-24 bg-surface rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Tabs skeleton */}
      <div className="flex gap-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-10 w-20 bg-surface rounded-full" />
        ))}
      </div>

      {/* Content skeleton */}
      <div className="section-card p-6 space-y-4">
        <div className="h-6 bg-surface rounded w-1/4" />
        <div className="h-4 bg-surface rounded w-full" />
        <div className="h-4 bg-surface rounded w-5/6" />
        <div className="h-4 bg-surface rounded w-4/5" />
      </div>
    </div>
  );
}
