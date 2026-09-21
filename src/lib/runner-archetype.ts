import type { UserProfile } from '@/lib/recommendation';

export type RunnerArchetype = {
  character: string;
  title: string;
  headline: string;
  summary: string;
  evidence: string[];
  nextAction: string;
  accent: string;
};

/**
 * 설문 답변을 공유용 캐릭터로 번역한다. 캐릭터는 추천 로직을 바꾸지 않으며,
 * 사용자가 이미 입력한 러닝 맥락을 짧고 기억하기 쉬운 언어로 보여주는 역할만 한다.
 */
export function getRunnerArchetype(profile: UserProfile): RunnerArchetype {
  const hasInjuryHistory = profile.injuries.length > 0;

  if (hasInjuryHistory || profile.purpose === 'recovery') {
    return {
      character: '유비',
      title: '유비형 오래 가는 러너',
      headline: '오늘 기록보다, 다음 주에도 뛸 수 있는 몸을 고릅니다.',
      summary: '회복과 컨디션 관리가 지금 러닝의 가장 큰 레버입니다. 쿠셔닝과 안정성을 우선해 루틴을 끊기지 않게 만드세요.',
      evidence: [profile.purpose === 'recovery' ? '회복 러닝 우선' : '부상 이력 반영', '쿠셔닝·안정성 우선'],
      nextAction: '추천 신발에서 부상 예방 등급과 안정성 이유를 먼저 확인하세요.',
      accent: 'from-emerald-300 via-teal-200 to-sky-100',
    };
  }

  if (profile.purpose === 'trail') {
    return {
      character: '조운',
      title: '조운형 길 개척 러너',
      headline: '정해진 트랙보다, 다음 지형을 먼저 봅니다.',
      summary: '노면 변화에 강한 선택이 필요합니다. 접지력과 발 보호를 확보하면 새로운 코스도 러닝 루틴이 됩니다.',
      evidence: ['트레일 러닝 선택', '접지력·보호 우선'],
      nextAction: '추천 신발에서 아웃솔과 보호력을 비교하세요.',
      accent: 'from-amber-200 via-orange-100 to-stone-100',
    };
  }

  if (profile.purpose === 'racing' || profile.targetPace === 'fast') {
    return {
      character: '조조',
      title: '조조형 기록 설계자',
      headline: '감으로 뛰지 않고, 목표 페이스를 설계합니다.',
      summary: '레이스와 속도 훈련에서 이득을 찾는 유형입니다. 반응성과 무게를 보되, 훈련화와 레이싱화를 나눠 운용하세요.',
      evidence: [profile.purpose === 'racing' ? '레이스 목표' : '5분 미만 페이스', '반응성·무게 우선'],
      nextAction: '최고 추천과 비교 목록에서 레이싱화 차이를 확인하세요.',
      accent: 'from-rose-300 via-orange-200 to-amber-100',
    };
  }

  if (profile.weeklyDistance === 'high') {
    return {
      character: '관우',
      title: '관우형 거리 장군',
      headline: '한 번의 강한 러닝보다, 매주 쌓이는 거리가 무기입니다.',
      summary: '주간 거리 자체가 성장을 만듭니다. 내구성과 회복감을 챙겨 장거리 후에도 다음 훈련을 이어가세요.',
      evidence: ['주 40km 이상', '내구성·회복감 우선'],
      nextAction: '추천 신발의 내구성 범위와 쿠셔닝을 비교하세요.',
      accent: 'from-sky-300 via-cyan-100 to-white',
    };
  }

  if (profile.purpose === 'training' || profile.experience !== 'beginner') {
    return {
      character: '제갈량',
      title: '제갈량형 훈련 전략가',
      headline: '한 켤레보다, 훈련 목적에 맞는 선택을 먼저 계산합니다.',
      summary: '꾸준한 훈련에서 효율을 찾는 유형입니다. 데일리화 중심으로 시작하고, 필요할 때만 레이싱화를 더하세요.',
      evidence: [profile.purpose === 'training' ? '훈련 목적' : '러닝 경험 반영', '균형 잡힌 데일리화 우선'],
      nextAction: '추천 신발의 훈련 적합 이유를 확인하세요.',
      accent: 'from-violet-200 via-fuchsia-100 to-white',
    };
  }

  return {
    character: '장비',
    title: '장비형 성장 러너',
    headline: '시작은 가볍게, 루틴은 단단하게 만듭니다.',
    summary: '지금은 부담 없이 자주 뛰는 경험이 가장 중요합니다. 발에 맞고 오래 신을 수 있는 신발부터 고르세요.',
    evidence: ['입문·다목적 러닝', '착화감·가성비 우선'],
    nextAction: '최고 추천 신발의 발볼 적합성과 가격을 확인하세요.',
    accent: 'from-lime-200 via-yellow-100 to-white',
  };
}
