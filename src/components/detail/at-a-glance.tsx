import type { Shoe } from '@/types/shoe';

type AtAGlanceProps = {
  shoe: Shoe;
};

const widthLabel: Record<string, string> = {
  narrow: '좁음',
  standard: '표준',
  wide: '넓음',
};

export function AtAGlance({ shoe }: AtAGlanceProps) {
  const { brand, name, category, specs, biomechanics, priceAnalysis, price, koreanFootFit, targetUsers } = shoe;
  const msrp = priceAnalysis?.msrp ?? price;
  const weight = specs?.weight;
  const heel = biomechanics?.stackHeight?.heel;
  const forefoot = biomechanics?.stackHeight?.forefoot;
  const drop = biomechanics?.drop ?? specs?.drop;
  const midsole = biomechanics?.midsoleType;
  const carbon = biomechanics?.carbonPlate;
  const recommended = targetUsers?.recommended?.[0];
  const width = koreanFootFit?.toBoxWidth;
  const wideOpt = koreanFootFit?.wideOptions;

  const sentences: string[] = [];

  if (category && msrp) {
    sentences.push(`${brand} ${name}은 ${category} 카테고리의 ${msrp.toLocaleString()}원 러닝화입니다.`);
  } else if (category) {
    sentences.push(`${brand} ${name}은 ${category} 카테고리 러닝화입니다.`);
  }

  const specParts: string[] = [];
  if (weight) specParts.push(`무게 ${weight}g`);
  if (heel && forefoot) specParts.push(`힐 ${heel}mm·포어풋 ${forefoot}mm 스택`);
  if (drop !== undefined && drop !== null) specParts.push(`${drop}mm 드롭`);
  if (specParts.length > 0) {
    const techPart = midsole
      ? ` ${midsole} 미드솔${carbon ? '에 카본 플레이트를 결합' : ''}했습니다.`
      : '';
    sentences.push(`${specParts.join(', ')}이며,${techPart || ' 검증된 폼 구조를 채택했습니다.'}`);
  }

  if (recommended) {
    const widthPart =
      width && width !== 'standard'
        ? ` 토박스는 ${widthLabel[width]} 등급으로, 발볼 넓은 러너는 ${wideOpt ? '와이드 옵션(2E·X-와이드)을 권장' : '사이즈 +0.5 또는 다른 와이드 모델을 검토'}하세요.`
        : wideOpt
          ? ' 와이드 옵션이 정식 출시되어 발볼 넓은 한국 러너도 선택폭이 있습니다.'
          : '';
    sentences.push(`주로 ${recommended}에게 적합합니다.${widthPart}`);
  }

  if (sentences.length === 0) return null;

  return (
    <section className="section-card p-5 border-l-4 border-l-sky-500">
      <div className="flex items-start gap-3">
        <span className="text-lg shrink-0" aria-hidden="true">📌</span>
        <div>
          <p className="text-xs font-medium text-secondary mb-1.5">한눈에 보기</p>
          <p className="text-sm leading-relaxed text-primary">{sentences.join(' ')}</p>
        </div>
      </div>
    </section>
  );
}
