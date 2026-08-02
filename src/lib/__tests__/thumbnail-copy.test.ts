import { describe, it, expect } from 'vitest';
import { splitTitle, deriveCopy } from '../../../scripts/thumbnail/copy';

describe('splitTitle', () => {
  it('파이프를 첫 구분자로 쪼갠다', () => {
    expect(splitTitle('아식스 젤 카야노 33 솔직 리뷰 | 13년 만의 구조 대변혁 — 부드러워졌지만')).toEqual({
      head: '아식스 젤 카야노 33 솔직 리뷰',
      rest: '13년 만의 구조 대변혁',
    });
  });

  it('em dash가 먼저 오면 그걸 첫 구분자로 본다', () => {
    expect(splitTitle('리닝 적토끼 9 울트라 — "10만원대 카본급" 진짜일까? | 커뮤니티 난리 난')).toEqual({
      head: '리닝 적토끼 9 울트라',
      rest: '"10만원대 카본급" 진짜일까?',
    });
  });

  it('구분자가 없으면 전체가 head 이고 rest 는 빈 문자열', () => {
    expect(splitTitle('평발 러닝화 고르는 법')).toEqual({
      head: '평발 러닝화 고르는 법',
      rest: '',
    });
  });

  it('구분자가 하나뿐이면 뒤가 전부 rest', () => {
    expect(splitTitle('호카 클리프톤 프로 미리보기 | 7/9 글로벌 출시')).toEqual({
      head: '호카 클리프톤 프로 미리보기',
      rest: '7/9 글로벌 출시',
    });
  });
});

describe('deriveCopy', () => {
  it('킥커는 카테고리 한글 라벨이다', () => {
    const c = deriveCopy({ title: 'A | B — C', category: 'review' });
    expect(c.kicker).toBe('리뷰');
    expect(c.title).toBe('A');
    expect(c.subtitle).toBe('B');
  });

  it('모르는 카테고리는 빈 킥커로 두고 죽지 않는다', () => {
    expect(deriveCopy({ title: 'A | B', category: 'nope' }).kicker).toBe('');
  });

  it('부제가 없으면 빈 문자열이다 (템플릿이 줄을 비운다)', () => {
    expect(deriveCopy({ title: '평발 러닝화 고르는 법', category: 'guide' }).subtitle).toBe('');
  });
});
