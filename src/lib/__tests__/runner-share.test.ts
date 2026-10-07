import { describe, expect, it } from 'vitest';
import { analyzeRunner } from '@/lib/runner-analysis/analyze';
import { RUNNER_CHARACTERS } from '@/lib/runner-analysis/characters';
import { explainRunner } from '@/lib/runner-analysis/explain';
import { leadAxisOf } from '@/lib/runner-analysis/presentation';
import { readSharedRunnerCard, sharedRunnerCardUrl } from '@/lib/runner-analysis/share';
import { syntheticRunners } from './support/synthetic-runners';

const IDS = RUNNER_CHARACTERS.map((c) => c.id);
const SCORES = { endurance: 83, stimulus: 56, recoveryMargin: 79 };

describe('공유 링크(D11 — URL 방식)', () => {
  it('인물·세 점수만 담고 그대로 되읽는다(기한 없음)', () => {
    const card = { characterId: 'heracles', scores: SCORES };
    const url = new URL(sharedRunnerCardUrl('https://allrunabout.com', card));
    expect(url.pathname).toBe('/running-card');
    expect(Array.from(url.searchParams.keys())).toEqual(['card']);
    const raw = url.searchParams.get('card')!;
    expect(raw).toBe('1.heracles.83.56.79');
    expect(readSharedRunnerCard(raw, IDS)).toEqual(card);
  });

  it.each([
    ['빈 값', null],
    ['버전 다름', '2.athena.1.2.3'],
    ['모르는 인물', '1.medusa.1.2.3'],
    ['점수 100 초과', '1.athena.101.2.3'],
    ['점수 소수', '1.athena.1.5.2.3'],
    ['점수 음수', '1.athena.-1.2.3'],
    ['점수 빈칸', '1.athena..2.3'],
    ['조각 4개', '1.athena.1.2'],
    ['조각 6개(S4의 기한 칸 붙은 형식)', '1.athena.1.2.3.mfz3k0'],
    ['JSON(프로토타입 형식)', JSON.stringify({ version: 1, characterId: 'athena' })],
  ])('형식이 틀리면 null — %s', (_name, raw) => {
    expect(readSharedRunnerCard(raw, IDS)).toBeNull();
  });
});

// 공유받은 화면(running-card-shared.tsx)은 링크로 되읽은 인물로 leadAxisOf 를 부르고, 링크의 정수 점수를 보인다.
describe('공유받은 화면의 대표 수치 = 결과 카드 대표 수치(합성 1만 명)', () => {
  it('링크로 되읽은 인물·점수로 고른 축과 값이 결과 카드(explainRunner)와 같다', () => {
    const differ = syntheticRunners().flatMap((snapshot) => {
      const analysis = analyzeRunner(snapshot);
      const { lead } = explainRunner(snapshot, analysis);
      const url = new URL(sharedRunnerCardUrl('https://allrunabout.com', { characterId: analysis.match.character.id, scores: analysis.publicScores }));
      const read = readSharedRunnerCard(url.searchParams.get('card'), IDS);
      if (!read) return [snapshot];
      const axis = leadAxisOf(RUNNER_CHARACTERS.find((c) => c.id === read.characterId)!.traits);
      return axis === lead.axis && read.scores[axis] === lead.value ? [] : [snapshot];
    });
    expect(differ).toEqual([]);
  });
});
