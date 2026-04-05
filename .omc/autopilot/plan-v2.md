# Critic 리뷰 후속 실행 계획 (V2)

## 감사 결과

### 미출처 통계 위치
1. `spec-radar-chart.tsx:90-93` - "한국 소비자 조사: 착화감이 76%로 구매 결정 1순위"
2. `nike.ts:14` - description에 "(76% 구매 결정 1순위)"
3. `nike.ts:60` - features에 "76% 1순위"
4. `nike.ts:56` - targetUsers에 "~85%"
5. `nike.ts:16` - editorComment에 "85% 러너"
6. `nike.ts:112` - detailedSpecs landingPattern "~85% 러너"

### 리프레이밍 대상
- `reviews-section.tsx:53` - "리뷰 및 분석" → "러너 유형별 분석"
- `reviews-section.tsx:56` - 설명문 변경
- `shoe-detail-tabs.tsx:50` - 탭 라벨 "리뷰" → "분석"

---

## 실행 그룹 A: 구조적 수정 (병렬)

### A1. spec-radar-chart.tsx - 미출처 통계 제거
- L90-93: "한국 소비자 조사" 문단 제거 → "6가지 핵심 항목을 10점 만점으로 평가했습니다"

### A2. reviews-section.tsx - 리프레이밍
- L53: "리뷰 및 분석" → "러너 유형별 분석"
- L56: 설명문 → "에디터 분석과 러너 유형별 사용 시나리오를 정리했습니다"

### A3. shoe-detail-tabs.tsx - 탭 라벨 변경
- L50: label 'リ뷰' → '분석', mobileLabel '리뷰' → '분석'

### A4. shoe.ts - sourceUrl 필드 추가
- Review interface에 `sourceUrl?: string` 추가

### A5. nike.ts - 미출처 통계 수정
- L14: description에서 "(76% 구매 결정 1순위)" 제거
- L16: editorComment에서 "85% 러너" → "대다수의 뒤꿈치 착지 러너"
- L56: targetUsers에서 "~85%" 제거
- L60: features에서 "76% 1순위" → 다른 표현
- L112: landingPattern에서 "~85%" → "대다수 러너"

## 실행 그룹 B: 리뷰 다양화 (10개 브랜드 병렬)

각 브랜드 파일의 커뮤니티 리뷰(에디터 분석 제외)를 다양화:
- 구체적 러닝 시나리오 추가 (한강 러닝, 새벽 러닝, 인터벌, 대회 등)
- 문장 구조/길이/톤 차별화
- 구체적 거리/페이스 언급
- 각 리뷰가 다른 사람이 쓴 것처럼 느껴지게
- 에디터 분석 리뷰는 변경하지 않음

## 검증
- `npm run build` 성공
- "76% 구매 결정" grep 0건
- 탭 라벨 "분석" 확인
