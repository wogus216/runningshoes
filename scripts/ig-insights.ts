#!/usr/bin/env tsx
/**
 * @allrunabout 게시물 인사이트를 모은다 (Instagram API with Instagram Login).
 *
 *   npm run ig:insights               # 최근 게시물 표 + 스냅샷 JSON 저장
 *   npm run ig:insights -- --limit=10
 *
 * ── 왜 필요한가 ──────────────────────────────────────────────
 * 첫 2주 판정(.omc/reels-plan-debate/2week-final.md)은 게시물마다 72시간±6시간에
 * 도달·저장·공유를 한 번 기록한다. 손으로 앱을 열어 옮기면 주 20~30분이 들고 시점이 흔들린다.
 *
 * ── 준비 ────────────────────────────────────────────────────
 * 1. 계정이 크리에이터/비즈니스여야 한다(개인 계정은 API 인사이트 없음).
 * 2. developers.facebook.com 에서 비즈니스 유형 앱 → Instagram › 비즈니스 로그인으로 API 설정
 *    → 계정 옆 "토큰 생성". 대시보드 토큰은 60일 유효(Meta 문서, 2026-10-18 확인).
 * 3. `.env.local` 에 `IG_ACCESS_TOKEN=...`. 토큰은 출력·커밋하지 않는다.
 *
 * 스냅샷은 `.omc/instagram-insights/`(비공개)에 쌓인다. 비팔로워 도달은 이 API 의 게시물 지표에
 * 없어 N/A 로 남는다 — 앱 화면 값과 섞지 말 것.
 */
import { mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';
import { loadLocalEnv, requireEnv } from './lib/api-env';
import { cell, hoursSince, in72hWindow, metricsFor, pickValues } from './lib/ig-insights-core';

const API = 'https://graph.instagram.com/v26.0';

loadLocalEnv();
const TOKEN = requireEnv(
  'IG_ACCESS_TOKEN',
  'developers.facebook.com 앱 대시보드 › Instagram › 비즈니스 로그인으로 API 설정 › 토큰 생성 (60일 유효)',
);
const limit = Number(process.argv.find((a) => a.startsWith('--limit='))?.split('=')[1] ?? 25);

async function get<T>(path: string, params: Record<string, string> = {}): Promise<T> {
  const qs = new URLSearchParams({ ...params, access_token: TOKEN });
  const res = await fetch(`${API}${path}?${qs}`);
  const body = (await res.json()) as T & { error?: { message: string; code: number } };
  // 오류 메시지에 URL(=토큰)이 섞이지 않게 경로만 남긴다
  if (!res.ok || body.error) throw new Error(`${path} → ${body.error?.code ?? res.status} ${body.error?.message ?? ''}`);
  return body;
}

interface Media {
  id: string;
  media_type: string;
  media_product_type: string;
  permalink: string;
  timestamp: string;
  caption?: string;
}

async function insights(id: string, metrics: string[]): Promise<Record<string, number | null>> {
  try {
    const r = await get<{ data: Parameters<typeof pickValues>[0] }>(`/${id}/insights`, { metric: metrics.join(',') });
    return { ...Object.fromEntries(metrics.map((m) => [m, null])), ...pickValues(r.data) };
  } catch {
    // 유형에 없는 지표 하나가 요청 전체를 거절시킨다 — 지표별로 다시 묻는다
    const out: Record<string, number | null> = {};
    for (const m of metrics) {
      try {
        const r = await get<{ data: Parameters<typeof pickValues>[0] }>(`/${id}/insights`, { metric: m });
        out[m] = pickValues(r.data)[m] ?? null;
      } catch {
        out[m] = null;
      }
    }
    return out;
  }
}

async function main() {
  const now = new Date();
  const account = await get<Record<string, string | number>>('/me', {
    fields: 'user_id,username,account_type,followers_count,follows_count,media_count',
  });
  console.log(`📸 @${account.username} · ${account.account_type} · 팔로워 ${account.followers_count} · 게시물 ${account.media_count}`);

  const { data: media } = await get<{ data: Media[] }>('/me/media', {
    fields: 'id,media_type,media_product_type,permalink,timestamp,caption',
    limit: String(limit),
  });

  const rows = [];
  for (const m of media) {
    const hours = hoursSince(m.timestamp, now);
    const values = await insights(m.id, metricsFor(m.media_product_type));
    rows.push({ ...m, caption: m.caption?.split('\n')[0].slice(0, 40), hours, in72hWindow: in72hWindow(hours), values });
  }

  console.log('\n게시 시각(UTC)          유형    경과h   72h창 도달 조회 저장 공유 팔로우 링크');
  for (const r of rows) {
    const v = r.values;
    console.log(
      [r.timestamp.slice(0, 16), r.media_product_type.padEnd(6), String(r.hours).padStart(6), r.in72hWindow ? '  ●  ' : '     ',
        cell(v.reach), cell(v.views), cell(v.saved), cell(v.shares), cell(v.follows), r.permalink].join('  '),
    );
  }

  const dir = join(process.cwd(), '.omc', 'instagram-insights');
  mkdirSync(dir, { recursive: true });
  const file = join(dir, `${now.toISOString().slice(0, 13).replace('T', '_')}h.json`);
  writeFileSync(file, JSON.stringify({ fetchedAt: now.toISOString(), apiVersion: 'v26.0', account, rows }, null, 2));
  console.log(`\n💾 ${file.replace(process.cwd() + '/', '')} (N/A 는 0 이 아니라 미제공)`);
}

main().catch((e) => {
  console.error(`❌ ${e.message}`);
  process.exit(1);
});
