import type { Shoe } from '@/types/shoe';

type AtAGlanceProps = {
  shoe: Shoe;
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
      ? ` ${midsole} 미드솔${carbon ? '과 카본 보강 구조를 사용합니다. 로드·플레이트의 형태는 상세 스펙을 확인하세요.' : '을 사용합니다.'}`
      : '';
    sentences.push(`${specParts.join(', ')}입니다.${techPart}`);
  }

  if (recommended) {
    sentences.push(`편집상 비교 후보: ${recommended}.${wideOpt ? ' 와이드 옵션은 구매할 성별·사이즈·폭을 확인하세요.' : ''}`);
  }

  if (sentences.length === 0) return null;

  return (
    <section className="section-card p-5 border-l-4 border-l-sky-500">
      <div className="flex items-start gap-3">
        <span className="text-lg shrink-0" aria-hidden="true">📌</span>
        <div>
          <p className="text-xs font-medium text-secondary mb-1.5">한눈에 보기</p>
          <p className="text-[15.5px] leading-relaxed text-primary">{sentences.join(' ')}</p>
        </div>
      </div>
    </section>
  );
}
