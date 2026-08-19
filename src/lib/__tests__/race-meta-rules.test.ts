import { describe, it, expect } from 'vitest';
import { checkRaceMeta } from '@/lib/blog/race-meta-rules';
import type { BlogPost } from '@/types/blog';

function post(overrides: Partial<BlogPost>): BlogPost {
  return {
    id: 'x', slug: 'busan-bridge-marathon', title: '부산브릿지마라톤 | 접수 안내',
    description: 'd', content: '<p>본문</p>', author: '산초 에디터',
    publishedAt: '2026-08-19', category: 'news', tags: [], readingTime: 8,
    raceMeta: {
      displayTitle: '국내 첫 트리플 브릿지 풀코스 — 부산브릿지마라톤',
      raceDate: '2026-12-06',
      registrationStart: '2026-08-24T10:00',
      facts: [
        { label: '대회일', value: '12월 6일' }, { label: '집결', value: '벡스코' },
        { label: '종목', value: '풀 · 10K' }, { label: '정원', value: '12,000' },
      ],
      highlights: [
        { badge: '3×', title: '오르막 세 번', desc: 'd' },
        { badge: '12월', title: '바다 바람', desc: 'd' },
      ],
    },
    ...overrides,
  } as BlogPost;
}

describe('checkRaceMeta', () => {
  it('정상 글은 문제가 없다', () => {
    expect(checkRaceMeta(post({}))).toEqual([]);
  });

  it('raceMeta 가 없으면 검사하지 않는다 — 기존 글 보호', () => {
    expect(checkRaceMeta(post({ raceMeta: undefined }))).toEqual([]);
  });

  it('facts 가 4개 미만이면 에러', () => {
    const p = post({});
    p.raceMeta!.facts = [{ label: 'a', value: '1' }];
    const issues = checkRaceMeta(p);
    expect(issues.some((i) => i.level === 'error' && i.rule === 'facts-count')).toBe(true);
  });

  it('facts 가 7개 이상이면 에러', () => {
    const p = post({});
    p.raceMeta!.facts = Array.from({ length: 7 }, (_, i) => ({ label: `l${i}`, value: 'v' }));
    expect(checkRaceMeta(p).some((i) => i.rule === 'facts-count')).toBe(true);
  });

  it('highlights 가 1개면 에러', () => {
    const p = post({});
    p.raceMeta!.highlights = [{ badge: 'a', title: 't', desc: 'd' }];
    expect(checkRaceMeta(p).some((i) => i.rule === 'highlights-count')).toBe(true);
  });

  it('본문에 3줄 요약이 남아 있으면 에러', () => {
    const p = post({ content: '<div class="tldr">3줄 요약</div>' });
    expect(checkRaceMeta(p).some((i) => i.level === 'error' && i.rule === 'no-tldr')).toBe(true);
  });

  it('slug 에 연도가 있으면 에러', () => {
    const p = post({ slug: 'busan-bridge-marathon-2026' });
    expect(checkRaceMeta(p).some((i) => i.level === 'error' && i.rule === 'slug-no-year')).toBe(true);
  });

  it('displayTitle 이 40자를 넘으면 에러', () => {
    const p = post({});
    p.raceMeta!.displayTitle = '가'.repeat(41);
    expect(checkRaceMeta(p).some((i) => i.rule === 'display-title-length')).toBe(true);
  });

  it('displayTitle 이 title 과 같으면 경고', () => {
    const p = post({ title: '짧은 제목' });
    p.raceMeta!.displayTitle = '짧은 제목';
    expect(checkRaceMeta(p).some((i) => i.level === 'warn' && i.rule === 'display-title-same')).toBe(true);
  });

  it('raceDate 가 파싱 불가면 에러', () => {
    const p = post({});
    p.raceMeta!.raceDate = '언젠가';
    expect(checkRaceMeta(p).some((i) => i.rule === 'race-date-parse')).toBe(true);
  });

  it('마감이 시작보다 빠르면 에러', () => {
    const p = post({});
    p.raceMeta!.registrationEnd = '2026-08-01';
    expect(checkRaceMeta(p).some((i) => i.rule === 'registration-order')).toBe(true);
  });

  it('신발 링크가 3개 이상이면 경고', () => {
    const p = post({
      content: '<a href="/shoes/a-1">1</a><a href="/shoes/b-2">2</a><a href="/shoes/c-3">3</a>',
    });
    expect(checkRaceMeta(p).some((i) => i.level === 'warn' && i.rule === 'shoe-links')).toBe(true);
  });

  it('고도 수치가 있는데 출처가 없으면 경고', () => {
    const p = post({});
    p.raceMeta!.elevation = [{ km: 0, m: 0 }, { km: 10, m: 20 }];
    expect(checkRaceMeta(p).some((i) => i.level === 'warn' && i.rule === 'elevation-source')).toBe(true);
  });
});
