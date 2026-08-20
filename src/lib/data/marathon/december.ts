import type { MarathonEvent } from '@/types/marathon';

export const decemberEvents: MarathonEvent[] = [
  {
    id: 'busan-international-marathon-2026',
    name: '부산브릿지마라톤 2026',
    date: '2026-12-06',
    month: '12월',
    location: '벡스코 제1전시장 (부산 해운대구)',
    region: '부산',
    distances: ['풀코스', '10K'],
    status: '접수예정',
    isMajor: true,
    website: 'https://busanmarathon.com/',
    description:
      '부산시·KNN·대한육상연맹이 주최하는 연말 대표 대회로, 구 부산국제마라톤이 부산브릿지마라톤으로 명칭을 바꿔 여는 첫 대회입니다. 광안대교·부산항대교·남항대교 3개 해상 교량을 모두 통과하는 국내 최초 트리플 브릿지 풀코스가 핵심이고, 종목은 풀코스와 10km 두 가지이며 하프는 없습니다. 정원 12,000명(풀 5,000·10km 7,000) 선착순이고 접수는 8월 24일(월) 오전 10시 시작(공식 안내 채널 YES24 티켓, 마감일 없이 정원 소진 시 종료). 풀코스는 만 18세 이상 + 다른 대회 공식기록증 기준 4시간 30분 이내 완주 기록이 있어야 신청할 수 있습니다. 제한시간은 풀 5시간·10km 1시간 30분(4시간 30분은 접수 자격 기준이며 당일 제한시간이 아닙니다). 풀코스는 07:30 출발.',
    raceInfo: {
      entryFees: [
        { distance: '풀코스', fee: 80000 },
        { distance: '10K', fee: 60000 },
      ],
      timeLimits: [
        { distance: '풀코스', hours: 5, minutes: 0 },
        { distance: '10K', hours: 1, minutes: 30 },
      ],
      startTime: '07:30',
    },
    registrationStart: '2026-08-24',
    lastVerified: '2026-08-20',
  },
  {
    id: 'geumsan-goldrun-marathon-2026',
    name: '2026 전국마라톤협회 금산 골드런 마라톤',
    date: '2026-12-05',
    month: '12월',
    location: '금산세계인삼엑스포주차장 (충남 금산군)',
    region: '충남',
    distances: ['12K', '5K'],
    status: '접수중',
    isMajor: false,
    website: 'https://mara1080.com/event/df4b4e7d-4fbc-4843-858c-f15c032e92cb',
    description:
      '12월 초 충남 금산에서 열리는 대회로 12km·5km 두 종목을 운영합니다(10km 종목은 없습니다). 전국마라톤협회 주최로 접수는 7월 2일부터 9월 1일까지이며, 전 종목 기록칩을 사용합니다. 제한시간은 12km 2시간·5km 1시간. 12km 클럽대항전도 운영합니다.',
    raceInfo: {
      entryFees: [
        { distance: '12K', fee: 45000 },
        { distance: '5K', fee: 30000 },
      ],
      startTime: '09:00',
    },
  },
];
