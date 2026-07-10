import { BlogPost, BlogPostMeta, BlogCategory } from '@/types/blog';
import { blogPosts } from './posts';

/**
 * 모든 블로그 포스트 가져오기 (최신순)
 * 원본 배열을 복사한 뒤 정렬한다 (in-place sort 부작용 방지)
 */
export function getAllPosts(): BlogPost[] {
  return [...blogPosts].sort((a, b) => {
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  });
}

/**
 * 단일 포스트 → 경량 메타 projection (본문 content 제외, thumbnail 사전 해석)
 */
export function toPostMeta(post: BlogPost): BlogPostMeta {
  const { content, thumbnail, ...rest } = post;
  return { ...rest, thumbnail: thumbnail ?? extractThumbnail(content) };
}

/**
 * 목록/카드용 경량 메타 배열 (본문 content 제외, thumbnail 사전 해석)
 * 목록 페이지가 전체 본문을 클라이언트로 직렬화하지 않도록 이 함수를 사용한다.
 */
export function getPostsMeta(): BlogPostMeta[] {
  return getAllPosts().map(toPostMeta);
}

/**
 * slug로 블로그 포스트 찾기
 */
export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

/**
 * featured 포스트 가져오기 (최대 limit개)
 */
export function getFeaturedPosts(limit: number = 3): BlogPost[] {
  return blogPosts
    .filter((post) => post.featured)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
}

/**
 * 카테고리별 포스트 가져오기
 */
export function getPostsByCategory(category: BlogCategory): BlogPost[] {
  return blogPosts
    .filter((post) => post.category === category)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

/**
 * 태그별 포스트 가져오기
 */
export function getPostsByTag(tag: string): BlogPost[] {
  return blogPosts
    .filter((post) => post.tags.includes(tag))
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

/**
 * HTML content에서 첫 번째 img 태그의 src 추출
 */
export function extractThumbnail(content: string): string | null {
  const match = content.match(/<img[^>]+src=["']([^"']+)["']/);
  return match ? match[1] : null;
}

/**
 * 포스트의 썸네일 가져오기 (명시적 thumbnail > content 첫 이미지)
 */
export function getPostThumbnail(post: BlogPost): string | null {
  return post.thumbnail || extractThumbnail(post.content);
}

/**
 * 관련 포스트 가져오기 (같은 카테고리 또는 태그 공유)
 */
export function getRelatedPosts(slug: string, limit: number = 3): BlogPost[] {
  const currentPost = getPostBySlug(slug);
  if (!currentPost) return [];

  return blogPosts
    .filter((post) => post.slug !== slug)
    .filter(
      (post) =>
        post.category === currentPost.category ||
        post.tags.some((tag) => currentPost.tags.includes(tag))
    )
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
}

/**
 * 관련 포스트를 카드용 경량 메타로 반환 (BlogCard는 content 불필요)
 */
export function getRelatedPostsMeta(slug: string, limit: number = 3): BlogPostMeta[] {
  return getRelatedPosts(slug, limit).map(toPostMeta);
}

/**
 * 신발 slug → 그 신발을 본문에서 링크하는 블로그 글 목록 (최신순, { slug, title }).
 * 신발 상세 페이지 relatedPosts 폴백용 — curated relatedPosts가 없는 신발을 자동으로 채운다.
 * SSG 서버에서만 호출(클라 번들 영향 없음). 첫 호출 시 역인덱스를 1회 구축해 메모이즈.
 */
let shoeLinkIndex: Map<string, { slug: string; title: string }[]> | null = null;

function buildShoeLinkIndex(): Map<string, { slug: string; title: string }[]> {
  const index = new Map<string, { slug: string; title: string }[]>();
  // getAllPosts()는 최신순 → 삽입 순서가 곧 최신순
  for (const post of getAllPosts()) {
    const linkedSlugs = Array.from(
      new Set(Array.from(post.content.matchAll(/\/shoes\/([a-z0-9-]+)/g), (m) => m[1]))
    );
    for (const shoeSlug of linkedSlugs) {
      const ref = { slug: post.slug, title: post.title };
      const list = index.get(shoeSlug);
      if (list) list.push(ref);
      else index.set(shoeSlug, [ref]);
    }
  }
  return index;
}

export function getPostsLinkingToShoe(
  shoeSlug: string,
  limit: number = 4
): { slug: string; title: string }[] {
  if (!shoeLinkIndex) shoeLinkIndex = buildShoeLinkIndex();
  return (shoeLinkIndex.get(shoeSlug) ?? []).slice(0, limit);
}
