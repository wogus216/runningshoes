import type { Shoe } from '@/types/shoe';

export const shoe: Shoe = {
  id: 'hoka-rocket-x-3',
  slug: 'hoka-rocket-x-3',
  brand: 'Hoka',
  name: '로켓 X 3',
  image: '/images/shoes/hoka/rocketX3/side.webp',
  images: ['/images/shoes/hoka/rocketX3/side.webp', '/images/shoes/hoka/rocketX3/front.webp', '/images/shoes/hoka/rocketX3/top.webp', '/images/shoes/hoka/rocketX3/outsole.webp'],
  category: '레이싱',
  rating: 5,
  price: 299000,
  description: '호카의 플래그십 레이싱화로, 듀얼 레이어 PEBA 폼과 카본 플레이트로 극강의 반응성과 추진력을 제공합니다. 마라톤 기록 단축을 위한 최고의 선택입니다.',
  oneliner: '220g 듀얼 PEBA, 78% 에너지 최상위',
  editorComment: '로켓 X 3는 220g 경량에 78% 에너지 리턴으로 호카의 플래그십 레이싱화입니다. 듀얼 레이어 PEBA는 Vaporfly 3의 ZoomX보다 내구성이 뛰어나 2-3번 레이스 활용이 가능하고, 추위에서 3%만 단단해져 겨울 마라톤에도 적합합니다. 29만 9천원으로 Alphafly 3(37만원)보다 7만원 저렴하지만, 70.0mm 매우 좁은 토박스는 발볼 넓은 한국 러너에게 최대 단점입니다. 공격적인 로커 지오메트리로 적응 기간이 필요하며, 서브3:30~서브3 목표 엘리트 러너 전용입니다. 참고로 ZoomX보다 낫다는 건 상대 비교일 뿐, PEBA 계열 자체는 마모가 빠른 편입니다 — 450km 실주행 후 러닝 이코노미가 2.3% 나빠졌다는 실측이 있으니(EVA는 무변화), 데일리 겸용 유혹을 참고 결전용으로 운용하는 게 이 가격의 본전을 뽑는 법입니다.\n\n사이즈·구매 가이드: 토박스가 narrow(70.0mm)로 매우 좁고 와이드 옵션이 없으므로, 발볼 넓은 러너는 사실상 선택이 어렵습니다. 반드시 레이싱 전용 얇은 양말을 착용하고 충분히 시착하세요. 정가 299,000원에 내구성 300km 기준 km당 약 997원이며, 안정성이 필요하다면 알파플라이 3, 더 높은 스택을 원하면 씨엘로 X1이 대안입니다.',
  tags: ['레이싱', '카본 플레이트', 'PEBA 폼'],

  specs: {
    weight: 220,
    cushioning: 7,
    responsiveness: 10,
    stability: 6,
    drop: 10,
    durability: 300,
  },

  biomechanics: {
    stackHeight: {
      heel: 40,
      forefoot: 30,
    },
    drop: 10,
    carbonPlate: true,
    plateType: 'Carbon',
    midsoleType: 'PEBA (Dual Layer)',
    optimalPace: '3:30-5:00 min/km',
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
    winterCompatibility: 'excellent',
    summerCompatibility: 'fair',
  },

  targetUsers: {
    recommended: ['마라톤 기록 단축', '엘리트 러너', '하프/풀 마라톤 레이스', '빠른 페이스 전용', '전방 착지 러너'],
    notRecommended: ['입문 러너', '회복 러닝', '일상 훈련', '넓은 발볼', '과내전 러너'],
  },

  features: ['듀얼 레이어 PEBA', '카본 플레이트', '초경량 220g', '극강 반응성'],

  priceAnalysis: {
    msrp: 299000,
    streetPrice: 289000,
    costPerKm: 997,
    valueRating: 7,
    priceTier: 'premium',
    alternatives: ['nike-alphafly-3', 'asics-metaspeed-sky-plus', 'new-balance-sc-elite-v5'],
  },

  reviews: [
    {
      userType: '에디터 분석',
      rating: 89,
      text: '서브3:30~서브3 목표 마라토너를 위한 호카 최고의 레이싱화입니다. 220g 초경량에 78% 에너지 리턴과 카본 플레이트로 기록 단축에 최적화되어 있고, 40mm 힐/30mm 전족부 스택으로 10mm 드롭을 제공합니다. 29만 9천원으로 알파플라이 3(37만원)보다 7만원 저렴해 가성비가 좋고, 300km 내구성으로 2~3번 레이스에 활용 가능합니다. 추위에서 3%만 단단해져 겨울 마라톤에도 적합하지만, 토박스가 70.0mm로 매우 좁아 발볼 넓은 한국 러너에게는 불편합니다. 와이드 옵션이 없어 평발이나 넓은 발볼 러너는 사실상 선택이 어렵고, 공격적인 로커 지오메트리로 적응 기간이 필요합니다. 무릎 보호보다 기록 단축이 우선인 레이싱 전용이므로, 훈련에는 마하 X 3를 추천합니다.',
    },
    {
        userType: '모델 선택 — 알파플라이 대비 힐 안정성',
        text: '최상위 레이서군에서 알파플라이 계열과 비교하면 힐 안정성이 뚜렷한 차이입니다. 알파플라이는 포드 구조라 접지면이 분절되는 반면, 로켓 X 3은 힐이 통으로 받쳐 좌우 흔들림이 적습니다. 바람이 강한 날이나 노면이 고르지 않은 구간에서 이 차이가 드러납니다. 220g의 무게에 듀얼 PEBA로 에너지 리턴 78%, 힐 40mm 스택이라 30km 이후 오르막에서도 페이스 유지에 유리합니다. 다만 토박스가 70.0mm로 좁아 발볼이 넓으면 맞지 않고, 표준 발볼도 얇은 레이싱 양말이 필요한 수준입니다. 내구성 300km 기준입니다.',
      },
    {
        userType: '예상 적합 — 적응 기간을 감수할 서브3 도전 러너',
        text: '서브3 전후를 노리는 러너를 겨냥한 레이서지만, 적응이 필요한 신발입니다. 로커 지오메트리가 공격적이라 초기에는 종아리에 당김이 오기 쉽고, 대체로 2~3주 정도 짧은 거리부터 늘려가며 익숙해지는 과정이 필요합니다. 그 구간을 넘기면 220g의 무게와 듀얼 PEBA의 에너지 리턴 78%가 후반 스퍼트에서 작동하고, 힐 40mm 스택이라 충격 흡수도 함께 확보됩니다. 레이스 직전에 구매하면 적응 기간이 부족해 오히려 손해입니다. 토박스가 70.0mm로 좁고 와이드 옵션이 없어, 발볼이 넓다면 이 모델은 후보에서 빼는 편이 낫습니다. 299,000원·내구성 300km 기준입니다.',
      },
  ],

  detailedSpecs: {
    weight: '220g (남성 US 9 기준)',
    stackHeight: '힐 40mm / 포어풋 30mm',
    drop: '10mm (Lab 측정치)',
    midsole: 'PEBA 듀얼 레이어 (최고급 폼)',
    plate: '카본 플레이트 (풀 렝스)',
    outsole: '미니멀 러버 (경량화)',
    upper: '초경량 메쉬',
    width: '표준 (좁음)',
    durability: '300km (레이싱 전용)',
    price: '₩299,000 (MSRP) / 세일 시 ₩270,000~',
    costPerKm: '약 ₩997/km (300km 기준)',
    footType: '발볼 좁은~표준 / 엘리트 러너',
    landingPattern: '전방 착지 (레이싱)',
  },

  similarShoes: ['nike-alphafly-3', 'asics-metaspeed-sky-plus', 'new-balance-sc-elite-v5', 'saucony-endorphin-pro-4'],
  relatedPosts: [
    { slug: 'running-shoe-plate-guide-2026', title: '플레이트 완전 해설 — 카본·유리섬유·나일론' },
  ],
  purchaseLinks: [{ store: '네이버', url: 'https://naver.me/xslD1XqM' }],
};
