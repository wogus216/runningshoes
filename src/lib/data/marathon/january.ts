import type { MarathonEvent } from '@/types/marathon';

export const januaryEvents: MarathonEvent[] = [
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
