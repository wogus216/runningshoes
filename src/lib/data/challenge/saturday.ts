// 쎄러데이 — 손기정평화마라톤 2026 도전 기록 데이터
//
// 이 파일만 고치면 페이지 전체가 갱신된다.
// - 코드네임·실명 확정 시 codeName / realName 교체
// - 주간 기록은 SATURDAY_WEEKS 배열 맨 앞에 추가 (최신이 위)
// - 대회 후 SATURDAY_RACE_RESULT 채우면 결과 섹션이 렌더된다
//
// ⚠️ 원본 내보내기 파일(CSV/XML)은 커밋하지 않는다. 가공된 CrewStats만 넣는다.
//    GPS에 집 주소가, 심박에 건강정보가 들어 있다.

import type {
  ChatBurst,
  CrewMember,
  CrewPhoto,
  RaceResult,
  SaturdayRaceMeta,
  SaturdayTeaserCopy,
  WeekLog,
} from '@/types/challenge';

export const RACE_META: SaturdayRaceMeta = {
  name: '손기정평화마라톤',
  dateIso: '2026-11-15',
  dateLabel: '2026.11.15',
  datePoster: '11 / 15',
  place: '임진각 · 파주',
  timezone: 'Asia/Seoul',
  marathonId: 'sonkeechung-peace-marathon-2026',
};

// 풀코스 6 / 10K 1. 화면에서는 일곱 명을 동등한 크루원으로 다룬다.
export const SATURDAY_CREW: CrewMember[] = [
  { id: 'm1', codeName: '재춘', realName: '', distance: '풀코스', goal: '완주' },
  { id: 'm2', codeName: '감자', realName: '', distance: '풀코스', goal: '완주' },
  { id: 'm3', codeName: '형가', realName: '', distance: '풀코스', goal: '완주' },
  { id: 'm4', codeName: '기태', realName: '', distance: '풀코스', goal: '완주' },
  { id: 'm5', codeName: '지자', realName: '', distance: '풀코스', goal: '완주' },
  { id: 'm6', codeName: '남길', realName: '', distance: '풀코스', goal: '완주' },
  { id: 'm7', codeName: '광묵', realName: '', distance: '10K', goal: '완주' },
];

export const SATURDAY_COPY: SaturdayTeaserCopy = {
  hero: {
    question: '풀마라톤, 다 같이 한번 해볼까?',
    turn: '웃자고 한 말이었다.',
    hook: '농담은 접수됐다.',
    support: '아무도 진심은 아니었다. 접수 전까지는.',
  },
  crew: {
    title: '이 말에 책임질 일곱 명.',
    support: '잘 뛰는 사람을 모은 게 아니다. 같이 출발할 사람을 모았다.',
    statusLine: '준비 상태는 제각각. 접수 상태는 전원 완료.',
  },
  race: {
    // 군사 브리핑 톤(FINAL MISSION)을 걷어냈다 — 이 이야기는 작전이 아니라 친구들 일이다
    eyebrow: '그날, 파주에서',
    hook: '11월 15일, 농담의 결말을 보러 간다.',
    ending: '결말은 아직 없다. TO BE CONTINUED.',
    next: '다음 이야기는 첫 러닝부터',
  },
};

// 단톡방 실제 대화 — 2026-08-10 개설분에서 발췌. 시간순 그대로 두었다.
//
// ⚠️ 원칙 셋. 어기면 이 섹션이 존재할 이유가 사라진다.
//    1. 맞춤법·띄어쓰기만 정리한다(운영자 요청 2026-08-18). 어휘·말투·감탄은 손대지 않는다 —
//       "미틴", "개많이", "..", "!!" 는 그대로다. 문장을 고쳐 쓰는 순간 남의 말이 된다.
//    2. 순서를 바꾸지 않는다. 웃긴 건 대사가 아니라 대사가 온 순서다.
//    3. 없는 말을 만들지 않는다. 빈자리는 비워둔다.
//
// 정제 전 원문(대조용):
//   재춘  입금하신분들 한해서 기록용 사이트 만들어서 한번 체계적으로 관리 해드릴께요
//   지자  재춘 7만원다시 입금좀 / 미틴 돈 왜받아? / 취소할걸
//   기태  나도 취소할까 하고 고민중이었는데
//   재춘  신청 완료했습니다 !!
//   기태  최소 월 200씩들은 뛰어야 완주되겠지
//   감자  겨우 주1회 뛰어줄까말까자나 / 그걸 했음 마라톤 선수했겠지
//   지자  담배안핀지 33일 이제 비흡연자임
//   광묵  어제 6키로 뛰고 소주마셨는데 반성해야겠다..
//   재춘  내일 아침 비온다는 데
//   형가  그냥 뛰자 / 730 확인 / 재춘 기태 일너나면 연락해 도림천 메크로 돌리고 잇을게
//   형가  풀마라톤 등록 하니까 가슴 뜨거워지네 / 어떡하지?
//   재춘  재밌는 추억 개많이 쌓이겠다
//   남길  다들 잘 뛰네
//
// 화면에는 코드네임만 나간다. 원본 CSV에는 전화번호·주소·계좌가 들어 있어
// 리포에 복사하지 않았고, 그 메시지들은 발췌 후보에서 전량 제외했다.
export const SATURDAY_CHAT: ChatBurst[] = [
  {
    id: 'signup',
    label: '2026.08.10 — 방이 생긴 날',
    lines: [
      { who: '재춘', text: '입금하신 분들 한해서 기록용 사이트 만들어서 한번 체계적으로 관리 해드릴게요' },
      { who: '지자', text: '재춘 7만원 다시 입금 좀' },
      { who: '지자', text: '미틴 돈 왜 받아?' },
      { who: '지자', text: '취소할걸' },
      { who: '기태', text: '나도 취소할까 하고 고민중이었는데' },
      { who: '재춘', text: '신청 완료했습니다!!', punch: true },
    ],
  },
  {
    id: 'gwangmuk',
    label: '한 시간 뒤 — 형이 한 명 더 들어왔다',
    lines: [
      { who: '형가', text: '광묵이 형 초대 좀' },
      { who: '형가', text: '인사 씨게 박아라' },
      { who: '광묵', text: '안녕하세요 인사 씨게 박습니다 초보 런린이입니다', punch: true },
      { who: '기태', text: 'ㅋㅋ안녕하십니까 행님 화이팅입니다' },
      { who: '광묵', text: '나 10키로는 이번 주말에 특훈 받아서 가능하지!' },
    ],
  },
  {
    id: 'fee',
    label: '같은 날 저녁 — 참가비 흥정이 시작됐다',
    lines: [
      { who: '형가', text: '완주하고 내면 안 되겠지?' },
      { who: '남길', text: '용돈 다 떨어졌는데' },
      { who: '감자', text: '성공하고 주면 기분 좋을 듯' },
      { who: '형가', text: '재춘아 무이자 할부 가능하냐?' },
      { who: '형가', text: '가조쿠 특별 할인 없나여?? 저희 3명인데' },
      { who: '남길', text: '부가세만이라도' },
      { who: '기태', text: '아이스크림이라도 하나만 사줘라', punch: true },
    ],
  },
  {
    id: 'mileage',
    label: '월 200km 라는 말을 처음 들었다',
    lines: [
      { who: '기태', text: '최소 월 200씩은 뛰어야 완주되겠지' },
      { who: '재춘', text: '감자 내가 체계적으로 훈련 짜줄게' },
      { who: '감자', text: '나오기나 해', punch: true },
      { who: '감자', text: '겨우 주 1회 뛰어줄까 말까잖아' },
      { who: '감자', text: '그걸 했으면 마라톤 선수 했겠지' },
      { who: '광묵', text: '어제 6키로 뛰고 소주 마셨는데 반성해야겠다..' },
    ],
  },
  {
    id: 'fear',
    label: '겁이 나기 시작했다',
    lines: [
      { who: '감자', text: '과연 내가 저걸 해낼 수 있는지를' },
      { who: '감자', text: '풀마라톤 버려지면 어케 완주함?' },
      { who: '감자', text: '앰뷸 탈 수 있나?' },
      { who: '형가', text: '휴 벌써부터' },
      { who: '형가', text: '포기하려 하네 후' },
      { who: '감자', text: '다리 안 움직일 거 같은데 형가' },
      { who: '형가', text: '아니 휠리스 바퀴 몰래 끼든가' },
      { who: '남길', text: '그냥 믿고 따라와', punch: true },
    ],
  },
  {
    id: 'saturday',
    label: '토요일 아침 — 비 온다는 예보를 받고',
    lines: [
      { who: '재춘', text: '내일 아침 비 온다는데' },
      { who: '형가', text: '그냥 뛰자', punch: true },
      { who: '형가', text: '7시 30분 확인' },
      { who: '형가', text: '재춘 기태 일어나면 연락해, 도림천 매크로 돌리고 있을게' },
      { who: '기태', text: '야야 밖에 뛰어' },
      { who: '기태', text: '밖에 공기가 맛있어' },
    ],
  },
  {
    id: 'why',
    label: '그래서 이 페이지가 생겼다',
    lines: [
      { who: '형가', text: '풀마라톤 등록하니까 가슴 뜨거워지네' },
      { who: '형가', text: '어떡하지?' },
      { who: '재춘', text: '야 이거 파티냐?' },
      { who: '재춘', text: '일정 끝나고 사우나 코스까지 쫙 해야겠는데' },
      { who: '재춘', text: '재밌는 추억 개많이 쌓이겠다', punch: true },
      { who: '남길', text: '다들 잘 뛰네' },
    ],
  },
];

// 실제로 찍은 사진. 전부 폰 세로 사진이고, 그게 이 섹션의 형식을 정했다 —
// 표시는 아홉 장 전부 흑백이다. 서로 다른 날·다른 폰·다른 보정이라 색온도가 제각각이었고
// (연둣빛 봄 / 짙은 초록 여름 / 흐린 회색), 그대로 두면 한 세트로 안 묶인다.
// 한때 '번호표 단 날만 컬러' 예외를 뒀다가 폐기했다 — 한 장만 남기면 규칙이 아니라 예외로 읽힌다.
// 원본 색은 private/ 에 그대로 보존된다 — CSS filter 라 언제든 되돌릴 수 있다.
// 가로로 잘라 full-bleed 배경으로 쓰면 '폰으로 찍은 사진'이라는 질감이 사라진다.
//
// ⚠️ 원본은 private/challenge/photos-raw/ (커밋 안 됨). 배포본은 GPS·기기정보를 제거한 것이다.
// ⚠️ 촬영 날짜는 카톡을 거치며 EXIF가 날아가 남아 있지 않다. 시점 라벨을 붙이려면 확인이 필요하다.
export const SATURDAY_PHOTOS: CrewPhoto[] = [
  // 일출컷은 히어로로 올라갔다 — 같은 사진을 두 번 쓰지 않는다
  { src: 'spring-road', alt: '연둣빛 산길을 나란히 달리는 세 사람', wide: true },
  { src: 'summer-uphill', alt: '짙은 초록 숲을 끼고 언덕을 오르는 세 사람' },
  { src: 'selfie-four', alt: '러닝 도중 네 사람이 모여 찍은 셀카' },
  { src: 'mirror', alt: '산길 도로반사경에 비친 네 사람' },
  { src: 'track-pose', alt: '트랙 옆 공터에서 자세를 잡은 네 사람' },
  { src: 'blue-sky-walk', alt: '구름 없는 하늘 아래 시골길을 걸어 내려오는 세 사람' },
  { src: 'field-walk', alt: '운동장을 가로질러 걸어가는 두 사람의 뒷모습' },
  { src: 'race-beach', alt: '대회를 마치고 배번과 메달을 단 채 바닷가에 선 네 사람' },
];

// 최신 주차가 배열 맨 앞
export const SATURDAY_WEEKS: WeekLog[] = [];

// 대회 후에만 채운다. null이면 결과 섹션이 렌더되지 않는다.
export const SATURDAY_RACE_RESULT: RaceResult | null = null;
