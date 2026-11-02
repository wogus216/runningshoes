/**
 * /vs/[pair] 본문 문구 생성기 — "그래서 어떤 러너가 무엇을 골라야 하나"를 페어 데이터에서 합성한다.
 *
 * ## 2026-11-02 개편 — 스펙 나열 → 선택 근거
 *
 * 10/19 구글 검색 절벽 진단 뒤 359개 페이지의 자동 문구를 전수 생성해 보니, 문구가 **틀리거나
 * 판단에 도움이 안 되는** 경우가 체계적으로 있었다(같은 날 집계).
 *   - 359/359  영어 enum 노출 — "토박스 너비가 narrow 수준", "good vs caution"
 *   - 192      쿠셔닝 점수가 같은데 입문자 FAQ 가 한쪽을 "쿠셔닝이 좋아" 추천(`>=` 동률 처리)
 *   - 147      가성비 점수가 같은데 FAQ 가 한쪽을 "우위"라고 단정
 *   - 118·101  발볼·무게 차이가 없는데 도입부가 "무게·쿠셔닝·발 적합성에서 분명한 차이" 단정
 *   -  93      둘 다 와이드 버전이 있는데 "와이드 옵션 제공 여부로 골라보세요"
 *   -  45      레이싱 페어에 "입문자에게 추천" FAQ, 트레일 페어에 "대회에 유리"
 *   -  42      쿠셔닝 점수는 높지만 힐 스택은 더 얇은 쪽을 "더 두툼해"라고 서술
 *   -  34      안정성 점수 승자가 평발 적합성은 더 낮은데 평발 러너에게 추천
 * 그리고 "쿠셔닝 9/10 vs 8/10 → A 승"처럼 **1점 차이로 승자를 정하는 방식 자체**가 독자의 선택을
 * 돕지 못했다. 점수(10점 만점)는 랩 측정치·리뷰를 바탕으로 매긴 편집 점수라 1점은 체감 차이로
 * 보기 어렵다.
 *
 * 그래서 이 파일은 이제 축(발볼·안정성·쿠셔닝·무게·카본·가격·반발력·무릎·드롭·내구성)마다
 *   ① **의미 있는 차이**가 있으면 → "이런 러너라면 A" + 근거 수치
 *   ② 차이가 작으면 → "이건 고를 기준이 아니다"(비슷한 점)
 *   ③ 지표끼리 엇갈리면 → 단정하지 않고 보류 사유를 적는다
 * 로 나누고, 그 결과로 결론 문장·FAQ·메타 요약·**페이지 존재 이유(색인 여부)**를 만든다.
 *
 * 임계값(무게 20g·점수 2점·스택 4mm·드롭 4mm·정가 2만원)은 "읽는 사람이 실제로 다르게 느끼거나
 * 지갑에서 체감하는 크기"를 기준으로 잡았다. 링크 한 줄 요약(shoe-cross-links: 10g·1만원)과는
 * 목적이 달라 의도적으로 다르다.
 *
 * 순수 함수만 두고 `src/lib/__tests__/pair-copy.test.ts` 에서 359개 실데이터 페어로 검증한다.
 */
import type { Shoe } from '@/types/shoe';
import { withJosa } from '@/lib/korean';
import { getShoeDurability } from '@/lib/durability';
import { formatManwon, formatManwonExact } from '@/lib/format';

export const WIDTH_RANK: Record<string, number> = { narrow: 0, standard: 1, wide: 2 };
export const KNEE_RANK: Record<string, number> = { warning: 0, caution: 1, good: 2, excellent: 3 };
export const COMPAT_RANK: Record<string, number> = { poor: 0, fair: 1, good: 2, excellent: 3 };

export const WIDTH_KO: Record<string, string> = { narrow: '좁은 편', standard: '보통', wide: '넓은 편' };
export const COMPAT_KO: Record<string, string> = { excellent: '매우 좋음', good: '좋음', fair: '보통', poor: '맞지 않음' };
export const INJURY_KO: Record<string, string> = { excellent: '매우 좋음', good: '좋음', caution: '주의', warning: '경고' };

/** 의미 있는 차이로 보는 최소 크기 */
export const THRESHOLDS = {
  weightG: 20,
  scorePts: 2,
  stackMm: 4,
  dropMm: 4,
  priceWon: 20000,
} as const;

export type Side = 'a' | 'b';

export type AxisKey =
  | 'fit'
  | 'stability'
  | 'cushion'
  | 'weight'
  | 'carbon'
  | 'price'
  | 'response'
  | 'knee'
  | 'drop'
  | 'durability';

/** "이런 러너라면 이 신발" 한 줄 — 누구에게(runner)·왜(evidence) */
export type PickReason = {
  axis: AxisKey;
  /** 리스트에 쓰는 러너 묘사 */
  runner: string;
  /** 결론 문장에 쓰는 짧은 러너 묶음 — 항상 "러너"로 끝난다 */
  tag: string;
  /** 근거 수치 */
  evidence: string;
  /** 결론 문장에 올릴 우선순위(3 = 선택을 바꿀 만한 차이) */
  weight: number;
};

/** 차이가 작아 고를 기준이 안 되는 항목 */
export type Similarity = {
  axis: AxisKey;
  text: string;
  /**
   * 결론 문장 앞머리용. 없으면 결론에 쓰지 않는다.
   *  - `both`: "둘 다 ___고 / ___지만"에 들어갈 어간(예: '쿠션이 넉넉하')
   *  - `noun`: "___·___는 비슷하지만"에 들어갈 항목명(예: '무게')
   */
  lead?: { both: string } | { noun: string };
};

export type PairAnalysis = {
  /** 같은 라인의 세대 비교면 신형 쪽 */
  generation: { newer: Side } | null;
  forA: PickReason[];
  forB: PickReason[];
  similar: Similarity[];
  /** 지표가 엇갈리거나 데이터가 비어 판단을 보류한 이유 */
  caveats: string[];
  /** 결론 한 단락 */
  bottomLine: string;
  /** 메타 설명용 짧은 요약 */
  decisionSummary: string;
};

const fullName = (s: Shoe) => `${s.brand} ${s.name}`;
const sign = (n: number) => (n > 0 ? 1 : n < 0 ? -1 : 0);
const won = (n: number) => `${n.toLocaleString()}원`;

/** 같은 라인의 세대 비교인가 — 브랜드가 같고 끝의 세대 번호만 다른 경우(고스트 17·18, 1080 v14·v15) */
export function generationOf(a: Shoe, b: Shoe): { newer: Side } | null {
  if (a.brand !== b.brand) return null;
  const parse = (name: string) => {
    const m = name.trim().match(/^(.*?)\s*v?(\d+(?:\.\d+)?)$/i);
    return m ? { base: m[1].trim(), ver: Number(m[2]) } : { base: name.trim(), ver: 1 };
  };
  const pa = parse(a.name);
  const pb = parse(b.name);
  if (!pa.base || pa.base !== pb.base || pa.ver === pb.ver) return null;
  return { newer: pa.ver > pb.ver ? 'a' : 'b' };
}

type Ctx = {
  a: Shoe;
  b: Shoe;
  forA: PickReason[];
  forB: PickReason[];
  similar: Similarity[];
  caveats: string[];
};

function pick(ctx: Ctx, side: Side, reason: PickReason) {
  (side === 'a' ? ctx.forA : ctx.forB).push(reason);
}

const other = (side: Side): Side => (side === 'a' ? 'b' : 'a');
const shoeOf = (ctx: Ctx, side: Side) => (side === 'a' ? ctx.a : ctx.b);

// ── 축별 판정 ────────────────────────────────────────────────────────────────

function fitAxis(ctx: Ctx) {
  const { a, b } = ctx;
  const ta = a.koreanFootFit?.toBoxWidth;
  const tb = b.koreanFootFit?.toBoxWidth;
  const ra = WIDTH_RANK[ta ?? ''] ?? -1;
  const rb = WIDTH_RANK[tb ?? ''] ?? -1;
  if (ra < 0 || rb < 0) return;
  const wa = a.koreanFootFit?.wideOptions ?? false;
  const wb = b.koreanFootFit?.wideOptions ?? false;

  if (ra !== rb) {
    const wider: Side = ra > rb ? 'a' : 'b';
    const narrower = shoeOf(ctx, other(wider));
    const narrowerHasWide = narrower.koreanFootFit?.wideOptions ?? false;
    const widerHasWide = shoeOf(ctx, wider).koreanFootFit?.wideOptions ?? false;
    let evidence = `토박스 ${WIDTH_KO[wider === 'a' ? ta! : tb!]} vs ${WIDTH_KO[wider === 'a' ? tb! : ta!]}`;
    if (narrowerHasWide && !widerHasWide) evidence += ` — 다만 ${narrower.name}에는 와이드 버전이 있어 대안이 됩니다`;
    else if (widerHasWide) evidence += ', 와이드 버전도 있음';
    pick(ctx, wider, {
      axis: 'fit',
      runner: '발볼이 넓거나 앞꿈치가 자주 끼는 러너',
      tag: '발볼이 넓은 러너',
      evidence,
      weight: 3,
    });
    return;
  }

  const width = WIDTH_KO[ta!];
  if (wa !== wb) {
    const withWide: Side = wa ? 'a' : 'b';
    pick(ctx, withWide, {
      axis: 'fit',
      runner: '발볼이 넓어 와이드(2E) 버전이 필요한 러너',
      tag: '발볼이 넓은 러너',
      evidence: `토박스는 둘 다 ${width}이지만 와이드 버전은 ${shoeOf(ctx, withWide).name}에만 있음`,
      weight: 3,
    });
    return;
  }

  if (wa && wb) {
    ctx.similar.push({ axis: 'fit', text: `발볼: 토박스 둘 다 ${width}, 둘 다 와이드 버전이 있어 발볼로는 갈리지 않습니다` });
  } else if (ta === 'narrow') {
    ctx.caveats.push('둘 다 토박스가 좁은 편이고 와이드 버전도 없어, 발볼이 넓다면 둘 다 맞지 않을 수 있습니다');
  } else {
    ctx.similar.push({ axis: 'fit', text: `발볼: 토박스 둘 다 ${width}, 둘 다 와이드 버전이 없습니다` });
  }
}

function stabilityAxis(ctx: Ctx) {
  const { a, b } = ctx;
  const sa = a.specs?.stability;
  const sb = b.specs?.stability;
  if (!sa || !sb) return;
  const fa = a.koreanFootFit?.flatFootCompatibility;
  const fb = b.koreanFootFit?.flatFootCompatibility;
  const fra = COMPAT_RANK[fa ?? ''] ?? -1;
  const frb = COMPAT_RANK[fb ?? ''] ?? -1;

  const sGap = sa - sb;
  const fGap = fra >= 0 && frb >= 0 ? fra - frb : 0;
  const dirS = Math.abs(sGap) >= THRESHOLDS.scorePts ? sign(sGap) : 0;
  const dirF = fGap !== 0 ? sign(fGap) : 0;


  // 점수와 평발 적합성 평가가 반대를 가리키면 단정하지 않는다
  if ((dirS && fGap && sign(fGap) !== dirS) || (dirF && sGap && sign(sGap) !== dirF)) {
    ctx.caveats.push(
      `안정성: 안정성 점수(${sa}/10 vs ${sb}/10)와 평발 적합성 평가(${COMPAT_KO[fa!]} vs ${COMPAT_KO[fb!]})가 엇갈려 어느 쪽이 평발에 낫다고 단정하지 않았습니다`,
    );
    return;
  }

  const dir = dirS || dirF;
  if (dir) {
    const side: Side = dir > 0 ? 'a' : 'b';
    const [hi, lo] = side === 'a' ? [sa, sb] : [sb, sa];
    const flatPair = fra >= 0 && frb >= 0 ? `${COMPAT_KO[side === 'a' ? fa! : fb!]} vs ${COMPAT_KO[side === 'a' ? fb! : fa!]}` : '';
    // 점수가 같고 평발 적합성 평가만 한 단계 다르면 근거가 약하다 — 결론을 좌우하지 않게 가중치를 낮춘다
    const evidence = dirS
      ? `안정성 ${hi}/10 vs ${lo}/10${flatPair ? `, 평발 적합성 ${flatPair}` : ''}`
      : `안정성 점수는 ${hi === lo ? `둘 다 ${hi}/10` : `${hi}/10 vs ${lo}/10`}이지만 평발 적합성 평가가 ${flatPair}`;
    pick(ctx, side, {
      axis: 'stability',
      runner: '발이 안쪽으로 무너지는 편(평발·과내전)이거나, 지치면 착지가 흔들리는 러너',
      tag: '평발·과내전 러너',
      evidence,
      weight: dirS || Math.abs(fGap) >= 2 ? 3 : 2,
    });
    return;
  }

  const lead = sa >= 8 && sb >= 8 ? { both: '안정성이 높' } : undefined;
  // 여기 오면 평발 적합성은 같다(다르면 위에서 판정·보류된다)
  const flatSame = fra >= 0 ? `, 평발 적합성 둘 다 ${COMPAT_KO[fa!]}` : '';
  const gapNote = sGap !== 0 ? ' — 1점 차이는 체감 차이로 보지 않았습니다' : '';
  ctx.similar.push({ axis: 'stability', text: `안정성: ${sa === sb ? `둘 다 ${sa}/10` : `${sa}/10·${sb}/10`}${flatSame}${gapNote}`, lead });
}

function cushionAxis(ctx: Ctx, category: string) {
  const { a, b } = ctx;
  const ca = a.specs?.cushioning;
  const cb = b.specs?.cushioning;
  if (!ca || !cb) return;
  const ha = a.biomechanics?.stackHeight?.heel;
  const hb = b.biomechanics?.stackHeight?.heel;
  const sGap = ca - cb;
  // 실측 스택은 소수(38.7mm)라 차이를 소수 한 자리로 자른다 — 그대로 빼면 4.700000000000003mm 가 나온다
  const hGap = ha && hb ? Math.round((ha - hb) * 10) / 10 : 0;
  const stackBig = Math.abs(hGap) >= THRESHOLDS.stackMm;

  // 점수가 2점 이상 갈리는데 스택은 반대로 4mm 이상 갈리면 단정하지 않는다(1점 차이는 아래에서 '비슷'으로 처리)
  if (Math.abs(sGap) >= THRESHOLDS.scorePts && stackBig && sign(hGap) !== sign(sGap)) {
    const thicker = hGap > 0 ? a : b;
    const higher = sGap > 0 ? a : b;
    ctx.caveats.push(
      `쿠셔닝: 쿠셔닝 점수는 ${withJosa(higher.name, '이/가')} 높지만(${Math.max(ca, cb)}/10 vs ${Math.min(ca, cb)}/10) 힐 스택은 ${withJosa(thicker.name, '이/가')} ${Math.abs(hGap)}mm 더 두껍습니다 — 푹신함의 성격이 달라 신어 보고 판단하세요`,
    );
    return;
  }

  const dir =
    Math.abs(sGap) >= THRESHOLDS.scorePts
      ? sign(sGap)
      : Math.abs(sGap) === 1 && stackBig && sign(hGap) === sign(sGap)
        ? sign(sGap)
        : 0;

  if (dir) {
    const side: Side = dir > 0 ? 'a' : 'b';
    const [hi, lo] = side === 'a' ? [ca, cb] : [cb, ca];
    const stack = ha && hb ? `, 힐 스택 ${side === 'a' ? ha : hb}mm vs ${side === 'a' ? hb : ha}mm` : '';
    const runner =
      category === '레이싱'
        ? '하프·풀코스 후반까지 다리를 보호하고 싶은 러너'
        : category === '트레일'
          ? '긴 거리 산행에서 발바닥 충격을 줄이고 싶은 러너'
          : '장거리·회복런 비중이 크거나 착지 충격이 부담스러운 러너';
    pick(ctx, side, {
      axis: 'cushion',
      runner,
      tag: '장거리·회복런 위주 러너',
      evidence: `쿠셔닝 ${hi}/10 vs ${lo}/10${stack}`,
      weight: 3,
    });
    return;
  }

  const gapNote = sGap !== 0 ? ' — 1점 차이는 체감 차이로 보지 않았습니다' : '';
  const stackNote = stackBig ? ` (힐 스택은 ${withJosa(hGap > 0 ? a.name : b.name, '이/가')} ${Math.abs(hGap)}mm 높음)` : '';
  let lead: Similarity['lead'];
  if (ca >= 8 && cb >= 8) lead = { both: '쿠션이 넉넉하' };
  else if (ca <= 5 && cb <= 5) lead = { both: '쿠션이 단단한 편이' };
  else lead = { noun: '쿠셔닝' };
  ctx.similar.push({ axis: 'cushion', text: `쿠셔닝: ${ca === cb ? `둘 다 ${ca}/10` : `${ca}/10·${cb}/10`}${stackNote}${gapNote}`, lead });
}

function weightAxis(ctx: Ctx, category: string) {
  const { a, b } = ctx;
  const wa = a.specs?.weight;
  const wb = b.specs?.weight;
  if (!wa || !wb) return;
  const gap = Math.abs(wa - wb);
  if (gap >= THRESHOLDS.weightG) {
    const side: Side = wa < wb ? 'a' : 'b';
    const runner =
      category === '레이싱'
        ? '대회에서 조금이라도 가볍게 달리고 싶은 러너'
        : category === '트레일'
          ? '긴 오르막·장거리 산행에서 다리 피로를 줄이고 싶은 러너'
          : '템포런처럼 빠른 훈련도 섞거나, 무거운 신발이 부담스러운 러너';
    pick(ctx, side, {
      axis: 'weight',
      runner,
      tag: '가벼운 신발을 원하는 러너',
      evidence: `${Math.min(wa, wb)}g vs ${Math.max(wa, wb)}g — ${gap}g 가벼움`,
      weight: gap >= 40 ? 3 : 2,
    });
    return;
  }
  ctx.similar.push({
    axis: 'weight',
    text: gap ? `무게: ${wa}g·${wb}g — ${gap}g 차이는 신었을 때 거의 느껴지지 않습니다` : `무게: 둘 다 ${wa}g`,
    lead: { noun: '무게' },
  });
}

function carbonAxis(ctx: Ctx) {
  const { a, b } = ctx;
  const pa = a.biomechanics?.carbonPlate ?? false;
  const pb = b.biomechanics?.carbonPlate ?? false;
  if (pa === pb) return;
  const plated: Side = pa ? 'a' : 'b';
  pick(ctx, plated, {
    axis: 'carbon',
    runner: '대회 기록 단축이 목적인 러너',
    tag: '대회 기록이 목적인 러너',
    evidence: '카본 플레이트 있음 vs 없음 — 추진감이 강한 대신 종아리·아킬레스건 부담이 커 대회·빠른 훈련용에 맞습니다',
    weight: 3,
  });
  pick(ctx, other(plated), {
    axis: 'carbon',
    runner: '대회보다 매일 신는 훈련용이 필요한 러너',
    tag: '매일 신을 훈련화가 필요한 러너',
    evidence: '카본 플레이트 없음 — 조깅·회복런까지 페이스를 가리지 않습니다',
    weight: 2,
  });
}

function priceAxis(ctx: Ctx) {
  const { a, b } = ctx;
  const pa = a.price;
  const pb = b.price;
  if (!pa || !pb) {
    for (const s of [a, b]) {
      if (s.price) continue;
      const street = s.priceAnalysis?.streetPrice;
      ctx.caveats.push(
        `가격: ${withJosa(s.name, '은/는')} 국내 정가가 없어${street ? `(병행·직구 실거래 약 ${formatManwon(street)})` : ''} 가격으로는 비교하지 않았습니다`,
      );
    }
    return;
  }
  const gap = Math.abs(pa - pb);
  if (gap >= THRESHOLDS.priceWon) {
    const side: Side = pa < pb ? 'a' : 'b';
    pick(ctx, side, {
      axis: 'price',
      runner: '예산을 아끼고 싶은 러너',
      tag: '예산이 우선인 러너',
      evidence: `정가 ${won(Math.min(pa, pb))} vs ${won(Math.max(pa, pb))} — ${formatManwonExact(gap)} 저렴`,
      weight: gap >= 50000 ? 3 : 2,
    });
    return;
  }
  ctx.similar.push({
    axis: 'price',
    text:
      gap === 0
        ? `가격: 정가가 둘 다 ${won(pa)}입니다`
        : gap >= 10000
          ? `가격: 정가 ${formatManwonExact(gap)} 차이로 크지 않습니다`
          : `가격: 정가 ${won(pa)}·${won(pb)} — 같은 가격대입니다`,
    lead: { noun: '가격대' },
  });
}

function responseAxis(ctx: Ctx) {
  const ra = ctx.a.specs?.responsiveness;
  const rb = ctx.b.specs?.responsiveness;
  if (!ra || !rb || Math.abs(ra - rb) < THRESHOLDS.scorePts) return;
  const side: Side = ra > rb ? 'a' : 'b';
  pick(ctx, side, {
    axis: 'response',
    runner: '통통 튀는 반발감과 페이스 변화를 즐기는 러너',
    tag: '반발감을 좋아하는 러너',
    evidence: `반발력 ${Math.max(ra, rb)}/10 vs ${Math.min(ra, rb)}/10`,
    weight: 2,
  });
}

function kneeAxis(ctx: Ctx) {
  const ka = ctx.a.injuryPrevention?.kneeIssues;
  const kb = ctx.b.injuryPrevention?.kneeIssues;
  const ra = KNEE_RANK[ka ?? ''] ?? -1;
  const rb = KNEE_RANK[kb ?? ''] ?? -1;
  if (ra < 0 || rb < 0 || ra === rb) return;
  const side: Side = ra > rb ? 'a' : 'b';
  pick(ctx, side, {
    axis: 'knee',
    runner: '무릎 통증을 겪은 적이 있는 러너',
    tag: '무릎이 예민한 러너',
    evidence: `무릎 부담 평가 ${INJURY_KO[side === 'a' ? ka! : kb!]} vs ${INJURY_KO[side === 'a' ? kb! : ka!]}`,
    weight: 2,
  });
}

function dropAxis(ctx: Ctx) {
  const da = ctx.a.biomechanics?.drop;
  const db = ctx.b.biomechanics?.drop;
  if (da == null || db == null || Math.abs(da - db) < THRESHOLDS.dropMm) return;
  const high: Side = da > db ? 'a' : 'b';
  const [hi, lo] = [Math.max(da, db), Math.min(da, db)];
  pick(ctx, high, {
    axis: 'drop',
    runner: '아킬레스건·종아리가 예민한 러너',
    tag: '아킬레스건·종아리가 예민한 러너',
    evidence: `드롭 ${hi}mm vs ${lo}mm — 드롭이 높을수록 아킬레스건·종아리 부담이 줄어듭니다`,
    weight: 1,
  });
  pick(ctx, other(high), {
    axis: 'drop',
    runner: '미드풋 착지에 익숙하거나 낮은 드롭을 선호하는 러너',
    tag: '낮은 드롭을 선호하는 러너',
    evidence: `드롭 ${lo}mm vs ${hi}mm`,
    weight: 1,
  });
}

function durabilityAxis(ctx: Ctx) {
  const pa = getShoeDurability(ctx.a);
  const pb = getShoeDurability(ctx.b);
  if (!pa || !pb) return;
  // 범위가 겹치면 차이로 보지 않는다
  let side: Side | null = null;
  if (pa.min > pb.max) side = 'a';
  else if (pb.min > pa.max) side = 'b';
  if (!side) return;
  const [win, lose] = side === 'a' ? [pa, pb] : [pb, pa];
  pick(ctx, side, {
    axis: 'durability',
    runner: '주간 거리가 많아 오래 신을 신발이 필요한 러너',
    tag: '오래 신을 신발이 필요한 러너',
    evidence: `아웃솔 마모 기준 ${win.rangeLabel}(${win.confidenceLabel}) vs ${lose.rangeLabel}(${lose.confidenceLabel})`,
    weight: 1,
  });
}

// ── 종합 ────────────────────────────────────────────────────────────────────

/** 결론에 올릴 러너 묶음 — 우선순위 순, 같은 태그 중복 제거 */
function topTags(reasons: PickReason[], n: number): string[] {
  const sorted = [...reasons].sort((x, y) => y.weight - x.weight);
  const out: string[] = [];
  for (const r of sorted) {
    if (!out.includes(r.tag)) out.push(r.tag);
    if (out.length >= n) break;
  }
  return out;
}

/** "발볼이 넓은 러너나 평발·과내전 러너" — 태그는 전부 "러너"(받침 없음)로 끝나 조사 "나"가 맞다 */
function joinTags(tags: string[]): string {
  return tags.join('나 ');
}

const AXIS_NAME: Record<AxisKey, string> = {
  fit: '발볼',
  stability: '안정성',
  cushion: '쿠셔닝',
  weight: '무게',
  carbon: '카본 플레이트',
  price: '가격',
  response: '반발력',
  knee: '무릎 부담',
  drop: '드롭',
  durability: '내구성',
};

/**
 * "둘 다 쿠션이 넉넉하고 무게·가격대도 비슷하지만, " — 비슷한 점을 결론 앞에 깐다.
 * 사용자 예시 그대로: "둘 다 쿠셔닝은 좋지만, 발볼·안정성·가격 차이를 고려하면 …".
 */
function composeLead(similar: Similarity[]): string {
  const boths: string[] = [];
  const nouns: string[] = [];
  for (const s of similar) {
    if (!s.lead) continue;
    if ('both' in s.lead) {
      if (boths.length < 2) boths.push(s.lead.both);
    } else if (nouns.length < 2) {
      nouns.push(s.lead.noun);
    }
  }
  if (!boths.length && !nouns.length) return '';
  const clauses: string[] = [];
  if (boths.length) clauses.push(`둘 다 ${boths.join('고 ')}`);
  if (nouns.length) clauses.push(`${boths.length ? `${nouns.join('·')}도` : withJosa(nouns.join('·'), '은/는')} 비슷하`);
  return `${clauses.join('고 ')}지만, `;
}

function composeBottomLine(ctx: Ctx, generation: PairAnalysis['generation']): { bottomLine: string; decisionSummary: string } {
  const { a, b, forA, forB, similar } = ctx;
  const an = fullName(a);
  const bn = fullName(b);
  const strongA = forA.filter((r) => r.weight >= 2);
  const strongB = forB.filter((r) => r.weight >= 2);

  let bottomLine: string;
  let decisionSummary: string;

  if (strongA.length && strongB.length) {
    const tagsA = topTags(strongA, 2);
    const tagsB = topTags(strongB, 2);
    bottomLine = `${composeLead(similar)}${joinTags(tagsA)}에게는 ${an}, ${joinTags(tagsB)}에게는 ${withJosa(bn, '이/가')} 더 맞습니다.`;
    decisionSummary = `${tagsA[0]}는 ${a.name}, ${tagsB[0]}는 ${b.name}`;
  } else if (strongA.length || strongB.length) {
    const winSide: Side = strongA.length ? 'a' : 'b';
    const win = winSide === 'a' ? a : b;
    const lose = winSide === 'a' ? b : a;
    const axes = Array.from(new Set((winSide === 'a' ? strongA : strongB).map((r) => AXIS_NAME[r.axis])));
    const minor = (winSide === 'a' ? forB : forA).map((r) => r.tag);
    bottomLine =
      `${composeLead(similar)}${axes.join('·')}에서 ${withJosa(fullName(win), '이/가')} 앞서고 ${withJosa(fullName(lose), '이/가')} 분명히 앞서는 항목은 없습니다. ` +
      (minor.length
        ? `${joinTags(Array.from(new Set(minor)))}가 아니라면 ${withJosa(win.name, '을/를')} 먼저 신어 보세요.`
        : `둘 중 하나라면 ${withJosa(win.name, '을/를')} 먼저 신어 보세요.`);
    decisionSummary = `${axes.join('·')}에서 ${win.name} 우세`;
  } else {
    const leads = similar.filter((s) => s.lead).map((s) => AXIS_NAME[s.axis]);
    // 여기서는 "모두 비슷해"로 묶으므로 '둘 다 쿠션이 넉넉'류도 축 이름으로 쓴다
    bottomLine =
      `${leads.length ? `${leads.join('·')} 모두 비슷해 ` : ''}데이터로는 우열이 갈리지 않습니다. ` +
      '매장에서 신어 보고 발에 편한 쪽, 또는 할인 폭이 큰 쪽을 고르세요.';
    decisionSummary = '핵심 지표 차이가 작아 착화감·할인가로 고르는 페어';
  }

  if (generation) {
    const newer = generation.newer === 'a' ? a : b;
    const older = generation.newer === 'a' ? b : a;
    const newerStrong = generation.newer === 'a' ? strongA : strongB;
    bottomLine += newerStrong.length
      ? ` ${withJosa(newer.name, '은/는')} ${older.name}의 후속 모델이라, 위 차이가 본인에게 중요하지 않다면 구형을 할인가에 사는 것도 방법입니다.`
      : ` ${withJosa(newer.name, '은/는')} ${older.name}의 후속 모델이지만 수치상 나아진 점이 뚜렷하지 않아, 구형을 할인가에 구할 수 있다면 그쪽도 충분히 합리적입니다.`;
  }

  return { bottomLine, decisionSummary };
}

export function analyzePair(a: Shoe, b: Shoe, category: string): PairAnalysis {
  const ctx: Ctx = { a, b, forA: [], forB: [], similar: [], caveats: [] };
  // 순서 = 결론·목록에서의 우선순위(발볼·안정성·쿠셔닝이 선택을 가장 크게 가른다)
  fitAxis(ctx);
  stabilityAxis(ctx);
  cushionAxis(ctx, category);
  weightAxis(ctx, category);
  carbonAxis(ctx);
  priceAxis(ctx);
  responseAxis(ctx);
  kneeAxis(ctx);
  dropAxis(ctx);
  durabilityAxis(ctx);

  const generation = generationOf(a, b);
  const { bottomLine, decisionSummary } = composeBottomLine(ctx, generation);
  const byWeight = (x: PickReason, y: PickReason) => y.weight - x.weight;
  return {
    generation,
    forA: [...ctx.forA].sort(byWeight),
    forB: [...ctx.forB].sort(byWeight),
    similar: ctx.similar,
    caveats: ctx.caveats,
    bottomLine,
    decisionSummary,
  };
}

// ── 페이지 존재 이유 ─────────────────────────────────────────────────────────

export type PairWorth = {
  index: boolean;
  /** 판정 근거 — 리포트·주석용 */
  basis: string;
};

/**
 * 이 비교 페이지가 독자의 선택을 실제로 바꿀 수 있는가.
 *
 * 색인할 이유가 있는 경우:
 *   1. **같은 라인 세대 비교**(고스트 17 vs 18) — "차이" 검색 의도가 분명하고, "차이가 작으니 구형
 *      할인가로 충분하다"도 독자에게 쓸모 있는 답이다.
 *   2. **검색 노출 이력이 있는 페어**(`pinned`) — 실제로 누군가 찾은 질문이다.
 *   3. **양쪽 모두에 고를 이유가 있다**(진짜 트레이드오프) — 양쪽 각각 선택을 바꿀 만한 차이
 *      (가중치 2+)가 1개 이상. "둘 다 쿠션은 넉넉하지만 가벼운 걸 원하면 A, 발볼이 넓으면 B"가 이 경우다.
 * 그 밖(한쪽이 거의 모든 면에서 앞서거나, 차이가 거의 없는 기계적 조합)은 독자가 이 페이지에서
 * 얻는 것이 신발 상세 두 장을 넘지 않으므로 색인하지 않는다. 페이지는 지우지 않는다(404 사고 방지).
 */
export function assessPairWorth(a: Shoe, b: Shoe, category: string, opts: { pinned?: boolean } = {}): PairWorth {
  const analysis = analyzePair(a, b, category);
  if (analysis.generation) return { index: true, basis: 'generation' };
  if (opts.pinned) return { index: true, basis: 'pinned' };
  const strongA = analysis.forA.filter((r) => r.weight >= 2).length;
  const strongB = analysis.forB.filter((r) => r.weight >= 2).length;
  if (strongA >= 1 && strongB >= 1) return { index: true, basis: 'trade-off' };
  if (strongA === 0 && strongB === 0) return { index: false, basis: 'no-difference' };
  return { index: false, basis: 'one-sided' };
}

// ── FAQ ─────────────────────────────────────────────────────────────────────

const BEGINNER_CATEGORIES = new Set(['입문화', '데일리', '쿠션화', '안정화']);

/** 페어 분석에서 FAQ 를 만든다 — 본문 결론과 같은 판정만 쓴다(본문과 FAQ 가 서로 다른 말을 하지 않게) */
export function buildFaqs(a: Shoe, b: Shoe, category: string, analysis = analyzePair(a, b, category)) {
  const faqs: { question: string; answer: string }[] = [];
  const an = fullName(a);
  const bn = fullName(b);
  const findPick = (axis: AxisKey): { side: Side; reason: PickReason } | null => {
    const ra = analysis.forA.find((r) => r.axis === axis);
    if (ra) return { side: 'a', reason: ra };
    const rb = analysis.forB.find((r) => r.axis === axis);
    return rb ? { side: 'b', reason: rb } : null;
  };
  const nameOf = (side: Side) => (side === 'a' ? an : bn);
  const caveatFor = (prefix: string) => analysis.caveats.find((c) => c.startsWith(prefix));

  faqs.push({ question: `${a.name} vs ${b.name}, 결국 어떤 걸 사야 하나요?`, answer: analysis.bottomLine });

  // 발볼
  const fit = findPick('fit');
  const ta = a.koreanFootFit?.toBoxWidth;
  const tb = b.koreanFootFit?.toBoxWidth;
  if (ta && tb) {
    let answer: string;
    const narrowBoth = caveatFor('둘 다 토박스가 좁은');
    const sim = analysis.similar.find((s) => s.axis === 'fit');
    if (fit) {
      answer = `${withJosa(nameOf(fit.side), '이/가')} 유리합니다(${fit.reason.evidence}).`;
    } else if (narrowBoth) {
      answer = `${narrowBoth}. 발볼이 넓다면 토박스가 넉넉한 다른 모델도 함께 보세요.`;
    } else if (sim && a.koreanFootFit?.wideOptions && b.koreanFootFit?.wideOptions) {
      answer = `${sim.text.replace(/^발볼: /, '')}. 발볼이 넓다면 어느 쪽이든 와이드 버전으로 신어 보세요.`;
    } else {
      answer = `${sim ? sim.text.replace(/^발볼: /, '') : '발볼로는 차이가 없습니다'}.`;
    }
    faqs.push({ question: `${withJosa(a.name, '과/와')} ${b.name} 중 발볼 넓은 러너에게 맞는 건?`, answer });
  }

  // 평발·안정성
  const stab = findPick('stability');
  const stabCaveat = caveatFor('안정성:');
  if (stab) {
    faqs.push({
      question: '평발이라 안정성이 중요한데 어느 쪽이 좋나요?',
      answer: `${withJosa(nameOf(stab.side), '을/를')} 우선 고려하세요(${stab.reason.evidence}). 발이 안쪽으로 무너지는지 애매하면 1분 러닝화 추천으로 확인해 볼 수 있습니다.`,
    });
  } else if (stabCaveat) {
    faqs.push({
      question: '평발이라 안정성이 중요한데 어느 쪽이 좋나요?',
      answer: `${stabCaveat.replace(/^안정성: /, '')}. 평발이 고민이라면 두 신발을 모두 신어 보고 아치가 받쳐지는 쪽을 고르세요.`,
    });
  }

  // 무릎
  const knee = findPick('knee');
  if (knee) {
    faqs.push({
      question: '무릎이 안 좋은데 어떤 걸 신는 게 나을까요?',
      answer: `${withJosa(nameOf(knee.side), '이/가')} 더 낫게 평가됩니다(${knee.reason.evidence}). 통증이 계속되면 신발 교체와 별개로 전문가 상담을 권합니다.`,
    });
  }

  // 가격
  const price = findPick('price');
  const priceSim = analysis.similar.find((s) => s.axis === 'price');
  const priceCaveats = analysis.caveats.filter((c) => c.startsWith('가격:'));
  if (price) {
    faqs.push({ question: '가격 차이는 얼마나 나나요?', answer: `${withJosa(nameOf(price.side), '이/가')} 저렴합니다(${price.reason.evidence}). 실제 구매가는 할인에 따라 달라집니다.` });
  } else if (priceSim) {
    faqs.push({ question: '가격 차이는 얼마나 나나요?', answer: `${priceSim.text.replace(/^가격: /, '')}. 가격으로 고를 이유는 없으니 할인가를 비교해 보세요.` });
  } else if (priceCaveats.length) {
    faqs.push({ question: '가격 차이는 얼마나 나나요?', answer: priceCaveats.map((c) => c.replace(/^가격: /, '')).join('. ') + '.' });
  }

  // 입문자 — 입문·데일리·쿠션·안정화만. 레이싱은 카본 여부로 따로 답한다
  if (BEGINNER_CATEGORIES.has(category)) {
    const cush = findPick('cushion');
    let answer: string;
    if (stab && cush && stab.side !== cush.side) {
      answer = `착지 충격이 걱정이면 ${nameOf(cush.side)}(${cush.reason.evidence}), 발목이 안쪽으로 무너지는 편이면 ${nameOf(stab.side)}(${stab.reason.evidence})가 맞습니다.`;
    } else if (stab || cush) {
      const p = (stab ?? cush)!;
      answer = `입문자에겐 무게보다 쿠셔닝·안정성이 중요합니다. 그 기준으로는 ${withJosa(nameOf(p.side), '이/가')} 낫습니다(${p.reason.evidence}).`;
      // 같은 데이터 안에서 반대 신호가 있으면 함께 적는다(쿠션은 A, 무릎 부담 평가는 B 등)
      if (knee && knee.side !== p.side) answer += ` 다만 무릎 부담 평가는 ${withJosa(nameOf(knee.side), '이/가')} 낫습니다(${knee.reason.evidence}).`;
      if (price && price.side !== p.side && price.reason.weight >= 3) answer += ` 가격은 ${withJosa(nameOf(price.side), '이/가')} 크게 저렴합니다.`;
    } else if (stabCaveat || caveatFor('쿠셔닝:')) {
      answer = '쿠셔닝·안정성 지표가 서로 엇갈려 데이터만으로는 입문자용을 정하기 어렵습니다. 매장에서 두 켤레를 신어 보고 착지가 편하고 발목이 덜 흔들리는 쪽을 고르세요.';
    } else {
      answer = '둘 다 쿠셔닝·안정성이 비슷해 입문자에게 어느 쪽도 무리가 없습니다. 발에 편한 쪽, 할인 폭이 큰 쪽을 고르세요.';
    }
    faqs.push({ question: '러닝 입문자에게는 둘 중 무엇을 추천하나요?', answer });
  } else if (category === '레이싱') {
    const plated = [a, b].filter((s) => s.biomechanics?.carbonPlate);
    const unplated = [a, b].filter((s) => !s.biomechanics?.carbonPlate);
    let answer: string;
    if (plated.length === 2) {
      answer = '둘 다 카본 플레이트 신발이라 종아리·아킬레스건 부담이 큽니다. 일반 트레이너로 기초를 다진 뒤 대회용으로 쓰는 것을 권합니다.';
    } else if (plated.length === 1) {
      answer = `${withJosa(plated[0].name, '은/는')} 카본 플레이트 신발이라 종아리·아킬레스건 부담이 큽니다. 입문자라면 플레이트가 없는 ${withJosa(unplated[0].name, '이/가')} 더 무난합니다.`;
    } else {
      // 슈퍼블라스트처럼 레이싱 카테고리여도 쿠션이 두꺼운 신발이 있다 — 쿠션 점수로 갈라 말한다
      const thin = unplated.filter((s) => (s.specs?.cushioning ?? 0) <= 6).map((s) => s.name);
      answer = thin.length
        ? `둘 다 카본 플레이트가 없어 부담이 덜한 편입니다. 다만 ${thin.length === 2 ? '둘 다' : withJosa(thin[0], '은/는')} 쿠션이 얇은 편이라 장거리 훈련은 데일리 트레이너와 나눠 신으세요.`
        : '둘 다 카본 플레이트가 없고 쿠션도 넉넉한 편이라, 레이싱 카테고리 중에서는 입문자가 신기에 부담이 덜합니다.';
    }
    faqs.push({ question: '입문자가 대회용으로 신어도 되나요?', answer });
  }

  return faqs;
}

// ── 스펙 표 ─────────────────────────────────────────────────────────────────

export function durabilityLabel(shoe: Shoe): string {
  const profile = getShoeDurability(shoe);
  return profile ? `${profile.rangeLabel} (${profile.confidenceLabel})` : '-';
}

function priceCell(s: Shoe): string {
  if (s.price) return formatManwon(s.price);
  const street = s.priceAnalysis?.streetPrice;
  return street ? `국내 정가 없음 (실거래 약 ${formatManwon(street)})` : '국내 정가 없음';
}

export function specRows(a: Shoe, b: Shoe) {
  return [
    { label: '카테고리', a: a.category, b: b.category },
    { label: '가격', a: priceCell(a), b: priceCell(b) },
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
      a: WIDTH_KO[a.koreanFootFit?.toBoxWidth ?? ''] ?? '-',
      b: WIDTH_KO[b.koreanFootFit?.toBoxWidth ?? ''] ?? '-',
    },
    {
      label: '와이드 옵션',
      a: a.koreanFootFit?.wideOptions ? '있음' : '없음',
      b: b.koreanFootFit?.wideOptions ? '있음' : '없음',
    },
    {
      label: '평발 적합성',
      a: COMPAT_KO[a.koreanFootFit?.flatFootCompatibility ?? ''] ?? '-',
      b: COMPAT_KO[b.koreanFootFit?.flatFootCompatibility ?? ''] ?? '-',
    },
    {
      label: '내구성 (아웃솔 기준 범위)',
      a: durabilityLabel(a),
      b: durabilityLabel(b),
    },
  ];
}
