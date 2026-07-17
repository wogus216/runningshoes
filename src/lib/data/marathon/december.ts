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
  {
    id: 'geumsan-goldrun-marathon-2026',
    name: '2026 전국마라톤협회 금산 골드런 마라톤',
    date: '2026-12-05',
    month: '12월',
    location: '충남 금산군',
    region: '충남',
    distances: ['10K', '5K'],
    status: '접수중',
    isMajor: false,
    description:
      '12월 초 충남 금산에서 열리는 대회로 12km·5km 종목을 운영합니다. 참가비 등 세부 요강은 공식 발표 확인이 필요합니다.',
    raceInfo: {
      startTime: '09:00',
    },
  },
];
