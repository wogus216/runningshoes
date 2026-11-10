import type { MarathonEvent } from '@/types/marathon';

/**
 * 2월 대회 — 현재는 일본 메이저 2개다.
 *
 * 두 대회 모두 한국 거주자는 일본 국내 러너와 신청 창구·요금·선발 방식이 다르다.
 * 신청은 런넷(RUNNET)이 아니라 JTB스포츠스테이션이고, 여기 적힌 접수 기간도
 * 해외 러너 기준이다(일본 국내 마감은 이보다 이르거나 다르다).
 *
 * `raceInfo.entryFees`를 비워둔 이유: 상세 페이지의 JSON-LD가 `priceCurrency: 'KRW'`를
 * 하드코딩해서, 엔화·달러 참가비를 넣으면 구조화 데이터가 원화로 잘못 나간다.
 * 참가비는 description에 통화 단위와 함께 적는다.
 */
export const februaryEvents: MarathonEvent[] = [
  {
    id: "kyoto-marathon-2027",
    name: "교토 마라톤 2027",
    date: "2027-02-21",
    month: "2월",
    location: "타케비시 스타디움 교토(니시쿄고쿠) 출발 → 헤이안진구 앞 도착",
    region: "교토",
    distances: [
      "풀코스"
    ],
    status: "마감",
    isMajor: true,
    website: "https://kyoto-marathon.com/",
    description: "2027년 2월 21일 09시 출발. 해외 거주자 3,000명 선착순 모집은 2026년 9월 30일 17시 JST에 종료됐다. 해외 참가비 35,000엔. 2월 19·20일 미야코메세에서 신분증 원본을 제시해 본인 수령하며 당일·대리 수령은 불가.",
    courseInfo: {
      "certification": "AIMS",
      "courseDescription": "타케비시 스타디움 교토에서 헤이안진구 앞까지 세계문화유산 7곳을 지나는 코스. 공식 요강은 비포장 강변이 포함돼 비가 오면 달리기 어려울 수 있다고 안내한다."
    },
    raceInfo: {
      "timeLimits": [
        {
          "distance": "풀코스",
          "hours": 6,
          "minutes": 0
        }
      ],
      "startTime": "09:00"
    },
    logistics: {
      "bagStorage": true
    },
    raceKit: {
      "items": [
        "참가상 타월(대회 당일 출전자 전원, 러너 접수처가 아니라 당일 지급)",
        "완주 메달·메달 리본(완주자)",
        "오리지널 후로시키(보자기) — 러너 접수를 마친 해외 러너 한정"
      ],
      "pending": "선택 구매 기념품(신청 때만 주문 가능)으로 오리지널 넥게이터 2,500엔·오리지널 마이컵 1,200엔이 있었습니다. 배번호 등은 대회 전 이틀(2027년 2월 19일 13:30~20:00, 20일 10:30~19:00, 일본시간=한국시간 동일) 교토 미야코메세에서 본인이 신분증 원본을 들고 직접 받아야 하며, 대회 당일 수령과 대리 수령은 안 됩니다.",
      "verifiedAt": "2026-11-10"
    },
    registrationStart: "2026-07-16",
    registrationEnd: "2026-09-30",
    lastVerified: "2026-11-10",
    registrationNote: "11/10 공식 영문 접수 마감 확인. 09:00~15:00 신호총 기준 6시간이며 중간 관문이 있다. 신청 후 개인 사정 변경·취소·환불 불가와 대회 전체 취소 규정은 구분해 확인.",
  },
  {
    id: "osaka-marathon-2027",
    name: "오사카 마라톤 2027",
    date: "2027-02-28",
    month: "2월",
    location: "오사카부청 앞 출발 → 오사카성 공원 도착",
    region: "오사카",
    distances: [
      "풀코스"
    ],
    status: "마감",
    isMajor: true,
    website: "https://jtbsports.jp/en/detail/nays3",
    registrationNote: "해외 JTB 일반 신청은 8월 28일 17시 JST 마감. 결과는 9월 28일 대표자에게 발송, 당첨자 납부는 10월 19일 23:59 종료. 그룹은 대표자가 결과를 전달·납부한다. 2027년 2월 26일 11:00~19:00·27일 10:00~18:00 INTEX 6호관 본인 수령, 당일·대리 수령 불가(11/10 JTB 공개 안내 대조).",
    description: "2월 28일 09:15 첫 웨이브, 16:15 종료. 해외 개인 US$145·그룹 1인 US$150에 최소 자선기부 US$10과 해외 사무수수료 11%가 추가된다. 개인 최소 구성 (145+10)×1.11=US$172.05는 산술 예시이며 선택 상품·추가 기부·카드 수수료로 실제 부담은 달라진다. 일반 신청·납부 기한은 종료됐다.",
    courseInfo: {
      "courseDescription": "오사카부청 앞에서 출발해 오사카성 공원에서 끝나는 풀마라톤 코스. 본인 웨이브와 관문은 최종 참가자 안내에서 확인한다."
    },
    raceInfo: {
      "timeLimits": [
        {
          "distance": "풀코스",
          "hours": 7,
          "minutes": 0
        }
      ],
      "startTime": "09:15"
    },
    registrationStart: "2026-07-28",
    registrationEnd: "2026-08-28",
    lastVerified: "2026-11-10",
  },
];
