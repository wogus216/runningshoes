import { describe, expect, it } from 'vitest';
import { parseStoredCompare } from '@/lib/compare-storage';

describe('parseStoredCompare — 모바일 전체 로드 사이 비교함 복원', () => {
  it('정상 저장값을 복원한다', () => {
    const raw = JSON.stringify([{ slug: 'a', brand: 'Nike', name: 'A' }, { id: 'b', slug: 'b', brand: 'Asics', name: 'B' }]);
    expect(parseStoredCompare(raw)).toHaveLength(2);
  });
  it('최대 4개까지만', () => {
    const raw = JSON.stringify(Array.from({ length: 6 }, (_, i) => ({ slug: `s${i}`, brand: 'X', name: `N${i}` })));
    expect(parseStoredCompare(raw)).toHaveLength(4);
  });
  it('깨진 값·형식이 다른 항목은 버린다', () => {
    expect(parseStoredCompare(null)).toEqual([]);
    expect(parseStoredCompare('{oops')).toEqual([]);
    expect(parseStoredCompare('{"slug":"a"}')).toEqual([]);
    expect(parseStoredCompare(JSON.stringify([{ slug: 'a' }, null, 3, { slug: 'b', brand: 'Y', name: 'B' }]))).toEqual([{ slug: 'b', brand: 'Y', name: 'B' }]);
  });
});
