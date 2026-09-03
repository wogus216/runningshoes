/**
 * GA4 · GSC 스크립트 공용 — 서비스 계정 키 파일 위치를 찾는다.
 *
 * 해석 순서: `GA_KEY_FILE` 환경변수 → `~/Downloads/blog-auto-494801-*.json` 중 최신
 * → 프로젝트 루트 `.ga-key.json`(gitignore, Downloads 접근이 막힌 환경용) → 옛 고정 파일명.
 *
 * 2026-09-03 이전에는 ga-report·ga-popular·gsc-report·gsc-pages 네 스크립트가 같은
 * 24줄을 각자 들고 있었고, 키 파일명이 네 곳에 하드코딩돼 있었다.
 */
import { readdirSync, statSync, existsSync } from 'fs';
import { homedir } from 'os';
import { join } from 'path';

const KEY_FILE_PATTERN = /^blog-auto-494801-.*\.json$/;
const LEGACY_KEY_FILE = 'blog-auto-494801-4f5d2392338c.json';

export function resolveKeyFile(): string {
  if (process.env.GA_KEY_FILE) return process.env.GA_KEY_FILE;
  const downloads = join(homedir(), 'Downloads');
  try {
    const matches = readdirSync(downloads)
      .filter((f) => KEY_FILE_PATTERN.test(f))
      .map((f) => join(downloads, f))
      .sort((a, b) => statSync(b).mtimeMs - statSync(a).mtimeMs);
    if (matches.length) return matches[0];
  } catch {
    /* Downloads 나열 불가(권한) 시 아래 고정 경로로 폴백 */
  }
  const local = join(process.cwd(), '.ga-key.json');
  if (existsSync(local)) return local;
  return join(downloads, LEGACY_KEY_FILE);
}

/** 로그 출력용 — 홈 디렉토리를 `~` 로 줄인다. */
export function displayKeyPath(keyFile: string): string {
  return keyFile.replace(homedir(), '~');
}
