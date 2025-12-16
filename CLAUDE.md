# Claude Code 작업 지침

## 프로젝트 개요

**한국 러너를 위한 러닝화 비교/추천 사이트** - Next.js 14 App Router 기반

### 기술 스택
- **Framework**: Next.js 14.2 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Charts**: Recharts
- **Build**: Static Site Generation (SSG)

### 핵심 기능
1. 신발 상세 페이지 (`/shoes/[slug]`)
2. 신발 비교 기능 (`/compare`)
3. 맞춤 추천 시스템 (`/recommend`)
4. 브랜드별 보기 (`/brands/[slug]`)

---

## 프로젝트 구조

```
src/
├── app/                    # Next.js App Router 페이지
│   ├── shoes/[slug]/       # 신발 상세 페이지
│   ├── compare/            # 비교 페이지
│   ├── recommend/          # 추천 페이지
│   └── brands/[slug]/      # 브랜드별 페이지
├── components/
│   ├── detail/             # 신발 상세 페이지 컴포넌트 (20개)
│   ├── compare/            # 비교 기능 컴포넌트
│   ├── recommend/          # 추천 기능 컴포넌트
│   └── ui/                 # shadcn/ui 컴포넌트
├── lib/
│   ├── data/shoes/         # 브랜드별 신발 데이터 (10개 파일)
│   │   ├── index.ts        # 전체 신발 export
│   │   ├── nike.ts
│   │   ├── adidas.ts
│   │   ├── asics.ts
│   │   ├── newbalance.ts
│   │   ├── hoka.ts
│   │   ├── brooks.ts
│   │   ├── saucony.ts
│   │   ├── on.ts
│   │   ├── mizuno.ts
│   │   └── puma.ts
│   └── recommendation.ts   # 추천 알고리즘
├── types/
│   └── shoe.ts             # Shoe 타입 정의
└── data/
    └── running-shoe-review-skill.json  # 리뷰 프레임워크
```

---

## 신발 데이터 구조

### Shoe 타입 (`src/types/shoe.ts`)

```typescript
interface Shoe {
  id: string;                    // 'asics-gt-2000-14'
  slug: string;                  // URL용 (id와 동일)
  brand: string;                 // 'Asics'
  name: string;                  // 'GT-2000 14' (한글 가능)
  category: string;              // '입문화' | '데일리' | '쿠션화' | '레이싱' | '안정화'
  rating: number;                // 1-5
  price: number;                 // MSRP (원)
  description: string;           // 한 문장 요약
  tags: string[];                // 검색/필터용 태그

  specs: ShoeSpecs;              // 기본 스펙 (1-10 점수)
  biomechanics: BiomechanicsData;// 생체역학 데이터
  injuryPrevention: InjuryPreventionData;  // 부상 예방 등급
  koreanFootFit: KoreanFootFit;  // 한국인 발 적합성
  targetUsers: TargetUsers;      // 추천/비추천 대상
  features: string[];            // 핵심 특징 (5개 이내)
  priceAnalysis: PriceAnalysis;  // 가격 분석
  detailedSpecs: DetailedSpecs;  // 상세 스펙 (문자열)
  reviews: Review[];             // 리뷰 (3-4개)

  similarShoes: string[];        // 비슷한 신발 slug 배열
}
```

### 중요 필드 상세

#### `alternatives` vs `similarShoes`
- `priceAnalysis.alternatives`: 비슷한 **가격대** 대안 (가격 분석 섹션에서 사용)
- `similarShoes`: 비슷한 **특성**의 신발 (하단 추천 섹션에서 사용)
- **반드시 유효한 slug 사용** (다른 신발의 실제 slug와 일치해야 함)

#### `koreanFootFit.toBoxWidth`
- `'narrow'`: 좁음 (68mm 미만, 와이드 권장 명시 필요)
- `'standard'`: 표준 (68-75mm)
- `'wide'`: 넓음 (75mm 초과)

#### `injuryPrevention` 등급
- `'excellent'`: 해당 부상에 매우 좋음
- `'good'`: 괜찮음
- `'caution'`: 주의 필요
- `'warning'`: 피해야 함

---

## 러닝화 리뷰 작성 가이드라인

### 필수 참고 자료

신발 리뷰를 작성하거나 수정할 때 **반드시** 다음 두 가지를 함께 고려:

1. **외부 전문 리뷰 데이터**
   - RunRepeat Lab Test 데이터 (https://runrepeat.com)
   - Doctors of Running 리뷰 (https://www.doctorsofrunning.com)
   - **수집할 데이터**: SA (충격흡수), 에너지 리턴%, HA (경도), 무게, 토박스 너비, 드롭

2. **Running Shoe Review Skill 프레임워크** (`src/data/running-shoe-review-skill.json`)
   - 한국 소비자 우선순위: 착화감 > 쿠셔닝 > 가성비 > 안정성 > 무게
   - 러너 타입: beginner, advanced_marathon, fun_runner
   - 한국인 발 특성: 넓은 앞발, 평발 비율 높음
   - 가격대별 분류:
     - 10-15만원: 입문
     - 15-20만원: 시리어스 초보
     - 20-25만원: 프리미엄
     - 25만원+: 카본/슈퍼슈즈

### 리뷰 작성 원칙

1. **단순히 랩 수치 나열 금지**
2. **한국 러너 관점**에서 실질적 조언 제공
3. 러너 **타입별 적합성** 명시
4. **토박스 너비**와 한국인 발볼 적합성 언급
5. **가격 대비 가치** 평가
6. **부상 이력** 있는 러너를 위한 정보 포함
7. 한국 러너 FAQ 답변:
   - "무릎 괜찮나요?"
   - "초보도 신을 수 있나요?"
   - "발볼 넓은데 괜찮나요?"

### 리뷰 작성 예시

❌ **나쁜 예**:
```
"132 SA heel/110 SA forefoot 충격흡수, 56.0%/57.2% 에너지 리턴, 17.4 HA 경도..."
```

✅ **좋은 예**:
```
"평발인데 무겁지 않은 안정화 추천해주세요"에 가장 먼저 떠오르는 아식스의 라이트 안정화입니다.
FF Blast Max로 업그레이드되어 이전 버전보다 쿠셔닝과 에너지 리턴(56%)이 향상됐습니다.
18만원대로 카야노(23만원)보다 5만원 저렴하면서 3D Guidance System으로 충분한 안정성을 제공합니다.
아웃솔 내구성이 뛰어나(700km+) km당 257원으로 가성비 최고입니다.
단, 토박스가 68.4mm로 좁아 발볼 넓은 한국 러너는 반드시 와이드 버전을 선택하세요.
```

---

## 신발 데이터 추가/수정 워크플로우

### 새 신발 추가 시

1. **RunRepeat에서 랩 데이터 수집** (Chrome DevTools MCP 사용)
   - 무게, 스택, 드롭, SA, 에너지 리턴%, HA, 토박스 너비

2. **해당 브랜드 파일에 추가** (`src/lib/data/shoes/{brand}.ts`)

3. **Slug 형식 준수**
   - 형식: `{brand}-{model-name}` (소문자, 하이픈)
   - 예: `asics-gt-2000-14`, `nike-pegasus-41`, `new-balance-1080-v14`
   - **New Balance는 `new-balance-` 사용** (not `newbalance-`)

4. **alternatives/similarShoes에 유효한 slug만 사용**
   - 존재하지 않는 신발 slug 참조 금지
   - 버전 확인 필수 (예: `kinvara-15` → `kinvara-16`)

5. **빌드 확인**: `npm run build`

### 모델 버전 업데이트 시

1. 기존 데이터의 `id`, `slug`, `name` 변경
2. 다른 파일에서 해당 slug 참조하는 곳 모두 업데이트
   ```bash
   grep -r "old-slug" src/lib/data/shoes/
   sed -i '' 's/old-slug/new-slug/g' src/lib/data/shoes/*.ts
   ```

---

## 주요 컴포넌트

### 신발 상세 페이지 컴포넌트 (`src/components/detail/`)

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
| `reviews-section.tsx` | 사용자 리뷰 |

### 추천 시스템 (`src/lib/recommendation.ts`)

- 사용자 프로필 기반 매칭 알고리즘
- 고려 요소: 경험, 주간 거리, 목적, 발 아치, 발 너비, 부상 이력, 예산

---

## 개발 명령어

```bash
npm run dev      # 개발 서버 (localhost:3000)
npm run build    # 프로덕션 빌드
npm run start    # 프로덕션 서버
npm run lint     # ESLint 검사
```

---

## 자주 하는 실수 방지

### Slug 관련
- ❌ `newbalance-rebel-v5` → ✅ `new-balance-rebel-v5`
- ❌ `asics-nimbus-27` → ✅ `asics-gel-nimbus-27`
- ❌ 존재하지 않는 버전 참조 (예: `kinvara-15` when only `kinvara-16` exists)

### 데이터 일관성
- `id`와 `slug`는 항상 동일해야 함
- `alternatives`와 `similarShoes`의 모든 항목은 실제 존재하는 신발의 slug여야 함

### 타입
- `rating`: 1-5 (정수)
- `specs` 내 점수: 1-10 (정수)
- `price`: 원 단위 (예: 180000)
- `durability`: km 단위 (예: 700)

---

## 브랜드별 미디어/프레스 페이지

| 브랜드 | URL |
|--------|-----|
| Nike | https://news.nike.com/ |
| Adidas | https://news.adidas.com/ |
| Asics | https://corp.asics.com/en/press |
| Brooks | https://www.brooksrunning.com/en_us/press-room.html |
| Hoka | https://www.hoka.com/en/us/press/ |
| New Balance | https://newbalance.newsmarket.com/ |
| Saucony | https://www.saucony.com/en/press/ |
| On | https://www.on-running.com/en-us/press |
| Puma | https://about.puma.com/en/newsroom |
| Mizuno | https://corp.mizuno.com/en/news |
