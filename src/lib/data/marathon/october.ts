import type { MarathonEvent } from '@/types/marathon';

export const octoberEvents: MarathonEvent[] = [
  {
    id: 'andong-marathon-2026',
    name: '2026 안동마라톤',
    date: '2026-10-04',
    month: '10월',
    location: '안동시민운동장',
    region: '경북',
    distances: ['풀코스', '하프', '10K', '5K'],
    status: '접수중',
    isMajor: true,
    website: 'https://admarathon.kr/andong/',
    description:
      '획득고도 700m+ 국내 최상급 난코스. 10,000명 선착순, 작년 며칠 만에 조기 마감. 5/31 접수 마감.',
    courseInfo: {
      terrain: '언덕',
      difficulty: '상급',
      elevationGain: 700,
      certification: 'KAF',
      courseDescription: '획득고도 700m+ 의 국내 최상급 난이도 풀코스.',
    },
    raceInfo: {
      entryFees: [
        { distance: '풀코스', fee: 60000 },
        { distance: '하프', fee: 50000 },
        { distance: '10K', fee: 50000 },
        { distance: '5K', fee: 30000 },
      ],
      expectedParticipants: 10000,
      startTime: '08:00',
    },
  },
  {
    id: 'seoul-open-marathon-2026',
    name: '2026 서울 오픈 마라톤',
    date: '2026-10-05',
    month: '10월',
    location: '광화문광장 앞 대로변',
    region: '서울',
    distances: ['하프', '10K'],
    status: '마감',
    isMajor: false,
    website: 'https://seoulopen.or.kr/',
    description:
      '광화문 출발 도심 하프·10K. 월요일(공휴일) 개최. 본접수 5/10 마감됨.',
    courseInfo: {
      terrain: '평지',
      difficulty: '중급',
      certification: '없음',
    },
    raceInfo: {
      entryFees: [
        { distance: '하프', fee: 80000 },
        { distance: '10K', fee: 60000 },
      ],
      startTime: '07:30',
    },
  },
  {
    id: 'gyeongpo-marathon-2026',
    name: '2026 경포마라톤',
    date: '2026-10-10',
    month: '10월',
    location: '경포해변 중앙광장',
    region: '강원',
    distances: ['하프', '10K', '5K'],
    status: '접수중',
    isMajor: false,
    website: 'http://www.xn--289av7rnxbd06bmrc.com/',
    description: '강릉 경포해변 동해안 하프 코스. 6/23 접수 마감.',
    courseInfo: {
      terrain: '평지',
      difficulty: '초보자',
      certification: '없음',
      courseDescription: '동해안 평지 해변 코스.',
    },
    raceInfo: {
      entryFees: [
        { distance: '하프', fee: 40000 },
        { distance: '10K', fee: 40000 },
        { distance: '4.7K 건강달리기', fee: 30000 },
      ],
      startTime: '08:30',
    },
  },
  {
    id: 'seoul-race-2026',
    name: '2026 서울레이스 (SEOUL RACE)',
    date: '2026-10-11',
    month: '10월',
    location: '청계광장 앞 세종대로',
    region: '서울',
    distances: ['하프', '10K'],
    status: '접수중',
    isMajor: true,
    website: 'https://www.seoul-race.co.kr/',
    description:
      '동마 시리즈 유일 가을 도심 페스티벌형 하프·10K. 청계광장→종로→숭례문→시청→청계천→DDP. 우선접수 5/11~5/15, 본접수 5/27 19시 하프·21시 10K. 2025년 12,800명 역대 최다.',
    courseInfo: {
      terrain: '평지',
      difficulty: '중급',
      certification: 'KAF',
      courseDescription: '도심 100% 아스팔트 평지 순환형. 하프 PB 친화적.',
    },
    raceInfo: {
      entryFees: [
        { distance: '하프', fee: 70000 },
        { distance: '10K', fee: 60000 },
      ],
      expectedParticipants: 12500,
      startTime: '08:00',
    },
  },
  {
    id: 'disney-run-incheon-2026',
    name: '디즈니런 2026 인천',
    date: '2026-10-24',
    month: '10월',
    location: '인천 상상플랫폼 (인천 중구 월미로)',
    region: '인천',
    distances: ['10K', '5K'],
    status: '접수중',
    isMajor: false,
    website: 'https://disneyrunincheon2026.com',
    description:
      '2025 여의도에서 1.5만 명을 모은 국내 첫 디즈니 테마 펀런이 인천 상상플랫폼으로 돌아옵니다. 5km(곰돌이 푸·가족 친화)·10km(미키와 친구들) 2종, 유니클로 한정판 티셔츠와 완주 메달이 포함됩니다. 본 대회 티켓은 8/31(월) 10시 선착순 1.5만 명 오픈 예정이며, 6~8월엔 토이스토리·모아나·주토피아 버추얼런(회차별 4만원·5천 명)이 먼저 진행됩니다. 기록보다 디즈니 테마를 즐기는 축제형 러닝.',
    courseInfo: {
      terrain: '평지',
      difficulty: '초보자',
      courseDescription:
        '인천 상상플랫폼(내항 일대) 일원 평지 코스. 5km는 가족 친화, 10km는 러닝 애호가용으로 구분됩니다. 세부 경로는 추후 공개.',
    },
    raceInfo: {
      entryFees: [
        { distance: '10K', fee: 80000 },
        { distance: '5K', fee: 65000 },
      ],
      expectedParticipants: 15000,
    },
  },
  {
    id: 'chuncheon-marathon-2026',
    name: '2026 조선일보 춘천마라톤',
    date: '2026-10-25',
    month: '10월',
    location: '춘천 의암호',
    region: '강원',
    distances: ['풀코스', '10K'],
    status: '접수중',
    isMajor: true,
    website: 'https://www.chuncheonmarathon.com/',
    description:
      '"가을의 전설" — 1946년 창설돼 2026년 창설 80주년(제80회)을 맞는 가을 풀코스 명문. 의암호 단풍 코스, 25km 지점 오르막이 핵심 변수. 2026년 대회일 10/25(일) 9시 확정. 신청은 풀코스 7/14(화) 14시·10K 7/16(목) 14시 선착순(빠른 매진 주의). 참가비 풀 15만원·10K 10만원. (2026-06-11 공식 발표) ※제한시간·참가 규모·셔틀은 2025년 기준으로, 2026 요강 발표 시 확정됩니다.',
    courseInfo: {
      terrain: '언덕',
      difficulty: '상급',
      certification: 'IAAF',
      courseDescription: '의암호 둘레 코스 + 25km 오르막. PB 친화적이지만 후반 페이스 관리 필수.',
    },
    raceInfo: {
      entryFees: [
        { distance: '풀코스', fee: 150000 },
        { distance: '10K', fee: 100000 },
      ],
      timeLimits: [
        { distance: '풀코스', hours: 6, minutes: 0 },
        { distance: '10K', hours: 1, minutes: 30 },
      ],
      aidStations: 9,
      aidInterval: '약 5km마다(25km 급수대가 춘천댐 오르막 진입 전 핵심 보급)',
      expectedParticipants: 20000,
      startTime: '09:00',
    },
    logistics: {
      parking:
        '공지천 공영주차장(대회장 맞은편)·의암공원·춘천MBC 주차장 이용. 교통 통제가 오전 7시~오후 3시 30분이라 7시 이전 진입을 권장합니다.',
      publicTransport:
        'ITX-청춘(용산→춘천 약 75분, 청량리→춘천 약 60분). 주말 좌석이 조기 매진되니 코레일톡 사전 예매 필수. ※KTX-이음은 춘천선 미운행입니다.',
      shuttle:
        '서울 4개 지점(시청·잠실·신도림·사당)에서 대회장 직행, 오전 6시 출발(2025년 기준 왕복 2만 원). 공식 홈페이지 예약, 조기 마감됩니다.',
    },
  },
  {
    id: 'gyeongju-international-marathon-2026',
    name: '2026 경주국제마라톤',
    date: '2026-10-17',
    month: '10월',
    location: '경주시민운동장',
    region: '경북',
    distances: ['풀코스', '하프', '10K'],
    status: '접수중',
    isMajor: true,
    website: 'https://dongma.club/',
    description:
      '동아일보 주최, World Athletics 엘리트 라벨. 유네스코 신라 유적(대릉원·첨성대·동궁과 월지·황룡사지)을 통과하는 평지 순환 코스로 PB 친화적입니다. 정원 1.6만 명(일반 9천 + 동마클럽 매니아 7천)으로 동마 가을 시리즈를 마무리합니다. 서울·공주백제·경주 동아 3개 대회를 모두 완주하면 런저니 메달이 별도 수여됩니다.',
    courseInfo: {
      terrain: '평지',
      difficulty: '중급',
      certification: 'IAAF',
      courseDescription:
        '경주시민운동장 출발·귀환 순환 코스. 5~16km 구간에 대릉원(천마총)·첨성대·동궁과 월지(안압지)·반월성·황룡사지 등 신라 유적이 밀집합니다. 획득고도 약 146m로 급경사 없는 평탄 코스이나, 16~24km 북천 오르막과 후반 기복이 변수입니다.',
    },
    raceInfo: {
      entryFees: [
        { distance: '풀코스', fee: 60000 },
        { distance: '하프', fee: 50000 },
        { distance: '10K', fee: 40000 },
      ],
      expectedParticipants: 16000,
      startTime: '08:00',
    },
    logistics: {
      publicTransport:
        'KTX·SRT는 경주역(2023.12 신경주역에서 역명 변경, 건천읍 외곽) 하차 후 시내버스(50·60번)나 택시로 경주시민운동장까지 이동합니다.',
      parking:
        '경주시민운동장 진입로·코스 구간은 주차 금지. 지정 주차장(경주 예술의전당·시립도서관)만 이용하며, 교통 통제 해제 전에는 출차가 어렵습니다.',
      shuttle:
        '서울 출발 왕복 셔틀버스 운영(2025년 기준). 2026 운영 여부는 동마클럽 별도 공지로, 조기 마감되니 사전 확인이 필요합니다.',
    },
  },
  {
    id: 'dalseo-half-marathon-2026',
    name: '2026 달서하프마라톤',
    date: '2026-10-04',
    month: '10월',
    location: '대구 달서구 호림강나루공원',
    region: '대구',
    distances: ['하프', '10K', '5K'],
    status: '접수중',
    isMajor: false,
    description: '대구 달서구 낙동강변을 달리는 영남권 대표 하프 대회.',
  },
  {
    id: 'mbn-naju-marathon-2026',
    name: '2026 MBN 나주마라톤',
    date: '2026-10-11',
    month: '10월',
    location: '전남 나주종합스포츠파크',
    region: '전남',
    distances: ['풀코스', '하프', '10K', '5K'],
    status: '접수중',
    isMajor: false,
    website: 'https://marathongo.co.kr/raceDetail/domestic/2026-mbn-naju-marathon',
    description: 'MBN 주관 전남 나주 풀코스 마라톤.',
  },
  {
    id: 'daecheongho-marathon-2026',
    name: '2026 청원생명쌀 대청호마라톤',
    date: '2026-10-17',
    month: '10월',
    location: '충북 문의체육공원',
    region: '충북',
    distances: ['풀코스', '하프', '10K', '5K'],
    status: '접수중',
    isMajor: false,
    description: '대청호를 배경으로 달리는 충북 대표 풀코스 마라톤. 가을 단풍 코스로 유명.',
  },
  {
    id: 'gangnam-peace-marathon-2026',
    name: '2026 강남국제평화마라톤 (제23회)',
    date: '2026-10-05',
    month: '10월',
    location: '강남구 봉은사로 (삼성1동주민센터 앞)',
    region: '서울',
    distances: ['풀코스', '하프', '10K', '5K'],
    status: '접수중',
    isMajor: true,
    website: 'https://peacemarathon.co.kr',
    description:
      '강남구·주한미8군 공동 주최, 참가비 전액을 전쟁고아 지원에 기부하는 이색 마라톤(유니세프 한국위원회 후원). 강남페스티벌 연계로 봉은사로 강남 도심을 달립니다. 2026 제23회는 서울시 축제포털 기준 10/5(일) 예정 — 종목·참가비·접수일은 제22회(2025) 기준 추정이며 8월경 공식 발표 예상. 참가비가 풀 3만·하프/10K 2만원대로 저렴한 기부형 대회입니다.',
    courseInfo: {
      terrain: '평지',
      difficulty: '중급',
      certification: '없음',
      courseDescription: '봉은사로 출발 강남 도심 순환 코스. 도로 통제형, 평지 위주.',
    },
    raceInfo: {
      entryFees: [
        { distance: '풀코스', fee: 30000 },
        { distance: '하프', fee: 20000 },
        { distance: '10K', fee: 20000 },
        { distance: '5K', fee: 10000 },
      ],
      startTime: '08:00',
    },
  },
];
