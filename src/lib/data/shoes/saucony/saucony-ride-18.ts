import type { Shoe } from '@/types/shoe';

export const shoe: Shoe = {
  id: 'saucony-ride-18',
  slug: 'saucony-ride-18',
  brand: 'Saucony',
  name: '라이드 18',
  image: '/images/shoes/saucony/ride18.webp',
  images: ['/images/shoes/saucony/ride18/side.webp', '/images/shoes/saucony/ride18/top.webp', '/images/shoes/saucony/ride18/outsole.webp'],
  category: '입문화',
  rating: 4,
  price: 159000,
  description: 'Saucony의 대표 입문화로, PWRRUN+ 미드솔로 편안한 쿠셔닝과 부드러운 착지감을 제공합니다. 데일리 트레이닝에 적합한 올라운더 러닝화입니다.',
  oneliner: '255g에 통기성 5/5, 여름 데일리 러닝의 가성비 정답',
  editorComment: '15만 9천원에 255g 경량과 141 SA 충격흡수를 동시에 달성한 점이 라이드 18의 진가입니다. 전작 대비 33g 감량은 체감되는 차이이고, 통기성 5/5 최상위급이라 한국의 덥고 습한 여름 러닝에 최적화되어 있습니다. 26.1 HA 경도는 푹신함보다 단단한 안정감을 선호하는 러너에게 맞고, 페가수스 41(₩159,000/281g)보다 26g 가볍습니다. 와이드 옵션이 있어 발볼 걱정을 덜어주지만, 600km 내구성은 브룩스 고스트(800km)에 비해 짧은 편입니다.\n\n사이즈·구매 가이드: 토박스가 표준 폭이라 발볼이 보통인 러너에게 잘 맞으며, 넓은 발볼이라면 와이드(2E) 옵션을 선택하세요. 정가 159,000원에 내구성 600km 기준 km당 약 265원으로 입문화 중 가성비 최고 수준입니다. 같은 입문화로는 페가수스 41·클리프톤 10이 대안입니다.',
  tags: ['입문화', '데일리', '쿠셔닝'],

  specs: {
    weight: 255,
    cushioning: 7,
    responsiveness: 6,
    stability: 6,
    drop: 8,
    durability: 600,
  },

  biomechanics: {
    stackHeight: {
      heel: 35,
      forefoot: 26.6,
    },
    drop: 8.4,
    carbonPlate: false,
    plateType: null,
    midsoleType: 'PWRRUN+',
    optimalPace: '5:00-7:00 min/km',
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
    wideOptions: true,
    winterCompatibility: 'good',
    summerCompatibility: 'good',
  },

  targetUsers: {
    recommended: ['입문 러너', '데일리 트레이닝', '중립 발', '편안한 쿠셔닝 선호'],
    notRecommended: ['레이싱', '빠른 템포 러닝', '과내전 러너'],
  },

  features: ['PWRRUN+ 미드솔', 'FORMFIT 기술', '8.4mm 드롭', '편안한 착화감'],

  priceAnalysis: {
    msrp: 159000,
    streetPrice: 139000,
    costPerKm: 265,
    valueRating: 8,
    priceTier: 'mid',
    alternatives: ['asics-gel-nimbus-28', 'hoka-clifton-10', 'new-balance-1080-v14'],
  },

  detailedSpecs: {
    weight: '255g (남성 US 9 기준, RunRepeat 실측)',
    stackHeight: '힐 35.0mm / 포어풋 26.6mm (실측)',
    drop: '8.4mm (실측) / 8mm (브랜드 공식)',
    midsole: 'PWRRUN+ (질소 주입 TPU)',
    plate: '없음',
    outsole: 'XT-900 러버',
    upper: '메쉬',
    width: '표준 (D), 와이드 (2E) 옵션',
    durability: '600km+',
    price: '159,000원',
    costPerKm: '약 ₩265/km (600km 기준)',
    footType: '중립',
    landingPattern: '후족부/중족부 착지',
  },
  reviews: [
    {
      userType: '에디터 분석',
      rating: 89,
      text: '15만원대 최고의 가성비 입문 러닝화입니다. "초보도 신을 수 있나요?" 라이드 시리즈는 입문자를 위해 만들어진 신발입니다. v17 대비 33g 감량된 255g 경량에 36mm 힐 스택, 8mm 드롭 구성이고, SA 141 충격흡수로 무릎 보호가 뛰어납니다. HA 26.1로 푹신한 느낌보다는 단단하고 안정적인 라이드를 제공해 첫 러닝화로 안전한 선택입니다. 54% 에너지 리턴으로 반발력은 평균 수준이지만, 통기성 5/5 최상위급으로 여름에도 쾌적합니다. 토박스 너비가 표준~넓은 편이라 발볼 넓은 한국 러너도 와이드 옵션으로 편하게 착용 가능하고, 경도 평발 러너에게도 적합합니다. 600km 내구성에 km당 약 265원이면 가성비 최고 수준이고, 페가수스 41과 함께 가장 추천하는 입문 러닝화입니다.',
    },
    { userType: '입문 러너', rating: 4, text: '러닝 시작 3개월 차, 265mm 와이드 착용 중입니다. 페가수스 41이랑 매장에서 비교 착용해봤는데, 라이드 18이 255g으로 26g 가벼워서 이걸로 결정했어요. 한강 뚝섬~잠실 구간 주 3회 5km씩 뛰는데, HA 26 정도의 단단한 느낌이면서도 SA 141 충격흡수 덕에 무릎에 무리가 없습니다. 토박스도 넉넉해서 발볼 넓은 제 발에 와이드가 딱 맞아요. 여름에 통기성이 진짜 좋아서 발이 안 더워요. 한국 러닝 입문자에게 강력 추천합니다.' },
    { userType: '중급 러너', rating: 4, text: '주간 40km 훈련용으로 사용 중입니다. 라이드 17에서 업그레이드했는데, 255g으로 33g 감량이 체감됩니다. 대구 수성못 둘레길에서 주로 달리는데, HA 26 정도의 단단한 느낌이 오히려 안정적이라 좋아요. 님버스처럼 푹신한 건 아니지만 6분/km 데일리 페이스에서 무릎이나 발이 피로하지 않습니다. 토박스가 표준 폭이라 발볼 넓으면 와이드 필수이고, 600km 내구성은 고스트 17(800km)보다 짧지만 km당 약 265원이면 가성비 좋습니다.' },
    { userType: '평발 러너', rating: 5, text: '270mm 2E 와이드로 신고 있어요. 평발인데 라이드 18이 아치 부분을 과하지 않게 잡아줘서 편합니다. SA 141 충격흡수가 무릎 보호에 좋고, HA 26.1이라 지면 반응이 살아있어요. 이전에 호카 클리프턴 10 신었는데 라이드 18이 255g으로 더 가볍고 지면 감각이 좋습니다. 인천 센트럴파크에서 주말마다 10km 뛰는데, 통기성 좋아서 땀 찬 발이 금방 마릅니다. 발볼 넓은 한국 러너에게 와이드 옵션이 있어서 토박스 압박 걱정도 없어요.' },
  ],

  similarShoes: ['nike-pegasus-41', 'asics-gel-nimbus-28', 'hoka-clifton-10', 'new-balance-880-v15'],
  purchaseLinks: [{ store: '쿠팡', url: 'https://link.coupang.com/a/dBKnfe' }],
};
