import type { KoreanFootFit as KoreanFootFitType } from '@/types/shoe';

type KoreanFootFitProps = {
  koreanFootFit: KoreanFootFitType;
  shoeName?: string;
  brand?: string;
};

export function KoreanFootFit({ koreanFootFit }: KoreanFootFitProps) {
  if (koreanFootFit.wideOptions !== true) return null;

  return (
    <section className="space-y-3">
      <h2 className="text-xl font-bold text-primary">확인된 와이드 옵션</h2>
      <p className="text-secondary">와이드 옵션이 있는 모델입니다. 구매할 상품의 성별·사이즈·폭을 판매처에서 확인하세요.</p>
    </section>
  );
}
