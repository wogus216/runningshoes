export type RunnerGoal = 'habit' | 'endurance' | 'record' | 'race' | 'health_fun';

export type RaceGoal = {
  distanceKm: number;
  targetTimeMinutes: number;
};

export type RunnerSnapshot28d = {
  windowDays: 28;
  totalDistanceKm: number;
  runCount: number;
  runDates?: string[];
  usualWeekdays?: number[];
  averagePaceSecPerKm: number;
  longestRunKm: number;
  qualitySessionCount: number;
  goal: RunnerGoal;
  raceGoal?: RaceGoal;
};

export type RunnerTraits = {
  endurance: number;
  stimulus: number;
  recoveryMargin: number;
  consistency: number;
  longRunAffinity: number;
  qualityAffinity: number;
};

export type PublicRunnerScores = {
  endurance: number;
  stimulus: number;
  recoveryMargin: number;
};

export type RunnerCharacter = {
  id: string;
  house: string;
  name: string;
  traits: RunnerTraits;
  primaryGoal: RunnerGoal;
  secondaryGoal: RunnerGoal;
};

export type CharacterMatch = {
  character: RunnerCharacter;
  finalScore: number;
  dataScore: number;
  goalAffinity: number;
};

export type RunnerAnalysis = {
  traits: RunnerTraits;
  publicScores: PublicRunnerScores;
  match: CharacterMatch;
  fallbacksUsed: string[];
};
