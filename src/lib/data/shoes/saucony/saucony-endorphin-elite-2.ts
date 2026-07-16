import type { Shoe } from '@/types/shoe';

export const shoe: Shoe = {
  id: 'saucony-endorphin-elite-2',
  slug: 'saucony-endorphin-elite-2',
  brand: 'Saucony',
  name: '엔돌핀 엘리트 2',
  image: '/images/shoes/saucony/endorphin_elite2.webp',
  images: ['/images/shoes/saucony/endorphinelite2/side.webp', '/images/shoes/saucony/endorphinelite2/top.webp', '/images/shoes/saucony/endorphinelite2/outsole.webp'],
  category: '레이싱',
  rating: 5,
  price: 339000,
  description: 'Saucony의 최상위 레이싱화로, IncrediRUN 미드솔로 역대 최고 80.6% 에너지 리턴을 기록했습니다. 풀렝스 카본 플레이트와 함께 엘리트 퍼포먼스를 제공합니다.',
  oneliner: '80.6% 에너지 리턴, RunRepeat 역대 최고 기록의 괴물',
  editorComment: 'RunRepeat Lab 역대 최고 에너지 리턴 80.6%라는 수치는 알파플라이 3(78.2%)도 넘어서는 기록입니다. IncrediRUN 폼의 6.5 HA 극소프트 경도가 만들어내는 반발력은 경이적이지만, 동시에 안정성 4/10이라는 대가를 치릅니다. 33만 9천원이라는 가격과 200km 내구성은 km당 약 1,695원을 의미하며, 이건 오직 레이스데이에만 꺼내 신는 무기입니다. 월 200km 이상 훈련하는 서브3 러너가 아니면 이 신발의 잠재력을 끌어내기 어렵고, 토박스가 좁아 한국 러너 발볼과의 궁합은 도전적입니다.\n\n사이즈·구매 가이드: 토박스가 좁은 편(narrow)이므로 발볼이 넓다면 와이드 옵션이 없어 착용이 어려울 수 있으니 반드시 시착하세요. 정가 339,000원에 내구성 200km 기준 km당 약 1,695원으로 레이스 전용 운용이 필수입니다. 같은 엘리트 레이싱화로는 알파플라이 3·메타스피드 엣지+가 대안입니다.',
  tags: ['레이싱', '카본', '엘리트', '슈퍼화', '에너지 리턴'],

  specs: {
    weight: 197,
    cushioning: 7,
    responsiveness: 10,
    stability: 4,
    drop: 8,
    durability: 200,
  },

  biomechanics: {
    stackHeight: {
      heel: 39.9,
      forefoot: 32.4,
    },
    drop: 7.5,
    carbonPlate: true,
    plateType: 'curved',
    midsoleType: 'IncrediRUN',
    optimalPace: '3:00-4:30 min/km',
  },

  injuryPrevention: {
    plantarFasciitis: 'good',
    achillesTendinopathy: 'good',
    kneeIssues: 'caution',
    shinSplints: 'good',
  },

  koreanFootFit: {
    toBoxWidth: 'narrow',
    flatFootCompatibility: 'fair',
    wideOptions: false,
    winterCompatibility: 'fair',
    summerCompatibility: 'good',
  },

  targetUsers: {
    recommended: ['엘리트 러너', '풀마라톤', '서브-3 목표', 'PR 도전'],
    notRecommended: ['입문 러너', '데일리 트레이닝', '과내전 러너'],
  },

  features: ['IncrediRUN 미드솔', '80.6% 에너지 리턴 (역대 최고)', '풀렝스 카본 플레이트', '197g 경량'],

  priceAnalysis: {
    msrp: 339000,
    streetPrice: 299000,
    costPerKm: 1695,
    valueRating: 5,
    priceTier: 'super-premium',
    alternatives: ['nike-alphafly-3', 'asics-metaspeed-edge-plus', 'adidas-adios-pro-4'],
  },

  detailedSpecs: {
    weight: '197g (남성 US 9 기준, RunRepeat 실측)',
    stackHeight: '힐 39.9mm / 포어풋 32.4mm (실측)',
    drop: '7.5mm (실측) / 8mm (브랜드 공식)',
    midsole: 'IncrediRUN (80.6% 에너지 리턴)',
    plate: '풀렝스 카본 플레이트',
    outsole: '경량 러버',
    upper: '초경량 메쉬',
    width: '표준 (D)',
    durability: '200km+',
    price: '339,000원',
    costPerKm: '약 ₩1,695/km (200km 기준)',
    footType: '중립',
    landingPattern: '중족부/전족부 착지',
  },

  reviews: [
    {
      userType: '에디터 분석',
      rating: 86,
      text: '서브3 이하 엘리트 러너를 위한 최상위 레이싱화입니다. 197g 초경량에 역대 최고 80.6% 에너지 리턴, SA 155 충격흡수로 기록 단축에 최적화되어 있습니다. 40mm 힐 스택에 8mm 드롭 구성이고, IncrediRUN 폼의 극강 반발력은 알파플라이와 비교해도 손색없습니다. HA 6.5 극소프트 미드솔로 안정성이 낮아 완벽한 러닝 폼이 필요하고, 토박스가 좁아 발볼 넓은 한국 러너에게는 맞지 않습니다. 33만 9천원 프리미엄 가격에 200km 내구성이라 km당 약 1,695원으로 가성비는 좋지 않지만, 대회 전용 최고 성능 레이싱화입니다. 무릎 보호보다 기록 단축에 초점을 맞추고 있으며, 평발이나 과내전 러너에게는 비추천이고 월 200km 이상 훈련하는 시리어스 러너 전용입니다.',
    },
    { userType: '상급 러너', rating: 5, text: '월 350km 훈련하는 서브250 러너입니다. 2025 경주 마라톤에서 알파플라이 3 대신 이걸 신고 2:48 기록했습니다. 80.6% 에너지 리턴이라는 숫자가 과장이 아니에요. 197g 경량이라 35km 이후 다리가 죽어갈 때 이 신발의 반발이 살려줍니다. IncrediRUN 폼의 탄성이 끝까지 유지되고, HA 6.5 소프트 폼이 충격을 잘 흡수해 무릎 부담도 적습니다. 토박스가 좁아 발볼 넓은 한국 러너는 주의하세요. 인생 신발이라고 부를 만합니다.' },
    { userType: '중급 러너', rating: 3, text: '서브330 러너인데 호기심에 질렀다가 좀 후회하고 있습니다. 33만 9천원에 200km 내구성이면 km당 거의 1,700원이라 가성비가 최악이에요. 제 실력에서는 엔돌핀 프로 4로도 충분한데, 엘리트 2의 차이를 체감하려면 3:30/km 이상 빠른 페이스가 필요합니다. 안정성도 4/10이라 제 폼에서는 착지가 불안하고, 토박스가 좁아서 발볼 넓은 편인 제 발에는 15km 이후 통증이 있었어요. 한국 서브3 미만 러너에게는 프로 4를 추천합니다.' },
    { userType: '상급 러너', rating: 5, text: '알파플라이 3, 메타스피드 스카이+, 엔돌핀 엘리트 2 세 켤레 다 보유 중입니다. 197g 경량에 80.6% 에너지 리턴이라 순수 반발력만 놓고 보면 엘리트 2가 최강입니다. HA 6.5 극소프트 폼인데도 발이 빠지는 느낌이 아니라 튕겨주는 느낌이에요. 무릎 충격 흡수도 좋은 편입니다. 대신 토박스가 진짜 좁아서 255mm 이하 좁은 발이 아니면 고통스럽습니다. 발볼 넓은 한국 러너 평균 기준으로는 도박에 가깝고, 가성비도 km당 약 1,695원이라 대회 전용입니다.' },
  ],

  similarShoes: ['nike-alphafly-3', 'asics-metaspeed-edge-plus', 'new-balance-sc-elite-v5', 'puma-fast-r-nitro-elite-3'],
  purchaseLinks: [{ store: '쿠팡', url: 'https://link.coupang.com/a/dBKvcw' }],
};
