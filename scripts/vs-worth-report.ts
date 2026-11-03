/**
 * /vs 페어별 "존재 이유" 리포트 — 어떤 페이지를 색인하고 어떤 페이지를 noindex 로 돌리는지, 왜인지.
 *
 *   npx tsx scripts/vs-worth-report.ts            # 요약 + noindex 목록
 *   npx tsx scripts/vs-worth-report.ts --all      # 전 페어 결론 문장까지
 *   npx tsx scripts/vs-worth-report.ts --json     # 기계 판독용
 *
 * 판정 기준은 src/lib/pseo/pair-copy.ts `assessPairWorth`. 신발 데이터를 고치면 판정이 바뀔 수 있으니
 * 신발 등록·스펙 수정 커밋 뒤에 돌려 noindex 로 빠지는 페어가 의도와 맞는지 본다.
 */
import { getAllPairs, getPairWorth } from '@/lib/pseo/pairs';
import { analyzePair } from '@/lib/pseo/pair-copy';

const BASIS_KO: Record<string, string> = {
  generation: '색인 — 같은 라인 세대 비교',
  pinned: '색인 — 검색 노출 이력(고정 페어)',
  'trade-off': '색인 — 양쪽 모두 고를 이유가 있음',
  'one-sided': 'noindex — 한쪽이 앞서고 반대쪽을 고를 이유가 없음',
  'no-difference': 'noindex — 핵심 지표 차이가 거의 없음',
};

const args = new Set(process.argv.slice(2));
const rows = getAllPairs().map((p) => {
  const worth = getPairWorth(p);
  const an = analyzePair(p.a, p.b, p.category);
  return {
    slug: p.slug,
    category: p.category,
    index: worth.index,
    basis: worth.basis,
    bottomLine: an.bottomLine,
    forA: an.forA.map((r) => r.axis),
    forB: an.forB.map((r) => r.axis),
  };
});

if (args.has('--json')) {
  console.log(JSON.stringify(rows, null, 2));
  process.exit(0);
}

const byBasis = new Map<string, number>();
for (const r of rows) byBasis.set(r.basis, (byBasis.get(r.basis) ?? 0) + 1);
const indexed = rows.filter((r) => r.index).length;
console.log(`/vs 페어 ${rows.length}개 — 색인 ${indexed} · noindex ${rows.length - indexed}\n`);
byBasis.forEach((n, basis) => console.log(`  ${String(n).padStart(4)}  ${BASIS_KO[basis] ?? basis}`));

const byCat = new Map<string, { i: number; n: number }>();
for (const r of rows) {
  const c = byCat.get(r.category) ?? { i: 0, n: 0 };
  if (r.index) c.i += 1;
  else c.n += 1;
  byCat.set(r.category, c);
}
console.log('\n카테고리별 (색인 / noindex)');
byCat.forEach((c, cat) => console.log(`  ${cat}\t${c.i} / ${c.n}`));

console.log('\nnoindex 페어');
for (const r of rows.filter((x) => !x.index)) {
  console.log(`  [${r.basis}] /vs/${r.slug}`);
  if (args.has('--all')) console.log(`      ${r.bottomLine}`);
}

if (args.has('--all')) {
  console.log('\n색인 페어');
  for (const r of rows.filter((x) => x.index)) {
    console.log(`  [${r.basis}] /vs/${r.slug}\n      ${r.bottomLine}`);
  }
}
