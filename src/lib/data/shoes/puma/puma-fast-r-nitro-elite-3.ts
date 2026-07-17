import type { Shoe } from '@/types/shoe';

export const shoe: Shoe = {
  id: 'puma-fast-r-nitro-elite-3',
  slug: 'puma-fast-r-nitro-elite-3',
  brand: 'Puma',
  name: '패스트알 나이트로 엘리트 3',
  image: '/images/shoes/puma/fAST-R_NITROElite3.webp',
  images: [
    '/images/shoes/puma/fastrnitroelite3/side.webp',
    '/images/shoes/puma/fastrnitroelite3/front.webp',
    '/images/shoes/puma/fastrnitroelite3/back.webp',
    '/images/shoes/puma/fastrnitroelite3/top.webp',
    '/images/shoes/puma/fastrnitroelite3/outsole.webp',
  ],
  category: '레이싱',
  rating: 4,
  price: 379000,
  description: '푸마의 마라톤 특화 슈퍼슈즈로, 최대 스택(40mm)과 카본 플레이트로 장거리 레이스에 최적화되어 있습니다.',
  oneliner: '173g 초경량 + 80%+ 리턴, 알파플라이에 도전하는 푸마의 최종 무기',
  editorComment: '173g이라는 무게는 알파플라이 3(190g)보다 17g 가볍고, 80% 이상 에너지 리턴은 슈퍼슈즈 시장 최상위권입니다. 37만 9천원은 알파플라이 3(₩370,000)과 거의 같은 가격대이지만, 순수 무게와 에너지 리턴 수치에서 앞섭니다. 익스텐디드 디자인의 PWRPLATE 카본이 마라톤 후반부까지 추진력을 유지시키고, 1.5mm PumaGrip 아웃솔이 최소한의 무게로 접지력을 확보합니다. 250km 내구성과 좁은 토박스는 이 신발이 오직 서브3 레이스데이 전용 무기임을 선언하며, 한국 러너 발볼에는 반사이즈 업이 필수입니다.\n\n사이즈·구매 가이드: 토박스가 좁은 편(narrow)이며 와이드 옵션이 없으므로 반드시 반사이즈 업을 선택하고, 발볼이 넓으면 착화 테스트를 먼저 하세요. 379,000원 ÷ 250km = km당 약 1,516원이므로 서브3 목표 레이스 전용으로만 사용하세요. 접근성이 더 좋은 대안으로는 메타스피드 엣지+, 발볼 여유를 원하면 SC Elite V5를 비교해보세요.',
  tags: ['마라톤', '카본 플레이트', '맥시멀 스택'],

  specs: {
    weight: 173,
    cushioning: 9,
    responsiveness: 9,
    stability: 6,
    drop: 8,
    durability: 250,
  },

  biomechanics: {
    stackHeight: {
      heel: 38.5,
      forefoot: 30.2,
    },
    drop: 8.3,
    carbonPlate: true,
    plateType: 'curved',
    midsoleType: 'Nitro Elite (A-TPU)',
    optimalPace: '3:00-4:30 min/km',
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
    recommended: ['풀 마라톤 레이스', '엘리트 러너', '장거리 레이싱', '서브-3 목표'],
    notRecommended: ['입문 러너', '짧은 거리', '일상 훈련', '넓은 발볼'],
  },

  features: ['Nitro Elite 폼', '카본 플레이트', '40mm 맥시멀 스택', '마라톤 특화'],

  priceAnalysis: {
    msrp: 379000,
    streetPrice: 260000,
    costPerKm: 1516,
    valueRating: 5,
    priceTier: 'super-premium',
    alternatives: ['nike-alphafly-3', 'asics-metaspeed-edge-plus', 'new-balance-sc-elite-v5'],
  },

  reviews: [
    {
      userType: '마라톤 러너',
      rating: 4,
      text: '알파플라이 3(190g)에서 갈아탄 서브2:50 러너입니다. 173g은 손에 들면 "이게 러닝화 맞나" 싶을 정도로 가벼워요. 2025 동아 서울마라톤에서 쓸 예정인데, 2월 영하 날씨에서 테스트 했더니 폼이 확 딱딱해지더라고요. 겨울 경화에 약한 게 아쉬운 점이에요. 10월 대구나 4월 서울 레이스처럼 10~15도 기온에서는 80%+ 에너지 리턴이 폭발적입니다. 37만 9천원에 250km 내구성이라 km당 약 1,516원인데, 기록 경신 한 번이면 본전 뽑는다고 생각합니다. 토박스가 좁아서 한국인 발볼 기준으로는 반사이즈 업이 필수이고, 와이드 옵션이 없어서 발볼 110mm 이상이면 다른 모델을 찾아보세요. 무릎이 약한 편인데 38.5mm 스택의 충격흡수가 35km 이후에도 관절을 보호해주는 느낌이 확실합니다.',
    },
    {
      userType: '에디터 분석',
      rating: 89,
      text: '푸마 최상위 풀 마라톤 레이싱화입니다. 173g으로 알파플라이 3(190g)보다 17g 가볍고, 80% 이상의 에너지 리턴으로 최고 수준의 반발력을 제공합니다. 379,000원으로 알파플라이 3(370,000원)과 비슷한 가격대이지만 순수 무게에서 확실히 우위입니다. 8.3mm 드롭에 38.5mm 힐 스택으로 전방 착지 러너에게 최적화된 설계입니다. 발볼이 좁아 한국인 발에는 반사이즈 업 필수이고, 토박스 폭이 좁은 편이라 발볼 넓은 러너는 착화 테스트를 꼭 해보세요. 250km 내구성으로 km당 약 1,516원의 가성비는 순수 레이스 전용이라는 점을 감안하면 납득 가능합니다. 평발이나 무릎 부상 이력이 있는 러너보다는 서브3:00을 목표로 하는 엘리트 러너의 풀 마라톤 레이스용으로 추천합니다.',
    },
    {
      userType: '중급 러너',
      rating: 4,
      text: '아직 기록은 서브3:30 초반인 중급 러너지만, 이번 JTBC 서울마라톤에서 PR을 노리려고 큰맘 먹고 구매했습니다. 173g이라 신발을 신은 게 안 느껴질 정도로 가볍고, 38.5mm 힐 스택 쿠셔닝 덕분에 30km 이후에도 다리 피로가 확실히 덜했어요. 다만 379,000원에 250km 내구성이면 km당 약 1,516원이라 일상 훈련화로는 절대 못 쓰고, 대회 당일에만 아껴 신는 전용 장비로 씁니다. 토박스가 좁아서 평소 265mm에서 270mm로 올렸고, 넓은 발볼이면 착용 전 꼭 신어보길 권합니다.',
    },
  ],

  detailedSpecs: {
    weight: '173g (남성 US 9 기준, Lab 측정)',
    stackHeight: '힐 38.5mm / 포어풋 30.2mm (Lab 측정)',
    drop: '8.3mm (Lab 측정)',
    midsole: 'Nitro Elite (A-TPU, 에너지 리턴 80%+)',
    plate: 'PWRPLATE 카본 (익스텐디드 디자인)',
    outsole: 'PumaGrip 러버 (1.5mm)',
    upper: 'Ultraweave 메쉬 (4/5 통기성)',
    width: '표준 (좁음)',
    durability: '250km (레이싱 전용)',
    price: '₩379,000 (MSRP) / 세일 시 ₩260,000~',
    costPerKm: '약 ₩1,516/km (250km 기준)',
    footType: '발볼 좁은 러너 / 반사이즈 업 필수',
    landingPattern: '전방 착지 (풀 마라톤 레이싱)',
  },

  similarShoes: ['nike-alphafly-3', 'asics-metaspeed-edge-plus', 'new-balance-sc-elite-v5', 'saucony-endorphin-elite-2'],
  purchaseLinks: [{ store: '쿠팡', url: 'https://link.coupang.com/a/dBK6Nc' }],
};
