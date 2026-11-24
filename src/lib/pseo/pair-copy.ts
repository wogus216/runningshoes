/**
 * /vs/[pair] 본문 문구 생성기 — 판정·서술·FAQ·스펙표를 페어 데이터에서 합성한다.
 *
 * 2026-09-03 569줄짜리 page.tsx 에서 분리. JSX 없이 문자열만 만드므로 여기서 테스트한다
 * (`src/lib/__tests__/pair-copy.test.ts`). 문구 임계값(무게 10g·가격 1만원)은
 * similar-shoes(20g·2만원)·shoe-cross-links(10g·1만원)와 다르다 — 표면마다 정보 밀도가 달라 의도된 값이다.
 */
import type { Shoe } from '@/types/shoe';
import { withJosa } from '@/lib/korean';
import { formatManwon } from '@/lib/format';

export type Verdict = { label: string; winnerSlug: 'a' | 'b' | 'tie' | 'unranked'; reason: string };

export function buildVerdicts(a: Shoe, b: Shoe): Verdict[] {
  const out: Verdict[] = [];

  // 기준 사이즈·공시/실측 조건이 정규화되지 않은 무게는 승패로 판정하지 않는다.
  const wa = a.specs?.weight;
  const wb = b.specs?.weight;
  if (wa !== undefined && wb !== undefined) {
    out.push({
      label: '표기 무게',
      winnerSlug: 'unranked',
      reason: `${wa}g / ${wb}g · 기준 사이즈·공시/실측 조건은 각 모델의 출처를 확인하세요.`,
    });
  }

  return out;
}

export function fmtList(items: string[] | undefined, n = 2): string {
  if (!items || items.length === 0) return '';
  return items.slice(0, n).join(', ');
}

// 페어 데이터로 고유 서술 단락을 합성 (thin content 방지)
export function buildNarrative(a: Shoe, b: Shoe, category: string): string[] {
  const an = `${a.brand} ${a.name}`;
  const bn = `${b.brand} ${b.name}`;
  const paras: string[] = [];

  let intro = a.category === b.category
    ? `${withJosa(an, '과/와')} ${withJosa(bn, '은/는')} 모두 ${category} 카테고리로, 아래에서 확인된 구조·무게·가격과 측정 조건을 비교합니다.`
    : `${withJosa(an, '은/는')} ${a.category}, ${withJosa(bn, '은/는')} ${b.category}로 분류합니다. 아래에서 확인된 구조·무게·가격과 측정 조건을 비교합니다.`;
  if (a.description) intro += ` ${withJosa(an, '은/는')} ${a.description}`;
  if (b.description) intro += ` 반면 ${withJosa(bn, '은/는')} ${b.description}`;
  paras.push(intro);

  const diffs: string[] = [];
  const wa = a.specs?.weight, wb = b.specs?.weight;
  if (wa && wb) {
    diffs.push(`표기 무게는 ${an} ${wa}g, ${bn} ${wb}g입니다. 비교 전 기준 사이즈와 공시·실측 조건을 각 상세 출처에서 확인하세요`);
  }
  const pa = a.price, pb = b.price;
  if (pa && pb) diffs.push(`확인 가격은 ${an} ${pa.toLocaleString('ko-KR')}원, ${bn} ${pb.toLocaleString('ko-KR')}원입니다. 확인일·상품·폭 옵션과 현재 판매 조건을 구분하세요`);
  if (diffs.length) paras.push(diffs.join('. ') + '.');

  const fit: string[] = [];
  if ((a.koreanFootFit?.wideOptions ?? false) !== (b.koreanFootFit?.wideOptions ?? false)) {
    fit.push(`${a.koreanFootFit?.wideOptions ? an : bn}에 와이드 옵션 정보가 있습니다. 구매할 성별·사이즈·폭을 확인하세요`);
  }
  if (fit.length) paras.push(fit.join('. ') + '.');

  const recs: string[] = [];
  const ra = fmtList(a.targetUsers?.recommended);
  const rb = fmtList(b.targetUsers?.recommended);
  if (ra) recs.push(`${an}: ${ra}`);
  if (rb) recs.push(`${bn}: ${rb}`);
  if (recs.length) paras.push(`상세 페이지에 정리한 비교 관점: ${recs.join(' / ')}. 제품별 원문·미확인 항목을 함께 읽고, 러닝 목적·한국 와이드 옵션·예산으로 후보를 좁혀보세요.`);

  return paras;
}

// 페어 데이터로 FAQ 생성 (FAQPage JSON-LD + 본문 텍스트)
export function buildFaqs(): { question: string; answer: string }[] {
  const faqs: { question: string; answer: string }[] = [];

  faqs.push({ question: `러닝 입문자에게는 둘 중 무엇을 추천하나요?`, answer: '먼저 주로 뛸 노면과 용도, 예산으로 후보를 좁히고 양발의 착화감을 확인하세요. 제품 분류나 표기 무게 하나로 개인 적합성·부상 예방 효과를 판정하지 않습니다. 무게는 기준 사이즈와 공시·실측 조건도 함께 확인하세요.' });

  return faqs;
}

export function specRows(a: Shoe, b: Shoe) {
  return [
    { label: '카테고리', a: a.category, b: b.category },
    { label: '가격', a: formatManwon(a.price), b: formatManwon(b.price) },
    { label: '무게', a: a.specs?.weight ? `${a.specs.weight}g` : '-', b: b.specs?.weight ? `${b.specs.weight}g` : '-' },
    {
      label: '힐 스택',
      a: a.biomechanics?.stackHeight?.heel ? `${a.biomechanics.stackHeight.heel}mm` : '-',
      b: b.biomechanics?.stackHeight?.heel ? `${b.biomechanics.stackHeight.heel}mm` : '-',
    },
    {
      label: '전족부 스택',
      a: a.biomechanics?.stackHeight?.forefoot ? `${a.biomechanics.stackHeight.forefoot}mm` : '-',
      b: b.biomechanics?.stackHeight?.forefoot ? `${b.biomechanics.stackHeight.forefoot}mm` : '-',
    },
    {
      label: '드롭',
      a: a.biomechanics?.drop !== undefined ? `${a.biomechanics.drop}mm` : '-',
      b: b.biomechanics?.drop !== undefined ? `${b.biomechanics.drop}mm` : '-',
    },
    {
      label: '미드솔',
      a: a.biomechanics?.midsoleType ?? '-',
      b: b.biomechanics?.midsoleType ?? '-',
    },
    {
      label: '카본 보강 구조',
      a: a.biomechanics?.carbonPlate === undefined ? '-' : a.biomechanics.carbonPlate ? '있음' : '없음',
      b: b.biomechanics?.carbonPlate === undefined ? '-' : b.biomechanics.carbonPlate ? '있음' : '없음',
    },
    {
      label: '와이드 옵션',
      a: a.koreanFootFit?.wideOptions ? '있음' : '확인 필요',
      b: b.koreanFootFit?.wideOptions ? '있음' : '확인 필요',
    },
  ]
    .filter(row => row.a !== '-' || row.b !== '-')
    .filter(row =>
      row.label !== '와이드 옵션'
      || a.koreanFootFit?.wideOptions === true
      || b.koreanFootFit?.wideOptions === true
    );
}
