import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import { join } from 'path';
import { getHomeStats } from '../home/stats';
import { PROBLEMS } from '../home/problems';
import { balancedByCategory, DEFAULT_QUOTA } from '../home/index-sort';
import { getShoes } from '../data/shoes';

describe('getHomeStats', () => {
  it('신발 수를 실제 데이터에서 산출한다', () => {
    expect(getHomeStats().shoeCount).toBe(getShoes().length);
  });
  it('문항 수는 9다', () => {
    expect(getHomeStats().questionCount).toBe(9);
  });
  it('문항 수는 questionnaire.tsx의 실제 질문 정의 개수와 일치한다 (하드코딩 회귀 방지)', () => {
    // questionnaire.tsx는 'use client' 컴포넌트라 stats.ts가 직접 import해 셀 수 없다.
    // 대신 이 테스트가 소스를 파싱해 QUESTION_COUNT 상수가 stale해지면 실패하도록 감시한다.
    const source = readFileSync(
      join(__dirname, '../../components/recommend/questionnaire.tsx'),
      'utf-8',
    );
    // 질문 객체의 `id: '...'` 만 매칭 (Question 타입 선언의 `id: keyof UserProfile...`는 따옴표가 없어 제외됨,
    // 옵션들은 `value:`를 쓰지 `id:`를 쓰지 않아 제외됨)
    const questionIdMatches = source.match(/\bid:\s*'[^']+'/g) ?? [];
    expect(getHomeStats().questionCount).toBe(questionIdMatches.length);
  });
  it('예상 소요 시간은 1분 이상이다', () => {
    expect(getHomeStats().estimatedMinutes).toBeGreaterThanOrEqual(1);
  });
  it('갱신일은 ISO 날짜 문자열이거나 null이다', () => {
    const { lastUpdated } = getHomeStats();
    expect(lastUpdated === null || /^\d{4}-\d{2}-\d{2}/.test(lastUpdated)).toBe(true);
  });
});

describe('PROBLEMS', () => {
  it('6개이고 rank가 1~6으로 유일하다', () => {
    expect(PROBLEMS).toHaveLength(6);
    expect(Array.from(new Set(PROBLEMS.map(p => p.rank))).sort()).toEqual([1,2,3,4,5,6]);
  });
  it('우선순위 순서가 지시서와 일치한다', () => {
    expect(PROBLEMS.map(p => p.slug)).toEqual([
      'beginner', 'wide-toebox', 'max-cushion', 'racing', 'knee-protection', 'daily-trainer',
    ]);
  });
  it('무릎 항목의 질문·기준 문장은 치료·예방을 단정하지 않는다', () => {
    const knee = PROBLEMS.find(p => p.slug === 'knee-protection')!;
    // note는 "진단이나 치료를 대신하지 않습니다"라는 면책 문구 자체라 의도적으로 '치료'를 포함한다.
    // 단정 금지 검사는 question+criteria(실제 효과를 주장하는 문장)에만 적용한다.
    const text = knee.question + knee.criteria;
    expect(text).not.toMatch(/치료|완화|예방|낫게|해결해/);
    expect(knee.note).toMatch(/진단이나 치료를 대신하지 않습니다/);
  });
  it('목적지 slug는 전부 best 매트릭스 카테고리 slug 형태다', () => {
    for (const p of PROBLEMS) {
      expect(p.slug).toMatch(/^[a-z0-9-]+$/);
    }
  });
});

describe('balancedByCategory', () => {
  const make = (category: string, i: number) => ({ category, rating: 5 - i * 0.1, price: 100000 + i * 1000 });
  const pool = [
    ...Array.from({ length: 20 }, (_, i) => make('데일리', i)),
    ...Array.from({ length: 20 }, (_, i) => make('쿠션화', i)),
    ...Array.from({ length: 20 }, (_, i) => make('입문화', i)),
    ...Array.from({ length: 20 }, (_, i) => make('레이싱', i)),
    ...Array.from({ length: 20 }, (_, i) => make('안정화', i)),
    ...Array.from({ length: 20 }, (_, i) => make('트레일', i)),
  ];

  it('기본 쿼터대로 16개를 뽑는다', () => {
    const r = balancedByCategory(pool);
    expect(r).toHaveLength(16);
    const count = (c: string) => r.filter(s => s.category === c).length;
    expect(count('데일리')).toBe(4);
    expect(count('쿠션화')).toBe(3);
    expect(count('입문화')).toBe(3);
    expect(count('레이싱')).toBe(2);
    expect(count('안정화')).toBe(2);
    expect(count('트레일')).toBe(2);
  });

  it('한 카테고리가 부족해도 예외 없이 가능한 만큼만 채운다', () => {
    const thin = pool.filter(s => s.category !== '트레일');
    const r = balancedByCategory(thin);
    expect(r.filter(s => s.category === '트레일')).toHaveLength(0);
    expect(r.length).toBe(14);
  });

  it('카테고리 안에서는 rating 내림차순, 동률이면 가격 오름차순이다', () => {
    const daily = balancedByCategory(pool).filter(s => s.category === '데일리');
    for (let i = 1; i < daily.length; i++) {
      expect(daily[i - 1].rating).toBeGreaterThanOrEqual(daily[i].rating);
    }
  });

  it('쿼터 합계가 16이다', () => {
    expect(Object.values(DEFAULT_QUOTA).reduce((a, b) => a + b, 0)).toBe(16);
  });

  it('price가 없는 항목(GridShoe.price?)도 컴파일되고, 같은 rating 안에서 뒤로 밀린다', () => {
    // GridShoe.price는 옵셔널이라 이 타입 그대로 넘길 수 있어야 한다 (tsc --noEmit 대상)
    const withPrice = Array.from({ length: 3 }, (_, i) => ({
      category: '데일리', rating: 5, price: 200000 - i * 1000, id: `p${i}`,
    }));
    const withoutPrice = Array.from({ length: 3 }, (_, i) => ({
      category: '데일리', rating: 5, price: undefined as number | undefined, id: `n${i}`,
    }));
    // 가격 없는 항목을 앞에 섞어 넣어도 결과에서는 뒤로 밀려야 한다
    const mixed = [...withoutPrice, ...withPrice];

    const r1 = balancedByCategory(mixed, { 데일리: 6 });
    const r2 = balancedByCategory(mixed, { 데일리: 6 });

    expect(r1.slice(0, 3).every(s => s.price !== undefined)).toBe(true);
    expect(r1.slice(3).every(s => s.price === undefined)).toBe(true);

    // 가격 있는 항목끼리는 오름차순 (NaN 비교 없이 정상 정렬됐는지 확인)
    const pricedValues = r1.slice(0, 3).map(s => s.price as number);
    expect(pricedValues).toEqual([...pricedValues].sort((a, b) => a - b));

    // 결정적: 같은 입력이면 항상 같은 순서
    expect(r1.map(s => s.id)).toEqual(r2.map(s => s.id));
  });
});
