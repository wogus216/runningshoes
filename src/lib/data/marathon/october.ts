import type { MarathonEvent } from '@/types/marathon';

export const octoberEvents: MarathonEvent[] = [
  {
    id: 'nb-run-your-way-seoul-10k-2026',
    name: '2026 Run your way Seoul 10K Race (뉴발란스 런유어웨이)',
    date: '2026-10-04',
    month: '10월',
    location: '여의도공원 문화의마당 (서울 영등포구)',
    region: '서울',
    distances: ['10K'],
    status: '접수예정',
    isMajor: false,
    website: 'https://www.nbkorea.com/raffle/collection.action?rIdx=134',
    description:
      '뉴발란스가 여는 도심 10K 브랜드 레이스. 접수는 선착순이 아니라 멤버십 회원 대상 래플(추첨)로, 7월 31일(금) 10시부터 8월 2일(일) 17시까지 55시간만 응모를 받습니다. 당첨 발표 8월 4일(화) 10시, 결제·기록증 제출 마감 8월 7일(금) 17시(미접수 시 자동 취소). RYW 패키지 80,000원 외에 SC 레벨 신발이 포함된 259,000원 오프라인 패키지 2종을 8월 20~21일 매장에서 선착순 판매합니다. 기록증은 참가 자격이 아니라 출발 그룹(S/A/B/C) 배정용이며, 최근 2년 이내 10K 공인 기록만 인정되고 하프·풀코스 기록은 인정되지 않습니다. 기념품은 싱글렛 또는 반팔티 택1 + 러닝양말이며 당일 착용이 필수입니다. 정원·상세 코스·완주 기념품은 공식 미공개.',
    courseInfo: {
      terrain: '평지',
      difficulty: '초보자',
      courseDescription:
        '여의도공원 문화의마당 출발 및 골인. 고저차가 거의 없는 도심 평지 코스입니다. 상세 코스도는 공식에서 추후 안내 예정입니다.',
    },
    raceInfo: {
      entryFees: [{ distance: '10K', fee: 80000 }],
      startTime: '07:30',
    },
  },
  {
    id: 'siheung-half-marathon-2026',
    name: '2026 시흥시 전국하프마라톤대회 (제12회)',
    date: '2026-10-05',
    month: '10월',
    location: '한국공학대학교 제2캠퍼스 (경기 시흥시 거북섬)',
    region: '경기',
    distances: ['하프', '10K', '5K'],
    status: '접수예정',
    isMajor: false,
    website: 'https://www.shmarathon.kr/shmarathon/',
    description:
      '시화호를 끼고 시화방조제 위를 그대로 왕복하는 직선 아웃앤백 코스. 시화호 권역 대회 중 실제로 방조제를 달리는 유일한 대회입니다. 접수는 7월 22일(수) 14시부터 선착순 5,000명. 대회일 10월 5일은 개천절 대체공휴일(월)입니다. 오이도역·시흥시청 무료 셔틀버스가 운행 예정이며, 올해 코스프레런 부문이 신설됐습니다. 참가 자격은 하프 19세 이상·10km 14세 이상.',
    courseInfo: {
      terrain: '평지',
      difficulty: '중급',
      courseDescription:
        '한국공학대 제2캠퍼스 출발 → 시화방조제 왕복. 고저차가 거의 없는 완전 평지 직선 코스라 기록 노리기 좋지만, 방조제 특성상 그늘과 바람막이가 전혀 없어 해풍에 그대로 노출됩니다. 급수는 7.5·13.5km 및 반환점 부근.',
    },
    raceInfo: {
      entryFees: [
        { distance: '하프', fee: 35000 },
        { distance: '10K', fee: 35000 },
        { distance: '5K', fee: 20000 },
      ],
      startTime: '09:00',
    },
  },
  {
    id: 'transjeju-utmb-2026',
    name: '2026 트랜스제주 by UTMB',
    date: '2026-10-02',
    month: '10월',
    location: '제주월드컵경기장·가시리 일대 (제주)',
    region: '제주',
    distances: ['울트라', '트레일'],
    status: '접수중',
    isMajor: true,
    website: 'https://transjeju.utmb.world/',
    description:
      'UTMB 월드시리즈 아시아 공식 대회. 10월 2~4일 제주에서 100M(148km)·100K(104km)·60K·20K 4개 종목으로 열립니다. 접수 마감 7월 31일, 참가비는 USD 기준 100M $280·100K $220·60K $160·20K $90. 60K 이상은 UTMB Index 자격이 필요하지만 20K는 자격 제한 없이 참가할 수 있어 입문 종목으로 적합합니다.',
    courseInfo: {
      terrain: '산악',
      difficulty: '상급',
      elevationGain: 5000,
      courseDescription:
        '제주 오름·중산간 트레일. 100M 148km/누적 5,000m, 100K 104km/4,000m, 60K 60km/1,400m. 100M은 10/2, 나머지 종목은 10/3 출발.',
    },
  },
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
      '획득고도 700m+ 국내 최상급 난코스. 5월 6일부터 선착순 10,000명 접수로 종료 예정일이 따로 없으며, 정원이 차면 마감됩니다. 환불 가능 기간은 7월 26일까지. 인기 대회라 종목에 따라 이미 마감됐을 수 있으니 신청 전 공식 페이지에서 잔여 여부를 확인하세요.',
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
    status: '마감',
    isMajor: false,
    website: 'https://www.xn--289av7rnxbd06bmrc.com/',
    description:
      '강릉 경포해변에서 열리는 동해안 평지 하프 코스. 5월 18일 본접수 시작 후 선착순 조기 마감됐고, 6월 30일 추가접수까지 진행돼 현재 전 부문(하프·10K·4.7K) 마감 상태입니다. 하프 단체전(5인 1조)만 사무국 문의로 열려 있습니다.',
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
    status: '마감',
    isMajor: false,
    website: 'https://xn--o39a74ke5dgxc87nkob1zuq6ko9i1win0a.kr',
    description:
      '대구 달서구 낙동강변을 달리는 영남권 대표 하프 대회 20회차. 5월 20일 정규 접수를 시작해 6월 30일 마감됐고, 6월 중순 추가접수까지 종료됐습니다. 클럽 회원 대상 마니아 할인가(하프·10km 25,000원)가 별도로 있습니다.',
    raceInfo: {
      entryFees: [
        { distance: '하프', fee: 35000 },
        { distance: '10K', fee: 35000 },
        { distance: '5K', fee: 20000 },
      ],
      startTime: '08:00',
    },
  },
  {
    id: 'mbn-naju-marathon-2026',
    name: '2026 MBN 나주마라톤',
    date: '2026-10-11',
    month: '10월',
    location: '전남 나주종합스포츠파크',
    region: '전남',
    distances: ['풀코스', '하프', '10K', '5K'],
    status: '마감',
    isMajor: false,
    website: 'https://najumarathon.com',
    description:
      'MBN 주관 전남 나주 풀코스 마라톤 4회차. 5월 15일 접수를 시작해 풀·하프·10km·하프팀대항이 조기 마감됐고, 5km 건강걷기까지 7월 19일 종료됐습니다. 정원은 풀 2,000·하프 2,500·10km 3,000·5km 3,000명.',
    raceInfo: {
      entryFees: [
        { distance: '풀코스', fee: 40000 },
        { distance: '하프', fee: 40000 },
        { distance: '10K', fee: 40000 },
        { distance: '5K', fee: 20000 },
      ],
      startTime: '08:00',
    },
  },
  {
    id: 'daecheongho-marathon-2026',
    name: '2026 청원생명쌀 대청호마라톤',
    date: '2026-10-17',
    month: '10월',
    location: '충북 문의체육공원',
    region: '충북',
    distances: ['풀코스', '하프', '10K', '5K'],
    status: '마감',
    isMajor: false,
    website: 'https://race.cjsports.or.kr',
    description:
      '대청호를 배경으로 달리는 충북 대표 풀코스 마라톤 24회차. 가을 단풍 코스로 유명하며 정원은 6,000명(풀 800·하프 1,400·10km 2,000·5km 1,800). 종목별로 5월 초순~중순에 순차 접수를 시작해 6월 12일 마감됐습니다. 고3 이하 할인가(풀·하프·10km 30,000원, 5km 15,000원)가 별도로 있습니다.',
    raceInfo: {
      entryFees: [
        { distance: '풀코스', fee: 45000 },
        { distance: '하프', fee: 45000 },
        { distance: '10K', fee: 45000 },
        { distance: '5K', fee: 25000 },
      ],
      startTime: '08:40',
    },
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
  {
    id: 'gimje-jipyeongseon-marathon-2026',
    name: '제25회 김제새만금 지평선 전국마라톤대회',
    date: '2026-10-03',
    month: '10월',
    location: '김제시민운동장 (전북 김제시)',
    region: '전북',
    distances: ['하프', '10K', '5K'],
    status: '마감',
    isMajor: false,
    description:
      '김제지평선축제 기간에 열리는 25회째 대회로, 코스를 따라 만개한 코스모스 길이 가을 러닝 명소입니다. 하프·5K 각 1,500명, 10K 2,000명 등 총 5,000명 선착순 접수(5/20 시작)로 조기 마감됐습니다.',
    raceInfo: {
      entryFees: [
        { distance: '하프', fee: 45000 },
        { distance: '10K', fee: 45000 },
        { distance: '5K', fee: 25000 },
      ],
    },
  },
  {
    id: 'gyeongnam-marathon-2026',
    name: '제23회 경남마라톤대회',
    date: '2026-10-04',
    month: '10월',
    location: '창원종합운동장 (경남 창원시)',
    region: '경남',
    distances: ['10K'],
    status: '접수중',
    isMajor: false,
    website: 'https://knmarathon.co.kr',
    description:
      '경남신문 주최로 창원스포츠파크 보조경기장에서 출발하는 경남 지역 대회 23회차. 10km 외에 3km 건강달리기(일반 20,000원·학생 15,000원)도 운영합니다. 접수는 7월 13일부터 선착순 4,000명으로 8월 29일까지입니다.',
    raceInfo: {
      entryFees: [{ distance: '10K', fee: 30000 }],
      startTime: '08:30',
    },
  },
  {
    id: 'hankyung-seoul-marathon-2026',
    name: '2026 한경서울마라톤',
    date: '2026-10-05',
    month: '10월',
    location: '여의도공원 문화의마당 (서울 영등포구)',
    region: '서울',
    distances: ['하프', '10K', '5K'],
    status: '접수중',
    isMajor: false,
    website: 'https://hk-marathon.com/',
    description:
      '한경미디어그룹이 처음 여는 약 7,000명 규모 대회. 하프는 여의도공원 출발 서강대교·월드컵대교 남단 회귀, 10K는 서강대교 왕복, 5K는 여의도 일대 코스입니다. 접수는 7월 16일부터 선착순.',
    courseInfo: {
      terrain: '평지',
      difficulty: '초보자',
      certification: '없음',
      courseDescription:
        '여의도공원 출발 한강변 평지 코스. 하프는 서강대교·월드컵대교 남단 회귀, 10K는 서강대교 왕복, 5K는 여의도 일대.',
    },
    raceInfo: {
      entryFees: [
        { distance: '하프', fee: 80000 },
        { distance: '10K', fee: 70000 },
        { distance: '5K', fee: 60000 },
      ],
      expectedParticipants: 7000,
    },
  },
  {
    id: 'yeoju-sejong-marathon-2026',
    name: '제23회 여주 세종대왕 마라톤대회',
    date: '2026-10-18',
    month: '10월',
    location: '현암지구공원 (경기 여주시)',
    region: '경기',
    distances: ['하프', '10K'],
    status: '접수중',
    isMajor: false,
    website: 'http://yjmarathon.com/',
    description:
      '남한강변 현암지구공원에서 출발하는 여주 대표 가을 대회. 하프 1,500명·10K 2,500명·4K 1,000명 등 총 5,000명 선착순이며 1km 휠체어 종목은 무료입니다. 접수는 6월 2일~9월 18일.',
    raceInfo: {
      entryFees: [
        { distance: '하프', fee: 45000 },
        { distance: '10K', fee: 45000 },
        { distance: '4K', fee: 25000 },
      ],
      expectedParticipants: 5000,
      startTime: '08:30',
    },
  },
];
