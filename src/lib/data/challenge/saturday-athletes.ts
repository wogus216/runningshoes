// 쎄러데이 선수 소개 — `/saturday/athletes`
//
// 로스터 정본은 `saturday.ts`의 SATURDAY_CREW 다. 이 파일은 거기에 '캐릭터'만 얹는다.
// memberId 로 잇기 때문에 이름·거리를 여기에 다시 적지 않는다 (두 곳에 적으면 반드시 갈라진다).
//
// ⚠️ characterLine 작성 규칙 — 단톡 3원칙(saturday.ts)의 연장이다.
//    1. 근거 없는 문장을 만들지 않는다. 근거는 둘 중 하나이고, source 에 어느 쪽인지 구분해 남긴다:
//       (a) SATURDAY_CHAT 원문 — 따옴표 없이 원문 그대로 적는다.
//       (b) 운영자 확인 — 단톡에 안 나오는 사실(경력·DNF·직업 등). `운영자 확인 — …` 로 시작한다.
//       추측은 어느 쪽도 아니다. 나중에 이 줄이 어디서 왔는지 물으면 답할 수 있어야 한다.
//    2. 약점을 소비하지 않는다. 겁먹은 것도, 참가비 흥정도, 술도, 그 사람이 실제로 한 말이거나
//       운영자가 확인해 준 것이고, 읽고 웃을 수 있는 선까지만 쓴다.
//    3. 기록·페르소나·목표시간을 만들지 않는다. runningType 은 실측이 생길 때까지 undefined 다.
//       '기록이 정체돼 있다' 같은 정성 서술은 운영자 확인이 있을 때만 쓰고, 숫자는 붙이지 않는다.
//
// ✅ 검수 완료(2026-08-28): 일곱 줄 전부 운영자가 인물 특징을 직접 주고 확정했다.
//    앞선 초안에서 근거 없이 들어갔던 구절(감자 '접수는 이미 끝냈다' 등)은 이때 걷어냈다.

import type { SaturdayAthlete } from '@/types/challenge';

export const SATURDAY_ATHLETES: SaturdayAthlete[] = [
  {
    memberId: 'm1',
    nameLatin: 'JAECHUN',
    // '판을 벌리고 후회하는 유형'(운영자). 후회한다고 쓰지 않는다 — 판을 벌인 말과
    // 전날 밤에 슬쩍 흘린 말을 나란히 두면 그 사람이 보인다
    characterLine: '사이트까지 만들어 판을 벌여놓고,\n전날 밤엔 비 온다는 얘기부터 꺼낸다.',
    source: [
      '입금하신 분들 한해서 기록용 사이트 만들어서 한번 체계적으로 관리 해드릴게요',
      '신청 완료했습니다!!',
      '내일 아침 비 온다는데',
    ],
    knownFor: '판을 벌인 사람',
    photo: 'athletes/jaechun',
    photoAlt: '에펠탑을 등지고 선 러너',
    objectPosition: '47% 20%',
  },
  {
    memberId: 'm2',
    nameLatin: 'GAMJA',
    // '걱정만 많고 제일 열심히 안 뛰고 있음'(운영자). 둘째 줄은 본인이 자기 입으로 한 말이라
    // 남이 찌르는 문장이 되지 않는다 — 그 선을 넘지 않는 게 이 페이지의 조건이다.
    // 앞선 초안의 '접수는 이미 끝냈다' 는 단톡에 근거가 없어 뺐다
    characterLine: '걱정은 일곱 명 중 제일 많이 하고,\n뛰는 건 주 1회 뛸까 말까라고 한다.',
    source: [
      '과연 내가 저걸 해낼 수 있는지를',
      '풀마라톤 버려지면 어케 완주함? / 앰뷸 탈 수 있나?',
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
    // '성실하고 잘 뛰나 투덜이'(운영자). 원문에 성실함과 투덜거림이 나란히 있어 그대로 옮겼다.
    // 운영자가 준 '시누이 스타일' 은 비유가 낡고 공개 화면에 나갈 말이 아니라 뜻만 남겼다
    characterLine: '비가 와도 먼저 나와 그냥 뛰자고 하고,\n한숨은 제일 많이 쉰다.',
    source: [
      '그냥 뛰자',
      '재춘 기태 일어나면 연락해, 도림천 매크로 돌리고 있을게',
      '휴 벌써부터 / 포기하려 하네 후',
    ],
    knownFor: '먼저 나와 있는 사람',
    photo: 'athletes/hyeongga',
    photoAlt: '2026 성남마라톤 기록판 앞에 선 러너',
    objectPosition: '52% 20%',
  },
  {
    memberId: 'm4',
    nameLatin: 'GITAE',
    // '풀 경험 제일 많으나 술로 인해 기록이 정체'(운영자). 둘 다 단톡에 없는 사실이라
    // source 에 운영자 확인으로 남긴다. 원칙 3 대로 기록에 숫자는 붙이지 않는다
    characterLine: '풀코스는 제일 많이 뛰어봤는데,\n기록은 술자리에 발목이 잡혀 있다.',
    source: [
      '최소 월 200씩은 뛰어야 완주되겠지',
      '나도 취소할까 하고 고민중이었는데',
      '운영자 확인 — 크루 중 풀코스 경험 최다, 음주로 기록 정체 (2026-08-28)',
    ],
    knownFor: '제일 많이 뛰어본 사람',
    photo: 'athletes/gitae',
    photoAlt: '하천변 산책로에서 뛰어오르며 손을 흔드는 러너',
    objectPosition: '39% 32%',
  },
  {
    memberId: 'm5',
    nameLatin: 'JIJA',
    // '수영강사이나 실외 스포츠에 약함'(운영자). 물과 땅의 대비가 이 사람이다.
    // 앞선 초안의 금연 언급은 뺐다 — 개인 건강 정보이고, 운영자가 준 특징도 아니다
    characterLine: '물에서는 수영을 가르치고,\n땅 위에서는 취소할걸부터 말한다.',
    source: [
      '취소할걸',
      '미틴 돈 왜 받아?',
      '운영자 확인 — 수영 강사, 실외 종목에는 약함 (2026-08-28)',
    ],
    knownFor: '물에서 온 사람',
    photo: 'crew/selfie-four',
    photoAlt: '러닝 도중 네 사람이 모여 찍은 셀카',
    objectPosition: '50% 35%',
    isPlaceholder: true,
  },
  {
    memberId: 'm6',
    nameLatin: 'NAMGIL',
    // 'DNF 경험으로 인해 열심히 훈련중'(운영자). 겁먹은 감자에게 '그냥 믿고 따라와' 라고 한
    // 사람이 정작 완주하지 못하고 돌아온 적이 있다 — 그 순서가 이 두 줄이다.
    // 앞선 초안의 '말은 제일 적게 하고' 는 발화량을 셀 방법이 없어 뺐다
    characterLine: '완주하지 못하고 돌아온 적이 있어서,\n겁먹은 사람한테 먼저 따라오라고 한다.',
    source: [
      '그냥 믿고 따라와',
      '다들 잘 뛰네',
      '운영자 확인 — DNF 경험 이후 훈련 중 (2026-08-28)',
    ],
    knownFor: '따라오라고 하는 사람',
    photo: 'athletes/namgil',
    photoAlt: '수원종합운동장 결승선 트랙에 선 러너',
    objectPosition: '48% 20%',
  },
  {
    memberId: 'm7',
    nameLatin: 'GWANGMUK',
    // '쎄러데이의 정신적 지주'(운영자). 지주라고 쓰지 않는다 —
    // 제일 늦게 들어온 초보라는 사실과 나란히 놓아야 그 말이 무게를 갖는다
    characterLine: '일곱 명 중 제일 늦게 들어왔는데,\n지금은 다들 이 형을 보고 뛴다.',
    source: [
      '안녕하세요 인사 씨게 박습니다 초보 런린이입니다',
      'ㅋㅋ안녕하십니까 행님 화이팅입니다',
      '운영자 확인 — 크루의 정신적 지주 (2026-08-28)',
    ],
    knownFor: '중심이 된 사람',
    photo: 'athletes/gwangmuk',
    photoAlt: '시드니 트램 정류장 앞 신호등 옆에 선 러너',
    objectPosition: '50% 18%',
  },
];

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
  scrollHint: 'SCROLL TO MEET THEM ↓',
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
