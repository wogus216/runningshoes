---
id: shoe-data-workflow
name: 신발 데이터 추가 워크플로우
description: 새 러닝화를 사이트에 추가하는 전체 워크플로우 (데이터 수집 → 이미지 → 입력)
source: project
triggers: ["신발 추가", "새 신발", "러닝화 추가", "데이터 수집", "RunRepeat", "랩 데이터"]
quality: high
---

# 신발 데이터 추가 워크플로우

## The Insight
새 러닝화를 추가할 때 RunRepeat 랩 데이터, 전문 리뷰, 한국 가격을 종합해야 합니다.

## Recognition Pattern
- "신발 추가", "새 신발", "러닝화 추가" 언급
- 특정 브랜드/모델명 언급
- RunRepeat, Believe in the Run 등 리뷰 사이트 언급

## The Approach

### 1. 데이터 수집 (Chrome DevTools MCP)

**RunRepeat 랩 데이터:**
```javascript
// https://runrepeat.com/{brand}-{model}
// evaluate_script로 추출: SA, HA, 에너지 리턴%, 무게, 토박스 너비
```

**한국 가격 확인:**
- Nike: nike.com/kr/
- Adidas: adidas.co.kr/
- Asics: asics.co.kr/
- New Balance: nbkorea.com/

### 2. 이미지 수집
```bash
mkdir -p public/images/shoes/{brand}/{model}
# Believe in the Run 등에서 이미지 다운로드
# 배경 제거 → WebP 변환
```

### 3. 데이터 입력
```typescript
// src/lib/data/shoes/{brand}.ts
{
  id: '{brand}-{model}',
  slug: '{brand}-{model}',
  brand: 'Brand Name',
  name: 'Model Name',
  // ... Shoe 타입 필드 채우기
}
```

### 4. 빌드 확인
```bash
npm run build
```

## Key Data Points

| 필드 | 소스 | 변환 |
|------|------|------|
| SA (충격흡수) | RunRepeat | 높을수록 부드러움 |
| HA (경도) | RunRepeat | 낮을수록 부드러움 |
| 에너지 리턴 | RunRepeat | % 그대로 |
| 토박스 너비 | RunRepeat | <68mm: narrow, 68-75mm: standard, >75mm: wide |
| 가격 | 한국 공식 사이트 | 원 단위 MSRP |

## Gotchas
- Slug 형식: `new-balance-` (not `newbalance-`)
- `id`와 `slug`는 항상 동일
- `alternatives`, `similarShoes`는 실제 존재하는 slug만 사용
- 가격은 반드시 한국 공식 사이트 기준
