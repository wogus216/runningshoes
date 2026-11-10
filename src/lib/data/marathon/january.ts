import type { MarathonEvent } from '@/types/marathon';

export const januaryEvents: MarathonEvent[] = [
  {
    id: 'daegu-new-year-naked-marathon-2027',
    name: '제19회 전국새해 알몸마라톤대회',
    date: '2027-01-03',
    month: '1월',
    location: '대구육상진흥센터 앞 (대구 수성구)',
    region: '대구',
    distances: ['10K', '5K'],
    status: '접수중',
    isMajor: false,
    website: 'https://r.dgrunner.co.kr:9023/',
    registrationStart: '2026-10-28',
    registrationEnd: '2026-12-10',
    registrationNote: '입금 순 선착순 2,000명(10km 1,200명·5km 일반 700명·학생 100명). 정원을 채우면 12월 10일 전에 마감될 수 있습니다. 잔여 정원은 공식 홈페이지에서 확인하세요.',
    lastVerified: '2026-11-02',
    description: '2027년 1월 3일(일) 대구육상진흥센터 앞에서 열리는 새해 5km·10km 대회입니다. 10km는 오전 10시, 5km 학생부는 10시 5분, 5km 일반부는 10시 10분 출발합니다. 참가비는 각각 50,000원·20,000원·40,000원이고 배번호·기념품은 대회 당일 07:30~09:20 현장에서 받습니다. 공식 경기 복장 규정은 남성 상의 탈의, 여성 탑, 남녀 반바지이며 위반 시 입상에서 제외됩니다. 시상 비대상자의 자유복장 적용 여부는 주최 측에 확인하세요.',
    raceInfo: {
      entryFees: [
        { distance: '10K', fee: 50000 },
        { distance: '5K 일반', fee: 40000 },
        { distance: '5K 학생', fee: 20000 },
      ],
      timeLimits: [
        { distance: '10K', hours: 1, minutes: 30 },
        { distance: '5K', hours: 1, minutes: 0 },
      ],
      startTime: '10:00',
      expectedParticipants: 2000,
    },
    raceKit: {
      items: ['배번호', '기록칩', '기념티', '모바일 기록증'],
      verifiedAt: '2026-11-02',
    },
  },
  {
  "id": "jeju-10km-marathon-2027",
  "name": "2027 전마협 제주 10km 마라톤",
  "date": "2027-01-24",
  "month": "1월",
  "location": "서귀포 효돈축구공원 (예정, 제주 서귀포)",
  "region": "제주",
  "distances": [
    "10K"
  ],
  "status": "마감",
  "isMajor": false,
  "website": "https://mara1080.com/event/15658a1d-d102-42e7-8123-9e20c73aa767",
  "registrationNote": "2026-11-10 공식 11/2 접수 마감 완료·후속 공지를 대조했습니다. 신규 접수는 마감 안내이며 이미 신청을 완료한 사람에 한해 11월 30일(월)까지 입금·변경·환불 요청이 가능합니다. 11/30을 신규 접수 마감일로 쓰지 않습니다. 실제 접수 종료 시각·마감 사유·개인별 결제 상태는 확인하지 않았습니다.",
  "lastVerified": "2026-11-10",
  "description": "2027년 1월 24일 전국마라톤협회 10km 대회로 참가비는 50,000원입니다. 공식 요강 이미지는 오전 9시 출발, 서귀포 효돈축구공원 예정, 폴라폴리스 자켓·롱비니·(웹)모바일 기록증을 안내합니다. 공개 데이터의 시작 시각 06:00와 요강 09:00가 달라 최종 참가자 안내로 확인해야 합니다. 장소 공지는 서귀포시 효돈순환로 311-29이며 변경 가능 문구가 있습니다. 세부 경로·고도·급수와 완주메달 포함 여부는 이번 확인에서 확정하지 못했습니다.",
  "raceInfo": {
    "entryFees": [
      {
        "distance": "10K",
        "fee": 50000
      }
    ],
    "startTime": "09:00"
  },
  "raceKit": {
    "items": [
      "폴라폴리스 자켓",
      "롱비니",
      "(웹)모바일 기록증"
    ],
    "pending": "요강 이미지의 구성만 반영했습니다. 완주메달 포함 여부는 재확인 필요. 공지는 통상 대회 3~7일 전 물품 발송, 배번호·칩 분실·미지참 시 재발급 불가를 안내합니다.",
    "verifiedAt": "2026-11-10"
  }
},
];
