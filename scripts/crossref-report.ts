#!/usr/bin/env tsx
/**
 * 다른 신발 수치 교차 검증 전체 목록 — `npm run check:crossref`
 *   npm run check:crossref                # 요약 + 전체 목록
 *   npm run check:crossref -- --kind=price
 *   npm run check:crossref -- --file=2026-09
 * validate 10번은 같은 함수로 건수만 기준선과 비교한다. 고칠 때는 이 목록을 본다.
 * 판정 기준·한계는 src/lib/validation/crossref.ts 머리 주석.
 */
import { collectCrossrefHits } from './lib/crossref-collect';

const args = process.argv.slice(2);
const kind = args.find((a) => a.startsWith('--kind='))?.split('=')[1];
const fileFilter = args.find((a) => a.startsWith('--file='))?.split('=')[1];

const hits = collectCrossrefHits().filter((h) => (!kind || h.kind === kind) && (!fileFilter || h.file.includes(fileFilter)));
const count = (k: string) => hits.filter((h) => h.kind === k).length;
console.log(`\n다른 신발 수치 교차 검증 — 가격 ${count('price')} · 차액 ${count('gap')} · 무게 ${count('weight')} (합 ${hits.length})\n`);
for (const h of hits) {
  console.log(`[${h.kind}] ${h.file}:${h.line} — ${h.alias} → 글 "${h.found}" · DB ${h.db}`);
  console.log(`        …${h.excerpt}…`);
}
