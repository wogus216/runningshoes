#!/usr/bin/env tsx
/**
 * 인스타그램 소식 → 블로그 글 자동 생성 스크립트
 *
 * 사용법:
 *   npx tsx scripts/generate-blog-post.ts --title "제목" --type event
 *   npx tsx scripts/generate-blog-post.ts --url "https://..." --title "제목" --type news
 *   echo "소식 내용..." | npx tsx scripts/generate-blog-post.ts --title "제목" --type event
 *   npm run generate:blog -- --title "제목" --type event
 */

import Anthropic from '@anthropic-ai/sdk';
import fs from 'fs';
import path from 'path';

// ─── CLI 파라미터 파싱 ───────────────────────────────────────────────────────

function parseArgs(): Record<string, string> {
  const args = process.argv.slice(2);
  const result: Record<string, string> = {};
  for (let i = 0; i < args.length; i++) {
    if (args[i].startsWith('--')) {
      result[args[i].slice(2)] = args[i + 1] || '';
      i++;
    }
  }
  return result;
}

// ─── URL 메타데이터 추출 ─────────────────────────────────────────────────────

async function fetchUrl(url: string): Promise<string> {
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      },
      signal: AbortSignal.timeout(10000),
    });
    if (!res.ok) return '';
    const html = await res.text();

    // og:title, og:description, meta description 순으로 추출
    const ogTitle =
      html.match(/<meta[^>]+property="og:title"[^>]+content="([^"]+)"/)?.[1] ||
      html.match(/<meta[^>]+content="([^"]+)"[^>]+property="og:title"/)?.[1] ||
      '';
    const ogDesc =
      html.match(/<meta[^>]+property="og:description"[^>]+content="([^"]+)"/)?.[1] ||
      html.match(/<meta[^>]+content="([^"]+)"[^>]+property="og:description"/)?.[1] ||
      '';
    const metaDesc =
      html.match(/<meta[^>]+name="description"[^>]+content="([^"]+)"/)?.[1] ||
      html.match(/<meta[^>]+content="([^"]+)"[^>]+name="description"/)?.[1] ||
      '';

    const parts = [
      ogTitle ? `Title: ${ogTitle}` : '',
      ogDesc ? `Description: ${ogDesc}` : metaDesc ? `Description: ${metaDesc}` : '',
    ].filter(Boolean);

    return parts.join('\n');
  } catch {
    return '';
  }
}

// ─── Slug 생성 ───────────────────────────────────────────────────────────────

function generateSlug(title: string): string {
  const date = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
  const base = title
    .toLowerCase()
    // 한글은 그대로, 영문/숫자는 허용, 나머지 제거
    .replace(/[^a-z0-9가-힣\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 40);
  return `${base}-${date}`;
}

// ─── HTML 이스케이프 (템플릿 리터럴용) ──────────────────────────────────────

function escapeForTemplateLiteral(str: string): string {
  // 백틱과 템플릿 리터럴 표현식 이스케이프
  return str.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
}

// ─── 읽기 시간 계산 (한국어 기준 분당 400자) ─────────────────────────────────

function calcReadingTime(html: string): number {
  const text = html.replace(/<[^>]+>/g, '');
  return Math.max(3, Math.round(text.length / 400));
}

// ─── description 추출 (첫 번째 p 태그) ──────────────────────────────────────

function extractDescription(html: string, fallback: string): string {
  const match = html.match(/<p[^>]*>([^<]{20,})<\/p>/);
  if (!match) return fallback;
  return match[1].replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').slice(0, 150);
}

// ─── 메인 ────────────────────────────────────────────────────────────────────

async function main() {
  const args = parseArgs();
  const url = args.url || '';
  const title = args.title || '러닝 소식';
  const type = (args.type || 'news') as 'event' | 'news' | 'guide' | 'review' | 'tips';
  const tagsArg = args.tags || '';

  // API Key 확인
  if (!process.env.ANTHROPIC_API_KEY) {
    console.error('❌ ANTHROPIC_API_KEY 환경변수가 설정되지 않았습니다.');
    console.error('   export ANTHROPIC_API_KEY=your-key-here');
    process.exit(1);
  }

  // stdin에서 추가 컨텍스트 읽기
  let stdinContext = '';
  if (!process.stdin.isTTY) {
    const chunks: Buffer[] = [];
    for await (const chunk of process.stdin) {
      chunks.push(chunk as Buffer);
    }
    stdinContext = Buffer.concat(chunks).toString('utf8').trim();
  }

  // URL 메타데이터 추출
  let urlContext = '';
  if (url) {
    console.log(`🔗 URL 접근 중: ${url}`);
    urlContext = await fetchUrl(url);
    if (urlContext) {
      console.log('✅ URL 컨텍스트 추출 성공');
    } else {
      console.log('⚠️  URL 접근 실패 (계속 진행)');
    }
  }

  const context = [stdinContext, urlContext].filter(Boolean).join('\n\n');

  console.log(`\n📝 블로그 포스트 생성 중...`);
  console.log(`   제목: ${title}`);
  console.log(`   타입: ${type}`);
  if (context) {
    console.log(`   컨텍스트: ${context.slice(0, 80)}...`);
  }

  // Anthropic 클라이언트 초기화
  const client = new Anthropic();

  const systemPrompt = `You are a Korean running blog writer for allrunabout.com.
Write engaging, practical Korean blog posts about running shoes and running events.
Author persona: 산초 에디터 - a 2nd year runner who completed a half marathon and 10K races.
Focus on Korean runners: foot width (발볼), knee protection (무릎 보호), value for money (가성비).
Your writing is friendly, personal, and evidence-based.`;

  const userPrompt = `Write a Korean blog post about: "${title}"
Type: ${type} (event=러닝 이벤트/대회, news=러닝 뉴스, guide=러닝 가이드, review=신발 리뷰, tips=러닝 팁)
${url ? `Source URL: ${url}` : ''}
${context ? `Additional context:\n${context}` : ''}

STRICT Requirements:
1. Write in Korean ONLY
2. Return ONLY the HTML body content — NO <html>, NO <body>, NO <head>, NO <script> tags
3. Length: 800–1500 words of actual text
4. Use these HTML elements: h2, h3, p, ul, ol, li, strong, em, table (with thead/tbody), blockquote
5. Add callout boxes using EXACTLY this format (no variations):
   <div class="callout tip"><span class="callout-icon">💡</span><div class="callout-body"><p class="callout-title">팁</p><p>내용을 여기에</p></div></div>
   <div class="callout warning"><span class="callout-icon">⚠️</span><div class="callout-body"><p class="callout-title">주의</p><p>내용을 여기에</p></div></div>
   <div class="callout info"><span class="callout-icon">ℹ️</span><div class="callout-body"><p class="callout-title">정보</p><p>내용을 여기에</p></div></div>
6. For EVENT type: include date/time/location, registration method, preparation tips, recommended gear
7. For NEWS type: explain background, analyze impact for Korean runners, practical takeaways
8. For GUIDE/TIPS type: step-by-step structure, specific data/numbers, personal anecdote from 산초 에디터
9. When mentioning specific shoes, link internally: <a href="/shoes/hoka-clifton-10">호카 클리프턴 10</a>
10. End with a concise "에디터 한마디" section summarizing key advice
11. Do NOT wrap in markdown code blocks — output raw HTML only`;

  const message = await client.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 4096,
    messages: [{ role: 'user', content: userPrompt }],
    system: systemPrompt,
  });

  const rawContent = message.content[0].type === 'text' ? message.content[0].text : '';

  if (!rawContent) {
    console.error('❌ 콘텐츠 생성 실패: API 응답이 비어있습니다.');
    process.exit(1);
  }

  // 마크다운 코드 블록이 포함된 경우 제거
  const htmlContent = rawContent
    .replace(/^```html\s*/i, '')
    .replace(/^```\s*/i, '')
    .replace(/\s*```$/, '')
    .trim();

  // 메타데이터 생성
  const slug = generateSlug(title);
  const description = extractDescription(htmlContent, title);
  const readingTime = calcReadingTime(htmlContent);

  // 태그 파싱
  const defaultTagMap: Record<string, string[]> = {
    event: ['러닝', '이벤트', '마라톤'],
    news: ['러닝', '뉴스'],
    guide: ['러닝', '가이드'],
    review: ['러닝화', '리뷰'],
    tips: ['러닝', '팁'],
  };
  const tags = tagsArg
    ? tagsArg.split(',').map((t) => t.trim()).filter(Boolean)
    : defaultTagMap[type] || ['러닝'];

  // 카테고리 매핑 (BlogCategory 타입)
  const categoryMap: Record<string, 'guide' | 'review' | 'news' | 'tips'> = {
    event: 'news',
    news: 'news',
    guide: 'guide',
    review: 'review',
    tips: 'tips',
  };
  const category = categoryMap[type] || 'news';

  // 타입별 Unsplash 썸네일
  const thumbnailMap: Record<string, string> = {
    event: 'https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=800&q=80',
    news: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80',
    guide: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80',
    review: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
    tips: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
  };
  const thumbnail = thumbnailMap[type] || thumbnailMap.news;

  const today = new Date().toISOString().split('T')[0];

  // posts.ts에 삽입할 새 포스트 블록 생성
  const escapedContent = escapeForTemplateLiteral(htmlContent);
  const escapedTitle = title.replace(/'/g, "\\'");
  const escapedDesc = description.replace(/'/g, "\\'");

  const newPostBlock = `  {
    id: '${slug}',
    slug: '${slug}',
    title: '${escapedTitle}',
    description: '${escapedDesc}',
    content: \`${escapedContent}\`,
    author: '산초 에디터',
    publishedAt: '${today}',
    category: '${category}' as const,
    tags: [${tags.map((t) => `'${t}'`).join(', ')}],
    readingTime: ${readingTime},
    featured: false,
    thumbnail: '${thumbnail}',
  },`;

  // posts.ts 파일 읽기 및 수정
  const postsFilePath = path.resolve(process.cwd(), 'src/lib/data/blog/posts.ts');

  if (!fs.existsSync(postsFilePath)) {
    console.error(`❌ 파일을 찾을 수 없습니다: ${postsFilePath}`);
    process.exit(1);
  }

  const postsContent = fs.readFileSync(postsFilePath, 'utf8');

  const ARRAY_START = 'export const blogPosts: BlogPost[] = [';
  const insertIndex = postsContent.indexOf(ARRAY_START);

  if (insertIndex === -1) {
    console.error('❌ posts.ts에서 "export const blogPosts: BlogPost[] = [" 를 찾을 수 없습니다.');
    process.exit(1);
  }

  const afterBracket = insertIndex + ARRAY_START.length;
  const updatedContent =
    postsContent.slice(0, afterBracket) +
    '\n' +
    newPostBlock +
    '\n' +
    postsContent.slice(afterBracket);

  fs.writeFileSync(postsFilePath, updatedContent, 'utf8');

  console.log(`\n✅ 블로그 포스트 생성 완료!`);
  console.log(`   slug:      ${slug}`);
  console.log(`   category:  ${category}`);
  console.log(`   tags:      ${tags.join(', ')}`);
  console.log(`   읽기 시간: ${readingTime}분`);
  console.log(`   URL:       /blog/${slug}`);
  console.log(`\n📌 src/lib/data/blog/posts.ts 맨 앞에 추가되었습니다.`);
  console.log(`   타입 체크: npx tsc --noEmit`);
  console.log(`   빌드 확인: npm run build`);
}

main().catch((err) => {
  console.error('❌ 오류:', err.message || err);
  process.exit(1);
});
