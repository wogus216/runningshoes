import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type ViewMode = "hierarchy" | "brand";

type ViewToggleProps = {
  view: ViewMode;
  onChange: (view: ViewMode) => void;
  categories?: string[];
  brands?: string[];
};

const options: { label: string; value: ViewMode; description: string }[] = [
  {
    label: "계급도 보기",
    value: "hierarchy",
    description: "카테고리별 티어 정리",
  },
  {
    label: "브랜드별 보기",
    value: "brand",
    description: "브랜드 라인업 스포트라이트",
  },
];

function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

export function ViewToggle({ view, onChange, categories = [], brands = [] }: ViewToggleProps) {
  const chips = view === "hierarchy" ? categories : brands;
  const chipPrefix = view === "hierarchy" ? "category" : "brand";

  return (
    <div className="flex flex-col gap-4 rounded-[28px] border border-white/20 bg-white/20 p-4 backdrop-blur-2xl shadow-[0_20px_45px_-40px_rgba(15,23,42,0.6)] sm:p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-600">View Mode</p>
          <p className="text-base font-bold text-slate-900">어떤 방식으로 살펴볼까요?</p>
        </div>
        <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
          {options.map((option) => {
            const isActive = view === option.value;
            return (
              <Button
                key={option.value}
                type="button"
                variant={isActive ? "default" : "outline"}
                className={cn(
                  "group flex-1 items-center justify-between gap-2 rounded-full border-white/20 px-5 py-6 text-sm font-semibold uppercase tracking-[0.25em] transition-all duration-200",
                  isActive
                    ? "bg-[#4facfe] text-white shadow-[0_20px_45px_-30px_rgba(79,172,254,0.7)]"
                    : "bg-white/20 text-slate-700 hover:border-white/40 hover:bg-white/40"
                )}
                onClick={() => onChange(option.value)}
              >
                <span className="whitespace-nowrap">{option.label}</span>
                <span className="text-[10px] font-medium uppercase tracking-widest text-slate-500 group-hover:text-slate-700 sm:hidden">
                  {option.description}
                </span>
              </Button>
            );
          })}
        </div>
      </div>

      {chips.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
          <span className="text-xs font-medium text-slate-500 self-center mr-1">바로가기</span>
          {chips.map((chip) => {
            const targetId = `${chipPrefix}-${chip.replace(/\s+/g, '-')}`;
            return (
              <button
                key={chip}
                type="button"
                onClick={() => scrollToSection(targetId)}
                className="rounded-full border border-white/30 bg-white/30 px-3 py-1.5 text-xs font-semibold text-slate-700 transition-all duration-200 hover:border-[#4facfe]/50 hover:bg-[#4facfe]/10 hover:text-[#4facfe] active:scale-95"
              >
                {chip}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
