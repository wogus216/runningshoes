# 신발 데이터 수집·이미지 처리 상세 절차

> `CLAUDE.md`에서 분리한 **폴백·수동 절차** 모음입니다. 평소에는 읽을 필요가 없습니다 —
> 데이터 수집은 researcher 서브에이전트, 이미지는 `npm run images <brand> <model>`이 기본 경로이고,
> 그 경로가 막혔을 때만 여기를 펴 보세요. (2026-08-27 분리: CLAUDE.md가 1,190줄로 커져
> 매 세션 컨텍스트를 잡아먹고 있었고, 이 문서의 47%가 코드블록이었습니다.)


---


## A. 리뷰 데이터 수집 — Chrome DevTools MCP 폴백


 researcher 서브에이전트가 실패했을 때만 사용합니다.

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

```typescript
// 수집한 RunRepeat 데이터를 Shoe 타입으로 변환
const labData = {
  weight: 285,           // g
  heelStack: 37.0,       // mm
  foreFootStack: 32.8,   // mm
  drop: 4.2,             // mm
  saHeel: 142,           // SA (높을수록 부드러움)
  saForefoot: 130,       // SA
  ha: 11.9,              // HA (낮을수록 부드러움)
  energyReturnHeel: 60.8,   // %
  energyReturnForefoot: 66.3, // %
  toeBoxWidth: 72.5      // mm
};

// Shoe 타입으로 매핑
specs: {
  weight: 285,
  cushioning: 9,  // SA 142 → 매우 높음 (9/10)
  responsiveness: 7,  // 에너지 리턴 60-66% → 중상 (7/10)
  // ...
},
biomechanics: {
  stackHeight: {
    heel: 37,
    forefoot: 33,
  },
  drop: 4,
  // ...
},
koreanFootFit: {
  toBoxWidth: 'standard',  // 72.5mm → 표준 (68-75mm)
  // ...
}
```

### Believe in the Run 리뷰 수집

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

**4. 리뷰 텍스트 정리:**

스냅샷에서 직접 복사하거나 WebFetch 결과 활용:

```typescript
reviews: [
  {
    userType: 'Believe in the Run 리뷰어',
    rating: 73,  // 11/15 점수를 5점 만점으로 환산: (11/15) * 100 = 73
    text: '모든 것이 바뀌었지만 여전히 1080입니다. Infinion 폼은 Fresh Foam X보다 반발력이 오래 지속되고...'
  }
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
