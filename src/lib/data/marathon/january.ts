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
    id: 'jeju-10km-marathon-2027',
    name: '2027 전마협 제주 10km 마라톤',
    date: '2027-01-24',
    month: '1월',
    location: '서귀포 축구 공원 (예정, 제주 서귀포)',
    region: '제주',
    distances: ['10K'],
    status: '접수중',
    isMajor: false,
    website: 'https://mara1080.com/event/15658a1d-d102-42e7-8123-9e20c73aa767',
    registrationNote:
      '선착순 400명 달성 즉시 마감 — 마감일 미고지. 온라인 접수만 받고 마감 후 추가 접수는 없습니다. 신청 후 입금 순서이고, 변경·취소·환불도 선착순 마감일까지만 가능합니다(2026-10-27 공식 공지, 2026-10-30 접수 중 확인).',
    lastVerified: '2026-10-30',
    description:
      '전국마라톤협회가 주최하는 2027년 1월 24일(일) 오전 9시 출발 10km 단일 종목 대회입니다. 참가비는 50,000원으로 폴라폴리스 자켓·비니 모자·완주 메달·(웹)모바일 기록증이 포함되고 칩으로 계측합니다. 코스는 10km 왕복이며 세부 경로·고도·급수 위치는 공개되지 않았습니다. 장소는 공식 표기상 "서귀포 축구 공원 (예정)"입니다.',
    raceInfo: {
      entryFees: [{ distance: '10K', fee: 50000 }],
      startTime: '09:00',
    },
    raceKit: {
      items: ['폴라폴리스 자켓', '비니 모자', '완주 메달', '(웹)모바일 기록증'],
    },
  },
];
