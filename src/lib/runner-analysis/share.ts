import type { PublicRunnerScores } from '@/types/runner-analysis';

// 공유 링크(D11). 사이트는 정적 배포(output: 'export')라 결과를 보관할 서버가 없다 — 프로토타입(aa794de) share.ts 처럼
// 결과를 링크 쿼리에 담는다. 담는 것은 인물·세 점수·열람 기한뿐이고, 입력한 기록·근거·목표 기록은 담지 않는다.
// 열람 기한은 이 페이지가 링크를 열 때 브라우저에서 판정한다. 링크 글자를 고치면 늘어나고 지우는 주체도 없으므로,
// 화면에 '보관'·'삭제'라고 쓰지 않는다.
// 프로토타입과 달라진 것: JSON 대신 점으로 이은 짧은 형식(`?card=1.athena.83.56.79.<기한 36진수>`), hideNumbers 는 뺐다
// (링크에는 기록 숫자가 처음부터 없다).
export const SHARE_TTL_MS = 7 * 24 * 60 * 60 * 1000;

export type SharedRunnerCard = {
  characterId: string;
  scores: PublicRunnerScores;
  expiresAt: number;
};

export type SharedCardReadResult =
  | { status: 'valid'; card: SharedRunnerCard }
  | { status: 'expired' }
  | { status: 'invalid' };

const VERSION = '1';
const isScore = (n: number) => Number.isInteger(n) && n >= 0 && n <= 100;

export function createSharedRunnerCard(characterId: string, scores: PublicRunnerScores, now = Date.now()): SharedRunnerCard {
  return { characterId, scores: { ...scores }, expiresAt: now + SHARE_TTL_MS };
}

export function encodeSharedRunnerCard({ characterId, scores, expiresAt }: SharedRunnerCard) {
  return [VERSION, characterId, scores.endurance, scores.stimulus, scores.recoveryMargin, expiresAt.toString(36)].join('.');
}

export function sharedRunnerCardUrl(origin: string, card: SharedRunnerCard) {
  const url = new URL('/running-card', origin);
  url.searchParams.set('card', encodeSharedRunnerCard(card));
  return url.toString();
}

// knownIds: 화면이 아는 인물 id. 모르는 인물은 형식이 맞아도 invalid 다.
export function readSharedRunnerCard(value: string | null, knownIds: readonly string[], now = Date.now()): SharedCardReadResult {
  if (!value) return { status: 'invalid' };
  const parts = value.split('.');
  if (parts.length !== 6 || parts[0] !== VERSION) return { status: 'invalid' };
  const [, characterId, e, s, r, expires] = parts;
  const [endurance, stimulus, recoveryMargin] = [e, s, r].map((n) => (/^\d{1,3}$/.test(n) ? Number(n) : Number.NaN));
  const expiresAt = /^[0-9a-z]{1,12}$/.test(expires) ? parseInt(expires, 36) : Number.NaN;
  if (!knownIds.includes(characterId) || ![endurance, stimulus, recoveryMargin].every(isScore) || !Number.isFinite(expiresAt)) {
    return { status: 'invalid' };
  }
  if (expiresAt <= now) return { status: 'expired' };
  return { status: 'valid', card: { characterId, scores: { endurance, stimulus, recoveryMargin }, expiresAt } };
}
