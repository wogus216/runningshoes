'use client';

import { useState } from 'react';
import { Ruler, Check, AlertTriangle, Info } from 'lucide-react';
import type { KoreanFootFit } from '@/types/shoe';

type FitHelperProps = {
  koreanFootFit?: KoreanFootFit;
  shoeName: string;
  brand: string;
};

type Verdict = {
  tone: 'good' | 'warning' | 'caution';
  headline: string;
  detail: string;
  sizeAdvice: string;
};

// 토박스 너비 기준 (mm)
// narrow: < 68mm, standard: 68-75mm, wide: > 75mm (CLAUDE.md 기준)
const WIDTH_REF = {
  narrow: { max: 68 },
  standard: { min: 68, max: 75 },
  wide: { min: 75 },
};

function classifyFootWidth(widthMm: number): 'narrow' | 'standard' | 'wide' {
  if (widthMm < WIDTH_REF.narrow.max) return 'narrow';
  if (widthMm > WIDTH_REF.standard.max) return 'wide';
  return 'standard';
}

function getVerdict(
  footWidth: 'narrow' | 'standard' | 'wide',
  fit: KoreanFootFit,
): Verdict {
  const shoeWidth = fit.toBoxWidth;
  const hasWide = fit.wideOptions;

  // narrow 발 (서양인 평균에 가까운) — 대부분 OK
  if (footWidth === 'narrow') {
    if (shoeWidth === 'narrow') {
      return {
        tone: 'good',
        headline: '잘 맞을 가능성이 높습니다',
        detail: '좁은 발볼과 좁은 토박스는 미드풋이 뜨지 않아 발목 안정성에 유리합니다.',
        sizeAdvice: '평소 사이즈 그대로 권장합니다.',
      };
    }
    return {
      tone: 'good',
      headline: '편안하게 신을 수 있습니다',
      detail: '발볼이 넓은 신발도 좁은 발에는 부담이 없습니다. 다만 미드풋이 뜰 수 있어 끈 조임을 평소보다 약간 더 세게 하세요.',
      sizeAdvice: '평소 사이즈 그대로 권장합니다.',
    };
  }

  // standard 발
  if (footWidth === 'standard') {
    if (shoeWidth === 'narrow') {
      return hasWide
        ? {
            tone: 'caution',
            headline: '와이드 옵션 권장',
            detail: '기본 폭은 다소 꽉 낄 수 있습니다. 같은 모델의 와이드 버전(2E)을 선택하면 훨씬 편합니다.',
            sizeAdvice: '와이드 버전 동일 사이즈, 또는 기본 버전 반 사이즈 업.',
          }
        : {
            tone: 'warning',
            headline: '장거리에는 추천하지 않습니다',
            detail: '10K 이하는 괜찮을 수 있지만, 20K 이상에서는 앞볼 압박으로 발톱 멍·물집 위험이 있습니다.',
            sizeAdvice: '반 사이즈 업 + 얇은 양말 권장.',
          };
    }
    return {
      tone: 'good',
      headline: '잘 맞습니다',
      detail: '표준 발볼에 표준~넓은 토박스는 한국 러너의 80%에게 무난한 조합입니다.',
      sizeAdvice: '평소 사이즈 그대로 권장합니다.',
    };
  }

  // wide 발 (95mm+)
  if (shoeWidth === 'narrow') {
    return hasWide
      ? {
          tone: 'caution',
          headline: '반드시 와이드 옵션',
          detail: '기본 버전은 앞볼 압박이 심각합니다. 같은 모델의 와이드(2E/4E) 버전만 고려하세요.',
          sizeAdvice: '와이드 버전 평소 사이즈, 절대 기본 버전 사지 마세요.',
        }
      : {
          tone: 'warning',
          headline: '다른 모델을 추천합니다',
          detail: '와이드 옵션이 없어 해결책이 없습니다. 아식스·뉴발란스·브룩스의 와이드 지원 모델을 찾아보세요.',
          sizeAdvice: '구매 비추천.',
        };
  }
  if (shoeWidth === 'standard') {
    return hasWide
      ? {
          tone: 'caution',
          headline: '와이드 옵션이 더 안전',
          detail: '기본 버전도 약간의 여유는 있지만, 장거리에서는 압박감이 올 수 있습니다. 와이드가 있으면 그쪽이 안전합니다.',
          sizeAdvice: '와이드 버전 평소 사이즈, 또는 기본 버전 반 사이즈 업.',
        }
      : {
          tone: 'caution',
          headline: '반 사이즈 업 권장',
          detail: '기본만 있는 모델이라 사이즈 업으로 앞볼 여유를 확보하세요. 다만 뒤꿈치가 뜰 수 있습니다.',
          sizeAdvice: '반 사이즈 업 + 타이트한 힐 락 레이싱.',
        };
  }
  // 발 넓음 + 신발 넓음
  return {
    tone: 'good',
    headline: '완벽한 매칭입니다',
    detail: '발볼 95mm+의 한국 러너에게 이상적인 조합입니다. 앞볼이 여유 있어 장거리에도 부담 없습니다.',
    sizeAdvice: '평소 사이즈 그대로 권장합니다.',
  };
}

export function FitHelper({ koreanFootFit, shoeName, brand }: FitHelperProps) {
  const [width, setWidth] = useState<number>(95);

  if (!koreanFootFit) return null;

  const footClass = classifyFootWidth(width);
  const verdict = getVerdict(footClass, koreanFootFit);

  const toneStyles = {
    good: {
      border: 'border-emerald-200',
      bg: 'bg-emerald-50/60',
      icon: <Check className="h-5 w-5 text-emerald-600" />,
      text: 'text-emerald-800',
    },
    caution: {
      border: 'border-amber-200',
      bg: 'bg-amber-50/60',
      icon: <Info className="h-5 w-5 text-amber-600" />,
      text: 'text-amber-800',
    },
    warning: {
      border: 'border-rose-200',
      bg: 'bg-rose-50/60',
      icon: <AlertTriangle className="h-5 w-5 text-rose-600" />,
      text: 'text-rose-800',
    },
  } as const;

  const tone = toneStyles[verdict.tone];

  return (
    <section className="space-y-4">
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-sky-700">Fit Helper</p>
        <h3 className="mt-2 text-xl font-black tracking-tight text-slate-950 flex items-center gap-2">
          <Ruler className="h-5 w-5 text-sky-700" />
          내 발볼에 맞나요?
        </h3>
        <p className="mt-1 text-sm text-secondary">
          발볼(볼 너비)을 입력하면 {brand} {shoeName}과의 매칭을 계산합니다.
        </p>
      </div>

      <div className="rounded-2xl border border-border bg-white p-5">
        <label className="block">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-primary">내 발볼 너비</span>
            <span className="text-2xl font-black text-sky-700">{width}mm</span>
          </div>
          <input
            type="range"
            min={85}
            max={110}
            step={1}
            value={width}
            onChange={(e) => setWidth(Number(e.target.value))}
            className="w-full accent-sky-600"
          />
          <div className="flex justify-between text-[10px] text-tertiary mt-1 font-semibold">
            <span>85<br/>좁음</span>
            <span className="text-center">95<br/>한국 평균</span>
            <span className="text-right">110<br/>매우 넓음</span>
          </div>
        </label>

        <div className="mt-3 flex items-center gap-2 text-xs text-tertiary">
          <span className="rounded-full bg-surface px-2 py-1 font-semibold">
            내 발볼: {footClass === 'narrow' ? '좁음' : footClass === 'standard' ? '표준' : '넓음'}
          </span>
          <span>·</span>
          <span>
            이 신발 토박스: {koreanFootFit.toBoxWidth === 'narrow' ? '좁음' : koreanFootFit.toBoxWidth === 'standard' ? '표준' : '넓음'}
          </span>
          {koreanFootFit.wideOptions && (
            <>
              <span>·</span>
              <span className="text-emerald-700 font-semibold">와이드 옵션 있음</span>
            </>
          )}
        </div>
      </div>

      <div className={`rounded-2xl border ${tone.border} ${tone.bg} p-5`}>
        <div className="flex items-start gap-3">
          <div className="shrink-0 mt-0.5">{tone.icon}</div>
          <div className="space-y-2">
            <p className={`font-bold text-base ${tone.text}`}>{verdict.headline}</p>
            <p className="text-sm text-primary leading-relaxed">{verdict.detail}</p>
            <p className="text-xs text-tertiary mt-2 pt-2 border-t border-current/10">
              <span className="font-semibold">사이즈 조언:</span> {verdict.sizeAdvice}
            </p>
          </div>
        </div>
      </div>

      <p className="text-[11px] text-tertiary leading-relaxed">
        ※ 발볼 측정법: 가장 넓은 부분(새끼발가락 뿌리~엄지발가락 뿌리)을 자로 재세요. A4 용지 위에 발을 대고 연필로 외곽선을 그린 후 측정하는 게 정확합니다.
      </p>
    </section>
  );
}
