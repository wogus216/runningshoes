#!/usr/bin/env tsx
/**
 * 대회 글 구성 표준 검사 — `npm run validate` 의 8번 섹션이 호출한다.
 *
 * validate.js 는 순수 Node이고 정규식으로 소스를 읽는데, raceMeta 는
 * 중첩 객체라 정규식 파싱이 취약하다. 그래서 검사만 TS로 떼어내 데이터를
 * 타입 그대로 읽는다. 종료 코드로 결과를 전달한다 (1 = 에러 있음).
 */
import { getAllPosts } from '../src/lib/data/blog';
import { checkRaceMeta } from '../src/lib/blog/race-meta-rules';

const posts = getAllPosts();
const withMeta = posts.filter((p) => p.raceMeta);
const issues = withMeta.flatMap(checkRaceMeta);

const errors = issues.filter((i) => i.level === 'error');
const warns = issues.filter((i) => i.level === 'warn');

for (const i of errors) console.error(`  ❌ [${i.slug}] ${i.message}`);
for (const i of warns) console.warn(`  ⚠️  [${i.slug}] ${i.message}`);

if (errors.length === 0 && warns.length === 0) {
  console.log(`  ✅ 대회 글 ${withMeta.length}편 — 구성 표준 통과`);
}

// validate.js 가 카운트를 읽을 수 있게 마지막 줄에 기계 판독용 요약을 남긴다
console.log(`RACE_META_RESULT ${withMeta.length} ${errors.length} ${warns.length}`);
process.exit(errors.length > 0 ? 1 : 0);
