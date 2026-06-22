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
      '국내 최대 규모 가을 풀코스 마라톤. 상암 출발 → 여의도 → 잠실 코스. 추첨제 운영(본접수 4월 마감).',
  },
  {
    id: 'ulsan-human-rights-marathon-2026',
    name: '2026 울산인권마라톤',
    date: '2026-11-01',
    month: '11월',
    location: '울산 태화강 둔치',
    region: '울산',
    distances: ['하프', '10K', '5K'],
    status: '접수중',
    isMajor: false,
    description: '태화강변 코스를 달리는 울산 대표 시민 마라톤.',
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
    website: 'http://www.sangjugotgommarathon.com',
    description: '상주 곶감 축제와 연계된 가을 풀코스 마라톤. 접수 5/6~10/15.',
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
    status: '접수중',
    isMajor: true,
    website: 'https://incheonmarathon.or.kr',
    description:
      '인천시·대한육상연맹 주최 인천 최초·유일 공식 풀코스 마라톤(제2회). 2026년 청라하늘대교 편도 코스 검토(바다 위 러닝), 약 2만 명·풀 8천. 접수 7월 오픈 예상.',
  },
];
