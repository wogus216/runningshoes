import type { MarathonEvent } from '@/types/marathon';

export const augustEvents: MarathonEvent[] = [
  {
    id: 'danyang-moonlight-race-2026',
    name: '2026 단양 달빛레이스',
    date: '2026-08-29',
    month: '8월',
    location: '단양생태체육공원 (충북 단양)',
    region: '충북',
    distances: ['10K', '5K'],
    status: '접수중',
    isMajor: false,
    website: 'http://danyangmarathon.kr/',
    description:
      '한여름 더위를 피해 오후 7시에 출발하는 야간 러닝. 남한강 수변 달맞이길과 도담삼봉 방향 단양팔경 코스를 달빛 아래 달립니다. 피니시 후에는 치킨·맥주·막걸리 푸드부스가 열려 러닝과 축제를 함께 즐길 수 있습니다. 6/10~7/17 선착순 5,000명 접수.',
    courseInfo: {
      terrain: '평지',
      difficulty: '초보자',
      certification: '없음',
      courseDescription:
        '단양생태체육공원 출발, 남한강 수변 달맞이길·도담삼봉 방향 평지 야간 코스(10K/5K). 야간이라 헤드랜턴·야광 소품 권장.',
    },
    raceInfo: {
      entryFees: [
        { distance: '10K', fee: 50000 },
        { distance: '5K', fee: 30000 },
      ],
      expectedParticipants: 5000,
      startTime: '19:00',
    },
  },
  {
    id: 'anyangcheon-moonlight-nightrun-2026',
    name: '2026 안양천 달빛 나이트런',
    date: '2026-08-15',
    month: '8월',
    location: '신정교 하부 영롱이 억새구장 (서울 양천구)',
    region: '서울',
    distances: ['10K', '5K'],
    status: '접수중',
    isMajor: false,
    website: 'https://moonnightrun.kr/',
    description:
      '안양천 신정교 하부에서 열리는 여름 야간 러닝 대회. 5km·10km 전 종목 기록측정을 제공하며 해질녘 18시 30분에 출발합니다. 접수는 8월 6일까지.',
    courseInfo: {
      terrain: '평지',
      difficulty: '초보자',
      certification: '없음',
      courseDescription: '안양천 수변 평지 야간 코스(10K/5K). 야간 러닝이라 야광 소품 권장.',
    },
    raceInfo: {
      entryFees: [
        { distance: '10K', fee: 50000 },
        { distance: '5K', fee: 50000 },
      ],
      startTime: '18:30',
    },
  },
  {
    id: 'incheon-night-race-2026',
    name: '2026 인천 나이트 레이스 (INCHEON NIGHT RACE)',
    date: '2026-08-15',
    month: '8월',
    location: '청라하늘대교 영종진광장로 (인천 중구)',
    region: '인천',
    distances: ['10K'],
    status: '접수중',
    isMajor: false,
    website: 'http://icnr.kr/',
    description:
      '청라하늘대교를 야간에 달리는 8.15km 단일 종목 나이트 레이스. 광복절(8.15)을 상징하는 8.15km 코스로 19시 30분에 출발하며, 순위 입상자에게 상금을 지급합니다. 접수는 8월 8일까지.',
    raceInfo: {
      entryFees: [{ distance: '8.15K', fee: 60000 }],
      startTime: '19:30',
    },
  },
  {
    id: 'pyeongchang-daegwallyeong-half-2026',
    name: '2026 Happy700 평창 대관령 전국 하프마라톤',
    date: '2026-08-16',
    month: '8월',
    location: '2018 평창동계올림픽기념관 (강원 평창군)',
    region: '강원',
    distances: ['하프', '10K'],
    status: '접수중',
    isMajor: false,
    website: 'http://www.ifunrunkorea.co.kr/',
    description:
      '평균 해발 700m 고지대 평창에서 열리는 한여름 하프마라톤. 8월에도 20도 안팎의 선선한 기온이 강점이며, 평창동계올림픽기념관 앞에서 오전 8시 출발합니다. 한국실업육상연맹 주최로 접수는 7월 26일 18시 마감입니다.',
    raceInfo: {
      entryFees: [
        { distance: '하프', fee: 50000 },
        { distance: '10K', fee: 40000 },
      ],
      startTime: '08:00',
    },
  },
  {
    id: 'hangang-seoul-half-marathon-2026',
    name: '제3회 한강 서울 하프 마라톤',
    date: '2026-08-30',
    month: '8월',
    location: '여의도 한강공원 물빛광장 (서울 영등포구)',
    region: '서울',
    distances: ['하프', '10K', '5K'],
    status: '접수중',
    isMajor: false,
    website: 'https://seoulhalfrun.kr/',
    description:
      '여의도 한강공원 물빛광장에서 출발하는 도심 하프마라톤. 하프·10km·5km 전 종목 기록측정과 기념 티셔츠·메달을 제공하며 오전 8시에 출발합니다. 접수는 8월 23일까지.',
    courseInfo: {
      terrain: '평지',
      difficulty: '초보자',
      certification: '없음',
      courseDescription: '여의도 한강공원 출발 한강 수변 평지 코스(하프/10K/5K).',
    },
    raceInfo: {
      entryFees: [
        { distance: '하프', fee: 50000 },
        { distance: '10K', fee: 50000 },
        { distance: '5K', fee: 50000 },
      ],
      startTime: '08:00',
    },
  },
];
