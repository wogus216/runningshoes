# 러닝화 프로젝트 구조 가이드

TypeScript, React, Next.js를 처음 접하는 분을 위한 프로젝트 구조 설명서입니다.

---

## 📚 기초 개념

### 1. TypeScript란?
JavaScript에 **타입**을 추가한 언어입니다.

```typescript
// JavaScript (타입 없음)
const shoe = { name: "페가수스", price: 159000 };

// TypeScript (타입 있음)
interface Shoe {
  name: string;    // 문자열만 가능
  price: number;   // 숫자만 가능
}
const shoe: Shoe = { name: "페가수스", price: 159000 };
```

**장점**: 오타, 잘못된 데이터 타입을 코드 작성 시점에 잡아줍니다.

### 2. React란?
UI를 **컴포넌트** 단위로 만드는 라이브러리입니다.

```tsx
// 컴포넌트 = 재사용 가능한 UI 조각
function ShoeCard({ name, price }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>₩{price.toLocaleString()}</p>
    </div>
  );
}

// 사용
<ShoeCard name="페가수스" price={159000} />
<ShoeCard name="보메로" price={189000} />
```

### 3. Next.js란?
React 기반의 **풀스택 프레임워크**입니다.

**핵심 기능**:
- **파일 기반 라우팅**: 파일 만들면 자동으로 URL 생성
- **서버 컴포넌트**: 서버에서 HTML 생성 (SEO에 좋음)
- **정적 생성**: 빌드 시 HTML 미리 생성 (빠름)

---

## 📁 폴더 구조

```
src/
├── app/                    # 🌐 페이지 (URL과 1:1 매칭)
├── components/             # 🧩 재사용 UI 조각
├── lib/                    # 📊 데이터 & 유틸리티
├── types/                  # 📝 타입 정의
├── hooks/                  # 🔄 커스텀 훅
└── contexts/               # 🌍 전역 상태
```

---

## 🌐 app/ 폴더 (페이지)

Next.js App Router의 핵심입니다. **폴더 구조 = URL 구조**

### 파일 규칙

| 파일명 | 역할 |
|--------|------|
| `page.tsx` | 해당 URL의 실제 페이지 |
| `layout.tsx` | 페이지 감싸는 공통 레이아웃 |
| `loading.tsx` | 로딩 중 보여줄 UI |
| `error.tsx` | 에러 발생 시 보여줄 UI |
| `not-found.tsx` | 404 페이지 |

### URL 매핑 예시

```
src/app/
├── page.tsx                    → localhost:3000/
├── (main)/
│   ├── page.tsx                → localhost:3000/
│   ├── compare/
│   │   └── page.tsx            → localhost:3000/compare
│   └── layout.tsx              → (main) 그룹 공통 레이아웃
├── (detail)/
│   ├── shoes/
│   │   └── [slug]/
│   │       └── page.tsx        → localhost:3000/shoes/nike-pegasus-41
│   ├── recommend/
│   │   └── page.tsx            → localhost:3000/recommend
│   └── layout.tsx              → (detail) 그룹 공통 레이아웃
└── layout.tsx                  → 모든 페이지 공통 레이아웃
```

### 특수 폴더 문법

| 문법 | 의미 | 예시 |
|------|------|------|
| `(폴더명)` | Route Group - URL에 안 나타남 | `(main)` → URL에 영향 없음 |
| `[폴더명]` | Dynamic Route - 변수 | `[slug]` → 어떤 값이든 매칭 |

### Route Group 설명 (`(main)`, `(detail)`)

```
(main)/     → 메인 페이지들 (헤더 + 푸터 있음)
  ├── /              홈
  └── /compare       비교 페이지

(detail)/   → 상세 페이지들 (뒤로가기 헤더만 있음)
  ├── /shoes/[slug]  신발 상세
  └── /recommend     추천 페이지
```

**왜 나눴나요?**
- 메인 페이지: 일반 Header + Footer
- 상세 페이지: 뒤로가기 버튼이 있는 간단한 Header

---

## 🧩 components/ 폴더 (UI 조각)

재사용 가능한 UI 컴포넌트들입니다.

```
components/
├── ui/                     # 기본 UI (버튼, 카드 등) - shadcn/ui
│   ├── button.tsx
│   ├── card.tsx
│   └── badge.tsx
├── detail/                 # 상세 페이지 전용 컴포넌트
│   ├── hero-section.tsx    # 상단 이미지 + 기본 정보
│   ├── core-boxes.tsx      # 추천/비추천/특징 박스
│   ├── injury-prevention.tsx
│   └── ...
├── recommend/              # 추천 페이지 전용
│   ├── questionnaire.tsx   # 설문
│   └── result-card.tsx     # 결과 카드
├── compare/                # 비교 페이지 전용
├── home/                   # 홈 페이지 전용
├── header.tsx              # 공통 헤더
├── footer.tsx              # 공통 푸터
└── shoe-card.tsx           # 신발 카드 (여러 곳에서 사용)
```

### 컴포넌트 예시 (shoe-card.tsx)

```tsx
// Props 타입 정의
interface ShoeCardProps {
  shoe: Shoe;        // 신발 데이터
  showCompare?: boolean;  // 비교 버튼 표시 여부 (선택)
}

// 컴포넌트 함수
export function ShoeCard({ shoe, showCompare = true }: ShoeCardProps) {
  return (
    <div className="rounded-xl border p-4">
      <img src={shoe.image} alt={shoe.name} />
      <h3>{shoe.brand} {shoe.name}</h3>
      <p>₩{shoe.price?.toLocaleString()}</p>
      {showCompare && <button>비교하기</button>}
    </div>
  );
}
```

---

## 📊 lib/ 폴더 (데이터 & 유틸리티)

데이터와 헬퍼 함수들입니다.

```
lib/
├── data/
│   └── shoes/              # 신발 데이터 (브랜드별)
│       ├── index.ts        # 전체 export + 헬퍼 함수
│       ├── nike.ts         # Nike 신발 데이터
│       ├── adidas.ts
│       ├── asics.ts
│       └── ...
├── constants.ts            # 상수 (사이트 URL, 이름 등)
├── utils.ts                # 유틸리티 함수
└── recommendation.ts       # 추천 알고리즘
```

### 데이터 파일 예시 (nike.ts)

```typescript
import type { Shoe } from '@/types/shoe';

export const nikeShoes: Shoe[] = [
  {
    id: 'nike-pegasus-41',
    slug: 'nike-pegasus-41',
    brand: 'Nike',
    name: '페가수스 41',
    category: '입문화',
    rating: 4.5,
    price: 159000,
    specs: {
      weight: 280,
      cushioning: 8,
      stability: 6,
      // ...
    },
    // ...더 많은 데이터
  },
  // ...더 많은 신발
];
```

### index.ts (데이터 통합)

```typescript
// 모든 브랜드 데이터 가져오기
import { nikeShoes } from './nike';
import { adidasShoes } from './adidas';
// ...

// 전체 신발 배열
const allShoes: Shoe[] = [
  ...nikeShoes,
  ...adidasShoes,
  // ...
];

// 헬퍼 함수들
export function getShoes() {
  return allShoes;
}

export function getShoeBySlug(slug: string) {
  return allShoes.find(shoe => shoe.slug === slug);
}
```

---

## 📝 types/ 폴더 (타입 정의)

TypeScript 타입들을 정의합니다.

### shoe.ts 구조

```typescript
// 기본 타입들
export type ShoeStatus = "new" | "updated" | "featured";
export type ToBoxWidth = 'narrow' | 'standard' | 'wide';

// 인터페이스 (객체의 구조 정의)
export interface ShoeSpecs {
  weight: number;       // g
  cushioning: number;   // 1-10
  stability: number;    // 1-10
  drop: number;         // mm
  durability: number;   // km
}

// 메인 Shoe 인터페이스
export interface Shoe {
  id: string;           // 필수
  slug: string;         // 필수
  brand: string;        // 필수
  name: string;         // 필수
  category: string;     // 필수
  rating: number;       // 필수

  price?: number;       // 선택 (? 붙으면 선택)
  specs?: ShoeSpecs;    // 선택
  // ...
}

// 유틸리티 타입 (기존 타입 변형)
export type CompleteShoe = Shoe & Required<Pick<Shoe,
  'specs' | 'biomechanics' | 'injuryPrevention'
>>;

// 타입 가드 (런타임에 타입 확인)
export function isCompleteShoe(shoe: Shoe): shoe is CompleteShoe {
  return !!(shoe.specs && shoe.biomechanics);
}
```

---

## 🔄 hooks/ 폴더 (커스텀 훅)

React 훅을 모아둔 곳입니다.

### 훅이란?
React의 기능을 재사용 가능하게 만든 함수입니다. `use`로 시작합니다.

```typescript
// useShoeFilters.ts
export function useShoeFilters(shoes: Shoe[]) {
  const [filters, setFilters] = useState({
    brand: null,
    category: null,
    priceRange: null,
  });

  // 필터 적용된 신발 목록
  const filteredShoes = useMemo(() => {
    return shoes.filter(shoe => {
      if (filters.brand && shoe.brand !== filters.brand) return false;
      // ...더 많은 필터 로직
      return true;
    });
  }, [shoes, filters]);

  return { filters, setFilters, filteredShoes };
}

// 사용법
function HomePage() {
  const { filters, filteredShoes } = useShoeFilters(allShoes);
  // ...
}
```

---

## 🌍 contexts/ 폴더 (전역 상태)

여러 컴포넌트가 공유하는 상태입니다.

### compare-context.tsx 예시

```tsx
'use client';

import { createContext, useContext, useState } from 'react';

// Context 생성
const CompareContext = createContext<{
  compareList: string[];
  addToCompare: (id: string) => void;
  removeFromCompare: (id: string) => void;
} | null>(null);

// Provider 컴포넌트
export function CompareProvider({ children }) {
  const [compareList, setCompareList] = useState<string[]>([]);

  const addToCompare = (id: string) => {
    setCompareList(prev => [...prev, id]);
  };

  const removeFromCompare = (id: string) => {
    setCompareList(prev => prev.filter(item => item !== id));
  };

  return (
    <CompareContext.Provider value={{ compareList, addToCompare, removeFromCompare }}>
      {children}
    </CompareContext.Provider>
  );
}

// 사용을 위한 훅
export function useCompare() {
  const context = useContext(CompareContext);
  if (!context) throw new Error('CompareProvider 필요');
  return context;
}
```

**사용법**:
```tsx
// 어떤 컴포넌트에서든
function ShoeCard({ shoe }) {
  const { addToCompare } = useCompare();

  return (
    <button onClick={() => addToCompare(shoe.id)}>
      비교하기
    </button>
  );
}
```

---

## 🎨 스타일링 (Tailwind CSS)

CSS를 클래스로 작성합니다.

```tsx
// 기존 CSS
<div style={{
  padding: '16px',
  backgroundColor: 'white',
  borderRadius: '12px'
}}>

// Tailwind CSS
<div className="p-4 bg-white rounded-xl">
```

### 자주 쓰는 클래스

| 클래스 | 의미 |
|--------|------|
| `p-4` | padding: 16px |
| `m-2` | margin: 8px |
| `flex` | display: flex |
| `grid` | display: grid |
| `gap-4` | gap: 16px |
| `rounded-xl` | border-radius: 12px |
| `bg-white` | background: white |
| `text-primary` | 주요 텍스트 색상 |
| `hover:opacity-90` | 호버 시 투명도 90% |

---

## 🔑 핵심 파일 설명

### 1. src/app/layout.tsx (루트 레이아웃)
모든 페이지를 감싸는 최상위 레이아웃
- HTML 기본 구조 (`<html>`, `<body>`)
- 전역 스타일, 폰트
- Provider 설정 (CompareProvider)
- SEO 메타데이터

### 2. src/app/(main)/page.tsx (홈 페이지)
메인 페이지의 Server Component
- 서버에서 신발 데이터 로드
- HomeContent 클라이언트 컴포넌트에 전달

### 3. src/app/(detail)/shoes/[slug]/page.tsx (상세 페이지)
신발 상세 정보 표시
- `[slug]`가 URL의 신발 ID로 대체됨
- SEO용 메타데이터 생성
- JSON-LD 구조화 데이터

### 4. src/types/shoe.ts (타입 정의)
모든 신발 관련 타입의 중심
- Shoe 인터페이스
- 각종 서브 타입 (ShoeSpecs, BiomechanicsData 등)
- 유틸리티 타입 및 타입 가드

### 5. src/lib/data/shoes/index.ts (데이터 허브)
신발 데이터 접근의 중심
- 모든 브랜드 데이터 통합
- getShoes(), getShoeBySlug() 등 헬퍼 함수

---

## 📱 Server vs Client Component

### Server Component (기본값)
- 서버에서 실행
- 데이터베이스 직접 접근 가능
- SEO에 좋음
- `useState`, `useEffect` 사용 불가

```tsx
// Server Component (기본)
export default function Page() {
  const shoes = getShoes(); // 서버에서 데이터 로드
  return <div>{shoes.length}개 신발</div>;
}
```

### Client Component
- 브라우저에서 실행
- 사용자 상호작용 처리
- `useState`, `useEffect` 사용 가능
- 파일 최상단에 `'use client'` 필요

```tsx
'use client'; // 이 줄이 필수!

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}
```

---

## 🚀 데이터 흐름 요약

```
1. 사용자가 /shoes/nike-pegasus-41 접속

2. Next.js가 src/app/(detail)/shoes/[slug]/page.tsx 찾음

3. page.tsx에서:
   - slug = "nike-pegasus-41" 추출
   - getShoeBySlug("nike-pegasus-41") 호출
   - lib/data/shoes/index.ts에서 데이터 찾음
   - nike.ts의 nikeShoes 배열에서 해당 신발 반환

4. 컴포넌트들에 데이터 전달:
   - HeroSection에 shoe 전달
   - CoreBoxes에 shoe 전달
   - ShoeDetailTabs에 shoe 전달

5. HTML 생성되어 사용자에게 전달
```

---

## 💡 더 공부하면 좋은 것들

1. **TypeScript 기초**
   - 타입, 인터페이스, 제네릭
   - https://www.typescriptlang.org/ko/docs/handbook/

2. **React 기초**
   - 컴포넌트, Props, State, Hooks
   - https://ko.react.dev/

3. **Next.js App Router**
   - 라우팅, 레이아웃, 데이터 페칭
   - https://nextjs.org/docs/app

4. **Tailwind CSS**
   - 유틸리티 클래스 학습
   - https://tailwindcss.com/docs
