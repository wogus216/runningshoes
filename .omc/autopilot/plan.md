# 최종 구현 계획 (Critic 피드백 반영)

## 실행 그룹 A: 타입 + 컴포넌트 수정 (순차)

### A1. Shoe 타입 필드 추가
**파일**: `src/types/shoe.ts`
- Review 인터페이스에 `source?: string` 추가
- Shoe 인터페이스에 `oneliner?: string`, `editorComment?: string` 추가

### A2. reviews-section.tsx 수정
**파일**: `src/components/detail/reviews-section.tsx`
- L16: `"RunRepeat 전문 리뷰어": "bg-rose-600"` → `"에디터 분석": "bg-stone-800"`
- L20: `review.userType === 'RunRepeat 전문 리뷰어'` → `review.userType === '에디터 분석'`
- L53: `실사용자 리뷰` → `리뷰 및 분석`
- L56: `커뮤니티에서 가장 많이 언급된 실제 사용자 의견 (63% 온라인 구매)` → `에디터 분석 및 커뮤니티 의견을 종합했습니다`

### A3. quick-specs.tsx에 heelStack prop 추가
**파일**: `src/components/detail/quick-specs.tsx`
- Props에 `heelStack?: number` 추가
- L73: `40mm` → `{heelStack || '-'}mm`

### A4. hero-section.tsx 하드코딩 수정
**파일**: `src/components/detail/hero-section.tsx`
- L107: `40mm` → `{shoe.biomechanics?.stackHeight?.heel || '-'}mm`

### A5. shoe-detail-tabs.tsx 변경 (탭→CSS hidden + heelStack 전달)
**파일**: `src/components/detail/shoe-detail-tabs.tsx`
- L82-171: `{activeTab === 'xxx' && (...)}` → `<div className={activeTab === 'xxx' ? '' : 'hidden'}>...</div>`
- L86: QuickSpecs에 `heelStack={shoe.biomechanics?.stackHeight?.heel}` prop 추가
- SpecRadarChart는 ssr:false 유지 (Recharts → 크롤러에 불필요)

### A6. oneliner-summary.tsx 개선
**파일**: `src/components/detail/oneliner-summary.tsx`
- `'use client'` 제거 (순수 JSX, 상태/이펙트 없음)
- `shoe.oneliner`이 있으면 우선 사용, 없으면 기존 카테고리별 폴백

### A7. page.tsx 수정 (JSON-LD + EditorComment 연결 + 조작 통계 제거)
**파일**: `src/app/(detail)/shoes/[slug]/page.tsx`
- JSON-LD L190-208: 에디터 리뷰는 `@type: Organization`, name: 사이트명
- L290: "한국 러너 설문 (n=94)" 제거 → "에디터 분석"
- EditorComment 컴포넌트 import 및 연결:
  ```
  {shoe.editorComment && shoe.targetUsers && (
    <EditorComment
      comment={shoe.editorComment}
      recommendFor={shoe.targetUsers.recommended}
      notRecommendFor={shoe.targetUsers.notRecommended}
    />
  )}
  ```
  위치: OnelinerSummary 아래, CoreBoxes 위

## 실행 그룹 B: 데이터 수정 (병렬 가능)

### B1-B10. 10개 브랜드 파일 리뷰 명칭 변경 (각각 독립)
**파일**: `src/lib/data/shoes/{brand}.ts` × 10
- `'RunRepeat 전문 리뷰어'` → `'에디터 분석'` (총 68건)
- 각 파일이 독립적이므로 10개 병렬 실행 가능

## 실행 그룹 C: 콘텐츠 생성 (그룹 A, B 완료 후)

### C1-C10. 77개 신발 editorComment + oneliner 작성
**파일**: `src/lib/data/shoes/{brand}.ts` × 10
- 각 신발에 고유한 `editorComment` (2-4문장, 80-120단어)
- 각 신발에 고유한 `oneliner` (한 줄 요약)

**editorComment 작성 가이드라인:**
1. 반드시 해당 신발의 구체적 스펙 언급 (무게, 스택높이, 가격, 토박스 너비)
2. 반드시 1개 이상의 경쟁 제품과 비교
3. 한국 러너 관점의 고유 인사이트 (발볼, 평발, 가격 대비 가치)
4. 명확한 추천/비추천 의견
5. 문장 구조, 길이, 초점을 신발마다 다르게

**좋은 예:**
```
"페가수스 41은 15만 9천원이라는 가격에 ReactX 폼, 550km 내구성, 와이드 옵션까지 갖춘
입문화의 정석입니다. 비슷한 가격대의 Asics Gel-Nimbus 28(20만원)보다 4만원 저렴하면서
쿠셔닝은 거의 동급입니다. 다만 11mm 하이드롭이라 중족부 착지 러너에게는
Brooks Ghost Max(6mm 드롭)가 더 적합합니다."
```

**나쁜 예 (패턴화):**
```
"이 신발은 뛰어난 쿠셔닝과 안정성을 제공합니다. 초보 러너에게 추천하며
가격 대비 가치가 좋습니다. 다만 발볼이 좁을 수 있으니 와이드를 고려하세요."
```

## 검증 체크리스트

### Phase 1 (구조 수정) 검증
- [ ] `npm run build` 성공
- [ ] grep "RunRepeat 전문 리뷰어" → 0건
- [ ] grep "63% 온라인 구매" → 0건
- [ ] grep "n=94" → 0건
- [ ] reviews-section.tsx에서 에디터 분석 리뷰가 100점→5점 변환 + /100 배지 정상
- [ ] quick-specs에서 신발별 힐 스택 다르게 표시
- [ ] 빌드된 HTML에서 6개 탭 콘텐츠 모두 존재 (view-source 확인)

### Phase 2 (콘텐츠) 검증
- [ ] 77개 신발 모두 editorComment 존재
- [ ] 77개 신발 모두 oneliner 존재
- [ ] editorComment 간 유사도 50% 미만
- [ ] 페이지당 고유 텍스트 800단어 이상

## 병렬 실행 계획

```
[A1: 타입] → [A2-A6: 컴포넌트 수정 (병렬)] → [A7: page.tsx]
                    ↕ (동시)
              [B1-B10: 리뷰 명칭 변경 (병렬)]
                    ↓
              [C1-C10: 콘텐츠 생성 (병렬)]
                    ↓
              [QA: 빌드 검증]
```

**파일 소유권 충돌 방지:**
- A2만 reviews-section.tsx 수정
- A3만 quick-specs.tsx 수정
- A4만 hero-section.tsx 수정
- A5만 shoe-detail-tabs.tsx 수정
- A6만 oneliner-summary.tsx 수정
- A7만 page.tsx 수정
- B1-B10은 각자 다른 브랜드 파일 (충돌 없음)
- C1-C10은 B와 같은 파일이므로 B 완료 후 실행
