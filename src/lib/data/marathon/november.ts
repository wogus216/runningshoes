import type { MarathonEvent } from '@/types/marathon';

export const novemberEvents: MarathonEvent[] = [
  {
    id: 'jtbc-seoul-marathon-2026',
    name: '2026 JTBC 서울마라톤',
    date: '2026-11-01',
    month: '11월',
    location: '서울 상암동 평화의 광장',
    region: '서울',
    distances: ['풀코스', '10K'],
    status: '마감',
    isMajor: true,
    website: 'http://marathon.jtbc.com',
    description:
      '국내 최대 규모 가을 풀코스 마라톤(11/1). 공식 대회 안내 기준 모집 인원은 30,000명이고, 출발은 상암월드컵공원, 피니시는 풀코스 올림픽공원·10K 여의도공원이며(주최 측 사정으로 변경 가능 단서 있음), 풀코스 출발 시간이 8시에서 7시 30분으로 앞당겨졌습니다. 풀코스는 만 18세 이상(2008년 11월 1일 이전 출생)이면서 5시간 이내 완주 가능한 러너로 자격이 제한되고, 10K는 신체 건강한 남녀면 됩니다. 상세 코스도·고저도는 아직 미게시 상태입니다(2026-08-29 공식 홈 확인 — 2025년에도 대회 직전 10월경 공개된 패턴). 본접수는 추첨제로 4월 마감됐고, 미등록 티켓 추가 기회 중 7월 KB 마라톤카드 래플(풀 1,000명·10K 3,000명)은 응모가 끝났으며 ②8월 KB국민카드 협찬 이벤트(풀 200명) ③9월 최종 선착순이 남아 있습니다. 2026년부터 레이스팩은 택배 없이 코리아 러닝 엑스포(10/29~31, SETEC 강남) 현장 수령으로 변경됩니다.',
    courseInfo: {
      terrain: '평지',
      difficulty: '중급',
      courseDescription:
        '상암월드컵공원에서 다 함께 출발해 종목별로 다른 곳에서 끝납니다 — 풀코스는 올림픽공원, 10K는 여의도공원입니다. 서울 도심을 가로지르는 편도 코스라 피니시 지점에서 출발지로 돌아오는 동선을 미리 잡아둬야 합니다. 구간별 코스도와 고저도는 2026-08-29 기준 공식 홈에 아직 올라오지 않았습니다.',
    },
    raceInfo: {
      entryFees: [
        { distance: '풀코스', fee: 150000 },
        { distance: '10K', fee: 100000 },
      ],
      timeLimits: [{ distance: '풀코스', hours: 5, minutes: 0 }],
      expectedParticipants: 30000,
      startTime: '07:30',
    },
    lastVerified: '2026-08-29',
  },
  {
    id: 'ulsan-human-rights-marathon-2026',
    name: '2026 울산인권마라톤',
    date: '2026-11-01',
    month: '11월',
    location: '울산 태화강 둔치',
    region: '울산',
    distances: ['하프', '10K', '5K'],
    status: '접수예정',
    isMajor: false,
    website: 'https://www.humanrun.org',
    description:
      '태화강변 코스를 달리는 울산 대표 시민 마라톤 21회차. 접수는 8월 18일부터 9월 18일까지입니다. 기록 시상 없이 참가자 전원에게 동행기념품을 주는 방식이며, 장애인·18세 미만 할인가(하프·10km 25,000원, 5km 15,000원)와 장애인 동반 1인 참가비 면제가 있습니다.',
    raceInfo: {
      entryFees: [
        { distance: '하프', fee: 35000 },
        { distance: '10K', fee: 35000 },
        { distance: '5K', fee: 25000 },
      ],
      startTime: '09:30',
    },
  },
  {
    id: 'round-lab-run-2026',
    name: '2026 라운드랩 RUN',
    date: '2026-11-08',
    month: '11월',
    location: '춘천 송암스포츠타운 종합경기장 (강원 춘천시)',
    region: '강원',
    distances: ['하프', '10K', '5K'],
    status: '접수중',
    isMajor: false,
    website: 'https://www.kw-marathon.com/index_roundlab.php',
    description:
      '스킨케어 브랜드 라운드랩(운영사 서린컴퍼니, 춘천 소재)이 강원일보와 함께 여는 브랜드 러닝 대회로, 슬로건은 "BETTER SKIN, BETTER ROUND"입니다. 의암호 일대를 달리는 코스이고 종목은 하프·10km·5km 세 가지, 총 5,000명 선착순입니다. 접수는 8월 7일 오전 10시에 시작됐고 별도 마감일 없이 정원 소진 시 종료됩니다(환불은 10월 23일 18시까지만 가능). 완주 기념품에 완주 메달과 함께 라운드랩 제품 4종이 포함되는 것이 특징입니다. 참가비는 접수 페이지에서 확인해야 합니다.',
    raceInfo: {
      startTime: '09:00',
    },
    registrationStart: '2026-08-07',
    registrationNote: '선착순 5,000명 마감 — 마감일 미고지',
    raceKit: {
      items: [
        '기념 티셔츠(택배 발송, XS~3XL 남녀공용)',
        '배번호·기록칩(택배 발송, 종목별 디자인)',
        '완주 기념 메달(현장, FINISHER 각인·종목별 리본)',
        '라운드랩 제품 4종(현장) — 독도 토너 200ml·수분 워터젤 마스크·자작나무 선크림 50ml·선 스프레이 100ml',
      ],
      pending: '공식 고지: 티셔츠·배번호 디자인과 간식은 Coming Soon(추후 공개)',
      images: [{ src: '/images/marathon/round-lab-run-2026/kit-1.webp', alt: '2026 라운드랩 RUN 공식 기념품 안내 — 라운드랩 제품 4종' }],
      verifiedAt: '2026-08-27',
    },
    lastVerified: '2026-08-27',
  },
  {
    id: 'sonkeechung-peace-marathon-2026',
    name: '2026 손기정평화마라톤 (제22회)',
    date: '2026-11-15',
    month: '11월',
    location: '임진각 (경기 파주)',
    region: '경기',
    distances: ['풀코스', '하프', '10K', '6K'],
    status: '접수중',
    isMajor: true,
    website: 'https://www.sonkeechungrun.com',
    registrationStart: '2026-08-09',
    registrationNote: '선착순 마감시까지 — 마감일 미고지 (접수 후 24시간 내 미결제 시 신청 삭제)',
    raceKit: {
      items: [
        '스파이더 퍼포먼스 러닝 윈드 자켓(그레이, 85~110 — 베를린올림픽 우승 90주년 기념 아트워크)',
        '배번호(일회용 기록칩 동봉, 반납 불필요)',
        '완주메달 — 완주 후 현장에서 번호표 확인 뒤 간식과 함께 수령',
      ],
      verifiedAt: '2026-08-31',
      images: [{ src: '/images/marathon/sonkeechung-peace-marathon-2026/kit-1.webp', alt: '2026 손기정평화마라톤 공식 기념품 — 스파이더 러닝 윈드 자켓' }],
    },
    lastVerified: '2026-08-31',
    description:
      '8월 9일(일) 오전 9시에 접수가 열려 마감일 없이 선착순으로 받고 있습니다 — 2025년엔 오픈 일주일 안에 약 2만 명이 찼습니다. 신청 후 24시간 안에 결제하지 않으면 내역이 삭제됩니다. 환불은 8월 31일 17시로 종료됐고, 그 이후로는 지급품 제작이 시작돼 어떤 사유로도 환불되지 않습니다(공식 공지 8월 7일). 올해 가장 큰 변화는 대회장 이전으로, 고양 제2자유로에서 임진각 민통선 일대(파주)로 옮깁니다("임진각~개성 남북평화마라톤으로 발전하는 출발점" 구상). 6km 슬로우런이 신설돼 종목은 4개가 됐고(슬로우런협회 공동 운영), 참가비는 전 종목 1만원 인상됐습니다(풀 7만·하프 6.5만·10K 6만·6K 5만). 1936 베를린올림픽 금메달리스트 손기정 선생을 기리는 평화·통일 테마 대회로 2005년 제1회, 올해가 제22회입니다. 기념품·배번호 패키지는 11월 9~10일 우체국택배로 순차 발송되며 택배비는 주최측 부담입니다. 기념품 사이즈는 참가신청/조회에서 "수정·상세"로 직접 바꿀 수 있습니다. 코스 상세는 공식 준비중 — 2025년까지의 제2자유로 코스와 달라질 수 있습니다(공식 대회요강·유의사항 2026-08-31 확인).',
    courseInfo: {
      terrain: '평지',
      difficulty: '중급',
      courseDescription:
        '임진각 민통선 일대 출발(2026년 이전 확정). 코스도·대회장·교통·교통통제 안내는 모두 공식 준비중이며, 2025년까지는 고양종합운동장 출발 제2자유로 왕복의 직선·평지 기록 코스였습니다. 급수와 보급은 5km 지점부터 2.5km마다 놓입니다. 집결이 오전 9시, 출발이 10시인데 공식은 8시 30분까지 도착을 요구합니다 — 물품보관소(무료)는 7시 30분부터 오후 3시까지 열립니다. 기록 방식이 두 갈래인 점을 알아두는 게 좋습니다: 개인 기록증은 출발선을 지난 순간부터 재는 넷타임인데, 시상 순위는 건타임으로 가립니다. 입상을 노린다면 앞줄에 서야 하고 완주가 목표면 서두를 이유가 없습니다. 출발·반환·골인 매트를 밟지 않으면 기록이 잡히지 않아 실격 처리되며, 반려동물·전동킥보드는 물론 유모차와 휠체어도 주로 진입이 금지됩니다. 11월 개최라 기온이 낮고 임진강변 바람이 변수인데 우천 시 우의는 지급되지 않아 개인 지참입니다.',
    },
    raceInfo: {
      entryFees: [
        { distance: '풀코스', fee: 70000 },
        { distance: '하프', fee: 65000 },
        { distance: '10K', fee: 60000 },
        { distance: '6K', fee: 50000 },
      ],
      timeLimits: [
        { distance: '풀코스', hours: 5, minutes: 0 },
        { distance: '하프', hours: 3, minutes: 0 },
        { distance: '10K', hours: 1, minutes: 30 },
        { distance: '6K', hours: 1, minutes: 0 },
      ],
      aidInterval: '5km 지점부터 2.5km마다',
      expectedParticipants: 20000,
      startTime: '10:00',
    },
  },
  {
    id: 'sangju-gotgam-marathon-2026',
    name: '2026 상주 곶감 마라톤',
    date: '2026-11-15',
    month: '11월',
    location: '경북 상주시민운동장',
    region: '경북',
    distances: ['풀코스', '하프', '10K', '5K'],
    status: '마감',
    isMajor: false,
    website: 'https://mara1080.com/event/c8dc2c22-a83a-4743-9e34-c884e9809dbb',
    registrationEnd: '2026-05-28',
    registrationNote: '1차 접수 마감(선착순 1만 명 달성). 8/31까지 환불 진행 후 취소분 발생 시 2차 접수 공지 예정',
    raceKit: {
      byDistance: [
        { distance: '4.4km', item: '기능성 티셔츠(화이트, 90~110)' },
        { distance: '10km·하프·풀', item: '선택 1 — 러닝 자켓(폴라폴리스) / 상주 곶감(10입) / 샤인머스켓(1kg)' },
      ],
      images: [{ src: '/images/marathon/sangju-gotgam-marathon-2026/kit-1.webp', alt: '2026 상주 곶감 마라톤 공식 기념품 안내' }],
      verifiedAt: '2026-08-27',
    },
    lastVerified: '2026-08-27',
    description:
      '상주 곶감 축제와 연계된 가을 풀코스 마라톤 24회차. 접수는 5월 6일부터 선착순 10,000명(4.4km 2,000·10km 3,000·하프 2,500·풀 2,500)이 찰 때까지이며, 입금·변경·취소는 8월 31일까지입니다. 짧은 종목은 5km가 아니라 4.4km입니다. 아래 참가비는 기본 기념품(상주곶감 또는 샤인머스켓 택1) 기준이며, 러닝 자켓 기념품 선택 시 10km·하프 50,000원·풀 55,000원으로 올라갑니다. 상주시민 4.4km는 15,000원.',
    raceInfo: {
      entryFees: [
        { distance: '풀코스', fee: 50000 },
        { distance: '하프', fee: 45000 },
        { distance: '10K', fee: 45000 },
        { distance: '4.4K', fee: 25000 },
      ],
      startTime: '09:00',
    },
  },
  {
    id: 'mbn-seoul-marathon-2026',
    name: '2026 MBN 서울마라톤',
    date: '2026-11-15',
    month: '11월',
    location: '서울 광화문광장 → 잠실종합운동장',
    region: '서울',
    distances: ['하프', '10K'],
    status: '접수중',
    isMajor: true,
    website: 'https://mbn-seoulmarathon.com',
    registrationStart: '2026-06-25',
    registrationNote:
      '선착순, 마감일 미고지 — 본접수는 하프 6월 25일(목) 14시·10km 6월 26일(금) 14시에 열렸습니다(런잇 RUNIT, 단체신청 불가). 취소·환불은 8월 31일(월) 17시까지만 가능하고 이후에는 어떤 사유로도 되지 않습니다(공식 홈 2026-08-31 확인)',
    raceKit: {
      items: ['기념품(티셔츠·양말, 사전 택배)', '번호표·기록칩(사전 택배)', '완주메달(현장)', '골인 간식·생수(현장)'],
      pending: '공식 고지: 기념품 디자인은 추후 공개',
      verifiedAt: '2026-08-31',
    },
    lastVerified: '2026-08-31',
    description:
      'MBN·매일경제 주최 서울 도심 마라톤으로 TV 생중계됩니다. 하프는 광화문광장에서 잠실종합운동장까지 가는 일직선 편도, 10K는 잠실종합운동장 루프이고 풀코스는 없습니다. 정원은 하프 20,000명·10km 10,000명으로 합쳐 3만 명입니다. 11월 15일(일) 07시 30분 출발이고 집결 06시 30분·준비운동 07시입니다. 참가비는 하프 10만 원·10K 7만 원이며 접수는 런잇(RUNIT)에서만 받고 단체신청은 불가합니다. 우선신청 6/22(월) 10시~6/23(화) 17시(선셋마라톤·슈퍼히어로런 신청자와 매경PLUS 구독자 한정) 뒤 본접수가 하프 6/25(목) 14시·10km 6/26(금) 14시에 열렸고, 마감일은 고지되지 않은 선착순입니다. 취소·환불은 8월 31일(월) 17시까지만 가능하고 그 이후에는 되지 않습니다. 유모차·휠체어·인라인·자전거 등 바퀴 달린 이동수단으로는 참가할 수 없습니다. 세부 코스 경유지는 추후 공개입니다.',
    courseInfo: {
      terrain: '평지',
      difficulty: '중급',
      certification: '없음',
      courseDescription:
        '하프는 광화문광장에서 출발해 잠실종합운동장으로 들어오는 편도 도심 평지 코스(제한 2시간 30분), 10K는 잠실종합운동장을 출발해 되돌아오는 루프입니다(제한 1시간 30분). 편도라서 짐 처리가 이 대회의 함정입니다 — 하프 참가자의 물품보관은 06시부터 07시까지만 받고 보관 차량이 07시에 떠나므로, 출발이 07시 30분이라고 여유를 두면 짐을 못 맡깁니다. 맡긴 짐은 골인지인 잠실종합운동장에서 찾습니다. 하프와 10km는 물품보관소 위치 자체가 다르고 귀중품·전자기기는 받지 않습니다. 출발은 목표기록 그룹별 순차 방식이고 기록은 넷타임입니다. 급수는 하프가 5km 지점 이후 2.5km마다인 반면 10km는 3.5km와 7km 두 곳뿐이라 스스로 배분해야 합니다. 교통통제는 구간별로 순차 해제되므로 제한시간에 걸리면 후송버스에 타야 하며, 마라톤은 10시 30분에 종료되고 공식 행사는 12시에 끝납니다. 세부 경유지는 추후 공개입니다.',
    },
    raceInfo: {
      entryFees: [
        { distance: '하프', fee: 100000 },
        { distance: '10K', fee: 70000 },
      ],
      aidInterval: '하프 5km 이후 2.5km마다 · 10km는 3.5km·7km 두 곳',
      timeLimits: [
        { distance: '하프', hours: 2, minutes: 30 },
        { distance: '10K', hours: 1, minutes: 30 },
      ],
      expectedParticipants: 30000,
      startTime: '07:30',
    },
  },
  {
    id: 'go-free-run-2026',
    name: '2026 아식스 서울신문 고프리런 (ASICS SEOUL SHINMUN GO FREE RUN)',
    date: '2026-11-21',
    month: '11월',
    location: '여의도공원 문화의마당 (서울 영등포구)',
    region: '서울',
    distances: ['하프', '10K'],
    status: '접수중',
    isMajor: false,
    website: 'http://gofree.seoul.co.kr/',
    registrationStart: '2026-09-01',
    registrationNote:
      '9월 1일(화) 10시 접수 개시됨 — 마감일 없이 선착순. 공식 홈 참가신청 안내에는 일반접수 70,000원만 남아 있고 얼리버드 65,000원(서울신문 회원 선착순 3,000명) 문구가 사라져 소진된 것으로 추정됩니다. 환불 신청 마감은 10월 21일(수) 17시로 공식 게시(2026-09-02 확인)',
    lastVerified: '2026-09-02',
    description:
      '서울신문 주최 가을 러닝 대회. 2025년(11/9, 하프·10K·5K)에 이어 2026년은 11월 21일(토)에 열리며, 올해부터 아식스가 타이틀 스폰서로 붙어 대회명 자체가 "ASICS SEOUL SHINMUN GO FREE RUN"이 됐습니다. 8월 18일까지 "참가접수 미정"이던 공식 홈페이지 대회요강이 열리면서, 러닝 정보 계정 단독 소스였던 9월 1일 접수설이 공식 확정으로 바뀌었습니다 — 9월 1일(화) 10시부터 마감일 없이 선착순으로 받습니다. 참가비는 얼리버드가 하프·10K 65,000원(서울신문 회원 선착순 3,000명, 신청 시 서울신문 ID 입력 필수)이고 그 뒤로는 일반 70,000원입니다. 5,000원 차이지만 회원가입이 조건이라 접수 당일 아침에 가입하려 들면 늦습니다. 환불은 접수 마감일 17시까지만 가능하고 마감 후에는 불가하며, 환불금은 대회 종료 후 2주 안에 지급됩니다. 앞서 진행된 아식스 스페셜 패키지 래플(8월 19~24일 응모, 25일 발표)은 이미 종료됐습니다 — 하프는 슈퍼블라스트 3, 10K는 노바블라스트 6에 참가 티켓과 공식 티셔츠가 묶인 구성이었습니다.',
    raceKit: {
      items: [
        '기능성 티셔츠(XS~XL / 85~105, 총기장·가슴둘레·어깨넓이·소매길이 실측표 공개)',
        '스포츠 장목 양말(남성 26cm·여성 24cm로 성별에 따라 발송)',
        '헤어 밴드',
        '쟈뎅 페이스메이트 버닝',
        '뉴니스 수분·진정 마스크',
        '샘트리 맛병아리콩',
      ],
      // 공식 홈 요약에는 티셔츠·양말·헤어밴드가 FILA 로 적혀 있으나, 기념품안내 상세 페이지에는
      // 브랜드 표기가 없다. 타이틀 스폰서가 아식스로 바뀐 해라 전년도 표기가 남았을 수 있어
      // 브랜드명은 싣지 않는다.
      pending: '티셔츠·양말·헤어밴드의 브랜드는 공식 홈 요약(FILA)과 기념품안내 상세(브랜드 미표기)가 어긋나 확정 표기하지 않았습니다. 세부 디자인도 공식이 "일부 변경될 수 있다"고 고지했습니다',
      verifiedAt: '2026-08-31',
    },
    courseInfo: {
      terrain: '평지',
      difficulty: '초보자',
      courseDescription:
        '여의도공원 문화의마당에서 06시 30분 집결, 07시 30분 출발합니다. 하프와 10K 코스도, 교통통제 시간표가 공식에 올라와 있지만 모두 이미지로만 제공되고 "관계기관과의 협의 후 일부 수정될 수 있다"는 단서가 붙어 있어, 대회가 가까워지면 다시 확인하는 편이 좋습니다. 하프는 만 18세 이상만 신청할 수 있고 10K는 나이 제한이 없습니다.',
    },
    raceInfo: {
      entryFees: [
        { distance: '하프', fee: 70000 },
        { distance: '10K', fee: 70000 },
      ],
      startTime: '07:30',
    },
  },
  {
    id: 'incheon-marathon-2026',
    name: '2026 인천마라톤',
    date: '2026-11-22',
    month: '11월',
    location: '인천아시아드주경기장 (인천 서구)',
    region: '인천',
    distances: ['풀코스', '10K', '5K'],
    status: '접수예정',
    isMajor: true,
    website: 'http://www.incheonmarathon.or.kr/',
    registrationStart: '2026-09-07',
    registrationNote: '9월 7일(월) 14시 접수 시작 — 공식 대회소개 표 기준. 선착순 여부·마감일은 미고지',
    lastVerified: '2026-08-31',
    description:
      '인천시·대한육상연맹 주최 인천 최초·유일 공식 풀코스 마라톤(제2회). 8월 29일까지 전 메뉴가 "COMING SOON"이던 공식 홈페이지에 대회소개 표가 올라오면서, 그동안 러닝 정보 계정과 4월 언론 보도로만 돌던 수치가 공식으로 확정됐습니다. 접수는 9월 7일(월) 14시에 시작하고, 정원은 총 2만 명으로 풀코스 8,000·10km 10,000·5km 2,000명으로 나뉩니다. 참가비는 풀 8만·10km 5만·5km 3만원입니다. 가장 큰 확정은 출발지로, 풀코스만 영종구 운서역 일원에서 출발해 인천아시아드주경기장으로 들어오는 편도 코스이고 10km·5km는 주경기장에서 출발해 주경기장으로 돌아옵니다. 운영은 동아일보사·스포츠웨이브가 맡습니다. 다만 대회안내·참가신청·기념품·코스안내 네 메뉴는 8월 31일 현재도 여전히 COMING SOON이라 코스도·기념품·제한시간·급수는 접수가 열리는 9월 7일 이후에 공개될 것으로 보입니다.',
    courseInfo: {
      terrain: '평지',
      difficulty: '중급',
      courseDescription:
        '이 대회에서 가장 주목받는 지점은 청라하늘대교입니다. 인천시가 2026년 4월 "풀코스에 청라하늘대교 통과 방안을 추진한다"고 밝힌 뒤 여러 매체가 일제히 보도했습니다. 다만 공식 홈페이지는 지금도 "바다를 건너, 인천을 달리다"까지만 걸어두고 다리 이름을 쓰지 않으며 코스안내 메뉴도 준비중입니다 — 즉 다리 통과는 언론 보도와 슬로건이 가리키는 방향이지, 공식 코스도로 확정된 것은 아직 아닙니다. 진행 방향도 갈립니다. 4월 보도 단계의 안은 아시아드주경기장에서 출발해 청라를 지나 영종으로 넘어가는 것이었는데, 8월 말 공식 대회소개는 반대로 영종구 운서역 일원에서 출발해 인천아시아드주경기장에서 끝난다고 적고 있습니다. 어느 쪽이든 섬과 육지를 오가는 편도라, 출발지까지 이동을 따로 계획해야 하고 짐도 도착지로 옮겨야 합니다. 10km와 5km는 주경기장에서 출발해 주경기장으로 돌아옵니다. 11월 하순 개최라 바다 위 구간의 바람과 체감온도가 변수입니다.',
    },
    raceInfo: {
      entryFees: [
        { distance: '풀코스', fee: 80000 },
        { distance: '10K', fee: 50000 },
        { distance: '5K', fee: 30000 },
      ],
      expectedParticipants: 20000,
      startTime: '08:00',
    },
  },
  {
    id: 'buyeo-goodtrae-marathon-2026',
    name: '제15회 부여 굿뜨래 마라톤대회',
    date: '2026-11-07',
    month: '11월',
    location: '구드래나루터 (충남 부여군)',
    region: '충남',
    distances: ['풀코스', '하프', '10K', '5K'],
    status: '접수중',
    isMajor: false,
    description:
      '백마강변 구드래나루터에서 출발하는 부여 대표 대회 15회차. 하반기 충남권에서 드물게 풀코스를 운영합니다. 부여군마라톤연합회 주최·전국마라톤협회 주관으로, 접수는 6월 30일부터 10월 7일까지입니다. 부여군민 5km는 20,000원.',
    website: 'https://mara1080.com/event/ffc023fc-7a54-4610-bdd6-2bb9a1028122',
    registrationEnd: '2026-10-07',
    registrationNote: '선착순 5,000명 — 정원 도달 시 조기 마감(공식 공지)',
    raceKit: {
      byDistance: [
        { distance: '5km', item: '기능성 티셔츠(90~110)' },
        { distance: '10km·하프·풀', item: '선택 1 — 표고버섯 / 양송이버섯 / 깐밤 600g (현장에서 교환권으로 수령)' },
      ],
      images: [{ src: '/images/marathon/buyeo-goodtrae-marathon-2026/kit-1.webp', alt: '제15회 부여 굿뜨래 마라톤 공식 기념품 안내' }],
      verifiedAt: '2026-08-27',
    },
    lastVerified: '2026-08-27',
    raceInfo: {
      entryFees: [
        { distance: '풀코스', fee: 50000 },
        { distance: '하프', fee: 45000 },
        { distance: '10K', fee: 45000 },
        { distance: '5K', fee: 30000 },
      ],
      startTime: '08:30',
    },
  },
  {
    id: 'gwacheon-marathon-2026',
    name: '2026 과천마라톤',
    date: '2026-11-08',
    month: '11월',
    location: '관문체육공원 (경기 과천시)',
    region: '경기',
    distances: ['하프', '10K', '5K'],
    status: '마감',
    isMajor: false,
    website: 'https://gcrun.co.kr/gcrun/',
    registrationStart: '2026-07-20',
    registrationNote: '접수 마감됨 — 선착순 3,000명 도달(공식 공지 2026-08-18, 취소분 추가 접수도 마감)',
    raceKit: {
      items: ['공식 기념품', '배번호', '기록칩', '완주메달', '모바일 기록증', '안내책자', '간식'],
      byDistance: [
        { distance: '하프', item: '디아도라 러닝베스트·배번호 그립' },
        { distance: '10km', item: '디아도라 러닝베스트·스포츠 양말' },
        { distance: '5km', item: '디아도라 경량 토트백' },
      ],
      pending: '공식 고지: 기념품 디자인·항목은 변경될 수 있음',
      images: [
        { src: '/images/marathon/gwacheon-marathon-2026/kit-1.webp', alt: '2026 과천마라톤 공식 기념품 — 디아도라 러닝베스트' },
        { src: '/images/marathon/gwacheon-marathon-2026/kit-2.webp', alt: '2026 과천마라톤 공식 기념품 안내' },
      ],
      verifiedAt: '2026-08-27',
    },
    lastVerified: '2026-08-27',
    description:
      '과천시체육회 주최로 관문체육공원에서 출발하는 하프·10K·5K 대회(40주년). 7월 20일 14시 시작한 1차 선착순 접수(총 3,000명)는 정원이 차서 마감됐고, 미결제분 결제 마감(7/26 자정) 이후 취소분만큼 7월 27일 14시부터 추가접수가 열립니다. 참가 자격은 하프 19세 이상·10km 14세 이상이며 5km는 제한이 없습니다. 과천시민 5km는 25,000원(한정 수량).',
    raceInfo: {
      entryFees: [
        { distance: '하프', fee: 45000 },
        { distance: '10K', fee: 40000 },
        { distance: '5K', fee: 30000 },
      ],
      startTime: '08:00',
    },
  },
  {
    id: 'jeju-mandarin-marathon-2026',
    name: '2026 제주감귤마라톤',
    date: '2026-11-15',
    month: '11월',
    location: '조천체육관 (제주 제주시)',
    region: '제주',
    distances: ['풀코스', '하프', '10K'],
    status: '접수중',
    isMajor: false,
    website: 'https://marathon.ihalla.com/',
    registrationStart: '2026-07-06',
    registrationEnd: '2026-09-11',
    raceKit: {
      pending: '기념품 안내 페이지가 준비중 — 품목 미공개 (2026-08-27 확인)',
      verifiedAt: '2026-08-27',
    },
    lastVerified: '2026-08-27',
    description:
      '한라일보가 주최하는 제주 대표 가을 대회로 풀·하프·10K를 운영합니다. 정식 명칭은 제주감귤국제마라톤대회. 감귤 수확철 제주 동부 해안과 중산간을 달리는 코스이며, 접수는 7월 6일~9월 11일입니다. 제한시간은 풀 5시간·하프 2시간 30분·10km 1시간 30분이고, 유아·초중고생은 30% 할인됩니다.',
    raceInfo: {
      entryFees: [
        { distance: '풀코스', fee: 55000 },
        { distance: '하프', fee: 45000 },
        { distance: '10K', fee: 40000 },
      ],
    },
  },
  {
    id: 'garmin-run-korea-2026',
    name: '2026 가민런 코리아 (Garmin Run Korea)',
    date: '2026-11-15',
    month: '11월',
    location: '고양종합운동장 (경기 고양시)',
    region: '경기',
    distances: ['하프', '10K'],
    status: '마감',
    isMajor: true,
    website: 'https://discover.garmin.com/ko-KR/event/2026/garmin-run/',
    description:
      '가민이 주최하는 브랜드 러닝 이벤트로, 2026년 1만 2천 명 규모로 대폭 확대됐습니다(하프 8,500명·10K 3,500명). 본접수는 선착순이 아니라 추첨이었습니다 — 7월 1일 14시부터 3일 17시까지 신청받아 7일 14시에 당첨자를 발표했고, 9일 16시까지 참가비를 결제해야 자리가 확정되는 방식이었습니다. 이와 별개로 포러너 스페셜 패키지가 6월 23일~7월 10일 선착순으로 열렸습니다. 참가 자격은 하프가 만 18세 이상(2008년 11월 15일 이전 출생)·2시간 30분 이내 완주, 10K가 만 14세 이상(2012년 11월 15일 이전 출생)·1시간 30분 이내 완주로 컷오프가 걸려 있습니다. 2022~2027년 월드 시리즈 13개 도시 중 10개를 완주하면 18K 도금 커스텀 메달을 주는 시리즈의 한국 라운드입니다.',
    courseInfo: {
      terrain: '평지',
      difficulty: '중급',
      courseDescription:
        '고양종합운동장에서 출발해 같은 자리로 돌아오는 순환 코스입니다. 하프는 고양체육관사거리를 지나 일산호수공원 옆을 끼고 남동쪽으로 내려간 뒤 신평IC 삼거리와 신평IC에서 반환해 되돌아옵니다. 10K 코스도는 2026-08-29 기준 공식 홈에 "COMING SOON"으로 가려져 있습니다.',
      isLoopCourse: true,
    },
    raceInfo: {
      entryFees: [
        { distance: '하프', fee: 80000 },
        { distance: '10K', fee: 60000 },
      ],
      timeLimits: [
        { distance: '하프', hours: 2, minutes: 30 },
        { distance: '10K', hours: 1, minutes: 30 },
      ],
      expectedParticipants: 12000,
      startTime: '하프 08:00 / 10K 08:20',
    },
    registrationStart: '2026-07-01',
    registrationEnd: '2026-07-03',
    registrationNote:
      '본접수는 추첨제 — 7월 1일(수) 14시~3일(금) 17시 신청, 7월 7일(화) 14시 당첨자 발표, 7월 9일(목) 16시까지 결제 완료해야 확정. 포러너 스페셜 패키지는 6월 23일~7월 10일 선착순으로 별도 운영됐습니다.',
    lastVerified: '2026-08-29',
  },
  {
    id: 'gochang-dolmen-marathon-2026',
    name: '제24회 고창고인돌마라톤',
    date: '2026-11-15',
    month: '11월',
    location: '고창공설운동장 (전북 고창군)',
    region: '전북',
    distances: ['하프', '10K', '5K'],
    status: '마감',
    isMajor: false,
    description:
      '고창군 일대에서 열리는 24회째 대회로 하프·10K·5K를 운영합니다. 접수는 7월 1일부터 선착순 4,000명으로 8월 31일 14시까지였습니다. 5km는 기록을 측정하지 않으며 참가비도 10,000원으로 저렴합니다. 클럽 마니아 할인가(하프·10km 25,000원, 기념품 미지급)가 별도로 있습니다.',
    website: 'http://www.gcrun.com/',
    registrationStart: '2026-07-01',
    registrationEnd: '2026-08-31',
    registrationNote: '선착순 4,000명 — 8/31(월) 14:00 접수 마감됨',
    raceKit: {
      items: ['기념품', '번호표', '기록칩', '대회책자', '완주메달', '기록증'],
      byDistance: [
        { distance: '하프·10km', item: '고창황토배기 쌀 5kg 또는 복분자주 1세트 택 1 (매니아 부문은 기념품 미지급)' },
        { distance: '5km', item: '완주메달 또는 장갑 (참가자 선택)' },
      ],
      verifiedAt: '2026-08-27',
    },
    lastVerified: '2026-08-27',
    raceInfo: {
      entryFees: [
        { distance: '하프', fee: 35000 },
        { distance: '10K', fee: 35000 },
        { distance: '5K', fee: 10000 },
      ],
      startTime: '10:00',
    },
  },
  {
    id: 'namwon-chunhyang-marathon-2026',
    name: '2026 남원 춘향 전국 마라톤대회',
    date: '2026-11-28',
    month: '11월',
    location: '남원종합스포츠타운 (전북 남원시)',
    region: '전북',
    distances: ['풀코스', '하프', '10K', '5K'],
    status: '마감',
    isMajor: false,
    description:
      '남원종합스포츠타운에서 출발하며, 11월 하순에는 드물게 풀코스를 운영하는 대회입니다. 전국마라톤협회 주관으로 접수는 7월 7일부터 10월 28일까지. 제한시간은 풀 5시간(반환점 2시간 45분)·하프 3시간·10km 2시간이며, 10km 이상은 완주 메달과 지역상품권 1만원을 받습니다. 남원시민 5km는 20,000원.',
    website: 'https://mara1080.com/event/c2cec79b-c38a-4832-bf4f-7ecb499cdcd5',
    registrationEnd: '2026-08-03',
    registrationNote: '1차 접수 마감(선착순 6천 명 달성). 9/10까지 환불 진행 후 취소자 200명 이상이면 2차 접수 공지 예정',
    raceKit: {
      byDistance: [
        { distance: '5km', item: '기능성 티셔츠(90~110)' },
        { distance: '10km·하프·풀', item: '선택 1 — 지역상품권 10,000원(현장 배부) / 레츠고 마라톤화(사전 발송, 참가비 별도 책정)' },
      ],
      images: [{ src: '/images/marathon/namwon-chunhyang-marathon-2026/kit-1.webp', alt: '2026 남원 춘향 마라톤 공식 기념품 안내' }],
      verifiedAt: '2026-08-27',
    },
    lastVerified: '2026-08-27',
    raceInfo: {
      entryFees: [
        { distance: '풀코스', fee: 50000 },
        { distance: '하프', fee: 45000 },
        { distance: '10K', fee: 45000 },
        { distance: '5K', fee: 30000 },
      ],
      startTime: '08:40',
    },
  },
];
