import type { RunnerCharacter, RunnerGoal, RunnerTraits } from '@/types/runner-analysis';

type CharacterRow = readonly [
  id: string,
  house: string,
  name: string,
  endurance: number,
  stimulus: number,
  recoveryMargin: number,
  consistency: number,
  longRunAffinity: number,
  qualityAffinity: number,
  primaryGoal: RunnerGoal,
  secondaryGoal: RunnerGoal,
];

const ROWS: readonly CharacterRow[] = [
  ['zeus', '제우스', '제우스', 80, 85, 55, 75, 75, 75, 'race', 'record'],
  ['heracles', '제우스', '헤라클레스', 95, 55, 75, 75, 95, 0, 'endurance', 'race'],
  ['perseus', '제우스', '페르세우스', 70, 80, 70, 65, 55, 85, 'record', 'race'],
  ['hera', '헤라', '헤라', 65, 50, 85, 95, 55, 25, 'habit', 'health_fun'],
  ['penelope', '헤라', '페넬로페', 55, 35, 90, 95, 45, 15, 'habit', 'endurance'],
  ['themis', '헤라', '테미스', 70, 55, 85, 90, 60, 35, 'health_fun', 'habit'],
  ['poseidon', '포세이돈', '포세이돈', 85, 70, 45, 45, 80, 55, 'endurance', 'race'],
  ['theseus', '포세이돈', '테세우스', 75, 65, 65, 65, 70, 60, 'race', 'endurance'],
  ['bellerophon', '포세이돈', '벨레로폰', 65, 85, 45, 55, 50, 90, 'record', 'race'],
  ['demeter', '데메테르', '데메테르', 60, 35, 90, 90, 50, 10, 'health_fun', 'habit'],
  ['persephone', '데메테르', '페르세포네', 50, 50, 80, 70, 35, 45, 'health_fun', 'habit'],
  ['hestia', '데메테르', '헤스티아', 45, 25, 95, 85, 25, 5, 'habit', 'health_fun'],
  ['athena', '아테나', '아테나', 75, 75, 80, 90, 65, 70, 'record', 'race'],
  ['odysseus', '아테나', '오디세우스', 80, 65, 70, 60, 80, 50, 'race', 'endurance'],
  ['daedalus', '아테나', '다이달로스', 65, 70, 75, 85, 45, 65, 'record', 'habit'],
  ['apollo', '아폴론', '아폴론', 70, 90, 70, 80, 50, 90, 'record', 'race'],
  ['achilles', '아폴론', '아킬레우스', 75, 100, 35, 65, 55, 100, 'record', 'race'],
  ['orpheus', '아폴론', '오르페우스', 55, 55, 85, 75, 40, 45, 'health_fun', 'habit'],
  ['artemis', '아르테미스', '아르테미스', 80, 70, 80, 75, 75, 55, 'endurance', 'health_fun'],
  ['atalanta', '아르테미스', '아탈란타', 75, 95, 55, 70, 55, 95, 'record', 'race'],
  ['orion', '아르테미스', '오리온', 90, 60, 55, 55, 90, 35, 'endurance', 'race'],
  ['ares', '아레스', '아레스', 70, 100, 25, 45, 55, 100, 'record', 'race'],
  ['hector', '아레스', '헥토르', 90, 75, 60, 85, 85, 60, 'race', 'endurance'],
  ['penthesilea', '아레스', '펜테실레이아', 80, 90, 45, 70, 65, 90, 'race', 'record'],
  ['aphrodite', '아프로디테', '아프로디테', 50, 40, 90, 70, 30, 25, 'health_fun', 'habit'],
  ['psyche', '아프로디테', '프시케', 60, 45, 85, 85, 40, 30, 'habit', 'health_fun'],
  ['eros', '아프로디테', '에로스', 45, 75, 60, 45, 25, 80, 'health_fun', 'record'],
  ['hephaestus', '헤파이스토스', '헤파이스토스', 75, 60, 75, 95, 55, 45, 'habit', 'endurance'],
  ['prometheus', '헤파이스토스', '프로메테우스', 85, 70, 55, 80, 75, 60, 'endurance', 'record'],
  ['talos', '헤파이스토스', '탈로스', 90, 45, 80, 100, 80, 20, 'habit', 'endurance'],
  ['hermes', '헤르메스', '헤르메스', 55, 95, 55, 60, 30, 100, 'record', 'race'],
  ['nike', '헤르메스', '니케', 75, 100, 50, 80, 50, 100, 'race', 'record'],
  ['pheidippides', '헤르메스', '페이디피데스', 100, 70, 45, 70, 100, 45, 'race', 'endurance'],
  ['dionysus', '디오니소스', '디오니소스', 45, 55, 65, 35, 25, 50, 'health_fun', 'habit'],
  ['ariadne', '디오니소스', '아리아드네', 65, 50, 80, 75, 60, 35, 'habit', 'health_fun'],
  ['sisyphus', '디오니소스', '시시포스', 85, 40, 65, 100, 75, 15, 'endurance', 'habit'],
];

function traitsFromRow(row: CharacterRow): RunnerTraits {
  return {
    endurance: row[3],
    stimulus: row[4],
    recoveryMargin: row[5],
    consistency: row[6],
    longRunAffinity: row[7],
    qualityAffinity: row[8],
  };
}

export const RUNNER_CHARACTERS: readonly RunnerCharacter[] = ROWS.map((row) => ({
  id: row[0],
  house: row[1],
  name: row[2],
  traits: traitsFromRow(row),
  primaryGoal: row[9],
  secondaryGoal: row[10],
}));
