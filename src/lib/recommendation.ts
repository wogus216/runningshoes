import type { CardShoe } from '@/lib/data/shoes';
import { withJosa } from '@/lib/korean';

export type UserProfile = {
  experience?: 'beginner' | 'intermediate' | 'advanced';
  weeklyDistance?: 'low' | 'medium' | 'high'; // ~20km, 20-40km, 40km+
  purpose: 'training' | 'racing' | 'recovery' | 'trail' | 'all';
  footArch?: 'flat' | 'normal' | 'high';
  footWidth: 'narrow' | 'standard' | 'wide';
  injuries?: string[]; // plantarFasciitis, achillesTendinopathy, kneeIssues, shinSplints
  /** 상한이다. 하한은 두지 않는다 — 아래 budgetCeilings 참조 */
  budget: 'low' | 'mid' | 'high'; // ~20만 / ~30만 / 상한 없음
  preferredBrands: string[];
  season?: 'summer' | 'winter' | 'all'; // 계절 선택
  targetPace?: 'slow' | 'medium' | 'fast'; // 목표 페이스
};

/** 세션에 남은 설문이 현재 선택지와 맞는지 확인한다. */
export function isUserProfile(value: unknown): value is UserProfile {
  if (!value || typeof value !== 'object') return false;
  const p = value as Record<string, unknown>;
  const choices: Record<string, readonly string[]> = {
    purpose: ['training', 'racing', 'recovery', 'trail', 'all'],
    footWidth: ['narrow', 'standard', 'wide'],
    budget: ['low', 'mid', 'high'],
  };
  if (!Object.entries(choices).every(([key, options]) => typeof p[key] === 'string' && options.includes(p[key] as string))) return false;
  const legacyChoices: Record<string, readonly string[]> = {
    experience: ['beginner', 'intermediate', 'advanced'],
    weeklyDistance: ['low', 'medium', 'high'],
    footArch: ['flat', 'normal', 'high'],
    targetPace: ['slow', 'medium', 'fast'],
    season: ['summer', 'winter', 'all'],
  };
  if (!Object.entries(legacyChoices).every(([key, options]) => p[key] === undefined || options.includes(p[key] as string))) return false;
  return (p.injuries === undefined || (Array.isArray(p.injuries) && p.injuries.every(i => typeof i === 'string' && Object.hasOwn(legacyInjuryNames, i))))
    && Array.isArray(p.preferredBrands) && p.preferredBrands.every(b => typeof b === 'string');
}

export type RecommendedShoe = CardShoe & {
  matchScore: number;       // 후보 정렬용 우선순위. 성능 점수·개인 적합 확률이 아니다.
  rawScore: number;
  matchReasons: string[];
  matchWarnings: string[];
  detailedReason?: string;
};

// 기존 세션을 읽기 위한 키만 보존한다. 부상·아치 정보는 순위 계산에 사용하지 않는다.
const legacyInjuryNames = {
  plantarFasciitis: '족저근막염',
  achillesTendinopathy: '아킬레스건 통증',
  kneeIssues: '무릎 통증',
  shinSplints: '정강이 통증',
};

// 사용자가 고른 용도와 사이트 분류를 비교한다. 경험·거리·페이스로 성능을 추정하지 않는다.
const purposeCategoryMap: Record<UserProfile['purpose'], string[]> = {
  training: ['데일리', '입문화', '쿠션화', '안정화'],
  racing: ['레이싱'],
  recovery: ['쿠션화', '입문화'],
  trail: ['트레일'],
  all: ['데일리', '입문화', '쿠션화', '안정화'],
};

// 예산은 하한 없이 상한만 적용한다. 미확인 가격은 예산에 맞는 후보로 계산하지 않는다.
const budgetCeilings = { low: 200000, mid: 300000, high: Infinity };

export function recommendShoes(shoes: CardShoe[], profile: UserProfile): RecommendedShoe[] {
  const recommendations: RecommendedShoe[] = [];

  for (const shoe of shoes) {
    if (!shoe.specs) continue;
    const price = shoe.price ?? shoe.priceAnalysis?.msrp;
    if (price === undefined || !Number.isFinite(price) || price <= 0 || price > budgetCeilings[profile.budget]) continue;
    if (profile.purpose === 'trail' ? shoe.category !== '트레일' : shoe.category === '트레일') continue;
    if (profile.purpose === 'recovery' && shoe.category === '레이싱') continue;
    if (profile.footWidth === 'wide' && shoe.koreanFootFit?.wideOptions !== true) continue;

    let priority = 1;
    const reasons = ['예산 범위 내 확인 가격'];
    if (purposeCategoryMap[profile.purpose].includes(shoe.category)) {
      priority += 2;
      reasons.push(`선택 용도의 비교 분류: ${shoe.category}`);
    }
    if (profile.footWidth === 'wide') reasons.push('한국 와이드 옵션 확인');
    if (profile.preferredBrands.includes(shoe.brand)) {
      priority += 1;
      reasons.push('선호 브랜드');
    }

    recommendations.push({
      ...shoe,
      matchScore: priority,
      rawScore: priority,
      matchReasons: reasons,
      matchWarnings: [],
      detailedReason: `${withJosa(`${shoe.brand} ${shoe.name}`, '은/는')} ${shoe.category} 분류이며 확인한 한국 정가는 ${price.toLocaleString('ko-KR')}원입니다. 용도 분류가 일치하는 후보를 먼저 모으고, 저장된 브랜드 선호와 확인 가격 순서로 비교합니다. 모델별 측정 조건과 착화 관련 원문은 상세 페이지에서 확인하세요.`,
    });
  }

  return recommendations.sort((a, b) =>
    b.rawScore - a.rawScore
    || (a.price ?? a.priceAnalysis!.msrp!) - (b.price ?? b.priceAnalysis!.msrp!)
    || a.slug.localeCompare(b.slug)
  ).slice(0, 10);
}
