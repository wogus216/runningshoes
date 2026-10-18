/**
 * 외부 API 스크립트 공용 — `.env.local`(gitignore) 에서 키를 읽는다.
 *
 * worktree 에는 `.env.local` 이 main 체크아웃의 파일로 링크돼 있어 어디서 돌려도 같은 키를 쓴다.
 * 값은 절대 출력하지 않는다 — 없을 때 어떤 이름을 어디에 넣으면 되는지만 알려 준다.
 */
import { existsSync } from 'fs';
import { join } from 'path';

export function loadLocalEnv(): void {
  const file = join(process.cwd(), '.env.local');
  if (existsSync(file)) process.loadEnvFile(file);
}

export function requireEnv(name: string, hint: string): string {
  const value = process.env[name];
  if (value) return value;
  console.error(`❌ ${name} 가 없다 — 프로젝트 루트 .env.local 에 ${name}=... 한 줄을 넣는다.\n   ${hint}`);
  process.exit(1);
}
