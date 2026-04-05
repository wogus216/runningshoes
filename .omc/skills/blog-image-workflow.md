---
id: blog-image-workflow
name: 블로그 이미지 워크플로우
description: 나노바나나 AI 이미지를 블로그에 추가하고 최적화하는 워크플로우
source: project
triggers: ["나노바나나", "블로그 이미지", "AI 이미지", "이미지 최적화", "Gemini 이미지"]
quality: high
---

# 블로그 이미지 워크플로우

## The Insight
나노바나나로 생성한 AI 이미지를 블로그에 추가할 때 최적화와 출처 표기가 필요합니다.

## Recognition Pattern
- 사용자가 "나노바나나", "AI 이미지", "블로그 이미지" 언급
- `public/images/blog/` 폴더에 이미지 저장
- PNG 이미지가 크기 최적화 필요

## The Approach

### 1. 이미지 폴더 확인
```bash
ls -la public/images/blog/{post-slug}/
```

### 2. 이미지 식별
Read 도구로 각 이미지 내용 확인

### 3. WebP 최적화 (sharp 사용)
```javascript
const sharp = require('sharp');
// PNG → WebP, 1200px max width, quality 85%
await sharp(input).resize(1200).webp({ quality: 85 }).toFile(output);
```

### 4. posts.ts에 이미지 추가
- `<figure>` + `<img>` + `<figcaption>` 구조
- AI 출처 표기: `<em>AI 생성 이미지 (Gemini)</em>`

## Example

```html
<figure class="my-8">
  <img src="/images/blog/post-slug/image.webp" alt="설명" class="rounded-xl" />
  <figcaption class="text-center text-sm text-gray-500 mt-2">
    캡션 내용 <em>AI 생성 이미지 (Gemini)</em>
  </figcaption>
</figure>
```

## Gotchas
- 원본 PNG는 7-14MB, WebP 변환 후 50-100KB 목표
- 이미지 파일명 변경 시 posts.ts도 같이 수정
- figcaption에 AI 출처 반드시 표기
