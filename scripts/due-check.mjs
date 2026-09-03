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
 * 출력 두 묶음:
 *  ① todo 표에서 기한이 지났거나 3일 안에 오는 행 (완료 표시 ✅·~~ 는 제외)
 *  ② 마라톤 DB에서 날짜만으로 확정되는 불일치 — validate 와 같은 [A][B] 규칙.
 *     (validate 는 커밋 때만 돌지만, 세션 시작 때 먼저 보여 주는 게 목적)
 *
 * 출력이 없으면 아무것도 찍지 않는다 — 훅 출력은 컨텍스트에 실리므로 조용한 게 기본.
 */
import fs from 'node:fs';
import path from 'node:path';
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

// ① todo 표
const todoPath = path.join(ROOT, '.omc/todo-estimates.md');
if (fs.existsSync(todoPath)) {
  const overdue = [];
  const upcoming = [];
  for (const raw of fs.readFileSync(todoPath, 'utf8').split('\n')) {
    // | **2026-09-04** | `대상` | 작업 |   ← 날짜가 굵게 박힌 행만 본다
    const m = raw.match(/^\|\s*\*\*(\d{4}-\d{2}-\d{2})(?:경)?\*\*\s*\|\s*([^|]+)\|\s*([^|]*)\|/);
    if (!m) continue;
    if (/✅|~~/.test(raw)) continue;
    const [, date, target, task] = m;
    const item = `${date} · ${target.trim()} — ${task.trim().slice(0, 70)}`;
    if (date <= today) overdue.push(item);
    else if (date <= soon) upcoming.push(item);
  }
  if (overdue.length) lines.push(`⏰ 기한 지난 후속 ${overdue.length}건 (.omc/todo-estimates.md)`, ...overdue.map(s => `   ${s}`));
  if (upcoming.length) lines.push(`📅 3일 안 후속 ${upcoming.length}건`, ...upcoming.map(s => `   ${s}`));
}

// ② 마라톤 DB — 날짜만으로 확정되는 것
const mdir = path.join(ROOT, 'src/lib/data/marathon');
if (fs.existsSync(mdir)) {
  const bad = [];
  for (const f of fs.readdirSync(mdir).filter(f => f.endsWith('.ts') && f !== 'index.ts')) {
    const src = fs.readFileSync(path.join(mdir, f), 'utf8');
    for (const block of src.split(/\n {2}\{\n/).slice(1)) {
      const pick = re => (block.match(re) || [])[1];
      const id = pick(/id:\s*'([^']+)'/);
      if (!id) continue;
      const date = pick(/date:\s*'([^']+)'/);
      const status = pick(/status:\s*'([^']+)'/);
      const rs = pick(/registrationStart:\s*'([^']+)'/);
      const re = pick(/registrationEnd:\s*'([^']+)'/);
      if (date && date < today && status !== '대회종료') bad.push(`${id}: 개최일 ${date} 지남, status '${status}' → 대회종료`);
      if (status === '접수예정' && rs && rs < today) bad.push(`${id}: 접수 시작 ${rs} 지남, 아직 '접수예정' → 공식 확인 후 접수중/마감`);
      if ((status === '접수예정' || status === '접수중') && re && re < today) bad.push(`${id}: 접수 마감 ${re} 지남, 아직 '${status}' → 공식 확인 후 마감(연장이면 registrationEnd 갱신)`);
    }
  }
  if (bad.length) lines.push(`🚨 마라톤 DB 날짜 불일치 ${bad.length}건 (validate 가 커밋을 막는다)`, ...bad.map(s => `   ${s}`));
}

if (lines.length) {
  console.log(`[후속 점검 ${today}]`);
  console.log(lines.join('\n'));
}
