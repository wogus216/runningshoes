import { describe, it, expect } from 'vitest';
import {
  extractShoeSlugs,
  buildIndex,
  scorePair,
  rankRelated,
  type RelatedInput,
} from '@/lib/blog/related';

function post(over: Partial<RelatedInput> & { slug: string }): RelatedInput {
  return {
    category: 'review',
    tags: [],
    content: '',
    publishedAt: '2026-01-01',
    ...over,
  };
}

describe('extractShoeSlugs', () => {
  it('본문의 /shoes/ 링크를 뽑는다', () => {
    const html = '<a href="/shoes/asics-gel-kayano-33">카야노</a> 와 <a href="/shoes/nike-pegasus-42">페가수스</a>';
    expect(extractShoeSlugs(html).sort()).toEqual(['asics-gel-kayano-33', 'nike-pegasus-42']);
  });

  it('같은 신발이 여러 번 나와도 한 번만 센다', () => {
    const html = '/shoes/nike-pegasus-42 ... /shoes/nike-pegasus-42';
    expect(extractShoeSlugs(html)).toEqual(['nike-pegasus-42']);
  });

  it('신발 링크가 없으면 빈 배열', () => {
    expect(extractShoeSlugs('<p>러닝 이야기</p>')).toEqual([]);
  });
});

describe('scorePair', () => {
  it('희귀 태그 공유가 흔한 태그 공유보다 높은 점수', () => {
    // '흔한'은 6편이 쓰고, '희귀'는 2편만 쓴다
    const corpus = [
      post({ slug: 'a', tags: ['흔한', '희귀'] }),
      post({ slug: 'b', tags: ['흔한', '희귀'] }),
      post({ slug: 'c', tags: ['흔한'] }),
      post({ slug: 'd', tags: ['흔한'] }),
      post({ slug: 'e', tags: ['흔한'] }),
      post({ slug: 'f', tags: ['흔한'] }),
    ];
    const index = buildIndex(corpus);
    const common = scorePair(post({ slug: 'x', tags: ['흔한'] }), corpus[2], index);
    const rare = scorePair(post({ slug: 'x', tags: ['희귀'] }), corpus[1], index);
    expect(rare).toBeGreaterThan(common);
  });

  it('같은 신발을 링크하면 점수에 반영된다', () => {
    // 카테고리가 서로 달라 신발 신호만 남는다.
    // 코퍼스가 5편이라 df=2 인 신발의 IDF 가 양수다 — 3편이면 log(3/3)=0 이 되어 이 단언이 무의미해진다
    const corpus = [
      post({ slug: 'a', content: '/shoes/nike-pegasus-42', category: 'guide' }),
      post({ slug: 'b', content: '/shoes/nike-pegasus-42', category: 'review' }),
      post({ slug: 'c', content: '', category: 'news' }),
      post({ slug: 'd', content: '', category: 'news' }),
      post({ slug: 'e', content: '', category: 'tips' }),
    ];
    const index = buildIndex(corpus);
    expect(scorePair(corpus[0], corpus[1], index)).toBeGreaterThan(0);
  });

  it('태그도 신발도 안 겹쳐도 같은 카테고리면 점수 > 0', () => {
    const corpus = [
      post({ slug: 'a', category: 'guide' }),
      post({ slug: 'b', category: 'guide' }),
    ];
    const index = buildIndex(corpus);
    expect(scorePair(corpus[0], corpus[1], index)).toBeGreaterThan(0);
  });

  it('아무것도 안 겹치면 0', () => {
    const corpus = [
      post({ slug: 'a', category: 'guide', tags: ['x'] }),
      post({ slug: 'b', category: 'news', tags: ['y'] }),
    ];
    const index = buildIndex(corpus);
    expect(scorePair(corpus[0], corpus[1], index)).toBe(0);
  });
});

describe('rankRelated', () => {
  it('자기 자신은 결과에 없다', () => {
    const corpus = [
      post({ slug: 'me', category: 'guide' }),
      post({ slug: 'other', category: 'guide' }),
    ];
    const index = buildIndex(corpus);
    const out = rankRelated(corpus[0], corpus, index, 6);
    expect(out.map((p) => p.slug)).not.toContain('me');
  });

  it('점수 높은 순으로 정렬한다', () => {
    const corpus = [
      post({ slug: 'target', category: 'guide', tags: ['희귀'] }),
      post({ slug: 'weak', category: 'guide', tags: [] }),
      post({ slug: 'strong', category: 'guide', tags: ['희귀'] }),
      post({ slug: 'pad1', category: 'news', tags: [] }),
      post({ slug: 'pad2', category: 'news', tags: [] }),
    ];
    const index = buildIndex(corpus);
    const out = rankRelated(corpus[0], corpus, index, 6);
    expect(out[0].slug).toBe('strong');
  });

  it('점수가 같으면 최신 글이 앞에 온다', () => {
    const corpus = [
      post({ slug: 'target', category: 'guide' }),
      post({ slug: 'old', category: 'guide', publishedAt: '2026-01-01' }),
      post({ slug: 'new', category: 'guide', publishedAt: '2026-06-01' }),
    ];
    const index = buildIndex(corpus);
    const out = rankRelated(corpus[0], corpus, index, 6);
    expect(out.map((p) => p.slug)).toEqual(['new', 'old']);
  });

  it('limit 을 지킨다', () => {
    const corpus = Array.from({ length: 10 }, (_, i) => post({ slug: `p${i}`, category: 'guide' }));
    const index = buildIndex(corpus);
    expect(rankRelated(corpus[0], corpus, index, 6)).toHaveLength(6);
  });

  it('점수 0인 후보는 제외한다', () => {
    const corpus = [
      post({ slug: 'target', category: 'guide', tags: ['x'] }),
      post({ slug: 'unrelated', category: 'news', tags: ['y'] }),
    ];
    const index = buildIndex(corpus);
    expect(rankRelated(corpus[0], corpus, index, 6)).toHaveLength(0);
  });
});
