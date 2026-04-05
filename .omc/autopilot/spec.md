# AdSense "가치 없는 콘텐츠" 해결 프로젝트 사양서

## Phase 1: 구조적 무결성 수정 (콘텐츠 생성 불필요)

### P0 - CRITICAL

| # | 작업 | 파일 | 상세 |
|---|------|------|------|
| 1 | 리뷰 출처 명칭 변경 | 10개 브랜드 .ts 파일 | `'RunRepeat 전문 리뷰어'` → `'에디터 분석'` (68건) |
| 2 | JSON-LD 저자 타입 수정 | page.tsx L190-208 | `@type: Person` → `@type: Organization` (에디터 리뷰) |
| 3 | 조작된 통계 제거 | reviews-section.tsx L56, page.tsx L290 | "63% 온라인 구매", "한국 러너 설문 (n=94)" |
| 4 | 하드코딩 40mm 수정 | hero-section.tsx L107, quick-specs.tsx L73 | 실제 shoe.biomechanics.stackHeight.heel 사용 |

### P1 - HIGH

| # | 작업 | 파일 | 상세 |
|---|------|------|------|
| 5 | 탭 렌더링 방식 변경 | shoe-detail-tabs.tsx | 조건부 마운트 → CSS hidden (크롤러 노출) |
| 6 | Shoe 타입에 필드 추가 | shoe.ts | `oneliner?: string`, `editorComment?: string` |
| 7 | EditorComment 컴포넌트 연결 | page.tsx | 상세 페이지에 에디터 코멘트 렌더링 |
| 8 | OnelinerSummary 개선 | oneliner-summary.tsx | `'use client'` 제거, shoe.oneliner 우선 사용 |

## Phase 2: 콘텐츠 풍부화 (신발별 고유 텍스트)

| # | 작업 | 범위 | 페이지당 추가 단어 |
|---|------|------|-------------------|
| 1 | 77개 신발 editorComment 작성 | 10개 브랜드 파일 | +80-120단어 |
| 2 | 77개 신발 oneliner 작성 | 10개 브랜드 파일 | +10-15단어 |
| 3 | 리뷰 다양화 (패턴 탈피) | 10개 브랜드 파일 | 품질 개선 |

## 타입 변경

```typescript
// Review 인터페이스에 추가
source?: string;      // 'editor' | 'community'
sourceUrl?: string;

// Shoe 인터페이스에 추가
oneliner?: string;       // 신발별 고유 한줄 요약
editorComment?: string;  // 2-4문장 에디터 분석
```

## 검증 체크리스트

- [ ] `npm run build` 성공
- [ ] "RunRepeat 전문 리뷰어" 0건
- [ ] "63% 온라인 구매" 0건
- [ ] "n=94" 0건
- [ ] 신발별 스택 높이 정확
- [ ] 모든 탭 콘텐츠 HTML에 존재
- [ ] EditorComment 정상 렌더링
