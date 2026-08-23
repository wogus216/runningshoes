// ============================================
// 마라톤 대회 타입 정의
// ============================================

/**
 * 시즌 순서다. 국내 대회 시즌이 3월에 시작하므로 3월이 첫 항목이고,
 * 1·2월은 같은 시즌의 끝(이듬해 초)이라 12월 뒤에 온다.
 * 일본 메이저(교토·오사카)가 2월이라 이 두 달이 필요해졌다.
 */
export type EventMonth =
  | '3월'
  | '4월'
  | '5월'
  | '6월'
  | '7월'
  | '8월'
  | '9월'
  | '10월'
  | '11월'
  | '12월'
  | '1월'
  | '2월';

/** 국내 17개 시도 + 해외 개최지. 해외는 도시 단위로 둔다(목록에 그대로 노출되는 값이라). */
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
  | '제주'
  | '오사카'
  | '교토'
  | '도쿄';

export type EventDistance = '풀코스' | '하프' | '15K' | '12K' | '11K' | '10K' | '6K' | '5K' | '울트라' | '트레일';

export type EventStatus = '접수예정' | '접수중' | '마감' | '대회종료';

// 코스 정보
export type CourseTerrain = '평지' | '언덕' | '산악' | '혼합';
export type CourseDifficulty = '초보자' | '중급' | '상급';
export type CertificationType = 'IAAF' | 'AIMS' | 'KAF' | '없음';

/**
 * 코스 경로 데이터의 출처. 화면 표기와 신뢰도를 가른다.
 * - measured:      직접 달리며 기록한 GPS. 우리가 만든 사실 데이터
 * - official:      대회가 배포를 허용한 공식 코스 데이터
 * - reconstructed: 공식 '코스 설명 텍스트'를 읽고 OSM 도로망 위에서 새로 이은 추정 경로.
 *                  공식 코스맵 이미지를 따라 그린 것이 아니다(그건 2차적저작물이라 금지)
 */
export type CourseGpxSource = 'measured' | 'official' | 'reconstructed';

export interface CourseGpx {
  /** public/data/gpx/{eventId}.gpx */
  file: string;
  source: CourseGpxSource;
  /** 경로를 마지막으로 확인한 날 'YYYY-MM-DD' */
  verifiedAt: string;
  /** 경로를 어떤 서술에서 재구성했는지 — reconstructed 면 필수 */
  sourceNote?: string;
  /** 그 서술의 출처 URL */
  sourceUrl?: string;
  /**
   * GPX 에서 계산한 값. **reconstructed 면 넣지 않는다** —
   * 추정 경로의 거리는 실측이 아니라서 숫자로 적는 순간 실측처럼 읽힌다.
   * (npm run validate 가 이 조합을 에러로 막는다)
   */
  distanceKm?: number;
  elevationGainM?: number;
}

export interface CourseInfo {
  terrain: CourseTerrain;
  difficulty: CourseDifficulty;
  elevationGain?: number;
  courseDescription?: string;
  certification?: CertificationType;
  isLoopCourse?: boolean;
  gpx?: CourseGpx;
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
  /** 접수 시작일 'YYYY-MM-DD'. 있으면 밴드 판정과 D-day 표기에 쓴다 */
  registrationStart?: string;
  /** 접수 마감일 'YYYY-MM-DD' */
  registrationEnd?: string;
  /** status를 마지막으로 확인한 날 'YYYY-MM-DD'. 대회 상세에만 노출한다 */
  lastVerified?: string;
}

export const EVENT_MONTHS: EventMonth[] = [
  '3월',
  '4월',
  '5월',
  '6월',
  '7월',
  '8월',
  '9월',
  '10월',
  '11월',
  '12월',
  '1월',
  '2월',
];

export const EVENT_REGIONS: EventRegion[] = [
  '서울', '경기', '인천', '강원',
  '충북', '충남', '대전', '세종',
  '전북', '전남', '광주',
  '경북', '경남', '대구', '울산', '부산',
  '제주',
  '오사카', '교토', '도쿄',
];

export const EVENT_DISTANCES: EventDistance[] = ['풀코스', '하프', '10K', '5K', '울트라', '트레일'];

export const EVENT_STATUSES: EventStatus[] = ['접수예정', '접수중', '마감', '대회종료'];
