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
  feature?: boolean; // 벽에서 세로 두 칸을 차지하는 대표컷. 배열 전체에 한 장만 둔다
}

/**
 * 선수 소개 페이지(`/saturday/athletes`)의 한 명.
 *
 * ⚠️ 이 타입에서 사실인 것은 `name`·`role`(실제 접수 종목)·`characterLine`(단톡 원문 근거)뿐이다.
 *    기록·페르소나·목표시간을 여기에 만들어 넣지 않는다. 측정치가 없는 필드는 undefined로 두고
 *    화면이 '측정 전'을 명시한다 — 빈칸을 그럴듯한 말로 메우는 순간 이 페이지는 남의 이야기가 된다.
 */
export interface SaturdayAthlete {
  memberId: CrewMember['id']; // SATURDAY_CREW 와 잇는 키. 로스터가 정본이다
  nameLatin: string; // 큰 세리프 제목용 로마자. Newsreader 에는 한글 글리프가 없다
  /** 캐릭터 한 줄. 이름 다음으로 강하게 읽히는 이 페이지의 주인공 정보 */
  characterLine: string;
  /** characterLine 의 근거가 된 단톡 원문. 검수 대조용이며 화면에 나가지 않는다 */
  source: string[];
  knownFor?: string;
  /** 실측 러닝 데이터가 생긴 뒤에만 채운다. CrewStats 가 비어 있는 동안은 undefined */
  runningType?: string;
  /**
   * public/images/challenge/saturday/{photo}.webp — 하위 디렉토리를 포함한다.
   * 개인 초상은 `athletes/{코드네임 로마자}`, 아직 못 받은 사람은 `crew/{장면}`.
   */
  photo: string;
  photoAlt: string;
  /** 사진마다 얼굴 위치가 달라 개별 조절한다. CSS object-position 값 */
  objectPosition?: string;
  /**
   * 여덟 장을 한 화보로 묶기 위한 색보정. CSS filter 값 그대로이며 비파괴다
   * (원본 파일은 건드리지 않는다). 공통값으로 충분한 사진은 비워 둔다 —
   * 값이 없으면 athletes.module.css 의 .photo 기본 필터가 걸린다.
   */
  tone?: string;
  /**
   * 본인 사진이 아니라 크루 단체 사진을 임시로 놓은 상태.
   * 화면이 이 사실을 숨기지 않는다 — 감추면 '이 사람 사진'으로 읽힌다.
   * 개인 사진을 받으면 photo 를 바꾸고 이 필드를 지운다.
   */
  isPlaceholder?: boolean;
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
    bond: string;      // 이 일곱 명이 어떤 사이인지. 릴스 도입부의 전제다
  };
  race: {
    eyebrow: string;
    hook: string;
    next: string;      // 티저를 닫는 예고 한 줄. 웹 마지막 화면과 Remotion 엔딩이 공유한다
  };
  footer: {
    nameOrigin: string; // 크루 이름의 유래. 바로 아래 joke 의 전제라 순서를 바꾸지 않는다
    joke: string;
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
