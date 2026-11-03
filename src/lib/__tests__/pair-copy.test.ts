import { describe, it, expect } from 'vitest';
import {
  analyzePair,
  assessPairWorth,
  buildFaqs,
  generationOf,
  toeBoxMm,
  specRows,
  WIDTH_RANK,
  KNEE_RANK,
  THRESHOLDS,
} from '@/lib/pseo/pair-copy';
import { getAllPairs, getIndexablePairs, getPairWorth, PINNED_PAIRS } from '@/lib/pseo/pairs';
import { shoes } from '@/lib/data/shoes';
import type { Shoe } from '@/types/shoe';

/**
 * 359개 실데이터 페어 **전부**로 검증한다 — 2026-11-02 전수 점검에서 오류는 일부 페어가 아니라
 * 체계적으로(동률 처리·영어 enum·근거 없는 단정) 나왔기 때문에 표본 검사로는 못 잡는다.
 */
const pairs = getAllPairs();

function allText(a: Shoe, b: Shoe, category: string): string[] {
  const an = analyzePair(a, b, category);
  return [
    an.bottomLine,
    an.decisionSummary,
    ...an.forA.flatMap((r) => [r.runner, r.evidence]),
    ...an.forB.flatMap((r) => [r.runner, r.evidence]),
    ...an.similar.map((s) => s.text),
    ...an.caveats,
    ...buildFaqs(a, b, category, an).flatMap((f) => [f.question, f.answer]),
  ];
}

describe('자동 문구 오류 회귀 (2026-11-02 전수 점검)', () => {
  it('영어 enum·undefined·부동소수 꼬리가 본문에 나오지 않는다', () => {
    const bad = /\b(narrow|standard|wide|good|caution|warning|excellent|fair|poor|undefined|null|NaN)\b|\d\.\d{3,}/;
    for (const { a, b, category, slug } of pairs) {
      for (const t of allText(a, b, category)) expect(bad.test(t), `${slug}: ${t}`).toBe(false);
    }
  });

  it('조사를 병기로 얼버무리지 않는다', () => {
    for (const { a, b, category, slug } of pairs) {
      for (const t of allText(a, b, category)) {
        expect(/[과와이가을를은는]\([과와이가을를은는]\)|원로 /.test(t), `${slug}: ${t}`).toBe(false);
      }
    }
  });

  it('차이가 기준 미만인 축에서는 승자를 정하지 않는다(쿠셔닝 1점·무게 20g 미만·정가 2만원 미만)', () => {
    for (const { a, b, category, slug } of pairs) {
      const an = analyzePair(a, b, category);
      const picks = [...an.forA, ...an.forB];
      const ca = a.specs!.cushioning;
      const cb = b.specs!.cushioning;
      if (ca === cb) expect(picks.some((p) => p.axis === 'cushion'), slug).toBe(false);
      if (Math.abs(a.specs!.weight - b.specs!.weight) < THRESHOLDS.weightG) {
        expect(picks.some((p) => p.axis === 'weight'), slug).toBe(false);
      }
      if (a.price && b.price && Math.abs(a.price - b.price) < THRESHOLDS.priceWon) {
        expect(picks.some((p) => p.axis === 'price'), slug).toBe(false);
      }
    }
  });

  it('같은 축이 양쪽 모두의 근거가 되지 않는다(카본·드롭은 양쪽에 다른 러너로 갈리므로 제외)', () => {
    for (const { a, b, category, slug } of pairs) {
      const an = analyzePair(a, b, category);
      const axesA = new Set(an.forA.map((r) => r.axis));
      for (const r of an.forB) {
        if (r.axis === 'carbon' || r.axis === 'drop') continue;
        expect(axesA.has(r.axis), `${slug}: ${r.axis}`).toBe(false);
      }
    }
  });

  it('둘 다 와이드 버전이 있으면 "와이드 여부로 고르라"고 하지 않는다', () => {
    for (const { a, b, category, slug } of pairs) {
      if (!(a.koreanFootFit?.wideOptions && b.koreanFootFit?.wideOptions)) continue;
      const fitFaq = buildFaqs(a, b, category).find((f) => f.question.includes('발볼'))!;
      expect(fitFaq.answer, slug).not.toMatch(/와이드.*여부로/);
    }
  });

  it('안정성 점수와 평발 적합성이 반대를 가리키면 평발 러너에게 한쪽을 추천하지 않는다', () => {
    const rank: Record<string, number> = { poor: 0, fair: 1, good: 2, excellent: 3 };
    for (const { a, b, category, slug } of pairs) {
      const an = analyzePair(a, b, category);
      const stab = [...an.forA.map((r) => ({ ...r, side: 'a' })), ...an.forB.map((r) => ({ ...r, side: 'b' }))].find(
        (r) => r.axis === 'stability',
      );
      if (!stab) continue;
      const [win, lose] = stab.side === 'a' ? [a, b] : [b, a];
      expect(win.specs!.stability, slug).toBeGreaterThanOrEqual(lose.specs!.stability);
      expect(rank[win.koreanFootFit!.flatFootCompatibility], slug).toBeGreaterThanOrEqual(
        rank[lose.koreanFootFit!.flatFootCompatibility],
      );
    }
  });

  it('쿠셔닝 승자로 꼽힌 쪽이 힐 스택은 4mm 이상 얇은 경우가 없다', () => {
    for (const { a, b, category, slug } of pairs) {
      const an = analyzePair(a, b, category);
      const sideA = an.forA.some((r) => r.axis === 'cushion');
      const sideB = an.forB.some((r) => r.axis === 'cushion');
      if (!sideA && !sideB) continue;
      const [win, lose] = sideA ? [a, b] : [b, a];
      const gap = (lose.biomechanics?.stackHeight?.heel ?? 0) - (win.biomechanics?.stackHeight?.heel ?? 0);
      expect(gap, slug).toBeLessThan(THRESHOLDS.stackMm);
    }
  });

  it('레이싱·트레일 페어에는 "입문자에게 무엇을 추천" FAQ 가 없다', () => {
    for (const { a, b, category } of pairs) {
      if (category !== '레이싱' && category !== '트레일') continue;
      const qs = buildFaqs(a, b, category).map((f) => f.question);
      expect(qs).not.toContain('러닝 입문자에게는 둘 중 무엇을 추천하나요?');
    }
  });
});

describe('결론 문장', () => {
  it('양쪽에 고를 이유가 있으면 두 신발 이름이 모두 결론에 나온다', () => {
    for (const { a, b, category, slug } of pairs) {
      const an = analyzePair(a, b, category);
      if (an.forA.some((r) => r.weight >= 2) && an.forB.some((r) => r.weight >= 2)) {
        expect(an.bottomLine, slug).toContain(a.name);
        expect(an.bottomLine, slug).toContain(b.name);
        expect(an.bottomLine, slug).toMatch(/에게는 .+, .+에게는 .+ 더 맞습니다/);
      }
    }
  });

  it('결론은 페어마다 거의 다르다(공통 문구 복붙 방지)', () => {
    const unique = new Set(pairs.map((p) => analyzePair(p.a, p.b, p.category).bottomLine));
    expect(unique.size / pairs.length).toBeGreaterThan(0.95);
  });

  it('비슷한 점을 결론 앞에 깐다 — "둘 다 쿠션이 넉넉하지만, …"', () => {
    const p = pairs.find((x) => {
      const an = analyzePair(x.a, x.b, x.category);
      return an.forA.length && an.forB.length && x.a.specs!.cushioning >= 8 && x.a.specs!.cushioning === x.b.specs!.cushioning;
    })!;
    expect(analyzePair(p.a, p.b, p.category).bottomLine).toMatch(/^둘 다 쿠션이 넉넉하/);
  });
});

describe('세대 비교 판별', () => {
  const s = (brand: string, name: string) => ({ brand, name }) as Shoe;
  it('같은 라인의 번호만 다르면 세대 비교', () => {
    expect(generationOf(s('Brooks', '고스트 17'), s('Brooks', '고스트 18'))).toEqual({ newer: 'b' });
    expect(generationOf(s('New Balance', '1080 V15'), s('New Balance', '1080 V14'))).toEqual({ newer: 'a' });
  });
  it('변형 모델·다른 브랜드는 세대 비교가 아니다', () => {
    expect(generationOf(s('Nike', '페가수스 42'), s('Nike', '페가수스 플러스'))).toBeNull();
    expect(generationOf(s('Li-Ning', '레드헤어 9'), s('Li-Ning', '레드헤어 9 프로'))).toBeNull();
    expect(generationOf(s('Asics', '노바블라스트 5'), s('Hoka', '노바블라스트 5'))).toBeNull();
  });
});

describe('페이지 존재 이유', () => {
  it('고정 페어·세대 비교는 항상 색인한다', () => {
    for (const p of pairs) {
      const w = getPairWorth(p);
      if (PINNED_PAIRS.includes(p.slug) || generationOf(p.a, p.b)) expect(w.index, p.slug).toBe(true);
    }
  });

  it('색인 페어는 세대·고정이 아니면 양쪽 모두 선택 근거(가중치 2+)를 가진다', () => {
    for (const p of getIndexablePairs()) {
      const w = getPairWorth(p);
      if (w.basis !== 'trade-off') continue;
      const an = analyzePair(p.a, p.b, p.category);
      expect(an.forA.some((r) => r.weight >= 2), p.slug).toBe(true);
      expect(an.forB.some((r) => r.weight >= 2), p.slug).toBe(true);
    }
  });

  it('noindex 로 돌리는 페어는 일부다 — 기준이 망가져 전부 빠지거나 전부 남는 것을 막는다', () => {
    const ratio = getIndexablePairs().length / pairs.length;
    expect(ratio).toBeGreaterThan(0.5);
    expect(ratio).toBeLessThan(0.95);
  });

  it('pinned 옵션이 판정을 덮어쓴다', () => {
    const noDiff = pairs.find((p) => !getPairWorth(p).index)!;
    expect(assessPairWorth(noDiff.a, noDiff.b, noDiff.category, { pinned: true }).index).toBe(true);
  });
});

describe('specRows', () => {
  it('15행이며 라벨 순서가 고정돼 있다 (표 헤더와 짝)', () => {
    const rows = specRows(pairs[0].a, pairs[0].b);
    expect(rows.map((r) => r.label)).toEqual([
      '카테고리', '가격', '무게', '힐 스택', '전족부 스택', '드롭', '미드솔', '카본 플레이트',
      '쿠셔닝', '안정성', '가성비', '토박스', '와이드 옵션', '평발 적합성', '내구성 (아웃솔 기준 범위)',
    ]);
  });

  it('토박스·평발 적합성은 한국어로 표시한다', () => {
    for (const { a, b } of pairs) {
      const rows = specRows(a, b);
      for (const cell of [rows[11].a, rows[11].b]) expect(['좁은 편', '보통', '넓은 편', '-']).toContain(cell);
      for (const cell of [rows[13].a, rows[13].b]) expect(['매우 좋음', '좋음', '보통', '맞지 않음', '-']).toContain(cell);
    }
  });

  it('국내 정가가 없으면 "-" 대신 그 사실을 적는다', () => {
    const p = pairs.find((x) => !x.a.price || !x.b.price);
    if (!p) return;
    const price = specRows(p.a, p.b)[1];
    expect([price.a, price.b].some((c) => c.startsWith('국내 정가 없음'))).toBe(true);
  });

  it('내구성 행은 단일 숫자가 아니라 범위+등급이다 (규칙 3)', () => {
    for (const { a, b } of pairs) {
      for (const cell of [specRows(a, b)[14].a, specRows(a, b)[14].b]) {
        expect(cell === '-' || /\d+(~\d+)?km \(.+\)/.test(cell), cell).toBe(true);
      }
    }
  });
});

describe('rank tables', () => {
  it('넓을수록·좋을수록 큰 값', () => {
    expect(WIDTH_RANK.narrow).toBeLessThan(WIDTH_RANK.standard);
    expect(WIDTH_RANK.standard).toBeLessThan(WIDTH_RANK.wide);
    expect(KNEE_RANK.warning).toBeLessThan(KNEE_RANK.caution);
    expect(KNEE_RANK.good).toBeLessThan(KNEE_RANK.excellent);
  });
});

describe('토박스 판정 (2026-11-03 데이터 검증)', () => {
  const bySlug = (slug: string) => shoes.find((x) => x.slug === slug)!;

  it('실측(mm)을 문구에서 읽는다 — 실측이 없다고 적힌 신발은 null', () => {
    expect(toeBoxMm(bySlug('adidas-supernova-rise-2'))).toBe(77.7);
    expect(toeBoxMm(bySlug('puma-velocity-nitro-4'))).toBe(71.6);
    expect(toeBoxMm(bySlug('salomon-pulsar'))).toBeNull();
  });

  it('등급이 실측과 모순되면 근거 문구가 있어야 한다 — 좁음 ≤73.2mm, 넓음 ≥75.0mm, 보통 71.0~75.5mm', () => {
    for (const s of shoes) {
      const mm = toeBoxMm(s);
      const tier = s.koreanFootFit?.toBoxWidth;
      if (mm === null || !tier) continue;
      // 경계선 사례는 랩 본문 평가로 등급을 정한다고 파일에 적어 둔다(예: 글리세린 맥스 74.3mm 넓음). 근거 없는 모순만 잡는다
      if (/랩 본문|랩 원문|경계선/.test(s.detailedSpecs?.width ?? '')) continue;
      if (tier === 'narrow') expect(mm, s.slug).toBeLessThanOrEqual(73.2);
      if (tier === 'wide') expect(mm, s.slug).toBeGreaterThanOrEqual(75.0);
      if (tier === 'standard') {
        expect(mm, s.slug).toBeGreaterThanOrEqual(71.0);
        expect(mm, s.slug).toBeLessThanOrEqual(75.5);
      }
    }
  });

  it('등급이 갈려도 실측 차이가 1.5mm 미만이면 발볼로 고르라고 하지 않는다', () => {
    for (const { a, b, category, slug } of pairs) {
      const ma = toeBoxMm(a);
      const mb = toeBoxMm(b);
      if (ma === null || mb === null || Math.abs(ma - mb) >= THRESHOLDS.toeBoxMm) continue;
      const an = analyzePair(a, b, category);
      const sameTierGap = a.koreanFootFit?.toBoxWidth === b.koreanFootFit?.toBoxWidth;
      const picked = [...an.forA, ...an.forB].some((r) => r.axis === 'fit' && !/와이드 버전은/.test(r.evidence));
      expect(picked && !sameTierGap, slug).toBe(false);
    }
  });

  it('발볼 근거에는 실측이 있으면 mm 가 함께 나온다', () => {
    const p = pairs.find((x) => x.slug === 'adidas-supernova-rise-2-vs-puma-velocity-nitro-4')!;
    const fit = [...analyzePair(p.a, p.b, p.category).forA, ...analyzePair(p.a, p.b, p.category).forB].find((r) => r.axis === 'fit')!;
    expect(fit.evidence).toContain('77.7mm');
    expect(fit.evidence).toContain('71.6mm');
  });

  it('와이드가 일부 조건에서만 팔리면 "와이드 있음"으로 뭉개지 않는다(스트럭처 26: 여성만)', () => {
    const involved = pairs.filter((x) => x.a.slug === 'nike-structure-26' || x.b.slug === 'nike-structure-26');
    expect(involved.length).toBeGreaterThan(0);
    for (const { a, b, category, slug } of involved) {
      const text = allText(a, b, category).join(' ');
      // 제한 표기 없이 "스트럭처 26에는 와이드 버전도 있음"이라고 말하면 안 된다(남성 와이드는 없다)
      expect(text, slug).not.toMatch(/스트럭처 26에는 와이드 버전도 있음/);
      if (/스트럭처 26 와이드는/.test(text)) expect(text, slug).toMatch(/여성만/);
      const fitFaq = buildFaqs(a, b, category).find((f) => f.question.includes('발볼'));
      expect(fitFaq?.answer ?? '', slug).not.toMatch(/어느 쪽이든 와이드/);
    }
  });
});
