export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-white/10 backdrop-blur-2xl animate-fade-in-down">
      <div className="container mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <h1 className="text-xl font-black tracking-tight text-slate-900">
          러닝화 계급도 <span className="text-[#4facfe]">2025</span>
        </h1>
        <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-600">
          Running Shoes Tier List
        </div>
      </div>
    </header>
  );
}
