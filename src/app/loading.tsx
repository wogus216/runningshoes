export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <div className="w-12 h-12 border-4 border-surface rounded-full" />
          <div className="absolute inset-0 w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin" />
        </div>
        <p className="text-secondary text-sm">로딩 중...</p>
      </div>
    </div>
  );
}
