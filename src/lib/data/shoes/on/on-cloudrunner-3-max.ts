import type { Shoe } from '@/types/shoe';

export const shoe: Shoe = {
  id: 'on-cloudrunner-3-max',
  slug: 'on-cloudrunner-3-max',
  brand: 'On',
  name: '클라우드러너 3 맥스',
  image: '/images/shoes/on/cloudrunner3/side.webp',
  category: '안정화',
  rating: 4.4,
  status: 'new',
  price: 219000,
  description:
    'On이 `서포트: 안정성 있는`으로 분류하는 안정화 라인의 쿠션 강화판. 클라우드러너 3와 같은 지지 구조(힐 클립·넓은 베이스·높은 사이드월)에 Helion™ HF 하이퍼폼을 얹어 쿠셔닝 등급을 한 단계 올렸습니다.',
  oneliner: 'Helion™ HF 이중 미드솔 — 안정화에 쿠션을 더한 버전',
  editorComment:
    '온러닝 안정화를 찾을 때 클라우드러너 3만 보고 결정하면 이 모델을 놓칩니다. On 공식 분류상 `서포트: 안정성 있는`인 로드 러닝화는 클라우드러너 3 계열(3·3 맥스·3 방수)과 클라우드붐 맥스뿐인데, 그중 3 맥스가 쿠션이 가장 두껍습니다.\n\n기본형과의 차이는 폼입니다. 클라우드러너 3가 Helion™ 단일이라면 3 맥스는 상단에 Helion™ HF 하이퍼폼을 풀렝스로 깔고 하단을 Helion™으로 받칩니다. 공식 등급도 쿠셔닝이 "중간"에서 "높음"으로 올라갑니다. 대가는 무게로, 311g에서 330g이 됩니다(On 한국 공식몰 표기 기준).\n\n주의할 점은 무게 표기가 출처마다 갈린다는 것입니다. On 한국 공식몰은 330g인데 해외 리테일러는 306g으로 싣습니다 — 사이즈 기준 차이로 보이니 다른 모델과 비교할 때는 같은 출처끼리 맞춰 보세요.\n\n사이즈·구매 가이드: 핏은 "레귤러, 정사이즈"가 공식 안내입니다. 다만 국내에 와이드 옵션이 없어(미국에는 클라우드러너 3 Wide가 있습니다) 발볼이 넓다면 매장 착화가 사실상 필수입니다. 정가 219,000원으로 기본형보다 2만 원 비싸고, 장거리를 자주 뛰거나 체중 부담이 있다면 그 값을 합니다.',
  tags: ['안정화', '맥스쿠션', '과내전', '데일리'],

  specs: {
    weight: 330,
    cushioning: 8,
    responsiveness: 6,
    stability: 8,
    drop: 8,
    durability: 600,
  },

  biomechanics: {
    stackHeight: { heel: 38, forefoot: 30 },
    drop: 8,
    carbonPlate: false,
    plateType: null,
    midsoleType: 'Helion™ HF 하이퍼폼(상단) + Helion™(하단) + CloudTec®',
    optimalPace: '5:30-8:00 min/km',
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
    winterCompatibility: 'good',
    summerCompatibility: 'fair',
  },

  priceAnalysis: {
    msrp: 219000,
    streetPrice: 219000,
    costPerKm: 365,
    valueRating: 7,
    priceTier: 'premium',
    alternatives: ['on-cloudrunner-3', 'saucony-guide-19', 'asics-gel-kayano-33'],
    valueAdvantages: [
      'On 공식 `서포트: 안정성 있는` 4개 모델 중 쿠션이 가장 두꺼움',
      'Helion™ HF 하이퍼폼을 안정화 라인에 적용',
      '기본형과 동일한 지지 구조(힐 클립·넓은 베이스·높은 사이드월)',
      '기본형 대비 2만 원 차이로 쿠셔닝 등급 상승(중간→높음)',
    ],
  },

  targetUsers: {
    recommended: [
      '지지력과 두꺼운 쿠션을 함께 원하는 러너',
      '클라우드러너 3가 단단하게 느껴졌던 러너',
      '장거리·장시간 착용이 많은 과내전 러너',
      '체중 부담이 있어 충격 흡수가 중요한 러너',
    ],
    notRecommended: [
      '가벼운 신발을 원하는 러너 (330g)',
      '발볼이 넓은 러너 (국내 와이드 옵션 없음)',
      '중립 러너 (불필요한 지지)',
      '템포·스피드 훈련용을 찾는 러너',
    ],
  },

  features: [
    'On 공식 분류 `서포트: 안정성 있는` · 쿠셔닝 등급 "높음"',
    'Helion™ HF 하이퍼폼(상단) + Helion™(하단) 이중 미드솔',
    '힐 클립·넓어진 베이스·높은 사이드월로 지지(포스트 방식 아님)',
    '드롭 8mm — 기본형 클라우드러너 3와 동일',
    '국내 219,000원 · 와이드 옵션 없음 · 핏은 "레귤러, 정사이즈"',
  ],

  reviews: [
    {
      userType: '에디터 분석',
      rating: 85,
      text: '클라우드러너 3 맥스의 자리는 명확합니다 — "온러닝 안정화가 필요한데 기본형은 좀 단단하다"는 러너용입니다. 지지 방식은 기본형과 같아서 미드솔 포스트로 안쪽을 억지로 받치지 않고, 힐 클립과 넓은 베이스로 발이 가운데를 지나게 유도합니다. 달라진 건 폼으로, Helion™ HF 하이퍼폼이 상단에 풀렝스로 들어가 쿠셔닝 등급이 공식 기준 "중간"에서 "높음"으로 올라갑니다. 330g은 가볍지 않지만 이 카테고리에서는 예상 범위입니다. 스택 38/30mm(제3자 실측)로 기본형(31/23mm)보다 7mm 두껍습니다.',
    },
    {
      userType: '클라우드러너 3와 비교 — 2만 원으로 쿠션 한 단계',
      text: '두 모델은 지지 구조가 같고 드롭도 8mm로 동일합니다. 갈리는 건 폼과 무게입니다 — 기본형이 Helion™ 단일에 311g, 맥스가 Helion™ HF + Helion™ 이중에 330g입니다(On 한국 공식몰 표기). 19g 차이로 쿠셔닝 등급이 한 단계 올라가는 셈입니다. 가격은 199,000원 vs 219,000원. 데일리 조깅 위주에 가볍고 단단한 감각이 좋으면 기본형, 장거리가 많거나 발이 쉽게 피로하면 맥스가 맞습니다. 참고로 무게 표기는 출처마다 갈려 해외에서는 306g으로도 표기됩니다.',
    },
    {
      userType: '발볼 관점 — 국내 유통의 한계',
      text: '온러닝 안정화를 고를 때 실질적인 걸림돌은 발볼입니다. 2026년 8월 기준 On 한국 공식몰의 와이드 러닝화 카테고리는 0개인데, 미국 사이트에는 클라우드러너 3 Wide가 있습니다. 즉 모델은 존재하는데 국내에 안 들어옵니다. 3 맥스도 와이드가 없어, 지지력이 필요하면서 발볼도 넓다면 국내에서는 다른 브랜드(써코니·뉴발란스 등 와이드를 정식 운영하는 쪽)를 함께 보는 편이 현실적입니다. 공식 핏 안내는 "레귤러, 정사이즈"입니다.',
    },
  ],

  detailedSpecs: {
    weight: '330g (On 한국 공식몰 표기, 남성) — 해외 리테일러는 306g으로 표기',
    stackHeight: '힐 38mm / 포어풋 30mm (제3자 실측 — On 공식몰에는 스택 항목이 없습니다)',
    drop: '8mm (On 공식몰 표기)',
    midsole: 'Helion™ HF 하이퍼폼(상단 풀렝스) + Helion™(하단) + CloudTec®',
    plate: '없음',
    outsole: '고무 아웃솔',
    upper: '통기성 메쉬',
    width: '레귤러(정사이즈) · 국내 와이드 옵션 없음',
    durability: '600km+',
    price: '219,000원 (2026-08-15 On 한국 공식몰 확인)',
    costPerKm: '약 ₩365/km (600km 기준)',
    footType: '과내전(과회내전) / 평발',
    landingPattern: '힐스트라이크 중심',
  },

  similarShoes: ['on-cloudrunner-3', 'saucony-guide-19', 'on-cloudsurfer-max'],
  purchaseLinks: [{ store: '네이버', url: 'https://search.shopping.naver.com/search/all?query=온러닝+클라우드러너+3+맥스' }],
};
