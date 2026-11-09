import { describe, it, expect } from 'vitest';
import { buildVerdicts, buildNarrative, buildFaqs, specRows, WIDTH_RANK } from '@/lib/pseo/pair-copy';
import { getAllPairs } from '@/lib/pseo/pairs';
import type { Shoe } from '@/types/shoe';

const pairs = getAllPairs();
const sample = pairs.slice(0, 40);

describe('buildVerdicts', () => {
  it('필요한 값이 확인된 항목만 판정한다 (동률 포함)', () => {
    for (const { a, b } of sample) {
      const labels = buildVerdicts(a, b).map((v) => v.label);
      expect(labels).toContain('가벼움');
      if (a.price !== undefined && b.price !== undefined) expect(labels).toContain('가성비');
      else expect(labels).not.toContain('가성비');
      expect(new Set(labels).size).toBe(labels.length);
    }
  });

  it('무게 10g 미만 차이는 동률', () => {
    const { a, b } = pairs[0];
    const same = { ...b, specs: { ...b.specs!, weight: a.specs!.weight + 5 } } as Shoe;
    const light = buildVerdicts(a, same).find((v) => v.label.startsWith('가벼움'))!;
    expect(light.winnerSlug).toBe('tie');
  });

  it('가격은 만원 단위로 표기한다', () => {
    const { a, b } = pairs.find((p) => p.a.price && p.b.price)!;
    const value = buildVerdicts(a, b).find((v) => v.label === '가성비')!;
    expect(value.reason).toMatch(/\d+만원 vs \d+만원/);
  });
});

describe('buildNarrative', () => {
  it('첫 단락에 두 신발 이름과 카테고리가 들어간다', () => {
    for (const { a, b, category } of sample) {
      const [intro] = buildNarrative(a, b, category);
      expect(intro).toContain(a.name);
      expect(intro).toContain(b.name);
      expect(intro).toContain(category);
    }
  });

  it('가격이 1만원 이상 갈리면 "약 N만원 저렴" 문장이 붙는다', () => {
    const pair = pairs.find((p) => p.a.price && p.b.price && Math.abs(p.a.price - p.b.price) >= 10000)!;
    const text = buildNarrative(pair.a, pair.b, pair.category).join(' ');
    expect(text).toMatch(/약 \d+만원 저렴/);
  });
});

describe('buildFaqs', () => {
  it('입문자 질문은 항상 마지막에 있고, 질문은 중복되지 않는다', () => {
    for (const { a, b } of sample) {
      const faqs = buildFaqs(a, b);
      expect(faqs.length).toBeGreaterThanOrEqual(1);
      expect(faqs[faqs.length - 1].question).toBe('러닝 입문자에게는 둘 중 무엇을 추천하나요?');
      expect(new Set(faqs.map((f) => f.question)).size).toBe(faqs.length);
      for (const f of faqs) expect(f.answer.length).toBeGreaterThan(20);
    }
  });
});

describe('specRows', () => {
  it('14행이며 라벨 순서가 고정돼 있다 (표 헤더와 짝)', () => {
    const rows = specRows(pairs[0].a, pairs[0].b);
    expect(rows.map((r) => r.label)).toEqual([
      '카테고리', '가격', '무게', '힐 스택', '전족부 스택', '드롭', '미드솔', '카본 플레이트',
      '쿠셔닝', '안정성', '가성비', '토박스', '와이드 옵션', '내구성 (아웃솔 기준 범위)',
    ]);
  });

  it('내구성 행은 단일 숫자가 아니라 범위+등급이다 (규칙 3)', () => {
    for (const { a, b } of sample) {
      for (const cell of [specRows(a, b)[13].a, specRows(a, b)[13].b]) {
        expect(cell === '-' || /\d+(~\d+)?km \(.+\)/.test(cell), cell).toBe(true);
      }
    }
  });
});

describe('rank tables', () => {
  it('넓을수록·좋을수록 큰 값', () => {
    expect(WIDTH_RANK.narrow).toBeLessThan(WIDTH_RANK.standard);
    expect(WIDTH_RANK.standard).toBeLessThan(WIDTH_RANK.wide);
  });
});

// 출처 없는 등급이나 미확인 수치를 판정으로 승격하지 않는다.
describe('검증되지 않은 비교 주장 차단', () => {
  it('건강 등급 차이로 승자·FAQ·표를 만들지 않는다', () => {
    const { a, b } = pairs[0];
    const lower = { ...a, injuryPrevention: { plantarFasciitis: 'warning', achillesTendinopathy: 'warning', kneeIssues: 'warning', shinSplints: 'warning' } } as Shoe;
    const higher = { ...b, injuryPrevention: { plantarFasciitis: 'excellent', achillesTendinopathy: 'excellent', kneeIssues: 'excellent', shinSplints: 'excellent' } } as Shoe;
    expect(buildVerdicts(lower, higher).map(v => v.label).join(' ')).not.toMatch(/예방|무릎|평발/);
    expect(buildFaqs(lower, higher).map(f => f.answer).join(' ')).not.toMatch(/예방 측면|평발.*우선 고려/);
    expect(specRows(lower, higher).some(r => r.label === '평발 적합성')).toBe(false);
  });
  it('무게나 쿠셔닝이 없으면 임의 수치로 우열을 만들지 않는다', () => {
    const { a, b } = pairs[0];
    const missing = { ...a, specs: undefined };
    const verdicts = buildVerdicts(missing, b);
    expect(verdicts.some(v => /가벼움|쿠셔닝|안정성/.test(v.label))).toBe(false);
    expect(JSON.stringify(verdicts)).not.toContain('999g');
    const noPrice = { ...a, price: undefined };
    expect(buildFaqs(noPrice, b).some(f => f.question.includes('가성비'))).toBe(false);
  });
});
