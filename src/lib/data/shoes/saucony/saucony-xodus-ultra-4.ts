import type { Shoe } from '@/types/shoe';

export const shoe: Shoe = {
  id: 'saucony-xodus-ultra-4',
  slug: 'saucony-xodus-ultra-4',
  brand: 'Saucony',
  name: '엑소더스 울트라 4',
  image: '/images/shoes/saucony/xodusultra4/side.jpg',
  images: ['/images/shoes/saucony/xodusultra4/side.jpg'],
  category: '트레일',
  rating: 4.4,
  status: 'new',
  price: 219000,
  description:
    '써코니 트레일의 울트라 거리용 상위 모델. PWRRUN PB 슈퍼폼을 전작보다 8% 늘리고 그 둘레를 PWRRUN 프레임으로 감싸, 푹신하면서도 흔들리지 않는 맥스쿠션 트레일화입니다.',
  oneliner: 'PWRRUN PB 8% 증량 + 풀커버 Vibram — 울트라 거리용 맥스쿠션',
  editorComment:
    '페레그린 16이 "민첩한 표준 트레일"이라면 엑소더스 울트라 4는 "오래 버티는 쪽"입니다. 스택 36/30mm로 페레그린(32/28mm)보다 두껍고, 미드솔 구성 자체가 다릅니다 — 페레그린이 PWRRUN 한 겹인 반면 이쪽은 PWRRUN PB 슈퍼폼을 코어에 쓰고 그 둘레를 단단한 PWRRUN 프레임으로 둘러 부드러움과 안정성을 동시에 잡았습니다. 전작 대비 PWRRUN PB를 8% 늘려 반발이 조금 살아났다는 평가가 많습니다.\n\n다만 "빠른 트레일화"는 아닙니다. 카본 레이서 같은 튐은 없고, 309g이라는 무게도 가볍지 않습니다. 아웃솔이 풀커버 Vibram Megagrip으로 바뀌면서 접지는 확실해졌지만 그만큼 무게가 늘었다는 지적이 함께 나옵니다. 즉 기록보다 "50km 이상을 발이 덜 아프게 완주하는 것"이 목적인 신발입니다.\n\n사이즈·구매 가이드: 드롭 6mm로 페레그린 16(4mm)보다 2mm 높아 로드화에서 넘어오기가 조금 수월합니다. 국내 정가 219,000원이며 2026-08-15 기준 할인이 없습니다 — 같은 시점에 페레그린 16이 20% 할인된 143,200원이라 실질 가격차가 7만 원대로 벌어져 있으니, 거리가 30km 이하라면 페레그린 쪽이 합리적입니다.',
  tags: ['트레일', '울트라', '맥스쿠션', '비브람'],

  specs: {
    weight: 309,
    cushioning: 9,
    responsiveness: 6,
    stability: 7,
    drop: 6,
    durability: 700,
  },

  biomechanics: {
    stackHeight: { heel: 36, forefoot: 30 },
    drop: 6,
    carbonPlate: false,
    plateType: null,
    midsoleType: 'PWRRUN PB (전작 대비 8% 증량) + PWRRUN 프레임 + PWRRUN+ 삭스라이너',
    optimalPace: '6:00-9:00 min/km (트레일 기준)',
  },

  injuryPrevention: {
    plantarFasciitis: 'excellent',
    achillesTendinopathy: 'good',
    kneeIssues: 'excellent',
    shinSplints: 'good',
  },

  koreanFootFit: {
    toBoxWidth: 'standard',
    flatFootCompatibility: 'good',
    wideOptions: false,
    winterCompatibility: 'excellent',
    summerCompatibility: 'fair',
  },

  priceAnalysis: {
    msrp: 219000,
    streetPrice: 219000,
    costPerKm: 313,
    valueRating: 7,
    priceTier: 'premium',
    alternatives: ['saucony-peregrine-16', 'hoka-speedgoat-7', 'salomon-ultra-glide-4'],
    valueAdvantages: [
      'PWRRUN PB 슈퍼폼을 트레일화에 코어로 사용 — 울트라 거리 피로 경감',
      'PWRRUN 프레임이 슈퍼폼 둘레를 감싸 높은 스택에서도 흔들림 억제',
      '풀커버 Vibram Megagrip + 4mm 트랙션 러그',
      '내구성 700km — 트레일화 중 상위권',
    ],
  },

  targetUsers: {
    recommended: [
      '50km 이상 울트라 트레일을 준비하는 러너',
      '장시간 산행·트레일에서 발 피로가 누적되는 러너',
      '기술적 지형과 장거리를 함께 커버할 한 켤레를 찾는 러너',
      '높은 스택에서도 안정감을 원하는 트레일 러너',
    ],
    notRecommended: [
      '30km 이하 위주 러너 (페레그린 16이 가볍고 저렴)',
      '가벼운 트레일화를 원하는 러너 (309g)',
      '빠른 페이스의 트레일 레이스를 노리는 러너',
      '발볼이 넓은 러너 (국내 와이드 옵션 없음)',
    ],
  },

  features: [
    'PWRRUN PB 슈퍼폼을 전작 대비 8% 증량 — 반발과 쿠션 모두 상승',
    'PWRRUN 프레임이 코어를 둘러싸 높은 스택의 흔들림 억제',
    '풀커버 Vibram Megagrip + 4mm 트랙션 러그',
    'PWRRUN+ 삭스라이너 추가',
    '스택 36/30mm · 드롭 6mm · 309g · 국내 219,000원',
  ],

  reviews: [
    {
      userType: '에디터 분석',
      rating: 86,
      text: '엑소더스 울트라 4의 설계 의도는 "슈퍼폼을 트레일에서 쓰되 흔들리지 않게"입니다. PWRRUN PB는 원래 엔돌핀 라인의 레이싱 폼인데, 트레일에서 이걸 그대로 쓰면 불규칙한 노면에서 발이 흔들립니다. 그래서 코어에만 PB를 넣고 둘레를 단단한 PWRRUN 프레임으로 감쌌습니다. 결과적으로 36/30mm 스택에서도 안정감이 유지되고, 울트라 거리에서 발 피로가 확실히 덜합니다. 대가는 무게입니다 — 309g은 가볍지 않고, 풀커버 Vibram으로 바뀌며 더 늘었다는 지적이 여러 리뷰에서 공통으로 나옵니다. 카본 레이서 같은 튐을 기대하면 실망하지만, 애초에 그 목적의 신발이 아닙니다.',
    },
    {
      userType: '페레그린 16과 비교 — 거리와 가격으로 갈린다',
      text: '써코니 트레일 두 갈래의 기준은 거리입니다. 페레그린 16은 32/28mm·269g·드롭 4mm로 낮고 민첩하며, 엑소더스 울트라 4는 36/30mm·309g·드롭 6mm로 두껍고 무겁습니다. 40g 차이는 장시간에서 체감되지만, 반대로 50km 이상에서는 스택 4mm 차이가 후반 충격 누적을 크게 좌우합니다. 가격도 변수입니다 — 2026-08-15 기준 페레그린 16은 전량 20% 할인된 143,200원, 엑소더스 울트라 4는 219,000원 정가라 실질 차이가 7만 원대입니다. 30km 이하가 주력이면 페레그린, 그 이상이면 엑소더스로 보는 게 단순하고 정확합니다.',
    },
    {
      userType: '드롭 관점 — 로드 러너의 트레일 입문에 유리한 편',
      text: '트레일화는 낮은 드롭이 흔한데, 엑소더스 울트라 4는 6mm로 페레그린 16(4mm)보다 2mm 높습니다. 로드 데일리가 보통 8~10mm인 것을 감안하면 넘어올 때 종아리 부담이 덜한 쪽입니다. 스택도 36/30mm로 로드 데일리와 비슷한 두께라 발밑 감각의 이질감이 작습니다. 다만 러그가 4mm로 깊어 아스팔트에서는 빨리 닳고 접지감도 어색하니, 산 위주로 쓰는 신발로 두는 편이 낫습니다. 내구성은 700km로 트레일화 중 긴 편입니다.',
    },
  ],

  detailedSpecs: {
    weight: '309g (남성 US 9, 브랜드 공식) — RunRepeat 실측 312g',
    stackHeight: '힐 36mm / 포어풋 30mm (브랜드 공식) — RunRepeat 실측 37.6/31.1mm',
    drop: '6mm (브랜드 공식) — RunRepeat 실측 6.5mm',
    midsole: 'PWRRUN PB(코어, 전작 대비 8% 증량) + PWRRUN 프레임 + PWRRUN+ 삭스라이너',
    plate: '없음',
    outsole: '풀커버 Vibram Megagrip + 4mm 트랙션 러그',
    upper: '트레일용 메쉬',
    width: '표준 · 국내 와이드 옵션 없음',
    durability: '700km+',
    price: '219,000원 (2026-08-15 써코니코리아 공식몰 확인, 할인 없음)',
    costPerKm: '약 ₩313/km (700km 기준)',
    footType: '중립 / 트레일·울트라',
    landingPattern: '미드풋~힐스트라이크',
  },

  similarShoes: ['saucony-peregrine-16', 'hoka-speedgoat-7', 'salomon-ultra-glide-4'],
  purchaseLinks: [{ store: '네이버', url: 'https://search.shopping.naver.com/search/all?query=써코니+엑소더스+울트라+4' }],
};
