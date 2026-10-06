import { describe, expect, it } from 'vitest';
import { RUNNER_CHARACTERS } from '@/lib/runner-analysis/characters';
import {
  createSharedRunnerCard,
  encodeSharedRunnerCard,
  readSharedRunnerCard,
  SHARE_TTL_MS,
  sharedRunnerCardUrl,
} from '@/lib/runner-analysis/share';

const IDS = RUNNER_CHARACTERS.map((c) => c.id);
const NOW = Date.UTC(2026, 9, 6, 12);
const SCORES = { endurance: 83, stimulus: 56, recoveryMargin: 79 };

describe('공유 링크(D11 — URL 방식)', () => {
  it('인물·세 점수·열람 기한만 담고 그대로 되읽는다', () => {
    const card = createSharedRunnerCard('heracles', SCORES, NOW);
    const url = new URL(sharedRunnerCardUrl('https://allrunabout.com', card));
    expect(url.pathname).toBe('/running-card');
    expect(Array.from(url.searchParams.keys())).toEqual(['card']);
    const raw = url.searchParams.get('card')!;
    expect(raw).toBe(`1.heracles.83.56.79.${(NOW + SHARE_TTL_MS).toString(36)}`);
    expect(readSharedRunnerCard(raw, IDS, NOW)).toEqual({ status: 'valid', card });
  });

  it('7일이 지나면 expired', () => {
    const raw = encodeSharedRunnerCard(createSharedRunnerCard('athena', SCORES, NOW));
    expect(readSharedRunnerCard(raw, IDS, NOW + SHARE_TTL_MS - 1).status).toBe('valid');
    expect(readSharedRunnerCard(raw, IDS, NOW + SHARE_TTL_MS).status).toBe('expired');
  });

  it.each([
    ['빈 값', null],
    ['버전 다름', `2.athena.1.2.3.${NOW.toString(36)}`],
    ['모르는 인물', `1.medusa.1.2.3.${NOW.toString(36)}`],
    ['점수 100 초과', `1.athena.101.2.3.${NOW.toString(36)}`],
    ['점수 소수', `1.athena.1.5.2.3.${NOW.toString(36)}`],
    ['점수 음수', `1.athena.-1.2.3.${NOW.toString(36)}`],
    ['기한 형식', '1.athena.1.2.3.!!'],
    ['조각 수', '1.athena.1.2.3'],
    ['JSON(프로토타입 형식)', JSON.stringify({ version: 1, characterId: 'athena' })],
  ])('형식이 틀리면 invalid — %s', (_name, raw) => {
    expect(readSharedRunnerCard(raw, IDS, NOW).status).toBe('invalid');
  });
});
