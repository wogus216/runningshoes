import type { MarathonEvent } from '@/types/marathon';

export const septemberEvents: MarathonEvent[] = [
  {
    id: 'gongju-baekje-marathon-2026',
    name: '2026 공주백제마라톤',
    date: '2026-09-20',
    month: '9월',
    location: '공주시민운동장 (금강변)',
    region: '충남',
    distances: ['풀코스', '하프', '10K', '5K'],
    status: '접수중',
    isMajor: true,
    website: 'https://dongma.club/',
    description:
      '동마 시리즈 가을 시즌 개막전. 금강변 평지 풀코스 + 32K 옵션이 특징. 우선접수(동마클럽 멤버십) 5/11 오픈, 본접수 5/21 마감.',
    courseInfo: {
      terrain: '평지',
      difficulty: '중급',
      certification: 'KAF',
      courseDescription: '공주 금강변 평지 풀코스. 32K 옵션은 풀코스 준비용으로 인기.',
    },
    raceInfo: {
      entryFees: [
        { distance: '풀코스', fee: 60000 },
        { distance: '32K', fee: 60000 },
        { distance: '하프', fee: 40000 },
        { distance: '10K', fee: 40000 },
        { distance: '5K', fee: 20000 },
      ],
      startTime: '08:00',
    },
  },
];
