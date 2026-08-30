import type { MarathonEvent } from '@/types/marathon';

export const septemberEvents: MarathonEvent[] = [
  {
    id: 'seoul-olympic-88run-2026',
    name: '2026 서울올림픽기념 88RUN',
    date: '2026-09-12',
    month: '9월',
    location: '하남 미사경정공원 (경기 하남시)',
    region: '경기',
    distances: ['10K', '5K'],
    // 8/14 11시 접수 시작 → 공식 신청 페이지가 "선착순 1988명 조기 마감" alert 로 응답한다(2026-08-24 확인)
    status: '마감',
    isMajor: false,
    website: 'https://88run.kr/',
    description:
      '서울올림픽기념국민체육진흥공단 경륜경정총괄본부가 여는 러닝 페스티벌. 1988 서울올림픽 조정·카누 경기가 열린 미사리 조정경기장 자리에서 열리며, 정원도 1,988명으로 그해를 따왔습니다. 참가비가 전 종목 1만원이고 10km·5km 외에 가족런이 따로 있습니다. 8월 14일 오전 11시 접수를 시작해 정원이 조기 마감됐습니다. 5km는 기록칩이 제공되지 않으며, 14세 미만은 보호자와 단체 신청만 가능합니다.',
    courseInfo: {
      terrain: '평지',
      difficulty: '초보자',
      courseDescription:
        '미사경정공원 일원을 도는 10km·5km 코스. 공식 안내는 코스를 지도 이미지로만 공개해 경유지 지명은 밝히지 않았습니다.',
    },
    raceInfo: {
      entryFees: [
        { distance: '10K', fee: 10000 },
        { distance: '5K', fee: 10000 },
      ],
      expectedParticipants: 1988,
      startTime: '08:30',
    },
    raceKit: {
      pending:
        '참가 기념품 구성은 공식이 이미지로만 안내해 확인하지 못했습니다. 부스 참여 기념품(에너지젤·샤워타월·생수 등)과는 별개입니다.',
      verifiedAt: '2026-08-24',
    },
    registrationStart: '2026-08-14',
    lastVerified: '2026-08-24',
  },
  {
    id: 'ansan-marathon-2026',
    name: '2026 안산마라톤대회',
    date: '2026-09-20',
    month: '9월',
    location: '대부바다향기테마파크 (경기 안산시 대부도)',
    region: '경기',
    distances: ['하프', '10K', '5K'],
    status: '접수중',
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
    lastVerified: '2026-08-27',
    description:
      '시화호 남안 대부도에서 열리는 안산시체육회·경기일보 주최 대회. 안산포도축제와 연계되며 기념품으로 쌀 3kg과 소비쿠폰을 제공합니다(5km 제외). 선착순 6,000명 결제 완료자 기준으로 마감되며, 제한시간은 하프 3시간·10km 2시간·5km 1시간. 5km는 기록칩이 제공되지 않습니다.',
    courseInfo: {
      terrain: '평지',
      difficulty: '중급',
      courseDescription:
        '대부바다향기테마파크 출발 → 대부도 내륙 도로 왕복. 시화호 풍광을 배경으로 하지만 코스 자체는 대부도 내륙이며 시화방조제·조력발전소 구간은 포함되지 않습니다.',
    },
    raceInfo: {
      entryFees: [
        { distance: '하프', fee: 40000 },
        { distance: '10K', fee: 40000 },
        { distance: '5K', fee: 25000 },
      ],
      startTime: '09:00',
    },
  },
  {
    id: 'hyundai-forest-run-2026',
    name: '2026 현대자동차 포레스트런',
    date: '2026-09-12',
    month: '9월',
    location: '여의도공원 문화의 마당',
    region: '서울',
    distances: ['10K'],
    status: '접수예정',
    isMajor: true,
    website: 'https://www.hyundai.com/kr/ko/brand/forestrun',
    description:
      '참가자 1인당 나무를 심는 현대자동차 친환경 러닝 캠페인 11회차. 2026년은 봄에서 가을로 이동해 9/12 개최, UN세계식량계획(WFP)과 협업해 니제르 10만 그루 식재가 목표. 접수 7/23 10:00~7/30, 현대Shop에서 기부 참가권 구매 방식(선착순 6,500명).',
    courseInfo: {
      terrain: '평지',
      difficulty: '초보자',
      courseDescription:
        '여의도공원 문화의 마당 출발 → 여의서로 하단도로 → 여의서로 → 서강대교 → 광흥창역 사거리(반환) → 같은 길로 복귀. 평지 도심 코스로 완주 제한 1시간 30분.',
      gpx: {
        file: '/data/gpx/hyundai-forest-run-2026.gpx',
        source: 'reconstructed',
        verifiedAt: '2026-08-23',
        sourceNote:
          '현대자동차 공식 홈페이지가 텍스트로 밝힌 경유지를 OSM 보행 도로망 위에서 새로 이었다',
        sourceUrl: 'https://www.hyundai.com/kr/ko/brand/forestrun/forestrun-apply/finalrun',
      },
    },
    raceInfo: {
      entryFees: [{ distance: '10K', fee: 50000 }],
      startTime: '06:30',
    },
  },
  {
    id: 'run-seoul-run-2026',
    name: '런서울런 2026 (제20회 일간스포츠 서울마라톤)',
    date: '2026-09-13',
    month: '9월',
    location: '서울광장 (서울 중구 세종대로 110)',
    region: '서울',
    distances: ['하프', '10K'],
    status: '접수중',
    isMajor: true,
    website: 'https://runseoulrun.com/',
    registrationNote: '선착순 12,000명 마감(결제 기준) — 마감일 미고지',
    raceKit: {
      items: [
        '기념 티셔츠(노스페이스, 택배 발송)',
        '노스페이스 러닝 양말',
        '배번호(택배 발송)',
        '완주메달(현장 지급)',
        '할리스 기프트 카드 5,000원권',
        '에너지 젤·리커버리 등 협찬 물품',
      ],
      byDistance: [
        { distance: '하프', item: '헤어 리커버리 샴푸 50ml·파워에이드 (하프 한정)' },
        { distance: '10km', item: '캐옴 당근 (10km 한정)' },
      ],
      images: [
        { src: '/images/marathon/run-seoul-run-2026/kit-1.webp', alt: '2026 런서울런 공식 기념 티셔츠 (노스페이스)' },
        { src: '/images/marathon/run-seoul-run-2026/kit-2.webp', alt: '2026 런서울런 완주메달 공식 시안' },
        { src: '/images/marathon/run-seoul-run-2026/kit-3.webp', alt: '2026 런서울런 노스페이스 러닝 양말' },
      ],
      verifiedAt: '2026-08-27',
    },
    lastVerified: '2026-08-27',
    description:
      '서울광장에서 출발하는 도심 하프·10km 대회 20회차. 6월 29일 10시부터 결제자 기준 12,000명 선착순 접수로, 고정 마감일 없이 정원 소진 시 종료됩니다. 참가 정보 수정·환불은 8월 14일 17시까지 가능합니다.',
    courseInfo: {
      terrain: '평지',
      difficulty: '중급',
      courseDescription: '서울광장 출발 도심 코스. 하프 07:30, 10km 07:50 출발.',
    },
    raceInfo: {
      entryFees: [
        { distance: '하프', fee: 80000 },
        { distance: '10K', fee: 70000 },
      ],
      startTime: '07:30',
    },
  },
  {
    id: 'sunsa-marathon-festival-2026',
    name: '2026 선사마라톤축제 (제20회)',
    date: '2026-09-20',
    month: '9월',
    location: '암사동 유적 앞 특설무대 (서울 강동구)',
    region: '서울',
    distances: ['하프', '10K', '5K'],
    status: '마감',
    isMajor: false,
    website: 'http://www.gomarathon.co.kr/',
    description:
      '서울 강동구 암사동 유적에서 출발해 한강을 달리는 20회차 대회. 전 종목 참가비 30,000원에 초경량 러닝자켓을 제공해 가성비로 알려져 있습니다. 총 2,800명(강동구민 1,000·일반 1,800) 선착순으로 6월 11일 접수 마감됐습니다.',
    courseInfo: {
      terrain: '평지',
      difficulty: '초보자',
      courseDescription: '암사동 유적 출발 한강변 평지 코스. 교통통제 없는 구간 위주.',
    },
    raceInfo: {
      entryFees: [
        { distance: '하프', fee: 30000 },
        { distance: '10K', fee: 30000 },
        { distance: '5K', fee: 30000 },
      ],
      startTime: '09:00',
    },
  },
  {
    id: 'mudo-run-gyeongju-2026',
    name: '2026 무한도전 RUN in 경주',
    date: '2026-09-19',
    month: '9월',
    location: '경주시민운동장',
    region: '경북',
    distances: ['하프', '10K'],
    status: '마감',
    isMajor: true,
    website: 'https://www.coupangplay.com/promotion/2026-Mudorun-Gyeongju',
    registrationStart: '2026-07-30',
    registrationEnd: '2026-08-09',
    registrationNote:
      '쿠팡플레이 단독 접수(7/30~8/9)·카카오톡 선물하기(~8/17) 모두 종료. 매진 후 추가 티켓이 간헐적으로 열린 이력이 있어 참가를 원하면 쿠팡플레이 공지 확인 권장(2026-08-27 확인)',
    description:
      '무한도전 런 하반기 대회. 오후 4시 30분 출발, 노을 지는 경주 옛길을 달리는 선셋 레이스로 콘셉트는 보물찾기 — 포졸과 도적. 올해 하프가 처음 신설돼 하프·10K 두 종목으로 열립니다. 참가비 하프 119,900원·10K 99,900원. 접수는 쿠팡플레이 단독(7/30~8/9, 카카오톡 선물하기 ~8/17)으로 진행돼 종료됐습니다.',
    courseInfo: {
      terrain: '평지',
      difficulty: '초보자',
      courseDescription:
        '주최 측 보도자료 기준 10K는 경주시민운동장 출발 → 동궁과 월지 → 첨성대 → 교촌마을 → 천마총 → 시민운동장 복귀, 하프는 여기에 대릉원~보문관광단지 초입 구간이 더해집니다. "고저차를 최소화한 평탄한 도심·수변 주로"로 소개됐으며, 공식 코스도·고저도는 미게시 상태입니다(2026-08-27 기준).',
    },
    raceInfo: {
      entryFees: [
        { distance: '하프', fee: 119900 },
        { distance: '10K', fee: 99900 },
      ],
      startTime: '16:30',
    },
    lastVerified: '2026-08-27',
  },
  {
    id: 'gongju-baekje-marathon-2026',
    name: '2026 공주백제마라톤',
    date: '2026-09-20',
    month: '9월',
    location: '공주시민운동장 (금강변)',
    region: '충남',
    distances: ['풀코스', '하프', '10K'],
    status: '마감',
    isMajor: true,
    website: 'https://www.gongjumarathon.com/',
    description:
      '동마 시리즈 가을 시즌 개막전. 금강변 평지 풀코스에 32K 옵션이 있어 가을 풀코스 준비용으로 인기입니다. 우선접수 5월 11일에 이어 5월 21일 본접수를 시작해 선착순 마감됐으며, 접수처인 동마클럽에서 현재 품절 상태입니다. 정원은 네 종목 합쳐 12,000명이고, 취소·환불은 7월 31일 17시까지 가능합니다. 동마클럽 매니아 회원은 종목별로 1만 원 싼 참가비가 적용되는 대신 티셔츠를 받지 않습니다.',
    courseInfo: {
      terrain: '평지',
      difficulty: '중급',
      certification: 'KAF',
      courseDescription:
        '공주시민운동장에서 출발해 같은 자리로 돌아오는 금강변 코스로, 무령왕릉·공산성·공주보 일대를 지납니다. 공식 홈페이지에 풀/32K·하프·10K 코스맵과 풀코스 고도 프로파일이 모두 공개돼 있습니다. 다만 출발·골인 지점 배치도는 "2026 버전으로 추후 업데이트 예정"으로 안내돼 있어 현재 게시분은 이전 연도 기준입니다.',
    },
    raceInfo: {
      entryFees: [
        { distance: '풀코스', fee: 70000 },
        { distance: '32K', fee: 70000 },
        { distance: '하프', fee: 60000 },
        { distance: '10K', fee: 50000 },
      ],
      expectedParticipants: 12000,
      startTime: '08:00',
    },
    raceKit: {
      items: ['티셔츠', '메달', '배번호'],
      pending:
        '메달·배번호 디자인은 공식 홈페이지에 "추후공개"로 표기(2026-08-29 확인). 동마클럽 매니아 참가자는 티셔츠를 지급받지 않습니다',
      verifiedAt: '2026-08-29',
    },
    registrationStart: '2026-05-21',
    registrationNote:
      '우선접수 5월 11일(월) 10시~5월 15일(금) 15시, 본접수 5월 21일(목) 19시부터 선착순 마감 — 마감일 미고지. 정원 12,000명이 모두 소진돼 접수처(동마클럽)에서 품절 상태입니다.',
    lastVerified: '2026-08-29',
  },
  {
    id: 'cheorwon-dmz-peace-marathon-2026',
    name: '2026 철원DMZ국제평화마라톤',
    date: '2026-09-05',
    month: '9월',
    location: '강원 철원 고석정',
    region: '강원',
    distances: ['풀코스', '하프', '10K'],
    status: '마감',
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
    status: '마감',
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
    status: '마감',
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
    status: '접수중',
    isMajor: false,
    website: 'https://ganghwamarathon.co.kr',
    registrationNote: '결제 완료순 3,500명 선착순 마감 — 마감일 미고지',
    raceKit: {
      items: ['DRSKIN 무봉제 싱글렛(전 참가자)', '배번호', '완주메달', '완주 간식'],
      byDistance: [{ distance: '하프·10km', item: '러닝 슬림 벨트·기록칩·온라인 기록증 (5km·가족런 제외)' }],
      images: [{ src: '/images/marathon/ganghwa-beach-marathon-2026/kit-1.webp', alt: '2026 강화해변마라톤 공식 기념품 안내' }],
      verifiedAt: '2026-08-27',
    },
    lastVerified: '2026-08-27',
    description:
      '강화함상공원을 출발해 강화 해변을 달리는 바다 조망 코스. 선착순 3,500명 소규모 대회로 커플런(10K)·가족런(5K) 종목을 운영합니다. 접수 6/10(수) 14시 시작, 선착순 마감.',
    courseInfo: {
      terrain: '평지',
      difficulty: '초보자',
      certification: '없음',
      courseDescription: '강화함상공원 출발 해변 평지 코스. 바다를 보며 달리는 가족 친화형.',
    },
    raceInfo: {
      entryFees: [
        { distance: '하프', fee: 45000 },
        { distance: '10K', fee: 45000 },
        { distance: '5K', fee: 40000 },
        { distance: '커플런(10K)', fee: 40000 },
        { distance: '가족런(5K)', fee: 35000 },
      ],
      expectedParticipants: 3500,
      startTime: '08:30',
    },
  },
  {
    id: 'ytn-seoul-tour-marathon-2026',
    name: '2026 YTN 서울투어마라톤',
    date: '2026-09-06',
    month: '9월',
    location: '서울광장 (서울 중구)',
    region: '서울',
    distances: ['하프', '11K'],
    status: '마감',
    isMajor: true,
    website: 'https://run.ytn.co.kr',
    registrationStart: '2026-06-17',
    registrationEnd: '2026-06-26',
    registrationNote:
      '전 코스 선착순 조기 마감 — 6/26 공식 공지(기념품 제작 진행으로 취소·환불 불가). 추가접수·양도 공지 없음(2026-08-27 확인)',
    raceKit: {
      items: ['공식 티셔츠(85~115)', '헤드밴드', '양말', '배번호·기록칩', '완주메달'],
      pending:
        '완주메달 디자인 공개됨(그레이스케일 목업 수준)·배번호 디자인은 미게시. 티셔츠 공급사 표기가 사이트 안에서 충돌(기념품 페이지 프로-스펙스 vs 발송 공지 무신사 패키지) — 실물 확인 전 단정 보류',
      images: [{ src: '/images/marathon/ytn-seoul-tour-marathon-2026/kit-1.webp', alt: '2026 서울투어마라톤 공식 기념품 안내 — 무신사 티셔츠·헤드밴드·양말' }],
      verifiedAt: '2026-08-27',
    },
    lastVerified: '2026-08-27',
    description:
      'YTN 주최 서울 도심 시티투어 마라톤. 서울광장 출발, 동대문·숭례문·청계천 등 구도심 랜드마크를 잇는 평탄한 하프·11K 코스(풀코스 없음). 2026.9.6(일) 07시30분 출발. 참가비 하프 8만·11K 7만 원. 접수는 6/17 열려 전 코스 선착순 조기 마감됐습니다(6/26 공지). 배번호·기록칩·기념품은 현장 수령이 아니라 8/26~28 택배로 사전 발송 — 9/1까지 못 받으면 사무국(070-7725-6258) 확인, 미수령 반송분은 대회 당일 안내센터에서 신분증 지참 수령. 2025년 광화문광장→2026년 서울광장으로 출발지 변경, 11월→9월 초로 시기 이동(단, 교통통제도·집결 안내 일부는 아직 광화문광장 세종대왕상 앞 표기로 사이트 내 불일치).',
    courseInfo: {
      terrain: '평지',
      difficulty: '초보자',
      certification: '없음',
      courseDescription:
        '2026 공식 코스도 게시됨(종목별 이미지 지도, 고저도·급수 정보는 없음). 11K는 서울광장 출발 → 종로 → 동대문역 반환 → 세종대로·숭례문 → 을지로3가역 반환 → 청계천 광교 → 무교로 피니시. 하프는 여기에 청계천변 왕복(청계9가·고산자교·용두역 반환)이 더해집니다. "현장 상황에 따라 변경될 수 있음" 단서 유지(2026-08-27 공식 코스도 확인).',
    },
    raceInfo: {
      entryFees: [
        { distance: '하프', fee: 80000 },
        { distance: '11K', fee: 70000 },
      ],
      expectedParticipants: 15000,
      startTime: '07:30',
    },
  },
  {
    id: 'kimdaejung-peace-marathon-2026',
    name: '제11회 김대중 평화 마라톤',
    date: '2026-09-06',
    month: '9월',
    location: '뚝섬 한강공원 수변무대 (서울 광진구)',
    region: '서울',
    distances: ['하프', '10K', '5K'],
    status: '접수중',
    isMajor: false,
    website: 'http://kdjrun.kr/',
    registrationEnd: '2026-08-30',
    raceKit: {
      items: ['기념 티셔츠(랜덤 발송, 85~110)', '완주메달', '간식(빵·음료)', '모바일 기록증(전 종목)'],
      pending: '공식 고지: 기념품과 경품은 변경될 수 있음',
      images: [{ src: '/images/marathon/kimdaejung-peace-marathon-2026/kit-1.webp', alt: '2026 김대중평화마라톤 공식 기념품 안내' }],
      verifiedAt: '2026-08-27',
    },
    lastVerified: '2026-08-27',
    description:
      '김대중재단이 주최하는 평화·인권 테마 시민 마라톤. 뚝섬 한강공원 수변무대에서 하프·10km·5km 종목이 오전 8시에 출발합니다. 접수는 8월 30일까지.',
    courseInfo: {
      terrain: '평지',
      difficulty: '초보자',
      certification: '없음',
      courseDescription: '뚝섬 한강공원 출발 한강 수변 평지 코스(하프/10K/5K).',
    },
    raceInfo: {
      entryFees: [
        { distance: '하프', fee: 50000 },
        { distance: '10K', fee: 50000 },
        { distance: '5K', fee: 50000 },
      ],
      startTime: '08:00',
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
    status: '접수중',
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
    status: '마감',
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
    status: '접수중',
    isMajor: true,
    website: 'https://songdorun.net/',
    registrationNote: '결제 완료순 15,000명 선착순 마감 — 마감일 미고지',
    raceKit: {
      items: ['DeÉpo 기능성 티셔츠(XS~2XL)', 'DeÉpo 스포츠 양말', 'DeÉpo 쿨 타월', 'DeÉpo 리유저블백', '완주메달', '배번호', '완주 간식'],
      byDistance: [{ distance: '하프·10km', item: '기록칩·온라인 기록증 (5km 제외)' }],
      images: [{ src: '/images/marathon/incheon-songdo-half-marathon-2026/kit-1.webp', alt: '2026 인천 송도 하프마라톤 공식 기념품 안내' }],
      verifiedAt: '2026-08-27',
    },
    lastVerified: '2026-08-30',
    description:
      '인천대 송도캠퍼스 정문에서 출발하는 대규모 국제 하프마라톤. 결제완료순 1만 5천 명으로 마감되며, 하프는 만 18세 이상만 참가할 수 있습니다. 오전 8시 출발, 접수는 7월 8일~8월 7일.',
    courseInfo: {
      terrain: '평지',
      difficulty: '초보자',
      certification: '없음',
      gpx: {
        file: '/data/gpx/incheon-songdo-half-marathon-2026.gpx',
        source: 'reconstructed',
        verifiedAt: '2026-08-30',
        sourceNote:
          '공식 "코스안내 및 교통통제안내"가 표로 밝힌 통제 지점 여섯 곳과 공식이 붙인 반환 순서(1·2·3차)만 취해 OSM 도로망 위에서 새로 이었다',
        sourceUrl: 'https://songdorun.net/control.php',
        caveat:
          '공식은 통제 지점의 이름과 반환 순서만 밝혔을 뿐, 지점 사이를 어느 길로 잇는지와 각 반환점을 왕복하는지는 공개하지 않았습니다. 이 경로는 여섯 지점을 순서대로 이은 것이라 실제 하프 코스보다 짧고, 실제 주로와 다를 수 있습니다.',
      },
      courseDescription:
        '세 종목 모두 인천대 송도캠퍼스 정문(동문) 앞에서 출발해 같은 자리로 돌아옵니다. 공식 교통통제 안내가 밝힌 코스 지점은 인천대학교 정문도로(출발)·홈플러스 사거리(1차 반환)·송도국제캠핑장 사거리·해양극지연구소(2차 반환)·잭니클라우스 사거리·아트센터 사거리(3차 반환) 여섯 곳입니다. 통제 시간이 구간마다 달라 1차 반환 쪽이 07:30~09:30으로 가장 먼저 풀리고, 잭니클라우스·아트센터 쪽은 08:50~10:40으로 늦게까지 잡혀 있습니다. 공식 코스도는 종목별 이미지 지도로 게시돼 있으며 고저도·급수 정보는 미게시입니다(2026-08-30 공식 코스·교통통제 안내 확인).',
    },
    raceInfo: {
      entryFees: [
        { distance: '하프', fee: 55000 },
        { distance: '10K', fee: 55000 },
        { distance: '5K', fee: 50000 },
      ],
      expectedParticipants: 15000,
      startTime: '08:00',
    },
  },
];
