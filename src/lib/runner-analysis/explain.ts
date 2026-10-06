import type {
  PublicRunnerScores,
  RunnerAnalysis,
  RunnerSnapshot28d,
  RunnerTraits,
} from '@/types/runner-analysis';
import { getCharacterPresentation, PUBLIC_AXES } from './presentation';

// 결과 카드의 대표 수치·근거 2·강점·맹점·다음 14일 행동(스펙 168·404-436행). 자유 생성 없이 점수 규칙과
// 검수된 문장만 조합한다. 판정과 같은 반올림 전 특성값을 쓴다.

export type PublicAxis = keyof PublicRunnerScores;
type Trait = keyof RunnerTraits;

// 근거의 원시 데이터 계열. 배열 순서가 스펙의 우선순위(장거리 · 총거리 · 빈도 · 품질훈련 · 간격 · 목표)다.
const FAMILIES = ['longRun', 'distance', 'frequency', 'quality', 'interval', 'goal'] as const;
export type EvidenceFamily = typeof FAMILIES[number];

// hiddenText: 공유 이미지에서 기록 숫자를 숨길 때 쓰는 같은 근거의 숫자 없는 표현.
export type RunnerEvidence = { family: EvidenceFamily; text: string; hiddenText: string };

export type WatchoutRule = 'enduranceWithoutVariety' | 'stimulusWithoutMargin' | 'brokenRhythm' | 'loadInFewRuns' | 'character';

export type RunnerExplanation = {
  lead: { axis: PublicAxis; value: number };
  evidence: [RunnerEvidence, RunnerEvidence];
  // trait: 스펙 규칙(70 이상 · 인물 목표와 차이가 가장 작은 특성)으로 고른 특성. 문장은 인물별 한 문장뿐이라
  // (aa794de) 특성마다 갈리지 않는다 — 특성별 문장표가 생기면 이 값으로 고른다.
  strength: { text: string; trait: Trait | null };
  watchout: { text: string; rule: WatchoutRule };
  // substituted: 인물 문장이 거리·속도를 늘리는데 회복 여유가 50 미만이라 STEADY_NEXT_RUN 으로 바꿨다.
  nextAction: { text: string; substituted: boolean };
};

// 맹점 규칙 1–4(스펙 421-427행). 1번은 스펙 기준 사례 A의 예상 문장 그대로, 2–4번은 스펙의 요지를 행동 지표 말로 옮겼다.
export const WATCHOUT_RULE_TEXT: Record<Exclude<WatchoutRule, 'character'>, string> = {
  enduranceWithoutVariety: '긴 거리를 감당하는 힘에 비해 훈련 변화는 적은 편입니다.',
  stimulusWithoutMargin: '강한 자극 사이에 남겨 둔 간격이 짧은 편입니다.',
  brokenRhythm: '달리는 리듬이 자주 끊기는 편입니다.',
  loadInFewRuns: '거리가 몇 번의 긴 러닝에 몰려 있는 편입니다.',
};

// 회복 여유 50 미만에서 거리·속도를 늘리는 인물 문장(nextRunRaises) 대신 쓰는 다음 행동(스펙 434행).
export const STEADY_NEXT_RUN = '다음 러닝은 평소 거리와 속도 그대로, 편안한 호흡으로 마치세요.';

const RACE_NAMES: Record<number, string> = { 5: '5km', 10: '10km', 21.0975: '하프', 42.195: '풀코스' };
const GOAL_NAMES: Record<RunnerSnapshot28d['goal'], string> = { habit: '습관', endurance: '지구력', record: '기록', race: '대회', health_fun: '건강과 재미' };
// 엔진 요일은 0 = 일. 화면은 월요일부터 읽는다.
const DAY_NAMES = ['일', '월', '화', '수', '목', '금', '토'];
const mondayFirst = (day: number) => (day + 6) % 7;

const format = (n: number) => n.toLocaleString('ko-KR', { maximumFractionDigits: 2 });
const tenth = (n: number) => format(Math.round(n * 10) / 10);
const span = (minutes: number) => {
  const h = Math.floor(minutes / 60), m = Math.round(minutes % 60);
  return [h ? `${h}시간` : '', m || !h ? `${m}분` : ''].filter(Boolean).join(' ');
};

// 특성 → 근거 계열. 지구력은 총거리(45%)가, 장거리 성향은 최장·1회 평균이 이끈다. 훈련 자극은 강한 훈련(40%)이
// 이끌지만, 강한 훈련이 0회면 그 값은 최장·1회 평균(50%)에서 나온 것이라 장거리로 본다.
// 규칙성(C)은 날짜 없이 요일만 있으면 상수 75, 없으면 50이다(score.ts). 기록에서 나온 값이 아니라 근거·강점 후보에서 뺀다.
function familyOf(trait: Trait, snapshot: RunnerSnapshot28d): EvidenceFamily | null {
  switch (trait) {
    case 'endurance': return 'distance';
    case 'stimulus': return snapshot.qualitySessionCount > 0 ? 'quality' : 'longRun';
    case 'recoveryMargin': return 'interval';
    case 'longRunAffinity': return 'longRun';
    case 'qualityAffinity': return 'quality';
    default: return null;
  }
}

function evidenceFor(family: EvidenceFamily, s: RunnerSnapshot28d): RunnerEvidence {
  switch (family) {
    case 'longRun':
      return { family, text: `1회 평균 ${tenth(s.totalDistanceKm / s.runCount)}km · 최장 ${format(s.longestRunKm)}km`, hiddenText: '평균 거리와 최장거리' };
    case 'distance':
      return { family, text: `28일 동안 ${format(s.totalDistanceKm)}km`, hiddenText: '28일 동안 쌓은 총거리' };
    case 'frequency':
      return { family, text: `28일 동안 ${s.runCount}회`, hiddenText: '28일 동안 달린 횟수' };
    case 'quality': {
      // 6은 칩 '6회 이상'이다.
      const hard = s.qualitySessionCount >= 6 ? '6회 이상' : `${s.qualitySessionCount}회`;
      return { family, text: `${s.runCount}회 중 강한 훈련 ${hard}`, hiddenText: '강한 훈련의 비중' };
    }
    case 'interval': {
      const days = Array.from(new Set(s.usualWeekdays ?? [])).sort((a, b) => mondayFirst(a) - mondayFirst(b));
      if (days.length === 0) {
        return { family, text: `28일에 ${s.runCount}회 · 평균 ${tenth(s.windowDays / s.runCount)}일에 한 번`, hiddenText: '달린 날 사이 간격' };
      }
      const gaps = days.map((day, i) => {
        const next = days[(i + 1) % days.length];
        return (mondayFirst(next) - mondayFirst(day) + 7) % 7 || 7;
      });
      const list = days.length === 1 ? `${DAY_NAMES[days[0]]}요일` : days.map((day) => DAY_NAMES[day]).join('·');
      return { family, text: `${list} · 간격 ${gaps.join('·')}일`, hiddenText: '달린 날 사이 간격' };
    }
    case 'goal': {
      const g = s.raceGoal;
      if (!g) return { family, text: `목표 ${GOAL_NAMES[s.goal]}`, hiddenText: '목표' };
      return { family, text: `목표 ${RACE_NAMES[g.distanceKm] ?? `${format(g.distanceKm)}km`} ${span(g.targetTimeMinutes)}`, hiddenText: '목표 기록' };
    }
  }
}

const TRAITS: readonly Trait[] = ['endurance', 'stimulus', 'recoveryMargin', 'consistency', 'longRunAffinity', 'qualityAffinity'];

export function explainRunner(snapshot: RunnerSnapshot28d, analysis: RunnerAnalysis): RunnerExplanation {
  const { traits, publicScores } = analysis;
  const character = analysis.match.character;
  const gap = (trait: Trait) => Math.abs(traits[trait] - character.traits[trait]);
  const presentation = getCharacterPresentation(character.id);

  // 대표 수치: 공개 3축 가운데 판정에 가장 크게 기여한 축. 세 축의 가중치가 같으므로(18%) 인물 목표와 가장 가까운 축이다.
  // 같으면 지구력 · 훈련 자극 · 회복 여유 순.
  const leadAxis = PUBLIC_AXES.map(([axis]) => axis).reduce((best, axis) => (gap(axis) < gap(best) ? axis : best));

  // 근거 1: 인물 목표와 가장 가까우면서 사용자 점수가 60 이상인 특성의 계열. 60 이상이 없으면 문턱 없이 가장 가까운 것.
  // 차이가 같으면 계열 우선순위가 앞선 것.
  const candidates = TRAITS.flatMap((trait) => {
    const family = familyOf(trait, snapshot);
    return family ? [{ trait, family }] : [];
  });
  const rank = (c: { trait: Trait; family: EvidenceFamily }) => [gap(c.trait), FAMILIES.indexOf(c.family)] as const;
  const closest = (list: typeof candidates) => list.reduce((best, c) => {
    const [g, f] = rank(c), [bg, bf] = rank(best);
    return g < bg || (g === bg && f < bf) ? c : best;
  });
  const strong = candidates.filter((c) => traits[c.trait] >= 60);
  const first = closest(strong.length > 0 ? strong : candidates).family;
  // 근거 2: 첫 근거와 다른 계열 중 우선순위가 가장 앞선 것. 목표는 목표 기록이 있을 때만(근거에는 실제 숫자가 들어간다).
  const second = FAMILIES.find((family) => family !== first && (family !== 'goal' || snapshot.raceGoal))!;

  // 강점: 70 이상이며 인물 목표와 가장 가까운 특성(없으면 null). 문장은 인물 문장.
  const high = candidates.filter((c) => traits[c.trait] >= 70);
  const strengthTrait = high.length > 0 ? closest(high).trait : null;

  // 맹점: 먼저 맞는 규칙 하나.
  const rule: WatchoutRule =
    traits.endurance >= 75 && traits.qualityAffinity < 25 ? 'enduranceWithoutVariety'
      : traits.stimulus >= 80 && traits.recoveryMargin < 50 ? 'stimulusWithoutMargin'
        : traits.consistency < 45 ? 'brokenRhythm'
          : traits.longRunAffinity >= 80 && snapshot.runCount < 10 ? 'loadInFewRuns'
            : 'character';

  const substituted = traits.recoveryMargin < 50 && presentation.nextRunRaises === true;

  return {
    lead: { axis: leadAxis, value: publicScores[leadAxis] },
    evidence: [evidenceFor(first, snapshot), evidenceFor(second, snapshot)],
    strength: { text: presentation.strength, trait: strengthTrait },
    watchout: { text: rule === 'character' ? presentation.watchout : WATCHOUT_RULE_TEXT[rule], rule },
    nextAction: { text: substituted ? STEADY_NEXT_RUN : presentation.nextRun, substituted },
  };
}
