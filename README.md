<<<<<<< HEAD
=======
# runningshoes
러닝화 비교 안내


>>>>>>> refs/remotes/origin/main
# Running Shoes Hub

러닝화 정보를 모아 비교할 수 있는 Next.js 14 앱입니다. 브랜드별 정적 페이지, 제품 상세 페이지, 비교 테이블 등을 제공하며, 샘플 데이터로 빠르게 UI를 확인할 수 있도록 구성했습니다.

## 주요 기능
- **정적 사이트 생성(SSG)**: `brands/[slug]`와 `products/[slug]` 페이지는 `generateStaticParams()` 기반으로 미리 빌드됩니다.
- **SEO 대응**: 각 페이지별 `generateMetadata()` 구현과 제품 상세 JSON-LD(구조화 데이터) 삽입.
- **제품 비교 도구**: `/compare?ids=product-a,product-b` 형태로 제품 slug를 넘기면 스펙을 표로 비교합니다.
- **샘플 데이터 포함**: `src/data/*.json`에 3개의 브랜드, 3개의 제품이 들어 있으며, `src/lib/data.ts`/`types.ts`로 타입 안전한 접근을 제공합니다.
- **UI 구성요소**: shadcn/ui 기반 버튼, 카드, 탭 등 공통 컴포넌트와 헤더/푸터, 제품 카드, 리뷰 섹션, 비교 테이블 구현.

## 기술 스택
- Next.js 14 (`app` 디렉터리 구조)
- TypeScript & ESLint
- Tailwind CSS, shadcn/ui
- Zod (추후 검증 로직 확장 대비)
- next-sitemap (빌드 후 sitemap/robots.txt 생성)

## 시작하기
```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000`을 열어 UI를 확인하세요.

## 빌드 및 배포
```bash
npm run build
npm run start
```

빌드가 끝나면 `postbuild` 스크립트로 `sitemap.xml`과 `robots.txt`가 생성됩니다.

## 유용한 경로
- 메인 레이아웃: `src/app/layout.tsx`
- 홈 / 브랜드 / 제품 / 비교 페이지: `src/app/*`
- 재사용 컴포넌트: `src/components/*`
- shadcn/ui 프리미티브: `src/components/ui/*`
- 데이터 & 타입: `src/data/*.json`, `src/lib/data.ts`, `src/lib/types.ts`

## 제품 비교 예시
```
/compare?ids=metaspeed-sky-4,on-cloudsurfer-max
```

위 URL로 이동하면 지정한 slug에 해당하는 제품이 표로 비교됩니다. 쉼표로 slug를 추가하면 여러 제품을 비교할 수 있습니다.

## 구조화 데이터
`products/[slug]` 페이지의 `<script type="application/ld+json">` 블록에서 JSON-LD를 주입하여 검색엔진 제품 리치 결과에 대응합니다. 데이터에 `<` 문자가 포함되더라도 안전하게 렌더링되도록 이스케이프 처리를 적용했습니다.

## 참고
- `public/shoes/placeholder.jpg`는 데모용 이미지입니다.
- Tailwind 설정 및 shadcn 프리셋은 `tailwind.config.ts`, `components.json`에서 확인할 수 있습니다.
