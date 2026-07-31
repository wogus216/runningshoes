/**
 * 내구성(수명) 표기 단일 진실 소스.
 *
 * 사이트는 자체 랩 테스트를 하지 않는다. specs.durability의 단일 숫자를 그대로
 * 노출하면 "600km"가 실측치처럼 읽히고, 이는 교체 주기 검증 글
 * (/blog/running-shoe-500km-replacement-myth-2026)의 결론과 정면으로 충돌한다.
 * → 모든 표시 표면은 이 모듈이 만든 **범위 + 근거 등급**을 쓴다.
 *
 * 범위 우선순위
 *   1. detailedSpecs.durability에 이미 범위가 적혀 있으면 그대로 사용 (에디터 작성)
 *   2. 단일 숫자면 밴드(±50/±100km)를 씌워 추정 범위로 변환
 */

export const REPLACEMENT_GUIDE_PATH = '/blog/running-shoe-500km-replacement-myth-2026';

export type DurabilityConfidence = 'measured' | 'estimated';

export type DurabilityProfile = {
  min: number;
  max: number;
  /** '500~700km' */
  rangeLabel: string;
  /** 정규화·정렬처럼 단일 숫자가 필요한 곳 전용 */
  mid: number;
  confidence: DurabilityConfidence;
  /** '랩 실측 기반' | '추정' */
  confidenceLabel: string;
  /** 이 범위가 무엇의 수명인지 */
  basisLabel: string;
  /** 폼 종류에 따른 주의 문구 (미드솔은 아웃솔과 따로 죽는다) */
  caveat: string;
};

/** 외부 랩(RunRepeat 등)의 마모 측정치가 근거로 적혀 있는지 */
const MEASURED_PATTERN = /실측|[\d.]+\s*mm|\d\s*\/\s*5/;
/** 추정·전언임을 스스로 밝힌 표기 */
const HEDGED_PATTERN = /추정|예상|미게시|미확인|없음|미검증|보고|공식 권장|공식 설계/;

function bandFor(km: number): number {
  return km < 400 ? 50 : 100;
}

/**
 * detailedSpecs.durability 문자열 + specs.durability 숫자에서 범위를 뽑는다.
 * 둘 다 없으면 null.
 */
export function resolveDurabilityRange(
  km?: number,
  text?: string
): { min: number; max: number } | null {
  const explicit = text?.match(/(\d{2,4})\s*[-~]\s*(\d{2,4})\s*km/);
  if (explicit) {
    const min = Number(explicit[1]);
    const max = Number(explicit[2]);
    if (min > 0 && max >= min) return { min, max };
  }

  const single = text?.match(/(\d{2,4})\s*km/);
  const base = single ? Number(single[1]) : km;
  if (!base || base <= 0) return null;

  const band = bandFor(base);
  return { min: Math.max(base - band, 50), max: base + band };
}

export function resolveDurabilityConfidence(text?: string): DurabilityConfidence {
  if (!text) return 'estimated';
  if (HEDGED_PATTERN.test(text)) return 'estimated';
  return MEASURED_PATTERN.test(text) ? 'measured' : 'estimated';
}

const CARBON_CAVEAT =
  '카본·PEBA 레이서는 아웃솔이 멀쩡해도 미드솔 성능이 먼저 꺾입니다. 450km 실도로 연구에서 PEBA 미드솔은 러닝 이코노미가 2.28% 나빠졌습니다 — 기록을 노린다면 300~450km 안에서 판단하세요.';

const FOAM_CAVEAT =
  'EVA·슈퍼크리티컬 폼은 같은 450km 연구에서 효율 손실이 없었습니다. 위 범위는 상한이 아니라 참고선이고, 실제 기준은 아웃솔 마모·미드솔 주름·새로 생긴 통증입니다.';

type ProfileInput = {
  /** specs.durability */
  km?: number;
  /** detailedSpecs.durability (있으면 범위·근거 판정에 우선 사용) */
  text?: string;
  /** 사전 계산된 범위 (CardShoe 등 detailedSpecs가 없는 경량 타입용) */
  range?: readonly [number, number];
  carbonPlate?: boolean;
};

/** Shoe / CardShoe 어느 쪽이 와도 같은 범위가 나오도록 하는 표시용 진입점 */
type DurabilitySource = {
  specs?: { durability?: number };
  biomechanics?: { carbonPlate?: boolean };
  detailedSpecs?: { durability?: string };
  durabilityRange?: readonly [number, number];
};

export function getShoeDurability(shoe: DurabilitySource): DurabilityProfile | null {
  return getDurabilityProfile({
    km: shoe.specs?.durability,
    text: shoe.detailedSpecs?.durability,
    range: shoe.durabilityRange,
    carbonPlate: shoe.biomechanics?.carbonPlate,
  });
}

export function getDurabilityProfile(input: ProfileInput): DurabilityProfile | null {
  const range = input.range
    ? { min: input.range[0], max: input.range[1] }
    : resolveDurabilityRange(input.km, input.text);
  if (!range) return null;

  const confidence = resolveDurabilityConfidence(input.text);

  return {
    min: range.min,
    max: range.max,
    rangeLabel: range.min === range.max ? `${range.max}km` : `${range.min}~${range.max}km`,
    mid: Math.round((range.min + range.max) / 2),
    confidence,
    confidenceLabel: confidence === 'measured' ? '랩 실측 기반' : '추정',
    basisLabel: '아웃솔 마모 기준',
    caveat: input.carbonPlate ? CARBON_CAVEAT : FOAM_CAVEAT,
  };
}
