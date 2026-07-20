import type { MarathonEvent } from '@/types/marathon';

export const julyEvents: MarathonEvent[] = [
  {
    id: 'pohang-iron-run-2026',
    name: '2026 포항 아이언런 (IRON RUN)',
    date: '2026-07-04',
    month: '7월',
    location: '포항 영일대해수욕장 장미광장',
    region: '경북',
    distances: ['하프', '10K', '5K'],
    status: '대회종료',
    isMajor: true,
    website: 'https://ironrun.kr',
    description:
      '포스코노동조합 주최 "철의 도시 포항" 컨셉 대회. 거리 의미가 독특 — 3.8km(노조 38주년) / 7.87km(철의 비중) / 15.38km(철의 녹는점 1,538℃). 정원 5,000명 선착순, 5/31 마감.',
    courseInfo: {
      terrain: '평지',
      difficulty: '초보자',
      certification: '없음',
      courseDescription: '영일대해수욕장 일대 평지 해변 코스. 큰 오르막 없음.',
    },
    raceInfo: {
      entryFees: [
        { distance: '3.8km', fee: 25000 },
        { distance: '7.87km', fee: 35000 },
        { distance: '15.38km', fee: 40000 },
      ],
      timeLimits: [
        { distance: '15.38km', hours: 2, minutes: 30 },
        { distance: '7.87km', hours: 1, minutes: 40 },
        { distance: '3.8km', hours: 1, minutes: 0 },
      ],
      expectedParticipants: 5000,
      startTime: '08:00',
    },
  },
];
