'use client';

import { useState, useMemo } from 'react';
import { Clock, AlertCircle } from 'lucide-react';

type ReplacementCalculatorProps = {
  durabilityKm?: number; // expected durability in km
  shoeName: string;
};

export function ReplacementCalculator({ durabilityKm, shoeName }: ReplacementCalculatorProps) {
  const [weeklyKm, setWeeklyKm] = useState<number>(30);
  const durability = durabilityKm ?? 600;

  const result = useMemo(() => {
    if (weeklyKm <= 0) return null;
    const weeks = durability / weeklyKm;
    const months = weeks / 4.33;
    return {
      weeks: Math.round(weeks),
      months: Math.round(months * 10) / 10,
      days: Math.round(weeks * 7),
    };
  }, [weeklyKm, durability]);

  // 경고 레벨 결정
  const warning = useMemo(() => {
    if (weeklyKm >= 70) {
      return {
        tone: 'warning' as const,
        text: '주당 70km 이상의 고강도 러너는 신발 1족으로 버티기 어렵습니다. 2~3족 로테이션을 권장하며, 각 신발의 예상 수명도 늘어납니다.',
      };
    }
    if (weeklyKm >= 50) {
      return {
        tone: 'info' as const,
        text: '주당 50km 이상이면 2족 로테이션이 부상 예방과 신발 내구성 양쪽에 유리합니다.',
      };
    }
    return null;
  }, [weeklyKm]);

  return (
    <section className="space-y-4">
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-sky-700">Replacement Timer</p>
        <h3 className="mt-2 text-xl font-black tracking-tight text-slate-950 flex items-center gap-2">
          <Clock className="h-5 w-5 text-sky-700" />
          언제 교체해야 할까?
        </h3>
        <p className="mt-1 text-sm text-secondary">
          주간 주행거리를 입력하면 {shoeName}의 예상 수명을 계산합니다.
          {durabilityKm && ` (내구성 기준: ${durabilityKm}km)`}
        </p>
      </div>

      <div className="rounded-2xl border border-border bg-white p-5">
        <label className="block">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-primary">내 주간 주행거리</span>
            <span className="text-2xl font-black text-sky-700">{weeklyKm}km</span>
          </div>
          <input
            type="range"
            min={5}
            max={100}
            step={5}
            value={weeklyKm}
            onChange={(e) => setWeeklyKm(Number(e.target.value))}
            className="w-full accent-sky-600"
          />
          <div className="flex justify-between text-[10px] text-tertiary mt-1 font-semibold">
            <span>5km<br/>입문</span>
            <span className="text-center">30km<br/>평균</span>
            <span className="text-right">100km<br/>고강도</span>
          </div>
        </label>
      </div>

      {result && (
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="rounded-xl border border-border bg-surface/50 p-3">
            <div className="text-[10px] uppercase tracking-wider text-tertiary font-semibold">교체 주기</div>
            <div className="text-2xl font-black text-slate-950 mt-1">{result.months}<span className="text-sm">개월</span></div>
          </div>
          <div className="rounded-xl border border-border bg-surface/50 p-3">
            <div className="text-[10px] uppercase tracking-wider text-tertiary font-semibold">주</div>
            <div className="text-2xl font-black text-slate-950 mt-1">{result.weeks}<span className="text-sm">주</span></div>
          </div>
          <div className="rounded-xl border border-border bg-surface/50 p-3">
            <div className="text-[10px] uppercase tracking-wider text-tertiary font-semibold">총 km</div>
            <div className="text-2xl font-black text-slate-950 mt-1">{durability}</div>
          </div>
        </div>
      )}

      {warning && (
        <div className={`rounded-2xl border p-4 text-sm ${
          warning.tone === 'warning'
            ? 'border-amber-200 bg-amber-50/60 text-amber-800'
            : 'border-sky-200 bg-sky-50/60 text-sky-800'
        }`}>
          <div className="flex items-start gap-2">
            <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
            <p className="leading-relaxed">{warning.text}</p>
          </div>
        </div>
      )}

      <div className="rounded-xl border border-border bg-white p-4 text-xs text-secondary leading-relaxed">
        <p className="font-semibold text-primary mb-2">교체 신호 체크리스트</p>
        <ul className="space-y-1">
          <li>• 아웃솔 러그가 눈에 띄게 닳았거나 힐 부분이 기울어짐</li>
          <li>• 미드솔이 눌려서 쿠션감이 현저히 감소</li>
          <li>• 러닝 후 평소 없던 무릎·발목·발바닥 통증 시작</li>
          <li>• 같은 페이스로 뛰는데 발이 더 피곤함</li>
        </ul>
      </div>
    </section>
  );
}
