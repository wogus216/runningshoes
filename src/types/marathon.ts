// ============================================
// 마라톤 대회 타입 정의
// ============================================

export type EventMonth = '3월' | '4월' | '5월' | '6월';

export type EventRegion =
  | '서울'
  | '경기'
  | '인천'
  | '강원'
  | '충북'
  | '충남'
  | '대전'
  | '세종'
  | '전북'
  | '전남'
  | '광주'
  | '경북'
  | '경남'
  | '대구'
  | '울산'
  | '부산'
  | '제주';

export type EventDistance = '풀코스' | '하프' | '10K' | '5K' | '울트라' | '트레일';

export type EventStatus = '접수중' | '마감' | '대회종료';

// 코스 정보
export type CourseTerrain = '평지' | '언덕' | '산악' | '혼합';
export type CourseDifficulty = '초보자' | '중급' | '상급';
export type CertificationType = 'IAAF' | 'AIMS' | 'KAF' | '없음';

export interface CourseInfo {
  terrain: CourseTerrain;
  difficulty: CourseDifficulty;
  elevationGain?: number;
  courseDescription?: string;
  certification?: CertificationType;
  isLoopCourse?: boolean;
}

// 참가 안내
export interface EntryFee {
  distance: string;
  fee: number;
}

export interface TimeLimit {
  distance: string;
  hours: number;
  minutes: number;
}

export interface RaceInfo {
  entryFees?: EntryFee[];
  timeLimits?: TimeLimit[];
  aidStations?: number;
  aidInterval?: string;
  expectedParticipants?: number;
  startTime?: string;
}

// 교통/편의
export interface Logistics {
  parking?: string;
  publicTransport?: string;
  shuttle?: string;
  bagStorage?: boolean;
}

export interface MarathonEvent {
  id: string;
  name: string;
  date: string; // 'YYYY-MM-DD'
  month: EventMonth;
  location: string;
  region: EventRegion;
  distances: EventDistance[];
  status: EventStatus;
  isMajor: boolean;
  website?: string;
  description?: string;
  courseInfo?: CourseInfo;
  raceInfo?: RaceInfo;
  logistics?: Logistics;
}

export const EVENT_MONTHS: EventMonth[] = ['3월', '4월', '5월', '6월'];

export const EVENT_REGIONS: EventRegion[] = [
  '서울', '경기', '인천', '강원',
  '충북', '충남', '대전', '세종',
  '전북', '전남', '광주',
  '경북', '경남', '대구', '울산', '부산',
  '제주',
];

export const EVENT_DISTANCES: EventDistance[] = ['풀코스', '하프', '10K', '5K', '울트라', '트레일'];

export const EVENT_STATUSES: EventStatus[] = ['접수중', '마감', '대회종료'];
