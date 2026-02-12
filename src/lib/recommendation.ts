import type { Shoe } from '@/types/shoe';

export type UserProfile = {
  experience: 'beginner' | 'intermediate' | 'advanced';
  weeklyDistance: 'low' | 'medium' | 'high'; // ~20km, 20-40km, 40km+
  purpose: 'training' | 'racing' | 'recovery' | 'all';
  footArch: 'flat' | 'normal' | 'high';
  footWidth: 'narrow' | 'standard' | 'wide';
  injuries: string[]; // plantarFasciitis, achillesTendinopathy, kneeIssues, shinSplints
  budget: 'low' | 'mid' | 'high'; // ~20만, 15-30만, 20만+
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
  all: ['데일리', '입문화', '쿠션화'],
};

const budgetRanges = {
  low: { min: 0, max: 200000 },
  mid: { min: 150000, max: 300000 },
  high: { min: 200000, max: Infinity },
};

export function recommendShoes(shoes: Shoe[], profile: UserProfile): RecommendedShoe[] {
  const recommendations: RecommendedShoe[] = [];

  for (const shoe of shoes) {
    // 스펙이 없는 신발은 제외
    if (!shoe.specs) continue;

    let score = 0;
    const reasons: string[] = [];

    // 1. 예산 필터 (필수) - 상한+하한 모두 체크
    const price = shoe.price || shoe.priceAnalysis?.msrp || 0;
    const budgetRange = budgetRanges[profile.budget];
    if (price > 0 && (price > budgetRange.max || price < budgetRange.min)) {
      continue; // 예산 범위 밖 제외
    }
    if (price > 0 && price >= budgetRange.min && price <= budgetRange.max) {
      score += 10;
      reasons.push('예산 범위 내');
    }

    // 2. 발볼 너비 체크
    if (shoe.koreanFootFit?.toBoxWidth) {
      if (profile.footWidth === 'wide' && shoe.koreanFootFit.toBoxWidth === 'narrow') {
        if (shoe.koreanFootFit.wideOptions) {
          score += 5;
          reasons.push('와이드 옵션 제공');
        } else {
          score -= 10;
          reasons.push('발볼이 좁아 맞지 않을 수 있음');
        }
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

    // 4. 부상 예방 체크 (강화: warning은 제외, 가중치 상향)
    if (profile.injuries.length > 0 && shoe.injuryPrevention) {
      let injuryBonus = 0;
      let hasWarning = false;

      const injuryLabels: Record<string, string> = {
        plantarFasciitis: '족저근막염',
        achillesTendinopathy: '아킬레스',
        kneeIssues: '무릎',
        shinSplints: '정강이',
      };

      for (const injury of profile.injuries) {
        const level = shoe.injuryPrevention[injury as keyof typeof shoe.injuryPrevention];
        if (level) {
          if (level === 'excellent') {
            injuryBonus += 30;
            reasons.push(`${injuryLabels[injury]} 예방에 매우 좋음`);
          } else if (level === 'good') {
            injuryBonus += 8;
            reasons.push(`${injuryLabels[injury]} 예방에 좋음`);
          } else if (level === 'warning') {
            hasWarning = true;
          } else if (level === 'caution') {
            score -= 20;
          }
        }
      }

      // warning 레벨이 있는 신발은 부상 러너에게 추천하지 않음
      if (hasWarning) {
        continue;
      }

      score += Math.min(injuryBonus, 60);
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
    if (experienceCategoryMap[profile.experience]?.includes(shoe.category)) {
      score += 10;
      reasons.push(`${expLabel} 적합 카테고리`);
    }

    // 6. 목적에 따른 매칭 (키워드 + 카테고리 직접 매핑)
    const purposeLabels: Record<string, string> = {
      training: '훈련용',
      racing: '레이싱용',
      recovery: '회복용',
      all: '다목적',
    };
    if (shoe.targetUsers?.recommended) {
      const keywords = purposeMap[profile.purpose];
      const hasMatch = shoe.targetUsers.recommended.some(rec =>
        keywords.some(kw => rec.includes(kw))
      );
      if (hasMatch) {
        score += 22;
        reasons.push(`${purposeLabels[profile.purpose]}으로 적합`);
      }
    }
    // 카테고리 직접 매핑 (레이싱은 강화)
    if (purposeCategoryMap[profile.purpose]?.includes(shoe.category)) {
      const categoryBoost = profile.purpose === 'racing' ? 18 : 8;
      score += categoryBoost;
      reasons.push(`${purposeLabels[profile.purpose]} 카테고리`);
    }

    // 7. 안정화 카테고리 지원 (평발/부상 러너에게 안정화 추천)
    if (shoe.category === '안정화') {
      if (profile.footArch === 'flat') {
        score += 12;
        reasons.push('평발에 적합한 안정화');
      }
      if (profile.injuries.some(i => ['kneeIssues', 'shinSplints'].includes(i))) {
        score += 8;
        reasons.push('부상 예방 안정화 설계');
      }
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

    // 14. 페이스 기반 추천 (강화: fast에 레이싱 특화)
    if (profile.targetPace) {
      const paceCategories = paceRanges[profile.targetPace].categories;
      if (paceCategories.includes(shoe.category)) {
        score += 18;
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
        score += 15;
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

    // 17. 드롭 점수 (발 아치별)
    if (shoe.specs.drop !== undefined) {
      if (profile.footArch === 'flat' && shoe.specs.drop >= 8) {
        score += 5;
        reasons.push('평발에 유리한 높은 드롭');
      } else if (profile.footArch === 'high' && shoe.specs.drop <= 6) {
        score += 5;
        reasons.push('높은 아치에 적합한 드롭');
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
      reasons.push('높은 평점');
    }

    // 20. 극한 안정성 보너스 (안정성 9+ + 평발/부상 조합)
    if (shoe.specs.stability >= 9 && (profile.footArch === 'flat' || profile.injuries.length >= 2)) {
      score += 12;
      reasons.push('최고 수준 안정성');
    }

    // 21. 프리미엄 레이싱 보너스 (상급자 + 빠른 페이스 + 높은 예산)
    if (profile.experience === 'advanced' && profile.targetPace === 'fast' && profile.budget === 'high') {
      if (shoe.biomechanics?.carbonPlate && shoe.specs.weight && shoe.specs.weight < 200) {
        score += 10;
        reasons.push('엘리트 레이싱 스펙');
      }
    }

    // 22. 맥스 쿠셔닝 보너스 (회복/느린 페이스 + 높은 쿠셔닝)
    if ((profile.purpose === 'recovery' || profile.targetPace === 'slow') && shoe.specs.cushioning >= 9) {
      score += 8;
      reasons.push('최상급 쿠셔닝');
    }

    // 23. 장거리 내구성 보너스 (주간 40km+ + 내구성 600+)
    if (profile.weeklyDistance === 'high' && shoe.specs.durability && shoe.specs.durability >= 600) {
      score += 6;
      reasons.push('장거리 내구성 우수');
    }

    // 24. 가격 효율성 (같은 예산 내 저가일수록 가점)
    if (price > 0 && price >= budgetRange.min && price <= budgetRange.max) {
      const savingsRatio = (budgetRange.max - price) / (budgetRange.max - budgetRange.min || 1);
      if (savingsRatio > 0.3) {
        score += Math.round(savingsRatio * 6);
        reasons.push('예산 대비 효율적');
      }
    }

    // 25. 최고 쿠셔닝(10) 특별 보너스
    if (shoe.specs.cushioning === 10 && (profile.purpose === 'recovery' || profile.targetPace === 'slow' || (profile.experience === 'beginner' && profile.weeklyDistance === 'low'))) {
      score += 10;
      reasons.push('최상급 쿠셔닝 (recovery 특화)');
    }

    // 26. 카본 레이싱 + 높은 안정성 조합 (안정적 레이싱 니치)
    if (shoe.biomechanics?.carbonPlate && shoe.specs.stability >= 7 && profile.purpose === 'racing') {
      score += 6;
      reasons.push('안정적인 카본 레이싱');
    }

    // 27. 초고드롭(10+) 족저근막염 특화 보너스
    if (shoe.specs.drop >= 10 && profile.injuries.includes('plantarFasciitis')) {
      score += 8;
      reasons.push('높은 드롭으로 족저근막 부담 최소화');
    }

    // 점수가 양수인 신발만 추천
    if (score > 0) {
      recommendations.push({
        ...shoe,
        matchScore: 0, // 나중에 정규화
        rawScore: score,
        matchReasons: reasons.filter(r => !r.includes('부적합') && !r.includes('맞지 않을')).slice(0, 5),
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
    const matchScore = Math.round(30 + ((r.rawScore - minScore) / scoreRange) * 70);

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

  // 브랜드 다양성: 감점 방식 (같은 브랜드 N번째 → 점수 감점)
  const sorted = normalizedRecommendations.sort((a, b) => b.matchScore - a.matchScore);
  const brandOrder: Record<string, number> = {};

  const diversified = sorted.map(r => {
    brandOrder[r.brand] = (brandOrder[r.brand] || 0) + 1;
    const penalty = brandOrder[r.brand] > 1 ? 5 * (brandOrder[r.brand] - 1) : 0;
    return { ...r, matchScore: r.matchScore - penalty };
  });

  // 최종 정렬 후 상위 10개
  return diversified
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
