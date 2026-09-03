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
export const KNEE_RANK: Record<string, number> = { warning: 0, caution: 1, good: 2, excellent: 3 };

export type Verdict = { label: string; winnerSlug: 'a' | 'b' | 'tie'; reason: string };

export function buildVerdicts(a: Shoe, b: Shoe): Verdict[] {
  const out: Verdict[] = [];

  // 가벼움
  const wa = a.specs?.weight ?? 999;
  const wb = b.specs?.weight ?? 999;
  if (Math.abs(wa - wb) >= 10) {
    out.push({
      label: '가벼움 (속도/대회용)',
      winnerSlug: wa < wb ? 'a' : 'b',
      reason: `${wa}g vs ${wb}g — ${Math.abs(wa - wb)}g 차이`,
    });
  } else {
    out.push({
      label: '가벼움 (속도/대회용)',
      winnerSlug: 'tie',
      reason: `${wa}g vs ${wb}g — 거의 동일`,
    });
  }

  // 쿠셔닝
  const ca = a.specs?.cushioning ?? 0;
  const cb = b.specs?.cushioning ?? 0;
  if (Math.abs(ca - cb) >= 1) {
    out.push({
      label: '쿠셔닝 (장거리/회복런)',
      winnerSlug: ca > cb ? 'a' : 'b',
      reason: `${ca}/10 vs ${cb}/10`,
    });
  }

  // 안정성 (평발/오버프로네이션)
  const sa = a.specs?.stability ?? 0;
  const sb = b.specs?.stability ?? 0;
  if (Math.abs(sa - sb) >= 1) {
    out.push({
      label: '안정성 (평발·오버프로네이션)',
      winnerSlug: sa > sb ? 'a' : 'b',
      reason: `${sa}/10 vs ${sb}/10`,
    });
  }

  // 가성비
  const va = a.priceAnalysis?.valueRating ?? 0;
  const vb = b.priceAnalysis?.valueRating ?? 0;
  if (Math.abs(va - vb) >= 1) {
    out.push({
      label: '가성비',
      winnerSlug: va > vb ? 'a' : 'b',
      reason: `${va}/10 vs ${vb}/10 (가격 ${formatManwon(a.price)} vs ${formatManwon(b.price)})`,
    });
  } else {
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

  // 무릎 보호
  const ka = KNEE_RANK[a.injuryPrevention?.kneeIssues ?? ''] ?? -1;
  const kb = KNEE_RANK[b.injuryPrevention?.kneeIssues ?? ''] ?? -1;
  if (ka >= 0 && kb >= 0 && ka !== kb) {
    out.push({
      label: '무릎 통증 예방',
      winnerSlug: ka > kb ? 'a' : 'b',
      reason: `${a.injuryPrevention?.kneeIssues} vs ${b.injuryPrevention?.kneeIssues}`,
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

  let intro = `${withJosa(an, '과/와')} ${withJosa(bn, '은/는')} 모두 ${category} 카테고리지만, 무게·쿠셔닝·발 적합성에서 분명한 차이가 있습니다.`;
  if (a.description) intro += ` ${withJosa(an, '은/는')} ${a.description}`;
  if (b.description) intro += ` 반면 ${withJosa(bn, '은/는')} ${b.description}`;
  paras.push(intro);

  const diffs: string[] = [];
  const wa = a.specs?.weight, wb = b.specs?.weight;
  if (wa && wb) {
    if (Math.abs(wa - wb) >= 10) diffs.push(`무게는 ${withJosa(wa < wb ? an : bn, '이/가')} ${Math.abs(wa - wb)}g 더 가벼워 빠른 페이스·대회에 유리합니다`);
    else diffs.push(`무게는 ${wa}g 대 ${wb}g로 거의 같습니다`);
  }
  const ca = a.specs?.cushioning, cb = b.specs?.cushioning;
  if (ca && cb && Math.abs(ca - cb) >= 1) diffs.push(`쿠셔닝은 ${withJosa(ca > cb ? an : bn, '이/가')} 더 두툼해 장거리·회복런에서 편안합니다`);
  const pa = a.price, pb = b.price;
  if (pa && pb && Math.abs(pa - pb) >= 10000) diffs.push(`가격은 ${withJosa(pa < pb ? an : bn, '이/가')} 약 ${formatManwon(Math.abs(pa - pb))} 저렴합니다`);
  if (diffs.length) paras.push(diffs.join('. ') + '.');

  const fit: string[] = [];
  const wra = WIDTH_RANK[a.koreanFootFit?.toBoxWidth ?? ''] ?? -1;
  const wrb = WIDTH_RANK[b.koreanFootFit?.toBoxWidth ?? ''] ?? -1;
  if (wra >= 0 && wrb >= 0 && wra !== wrb) fit.push(`발볼은 ${withJosa(wra > wrb ? an : bn, '이/가')} 더 넓어 발볼 넓은 한국 러너에게 잘 맞습니다`);
  if ((a.koreanFootFit?.wideOptions ?? false) !== (b.koreanFootFit?.wideOptions ?? false)) {
    fit.push(`와이드(2E) 옵션은 ${a.koreanFootFit?.wideOptions ? an : bn}만 제공합니다`);
  }
  if (fit.length) paras.push(fit.join('. ') + '.');

  const recs: string[] = [];
  const ra = fmtList(a.targetUsers?.recommended);
  const rb = fmtList(b.targetUsers?.recommended);
  if (ra) recs.push(`${withJosa(an, '은/는')} ${ra} 같은 러너에게`);
  if (rb) recs.push(`${withJosa(bn, '은/는')} ${rb} 같은 러너에게 잘 맞습니다`);
  if (recs.length) paras.push(`종합하면 ${recs.join(', ')}. 본인 발 특성·목적이 애매하면 1분 러닝화 추천으로 후보를 좁혀보세요.`);

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
      ans = `토박스 기준 ${withJosa(wide, '이/가')} 더 넓습니다(${wideFit?.toBoxWidth}). 발볼이 넓은 편이라면 ${withJosa(wide, '이/가')} 유리하고, 와이드(2E) 옵션 제공 여부도 함께 확인하세요.`;
    } else {
      ans = `두 모델 모두 토박스 너비가 ${a.koreanFootFit?.toBoxWidth} 수준으로 비슷합니다. 발볼이 넓다면 와이드(2E) 옵션 제공 여부로 골라보세요.`;
    }
    faqs.push({ question: `${withJosa(a.name, '과/와')} ${b.name} 중 발볼 넓은 한국 러너에게 맞는 건?`, answer: ans });
  }

  const sa = a.specs?.stability ?? 0, sb = b.specs?.stability ?? 0;
  if (sa && sb && Math.abs(sa - sb) >= 1) {
    const stable = sa > sb ? an : bn;
    faqs.push({ question: `평발이라 안정성이 중요한데 어느 쪽이 좋나요?`, answer: `안정성 점수는 ${withJosa(stable, '이/가')} 더 높습니다(${Math.max(sa, sb)}/10). 평발·오버프로네이션이 있다면 ${withJosa(stable, '을/를')} 우선 고려하세요. 발 상태가 애매하면 1분 러닝화 추천으로 확인해볼 수 있습니다.` });
  }

  const va = a.priceAnalysis?.valueRating ?? 0, vb = b.priceAnalysis?.valueRating ?? 0;
  if (va && vb) {
    const value = va >= vb ? an : bn;
    faqs.push({ question: `가성비는 어느 쪽이 더 좋나요?`, answer: `가성비 점수는 ${withJosa(value, '이/가')} 우위입니다(${Math.max(va, vb)}/10, 가격 ${formatManwon(a.price)} vs ${formatManwon(b.price)}). 다만 가성비가 곧 본인에게 맞는 신발을 뜻하진 않으니 무게·쿠셔닝·발볼도 함께 보세요.` });
  }

  const ka = KNEE_RANK[a.injuryPrevention?.kneeIssues ?? ''] ?? -1;
  const kb = KNEE_RANK[b.injuryPrevention?.kneeIssues ?? ''] ?? -1;
  if (ka >= 0 && kb >= 0 && ka !== kb) {
    const knee = ka > kb ? an : bn;
    faqs.push({ question: `무릎이 안 좋은데 어떤 걸 신는 게 나을까요?`, answer: `무릎 통증 예방 측면에서는 ${withJosa(knee, '이/가')} 더 낫게 평가됩니다. 쿠셔닝과 안정성이 무릎 부담을 줄이는 핵심이며, 통증이 지속되면 러닝화 교체와 별개로 전문가 상담을 권합니다.` });
  }

  const cushWinner = (a.specs?.cushioning ?? 0) >= (b.specs?.cushioning ?? 0) ? an : bn;
  faqs.push({ question: `러닝 입문자에게는 둘 중 무엇을 추천하나요?`, answer: `입문자라면 무게보다 쿠셔닝·안정성이 우선입니다. ${cushWinner} 쪽이 쿠셔닝이 좋아 입문·회복런에 무난합니다. 본인 발 특성·목적에 맞는 후보는 1분 러닝화 추천에서 좁힐 수 있습니다.` });

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
      label: '카본 플레이트',
      a: a.biomechanics?.carbonPlate ? '있음' : '없음',
      b: b.biomechanics?.carbonPlate ? '있음' : '없음',
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
      a: a.koreanFootFit?.wideOptions ? '있음' : '없음',
      b: b.koreanFootFit?.wideOptions ? '있음' : '없음',
    },
    {
      label: '평발 적합성',
      a: a.koreanFootFit?.flatFootCompatibility ?? '-',
      b: b.koreanFootFit?.flatFootCompatibility ?? '-',
    },
    {
      label: '내구성 (아웃솔 기준 범위)',
      a: durabilityLabel(a),
      b: durabilityLabel(b),
    },
  ];
}
