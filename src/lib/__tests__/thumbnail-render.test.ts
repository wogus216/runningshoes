import { describe, it, expect } from 'vitest';
import { parsePosts } from '../../../scripts/thumbnail/render';

/**
 * 실제로 한 번 깨졌던 모양을 재현한 fixture.
 * `title`과 `category` 사이에 수천 자짜리 `content` 템플릿 리터럴이 끼면
 * 예전의 600자 근접 창 정규식은 이 포스트를 통째로 놓쳤다
 * (wide-feet-running-shoes-korea, running-shoe-trends-2026-eva-replacement 사례).
 */
const LONG_CONTENT = '러닝화 리뷰 본문입니다. '.repeat(120); // 1,200+자 — 옛 600자 창을 확실히 넘긴다

const FIXTURE = `
import { BlogPost } from '@/types/blog';

export const posts_2099_01: BlogPost[] = [
  {
    id: 'wide-feet-korea',
    slug: 'wide-feet-running-shoes-korea',
    title: '발볼 넓은 한국인을 위한 러닝화 추천 TOP 10',
    description: '한국인의 발이 서양인보다 넓다는 연구 결과를 바탕으로 정리했습니다.',
    thumbnail: '/images/blog/wide-feet.webp',
    content: \`
${LONG_CONTENT}
\`,
    author: '산초 에디터',
    publishedAt: '2025-01-10',
    category: 'review',
    readingTime: 8,
  },
  {
    id: 'knee-pain',
    slug: 'knee-pain-running-shoes',
    title: '무릎 통증 러너를 위한 러닝화 선택법',
    description: '무릎이 아픈 러너를 위한 가이드입니다.',
    thumbnail: '/images/blog/knee-pain.webp',
    content: \`
${LONG_CONTENT}
\`,
    author: '산초 에디터',
    publishedAt: '2025-01-15',
    category: 'tips',
    readingTime: 6,
  },
];
`;

describe('parsePosts', () => {
  it('title과 category 사이에 긴 content가 끼어도 두 필드를 찾는다 (회귀: 600자 근접 창 버그)', () => {
    const map = parsePosts(FIXTURE);
    expect(map.get('wide-feet-running-shoes-korea')).toEqual({
      title: '발볼 넓은 한국인을 위한 러닝화 추천 TOP 10',
      category: 'review',
    });
  });

  it('포스트가 여러 개일 때 블록 경계를 넘지 않는다 (다음 포스트 필드가 섞이지 않음)', () => {
    const map = parsePosts(FIXTURE);
    expect(map.get('knee-pain-running-shoes')).toEqual({
      title: '무릎 통증 러너를 위한 러닝화 선택법',
      category: 'tips',
    });
    // 첫 포스트 블록에서 두 번째 포스트의 title/category 를 잘못 집어오지 않았는지 교차 확인
    expect(map.get('wide-feet-running-shoes-korea')?.category).toBe('review');
  });

  it('slug 는 있지만 title/category 가 없는 블록은 건너뛴다', () => {
    const broken = `
      {
        slug: 'incomplete-post',
        description: '필드가 빠진 포스트',
      },
    `;
    const map = parsePosts(broken);
    expect(map.has('incomplete-post')).toBe(false);
  });

  it('slug 가 없으면 빈 Map을 돌려준다', () => {
    expect(parsePosts('export const posts = [];').size).toBe(0);
  });
});
