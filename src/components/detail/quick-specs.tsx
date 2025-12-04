import type { ShoeSpecs } from "@/types/shoe";

type QuickSpecsProps = {
  specs: ShoeSpecs;
};

type SpecCardProps = {
  icon: string;
  label: string;
  value: string;
  percentage: number;
};

function SpecCard({ icon, label, value, percentage }: SpecCardProps) {
  return (
    <div className="group relative bg-white rounded-2xl p-8 text-center transition-all duration-300 border-[3px] border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-2 hover:border-[#4facfe] overflow-hidden">
      {/* Hover top bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#4facfe] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="text-5xl mb-4">{icon}</div>

      <div className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
        {label}
      </div>

      <div className="text-4xl font-black text-gray-900 mb-4 leading-none">
        {value}
      </div>

      {/* Progress bar */}
      <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden shadow-inner">
        <div
          className="h-full bg-[#4facfe] rounded-full shadow-md transition-all duration-1000 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

export function QuickSpecs({ specs }: QuickSpecsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
      <SpecCard icon="⚖️" label="무게" value={`${specs.weight}g`} percentage={70} />
      <SpecCard
        icon="🛡️"
        label="쿠셔닝"
        value={`${specs.cushioning}/10`}
        percentage={specs.cushioning * 10}
      />
      <SpecCard
        icon="⚡"
        label="반발력"
        value={`${specs.responsiveness}/10`}
        percentage={specs.responsiveness * 10}
      />
      <SpecCard
        icon="🎯"
        label="안정성"
        value={`${specs.stability}/10`}
        percentage={specs.stability * 10}
      />
    </div>
  );
}
