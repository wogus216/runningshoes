import type {
  CharacterMatch,
  RunnerCharacter,
  RunnerGoal,
  RunnerSnapshot28d,
  RunnerTraits,
} from '@/types/runner-analysis';
import { RUNNER_CHARACTERS } from './characters';

const TRAIT_WEIGHTS: ReadonlyArray<readonly [keyof RunnerTraits, number]> = [
  ['endurance', 0.18],
  ['stimulus', 0.18],
  ['recoveryMargin', 0.18],
  ['consistency', 0.1],
  ['longRunAffinity', 0.08],
  ['qualityAffinity', 0.08],
];

function similarity(value: number, target: number) {
  return Math.max(0, 100 - Math.abs(value - target));
}

function goalMix(snapshot: RunnerSnapshot28d): ReadonlyArray<readonly [RunnerGoal, number]> {
  if (snapshot.goal === 'race' && snapshot.raceGoal) return [['race', 0.6], ['record', 0.4]];
  return [[snapshot.goal, 1]];
}

function affinityForGoal(character: RunnerCharacter, goal: RunnerGoal) {
  if (character.primaryGoal === goal) return 100;
  if (character.secondaryGoal === goal) return 70;
  return 30;
}

export function classifyRunner(
  traits: RunnerTraits,
  snapshot: RunnerSnapshot28d,
  characters: readonly RunnerCharacter[] = RUNNER_CHARACTERS,
): CharacterMatch {
  if (characters.length === 0) throw new Error('At least one runner character is required');

  const matches = characters.map((character, order) => {
    const dataScore = TRAIT_WEIGHTS.reduce(
      (sum, [trait, weight]) => sum + similarity(traits[trait], character.traits[trait]) * weight,
      0,
    );
    const goalAffinity = goalMix(snapshot).reduce(
      (sum, [goal, weight]) => sum + affinityForGoal(character, goal) * weight,
      0,
    );
    return {
      order,
      character,
      dataScore,
      goalAffinity,
      finalScore: dataScore + goalAffinity * 0.2,
    };
  });

  matches.sort((left, right) =>
    right.finalScore - left.finalScore
    || right.dataScore - left.dataScore
    || right.goalAffinity - left.goalAffinity
    || left.order - right.order,
  );

  const winner = matches[0];
  return {
    character: winner.character,
    finalScore: winner.finalScore,
    dataScore: winner.dataScore,
    goalAffinity: winner.goalAffinity,
  };
}
