import type { Shoe } from '@/types/shoe';

export const shoe: Shoe = {
  id: 'hoka-gaviota-6',
  slug: 'hoka-gaviota-6',
  brand: 'Hoka',
  name: '가비오타 6',
  image: '/images/shoes/hoka/gaviota6/side.webp',
  images: ['/images/shoes/hoka/gaviota6/side.webp', '/images/shoes/hoka/gaviota6/front.webp', '/images/shoes/hoka/gaviota6/top.webp', '/images/shoes/hoka/gaviota6/outsole.webp'],
  category: '안정화',
  rating: 4,
  price: 239000,
  description: '호카의 프리미엄 안정화로, 과내전 러너를 위한 H-Frame 구조를 탑재했습니다. 안정성과 쿠셔닝을 동시에 제공합니다.',
  oneliner: 'H-Frame 최강 안정, 76.7mm 넓은 토박스',
  editorComment: '가비오타 6는 283g으로 무거운 편이지만 안정성(10/10) 최상위급 H-Frame 구조로 심한 과내전 러너를 위한 신발입니다. 듀얼 폼 시스템이 발목을 확실히 잡아주며, 드롭은 RunRepeat 측정 7.3mm입니다. 단, 23만 9천원 프리미엄 가격은 아드레날린 GTS 25(18만 9천원)보다 5만원 비싸고, 정상 발 러너에게는 과도한 안정성으로 오히려 불편할 수 있습니다. wide 토박스(RunRepeat 76.7mm, 평균 73.2mm)와 와이드 옵션으로 발볼 넓은 평발 러너에게는 편안하지만, 가격 대비 가성비는 아쉽습니다.\n\n사이즈·구매 가이드: 토박스가 wide 폭으로 발볼 넓은 한국 러너에게도 여유롭고, 와이드 옵션도 제공됩니다. 정가 239,000원에 예상 수명 500~700km(추정) 기준 km당 약 340~480원이며, 예산을 줄이고 싶다면 같은 안정화 계열의 젤 카야노 32나 아드레날린 GTS 25가 대안입니다.',
  tags: ['안정화', '과내전 교정', 'H-Frame'],

  specs: {
    weight: 283,
    cushioning: 8,
    responsiveness: 6,
    stability: 10,
    drop: 7,
    durability: 600, // 2026-10-23: detailedSpecs.durability 표기(600km)에 맞춤 — 종전 500
  },

  biomechanics: {
    stackHeight: {
      heel: 36,
      forefoot: 29,
    },
    drop: 7,
    carbonPlate: false,
    plateType: null,
    midsoleType: 'EVA (Dual Foam System)',
    optimalPace: '5:30-7:00 min/km',
  },

  injuryPrevention: {
    plantarFasciitis: 'excellent',
    achillesTendinopathy: 'good',
    kneeIssues: 'excellent',
    shinSplints: 'excellent',
  },

  koreanFootFit: {
    toBoxWidth: 'wide',
    flatFootCompatibility: 'excellent',
    wideOptions: true,
    winterCompatibility: 'good',
    summerCompatibility: 'fair',
  },

  targetUsers: {
    recommended: ['과내전 러너', '평발 러너', '안정성 최우선', '무릎/발목 보호 필요', '장거리 안정화 필요'],
    notRecommended: ['빠른 페이스 훈련', '가벼운 신발 선호', '정상 발 러너'],
  },

  features: ['H-Frame 안정화 구조', '넓은 토박스 (76.7mm)', '듀얼 폼 시스템', '넓은 베이스', '충격흡수 힐 122 SA (RunRepeat 실측)', '에너지 리턴 전족부 52.4% (RunRepeat 실측)'],

  priceAnalysis: {
    msrp: 239000,
    streetPrice: 229000,
    costPerKm: 398,
    valueRating: 7,
    priceTier: 'high',
    alternatives: ['asics-gel-kayano-32', 'brooks-adrenaline-gts-25', 'new-balance-860-v14'],
  },

  reviews: [
    {
      userType: '에디터 분석',
      rating: 80,
      text: '안정성(10/10) 최상위급 H-Frame 구조로 심한 과내전 러너를 위한 프리미엄 안정화입니다. 듀얼 폼 시스템이 발목을 확실히 잡아줍니다. 283g 무게에 RunRepeat 측정 힐 36.0mm/전족부 28.7mm 스택(드롭 7.3mm)입니다. 23만 9천원은 아드레날린 GTS 25(18만 9천원)보다 5만원 비싸 가성비는 아쉽지만, RunRepeat 측정 토박스 76.7mm의 넓은 핏과 와이드 옵션으로 발볼 넓은 한국 러너에게는 맞춤형 선택지입니다. 평발 러너에게 H-Frame의 아치 서포트가 탁월하며, 무릎/발목 보호가 필요한 과내전 러너에게 최고의 안정화입니다. 다만 낮은 반발력(5/10)으로 빠른 페이스에서는 답답하고, 6:30/km 이상의 편안한 조깅에서 진가를 발휘합니다.',
    },
    {
        userType: '예상 적합 — 과내전이 강한 장거리 러너',
        text: '과내전이 강하게 나오는 경우를 겨냥한 최상위 지지 모델입니다. H-Frame이 발 안쪽과 바깥쪽을 함께 받쳐 안쪽으로 무너지는 움직임을 막는 구조라, 20km급 장거리 후반에도 지지가 유지되는 편입니다. RunRepeat 측정 힐 36.0mm 스택에 드롭 7.3mm 조합입니다. 토박스가 76.7mm로 넓고 와이드 옵션도 있어 발볼 넓은 경우에 유리합니다. 283g으로 무거운 편이라 속도 훈련에는 맞지 않습니다. 과내전 정도의 판단과 인솔 필요 여부는 전문의 진단이 우선입니다.',
      },
    {
        userType: '모델 선택 — 가비오타 6 vs 카야노 32 vs 아라히 8',
        text: '평발에 체중이 실린 조건에서 안정화 세 모델을 비교하면 축이 분명합니다. 지지력만 보면 가비오타의 H-Frame이 가장 확실합니다. 힐 36.0mm 스택에 토박스 76.7mm(RunRepeat), 와이드 옵션까지 있어 발볼 조건도 해결됩니다. 대신 283g으로 무거운 편이고 반발이 거의 없어 6분30초/km 이하로 내려가면 답답해집니다. 속도를 조금이라도 원하면 259g의 아라히 8이, 지지와 쿠션의 균형을 원하면 카야노 계열이 맞습니다. 정가는 239,000원입니다.',
      },
  ],

  detailedSpecs: {
    weight: '283g (RunRepeat 랩, US 9 기준)',
    stackHeight: '힐 36.0mm / 포어풋 28.7mm (RunRepeat 랩, US 9 기준 / 브랜드 표기 39/33mm)',
    drop: '7.3mm (RunRepeat 랩, US 9 기준 / 브랜드 표기 6mm)',
    midsole: 'EVA 듀얼 폼 시스템',
    plate: '없음 (H-Frame 안정화)',
    outsole: '듀라브레이드 러버',
    upper: '엔지니어드 메쉬',
    width: '넓은 편 / 와이드 · 토박스 76.7mm — RunRepeat 평균 73.2mm보다 3.5mm 넓음, 랩 원문 "the fit felt noticeably roomy"',
    durability: '600km',
    price: '₩239,000 (MSRP) / 세일 시 ₩170,000~',
    costPerKm: '약 ₩398/km (600km 기준)',
    footType: '평발 / 과내전 러너 / 와이드 옵션 있음',
    landingPattern: '힐스트라이크~미드풋 (H-Frame 안정화)',
  },

  similarShoes: ['asics-gel-kayano-33', 'brooks-adrenaline-gts-25', 'saucony-hurricane-25'],
  purchaseLinks: [{ store: '네이버', url: 'https://brand.naver.com/hoka/products/12839097291' }],
};
