#!/usr/bin/env tsx
/**
 * 코스 지도를 만들 수 있는 대회를 찾는다 — 공식 홈에 **텍스트 경유지**가 있는지 훑는다.
 *
 *   npx tsx scripts/course-map/scan-sources.ts            # 아직 안 열린 대회 전부
 *   npx tsx scripts/course-map/scan-sources.ts --all      # 지난 대회까지
 *   npx tsx scripts/course-map/scan-sources.ts <eventId>  # 한 대회만
 *
 * ── 왜 필요한가 ──────────────────────────────────────────────
 * 코스 지도의 병목은 렌더가 아니라 **입력 데이터**다. 공식 코스맵 이미지는 트레이스가
 * 금지돼 있어(2차적저작물), 공식이 "글로 적어둔" 경유지가 있어야만 착수할 수 있다.
 * 그런데 한국 대회 공식 홈은 대개 코스를 이미지 한 장으로만 준다 —
 * 2026-08 에 손으로 확인한 8곳 중 텍스트가 있던 건 인천송도 하나뿐이었다.
 *
 * 다행히 규칙성이 있다. **도로 통제 안내에는 지점 이름이 글로 적힌다**(그래야 주민이
 * 읽는다). 그리고 그 페이지는 대회가 임박해야 채워진다 — 동아 계열은 `/traffic` 을
 * 템플릿으로 갖고 있고 D-14 안팎에 "추후 공개 예정"이 실제 표로 바뀐다.
 *
 * 그래서 이 스크립트는 "지금 만들 수 있는 대회"가 아니라 **"언제 다시 볼지"**를 알려준다.
 * 시즌마다 한 번씩 돌리면 손으로 브라우저를 여는 일이 사라진다.
 */
import { marathonEvents } from '../../src/lib/data/marathon';

const UA =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0 Safari/537.36';
const TIMEOUT = 12_000;
/** 한 번에 띄우는 사이트 수. 상대 서버를 때리지 않으려고 낮게 잡는다 */
const CONCURRENCY = 4;

type Verdict = 'ready' | 'pending' | 'image-only' | 'blocked' | 'no-site';

interface Scan {
  id: string;
  name: string;
  date: string;
  verdict: Verdict;
  /** 텍스트에서 찾은 지점 후보 */
  hits: string[];
  page?: string;
  note?: string;
}

const VERDICT_LABEL: Record<Verdict, string> = {
  ready: '◎ 텍스트 있음',
  pending: '△ 추후공개',
  'image-only': '✕ 이미지만',
  blocked: '? 접근불가',
  'no-site': '- 사이트없음',
};

/** 코스·통제 페이지일 법한 링크인가 */
function isCandidateLink(text: string, href: string): boolean {
  const t = text.replace(/\s+/g, '');
  return (
    /코스|통제|경로|주로/.test(t) ||
    /course|traffic|control|route|map/i.test(href)
  );
}

function stripHtml(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * 텍스트에서 "지점처럼 보이는 말"을 뽑는다.
 * 한글은 단어 경계(\b)가 안 먹으므로 접미사로 자른다.
 */
function findPlaceHits(text: string): string[] {
  const re =
    /[가-힣A-Za-z0-9]{2,12}(사거리|삼거리|교차로|대교|육교|터널|방조제|해수욕장|공원|운동장|경기장|캠퍼스|연구소|주민센터|시청|구청|역앞|나들목|IC|톨게이트)/g;
  const hits = text.match(re) ?? [];
  return Array.from(new Set(hits));
}

/** 통제/코스 안내에 붙는 구조어 — 지점 나열인지 단순 소개인지 가른다 */
function hasStructureWords(text: string): boolean {
  return /반환|출발|피니시|골인|통제\s*시간|우회|구간/.test(text);
}

/**
 * 리다이렉트를 직접 따라가며 **쿠키를 물고 간다.**
 *
 * Node 의 `fetch(redirect:'follow')` 는 홉 사이에 쿠키를 유지하지 않는다. raceplan 계열
 * 대회몰(손기정·부산바다)은 SSO 핸드셰이크가 세션 쿠키를 요구해서, 쿠키 없이 따라가면
 * `login.raceplan.co.kr` 과 원래 도메인을 오가는 무한 루프에 빠지고 예외로 끝난다 —
 * 2026-08-31 까지 이 스캔이 그 대회들을 "응답 없음"으로 보고하고 있었지만
 * 실제로는 쿠키 자만 붙이면 200 이 떨어진다.
 */
async function get(url: string): Promise<{ status: number; html: string } | null> {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), TIMEOUT);
  const jar = new Map<string, string>();
  try {
    let current = url;
    for (let hop = 0; hop < 12; hop++) {
      const cookie = [...jar].map(([k, v]) => `${k}=${v}`).join('; ');
      const res = await fetch(current, {
        headers: {
          'User-Agent': UA,
          'Accept-Language': 'ko-KR,ko;q=0.9',
          ...(cookie ? { Cookie: cookie } : {}),
        },
        redirect: 'manual',
        signal: ctrl.signal,
      });
      for (const raw of res.headers.getSetCookie?.() ?? []) {
        const [pair] = raw.split(';');
        const eq = pair.indexOf('=');
        if (eq > 0) jar.set(pair.slice(0, eq).trim(), pair.slice(eq + 1).trim());
      }
      const location = res.headers.get('location');
      if (res.status >= 300 && res.status < 400 && location) {
        current = new URL(location, current).toString();
        continue;
      }
      return { status: res.status, html: await res.text() };
    }
    return null; // 홉 한도 초과 = 진짜 루프
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

function judge(text: string): { verdict: Verdict; hits: string[] } {
  if (/추후\s*공개|COMING\s*SOON|준비\s*중|준비중/i.test(text)) {
    return { verdict: 'pending', hits: [] };
  }
  const hits = findPlaceHits(text);
  // 지점이 둘 이상이고 구조어가 붙어 있어야 "경유지 서술"로 본다.
  // 하나만 잡히는 건 대개 대회장 주소다.
  if (hits.length >= 2 && hasStructureWords(text)) return { verdict: 'ready', hits };
  return { verdict: 'image-only', hits };
}

async function scanEvent(ev: (typeof marathonEvents)[number]): Promise<Scan> {
  const base = { id: ev.id, name: ev.name, date: ev.date };
  if (!ev.website) return { ...base, verdict: 'no-site', hits: [] };

  const root = await get(ev.website);
  if (!root || root.status >= 400) {
    return { ...base, verdict: 'blocked', hits: [], note: root ? `HTTP ${root.status}` : '응답 없음' };
  }

  // SSO 로 튕기는 사이트(raceplan 계열)는 본문을 못 본다
  if (/auth\/sso|login\.raceplan/i.test(root.html) && root.html.length < 20_000) {
    return { ...base, verdict: 'blocked', hits: [], note: 'SSO 리다이렉트' };
  }

  // 루트에서 코스·통제 링크를 뽑는다
  const links = Array.from(root.html.matchAll(/<a[^>]+href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi))
    .map((m) => ({ href: m[1], text: stripHtml(m[2]) }))
    .filter((l) => l.href && !/^(#|javascript:|mailto:|tel:)/i.test(l.href))
    .filter((l) => isCandidateLink(l.text, l.href));

  const seen = new Set<string>();
  const targets: string[] = [];
  for (const l of links) {
    let abs: string;
    try {
      abs = new URL(l.href, ev.website).href;
    } catch {
      continue;
    }
    if (seen.has(abs)) continue;
    seen.add(abs);
    targets.push(abs);
    if (targets.length >= 4) break;
  }
  // 후보 링크를 못 찾으면 루트 자체를 본다(한 장짜리 사이트가 흔하다)
  if (!targets.length) targets.push(ev.website);

  let best: Scan = { ...base, verdict: 'image-only', hits: [] };
  for (const url of targets) {
    const page = url === ev.website ? root : await get(url);
    if (!page || page.status >= 400) continue;
    const text = stripHtml(page.html);
    const { verdict, hits } = judge(text);
    if (verdict === 'ready') return { ...base, verdict, hits: hits.slice(0, 8), page: url };
    // pending 은 image-only 보다 정보가 많다(곧 열린다는 뜻)
    if (verdict === 'pending' && best.verdict !== 'pending') {
      best = { ...base, verdict, hits: [], page: url };
    }
    if (verdict === 'image-only' && hits.length > best.hits.length) {
      best = { ...base, verdict: best.verdict === 'pending' ? 'pending' : 'image-only', hits: hits.slice(0, 8), page: url };
    }
  }
  return best;
}

async function pool<T, R>(items: T[], size: number, fn: (t: T) => Promise<R>): Promise<R[]> {
  const out: R[] = new Array(items.length);
  let i = 0;
  await Promise.all(
    Array.from({ length: Math.min(size, items.length) }, async () => {
      while (i < items.length) {
        const idx = i++;
        out[idx] = await fn(items[idx]);
      }
    })
  );
  return out;
}

async function main() {
  const args = process.argv.slice(2);
  const all = args.includes('--all');
  const only = args.find((a) => !a.startsWith('--'));

  const today = new Date().toISOString().slice(0, 10);
  let targets = marathonEvents.filter((e) => (all ? true : e.date >= today));
  if (only) targets = marathonEvents.filter((e) => e.id === only);
  // 이미 지도가 있는 대회는 볼 필요가 없다
  targets = targets.filter((e) => !e.courseInfo?.gpx);
  targets.sort((a, b) => a.date.localeCompare(b.date));

  console.log(`\n코스 텍스트 스캔 — 대상 ${targets.length}개 (오늘 ${today}, 지도 보유분 제외)\n`);

  const results = await pool(targets, CONCURRENCY, scanEvent);

  const order: Verdict[] = ['ready', 'pending', 'image-only', 'blocked', 'no-site'];
  for (const v of order) {
    const rows = results.filter((r) => r.verdict === v);
    if (!rows.length) continue;
    console.log(`\n${VERDICT_LABEL[v]}  ${rows.length}개`);
    for (const r of rows) {
      const tail = r.hits.length ? ` — ${r.hits.slice(0, 5).join(' · ')}` : r.note ? ` — ${r.note}` : '';
      console.log(`  ${r.date}  ${r.name.slice(0, 26).padEnd(26)}${tail}`);
      if (v === 'ready' && r.page) console.log(`${' '.repeat(14)}${r.page}`);
    }
  }

  const ready = results.filter((r) => r.verdict === 'ready');
  const pending = results.filter((r) => r.verdict === 'pending');
  console.log(
    `\n요약: 착수 가능 ${ready.length} · 추후공개(재확인 대상) ${pending.length} · ` +
      `이미지만 ${results.filter((r) => r.verdict === 'image-only').length} · ` +
      `접근불가 ${results.filter((r) => r.verdict === 'blocked').length}\n`
  );
  if (pending.length) {
    console.log('추후공개 대회는 D-14 안팎에 통제 안내가 열린다 — 그때 다시 돌릴 것.');
    for (const r of pending.slice(0, 5)) {
      const d = new Date(r.date + 'T00:00:00Z');
      d.setUTCDate(d.getUTCDate() - 14);
      console.log(`  ${r.name.slice(0, 24)} → ${d.toISOString().slice(0, 10)} 이후`);
    }
    console.log('');
  }
}

main();
