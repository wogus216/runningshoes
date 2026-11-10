import type { MarathonEvent } from '@/types/marathon';

export const octoberEvents: MarathonEvent[] = [
  {
    id: "heart-run-2026",
    name: "2026 하트런 (하트-하트재단 시각장애아동 기부런)",
    date: "2026-10-10",
    month: "10월",
    location: "올림픽공원 피크닉장 (서울 송파구)",
    region: "서울",
    distances: [
      "10K",
      "5K"
    ],
    status: "대회종료",
    isMajor: false,
    website: "https://heartrun.co.kr/",
    registrationStart: "2026-08-24",
    registrationEnd: "2026-09-25",
    registrationNote: "접수가 마감됐습니다. 1차 접수는 8월 24일(월) 10시~9월 17일(목) 23:59, 2차 접수는 9월 21일(월) 13시~9월 25일(금) 23:59였으며 공식 공지 「참가 신청 안내」에서 최종 마감 시각을 재확인했습니다(2026-09-27). 취소·환불과 참가 정보 변경은 9월 28일(월) 23:59까지 가능합니다. 종목별 선착순 1,000명, ID당 1매. 버추얼런(4만원·500명·10/1~31 인증)은 9월 3일 확인 시 참가신청 상품이 품절 표시였습니다.",
    lastVerified: "2026-11-10",
    description: "10월 10일 올림픽공원 피크닉장 오프라인 10km·5km와 별도 버추얼런을 안내한 하트-하트재단 기부런. 공식은 오프라인 기록조회에서 스마트칩으로 연결하며 배번호 칩 넷타임 계측을 설명한다. 버추얼 인증은 홈의 10월 10~31일 안내를 확인한다. 오프라인 기록 메뉴 개설이 버추얼 인증·전원 기념품 배송 완료를 뜻하지 않는다.",
    courseInfo: {
      "courseDescription": "피크닉장(출발) → 서울올림픽기념관 → 몽촌호 인근 평화의 광장 → 88마당 → 서울역사편찬원 → 서울백제어린이박물관 → 피크닉장(도착). 5km는 이 순환을 1회, 10km는 같은 코스를 2회 반복합니다. 공식은 코스를 이미지로만 공개했고 고도·급수대 정보는 없습니다. 운영 상황에 따라 코스가 변동될 수 있다고 고지했습니다.",
      "isLoopCourse": true
    },
    raceInfo: {
      "entryFees": [
        {
          "distance": "10K",
          "fee": 50000
        },
        {
          "distance": "5K",
          "fee": 50000
        }
      ],
      "expectedParticipants": 2000,
      "startTime": "10:20"
    },
    raceKit: {
      "items": [
        "티셔츠(85~110 6사이즈)",
        "배번호·기록칩",
        "완주 메달",
        "스티커",
        "클라뷰 비건 징크 선크림",
        "우르오스 페이스워시",
        "동아오츠카 음료 2종",
        "퍼니트 링포유",
        "비소리 온열안대",
        "크라운제과 롱스·마이쮸",
        "해태제과 구운감자"
      ],
      "pending": "완주 기념품에 \"추가 상품(미정)\"이 남아 있고, 럭키드로우(볼티움 에어코어 3·매트릭스러닝 선글라스 40·스포벨 러닝벨트 20·컴포트 러닝양말 30·에버힐 아이싱젤 20)도 주최 측 사정에 따라 변동될 수 있다고 고지. 사전 배송 없이 대회 당일 9시부터 현장 수령이며 당일 참가자에게만 지급.",
      "verifiedAt": "2026-09-03"
    },
    logistics: {
      "parking": "공식 안내: \"주차 장소가 협소하오니 가급적 대중교통을 이용해 주시기 바랍니다\"",
      "bagStorage": true
    },
    postRaceNote: "공식 오프라인 기록 안내 https://heartrun.co.kr/page/s0301.html . 기록 이의 신청은 발표 후 7일 이내라는 공지이며 최초 발표일을 이번에 확인하지 않아 달력 마감일·현재 접수 가능 여부를 단정하지 않는다. 참가비는 기념품 제공으로 기부금영수증 미발급이라는 FAQ다. 문의 070-4350-5663·평일 10:00~17:00.",
  },
  {
    id: "harry-potter-run-korea-2026",
    name: "해리포터 런 2026 (Harry Potter Run in Korea)",
    date: "2026-10-03",
    month: "10월",
    location: "부산항 제1부두 (부산 동구)",
    region: "부산",
    distances: [],
    status: "대회종료",
    isMajor: false,
    website: "https://www.instagram.com/stanz_official_kr/",
    description: "10월 3일 일정의 해리포터 테마 비경쟁 행사. 판매처 Trip.com의 명시적 변경 공지는 출발지를 부산항 제1부두, 코스를 3.3km로 안내한다. 같은 페이지 아래 남은 구 5km 요강과 구분해야 한다. 오전 07:30 입장·09:00 순차 출발, 오후 12:30 입장·14:00 순차 출발 계획이며 구매한 회차로만 참가하는 조건이었다. 계획 정원 6,000명과 실제 참가자 수는 다르다.",
    courseInfo: {
      "courseDescription": "변경 공지의 3.3km 경로는 부산항 제1부두→마리나 브리지→오페라 브리지→보행교3→보행교2→마리나 브리지B→제1부두 도착이다. 기존 북항친수공원 5km·4km반환점 지도를 최종 경로로 사용하지 않는다. 실제 고도·전원 GPS 결과는 이번 확인 범위 밖이다."
    },
    raceInfo: {
      "expectedParticipants": 6000,
      "startTime": "09:00 / 14:00",
      "timeLimits": [
        {
          "distance": "3.3km 변경 코스",
          "hours": 1,
          "minutes": 30
        }
      ]
    },
    raceKit: {
      "items": [
        "티셔츠",
        "스포츠타올",
        "스트링백",
        "배번호",
        "안내문",
        "KIT 박스"
      ],
      "pending": "공개 글로벌 안내는 현장 키트 수령, 타올·배번호 기숙사 랜덤 배정으로 설명한다. 기숙사별 동일 확률·실제 전원 물품 지급·국내 주문 배송은 별도 확인 대상이다.",
      "verifiedAt": "2026-11-10"
    },
    registrationStart: "2026-09-04",
    registrationEnd: "2026-09-18",
    registrationNote: "10월 3일 일정이 지난 행사다. Trip.com 공개 안내의 글로벌 판매 기간은 9월 7~18일이었다. 국내 카카오 판매가격·정확한 매진 시각·취소표 재고는 이번에 재검증하지 않았으며 현재 추가 모집으로 안내하지 않는다.",
    lastVerified: "2026-11-10",
    postRaceNote: "Trip.com 변경 공지의 부산항 제1부두·3.3km가 구 5km 안내와 함께 남아 있어 최종 변경을 구분한다. 배번호 착용 미완주자도 메달·협찬 물품 수령 대상으로 안내했으며 실제 개인 지급 완료와 다르다. 글로벌 참가자의 키트 현장 수령 조건을 국내 배송에 일괄 적용하지 않는다. https://www.trip.com/events/15094893-busan-sports--fitness-collection/",
  },
  {
    id: "geumcheon-health-run-2026",
    name: "제22회 금천구청장배 건강달리기대회 (수육런)",
    date: "2026-10-11",
    month: "10월",
    location: "안양천 다목적광장 (서울 금천구)",
    region: "서울",
    distances: [
      "10K",
      "5K"
    ],
    status: "대회종료",
    isMajor: false,
    website: "http://www.gcrun.kr/",
    description: "제22회 금천구청장배 건강달리기대회의 10월 11일 일정은 지났다. 공식 요강은 5km·10km 각30,000원, 두 종목 기록칩·웹기록증과 완주 메달을 안내한다. 구민 300명·일반 500명 모집과 별개로 9월 29일 최종 공지는 구민·일반 구분 없이 종목별 이름 확인으로 배번·기념품을 수령하도록 했다.",
    raceInfo: {
      "entryFees": [
        {
          "distance": "10K",
          "fee": 30000
        },
        {
          "distance": "5K",
          "fee": 30000
        }
      ],
      "expectedParticipants": 800
    },
    registrationStart: "2026-09-07",
    registrationEnd: "2026-09-07",
    registrationNote: "9월 1일 구민·7일 일반 마감 공지는 각각10시04분 경으로 알렸다. 공지 게시 시각은10:22·10:11로 별도이며 정확한 서버 마감 초를 확인한 것은 아니다.9월 6일 환불 재안내는 9월 23일14시 이후 취소·환불 불가로, 예전18시 설명과 다르다.",
    lastVerified: "2026-11-10",
    postRaceNote: "최종 수령 안내는 9월 29일 공지의 종목별 이름 확인 기준이다.5K·10K 모두 기록칩·웹기록증 안내이므로 과거 다른 회차의 비계측 정보를 섞지 않는다. 개인 기록·물품·환불 완료는 미조회. http://www.gcrun.kr/s5p1/424164 및 http://www.gcrun.kr/s5p1/420876",
  },
  {
    id: "nb-run-your-way-seoul-10k-2026",
    name: "2026 뉴발란스 런유어웨이 서울 10K (Run your way Seoul 10K Race)",
    date: "2026-10-04",
    month: "10월",
    location: "여의도공원 문화의마당 (서울 영등포구)",
    region: "서울",
    distances: [
      "10K"
    ],
    status: "대회종료",
    isMajor: false,
    website: "https://www.nbkorea.com/raffle/collection.action?rIdx=134",
    registrationEnd: "2026-08-21",
    registrationNote: "접수 종료 — 온라인 래플 응모는 8월 2일 17시, 당첨자 결제는 8월 7일 17시에 끝났고 오프라인 패키지 매장 판매도 8월 20~21일로 종료됐습니다(공식 래플 페이지 2026-08-31 확인)",
    lastVerified: "2026-11-10",
    description: "10월 4일 여의도공원 일정의 10K대회. 공식 참가자 PDF는 넷타임 계측과 마지막 그룹 출발 후 1시간20분 제한을 구분한다. 그룹 출발07:30~07:45·최종 출발07:50, 지정 보관봉투와 제공 기념 티셔츠/싱글렛 착용 조건이었다. 실제 개인 기록과 과거 래플 재고는 이번 확인 범위 밖이다.",
    courseInfo: {
      "courseDescription": "공식 참가자 PDF는 여의대로→서강대교 왕복→광흥창역 인근 서강로 반환→여의공원로 도착을 안내하며 운영상 변경 가능 조건이 있다. 정확한 고도·난이도·개인PB는 이 약도로 보장하지 않는다."
    },
    raceInfo: {
      "entryFees": [
        {
          "distance": "10K",
          "fee": 80000
        }
      ],
      "timeLimits": [
        {
          "distance": "10K",
          "hours": 1,
          "minutes": 20
        }
      ],
      "startTime": "07:30"
    },
    postRaceNote: "PDF일반 보관소 설명은06:00~11:00이지만 상세 시간표는06:00~07:30·08:00~11:00으로 나뉜다. 연속 접수·수령으로 단정하지 않는다. 본인 그룹·배번호 태그·매트 통과 조건과 실제 기록을 대조한다. 공식 PDF https://ugc.production.linktr.ee/9fa64497-8803-4fda-9956-19e616c04735_2026-10K-SNS-B.pdf",
  },
  {
    id: "lotteria-baebulrun-2026",
    name: "2026 리아는 배불런 (롯데리아 러닝 페스티벌)",
    date: "2026-10-04",
    month: "10월",
    location: "서울어린이대공원 (서울 광진구)",
    region: "서울",
    distances: [
      "5K"
    ],
    status: "대회종료",
    isMajor: false,
    website: "https://www.lotteeatz.com/event/main/selectEvent/18060",
    registrationStart: "2026-09-01",
    registrationEnd: "2026-09-03",
    registrationNote: "접수 마감 — 2026-09-04 공식 페이지에 \"구매 기간 종료\" 표시 확인",
    lastVerified: "2026-11-10",
    description: "10월 4일 서울어린이대공원 내부 5km 일정의 리아는배불런. 공식 모집계획2, 000명·만19세 이상 조건이었다. 정상가50, 000원과 지정 기간 롯데잇츠 버거 구매 고객45, 000원 할인가를 구분해야 한다. 참가권 구매 외에 실제 참가정보·성향·출발 그룹 선택까지 신청 절차를 완료해야 확정된다고 안내했다. 공식 배번호 설명에 기록칩 내장 문구가 있으며 실제 최종 기록증 제공·개인 계측은 이번에 확인하지 않았다.",
    raceInfo: {
      "entryFees": [
        {
          "distance": "5K",
          "fee": 50000
        }
      ],
      "expectedParticipants": 2000
    },
    postRaceNote: "신청 내역·실제 참가정보·받은 물품을 대조한다. 배번호 기록칩 안내와 실제 기록증 발급 완료는 별개다. 럭키드로우 경품은 기본 완주 물품과 다른 추첨 조건이며 전원 고가 경품 지급을 뜻하지 않는다. 의류는 두 핏·구매 후 사이즈 교환 불가 고지였고 실제 오배송·불량 처리는 별도 문의 대상이다. https://www.lotteeatz.com/event/main/selectEvent/18060",
  },
  {
    id: "siheung-half-marathon-2026",
    name: "2026 시흥시 전국하프마라톤대회 (제12회)",
    date: "2026-10-05",
    month: "10월",
    location: "한국공학대학교 제2캠퍼스 (경기 시흥시 거북섬)",
    region: "경기",
    distances: [
      "하프",
      "10K",
      "5K"
    ],
    status: "대회종료",
    registrationStart: "2026-07-22",
    registrationNote: "당시 공식 요강은 7월 22일 14시부터 계획 5,000명 모집, 가상계좌 발급 뒤 24시간 내 결제 완료를 안내했다. 현재 신청은 마감이며 차기 모집과는 별개다.",
    isMajor: false,
    website: "https://www.shmarathon.kr/shmarathon/",
    description: "10월 5일 시흥시 전국하프마라톤 일정은 지났다. 공식 10월 6일 후속 공지는 5km 기록칩·공식 기록 미제공과 샤라웃 사진 원본 유료 구매를 안내한다. 10월 12일은 메달 각인 작업 시작과 순차 배송 안내로 전원 배송 완료 보고가 아니다.",
    courseInfo: {
      "courseDescription": "공식 요강은 한국공학대학교 제2캠퍼스에서 진행하는 하프·10km·5km를 안내한다. 기존 재구성 GPX의 반환점·고도는 이번 후속 공지 확인으로 새로 인증한 것이 아니다.",
      "gpx": {
        "file": "/data/gpx/siheung-half-marathon-2026.gpx",
        "source": "reconstructed",
        "verifiedAt": "2026-08-24",
        "sourceNote": "시흥시 공식 대회 안내의 코스 서술 — '한국공학대학교 제2캠퍼스 출발 → 시화방조제 왕복'. 출발지와 방조제 위 도로만 취해 OSM 보행 도로망 위에서 새로 이었다.",
        "sourceUrl": "https://www.shmarathon.kr/shmarathon/",
        "caveat": "공식은 반환점을 이름으로 밝히지 않았습니다. 코스맵이 10km 급수대를 '반환점 부근'으로 표기한 점과 하프가 21.1km 왕복이라는 조건에서, 분기 없는 방조제 외길 위 편도 10.55km 지점으로 잡았습니다. 실제 반환 지점은 이와 다를 수 있습니다."
      }
    },
    raceInfo: {
      "entryFees": [
        {
          "distance": "하프",
          "fee": 35000
        },
        {
          "distance": "10K",
          "fee": 35000
        },
        {
          "distance": "5K",
          "fee": 20000
        }
      ],
      "aidStations": 5,
      "aidInterval": "약 2.5~3.5km마다",
      "expectedParticipants": 5000,
      "startTime": "09:00"
    },
    raceKit: {
      "items": [
        "배번호",
        "기록칩(5km 제외)",
        "완주메달",
        "기념품",
        "간식",
        "안내책자"
      ],
      "byDistance": [
        {
          "distance": "5K",
          "item": "햇토미 쌀 3kg"
        },
        {
          "distance": "하프·10K",
          "item": "공식 기록 제공 대상. 5K는 기록칩·공식 기록 미제공"
        }
      ],
      "pending": "하프·10km 기념품은 공식 표기가 \"미정(확정 시 공지)\"입니다.",
      "verifiedAt": "2026-11-10"
    },
    logistics: {
      "publicTransport": "오이도역·시흥시청 인근에서 무료 셔틀버스 운행 예정",
      "shuttle": "오이도역, 시흥시청 인근 (운행 예정)",
      "bagStorage": true
    },
    lastVerified: "2026-11-10",
    postRaceNote: "기록 문의는 010-5256-7034 문자만 가능하며 5km는 공식 기록 미제공이다. 사진 원본은 샤라웃에서 유료 구매 안내다. 메달 각인·배송은 개별 주소 확인과 실제 배송 내역을 구분해야 한다. https://www.shmarathon.kr/shmarathon/board/notice/?action=view&f_idx=43257&page=1 및 https://www.shmarathon.kr/shmarathon/board/notice/?action=view&f_idx=43260&page=1",
  },
  {
    id: 'transjeju-utmb-2026',
    name: '2026 트랜스제주 by UTMB',
    date: '2026-10-02',
    month: '10월',
    location: '제주월드컵경기장·가시리 일대 (제주)',
    region: '제주',
    distances: ['울트라', '트레일'],
    status: '대회종료',
    isMajor: true,
    website: 'https://transjeju.utmb.world/',
    registrationStart: '2026-03-18',
    registrationEnd: '2026-07-31',
    lastVerified: '2026-08-31',
    registrationNote:
      '접수 종료(7월 31일) — 배번은 대회 전 10월 1일·2일 10시~18시에 제주월드컵경기장에서 배부하는 일정이었습니다(엑스포 동시 진행). 100M·100K·60K 참가자 대상 레이스 브리핑은 10월 2일 19시 30분으로 공지됐습니다',
    description:
      'UTMB 월드시리즈 아시아 공식 대회. 10월 2~4일 제주 일정으로 100M(148km)·100K(104km)·60K·20K 4개 종목이 편성됐습니다. 접수 마감 7월 31일, 참가비는 USD 기준 100M $280·100K $220·60K $160·20K $90. 60K 이상은 UTMB Index 자격이 필요했지만 20K는 자격 제한 없이 참가할 수 있어 입문 종목으로 적합했습니다. 시상식은 10월 4일 10시에 60K·100K·100M을 묶어 제주월드컵경기장에서, 20K만 10월 3일 13시에 따로 하는 일정이었습니다.',
    courseInfo: {
      terrain: '산악',
      difficulty: '상급',
      elevationGain: 5000,
      courseDescription:
        '제주 오름·중산간 트레일입니다. 100M 148km/누적 5,000m, 100K 104km/4,000m, 60K 60km/1,400m이고 장거리 두 종목은 한라산 정상을 밟습니다. 먼저 확인할 것은 종목마다 출발지가 다르다는 점입니다 — 100M과 100K는 제주월드컵경기장에서 출발하지만 60K와 20K는 서귀포 가시리(조랑말체험공원)에서 출발하므로 셔틀버스를 타야 합니다(60K는 05:30~06:00, 20K는 07:30~08:00 출발). 출발 시각과 제한시간도 제각각입니다. 100M은 10월 2일 21시에 출발해 37시간, 100K는 10월 3일 05시에 출발해 29시간, 60K는 같은 날 08시에 출발해 15시간, 20K는 10시에 출발해 4시간입니다. 골인은 20K를 뺀 세 종목 모두 제주월드컵경기장입니다. UTMB 월드시리즈라 종목별 필수 장비(트레일화·배낭·규정 수량의 물 등) 검사가 있습니다.',
    },
    raceInfo: {
      timeLimits: [
        { distance: '100M(148km)', hours: 37, minutes: 0 },
        { distance: '100K(104km)', hours: 29, minutes: 0 },
        { distance: '60K', hours: 15, minutes: 0 },
        { distance: '20K', hours: 4, minutes: 0 },
      ],
      startTime: '21:00',
    },
  },
  {
    id: "andong-marathon-2026",
    name: "2026 안동마라톤",
    date: "2026-10-04",
    month: "10월",
    location: "안동시민운동장",
    region: "경북",
    distances: [
      "풀코스",
      "하프",
      "10K",
      "5K"
    ],
    status: "대회종료",
    isMajor: true,
    website: "https://admarathon.kr/andong/",
    registrationStart: "2026-05-06",
    registrationEnd: "2026-08-18",
    raceKit: {
      "items": [
        "배번호",
        "기록칩(5km 제외)",
        "완주메달",
        "안내책자",
        "간식"
      ],
      "byDistance": [
        {
          "distance": "풀코스",
          "item": "기념 티셔츠·레이스 백·모자·완주 타월"
        },
        {
          "distance": "하프·10km",
          "item": "기념 티셔츠·레이스 백"
        },
        {
          "distance": "5km",
          "item": "기념 티셔츠"
        },
        {
          "distance": "풀·하프·10km",
          "item": "공식 기록 제공 대상. 5km는 기록칩·공식 기록 미제공"
        }
      ],
      "pending": "공식 고지: 기념품 디자인·항목은 상품성 개선을 위해 변경될 수 있음",
      "images": [
        {
          "src": "/images/marathon/andong-marathon-2026/kit-1.webp",
          "alt": "2026 안동마라톤 공식 기념 티셔츠"
        },
        {
          "src": "/images/marathon/andong-marathon-2026/kit-2.webp",
          "alt": "2026 안동마라톤 공식 레이스 백"
        }
      ],
      "verifiedAt": "2026-11-10"
    },
    lastVerified: "2026-11-10",
    description: "10월 4일 안동마라톤의 풀·하프·10km·5km 일정은 지났다. 10월 6일 공식 공지는 5km 칩·공식 기록 미제공과 샤라웃 사진 원본 유료 구매를 안내한다. 8월 18일 최종 접수 마감 공지가 있으며 10,000명은 모집 계획이다. 근거를 확정하지 못한 획득고도 700m와 국내 최고 난도 표현은 제외했다.",
    courseInfo: {
      "certification": "KAF",
      "courseDescription": "공식 요강은 안동시민운동장 07시 집결·08시 출발 계획이다. 획득고도 700m와 국내 최상급 난도는 공식 측정 기준을 이번에 확정하지 못해 제외했다. 계측·사진은 10월 6일 후속 공지를 따른다. 세부 고저도와 개인 GPS는 별도 확인 대상이다."
    },
    raceInfo: {
      "entryFees": [
        {
          "distance": "풀코스",
          "fee": 60000
        },
        {
          "distance": "하프",
          "fee": 50000
        },
        {
          "distance": "10K",
          "fee": 50000
        },
        {
          "distance": "5K",
          "fee": 30000
        }
      ],
      "timeLimits": [
        {
          "distance": "풀코스",
          "hours": 5,
          "minutes": 0
        },
        {
          "distance": "하프",
          "hours": 3,
          "minutes": 0
        },
        {
          "distance": "10K",
          "hours": 2,
          "minutes": 0
        },
        {
          "distance": "5K",
          "hours": 1,
          "minutes": 30
        }
      ],
      "aidInterval": "급수 2.5km마다 · 간식 5km마다",
      "expectedParticipants": 10000,
      "startTime": "08:00"
    },
    postRaceNote: "공식 기록 문의는 010-5256-7034 문자 전용이다. 사진은 2026 안동마라톤과 배번호로 검색 후 필요하면 유료 구매하는 안내다. 5km 공식 기록·모바일 기록증을 다른 종목과 같이 제공한다고 가정하지 않는다. https://admarathon.kr/andong/board/notice/?action=view&f_idx=43256&page=1",
    registrationNote: "공식 요강은 5월 6일 모집 시작·7월 26일 환불 기한을 적고, 8월 18일 최종 접수 마감 공지가 있다. 가상계좌는 발급 뒤 24시간 내 입금 완료 조건이었다. https://admarathon.kr/andong/board/notice/?action=view&f_idx=43227&page=1",
  },
  {
  "id": "seoul-open-marathon-2026",
  "name": "2026 서울 오픈 마라톤",
  "date": "2026-10-05",
  "month": "10월",
  "location": "광화문광장 앞 대로변",
  "region": "서울",
  "distances": [
    "하프",
    "10K"
  ],
  "status": "마감",
  "postponed": true,
  "isMajor": false,
  "website": "https://seoulopen.or.kr/",
  "description": "10월5일 예정 대회는 공식 일정 변경 안내 상태입니다. 11/10 공개 공지 목록에서 새 개최일 확정 원문은 확보하지 못했습니다. 새 환불 지연 공지는10/23이전 신청 우선·이후 신청 순차 처리와 늦어도11/20완료를 약속하며 계좌 미입력으로 보류된 대상자는11/12까지 정보 접수를 요청합니다. 카드취소 처리 안내와 실제 카드 반영·계좌 환급은 구분하며 개인 거래 완료를 확인한 것은 아닙니다.",
  "registrationNote": "일정 변경·새 개최일 확정 미확인. 11/10 공식 최신56·57번 공지는 환불 지연과 늦어도11/20처리 완료 약속,계좌 정보 미입력 대상자의11/12입력 요청을 안내합니다. 사무국의 약속과 실제 개인별 취소·입금 완료는 다릅니다. 본인 대상 여부와 신청 내역은 공식 홈페이지·문의 경로에서 확인하세요.",
  "lastVerified": "2026-11-10",
  "raceInfo": {
    "entryFees": [
      {
        "distance": "하프",
        "fee": 80000
      },
      {
        "distance": "10K",
        "fee": 60000
      }
    ],
    "startTime": "07:30"
  }
},
  {
    id: "gyeongpo-marathon-2026",
    name: "2026 경포마라톤",
    date: "2026-10-10",
    month: "10월",
    location: "경포해변 중앙광장",
    region: "강원",
    distances: [
      "하프",
      "10K"
    ],
    status: "대회종료",
    isMajor: false,
    website: "https://www.xn--289av7rnxbd06bmrc.com/",
    description: "10월 10일 경포마라톤 일정은 지났다. 실제 종목은 하프·10km·4.7km 건강달리기로 4.7km를 5K로 표시하지 않는다. 07:30 집결·08:00 개회식, 하프 08:30·10km 08:40·4.7km 08:50 출발 계획이었다. 개인 기록은 넷타임·시상은 건타임이며 4.7km는 계측·시상이 없다.",
    courseInfo: {
      "certification": "없음",
      "courseDescription": "공식은 경포해변 중앙광장에서 하프·10km·4.7km 건강달리기를 구분한다. 정확한 고도나 현장 통제·개인 기록을 코스명만으로 보장하지 않는다."
    },
    raceInfo: {
      "entryFees": [
        {
          "distance": "하프",
          "fee": 40000
        },
        {
          "distance": "10K",
          "fee": 40000
        },
        {
          "distance": "4.7K 건강달리기",
          "fee": 30000
        }
      ],
      "startTime": "08:30"
    },
    postRaceNote: "10월 12일 분실물 공지는 사무국 033-651-0112로 문의해 상세 사진 확인 후 전달하는 절차다. 현재 물품 잔존 여부는 미확인이다. 스카이베이호텔 경포·세인트존스호텔 시설 할인은 대회 당일 안내로 상시 혜택이 아니다. https://www.xn--289av7rnxbd06bmrc.com/bbs/board.php?bo_table=notice&wr_id=134 및 https://www.xn--289av7rnxbd06bmrc.com/bbs/board.php?bo_table=notice&wr_id=132",
    registrationNote: "요강은 5월 18일 10시부터 입금 기준 선착순 모집으로 적는다. 종료된 추가접수 버튼이나 하프 단체 문의를 현재 신규 참가권으로 안내하지 않는다.",
    lastVerified: "2026-11-10",
  },
  {
    id: "kakao-friends-run-2026",
    name: "카카오프렌즈 런 2026",
    date: "2026-10-10",
    month: "10월",
    location: "탄천종합운동장 (경기 성남시)",
    region: "경기",
    distances: [
      "10K",
      "5K"
    ],
    status: "대회종료",
    isMajor: false,
    website: "https://b.kakao.com/views/kakaofriendsrun",
    registrationStart: "2026-08-10",
    registrationEnd: "2026-08-17",
    lastVerified: "2026-11-10",
    description: "10월 10일 성남 탄천 일대 5km·10km일정의 카카오프렌즈런.8월 4일 공식 발표의1만명은 계획 규모다.8월 본접수 추첨과 9월 런투게더 참가권 경품은 별도 절차였고 후자는 50명에게 2매씩 추첨, 9월 11일 인스타그램DM발표 계획이었다. 디지털 참가자 카드가 공식 칩 기록·완주증을 뜻한다는 근거는 이번 발표문에서 확인되지 않았다.",
    raceInfo: {
      "entryFees": [
        {
          "distance": "10K",
          "fee": 80000
        },
        {
          "distance": "5K",
          "fee": 80000
        }
      ],
      "expectedParticipants": 10000
    },
    postRaceNote: "본접수와 버추얼 경품은 신청·발표 채널이 다르므로 실제 신청 내역과 해당 이벤트 안내를 구분한다. 참가자 디지털 카드·캐릭터 인증 이미지를 공인 완주 기록증과 동일하게 안내하지 않는다. 실제 개인 당첨·전원 지급·기록 계측은 미조회. 공식 발표 https://www.kakaocorp.com/page/detail/12095 및 https://www.kakaocorp.com/page/detail/12128",
  },
  {
    id: "brave-cookie-run-seoul-2026",
    name: "2026 용감한 쿠키RUN in 서울 (개최 취소)",
    date: "2026-10-25",
    month: "10월",
    location: "서울어린이대공원 (서울 광진구)",
    region: "서울",
    distances: [
      "10K",
      "5K"
    ],
    status: "대회종료",
    isMajor: false,
    website: "https://runable.me/comp/19600",
    registrationStart: "2026-08-20",
    lastVerified: "2026-11-10",
    registrationNote: "개최 취소 후 안내로 갱신했다. 과거 접수 버튼·일정이 남아 있다고 유효한 새 참가권 판매나 실제 개최를 뜻하지 않는다. 정확한 최초 취소 공지일·책임·구매처별 자동취소 절차는 이번 공식 원문 재확인에 실패해 단정하지 않는다.",
    description: "10월 25일 예정이던 용감한 쿠키RUN서울은 취소된 대회다.10월 21일 이코노미톡뉴스는 데브시스터즈가 전날 직접 질의에 참가 티켓 전액 환불을 순차 진행한다고 답한 내용을 전한다. 공식 러너블 현재 페이지의 종목은 10K·5K·5K가족권이다. 공개 상품에 남은 10월 12일 14:00일반 취소 규정은 행사 자체 취소 환불과 구분해야 하며 실제 전원 환급 완료를 확인한 것은 아니다.",
    raceInfo: {
      "entryFees": [
        {
          "distance": "10K",
          "fee": 70000
        }
      ]
    },
    postRaceNote: "자신이 결제한 러너블·더현대Hi 주문의 취소 표시·실제 환급을 각각 확인한다. 취소 게시물 원문 재접근 실패로 구매처별 자동취소·별도 신청 필요 여부를 새로 확정하지 않았다. 확인된 기업 답변 보도는 티켓 환불 범위이며 교통·숙박비·추가 상품 비용 전액 보상 약속을 확인한 것은 아니다. https://www.economytalk.kr/news/articleView.html?idxno=424784",
  },
  {
    id: "busan-sea-marathon-2026",
    name: "성우하이텍 2026 부산바다마라톤",
    date: "2026-10-25",
    month: "10월",
    location: "해운대 벡스코 야외광장 (부산)",
    region: "부산",
    distances: [
      "15K",
      "10K",
      "5K"
    ],
    status: "대회종료",
    isMajor: false,
    website: "https://busan.wizrun.com/",
    registrationStart: "2026-07-28",
    registrationNote: "접수 마감 — 정원 12, 000명 선착순으로 받아 8월 3일 전 종목 마감됐고(공식 공지 8/3), 환불·취소분으로 9월 2일(수) 10시 선착순 추가 접수(신청 후 환불 불가)를 열었습니다. 2026-10-20 공식 참가신청 페이지는 \"모든 코스 접수가 마감\"으로 안내합니다(추가 접수가 언제 닫혔는지는 공지에 없음)",
    raceKit: {
      "items": [
        "공식 기념 티셔츠(흡한속건, XS~2XL)",
        "기념 양말",
        "기념 반다나(부산일보 창간 80주년)",
        "배번호",
        "기록칩(15km·10km, 5km 제외)",
        "완주메달",
        "완주 간식·음료"
      ],
      "images": [
        {
          "src": "/images/marathon/busan-sea-marathon-2026/kit-1.webp",
          "alt": "2026 부산바다마라톤 공식 기념품 안내"
        },
        {
          "src": "/images/marathon/busan-sea-marathon-2026/kit-2.webp",
          "alt": "2026 부산바다마라톤 공식 기념 티셔츠"
        }
      ],
      "verifiedAt": "2026-08-27"
    },
    lastVerified: "2026-11-10",
    description: "10월 25일 부산바다마라톤 뒤 10월 27일 사무국이 공식기록실 업데이트와 연대별 시상 공지를 안내했다. 공식 FAQ는 현장 시상과 공식 기록 모두 건타임 기준이라고 설명하며 5km는 기록칩 미제공 부문이다. 15km·10km·5km 모집 계획 12, 000명을 실제 참가·완주 인원으로 확정하지 않았다. 12월6일 부산브릿지 풀·10km와는 다른 대회다.",
    courseInfo: {
      "courseDescription": "벡스코 야외광장07:30집결 뒤07:50 광안대교 상층부 출발지점으로 이동하는 운영 안내였다. 종목별 출발은15km08:40·10km08:20·5km09:00으로,집결·이동·출발을 구분한다. 구간별 고도·경사나 초보 완주 용이성을 이번에 검증한 것은 아니다."
    },
    raceInfo: {
      "entryFees": [
        {
          "distance": "15K",
          "fee": 70000
        },
        {
          "distance": "10K",
          "fee": 60000
        },
        {
          "distance": "5K",
          "fee": 50000
        }
      ],
      "timeLimits": [
        {
          "distance": "15K",
          "hours": 2,
          "minutes": 20
        },
        {
          "distance": "10K",
          "hours": 1,
          "minutes": 40
        },
        {
          "distance": "5K",
          "hours": 1,
          "minutes": 20
        }
      ],
      "expectedParticipants": 12000,
      "startTime": "08:20"
    },
    postRaceNote: "10월27일 공식기록실 업데이트 공지 https://busan.wizrun.com/notice/notice17/view/159?stx=&sty= 에 스마트칩 기록조회 연결이 있다. 공식 기록·현장 시상은 건타임 안내, 5km는 기록칩 제외. 개인 기록과 연대별 입상 공지·실제 시상 완료는 구분한다. 사무국 051-461-4046·평일 10:00~17:00(점심 12:00~13:00).",
  },
  {
    id: "seoul-race-2026",
    name: "2026 서울달리기 서울레이스 (SEOUL RACE)",
    date: "2026-10-11",
    month: "10월",
    location: "청계광장 앞 세종대로",
    region: "서울",
    distances: [
      "하프",
      "11K"
    ],
    status: "대회종료",
    isMajor: true,
    website: "https://www.seoul-race.co.kr/",
    description: "10월 11일 개최한 하프·11km 서울레이스. 공식 유의사항은 07:30부터 순차 출발, 하프 제한 2시간30분·11km 1시간40분을 안내했다. 기록은 스마트칩에서 본인 대회·종목을 확인하며, 대회 뒤 검증을 거친 공식 기록증 제공 계획과 실제 개인 발급 상태를 구분한다. 주최의 10월 12일 후속 공지도 함께 확인한다.",
    courseInfo: {
      "courseDescription": "공식 유의사항의 하프·11km 도심 대회. 지정 그룹을 벗어나 앞 그룹에서 출발하면 공식 기록을 인정하지 않으며 기록은 넷타임 방식이다. 다음 시즌 코스·운영은 새 안내로 확인한다."
    },
    raceInfo: {
      "entryFees": [
        {
          "distance": "하프",
          "fee": 80000
        },
        {
          "distance": "11K",
          "fee": 70000
        }
      ],
      "timeLimits": [
        {
          "distance": "하프",
          "hours": 2,
          "minutes": 30
        },
        {
          "distance": "11K",
          "hours": 1,
          "minutes": 40
        }
      ],
      "expectedParticipants": 12000,
      "startTime": "07:30"
    },
    postRaceNote: "2026 대회 종료. 10월 10일 기록 공지는 검증 뒤 1주일 이내 공식 기록증 제공 계획을 안내했다. 이번 대조로 전체 발급 완료를 확인하지 않았으며 본인 결과에서 현재 상태를 확인해야 한다(11/10 주최 원문 대조).",
    lastVerified: "2026-11-10",
  },
  {
    id: "disney-run-incheon-2026",
    name: "2026 디즈니런 인천",
    date: "2026-10-24",
    month: "10월",
    location: "인천 상상플랫폼 (인천 제물포구 월미로33)",
    region: "인천",
    distances: [
      "10K",
      "5K"
    ],
    status: "대회종료",
    isMajor: false,
    website: "https://www.disneyrunincheon2026.com/",
    registrationStart: "2026-08-31",
    registrationNote: "접수 마감 — 8월 31일(월) 10시에 마감일 없이 선착순 15, 000명으로 열렸고, 2026-10-20 공식 참가신청 페이지는 \"대회 접수가 마감되었습니다\"로 안내합니다(마감 시점은 공지에 없음). 환불은 9월 18일 17시에 끝났습니다",
    lastVerified: "2026-11-10",
    description: "10월 24일 인천 상상플랫폼 일정의 디즈니런. 공식 현재FAQ는 10K배번호 칩의 넷타임 계측, 10K남녀1~3위 시상은 건타임 기준, 5K는 기록칩 미제공·개인 앱 측정으로 구분한다. 버추얼런은 현장 계측과 별도인 앱 기록 인증·디지털 완주증 절차이며1~3차 인증 기간은 지났다. 개인 결과·전원 수령·현재 교환 처리 가능 여부를 이번에 확인한 것은 아니다.",
    courseInfo: {
      "courseDescription": "공식 홈의10km·5km 코스 이미지를 각각 확인해야 한다. 이번 갱신은 계측·시상·참가자 안내 범위이며 초보 난이도·누적고도·구간별 정확한 경로를 재인증한 것은 아니다."
    },
    raceKit: {
      "items": [
        "디즈니런 한정판 티셔츠 — 디자인 1종 랜덤 증정(S~2XL, 가슴너비·어깨너비·소매길이 실측 조견표 공개)",
        "완주 메달"
      ],
      "byDistance": [
        {
          "distance": "5K",
          "item": "곰돌이 푸와 친구들 테마"
        },
        {
          "distance": "10K",
          "item": "미키와 친구들 테마"
        }
      ],
      "pending": "협찬품은 종목별로 다릅니다(공식 10/14 참가자 안내) — 5K 레이스팩: 플레인팟 미니싱글 트래블팩(5개입), 동화약품 마그랩 포 리커버리 청포도맛, 안상규벌꿀 곰돌이 푸 스틱, 구몬학습, 크라운스포츠뉴트리션 스포츠검바(3종 중 랜덤 1종). 10K 레이스팩: 플레인팟 미니싱글 트래블팩(5개입), 안상규벌꿀 곰돌이 푸 스틱, 구몬학습, 메디힐 샘플 파우치, 크라운스포츠뉴트리션 스포츠검바(3종 중 랜덤 1종). 완주 패키지: 아모스 블록젤리, 싱하 소다 제로(3종 중 랜덤 1종), 페레로 킨더조이, 링티제로 레몬라임맛 500ml, 네이처밸리 크런치바(랜덤 1종), 비타500 이온킥 샤인레몬러쉬 500ml. 공식은 구성·품목이 운영·재고 상황에 따라 바뀔 수 있다고 밝혔습니다. 사전 패키지는 우체국 택배로 순차 배송 중이며 10월 21일(수)까지 못 받으면 사무국 문의가 안내돼 있습니다",
      "verifiedAt": "2026-10-20"
    },
    raceInfo: {
      "entryFees": [
        {
          "distance": "10K",
          "fee": 80000
        },
        {
          "distance": "5K",
          "fee": 65000
        }
      ],
      "timeLimits": [
        {
          "distance": "10K",
          "hours": 1,
          "minutes": 30
        },
        {
          "distance": "5K",
          "hours": 0,
          "minutes": 50
        }
      ],
      "expectedParticipants": 15000,
      "startTime": "09:00"
    },
    postRaceNote: "공식FAQ의 10K개인 기록은 넷타임, 시상은 건타임이며 5K는 기록칩이 없다.10월 14일 공지는 5K·10K협찬 패키지 구성을 구분하고 구성 문제는 공식 카카오톡 채널 문의를 안내했다. 물품보관17:00이후 미수령품은 사무국 인계 안내이며 실제 현재 보관·재배송은 미확인. 문의 070-4705-2009·월~금 10:00~18:00(점심 12:30~13:30).",
  },
  {
    id: "chuncheon-marathon-2026",
    name: "2026 조선일보 춘천마라톤",
    date: "2026-10-25",
    month: "10월",
    location: "춘천 공지천교",
    region: "강원",
    distances: [
      "풀코스",
      "10K"
    ],
    status: "대회종료",
    isMajor: true,
    website: "https://www.chuncheonmarathon.com/",
    registrationStart: "2026-09-08",
    postRaceNote: "2026 대회·추가 신청·결제 종료. 10월 26일 사무국 공지는 임시 기록 점검 요청을 11월 5일까지, 기록증 배송 주소·연락처 수정 요청을 11월 12일까지로 구분한다. 최종 기록 정리 뒤 기록증 발송 예정이며 전체 발송 완료는 이번에 확인하지 않았다(11/10 원문 대조).",
    description: "10월 25일 공지천교 출발, 풀·10km 대회. 사무국은 풀 5시간 30분·10km 1시간 30분 이내 기록만 공식 인정하며 그룹 이탈·체크포인트 미확인 등 비정상 기록은 제외한다고 안내했다. 임시 조회와 최종 확정 기록을 구분해 확인하고 기록증 배송 정보 변경은 11월 12일까지 사무국에 요청한다.",
    courseInfo: {
      "courseDescription": "주최 홈페이지는 풀 42.195km·10km 춘천 국제공인코스(의암호 순환코스)로 안내한다. 공식 인정은 종목별 제한시간과 출발그룹·체크포인트 점검 조건을 따른다."
    },
    raceInfo: {
      "entryFees": [
        {
          "distance": "풀코스",
          "fee": 150000
        },
        {
          "distance": "10K",
          "fee": 100000
        }
      ],
      "timeLimits": [
        {
          "distance": "풀코스",
          "hours": 5,
          "minutes": 30
        },
        {
          "distance": "10K",
          "hours": 1,
          "minutes": 30
        }
      ],
      "startTime": "09:00"
    },
    logistics: {
      "parking": "공지천 공영주차장(대회장 맞은편)·의암공원·춘천MBC 주차장 이용. 교통 통제가 오전 7시~오후 3시 30분이라 7시 이전 진입을 권장합니다.",
      "publicTransport": "ITX-청춘(용산→춘천 약 75분, 청량리→춘천 약 60분). 주말 좌석이 조기 매진되니 코레일톡 사전 예매 필수. ※KTX-이음은 춘천선 미운행입니다.",
      "shuttle": "서울 4개 지점(시청·잠실·신도림·사당)에서 대회장 직행, 오전 6시 출발(2025년 기준 왕복 2만 원). 공식 홈페이지 예약, 조기 마감됩니다."
    },
    raceKit: {
      "items": [
        "기능성 티셔츠(155~185 사이즈별 실측표 공개)",
        "배번호",
        "완주메달(현장 증정)"
      ],
      "byDistance": [
        {
          "distance": "풀코스",
          "item": "레이스팩에 얼티밋포텐셜 풀코스 리커버리 패키지, 완주 후 현장에서 얼티브 아몬드두유 저당"
        },
        {
          "distance": "10K",
          "item": "레이스팩에 얼티밋포텐셜 러닝에너지젤프리, 완주 후 현장에서 얼티브 파로두유 저당"
        },
        {
          "distance": "풀코스·10K 공통",
          "item": "완주 후 샘트리 맛병아리콩·햇반 라이스플랜 파로통곡물죽·삼립호떡 대왕씨앗꿀호떡(현장 증정)"
        }
      ],
      "verifiedAt": "2026-10-20"
    },
    lastVerified: "2026-11-10",
  },
  {
    id: "gyeongju-international-marathon-2026",
    name: "2026 경주국제마라톤",
    date: "2026-10-17",
    month: "10월",
    location: "경주시민운동장",
    region: "경북",
    distances: [
      "풀코스",
      "하프",
      "10K"
    ],
    status: "대회종료",
    isMajor: true,
    website: "https://www.gyeongjumarathon.com/",
    registrationStart: "2026-05-26",
    raceKit: {
      "items": [
        "기념 티셔츠 — 아디다스 반팔(남녀공용 XS~3XL). 매니아 부문은 미제공"
      ],
      "pending": "공식 레이스팩 페이지는 \"추후 공개 예정\" — 티셔츠 외 구성 미공개",
      "images": [
        {
          "src": "/images/marathon/gyeongju-international-marathon-2026/kit-1.webp",
          "alt": "2026 경주국제마라톤 공식 기념 티셔츠 (아디다스)"
        }
      ],
      "verifiedAt": "2026-08-27"
    },
    lastVerified: "2026-11-10",
    description: "10월 17일 경주시민운동장 출발·귀환, 풀·하프·10km 2026 대회. 일반/매니아 요금은 풀 70,000/60,000원·하프 60,000/50,000원·10km 50,000/40,000원, 매니아 티셔츠 미지급이었다. 공식 기록은 스마트칩 동아 기록실의 2026 경주마라톤에서 배번호 또는 이름으로 조회한다. 런저니는 별도 자격·배번호 안내가 있는 프로그램으로 세 대회 참가만으로 확대하지 않는다.",
    courseInfo: {
      "courseDescription": "공식 개요의 경주시민운동장→경주시내 일원→경주시민운동장 순환 코스. 풀·하프·10km의 거리를 구분하고 본인 종목 결과를 확인한다."
    },
    raceInfo: {
      "entryFees": [
        {
          "distance": "풀코스",
          "fee": 70000
        },
        {
          "distance": "하프",
          "fee": 60000
        },
        {
          "distance": "10K",
          "fee": 50000
        }
      ],
      "startTime": "08:00",
      "timeLimits": [
        {
          "distance": "풀코스",
          "hours": 5,
          "minutes": 0
        },
        {
          "distance": "하프",
          "hours": 2,
          "minutes": 30
        },
        {
          "distance": "10K",
          "hours": 1,
          "minutes": 30
        }
      ]
    },
    logistics: {
      "publicTransport": "KTX·SRT는 경주역(2023.12 신경주역에서 역명 변경, 건천읍 외곽) 하차 후 시내버스(50·60번)나 택시로 경주시민운동장까지 이동합니다.",
      "parking": "경주시민운동장 진입로·코스 구간은 주차 금지. 지정 주차장(경주 예술의전당·시립도서관)만 이용하며, 교통 통제 해제 전에는 출차가 어렵습니다.",
      "shuttle": "서울 출발 왕복 셔틀버스 운영(2025년 기준). 2026 운영 여부는 동마클럽 별도 공지로, 조기 마감되니 사전 확인이 필요합니다."
    },
    postRaceNote: "2026 대회 종료. 종이기록증 신청은 10월 27일 17:00까지로 기한 경과. 국내 주소 우편 발송·재발송 불가·주소 변경은 사무국 연락 조건이다. 마스터스 시상은 대한민국 국적 참가자 한정이라는 10/17 공지가 있다(11/10 원문 대조).",
  },
  {
    id: 'dalseo-half-marathon-2026',
    name: '2026 달서하프마라톤',
    date: '2026-10-04',
    month: '10월',
    location: '대구 달서구 호림강나루공원',
    region: '대구',
    distances: ['하프', '10K', '5K'],
    status: '대회종료',
    isMajor: false,
    website: 'https://xn--o39a74ke5dgxc87nkob1zuq6ko9i1win0a.kr',
    description:
      '대구 달서구 낙동강변을 달리는 영남권 대표 하프 대회 20회차. 5월 20일 정규 접수를 시작해 6월 30일 마감됐고, 6월 중순 추가접수까지 종료됐습니다. 클럽 회원 대상 마니아 할인가(하프·10km 25,000원)가 별도로 있습니다.',
    raceInfo: {
      entryFees: [
        { distance: '하프', fee: 35000 },
        { distance: '10K', fee: 35000 },
        { distance: '5K', fee: 20000 },
      ],
      startTime: '08:00',
    },
  },
  {
    id: 'mbn-naju-marathon-2026',
    name: '2026 MBN 나주마라톤',
    date: '2026-10-11',
    month: '10월',
    location: '전남 나주종합스포츠파크',
    region: '전남',
    distances: ['풀코스', '하프', '10K', '5K'],
    status: '대회종료',
    isMajor: false,
    website: 'https://najumarathon.com',
    description:
      'MBN 주관 전남 나주 풀코스 마라톤 4회차. 5월 15일 접수를 시작해 풀·하프·10km·하프팀대항이 조기 마감됐고, 5km 건강걷기까지 7월 19일 종료됐습니다. 정원은 풀 2,000·하프 2,500·10km 3,000·5km 3,000명.',
    raceInfo: {
      entryFees: [
        { distance: '풀코스', fee: 40000 },
        { distance: '하프', fee: 40000 },
        { distance: '10K', fee: 40000 },
        { distance: '5K', fee: 20000 },
      ],
      startTime: '08:00',
    },
  },
  {
    id: "daecheongho-marathon-2026",
    name: "2026 청원생명쌀 대청호마라톤",
    date: "2026-10-17",
    month: "10월",
    location: "충북 문의체육공원",
    region: "충북",
    distances: [
      "풀코스",
      "하프",
      "10K",
      "5K"
    ],
    status: "대회종료",
    isMajor: false,
    website: "https://race.cjsports.or.kr",
    description: "10월 17일 제24회 청원생명쌀 대청호마라톤 일정은 지났다. 요강 상세 출발은 풀 08:40·하프 08:50·10km와 5km 09:00으로, 상단 행사 일시 08:00과 구분된다. 5km는 칩·기록증·시상이 없다. 일반 참가비는 풀·하프·10km 각 45,000원·5km 25,000원이며 할인과 참가 연령 조건은 별도다.",
    raceInfo: {
      "entryFees": [
        {
          "distance": "풀코스",
          "fee": 45000
        },
        {
          "distance": "하프",
          "fee": 45000
        },
        {
          "distance": "10K",
          "fee": 45000
        },
        {
          "distance": "5K",
          "fee": 25000
        }
      ],
      "startTime": "08:40"
    },
    postRaceNote: "10월 20일 공지는 임시 기록이며 이의신청 기한 10월 23일 17시 종료 뒤 일주일 후 공식 갱신할 예정이라고 안내했다. 현재 모든 결과의 정정 완료를 확인한 것은 아니다. 풀코스 24.5·33·37km 부근 공사와 유턴 안내는 별도 대회 전 공지다. https://race.cjsports.or.kr/04/?group=basic&code=B01&no=8378&bsort=desc&bfsort=wdate&abmode=view",
    lastVerified: "2026-11-10",
  },
  {
    id: "gangnam-peace-marathon-2026",
    name: "2026 강남국제평화마라톤 (제23회)",
    date: "2026-10-05",
    month: "10월",
    location: "강남구 봉은사로 (삼성1동주민센터 앞)",
    region: "서울",
    distances: [
      "풀코스",
      "하프",
      "10K",
      "5K"
    ],
    status: "대회종료",
    isMajor: true,
    website: "https://peacemarathon.co.kr",
    registrationStart: "2026-08-10",
    registrationNote: "선착순 마감 — 마감일 미고지. 접수가 네 번에 나뉘어 열렸습니다: 강남구민 우선 2,000명 8월 10일(월) 10시 → 풀·하프 8월 11일(화) 10시 → 10km·5km 8월 12일(수) 10시 → 전 코스 8월 13일(목) 10시부터 선착순. 결제까지 마쳐야 접수가 완료됐고, 우선 접수 후에는 주소·코스 변경이 일절 불가했습니다(공식 요강, 2026-08-31 확인)",
    raceKit: {
      "items": [
        "티셔츠",
        "번호표",
        "기록측정용 칩",
        "완주메달",
        "완주 간식"
      ],
      "images": [
        {
          "src": "/images/marathon/gangnam-peace-marathon-2026/kit-1.webp",
          "alt": "2026 강남국제평화마라톤 공식 기념 티셔츠"
        }
      ],
      "verifiedAt": "2026-08-27"
    },
    lastVerified: "2026-11-10",
    description: "10월 5일 강남국제평화마라톤 일정은 지났다. 공식 FAQ는 참가비 전액을 유니세프한국위원회 등 수요처를 통해 전 세계 아동·청소년 의료비·교육비로 기부할 계획을 설명한다. 전쟁고아만을 대상으로 한정하지 않는다. 기록 계측과 시상은 넷타임 안내이며 실제 기부 전달·개인 결과는 별도 확인이다.",
    courseInfo: {
      "certification": "없음",
      "courseDescription": "봉은사로 삼성1동주민센터 앞 08시 집결·09시 출발 일정이었다. 이번 검증은 계측·시상·제한시간과 기부 목적에 한하며, 오래된 코스 미공개 문구로 현재 공개 여부를 판단하지 않는다."
    },
    raceInfo: {
      "entryFees": [
        {
          "distance": "풀코스",
          "fee": 30000
        },
        {
          "distance": "하프",
          "fee": 20000
        },
        {
          "distance": "10K",
          "fee": 20000
        },
        {
          "distance": "5K",
          "fee": 10000
        }
      ],
      "timeLimits": [
        {
          "distance": "풀코스",
          "hours": 5,
          "minutes": 0
        },
        {
          "distance": "하프",
          "hours": 3,
          "minutes": 0
        },
        {
          "distance": "10K",
          "hours": 1,
          "minutes": 50
        },
        {
          "distance": "5K",
          "hours": 1,
          "minutes": 50
        }
      ],
      "startTime": "09:00"
    },
    logistics: {
      "publicTransport": "지하철 9호선 봉은사역 4·5번 출구 (출발지: 서울 강남구 봉은사로 616 삼성1동 주민센터 앞)"
    },
    postRaceNote: "공식 유의사항의 제한시간은 풀코스 5시간·하프 3시간·10km와 5km 각 1시간 50분이다. 모든 코스 넷타임 시상 안내를 다른 대회의 건타임 관행과 섞지 않는다. https://peacemarathon.co.kr/info/caution.php 및 https://peacemarathon.co.kr/community/faq.php",
  },
  {
    id: 'gimje-jipyeongseon-marathon-2026',
    name: '제25회 김제새만금 지평선 전국마라톤대회',
    date: '2026-10-03',
    month: '10월',
    location: '김제시민운동장 (전북 김제시)',
    region: '전북',
    distances: ['하프', '10K', '5K'],
    status: '대회종료',
    isMajor: false,
    website: 'https://gimjesm.co.kr/',
    description:
      '김제지평선축제 기간에 열리는 25회째 대회로, 코스를 따라 만개한 코스모스 길이 가을 러닝 명소입니다. 하프·5K 각 1,500명, 10K 2,000명 등 총 5,000명 선착순 접수(5/20 시작)로 조기 마감됐습니다.',
    raceInfo: {
      entryFees: [
        { distance: '하프', fee: 45000 },
        { distance: '10K', fee: 45000 },
        { distance: '5K', fee: 25000 },
      ],
    },
  },
  {
    id: 'gyeongnam-marathon-2026',
    name: '제23회 경남마라톤대회',
    date: '2026-10-04',
    month: '10월',
    location: '창원종합운동장 (경남 창원시)',
    region: '경남',
    distances: ['10K'],
    status: '대회종료',
    isMajor: false,
    website: 'https://knmarathon.co.kr',
    registrationEnd: '2026-08-14',
    raceKit: {
      items: ['기능성 반팔 티셔츠(민트, 80~110)', '배번호', '완주메달', '안내책자', '기록칩(10km — 3km 건강달리기 제외)'],
      images: [{ src: '/images/marathon/gyeongnam-marathon-2026/kit-1.webp', alt: '제23회 경남마라톤 공식 기념 티셔츠' }],
      verifiedAt: '2026-08-27',
    },
    lastVerified: '2026-08-27',
    description:
      '경남신문 주최로 창원스포츠파크 보조경기장에서 출발하는 경남 지역 대회 23회차. 10km 외에 3km 건강달리기(일반 20,000원·학생 15,000원)도 운영합니다. 접수는 7월 13일부터 선착순 4,000명으로 8월 29일까지입니다.',
    raceInfo: {
      entryFees: [{ distance: '10K', fee: 30000 }],
      startTime: '08:30',
    },
  },
  {
    id: "hankyung-seoul-marathon-2026",
    name: "2026 한경서울마라톤",
    date: "2026-10-05",
    month: "10월",
    location: "여의도공원 문화의마당 (서울 영등포구)",
    region: "서울",
    distances: [
      "하프",
      "10K",
      "5K"
    ],
    status: "대회종료",
    isMajor: false,
    website: "https://hk-marathon.com/",
    registrationStart: "2026-07-16",
    registrationEnd: "2026-08-28",
    registrationNote: "접수 마감 — 2026-09-07 공식 공지 \"2026년 8월 28일 금요일 접수 마감되었습니다\". 마감 후 취소·환불·주소·기념품 사이즈·코스 변경 모두 불가",
    raceKit: {
      "items": [
        "뉴발란스 기능성 티셔츠(사전 배송, 남 95~110·여 85~95)",
        "뉴발란스 양말(사전 배송)",
        "배번호·기록칩(사전 배송, 5km는 기록칩 제외)",
        "웰컴 키트 — 하이뮨 아미노포텐 에너지젤 1포 + 파워에너지 1포(9/11 공지: 제조사 공급 사정으로 파워젤에서 변경)",
        "완주메달(현장, 무료 각인 — 5km 제외)",
        "완주 패키지 — 용암수·에너지바·이온음료·누룽지팝"
      ],
      "byDistance": [
        {
          "distance": "하프",
          "item": "웰컴 키트에 닥터포헤어 헤어케어 제품 추가 증정"
        }
      ],
      "pending": "공식 고지: 전체 참가자 기념품 추가 예정",
      "images": [
        {
          "src": "/images/marathon/hankyung-seoul-marathon-2026/kit-1.webp",
          "alt": "2026 한경서울마라톤 공식 기념품 안내 — 뉴발란스 티셔츠·양말 등"
        }
      ],
      "verifiedAt": "2026-09-29"
    },
    lastVerified: "2026-11-10",
    description: "10월 5일 월요일 휴일, 여의도공원 문화의마당에서 하프·10km·5km를 안내한 대회. 10월 6일 사무국 감사 공지로 종료를 확인했다. 사진 서비스는 배번호 검색 후 필요에 따라 구매하는 방식이며 무료 전원 제공을 뜻하지 않는다. 5km는 기록칩 제외 부문이다. 모집 계획 7,000명을 실제 참가 인원으로 확정하지 않았다.",
    courseInfo: {
      "courseDescription": "여의도공원 문화의마당 집결, 하프·10km·5km 종목 안내. 이번 확인은 종료·사진·입상·기록 조건 범위이며 정확한 종목별 경로·누적고도·난이도를 재인증한 것은 아니다."
    },
    raceInfo: {
      "entryFees": [
        {
          "distance": "하프",
          "fee": 80000
        },
        {
          "distance": "10K",
          "fee": 70000
        },
        {
          "distance": "5K",
          "fee": 60000
        }
      ],
      "expectedParticipants": 7000
    },
    postRaceNote: "10월 6일 공식 사진 공지는 https://www.shout-out.kr/ 에서 배번호 검색·필요시 구매를 안내한다. 전체 기록조회 메뉴는 스마트칩 연결. 종합 입상 이의 기한은 10월 12일 17:00이었고 이후 최종 확정·개별 연락 예정이라는 공지다. 전원 시상 완료·현재 새 이의 접수는 미확인. 사무국 1566-1936·평일 10:00~17:00(점심 12:00~13:00).",
  },
  {
    id: 'yeoju-sejong-marathon-2026',
    name: '제23회 여주 세종대왕 마라톤대회',
    date: '2026-10-18',
    month: '10월',
    location: '현암지구공원 (경기 여주시)',
    region: '경기',
    distances: ['하프', '10K'],
    status: '대회종료',
    isMajor: false,
    website: 'https://www.mara1080.com/event/edaee6e1-0d92-4248-9927-06ed3b0abfd0',
    registrationNote:
      '접수 마감(공식 접수처 전국마라톤협회 mara1080 안내 기준, 마감일은 미확인). 공식 접수처 공지(2026-10-15)로 10월 18일 여주 현암지구공원 개최와 우천 시 정상 진행을 확인했습니다. 4km 종목은 4.5km로 변경(10/1 공지), 배번호는 10/13 택배 발송. 예전 홈페이지(yjmarathon.com)는 503 상태로 이번 대회와 무관하니 접수처 공지를 보세요.',
    lastVerified: '2026-10-16',
    description:
      '남한강변 현암지구공원에서 출발하는 여주 대표 가을 대회. 하프 1,500명·10K 2,500명·4K 1,000명 등 총 5,000명 선착순이며 1km 휠체어 종목은 무료입니다. 접수는 마감됐습니다(접수처 공지 기준).',
    raceInfo: {
      entryFees: [
        { distance: '하프', fee: 45000 },
        { distance: '10K', fee: 45000 },
        { distance: '4.5K', fee: 25000 },
      ],
      expectedParticipants: 5000,
      startTime: '08:30',
    },
    raceKit: {
      items: ['쌀 4kg', '폴라폴리스 자켓'],
      pending: '접수처 공지 제목 「현장배부 기념품 관련 안내(쌀 4kg, 폴라폴리스 자켓)」(2026-10-08)에서 품목만 확인. 배번호·메달 등 나머지 지급품과 종목별 차이는 본문 미확인',
      verifiedAt: '2026-10-16',
    },
  },
  {
    id: "style-run-2026",
    name: "2026 스타일런 (Style Run)",
    date: "2026-10-18",
    month: "10월",
    location: "롯데월드타워 월드파크 잔디광장 (서울 송파구)",
    region: "서울",
    distances: [
      "10K",
      "5K"
    ],
    status: "대회종료",
    isMajor: false,
    website: "https://www.lotteon.com/",
    registrationStart: "2026-09-01",
    registrationEnd: "2026-09-01",
    registrationNote: "과거 접수 기간 안내이며 10월 18일 종료 보도가 있다. 티켓3시간30분 매진은 롯데 측 발표를 전한 사후 원보도 수치다.2025추가접수 경험을 다음 회차 재오픈 보장으로 안내하지 않는다. 현재 새 참가권 판매·2027일정은 미확인.",
    lastVerified: "2026-11-10",
    description: "10월 18일 잠실 스타일런의 종료를 롯데 측 발표를 전한 10월 18일 뉴스핌 원보도로 확인했다. 발표 종목은 5km·10km, 협업 브랜드는 자라 애슬레틱즈다. 참가7, 000명·티켓3시간30분 매진은 롯데 발표를 전한 수치이며 명단·완주 인원을 독립 검증한 값은 아니다. 협업 5종과 로고 물품 3종의 지급 안내가 개인별 실제 수령·교환 완료나 보호대의 부상 예방 효과를 증명하지 않는다.",
    courseInfo: {
      "courseDescription": "롯데 발표를 전한 원보도는 롯데월드타워 월드파크 출발·송파대로·석촌호수 경유5km·10km로 설명한다. 정확한 종목별 경로·계측 여부·고도·초보 난이도는 이번에 재인증하지 않았다."
    },
    raceInfo: {
      "expectedParticipants": 7000
    },
    postRaceNote: "물품·결제·기록은 본인이 구매한 상품과 당시 주최 안내로 문의해야 한다. 이번 공개 자료로 개인 기록증·사진·각인의 최신 제공 조건을 충분히 확인하지 못해 무료 사진·전원 미계측을 단정하지 않는다. 다음 회차 일정·추가접수는 새 공식 공지가 필요하다. 롯데 발표 원보도 https://m.newspim.com/news/view/20261018000076",
  },
  {
    id: "jurassic-park-run-2026",
    name: "2026 쥬라기파크런",
    date: "2026-10-25",
    month: "10월",
    location: "하남 미사경정공원 (경기 하남시)",
    region: "경기",
    distances: [
      "10K",
      "5K"
    ],
    status: "대회종료",
    isMajor: false,
    website: "https://jurassicparkrun.co.kr/",
    registrationStart: "2026-09-14",
    registrationEnd: "2026-10-15",
    registrationNote: "공식 예정 접수 기간은 9월 14일~10월 15일로 지났다. 기존의 10월 판매 종료 확인과 별개로 이번에 개인 주문·현재 상품 옵션을 조회하지 않았다.",
    lastVerified: "2026-11-10",
    description: "10월 25일 하남 미사경정공원 일정의 10KM·5KM 행사. 공식 시간표는 08:00 집결·09:00 출발 계획을 구분한다. 10KM만 기록칩·모바일 기록증 제공 대상이며 5KM단독·패밀리는 해당하지 않는다. 공식 약도와 배송·교환 안내가 이미지로 공개돼 있다. 실제 개인 기록·전원 물품 수령은 이번에 확인하지 않았다.",
    raceInfo: {
      "entryFees": [
        {
          "distance": "10K",
          "fee": 80000
        },
        {
          "distance": "5K",
          "fee": 70000
        }
      ],
      "startTime": "09:00"
    },
    raceKit: {
      "items": [
        "티셔츠",
        "반다나",
        "배번호",
        "양말",
        "스트링백",
        "쥬라기파크 관련 카드"
      ],
      "pending": "공식은 완주 메달·리유저블백을 안내하며 실제 전원 수령 완료와 구분한다. 9월 17일부터 순차 배송 계획, 배송 전 취소 전액 환불·배송 후 환불 배송비 고객 부담이라는 당시 조건이었다.",
      "verifiedAt": "2026-11-10"
    },
    postRaceNote: "공식 FAQ는 모바일 기록증을 행사 뒤 10KM참가자에게 발송 예정으로 설명한다. 5KM기록증 미수신을 곧바로 발송 오류로 판단하지 않는다. 사무국 운영 기간 표기는 9월 14일~10월 25일로 지났으므로 현재 연락·개인 처리 가능 여부는 구매처·후속 안내에서 확인한다. https://jurassicparkrun.co.kr/",
  },
  {
    id: "daejeon-bbangbbang-run-2026",
    name: "대전 빵빵런 2026",
    date: "2026-10-09",
    month: "10월",
    location: "대전 엑스포시민광장 (대전 서구 둔산대로 169)",
    region: "대전",
    distances: [
      "하프",
      "10K",
      "5K"
    ],
    status: "대회종료",
    isMajor: false,
    website: "https://bbangrun.com/",
    registrationStart: "2026-06-30",
    registrationNote: "지난 일반 참가권 취소·변경 기한은 9월 8일 17:00, 9월 9일 열린 취소 티켓의 별도 취소·환불 기한은 9월 10일 15:00이었다. 과거 취소표 공지를 현재 모집으로 쓰지 않는다.",
    lastVerified: "2026-11-10",
    description: "10월 9·10일 중 선택한 하루에 참가하는 대전 엑스포시민광장 하프·10K·5K 대회였다. 공식 리플렛은 전 종목 넷타임 계측과 하프 3시간·10K/5K 1시간 30분 제한을 안내한다. 10월 23일 공지의 사진 다운로드 기한은 11월 6일 15:00으로 지났다. 실제 개인 결과·배송·사진 잔존 여부는 별도 확인 대상이다.",
    raceInfo: {
      "entryFees": [
        {
          "distance": "하프",
          "fee": 69000
        },
        {
          "distance": "10K",
          "fee": 59000
        },
        {
          "distance": "5K",
          "fee": 59000
        }
      ],
      "timeLimits": [
        {
          "distance": "하프",
          "hours": 3,
          "minutes": 0
        },
        {
          "distance": "10K",
          "hours": 1,
          "minutes": 30
        },
        {
          "distance": "5K",
          "hours": 1,
          "minutes": 30
        }
      ],
      "startTime": "07:30"
    },
    raceKit: {
      "items": [
        "공식 티셔츠(기능성 폴리)",
        "배번호표·기록칩",
        "완주메달",
        "빵가방 — 성심당 튀김소보로 · 하레하레 마시멜로 속 갸또 · 몽심 밀키연유 마들렌 · 소금빵(점선면·ㅅㄱㅃ·비머스트 중) · 삼정수제강정 귤모찌 각 1개",
        "풍년제과 우리밀 저당 초코파이 · 빙그레 아이스크림(3종 중 랜덤) · 베러블 카페인 스틱 · 백산수 500ml · 링티 500ml"
      ],
      "pending": "9월 28일 후속 공지에서 티셔츠·배번/기록칩 순차 배송 시작을 안내했다. 별도 구매한 반다나·클릭커를 기본 지급품과 구분하며 나머지는 현장 수령 계획이었다. FAQ의 9월 29일 계획과 차이를 남긴다.",
      "verifiedAt": "2026-11-10"
    },
    logistics: {
      "parking": "행사장 주차 공간이 협소해 공식은 대중교통 이용을 권장",
      "publicTransport": "버스 911(예술의전당 정문) · 606(평송청소년문화센터) · 104·604·301·705·918(서구보건소) / 지하철 정부청사역 3번 출구 도보 약 20분",
      "shuttle": "서울 잠실종합운동장역 왕복 셔틀 35,000원(참가권 구매자만) — 05:10·06:00 출발, 행사장 13:00 복귀. 공식은 06:00편이 하프·10K 출발 시각을 맞추기 어려울 수 있다고 안내",
      "bagStorage": true
    },
    postRaceNote: "10월 23일 공식 사진 공지는 11월 6일 15:00까지 다운로드를 안내해 현재 기한이 지났다. FAQ의 9월 29일 배송 계획보다 나중인 9월 28일 공지는 그날 순차 발송 시작을 알렸다. 날짜·코스·그룹·주문번호와 실제 받은 물품을 나눠 확인한다. https://bbangrun.com/notice",
  },
  {
    id: "smtown-run-club-2026",
    name: "SMTOWN RUN CLUB 26",
    date: "2026-10-03",
    month: "10월",
    location: "왕산마리나항 (인천 중구 영종도)",
    region: "인천",
    distances: [
      "10K"
    ],
    status: "대회종료",
    isMajor: false,
    website: "https://smtownrunclub.com",
    registrationStart: "2026-08-06",
    registrationEnd: "2026-09-10",
    registrationNote: "1차(8/6~8/13 KREAM 선착순) 매진, 2차(8/18 18시~9/10, 추가 확보 수량) 판매 종료 — 2026-09-18 KREAM 상품 페이지 확인. 양도·재판매 불가",
    lastVerified: "2026-11-10",
    description: "10월 3일 왕산마리나항 10K행사로 공식 홈이 행사 종료·참가신청 마감을 표시한다. 주최FAQ는 넷타임 계측·2시간 제한, 랜덤 출발 그룹을 안내한다. 공연은 배번호 지참·전 구역 스탠딩·그룹별 입장이며 미참여·미완주 참가자는 모든 그룹 입장 뒤 순차 입장이 가능하다는 조건이었다. 실제 개인 기록·전원 키트 수령·공연 입장 결과를 이번에 조회한 것은 아니다.",
    raceInfo: {
      "entryFees": [
        {
          "distance": "10K",
          "fee": 89000
        }
      ],
      "timeLimits": [
        {
          "distance": "10K",
          "hours": 2,
          "minutes": 0
        }
      ],
      "startTime": "10:00"
    },
    raceKit: {
      "items": [
        "러닝 티셔츠(효성티앤씨)",
        "러닝 캡",
        "러닝 짐색",
        "배번호표(기록칩 부착)",
        "뷰티·보급품 — 제로이드 마스크팩 · 우르오스 페이스워시 100g · 토코보 미니 선스틱 · 스포식스 부스터 젤 60g · 리바이탈 드링크 100ml · 플비아 초콜릿 · 리플렛·스티커팩",
        "완주메달(뒷면 \"FINISHER 10K 2026.10.03\")"
      ],
      "pending": "클럽 키트는 국내 참가자에게 대회 전 택배 발송(발송일 미공지), 해외 참가자는 당일 현장 수령",
      "verifiedAt": "2026-09-18"
    },
    logistics: {
      "parking": "행사장과 인근 주차 불가 — 공식은 영종역·운서역·을왕리 쪽 공영주차장 이용을 권장",
      "publicTransport": "공항철도 영종역·운서역·공항화물청사역에서 무료 셔틀 연계",
      "shuttle": "무료 셔틀(예약 없음, 입석 불가) 행사장행 07:30~09:00 · 귀가 16:30~18:00 — 영종역 2번 출구, 운서역 1번 출구 건너편(하워드존슨호텔 정류장), 공항화물청사역 2번 출구, 인천공항 T2 1층 단체버스 승강장 6A·7A. 카카오T 유료 셔틀은 서울 8곳·경기 6곳·부산·대구·대전·광주 등에서 운행",
      "bagStorage": true
    },
    postRaceNote: "10K공식 안내는 넷타임·2시간 제한이다.12:35마라톤 종료 시간표를 개인2시간35분 제한으로 해석하지 않는다. 미참여·미완주자는 공연 일괄 입장 불가가 아니라 모든 그룹 뒤 입장이라는FAQ조건을 구분한다. 과거 셔틀·판매 정보가 현재 운행·차기 모집을 뜻하지 않는다. 공식 https://smtownrunclub.com/",
  },
  {
    id: "marvel-run-korea-2026",
    name: "2026 마블런 코리아 (MARVEL RUN KOREA)",
    date: "2026-10-31",
    month: "10월",
    location: "인제스피디움 (강원 인제군 기린면 상하답로 130)",
    region: "강원",
    distances: [
      "10K",
      "5K"
    ],
    status: "대회종료",
    isMajor: false,
    website: "https://marvelrunkorea2026.com/",
    registrationStart: "2026-09-22",
    registrationEnd: "2026-10-26",
    registrationNote: "공식 홈페이지에서 2026년 9월 22일(화) 오후 2시 접수가 열렸고, 공식 홈페이지 팝업 공지(2026-10-19 게시 확인)로 추가 접수 기간이 10월 14일(수)~10월 26일(월) 17시로 고지됐습니다. 신청 정보 수정·환불도 이 기간 안에서만 가능하고 10월 26일 17시 이후에는 불가합니다. 공식 사이트에 \"오후 5시 접수 마감\"·\"추가 접수가 종료되었습니다\"가 게시돼 접수가 종료됐습니다(2026-10-27 확인). 추가 접수 기간 신청자의 사전 기념품은 택배가 아니라 대회 당일 행사장 \"배번호 수령존\"에서 지급됩니다. 정원·선착순 여부는 별도 고지가 없습니다. 10km는 만 12세 이하 참가 불가이며, 5km·2.3km에는 어린이 참가비가 따로 있습니다.",
    lastVerified: "2026-11-10",
    description: "10월 31일 인제스피디움 일정의 마블런. 공식 홈은 10월 26일 17:00추가접수 종료를 표시한다.10km13:30·5km14:30·2.3km15:00출발 계획과 종목별 요금을 안내하며 실제 출발·완주 인원은 이번에 확인하지 않았다. 버추얼 페이지는 일정·신청 안내 추후 공개로, 이미 모집 중이거나 현장 티켓이 자동 전환된다고 확인한 내용은 아니다.",
    raceInfo: {
      "entryFees": [
        {
          "distance": "10K",
          "fee": 70000
        },
        {
          "distance": "5K",
          "fee": 70000
        },
        {
          "distance": "5K 어린이",
          "fee": 40000
        },
        {
          "distance": "2.3K 패밀리",
          "fee": 55000
        },
        {
          "distance": "2.3K 패밀리 어린이",
          "fee": 40000
        }
      ],
      "startTime": "13:30"
    },
    logistics: {
      "shuttle": "공식 셔틀버스 운영(카카오모빌리티 예약, 9/22 판매 시작). 10/14 공지로 수도권 3개(강남역·잠실역·신도림역)·수도권 외 2개(천안·청주) 노선 추가. 노선별 운행 여부는 10/26 확정되며, 신청 인원이 수도권 26명·수도권 외 22명 미만이면 운행이 취소될 수 있습니다(취소 노선은 티켓 전액 환불)"
    },
    raceKit: {
      "items": [
        "공식 티셔츠(어린이 130·150, 일반 S~4XL)",
        "배번호(뒷면 기록칩 — 2.3km 부문은 기록칩 없음)",
        "응원스카프"
      ],
      "byDistance": [
        {
          "distance": "10km",
          "item": "피니셔 메달(닥터 둠 테마)"
        },
        {
          "distance": "5km",
          "item": "피니셔 메달(토르 테마)"
        },
        {
          "distance": "2.3km",
          "item": "피니셔 메달(캡틴 아메리카 테마)"
        }
      ],
      "pending": "스폰서 패키지는 추후 공개 예정(공식 기념품 페이지 고지). 공식은 기념품 이미지가 예시이며 실제품과 다를 수 있다고 밝혔고, 메달은 상단 시안 이미지 기준으로 제작된다고 적었습니다. 티셔츠·스카프를 종목별로 구분해 지급하는지와 사이즈 선택·변경 방법은 기념품 페이지에 따로 적혀 있지 않습니다.",
      "images": [
        {
          "src": "/images/marathon/marvel-run-korea-2026/kit-1.webp",
          "alt": "2026 마블런 코리아 10km 피니셔 메달 공식 시안(앞·뒤)"
        },
        {
          "src": "/images/marathon/marvel-run-korea-2026/kit-2.webp",
          "alt": "2026 마블런 코리아 5km 피니셔 메달 공식 시안(앞·뒤)"
        },
        {
          "src": "/images/marathon/marvel-run-korea-2026/kit-3.webp",
          "alt": "2026 마블런 코리아 2.3km 피니셔 메달 공식 시안(앞·뒤)"
        },
        {
          "src": "/images/marathon/marvel-run-korea-2026/kit-4.webp",
          "alt": "2026 마블런 코리아 공식 티셔츠 시안(앞·뒤) — 공식 예시 이미지"
        }
      ],
      "verifiedAt": "2026-10-18"
    },
    postRaceNote: "공식 신청조회는 지난 신청 내역 확인 경로이며 새 참가권 판매 증거가 아니다. 공개 텍스트만으로 최신FAQ·공지 전체와 최종 기록증·사진 제공을 충분히 확인하지 못했다. 운영 문의 02-338-0344·평일 10:00~17:00(점심 12:30~13:30). https://marvelrunkorea2026.com/virtual 은 일정·신청 안내 추후 공개 문구다.",
  },
];
