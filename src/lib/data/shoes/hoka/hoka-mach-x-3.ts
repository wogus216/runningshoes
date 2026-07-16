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
  editorComment: '마하 X 3는 264g에 PEBA+Supercritical EVA 하이브리드 폼과 Pebax 플레이트를 탑재한 슈퍼트레이너입니다. 전족부 69.3% 에너지 리턴은 SC Trainer v3(66.1%)보다 높고, 43mm 맥시멀 스택으로 템포런/하프마라톤에 적합합니다. 24만 9천원은 로켓 X 3(29만 9천원)보다 5만원 저렴하며 500km 내구성으로 훈련 겸용이 가능합니다. v2의 힐 문제가 해결되어 힐스트라이커도 편하지만, 70.8mm narrow 토박스와 와이드 옵션 부재는 발볼 넓은 러너에게 큰 단점입니다.\n\n사이즈·구매 가이드: 토박스가 standard 폭이나 체감이 좁은 편이고 와이드 옵션이 없어, 발볼 넓은 러너는 반드시 매장에서 시착 후 구매하세요. 정가 249,000원에 내구성 500km 기준 km당 약 498원이며, 비슷한 슈퍼트레이너 용도로 슈퍼블라스트 2나 SC Trainer V3가 대안입니다.',
  tags: ['슈퍼트레이너', 'PEBA 폼', 'Pebax 플레이트'],

  specs: {
    weight: 264,
    cushioning: 8,
    responsiveness: 9,
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
    toBoxWidth: 'standard',
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
      text: '레이싱화 느낌을 훈련에서 경험하고 싶은 중상급 러너를 위한 슈퍼트레이너입니다. 264g 경량에 PEBA 폼과 Pebax 플레이트 조합으로 전족부 에너지 리턴 69.3%가 뛰어나 템포런/하프마라톤에 최적입니다. 43mm 맥시멀 힐 스택과 10mm 드롭으로 무릎 보호와 힐 안정성도 확보했고, v2의 힐 문제가 완전히 해결되었습니다. 24만 9천원으로 로켓 X 3(29만 9천원)보다 5만원 저렴하면서 500km 내구성으로 km당 약 498원 가성비가 우수합니다. 다만 토박스가 70.8mm로 좁아 발볼 넓은 한국 러너에게는 불편할 수 있고, 와이드 옵션도 없어 평발이나 넓은 발볼 러너는 신중하게 시착해야 합니다. SC Trainer v3(66.1%)보다 높은 에너지 리턴으로 훈련 겸용 슈퍼트레이너 중 최상급입니다.',
    },
    {
      userType: '중상급 러너',
      rating: 5,
      text: '주간 70km 훈련에서 화/목 템포런 전용으로 쓰고 있습니다. 수요일 인터벌은 로켓 X 3, 주말 롱런은 클리프톤인데, 마하 X 3가 그 중간을 완벽히 채워줘요. 264g이라 가볍고 69.3% 에너지 리턴 덕에 킬로 4분 10초~4분 40초 구간에서 Pebax 플레이트의 추진력이 확실히 느껴집니다. 43mm 힐 스택으로 무릎 충격도 잘 흡수해주고, 500km 넘게 신었는데 아직 폼이 죽지 않아서 km당 약 498원 가성비가 훌륭해요. 로켓 X 3는 200km 쯤에서 쿠션이 빠지기 시작했는데, 마하 X 3는 훈련용으로 내구성이 확실히 뛰어납니다. 다만 토박스가 70.8mm로 좁아 발볼 넓은 한국 러너에게는 빡빡할 수 있고, 와이드 옵션이 없어서 평발이거나 발볼 넓은 분들은 반드시 시착 후 구매하세요.',
    },
    {
      userType: '하프 마라톤 러너',
      rating: 5,
      text: '올해 JTBC 서울 하프에서 마하 X 3 신고 개인 기록 1시간 38분 찍었습니다! 264g 경량에 PEBA 폼의 69.3% 에너지 리턴이 15km 이후 오르막에서 진가를 발휘했어요. 43mm 힐 스택 덕에 무릎 충격도 최소화되어 후반부까지 페이스를 유지할 수 있었고, 10mm 드롭이 힐스트라이커인 제게도 편안했습니다. 로켓 X 3(29만 9천원)을 살까 고민했는데, 24만 9천원에 500km 내구성이면 km당 약 498원으로 가성비가 압도적이에요. 토박스가 70.8mm로 좁아서 발볼 넓은 한국 러너에게는 와이드 옵션이 없다는 게 아쉽지만, 265mm 표준 발볼이면 충분히 편합니다. 풀 마라톤은 아직 안 뛰어봤지만, 하프까지는 이 신발이면 자신있게 추천합니다.',
    },
  ],

  detailedSpecs: {
    weight: '264g (남성 US 9 기준)',
    stackHeight: '힐 43mm / 포어풋 33mm',
    drop: '10mm (Lab 측정치)',
    midsole: 'PEBA + Supercritical EVA (하이브리드)',
    plate: 'Pebax 플레이트 (탄소 아님)',
    outsole: '러버 커버리지',
    upper: '엔지니어드 메쉬',
    width: '표준',
    durability: '400km',
    price: '₩249,000 (MSRP) / 세일 시 ₩230,000~',
    costPerKm: '약 ₩498/km (500km 기준)',
    footType: '표준 발볼 / 중상급 러너',
    landingPattern: '미드풋~전방 착지',
  },

  similarShoes: ['asics-superblast-2', 'nike-vomero-18', 'new-balance-sc-trainer-v3', 'puma-deviate-nitro-3'],
  purchaseLinks: [{ store: '네이버', url: 'https://naver.me/xNnMDilg' }],
};
