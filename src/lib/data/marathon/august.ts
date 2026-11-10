import type { MarathonEvent } from '@/types/marathon';

export const augustEvents: MarathonEvent[] = [
  {
    id: "danyang-moonlight-race-2026",
    name: "2026 단양 달빛레이스",
    date: "2026-08-29",
    month: "8월",
    location: "단양생태체육공원 (충북 단양)",
    region: "충북",
    distances: [
      "10K",
      "5K"
    ],
    status: "대회종료",
    isMajor: false,
    website: "http://danyangmarathon.kr/",
    registrationStart: "2026-06-10",
    registrationNote: "공식 요강은 6월 10일 11시 시작·선착순 5,000명, 7월 17일 17시 환불 기한을 구분한다. 실제 최종 접수 마감 시각과 현재 개인 발급 상태는 미확인이다.",
    raceKit: {
      "items": [
        "완주메달",
        "모바일 기록증",
        "간식",
        "배번호(기록칩 뒷면 부착, 택배 발송)"
      ],
      "byDistance": [
        {
          "distance": "10km",
          "item": "단양사랑상품권 10,000원 (현장 배부)"
        },
        {
          "distance": "5km",
          "item": "단양사랑상품권 5,000원 (현장 배부)"
        }
      ],
      "images": [
        {
          "src": "/images/marathon/danyang-moonlight-race-2026/kit-1.webp",
          "alt": "2026 단양 달빛레이스 공식 기념품 안내 — 종목별 상품권·메달·배번호"
        }
      ],
      "verifiedAt": "2026-08-27"
    },
    lastVerified: "2026-11-10",
    description: "8월 29일 19시 단양생태체육공원의 5km·10km 일정은 지났다. 공식 요강은 두 종목 칩 사용과 30,000/50,000원, 6월 10일 11시 접수 시작·선착순 5,000명을 안내한다. 7월 17일 17시는 환불 기한으로 접수 마감일과 다르다. 이벤트 이미지는 댄스·치킨·맥주·아이스크림과 선착순 LED 머리띠를 소개하며 막걸리·무제한 제공을 확정하지 않는다.",
    courseInfo: {
      "courseDescription": "단양생태체육공원 19시 출발의 5km·10km 공식 요강 범위다. 도담삼봉 방향·전 구간 평지·초보자 적합·PB 주장은 이번에 측정 자료로 확정하지 못해 제외했다. 야간 조명·현장 통제·개인 GPS는 별도 확인 대상이다."
    },
    raceInfo: {
      "entryFees": [
        {
          "distance": "10K",
          "fee": 50000
        },
        {
          "distance": "5K",
          "fee": 30000
        }
      ],
      "expectedParticipants": 5000,
      "startTime": "19:00"
    },
    postRaceNote: "2026 요강은 5km·10km 모두 칩 사용과 모바일 기록증을 적는다. 유의사항 본문은 넷타임·일회용 칩 반납 불필요를 안내하지만 2025 소개 표기가 남아 있다. 개인 결과·배송 완료는 미조회다. 기념품별 상품권은 기존 8월 27일 확인 범위이며 이번에 새로 인증하지 않았다. http://danyangmarathon.kr/outline.html 및 http://danyangmarathon.kr/notice_participant.html",
  },
  {
    id: 'anyangcheon-moonlight-nightrun-2026',
    name: '2026 안양천 달빛 나이트런',
    date: '2026-08-15',
    month: '8월',
    location: '신정교 하부 영롱이 억새구장 (서울 안양천)',
    region: '서울',
    distances: ['10K', '5K'],
    status: '대회종료',
    isMajor: false,
    website: 'https://moonnightrun.kr/',
    description:
      '대한이에스지협회가 주최·주관한 2026년 8월 15일 야간 대회입니다. 신정교 하부 영롱이 억새구장에서 18:30 출발, 10K·5K 참가비 각 5만원과 전 종목 기록측정을 공식 홈페이지에서 확인했습니다. 현재 공식 홈페이지는 대회 종료를 안내합니다.',
    raceInfo: {
      entryFees: [
        { distance: '10K', fee: 50000 },
        { distance: '5K', fee: 50000 },
      ],
      startTime: '18:30',
    },
    registrationEnd: '2026-08-06',
    factCheck: {
      checkedAt: '2026-11-11',
      sources: [
        { title: '2026 공식 개최·참가비·종료 안내', url: 'https://moonnightrun.kr/' },
      ],
      note: '2026년 8월 개최분입니다. 초보자·평지 등급과 야광 소품 권장 문구는 근거를 확정하지 못해 표시하지 않습니다. 종목별 고도와 컷오프도 이번 원문에서 확인하지 못했습니다.',
    },
    lastVerified: '2026-11-11',
  },
  {
    id: 'incheon-night-race-2026',
    name: '2026 인천 나이트 레이스 (INCHEON NIGHT RACE)',
    date: '2026-08-15',
    month: '8월',
    location: '청라하늘대교 영종진광장로 (인천 중구)',
    region: '인천',
    distances: ['10K'],
    status: '대회종료',
    isMajor: false,
    website: 'http://icnr.kr/',
    description:
      '청라하늘대교를 야간에 달리는 8.15km 단일 종목 나이트 레이스. 광복절(8.15)을 상징하는 8.15km 코스로 19시 30분에 출발하며, 순위 입상자에게 상금을 지급합니다. 접수는 8월 8일까지.',
    raceInfo: {
      entryFees: [{ distance: '8.15K', fee: 60000 }],
      startTime: '19:30',
    },
  },
  {
    id: 'pyeongchang-daegwallyeong-half-2026',
    name: '2026 Happy700 평창 대관령 전국 하프마라톤',
    date: '2026-08-16',
    month: '8월',
    location: '2018 평창동계올림픽기념관 (강원 평창군)',
    region: '강원',
    distances: ['하프', '10K'],
    status: '대회종료',
    isMajor: false,
    website: 'http://www.ifunrunkorea.co.kr/',
    description:
      '평균 해발 700m 고지대 평창에서 열리는 한여름 하프마라톤. 8월에도 20도 안팎의 선선한 기온이 강점이며, 평창동계올림픽기념관 앞에서 오전 8시 출발합니다. 한국실업육상연맹 주최로 접수는 7월 26일 18시 마감입니다.',
    raceInfo: {
      entryFees: [
        { distance: '하프', fee: 50000 },
        { distance: '10K', fee: 40000 },
      ],
      startTime: '08:00',
    },
  },
  {
    id: 'hangang-seoul-half-marathon-2026',
    name: '제3회 한강 서울 하프 마라톤',
    date: '2026-08-30',
    month: '8월',
    location: '여의도 한강공원 물빛광장 (서울 영등포구)',
    region: '서울',
    distances: ['하프', '10K', '5K'],
    status: '대회종료',
    isMajor: false,
    website: 'https://seoulhalfrun.kr/',
    registrationEnd: '2026-08-23',
    raceKit: {
      items: ['기념 티셔츠', '완주메달', '기록증(하프·10km·5km)', '간식(빵·음료)'],
      verifiedAt: '2026-08-27',
    },
    lastVerified: '2026-11-11',
    description:
      '국민성공시대가 주최·주관한 2026년 8월 30일 대회입니다. 여의도 한강공원 물빛광장에서 하프·10K·5K를 운영했으며 참가비는 종목별 각 5만원이었습니다. 공식 출발시간은 하프 08:00·10K 08:30·5K 08:50으로 구분됩니다.',
    courseInfo: {
      courseDescription: '공식 홈페이지는 여의도 한강공원 물빛광장 출발과 종목별 코스 안내를 제공하며 코스 변경 가능성을 고지합니다. 종목별 지도·최종 현장 운영과 구분해 확인하세요.',
    },
    raceInfo: {
      entryFees: [
        { distance: '하프', fee: 50000 },
        { distance: '10K', fee: 50000 },
        { distance: '5K', fee: 50000 },
      ],
      startTime: '08:00',
    },
    factCheck: {
      checkedAt: '2026-11-11',
      sources: [
        { title: '공식 2026 종목별 출발·참가비 안내', url: 'https://seoulhalfrun.kr/' },
      ],
      note: '2026년 8월 30일 개최분입니다. 난이도 등급·전 구간 평지·고도·컷오프는 이번 원문에서 확정하지 못했습니다. 기념품 확인일은 기존 별도 확인일을 유지하며 차기 회차에 그대로 적용하지 않습니다.',
    },
  },
];
