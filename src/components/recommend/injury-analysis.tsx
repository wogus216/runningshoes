'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AlertTriangle, Check, ChevronDown, Shield, Star, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { injuryTips, getTopShoesForInjury } from '@/lib/recommendation';
import type { Shoe } from '@/types/shoe';

type InjuryAnalysisProps = {
  injuries: string[];
  allShoes: Shoe[];
};

export function InjuryAnalysis({ injuries, allShoes }: InjuryAnalysisProps) {
  const [expandedInjury, setExpandedInjury] = useState<string | null>(
    injuries.length > 0 ? injuries[0] : null
  );

  if (injuries.length === 0) {
    return null;
  }

  return (
    <div className="rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50 p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-xl bg-amber-100">
          <Shield className="h-5 w-5 text-amber-600" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-900">부상별 맞춤 분석</h3>
          <p className="text-sm text-slate-600">선택하신 부상에 맞는 신발과 팁을 확인하세요</p>
        </div>
      </div>

      <div className="space-y-3">
        {injuries.map((injuryKey) => {
          const injury = injuryTips[injuryKey];
          if (!injury) return null;

          const isExpanded = expandedInjury === injuryKey;
          const topShoes = getTopShoesForInjury(allShoes, injuryKey);

          return (
            <div
              key={injuryKey}
              className={cn(
                "rounded-2xl border-2 overflow-hidden transition-all",
                isExpanded ? "border-amber-300 bg-white" : "border-transparent bg-white/70"
              )}
            >
              <button
                onClick={() => setExpandedInjury(isExpanded ? null : injuryKey)}
                className="w-full flex items-center justify-between p-4 text-left"
              >
                <div className="flex items-center gap-3">
                  <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center text-lg",
                    isExpanded ? "bg-amber-100" : "bg-slate-100"
                  )}>
                    <AlertTriangle className={cn(
                      "h-5 w-5",
                      isExpanded ? "text-amber-600" : "text-slate-500"
                    )} />
                  </div>
                  <span className="font-semibold text-slate-900">{injury.name}</span>
                </div>
                <ChevronDown className={cn(
                  "h-5 w-5 text-slate-400 transition-transform",
                  isExpanded && "rotate-180"
                )} />
              </button>

              {isExpanded && (
                <div className="px-4 pb-4 space-y-4 animate-fade-in">
                  {/* 추천 신발 TOP 3 */}
                  <div>
                    <p className="text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2">
                      <Star className="h-4 w-4 text-amber-500" />
                      {injury.name} 예방에 좋은 신발 TOP 3
                    </p>
                    {topShoes.length > 0 ? (
                      <div className="space-y-2">
                        {topShoes.map((shoe, idx) => (
                          <Link
                            key={shoe.id || shoe.slug}
                            href={`/shoes/${shoe.slug}`}
                            className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-slate-50 to-slate-100 hover:from-amber-50 hover:to-orange-50 transition-colors group"
                          >
                            <span className={cn(
                              "w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold",
                              idx === 0 ? "bg-amber-500 text-white" :
                              idx === 1 ? "bg-slate-400 text-white" :
                              "bg-amber-200 text-amber-800"
                            )}>
                              {idx + 1}
                            </span>
                            <div className="flex-1 min-w-0">
                              <p className="font-medium text-slate-900 truncate group-hover:text-amber-700">
                                {shoe.brand} {shoe.name}
                              </p>
                              <p className="text-xs text-slate-500">{shoe.category}</p>
                            </div>
                            <div className="text-right">
                              <span className={cn(
                                "text-xs px-2 py-1 rounded-full font-medium",
                                shoe.injuryPrevention?.[injuryKey as keyof typeof shoe.injuryPrevention] === 'excellent'
                                  ? "bg-emerald-100 text-emerald-700"
                                  : "bg-blue-100 text-blue-700"
                              )}>
                                {shoe.injuryPrevention?.[injuryKey as keyof typeof shoe.injuryPrevention] === 'excellent'
                                  ? '매우 좋음'
                                  : '좋음'}
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-slate-500 p-3 bg-slate-50 rounded-xl">
                        해당 부상에 특화된 신발 데이터를 준비 중입니다.
                      </p>
                    )}
                  </div>

                  {/* 관리 팁 */}
                  <div>
                    <p className="text-sm font-semibold text-emerald-700 mb-2 flex items-center gap-2">
                      <Check className="h-4 w-4" />
                      신발 선택 팁
                    </p>
                    <ul className="space-y-1.5">
                      {injury.tips.map((tip, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                          <span className="text-emerald-500 mt-0.5">•</span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 피해야 할 것 */}
                  <div>
                    <p className="text-sm font-semibold text-rose-700 mb-2 flex items-center gap-2">
                      <X className="h-4 w-4" />
                      피해야 할 신발 특성
                    </p>
                    <ul className="space-y-1.5">
                      {injury.avoid.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                          <span className="text-rose-500 mt-0.5">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
