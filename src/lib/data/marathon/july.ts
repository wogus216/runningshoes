import type { MarathonEvent } from '@/types/marathon';

export const julyEvents: MarathonEvent[] = [
  {
    id: "pohang-iron-run-2026",
    name: "2026 포항 아이언런 (IRON RUN)",
    date: "2026-07-04",
    month: "7월",
    location: "포항 영일대해수욕장 장미광장",
    region: "경북",
    distances: [],
    status: "대회종료",
    isMajor: true,
    website: "https://ironrun.kr",
    description: "7월 4일 영일대해수욕장 장미광장 일정은 종료됐다. 실제 종목은 3.8km·7.87km·15.38km로 일반 5K·10K·하프와 다르다. 공식 요강은 철의 도시와 노조 38주년의 상징, 참가비 25,000원·35,000원·40,000원과 계획 인원 5,000명을 안내했다.",
    courseInfo: {
      "certification": "없음",
      "courseDescription": "3.8km·7.87km·15.38km의 비표준 종목이다. 영일대 행사장이라는 이유로 큰 오르막이 없거나 초보자에게 적합하다고 단정하지 않는다. 기존 제한시간 세부는 이번 요강 범위로 새로 인증하지 않았다."
    },
    raceInfo: {
      "entryFees": [
        {
          "distance": "3.8km",
          "fee": 25000
        },
        {
          "distance": "7.87km",
          "fee": 35000
        },
        {
          "distance": "15.38km",
          "fee": 40000
        }
      ],
      "timeLimits": [
        {
          "distance": "15.38km",
          "hours": 2,
          "minutes": 30
        },
        {
          "distance": "7.87km",
          "hours": 1,
          "minutes": 40
        },
        {
          "distance": "3.8km",
          "hours": 1,
          "minutes": 0
        }
      ],
      "expectedParticipants": 5000,
      "startTime": "08:00"
    },
    registrationNote: "접수 예정 범위는 4월 1일 10시~5월 31일 18시였고 신청 뒤 5일 내 미입금 때 취소될 수 있었다. 현금영수증·카드 결제는 불가, 지출 증빙용 참가비 납부 확인증을 별도로 안내한다. 현재 모집·개인 발급 완료는 미확인이다.",
    postRaceNote: "공식 기록 공지는 월드칩 기록 확인과 해당 사이트 INFO 문의 경로를 안내한다. 7월 8일 현장 사진 다운로드는 별도 공지다. 개인 기록·사진 유무는 미조회이며 일반 10km나 하프 공인 기록과 바꾸어 비교하지 않는다. https://ironrun.kr/bbs/board.php?bo_table=notice&wr_id=14 및 https://ironrun.kr/bbs/board.php?bo_table=notice&wr_id=17",
    lastVerified: "2026-11-10",
  },
];
