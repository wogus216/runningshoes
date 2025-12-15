# 러닝화 계급도 2025 - 개선 계획

> 마지막 업데이트: 2025-12-15

---

## 즉시 구현 가능 (Phase 1 - 1주)

### 1. ~~정렬 기능 추가~~ ✅ 완료
- [x] 평점 높은순
- [x] 가격 낮은순 / 높은순
- [x] 무게 가벼운순
- [x] 가성비순 (valueRating)
- [x] 이름순

**파일**: `src/hooks/useShoeFilters.ts`, `src/app/page.tsx`

### 2. ~~가격 범위 필터~~ ✅ 완료
- [x] 버튼 UI로 구현
- [x] 15만원 미만 / 15-20만원 / 20-25만원 / 25-30만원 / 30만원 이상

**파일**: `src/components/filters/filter-panel.tsx`

### 3. 즐겨찾기 (위시리스트)
- [ ] LocalStorage 기반 저장
- [ ] 하트 아이콘 토글
- [ ] 즐겨찾기 목록 페이지 (`/favorites`)
- [ ] 즐겨찾기에서 바로 비교하기

**새 파일**: `src/hooks/useFavorites.ts`

### 4. ~~비교 URL 공유~~ ✅ 완료
- [x] `/compare?shoes=slug1,slug2,slug3` 형태
- [x] URL 복사 버튼
- [x] 페이지 로드 시 URL에서 신발 복원

**파일**: `src/app/compare/page.tsx`

---

## 데이터 활용 강화 (Phase 2 - 2-3주)

### 5. ~~미사용 데이터 활용~~ ✅ 완료

| 데이터 | 위치 | 현재 | 개선안 | 상태 |
|--------|------|------|--------|------|
| `valueRating` | priceAnalysis | 추천만 | 가성비순 정렬, 배지 | ✅ 카드에 배지 추가 |
| `costPerKm` | priceAnalysis | 비교만 | "장기 사용" 필터 | (유지) |
| `alternatives` | priceAnalysis | **미사용** | "비슷한 가격대" 섹션 | ✅ 클릭 가능한 링크로 개선 |
| `optimalPace` | biomechanics | **미사용** | 페이스 기반 필터 | (데이터 참조용 유지) |
| `winterCompatibility` | koreanFootFit | 비교만 | 계절별 추천 | ✅ 카드에 겨울 배지 추가 |

### 6. ~~태그 기반 검색~~ ✅ 완료
- [x] 클릭 가능한 태그 칩
- [x] "이 특징을 가진 신발 모두 보기" (검색어로 연동)
- [ ] 인기 태그 클라우드

**파일**: `src/components/shoe-card.tsx`, `src/app/page.tsx`

### 7. ~~필터 프리셋~~ ✅ 완료
- [x] "입문자용", "평발 전용", "가성비 최고", "레이싱", "무릎 보호", "데일리 쿠션" 빠른 필터
- [ ] 내 필터 조합 저장 (LocalStorage)

**파일**: `src/components/filters/filter-panel.tsx`

---

## ~~모바일 UX 개선 (Phase 2)~~ ✅ 완료

### 8. ~~필터 패널~~ ✅
- [x] 모바일: 하단 시트(bottom sheet)로 변경
- [x] 자주 쓰는 필터만 먼저 표시
- [x] 가로 스크롤 방지

### 9. ~~비교 페이지~~ ✅
- [x] 모바일: 주요 5개 항목만 먼저 표시
- [x] "더보기" 아코디언
- [x] 카테고리별 접기/펼치기

### 10. ~~상세 페이지~~ ✅
- [x] 탭 스와이프 전환
- [x] 빠른 액션 버튼 (비교추가, 즐겨찾기)

### 11. ~~추천 설문~~ ✅
- [x] 모바일: 옵션 풀너비
- [x] 터치 타겟 44x44px 이상

---

## ~~추천 기능 고도화 (Phase 3)~~ ✅ 완료

### 12. ~~부상별 상세 분석~~ ✅
- [x] 부상별 TOP 3 신발 표시
- [x] 부상별 주의사항/팁
- [x] 복수 부상 선택 시 가중치 조정

### 13. ~~계절 맞춤 추천~~ ✅
- [x] 겨울/여름 선택 옵션
- [x] `winterCompatibility` 활용
- [x] `summerCompatibility` 필드 추가 (무게 기반 자동 계산)
- [x] 상세 페이지 여름 호환성 카드 추가

### 14. ~~페이스 기반 추천~~ ✅
- [x] 설문에 목표 페이스 추가
- [x] `optimalPace` 매칭
- [x] 페이스별 점수 가중치 적용

### 15. ~~추천 이유 강화~~ ✅
- [x] 3-4줄 상세 설명
- [x] 스펙 비교 (추천 vs 평균)
- [ ] 관련 리뷰 발췌 (미구현)

---

## 소셜/공유 기능 (Phase 3)

### 16. 비교 결과 공유
- [ ] SNS 공유 버튼 (카카오톡, 트위터)
- [ ] 비교 결과 이미지 생성
- [ ] 임베드 위젯

### 17. 리뷰 검색
- [ ] 전체 리뷰 검색 페이지
- [ ] 별점 필터
- [ ] 사용자 타입별 필터

---

## 장기 과제 (Phase 4 - 2개월+)

### 18. 사용자 계정
- [ ] 로그인/회원가입
- [ ] 클라우드 저장 (즐겨찾기, 비교 기록)
- [ ] 개인화 추천

### 19. AI 고도화
- [ ] 자연어 검색 ("무릎 아픈데 가벼운 신발")
- [ ] 챗봇 추천
- [ ] 사용 패턴 학습

### 20. 커뮤니티
- [ ] 사용자 리뷰 작성
- [ ] 질문/답변
- [ ] 러닝 기록 연동

---

## 완료된 항목

- [x] 브랜드별 데이터 파일 분리 (2025-12-12)
- [x] 페가수스 41 중복 데이터 제거 (2025-12-12)
- [x] RunRepeat 전문 리뷰어 100점 스케일 처리 (2025-12-12)
- [x] detailedSpecs 누락 필드 추가 (price, costPerKm, footType, landingPattern)
- [x] 정렬 기능 추가 - 평점/가격/무게/가성비/이름순 (2025-12-12)
- [x] 가격 범위 필터 UI 추가 (2025-12-12)
- [x] 비교 URL 공유 기능 (`/compare?shoes=slug1,slug2`) (2025-12-12)
- [x] Phase 2 데이터 활용 강화 (2025-12-12)
  - 신발 카드에 가성비/겨울/카본 배지 추가
  - 클릭 가능한 태그 칩 (검색어 연동)
  - 빠른 필터 프리셋 6종 (입문자용, 평발 전용, 가성비 최고, 레이싱, 무릎 보호, 데일리 쿠션)
  - 비슷한 가격대 신발 클릭 가능한 링크로 변경
- [x] Phase 2 모바일 UX 개선 (2025-12-15)
  - 필터 패널 하단 시트로 변경
  - 비교 페이지 아코디언/카테고리별 접기
  - 상세 페이지 빠른 액션 버튼
  - 추천 설문 터치 타겟 개선
- [x] Phase 3 추천 기능 고도화 (2025-12-15)
  - 부상별 상세 분석 (TOP 3 신발, 팁/주의사항)
  - 계절 맞춤 추천 (겨울/여름 선택, summerCompatibility 필드 추가)
  - 페이스 기반 추천 (목표 페이스 설문, optimalPace 매칭)
  - 추천 이유 강화 (상세 설명, 스펙 비교)

---

## 코드 예시

### 정렬 기능 추가
```typescript
// src/hooks/useShoeFilters.ts
type SortBy = 'rating-desc' | 'price-asc' | 'price-desc' | 'weight-asc' | 'value-desc';

const [sortBy, setSortBy] = useState<SortBy>('rating-desc');

const sortedShoes = useMemo(() => {
  return [...filteredShoes].sort((a, b) => {
    switch (sortBy) {
      case 'price-asc':
        return (a.priceAnalysis?.msrp || 0) - (b.priceAnalysis?.msrp || 0);
      case 'price-desc':
        return (b.priceAnalysis?.msrp || 0) - (a.priceAnalysis?.msrp || 0);
      case 'weight-asc':
        return (a.specs?.weight || 999) - (b.specs?.weight || 999);
      case 'value-desc':
        return (b.priceAnalysis?.valueRating || 0) - (a.priceAnalysis?.valueRating || 0);
      case 'rating-desc':
      default:
        return b.rating - a.rating;
    }
  });
}, [filteredShoes, sortBy]);
```

### 즐겨찾기 훅
```typescript
// src/hooks/useFavorites.ts
'use client';
import { useState, useEffect } from 'react';

const STORAGE_KEY = 'runningshoes-favorites';

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setFavorites(JSON.parse(saved));
    }
    setIsLoaded(true);
  }, []);

  const toggleFavorite = (shoeId: string) => {
    setFavorites(prev => {
      const updated = prev.includes(shoeId)
        ? prev.filter(id => id !== shoeId)
        : [...prev, shoeId];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  };

  const isFavorite = (shoeId: string) => favorites.includes(shoeId);

  return { favorites, toggleFavorite, isFavorite, isLoaded };
}
```

### 비교 URL 파라미터
```typescript
// src/app/compare/page.tsx
'use client';
import { useSearchParams } from 'next/navigation';

export default function ComparePage() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const shoesParam = searchParams.get('shoes');
    if (shoesParam) {
      const slugs = shoesParam.split(',');
      // 비교 목록에 추가
      slugs.forEach(slug => {
        const shoe = getShoeBySlug(slug);
        if (shoe) addToCompare(shoe);
      });
    }
  }, [searchParams]);

  // URL 복사 함수
  const copyCompareUrl = () => {
    const slugs = selectedShoes.map(s => s.slug).join(',');
    const url = `${window.location.origin}/compare?shoes=${slugs}`;
    navigator.clipboard.writeText(url);
  };
}
```

---

## 참고 파일 위치

| 기능 | 파일 |
|------|------|
| 홈페이지 | `src/app/page.tsx` |
| 필터 훅 | `src/hooks/useShoeFilters.ts` |
| 추천 알고리즘 | `src/lib/recommendation.ts` |
| 비교 컨텍스트 | `src/contexts/compare-context.tsx` |
| 비교 페이지 | `src/app/compare/page.tsx` |
| 상세 페이지 | `src/app/shoes/[slug]/page.tsx` |
| 신발 타입 | `src/types/shoe.ts` |
| 신발 데이터 | `src/lib/data/shoes/` |
