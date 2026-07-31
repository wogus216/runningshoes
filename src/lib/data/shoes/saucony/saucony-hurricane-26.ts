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
  price: 219000,
  description:
    'Saucony 프리미엄 안정화의 2026년 최신판. 신소재 IncrediLux(ATPU) 폼을 PWRRUN 크래들 위에 얹어 41/35mm 맥스 스택에서 262g의 가벼움을 실현한, 부드럽고 경쾌해진 맥스쿠션 안정화입니다.',
  oneliner: 'IncrediLux ATPU 폼, 41mm 스택에 262g — 가벼워진 맥스쿠션 안정화',
  editorComment:
    '허리케인 26은 세대교체 폭이 큰 모델입니다. 전작의 PWRRUN PB(PEBA)를 신소재 IncrediLux(ATPU)로 갈아끼우면서 스택은 41/35mm로 3mm 높아졌는데 무게는 286g→262g으로 24g 줄었습니다. 맥스쿠션 안정화 카테고리에서 상당히 가벼운 축입니다. 승차감은 "더 부드럽고 활기차졌다"는 평이 다수인 반면 "여전히 반응성보다 편안함 중심"이라는 평도 있어 갈립니다. 전작 25 특유의 발을 단단히 심어주는 잠금감은 소폭 줄었다는 시각과, 베이스 폭을 넓혀 안정성은 오히려 보완됐다는 시각이 공존합니다. 확실히 잡아주는 감각이 최우선이면 할인 구간에 들어간 허리케인 25 재고가 여전히 유효한 선택입니다. 해외 정가 $170이며 국내 정식 가격은 미정 — 표기가는 환산 잠정치입니다.\n\n사이즈·구매 가이드: 핏은 정사이즈 기준이며 와이드 옵션이 별도 품번으로 나옵니다. 드롭이 전작 7mm대에서 공식 6mm로 내려온 점, 어퍼 통기성이 아쉽다는 평이 있는 점을 참고하세요. 비교 대상은 젤카야노 32(검증된 정석)와 가이드 19(한 단계 아래 코어 안정화)입니다.',
  tags: ['안정화', '맥스쿠션', '과내전', '프리미엄'],

  specs: {
    weight: 262,
    cushioning: 9,
    responsiveness: 7,
    stability: 8,
    drop: 6,
    durability: 550,
  },

  biomechanics: {
    stackHeight: { heel: 41, forefoot: 35 },
    drop: 6,
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
    summerCompatibility: 'fair',
  },

  priceAnalysis: {
    msrp: 219000,
    streetPrice: 219000,
    costPerKm: 398,
    valueRating: 6,
    priceTier: 'premium',
    alternatives: ['saucony-hurricane-25', 'asics-gel-kayano-32', 'saucony-guide-19'],
    valueAdvantages: [
      '41mm 맥스 스택에 262g — 카테고리 최상위권 무게 대비 쿠션',
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
      '통기성이 최우선인 여름 러너',
      '가성비 우선 러너 (프리미엄 가격대)',
    ],
  },

  features: [
    '2026년 7월 1일 출시된 허리케인 라인 최신판 (해외 정가 $170)',
    '신소재 IncrediLux(ATPU) 폼 — 전작 PWRRUN PB에서 전면 교체',
    '스택 41/35mm로 상승, 무게는 286g→262g으로 24g 감량',
    '단단한 PWRRUN 크래들 구조는 유지 — 지지 프레임 보존',
    '공식 6mm 드롭 · 와이드 별도 품번(61250M) 유통',
  ],

  reviews: [
    {
      userType: '에디터 분석',
      rating: 88,
      text: '허리케인 26의 방향성은 명확합니다 — "무겁고 단단한 프리미엄 안정화"에서 "가볍고 부드러운 맥스쿠션 안정화"로. IncrediLux ATPU 폼은 스택을 3mm 올리면서 무게를 24g 깎았고, 해외 리뷰들은 안정화 카테고리에서 손꼽히게 가벼운 축이라고 평가합니다. 다만 반응성 평가는 갈립니다 — 활기차졌다는 쪽과 여전히 편안함 중심이라는 쪽이 공존하니, 템포 훈련까지 기대하면 실망할 수 있습니다. PWRRUN 크래들이 유지돼 과내전 지지력은 견고하지만, 전작의 잠기는 감각을 원하는 러너에겐 할인 들어간 25가 더 맞을 수 있습니다. 국내 정식가 미정으로 표기가는 $170 환산 잠정치입니다.',
    },
    {
      userType: '세대 비교 — 25보다 가볍고 자유로워졌다',
      text: '전작 25와 비교하면 가벼워지고 쿠션이 부드러워지면서 지지 감각은 다소 느슨해졌습니다. 발목이 안으로 무너지는 것은 여전히 잡아주지만, 25의 꽉 잡히는 느낌을 기준으로 삼았다면 초기에는 어색할 수 있습니다. 대신 장거리에서 발 피로가 덜해 하프 이상 위주라면 이쪽이 유리합니다. 즉 과내전 제어 강도를 최우선으로 두면 전작, 장거리 편안함을 우선하면 26입니다.',
    },
    {
      userType: '계절 적합성 — 겨울~봄 장거리 메인',
      text: '쿠션량이 많은 안정화를 찾을 때 카야노 계열과 함께 검토되는 모델입니다. 41mm의 높은 스택인데도 로커 덕에 둔하지 않고 굴러가는 성격이라, 10km 이상 거리에서 관절 부담이 줄어듭니다. 다만 어퍼가 두꺼워 한여름에는 열감이 있으므로 겨울~봄 장거리 메인으로 두고 여름은 통기성이 좋은 모델과 나누는 운용이 맞습니다. 가격대는 프리미엄 구간입니다.',
    },
  ],

  detailedSpecs: {
    weight: '262g (남성 US 9 기준) / 232g (여성 US 8)',
    stackHeight: '힐 41mm / 포어풋 35mm (공식)',
    drop: '6mm (공식)',
    midsole: 'IncrediLux (ATPU) + PWRRUN 크래들',
    plate: '없음',
    outsole: '러버 아웃솔',
    upper: '엔지니어드 메쉬 (통기성은 아쉽다는 평)',
    width: '표준 핏 · 와이드 별도 품번(남성 61250M) 유통',
    durability: '550km',
    price: '해외 정가 $170 · 국내 정식가 미정 — 표기 219,000원은 환산 잠정치',
    costPerKm: '약 ₩398/km (550km 기준, 잠정가 기준)',
    footType: '중간~심한 과내전 / 평발 장거리 러너',
    landingPattern: '힐스트라이크 중심',
  },

  similarShoes: ['saucony-hurricane-25', 'asics-gel-kayano-32', 'saucony-guide-19'],
  purchaseLinks: [{ store: '네이버', url: 'https://search.shopping.naver.com/search/all?query=써코니+허리케인+26' }],
};
