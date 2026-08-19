import { describe, it, expect } from 'vitest';
import { countUniqueShoeLinks, extractShoeSlugs } from '@/lib/blog/shoe-links';

describe('extractShoeSlugs', () => {
  it('본문에서 신발 slug 를 뽑는다', () => {
    const html = '<a href="/shoes/nike-pegasus-42">페가수스</a>';
    expect(extractShoeSlugs(html)).toEqual(['nike-pegasus-42']);
  });

  it('같은 신발을 두 번 링크해도 하나로 센다', () => {
    const html = '<a href="/shoes/nike-pegasus-42">a</a><a href="/shoes/nike-pegasus-42">b</a>';
    expect(countUniqueShoeLinks(html)).toBe(1);
  });

  it('서로 다른 신발은 각각 센다', () => {
    const html = '<a href="/shoes/nike-pegasus-42">a</a><a href="/shoes/brooks-ghost-17">b</a>';
    expect(countUniqueShoeLinks(html)).toBe(2);
  });

  it('신발 링크가 없으면 0', () => {
    expect(countUniqueShoeLinks('<a href="/blog/foo">x</a>')).toBe(0);
  });

  it('/gels/ 는 신발이 아니다', () => {
    expect(countUniqueShoeLinks('<a href="/gels/maurten-100">x</a>')).toBe(0);
  });
});
