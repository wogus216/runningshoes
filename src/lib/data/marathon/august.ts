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
];
