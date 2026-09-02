import type { MarathonEvent } from '@/types/marathon';

export const octoberEvents: MarathonEvent[] = [
  {
    id: 'harry-potter-run-korea-2026',
    name: '해리포터 런 2026 (Harry Potter Run in Korea)',
    date: '2026-10-03',
    month: '10월',
    location: '부산역 인근 (세부 장소 미공개)',
    region: '부산',
    distances: ['5K'],
    status: '접수예정',
    isMajor: false,
    website: 'https://www.instagram.com/stanz_official_kr/',
    description:
      '주최사 스탠즈(@stanz_official_kr)가 여는 공식 라이선스 이벤트로, 호그와트 네 기숙사로 나뉘어 달립니다. 5km 비경쟁·비기록 종목 하나만 운영합니다. 오전 9시·오후 2시 두 차례로 나눠 각 3,000명씩 총 6,000명을 모집하며 코스는 두 회차가 같습니다. 티켓은 9월 4일 11시부터 카카오톡 선물하기에서 선착순으로 팔고 1인 4매까지 살 수 있습니다. 참가 기념품 중 기숙사가 갈리는 품목(스포츠타올·배번호)은 고를 수 없고 랜덤 배정입니다 — 원하는 기숙사를 받는다는 보장이 없습니다. 러닝 외에 무대 프로그램과 부스 체험이 함께 열립니다.',
    courseInfo: {
      terrain: '평지',
      difficulty: '초보자',
      certification: '없음',
      courseDescription:
        '부산역 인근 5km 비경쟁·비기록 코스. 오전·오후 회차의 코스가 동일하며, 세부 구간과 출발 지점은 공개되지 않았습니다.',
    },
    raceInfo: {
      entryFees: [{ distance: '5K', fee: 85000 }],
      expectedParticipants: 6000,
      startTime: '09:00 / 14:00',
    },
    raceKit: {
      items: ['티셔츠', '스포츠타올', '스트링백', '배번호', '안내문', 'KIT 박스', '완주 메달'],
      pending:
        '완주 메달과 함께 지급되는 협찬사 기프트는 품목 미공개(공식 계정 추후 공지). 기숙사 구분 품목(스포츠타올·배번호)은 랜덤 배정',
      verifiedAt: '2026-08-29',
    },
    registrationStart: '2026-09-04',
    registrationEnd: '2026-09-18',
    registrationNote:
      '9월 4일(금) 11시 카카오톡 선물하기 판매 시작, 9월 18일(금)까지 — 정원 6,000명 선착순이라 기간 내에도 조기 마감될 수 있습니다. 1인 4매 한도. 기념품 KIT는 9월 중순부터 주문 시 입력한 주소로 순차 배송되며 배송비는 없습니다.',
    lastVerified: '2026-08-29',
  },
  {
    id: 'geumcheon-health-run-2026',
    name: '제22회 금천구청장배 건강달리기대회 (수육런)',
    date: '2026-10-11',
    month: '10월',
    location: '안양천 다목적광장 (서울 금천구)',
    region: '서울',
    distances: ['10K', '5K'],
    status: '접수예정',
    isMajor: false,
    website: 'http://www.gcrun.kr/',
    description:
      '완주 후 수육과 막걸리를 내주는 것으로 알려져 러너들 사이에서 "수육런"으로 불리는 금천구 대회입니다. 정원은 총 800명으로 금천구민 300명과 일반 500명이 별도 쿼터로 나뉩니다 — 일반은 구민의 잔여석을 받는 구조가 아닙니다. 구민 접수는 9월 1일 10시에 열려 10시 04분에 마감됐고, 일반 접수는 9월 7일 10시부터 9월 11일 17시까지 선착순입니다. 참가비는 5km·10km 모두 30,000원이고, 신청 후 문자로 계좌를 통보받아 48시간 안에 입금하는 방식입니다. 개회식 08:30, 10km 09:00·5km 09:05 출발, 폐회식 12:00이며 제한시간은 5km 1시간·10km 2시간입니다. 두 종목 모두 기록칩을 사용하고 웹기록증을 발행하며 완주자 전원에게 메달을 줍니다. 지급품은 고급타올과 스포츠양말이고, 완주 후 생수·수육·막걸리·두부·김치가 제공되며 자전거 10대를 포함한 경품 이벤트가 열립니다. 2024년 제20회 때는 정원 950명이 접속 폭주 속에 소진됐고 2025년 제21회는 900명 규모였습니다. 주최는 금천구, 주관은 금천구육상연맹입니다.',
    raceInfo: {
      entryFees: [
        { distance: '10K', fee: 30000 },
        { distance: '5K', fee: 30000 },
      ],
      expectedParticipants: 800,
    },
    registrationStart: '2026-09-07',
    registrationEnd: '2026-09-11',
    registrationNote:
      '정원이 금천구민 300명과 일반 500명으로 나뉜 별도 쿼터입니다. 구민 접수는 9월 1일 10시에 열려 10시 04분에 마감됐고, 일반 접수만 9월 7일(월) 10시에 열립니다. 서류상 마감은 9월 11일 17시지만 선착순이라 그 전에 소진될 수 있습니다.',
    lastVerified: '2026-09-01',
  },
  {
    id: 'nb-run-your-way-seoul-10k-2026',
    // 한글 별칭을 앞으로 뺐다. "런유어웨이"가 실제 최다 유입 검색어인데 영문명이 앞에 있으면
    // 타이틀이 75자로 밀려 잘리고, 뒤로 간 영문 괄호는 기존 규칙이 알아서 벗긴다.
    name: '2026 뉴발란스 런유어웨이 서울 10K (Run your way Seoul 10K Race)',
    date: '2026-10-04',
    month: '10월',
    location: '여의도공원 문화의마당 (서울 영등포구)',
    region: '서울',
    distances: ['10K'],
    status: '마감',
    isMajor: false,
    website: 'https://www.nbkorea.com/raffle/collection.action?rIdx=134',
    registrationEnd: '2026-08-21',
    registrationNote:
      '접수 종료 — 온라인 래플 응모는 8월 2일 17시, 당첨자 결제는 8월 7일 17시에 끝났고 오프라인 패키지 매장 판매도 8월 20~21일로 종료됐습니다(공식 래플 페이지 2026-08-31 확인)',
    lastVerified: '2026-08-31',
    description:
      '뉴발란스가 여는 도심 10K 브랜드 레이스. 접수는 선착순이 아니라 멤버십 회원 대상 래플(추첨)로, 7월 31일(금) 10시부터 8월 2일(일) 17시까지 55시간만 응모를 받습니다. 당첨 발표 8월 4일(화) 10시, 결제·기록증 제출 마감 8월 7일(금) 17시(미접수 시 자동 취소). RYW 패키지 80,000원 외에 SC 레벨 신발이 포함된 259,000원 오프라인 패키지 2종을 8월 20~21일 매장에서 선착순 판매합니다. 기록증은 참가 자격이 아니라 출발 그룹(S/A/B/C) 배정용이며, 최근 2년 이내 10K 공인 기록만 인정되고 하프·풀코스 기록은 인정되지 않습니다. 기념품은 싱글렛 또는 반팔티 택1 + 러닝양말이며 당일 착용이 필수입니다. 정원·상세 코스·완주 기념품은 공식 미공개.',
    courseInfo: {
      terrain: '평지',
      difficulty: '초보자',
      courseDescription:
        '여의도공원 문화의마당 출발 및 골인. 고저차가 거의 없는 도심 평지 코스입니다. 상세 코스도는 공식에서 추후 안내 예정입니다.',
    },
    raceInfo: {
      entryFees: [{ distance: '10K', fee: 80000 }],
      startTime: '07:30',
    },
  },
  {
    id: 'lotteria-baebulrun-2026',
    name: '2026 리아는 배불런 (롯데리아 러닝 페스티벌)',
    date: '2026-10-04',
    month: '10월',
    location: '서울어린이대공원 (서울 광진구)',
    region: '서울',
    distances: ['5K'],
    status: '접수중',
    isMajor: false,
    website: 'https://www.lotteeatz.com/event/main/selectEvent/18060',
    registrationStart: '2026-09-01',
    registrationEnd: '2026-09-03',
    lastVerified: '2026-09-01',
    description:
      '롯데리아가 여는 러닝 페스티벌로, 슬로건은 "땀 흘린 만큼, 배부를 자격 있다"입니다. 신청은 9월 1일(화) 오후 2시부터 9월 3일(목) 오후 11시 59분까지 롯데잇츠 앱에서 참가권을 구매하는 방식이고, 정원은 2,000명이며 계정당 1매만 살 수 있습니다. 참가비는 정상가 50,000원(레이스키트 포함)이며 8월 1일~9월 3일 롯데잇츠로 리아 불고기버거 또는 리아 새우버거를 구매한 고객은 45,000원 할인가가 적용됩니다 — 10월 브랜드 펀런 중 가장 낮은 값입니다. 참가 대상이 만 19세 이상 성인이라 가족 단위 참가는 불가합니다. 당일 집결은 06:30부터 서울어린이대공원 내 열린무대이고 러닝 시작은 07:30, 행사는 12:30까지입니다. 코스는 대공원 내부 5km로 시계방향 1회전 후 가운데 동선으로 우회해 다시 1회전하는 구성이며, 공식은 운영 여건에 따라 실제 주행 거리가 약 200~300m 차이 날 수 있다고 고지했습니다. 출발은 완주 예상 시간에 따라 A(25분 미만)~D(45분 이상) 4개 그룹으로 나뉘지만 칩 계측·공식 기록에 대한 안내는 없습니다. 레이스키트 "벌써 배불런 팩"에는 트렉스타 협업 공식 티셔츠·앞치마 반다나·공식 배번호표와 롯데리아 버거세트 교환권 등이 포함되고 행사 1~2주 전부터 순차 배송됩니다. 완주 키트 "배부르백"은 완주자에게만 주며 공식 메달·백팩·버거세트 교환권과 먹거리로 구성됩니다. 공식 티셔츠는 레귤러핏(L/100)과 릴렉스핏(2XL/110) 2종뿐이고 구매 후 사이즈 교환이 불가하며, 환불은 9월 10일까지만 가능하고 양도는 금지입니다.',
    raceInfo: {
      entryFees: [{ distance: '5K', fee: 50000 }],
      expectedParticipants: 2000,
    },
  },
  {
    id: 'siheung-half-marathon-2026',
    name: '2026 시흥시 전국하프마라톤대회 (제12회)',
    date: '2026-10-05',
    month: '10월',
    location: '한국공학대학교 제2캠퍼스 (경기 시흥시 거북섬)',
    region: '경기',
    distances: ['하프', '10K', '5K'],
    // 7월 22일 14시에 접수가 열렸는데 '접수예정'으로 남아 있었다(2026-09-01 정정).
    // 마감일 없는 선착순이라 registrationEnd 로는 상태를 못 잡는 유형 — registrationNote 로 정직 표기한다.
    status: '접수중',
    registrationStart: '2026-07-22',
    registrationNote:
      '7월 22일(수) 14시부터 선착순 5,000명으로 접수 중이며 마감일이 따로 없습니다. 정원이 차면 그대로 닫히므로 신청 전 공식 접수 페이지가 아직 열려 있는지 확인하세요(잔여 수량 미공개).',
    isMajor: false,
    website: 'https://www.shmarathon.kr/shmarathon/',
    description:
      '시화호를 끼고 시화방조제 위를 그대로 왕복하는 직선 아웃앤백 코스. 시화호 권역 대회 중 실제로 방조제를 달리는 유일한 대회입니다. 접수는 7월 22일(수) 14시부터 선착순 5,000명. 대회일 10월 5일은 개천절 대체공휴일(월)입니다. 오이도역·시흥시청 무료 셔틀버스가 운행 예정이며, 올해 코스프레런 부문이 신설됐습니다. 참가 자격은 하프 19세 이상·10km 14세 이상.',
    courseInfo: {
      terrain: '평지',
      difficulty: '중급',
      courseDescription:
        '한국공학대 제2캠퍼스 출발 → 시화방조제 왕복. 고저차가 거의 없는 완전 평지 직선 코스라 기록 노리기 좋지만, 방조제 특성상 그늘과 바람막이가 전혀 없어 해풍에 그대로 노출됩니다. 하프 급수는 5·7.5·10(반환점 부근)·13.5·16.5km 다섯 곳입니다.',
      gpx: {
        file: '/data/gpx/siheung-half-marathon-2026.gpx',
        source: 'reconstructed',
        verifiedAt: '2026-08-24',
        sourceNote:
          "시흥시 공식 대회 안내의 코스 서술 — '한국공학대학교 제2캠퍼스 출발 → 시화방조제 왕복'. 출발지와 방조제 위 도로만 취해 OSM 보행 도로망 위에서 새로 이었다.",
        sourceUrl: 'https://www.shmarathon.kr/shmarathon/',
        caveat:
          "공식은 반환점을 이름으로 밝히지 않았습니다. 코스맵이 10km 급수대를 '반환점 부근'으로 표기한 점과 하프가 21.1km 왕복이라는 조건에서, 분기 없는 방조제 외길 위 편도 10.55km 지점으로 잡았습니다. 실제 반환 지점은 이와 다를 수 있습니다.",
      },
    },
    raceInfo: {
      entryFees: [
        { distance: '하프', fee: 35000 },
        { distance: '10K', fee: 35000 },
        { distance: '5K', fee: 20000 },
      ],
      // 공식 코스맵에 표기된 하프 급수 5곳(5·7.5·10·13.5·16.5km).
      // 5↔16.5, 7.5↔13.5 가 각각 21.1km 로 맞아떨어져 왕복 코스임이 수치로 확인된다
      aidStations: 5,
      aidInterval: '약 2.5~3.5km마다',
      expectedParticipants: 5000,
      startTime: '09:00',
    },
    raceKit: {
      items: ['배번호', '기록칩(5km 제외)', '완주메달', '기념품', '간식', '모바일 기록증', '안내책자'],
      byDistance: [{ distance: '5K', item: '햇토미 쌀 3kg' }],
      pending: '하프·10km 기념품은 공식 표기가 "미정(확정 시 공지)"입니다.',
      verifiedAt: '2026-08-24',
    },
    logistics: {
      publicTransport: '오이도역·시흥시청 인근에서 무료 셔틀버스 운행 예정',
      shuttle: '오이도역, 시흥시청 인근 (운행 예정)',
      bagStorage: true,
    },
    lastVerified: '2026-08-24',
  },
  {
    id: 'transjeju-utmb-2026',
    name: '2026 트랜스제주 by UTMB',
    date: '2026-10-02',
    month: '10월',
    location: '제주월드컵경기장·가시리 일대 (제주)',
    region: '제주',
    distances: ['울트라', '트레일'],
    status: '마감',
    isMajor: true,
    website: 'https://transjeju.utmb.world/',
    registrationStart: '2026-03-18',
    registrationEnd: '2026-07-31',
    lastVerified: '2026-08-31',
    registrationNote:
      '접수 종료(7월 31일) — 배번은 대회 전 10월 1일·2일 10시~18시에 제주월드컵경기장에서 받습니다(엑스포 동시 진행). 100M·100K·60K 참가자는 10월 2일 19시 30분 레이스 브리핑이 있습니다',
    description:
      'UTMB 월드시리즈 아시아 공식 대회. 10월 2~4일 제주에서 100M(148km)·100K(104km)·60K·20K 4개 종목으로 열립니다. 접수 마감 7월 31일, 참가비는 USD 기준 100M $280·100K $220·60K $160·20K $90. 60K 이상은 UTMB Index 자격이 필요하지만 20K는 자격 제한 없이 참가할 수 있어 입문 종목으로 적합합니다. 시상식은 10월 4일 10시에 60K·100K·100M을 묶어 제주월드컵경기장에서 진행하고, 20K만 10월 3일 13시에 따로 합니다.',
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
    id: 'andong-marathon-2026',
    name: '2026 안동마라톤',
    date: '2026-10-04',
    month: '10월',
    location: '안동시민운동장',
    region: '경북',
    distances: ['풀코스', '하프', '10K', '5K'],
    status: '마감',
    isMajor: true,
    website: 'https://admarathon.kr/andong/',
    registrationStart: '2026-05-06',
    registrationEnd: '2026-08-18',
    raceKit: {
      items: ['배번호', '기록칩(5km 제외)', '완주메달', '모바일 기록증', '안내책자', '간식'],
      byDistance: [
        { distance: '풀코스', item: '기념 티셔츠·레이스 백·모자·완주 타월' },
        { distance: '하프·10km', item: '기념 티셔츠·레이스 백' },
        { distance: '5km', item: '기념 티셔츠' },
      ],
      pending: '공식 고지: 기념품 디자인·항목은 상품성 개선을 위해 변경될 수 있음',
      images: [
        { src: '/images/marathon/andong-marathon-2026/kit-1.webp', alt: '2026 안동마라톤 공식 기념 티셔츠' },
        { src: '/images/marathon/andong-marathon-2026/kit-2.webp', alt: '2026 안동마라톤 공식 레이스 백' },
      ],
      verifiedAt: '2026-08-27',
    },
    lastVerified: '2026-08-31',
    description:
      '획득고도 700m+ 국내 최상급 난코스. 매일신문 주최로 안동시민운동장에서 열리며, 5월 6일부터 선착순 10,000명 접수로 종료 예정일이 따로 없었고 정원이 차면서 마감됐습니다. 환불 가능 기간도 7월 26일로 종료됐습니다. 참가 자격이 종목마다 갈리는데 풀·하프는 만 19세 이상, 10km는 만 14세 이상, 5km는 나이 제한이 없습니다. 시상이 후한 편이라 풀코스와 하프 남녀 1위에게는 상금이 아니라 2026 호치민 국제마라톤 3박 5일 참가권이 걸려 있고, 안동마라톤 풀코스를 100회 이상 완주하면 100회 단위로 트로피와 지역특산품을 받습니다. 단체는 30인 이상이면 텐트 1동을 제공하며 최다참가단체상은 풀 4점·하프 3점·10km 2점·5km 1점으로 환산해 가립니다.',
    courseInfo: {
      terrain: '언덕',
      difficulty: '상급',
      elevationGain: 700,
      certification: 'KAF',
      courseDescription:
        '획득고도 700m+ 의 국내 최상급 난이도 풀코스입니다. 07시 집결·08시 출발인데 한 번에 나가지 않고 종목별로 10분 간격 분할 출발합니다 — 풀 08:00, 하프 08:10·08:15 2차, 10km 08:20·08:25 2차, 5km 08:30 순입니다. 급수대는 전 구간 약 2.5km 간격, 간식은 약 5km 간격으로 놓입니다. 제한시간은 풀 5시간·하프 3시간·10km 2시간·5km 1시간 30분이고, 시간 내 완주가 어렵다고 판단되면 진행요원이 회송 버스 탑승을 권고합니다. 기록은 출발선 통과 시점부터 재는 넷타임이며 시상도 넷타임 기준입니다(5km만 건타임). 다만 5km는 기록칩이 아예 없어 기록이 필요하면 개인이 측정해야 합니다. 출발·반환·골인 매트를 지나지 않으면 기록이 인정되지 않고 배번호는 재발급되지 않습니다. 반려견·유모차·개인형 이동장치는 코스 진입이 제한됩니다.',
    },
    raceInfo: {
      entryFees: [
        { distance: '풀코스', fee: 60000 },
        { distance: '하프', fee: 50000 },
        { distance: '10K', fee: 50000 },
        { distance: '5K', fee: 30000 },
      ],
      timeLimits: [
        { distance: '풀코스', hours: 5, minutes: 0 },
        { distance: '하프', hours: 3, minutes: 0 },
        { distance: '10K', hours: 2, minutes: 0 },
        { distance: '5K', hours: 1, minutes: 30 },
      ],
      aidInterval: '급수 2.5km마다 · 간식 5km마다',
      expectedParticipants: 10000,
      startTime: '08:00',
    },
  },
  {
    id: 'seoul-open-marathon-2026',
    name: '2026 서울 오픈 마라톤',
    date: '2026-10-05',
    month: '10월',
    location: '광화문광장 앞 대로변',
    region: '서울',
    distances: ['하프', '10K'],
    status: '마감',
    isMajor: false,
    website: 'https://seoulopen.or.kr/',
    description:
      '광화문 출발 도심 하프·10K. 월요일(공휴일) 개최. 본접수 5/10 마감됨.',
    courseInfo: {
      terrain: '평지',
      difficulty: '중급',
      certification: '없음',
    },
    raceInfo: {
      entryFees: [
        { distance: '하프', fee: 80000 },
        { distance: '10K', fee: 60000 },
      ],
      startTime: '07:30',
    },
  },
  {
    id: 'gyeongpo-marathon-2026',
    name: '2026 경포마라톤',
    date: '2026-10-10',
    month: '10월',
    location: '경포해변 중앙광장',
    region: '강원',
    distances: ['하프', '10K', '5K'],
    status: '마감',
    isMajor: false,
    website: 'https://www.xn--289av7rnxbd06bmrc.com/',
    description:
      '강릉 경포해변에서 열리는 동해안 평지 하프 코스. 5월 18일 본접수 시작 후 선착순 조기 마감됐고, 6월 30일 추가접수까지 진행돼 현재 전 부문(하프·10K·4.7K) 마감 상태입니다. 하프 단체전(5인 1조)만 사무국 문의로 열려 있습니다.',
    courseInfo: {
      terrain: '평지',
      difficulty: '초보자',
      certification: '없음',
      courseDescription: '동해안 평지 해변 코스.',
    },
    raceInfo: {
      entryFees: [
        { distance: '하프', fee: 40000 },
        { distance: '10K', fee: 40000 },
        { distance: '4.7K 건강달리기', fee: 30000 },
      ],
      startTime: '08:30',
    },
  },
  {
    id: 'kakao-friends-run-2026',
    name: '카카오프렌즈 런 2026',
    date: '2026-10-10',
    month: '10월',
    location: '탄천종합운동장 (경기 성남시)',
    region: '경기',
    distances: ['10K', '5K'],
    status: '마감',
    isMajor: false,
    website: 'https://b.kakao.com/views/kakaofriendsrun',
    registrationStart: '2026-08-10',
    registrationEnd: '2026-08-17',
    lastVerified: '2026-08-20',
    description:
      '카카오가 처음 여는 1만 명 규모 러닝 페스티벌(슬로건 "Run Together, Be Friends"). 기록 경쟁 없는 펀 런 콘셉트로 10K(만 14세 이상)·5K(만 8세 이상) 두 종목이며, 참가비는 8만원이지만 ARC 협업 카카오프렌즈 러닝 의류 세트·완주 메달·협찬사 상품 패키지가 포함됩니다. 접수는 8월 10일 11시부터 17일 23시 59분까지 추첨제로 받아 마감됐고, 1차 당첨자 발표는 8월 20일(목), 잔여 티켓이 생기면 8월 30일(일)까지 추가 발표가 이어집니다. 결과는 카카오프렌즈 런 카카오톡 채널로 개별 안내됩니다. 배송지 입력으로 참가가 확정된 뒤에는 취소·환불이 불가하고 양도·판매·교환·대리 참가도 금지입니다. 현장엔 약 30개 체험 부스와 카카오프렌즈 캐릭터 부스, 애프터 공연이 열리고, 현장에 못 가는 러너를 위한 버추얼 런(카카오맵·카카오같이가치 연계)도 운영됩니다.',
    raceInfo: {
      entryFees: [
        { distance: '10K', fee: 80000 },
        { distance: '5K', fee: 80000 },
      ],
      expectedParticipants: 10000,
      startTime: '08:00',
    },
  },
  {
    id: 'brave-cookie-run-seoul-2026',
    name: '2026 용감한 쿠키RUN in 서울',
    date: '2026-10-25',
    month: '10월',
    location: '서울어린이대공원 (서울 광진구)',
    region: '서울',
    distances: ['10K'],
    status: '접수중',
    isMajor: false,
    website: 'https://runable.me/product/20032?comp=19600',
    registrationStart: '2026-08-20',
    registrationEnd: '2026-09-21',
    lastVerified: '2026-08-20',
    description:
      '데브시스터즈 게임 IP "쿠키런"의 첫 오프라인 러닝 대회. 10K 단일 종목이며 서울어린이대공원이 집결지, 출발은 07시 30분입니다. 접수는 8월 20일(목) 오후 2시에 열려 9월 21일(월) 오후 5시까지 러너블 앱/웹과 더현대Hi 앱/웹에서 받습니다(참가비 7만원, 만 14세 이상). 접수 마감과 같은 9월 21일 17시까지는 100% 환불이 가능해 일정이 불확실해도 먼저 확보해둘 여지가 있습니다. 같은 주말인 10월 24~25일 "쿠키런 그랜드 페스티벌"이 함께 열립니다. 정원·코스·기념품 구성은 여전히 공식 공개 전입니다.',
    raceInfo: {
      entryFees: [{ distance: '10K', fee: 70000 }],
      startTime: '07:30',
    },
  },
  {
    id: 'busan-sea-marathon-2026',
    name: '성우하이텍 2026 부산바다마라톤',
    date: '2026-10-25',
    month: '10월',
    location: '해운대 벡스코 야외광장 (부산)',
    region: '부산',
    distances: ['15K', '10K', '5K'],
    status: '접수중',
    isMajor: false,
    website: 'https://marathon.busan.com',
    registrationStart: '2026-07-28',
    registrationNote: '정원 12,000명 선착순 — 마감일은 공식이 추후 별도 공지 예정',
    raceKit: {
      items: ['공식 기념 티셔츠(흡한속건, XS~2XL)', '기념 양말', '기념 반다나(부산일보 창간 80주년)', '배번호', '기록칩(15km·10km, 5km 제외)', '완주메달', '완주 간식·음료'],
      images: [
        { src: '/images/marathon/busan-sea-marathon-2026/kit-1.webp', alt: '2026 부산바다마라톤 공식 기념품 안내' },
        { src: '/images/marathon/busan-sea-marathon-2026/kit-2.webp', alt: '2026 부산바다마라톤 공식 기념 티셔츠' },
      ],
      verifiedAt: '2026-08-27',
    },
    lastVerified: '2026-08-27',
    description:
      '평소 보행이 금지된 광안대교 상층부를 달리는 부산일보사 주최 대회. 벡스코 야외광장에 07:30 집결한 뒤 07:50부터 광안대교 상층부 출발지점으로 이동해 종목별로 출발합니다. 15km·10km 로드레이스와 5km 건강달리기 3개 종목으로 총 12,000명 선착순(15km 2,000·10km 6,500·5km 3,500)이며, 참가비는 15km 70,000원·10km 60,000원·5km 50,000원입니다(골스튜디오 패키지 선택 시 각 +39,000원). 접수는 7월 28일 오후 8시 시작됐고 마감일은 별도 공지 예정 — 정원이 차면 마감입니다. 신청 후 72시간 안에 결제하지 않으면 자동 취소되며, 기념품·배번호는 10월 16일 발송 예정입니다. 교통통제 최소화를 위해 제한시간을 엄격히 적용합니다(15km 2시간 20분·10km 1시간 40분·5km 1시간 20분).',
    courseInfo: {
      terrain: '평지',
      difficulty: '초보자',
      courseDescription:
        '광안대교 상층부를 달리는 것이 핵심입니다. 자동차 전용도로라 대회일에만 러너에게 열리며, 바다 위 교량 구간이라 그늘이 없고 해풍이 변수입니다. 큰 오르막은 없지만 교량 진입·진출부에 완만한 경사가 있습니다.',
    },
    raceInfo: {
      entryFees: [
        { distance: '15K', fee: 70000 },
        { distance: '10K', fee: 60000 },
        { distance: '5K', fee: 50000 },
      ],
      timeLimits: [
        { distance: '15K', hours: 2, minutes: 20 },
        { distance: '10K', hours: 1, minutes: 40 },
        { distance: '5K', hours: 1, minutes: 20 },
      ],
      expectedParticipants: 12000,
      startTime: '08:20',
    },
  },
  {
    id: 'seoul-race-2026',
    // 공식 행사명은 "서울달리기"인데 러너 사이 통용명은 "서울레이스"라 둘 다 싣는다.
    // 영문 괄호는 타이틀 생성 규칙이 벗겨낸다.
    name: '2026 서울달리기 서울레이스 (SEOUL RACE)',
    date: '2026-10-11',
    month: '10월',
    location: '청계광장 앞 세종대로',
    region: '서울',
    distances: ['하프', '11K'],
    status: '마감',
    isMajor: true,
    website: 'https://www.seoul-race.co.kr/',
    description:
      '동마 시리즈 유일 가을 도심 페스티벌형 대회로, 공식 행사명은 "서울달리기(SEOUL RACE)"입니다. 종목이 하프와 11km인 점을 먼저 확인하세요 — 흔한 10km가 아니라 1km가 더 붙습니다. 참가비는 하프 80,000원·11km 70,000원이고 정원은 12,000명(하프 8,500·11km 3,500)입니다. 우선접수 5/11~5/15, 본접수 5/27 하프 19시·11km 21시로 진행돼 접수는 이미 종료됐지만, 참가 취소와 환불은 9월 4일(금) 14시까지만 가능하고 그 이후에는 어떤 사유로도 되지 않습니다. 제한시간이 하프 2시간 30분·11km 1시간 40분으로 짧은 편이라 첫 하프라면 미리 페이스를 계산해 두는 편이 좋습니다. 참고로 8월 7일 자원봉사 모집 공지는 참가 규모를 1만 3천 명으로 적었는데, 공식 대회개요표의 12,000명과 어긋납니다(운영 인력이 포함된 수치로 보입니다). 2025년에는 12,800명이 참가해 역대 최다였습니다.',
    courseInfo: {
      terrain: '평지',
      difficulty: '중급',
      certification: 'KAF',
      courseDescription:
        '청계광장 앞 세종대로에서 출발해 서울 시내를 돌아 무교로로 골인하는 도심 아스팔트 평지 코스입니다. 고저차가 거의 없어 하프 기록을 노리기 좋다는 평이 정착돼 있지만, 상세 코스도와 교통통제 안내는 공식에서 아직 "추후 공개" 상태이고 집결지와 코스가 바뀔 수 있다는 단서도 함께 붙어 있습니다. 집결은 대회 당일 오전 6시 30분 이전, 출발은 7시 30분이며 집결 장소는 서울광장과 청계광장 일대입니다. 유아와 유아차를 동반한 참가는 허용되지 않습니다.',
    },
    raceInfo: {
      entryFees: [
        { distance: '하프', fee: 80000 },
        { distance: '11K', fee: 70000 },
      ],
      timeLimits: [
        { distance: '하프', hours: 2, minutes: 30 },
        { distance: '11K', hours: 1, minutes: 40 },
      ],
      expectedParticipants: 12000,
      startTime: '07:30',
    },
    registrationEnd: '2026-05-27',
    registrationNote:
      '접수 종료 — 다만 참가 취소·환불은 9월 4일(금) 14시까지 가능하고 그 이후에는 불가합니다(공식 유의사항 2026-08-31 확인)',
    lastVerified: '2026-08-31',
  },
  {
    id: 'disney-run-incheon-2026',
    // 검색어 어순이 "2026 디즈니런 인천"이다. 네이버 상위 10건 중 8건이 이 어순으로 시작한다
    // (2026-09-01 실측). 우리는 "디즈니런 2026 인천"이라 정확 일치에서 밀렸다.
    name: '2026 디즈니런 인천',
    date: '2026-10-24',
    month: '10월',
    location: '인천 상상플랫폼 (인천 중구 월미로)',
    region: '인천',
    distances: ['10K', '5K'],
    status: '접수중',
    isMajor: false,
    website: 'https://disneyrunincheon2026.com',
    registrationStart: '2026-08-31',
    registrationNote:
      '8월 31일(월) 10시 접수 시작 — 마감일 없이 선착순 15,000명이라 정원이 차면 그대로 끝납니다(공식 홈 2026-09-01 확인)',
    lastVerified: '2026-09-01',
    description:
      '2025 여의도에서 1.5만 명을 모은 국내 첫 디즈니 테마 펀런이 인천 상상플랫폼으로 돌아옵니다. 10월 24일(토) 오전 9시에 종목별·그룹별로 순차 출발하고, 종목은 5km(곰돌이 푸·가족 친화)와 10km(미키와 친구들) 둘입니다. 접수는 8월 31일(월) 10시에 열려 마감일 없이 선착순 15,000명으로 받고 있습니다. 참가비는 10K 80,000원·5K 65,000원입니다. 이 대회의 성격은 기록이 아니라 하루짜리 축제에 가깝습니다 — 07시 행사장 개장과 웜업, 08시 브랜드·체험 부스와 포토존, 11시 시상식, 12시 특별 축하공연을 거쳐 17시에 끝납니다. 사전 프로그램이던 토이스토리·모아나·주토피아 버추얼런(회차별 4만원·5천 명)은 3차까지 진행돼 8월 24일 완주 인증으로 마무리됐습니다. 코스도는 공식에 이미지로 올라와 있으나 "유관기관 협의에 따라 일부 변경될 수 있다"는 단서가 붙어 있습니다. 운영은 블렌트(BLENT)가 맡습니다.',
    courseInfo: {
      terrain: '평지',
      difficulty: '초보자',
      courseDescription:
        '인천 상상플랫폼(내항 일대) 일원의 평지 코스로, 5km는 가족 친화·10km는 러닝 애호가용으로 갈립니다. 출발은 오전 9시지만 행사장은 7시에 열리고 물품보관소와 웜업이 그때부터 운영되므로, 부스와 포토존까지 즐기려면 일찍 가는 편이 낫습니다. 출발은 한 번에 나가지 않고 종목별·그룹별 순차 방식입니다. 공식 코스도는 이미지로 공개돼 있지만 유관기관 협의에 따라 일부 변경될 수 있다고 고지돼 있어, 대회가 가까워지면 다시 확인하는 편이 좋습니다.',
    },
    raceKit: {
      items: [
        '디즈니런 한정판 티셔츠 — 디자인 1종 랜덤 증정(S~2XL, 가슴너비·어깨너비·소매길이 실측 조견표 공개)',
        '완주 메달',
      ],
      byDistance: [
        { distance: '5K', item: '곰돌이 푸와 친구들 테마' },
        { distance: '10K', item: '미키와 친구들 테마' },
      ],
      pending:
        '레이스팩 협찬 간식이 11종 공개됐습니다 — 플레인팟 미니싱글 트래블팩(5개입), 동화약품 마그랩 포 리커버리 청포도맛, 메디힐 샘플 파우치, 안상규벌꿀 곰돌이 푸 스틱, 아모스 블록젤리, 싱하소다 제로(3종 중 랜덤 1종), 구몬학습, 페레로 킨더조이, 링티 제로 라임맛 500ml, 네이처밸리 크런치바(랜덤 1종). 공식이 "COMING SOON"으로 추가 품목을 예고한 상태입니다',
      verifiedAt: '2026-09-01',
    },
    raceInfo: {
      entryFees: [
        { distance: '10K', fee: 80000 },
        { distance: '5K', fee: 65000 },
      ],
      expectedParticipants: 15000,
      startTime: '09:00',
    },
  },
  {
    id: 'chuncheon-marathon-2026',
    name: '2026 조선일보 춘천마라톤',
    date: '2026-10-25',
    month: '10월',
    // 공식 대회요강 표기는 "출발장소 춘천 공지천교" — '의암호'는 코스가 도는 호수이지 출발지가 아니다
    location: '춘천 공지천교',
    region: '강원',
    distances: ['풀코스', '10K'],
    status: '접수예정',
    isMajor: true,
    website: 'https://www.chuncheonmarathon.com/',
    registrationStart: '2026-09-08',
    registrationEnd: '2026-09-10',
    registrationNote:
      '본접수는 7월에 끝났지만 미결제분·취소분으로 추가 참가신청이 열립니다(공식 공지 2026-09-02). 신청은 코스별로 나뉘어 풀코스 9월 8일(화) 14시~, 10km 9월 9일(수) 14시~ 선착순이고, 결제는 두 코스 공통으로 9월 10일(목) 10시~18시 단 하루뿐입니다. 신청과 결제를 모두 마쳐야 공식 참가자이며 이 기간을 넘기면 어떤 경우에도 결제가 불가합니다. 본접수 때 신청만 하고 결제하지 않은 사람의 신청 정보는 삭제됐으므로 새로 신청해야 합니다. 취소·환불·정보변경은 9월 23일(수) 18시까지만 가능하고, 추가신청자는 출발그룹 배정을 위해 9월 15~16일에 기록증을 제출해야 합니다.',
    description:
      '"가을의 전설" — 1946년 창설돼 2026년 창설 80주년(제80회)을 맞는 가을 풀코스 명문. 의암호 국제공인 순환코스, 25km 지점 오르막이 핵심 변수. 대회일 10/25(일) 9시, 집결지 춘천 공지천 인조잔디구장. 참가비 풀 15만원·10K 10만원, 제한시간 풀 5시간 30분·10km 1시간 30분. 참가 자격은 풀코스 만 18세 이상, 10km는 누구나입니다. 7월에 끝났던 본접수(명예의전당·얼리버드·5~8회 완주자·일반 5단계) 이후 **미결제분과 취소분으로 추가 참가신청이 열립니다** — 풀코스 9월 8일(화) 14시, 10km 9월 9일(수) 14시 각각 선착순이고 결제는 9월 10일(목) 10~18시 하루뿐입니다(공식 공지 2026-09-02 확인).',
    courseInfo: {
      terrain: '언덕',
      difficulty: '상급',
      certification: 'IAAF',
      courseDescription:
        '공지천교에서 출발해 의암호를 한 바퀴 도는 국제공인 순환코스입니다. 전반은 호반을 따라 완만해 페이스를 올리기 쉽지만, 25km 지점의 춘천댐 오르막이 이 대회의 성패를 가릅니다 — 그 앞 급수대가 사실상 마지막 보급 기회라 여기서 무리하면 후반이 무너집니다. 출발은 한 번에 하지 않고 최고기록으로 배정된 출발그룹별 순차 출발이며, 마지막 행렬이 나간 5분 뒤 출발선이 닫히고 그 뒤로는 출발매트를 통과하지 못해 기록이 공인되지 않습니다. 넷타임이 제공되므로 앞자리 다툼보다 자기 그룹에서 여유 있게 나서는 편이 낫습니다. 종목별 상세 코스도와 교통통제 구간은 2026-08-31 기준 공식이 아직 "준비중"으로 두고 있습니다.',
    },
    raceInfo: {
      entryFees: [
        { distance: '풀코스', fee: 150000 },
        { distance: '10K', fee: 100000 },
      ],
      // 공식 대회요강 표기는 "Full 코스 : 5시간 30분" — 6시간으로 적혀 있던 것을 정정(2026-09-02).
      // 30분 차이가 완주 여부를 가르는 값이라 그대로 두면 안 된다.
      timeLimits: [
        { distance: '풀코스', hours: 5, minutes: 30 },
        { distance: '10K', hours: 1, minutes: 30 },
      ],
      aidStations: 9,
      aidInterval: '약 5km마다(25km 급수대가 춘천댐 오르막 진입 전 핵심 보급)',
      expectedParticipants: 20000,
      startTime: '09:00',
    },
    logistics: {
      parking:
        '공지천 공영주차장(대회장 맞은편)·의암공원·춘천MBC 주차장 이용. 교통 통제가 오전 7시~오후 3시 30분이라 7시 이전 진입을 권장합니다.',
      publicTransport:
        'ITX-청춘(용산→춘천 약 75분, 청량리→춘천 약 60분). 주말 좌석이 조기 매진되니 코레일톡 사전 예매 필수. ※KTX-이음은 춘천선 미운행입니다.',
      shuttle:
        '서울 4개 지점(시청·잠실·신도림·사당)에서 대회장 직행, 오전 6시 출발(2025년 기준 왕복 2만 원). 공식 홈페이지 예약, 조기 마감됩니다.',
    },
    raceKit: {
      items: ['기능성 티셔츠(155~185 사이즈별 실측표 공개)', '배번호', '완주메달(현장 증정)'],
      byDistance: [
        {
          distance: '풀코스',
          item: '레이스팩에 얼티밋포텐셜 하이드로50, 완주 후 현장에서 얼티브 아몬드두유 저당',
        },
        {
          distance: '10K',
          item: '레이스팩에 얼티밋포텐셜 러닝에너지젤프리, 완주 후 현장에서 얼티브 파로두유 저당',
        },
        { distance: '풀코스·10K 공통', item: '완주 후 샘트리 맛병아리콩(현장 증정)' },
      ],
      verifiedAt: '2026-08-31',
    },
    // 본접수 마감(2026-07-23)은 지났고, 현재 유효한 관문은 추가접수 결제 마감이라
    // registrationEnd 를 위쪽 블록의 '2026-09-10' 으로 옮겼다(2026-09-02).
    lastVerified: '2026-09-02',
  },
  {
    id: 'gyeongju-international-marathon-2026',
    name: '2026 경주국제마라톤',
    date: '2026-10-17',
    month: '10월',
    location: '경주시민운동장',
    region: '경북',
    distances: ['풀코스', '하프', '10K'],
    status: '마감',
    isMajor: true,
    website: 'https://www.gyeongjumarathon.com/home',
    registrationStart: '2026-05-11',
    registrationEnd: '2026-05-26',
    raceKit: {
      items: ['기념 티셔츠 — 아디다스 반팔(남녀공용 XS~3XL). 매니아 부문은 미제공'],
      pending: '공식 레이스팩 페이지는 "추후 공개 예정" — 티셔츠 외 구성 미공개',
      images: [{ src: '/images/marathon/gyeongju-international-marathon-2026/kit-1.webp', alt: '2026 경주국제마라톤 공식 기념 티셔츠 (아디다스)' }],
      verifiedAt: '2026-08-27',
    },
    lastVerified: '2026-08-31',
    description:
      '동아일보 주최, World Athletics 엘리트 라벨. 유네스코 신라 유적(대릉원·첨성대·동궁과 월지·황룡사지)을 통과하는 평지 순환 코스로 PB 친화적입니다. 정원 1.6만 명(일반 9천 + 동마클럽 매니아 7천)으로 동마 가을 시리즈를 마무리합니다. 서울·공주백제·경주 동아 3개 대회를 모두 완주하면 런저니 메달이 별도 수여됩니다.',
    courseInfo: {
      terrain: '평지',
      difficulty: '중급',
      certification: 'IAAF',
      courseDescription:
        '경주시민운동장 출발·귀환 순환 코스. 5~16km 구간에 대릉원(천마총)·첨성대·동궁과 월지(안압지)·반월성·황룡사지 등 신라 유적이 밀집합니다. 획득고도 약 146m로 급경사 없는 평탄 코스이나, 16~24km 북천 오르막과 후반 기복이 변수입니다. 참가 자격이 종목마다 갈려 풀·하프는 만 18세 이상만 신청할 수 있고 10km는 나이 제한이 없습니다. 휠체어·인라인 같은 보조장비 사용과 유아·유아차 동반은 허용되지 않으며 접수도 개인신청만 받습니다. 교통통제 안내와 시상 내역은 공식에서 아직 "추후 공개"입니다.',
    },
    raceInfo: {
      entryFees: [
        { distance: '풀코스', fee: 60000 },
        { distance: '하프', fee: 50000 },
        { distance: '10K', fee: 40000 },
      ],
      expectedParticipants: 16000,
      startTime: '08:00',
    },
    logistics: {
      publicTransport:
        'KTX·SRT는 경주역(2023.12 신경주역에서 역명 변경, 건천읍 외곽) 하차 후 시내버스(50·60번)나 택시로 경주시민운동장까지 이동합니다.',
      parking:
        '경주시민운동장 진입로·코스 구간은 주차 금지. 지정 주차장(경주 예술의전당·시립도서관)만 이용하며, 교통 통제 해제 전에는 출차가 어렵습니다.',
      shuttle:
        '서울 출발 왕복 셔틀버스 운영(2025년 기준). 2026 운영 여부는 동마클럽 별도 공지로, 조기 마감되니 사전 확인이 필요합니다.',
    },
  },
  {
    id: 'dalseo-half-marathon-2026',
    name: '2026 달서하프마라톤',
    date: '2026-10-04',
    month: '10월',
    location: '대구 달서구 호림강나루공원',
    region: '대구',
    distances: ['하프', '10K', '5K'],
    status: '마감',
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
    status: '마감',
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
    id: 'daecheongho-marathon-2026',
    name: '2026 청원생명쌀 대청호마라톤',
    date: '2026-10-17',
    month: '10월',
    location: '충북 문의체육공원',
    region: '충북',
    distances: ['풀코스', '하프', '10K', '5K'],
    status: '마감',
    isMajor: false,
    website: 'https://race.cjsports.or.kr',
    description:
      '대청호를 배경으로 달리는 충북 대표 풀코스 마라톤 24회차. 가을 단풍 코스로 유명하며 정원은 6,000명(풀 800·하프 1,400·10km 2,000·5km 1,800). 종목별로 5월 초순~중순에 순차 접수를 시작해 6월 12일 마감됐습니다. 고3 이하 할인가(풀·하프·10km 30,000원, 5km 15,000원)가 별도로 있습니다.',
    raceInfo: {
      entryFees: [
        { distance: '풀코스', fee: 45000 },
        { distance: '하프', fee: 45000 },
        { distance: '10K', fee: 45000 },
        { distance: '5K', fee: 25000 },
      ],
      startTime: '08:40',
    },
  },
  {
    id: 'gangnam-peace-marathon-2026',
    name: '2026 강남국제평화마라톤 (제23회)',
    date: '2026-10-05',
    month: '10월',
    location: '강남구 봉은사로 (삼성1동주민센터 앞)',
    region: '서울',
    distances: ['풀코스', '하프', '10K', '5K'],
    status: '접수중',
    isMajor: true,
    website: 'https://peacemarathon.co.kr',
    registrationStart: '2026-08-10',
    registrationNote:
      '선착순 마감 — 마감일 미고지. 접수가 네 번에 나뉘어 열렸습니다: 강남구민 우선 2,000명 8월 10일(월) 10시 → 풀·하프 8월 11일(화) 10시 → 10km·5km 8월 12일(수) 10시 → 전 코스 8월 13일(목) 10시부터 선착순. 결제까지 마쳐야 접수가 완료되며, 우선 접수 후에는 주소·코스 변경이 일절 불가합니다(공식 요강, 2026-08-31 확인)',
    raceKit: {
      items: ['티셔츠', '번호표', '기록측정용 칩', '완주메달', '완주 간식'],
      images: [{ src: '/images/marathon/gangnam-peace-marathon-2026/kit-1.webp', alt: '2026 강남국제평화마라톤 공식 기념 티셔츠' }],
      verifiedAt: '2026-08-27',
    },
    lastVerified: '2026-08-31',
    description:
      '강남구·주한미8군 공동 주최, 참가비 전액을 전쟁고아 지원에 기부하는 이색 마라톤(유니세프 한국위원회 후원). 2026년 제23회는 10월 5일(월) 대체공휴일에 열리며, 봉은사로 삼성1동주민센터 앞에서 8시 집결·9시 출발합니다. 참가비가 풀 3만·하프/10km 2만·5km 1만원으로 저렴한 기부형 대회이고, 풀·하프는 만 18세 이상만 신청할 수 있습니다. 제한시간은 풀 5시간·하프 3시간·10km/5km 1시간 50분입니다.',
    courseInfo: {
      terrain: '평지',
      difficulty: '중급',
      certification: '없음',
      courseDescription:
        '봉은사로 삼성1동주민센터 앞(봉은사역 4·5번 출구)에서 출발합니다. ⚠️ 공식이 밝힌 가장 중요한 특징은 코스 전 구간이 자전거 도로라는 점입니다 — 도로를 통제해 비우는 방식이 아니라 자전거가 함께 다니는 길을 달리므로, 공식 안내도 "자전거 통행에 유의해 스스로 안전에 각별히 주의하라"고 명시하고 있습니다. 추월이나 무리한 인코스 진입은 피하는 편이 좋습니다. 종목별 코스도는 2026-08-31 기준 전 종목 "COMING SOON"으로 아직 공개되지 않았습니다.',
    },
    raceInfo: {
      entryFees: [
        { distance: '풀코스', fee: 30000 },
        { distance: '하프', fee: 20000 },
        { distance: '10K', fee: 20000 },
        { distance: '5K', fee: 10000 },
      ],
      timeLimits: [
        { distance: '풀코스', hours: 5, minutes: 0 },
        { distance: '하프', hours: 3, minutes: 0 },
        { distance: '10K', hours: 1, minutes: 50 },
        { distance: '5K', hours: 1, minutes: 50 },
      ],
      // 공식 요강 "8시 집결 / 9시 출발" — 기존 08:00 은 집결 시각을 출발로 잘못 넣은 값이었다
      startTime: '09:00',
    },
    logistics: {
      publicTransport: '지하철 9호선 봉은사역 4·5번 출구 (출발지: 서울 강남구 봉은사로 616 삼성1동 주민센터 앞)',
    },
  },
  {
    id: 'gimje-jipyeongseon-marathon-2026',
    name: '제25회 김제새만금 지평선 전국마라톤대회',
    date: '2026-10-03',
    month: '10월',
    location: '김제시민운동장 (전북 김제시)',
    region: '전북',
    distances: ['하프', '10K', '5K'],
    status: '마감',
    isMajor: false,
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
    status: '마감',
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
    id: 'hankyung-seoul-marathon-2026',
    name: '2026 한경서울마라톤',
    date: '2026-10-05',
    month: '10월',
    location: '여의도공원 문화의마당 (서울 영등포구)',
    region: '서울',
    distances: ['하프', '10K', '5K'],
    status: '접수중',
    isMajor: false,
    website: 'https://hk-marathon.com/',
    registrationNote: '입금 기준 선착순 7,000명 — 마감일 미고지(접수기간은 "선착순 모집 마감일까지")',
    raceKit: {
      items: [
        '뉴발란스 기능성 티셔츠(사전 배송, 남 95~110·여 85~95)',
        '뉴발란스 양말(사전 배송)',
        '배번호·기록칩(사전 배송, 5km는 기록칩 제외)',
        '웰컴 키트 — 하이뮨 아미노포텐 파워젤',
        '완주메달(현장, 무료 각인 — 5km 제외)',
        '완주 패키지 — 용암수·에너지바·이온음료·누룽지팝',
      ],
      byDistance: [{ distance: '하프', item: '웰컴 키트에 닥터포헤어 헤어케어 제품 추가 증정' }],
      pending: '공식 고지: 전체 참가자 기념품 추가 예정',
      images: [{ src: '/images/marathon/hankyung-seoul-marathon-2026/kit-1.webp', alt: '2026 한경서울마라톤 공식 기념품 안내 — 뉴발란스 티셔츠·양말 등' }],
      verifiedAt: '2026-08-27',
    },
    lastVerified: '2026-08-27',
    description:
      '한경미디어그룹이 처음 여는 약 7,000명 규모 대회. 하프는 여의도공원 출발 서강대교·월드컵대교 남단 회귀, 10K는 서강대교 왕복, 5K는 여의도 일대 코스입니다. 접수는 7월 16일부터 선착순.',
    courseInfo: {
      terrain: '평지',
      difficulty: '초보자',
      certification: '없음',
      courseDescription:
        '여의도공원 출발 한강변 평지 코스. 하프는 서강대교·월드컵대교 남단 회귀, 10K는 서강대교 왕복, 5K는 여의도 일대.',
    },
    raceInfo: {
      entryFees: [
        { distance: '하프', fee: 80000 },
        { distance: '10K', fee: 70000 },
        { distance: '5K', fee: 60000 },
      ],
      expectedParticipants: 7000,
    },
  },
  {
    id: 'yeoju-sejong-marathon-2026',
    name: '제23회 여주 세종대왕 마라톤대회',
    date: '2026-10-18',
    month: '10월',
    location: '현암지구공원 (경기 여주시)',
    region: '경기',
    distances: ['하프', '10K'],
    status: '접수예정',
    isMajor: false,
    website: 'http://yjmarathon.com/',
    registrationNote: '공식 홈이 아직 2026년 요강을 게시하지 않음 — 접수 일정 불명 (2026-08-27 확인)',
    lastVerified: '2026-08-27',
    description:
      '남한강변 현암지구공원에서 출발하는 여주 대표 가을 대회. 하프 1,500명·10K 2,500명·4K 1,000명 등 총 5,000명 선착순이며 1km 휠체어 종목은 무료입니다. 접수는 6월 2일~9월 18일.',
    raceInfo: {
      entryFees: [
        { distance: '하프', fee: 45000 },
        { distance: '10K', fee: 45000 },
        { distance: '4K', fee: 25000 },
      ],
      expectedParticipants: 5000,
      startTime: '08:30',
    },
  },
  {
    id: 'style-run-2026',
    name: '2026 스타일런 (Style Run)',
    date: '2026-10-18',
    month: '10월',
    location: '롯데월드타워 월드파크 잔디광장 (서울 송파구)',
    region: '서울',
    distances: ['10K', '5K'],
    status: '접수중',
    isMajor: false,
    website: 'https://www.lotteon.com/',
    registrationStart: '2026-09-01',
    registrationNote: '9월 1일(화) 오전 10시 롯데백화점몰에서 선착순 접수 개시됨 — 정원 7,000명. 2025년(6,000명)은 사전 접수 5시간 만에 매진됐으므로 잔여 여부는 롯데백화점몰에서 직접 확인 필요(매진 공지 미확인, 2026-09-02)',
    lastVerified: '2026-09-02',
    description:
      '롯데백화점이 2017년부터 잠실에서 여는 패션 러닝 페스티벌 8회차. 2026년은 자라의 퍼포먼스 라인 자라 애슬레틱즈(ZARA ATHLETICZ)와 협업하며, 정원이 지난해 6,000명에서 7,000명으로 늘었습니다. 롯데월드타워 월드파크 잔디광장에서 출발해 송파대로와 석촌호수를 도는 5km·10km 두 종목이고 순위·기록 경쟁이 없는 펀런입니다. 참가자 전원에게 자라 애슬레틱즈 협업 5종(티셔츠·러닝모자·양말·가방·반다나)과 스타일런 굿즈 3종(무릎보호대·플라스크 물통·마사지볼) 등 총 8종 키트를 제공합니다. 접수는 9월 1일(화) 오전 10시 롯데백화점몰 선착순이며, 참가비 80,000원은 대회 정보 계정(@runsosik) 광고 게시물 기준으로 언론 보도에는 금액이 실리지 않았습니다. 대회 전 주말(10/15~17)에는 F45와 함께하는 부대 프로그램 "데이아웃"이 3,000명 규모로 열리며 별도 접수는 9월 22일 오전 10시입니다.',
    courseInfo: {
      terrain: '평지',
      difficulty: '초보자',
      courseDescription:
        '롯데월드타워 월드파크 잔디광장 출발 → 송파대로 → 석촌호수 순회 후 복귀. 도심 평지 코스이며 기록 측정이 없는 펀런 성격입니다. 종목별 세부 경로·출발 시각은 접수 개시 후 공식 안내 예정.',
    },
    raceInfo: {
      entryFees: [
        { distance: '10K', fee: 80000 },
        { distance: '5K', fee: 80000 },
      ],
      expectedParticipants: 7000,
    },
  },
];
