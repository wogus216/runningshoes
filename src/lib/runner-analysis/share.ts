import type { PublicRunnerScores } from '@/types/runner-analysis';

// 공유 링크(D11). 사이트는 정적 배포(output: 'export')라 결과를 보관할 서버가 없다 — 프로토타입(aa794de) share.ts 처럼
// 결과를 링크 쿼리에 담는다. 담는 것은 인물·세 점수뿐이고, 입력한 기록·근거·목표 기록은 담지 않는다.
// 링크에 기한을 두지 않는다(운영자 결정 2026-10-07). 기한이 지나면 링크로 들어온 사람이 결과를 못 봐 유입이 끊긴다.
// 프로토타입과 달라진 것: JSON 대신 점으로 이은 짧은 형식(`?card=1.athena.83.56.79`), 만료 시각과 hideNumbers 는 뺐다
// (링크에는 기록 숫자가 처음부터 없다).
export type SharedRunnerCard = {
  characterId: string;
  scores: PublicRunnerScores;
};

const VERSION = '1';
const isScore = (n: number) => Number.isInteger(n) && n >= 0 && n <= 100;

export function encodeSharedRunnerCard({ characterId, scores }: SharedRunnerCard) {
  return [VERSION, characterId, scores.endurance, scores.stimulus, scores.recoveryMargin].join('.');
}

export function sharedRunnerCardUrl(origin: string, card: SharedRunnerCard) {
  const url = new URL('/running-card', origin);
  url.searchParams.set('card', encodeSharedRunnerCard(card));
  return url.toString();
}

// knownIds: 화면이 아는 인물 id. 모르는 인물은 형식이 맞아도 null 이다. 형식이 틀리면 null.
export function readSharedRunnerCard(value: string | null, knownIds: readonly string[]): SharedRunnerCard | null {
  if (!value) return null;
  const parts = value.split('.');
  if (parts.length !== 5 || parts[0] !== VERSION) return null;
  const [, characterId, e, s, r] = parts;
  const [endurance, stimulus, recoveryMargin] = [e, s, r].map((n) => (/^\d{1,3}$/.test(n) ? Number(n) : Number.NaN));
  if (!knownIds.includes(characterId) || ![endurance, stimulus, recoveryMargin].every(isScore)) return null;
  return { characterId, scores: { endurance, stimulus, recoveryMargin } };
}
