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
  /**
   * 이 코스에서 **공식 서술만으로는 정해지지 않은 지점**이 있을 때 그 사실과 근거.
   * 기본 고지문은 "공식이 글로 밝힌 경유지만 가져왔다"고 단언하므로, 한 점이라도
   * 추론으로 놓았으면 여기에 적어야 그 단언이 거짓말이 되지 않는다.
   * 값이 있으면 지도 아래에 별도 줄로 노출된다.
   */
  caveat?: string;
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

/**
 * 기념품·지급품.
 *
 * 러너가 신청 전에 실제로 확인하는 항목인데 필드가 없어 못 담고 있었다.
 * ⚠️ 미확정을 빈 값으로 두면 '안 준다'로 읽힌다 — 공식이 "미정"이라고 쓴 건
 * `pending` 에 그대로 적는다.
 */
export interface RaceKit {
  /** 전 종목 공통 지급품 (배번호·기록칩·완주메달 등) */
  items?: string[];
  /** 종목별로 다른 기념품 */
  byDistance?: { distance: string; item: string }[];
  /** 공식이 아직 공개하지 않은 항목 — 그대로 노출한다 */
  pending?: string;
  /**
   * 공식 발표 기념품 이미지 — /public 경로.
   * ⚠️ 공식 실물 사진·공식 시안만 넣는다. AI 생성 등 실물과 다른 이미지는
   * '실제 기념품'처럼 읽히는 허위 표현이라 금지. 출처는 public/images/marathon/IMAGE_CREDITS.md.
   */
  images?: { src: string; alt: string }[];
  /** 확인일 'YYYY-MM-DD' */
  verifiedAt?: string;
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
  raceKit?: RaceKit;
  logistics?: Logistics;
  /** 접수 시작일 'YYYY-MM-DD'. 있으면 밴드 판정과 D-day 표기에 쓴다 */
  registrationStart?: string;
  /** 접수 마감일 'YYYY-MM-DD' */
  registrationEnd?: string;
  /**
   * 마감일이 날짜로 고지되지 않은 대회의 공식 접수 방식 그대로 (예: "선착순 3,500명 마감 — 마감일 미고지").
   * registrationEnd 가 없을 때 '미확인' 대신 이걸 보여준다 — 확인했는데 날짜가 없는 것과
   * 확인 안 한 것은 다르다.
   */
  registrationNote?: string;
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
