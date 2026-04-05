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
    label: "카테고리별",
    value: "hierarchy",
    description: "용도별 티어 정리",
  },
  {
    label: "브랜드별",
    value: "brand",
    description: "브랜드 라인업",
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
    <div className="flex flex-col gap-3 rounded-[26px] border border-[var(--accent-line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(240,248,255,0.96))] p-4 shadow-[0_24px_50px_-38px_rgba(8,18,38,0.18)] sm:gap-4 sm:rounded-[32px] sm:p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-sky-700 sm:text-xs sm:tracking-[0.35em]">View Mode</p>
          <p className="text-sm font-bold text-slate-950 sm:text-base">어떤 기준으로 좁혀볼까요?</p>
        </div>
        <div className="grid w-full grid-cols-1 gap-2 rounded-[24px] border border-sky-100 bg-white/85 p-1 sm:w-auto sm:grid-cols-2 sm:rounded-full">
          {options.map((option) => {
            const isActive = view === option.value;
            return (
              <Button
                key={option.value}
                type="button"
                variant={isActive ? "default" : "outline"}
                className={cn(
                  "group h-auto items-center justify-start gap-2 rounded-[18px] border-0 px-4 py-3 text-sm font-semibold tracking-tight transition-all duration-200 sm:justify-between sm:rounded-full sm:px-5 sm:py-4 sm:uppercase sm:tracking-[0.22em]",
                  isActive
                    ? "bg-[var(--navy)] text-white shadow-[0_18px_30px_-20px_rgba(2,132,199,0.48)]"
                    : "bg-transparent text-slate-600 hover:bg-sky-50 hover:text-slate-950"
                )}
                onClick={() => onChange(option.value)}
              >
                <span className="whitespace-nowrap">{option.label}</span>
                <span className={cn(
                  "text-[11px] font-medium text-right sm:hidden",
                  isActive ? "text-sky-100/75" : "text-slate-400"
                )}>
                  {option.description}
                </span>
              </Button>
            );
          })}
        </div>
      </div>

      {chips.length > 0 && (
        <div className="border-t border-sky-100 pt-2">
          <div className="mb-2 text-xs font-medium text-slate-500">바로가기</div>
          <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
            {chips.map((chip) => {
              const targetId = `${chipPrefix}-${chip.replace(/\s+/g, '-')}`;
              return (
                <button
                  key={chip}
                  type="button"
                  onClick={() => scrollToSection(targetId)}
                  className="shrink-0 rounded-full border border-sky-100 bg-white/80 px-3 py-1.5 text-xs font-semibold text-slate-700 transition-all duration-200 hover:border-sky-200 hover:bg-sky-50 hover:text-slate-950 active:scale-95"
                >
                  {chip}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
