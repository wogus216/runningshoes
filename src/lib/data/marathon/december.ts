import type { MarathonEvent } from '@/types/marathon';

export const decemberEvents: MarathonEvent[] = [
  {
  "id": "hwangyoungjo-road-race-2026",
  "name": "2026 황영조 로드레이스",
  "date": "2026-12-06",
  "month": "12월",
  "location": "경인아라뱃길 여객터미널 아라타워 일원 (인천)",
  "region": "인천",
  "distances": [
    "하프",
    "10K",
    "5K"
  ],
  "status": "접수중",
  "isMajor": false,
  "website": "https://roadracing.co.kr",
  "registrationEnd": "2026-11-20",
  "registrationNote": "2026-11-10 공식 요강·유의사항과 개인 신청 동의 화면을 확인했습니다. 접수·환불·참가정보 변경은 11월 20일(금) 17:00까지이며 정원 5,000명 선착순입니다. 조기 마감 시 환불 기한도 앞당겨질 수 있습니다. 카드 승인 취소는 전액, 가상계좌는 이체 수수료 500원 공제 안내입니다. 잔여 정원·실제 결제 성공은 확인하지 않았습니다.",
  "lastVerified": "2026-11-10",
  "description": "인천광역시 육상연맹의 12월 6일 경인아라뱃길 대회입니다. 오전 8시 집결·9시 출발, 하프·10km 각 5만원·5km 4만 5천원입니다. 하프는 만 18세 이상이며 PB 1시간 30분 이내·10km 1시간 이내가 A그룹, 초과는 B그룹입니다. 지정 그룹보다 앞선 출발은 실격 기준입니다. 제한시간은 하프 3시간·10km 2시간이며 경기 중 회송버스 이용 후 결승선 통과가 실격 조항입니다. 행사장 이동 교통편 전부를 뜻하지 않습니다. 기록은 넷타임, 시상은 건타임 안내입니다.",
  "raceInfo": {
    "entryFees": [
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
        "fee": 45000
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
        "hours": 2,
        "minutes": 0
      }
    ],
    "startTime": "09:00",
    "expectedParticipants": 5000
  }
},
  {
    id: "busan-international-marathon-2026",
    name: "부산브릿지마라톤 2026",
    date: "2026-12-06",
    month: "12월",
    location: "벡스코 제1전시장 (부산 해운대구)",
    region: "부산",
    distances: [
      "풀코스",
      "10K"
    ],
    status: "마감",
    isMajor: true,
    website: "https://busanmarathon.com/",
    registrationNote: "11/10 공식 추가접수·기록증 공지 재대조: 10월30일18:00까지 YES24 결제 뒤 필수정보, 풀은 공식 풀4:29:59 이내 기록증 이미지 제출이 필요했다. 하프·타 종목·임시 기록증·조회 화면 캡처 등은 제외하며 공식 발급 모바일 기록증은 인정한다. 11월초 부적격 신청 일괄 취소 예정은 실제 개인별 취소·환급 완료를 확인한 결과가 아니다. 타 권역 셔틀 계획 없음이라는 현재 FAQ도 대조했다.",
    description: "12월 6일 부산 벡스코 제1전시장 집결, 풀07:30·10km08:00 출발 안내. 풀은 광안대교·부산항대교·남항대교, 10km는 벡스코·광안대교 상판·광안리 해변 산책로로 공식이 설명한다. 참가비 풀80, 000원·10km60, 000원, 당일 제한5시간·1시간30분이며 풀 자격 상세 기준4:29:59와 구분한다. 추가접수 기한10월30일18:00은 지났고 실제 개인 등록·기록 승인·취소 처리는 본인 내역에서 확인해야 한다.",
    courseInfo: {
      "courseDescription": "공식 현재 풀 설명은 광안대교·부산항대교·남항대교,10km는 벡스코 출발·광안대교 상판·광안리 해변 산책로다. 이번에 정확한 구간별 고도·관문·급수 배치·통제 차선을 재인증하지 않았다. 아래 추정 경로는2026년8월31일 자료로 재구성한 것이며 최신 실주로 확정본이 아니다.",
      "gpx": {
        "file": "/data/gpx/busan-international-marathon-2026.gpx",
        "source": "reconstructed",
        "verifiedAt": "2026-08-31",
        "sourceNote": "공식 코스안내의 \"구간별 상세 레이아웃(Milestones)\"이 글로 밝힌 경유지를 OSM 도로망 위에서 새로 이었다",
        "sourceUrl": "https://busanmarathon.com/course/course_full?gubun=full",
        "caveat": "공식이 밝힌 것은 경유지 이름과 순서까지이고, 지점 사이를 어느 차선으로 통제하는지는 공개되지 않았습니다. 이 경로는 보행 도로망 기준으로 이어 실제 통제 차도와 선이 다를 수 있습니다 — 특히 교량 진출입 램프에서 갈립니다."
      }
    },
    raceInfo: {
      "entryFees": [
        {
          "distance": "풀코스",
          "fee": 80000
        },
        {
          "distance": "10K",
          "fee": 60000
        }
      ],
      "timeLimits": [
        {
          "distance": "풀코스",
          "hours": 5,
          "minutes": 0
        },
        {
          "distance": "10K",
          "hours": 1,
          "minutes": 30
        }
      ],
      "startTime": "07:30"
    },
    raceKit: {
      "items": [
        "공식 기념 티셔츠(85~110·S~3XL 실측표 공개)",
        "양말",
        "헤어밴드",
        "배번호",
        "기록칩",
        "완주메달",
        "기록증"
      ],
      "pending": "추가 기념품은 추후 홈페이지·인스타그램으로 공개 예정이고, 완주 메달 디자인도 추후 공개입니다. 공식은 티셔츠 이미지가 예시이며 실제 색상·디테일이 다를 수 있다고 밝혔습니다.",
      "verifiedAt": "2026-10-20"
    },
    registrationStart: "2026-10-26",
    registrationEnd: "2026-10-30",
    lastVerified: "2026-11-10",
  },
  {
    id: 'geumsan-goldrun-marathon-2026',
    name: '2026 전국마라톤협회 금산 골드런 레이스',
    date: '2026-12-05',
    month: '12월',
    location: '금산세계인삼엑스포주차장 (충남 금산군)',
    region: '충남',
    distances: ['하프', '10K', '5K'],
    status: '접수중',
    registrationStatusUnverified: true,
    isMajor: false,
    website: 'https://mara1080.com/event/df4b4e7d-4fbc-4843-858c-f15c032e92cb',
    description:
      '8월 초 취소됐던 대회가 다시 열립니다. 같은 날 예정이던 「SAWE 2026 월드 레코드 인터내셔널 마라톤 페스티벌」이 사웨 선수의 부상으로 2027년으로 연기되면서, 전국마라톤협회가 2026년 9월 17일 공지로 골드런 레이스를 12월 5일(토) 정상 개최한다고 밝혔습니다. 오전 8시 집결·9시 출발, 장소는 금산세계인삼엑스포주차장(충남 금산군 금산읍 신대리 408)입니다. 공식 대회요강 기준 종목은 5km·10km·하프이고, 참가비는 기능성 티셔츠 기념품이면 5km 30,000원·10km 45,000원·하프 45,000원, 기념품을 레츠고 마라톤화로 고르면 종목과 관계없이 99,000원입니다. 제한시간은 5km 1시간·10km 2시간·하프 3시간이고 칩으로 계측합니다. 10km·하프는 만 15세 이상, 5km는 걸을 수 있는 유아부터 참가할 수 있습니다. 전마협 대회에 1년 안에 4회 이상 참가한 사람은 1만원 할인을 받을 수 있습니다(공식 공지 10/8). 하프 5인 1조 단체전도 별도 신청으로 열립니다. 접수는 공식 홈페이지 온라인으로만 받고, 선착순 마감 후 추가 접수는 없으며 변경·취소·환불은 접수 마감일까지만 됩니다.',
    registrationNote:
      '11월 11일 공식 신청하기 화면은 약관과 개인·단체 신청 버튼을 보여 주지만, 현재 잔여석과 결제 가능 여부는 이 단계에서 확인되지 않습니다. 선착순 마감이며 공식 마감일은 날짜로 확인하지 못했습니다. 정원도 9/17 정상 개최 공지의 3,000명과 대회요강 이미지의 7,000명이 엇갈립니다.',
    factCheck: {
      checkedAt: '2026-11-11',
      sources: [{ title: '전국마라톤협회 골드런 공식 신청 화면', url: 'https://mara1080.com/event/df4b4e7d-4fbc-4843-858c-f15c032e92cb/registration/apply' }],
      note: '약관·신청 버튼 노출만 확인했습니다. 실제 잔여석·결제 성공·접수 중 여부는 인증하지 못했습니다.',
    },
    raceInfo: {
      entryFees: [
        { distance: '하프', fee: 45000 },
        { distance: '10K', fee: 45000 },
        { distance: '5K', fee: 30000 },
      ],
      timeLimits: [
        { distance: '하프', hours: 3, minutes: 0 },
        { distance: '10K', hours: 2, minutes: 0 },
        { distance: '5K', hours: 1, minutes: 0 },
      ],
      startTime: '09:00',
    },
    raceKit: {
      items: ['기념품 택1 — 기능성 티셔츠 또는 레츠고 마라톤화(마라톤화 선택 시 참가비 99,000원)', '기록칩'],
      pending:
        '기념품은 대회 5일 전 배송이 원칙이고(사정에 따라 변동), 마라톤화는 사전 발송 공지가 따로 있습니다(취소·교환·반품 시 6천원 부과). 공식은 기념품이 품절되면 대체 사이즈나 다른 상품으로 바뀔 수 있다고 밝혔습니다.',
      verifiedAt: '2026-10-20',
    },
  },
  {
    id: 'geumsan-world-record-marathon-festival-2026',
    name: '2027 월드 레코드 국제 마라톤 축제 (5월 15~16일)',
    date: '2027-05-15',
    month: '5월',
    location: '장소 미정 (주최 측 협의 중)',
    region: '미정',
    distances: [
      "5K",
      "10K"
    ],
    status: '접수예정',
    isMajor: false,
    website: 'https://mara1080.com/event/ccf77de8-1b14-4170-afcb-c2eeaee1a78d',
    description:
      '2026년12월5~6일 예정됐던 대회의 새 일정이 공식 날짜 확정 팝업과 요강에서2027년5월15일(토)~16일(일)로 안내됐습니다(2026-11-14 확인). 이 기록의 날짜는 첫날5월15일이며 기존 URL은 연기 이력을 보존합니다. 현재 공식 안내는 장소 협의 중·장소 미정과 참가비 미정을 명시합니다. 따라서 종전 금산세계인삼엑스포광장을 새 개최지로 확정하지 않았습니다. 요강의 종목은5K·10K,양일10:00출발·하루12,000명/총24,000명은 주최 측 계획이며 종목별 날짜 배정·실제참가인원은 미확인입니다. 현재 접수 개시·정확 요금·개인 결제 가능 여부는 확인하지 않았습니다.9월17일자 공지는 기존 신청자의 전액 환불과 신청 조회 후 환불 요청 절차를 안내하며 실제 개별 환불 완료 증거는 아닙니다. 요강 하단에 남은2026년10월25일 환불 기한을2027회차 조건으로 적용하지 않습니다. 별도 금산 골드런 레이스의2026년12월5일 일정과 혼동하지 마세요.',
    registrationNote: '2027년5월15~16일 일정 안내·장소와 참가비 미정. 현재 접수 개시·종목별 신청 조건은 확인 필요.2026년 접수·환불 기한을 새 회차에 적용하지 않음.',
    lastVerified: '2026-11-14',
    raceInfo: {
      expectedParticipants: 24000,
      startTime: '10:00',
    },
    factCheck: {
      "checkedAt": "2026-11-14",
      "sources": [
        {
          "title": "공식 대회 홈페이지 — 날짜 확정 팝업·현재 안내",
          "url": "https://mara1080.com/event/ccf77de8-1b14-4170-afcb-c2eeaee1a78d"
        },
        {
          "title": "공식 날짜 확정 팝업 원본 — 2027.05.15~16·장소 협의 중",
          "url": "https://kma-dev-bucket.s3.ap-northeast-2.amazonaws.com/IMAGE/POPUP/0e7a1d26-6f79-4769-ab9b-3135efb8cf96_%ED%8C%9D%EC%97%85_%EC%82%AC%EB%B3%B8_14.jpg"
        },
        {
          "title": "공식 대회요강 — 날짜·장소/참가비 미정",
          "url": "https://mara1080.com/event/ccf77de8-1b14-4170-afcb-c2eeaee1a78d/guide/overview"
        },
        {
          "title": "공식 요강 이미지 원본 — 날짜·장소/참가비 미정",
          "url": "https://kma-dev-bucket.s3.ap-northeast-2.amazonaws.com/IMAGE/EVENT/12c838cc-0161-4fab-a83f-cd3d0e6af773_pc%EB%8C%80%ED%9A%8C%EC%95%88%EB%82%B4_-_%EB%8C%80%ED%9A%8C%EC%9A%94%EA%B0%95.jpg"
        },
        {
          "title": "2026-09-17 연기·기존 신청자 환불 공지",
          "url": "https://mara1080.com/event/ccf77de8-1b14-4170-afcb-c2eeaee1a78d/notices/notice/aaa4eaea-9bbb-4e63-947d-b9bb2049354e"
        }
      ],
      "note": "2026-11-14 정상 브라우저로 공식 페이지와 현재 연결된 이미지 원본3개를 읽었습니다. 날짜 확정 팝업·메인 안내·요강은 모두2027년5월15~16일을 안내합니다. 날짜 필드는 첫날5월15일이며 양일 종목별 배정은 별도 미확인입니다. 팝업은 장소 협의 중,요강은 장소 미정·참가비 미정을 명시하므로 기존 금산 주소와2026년 환불 기한을 새 회차에 대입하지 않습니다. 요강의24,000명(하루12,000명)·10:00출발은 주최 측 계획입니다.9/17본문의내년5월초는과거연기공지고,최신이미지의명시날짜와구분합니다. 실제접수·결제·환불·개최완료나선수의현재건강상태를인증하지않습니다."
    },
    registrationStatusUnverified: true,
  },
];
