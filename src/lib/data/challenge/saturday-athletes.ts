// 쎄러데이 선수 소개 — `/saturday/athletes`
//
// 로스터 정본은 `saturday.ts`의 SATURDAY_CREW 다. 이 파일은 거기에 '캐릭터'만 얹는다.
// memberId 로 잇기 때문에 이름·거리를 여기에 다시 적지 않는다 (두 곳에 적으면 반드시 갈라진다).
//
// ⚠️ characterLine 작성 규칙 — 단톡 3원칙(saturday.ts)의 연장이다.
//    1. 근거 없는 문장을 만들지 않는다. 모든 줄은 SATURDAY_CHAT 원문에서 나온다.
//       근거는 source 에 원문 그대로 남긴다 — 나중에 이 줄이 어디서 왔는지 물으면 답할 수 있어야 한다.
//    2. 약점을 소비하지 않는다. 겁먹은 것도, 참가비 흥정도, 그 사람이 실제로 한 말이고
//       읽고 웃을 수 있는 선까지만 쓴다.
//    3. 기록·페르소나·목표시간을 만들지 않는다. runningType 은 실측이 생길 때까지 undefined 다.
//
// 🔎 검수 대기(2026-08-27): 일곱 줄 전부 초안이다. 운영자가 읽고 확정하기 전까지
//    "이 사람 맞나"를 source 와 대조해 판단할 것.

import type { SaturdayAthlete } from '@/types/challenge';

export const SATURDAY_ATHLETES: SaturdayAthlete[] = [
  {
    memberId: 'm1',
    nameLatin: 'JAECHUN',
    characterLine: '제일 먼저 접수해놓고,\n남의 훈련표까지 짜고 있다.',
    source: [
      '입금하신 분들 한해서 기록용 사이트 만들어서 한번 체계적으로 관리 해드릴게요',
      '신청 완료했습니다!!',
      '감자 내가 체계적으로 훈련 짜줄게',
    ],
    knownFor: '판을 벌인 사람',
    photo: 'athletes/jaechun',
    photoAlt: '에펠탑을 등지고 선 러너',
    objectPosition: '47% 20%',
  },
  {
    memberId: 'm2',
    nameLatin: 'GAMJA',
    characterLine: '완주할 수 있냐고 제일 많이 묻고,\n접수는 이미 끝냈다.',
    source: [
      '과연 내가 저걸 해낼 수 있는지를',
      '풀마라톤 버려지면 어케 완주함?',
      '겨우 주 1회 뛰어줄까 말까잖아',
    ],
    knownFor: '먼저 걱정하는 사람',
    photo: 'crew/summer-uphill',
    photoAlt: '짙은 초록 숲을 끼고 언덕을 오르는 세 사람',
    objectPosition: '50% 42%',
    isPlaceholder: true,
  },
  {
    memberId: 'm3',
    nameLatin: 'HYEONGGA',
    characterLine: '비 온다는 말에 그냥 뛰자고 하고,\n아침엔 먼저 나와 있다.',
    source: [
      '그냥 뛰자',
      '7시 30분 확인',
      '재춘 기태 일어나면 연락해, 도림천 매크로 돌리고 있을게',
    ],
    knownFor: '먼저 나와 있는 사람',
    photo: 'athletes/hyeongga',
    photoAlt: '2026 성남마라톤 기록판 앞에 선 러너',
    objectPosition: '52% 20%',
  },
  {
    memberId: 'm4',
    nameLatin: 'GITAE',
    characterLine: '취소할까 고민하면서,\n월 200km는 뛰어야 한다고 계산했다.',
    source: [
      '나도 취소할까 하고 고민중이었는데',
      '최소 월 200씩은 뛰어야 완주되겠지',
      '아이스크림이라도 하나만 사줘라',
    ],
    knownFor: '숫자를 먼저 세는 사람',
    photo: 'athletes/gitae',
    photoAlt: '하천변 산책로에서 뛰어오르며 손을 흔드는 러너',
    objectPosition: '39% 32%',
  },
  {
    memberId: 'm5',
    nameLatin: 'JIJA',
    characterLine: '참가비 얘기엔 제일 크게 소리치고,\n담배는 조용히 끊었다.',
    source: [
      '재춘 7만원 다시 입금 좀',
      '미틴 돈 왜 받아?',
      '담배 안 핀 지 33일 이제 비흡연자임',
    ],
    knownFor: '제일 크게 말하는 사람',
    photo: 'crew/selfie-four',
    photoAlt: '러닝 도중 네 사람이 모여 찍은 셀카',
    objectPosition: '50% 35%',
    isPlaceholder: true,
  },
  {
    memberId: 'm6',
    nameLatin: 'NAMGIL',
    characterLine: '말은 제일 적게 하고,\n겁먹은 사람한테 따라오라고 한다.',
    source: ['그냥 믿고 따라와', '다들 잘 뛰네', '용돈 다 떨어졌는데'],
    knownFor: '따라오라고 하는 사람',
    photo: 'athletes/namgil',
    photoAlt: '수원종합운동장 결승선 트랙에 선 러너',
    objectPosition: '48% 20%',
  },
  {
    memberId: 'm7',
    nameLatin: 'GWANGMUK',
    characterLine: '제일 늦게 들어와 제일 크게 인사했고,\n6km 뛴 날 소주를 마셨다.',
    source: [
      '안녕하세요 인사 씨게 박습니다 초보 런린이입니다',
      '나 10키로는 이번 주말에 특훈 받아서 가능하지!',
      '어제 6키로 뛰고 소주 마셨는데 반성해야겠다..',
    ],
    knownFor: '제일 늦게 온 사람',
    photo: 'athletes/gwangmuk',
    photoAlt: '시드니 트램 정류장 앞 신호등 옆에 선 러너',
    objectPosition: '50% 18%',
  },
];

// 오프닝 한 장. 개인 초상이 아니라 크루가 함께 뛰는 장면이라 여기 그대로 둔다
export const ATHLETES_INTRO_PHOTO = {
  photo: 'crew/spring-road',
  alt: '연둣빛 산길을 나란히 달리는 세 사람',
} as const;

// 화면 문구. 페이지에 하드코딩하지 않는다.
//
// 오프닝과 그리드가 같은 두 줄(THE STARTING SEVEN / 일곱 명, 하나의 출발선.)을 쓴다.
// 중복이 아니라 후렴이다 — 오프닝은 약속이고, 일곱 장이 펼쳐지는 순간이 그 약속의 결론이다.
export const ATHLETES_COPY = {
  eyebrow: 'SATURDAY ATHLETES · 01—07',
  titleLead: 'THE STARTING',
  titleTail: 'SEVEN',
  sub: '일곱 명, 하나의 출발선.',
  meta: '7 RUNNERS / ONE STARTING LINE',
  gridTitle: 'THE STARTING SEVEN',
  gridLine: '일곱 명,\n하나의 출발선.',
  gridHint: '사진을 누르면 그 사람 이야기로',
  // 그룹 사진을 개인 자리에 놓았다는 사실을 화면에서 숨기지 않는다.
  // 감추면 '이 사람 사진'으로 읽히고, 그건 이 사이트가 하지 않기로 한 일이다.
  //
  // 2026-08-27: 다섯 명(재춘·형가·기태·남길·광묵) 개인 사진 도착. 감자·지자만 남았다.
  // 두 문구 다 isPlaceholder 인 사람에게만 붙고, 마지막 두 장이 들어오면 화면에서 저절로 사라진다.
  photoNotice: '임시 이미지 · 크루 단체 사진',
  photoPendingLabel: '임시 이미지',
  statsPending: '측정 전',
  statsPendingNote: '기록은 첫 러닝부터 쌓입니다',
} as const;
