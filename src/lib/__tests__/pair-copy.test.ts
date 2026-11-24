import { describe, it, expect } from 'vitest';
import { buildVerdicts, buildNarrative, buildFaqs, specRows } from '@/lib/pseo/pair-copy';
import { getAllPairs } from '@/lib/pseo/pairs';
import type { Shoe } from '@/types/shoe';

const pairs = getAllPairs();
const sample = pairs.slice(0, 40);

describe('buildVerdicts', () => {
  it('필요한 값이 확인된 항목만 판정한다 (동률 포함)', () => {
    for (const { a, b } of sample) {
      const labels = buildVerdicts(a, b).map((v) => v.label);
      expect(labels).toContain('표기 무게');
      expect(labels).not.toContain('가성비');
      expect(new Set(labels).size).toBe(labels.length);
    }
  });

  it('같거나 다른 무게도 측정 조건 확인 없이 승패·동률을 만들지 않는다', () => {
    const { a, b } = pairs[0];
    for (const gap of [0, 5, 50]) {
      const other = { ...b, specs: { ...b.specs!, weight: a.specs!.weight + gap } } as Shoe;
      const weight = buildVerdicts(a, other).find((v) => v.label === '표기 무게')!;
      expect(weight.winnerSlug).toBe('unranked');
      expect(weight.reason).toContain('기준 사이즈·공시/실측 조건');
      expect(weight.reason).toContain(`${other.specs!.weight}g`);
    }
  });

});

describe('buildNarrative', () => {
  it('분류가 다른 기존 비교는 각 모델의 현재 분류를 설명한다', () => {
    const { a, b } = pairs[0];
    const [intro] = buildNarrative({ ...a, category: '입문화' }, { ...b, category: '쿠션화' }, '입문화');
    expect(intro).toContain('입문화');
    expect(intro).toContain('쿠션화');
    expect(intro).not.toContain('모두 입문화');
  });

  it('첫 단락에 두 신발 이름과 카테고리가 들어간다', () => {
    for (const { a, b, category } of sample) {
      const [intro] = buildNarrative(a, b, category);
      expect(intro).toContain(a.name);
      expect(intro).toContain(b.name);
      expect(intro).toContain(category);
    }
  });

  it('가격은 두 모델의 확인 금액·상품·시점 조건을 함께 표시한다', () => {
    const pair = pairs.find((p) => p.a.price && p.b.price && Math.abs(p.a.price - p.b.price) >= 10000)!;
    const text = buildNarrative(pair.a, pair.b, pair.category).join(' ');
    expect(text).toContain(`${pair.a.price!.toLocaleString('ko-KR')}원`);
    expect(text).toContain(`${pair.b.price!.toLocaleString('ko-KR')}원`);
    expect(text).toContain('확인일·상품·폭 옵션');
    expect(text).not.toMatch(/약 \d+만원 저렴/);
  });
});

describe('buildFaqs', () => {
  it('입문자 질문은 항상 마지막에 있고, 질문은 중복되지 않는다', () => {
    for (const pair of sample) {
      expect(pair.slug).toBeTruthy();
      const faqs = buildFaqs();
      expect(faqs.length).toBeGreaterThanOrEqual(1);
      expect(faqs[faqs.length - 1].question).toBe('러닝 입문자에게는 둘 중 무엇을 추천하나요?');
      expect(new Set(faqs.map((f) => f.question)).size).toBe(faqs.length);
      for (const f of faqs) expect(f.answer.length).toBeGreaterThan(20);
    }
  });
});

describe('specRows', () => {
  it('공통 미확인 행은 숨기고 한쪽의 확인된 수치는 유지한다', () => {
    const { a, b } = pairs[0];
    const unknown = { ...a, biomechanics: undefined };
    const bothUnknown = specRows(unknown, { ...b, biomechanics: undefined });
    expect(bothUnknown.some(row => row.label === '힐 스택')).toBe(false);
    const rows = specRows(unknown, b);
    expect(rows.find(row => row.label === '힐 스택')?.a).toBe('-');
    expect(rows.find(row => row.label === '힐 스택')?.b).toBe(`${b.biomechanics!.stackHeight.heel}mm`);
    for (const label of ['쿠셔닝', '안정성', '가성비', '토박스', '내구성 (아웃솔 기준 범위)']) {
      expect(rows.map(row => row.label)).not.toContain(label);
    }
  });

  it('와이드 정보가 있는 조합에서 옵션을 비교한다', () => {
    const { a, b } = pairs[0];
    expect(specRows({ ...a, koreanFootFit: {} }, { ...b, koreanFootFit: {} }).some(row => row.label === '와이드 옵션')).toBe(false);
    const wide = { ...a, koreanFootFit: { wideOptions: true } };
    expect(specRows(wide, { ...b, koreanFootFit: {} }).find(row => row.label === '와이드 옵션')?.a).toBe('있음');
  });
});

// 출처 없는 등급이나 미확인 수치를 판정으로 승격하지 않는다.
describe('검증되지 않은 비교 주장 차단', () => {
  it('건강 등급 차이로 승자·FAQ·표를 만들지 않는다', () => {
    const { a, b } = pairs[0];
    const lower = { ...a, injuryPrevention: { plantarFasciitis: 'warning', achillesTendinopathy: 'warning', kneeIssues: 'warning', shinSplints: 'warning' } } as Shoe;
    const higher = { ...b, injuryPrevention: { plantarFasciitis: 'excellent', achillesTendinopathy: 'excellent', kneeIssues: 'excellent', shinSplints: 'excellent' } } as Shoe;
    expect(buildVerdicts(lower, higher).map(v => v.label).join(' ')).not.toMatch(/예방|무릎|평발/);
    expect(buildFaqs().map(f => f.answer).join(' ')).not.toMatch(/예방 측면|평발.*우선 고려/);
    expect(specRows(lower, higher).some(r => r.label === '평발 적합성')).toBe(false);
  });
  it('무게나 쿠셔닝이 없으면 임의 수치로 우열을 만들지 않는다', () => {
    const { a, b } = pairs[0];
    const missing = { ...a, specs: undefined };
    const verdicts = buildVerdicts(missing, b);
    expect(verdicts.some(v => /표기 무게|쿠셔닝|안정성/.test(v.label))).toBe(false);
    expect(JSON.stringify(verdicts)).not.toContain('999g');
    expect(buildFaqs().some(f => f.question.includes('가성비'))).toBe(false);
    const noBiomechanics = { ...a, biomechanics: undefined };
    const unknownRows = specRows(noBiomechanics, b);
    for (const label of ['힐 스택', '전족부 스택', '카본 보강 구조']) {
      expect(unknownRows.find(row => row.label === label)?.a).toBe('-');
    }
    expect(buildNarrative(a, b, a.category).join(' ')).not.toContain('더 가볍게 측정됐습니다');
  });
});
