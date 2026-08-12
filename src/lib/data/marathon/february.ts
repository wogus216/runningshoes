import type { MarathonEvent } from '@/types/marathon';

/**
 * 2월 대회 — 현재는 일본 메이저 2개다.
 *
 * 두 대회 모두 **한국 거주자는 일본 국내 러너와 신청 창구·요금·선발 방식이 다르다.**
 * 신청은 런넷(RUNNET)이 아니라 JTB스포츠스테이션이고, 여기 적힌 접수 기간도
 * 해외 러너 기준이다(일본 국내 마감은 이보다 이르거나 다르다).
 *
 * `raceInfo.entryFees`를 비워둔 이유: 상세 페이지의 JSON-LD가 `priceCurrency: 'KRW'`를
 * 하드코딩해서, 엔화·달러 참가비를 넣으면 구조화 데이터가 원화로 잘못 나간다.
 * 참가비는 description에 통화 단위와 함께 적는다.
 */
export const februaryEvents: MarathonEvent[] = [
  {
    id: 'kyoto-marathon-2027',
    name: '교토 마라톤 2027',
    date: '2027-02-21',
    month: '2월',
    location: '타케비시 스타디움 교토(니시쿄고쿠) 출발 → 헤이안진구 앞 도착',
    region: '교토',
    distances: ['풀코스'],
    status: '접수중',
    isMajor: true,
    website: 'https://kyoto-marathon.com/',
    description:
      '세계문화유산 7곳을 지나는 코스. 한국 거주자는 해외 러너 쿼터(3,000명) 대상이며 선착순이라 신청하면 확정된다. 참가비 35,000엔, 신청은 JTB스포츠스테이션. 접수 후 취소·환불은 불가.',
    courseInfo: {
      terrain: '혼합',
      difficulty: '중급',
      elevationGain: 75,
      certification: 'AIMS',
      courseDescription:
        '아라시야마·도게츠교를 지나 가쓰라가와 강변을 달리고 사가노·히로사와노이케를 통과한다. 전반 아라시야마~금각사 구간에 잔잔한 오르내림이 이어지고, 30km 이후(특히 38km 부근 이마데가와도리 오르막)가 최대 난소로 꼽힌다. 코스에 비포장 강변 구간이 포함돼 우천 시 주행이 어려울 수 있다.',
    },
    raceInfo: {
      timeLimits: [{ distance: '풀코스', hours: 6, minutes: 0 }],
      expectedParticipants: 16000,
      startTime: '09:00',
    },
    logistics: {
      bagStorage: true,
    },
    registrationStart: '2026-07-16',
    registrationEnd: '2026-09-30',
    lastVerified: '2026-08-12',
  },
  {
    id: 'osaka-marathon-2027',
    name: '오사카 마라톤 2027',
    date: '2027-02-28',
    month: '2월',
    location: '오사카부청 앞 출발 → 오사카성 공원 도착',
    region: '오사카',
    distances: ['풀코스'],
    status: '접수중',
    isMajor: true,
    website: 'https://www.osaka-marathon.com/',
    description:
      '제15회 대회. 평탄해 기록을 노리기 좋다는 평이 많은 도심 코스다. 한국 거주자는 JTB스포츠스테이션에서 신청하며, 참가료 145 USD에 필수 자선모금 10 USD와 수수료 11%가 붙어 실제 결제액은 약 172 USD. 정원 초과 시 추첨이고 결과는 2026년 9월 28일 발표.',
    courseInfo: {
      terrain: '평지',
      difficulty: '중급',
      certification: 'AIMS',
      courseDescription:
        '오사카의 메인 스트리트를 관통한다. 미도스지, 난바·도톤보리, 교세라돔 오사카, 나카노시마를 지나 오사카성 공원에서 끝난다.',
    },
    raceInfo: {
      timeLimits: [{ distance: '풀코스', hours: 7, minutes: 0 }],
      expectedParticipants: 28420,
    },
    registrationStart: '2026-07-28',
    registrationEnd: '2026-08-28',
    lastVerified: '2026-08-12',
  },
];
