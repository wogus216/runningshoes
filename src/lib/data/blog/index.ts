import { BlogPost, BlogCategory } from '@/types/blog';
import { blogPosts } from './posts';

/**
 * 모든 블로그 포스트 가져오기 (최신순)
 */
export function getAllPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => {
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  });
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
