import type { MarathonEvent } from '@/types/marathon';

export const decemberEvents: MarathonEvent[] = [
  {
    id: 'busan-international-marathon-2026',
    name: '2026 부산국제마라톤',
    date: '2026-12-06',
    month: '12월',
    location: '부산',
    region: '부산',
    distances: ['풀코스', '하프', '10K'],
    status: '접수중',
    isMajor: true,
    website: 'https://www.kaaf.or.kr',
    description:
      '대한육상연맹 공인 부산 최대 풀코스 마라톤. 연말 시즌 대표 대회. (날짜는 소스 간 12/1~12/6 차이 있어 공식 재확인 권장.)',
  },
];
