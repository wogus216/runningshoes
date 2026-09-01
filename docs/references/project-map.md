# 프로젝트 구조 지도

> 2026-09-01 `CLAUDE.md`에서 분리한 **위치 참조표**입니다. 규칙이 아니라 "어디에 뭐가 있는지"뿐이라
> 매 세션 읽을 필요가 없습니다. 익숙하지 않은 영역을 처음 건드릴 때만 펴 보세요.
> 타입 정의의 **1차 소스는 항상 `src/types/shoe.ts`** 입니다 — 아래 요약과 어긋나면 코드가 맞습니다.

## 디렉토리

```
src/
├── app/                    # Next.js App Router 페이지
│   ├── shoes/[slug]/       # 신발 상세
│   ├── compare/            # 비교
│   ├── recommend/          # 추천
│   ├── brands/[slug]/      # 브랜드별
│   ├── blog/[slug]/        # 블로그 글
│   ├── marathon/[id]/      # 마라톤 대회 상세
│   └── gels/[slug]/        # 에너지 젤
├── components/
│   ├── detail/             # 신발 상세 페이지 컴포넌트 (20개)
│   ├── compare/            # 비교 기능
│   ├── recommend/          # 추천 기능
│   ├── marathon/           # 대회 — shoe-bridge.tsx(RPM 브릿지) 포함
│   ├── ads/                # ad-slot.tsx
│   └── ui/                 # shadcn/ui
├── lib/
│   ├── data/
│   │   ├── shoes/          # 신발 1켤레 = 파일 1개 (2026-07 분리)
│   │   │   ├── index.ts    # 전체 신발 export (브랜드 배열 조립)
│   │   │   └── {brand}/    # 브랜드 디렉토리 (nike, asics, ... 12개)
│   │   │       ├── index.ts    # import + 배열 조립 (새 신발은 여기 등록)
│   │   │       └── {slug}.ts   # 신발 1켤레 (예: asics-gel-kayano-33.ts)
│   │   ├── blog/posts/     # 월별 분할 {YYYY-MM}.ts + index.ts
│   │   └── marathon/       # 월별 대회 파일
│   ├── durability.ts       # getShoeDurability — 수명 표기 단일 창구
│   ├── marathon/bands.ts   # 시점 밴드(정렬 대체)
│   ├── pseo/matrices.ts    # pSEO 5그룹 + pairs
│   └── recommendation.ts   # 추천 알고리즘
├── types/
│   └── shoe.ts             # Shoe 타입 정의 (1차 소스)
└── data/
    └── running-shoe-review-skill.json  # 리뷰 프레임워크
```

⚠️ `src/lib/data/shoes.ts` 배럴이 `shoes/index.ts`보다 먼저 resolve된다 — 새 export를 추가하면 배럴도 갱신할 것.

## Shoe 타입 요약

```typescript
interface Shoe {
  id: string;                    // 'asics-gt-2000-14' (slug와 항상 동일)
  slug: string;                  // URL용
  brand: string;                 // 'Asics'
  name: string;                  // 'GT-2000 14' (한글 가능)
  category: string;              // '입문화' | '데일리' | '쿠션화' | '레이싱' | '안정화' | '트레일'
  rating: number;                // 1-5
  price: number;                 // 한국 공식몰 MSRP (원)
  description: string;           // 한 문장 요약
  tags: string[];                // 검색/필터용

  specs: ShoeSpecs;              // 기본 스펙 (1-10 점수)
  biomechanics: BiomechanicsData;// 생체역학
  injuryPrevention: InjuryPreventionData;
  koreanFootFit: KoreanFootFit;
  targetUsers: TargetUsers;      // 추천/비추천 대상
  features: string[];            // 핵심 특징 (5개 이내)
  priceAnalysis: PriceAnalysis;
  detailedSpecs: DetailedSpecs;  // 상세 스펙 (문자열)
  reviews: Review[];             // 적합성 분석 3-4개 (실사용 후기 아님 — CLAUDE.md 규칙 참조)

  similarShoes: string[];        // 비슷한 신발 slug 배열
}
```

### `injuryPrevention` 등급

| 값 | 의미 |
|---|---|
| `'excellent'` | 해당 부상에 매우 좋음 |
| `'good'` | 괜찮음 |
| `'caution'` | 주의 필요 |
| `'warning'` | 피해야 함 |

## 신발 상세 페이지 컴포넌트 (`src/components/detail/`)

| 컴포넌트 | 설명 |
|---------|------|
| `hero-section.tsx` | 상단 히어로 (이미지, 기본 정보) |
| `quick-specs.tsx` | 핵심 스펙 요약 |
| `biomechanics-analysis.tsx` | 생체역학 분석 |
| `injury-prevention.tsx` | 부상 예방 정보 |
| `korean-foot-fit.tsx` | 한국인 발 적합성 |
| `value-analysis.tsx` | 가격/가성비 분석 |
| `target-recommendation.tsx` | 추천/비추천 대상 |
| `similar-shoes.tsx` | 비슷한 신발 추천 |
| `reviews-section.tsx` | 적합성 분석 섹션 |

## 추천 시스템 (`src/lib/recommendation.ts`)

사용자 프로필 기반 매칭. 고려 요소: 경험, 주간 거리, 목적, 발 아치, 발 너비, 부상 이력, 예산.
