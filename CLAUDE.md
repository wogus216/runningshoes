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

1. **리뷰 데이터 수집** (Chrome DevTools MCP 사용)
   - RunRepeat: 랩 테스트 데이터 (SA, HA, 에너지 리턴%, 무게, 스택, 드롭, 토박스 너비)
   - Believe in the Run / Doctors of Running: 전문가 리뷰
   - 자세한 방법은 아래 "리뷰 데이터 수집 가이드" 참조

2. **해당 브랜드 파일에 추가** (`src/lib/data/shoes/{brand}.ts`)

3. **Slug 형식 준수**
   - 형식: `{brand}-{model-name}` (소문자, 하이픈)
   - 예: `asics-gt-2000-14`, `nike-pegasus-41`, `new-balance-1080-v14`
   - **New Balance는 `new-balance-` 사용** (not `newbalance-`)

4. **alternatives/similarShoes에 유효한 slug만 사용**
   - 존재하지 않는 신발 slug 참조 금지
   - 버전 확인 필수 (예: `kinvara-15` → `kinvara-16`)

5. **빌드 확인**: `npm run build`

---

## 리뷰 데이터 수집 가이드 (Chrome DevTools MCP)

### RunRepeat 랩 데이터 수집

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

### 데이터 수집 체크리스트

신발 데이터 추가 시 수집해야 할 항목:

**필수 데이터:**
- [ ] 무게 (g, US M9 기준)
- [ ] 스택 높이 (힐/전족부, mm)
- [ ] 드롭 (mm)
- [ ] 가격 (USD → KRW 환산)
- [ ] 출시일

**RunRepeat 랩 데이터:**
- [ ] SA (Shock Absorption) - 힐/전족부
- [ ] HA (Hardness)
- [ ] 에너지 리턴 (%) - 힐/전족부
- [ ] 토박스 너비 (mm)

**리뷰 평가:**
- [ ] 종합 점수 (5점 만점)
- [ ] 주요 장점 (3-5개)
- [ ] 주요 단점 (2-4개)
- [ ] 추천 대상
- [ ] 비추천 대상

**한국 러너 관점 추가:**
- [ ] 발볼 적합성 (narrow/standard/wide)
- [ ] 평발 적합성 (excellent/good/fair/poor)
- [ ] 와이드 옵션 여부
- [ ] 무릎 보호 평가
- [ ] 가격 대비 가치

### 빠른 참고: 데이터 수집 워크플로우

```bash
# 1. Chrome DevTools MCP로 RunRepeat 접속
mcp navigate https://runrepeat.com/{brand}-{model}

# 2. 스냅샷으로 페이지 확인
mcp take_snapshot

# 3. evaluate_script로 랩 데이터 추출
mcp evaluate_script <위의 RunRepeat 스크립트>

# 4. Believe in the Run 접속
mcp navigate https://believeintherun.com/shoe-reviews/{model}-review/

# 5. 스냅샷으로 리뷰 내용 확인
mcp take_snapshot

# 6. 데이터를 브랜드 파일에 입력
# Edit src/lib/data/shoes/{brand}.ts

# 7. 빌드 확인
npm run build
```

### 모델 버전 업데이트 시

1. 기존 데이터의 `id`, `slug`, `name` 변경
2. 다른 파일에서 해당 slug 참조하는 곳 모두 업데이트
   ```bash
   grep -r "old-slug" src/lib/data/shoes/
   sed -i '' 's/old-slug/new-slug/g' src/lib/data/shoes/*.ts
   ```

---

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
