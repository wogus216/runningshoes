import type { Shoe } from '@/types/shoe';

export const shoe: Shoe = {
  id: 'merrell-mtl-speedarc-peak',
  slug: 'merrell-mtl-speedarc-peak',
  brand: 'Merrell',
  name: 'MTL 스피드아크 피크',
  image: '/images/shoes/merrell/mtl-speedarc-peak/side.webp',
  images: [
    '/images/shoes/merrell/mtl-speedarc-peak/side.webp',
    '/images/shoes/merrell/mtl-speedarc-peak/angle.webp',
    '/images/shoes/merrell/mtl-speedarc-peak/back.webp',
    '/images/shoes/merrell/mtl-speedarc-peak/top.webp',
    '/images/shoes/merrell/mtl-speedarc-peak/outsole.webp',
  ],
  category: '트레일',
  rating: 4,
  price: 339000,
  description:
    '머렐의 카본 트레일 레이서. PEBA + FloatPro 듀얼 미드솔에 갈라진 형태의 카본 FlexPlate, Vibram Megagrip Elite 아웃솔과 Matryx 어퍼를 조합한 머렐 최상위 트레일러닝화입니다.',
  oneliner: '카본 FlexPlate + PEBA — 접지력 최상위권 트레일 레이서',
  editorComment:
    '"트레일 대회에서 기록을 노리는데 그립도 포기하기 싫다"는 러너를 위한 머렐의 카본 레이서입니다. 가장 눈에 띄는 것은 아웃솔로, Vibram Megagrip Elite의 접지력 계수가 RunRepeat 실측 1.02(트레일 평균 0.68)로 측정 당시 1.00을 넘긴 두 번째 러닝화였습니다. PEBA 상층 폼 덕에 에너지 리턴은 힐 61.9%·전족 64.1%로 같은 브랜드 어질리티 피크 6(41.9%/47.0%)보다 크게 올랐고, 전족부가 두 갈래로 갈라진 3/4 길이 카본 FlexPlate가 바위 구간에서 앞발이 노면에 맞춰 휘도록 설계됐습니다.\n\n약점은 무게와 전족부 쿠션입니다. 실측 303g으로 트레일 평균(285g)보다 무겁고, 충격흡수는 힐 135 SA로 넉넉한 반면 전족은 88 SA로 평균(122 SA)에 못 미칩니다. 실측 드롭도 10.9mm로 브랜드 표기(6mm)보다 높습니다. 통기성은 79 BR(평균 71 BR)·건조율 65%(평균 51%)로 여름 산행에 유리합니다.\n\n사이즈·구매 가이드: 실측 토박스 72.6mm(트레일 평균 74.4mm)로 RunRepeat는 앞이 좁아지는 형태라 발가락 공간이 제한적이라고 평가했습니다. 와이드 버전이 없으니 발볼이 넓다면 매장 착화가 전제입니다. 339,000원은 국내 트레일화 중 최상단 가격대라, 대회용이 아니라면 호카 테크톤 X 3나 살로몬 S/LAB 펄사 4와 무게·가격을 함께 비교해 보길 권합니다.',
  tags: ['트레일', '카본', 'PEBA', '레이싱', '비브람'],

  specs: {
    weight: 303,
    cushioning: 8,
    responsiveness: 7,
    stability: 6,
    drop: 10.9,
    durability: 450,
  },

  biomechanics: {
    stackHeight: { heel: 37.0, forefoot: 26.1 },
    drop: 10.9,
    carbonPlate: true,
    plateType: '3/4 길이 포크형 카본 (FlexPlate)',
    midsoleType: 'PEBA 상층 + 듀얼 덴시티 FloatPro 하층',
    optimalPace: '4:30-7:00 min/km (트레일 레이스·업템포)',
  },

  injuryPrevention: {
    plantarFasciitis: 'good',
    achillesTendinopathy: 'good',
    kneeIssues: 'good',
    shinSplints: 'caution',
  },

  koreanFootFit: {
    toBoxWidth: 'narrow',
    flatFootCompatibility: 'fair',
    wideOptions: false,
    winterCompatibility: 'good',
    summerCompatibility: 'excellent',
  },

  targetUsers: {
    recommended: [
      '트레일 대회에서 기록을 노리는 중·상급 러너',
      '젖은 바위·혼합 노면에서 최상위 접지력이 필요한 러너',
      '뒤꿈치 착지 위주로 힐 쿠션이 중요한 러너',
      '여름 산행이 많아 통기성·건조 속도가 중요한 러너',
    ],
    notRecommended: [
      '발볼이 넓은 러너 (토박스 72.6mm, 와이드 없음)',
      '가벼운 레이서를 원하는 러너 (303g)',
      '안정성 보조가 필요한 러너',
      '가성비를 우선하는 입문자 (339,000원)',
    ],
  },

  features: [
    'Vibram Megagrip Elite — 접지력 계수 1.02 (RunRepeat 실측, 트레일 평균 0.68)',
    '3/4 길이 포크형 카본 FlexPlate',
    'PEBA + FloatPro 듀얼 미드솔 — 에너지 리턴 61.9~64.1%',
    'Matryx(케블라 혼방) 어퍼 — 통기성 79 BR, 건조율 65%',
    'TPEE 인솔 · 반사 요소',
  ],

  priceAnalysis: {
    msrp: 339000,
    costPerKm: 753,
    valueRating: 5,
    priceTier: 'super-premium',
    alternatives: ['hoka-tecton-x-3', 'salomon-s-lab-pulsar-4', 'asics-metafuji-trail'],
    valueAdvantages: [
      '측정 기준 최상위권 아웃솔 접지력',
      '아웃솔 마모 0.8mm로 고가 레이서치고 아웃솔 수명이 긴 편',
      '통기성·건조 속도가 높아 여름 대회에 유리',
    ],
  },

  detailedSpecs: {
    weight: '303g (RunRepeat 실측, 남성 US 9) · 브랜드 공식 305g(한 짝)',
    stackHeight: '힐 37.0mm / 포어풋 26.1mm (RunRepeat 실측, 남성 US 9) · 브랜드 공식 스택 30mm',
    drop: '10.9mm (RunRepeat 실측) · 브랜드 공식 6mm',
    midsole: 'PEBA 상층 + 듀얼 덴시티 FloatPro 하층 · 경도 34.8 AC(트레일 평균 38.3 AC) · 충격흡수 힐 135/전족 88 SA',
    plate: '카본 FlexPlate (3/4 길이, 전족부 포크형) · 굽힘 저항 16.7N(평균 14.8N), 비틀림 16.9Nm(평균 15.7Nm)',
    outsole: 'Vibram Megagrip Elite · 러그 3.7mm · 접지력 계수 1.02 · 마모 0.8mm · 두께 2.5mm (RunRepeat 실측)',
    upper: 'Matryx 어퍼(케블라·고강도 폴리아미드) · 통기성 79 BR, 건조율 65% · 토박스 내구성 3/5, 힐 패딩 내구성 1/5 (RunRepeat)',
    width: '좁은 편 — RunRepeat 실측 토박스 72.6mm(남성 US 9, 트레일 평균 74.4mm), 토박스 높이 26.2mm(평균 27.0mm). 랩 본문: "This tapered shape leaves limited room for natural toe splay, making the shoe a better fit for runners with narrower feet" · 와이드 버전 없음',
    durability: '350~550km (아웃솔 마모 0.8mm 실측이나 힐 패딩 1/5, PEBA 미드솔 — RunRepeat)',
    price: '₩339,000 (머렐 한국 공식몰 정가)',
    costPerKm: '약 ₩753/km (450km 기준)',
    footType: '중립 발',
    landingPattern: 'RFS (뒤꿈치 착지)',
  },

  reviews: [
    {
      userType: '예상 적합 — 기록을 노리는 트레일 레이스',
      text: '트레일 대회에서 평지·완만한 오르막 구간의 속도를 끌어올리고 싶다면 맞는 구성입니다. PEBA 폼으로 에너지 리턴이 61.9~64.1%까지 올라왔고, 갈라진 카본 플레이트가 추진력을 보태면서도 바위 위에서 앞발이 노면에 맞춰 휘도록 설계됐습니다. 접지력 계수 1.02는 측정 기준 최상위권이라 젖은 바위 내리막에서도 과감하게 디딜 수 있는 조건입니다. 다만 303g으로 경쟁 카본 트레일화보다 무거워, 가벼움이 우선이라면 다른 선택지가 낫습니다.',
    },
    {
      userType: '예상 적합 — 발볼이 넓은 러너는 조건부',
      text: '실측 토박스가 72.6mm로 트레일 평균(74.4mm)보다 좁고 앞으로 갈수록 좁아지는 형태라, 발볼이 넓은 러너는 장거리 후반에 발가락이 눌릴 수 있습니다. 와이드 버전이 없고 가격이 339,000원으로 높은 만큼 매장에서 착화해 보고 고르는 편이 안전합니다. 발볼이 보통 이하라면 힐 쪽이 넓고 발 잠금이 안정적이라 기술 구간에서 신발이 헛돌지 않는 편입니다.',
    },
    {
      userType: '예상 적합 — 여름 산악 대회·장시간 산행',
      text: 'Matryx 어퍼의 통기성이 79 BR(트레일 평균 71 BR), 건조율이 65%(평균 51%)로 높아, 땀이 많이 나는 여름 산행이나 계곡을 건너는 코스에서 신발 안이 빨리 마르는 조건입니다. 힐 충격흡수가 135 SA로 넉넉해 뒤꿈치로 내려딛는 내리막에 유리하지만, 전족부는 88 SA로 얇아 앞발 착지가 많은 오르막 위주 러너는 장거리에서 앞발 피로를 느낄 수 있습니다.',
    },
  ],

  similarShoes: ['hoka-tecton-x-3', 'salomon-s-lab-pulsar-4', 'asics-metafuji-trail'],
};
