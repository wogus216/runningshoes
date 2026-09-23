import type { Shoe } from '@/types/shoe';

export const shoe: Shoe = {
  id: 'saucony-hurricane-26',
  slug: 'saucony-hurricane-26',
  brand: 'Saucony',
  name: '허리케인 26',
  image: '/images/shoes/saucony/hurricane26/side.webp',
  images: [
    '/images/shoes/saucony/hurricane26/side.webp',
    '/images/shoes/saucony/hurricane26/front.webp',
    '/images/shoes/saucony/hurricane26/medial.webp',
    '/images/shoes/saucony/hurricane26/back.webp',
    '/images/shoes/saucony/hurricane26/top.webp',
  ],
  category: '안정화',
  rating: 4.5,
  status: 'new',
  price: 209000,
  description:
    'Saucony 프리미엄 안정화의 2026년 최신판. 신소재 IncrediLux(ATPU) 폼을 PWRRUN 크래들 위에 얹어 41/35mm 맥스 스택에서 262g의 가벼움을 실현한, 부드럽고 경쾌해진 맥스쿠션 안정화입니다.',
  oneliner: 'IncrediLux ATPU 폼, 41mm 스택에 262g — 가벼워진 맥스쿠션 안정화',
  editorComment:
    '허리케인 26은 세대교체 폭이 큰 모델입니다. 전작의 PWRRUN PB(PEBA)를 신소재 IncrediLux(ATPU)로 갈아끼우면서 RunRepeat 실측 스택은 힐 38.3mm·전족 32.4mm(브랜드 공식 41/35mm보다 낮게 측정)로 나왔고, 무게는 RunRepeat 실측 272g으로 허리케인 25(브랜드 공식 286g)보다 가볍습니다. 맥스쿠션 안정화 카테고리에서 상당히 가벼운 축입니다. 실측 수치가 이 방향을 뒷받침합니다 — 충격흡수 SA 힐 145(로드화 평균 131 상회), 에너지 리턴은 힐 67.2%·전족 76.2%로 로드화 평균(58.8%)을 크게 웃돌아 "더 부드럽고 활기차졌다"는 평이 실측으로도 확인됩니다. 미드솔 경도는 33.8 AC로 로드화 평균(35.5 AC)보다 살짝 부드럽습니다. 전작 25 특유의 발을 단단히 심어주는 잠금감은 소폭 줄었다는 시각과, 베이스 폭을 넓혀 안정성은 오히려 보완됐다는 시각이 공존하는데, RunRepeat 실측으로 전족 129.8mm·힐 112.3mm는 "지금까지 측정한 러닝화 중 가장 넓은 플랫폼"이라 후자를 뒷받침합니다. 확실히 잡아주는 감각이 최우선이면 할인 구간에 들어간 허리케인 25 재고가 여전히 유효한 선택입니다. 국내 공식가는 209,000원입니다(2026-08-15 써코니코리아 공식몰 확인, 해외 정가 $170).\n\n사이즈·구매 가이드: 핏은 정사이즈 기준이며 와이드 옵션이 별도 품번으로 나옵니다. RunRepeat 실측 드롭은 5.9mm로 브랜드 공식 6mm와 거의 일치합니다. 토박스는 실측 72.2mm로 표준 구간이고, 접지력은 계수(CoF) 0.69로 24세대(0.49)·25세대(0.54)보다 뚜렷하게 개선됐습니다. 어퍼 통기성이 아쉽다는 기존 평과 달리, RunRepeat 실측 통기성은 79점(평균 75점)으로 오히려 평균 이상입니다. 아웃솔 마모 0.6mm·토박스 내구성 3/5·힐 패딩 내구성 5/5(만점)로 내구성 삼박자가 고르게 좋습니다. 비교 대상은 젤카야노 32(검증된 정석)와 가이드 19(한 단계 아래 코어 안정화)입니다.',
  tags: ['안정화', '맥스쿠션', '과내전', '프리미엄'],

  specs: {
    weight: 272,
    cushioning: 9,
    responsiveness: 8,
    stability: 8,
    drop: 5.9,
    durability: 650,
  },

  biomechanics: {
    stackHeight: { heel: 38.3, forefoot: 32.4 },
    drop: 5.9,
    carbonPlate: false,
    plateType: null,
    midsoleType: 'IncrediLux (ATPU) + PWRRUN 크래들',
    optimalPace: '5:00-7:30 min/km',
  },

  injuryPrevention: {
    plantarFasciitis: 'excellent',
    achillesTendinopathy: 'caution',
    kneeIssues: 'excellent',
    shinSplints: 'good',
  },

  koreanFootFit: {
    toBoxWidth: 'standard',
    flatFootCompatibility: 'excellent',
    wideOptions: true,
    winterCompatibility: 'good',
    summerCompatibility: 'good',
  },

  priceAnalysis: {
    msrp: 209000,
    streetPrice: 209000,
    costPerKm: 322,
    valueRating: 6,
    priceTier: 'premium',
    alternatives: ['saucony-hurricane-25', 'asics-gel-kayano-32', 'saucony-guide-19'],
    valueAdvantages: [
      '실측 힐 38.3mm 맥스 스택에 272g — 카테고리 최상위권 무게 대비 쿠션',
      '신소재 IncrediLux 폼의 부드럽고 경쾌한 라이드',
      'PWRRUN 크래들 유지로 지지 구조 보존',
      '와이드 옵션 별도 품번 제공',
    ],
  },

  targetUsers: {
    recommended: [
      '중간 이상 과내전 + 장거리 쿠션을 함께 원하는 러너',
      '카야노급 플래그십 중 더 가볍고 새로운 쪽을 원하는 러너',
      '무릎 부담이 커 맥스쿠션이 필요한 과내전 러너',
      '평발로 넓은 접지면과 강한 지지가 모두 필요한 러너',
    ],
    notRecommended: [
      '전작 25의 단단한 잠금감을 기대하는 러너 (25 재고 권장)',
      '토박스 내구성보다 전체 내구 밸런스가 최우선인 러너 (가벼운 업그레이드형 어퍼)',
      '가성비 우선 러너 (프리미엄 가격대)',
    ],
  },

  features: [
    '2026년 7월 1일 출시된 허리케인 라인 최신판 (국내 209,000원 · 해외 $170)',
    '신소재 IncrediLux(ATPU) 폼 — 전작 PWRRUN PB에서 전면 교체',
    'RunRepeat 실측 스택 힐 38.3mm·전족 32.4mm, 무게 272g(브랜드 공식 286g→262g 대비 실측치)',
    '단단한 PWRRUN 크래들 구조는 유지 — 지지 프레임 보존',
    'RunRepeat 실측 드롭 5.9mm(브랜드 공식 6mm) · 와이드 별도 품번(61250M) 유통',
  ],

  reviews: [
    {
      userType: '에디터 분석',
      rating: 88,
      text: '허리케인 26의 방향성은 명확합니다 — "무겁고 단단한 프리미엄 안정화"에서 "가볍고 부드러운 맥스쿠션 안정화"로. RunRepeat 실측 기준 스택은 힐 38.3mm·전족 32.4mm, 무게는 272g으로 안정화 카테고리에서 손꼽히게 가벼운 축입니다. 반응성은 실측으로 명확히 확인됩니다 — 에너지 리턴 힐 67.2%·전족 76.2%(로드화 평균 58.8%)로 안정화치고는 이례적으로 높아, "활기차졌다"는 평가가 수치로도 뒷받침됩니다. 충격흡수도 SA 힐 145(평균 131)로 상위권입니다. PWRRUN 크래들이 유지돼 과내전 지지력은 견고하지만, 전작의 잠기는 감각을 원하는 러너에겐 할인 들어간 25가 더 맞을 수 있습니다. 국내 공식가는 209,000원입니다.',
    },
    {
      userType: '세대 비교 — 25보다 가볍고 자유로워졌다',
      text: '전작 25와 비교하면 가벼워지고 쿠션이 부드러워지면서 지지 감각은 다소 느슨해졌습니다. 발목이 안으로 무너지는 것은 여전히 잡아주지만, 25의 꽉 잡히는 느낌을 기준으로 삼았다면 초기에는 어색할 수 있습니다. 대신 장거리에서 발 피로가 덜해 하프 이상 위주라면 이쪽이 유리합니다. 즉 과내전 제어 강도를 최우선으로 두면 전작, 장거리 편안함을 우선하면 26입니다.',
    },
    {
      userType: '계절 적합성 — 실측은 통기성 우려를 뒤집는다',
      text: '쿠션량이 많은 안정화를 찾을 때 카야노 계열과 함께 검토되는 모델입니다. 실측 스택 힐 38.3mm의 높은 쿠션인데도 로커 덕에 둔하지 않고 굴러가는 성격이라, 10km 이상 거리에서 관절 부담이 줄어듭니다. "어퍼가 두꺼워 여름엔 덥다"는 기존 우려와 달리 RunRepeat 통기성 실측은 79점(평균 75점)·수분 배출률 56%(평균 53%)로 오히려 평균 이상이라, 여름철 운용도 무리 없습니다. 접지력도 계수(CoF) 0.69로 24세대(0.49)·25세대(0.54) 대비 뚜렷하게 개선됐습니다. 가격대는 프리미엄 구간입니다.',
    },
  ],

  detailedSpecs: {
    weight: '272g (RunRepeat 실측 남성 US 9) · 브랜드 공식 262g(남성)/232g(여성)',
    stackHeight: '힐 38.3mm / 포어풋 32.4mm (RunRepeat 실측) · 브랜드 공식 41/35mm',
    drop: '5.9mm (RunRepeat 실측) · 브랜드 공식 6mm',
    midsole: 'IncrediLux (ATPU) + PWRRUN 크래들 · 경도 33.8 AC(RunRepeat 실측)',
    plate: '없음',
    outsole: '러버 아웃솔 · 접지력 CoF 0.69 · 마모 0.6mm(RunRepeat 실측)',
    upper: '엔지니어드 메쉬 · 통기성 79점/드라이 56%(RunRepeat 실측, 평균 75점/53% 상회)',
    width: '표준 핏(RunRepeat 실측 토박스 72.2mm) · 와이드 별도 품번(남성 61250M) 유통',
    durability: '650km (아웃솔 마모 0.6mm·토박스 내구 3/5·힐 패딩 내구 5/5 — RunRepeat 실측, 3항목 모두 평균 상회)',
    price: '209,000원 (국내 공식가, 2026-08-15 써코니코리아 공식몰 확인) · 해외 정가 $170',
    costPerKm: '약 ₩322/km (650km 기준)',
    footType: '중간~심한 과내전 / 평발 장거리 러너',
    landingPattern: '힐스트라이크 중심',
  },

  similarShoes: ['saucony-hurricane-25', 'asics-gel-kayano-32', 'saucony-guide-19'],
  purchaseLinks: [{ store: '네이버', url: 'https://search.shopping.naver.com/search/all?query=써코니+허리케인+26' }],
};
