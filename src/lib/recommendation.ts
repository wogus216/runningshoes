import type { CardShoe } from '@/lib/data/shoes';
import { withJosa } from '@/lib/korean';

export type UserProfile = {
  experience: 'beginner' | 'intermediate' | 'advanced';
  weeklyDistance: 'low' | 'medium' | 'high'; // ~20km, 20-40km, 40km+
  purpose: 'training' | 'racing' | 'recovery' | 'trail' | 'all';
  footArch: 'flat' | 'normal' | 'high';
  footWidth: 'narrow' | 'standard' | 'wide';
  injuries: string[]; // plantarFasciitis, achillesTendinopathy, kneeIssues, shinSplints
  /** 상한이다. 하한은 두지 않는다 — 아래 budgetRanges 주석 참조 */
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
    experience: ['beginner', 'intermediate', 'advanced'],
    weeklyDistance: ['low', 'medium', 'high'],
    purpose: ['training', 'racing', 'recovery', 'trail', 'all'],
    footArch: ['flat', 'normal', 'high'],
    footWidth: ['narrow', 'standard', 'wide'],
    budget: ['low', 'mid', 'high'],
  };
  if (!Object.entries(choices).every(([key, options]) => typeof p[key] === 'string' && options.includes(p[key] as string))) return false;
  if (p.targetPace !== undefined && !['slow', 'medium', 'fast'].includes(p.targetPace as string)) return false;
  if (p.season !== undefined && !['summer', 'winter', 'all'].includes(p.season as string)) return false;
  return Array.isArray(p.injuries) && p.injuries.every(i => typeof i === 'string' && Object.hasOwn(legacyInjuryNames, i))
    && Array.isArray(p.preferredBrands) && p.preferredBrands.every(b => typeof b === 'string');
}

export type RecommendedShoe = CardShoe & {
  matchScore: number;       // 정규화된 점수 (0-100)
  rawScore: number;         // 원시 점수
  matchReasons: string[];
  matchWarnings: string[];
  detailedReason?: string;  // 상세 추천 이유
  comparisonToAvg?: {       // 평균 대비 스펙 비교
    cushioning: number;
    weight: number;
    durability?: number;
  };
};

// 기존 세션을 읽기 위한 키만 보존한다. 부상·아치 정보는 순위 계산에 사용하지 않는다.
const legacyInjuryNames = {
  plantarFasciitis: '족저근막염',
  achillesTendinopathy: '아킬레스건 통증',
  kneeIssues: '무릎 통증',
  shinSplints: '정강이 통증',
};

/**
 * 느린 페이스·회복 러닝에는 맞지 않는다고 데이터에 적힌 신발인가.
 * 규칙 9·22·25 의 쿠션 가점은 이 신발에 주지 않는다 — 가점이 용도를 보지 않아
 * 레이싱화(쿠션 10)와 "느린 회복 러닝 비추천"인 신발이 느린 페이스·회복 프로필에 올라왔다.
 */
const SLOW_RUN_UNSUITED = /느린|천천|회복|조깅|이지|리커버리|LSD/;
function unsuitedForSlowRuns(shoe: CardShoe): boolean {
  return shoe.category === '레이싱' || (shoe.targetUsers?.notRecommended ?? []).some((text) => SLOW_RUN_UNSUITED.test(text));
}

// 페이스 범위 매핑
const paceRanges = {
  slow: { label: '6분대 이상', categories: ['쿠션화', '입문화'] },
  medium: { label: '5-6분대', categories: ['데일리', '쿠션화'] },
  fast: { label: '5분 미만', categories: ['레이싱'] },
};

const experienceMap = {
  beginner: ['입문 러너', '초보', '입문자', '처음'],
  intermediate: ['중급 러너', '중급', '하프 마라톤'],
  advanced: ['상급 러너', '엘리트', '마라톤', '서브'],
};

const purposeMap = {
  training: ['훈련', '템포', '데일리', '트레이닝'],
  racing: ['레이싱', '대회', '레이스', '기록'],
  recovery: ['회복', '리커버리', '조깅'],
  trail: ['트레일', '산길', '오프로드', '임도'],
  all: ['올라운더', '다목적', '올라운드'],
};

// 경험-카테고리 직접 매핑
const experienceCategoryMap: Record<string, string[]> = {
  beginner: ['입문화', '쿠션화', '안정화'],
  intermediate: ['데일리', '쿠션화', '안정화'],
  advanced: ['레이싱', '데일리'],
};

// 목적-카테고리 직접 매핑
const purposeCategoryMap: Record<string, string[]> = {
  training: ['데일리', '입문화', '쿠션화'],
  racing: ['레이싱'],
  recovery: ['쿠션화', '입문화'],
  trail: ['트레일'],
  all: ['데일리', '입문화', '쿠션화'],
};

/*
 * 주간 거리 → 어울리는 카테고리.
 *
 * 예전에는 weeklyDistance 가 'high' 일 때만(내구성 가점) 쓰였고, low·medium 은 점수에
 * 아무 영향이 없었다 — 실측으로 low↔medium 을 바꿔도 상위 10개가 한 개도 안 바뀌었다.
 * 아홉 개 질문 중 하나가 대부분의 사용자에게 아무 일도 하지 않고 있었다는 뜻이다.
 */
const distanceCategoryMap: Record<string, string[]> = {
  low: ['입문화', '쿠션화'],
  medium: ['데일리', '쿠션화'],
  high: ['데일리', '레이싱'],
};

/*
 * 예산은 '상한'이다. 하한을 두지 않는다.
 *
 * 예전 값은 low 0~20만 / mid 15~30만 / high 20만~∞ 였다. 세 구간이 서로 겹쳐서
 * 18만원짜리는 low·mid 양쪽에, 25만원짜리는 mid·high 양쪽에 걸렸다 — 사용자는 어느 걸
 * 골라야 하는지 알 수 없었다. 게다가 하한 때문에 '15-30만원'을 고르면 14만원짜리 좋은
 * 신발이 아예 후보에서 빠졌다. 예산이라는 말의 뜻과 반대다.
 *
 * 카탈로그 분포(130종): 20만 이하 54 · 20~30만 59 · 30만 초과 17.
 */
const budgetRanges = {
  low: { min: 0, max: 200000 },
  mid: { min: 0, max: 300000 },
  high: { min: 0, max: Infinity },
};

/** 가성비 계산의 기준선. 상한이 없는 예산에서도 나눗셈이 NaN 이 되지 않게 한다 */
const PRICE_CEILING = 400000;

export function recommendShoes(shoes: CardShoe[], profile: UserProfile): RecommendedShoe[] {
  const recommendations: RecommendedShoe[] = [];

  for (const shoe of shoes) {
    // 스펙이 없는 신발은 제외
    if (!shoe.specs) continue;

    let score = 0;
    const reasons: string[] = [];
    const warnings: string[] = [];

    // 아치·부상별 적합 등급에는 모델별 임상 근거가 연결돼 있지 않다.
    // 카테고리는 러닝 용도로만 비교하며, 기존 세션의 건강 정보로 가감점하지 않는다.
    const fitsCategory = (map: Record<string, string[]>, key: string) =>
      map[key]?.includes(shoe.category);

    // 1. 예산 필터 (필수) - 상한+하한 모두 체크
    const price = shoe.price ?? shoe.priceAnalysis?.msrp;
    // 한국 가격이 미확인인 제품은 예산을 검증할 수 없다.
    if (price === undefined || !Number.isFinite(price) || price <= 0) continue;
    const budgetRange = budgetRanges[profile.budget];
    if (price > 0 && (price > budgetRange.max || price < budgetRange.min)) {
      continue; // 예산 범위 밖 제외
    }
    if (price > 0 && price >= budgetRange.min && price <= budgetRange.max) {
      score += 10;
      reasons.push('예산 범위 내');
    }

    // 노면과 용도는 가점보다 먼저 적용한다. 적은 후보를 다른 용도의 신발로 채우지 않는다.
    if (profile.purpose === 'trail' ? shoe.category !== '트레일' : shoe.category === '트레일') continue;
    if (profile.purpose === 'recovery' && shoe.category === '레이싱') continue;

    // 데이터에 입문자 비추천이 명시된 제품을 경험 가점으로 다시 올리지 않는다.
    if (profile.experience === 'beginner' && shoe.targetUsers?.notRecommended.some(text =>
      /^(입문|초보)(?:\s*러너|자)?$/.test(text.trim())
    )) continue;

    // 2. 발볼 너비 체크
    if (shoe.koreanFootFit?.toBoxWidth) {
      if (profile.footWidth === 'wide' && shoe.koreanFootFit.toBoxWidth === 'narrow') {
        if (shoe.koreanFootFit.wideOptions) {
          score += 5;
          reasons.push('와이드 옵션 제공');
        } else {
          continue; // 넓은 발에 좁은 일반판만 있는 모델은 제외
        }
      } else if (profile.footWidth === shoe.koreanFootFit.toBoxWidth) {
        score += 15;
        reasons.push('발볼 너비 적합');
      } else if (shoe.koreanFootFit.wideOptions && profile.footWidth === 'wide') {
        score += 10;
        reasons.push('와이드 옵션 제공');
      }
    }

    // 5. 경험 수준에 따른 추천 매칭 (키워드 + 카테고리 직접 매핑)
    const expLabel = profile.experience === 'beginner' ? '입문자' : profile.experience === 'intermediate' ? '중급자' : '상급자';
    if (shoe.targetUsers?.recommended) {
      const keywords = experienceMap[profile.experience];
      const hasMatch = shoe.targetUsers.recommended.some(rec =>
        keywords.some(kw => rec.includes(kw))
      );
      if (hasMatch) {
        score += 12;
        reasons.push(`${expLabel}에게 추천`);
      }
    }
    // 카테고리 직접 매핑 (키워드 없어도 카테고리로 매칭)
    if (fitsCategory(experienceCategoryMap, profile.experience)) {
      score += 10;
      reasons.push(`${expLabel} 적합 카테고리`);
    }

    // 6. 목적에 따른 매칭 (키워드 + 카테고리 직접 매핑)
    const purposeLabels: Record<string, string> = {
      training: '훈련용',
      racing: '레이싱용',
      recovery: '회복용',
      trail: '트레일용',
      all: '다목적',
    };
    if (shoe.targetUsers?.recommended) {
      const keywords = purposeMap[profile.purpose];
      const hasMatch = shoe.targetUsers.recommended.some(rec =>
        keywords.some(kw => rec.includes(kw))
      );
      if (hasMatch) {
        // racing 목적인데 카테고리가 레이싱이 아니면 키워드 보너스 축소
        if (profile.purpose === 'racing' && shoe.category !== '레이싱') {
          score += 8;
        } else {
          score += 22;
        }
        reasons.push(`${purposeLabels[profile.purpose]}으로 적합`);
      }
    }
    // 카테고리 직접 매핑 (레이싱·트레일은 대폭 강화 — 지형/용도가 다르면 대체재가 없다)
    if (fitsCategory(purposeCategoryMap, profile.purpose)) {
      const categoryBoost =
        profile.purpose === 'racing' || profile.purpose === 'trail' ? 35 : 8;
      score += categoryBoost;
      reasons.push(`${purposeLabels[profile.purpose]} 카테고리`);
    }

    // 8. 레이싱 목적이면 카본 플레이트 가점
    if (profile.purpose === 'racing' && shoe.biomechanics?.carbonPlate) {
      score += 15;
      reasons.push('카본 플레이트 탑재');
    }

    // 9. 회복 목적이면 쿠셔닝 가점
    if (profile.purpose === 'recovery' && shoe.specs.cushioning >= 8 && !unsuitedForSlowRuns(shoe)) {
      score += 10;
      reasons.push('높은 쿠셔닝');
    }

    /*
     * 10-b. 주간 거리에 어울리는 카테고리 (low·medium 도 결과에 반영된다)
     *
     * 가중치 14 는 다른 축(경험 10~12, 목적 8~35)과 같은 눈금에 맞춘 값이다.
     * 처음에 8 로 넣었더니 상위 10개가 1개밖에 안 바뀌어 사실상 없는 것과 같았다.
     *
     * ⚠️ 불일치 감점(-6)은 넣었다가 걷어냈다. 이 맵에 없는 카테고리가 통째로 눌리는데,
     * 거기에 안정화 18종과 30만원 이상 17종 중 14종(레이싱)이 걸렸다 —
     * 평발 프로필에서 안정화가 0/10 이 되고, 예산 '상한 없음'이 '30만원까지'와
     * 결과가 같아졌다(둘 다 실측). 거리는 가점으로만 말한다.
     */
    if (fitsCategory(distanceCategoryMap, profile.weeklyDistance)) {
      const distanceLabels: Record<string, string> = {
        low: '주 20km 미만',
        medium: '주 20~40km',
        high: '주 40km 이상',
      };
      score += 14;
      reasons.push(`${distanceLabels[profile.weeklyDistance]}에 맞는 유형`);
    }

    // 11. 선호 브랜드 가점
    if (profile.preferredBrands.length > 0 && profile.preferredBrands.includes(shoe.brand)) {
      score += 5;
      reasons.push('선호 브랜드');
    }

    // 12. 가성비 점수 반영
    if (shoe.priceAnalysis?.valueRating) {
      score += shoe.priceAnalysis.valueRating;
    }

    // 13. 계절 맞춤 추천
    if (profile.season && profile.season !== 'all') {
      if (profile.season === 'winter' && shoe.koreanFootFit?.winterCompatibility) {
        const winterLevel = shoe.koreanFootFit.winterCompatibility;
        if (winterLevel === 'excellent') {
          score += 15;
          reasons.push('겨울 러닝에 최적');
        } else if (winterLevel === 'good') {
          score += 10;
          reasons.push('겨울 러닝에 적합');
        } else if (winterLevel === 'poor') {
          score -= 10;
        }
      }
      if (profile.season === 'summer') {
        // 여름 적합도 데이터가 있는 경우
        if (shoe.koreanFootFit?.summerCompatibility) {
          const summerLevel = shoe.koreanFootFit.summerCompatibility;
          if (summerLevel === 'excellent') {
            score += 15;
            reasons.push('여름 러닝에 최적');
          } else if (summerLevel === 'good') {
            score += 10;
            reasons.push('여름 러닝에 적합');
          } else if (summerLevel === 'poor') {
            score -= 10;
          }
        }
      }
    }

    // 14. 페이스 기반 추천 (강화: fast에 레이싱 특화)
    if (profile.targetPace) {
      const paceCategories = paceRanges[profile.targetPace].categories;
      if (paceCategories.includes(shoe.category)) {
        score += 25;
        reasons.push(`${paceRanges[profile.targetPace].label} 페이스에 적합`);
      }
      // 빠른 페이스에는 카본 플레이트, 가벼운 무게, 높은 반응성
      if (profile.targetPace === 'fast') {
        if (shoe.biomechanics?.carbonPlate) {
          score += 15;
          reasons.push('카본 플레이트로 스피드 지원');
        }
        if (shoe.specs.weight && shoe.specs.weight < 220) {
          score += 8;
        }
        if (shoe.specs.responsiveness && shoe.specs.responsiveness >= 8) {
          score += 8;
        }
      }
    }

    // 14-1. 느린 페이스를 골랐거나 회복 목적인데 느린·회복 러닝에 맞지 않는다고 적힌 신발은 감점한다.
    // 가점 규칙들은 막았지만 예산·경험·카테고리 같은 일반 적합 점수로 상위 10에 남는 경로가 있었다
    // (디비에이트 나이트로 4: 느린 페이스 프로필 405개 중 69개, 회복 목적+빠른 페이스 13개). 레이싱 목적은 대상이 아니다.
    if ((profile.targetPace === 'slow' || profile.purpose === 'recovery') && profile.purpose !== 'racing' && unsuitedForSlowRuns(shoe)) {
      score -= 20;
    }

    // 15. 무게 기반 점수 (경험별 선호)
    if (shoe.specs.weight) {
      if (profile.experience === 'beginner' && shoe.specs.weight >= 250 && shoe.specs.weight <= 310) {
        score += 5;
        reasons.push('입문자 적정 무게');
      } else if (profile.experience === 'advanced' && shoe.specs.weight < 230) {
        score += 8;
        reasons.push('가벼운 무게');
      }
    }

    // 15-1. 상급자 전용 가점 (레이싱/고반응성 신발 우대)
    if (profile.experience === 'advanced') {
      if (shoe.category === '레이싱') {
        score += 25;
        reasons.push('상급자에 적합한 레이싱화');
      }
      if (shoe.specs.responsiveness && shoe.specs.responsiveness >= 8) {
        score += 8;
        reasons.push('높은 반응성');
      }
      if (shoe.biomechanics?.carbonPlate) {
        score += 8;
        reasons.push('카본 플레이트 탑재');
      }
    }

    // 16. 반응성 점수 (목적별)
    if (shoe.specs.responsiveness) {
      if (profile.purpose === 'racing' && shoe.specs.responsiveness >= 8) {
        score += 10;
        reasons.push('뛰어난 반응성');
      } else if (profile.purpose === 'recovery' && shoe.specs.responsiveness <= 5) {
        score += 5;
        reasons.push('회복에 적합한 부드러운 착지감');
      }
    }

    // 18. 쿠셔닝 보너스 (입문자/회복)
    if (shoe.specs.cushioning >= 8) {
      if (profile.experience === 'beginner') {
        score += 5;
        reasons.push('입문자에게 좋은 쿠셔닝');
      }
    }

    // 19. 평점 보너스 (4.5 이상)
    if (shoe.rating >= 4.5) {
      score += 3;
      reasons.push('높은 에디터 평점');
    }

    // 21. 프리미엄 레이싱 보너스 (상급자 + 빠른 페이스 + 높은 예산)
    if (profile.experience === 'advanced' && profile.targetPace === 'fast' && profile.budget === 'high') {
      if (shoe.biomechanics?.carbonPlate && shoe.specs.weight && shoe.specs.weight < 200) {
        score += 10;
        reasons.push('엘리트 레이싱 스펙');
      }
    }

    // 22. 맥스 쿠셔닝 보너스 (회복/느린 페이스 + 높은 쿠셔닝)
    if ((profile.purpose === 'recovery' || profile.targetPace === 'slow') && shoe.specs.cushioning >= 9 && !unsuitedForSlowRuns(shoe)) {
      score += 8;
      reasons.push('최상급 쿠셔닝');
    }

    /*
     * 24. 가격 효율성 (같은 예산 안에서 쌀수록 가점)
     *
     * 상한이 Infinity 인 예산에서는 (∞ - price) / (∞ - min) 이 NaN 이 되어 이 가점이
     * 통째로 죽어 있었다. 카탈로그 최고가(399,000)를 덮는 기준선으로 바꾼다.
     */
    if (price > 0 && price <= budgetRange.max) {
      const ceiling = Number.isFinite(budgetRange.max)
        ? budgetRange.max
        : PRICE_CEILING;
      const savingsRatio = (ceiling - price) / ceiling;
      if (savingsRatio > 0.3) {
        score += Math.round(savingsRatio * 6);
        reasons.push('예산 대비 효율적');
      }
    }

    // 25. 최고 쿠셔닝(10) 특별 보너스
    if (shoe.specs.cushioning === 10 && !unsuitedForSlowRuns(shoe) && (profile.purpose === 'recovery' || profile.targetPace === 'slow' || (profile.experience === 'beginner' && profile.weeklyDistance === 'low'))) {
      score += 10;
      reasons.push('최상급 쿠셔닝');
    }

    // 26. 카본 레이싱 + 높은 안정성 조합 (안정적 레이싱 니치)
    if (shoe.biomechanics?.carbonPlate && shoe.specs.stability >= 7 && profile.purpose === 'racing') {
      score += 6;
      reasons.push('안정적인 카본 레이싱');
    }

    // 점수가 양수인 신발만 추천
    if (score > 0) {
      recommendations.push({
        ...shoe,
        matchScore: 0, // 나중에 정규화
        rawScore: score,
        matchReasons: Array.from(new Set(reasons)).slice(0, 5),
        matchWarnings: warnings,
      });
    }
  }

  // 점수 정규화 (0-100 범위)
  if (recommendations.length === 0) {
    return [];
  }

  const maxScore = Math.max(...recommendations.map(r => r.rawScore));
  const minScore = Math.min(...recommendations.map(r => r.rawScore));
  const scoreRange = maxScore - minScore;
  const normalized = recommendations.map(r => ({
    ...r,
    matchScore: scoreRange === 0 ? 100 : Math.round(30 + ((r.rawScore - minScore) / scoreRange) * 70),
  })).sort((a, b) => b.matchScore - a.matchScore);

  // ブランド 다양성은 유지하되 표시 점수가 음수가 되지 않게 한다.
  const brandOrder: Record<string, number> = {};
  const result = normalized.map(r => {
    brandOrder[r.brand] = (brandOrder[r.brand] || 0) + 1;
    const penalty = 5 * (brandOrder[r.brand] - 1);
    return { ...r, matchScore: Math.max(0, r.matchScore - penalty) };
  }).sort((a, b) => b.matchScore - a.matchScore).slice(0, 10);

  // ‘추천 신발 평균’은 실제 결과에 나온 신발을 기준으로 한다.
  const avgSpecs = {
    cushioning: result.reduce((sum, r) => sum + r.specs!.cushioning, 0) / result.length,
    weight: result.reduce((sum, r) => sum + r.specs!.weight, 0) / result.length,
    durability: (() => {
      const known = result.flatMap(r => r.specs?.durability === undefined ? [] : [r.specs.durability]);
      return known.length ? known.reduce((sum, n) => sum + n, 0) / known.length : undefined;
    })(),
  };
  return result.map(r => {
    const comparisonToAvg = {
      cushioning: Math.round(r.specs!.cushioning - avgSpecs.cushioning),
      weight: Math.round(r.specs!.weight - avgSpecs.weight),
      durability: r.specs!.durability !== undefined && avgSpecs.durability !== undefined
        ? Math.round(r.specs!.durability - avgSpecs.durability) : undefined,
    };
    return { ...r, comparisonToAvg, detailedReason: generateDetailedReason(r, profile, comparisonToAvg) };
  });
}

// 상세 추천 이유 생성 함수
function generateDetailedReason(
  shoe: RecommendedShoe,
  profile: UserProfile,
  comparison: { cushioning: number; weight: number; durability?: number }
): string {
  const parts: string[] = [];

  // 기본 소개
  parts.push(`${withJosa(`${shoe.brand} ${shoe.name}`, '은/는')} ${shoe.category} 카테고리의 신발입니다.`);

  // 경험 수준에 따른 설명
  if (profile.experience === 'beginner') {
    parts.push('입문 러너는 쿠셔닝과 착화감을 함께 확인해보세요.');
  } else if (profile.experience === 'advanced' && shoe.biomechanics?.carbonPlate) {
    parts.push('카본 플레이트가 탑재되어 있습니다.');
  }

  // 스펙 비교 설명
  const specComparisons: string[] = [];
  if (comparison.cushioning > 0) {
    specComparisons.push(`쿠셔닝이 추천 평균보다 ${comparison.cushioning}점 높습니다`);
  }
  if (comparison.weight < -10) {
    specComparisons.push(`무게가 추천 평균보다 ${Math.abs(comparison.weight)}g 가볍습니다`);
  }

  if (specComparisons.length > 0) {
    parts.push(specComparisons.join('. ') + '.');
  }

  // 가성비 설명
  if (shoe.priceAnalysis?.valueRating && shoe.priceAnalysis.valueRating >= 8) {
    parts.push('가격 대비 성능이 뛰어나 가성비가 좋습니다.');
  }

  return parts.join(' ');
}
