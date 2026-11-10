# 신발 데이터 수집·이미지 처리 상세 절차

> **새 신발을 추가하거나 기존 신발의 스펙을 갱신할 때 읽는 문서입니다.** 그 외의 세션에서는 볼 일이 없습니다.
> (2026-08-27 폴백 절차 분리 → 2026-09-01 수집 절차 본문까지 이관. CLAUDE.md에는 **규칙**만 남겼습니다.)
>
> | 절 | 언제 읽나 |
> |---|---|
> | **C** | 새 신발 데이터를 수집할 때 — researcher 호출 템플릿·JSON 스키마·랩수치→specs 매핑·신상 미확인 처리 프로토콜·수집 체크리스트 |
> | **D** | 가격/출처를 찾을 때 — 한국 공식몰 URL 표, 브랜드 프레스 페이지 |
> | **E** | 모델 버전을 올릴 때 (slug 일괄 교체) |
> | **A** | researcher가 실패해 Chrome DevTools MCP로 직접 긁어야 할 때 |
> | **B** | `npm run images`가 실패해 손으로 처리할 때 |
>
> **기본 경로는 C절이고, A·B는 그게 막혔을 때만 펴 봅니다.**


> **2026-11-10 검증 원칙:** 이 절차는 [콘텐츠 검증 정책](../content-verification-policy.json)을 따른다. 이전 버전 수치·제조사 개선율·주관적 감상으로 신제품의 실측값을 만들지 않는다. 아래의 미확인 처리 절차는 과거의 신상 추정 절차를 대체한다. 기존 DB와 게시글도 검증 대상이며 원문 근거를 대신하지 않는다.

---


## A. 리뷰 데이터 수집 — Chrome DevTools MCP 폴백


researcher 서브에이전트(C절)가 실패했을 때만 사용합니다. 구체적으로는 이 셋입니다:

- Nike Korea 등 **봇 차단** 사이트의 가격 확인이 필요할 때
- **JS 렌더링**으로만 보이는 데이터일 때
- 리뷰 사이트에서 **이미지 URL을 추출**해야 할 때 (다운로드용)

### RunRepeat 랩 데이터 수집 (폴백)

**1. Chrome DevTools MCP로 페이지 접속:**

```javascript
// navigate_page로 RunRepeat 신발 페이지 이동
// 예: https://runrepeat.com/asics-gt-2000-14
```

**2. take_snapshot으로 페이지 구조 확인:**

주요 데이터 위치 파악 후 필요한 정보 추출

**3. evaluate_script로 데이터 추출:**

```javascript
// RunRepeat 랩 데이터 추출 스크립트
() => {
  const data = {};

  // 무게 (Weight)
  const weightEl = document.querySelector('[data-test="weight"]') ||
                   Array.from(document.querySelectorAll('div')).find(el =>
                     el.textContent.includes('Weight') || el.textContent.includes('g')
                   );
  if (weightEl) data.weight = weightEl.textContent.match(/\d+\s*g/)?.[0];

  // 스택 높이 (Stack Height)
  const stackEl = document.querySelector('[data-test="stack"]') ||
                  Array.from(document.querySelectorAll('div')).find(el =>
                    el.textContent.includes('Stack') || el.textContent.includes('mm')
                  );
  if (stackEl) {
    const stackText = stackEl.textContent;
    data.heelStack = stackText.match(/Heel[:\s]*(\d+\.?\d*)\s*mm/i)?.[1];
    data.foreFootStack = stackText.match(/Forefoot[:\s]*(\d+\.?\d*)\s*mm/i)?.[1];
  }

  // 드롭 (Drop)
  const dropEl = document.querySelector('[data-test="drop"]');
  if (dropEl) data.drop = dropEl.textContent.match(/\d+\.?\d*/)?.[0];

  // SA (Shock Absorption) - 충격 흡수
  const saElements = Array.from(document.querySelectorAll('div')).filter(el =>
    el.textContent.includes('SA') || el.textContent.includes('Shock')
  );
  if (saElements.length > 0) {
    data.saHeel = saElements[0].textContent.match(/Heel[:\s]*(\d+)/i)?.[1];
    data.saForefoot = saElements[0].textContent.match(/Forefoot[:\s]*(\d+)/i)?.[1];
  }

  // HA (Hardness) - 경도
  const haElements = Array.from(document.querySelectorAll('div')).filter(el =>
    el.textContent.includes('HA') || el.textContent.includes('Hardness')
  );
  if (haElements.length > 0) {
    data.ha = haElements[0].textContent.match(/(\d+\.?\d*)\s*HA/i)?.[1];
  }

  // 에너지 리턴 (Energy Return)
  const energyElements = Array.from(document.querySelectorAll('div')).filter(el =>
    el.textContent.includes('Energy') || el.textContent.includes('%')
  );
  if (energyElements.length > 0) {
    data.energyReturnHeel = energyElements[0].textContent.match(/Heel[:\s]*(\d+\.?\d*)%/i)?.[1];
    data.energyReturnForefoot = energyElements[0].textContent.match(/Forefoot[:\s]*(\d+\.?\d*)%/i)?.[1];
  }

  // 토박스 너비 (Toe Box Width)
  const toeBoxEl = Array.from(document.querySelectorAll('div')).find(el =>
    el.textContent.includes('Toe box') || el.textContent.includes('Forefoot width')
  );
  if (toeBoxEl) data.toeBoxWidth = toeBoxEl.textContent.match(/(\d+\.?\d*)\s*mm/)?.[1];

  return data;
}
```

**4. 수집한 데이터 해석:**

- 정확한 모델·세대·남녀·폭·시험 사이즈와 원문 위치를 먼저 기록한다. 값이 없으면 `null`로 수집하고 제품 DB에는 현재 타입이 허용하는 미확인 경로를 사용한다.
- SA는 충격흡수 지표이며 폼 경도나 특정 사람의 편안함과 같지 않다. 힐·전족부를 나눠 기록한다.
- 에너지 반환율은 시험 조건의 기계적 지표다. 러닝 이코노미·기록 단축률로 환산하지 않는다.
- Asker C·Shore A/구 HA 표기는 원문 방법과 함께 보존하고 서로 임의 환산하지 않는다.
- 맨발 폭·라스트 내부 최광폭·엄지 부위 폭·밑창 외부 폭을 구분한다. 폭 수치 하나로 한국인 전체의 적합성이나 필수 사이즈업을 처방하지 않는다.
- 구조·수치가 확인돼도 통증 치료·부상 예방·최적 페이스를 추론하지 않는다.
- 점수가 필요한 기존 경로는 아래 C절의 편집 점수 기준과 현재 코드 정책을 함께 확인한다. 값이 모자라면 임의 점수로 채우지 않는다.

### Believe in the Run 리뷰 수집

> ⚠️ 이 사이트는 **후기를 수집하지 않는다.** 외부 리뷰(Believe in the Run·Doctors of Running·Road Trail Run 등)에서 읽어 온 내용은
> 본문(editorComment·detailedSpecs 등) 근거의 **실명 출처**로만 쓴다. 리뷰 텍스트를 `reviews`에 옮기거나, 리뷰 점수를 `rating`으로 환산하지 않는다.
> `reviews` 작성 형식은 C절 「수집한 데이터 → reviews 작성」을 따른다.

**1. 페이지 접속 및 스냅샷:**

```javascript
// navigate_page로 리뷰 페이지 이동
// 예: https://believeintherun.com/shoe-reviews/new-balance-1080-v15-review/
```

**2. take_snapshot으로 리뷰 내용 확인:**

주요 섹션:
- "WHAT YOU NEED TO KNOW" - 기본 스펙
- "THE SCORE" - 점수 (Form, Fit, Function)
- "WHAT WE LIKE" - 장점
- "WHAT WE DON'T LIKE" - 단점
- "FINAL THOUGHTS" - 종합 평가

**3. 텍스트 콘텐츠 추출:**

take_snapshot의 텍스트를 직접 읽거나, evaluate_script로 추출:

```javascript
() => {
  const review = {};

  // 기본 스펙
  const specElements = document.querySelectorAll('[class*="spec"]');
  review.weight = document.body.textContent.match(/(\d+\.?\d*)\s*oz.*\((\d+)\s*g\)/)?.[2];
  review.stack = document.body.textContent.match(/(\d+\.?\d*)\s*mm in heel.*(\d+\.?\d*)\s*mm in forefoot/)?.[0];
  review.drop = document.body.textContent.match(/(\d+)\s*mm drop/)?.[1];

  // 점수
  const scoreText = document.body.textContent;
  review.totalScore = scoreText.match(/(\d+)\s*out of\s*(\d+)/)?.[1];
  review.formScore = scoreText.match(/FORM.*?(\d+)\s*out of\s*5/s)?.[1];
  review.fitScore = scoreText.match(/FIT.*?(\d+)\s*out of\s*5/s)?.[1];
  review.functionScore = scoreText.match(/FUNCTION.*?(\d+)\s*out of\s*5/s)?.[1];

  // 가격
  review.price = document.body.textContent.match(/\$(\d+)/)?.[1];

  // 출시일
  review.releaseDate = document.body.textContent.match(/Available\s+(\w+\s+\d{4})/)?.[1];

  return review;
}
```

**4. 추출한 내용 정리:**

리뷰 텍스트는 복사해 오지 않는다. 장점·단점·평가는 본문에 **실명 출처를 붙여** 근거로만 쓰고(예: "Believe in the Run은 ~라고 평가했다"),
점수(Form/Fit/Function, X/15, Tier)는 **표기 그대로 기록만** 한다 — `reviews.rating`으로 환산하지 않는다.
`reviews`는 실측 수치를 러너 유형별로 해석한 적합성 분석이며, 형식은 아래와 같다(자세한 규칙은 C절):

```typescript
reviews: [
  {
    userType: '예상 적합 — {러너 유형·조건}',   // rating 필드 없음
    text: '{실측 수치}라 {조건}인 경우에 맞는 수치입니다. 다만 {약점 실측}이라 {상황}에서는 {한계}가 생길 수 있습니다.',
  },
]
```

### Doctors of Running 리뷰 수집

동일한 방식으로 Chrome DevTools MCP 사용:

```javascript
// 페이지 접속
navigate_page('https://www.doctorsofrunning.com/...')

// 스냅샷으로 구조 파악
take_snapshot()

// 필요 시 evaluate_script로 데이터 추출
```


---


## B. 신발 이미지 처리 — 수동 절차


`npm run images <brand> <model>`가 배경제거·WebP 변환·파일명 표준화를 한 번에 처리합니다.
아래는 그 스크립트가 실패하거나 세부 조정이 필요할 때의 수동 절차입니다.

## 신발 이미지 처리 워크플로우

### 이미지 수집 및 처리 전체 프로세스

새 신발을 추가할 때 이미지는 다음 단계를 거쳐 처리됩니다:

```
1. 이미지 다운로드
   ↓
2. 배경 제거 (PNG 변환)
   ↓
3. WebP 최적화
   ↓
4. 데이터 파일 업데이트
```

### 1. 이미지 다운로드

#### 방법 A: 리뷰 사이트에서 다운로드 (권장)

**Believe in the Run, Doctors of Running 등에서 이미지 수집:**

```bash
# 1. 디렉토리 생성
mkdir -p public/images/shoes/{brand}/{model}

# 예: New Balance 1080 v15
mkdir -p public/images/shoes/newbalance/1080v15

# 2. Chrome DevTools MCP로 페이지 접속
# - Believe in the Run 리뷰 페이지로 이동
# - evaluate_script로 이미지 URL 추출

# 3. 이미지 다운로드
cd public/images/shoes/newbalance/1080v15
curl -O "https://believeintherun.com/.../shoe-side.jpg"
curl -O "https://believeintherun.com/.../shoe-front.jpg"
curl -O "https://believeintherun.com/.../shoe-back.jpg"
curl -O "https://believeintherun.com/.../shoe-outsole.jpg"
curl -O "https://believeintherun.com/.../shoe-angle.jpg"

# 4. 파일명 정리
mv "long-filename-side.jpg" "side.jpg"
mv "long-filename-front.jpg" "front.jpg"
mv "long-filename-back.jpg" "back.jpg"
mv "long-filename-outsole.jpg" "outsole.jpg"
mv "long-filename-angle.jpg" "angle.jpg"
```

**Chrome DevTools MCP로 이미지 URL 찾기:**

```javascript
// evaluate_script 예시
() => {
  const images = document.querySelectorAll('img');
  const shoeImages = [];

  images.forEach((img, index) => {
    const src = img.src;
    const alt = img.alt || '';
    if (src.includes('shoe-name') || alt.includes('shoe-name')) {
      shoeImages.push({
        index,
        src,
        alt,
        width: img.naturalWidth,
        height: img.naturalHeight
      });
    }
  });

  return shoeImages;
}
```

#### 방법 B: 브랜드 공식 사이트에서 다운로드

브랜드 사이트에서 직접 다운로드 (주의: 접근 제한이 있을 수 있음)

### 2. 배경 제거

**Node.js 스크립트로 자동화:**

```bash
# 프로젝트 루트에서 실행
node -e "
const { removeBackground } = require('@imgly/background-removal-node');
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = 'public/images/shoes/{brand}/{model}';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jpg'));

(async () => {
  for (const file of files) {
    const filePath = path.join(dir, file);
    console.log(\`Processing: \${filePath}\`);

    try {
      // JPG/PNG를 PNG로 변환
      const pngBuffer = await sharp(filePath).png().toBuffer();
      const blob = new Blob([pngBuffer], { type: 'image/png' });

      // 배경 제거
      const resultBlob = await removeBackground(blob, {
        model: 'medium',
        output: { format: 'image/png' }
      });

      const arrayBuffer = await resultBlob.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      // PNG 저장
      const outputPath = filePath.replace(/\\.(jpg|jpeg)$/i, '.png');
      fs.writeFileSync(outputPath, buffer);

      // 원본 삭제
      if (filePath !== outputPath) {
        fs.unlinkSync(filePath);
      }

      const stats = fs.statSync(outputPath);
      console.log(\`  Done: \${(stats.size / 1024).toFixed(1)} KB\`);
    } catch (err) {
      console.error(\`  Error: \${err.message}\`);
    }
  }
  console.log('All backgrounds removed!');
})();
"
```

**또는 기존 스크립트 사용:**

```bash
# scripts/remove-background.js 수정 후 실행
# INPUT_DIR을 특정 신발 폴더로 설정
node scripts/remove-background.js
```

### 3. WebP 변환 및 최적화

**PNG → WebP 변환:**

```bash
node -e "
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = 'public/images/shoes/{brand}/{model}';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.png'));

(async () => {
  for (const file of files) {
    const inputPath = path.join(dir, file);
    const outputPath = inputPath.replace('.png', '.webp');

    console.log(\`Converting: \${file}\`);

    await sharp(inputPath)
      .resize(800, null, {
        withoutEnlargement: true,
        fit: 'inside'
      })
      .webp({ quality: 85 })
      .toFile(outputPath);

    const inputSize = fs.statSync(inputPath).size;
    const outputSize = fs.statSync(outputPath).size;
    const reduction = ((1 - outputSize / inputSize) * 100).toFixed(1);

    console.log(\`  \${(inputSize / 1024).toFixed(0)} KB → \${(outputSize / 1024).toFixed(0)} KB (\${reduction}% reduction)\`);

    // 원본 PNG 삭제
    fs.unlinkSync(inputPath);
  }
  console.log('All images converted to WebP!');
})();
"
```

**설정:**
- **크기**: 최대 800px 너비 (비율 유지)
- **품질**: 85% (파일 크기와 품질의 균형)
- **포맷**: WebP (70-85% 파일 크기 감소)

### 4. 데이터 파일 업데이트

이미지 처리 완료 후 브랜드 데이터 파일에 경로 추가:

```typescript
// src/lib/data/shoes/newbalance.ts
{
  id: 'new-balance-1080-v15',
  slug: 'new-balance-1080-v15',
  brand: 'New Balance',
  name: '1080 V15',
  image: '/images/shoes/newbalance/1080v15/side.webp',
  images: [
    '/images/shoes/newbalance/1080v15/side.webp',
    '/images/shoes/newbalance/1080v15/front.webp',
    '/images/shoes/newbalance/1080v15/back.webp',
    '/images/shoes/newbalance/1080v15/angle.webp',
    '/images/shoes/newbalance/1080v15/outsole.webp',
  ],
  // ... rest of data
}
```

### 이미지 파일 네이밍 규칙

**표준 파일명 (5개):**
1. `side.webp` - 측면 (메인 이미지)
2. `front.webp` - 정면
3. `back.webp` - 뒷면 (힐)
4. `angle.webp` - 사선/각도
5. `outsole.webp` - 아웃솔 (밑창)

**선택 파일명:**
- `top.webp` - 상단 뷰
- `detail.webp` - 디테일 샷

### 디렉토리 구조

```
public/images/shoes/
├── nike/
│   ├── pegasus-41/
│   │   ├── side.webp
│   │   ├── front.webp
│   │   ├── back.webp
│   │   ├── angle.webp
│   │   └── outsole.webp
│   └── vaporfly-3/
├── newbalance/
│   ├── 1080v15/
│   │   ├── side.webp
│   │   ├── front.webp
│   │   ├── back.webp
│   │   ├── angle.webp
│   │   └── outsole.webp
│   └── rebelv5/
└── asics/
    └── ...
```

### 이미지 출처 기록

모든 이미지는 `public/images/shoes/IMAGE_CREDITS.md`에 출처 기록:

```markdown
## New Balance 1080 v15
- Source: Believe in the Run (https://believeintherun.com/shoe-reviews/new-balance-1080-v15-review/)
- Date: 2026-01-24
- Images: 5 (side, front, back, angle, outsole)
```

### 빠른 참고: 전체 커맨드 체인

```bash
# 1. 디렉토리 생성 및 이동
mkdir -p public/images/shoes/{brand}/{model}
cd public/images/shoes/{brand}/{model}

# 2. 이미지 다운로드 (curl 사용)
curl -O "url1" && curl -O "url2" && curl -O "url3"

# 3. 파일명 정리
mv "long-name-1.jpg" "side.jpg"
# ... repeat

# 4. 프로젝트 루트로 이동
cd /path/to/project

# 5. 배경 제거 (백그라운드 실행)
node scripts/remove-background-inline.js &

# 6. 완료 대기 후 WebP 변환
node scripts/optimize-to-webp.js

# 7. 데이터 파일 업데이트
# Edit src/lib/data/shoes/{brand}.ts

# 8. 빌드 확인
npm run build
```

### 주의사항

1. **저작권**: 이미지는 리뷰 목적으로만 사용 (공정 사용)
2. **해상도**: 원본 해상도가 너무 낮으면 (< 500px) 다른 소스 찾기
3. **배경**: 흰색/투명 배경이 이상적
4. **파일 크기**: WebP 변환 후 각 파일은 30-60KB 목표
5. **속도**: 배경 제거는 이미지당 10-30초 소요 (백그라운드 실행 권장)

---

## C. 리뷰 데이터 수집 — 기본 경로 (researcher 서브에이전트)

**왜 이 방식인가:**
- 에이전트가 자체 컨텍스트에서 WebFetch/WebSearch 반복 → **정제된 JSON만** 메인 컨텍스트로 반환
- Chrome DevTools MCP 스냅샷(10k~30k 토큰) 대비 1k~2k 토큰으로 해결
- RunRepeat/BITR/DOR은 대부분 정적 HTML이라 WebFetch로 충분

### 호출 템플릿

```
Agent({
  subagent_type: "oh-my-claudecode:researcher",
  description: "페가수스 42 데이터 수집",
  prompt: `러닝화 리뷰 데이터를 수집해서 아래 JSON 스키마로 반환해줘.

대상: Nike Pegasus 42

수집 소스 (WebFetch 우선, 실패 시 WebSearch):
1. **RunRepeat 랩 데이터** — https://runrepeat.com/{brand}-{model}
   - weight(g), heelStack/forefootStack(mm), drop(mm)
   - SA(힐/전족부), HA, energyReturn%(힐/전족부), toeBoxWidth(mm)
   - 정확 모델의 랩이 미게시·접근 실패이면 null. 전작은 별도 모델의 참고 이력으로만 수집하며 신제품 필드에 대입하지 않는다
2. **Believe in the Run 리뷰** — https://believeintherun.com/shoe-reviews/{model}-review/
   - 장점 3-5개, 단점 2-4개, 추천/비추천 대상
   - 점수: **신 Tier 시스템**(A/B/C/D) 또는 구 숫자(X/15) 둘 중 실제 표기 그대로
   - 핵심 인용 1-2개 (본문 근거의 실명 출처용 — `reviews` 텍스트로 옮기지 않는다)
   - 이미지 URL 5-8개 (side/front/back/angle/outsole — 다운로드용)
3. **Road Trail Run 리뷰** — roadtrailrun.com 검색 (신상 리뷰 빠름, 기술 비교 상세)
4. **Doctors of Running 리뷰** (있으면) — 의학적 관점 (평발/무릎/아킬레스)
5. **제조사 Newsroom 공식 발표** — about.nike.com/newsroom 등
   - 이전 버전 대비 변경점 (미드솔 폼, 스택, 드롭, 무게)
   - 제조사 주장 (예: "에너지 리턴 +15%")
6. **한국 공식 가격** — 정확한 국내 SKU·남녀·폭·색상·정가/판매가·표시 시점을 원문에서 확인. 검색 요약은 원문 탐색용이며 본문을 읽지 못하면 현재 정가·재고 미확인으로 기록한다. 접근 실패를 미출시·단종으로 바꾸지 않는다

반환 JSON 스키마:
{
  "labData": { weight, heelStack, forefootStack, drop, saHeel, saForefoot, ha, energyReturnHeel, energyReturnForefoot, toeBoxWidth, durabilityNote },
  "bitrReview": { scoringSystem, totalScore, pros: [], cons: [], recommendedFor: [], notRecommendedFor: [], keyQuotes: [], imageUrls: [] },
  "rtrReview": { keyPoints: [], comparison: "..." },
  "dorReview": { keyPoints: [], medicalPerspective },
  "price": { msrp_krw, source, wideOptionAvailable, releaseDate, releaseStatus },
  "changesFromPrevVersion": [ "..." ],
  "prevVersionLabDataForReference": { modelSlug, source, checkedAt, data /* 별도 모델의 참고 이력. 신제품 수치·점수 계산에 사용 금지 */ },
  "measurementConditions": { modelVersion, sex, width, sampleSize, region, unit, method },
  "sourceEvidence": [ { url, locator, supportedClaim, checkedAt, conflict, limitation } ],
  "sourcesUsed": [...],
  "sourcesFailed": [ { source, reason } ]
}

실패한 소스는 sourcesFailed에 이유와 함께 명시. 원문 위치·조건·충돌·확인 범위를 기록한다. 검색 요약만으로 확인 처리하지 않는다. 데이터 없으면 null; 전작 대입·개선율 계산·평균값 채우기 금지.`
})
```

### 수집한 데이터 → Shoe 타입 매핑

```typescript
// 아래는 기존 편집 점수 기준의 설명이다. 원문 실측값이나 임상 효과가 아니다.
// 정확 모델의 입력과 아래 조건을 모두 확보했을 때만 사용하며, 미확인 점수의 기본값을 만들지 않는다.
// Shoe.specs는 선택 항목이므로 필요한 값이 미확인인 신상은 객체를 생략할 수 있다.
specs: {
  weight: labData.weight,
  cushioning: /* 힐 SA 기준(2026-10-20 개정): 150+ → 10, 140~150 → 9, 120~140 → 8, 100~120 → 7. 경계값은 상위 구간 포함(150→10, 140→9, 120→8, 100→7). SA 100 미만은 구간 없음(점수 변경 대상 아님) */,
  responsiveness: /* 전족부 에너지 리턴% 기준(2026-10-20 개정): 75%+ → 10, 70~75 → 9, 65~70 → 8, 55~65 → 7, 45~55 → 6. 경계값은 상위 구간 포함(75→10, 70→9, 65→8, 55→7, 45→6). 전족부 값이 없고 힐 값만 있으면 힐 값으로 계산하되 detailedSpecs에 '힐 기준'이라고 적는다. 45% 미만은 구간 없음 */,
  stability: /* 정량화 기준 미정. 새 점수 생성·전작 대입 금지 */,
  drop: labData.drop,
  // durability: 주행 수명을 직접 지지하는 근거가 없으면 생략. 마모 mm를 km로 변환하지 않는다.
}

// ── 2026-10-20 운영자 결정 (클라우드 specs 감사 S1~S6 후속) ──
// 확정: ① 쿠션·반응성 9~10점 구간 확장 ② 쿠션=힐 SA, 반응성=전족부 에너지 리턴 ③ 경계값은 상위 구간 포함
//       ④ toBoxWidth 는 상대·형태 기준(CLAUDE.md 2026-09-30 개정 그대로) — 같은 랩(RunRepeat) 평균 대비 ±3mm
//          또는 본문 명시(인용 필수). 절대 68·75mm 는 참고선일 뿐 등급을 결정하지 않는다
//       ⑤ weight·drop 은 랩 실측 우선, 공식값은 실측이 없을 때만. 둘 다 적을 땐 detailedSpecs 에 출처를 구분해 쓴다
// 미정: stability 수치화. 편집 점수를 건강·안전·통증·기록 보장으로 사용하지 않는다.
// 2026-11-10: 전작 수치와 출처 없는 값을 신제품 근거로 인정하지 않는다. 주행 수명 미확인은 비운다.

// labData → biomechanics
biomechanics: {
  stackHeight: { heel: labData.heelStack, forefoot: labData.forefootStack },
  drop: labData.drop,
}

// labData.toeBoxWidth → koreanFootFit
// 원문 측정 위치·방법과 동시기 같은 방법의 비교 기준, 실명 리뷰의 핏 설명을 함께 확인한다.
// 절대 68·75mm만으로 자동 분류하거나 맨발 폭과 직접 비교하지 않는다.
```

### 수집한 데이터 → reviews 작성

이 사이트는 **후기를 수집하지 않는다.** `reviews`는 실사용 후기가 아니라 **실측 수치를 러너 유형별로 해석한 적합성 분석**이다
(`scripts/validate.ts` 7. 허구 후기 검증이 같은 원칙을 검사한다).

```typescript
reviews: [
  {
    userType: '예상 적합 — {러너 유형·조건}',
    text: '{실측 수치}라 {조건}인 경우에 맞는 수치입니다. {실측 수치}라 {상황}에서 {특성}이 가장 크게 작동하는 구조입니다. 다만 {약점 실측}이라 {상황}에는 {한계}가 생길 수 있습니다.',
  },
  {
    userType: '예상 적합 — {맞지 않는 조건의 러너}',
    text: '이 조건에는 맞지 않을 가능성이 높습니다. {실명 출처}는 {평가}라고 평가했고, {실측 수치}는 {조건}의 러너에게 {이유}. {대안 방향}을 보는 편이 맞습니다.',
  },
]
```

- `userType`은 `'예상 적합 — {조건}'` 형식. **`rating`은 넣지 않는다**(외부 리뷰 점수 환산 포함).
- `text`는 조건부 문장(`~할 가능성이 있습니다`, `~에 맞는 수치입니다`)으로 쓴다.
- 근거 위계: ① 실측 수치 → ② 주관 영역이면 실명 출처(Believe in the Run·Doctors of Running·RunRepeat 등) → ③ 둘 다 없으면 뺀다.
- 외부 리뷰는 **본문 근거의 실명 출처로만** 쓴다. 리뷰 텍스트 복사·번역, 리뷰어를 `userType`으로 세우는 것 금지.
- 금지: 1인칭 경험·착용 서술, 실재 대회·코스명, 허구 기록, 출처 없는 수치·rating, "후기가 많다"·"실사용 후기에서" 류 표현.
- 실제 예시는 `src/lib/data/shoes/diadora/diadora-frequenza-2.ts`의 `reviews`를 참고한다(형식만 따르고 문장은 신발마다 새로 쓴다).

### 신상 신발 대응 프로토콜 (랩 미게시·원문 접근 실패 시)

1. **확인 상태를 구분한다.** 랩 미게시, 접근 실패, 자료 간 충돌을 각각 기록한다. 검색 결과가 없다는 이유로 제품 미출시·단종을 확정하지 않는다.
2. **값을 만들지 않는다.** 전작의 SA·반환율·무게·폭을 대입하거나 제조사 개선율을 곱하지 않는다. ‘전작보다 부드럽다’는 평가로 SA를 상향하지 않는다. `(추정)`이라는 꼬리표도 수치 생성의 근거가 되지 않는다.
3. **확인 가능한 내용을 분리해 쓴다.** 정확한 해당 모델의 공식 설계·지역별 일정·가격 조건을 귀속해 소개하고, 외부 착화 평가는 리뷰어와 조건을 밝힌다. 동일 조건이 없는 전후 비교의 차이·개선율을 계산하지 않는다.
4. **선택 필드와 화면을 함께 확인한다.** 필요한 근거가 없으면 `specs` 같은 선택 객체·필드를 생략하고, 화면·FAQ·추천·구조화 데이터가 0점·평균·전작 기본값을 만들지 않는지 검사한다. 기존 미검증 점수를 남긴 경우에는 검증 완료로 세지 않는다.
5. **후속 확인을 기록한다.** `.omc/todo-estimates.md`의 이름은 기존 운영 파일명으로 유지하되 추정값을 만들기 위한 목록으로 쓰지 않는다. 정확 모델 랩 게시·국내 공식 판매 공지 등 재확인 조건과 확인할 주장, 유효한 날짜 형식을 기록한다. 전체 검증이 보류된 배포는 사용자 지시 없이 실행하지 않는다.

예시(문장 형식): ‘이번에 읽은 제조사 자료는 해당 모델의 폼 이름과 지역 판매 일정을 설명합니다. 정확 모델의 독립 랩 수치와 한국 현재 정가는 확인하지 못해 비워 두었습니다.’ 실제로 읽지 않은 자료나 하지 않은 착용 경험을 넣지 않는다.

### 수집 체크리스트

**필수 데이터**
- [ ] 무게 (g, US M9 기준)
- [ ] 스택 높이 (힐/전족부, mm)
- [ ] 드롭 (mm)
- [ ] 가격 (**한국 공식 사이트 MSRP**, 원 단위)
- [ ] 출시일

**RunRepeat 랩 데이터**
- [ ] SA (Shock Absorption) — 힐/전족부
- [ ] HA (Hardness)
- [ ] 에너지 리턴 (%) — 힐/전족부
- [ ] 토박스 너비 (mm)

**외부 리뷰 평가** (본문 근거의 실명 출처용 — `reviews`·`rating`에 옮기지 않는다)
- [ ] 종합 점수 (매체 표기 그대로 기록)
- [ ] 주요 장점 (3-5개) / 단점 (2-4개)
- [ ] 추천 대상 / 비추천 대상

**한국 러너 관점**
- [ ] 발볼 적합성 (narrow/standard/wide)
- [ ] 평발 적합성 (excellent/good/fair/poor)
- [ ] 와이드 옵션 여부 ← 기존 DB 값을 믿지 말고 공식몰로 재확인 (On은 대부분 미제공)
- [ ] 무릎 보호 평가
- [ ] 가격 대비 가치

### 신발 서술 작성 예시

❌ **나쁜 예** — 랩 수치 나열

```
"132 SA heel/110 SA forefoot 충격흡수, 56.0%/57.2% 에너지 리턴, 17.4 HA 경도..."
```

✅ **좋은 예** — 한국 러너의 질문에 답하면서 수치를 근거로 깐다

```
"평발인데 무겁지 않은 안정화 추천해주세요"에 가장 먼저 떠오르는 아식스의 라이트 안정화입니다.
FF Blast Max로 업그레이드되어 이전 버전보다 쿠셔닝과 에너지 리턴(56%)이 향상됐습니다.
18만원대로 카야노(23만원)보다 5만원 저렴하면서 3D Guidance System으로 충분한 안정성을 제공합니다.
아웃솔 내구성이 뛰어나(700km+) km당 257원으로 가성비 최고입니다.
단, 토박스가 68.4mm로 좁아 발볼 넓은 한국 러너는 반드시 와이드 버전을 선택하세요.
```

> 수명(km) 표기는 `getShoeDurability()`를 거친 **범위**로만 화면에 나간다 — CLAUDE.md 내구성 규칙 참조.

### 리뷰 프레임워크 (`src/data/running-shoe-review-skill.json`)

- 한국 소비자 우선순위: 착화감 > 쿠셔닝 > 가성비 > 안정성 > 무게
- 러너 타입: `beginner`, `advanced_marathon`, `fun_runner`
- 한국인 발 특성: 넓은 앞발, 평발 비율 높음
- 가격대별 분류: 10-15만 입문 / 15-20만 시리어스 초보 / 20-25만 프리미엄 / 25만+ 카본·슈퍼슈즈

---

## D. 가격·출처 참조표

### 한국 공식 사이트 (가격의 1차 소스)

| 브랜드 | 한국 공식 사이트 |
|--------|-----------------|
| Nike | https://www.nike.com/kr/ |
| Adidas | https://www.adidas.co.kr/ |
| Asics | https://www.asics.co.kr/ |
| Brooks | https://www.brooksrunning.co.kr/ |
| Hoka | https://www.hoka.com/ko-kr/ |
| New Balance | https://www.nbkorea.com/ |
| Saucony | https://www.saucony.co.kr/ |
| On | https://www.on-running.com/ko-kr/ |
| Puma | https://kr.puma.com/ |
| Mizuno | https://www.mizunokorea.co.kr/ |

**수집 우선순위**: ① 한국 공식몰 MSRP → ② 접근 불가 시 네이버 쇼핑의 공식 판매가 → ③ 한국 미출시면 `price: null` 또는 제외.

### 브랜드 미디어/프레스 페이지 (신상 트리거 소스)

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

---

## E. 모델 버전 업데이트 (slug 일괄 교체)

1. 기존 데이터의 `id`, `slug`, `name` 변경
2. 다른 파일에서 해당 slug를 참조하는 곳 **전수** 교체 + 파일명도 slug와 일치시킨다

```bash
grep -r "old-slug" src/lib/data/shoes/
grep -rl "old-slug" src/lib/data/shoes/ | xargs sed -i '' 's/old-slug/new-slug/g'
mv src/lib/data/shoes/{brand}/old-slug.ts src/lib/data/shoes/{brand}/new-slug.ts
```

3. `npm run validate && npm run build`

⚠️ 통과 기준은 "옛 slug 0건"이 아니라 **"미분류 0건"**이다 — 블로그 본문·리다이렉트처럼 옛 slug가 정당하게 남는 자리가 있다.
