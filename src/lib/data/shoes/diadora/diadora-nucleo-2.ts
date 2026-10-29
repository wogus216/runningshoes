import type { Shoe } from '@/types/shoe';

// 2026-10-20 등록 — 출처: 디아도라 한국 공식몰(diadorakorea.com) 상품 5194·5193 판매가,
// RunRepeat 랩 리뷰(runrepeat.com/diadora-nucleo-2, 2026-04-10 갱신, 남성 US 9 시료). 점수는 랩 수치를 문서 C절 매핑에 대입.
export const shoe: Shoe = {
  id: 'diadora-nucleo-2',
  slug: 'diadora-nucleo-2',
  brand: 'Diadora',
  name: '누클레오 2',
  image: '/images/shoes/diadora/nucleo-2/side.webp',
  images: [
    '/images/shoes/diadora/nucleo-2/side.webp',
    '/images/shoes/diadora/nucleo-2/angle.webp',
    '/images/shoes/diadora/nucleo-2/top.webp',
    '/images/shoes/diadora/nucleo-2/outsole.webp',
  ],
  category: '데일리',
  rating: 4,
  status: 'new',
  price: 219000,
  description:
    '넓은 미드솔 플랫폼에 두꺼운 스택(힐 38.7mm)을 얹은 디아도라의 컴포트 데일리 트레이너. 충격흡수는 힐 132·전족부 121 SA로 높지만 반발은 50% 안팎으로 낮습니다. 디아도라 중에서는 실내 폭이 넓은 편(토박스 72.0mm)입니다. 한국 공식몰 정가 219,000원.',
  oneliner: '넓은 플랫폼의 컴포트 데일리 — 디아도라 중 앞쪽이 가장 여유',
  editorComment:
    '"편하고 안정적인 매일 신발"에 가까운 성격입니다. RunRepeat 랩에서 충격흡수가 힐 132 SA·전족부 121 SA로 높고, 전족부 미드솔 폭이 118.8mm로 넓어 RunRepeat가 "중립화로 나왔지만 가벼운 안정화로 통할 만하다"고 평가했습니다. 무게는 276g, 실측 드롭 8.0mm(공칭 5mm)로 뒤꿈치 착지 러너에게 익숙한 기하 구조입니다. Duratech 5000 아웃솔은 마모 0.7mm로 내구성이 좋습니다.\n\n약점은 반발입니다. 미드솔이 질소 주입이 아닌 일반 ANIMA(EVA)라 반발이 힐 47.8%·전족부 52.2%에 그쳤고, RunRepeat는 가격 대비 가장 낮은 축이라고 지적했습니다. 템포용이 아니라 이지런·롱런용입니다. 토박스 내구성은 RunRepeat 테스트에서 "Bad"였고, 통기성은 다소 더운 편으로 평가됐습니다.\n\n사이즈·구매 가이드: 실내 폭 97.5mm로 RunRepeat가 측정한 다른 디아도라보다 여유가 있지만, 토박스는 72.0mm(평균 73.2mm)에 "classic European tapered shape"이라 앞코가 좁아지는 형태입니다. 발볼 넓은 러너는 시착을 권합니다. 정가 219,000원은 RunRepeat가 대안으로 든 슈퍼노바 라이즈 2(159,000원)·노바블라스트 5(169,000원)보다 높습니다.',
  tags: ['데일리', '컴포트', '롱런', '넓은 플랫폼'],

  specs: {
    weight: 276,
    cushioning: 8,
    responsiveness: 6,
    stability: 8,
    drop: 8,
    durability: 600,
  },

  biomechanics: {
    stackHeight: { heel: 38.7, forefoot: 30.7 },
    drop: 8,
    carbonPlate: false,
    plateType: null,
    midsoleType: 'ANIMA (EVA)',
    optimalPace: '5:30-7:30 min/km (이지·롱런)',
  },

  injuryPrevention: {
    plantarFasciitis: 'good',
    achillesTendinopathy: 'good',
    kneeIssues: 'good',
    shinSplints: 'good',
  },

  koreanFootFit: {
    toBoxWidth: 'narrow',
    flatFootCompatibility: 'good',
    wideOptions: false,
    winterCompatibility: 'good',
    summerCompatibility: 'fair',
  },

  targetUsers: {
    recommended: [
      '안정적인 플랫폼의 편한 데일리를 찾는 중립~가벼운 과내전 러너',
      '뒤꿈치 착지 위주의 이지런·롱런 러너',
      '러닝과 일상 착용을 겸할 신발을 찾는 러너',
    ],
    notRecommended: [
      '통통 튀는 반발을 원하는 러너 (반발 47.8~52.2%)',
      '앞코가 넓은 발볼 와이드 러너 (토박스 72.0mm 테이퍼형)',
      '한여름 장거리 위주 러너 (통기성 다소 더운 편)',
    ],
  },

  features: [
    'ANIMA (EVA) 미드솔 — 충격흡수 힐 132 SA / 전족부 121 SA, 경도 17.9 HA (RunRepeat)',
    '넓은 미드솔 — 전족부 118.8mm / 힐 94.7mm',
    '힐 38.7mm / 전족부 30.7mm, 실측 드롭 8.0mm',
    'Duratech 5000 아웃솔 — 마모 0.7mm',
    '세미 거싯 텅·혀 패딩 9.9mm, 아킬레스 부담을 줄이는 연장 힐 칼라',
    '에너지 리턴 전족부 52.2% (RunRepeat 실측)',
  ],

  priceAnalysis: {
    msrp: 219000,
    costPerKm: 365,
    valueRating: 5,
    priceTier: 'premium',
    alternatives: ['adidas-supernova-rise-2', 'asics-novablast-5', 'new-balance-rebel-v5'],
    valueAdvantages: [
      '넓은 플랫폼으로 중립화 중 안정감이 높은 편 (RunRepeat 안정성 84점)',
      '아웃솔 마모 0.7mm로 내구성이 좋은 편',
      '실내 폭 97.5mm — RunRepeat가 측정한 다른 디아도라 모델보다 여유',
    ],
  },

  detailedSpecs: {
    weight: '276g (RunRepeat 실측, 남성 US 9) / 브랜드 공칭 275g',
    stackHeight: '힐 38.7mm / 전족부 30.7mm (RunRepeat 실측) — 브랜드 공칭 38/33mm',
    drop: '8.0mm (실측) — 브랜드 공칭 5mm',
    midsole: 'ANIMA (EVA, 질소 주입 아님) — 경도 17.9 HA, 반발 힐 47.8% / 전족부 52.2%',
    plate: '없음',
    outsole: 'Duratech 5000 고무, 두께 2.5mm, 마모 0.7mm',
    upper: '패딩 어퍼, 세미 거싯 텅(혀 패딩 9.9mm), 연장 힐 칼라',
    width: '좁음(앞코 테이퍼) — 실내 폭 97.5mm·토박스 폭 72.0mm·높이 25.6mm (RunRepeat, 남성 US 9). RunRepeat: "The toebox maintains its classic European tapered shape"',
    durability: '500~700km — 아웃솔 마모 0.7mm로 우수, 토박스 내구성은 RunRepeat "Bad"',
    price: '₩219,000 (2026-10-20 디아도라 한국 공식몰 확인)',
    costPerKm: '약 ₩365/km (내구성 범위 중간값 기준)',
    footType: '중립 ~ 가벼운 과내전',
    landingPattern: 'RFS (RunRepeat 표기)',
  },

  reviews: [
    {
      userType: '예상 적합 — 주 3~4회 이지런 위주의 중립 러너',
      text: '충격흡수가 힐 132 SA·전족부 121 SA로 높고 전족부 미드솔 폭이 118.8mm로 넓어, 편하게 오래 달리는 이지런·롱런에 맞는 구성입니다. 넓은 플랫폼이 착지 때 좌우 흔들림을 잡아 줘 가벼운 과내전 성향에도 무리가 적은 편입니다. 반발은 50% 안팎이라 페이스를 올리는 훈련에서는 둔하게 느껴질 가능성이 높습니다.',
    },
    {
      userType: '예상 적합 — 아킬레스건이 예민한 뒤꿈치 착지 러너',
      text: '실측 드롭 8.0mm에 힐 스택 38.7mm, 그리고 RunRepeat가 장점으로 꼽은 연장 힐 칼라 구조라 아킬레스 쪽 부담을 덜고 싶은 뒤꿈치 착지 러너에게 맞을 수 있습니다. 다만 공칭 드롭(5mm)과 실측이 3mm 차이가 나므로 저드롭을 기대하고 고르면 예상과 다를 수 있습니다. 통증 이력이 있다면 거리를 서서히 늘리며 적응 여부를 확인하는 편이 안전합니다.',
    },
    {
      userType: '예상 적합 — 아웃솔은 오래 가길 바라지만 갑피 관리에 신경 쓸 수 있는 러너',
      text: 'RunRepeat 랩에서 아웃솔 마모가 0.7mm로 랩 평균 1.1mm보다 적어 바닥 수명은 믿을 만한 편입니다. 반대로 토박스 내구성은 1/5로 편안한 소재가 내구성을 희생한 구조라, 토박스 소재가 먼저 상할 수 있습니다. 접지 계수는 0.47로 랩 평균 0.53에 못 미치고 통기성은 3/5라 더운 날에는 덥게 느껴질 수 있습니다. 276g으로 가벼운 모델은 아니라서 속도 훈련보다는 편한 이지런·롱런용으로 두는 쪽이 맞습니다.',
    },
  ],

  similarShoes: ['adidas-supernova-rise-2', 'asics-novablast-5', 'new-balance-rebel-v5'],
  purchaseLinks: [
    { store: '디아도라 공식몰', url: 'https://www.diadorakorea.com/product/detail.html?product_no=5194', price: 219000, isOfficial: true },
  ],
};
