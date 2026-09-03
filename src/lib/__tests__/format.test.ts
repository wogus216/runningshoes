import { describe, it, expect } from 'vitest';
import { formatManwon, formatManwonExact, formatDateKo, formatDateShortKo, localIsoDate } from '@/lib/format';
import { getShoes } from '@/lib/data/shoes';
import { getMarathonEvents } from '@/lib/data/marathon';
import { getAllPosts } from '@/lib/data/blog';

/**
 * 2026-09-03 단일화 전에 각 화면이 쓰던 구현. 단일화가 화면 숫자를 바꾸지 않았음을
 * 실데이터 전수로 증명한다 — 규칙이 바뀌면 이 테스트가 먼저 깨져야 한다.
 */
const legacyToFixed = (p: number) => `${(p / 10000).toFixed(0)}만원`;
const legacyRound = (p: number) => `${Math.round(p / 10000)}만원`;
const legacyVsManwon = (v: number) => `${(v / 10000).toFixed(v % 10000 === 0 ? 0 : 1)}만원`;
const legacyFeeWon = (n: number) => (n % 10_000 === 0 ? `${n / 10_000}만원` : `${(n / 10_000).toFixed(1)}만원`);

describe('formatManwon', () => {
  it('정수 만원으로 반올림한다', () => {
    expect(formatManwon(219000)).toBe('22만원');
    expect(formatManwon(185000)).toBe('19만원');
    expect(formatManwon(150000)).toBe('15만원');
  });

  it('값이 없으면 대체 문자열', () => {
    expect(formatManwon(undefined)).toBe('-');
    expect(formatManwon(null)).toBe('-');
    expect(formatManwon(0)).toBe('-');
    expect(formatManwon(undefined, '')).toBe('');
  });

  it('실데이터 전 가격·전 가격차에서 종전 두 구현(toFixed(0)·Math.round)과 같다', () => {
    const prices = getShoes().map((s) => s.price).filter((p): p is number => typeof p === 'number');
    expect(prices.length).toBeGreaterThan(100);
    for (const p of prices) {
      expect(formatManwon(p)).toBe(legacyToFixed(p));
      expect(formatManwon(p)).toBe(legacyRound(p));
    }
    for (let i = 0; i < prices.length; i++) {
      for (let j = i + 1; j < prices.length; j++) {
        const gap = Math.abs(prices[i] - prices[j]);
        if (gap < 10000) continue;
        expect(formatManwon(gap)).toBe(legacyRound(gap));
      }
    }
  });
});

describe('formatManwonExact', () => {
  it('나눠떨어지면 정수, 아니면 소수 한 자리', () => {
    expect(formatManwonExact(30000)).toBe('3만원');
    expect(formatManwonExact(25000)).toBe('2.5만원');
    expect(formatManwonExact(50000)).toBe('5만원');
    expect(formatManwonExact(219000)).toBe('21.9만원');
  });

  it('종전 vs 제목 규칙·참가비 규칙과 실데이터 전수 일치', () => {
    const prices = getShoes().map((s) => s.price).filter((p): p is number => typeof p === 'number');
    for (let i = 0; i < prices.length; i++) {
      for (let j = i + 1; j < prices.length; j++) {
        const gap = Math.abs(prices[i] - prices[j]);
        if (gap < 10000) continue;
        expect(formatManwonExact(gap)).toBe(legacyVsManwon(gap));
      }
    }
    const fees = getMarathonEvents().flatMap((e) => (e.raceInfo?.entryFees ?? []).map((f) => f.fee));
    expect(fees.length).toBeGreaterThan(50);
    for (const fee of fees) expect(formatManwonExact(fee)).toBe(legacyFeeWon(fee));
  });
});

describe('formatDateKo', () => {
  it('기본·요일 포맷', () => {
    expect(formatDateKo('2026-09-03')).toBe('2026년 9월 3일');
    expect(formatDateKo('2026-09-03', { weekday: true })).toBe('2026년 9월 3일 (목)');
    expect(formatDateKo('2026-10-10', { weekday: true })).toBe('2026년 10월 10일 (토)');
  });

  it('파싱 실패는 원문 반환', () => {
    expect(formatDateKo('미정')).toBe('미정');
    expect(formatDateShortKo('미정')).toBe('미정');
  });

  it('시간대에 흔들리지 않는다 — UTC 자정 기준이라 로컬 TZ 가 음수여도 하루가 안 밀린다', () => {
    // 종전 구현(new Date(iso) + getDate)은 UTC- 시간대에서 하루 전으로 표시됐다.
    // 여기서는 정확히 ISO 의 날짜를 돌려주는지만 확인한다.
    for (const e of getMarathonEvents()) {
      const [y, m, d] = e.date.split('-').map(Number);
      expect(formatDateKo(e.date)).toBe(`${y}년 ${m}월 ${d}일`);
    }
    for (const p of getAllPosts()) {
      const [y, m, d] = p.publishedAt.slice(0, 10).split('-').map(Number);
      expect(formatDateKo(p.publishedAt)).toBe(`${y}년 ${m}월 ${d}일`);
    }
  });

  it('짧은 표기 "M/D 요일"', () => {
    expect(formatDateShortKo('2026-08-16')).toBe('8/16 일');
    expect(formatDateShortKo('2026-09-03')).toBe('9/3 목');
  });
});

describe('localIsoDate', () => {
  it('YYYY-MM-DD 로 0 패딩한다', () => {
    expect(localIsoDate(new Date(2026, 0, 5))).toBe('2026-01-05');
    expect(localIsoDate(new Date(2026, 11, 25))).toBe('2026-12-25');
  });
});
