/**
 * /vs/[pair] 본문 문구 생성기 — 판정·서술·FAQ·스펙표를 페어 데이터에서 합성한다.
 *
 * 2026-09-03 569줄짜리 page.tsx 에서 분리. JSX 없이 문자열만 만드므로 여기서 테스트한다
 * (`src/lib/__tests__/pair-copy.test.ts`). 문구 임계값(무게 10g·가격 1만원·쿠션 1점)은
 * similar-shoes(20g·2만원)·shoe-cross-links(10g·1만원)와 다르다 — 표면마다 정보 밀도가 달라 의도된 값이다.
 */
import type { Shoe } from '@/types/shoe';
import { withJosa } from '@/lib/korean';
import { getShoeDurability } from '@/lib/durability';
import { formatManwon } from '@/lib/format';

export const WIDTH_RANK: Record<string, number> = { narrow: 0, standard: 1, wide: 2 };

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

  // 쿠셔닝
  const ca = a.specs?.cushioning;
  const cb = b.specs?.cushioning;
  if (ca !== undefined && cb !== undefined && Math.abs(ca - cb) >= 1) {
    out.push({
      label: '쿠셔닝 (에디터 평가)',
      winnerSlug: ca > cb ? 'a' : 'b',
      reason: `${ca}/10 vs ${cb}/10`,
    });
  }

  // 안정성: 에디터 비교 평가
  const sa = a.specs?.stability;
  const sb = b.specs?.stability;
  if (sa !== undefined && sb !== undefined && Math.abs(sa - sb) >= 1) {
    out.push({
      label: '안정성 (에디터 평가)',
      winnerSlug: sa > sb ? 'a' : 'b',
      reason: `${sa}/10 vs ${sb}/10`,
    });
  }

  // 가성비
  const va = a.priceAnalysis?.valueRating;
  const vb = b.priceAnalysis?.valueRating;
  if (a.price !== undefined && b.price !== undefined && va !== undefined && vb !== undefined && Math.abs(va - vb) >= 1) {
    out.push({
      label: '가성비',
      winnerSlug: va > vb ? 'a' : 'b',
      reason: `${va}/10 vs ${vb}/10 (가격 ${formatManwon(a.price)} vs ${formatManwon(b.price)})`,
    });
  } else if (a.price !== undefined && b.price !== undefined && va !== undefined && vb !== undefined) {
    out.push({
      label: '가성비',
      winnerSlug: 'tie',
      reason: `${va}/10 vs ${vb}/10`,
    });
  }

  // 발볼 (한국 러너)
  const wba = a.koreanFootFit?.toBoxWidth;
  const wbb = b.koreanFootFit?.toBoxWidth;
  const wba_r = WIDTH_RANK[wba ?? ''] ?? -1;
  const wbb_r = WIDTH_RANK[wbb ?? ''] ?? -1;
  if (wba_r >= 0 && wbb_r >= 0 && wba_r !== wbb_r) {
    out.push({
      label: '발볼 넓은 한국 러너',
      winnerSlug: wba_r > wbb_r ? 'a' : 'b',
      reason: `${wba} vs ${wbb}`,
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

  let intro = `${withJosa(an, '과/와')} ${withJosa(bn, '은/는')} 모두 ${category} 카테고리로, 아래에서 확인된 구조·무게·가격과 측정 조건을 비교합니다.`;
  if (a.description) intro += ` ${withJosa(an, '은/는')} ${a.description}`;
  if (b.description) intro += ` 반면 ${withJosa(bn, '은/는')} ${b.description}`;
  paras.push(intro);

  const diffs: string[] = [];
  const wa = a.specs?.weight, wb = b.specs?.weight;
  if (wa && wb) {
    diffs.push(`표기 무게는 ${an} ${wa}g, ${bn} ${wb}g입니다. 비교 전 기준 사이즈와 공시·실측 조건을 각 상세 출처에서 확인하세요`);
  }
  const ca = a.specs?.cushioning, cb = b.specs?.cushioning;
  if (ca && cb && Math.abs(ca - cb) >= 1) diffs.push(`쿠셔닝은 ${withJosa(ca > cb ? an : bn, '이/가')} 에디터 평가가 더 높습니다`);
  const pa = a.price, pb = b.price;
  if (pa && pb) diffs.push(`확인 가격은 ${an} ${pa.toLocaleString('ko-KR')}원, ${bn} ${pb.toLocaleString('ko-KR')}원입니다. 확인일·상품·폭 옵션과 현재 판매 조건을 구분하세요`);
  if (diffs.length) paras.push(diffs.join('. ') + '.');

  const fit: string[] = [];
  const wra = WIDTH_RANK[a.koreanFootFit?.toBoxWidth ?? ''] ?? -1;
  const wrb = WIDTH_RANK[b.koreanFootFit?.toBoxWidth ?? ''] ?? -1;
  if (wra >= 0 && wrb >= 0 && wra !== wrb) fit.push(`발볼은 ${withJosa(wra > wrb ? an : bn, '이/가')} 너비 등급이 더 넓게 분류돼 있습니다. 개인 착화는 별도로 확인해야 합니다`);
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
export function buildFaqs(a: Shoe, b: Shoe): { question: string; answer: string }[] {
  const an = `${a.brand} ${a.name}`;
  const bn = `${b.brand} ${b.name}`;
  const faqs: { question: string; answer: string }[] = [];

  const wra = WIDTH_RANK[a.koreanFootFit?.toBoxWidth ?? ''] ?? -1;
  const wrb = WIDTH_RANK[b.koreanFootFit?.toBoxWidth ?? ''] ?? -1;
  if (wra >= 0 && wrb >= 0) {
    let ans: string;
    if (wra !== wrb) {
      const wide = wra > wrb ? an : bn;
      const wideFit = wra > wrb ? a.koreanFootFit : b.koreanFootFit;
      ans = `토박스 기준 ${withJosa(wide, '이/가')} 더 넓습니다(${wideFit?.toBoxWidth}). 발볼이 넓은 편이라면 ${withJosa(wide, '이/가')} 유리하고, 와이드 옵션 제공 여부도 함께 확인하세요.`;
    } else {
      ans = `두 모델 모두 토박스 너비가 ${a.koreanFootFit?.toBoxWidth} 수준으로 비슷합니다. 발볼이 넓다면 와이드 옵션 제공 여부로 골라보세요.`;
    }
    faqs.push({ question: `${withJosa(a.name, '과/와')} ${b.name} 중 발볼 넓은 한국 러너에게 맞는 건?`, answer: ans });
  }

  const sa = a.specs?.stability, sb = b.specs?.stability;
  if (sa && sb && Math.abs(sa - sb) >= 1) {
    const stable = sa > sb ? an : bn;
    faqs.push({ question: `안정성 점수는 어떻게 비교하나요?`, answer: `안정성 점수는 ${withJosa(stable, '이/가')} 더 높습니다(${Math.max(sa, sb)}/10). 에디터의 비교 평가이며, 평발의 치료나 부상 예방 효과를 뜻하지 않습니다.` });
  }

  const va = a.priceAnalysis?.valueRating, vb = b.priceAnalysis?.valueRating;
  if (a.price !== undefined && b.price !== undefined && va && vb) {
    const value = va >= vb ? an : bn;
    faqs.push({ question: `가성비는 어느 쪽이 더 좋나요?`, answer: `에디터 가성비 점수는 ${withJosa(value, '이/가')} 우위입니다(${Math.max(va, vb)}/10, 가격 ${formatManwon(a.price)} vs ${formatManwon(b.price)}). 다만 가성비가 곧 본인에게 맞는 신발을 뜻하진 않으니 무게·쿠셔닝·발볼도 함께 보세요.` });
  }

  faqs.push({ question: `러닝 입문자에게는 둘 중 무엇을 추천하나요?`, answer: '먼저 주로 뛸 노면과 용도, 예산으로 후보를 좁히고 양발의 착화감을 확인하세요. 제품 분류나 표기 무게 하나로 개인 적합성·부상 예방 효과를 판정하지 않습니다. 무게는 기준 사이즈와 공시·실측 조건도 함께 확인하세요.' });

  return faqs;
}

export function durabilityLabel(shoe: Shoe): string {
  const profile = getShoeDurability(shoe);
  return profile ? `${profile.rangeLabel} (${profile.confidenceLabel})` : '-';
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
      label: '쿠셔닝',
      a: a.specs?.cushioning ? `${a.specs.cushioning}/10` : '-',
      b: b.specs?.cushioning ? `${b.specs.cushioning}/10` : '-',
    },
    {
      label: '안정성',
      a: a.specs?.stability ? `${a.specs.stability}/10` : '-',
      b: b.specs?.stability ? `${b.specs.stability}/10` : '-',
    },
    {
      label: '가성비',
      a: a.priceAnalysis?.valueRating ? `${a.priceAnalysis.valueRating}/10` : '-',
      b: b.priceAnalysis?.valueRating ? `${b.priceAnalysis.valueRating}/10` : '-',
    },
    {
      label: '토박스',
      a: a.koreanFootFit?.toBoxWidth ?? '-',
      b: b.koreanFootFit?.toBoxWidth ?? '-',
    },
    {
      label: '와이드 옵션',
      a: a.koreanFootFit?.wideOptions ? '있음' : '확인 필요',
      b: b.koreanFootFit?.wideOptions ? '있음' : '확인 필요',
    },
    {
      label: '내구성 (아웃솔 기준 범위)',
      a: durabilityLabel(a),
      b: durabilityLabel(b),
    },
  ];
}
