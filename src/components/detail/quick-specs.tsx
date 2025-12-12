import { Scale, Shield, Zap, Target } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { ShoeSpecs } from "@/types/shoe";

type QuickSpecsProps = {
  specs: ShoeSpecs;
};

type SpecCardProps = {
  icon: LucideIcon;
  label: string;
  value: string;
  percentage: number;
};

function SpecCard({ icon: Icon, label, value, percentage }: SpecCardProps) {
  return (
    <div className="group relative bg-white rounded-2xl p-8 text-center transition-all duration-300 border-[3px] border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-2 hover:border-[#4facfe] overflow-hidden">
      {/* Hover top bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#4facfe] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="flex justify-center mb-4">
        <div className="w-14 h-14 rounded-2xl bg-[#4facfe]/10 flex items-center justify-center">
          <Icon className="h-7 w-7 text-[#4facfe]" />
        </div>
      </div>

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
      <SpecCard icon={Scale} label="무게" value={`${specs.weight}g`} percentage={70} />
      <SpecCard
        icon={Shield}
        label="쿠셔닝"
        value={`${specs.cushioning}/10`}
        percentage={specs.cushioning * 10}
      />
      <SpecCard
        icon={Zap}
        label="반발력"
        value={`${specs.responsiveness}/10`}
        percentage={specs.responsiveness * 10}
      />
      <SpecCard
        icon={Target}
        label="안정성"
        value={`${specs.stability}/10`}
        percentage={specs.stability * 10}
      />
    </div>
  );
}
