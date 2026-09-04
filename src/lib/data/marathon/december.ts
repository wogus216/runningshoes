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
    status: '마감',
    isMajor: true,
    website: 'https://busanmarathon.com/',
    registrationNote:
      '8/24(월) 10시 오픈 후 선착순 조기 마감 — 공식 홈이 "선착순 조기마감" 안내 중(2026-08-27 확인)',
    description:
      '부산시·KNN·대한육상연맹이 주최하는 연말 대표 대회로, 구 부산국제마라톤이 부산브릿지마라톤으로 명칭을 바꿔 여는 첫 대회입니다. 광안대교·부산항대교·남항대교 3개 해상 교량을 모두 통과하는 국내 최초 트리플 브릿지 풀코스가 핵심이고, 종목은 풀코스와 10km 두 가지이며 하프는 없습니다. 정원 12,000명(풀 5,000·10km 7,000) 선착순으로 8월 24일(월) 오전 10시 접수를 열었고, **선착순 조기 마감됐습니다**(공식 홈 안내, 2026-08-27 확인). 풀코스는 만 18세 이상 + 공식 기록증 기준 4시간 29분 59초 이내 완주 기록이 있어야 신청할 수 있었습니다 — 인정 범위는 2023년 10월 1일~2026년 10월 8일에 발급된 **풀코스 기록증뿐**이라 하프·10km 기록으로는 대체되지 않고, YES24 참가신청서로 제출하지 않으면 접수·결제가 자동 취소됩니다(공식 공지 2026-08-25). 제한시간은 풀 5시간·10km 1시간 30분(4시간 30분은 접수 자격 기준이며 당일 제한시간이 아닙니다). 풀코스는 07:30 출발.',
    courseInfo: {
      terrain: '혼합',
      difficulty: '중급',
      courseDescription:
        '풀코스는 벡스코 야외광장에서 출발해 요트경기장·동백섬 사거리를 지나 올림픽교차로에서 광안대교 상판으로 올라섭니다. 용당램프로 내려와 대연고가교 아래를 지나 동명오거리에서 부산항대교로, 영도를 건너 남항대교를 통과한 뒤 충무동사거리에서 반환합니다. 돌아올 때 남항대교·부산항대교·광안대교를 한 번씩 더 밟고 벡스코로 복귀하는 국내 최초 트리플 브릿지 코스입니다. 급수는 공식이 구간별로 밝혀뒀습니다 — 출발 직후와 충무동 반환점이 의무 급수, 광안대교 구간에 스포츠 음료, 부산항대교 구간에 에너지젤, 도심 연계 구간에 스폰지가 배치됩니다. 교량 진출입 경사가 반복돼 평지 PB 코스보다는 기복 대응이 필요합니다. 10K는 벡스코 집결 후 광안대교 상판에서 출발해 광안리램프·49호광장·삼익비치 산책로·광안리해수욕장·수영교를 거쳐 벡스코 리더스빌딩 앞에서 끝납니다(2026-08-31 공식 코스 페이지 확인 — 8월 하순까지 미게시였던 급수·출발지가 공개됐습니다).',
      gpx: {
        file: '/data/gpx/busan-international-marathon-2026.gpx',
        source: 'reconstructed',
        verifiedAt: '2026-08-31',
        sourceNote:
          '공식 코스안내의 "구간별 상세 레이아웃(Milestones)"이 글로 밝힌 경유지를 OSM 도로망 위에서 새로 이었다',
        sourceUrl: 'https://busanmarathon.com/course/course_full?gubun=full',
        caveat:
          '공식이 밝힌 것은 경유지 이름과 순서까지이고, 지점 사이를 어느 차선으로 통제하는지는 공개되지 않았습니다. 이 경로는 보행 도로망 기준으로 이어 실제 통제 차도와 선이 다를 수 있습니다 — 특히 교량 진출입 램프에서 갈립니다.',
      },
    },
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
    lastVerified: '2026-08-27',
  },
  {
    id: 'geumsan-goldrun-marathon-2026',
    name: '2026 전국마라톤협회 금산 골드런 마라톤 (개최 취소)',
    date: '2026-12-05',
    month: '12월',
    location: '금산세계인삼엑스포주차장 (충남 금산군)',
    region: '충남',
    distances: ['12K', '5K'],
    status: '마감',
    isMajor: false,
    website: 'https://mara1080.com/event/df4b4e7d-4fbc-4843-858c-f15c032e92cb',
    description:
      '⚠️ 개최 취소된 대회입니다(공식 공지 2026-08-03). 같은 날짜(12/5~6)에 "금산 국제 마라톤"이 열리게 되면서 취소됐고, 골드런 신청자에게는 후속 대회 우선 참가권이 부여됩니다. 참가비 환불은 공식 페이지 신청조회에서 가능하며, 기념품 마라톤화 수령자는 별도 환불 절차를 따릅니다. 후속 대회는 9월 1일 접수 개시 예정입니다.',
    lastVerified: '2026-08-27',
    raceInfo: {
      entryFees: [
        { distance: '12K', fee: 45000 },
        { distance: '5K', fee: 30000 },
      ],
      startTime: '09:00',
    },
  },
];
