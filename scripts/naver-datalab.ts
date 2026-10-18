#!/usr/bin/env tsx
/**
 * 네이버 검색어 트렌드(데이터랩)로 검색 관심도의 흐름을 본다.
 *
 *   npm run naver:trend -- "JTBC마라톤=JTBC마라톤,JTBC 서울마라톤" "춘천마라톤"
 *   npm run naver:trend -- "러닝화 추천" --from=2025-10-01 --to=2026-10-17 --unit=week
 *
 * ── 왜 필요한가 ──────────────────────────────────────────────
 * 사이트 유입의 큰 몫이 네이버인데 네이버 쪽 검색 관심도를 볼 도구가 없었다. 대회 글·릴스 주제를
 * "언제 올릴지"는 관심이 오르기 시작하는 주를 알아야 정할 수 있다.
 *
 * ⚠️ ratio 는 검색 수가 아니다. **이번 요청 전체에서 가장 큰 구간을 100 으로 둔 상대값**이라
 * 요청마다 기준이 바뀐다. 다른 요청의 숫자끼리 비교하지 말 것. 절대 검색 수는 검색광고 API 몫이다.
 *
 * 준비: developers.naver.com › Application › 애플리케이션 등록(데이터랩 검색어 트렌드, 비로그인 오픈 API)
 * → `.env.local` 에 NAVER_CLIENT_ID · NAVER_CLIENT_SECRET. 하루 1,000회.
 */
import { loadLocalEnv, requireEnv } from './lib/api-env';
import { defaultRange, parseGroup, peak, type TrendPoint } from './lib/naver-datalab-core';

loadLocalEnv();
const HINT = 'developers.naver.com › Application › 애플리케이션 등록 › 사용 API: 데이터랩(검색어트렌드)';
const id = requireEnv('NAVER_CLIENT_ID', HINT);
const secret = requireEnv('NAVER_CLIENT_SECRET', HINT);

const flag = (k: string) => process.argv.find((a) => a.startsWith(`--${k}=`))?.split('=')[1];
const groups = process.argv.slice(2).filter((a) => !a.startsWith('--')).map(parseGroup);
if (groups.length === 0 || groups.length > 5) {
  console.error('주제어를 1~5개 준다: npm run naver:trend -- "이름=검색어1,검색어2" "검색어"');
  process.exit(1);
}
const range = defaultRange(new Date());
const body = {
  startDate: flag('from') ?? range.startDate,
  endDate: flag('to') ?? range.endDate,
  timeUnit: flag('unit') ?? 'week',
  keywordGroups: groups,
};

async function main() {
  const res = await fetch('https://openapi.naver.com/v1/datalab/search', {
    method: 'POST',
    headers: { 'X-Naver-Client-Id': id, 'X-Naver-Client-Secret': secret, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  const json = await res.json();
  if (!res.ok) throw new Error(`${res.status} ${json.errorMessage ?? JSON.stringify(json)}`);

  console.log(`📈 ${body.startDate} ~ ${body.endDate} · ${body.timeUnit} · ratio = 이 요청 최댓값 100 기준 상대값\n`);
  for (const r of json.results as { title: string; keywords: string[]; data: TrendPoint[] }[]) {
    const top = peak(r.data);
    const last = r.data.at(-1);
    console.log(`■ ${r.title} [${r.keywords.join(', ')}]`);
    console.log(`  최고 ${top ? `${top.period} ${top.ratio.toFixed(1)}` : '데이터 없음'} · 마지막 ${last ? `${last.period} ${last.ratio.toFixed(1)}` : '—'}`);
    console.log('  ' + r.data.slice(-12).map((p) => `${p.period.slice(5)} ${p.ratio.toFixed(0)}`).join(' · '));
  }
}

main().catch((e) => {
  console.error(`❌ ${e.message}`);
  process.exit(1);
});
