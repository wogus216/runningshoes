import type { Shoe } from '@/types/shoe';

export type UserProfile = {
  experience: 'beginner' | 'intermediate' | 'advanced';
  weeklyDistance: 'low' | 'medium' | 'high'; // ~20km, 20-40km, 40km+
  purpose: 'training' | 'racing' | 'recovery' | 'all';
  footArch: 'flat' | 'normal' | 'high';
  footWidth: 'narrow' | 'standard' | 'wide';
  injuries: string[]; // plantarFasciitis, achillesTendinopathy, kneeIssues, shinSplints
  budget: 'low' | 'mid' | 'high'; // ~15만, 15-25만, 25만+
  preferredBrands: string[];
};

export type RecommendedShoe = Shoe & {
  matchScore: number;       // 정규화된 점수 (0-100)
  rawScore: number;         // 원시 점수
  matchReasons: string[];
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
  all: ['올라운더', '다목적', '올라운드'],
};

const budgetRanges = {
  low: { min: 0, max: 150000 },
  mid: { min: 150000, max: 250000 },
  high: { min: 250000, max: Infinity },
};

export function recommendShoes(shoes: Shoe[], profile: UserProfile): RecommendedShoe[] {
  const recommendations: RecommendedShoe[] = [];

  for (const shoe of shoes) {
    // 스펙이 없는 신발은 제외
    if (!shoe.specs) continue;

    let score = 0;
    const reasons: string[] = [];

    // 1. 예산 필터 (필수)
    const price = shoe.priceAnalysis?.msrp || shoe.price || 0;
    const budgetRange = budgetRanges[profile.budget];
    if (price > 0 && price > budgetRange.max) {
      continue; // 예산 초과 시 제외
    }
    if (price > 0 && price >= budgetRange.min && price <= budgetRange.max) {
      score += 10;
      reasons.push('예산 범위 내');
    }

    // 2. 발볼 너비 체크
    if (shoe.koreanFootFit?.toBoxWidth) {
      if (profile.footWidth === 'wide' && shoe.koreanFootFit.toBoxWidth === 'narrow') {
        score -= 20;
        reasons.push('발볼이 좁아 맞지 않을 수 있음');
      } else if (profile.footWidth === shoe.koreanFootFit.toBoxWidth) {
        score += 15;
        reasons.push('발볼 너비 적합');
      } else if (shoe.koreanFootFit.wideOptions && profile.footWidth === 'wide') {
        score += 10;
        reasons.push('와이드 옵션 제공');
      }
    }

    // 3. 평발/아치 호환성
    if (profile.footArch === 'flat' && shoe.koreanFootFit?.flatFootCompatibility) {
      const compatibility = shoe.koreanFootFit.flatFootCompatibility;
      if (compatibility === 'excellent') {
        score += 20;
        reasons.push('평발에 매우 적합');
      } else if (compatibility === 'good') {
        score += 10;
        reasons.push('평발에 적합');
      } else if (compatibility === 'poor') {
        score -= 15;
        reasons.push('평발에 부적합');
      }
    }

    // 4. 부상 예방 체크
    if (profile.injuries.length > 0 && shoe.injuryPrevention) {
      const goodLevels = ['excellent', 'good'];
      const badLevels = ['warning', 'caution'];

      for (const injury of profile.injuries) {
        const level = shoe.injuryPrevention[injury as keyof typeof shoe.injuryPrevention];
        if (level) {
          if (goodLevels.includes(level)) {
            score += 15;
            const injuryLabels: Record<string, string> = {
              plantarFasciitis: '족저근막염',
              achillesTendinopathy: '아킬레스',
              kneeIssues: '무릎',
              shinSplints: '정강이',
            };
            reasons.push(`${injuryLabels[injury]} 예방에 좋음`);
          } else if (badLevels.includes(level)) {
            score -= 20;
          }
        }
      }
    }

    // 5. 경험 수준에 따른 추천 매칭
    if (shoe.targetUsers?.recommended) {
      const keywords = experienceMap[profile.experience];
      const hasMatch = shoe.targetUsers.recommended.some(rec =>
        keywords.some(kw => rec.includes(kw))
      );
      if (hasMatch) {
        score += 20;
        reasons.push(`${profile.experience === 'beginner' ? '입문자' : profile.experience === 'intermediate' ? '중급자' : '상급자'}에게 추천`);
      }
    }

    // 6. 목적에 따른 매칭
    if (shoe.targetUsers?.recommended) {
      const keywords = purposeMap[profile.purpose];
      const hasMatch = shoe.targetUsers.recommended.some(rec =>
        keywords.some(kw => rec.includes(kw))
      );
      if (hasMatch) {
        score += 15;
        const purposeLabels = {
          training: '훈련용',
          racing: '레이싱용',
          recovery: '회복용',
          all: '다목적',
        };
        reasons.push(`${purposeLabels[profile.purpose]}으로 적합`);
      }
    }

    // 7. 카테고리 매칭
    const categoryMatch = {
      beginner: ['입문화', '쿠션화'],
      intermediate: ['데일리', '쿠션화'],
      advanced: ['레이싱', '데일리'],
    };
    if (categoryMatch[profile.experience]?.includes(shoe.category)) {
      score += 10;
    }

    // 8. 레이싱 목적이면 카본 플레이트 가점
    if (profile.purpose === 'racing' && shoe.biomechanics?.carbonPlate) {
      score += 10;
      reasons.push('카본 플레이트 탑재');
    }

    // 9. 회복 목적이면 쿠셔닝 가점
    if (profile.purpose === 'recovery' && shoe.specs.cushioning >= 8) {
      score += 10;
      reasons.push('높은 쿠셔닝');
    }

    // 10. 주간 거리에 따른 내구성 체크
    if (profile.weeklyDistance === 'high' && shoe.specs.durability) {
      if (shoe.specs.durability >= 500) {
        score += 10;
        reasons.push('내구성 우수');
      }
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

    // 점수가 양수인 신발만 추천
    if (score > 0) {
      recommendations.push({
        ...shoe,
        matchScore: 0, // 나중에 정규화
        rawScore: score,
        matchReasons: reasons.filter(r => !r.includes('부적합') && !r.includes('맞지 않을')),
      });
    }
  }

  // 점수 정규화 (0-100 범위)
  if (recommendations.length === 0) {
    return [];
  }

  const maxScore = Math.max(...recommendations.map(r => r.rawScore));
  const minScore = Math.min(...recommendations.map(r => r.rawScore));
  const scoreRange = maxScore - minScore || 1;

  // 정규화된 점수 계산 (최소 50점, 최대 100점 범위로)
  const normalizedRecommendations = recommendations.map(r => ({
    ...r,
    matchScore: Math.round(50 + ((r.rawScore - minScore) / scoreRange) * 50),
  }));

  // 점수순 정렬
  return normalizedRecommendations
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, 10);
}
