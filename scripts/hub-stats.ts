#!/usr/bin/env tsx
/**
 * 계급도 허브(running-shoes-tier-chart-2026)의 통계 재집계.
 *
 *   npx tsx scripts/hub-stats.ts
 *
 * 측정 사양 (2026-10-02 고정 — 9/28 허브 값을 이 정의로 재현해 검증했다):
 *  - 분석 단위: 신발 모델 1종 (src/lib/data/shoes 의 shoes 배열 항목)
 *  - 가격 통계 모집단: price > 0 인 모델. 가격대 경계는 15·20·25만원(하한 포함)
 *  - 카본: biomechanics.carbonPlate === true
 *  - 중앙값: 카테고리별 가격 확인 모델의 단순 중앙값(짝수면 가운데 두 값 평균)
 *  - 토박스: koreanFootFit.toBoxWidth 가 있는 모델만 브랜드별로 센다(미분류는 따로 표시)
 *  - 데이터 시점: 실행 시점의 DB (커밋 기준)
 * 허브 문장·표에 쓰는 숫자는 이 출력으로만 갱신한다.
 */
import { shoes } from '../src/lib/data/shoes';

const priced = shoes.filter((s) => typeof s.price === 'number' && s.price > 0);
const band = (p: number) => (p < 150000 ? '15만 미만' : p < 200000 ? '15~20만' : p < 250000 ? '20~25만' : '25만 이상');

console.log(`전체 ${shoes.length}종 · 가격 확인 ${priced.length}종`);

const bands: Record<string, { n: number; carbon: number; cat: Record<string, number> }> = {};
for (const s of priced) {
  const b = (bands[band(s.price as number)] ??= { n: 0, carbon: 0, cat: {} });
  b.n++;
  if (s.biomechanics?.carbonPlate) b.carbon++;
  b.cat[s.category] = (b.cat[s.category] ?? 0) + 1;
}
for (const k of ['15만 미만', '15~20만', '20~25만', '25만 이상']) {
  const b = bands[k];
  const top = Object.entries(b.cat).sort((x, y) => y[1] - x[1]).slice(0, 3).map(([c, n]) => `${c} ${n}`).join(' · ');
  console.log(`${k}: ${b.n}종 · 카본 ${b.carbon}종 · ${top}`);
}

const median = (a: number[]) => {
  const x = [...a].sort((p, q) => p - q);
  const m = x.length >> 1;
  return x.length % 2 ? x[m] : (x[m - 1] + x[m]) / 2;
};
const cats: Record<string, number[]> = {};
for (const s of priced) (cats[s.category] ??= []).push(s.price as number);
for (const [c, v] of Object.entries(cats)) console.log(`${c}: ${v.length}종 · 중앙값 ${(median(v) / 10000).toFixed(2)}만`);

const br: Record<string, Record<string, number>> = {};
for (const s of shoes) {
  const t = s.koreanFootFit?.toBoxWidth ?? '미분류';
  (br[s.brand] ??= {})[t] = (br[s.brand][t] ?? 0) + 1;
}
for (const [b, v] of Object.entries(br)) console.log(`${b}: 좁음 ${v.narrow ?? 0} · 표준 ${v.standard ?? 0} · 넓음 ${v.wide ?? 0}${v['미분류'] ? ` · 미분류 ${v['미분류']}` : ''}`);
