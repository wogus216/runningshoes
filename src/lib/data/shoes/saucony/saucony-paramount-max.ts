import type { Shoe } from '@/types/shoe';

export const shoe: Shoe = {
  id: 'saucony-paramount-max',
  slug: 'saucony-paramount-max',
  brand: 'Saucony',
  name: '파라마운트 맥스',
  image: '/images/shoes/saucony/paramountmax/side.jpg',
  images: ['/images/shoes/saucony/paramountmax/side.jpg'],
  category: '쿠션화',
  rating: 4.4,
  status: 'new',
  price: 259000,
  description:
    '써코니가 "브랜드 역사상 가장 풍부한 쿠셔닝"으로 소개한 2026년 신작. 엔돌핀 엘리트 계열의 incrediRUN 폼을 데일리용으로 조정해 풀렝스로 깔고, 넓은 베이스와 높은 사이드월로 안정감을 더했습니다.',
  oneliner: 'incrediRUN 풀렝스 — 브랜드 최고 쿠션, 대신 302g',
  editorComment:
    '파라마운트 맥스는 써코니가 "가장 풍부한 쿠셔닝"이라는 표현을 직접 쓴 모델입니다. 엔돌핀 엘리트에 들어가던 incrediRUN을 데일리용으로 살짝 단단하고 내구성 있게 조정해 미드솔 전체에 깔았고, 인솔에도 같은 폼을 썼습니다. 스택 43/37mm에 드롭 6mm라 앞뒤가 모두 두툼한 구성입니다.\n\n대가는 무게입니다. 302g은 써코니 로드 라인에서 가장 무겁고, 트라이엄프 24(250g)보다 52g 무겁습니다. 가격도 259,000원으로 트라이엄프 24보다 5만 원 위입니다. 즉 "제일 푹신한 걸 하나만"이라는 질문의 답은 수치상 최대 스택인 트라이엄프 24(힐 43mm·250g)와 브랜드 공식 최고 쿠션인 파라마운트 맥스로 갈립니다 — 전자는 가볍고 후자는 두툼합니다.\n\n사이즈·구매 가이드: 넓은 플랫폼과 높아진 사이드월 덕에 맥스쿠션치고는 안정적인 축입니다. 다만 아웃솔 마모가 이르다는 지적과 페이스 다양성이 낮다는 지적이 함께 나옵니다 — 회복주·장거리 전용으로 두는 운용이 맞습니다. 국내 공식몰 유통은 4개 컬러웨이이고 2026-08-15 기준 할인은 없습니다.',
  tags: ['쿠션화', '맥스쿠션', 'incrediRUN', '회복주'],

  specs: {
    weight: 302,
    cushioning: 10,
    responsiveness: 7,
    stability: 6,
    drop: 6,
    durability: 550,
  },

  biomechanics: {
    stackHeight: { heel: 43, forefoot: 37 },
    drop: 6,
    carbonPlate: false,
    plateType: null,
    midsoleType: 'incrediRUN 풀렝스 (데일리 튜닝) + incrediRUN 인솔',
    optimalPace: '5:30-8:00 min/km',
  },

  injuryPrevention: {
    plantarFasciitis: 'excellent',
    achillesTendinopathy: 'good',
    kneeIssues: 'excellent',
    shinSplints: 'excellent',
  },

  koreanFootFit: {
    toBoxWidth: 'wide',
    flatFootCompatibility: 'good',
    wideOptions: false,
    winterCompatibility: 'good',
    summerCompatibility: 'fair',
  },

  priceAnalysis: {
    msrp: 259000,
    streetPrice: 259000,
    costPerKm: 471,
    valueRating: 6,
    priceTier: 'premium',
    alternatives: ['saucony-triumph-24', 'saucony-hurricane-26', 'saucony-endorphin-trainer'],
    valueAdvantages: [
      '브랜드가 "역사상 가장 풍부한 쿠셔닝"으로 포지셔닝한 최상급',
      '엔돌핀 엘리트 계열 incrediRUN을 데일리용으로 조정해 풀렝스 적용',
      '전족 37mm — 써코니 로드 라인 중 앞쪽이 가장 두꺼움',
      '넓은 플랫폼 + 높은 사이드월로 맥스쿠션치고 안정적',
    ],
  },

  targetUsers: {
    recommended: [
      '회복주·장거리 전용 쿠션화를 찾는 러너',
      '무릎·정강이 부담이 커 최대 쿠션이 필요한 러너',
      '2시간 이상 장시간 러닝을 자주 하는 러너',
      '토박스가 넉넉한 편을 선호하는 러너',
    ],
    notRecommended: [
      '가벼운 신발을 원하는 러너 (302g — 써코니 로드 최중량)',
      '템포·스피드 훈련까지 겸하려는 러너 (페이스 다양성 낮음)',
      '아웃솔 내구성을 중시하는 러너 (조기 마모 지적 있음)',
      '가성비 우선 러너 (259,000원, 할인 없음)',
    ],
  },

  features: [
    '써코니 공식 "브랜드 역사상 가장 풍부한 쿠셔닝"',
    'incrediRUN 풀렝스 미드솔 + incrediRUN 인솔 — 엘리트 계열 폼의 데일리 튜닝',
    '스택 43/37mm · 드롭 6mm — 전족부가 특히 두꺼움',
    '넓은 베이스 + 높은 사이드월 + 분할 설계 미드솔로 착지 안정',
    '302g — 써코니 로드 라인 최중량 · 국내 259,000원',
  ],

  reviews: [
    {
      userType: '에디터 분석',
      rating: 85,
      text: 'incrediRUN을 데일리로 내린 것이 이 모델의 정체성입니다. 엔돌핀 엘리트에서 쓰던 폼을 조금 단단하고 내구성 있게 조정해 미드솔 전체에 깔았고, 인솔까지 같은 폼입니다. 부드러우면서 튀는 성격이라 회복주와 장거리에서 강점이 뚜렷합니다. 다만 302g은 확실한 대가입니다 — 트라이엄프 24보다 52g 무겁고, 이 무게는 페이스를 올릴수록 불리하게 작용합니다. 넓은 플랫폼과 높은 사이드월 덕에 맥스쿠션치고 흔들림이 적다는 평가는 일관됩니다. 아웃솔이 이르게 닳는다는 지적이 여러 리뷰에서 공통으로 나오니, 아스팔트 위주라면 감안하세요.',
    },
    {
      userType: '트라이엄프 24와 비교 — 최고 쿠션의 정의가 다르다',
      text: '"써코니에서 제일 푹신한 것"의 답이 둘로 갈립니다. 힐 스택은 43mm로 같지만 전족부가 파라마운트 맥스 37mm, 트라이엄프 24 33mm로 4mm 차이입니다. 드롭도 6mm vs 10mm로 반대 성격이고, 무게는 302g vs 250g으로 52g 벌어집니다. 가격은 259,000원 vs 209,000원. 정리하면 파라마운트 맥스는 "앞뒤 모두 두툼하고 무거운 쪽", 트라이엄프 24는 "뒤꿈치가 높고 가벼운 쪽"입니다. 뒤꿈치 착지 습관이 강하고 가벼운 걸 원하면 트라이엄프, 발 전체로 착지하며 최대한의 발밑 두께를 원하면 파라마운트 맥스입니다.',
    },
    {
      userType: '운용 조언 — 회복주 전용으로 두는 편이 낫다',
      text: '리뷰들이 공통으로 지적하는 약점이 페이스 다양성입니다. 부드러운 폼과 302g 무게 조합이라 조깅·회복주·장거리에서는 만족도가 높지만, 페이스를 올리면 폼이 눌리기만 하고 되받아주지 않습니다. 즉 한 켤레로 모든 훈련을 커버하려는 러너에게는 맞지 않고, 빠른 날은 엔돌핀 스피드 5나 트레이너를 따로 두는 2켤레 운용이 자연스럽습니다. 550km 기준 km당 약 471원으로 운용 비용은 높은 편이며, 아웃솔 조기 마모 지적을 감안하면 실제 수명은 더 짧을 수 있습니다.',
    },
  ],

  detailedSpecs: {
    weight: '302g (남성 US 9) / 250g (여성 US 8) — 브랜드 공식',
    stackHeight: '힐 43mm / 포어풋 37mm (브랜드 공식)',
    drop: '6mm (브랜드 공식)',
    midsole: 'incrediRUN 풀렝스 (데일리 튜닝 — 엘리트 계열 대비 약간 단단) + incrediRUN 인솔',
    plate: '없음',
    outsole: '러버 (조기 마모 지적 있음)',
    upper: '엔지니어드 메쉬 + 몰드형 힐컵',
    width: '표준 (넉넉한 편) · 국내 와이드 옵션 없음',
    durability: '550km (아웃솔 마모 감안 시 더 짧을 수 있음)',
    price: '259,000원 (2026-08-15 써코니코리아 공식몰 확인, 할인 없음)',
    costPerKm: '약 ₩471/km (550km 기준)',
    footType: '중립 / 정상~넓은 발볼',
    landingPattern: '미드풋~힐스트라이크',
  },

  similarShoes: ['saucony-triumph-24', 'saucony-hurricane-26', 'saucony-endorphin-trainer'],
  purchaseLinks: [{ store: '네이버', url: 'https://search.shopping.naver.com/search/all?query=써코니+파라마운트+맥스' }],
};
