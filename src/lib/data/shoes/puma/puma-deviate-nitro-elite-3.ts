import type { Shoe } from '@/types/shoe';

export const shoe: Shoe = {
  id: 'puma-deviate-nitro-elite-3',
  slug: 'puma-deviate-nitro-elite-3',
  brand: 'Puma',
  name: '디비에이트 나이트로 엘리트 3',
  image: '/images/shoes/puma/deviate_NITROElite3.webp',
  images: [
    '/images/shoes/puma/deviatenitroelite3/side.webp',
    '/images/shoes/puma/deviatenitroelite3/front.webp',
    '/images/shoes/puma/deviatenitroelite3/back.webp',
    '/images/shoes/puma/deviatenitroelite3/top.webp',
    '/images/shoes/puma/deviatenitroelite3/outsole.webp',
  ],
  category: '레이싱',
  rating: 5,
  price: 289000,
  description: '푸마의 프리미엄 레이싱화로, A-TPU 기반 Nitro Elite 폼과 카본 플레이트로 77%의 놀라운 에너지 리턴을 제공합니다.',
  oneliner: '77% 에너지 리턴을 29만원에, 베이퍼플라이 킬러',
  editorComment: '베이퍼플라이 3(₩310,000)보다 2만원 저렴한 28만 9천원에 77% 에너지 리턴은 가성비 슈퍼슈즈의 정석입니다. A-TPU 기반 Nitro Elite 폼이 204g 경량에서 탄탄하고 직접적인 반발력을 제공하며, 이 느낌은 ZoomX의 부드러운 반발과는 성격이 다릅니다. 세일가 25만원대까지 내려가면 슈퍼슈즈 시장에서 가성비 1위라 해도 과언이 아닙니다. 토박스가 좁아 한국 러너 발볼에는 반사이즈 업이 필수이고, 겨울 경화에 약한 점은 한국 11월~3월 레이스에서 감안해야 합니다.\n\n사이즈·구매 가이드: 토박스가 좁은 편(narrow)이며 와이드 옵션이 없으므로 반드시 반사이즈 업을 선택하세요. 발볼이 넓으면 착화 테스트를 먼저 권합니다. 289,000원 ÷ 300km = km당 약 963원이므로 레이스 전용으로만 활용하세요. 발볼 넓은 레이싱화를 원하면 SC Elite V5, 더 높은 스택을 원하면 메타스피드 스카이+를 비교해보세요.',
  tags: ['레이싱', '카본 플레이트', 'Nitro Elite'],

  specs: {
    weight: 204,
    cushioning: 8,
    responsiveness: 10,
    stability: 6,
    drop: 11,
    durability: 300,
  },

  biomechanics: {
    stackHeight: {
      heel: 39.2,
      forefoot: 28.6,
    },
    drop: 10.6,
    carbonPlate: true,
    plateType: 'curved',
    midsoleType: 'Nitro Elite (A-TPU)',
    optimalPace: '3:30-4:30 min/km',
  },

  injuryPrevention: {
    plantarFasciitis: 'caution',
    achillesTendinopathy: 'caution',
    kneeIssues: 'caution',
    shinSplints: 'good',
  },

  koreanFootFit: {
    toBoxWidth: 'narrow',
    flatFootCompatibility: 'poor',
    wideOptions: false,
    winterCompatibility: 'poor',
    summerCompatibility: 'excellent',
  },

  targetUsers: {
    recommended: ['마라톤 기록 단축', '하프/풀 마라톤 레이스', '엘리트 러너', '전방 착지 러너'],
    notRecommended: ['입문 러너', '회복 러닝', '일상 훈련', '넓은 발볼'],
  },

  features: ['Nitro Elite 폼 (A-TPU)', '카본 플레이트', '204g 초경량', '77% 에너지 리턴'],

  priceAnalysis: {
    msrp: 289000,
    streetPrice: 250000,
    costPerKm: 963,
    valueRating: 8,
    priceTier: 'premium',
    alternatives: ['nike-alphafly-3', 'asics-metaspeed-sky-plus', 'hoka-rocket-x-3'],
  },

  reviews: [
    {
      userType: '엘리트 러너',
      rating: 5,
      text: '2024 춘천 마라톤 서브3:05로 개인 기록 갱신한 신발입니다. 베이퍼플라이 3에서 넘어왔는데 77% 에너지 리턴은 허언이 아니에요. 35km 이후 리턴이 살아있는 느낌은 A-TPU 폼 특유의 탄탄한 반발 덕분입니다. 204g은 베이퍼플라이(194g)와 거의 같고, 289,000원 vs 310,000원 가격 차이도 작지 않아요. 세일가 250,000원대에 잡으면 가성비 슈퍼슈즈 1위입니다. 39.2mm 힐 스택에서 나오는 쿠셔닝이 마라톤 후반 무릎 피로를 확실히 줄여줍니다. 260mm 신는데 토박스가 좁아서 265mm로 올렸습니다. 한국인 발볼이면 무조건 반사이즈 업하세요. 300km 내구성이라 레이스 전용으로만 쓰고 있고, 평발이면 인솔 교체를 권합니다.',
    },
    {
      userType: '에디터 분석',
      rating: 92,
      text: '"가성비 좋은 슈퍼슈즈 뭐가 좋아요?" 질문에 최고의 답변입니다. 289,000원으로 베이퍼플라이 3(310,000원), 메타스피드 스카이+(330,000원)보다 저렴하면서 77% 에너지 리턴은 슈퍼슈즈 시장 최고 수준입니다. 204g으로 베이퍼플라이(194g)와 비슷한 경량성, A-TPU 기반 Nitro Elite 폼으로 탄탄한 반발력을 제공합니다. 39.2mm 힐 스택이 마라톤 후반 무릎과 관절을 보호해주고, 10.6mm 드롭이 힐스트라이크 러너에게도 자연스러운 전환을 유도합니다. 발볼이 좁아 한국인 발에는 반사이즈 업 필수이며, 토박스 폭이 좁은 편이라 와이드 발볼 러너는 주의하세요. 300km 내구성으로 km당 약 963원의 가성비는 레이싱화 카테고리에서 합리적입니다. 서브4:00 목표의 하프/풀 마라톤 레이스에 강력 추천하는 가성비 슈퍼슈즈입니다.',
    },
  ],

  detailedSpecs: {
    weight: '204g (남성 US 9 기준)',
    stackHeight: '힐 39.2mm / 포어풋 28.6mm',
    drop: '10.6mm (Lab 측정치)',
    midsole: 'Nitro Elite 폼 (A-TPU 기반)',
    plate: '카본 플레이트 (풀 렝스)',
    outsole: 'PumaGrip 미니멀',
    upper: 'Ultraweave 경량 메쉬',
    width: '표준 (좁음)',
    durability: '300km (레이싱 전용)',
    price: '₩289,000 (MSRP) / 세일 시 ₩250,000~',
    costPerKm: '약 ₩963/km (300km 기준)',
    footType: '발볼 좁은 러너 / 반사이즈 업 권장',
    landingPattern: '전방 착지 (레이싱)',
  },

  similarShoes: ['nike-alphafly-3', 'asics-metaspeed-sky-plus', 'hoka-rocket-x-3', 'saucony-endorphin-pro-4'],
  purchaseLinks: [{ store: '네이버', url: 'https://naver.me/xk9resjA' }],
};
