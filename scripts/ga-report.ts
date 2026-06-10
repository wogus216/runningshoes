#!/usr/bin/env tsx
/**
 * GA4 트래픽 리포트 — 서비스 계정으로 인기 페이지·트래픽 소스 조회
 *
 * 사용법:
 *   npm run ga              # 최근 28일
 *   npm run ga -- 7         # 최근 7일
 *   npm run ga -- 90        # 최근 90일
 *
 * 키 파일 경로는 GA_KEY_FILE 환경변수 또는 아래 기본값.
 */
import { BetaAnalyticsDataClient } from '@google-analytics/data';

const KEY_FILE =
  process.env.GA_KEY_FILE ||
  '/Users/kwonjaehyeon/Downloads/blog-auto-494801-4f5d2392338c.json';
const PROPERTY_ID = process.env.GA_PROPERTY_ID || '523714985';

const client = new BetaAnalyticsDataClient({ keyFilename: KEY_FILE });
const property = `properties/${PROPERTY_ID}`;

function pad(s: string, n: number): string {
  const str = String(s);
  // 한글 폭 보정 (대략 2칸)
  let w = 0;
  for (const ch of str) w += ch.charCodeAt(0) > 0x2e80 ? 2 : 1;
  return str + ' '.repeat(Math.max(0, n - w));
}

async function main() {
  const days = Number(process.argv[2]) || 28;
  const dateRanges = [{ startDate: `${days}daysAgo`, endDate: 'today' }];
  console.log(`\n📊 GA4 리포트 — 최근 ${days}일 (property ${PROPERTY_ID})\n`);

  // 1) 인기 페이지
  const [pages] = await client.runReport({
    property,
    dateRanges,
    dimensions: [{ name: 'pageTitle' }],
    metrics: [
      { name: 'screenPageViews' },
      { name: 'activeUsers' },
      { name: 'eventCount' },
      { name: 'bounceRate' },
    ],
    orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }],
    limit: 30,
  });
  console.log('━━━ 인기 페이지 TOP30 (조회수) ━━━');
  console.log(pad('제목', 50), pad('조회', 7), pad('활성', 7), pad('이벤트', 8), '이탈률');
  for (const r of pages.rows ?? []) {
    const title = (r.dimensionValues?.[0].value ?? '').slice(0, 44);
    const [pv, au, ev, br] = (r.metricValues ?? []).map((m) => m.value ?? '');
    console.log(
      pad(title, 50),
      pad(pv, 7),
      pad(au, 7),
      pad(ev, 8),
      `${(Number(br) * 100).toFixed(1)}%`
    );
  }

  // 2) 트래픽 소스
  const [src] = await client.runReport({
    property,
    dateRanges,
    dimensions: [{ name: 'sessionSourceMedium' }],
    metrics: [{ name: 'sessions' }, { name: 'activeUsers' }],
    orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
    limit: 12,
  });
  console.log('\n━━━ 트래픽 소스 (세션) ━━━');
  for (const r of src.rows ?? []) {
    console.log(
      pad(r.dimensionValues?.[0].value ?? '', 34),
      pad(r.metricValues?.[0].value ?? '', 7),
      `활성 ${r.metricValues?.[1].value ?? ''}`
    );
  }

  // 3) 요약 지표
  const [tot] = await client.runReport({
    property,
    dateRanges,
    metrics: [
      { name: 'activeUsers' },
      { name: 'newUsers' },
      { name: 'screenPageViews' },
      { name: 'averageSessionDuration' },
    ],
  });
  const m = tot.rows?.[0].metricValues ?? [];
  console.log('\n━━━ 요약 ━━━');
  console.log(
    `활성 ${m[0]?.value} · 신규 ${m[1]?.value} · 조회수 ${m[2]?.value} · 평균세션 ${Math.round(Number(m[3]?.value ?? 0))}초`
  );
  console.log('');
}

main().catch((err) => {
  if (String(err?.message || err).includes('PERMISSION_DENIED') || err?.code === 7) {
    console.error('\n❌ 권한 오류 — 서비스 계정이 GA 속성에 추가되지 않았습니다.');
    console.error('   GA4 → 관리 → 속성 액세스 관리 → + → ga-leader@blog-auto-494801.iam.gserviceaccount.com (뷰어) 추가 후 재시도.');
  } else {
    console.error('❌ 오류:', err?.message || err);
  }
  process.exit(1);
});
