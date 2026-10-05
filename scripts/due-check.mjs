#!/usr/bin/env node
/**
 * 후속 처리 기한 점검 — 세션 시작 훅에서 돈다.
 *
 *   node scripts/due-check.mjs            # 오늘 기준
 *   node scripts/due-check.mjs 2026-09-20 # 특정 날짜 기준(테스트용)
 *
 * 왜 있나: 대회 status 후속 처리는 `.omc/todo-estimates.md` 표의 "처리일"에 적혀 있는데,
 * 그 날짜에 아무것도 울리지 않았다. 사람이 세션을 열고 파일을 떠올려야만 처리됐고,
 * 그래서 9/1 개시 2건이 9/2에, 8/31 스캔에서 낡은 status 4건이 뒤늦게 나왔다(2026-09-03 분석).
 * 이 스크립트는 "기억"을 "세션 첫 화면"으로 옮긴다.
 *
 * 출력 네 묶음:
 *  ① todo 표에서 기한이 지났거나 3일 안에 오는 행 (날짜 칸에 ✅·~~ 가 있으면 완료)
 *     - DB lastVerified 가 기한 이후인 행은 "처리됐을 수 있음"으로 따로 — 처리해 놓고 ✅ 를 안 단 경우
 *     - 날짜 칸이 표준 형식이 아니라 못 읽은 행은 "형식 오류"로 — 조용히 건너뛰지 않는다
 *  ② 마라톤 DB에서 날짜만으로 확정되는 불일치 — validate 와 같은 [A][B] 규칙.
 *     (validate 는 커밋 때만 돌지만, 세션 시작 때 먼저 보여 주는 게 목적)
 *  ③ main 체크아웃·worktree 에 멈춘 작업 — 24시간 넘은 미커밋 파일, push 안 된 커밋, 원격보다 뒤처짐
 *
 * 2026-09-27 보강: 알림이 22개 세션에서 떴는데 기한 후 처리가 21건 중 14건(중앙값 4일)이었다.
 * 원인은 ⓐ 처리해 놓고 ✅ 를 안 달아 경보가 소음이 됨 ⓑ "10월 중"·본문의 ✅ 때문에 9+2행이 조용히 빠짐
 * ⓒ "남의 작업"이라 아무도 안 끝낸 미커밋·미push 작업(신발 3종 4일, 대회 글 1편). 메모리 followup-tracking-architecture.
 *
 * 출력이 없으면 아무것도 찍지 않는다 — 훅 출력은 컨텍스트에 실리므로 조용한 게 기본.
 */
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const today = process.argv[2] || new Date().toISOString().slice(0, 10);
const plusDays = (d, n) => {
  const t = new Date(`${d}T00:00:00Z`);
  t.setUTCDate(t.getUTCDate() + n);
  return t.toISOString().slice(0, 10);
};
const soon = plusDays(today, 3);

const lines = [];

// 마라톤 DB — ①의 "처리됐을 수 있음" 판정과 ②가 같이 쓴다
const events = [];
const mdir = path.join(ROOT, 'src/lib/data/marathon');
if (fs.existsSync(mdir)) {
  for (const f of fs.readdirSync(mdir).filter(f => f.endsWith('.ts') && f !== 'index.ts')) {
    const src = fs.readFileSync(path.join(mdir, f), 'utf8');
    for (const block of src.split(/\n {2}\{\n/).slice(1)) {
      const pick = re => (block.match(re) || [])[1];
      const id = pick(/id:\s*'([^']+)'/);
      if (!id) continue;
      events.push({
        id,
        date: pick(/date:\s*'([^']+)'/),
        status: pick(/status:\s*'([^']+)'/),
        rs: pick(/registrationStart:\s*'([^']+)'/),
        re: pick(/registrationEnd:\s*'([^']+)'/),
        verified: pick(/lastVerified:\s*'([^']+)'/),
        postponed: /postponed:\s*true/.test(block),
      });
    }
  }
}
const verifiedOf = new Map(events.map(e => [e.id, e.verified]));

// ① todo 표
const todoPath = path.join(ROOT, '.omc/todo-estimates.md');
if (fs.existsSync(todoPath)) {
  const overdue = [];
  const maybeDone = [];
  const upcoming = [];
  const malformed = [];
  let heading = '';
  for (const raw of fs.readFileSync(todoPath, 'utf8').split('\n')) {
    if (/^#{1,6} /.test(raw)) {
      heading = raw.replace(/^#+\s*/, '').slice(0, 30);
      continue;
    }
    // 날짜 칸이 굵은 날짜로 시작하는 행만 본다: | **2026-09-04** | `대상` | 작업 |  (2열 표면 대상 = 절 제목)
    if (!/^\|\s*(?:✅\s*)?(?:~~)?\*\*\d{4}/.test(raw)) continue;
    const cells = raw.split('|').slice(1, -1).map(c => c.trim());
    // 완료 표시는 날짜 칸에서만 본다 — 본문의 "✅ 가격 입력, 남은 것: …" 때문에 미완료 행이 통째로 빠졌었다
    if (/✅|~~/.test(cells[0])) continue;
    const dm = cells[0].match(/^\*\*(\d{4}-\d{2}-\d{2})(?:경)?\*\*$/);
    if (!dm) {
      malformed.push(`${cells[0]} · ${(cells[1] || '').slice(0, 40)}`);
      continue;
    }
    const date = dm[1];
    const [target, task] = cells.length >= 3 ? [cells[1], cells[2]] : [heading, cells[1] || ''];
    const item = `${date} · ${target} — ${task.slice(0, 70)}`;
    if (date <= today) {
      // 처리해 놓고 ✅ 를 안 단 경우를 가른다 — 언급된 대회가 전부 기한 이후에 재확인됐으면
      const ids = [...`${target} ${task}`.matchAll(/`([a-z0-9-]+-20\d\d)`/g)].map(m => m[1]).filter(id => verifiedOf.has(id));
      if (ids.length && ids.every(id => (verifiedOf.get(id) || '') >= date)) maybeDone.push(`${item} [DB 확인 ${ids.map(id => verifiedOf.get(id)).join(', ')}]`);
      else overdue.push(item);
    } else if (date <= soon) upcoming.push(item);
  }
  if (overdue.length) lines.push(`⏰ 기한 지난 후속 ${overdue.length}건 (.omc/todo-estimates.md)`, ...overdue.map(s => `   ${s}`));
  if (maybeDone.length) lines.push(`🔎 처리됐을 수 있음 ${maybeDone.length}건 — DB 확인일이 기한 이후. 내용 대조 후 날짜 칸에 ✅ 만 달 것`, ...maybeDone.map(s => `   ${s}`));
  if (upcoming.length) lines.push(`📅 3일 안 후속 ${upcoming.length}건`, ...upcoming.map(s => `   ${s}`));
  if (malformed.length) lines.push(`⚠️ 날짜 형식 오류 ${malformed.length}건 — 이 행들은 기한이 와도 알림이 안 뜬다. 날짜 칸을 **YYYY-MM-DD** 또는 **YYYY-MM-DD경** 으로`, ...malformed.map(s => `   ${s}`));
}

// ② 마라톤 DB — 날짜만으로 확정되는 것
{
  const bad = [];
  const held = [];
  for (const { id, date, status, rs, re, postponed } of events) {
    // 연기는 원래 날짜가 지나도 대회종료가 아니다 — 🚨 대신 아래 ⏸ 로 매번 띄운다
    if (postponed) held.push(`${id}: 연기 — 새 날짜 미정(원래 일정 ${date}), 공식 재확인`);
    else if (date && date < today && status !== '대회종료') bad.push(`${id}: 개최일 ${date} 지남, status '${status}' → 대회종료`);
    if (status === '접수예정' && rs && rs < today) bad.push(`${id}: 접수 시작 ${rs} 지남, 아직 '접수예정' → 공식 확인 후 접수중/마감`);
    if ((status === '접수예정' || status === '접수중') && re && re < today) bad.push(`${id}: 접수 마감 ${re} 지남, 아직 '${status}' → 공식 확인 후 마감(연장이면 registrationEnd 갱신)`);
  }
  if (bad.length) lines.push(`🚨 마라톤 DB 날짜 불일치 ${bad.length}건 (validate 가 커밋을 막는다)`, ...bad.map(s => `   ${s}`));
  if (held.length) lines.push(`⏸ 일정 연기 ${held.length}건 — 새 날짜가 나올 때까지 매번 뜬다. 공식 공지 재확인`, ...held.map(s => `   ${s}`));
}

// ③ 멈춘 작업 — main 체크아웃과 worktree 를 본다. git 이 없거나 실패하면 조용히 건너뛴다
const git = (args, cwd) => {
  try {
    return execFileSync('git', ['-c', 'core.quotepath=off', ...args], { cwd, encoding: 'utf8', timeout: 5000, stdio: ['ignore', 'pipe', 'ignore'] }).trim();
  } catch {
    return null;
  }
};
const common = git(['rev-parse', '--path-format=absolute', '--git-common-dir'], ROOT);
if (common) {
  const MAIN = common.replace(/\/\.git\/?$/, '');
  const DAY = 864e5;
  const now = Date.now();
  const ago = ms => `${Math.floor((now - ms) / DAY)}일 전`;
  // 24시간 넘게 안 건드린 미커밋 파일
  const staleFiles = dir => {
    const out = [];
    for (const l of (git(['status', '--porcelain', '--untracked-files=all'], dir) || '').split('\n').filter(Boolean)) {
      const p = l.slice(3).split(' -> ').pop();
      try {
        const t = fs.statSync(path.join(dir, p)).mtimeMs;
        if (now - t > DAY) out.push(`${p} (${ago(t)})`);
      } catch {
        /* 삭제된 파일 */
      }
    }
    return out;
  };
  git(['fetch', '-q', 'origin', 'main'], MAIN); // 실패하면 마지막 fetch 기준으로 본다
  const stuck = [];
  const behind = Number(git(['rev-list', '--count', 'HEAD..origin/main'], MAIN) || 0);
  if (behind) stuck.push(`main 체크아웃이 원격보다 ${behind}커밋 뒤처짐 — 이 알림도 낡은 todo·DB 를 읽고 있다 (git -C ${MAIN} merge --ff-only origin/main)`);
  const ahead = git(['log', '--format=%h %s', 'origin/main..HEAD'], MAIN);
  if (ahead) stuck.push(`main 체크아웃에 push 안 된 커밋: ${ahead.split('\n').map(s => s.slice(0, 60)).join(' / ')}`);
  const mainStale = staleFiles(MAIN);
  if (mainStale.length) stuck.push(`main 체크아웃 미커밋 ${mainStale.length}개: ${mainStale.slice(0, 5).join(', ')}${mainStale.length > 5 ? ' …' : ''}`);
  const wts = (git(['worktree', 'list', '--porcelain'], MAIN) || '').split('\n').filter(l => l.startsWith('worktree ')).map(l => l.slice(9));
  for (const wt of wts) {
    if (wt === MAIN || !fs.existsSync(wt)) continue;
    const unpushed = Number(git(['rev-list', '--count', 'origin/main..HEAD'], wt) || 0);
    const last = Number(git(['log', '-1', '--format=%ct'], wt) || 0) * 1000;
    const stale = staleFiles(wt);
    const rel = path.relative(MAIN, wt) || wt;
    if (unpushed && now - last > DAY) stuck.push(`${rel}: main 에 없는 커밋 ${unpushed}개, 마지막 커밋 ${ago(last)}`);
    if (stale.length) stuck.push(`${rel}: 미커밋 ${stale.length}개 (${stale.slice(0, 3).join(', ')}${stale.length > 3 ? ' …' : ''})`);
  }
  if (stuck.length) lines.push(`🧷 멈춘 작업 ${stuck.length}건 — "남의 작업"이라 두지 말 것. 주인이 살아 있는지 보고, 없으면 검수 후 끝내거나 운영자에게 묻는다`, ...stuck.map(s => `   ${s}`));
}

if (lines.length) {
  console.log(`[후속 점검 ${today}] → 첫 응답에서 운영자에게 한 줄로 보고할 것 (CLAUDE.md 「세션 시작 알림」)`);
  console.log(lines.join('\n'));
}
