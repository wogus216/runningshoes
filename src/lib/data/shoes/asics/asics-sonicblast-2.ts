import type { Shoe } from '@/types/shoe';

export const shoe: Shoe = {
  id: 'asics-sonicblast-2',
  slug: 'asics-sonicblast-2',
  brand: 'Asics',
  name: '소닉블라스트 2',
  category: '쿠션화',
  rating: 4.5,
  status: 'new',
  description:
    '아식스 Blast 계열에서 유일하게 플레이트가 들어가는 소닉블라스트의 2세대. 갈래진 포크형 ASTROPLATE와 전족부 트램폴린 포드를 새로 넣고 약 14g 가벼워졌습니다. 한국 출시일·가격은 미발표입니다.',
  oneliner: '포크형 플레이트로 다시 짠 46mm 템포 트레이너 — 한국 출시는 아직 미정',
  editorComment:
    '2026년 9월 글로벌 출시 예정으로, RunRepeat 랩 데이터는 물론 Believe in the Run·Doctors of Running의 2세대 리뷰도 아직 없습니다. 아래 수치 중 46/38mm 스택과 242g은 아식스 공식 발표가 아니라 해외 매체 보도(복수 매체 일치)이고, 나머지 판단은 1세대 랩 실측을 기준선으로 삼은 것입니다.\n\n아식스가 공식 보도자료에서 직접 밝힌 변경은 네 가지입니다 — 갈래진 포크 형태로 다시 설계한 ASTROPLATE, 전족부 트램폴린 포드, FF TURBO SQUARED와 FF BLAST MAX를 겹친 듀얼 폼 유지, 그리고 엔지니어드 메시 어퍼입니다. 무게는 "전작 대비 약 14g 경량"까지만 공식 표현이고, 242g이라는 절대 수치는 매체 보도입니다.\n\n1세대의 성격을 알면 2세대를 가늠하기 쉽습니다. 1세대는 랩 종합 83점에 에너지 리턴 68.9%로 반발이 뛰어났지만, 평가가 갈린 지점이 분명했습니다. Doctors of Running은 이지 페이스에서 뒤꿈치가 둔하고 미드풋이 과하게 뻣뻣하다며 "전 페이스 범용이 아니라 워크아웃·레이스 도구"로 봤고, 46mm 스택에 비해 힐 베벨이 부족하다는 구조적 지적도 남겼습니다. 2세대의 포크형 플레이트와 트램폴린 포드가 이 문제를 풀어냈는지는 검증된 근거가 없습니다.\n\n한국 러너가 특히 확인해야 할 부분은 발볼입니다. 1세대 토박스는 실측 70.1mm로 평균보다 확실히 좁아 RunRepeat 총평이 "발볼 넓은 발에는 부적합"이었고, 2세대가 이를 손봤다는 자료는 없습니다. 어퍼 내구성도 1세대 기준 5점 만점에 1점으로, 아웃솔보다 갑피가 먼저 상할 가능성이 지적됐습니다.\n\n플레이트 소재를 카본으로 소개하는 매체가 있는데 이는 오기로 보입니다. 신발을 실제로 절단한 RunRepeat을 포함해 Believe in the Run·Doctors of Running이 모두 Pebax로 명시했습니다.\n\n구매 가이드: 한국 정가와 출시일이 모두 미발표입니다(2026-08-27 기준). 1세대 한국 정가가 229,000원이고 미국 정가가 $180에서 $190으로 올랐다는 점만 참고 정보로 남겨둡니다. 와이드 옵션 제공 여부도 확인되지 않았습니다.',
  tags: ['템포', '슈퍼트레이너', '고스택', 'ASTROPLATE', '신상'],
  specs: {
    weight: 242,
    cushioning: 9,
    responsiveness: 9,
    stability: 5,
    drop: 8,
    durability: 500,
  },
  biomechanics: {
    stackHeight: { heel: 46, forefoot: 38 },
    drop: 8,
    carbonPlate: false,
    plateType: 'curved',
    midsoleType: 'FF TURBO SQUARED + FF BLAST MAX 듀얼 폼 + 포크형 ASTROPLATE (Pebax)',
    optimalPace: '3:50-5:00 min/km',
  },
  injuryPrevention: {
    plantarFasciitis: 'caution',
    achillesTendinopathy: 'caution',
    kneeIssues: 'good',
    shinSplints: 'good',
  },
  koreanFootFit: {
    toBoxWidth: 'standard',
    flatFootCompatibility: 'poor',
    wideOptions: false,
    winterCompatibility: 'fair',
    summerCompatibility: 'excellent',
  },
  targetUsers: {
    recommended: [
      '템포·인터벌 훈련 비중이 높은 러너',
      '플레이트가 들어간 고스택 트레이너를 찾는 러너',
      '빠른 페이스에서 반발을 원하는 중립 발 러너',
      '통기성을 중시하는 여름 러너',
    ],
    notRecommended: [
      '이지런 위주로 달리는 러너',
      '발볼이 넓은 러너',
      '아킬레스·힐 통증 이력이 있는 러너',
      '한 켤레로 모든 페이스를 커버해야 하는 러너',
      '평발·과내전',
    ],
  },
  features: [
    '포크형 ASTROPLATE — Blast 계열 중 소닉블라스트 전용 기술',
    '전족부 트램폴린 포드 (신규)',
    'FF TURBO SQUARED + FF BLAST MAX 듀얼 폼',
    '전작 대비 약 14g 경량화',
    '엔지니어드 메시 어퍼로 통기 개선',
  ],
  detailedSpecs: {
    weight: '242g (매체 보도, 남성 US9) — 아식스 공식 표현은 "전작 대비 약 14g 경량"까지만',
    stackHeight: '힐 46mm / 포어풋 38mm (매체 보도, 아식스 공식 미발표) · 1세대 랩 실측은 45.4 / 36.4mm',
    drop: '8mm (매체 보도) · 1세대 랩 실측은 9.0mm',
    midsole: 'FF TURBO SQUARED(상단) + FF BLAST MAX(하단) 듀얼 폼 — 1세대 폼 경도 37.5 AC / 39.9 AC',
    plate: '포크형 ASTROPLATE — Pebax 소재 (카본 아님). 1세대는 3/4 길이',
    outsole: 'ASICSGRIP (1세대 마모 실측 1.0mm · 두께 2.0mm)',
    upper: '엔지니어드 메시 (1세대 자카드 메시에서 변경) — 1세대 통기성 5/5',
    width: '표준폭 — 와이드 옵션 제공 여부 불명. 1세대 토박스 실측 70.1mm로 평균보다 좁음',
    durability: '450~550km (추정) — 1세대 아웃솔은 양호했으나 토박스 내구성이 1/5로 취약',
    price: '한국 정가·출시일 미발표 (2026-08-27 기준) · 미국 $190 (1세대 $180) · 1세대 한국 정가 229,000원',
    footType: '중립 발',
    landingPattern: 'MFS/FFS',
  },
  reviews: [
    {
      userType: '에디터 분석 — 공식 발표와 매체 보도의 경계',
      text: '2세대에서 확정된 것과 아직 아닌 것을 나눠 볼 필요가 있습니다. 아식스가 공식 보도자료에서 직접 밝힌 것은 포크형 ASTROPLATE 재설계, 전족부 트램폴린 포드 추가, FF TURBO SQUARED와 FF BLAST MAX 듀얼 폼 구성, 엔지니어드 메시 어퍼, 그리고 "약 14g 경량"입니다. 반면 242g·46/38mm·8mm 드롭·$190·9월 1일 출시는 모두 매체 보도이며 공식문에는 없습니다. 네 곳 이상이 같은 수치를 적고 있어 신뢰도는 높지만 1차 확인은 아닙니다. 포크형 플레이트의 설계 의도는 명확합니다 — 플레이트를 갈래로 나눠 무게를 덜면서, 그 사이로 FF TURBO SQUARED가 더 깊이 내려와 전족부 트램폴린 포드까지 이어지게 만든 구조입니다. 폼과 플레이트가 맞물리는 면적을 늘려 추진력을 키우겠다는 접근입니다.',
    },
    {
      userType: '1세대 랩 실측 기준선 — 반발은 강했고 범용성은 좁았다',
      text: '2세대를 가늠할 기준선은 1세대 실측입니다. RunRepeat 종합 83점에 에너지 리턴 68.9%로 반발이 매우 높았고, 충격흡수는 힐 149·전족 133으로 고스택다웠습니다. 전족 접지력 0.96은 최상위권이고 통기성도 5점 만점이었습니다. 반면 종방향 강성 24.4N에 비틀림 강성 21.5Nm로 상당히 뻣뻣해, 이 단단함이 범용성을 제한한다는 것이 RunRepeat이 꼽은 단점이었습니다. 스택 실측치가 브랜드 표기와 다른 점도 기억해 둘 만합니다 — 브랜드는 46/38mm에 드롭 8mm라고 했지만 실제로 잘라 재보니 45.4/36.4mm에 드롭 9.0mm였습니다. 2세대 수치도 실측이 나오면 조정될 여지가 있습니다.',
    },
    {
      userType: 'Doctors of Running 1세대 관점 — 힐 베벨과 페이스 의존성',
      text: 'Doctors of Running은 1세대를 두고 전족부는 매우 반응적이고 로커도 날카롭지만, 이지 페이스에서는 뒤꿈치가 둔하고 미드풋이 과도하게 뻣뻣하다고 봤습니다. 결론은 전 페이스 범용 트레이너가 아니라 워크아웃·레이스 전용에 가까운 좁은 니치라는 것이었습니다. 구조적으로는 힐 베벨이 평균 수준이지만 46mm 스택에 비해 부족하다는 점을 지적했습니다. 스택이 높아질수록 그에 비례하는 로커가 필요한데 그 균형이 어긋나면 접지 전환에서 비효율이 생긴다는 설명입니다. 이 때문에 초기 접지가 거칠어져 아킬레스건 문제 이력이 있는 러너에게는 부담이 될 수 있고, 뻣뻣한 미드풋과 3/4 플레이트가 아치의 자연스러운 움직임을 제한할 수 있다고 봤습니다. 2세대의 포크형 플레이트가 이 지적을 해소했는지는 확인된 바 없습니다.',
    },
    {
      userType: '예상 적합 — 훈련에서 페이스를 자주 올리는 경우',
      text: '주 3~5회를 달리면서 그중 1~2회를 템포나 인터벌에 쓰는 러너에게 맞을 가능성이 있습니다. 1세대 기준으로 페이스가 올라갈수록 평가가 좋아지는 신발이고, 46mm 스택에 플레이트가 더해져 빠른 구간에서 다리에 남는 부담을 줄이는 쪽으로 설계됐습니다. 반대로 대부분을 이지런으로 채우는 러너라면 뻣뻣함이 먼저 느껴질 가능성이 큽니다. 발볼이 넓다면 1세대 토박스가 70.1mm로 좁았다는 점을 반드시 감안해야 하고, 와이드 옵션 유무도 아직 확인되지 않았습니다. 한국 가격이 미발표라 가성비 판단은 출시 이후로 미뤄야 합니다.',
    },
  ],
  similarShoes: ['asics-sonicblast', 'asics-superblast-3', 'asics-megablast', 'saucony-endorphin-speed-6'],
};
