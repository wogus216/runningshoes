import type { MarathonEvent } from '@/types/marathon';

export const novemberEvents: MarathonEvent[] = [
  {
    id: 'jtbc-seoul-marathon-2026',
    name: '2026 JTBC 서울마라톤',
    date: '2026-11-01',
    month: '11월',
    location: '서울 상암동 평화의 광장',
    region: '서울',
    distances: ['풀코스', '10K'],
    status: '마감',
    isMajor: true,
    website: 'http://marathon.jtbc.com',
    description:
      '국내 최대 규모 가을 풀코스 마라톤(11/1, 상암 출발 → 여의도 → 잠실 코스, 총 3.2만 명). 본접수는 추첨제로 4월 마감됐으나 미등록 티켓 추가접수가 진행 중입니다 — ①7월 KB 마라톤카드 래플 응모(7/1~7/31, 풀 1,000명·10K 3,000명, 당첨자만 8월 중 구매) ②8월 KB국민카드 협찬 이벤트(풀 200명) ③9월 최종 선착순. 즉 지금은 선착순이 아니라 래플 응모 단계입니다. 2026년부터 레이스팩은 택배 없이 코리아 러닝 엑스포(10/29~31, SETEC 강남) 현장 수령으로 변경됩니다.',
    raceInfo: {
      entryFees: [
        { distance: '풀코스', fee: 150000 },
        { distance: '10K', fee: 100000 },
      ],
    },
  },
  {
    id: 'ulsan-human-rights-marathon-2026',
    name: '2026 울산인권마라톤',
    date: '2026-11-01',
    month: '11월',
    location: '울산 태화강 둔치',
    region: '울산',
    distances: ['하프', '10K', '5K'],
    status: '접수예정',
    isMajor: false,
    website: 'https://www.humanrun.org',
    description:
      '태화강변 코스를 달리는 울산 대표 시민 마라톤 21회차. 접수는 8월 18일부터 9월 18일까지입니다. 기록 시상 없이 참가자 전원에게 동행기념품을 주는 방식이며, 장애인·18세 미만 할인가(하프·10km 25,000원, 5km 15,000원)와 장애인 동반 1인 참가비 면제가 있습니다.',
    raceInfo: {
      entryFees: [
        { distance: '하프', fee: 35000 },
        { distance: '10K', fee: 35000 },
        { distance: '5K', fee: 25000 },
      ],
      startTime: '09:30',
    },
  },
  {
    id: 'sonkeechung-peace-marathon-2026',
    name: '2026 손기정평화마라톤 (제22회)',
    date: '2026-11-15',
    month: '11월',
    location: '고양종합운동장 (경기 고양)',
    region: '경기',
    distances: ['풀코스', '하프', '10K'],
    status: '접수중',
    isMajor: true,
    website: 'https://www.sonkeechungrun.com',
    description:
      '1936 베를린올림픽 금메달리스트 손기정 선생을 기리는 평화·통일 테마 대회(2005년 제1회, 2026년 제22회). 평소 차량전용인 제2자유로를 두 발로 달리는 국내 유일 코스로, 직선·평지라 기록 경신에 유리합니다. 약 2만 명 선착순으로 매년 조기 마감(2025년 9/13 오픈→일주일 내 마감). ※2026 일정 미발표(2026-06 기준) — 11/15는 11월 셋째 일요일 패턴 기준 잠정이며 접수는 통상 9월 시작입니다. 참가비도 2025년 기준으로, 공식 발표 시 확정 예정.',
    courseInfo: {
      terrain: '평지',
      difficulty: '중급',
      courseDescription:
        '고양종합운동장 출발, 제2자유로(자동차전용도로) 왕복. 직선·평지 위주 기록 코스로 풀코스 반환점은 현천IC·능곡IC. 11월 개최라 기온이 낮고 바람이 변수입니다.',
    },
    raceInfo: {
      entryFees: [
        { distance: '풀코스', fee: 60000 },
        { distance: '하프', fee: 55000 },
        { distance: '10K', fee: 50000 },
      ],
      timeLimits: [
        { distance: '풀코스', hours: 5, minutes: 0 },
        { distance: '하프', hours: 3, minutes: 0 },
        { distance: '10K', hours: 1, minutes: 30 },
      ],
      expectedParticipants: 20000,
      startTime: '09:00',
    },
  },
  {
    id: 'sangju-gotgam-marathon-2026',
    name: '2026 상주 곶감 마라톤',
    date: '2026-11-15',
    month: '11월',
    location: '경북 상주시민운동장',
    region: '경북',
    distances: ['풀코스', '하프', '10K', '5K'],
    status: '접수중',
    isMajor: false,
    website: 'https://mara1080.com/event/c8dc2c22-a83a-4743-9e34-c884e9809dbb',
    description:
      '상주 곶감 축제와 연계된 가을 풀코스 마라톤 24회차. 접수는 5월 6일부터 선착순 10,000명(4.4km 2,000·10km 3,000·하프 2,500·풀 2,500)이 찰 때까지이며, 입금·변경·취소는 8월 31일까지입니다. 짧은 종목은 5km가 아니라 4.4km입니다. 아래 참가비는 기본 기념품(상주곶감 또는 샤인머스켓 택1) 기준이며, 러닝 자켓 기념품 선택 시 10km·하프 50,000원·풀 55,000원으로 올라갑니다. 상주시민 4.4km는 15,000원.',
    raceInfo: {
      entryFees: [
        { distance: '풀코스', fee: 50000 },
        { distance: '하프', fee: 45000 },
        { distance: '10K', fee: 45000 },
        { distance: '4.4K', fee: 25000 },
      ],
      startTime: '09:00',
    },
  },
  {
    id: 'mbn-seoul-marathon-2026',
    name: '2026 MBN 서울마라톤',
    date: '2026-11-15',
    month: '11월',
    location: '서울 광화문광장 → 잠실종합운동장',
    region: '서울',
    distances: ['하프', '10K'],
    status: '접수중',
    isMajor: true,
    website: 'https://mbn-seoulmarathon.com',
    description:
      'MBN 주최 서울 도심 마라톤(총 3만 명, TV 생중계). 하프는 광화문광장→잠실종합운동장 일직선 편도, 10K는 잠실종합운동장 루프(풀코스 없음). 2026.11.15(일) 07시30분 출발(06시30분 집결) 확정. 참가비 하프 10만 원·10K 7만 원 확정. 접수: 우선신청 6/22(월) 10시~6/23(화) 17시(선셋마라톤·슈퍼히어로런 신청자·매경PLUS 구독자 한정), 하프 일반 6/25(목) 14시·10K 일반 6/26(금) 14시(런잇 RUNIT). 세부 코스 경유지는 추후 공개(2026-06-22 기준).',
    courseInfo: {
      terrain: '평지',
      difficulty: '중급',
      certification: '없음',
      courseDescription:
        '하프: 광화문광장 출발 → 잠실종합운동장 도착 편도 도심 평지 코스(제한 2시간 30분). 10K: 잠실종합운동장 출발·도착 루프(제한 1시간 30분). 접근성 좋고 도심 분위기. 세부 경유지 추후 공개.',
    },
    raceInfo: {
      entryFees: [
        { distance: '하프', fee: 100000 },
        { distance: '10K', fee: 70000 },
      ],
      timeLimits: [
        { distance: '하프', hours: 2, minutes: 30 },
        { distance: '10K', hours: 1, minutes: 30 },
      ],
      expectedParticipants: 30000,
      startTime: '07:30',
    },
  },
  {
    id: 'incheon-marathon-2026',
    name: '2026 인천마라톤',
    date: '2026-11-22',
    month: '11월',
    location: '인천아시아드주경기장 (인천 서구)',
    region: '인천',
    distances: ['풀코스', '10K', '5K'],
    status: '접수예정',
    isMajor: true,
    description:
      '인천시·대한육상연맹 주최 인천 최초·유일 공식 풀코스 마라톤(제2회). 2026년 청라하늘대교 편도 코스를 검토 중이며(바다 위 러닝), 총 2만 명 규모에 풀코스 정원을 6,000명에서 8,000명으로 확대합니다. 2026년 접수 일정·참가비·공식 사이트는 아직 공개되지 않았습니다. 참가비 인상(풀 8만·10km 5만)이 언론에 보도됐으나 검토 단계로 확정된 금액이 아니니, 접수 개시 후 공식 안내를 확인하세요.',
  },
  {
    id: 'buyeo-goodtrae-marathon-2026',
    name: '제15회 부여 굿뜨래 마라톤대회',
    date: '2026-11-07',
    month: '11월',
    location: '구드래나루터 (충남 부여군)',
    region: '충남',
    distances: ['풀코스', '하프', '10K', '5K'],
    status: '접수중',
    isMajor: false,
    description:
      '백마강변 구드래나루터에서 출발하는 부여 대표 대회 15회차. 하반기 충남권에서 드물게 풀코스를 운영합니다. 부여군마라톤연합회 주최·전국마라톤협회 주관으로, 접수는 6월 30일부터 10월 7일까지입니다. 부여군민 5km는 20,000원.',
    website: 'https://mara1080.com/event/ffc023fc-7a54-4610-bdd6-2bb9a1028122',
    raceInfo: {
      entryFees: [
        { distance: '풀코스', fee: 50000 },
        { distance: '하프', fee: 45000 },
        { distance: '10K', fee: 45000 },
        { distance: '5K', fee: 30000 },
      ],
      startTime: '08:30',
    },
  },
  {
    id: 'gwacheon-marathon-2026',
    name: '2026 과천마라톤',
    date: '2026-11-08',
    month: '11월',
    location: '관문체육공원 (경기 과천시)',
    region: '경기',
    distances: ['하프', '10K', '5K'],
    status: '접수중',
    isMajor: false,
    website: 'https://gcrun.co.kr/gcrun/',
    description:
      '과천시체육회 주최로 관문체육공원에서 출발하는 하프·10K·5K 대회. 7월 20일 14시 접수를 시작해 선착순 3,000명이 차면 마감됩니다. 참가 자격은 하프 19세 이상·10km 14세 이상이며 5km는 제한이 없습니다. 과천시민 5km는 25,000원(한정 수량).',
    raceInfo: {
      entryFees: [
        { distance: '하프', fee: 45000 },
        { distance: '10K', fee: 40000 },
        { distance: '5K', fee: 30000 },
      ],
      startTime: '08:00',
    },
  },
  {
    id: 'jeju-mandarin-marathon-2026',
    name: '2026 제주감귤마라톤',
    date: '2026-11-15',
    month: '11월',
    location: '조천체육관 (제주 제주시)',
    region: '제주',
    distances: ['풀코스', '하프', '10K'],
    status: '접수중',
    isMajor: false,
    website: 'https://marathon.ihalla.com/',
    description:
      '한라일보가 주최하는 제주 대표 가을 대회로 풀·하프·10K를 운영합니다. 정식 명칭은 제주감귤국제마라톤대회. 감귤 수확철 제주 동부 해안과 중산간을 달리는 코스이며, 접수는 7월 6일~9월 11일입니다. 제한시간은 풀 5시간·하프 2시간 30분·10km 1시간 30분이고, 유아·초중고생은 30% 할인됩니다.',
    raceInfo: {
      entryFees: [
        { distance: '풀코스', fee: 55000 },
        { distance: '하프', fee: 45000 },
        { distance: '10K', fee: 40000 },
      ],
    },
  },
  {
    id: 'garmin-run-korea-2026',
    name: '2026 가민런 코리아 (Garmin Run Korea)',
    date: '2026-11-15',
    month: '11월',
    location: '고양종합운동장 (경기 고양시)',
    region: '경기',
    distances: ['하프', '10K'],
    status: '마감',
    isMajor: true,
    website: 'https://discover.garmin.com/ko-KR/event/2026/garmin-run/',
    description:
      '가민이 주최하는 브랜드 러닝 이벤트로, 2026년 1만 2천 명 규모로 대폭 확대됐습니다. 하프(21K)·10K 종목이며 접수는 러너블(Runable) 단독으로 7월 1일~10일 진행돼 이미 마감됐습니다.',
    raceInfo: {
      entryFees: [
        { distance: '하프', fee: 80000 },
        { distance: '10K', fee: 60000 },
      ],
      expectedParticipants: 12000,
    },
  },
  {
    id: 'gochang-dolmen-marathon-2026',
    name: '제24회 고창고인돌마라톤',
    date: '2026-11-15',
    month: '11월',
    location: '고창공설운동장 (전북 고창군)',
    region: '전북',
    distances: ['하프', '10K', '5K'],
    status: '접수중',
    isMajor: false,
    description:
      '고창군 일대에서 열리는 24회째 대회로 하프·10K·5K를 운영합니다. 접수는 7월 1일부터 선착순 4,000명으로 8월 31일 14시까지입니다. 5km는 기록을 측정하지 않으며 참가비도 10,000원으로 저렴합니다. 클럽 마니아 할인가(하프·10km 25,000원, 기념품 미지급)가 별도로 있습니다.',
    website: 'http://www.gcrun.com/',
    raceInfo: {
      entryFees: [
        { distance: '하프', fee: 35000 },
        { distance: '10K', fee: 35000 },
        { distance: '5K', fee: 10000 },
      ],
      startTime: '10:00',
    },
  },
  {
    id: 'namwon-chunhyang-marathon-2026',
    name: '2026 남원 춘향 전국 마라톤대회',
    date: '2026-11-28',
    month: '11월',
    location: '남원종합스포츠타운 (전북 남원시)',
    region: '전북',
    distances: ['풀코스', '하프', '10K', '5K'],
    status: '접수중',
    isMajor: false,
    description:
      '남원종합스포츠타운에서 출발하며, 11월 하순에는 드물게 풀코스를 운영하는 대회입니다. 전국마라톤협회 주관으로 접수는 7월 7일부터 10월 28일까지. 제한시간은 풀 5시간(반환점 2시간 45분)·하프 3시간·10km 2시간이며, 10km 이상은 완주 메달과 지역상품권 1만원을 받습니다. 남원시민 5km는 20,000원.',
    website: 'https://mara1080.com/event/c2cec79b-c38a-4832-bf4f-7ecb499cdcd5',
    raceInfo: {
      entryFees: [
        { distance: '풀코스', fee: 50000 },
        { distance: '하프', fee: 45000 },
        { distance: '10K', fee: 45000 },
        { distance: '5K', fee: 30000 },
      ],
      startTime: '08:40',
    },
  },
];
