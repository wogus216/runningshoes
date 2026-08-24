import type { RaceMeta } from '@/types/blog';

export type RaceStatusKind = 'tbd' | 'upcoming' | 'open' | 'closed' | 'past';

export interface RaceStatus {
  kind: RaceStatusKind;
  /** 배지에 그대로 쓰는 문구 */
  label: string;
  /** 접수 시작까지 남은 일수. upcoming 이 아니면 null */
  daysUntil: number | null;
}

const KST_OFFSET_MS = 9 * 60 * 60 * 1000;
const DAY_MS = 86_400_000;

/**
 * KST 기준 날짜 문자열을 Date 로 읽는다.
 * 'YYYY-MM-DD' → 그 날 KST 자정, 'YYYY-MM-DDTHH:mm' → KST 그 시각.
 * 오프셋을 명시하지 않으면 실행 환경의 타임존을 타서 D-day 가 하루 어긋난다.
 */
export function parseKst(value: string): Date {
  const withTime = value.includes('T') ? value : `${value}T00:00`;
  return new Date(`${withTime}+09:00`);
}

/** KST 자정 기준 일련 번호 — 두 시각의 '며칠 차이'를 시각과 무관하게 센다 */
function kstDayIndex(d: Date): number {
  return Math.floor((d.getTime() + KST_OFFSET_MS) / DAY_MS);
}

/**
 * 상태를 날짜에서 파생한다. 수동 status 필드를 두지 않는 이유는
 * 손으로 적은 값이 반드시 낡기 때문이다 — 라이브에 D-12 가 일주일 틀린 채 서 있었다.
 */
export function deriveRaceStatus(meta: RaceMeta, now: Date): RaceStatus {
  const raceDay = parseKst(meta.raceDate);

  if (now.getTime() >= raceDay.getTime() + DAY_MS) {
    return { kind: 'past', label: '종료', daysUntil: null };
  }

  if (!meta.registrationStart) {
    return { kind: 'tbd', label: '접수 미정', daysUntil: null };
  }

  const start = parseKst(meta.registrationStart);

  if (now.getTime() < start.getTime()) {
    const days = kstDayIndex(start) - kstDayIndex(now);
    return { kind: 'upcoming', label: `접수 D-${days}`, daysUntil: days };
  }

  // 선착순 소진은 달력에 없는 축이다. registrationEnd 보다 먼저 본다 —
  // 마감일이 남아 있어도 정원이 찼으면 신청은 이미 불가능하다
  if (meta.soldOut) {
    return { kind: 'closed', label: '선착순 마감', daysUntil: null };
  }

  if (meta.registrationEnd) {
    const end = parseKst(meta.registrationEnd);
    // 마감일은 그 날 끝까지 유효하다
    if (now.getTime() >= end.getTime() + DAY_MS) {
      return { kind: 'closed', label: '접수 마감', daysUntil: null };
    }
  }

  return { kind: 'open', label: '접수중', daysUntil: null };
}
