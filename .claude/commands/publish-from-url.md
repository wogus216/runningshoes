# URL → 블로그 발행

인스타그램, 대회 홈페이지, 뉴스 등 어떤 URL이든 받아 allrunabout.com 블로그 포스트로 자동 발행합니다.

**사용법**: `/publish-from-url https://...`

## 실행 절차

### 1단계 — 콘텐츠 수집

`$ARGUMENTS` 에 전달된 URL로 Chrome DevTools MCP를 사용해 페이지에 접속한다.

```
mcp__chrome-devtools__navigate_page(url)
```

스냅샷을 찍어 페이지 구조를 파악한다. 로그인/팝업이 뜨면:
- 스냅샷에서 "닫기" 또는 "Not Now" 버튼 uid를 찾아 클릭
- 다시 스냅샷으로 팝업이 사라졌는지 확인

스냅샷으로 텍스트 내용이 충분히 보이면 그대로 수집. 이미지 위주 페이지라면 전체 스크린샷을 먼저 찍어 내용을 파악한다.

수집 대상:
- 제목, 날짜, 장소, 참가비 등 핵심 정보
- 본문 텍스트 전체
- 출처 (사이트명, 계정명 등)

### 2단계 — 썸네일 이미지 생성

전체 페이지 스크린샷을 찍어 `/tmp/page-raw.png` 로 저장한다.

```
mcp__chrome-devtools__take_screenshot(filePath="/tmp/page-raw.png", fullPage=true)
```

페이지에서 `evaluate_script`로 img 태그를 추출해 실제 사진 URL을 찾는다. CSS 장식이 없는 원본 이미지를 직접 다운받아 사용한다:

```javascript
() => {
  return Array.from(document.querySelectorAll('img'))
    .map(img => ({ src: img.src, w: img.naturalWidth, h: img.naturalHeight }))
    .filter(i => i.w > 400);
}
```

다운받은 이미지에서 sharp로 본문용 사진을 크롭해 `public/images/blog/{slug}-photo.webp`로 저장한다. 이 사진은 블로그 본문 중간에 `<figure>` 태그로 삽입한다.

sharp로 editorial 썸네일을 생성한다 (1200×630 WebP):
- 좌측: 다크 배경 + 타이틀/핵심정보 SVG 오버레이
- 우측: 페이지 이미지 (불필요한 UI 크롬 제거 후 페이드인)
- 배경색은 원본 페이지 분위기에 맞게 조정
- 결과: `/tmp/page-thumbnail.webp`

완성된 썸네일을 Read로 확인한 뒤 `public/images/blog/{slug}.webp` 로 복사.

### 3단계 — 블로그 포스트 HTML 생성

수집한 콘텐츠를 바탕으로 다음 규칙에 따라 HTML을 직접 작성한다.

**slug 규칙**: `YYYY-{키워드}-{키워드}` (소문자, 하이픈)
**파일**: `src/lib/data/blog/posts.ts` — `blogPosts` 배열 맨 앞에 삽입

**필수 포함 요소**:
- callout (tip / warning / info / success 중 적합한 것)
- h2 섹션 2개 이상
- **본문 중간에 사진 1장** (`{slug}-photo.webp`) — `<figure>` 태그로 삽입, figcaption에 출처 명시
- 내부 링크: `/shoes/[slug]` 또는 `/marathon` 등 사이트 페이지 연결
- 마지막에 출처 표기

**BlogPost 객체 구조**:
```typescript
{
  id: '{slug}',
  slug: '{slug}',
  title: '한국어 제목 (60자 이내)',
  description: '메타 설명 (120자 이내)',
  thumbnail: '/images/blog/{slug}.webp',
  author: '산초 에디터',
  publishedAt: 'YYYY-MM-DD',   // 오늘 날짜
  category: 'news' as const,   // 'news' | 'guide' | 'review' | 'tips'
  readingTime: N,               // 분 단위 예상 읽기 시간
  tags: ['태그1', '태그2'],
  content: `...HTML...`,
}
```

**callout 마크업 패턴**:
```html
<div class="callout tip">
  <span class="callout-icon">💡</span>
  <div class="callout-body">
    <p class="callout-title">제목</p>
    <p>내용</p>
  </div>
</div>
```

### 4단계 — 빌드 및 배포

```bash
npm run build
```

빌드 성공 시:
```bash
git add public/images/blog/{slug}.webp src/lib/data/blog/posts.ts
git commit -m "feat(blog): {한 줄 요약}"
git push origin main
```

빌드 실패 시 에러를 분석해 수정 후 재빌드.

### 5단계 — 완료 보고

- 발행된 URL: `https://allrunabout.com/blog/{slug}`
- 썸네일 파일 크기
- 포스트 읽기 시간
