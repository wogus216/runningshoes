// 쎄러데이 — 손기정평화마라톤 2026 도전 기록 타입
// 스펙: docs/superpowers/specs/2026-08-11-saturday-crew-design.md

export type StatsSource = '가민' | '스트라바' | '애플' | '삼성' | '기타' | '자가신고';

export interface CrewStats {
  source: StatsSource;
  asOf: string;        // 'YYYY-MM-DD' 기준일
  weeklyKm: number;    // 최근 4주 평균 주간 거리
  longestKm: number;   // 최장 단일 거리
  avgPaceSec: number;  // 초/km
  runsPerWeek: number; // 최근 4주 평균 주 러닝 횟수
  totalKm?: number;    // 누적 (있으면)
}

export interface CrewMember {
  id: string;                       // 'm1' — 이미지·로그 참조용 안정 키. 변경 금지
  codeName: string;                 // 크게 표시
  realName: string;                 // 작게 표시. 빈 문자열이면 렌더 생략
  distance: '풀코스' | '10K';
  goal: string;                     // '4:30:00' | '완주'
  photo?: string;                   // 없으면 실루엣으로 대체
  baseline?: CrewStats;             // 없으면 CLASSIFIED 상태
  final?: CrewStats;                // 대회 후. baseline과 함께 있으면 겹쳐 그린다
}

export interface SaturdayRaceMeta {
  name: string;
  dateIso: string;
  dateLabel: string;
  datePoster: string;
  place: string;
  timezone: 'Asia/Seoul';
  marathonId: string;
}

/**
 * 단톡방에서 그대로 가져온 한 줄.
 * ⚠️ text 는 원문 그대로 둔다 — 오타·ㅋ·띄어쓰기를 다듬는 순간 남의 말이 된다.
 *    화면에 쓰는 이름은 코드네임뿐이다. 실명·연락처는 이 파일에 들어오지 않는다.
 */
export interface ChatLine {
  who: string;        // 코드네임 ('재춘' 등)
  text: string;       // 원문 그대로
  at: string;         // 실제 발신 시각. 날이 바뀌면 'MM.DD HH:MM'
  punch?: boolean;    // 뭉치의 펀치라인. 크게 렌더된다
}

export interface ChatBurst {
  id: string;
  label: string;      // mono 라벨 — 언제·무슨 상황인지
  lines: ChatLine[];
}

/**
 * 크루가 실제로 찍은 사진. 전부 폰 세로 사진이다.
 * src 는 public/images/challenge/saturday/crew/{src}.webp 의 파일명.
 */
export interface CrewPhoto {
  src: string;
  alt: string;      // 장면을 서술한다. 누가 누구인지는 쓰지 않는다
  wide?: boolean;   // 그리드에서 두 칸을 차지한다
}

export interface SaturdayTeaserCopy {
  hero: {
    question: string;
    turn: string;
    hook: string;
    support: string;
  };
  crew: {
    title: string;
    support: string;
    statusLine: string;
  };
  race: {
    eyebrow: string;
    hook: string;
    ending: string;
    next: string;      // 티저를 닫는 예고 한 줄. 웹 blackout과 Remotion 엔딩이 공유한다
  };
}

export interface WeekEntry {
  memberId: string;
  km?: number;
  note?: string;
}

export interface WeekLog {
  week: number;        // 1부터
  dday: number;        // 그 주 시작 시점의 D-day
  dateLabel: string;   // '08.11 – 08.17'
  headline?: string;   // 그 주 한 줄 요약 (운영자 작성)
  entries: WeekEntry[];
}

export interface RaceResult {
  heroLine: string;    // 히어로 교체 문구
  finishers: {
    memberId: string;
    finishTime?: string; // '4:28:11' — 미완주 시 생략
    note?: string;
    photo?: string;
  }[];
}

// 레이더 4축. 모두 0–100 정규화값
export interface RadarAxes {
  power: number;       // 주력   — weeklyKm
  endurance: number;   // 지구력 — longestKm
  speed: number;       // 스피드 — avgPaceSec
  consistency: number; // 꾸준함 — runsPerWeek
}
