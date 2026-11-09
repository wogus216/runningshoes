import { Ruler } from 'lucide-react';
import type { KoreanFootFit } from '@/types/shoe';

type FitHelperProps = {
  koreanFootFit?: KoreanFootFit;
  shoeName: string;
  brand: string;
};

export function FitHelper({ koreanFootFit, shoeName, brand }: FitHelperProps) {
  if (!koreanFootFit) return null;

  return (
    <section className="space-y-4">
      <div className="border-b-2 border-primary pb-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-sky-700">Fit Guide</p>
        <h3 className="mt-2 text-xl font-black tracking-tight text-slate-950 flex items-center gap-2">
          <Ruler className="h-5 w-5 text-sky-700" />착화 전에 확인할 것
        </h3>
        <p className="mt-1 text-sm text-secondary">{brand} {shoeName}의 사이즈를 고를 때 참고하세요.</p>
      </div>
      <div className="rounded border border-border bg-white p-5 space-y-3 text-[15.5px] leading-relaxed text-secondary">
        <p>실험실의 신발 내부 너비와 맨발의 볼 너비는 같은 값이 아닙니다. 측정 위치·신발 사이즈·길이·어퍼에 따라 달라져, 두 숫자만으로 맞는 사이즈를 계산할 수 없습니다.</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>판매 페이지에서 남녀 구분, 폭 옵션, 해당 브랜드의 사이즈표를 확인하세요.</li>
          <li>러닝 양말을 신고 양발의 앞쪽 압박, 발가락 움직임, 뒤꿈치 고정을 함께 확인하세요.</li>
          <li>폭이 답답하다면 길이만 늘리기 전에 다른 폭이나 모델을 함께 신어보세요. 반 사이즈 업을 일괄 권장하지 않습니다.</li>
        </ul>
        <p className="text-xs text-tertiary">측정법 참고: <a className="underline" href="https://runrepeat.com/testing-methodology" target="_blank" rel="noopener noreferrer">RunRepeat 실험실 방법</a>. 해당 표본의 측정값이며 개인 착화를 보장하지 않습니다.</p>
      </div>
    </section>
  );
}
