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
  season?: 'summer' | 'winter' | 'all'; // 계절 선택
  targetPace?: 'slow' | 'medium' | 'fast'; // 목표 페이스
};

export type RecommendedShoe = Shoe & {
  matchScore: number;       // 정규화된 점수 (0-100)
  rawScore: number;         // 원시 점수
  matchReasons: string[];
  detailedReason?: string;  // 상세 추천 이유
  comparisonToAvg?: {       // 평균 대비 스펙 비교
    cushioning: number;
    weight: number;
    durability: number;
  };
};

// 부상별 주의사항/팁
export const injuryTips: Record<string, { name: string; tips: string[]; avoid: string[] }> = {
  plantarFasciitis: {
    name: '족저근막염',
    tips: [
      '충분한 아치 서포트가 있는 신발 선택',
      '딱딱한 바닥보다 쿠션이 좋은 신발 추천',
      '드롭이 높은 신발이 부담을 줄여줌',
    ],
    avoid: ['최소화 신발', '드롭이 낮은 신발', '딱딱한 미드솔'],
  },
  achillesTendinopathy: {
    name: '아킬레스건염',
    tips: [
      '힐 쿠션이 충분한 신발 선택',
      '드롭 8mm 이상 권장',
      '부드러운 힐 카운터 확인',
    ],
    avoid: ['로우 드롭 신발', '단단한 힐 카운터', '무거운 신발'],
  },
  kneeIssues: {
    name: '무릎 통증',
    tips: [
      '충격 흡수가 좋은 쿠션화 선택',
      '안정성 좋은 신발로 무릎 부담 감소',
      '과도한 반응성보다 쿠션 우선',
    ],
    avoid: ['딱딱한 레이싱화', '안정성이 낮은 신발'],
  },
  shinSplints: {
    name: '정강이 통증',
    tips: [
      '충격 흡수 좋은 신발 필수',
      '적절한 아치 서포트 확인',
      '점진적인 거리 증가 필요',
    ],
    avoid: ['최소화 신발', '쿠션이 부족한 신발'],
  },
};

// 부상별 TOP 3 신발 찾기
export function getTopShoesForInjury(shoes: Shoe[], injuryType: string): Shoe[] {
  const goodLevels = ['excellent', 'good'];

  return shoes
    .filter(shoe => {
      if (!shoe.injuryPrevention || !shoe.specs) return false;
      const level = shoe.injuryPrevention[injuryType as keyof typeof shoe.injuryPrevention];
      return level && goodLevels.includes(level);
    })
    .sort((a, b) => {
      const levelOrder: Record<string, number> = { excellent: 2, good: 1 };
      const aLevel = a.injuryPrevention?.[injuryType as keyof typeof a.injuryPrevention] || '';
      const bLevel = b.injuryPrevention?.[injuryType as keyof typeof b.injuryPrevention] || '';
      const levelDiff = (levelOrder[bLevel] || 0) - (levelOrder[aLevel] || 0);
      if (levelDiff !== 0) return levelDiff;
      // 같은 레벨이면 평점으로 정렬
      return b.rating - a.rating;
    })
    .slice(0, 3);
}

// 페이스 범위 매핑
const paceRanges = {
  slow: { label: '6분대 이상', categories: ['쿠션화', '입문화'] },
  medium: { label: '5-6분대', categories: ['데일리', '쿠션화'] },
  fast: { label: '5분 미만', categories: ['레이싱', '데일리'] },
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
        } else {
          // 여름 데이터가 없으면 무게로 추론
          if (shoe.specs.weight && shoe.specs.weight < 250) {
            score += 10;
            reasons.push('가벼워서 여름에 적합');
          }
        }
      }
    }

    // 14. 페이스 기반 추천
    if (profile.targetPace) {
      const paceCategories = paceRanges[profile.targetPace].categories;
      if (paceCategories.includes(shoe.category)) {
        score += 15;
        reasons.push(`${paceRanges[profile.targetPace].label} 페이스에 적합`);
      }
      // 빠른 페이스에는 카본 플레이트와 가벼운 무게
      if (profile.targetPace === 'fast') {
        if (shoe.biomechanics?.carbonPlate) {
          score += 10;
        }
        if (shoe.specs.weight && shoe.specs.weight < 220) {
          score += 5;
        }
      }
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

  // 평균 스펙 계산 (비교용)
  const avgSpecs = {
    cushioning: recommendations.reduce((sum, r) => sum + (r.specs?.cushioning || 0), 0) / recommendations.length,
    weight: recommendations.reduce((sum, r) => sum + (r.specs?.weight || 0), 0) / recommendations.length,
    durability: recommendations.reduce((sum, r) => sum + (r.specs?.durability || 0), 0) / recommendations.length,
  };

  const maxScore = Math.max(...recommendations.map(r => r.rawScore));
  const minScore = Math.min(...recommendations.map(r => r.rawScore));
  const scoreRange = maxScore - minScore || 1;

  // 정규화된 점수 계산 및 상세 이유 생성
  const normalizedRecommendations = recommendations.map(r => {
    const matchScore = Math.round(50 + ((r.rawScore - minScore) / scoreRange) * 50);

    // 스펙 비교 (평균 대비)
    const comparisonToAvg = {
      cushioning: Math.round((r.specs?.cushioning || 0) - avgSpecs.cushioning),
      weight: Math.round((r.specs?.weight || 0) - avgSpecs.weight),
      durability: Math.round((r.specs?.durability || 0) - avgSpecs.durability),
    };

    // 상세 추천 이유 생성
    const detailedReason = generateDetailedReason(r, profile, comparisonToAvg);

    return {
      ...r,
      matchScore,
      comparisonToAvg,
      detailedReason,
    };
  });

  // 점수순 정렬
  return normalizedRecommendations
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, 10);
}

// 상세 추천 이유 생성 함수
function generateDetailedReason(
  shoe: RecommendedShoe,
  profile: UserProfile,
  comparison: { cushioning: number; weight: number; durability: number }
): string {
  const parts: string[] = [];

  // 기본 소개
  parts.push(`${shoe.brand} ${shoe.name}은(는) ${shoe.category} 카테고리의 신발로`);

  // 경험 수준에 따른 설명
  if (profile.experience === 'beginner') {
    if (shoe.specs?.cushioning && shoe.specs.cushioning >= 7) {
      parts.push('입문자에게 필요한 충분한 쿠셔닝을 제공합니다.');
    } else {
      parts.push('입문자도 편하게 사용할 수 있습니다.');
    }
  } else if (profile.experience === 'advanced') {
    if (shoe.biomechanics?.carbonPlate) {
      parts.push('엘리트 러너의 기록 단축에 도움을 주는 카본 플레이트가 탑재되어 있습니다.');
    } else {
      parts.push('상급 러너의 훈련에 적합한 성능을 갖추고 있습니다.');
    }
  }

  // 스펙 비교 설명
  const specComparisons: string[] = [];
  if (comparison.cushioning > 0) {
    specComparisons.push(`쿠셔닝이 평균보다 ${comparison.cushioning}점 높고`);
  }
  if (comparison.weight < -10) {
    specComparisons.push(`무게가 평균보다 ${Math.abs(comparison.weight)}g 가볍습니다`);
  } else if (comparison.durability > 50) {
    specComparisons.push(`내구성이 평균보다 ${comparison.durability}km 더 뛰어납니다`);
  }

  if (specComparisons.length > 0) {
    parts.push(specComparisons.join(', ') + '.');
  }

  // 부상 관련 설명
  if (profile.injuries.length > 0) {
    const injuryLabels: Record<string, string> = {
      plantarFasciitis: '족저근막염',
      achillesTendinopathy: '아킬레스건',
      kneeIssues: '무릎',
      shinSplints: '정강이',
    };
    const protectedInjuries = profile.injuries.filter(injury => {
      const level = shoe.injuryPrevention?.[injury as keyof typeof shoe.injuryPrevention];
      return level === 'excellent' || level === 'good';
    });
    if (protectedInjuries.length > 0) {
      const names = protectedInjuries.map(i => injuryLabels[i]).join(', ');
      parts.push(`${names} 예방에 효과적인 설계가 적용되어 있습니다.`);
    }
  }

  // 가성비 설명
  if (shoe.priceAnalysis?.valueRating && shoe.priceAnalysis.valueRating >= 8) {
    parts.push('가격 대비 성능이 뛰어나 가성비가 좋습니다.');
  }

  return parts.join(' ');
}
