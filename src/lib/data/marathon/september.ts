import type { MarathonEvent } from '@/types/marathon';

export const septemberEvents: MarathonEvent[] = [
  {
    id: "seoul-olympic-88run-2026",
    name: "2026 서울올림픽기념 88RUN",
    date: "2026-09-12",
    month: "9월",
    location: "하남 미사경정공원 (경기 하남시)",
    region: "경기",
    distances: [
      "10K",
      "5K"
    ],
    status: "대회종료",
    isMajor: false,
    website: "https://88run.kr/",
    description: "9월 12일 하남 미사경정공원 일정의88RUN. 공식은1인10,000원·계획1,988명과 10km·5km·가족런을 안내했다.5km는 기록칩·기록 미제공으로 10km기록 안내와 구분한다. 스탬프별 먹거리·경품 추첨권은 기본 참가품·실제 당첨과 다른 조건이었다.",
    courseInfo: {
      "courseDescription": "하남 미사경정공원 일대10km·5km·가족런 안내이며 세부 고도와 난이도는 이번 확인 범위 밖이다."
    },
    raceInfo: {
      "entryFees": [
        {
          "distance": "10K",
          "fee": 10000
        },
        {
          "distance": "5K",
          "fee": 10000
        }
      ],
      "expectedParticipants": 1988,
      "startTime": "08:30"
    },
    raceKit: {
      "pending": "참가 기념품 구성은 공식이 이미지로만 안내해 확인하지 못했습니다. 부스 참여 기념품(에너지젤·샤워타월·생수 등)과는 별개입니다.",
      "verifiedAt": "2026-08-24"
    },
    registrationStart: "2026-08-14",
    lastVerified: "2026-11-10",
    registrationNote: "지난 접수는 8월 14일11시부터 결제 완료자 순 모집 안내였다. 환불 신청 기한 8월 21일15시는 지났으며 현재 추가 참가권 재고·차기 모집은 확인하지 않았다.",
    postRaceNote: "공식 FAQ는 5km계측·기록 미제공,10km기록은 행사 뒤 24시간 내SMS및홈페이지 확인을 계획했다. 전원 실제 수신 완료로 확정하지 않는다. 신청 종목·배번호와 본인 연락처를 대조해 문의할 사항이다. https://88run.kr/",
  },
  {
    id: 'ansan-marathon-2026',
    name: '2026 안산마라톤대회',
    date: '2026-09-20',
    month: '9월',
    location: '대부바다향기테마파크 (경기 안산시 대부도)',
    region: '경기',
    distances: ['하프', '10K', '5K'],
    status: '대회종료',
    isMajor: false,
    website: 'https://ansanrun.com/',
    registrationNote: '선착순 6,000명 마감(결제 완료 기준) — 마감일 미고지, 조기 마감 가능(공식 FAQ)',
    raceKit: {
      items: ['쌀 3kg', '소비쿠폰 5,000원권(5km 제외)', '배번호', '완주메달', '완주 간식'],
      byDistance: [{ distance: '5km', item: '소비쿠폰 제외 — 쌀·배번호·메달·간식은 동일' }],
      pending: '공식 고지: 메달 디자인은 변경 예정, 기념품 색상·디자인 일부 변경 가능',
      images: [
        { src: '/images/marathon/ansan-marathon-2026/kit-1.webp', alt: '2026 안산마라톤 공식 기념품 안내 — 하프·10km 구성' },
        { src: '/images/marathon/ansan-marathon-2026/kit-2.webp', alt: '2026 안산마라톤 공식 기념품 안내 — 5km 구성' },
      ],
      verifiedAt: '2026-08-27',
    },
    lastVerified: '2026-11-11',
    description:
      '시화호 남안 대부도에서 열리는 안산시체육회·경기일보 주최 대회. 안산포도축제와 연계되며 기념품으로 쌀 3kg과 소비쿠폰을 제공합니다(5km 제외). 선착순 6,000명 결제 완료자 기준으로 마감되며, 제한시간은 하프 3시간·10km 2시간·5km 1시간. 5km는 기록칩이 제공되지 않습니다.',
    courseInfo: {
      courseDescription: '대부바다향기테마파크 출발 → 대부도 내륙 도로 왕복. 시화호 풍광을 배경으로 하지만 코스 자체는 대부도 내륙이며 시화방조제·조력발전소 구간은 포함되지 않습니다.',
    },
    raceInfo: {
      entryFees: [
        { distance: '하프', fee: 40000 },
        { distance: '10K', fee: 40000 },
        { distance: '5K', fee: 25000 },
      ],
      startTime: '09:00',
      timeLimits: [
        { distance: '하프', hours: 3, minutes: 0 },
        { distance: '10K', hours: 2, minutes: 0 },
        { distance: '5K', hours: 1, minutes: 0 },
      ],
    },
    factCheck: {
      checkedAt: '2026-11-11',
      sources: [
        { title: '2026 공식 종목·참가비·5K 기록칩 제외', url: 'https://ansanrun.com/new_sub01/page01.php' },
        { title: '공식 FAQ 제한시간·출발시각', url: 'https://ansanrun.com/' },
      ],
      note: '요강은 하프·10K 각 4만원, 5K 2만5천 원과 09:00 출발을 안내합니다. 첫 화면의 전 종목 기록측정 문구와 달리 상세 요강·FAQ는 5K 칩 제외라고 명시해 상세 조건을 따릅니다. 출처 없는 중급·평지 등급은 철회했습니다. 기념품 원본·디자인 확인일은 기존 별도 확인일을 유지합니다.',
    },
  },
  {
    id: "hyundai-forest-run-2026",
    name: "2026 현대자동차 포레스트런",
    date: "2026-09-12",
    month: "9월",
    location: "여의도공원 문화의 마당",
    region: "서울",
    distances: [
      "10K"
    ],
    status: "대회종료",
    isMajor: true,
    website: "https://www.hyundai.com/kr/ko/brand/forestrun",
    registrationStart: "2026-08-03",
    registrationEnd: "2026-08-06",
    registrationNote: "접수 종료 — 최종 신청기간은 8월 3일(월) 10시 ~ 8월 6일(목) 23시 59분 선착순이었습니다. 7월 16일 최초 발표의 \"7월 23일 개시\"에서 변경된 일정입니다(공식 파이널런 안내 2026-08-31 확인)",
    raceKit: {
      "items": [
        "포레스트런 러닝 패키지 — 9월 3일부터 순차 배송",
        "기념 티셔츠(옥수수 추출물 37% 소로나 섬유, 신청 시 고른 사이즈는 변경 불가)",
        "나일론 러닝캡",
        "러닝 짐색 — 당일 물품보관에 필요하므로 반드시 지참"
      ],
      "verifiedAt": "2026-08-31"
    },
    lastVerified: "2026-11-10",
    description: "9월 12일 포레스트런 일정은 지났다. 공식 최종 접수는 8월 3~6일이었다. 50,000원은 기부금 30,000원과 참가비 20,000원으로 구분하고 영수증은 별도 본인 확인 절차다. 한 명당 약 15그루는 캠페인 계획으로 실제 식재 완료와 다르다.",
    courseInfo: {
      "courseDescription": "파이널런은 여의도공원에서 서강대교를 지나 광흥창역 인근 반환을 안내한다. 2026 타임테이블은 06:30 집결·07:30 출발이나 같은 페이지에 과거 5월 17일 문구도 남아 있어 구분해야 한다. 기존 재구성 GPX의 정밀 고도·실제 주행 결과는 이번 범위 밖이다.",
      "gpx": {
        "file": "/data/gpx/hyundai-forest-run-2026.gpx",
        "source": "reconstructed",
        "verifiedAt": "2026-08-23",
        "sourceNote": "현대자동차 공식 홈페이지가 텍스트로 밝힌 경유지를 OSM 보행 도로망 위에서 새로 이었다",
        "sourceUrl": "https://www.hyundai.com/kr/ko/brand/forestrun/forestrun-apply/finalrun"
      }
    },
    raceInfo: {
      "entryFees": [
        {
          "distance": "10K",
          "fee": 50000
        }
      ],
      "startTime": "07:30"
    },
    postRaceNote: "공식 기부 참가권은 비경쟁 러닝으로 설명하며 파이널런에는 넷타임 계측 안내가 있다. 비경쟁을 비계측으로 바꾸지 않는다. 영수증은 구매자 전용 공식 안내 경로로 확인하며 실제 발급 완료는 미조회다. https://www.hyundai.com/kr/ko/brand/forestrun/forestrun-apply/donation-ticket",
  },
  {
    id: "run-seoul-run-2026",
    name: "런서울런 2026 (제20회 일간스포츠 서울마라톤)",
    date: "2026-09-13",
    month: "9월",
    location: "서울광장 (서울 중구 세종대로 110)",
    region: "서울",
    distances: [
      "하프",
      "10K"
    ],
    status: "대회종료",
    isMajor: true,
    website: "https://runseoulrun.com/",
    registrationNote: "지난 접수는 6월 29일 10시부터 결제 기준 선착순 계획이었다. 공식 FAQ는 개인 신청·카드 결제와 단체 신청 불가를 안내한다. 환불·정보 변경 기한 8월 14일 17시는 지났다.",
    raceKit: {
      "items": [
        "기념 티셔츠(노스페이스, 택배 발송)",
        "노스페이스 러닝 양말",
        "배번호(택배 발송)",
        "완주메달(현장 지급)",
        "할리스 기프트 카드 5,000원권",
        "에너지 젤·리커버리 등 협찬 물품"
      ],
      "byDistance": [
        {
          "distance": "하프",
          "item": "헤어 리커버리 샴푸 50ml·파워에이드 (하프 한정)"
        },
        {
          "distance": "10km",
          "item": "캐옴 당근 (10km 한정)"
        }
      ],
      "images": [
        {
          "src": "/images/marathon/run-seoul-run-2026/kit-1.webp",
          "alt": "2026 런서울런 공식 기념 티셔츠 (노스페이스)"
        },
        {
          "src": "/images/marathon/run-seoul-run-2026/kit-2.webp",
          "alt": "2026 런서울런 완주메달 공식 시안"
        },
        {
          "src": "/images/marathon/run-seoul-run-2026/kit-3.webp",
          "alt": "2026 런서울런 노스페이스 러닝 양말"
        }
      ],
      "verifiedAt": "2026-08-27"
    },
    lastVerified: "2026-11-10",
    description: "9월 13일 런서울런 일정은 지났다. 공식 시간표는 하프 07:30·10K 07:50 출발을 구분한다. 표시 참가비는 하프 80,000원·10K 70,000원, 12,000명은 모집 계획이다. 하프 전용·10K 전용 지급품과 최소 주문 조건이 있는 할인권은 별도 항목이다.",
    courseInfo: {
      "courseDescription": "서울광장 일정의 종목별 출발 계획은 하프 07:30·10km 07:50이다. 정확한 고도·난이도·개인 PB를 보장하는 자료는 이번에 확인하지 않았다."
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
        }
      ],
      "startTime": "07:30"
    },
    postRaceNote: "기념품 목록은 샴푸·파워에이드를 하프 전용, 캐옴 당근을 10K 전용으로 적는다. 할리스 5,000원 기프트카드와 땡겨요 3,000원 할인권(12,000원 이상 구매 조건)을 모두 무조건 현금처럼 더하지 않는다. 개인 기록·사진·수령 완료는 미조회다. https://runseoulrun.com/",
  },
  {
    id: 'sunsa-marathon-festival-2026',
    name: '2026 선사마라톤축제 (제20회)',
    date: '2026-09-20',
    month: '9월',
    location: '암사동 유적 앞 특설무대 (서울 강동구)',
    region: '서울',
    distances: ['하프', '10K', '5K'],
    status: '대회종료',
    isMajor: false,
    website: 'https://www.gangdong.go.kr/web/newportal/press/15189',
    description:
      '강동구육상연맹이 주관하고 강동구가 후원한 2026년 9월 20일 대회입니다. 서울 암사동 유적과 암사초록길·한강을 잇는 하프·10K·5K 달리기·걷기를 운영했으며 참가비는 3만원이었습니다. 강동구민 모집은 6월 8일, 일반 모집은 6월 11일 시작으로, 6월 11일을 접수 마감일로 적었던 문구를 정정했습니다.',
    courseInfo: {
      courseDescription: '강동구 공식 공고는 서울 암사동 유적에서 암사초록길로 한강에 진입하고, 광나루·잠실 한강공원 구간을 이용한다고 안내했습니다. 공고상 교통 통제 없이 운영하도록 계획한 경로입니다.',
    },
    raceInfo: {
      entryFees: [
        { distance: '하프', fee: 30000 },
        { distance: '10K', fee: 30000 },
        { distance: '5K', fee: 30000 },
      ],
    },
    registrationStart: '2026-06-08',
    registrationNote: '강동구 2026 공고: 구민 1,000명은 6월 8일 10시부터, 일반 1,800명은 6월 11일 10시부터 선착순 모집. 공고에 최종 마감일은 명시하지 않았습니다.',
    factCheck: {
      checkedAt: '2026-11-11',
      sources: [
        { title: '강동구 2026 모집·종목·코스 공식 공고', url: 'https://www.gangdong.go.kr/web/newportal/press/15189' },
      ],
      note: '대회 홈페이지 gomarathon.co.kr은 이번 접속에서 인증서 오류로 읽지 못해 강동구 보존 공고로 연결합니다. 6월 11일은 일반 모집 시작일입니다. 근거를 확정하지 못한 초보자 등급·평지·최종 09:00 출발·러닝자켓 단정은 표시하지 않습니다.',
    },
    lastVerified: '2026-11-11',
  },
  {
    id: "mudo-run-gyeongju-2026",
    name: "2026 무한도전 RUN in 경주",
    date: "2026-09-19",
    month: "9월",
    location: "경주시민운동장",
    region: "경북",
    distances: [
      "하프",
      "10K"
    ],
    status: "대회종료",
    isMajor: true,
    website: "https://www.coupangplay.com/promotion/2026-Mudorun-Gyeongju",
    registrationStart: "2026-09-03",
    registrationEnd: "2026-09-10",
    registrationNote: "공식 페이지는 예매 종료를 표시한다. 남아 있는 2차 취소 티켓 기간은 9월 3일 16:00~9월 10일 23:59였고 해당 구매자는 당일 레이스팩 현장 수령 조건이었다. 과거 취소 티켓 공지가 현재 판매·다음 회차 접수를 뜻하지 않는다.",
    description: "9월 19일 경주시민운동장 15:30 집결·16:30 출발 계획의 하프·10K 대회. 공식은 최초 출발부터 하프 2시간 30분·10K 1시간 30분 제한을 명시했다. 실제 이용자 정보 등록과 취소 티켓의 현장 수령, 사전 신청 셔틀 조건을 구매 내역과 구분해야 한다. 실제 개인 기록·전원 물품 수령은 이번에 조회하지 않았다.",
    courseInfo: {
      "courseDescription": "공식은 경주시민운동장 출발·첨성대 경유의 하프·10km 두 코스와 각각의 약도를 공개했다. 세부 고도·모든 경유지·난이도는 이번 텍스트 대조 범위 밖이며 현장 운영에 따라 변경될 수 있다는 조건이었다."
    },
    raceInfo: {
      "entryFees": [
        {
          "distance": "하프",
          "fee": 119900
        },
        {
          "distance": "10K",
          "fee": 99900
        }
      ],
      "startTime": "16:30",
      "timeLimits": [
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
    lastVerified: "2026-11-10",
    postRaceNote: "9월 3~10일 2차 취소 티켓 구매자는 레이스팩 사전 배송 없이 현장 수령 조건이었다. 참가정보와 배번호·신분증을 대조하고 개인 계측 기록과 최초 출발 기준 운영 제한을 구분한다. 과거 KTX경주역 셔틀은 사전 신청 필수로 현재 운행 정보가 아니다. 공식 https://www.coupangplay.com/promotion/2026-Mudorun-Gyeongju",
  },
  {
    id: "gongju-baekje-marathon-2026",
    name: "2026 공주백제마라톤",
    date: "2026-09-20",
    month: "9월",
    location: "공주시민운동장",
    region: "충남",
    distances: [
      "풀코스",
      "하프",
      "10K"
    ],
    status: "대회종료",
    isMajor: true,
    website: "https://www.gongjumarathon.com/",
    description: "9월 20일 08:00 개최한 2026 대회. 공식 요강은 풀·32.195km·하프·10km 네 종목이며 일반/매니아 요금은 풀·32.195km 70,000/60,000원, 하프 60,000/50,000원, 10km 50,000/40,000원이었다. 매니아는 티셔츠 미지급. 9월 22일 검수 완료 공지는 스마트칩 동아 기록실에서 공식 기록증을 확인하도록 안내한다.",
    courseInfo: {
      "courseDescription": "공주시민운동장을 대회장으로 하는 풀·32.195km·하프·10km 대회. 거리·제한시간은 2026 공식 요강을 기준으로 보며 다음 시즌 코스와 난이도는 별도 확인한다."
    },
    raceInfo: {
      "entryFees": [
        {
          "distance": "풀코스",
          "fee": 70000
        },
        {
          "distance": "32K",
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
      "expectedParticipants": 12000,
      "startTime": "08:00",
      "timeLimits": [
        {
          "distance": "풀코스",
          "hours": 5,
          "minutes": 0
        },
        {
          "distance": "32.195km",
          "hours": 4,
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
    raceKit: {
      "items": [
        "티셔츠(아디다스)",
        "완주메달",
        "배번호"
      ],
      "images": [
        {
          "src": "/images/marathon/gongju-baekje-marathon-2026/kit-1.webp",
          "alt": "2026 공주백제마라톤 완주메달 — 공식 예시 이미지(이름·기록·색상 등 변경 가능 고지)"
        }
      ],
      "pending": "배번호 디자인은 부문·그룹별 예시만 공개(2026-09-09 확인), 실제 배번호는 참가자 개별 지급 시 확정",
      "verifiedAt": "2026-09-09"
    },
    registrationStart: "2026-05-21",
    postRaceNote: "2026 대회 종료. 종이기록증 신청은 10월 14일 14:00까지로 기한 경과. 국내 주소만 우편 발송하며 재발송 불가, 신청 뒤 주소 변경은 사무국 문의 조건이다(11/10 공식 9/22·10/7 공지 대조).",
    lastVerified: "2026-11-10",
  },
  {
    id: 'cheorwon-dmz-peace-marathon-2026',
    name: '2026 철원DMZ국제평화마라톤',
    date: '2026-09-05',
    month: '9월',
    location: '강원 철원 고석정',
    region: '강원',
    distances: ['풀코스', '하프', '10K'],
    status: '대회종료',
    isMajor: false,
    website: 'https://www.dmzrun.kr/',
    description:
      '비무장지대 인근 고석정 일대를 달리는 평화 테마 마라톤 23회차. 9월 대회지만 접수는 2월에 시작해 4월 5일 이미 마감됐습니다. 풀·하프·10km 외에 기록칩 없는 코스모스 10리길 걷기(30,000원) 종목도 있습니다. 제한시간은 풀 5시간·하프 3시간·10km 1시간 30분.',
    raceInfo: {
      entryFees: [
        { distance: '풀코스', fee: 50000 },
        { distance: '하프', fee: 45000 },
        { distance: '10K', fee: 40000 },
        { distance: '코스모스 10리길 걷기', fee: 30000 },
      ],
      startTime: '09:00',
    },
  },
  {
    id: 'suncheonman-ultra-2026',
    name: '2026 순천만울트라마라톤',
    date: '2026-09-05',
    month: '9월',
    location: '전남 순천 동천천변공원',
    region: '전남',
    distances: ['울트라'],
    status: '대회종료',
    isMajor: false,
    website: 'http://www.scultra100.net/',
    registrationStart: '2026-04-01',
    registrationEnd: '2026-08-24',
    raceKit: {
      items: ['기념품 — 스포엑스 모자·햇빛가리개', '완주증(기록증)', '배번호 2매'],
      images: [{ src: '/images/marathon/suncheonman-ultra-2026/kit-1.webp', alt: '2026 순천만 울트라마라톤 공식 기념품 시안' }],
      verifiedAt: '2026-08-27',
    },
    lastVerified: '2026-08-27',
    description:
      '순천만 생태공원 주변을 도는 102km 단일 종목 울트라마라톤 20회차. 9월 5일 오후 5시 출발해 밤을 새워 달리며 제한시간은 18시간입니다. 접수는 8월 24일까지.',
    raceInfo: {
      entryFees: [{ distance: '울트라', fee: 80000 }],
      startTime: '17:00',
    },
  },
  {
    id: 'gapyeong-jaraseom-marathon-2026',
    name: '2026 가평자라섬 전국마라톤',
    date: '2026-09-20',
    month: '9월',
    location: '경기 가평종합운동장',
    region: '경기',
    distances: ['하프', '10K', '5K'],
    status: '대회종료',
    isMajor: false,
    website: 'http://www.gprun.com/',
    description:
      '자라섬 인근 코스를 달리는 가을 시즌 가족 참여형 마라톤 19회차. 하프·10km·5km 외에 10km 커플런과 4.2km 패밀리런도 운영합니다. 접수는 4월 14일 시작해 선착순 5,000명으로 5월 30일 마감됐습니다.',
    raceInfo: {
      entryFees: [
        { distance: '하프', fee: 50000 },
        { distance: '10K', fee: 45000 },
        { distance: '5K', fee: 40000 },
      ],
      startTime: '08:30',
    },
  },
  {
    id: 'ganghwa-beach-marathon-2026',
    name: '2026 강화해변마라톤 (제26회)',
    date: '2026-09-13',
    month: '9월',
    location: '강화함상공원 (인천 강화)',
    region: '인천',
    distances: ['하프', '10K', '5K'],
    status: '대회종료',
    isMajor: false,
    website: 'https://ganghwamarathon.co.kr',
    registrationNote: '결제 완료순 3,500명 선착순 마감 — 마감일 미고지',
    raceKit: {
      items: ['DRSKIN 무봉제 싱글렛(전 참가자)', '배번호', '완주메달', '완주 간식'],
      byDistance: [{ distance: '하프·10km', item: '러닝 슬림 벨트·기록칩·온라인 기록증 (5km·가족런 제외)' }],
      images: [{ src: '/images/marathon/ganghwa-beach-marathon-2026/kit-1.webp', alt: '2026 강화해변마라톤 공식 기념품 안내' }],
      verifiedAt: '2026-08-27',
    },
    lastVerified: '2026-11-11',
    description:
      '인천일보가 주최한 2026년 9월 13일 대회로 강화함상공원에서 08:30 출발했습니다. 하프·10K는 각 4만5천 원, 5K는 4만원이었고, 커플런 10K는 2인 1팀 8만원, 가족런 5K는 1인 3만5천 원으로 과금 단위가 다릅니다. 3,500명은 선착순 모집 인원입니다.',
    courseInfo: { courseDescription: '강화함상공원을 기점으로 종목별 하프·10K·5K 코스도를 공식 홈페이지에서 제공합니다. 이 페이지의 출처 없는 초보자·평지 등급은 철회했습니다.' },
    raceInfo: {
      entryFees: [
        { distance: '하프', fee: 45000 },
        { distance: '10K', fee: 45000 },
        { distance: '5K', fee: 40000 },
        { distance: '커플런(10K·2인 1팀)', fee: 80000 },
        { distance: '가족런(5K·1인)', fee: 35000 },
      ],
      startTime: '08:30',
      timeLimits: [
        { distance: '하프', hours: 3, minutes: 0 },
        { distance: '10K', hours: 2, minutes: 0 },
        { distance: '5K', hours: 1, minutes: 0 },
      ],
      aidInterval: '공식 유의사항: 매 5km 급수, 하프 15km 영양 간식 안내',
    },
    logistics: { parking: '공식 유의사항은 주차공간이 협소하므로 대중교통 이용을 권고합니다.' },
    factCheck: {
      checkedAt: '2026-11-11',
      sources: [
        { title: '2026 공식 종목·참가비·모집 안내', url: 'https://ganghwamarathon.co.kr/' },
        { title: '공식 제한시간·급수·교통 유의사항', url: 'https://ganghwamarathon.co.kr/precaution.php' },
      ],
      note: '커플런 가격을 1인 환산가 4만원만으로 표기하지 않고 실제 2인 팀 결제금액 8만원으로 정정했습니다. 가족런은 1인 금액입니다. 5K는 기록칩·온라인 기록증 제공에서 제외됐으며, 모집 인원과 실제 완주 인원은 구분합니다. 기념품 사진 확인일은 별도입니다.',
    },
  },
  {
    id: "ytn-seoul-tour-marathon-2026",
    name: "2026 YTN 서울투어마라톤",
    date: "2026-09-06",
    month: "9월",
    location: "서울광장 (서울 중구)",
    region: "서울",
    distances: [
      "하프",
      "11K"
    ],
    status: "대회종료",
    isMajor: true,
    website: "https://run.ytn.co.kr",
    registrationStart: "2026-06-17",
    registrationEnd: "2026-06-26",
    registrationNote: "6월 26일 공식 모집 마감 공지는 모든 코스의 선착순 마감과 기념품 제작에 따른 취소·환불 불가를 알렸다. 홈의 7월 10일 17시 표기는 예정 접수 범위로 실제 조기 마감과 구분한다. https://run.ytn.co.kr/community/index01.php?group=basic&code=B5&abmode=view&no=8124",
    raceKit: {
      "items": [
        "공식 티셔츠(85~115)",
        "헤드밴드",
        "양말",
        "배번호·기록칩",
        "완주메달"
      ],
      "pending": "8월 26일 최신 발송 공지는 무신사 패키지를 안내한다. 초기 기념품 페이지와 구분하며 모든 개인 배송·반송 처리는 별도 확인이다.",
      "images": [
        {
          "src": "/images/marathon/ytn-seoul-tour-marathon-2026/kit-1.webp",
          "alt": "2026 서울투어마라톤 공식 기념품 안내 — 무신사 티셔츠·헤드밴드·양말"
        }
      ],
      "verifiedAt": "2026-11-10"
    },
    lastVerified: "2026-11-10",
    description: "9월 6일 YTN 서울투어마라톤은 하프·11KM 일정이었다. 공식 FAQ는 종목과 관계없이 제출 기록에 따라 07:30부터 그룹별 순차 출발을 안내한다. 예정 접수 종료 7월 10일과 별개로 6월 26일 모든 코스 선착순 마감 공지가 있다. 8월 26일 배송 공지의 현장 수령은 반송 완료 물품에 한한 조건이었다.",
    courseInfo: {
      "certification": "없음",
      "courseDescription": "2026 공식 코스도 게시됨(종목별 이미지 지도, 고저도·급수 정보는 없음). 11K는 서울광장 출발 → 종로 → 동대문역 반환 → 세종대로·숭례문 → 을지로3가역 반환 → 청계천 광교 → 무교로 피니시. 하프는 여기에 청계천변 왕복(청계9가·고산자교·용두역 반환)이 더해집니다. \"현장 상황에 따라 변경될 수 있음\" 단서 유지(2026-08-27 공식 코스도 확인)."
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
      "expectedParticipants": 15000,
      "startTime": "07:30"
    },
    postRaceNote: "반송 완료된 사전 패키지만 당일 신분증 확인 후 현장 수령하도록 안내했다. 일반 배송 지연 전부에 새 물품을 지급한다는 조건은 아니다. 당일 기간이 지난 미수령·기록 문의는 070-7725-6258·run.ytn@gmail.com에서 개인 내역과 확인할 사항이다. https://run.ytn.co.kr/community/index01.php?group=basic&code=B5&abmode=view&no=13765",
  },
  {
    id: 'kimdaejung-peace-marathon-2026',
    name: '제11회 김대중 평화 마라톤',
    date: '2026-09-06',
    month: '9월',
    location: '뚝섬 한강공원 수변무대 (서울 광진구)',
    region: '서울',
    distances: ['하프', '10K', '5K'],
    status: '대회종료',
    isMajor: false,
    website: 'https://kdjrun.kr/',
    registrationEnd: '2026-08-30',
    registrationNote:
      '접수 종료 — 공식 접수기간은 8월 30일까지였습니다. 기념품 택배 수령지 변경도 8월 16일로 이미 마감됐습니다(공식 홈 2026-08-31 확인)',
    raceKit: {
      items: ['기념 티셔츠(랜덤 발송, 85~110)', '완주메달', '간식(빵·음료)', '모바일 기록증(전 종목)'],
      pending: '공식 고지: 기념품과 경품은 변경될 수 있음',
      images: [{ src: '/images/marathon/kimdaejung-peace-marathon-2026/kit-1.webp', alt: '2026 김대중평화마라톤 공식 기념품 안내' }],
      verifiedAt: '2026-08-27',
    },
    lastVerified: '2026-11-11',
    description:
      '김대중재단이 주최한 2026년 9월 6일 대회로, 뚝섬 한강공원 수변무대에서 하프·10K·5K를 운영했습니다. 참가비는 전 종목 5만원이며, 9월 3일 최종 출발 공지는 하프 08:00부터 종목·그룹별로 순차 출발하도록 안내했습니다.',
    raceInfo: {
      entryFees: [
        { distance: '하프', fee: 50000 },
        { distance: '10K', fee: 50000 },
        { distance: '5K', fee: 50000 },
      ],
      startTime: '08:00',
    },
    logistics: { bagStorage: true },
    factCheck: {
      checkedAt: '2026-11-11',
      sources: [
        { title: '공식 2026 이미지 요강·전 종목 참가비', url: 'https://kdjrun.kr/info/' },
        { title: '9월 3일 최종 종목·그룹 출발시간', url: 'https://kdjrun.kr/community/view.asp?cates=notice&idx=839' },
        { title: '공식 참가자 유의사항·물품보관', url: 'https://kdjrun.kr/info/notice.asp' },
      ],
      note: '공식 이미지 원본을 판독했습니다. 하프 A/B 08:00·08:02, 10K A/B/C 08:05·08:07·08:09, 5K A/B 08:12·08:14 안내이며 현장 변동 가능성이 명시돼 있습니다. 출처 없는 초보자·평지 등급은 철회했고 컷오프·고도는 확정하지 않았습니다.',
    },
  },
  {
    id: 'pohang-secondary-battery-marathon-2026',
    name: '2026 포항2차전지 전국마라톤대회',
    date: '2026-09-13',
    month: '9월',
    location: '포항운하관 주차장 (경북 포항시)',
    region: '경북',
    distances: ['하프', '10K', '5K'],
    status: '대회종료',
    isMajor: false,
    website: 'https://energyrun.co.kr/',
    registrationStart: '2026-06-29',
    registrationNote: '선착순 마감(참가비 입금 완료 기준) — 마감일 미고지',
    raceKit: {
      items: ['기념 티셔츠(PUMA, 85~115)', '완주메달', '기념 양말(VERMON)'],
      pending: '공식은 기념품을 이미지로만 안내 — 품목명은 공식 이미지 판독 기준',
      images: [{ src: '/images/marathon/pohang-secondary-battery-marathon-2026/kit-1.webp', alt: '2026 포항 이차전지 마라톤 공식 기념품 안내 — 푸마 티셔츠·메달·양말' }],
      verifiedAt: '2026-08-27',
    },
    lastVerified: '2026-08-27',
    description:
      '매일신문 주최로 포항운하관 주차장에서 출발하는 하프·10km·5km 전국 마라톤. 오전 8시 출발, 전 종목 기록칩을 사용합니다. 6월 29일 10시부터 선착순 접수이며 고정 마감일 없이 종목별 정원(하프·10km 각 4,000명, 5km 2,000명) 소진 시 마감됩니다. 2025년에는 9월 송도해수욕장에서 열렸으나 2026년은 날짜·장소가 모두 바뀌었습니다.',
    raceInfo: {
      entryFees: [
        { distance: '하프', fee: 50000 },
        { distance: '10K', fee: 40000 },
        { distance: '5K', fee: 35000 },
      ],
      startTime: '08:00',
    },
  },
  {
    id: 'geumsan-insam-festival-marathon-2026',
    name: '2026 금산인삼축제 마라톤',
    date: '2026-09-19',
    month: '9월',
    location: '금산세계인삼엑스포 주차장 (충남 금산군)',
    region: '충남',
    distances: ['하프', '10K'],
    status: '대회종료',
    isMajor: false,
    registrationEnd: '2026-08-14',
    raceKit: {
      items: ['반팔 티셔츠(화이트, 90~110)'],
      images: [{ src: '/images/marathon/geumsan-insam-festival-marathon-2026/kit-1.webp', alt: '2026 금산인삼축제 마라톤 공식 기념 티셔츠 — 공식 예시 이미지(색상·로고 변경 가능 고지)' }],
      verifiedAt: '2026-08-27',
    },
    lastVerified: '2026-08-27',
    description:
      '금산인삼축제와 연계해 열리는 마라톤. 하프·10km 외에 4km 종목(금산군민 할인)도 운영하며, 금산세계인삼엑스포 주차장에서 오전 8시 30분에 집결합니다. 선착순 3,000명으로 접수는 8월 19일 11시까지(입금 8월 20일 11시까지). 3월에 열리는 금산인삼웰빙마라톤과는 다른 대회입니다.',
    website: 'https://mara1080.com/event/2044eb82-fcdb-4e56-b79b-f3543a6a360d',
    raceInfo: {
      entryFees: [
        { distance: '하프', fee: 45000 },
        { distance: '10K', fee: 45000 },
        { distance: '4K', fee: 30000 },
      ],
    },
  },
  {
    id: 'incheon-songdo-half-marathon-2026',
    name: '2026 인천송도국제하프마라톤',
    date: '2026-09-20',
    month: '9월',
    location: '국립인천대학교 송도캠퍼스 정문 (인천 연수구)',
    region: '인천',
    distances: ['하프', '10K', '5K'],
    status: '대회종료',
    isMajor: true,
    website: 'https://songdorun.net/',
    registrationNote: '결제 완료순 15,000명 선착순 마감 — 마감일 미고지',
    raceKit: {
      items: ['DeÉpo 기능성 티셔츠(XS~2XL)', 'DeÉpo 스포츠 양말', 'DeÉpo 쿨 타월', 'DeÉpo 리유저블백', '완주메달', '배번호', '완주 간식'],
      byDistance: [{ distance: '하프·10km', item: '기록칩·온라인 기록증 (5km 제외)' }],
      images: [{ src: '/images/marathon/incheon-songdo-half-marathon-2026/kit-1.webp', alt: '2026 인천 송도 하프마라톤 공식 기념품 안내' }],
      verifiedAt: '2026-08-27',
    },
    lastVerified: '2026-11-11',
    description:
      '경인일보가 주최·주관한 2026년 9월 20일 대회입니다. 국립인천대학교 송도캠퍼스 정문(동문) 앞에서 08:00 출발했으며 하프·10K는 각 5만5천 원, 5K는 5만원이었습니다. 15,000명은 결제완료순 모집 기준입니다. 공식 홈페이지의 8월 7일은 환불 기한으로, 접수 마감일로 단정하지 않습니다.',
    courseInfo: {
      gpx: {
        file: '/data/gpx/incheon-songdo-half-marathon-2026.gpx',
        source: 'reconstructed',
        verifiedAt: '2026-08-30',
        sourceNote: '공식 "코스안내 및 교통통제안내"가 표로 밝힌 통제 지점 여섯 곳과 공식이 붙인 반환 순서(1·2·3차)만 취해 OSM 보행 도로망 위에서 새로 이었다',
        sourceUrl: 'https://songdorun.net/control.php',
        caveat: '공식은 통제 지점의 이름과 반환 순서(1·2·3차)까지만 밝혔고, 지점 사이를 어느 길로 잇는지는 공개하지 않았습니다. 반환점을 각각 왕복하는 구조로 잡은 것은 추론이며 근거는 세 가지입니다 — 그렇게 이었을 때 거리가 하프 공인 거리와 0.8% 차이로 맞고(다른 구조는 크게 모자랍니다), 공식이 반환에 순번을 붙였으며, 왕복이면 두 번 지나는 캠핑장·잭니클라우스의 통제 시간이 실제로 가장 길거나 늦게까지 잡혀 있습니다. 그래도 추정이므로 실제 주로와 다를 수 있습니다.',
      },
      courseDescription: '세 종목 모두 인천대 송도캠퍼스 정문(동문) 앞에서 출발해 같은 자리로 돌아옵니다. 공식 교통통제 안내가 밝힌 코스 지점은 인천대학교 정문도로(출발)·홈플러스 사거리(1차 반환)·송도국제캠핑장 사거리·해양극지연구소(2차 반환)·잭니클라우스 사거리·아트센터 사거리(3차 반환) 여섯 곳입니다. 통제 시간이 구간마다 달라 1차 반환 쪽이 07:30~09:30으로 가장 먼저 풀리고, 잭니클라우스·아트센터 쪽은 08:50~10:40으로 늦게까지 잡혀 있습니다. 공식 코스도는 종목별 이미지 지도로 게시돼 있으며 고저도·급수 정보는 미게시입니다(2026-08-30 공식 코스·교통통제 안내 확인).',
    },
    raceInfo: {
      entryFees: [
        { distance: '하프', fee: 55000 },
        { distance: '10K', fee: 55000 },
        { distance: '5K', fee: 50000 },
      ],
      startTime: '08:00',
      timeLimits: [
        { distance: '하프', hours: 3, minutes: 0 },
        { distance: '10K', hours: 2, minutes: 0 },
        { distance: '5K', hours: 1, minutes: 0 },
      ],
      aidInterval: '공식 유의사항: 매 5km 급수, 하프 15km 영양 간식 안내',
    },
    factCheck: {
      checkedAt: '2026-11-11',
      sources: [
        { title: '2026 공식 참가비·모집·환불 기한', url: 'https://songdorun.net/' },
        { title: '공식 제한시간·급수·5K 기록칩 제외', url: 'https://songdorun.net/precaution.php' },
        { title: '공식 교통통제 지점·시각', url: 'https://songdorun.net/control.php' },
      ],
      note: '8월 7일을 접수 마감일로 사용했던 설명을 철회했습니다. 공식 유의사항의 제한시간·급수를 추가했으며, 기존 지도는 공식 GPX가 아닌 추정 경로라는 고지를 유지합니다. 추정 지도에서 고도·초보자 등급을 계산하지 않았습니다. 기념품 사진 확인일은 별도입니다.',
    },
  },
  {
    id: 'dawn-riverside-marathon-2026',
    name: '제23회 새벽강변 국제마라톤',
    date: '2026-09-06',
    month: '9월',
    location: '서울 양천구 목동종합운동장',
    region: '서울',
    distances: ['하프', '10K', '5K'],
    status: '대회종료',
    isMajor: false,
    website: 'https://www.segye.com/newsView/20260825519920',
    description: '주최사 세계일보가 2026년 8월 26일 발표한 개최 안내는 제23회 새벽강변 국제마라톤을 9월 6일 목동종합운동장에서 열고 안양천을 달린다고 명시했다. 기존 6월 7일·서울 상암 일정으로 안내하지 않는다.',
    factCheck: {
      checkedAt: '2026-11-11',
      sources: [
        { title: '세계일보 주최사 8월 26일 공식 개최 알림', url: 'https://www.segye.com/newsView/20260825519920' },
      ],
      note: '2026년 9월 개최 안내 기록이다. 개최일·장소는 주최사 자료로 대조했다. 참가비·세부 코스·정확한 그룹 출발·실제 완주 집계는 이 자료만으로 확인하지 않았으며 다른 회차 계획을 가져오지 않았다.',
    },
    lastVerified: '2026-11-11',
  },
];
