import type { MarathonEvent } from '@/types/marathon';

export const aprilEvents: MarathonEvent[] = [
  {
    id: 'gyeongju-cherry-blossom-2026',
    name: '제33회 경주벚꽃마라톤',
    date: '2026-04-04',
    month: '4월',
    location: '경주 보덕동행정복지센터 옆 헬기장',
    region: '경북',
    distances: ['하프', '10K', '5K'],
    status: '대회종료',
    isMajor: true,
    website: 'https://www.cherrymarathon.co.kr/',
    description: '경주시가 주최하고 경주시체육회가 주관한 2026년 봄 대회로, 하프·10K·5K를 운영했습니다. 보덕동행정복지센터 앞에서 출발해 종목별 반환점을 거쳐 돌아오는 코스입니다.',
    courseInfo: {
      courseDescription: '하프는 보덕동행정복지센터 앞에서 출발해 경주여고 뒤 반환점과 보문단지를 지나 돌아오는 경로입니다. 10K는 경주월드 방향 반환점을, 5K는 바르게살자 표지석 앞 2.5km 반환점을 이용합니다. 주최 측 코스 안내에는 육상연맹 공식 인증 코스라고 명시돼 있습니다.',
    },
    raceInfo: {
      entryFees: [
        { distance: '하프', fee: 50000 },
        { distance: '10K', fee: 50000 },
        { distance: '5K', fee: 30000 },
      ],
      timeLimits: [
        { distance: '하프', hours: 2, minutes: 30 },
        { distance: '10K', hours: 1, minutes: 30 },
        { distance: '5K', hours: 1, minutes: 30 },
      ],
      startTime: '08:00',
    },
    logistics: {
      parking: '공식 안내상 경주엑스포대공원 동·서편 주차장은 당일 07:00 이후 입차가 제한됐습니다. 무료 주차 여부는 확인하지 못했습니다.',
      shuttle: '2026년 3월 30일 공지: 고속버스터미널 → 행사장(엑스포 삼거리·천군휴게소) 06:00~07:00, 행사장 → 고속버스터미널 09:00~12:00. 만차 또는 10분 간격 출발 안내입니다.',
      bagStorage: true,
    },
    lastVerified: '2026-11-11',
    factCheck: {
      checkedAt: '2026-11-11',
      sources: [
        { title: '2026 참가부문·참가비·제한시간', url: 'https://www.cherrymarathon.co.kr/info/index02.php' },
        { title: '공식 코스 안내', url: 'https://www.cherrymarathon.co.kr/course/index01.php' },
        { title: '참가자 유의사항·물품보관', url: 'https://www.cherrymarathon.co.kr/info/index05.php' },
        { title: '주차장 안내', url: 'https://www.cherrymarathon.co.kr/course/index04.php' },
        {
          title: '2026년 3월 30일 셔틀버스 공지',
          url: 'https://www.cherrymarathon.co.kr/community/index01.php?abmode=view&code=B5&no=12394',
        },
      ],
      note: '2026년 개최분 안내입니다. 누적 상승고도·난이도 등급·급수대 수와 간격은 원문에서 확인하지 못해 표시하지 않습니다. 차기 대회에 그대로 적용하지 마세요.',
    },
  },
  {
    id: 'jeju-ultra-2026',
    name: '제25회 제주 국제울트라마라톤',
    date: '2026-04-04',
    month: '4월',
    location: '제주',
    region: '제주',
    distances: ['울트라'],
    status: '대회종료',
    isMajor: false,
    description: '200K/100K/50K 울트라마라톤',
  },
  {
    id: 'gunsan-saemangeum-2026',
    name: '2026 군산 새만금마라톤',
    date: '2026-04-05',
    month: '4월',
    location: '전북 군산',
    region: '전북',
    distances: ['풀코스', '10K', '5K'],
    status: '대회종료',
    isMajor: false,
  },
  {
    id: 'yeongju-sobaeksan-2026',
    name: '2026 영주소백산마라톤',
    date: '2026-04-05',
    month: '4월',
    location: '경북 영주',
    region: '경북',
    distances: ['풀코스', '하프', '10K', '5K'],
    status: '대회종료',
    isMajor: false,
  },
  {
    id: 'jinju-namgang-2026',
    name: '2026 진주남강 마라톤',
    date: '2026-04-05',
    month: '4월',
    location: '경남 진주',
    region: '경남',
    distances: ['풀코스', '하프', '10K', '5K'],
    status: '대회종료',
    isMajor: false,
  },
  {
    id: 'naju-yeongsangang-2026',
    name: '제12회 나주영산강마라톤',
    date: '2026-04-05',
    month: '4월',
    location: '전남 나주',
    region: '전남',
    distances: ['하프', '10K', '5K'],
    status: '대회종료',
    isMajor: false,
  },
  {
    id: 'daecheongho-cherry-2026',
    name: '대청호 벚꽃길 마라톤',
    date: '2026-04-11',
    month: '4월',
    location: '대전 신상동',
    region: '대전',
    distances: ['하프', '10K', '5K'],
    status: '대회종료',
    isMajor: false,
  },
  {
    id: 'seomjingang-flower-2026',
    name: '제15회 MBC섬진강꽃길마라톤',
    date: '2026-04-12',
    month: '4월',
    location: '전남 광양',
    region: '전남',
    distances: ['하프', '10K', '5K'],
    status: '대회종료',
    isMajor: false,
  },
  {
    id: 'chuncheon-hoban-2026',
    name: '제23회 춘천호반마라톤',
    date: '2026-04-18',
    month: '4월',
    location: '춘천 송암스포츠타운 종합경기장',
    region: '강원',
    distances: ['하프', '10K', '5K'],
    status: '대회종료',
    isMajor: true,
    website: 'https://www.chuncheon.go.kr/happiness/life-news/?bbsId=BBSMSTR_000000000294&flag=view&nttId=464567',
    description: '함기용 선생의 보스턴마라톤 우승을 기념해 강원일보사가 주최한 2026년 봄 대회입니다. 하프·10K·5K를 운영했으며, 송암스포츠타운에서 출발해 종목별 반환점을 돌아오는 코스였습니다.',
    courseInfo: {
      courseDescription: '춘천시의 2026년 교통통제 안내 기준입니다. 하프는 의암댐·삼악산 입구·덕두원교를 지나 춘천파크골프장 입구에서, 10K는 별카페에서, 5K는 자전거쉼터에서 반환해 송암스포츠타운으로 돌아옵니다.',
    },
    raceInfo: {
      entryFees: [
        { distance: '하프', fee: 55000 },
        { distance: '10K', fee: 50000 },
        { distance: '5K', fee: 45000 },
      ],
      startTime: '09:00',
    },
    registrationEnd: '2026-04-08',
    registrationNote: '주최사 2026년 4월 7일 안내: 4월 8일 14:00 접수 마감. 모집 안내는 선착순 5,000명이었으며 실제 완주자 수와 구분합니다.',
    lastVerified: '2026-11-11',
    factCheck: {
      checkedAt: '2026-11-11',
      sources: [
        {
          title: '춘천시 2026 교통통제·반환점 안내',
          url: 'https://www.chuncheon.go.kr/happiness/life-news/?bbsId=BBSMSTR_000000000294&flag=view&nttId=464567',
        },
        { title: '주최사 2026 참가비·접수 마감 안내', url: 'https://www.kwnews.co.kr/article/202604062106620' },
        { title: '주최사 제23회 대회 공고', url: 'https://www.kwnews.co.kr/article/202603052099407' },
      ],
      note: '기존 접속처 kw-marathon.com은 현재 다른 대회인 2026 라운드랩 RUN을 안내해, 4월 호반마라톤의 춘천시 보존 공지로 연결합니다. 2026년 호반 대회의 제한시간·누적 상승고도·급수·주차 대수·셔틀은 확인하지 못해 표시하지 않습니다.',
    },
  },
  {
    id: 'gyeonggi-marathon-2026',
    name: '제24회 경기마라톤',
    date: '2026-04-19',
    month: '4월',
    location: '경기 수원',
    region: '경기',
    distances: ['풀코스', '하프', '10K', '5K'],
    status: '대회종료',
    isMajor: true,
    website: 'https://www.kgmarathon.co.kr/kgmarathon/',
    description: 'IAAF/AIMS 공인 코스. 수원 종합운동장 기점 평지 코스.',
    courseInfo: {
      terrain: '평지',
      difficulty: '중급',
      elevationGain: 50,
      courseDescription: '수원종합운동장 출발 → 광교호수 방면 → 수원천변 → 종합운동장 피니시',
      certification: 'IAAF',
      isLoopCourse: true,
    },
    raceInfo: {
      entryFees: [
        { distance: '풀코스', fee: 70000 },
        { distance: '하프', fee: 50000 },
        { distance: '10K', fee: 40000 },
        { distance: '5K', fee: 30000 },
      ],
      timeLimits: [
        { distance: '풀코스', hours: 5, minutes: 30 },
        { distance: '하프', hours: 3, minutes: 0 },
        { distance: '10K', hours: 1, minutes: 30 },
      ],
      aidStations: 10,
      aidInterval: '약 4km마다',
      expectedParticipants: 15000,
      startTime: '08:30',
    },
    logistics: {
      parking: '수원종합운동장 주차장 이용 가능',
      publicTransport: '수인분당선 수원시청역 1번 출구 도보 10분',
      bagStorage: true,
    },
  },
  {
    id: 'dmz-peace-marathon-2026',
    name: '2026 DMZ평화마라톤',
    date: '2026-04-19',
    month: '4월',
    location: '경기 임진각',
    region: '경기',
    distances: ['하프', '10K', '5K'],
    status: '대회종료',
    isMajor: false,
  },
  {
    id: 'songdo-walk-run-2026',
    name: '2026 송도 WALK & RUN',
    date: '2026-04-19',
    month: '4월',
    location: '인천 송도',
    region: '인천',
    distances: ['하프', '10K', '5K'],
    status: '대회종료',
    isMajor: false,
  },
  {
    id: 'mudeungsan-trail-2026',
    name: '제2회 무등산 트레일런',
    date: '2026-04-19',
    month: '4월',
    location: '광주 조선대',
    region: '광주',
    distances: ['울트라', '트레일'],
    status: '대회종료',
    isMajor: false,
    description: '51.8K/35K/15K 트레일런',
  },
  {
    id: 'seoul-half-marathon-2026',
    name: '2026 서울하프마라톤',
    date: '2026-04-26',
    month: '4월',
    location: '서울 광화문광장',
    region: '서울',
    distances: ['하프', '10K'],
    status: '대회종료',
    isMajor: true,
    website: 'https://www.seoulhalfmarathon.com/index.html',
    description: '조선일보·서울특별시·서울특별시체육회가 공동 주최한 2026년 대회입니다. 두 종목 모두 광화문광장에서 출발했으며 하프는 상암 월드컵공원 평화광장, 10K는 여의도공원에 도착했습니다.',
    courseInfo: {
      courseDescription: '하프: 광화문광장 출발 → 상암 월드컵공원 평화광장 도착. 10K: 광화문광장 출발 → 여의도공원 도착. 종목에 따라 도착지가 다릅니다.',
      isLoopCourse: false,
    },
    raceInfo: {
      entryFees: [
        { distance: '하프', fee: 80000 },
        { distance: '10K', fee: 70000 },
      ],
      timeLimits: [
        { distance: '하프', hours: 2, minutes: 30 },
        { distance: '10K', hours: 1, minutes: 30 },
      ],
      aidInterval: '공식 유의사항: 주로 음료 공급대는 매 5km, 골인지 별도 급수',
      startTime: '07:30',
    },
    logistics: { bagStorage: true },
    lastVerified: '2026-11-11',
    factCheck: {
      checkedAt: '2026-11-11',
      sources: [
        { title: '2026 공식 대회 일정·종목별 도착지', url: 'https://www.seoulhalfmarathon.com/index.html' },
        { title: '서울시 2026 종목별 참가비', url: 'https://sports.seoul.go.kr/main/SP03140000_user/program_view.do' },
        { title: '공식 제한시간·급수·물품보관 유의사항', url: 'https://www.seoulhalfmarathon.com/rally/notes.html' },
      ],
      note: '2026년 개최분 안내입니다. 10K 제한시간은 출발 기준 1시간 30분으로 정정했습니다. 난이도 등급·누적 상승고도·IAAF 공인 표기·급수대 총수·예상 참가인원은 이번 원문에서 확인하지 못해 표시하지 않습니다.',
    },
  },
  // --- 2027 시즌 ---
  {
  "id": "incheon-k-marathon-2027",
  "name": "2027 인천 K-마라톤",
  "date": "2027-04-11",
  "month": "4월",
  "location": "인천아시아드주경기장 (예정 · 인천 서구 봉오대로 806)",
  "region": "인천",
  "distances": [
    "풀코스",
    "10K",
    "5K"
  ],
  "status": "접수중",
  "isMajor": false,
  "website": "https://k-player.or.kr/incheon2027/",
  "registrationStart": "2026-10-22",
  "registrationEnd": "2026-11-12",
  "registrationNote": "11/10 공식 개요·공개 신청·한국어FAQ·유의사항 대조. 접수는10/22~11/12 선착순이며 신청일 포함3일 이내 입금·확인 순으로 참가 확정 안내입니다. 풀 자격기록은2027/3/31까지 제출 가능 조건이고 그룹 배정용은 접수 마감 전이라는 별도 문구가 있습니다. 현재 기록 미보유 풀·10km는D,5km는B 안내입니다. 가안·경계기록 차이·영문 장소 문구는 사무국 확인이 필요합니다. 실제 신청·입금·잔여 정원은 미검증입니다.",
  "lastVerified": "2026-11-10",
  "description": "2027년4월11일08시,풀코스·10km·5km를 운영하는 대회로 인천아시아드주경기장 출발·도착은 예정입니다. 공식 한국어 개요·FAQ의 풀 참가자격은2027/3/31까지 하프2시간20분 또는 풀5시간 이내 공식 기록증을 제출 가능한 사람이며 지금 미보유자는D그룹 신청 안내가 있습니다. 그룹용 제출 기한과 경계기록 표기는 별도 확인해야 합니다. 코스·기념품 상세는 준비 중이며 소개문의 청라 스카이라인 코스를 확정 경로로 해석하지 않습니다. 영문FAQ의서울장소는 한국어 인천 예정 안내와 달라 사무국 확인이 필요합니다.",
  "raceInfo": {
    "entryFees": [
      {
        "distance": "풀코스",
        "fee": 80000
      },
      {
        "distance": "10K",
        "fee": 60000
      },
      {
        "distance": "5K",
        "fee": 40000
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
        "minutes": 40
      },
      {
        "distance": "5K",
        "hours": 1,
        "minutes": 0
      }
    ],
    "aidInterval": "5km마다 음료 공급대",
    "startTime": "08:00"
  },
  "raceKit": {
    "items": [
      "번호표·기록칩·물품보관백(대회 전 택배)",
      "완주메달(완주자)",
      "기록증(완주자, 대회 후 발송)"
    ],
    "pending": "11/10 공식 기념품 상세는 구성 준비 중입니다. 한국어FAQ의 대회7일전 택배 발송은 가안·확인 필요로 표시되며 현재 실제 배송 계획으로 확정하지 않습니다.",
    "verifiedAt": "2026-11-10"
  }
},
];
