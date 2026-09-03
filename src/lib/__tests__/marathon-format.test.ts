import { describe, it, expect } from 'vitest';
import { META_DESC_MAX, truncateAtWord, formatFee, formatTimeLimit, feeSummary, splitSentences } from '@/lib/marathon/format';

describe('truncateAtWord', () => {
  it('짧으면 마크업만 정리해 그대로', () => {
    expect(truncateAtWord('**굵게** 두  칸', 100)).toBe('굵게 두 칸');
    expect(truncateAtWord('   ', 100)).toBe('');
  });

  it('문장 끝에서 자른다 — 결과는 원문 접두이며 마침표로 끝난다', () => {
    const text = '첫 문장은 여기서 끝난다. 두 번째 문장은 조금 더 길게 이어져서 여기서 끝난다. 세 번째 문장은 잘려 나가야 한다.';
    const max = 50;
    const out = truncateAtWord(text, max);
    expect(out.length).toBeLessThanOrEqual(max);
    expect(out.length).toBeGreaterThan(max * 0.5);
    expect(out.endsWith('.')).toBe(true);
    expect(text.startsWith(out)).toBe(true);
    expect(out).not.toContain('세 번째');
  });

  it('문장 경계가 너무 앞이면 어절 경계 + 말줄임', () => {
    const text = '가나다 라마바 사아자 차카타 파하가 나다라 마바사 아자차';
    const out = truncateAtWord(text, 20);
    expect(out.endsWith('…')).toBe(true);
    expect(out.length).toBeLessThanOrEqual(20);
    // 어절 중간에서 끊지 않는다 — 말줄임 앞까지는 원문의 접두이고, 그 다음 글자는 공백이어야 한다
    const kept = out.slice(0, -1);
    expect(text.startsWith(kept)).toBe(true);
    expect(text[kept.length]).toBe(' ');
  });

  it('META_DESC_MAX 는 검색 스니펫 길이대', () => {
    expect(META_DESC_MAX).toBeGreaterThanOrEqual(120);
    expect(META_DESC_MAX).toBeLessThanOrEqual(160);
  });
});

describe('formatFee / formatTimeLimit', () => {
  it('원 단위 천 단위 콤마', () => {
    expect(formatFee(50000)).toBe('50,000원');
    expect(formatFee(0)).toBe('0원');
  });

  it('분이 0이면 시간만', () => {
    expect(formatTimeLimit(5, 0)).toBe('5시간');
    expect(formatTimeLimit(2, 30)).toBe('2시간 30분');
  });
});

describe('feeSummary', () => {
  it('전 종목 같으면 "각 N만원"', () => {
    expect(feeSummary([{ distance: '10K', fee: 50000 }, { distance: '5K', fee: 50000 }])).toBe('참가비 각 5만원');
  });

  it('다르면 종목별 나열, 소수 한 자리', () => {
    expect(feeSummary([{ distance: '풀', fee: 65000 }, { distance: '10K', fee: 50000 }])).toBe('풀 6.5만원 · 10K 5만원');
  });

  it('없으면 null', () => {
    expect(feeSummary(undefined)).toBeNull();
    expect(feeSummary([])).toBeNull();
  });
});

describe('splitSentences', () => {
  it('마침표+공백 경계로 나눈다 — 괄호로 끝난 문장도 잘린다', () => {
    expect(splitSentences('첫 문장이다. 둘째(가격 미공개). 셋째다.')).toEqual(['첫 문장이다.', '둘째(가격 미공개).', '셋째다.']);
  });

  it('소수점·약어는 자르지 않는다', () => {
    expect(splitSentences('코스는 42.195km다. 끝.')).toEqual(['코스는 42.195km다.', '끝.']);
  });

  it('비어 있으면 빈 배열', () => {
    expect(splitSentences(undefined)).toEqual([]);
    expect(splitSentences('')).toEqual([]);
  });
});
