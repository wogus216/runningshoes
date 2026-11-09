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
 *   2. 단일 숫자는 그대로 두고 미검증 추정임을 표시 (임의 오차 밴드 생성 금지)
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

  return { min: base, max: base };
}

export function resolveDurabilityConfidence(text?: string): DurabilityConfidence {
  // mm 마모 시험이나 토박스 등급은 실제 주행 수명 km의 측정이 아니다.
  void text;
  return 'estimated';
}

const LIFETIME_CAVEAT = '기존 에디터의 수명 추정값으로, 원문 재검증 전입니다. 아웃솔 마모 시험 깊이(mm)는 실제 주행 수명(km)으로 환산할 수 없습니다. 개인의 교체 시점을 보장하지 않습니다.';

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
    confidenceLabel: '기존 추정 · 미검증',
    basisLabel: '에디터 입력값',
    caveat: LIFETIME_CAVEAT,
  };
}
