import type { Shoe } from '@/types/shoe';

export const shoe: Shoe = {
  id: 'hoka-mach-x-3',
  slug: 'hoka-mach-x-3',
  brand: 'Hoka',
  name: '마하 X 3',
  image: '/images/shoes/hoka/machX3/side.webp',
  images: ['/images/shoes/hoka/machX3/side.webp', '/images/shoes/hoka/machX3/front.webp', '/images/shoes/hoka/machX3/top.webp', '/images/shoes/hoka/machX3/outsole.webp'],
  category: '쿠션화',
  rating: 5,
  price: 249000,
  description: '레이싱과 훈련의 경계를 넘나드는 슈퍼트레이너입니다. PEBA 폼과 Pebax 플레이트로 레이싱화 수준의 반응성을 제공하면서도 내구성이 뛰어납니다.',
  oneliner: 'PEBA+Pebax, 69.3% 전족부 에너지',
  editorComment: '마하 X 3는 264g에 PEBA+Supercritical EVA 하이브리드 폼과 Pebax 플레이트를 탑재한 슈퍼트레이너입니다. RunRepeat 실측 전족부 69.3% 에너지 리턴은 SC Trainer v3(전족부 64.5%)보다 높고, 43mm 맥시멀 스택으로 템포런/하프마라톤에 적합합니다. 24만 9천원은 로켓 X 3(29만 9천원)보다 5만원 저렴하며 훈련 겸용이 가능합니다. v2의 힐 물집 문제가 대부분 개선되어 힐스트라이커도 편하지만, 70.8mm narrow 토박스와 와이드 옵션 부재는 발볼 넓은 러너에게 큰 단점입니다.\n\n사이즈·구매 가이드: RunRepeat 측정 토박스가 70.8mm(평균 73.2mm)로 좁은 테이퍼형이고 와이드 옵션이 없어, 발볼 넓은 러너는 반드시 매장에서 시착 후 구매하세요. 정가 249,000원에 내구성 500km 기준 km당 약 498원이며, 비슷한 슈퍼트레이너 용도로 슈퍼블라스트 2나 SC Trainer V3가 대안입니다.',
  tags: ['슈퍼트레이너', 'PEBA 폼', 'Pebax 플레이트'],

  specs: {
    weight: 264,
    cushioning: 10,
    responsiveness: 8,
    stability: 7,
    drop: 10,
    durability: 500,
  },

  biomechanics: {
    stackHeight: {
      heel: 43,
      forefoot: 33,
    },
    drop: 10,
    carbonPlate: false,
    plateType: 'Pebax',
    midsoleType: 'PEBA + Supercritical EVA',
    optimalPace: '4:00-5:30 min/km',
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
    recommended: ['템포 훈련', '하프 마라톤', '빠른 롱런', '레이싱화 내구성 필요', '중상급 러너'],
    notRecommended: ['입문 러너', '느린 회복 러닝', '최대 안정성 필요'],
  },

  features: ['PEBA 폼', 'Pebax 플레이트', '레이싱급 반응성', '훈련용 내구성'],

  priceAnalysis: {
    msrp: 249000,
    streetPrice: 189200,
    costPerKm: 498,
    valueRating: 8,
    priceTier: 'high',
    alternatives: ['nike-vomero-18', 'asics-superblast-2', 'new-balance-sc-trainer-v3'],
  },

  reviews: [
    {
      userType: '에디터 분석',
      rating: 74,
      text: '레이싱화 느낌을 훈련에서 경험하고 싶은 중상급 러너를 위한 슈퍼트레이너입니다. 264g 경량에 PEBA 폼과 Pebax 플레이트 조합으로 전족부 에너지 리턴 69.3%가 뛰어나 템포런/하프마라톤에 최적입니다. 43mm 맥시멀 힐 스택과 10mm 드롭으로 무릎 보호와 힐 안정성도 확보했고, v2의 힐 물집 문제도 대부분 개선됐습니다. 24만 9천원으로 로켓 X 3(29만 9천원)보다 5만원 저렴합니다. 다만 토박스가 70.8mm로 좁아 발볼 넓은 한국 러너에게는 불편할 수 있고, 와이드 옵션도 없어 평발이나 넓은 발볼 러너는 신중하게 시착해야 합니다. SC Trainer v3(전족부 64.5%)보다 높은 전족부 에너지 리턴으로 훈련 겸용 슈퍼트레이너 중 최상급입니다.',
    },
    {
        userType: '로테이션 — 레이서와 쿠션화 사이의 템포 담당',
        text: '레이서(인터벌)와 맥시멀 쿠션화(롱런) 사이의 템포 구간을 담당하기에 맞습니다. 264g에 Pebax 플레이트로 전족부 에너지 리턴 69.3%라 4분10초~4분40초/km 구간에서 추진이 뚜렷하고, 힐 43mm 스택이라 충격 흡수도 확보됩니다. 토박스가 70.8mm로 좁고 와이드 옵션이 없어, 발볼이 넓거나 평발 성향이면 시착이 필요합니다.',
      },
    {
        userType: '예상 적합 — 하프까지 한 켤레로 겸용할 러너',
        text: '훈련과 하프 레이스를 한 켤레로 겸하려는 러너에게 맞을 가능성이 있습니다. 264g에 PEBA 폼의 전족부 에너지 리턴 69.3%로 반발을 확보하면서, 힐 43mm 스택이라 거리가 늘어도 충격이 누적되지 않는 쪽입니다. 10mm 드롭이라 힐 착지 성향에서도 부담이 적습니다. 같은 브랜드 최상위 레이서인 로켓 X 3(299,000원)과 비교하면, 249,000원·내구성 500km 기준 km당 약 498원으로 운용 비용 차이가 큽니다 — 레이스 전용이 아니라 훈련까지 소화해야 한다면 이쪽이 합리적입니다. 다만 토박스 70.8mm에 와이드 옵션이 없어 발볼이 넓다면 시착이 필요합니다.',
      },
  ],

  detailedSpecs: {
    weight: '264g (남성 US 9 기준)',
    stackHeight: '힐 43mm / 포어풋 33mm',
    drop: '9.5mm (RunRepeat 랩, US 9 기준 / 브랜드 표기 5mm)',
    midsole: 'PEBA + Supercritical EVA (하이브리드) — RunRepeat 실측: 충격흡수 힐 151 SA(평균 131 SA)·전족부 125 SA · 에너지 리턴 전족부 69.3%(평균 61.5%)·힐 58.9%',
    plate: 'Pebax 플레이트 (탄소 아님)',
    outsole: '러버 커버리지',
    upper: '엔지니어드 메쉬',
    width: '좁은 편 (와이드 없음) · 토박스 70.8mm — RunRepeat 평균 73.2mm보다 2.4mm 좁고 랩 원문 "its overly snug, tapered toebox"',
    durability: '400km',
    price: '₩249,000 (MSRP) / 세일 시 ₩230,000~',
    costPerKm: '약 ₩498/km (500km 기준)',
    footType: '좁은~보통 발볼 / 중상급 러너',
    landingPattern: '미드풋~전방 착지',
  },

  similarShoes: ['asics-superblast-2', 'nike-vomero-18', 'new-balance-sc-trainer-v3', 'puma-deviate-nitro-3'],
  purchaseLinks: [],
};
