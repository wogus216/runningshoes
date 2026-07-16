import type { Shoe } from '@/types/shoe';

export const shoe: Shoe = {
  id: 'new-balance-880-v15',
  slug: 'new-balance-880-v15',
  brand: 'New Balance',
  name: '880 V15',
  image: '/images/shoes/newbalance/880v15/side.webp',
  images: [
    '/images/shoes/newbalance/880v15/side.webp',
    '/images/shoes/newbalance/880v15/front.webp',
    '/images/shoes/newbalance/880v15/back.webp',
    '/images/shoes/newbalance/880v15/top.webp',
    '/images/shoes/newbalance/880v15/outsole.webp',
  ],
  category: '입문화',
  rating: 4,
  price: 189000,
  description: '뉴발란스의 대표적인 입문용 러닝화로, Fresh Foam X 미드솔이 편안한 쿠셔닝을 제공합니다. 안정성과 쿠셔닝의 균형이 좋아 첫 러닝화로 적합합니다.',
  oneliner: '40mm 맥시멀 스택, 입문자 무릎 보호 특화',
  editorComment: '880 v15는 286g으로 경량 입문화는 아니지만, 40mm 힐 스택과 8/10 쿠셔닝으로 무릎 부담이 적습니다. Brooks Ghost 17(277g, 18만 9천원)과 거의 동일한 가격이지만 Fresh Foam X가 더 부드러운 착화감을 제공합니다. 4mm 로우드롭은 자연스러운 전환을 돕고, 2E 와이드 옵션으로 발볼 넓은 러너도 편안합니다. 600km 내구성으로 km당 약 315원, 장기적으로 가성비가 뛰어납니다.\n\n사이즈·구매 가이드: 토박스 너비가 표준(standard) 수준이며 2E 와이드 옵션이 있어 발볼 넓은 한국 러너는 와이드를 선택하세요. 189,000원 ÷ 600km = km당 약 315원으로 입문 쿠션화 중 가성비가 뛰어납니다. 비슷한 쿠션 성격의 대안으로는 1080 V15(더 경량·반응성)와 글리세린 22(더 부드러운 전환)를 비교해보세요.',
  tags: ['입문화', '데일리 러닝', '안정적'],

  specs: {
    weight: 286,
    cushioning: 8,
    responsiveness: 6,
    stability: 8,
    drop: 4,
    durability: 600,
  },

  biomechanics: {
    stackHeight: {
      heel: 40,
      forefoot: 35,
    },
    drop: 4,
    carbonPlate: false,
    plateType: null,
    midsoleType: 'Fresh Foam X',
    optimalPace: '5:30-7:00 min/km',
  },

  detailedSpecs: {
    weight: '286g (남성 US 9 기준)',
    stackHeight: '힐 39.7mm / 포어풋 35.4mm (실측)',
    drop: '4.3mm (실측) / 6mm (브랜드 공식)',
    midsole: 'Fresh Foam X (EVA 기반 고밀도 폼)',
    plate: '없음',
    outsole: '고무 아웃솔',
    upper: '엔지니어드 메쉬',
    width: '표준 (D), 와이드 (2E) 옵션',
    durability: '600km+',
    price: '189,000원',
    costPerKm: '약 ₩315/km (600km 기준)',
    footType: '중립, 약간의 과내전',
    landingPattern: '뒤꿈치/중족부 착지',
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
    wideOptions: true,
    winterCompatibility: 'good',
    summerCompatibility: 'fair',
  },

  priceAnalysis: {
    msrp: 189000,
    streetPrice: 189000,
    costPerKm: 315,
    valueRating: 8,
    priceTier: 'mid',
    alternatives: ['brooks-ghost-17', 'asics-gel-nimbus-28'],
    valueAdvantages: ['맥스 쿠션 중 합리적 가격', '다양한 발볼 옵션', '무릎 보호에 탁월'],
  },

  targetUsers: {
    recommended: ['입문 러너', '무릎 부담을 줄이고 싶은 러너', '장거리 편안함을 원하는 러너', '넓은 발볼 옵션이 필요한 러너'],
    notRecommended: ['가벼운 신발을 원하는 러너', '빠른 페이스 훈련용', '워킹/캐주얼 용도'],
  },

  features: [
    '힐 39.7mm, 전족부 35.4mm의 맥시멀 쿠셔닝 (RunRepeat Lab Test)',
    '로커 지오메트리로 부드러운 착지-이탈 전환',
    'Torsional rigidity 5/5로 높은 스택에도 안정성 유지',
    '두꺼운 텅 패딩과 힐 슬립 방지 설계',
  ],

  reviews: [
    {
      userType: '에디터 분석',
      rating: 85,
      text: '입문~중급 러너에게 최적의 가성비 맥시멀 쿠션화입니다. 18만 9천원에 1080급 39.7mm 힐 스택을 제공하며, 무릎 부담이 걱정되는 초보 러너에게 추천합니다. 286g으로 무거운 편이라 5분/km 이하 빠른 페이스에는 부적합하지만, Fresh Foam X 미드솔이 8/10 쿠셔닝으로 장거리에서 무릎과 발바닥 충격을 확실히 흡수합니다. 4mm 로우드롭이 자연스러운 착지-이탈 전환을 돕고, 안정성 8/10으로 뒤꿈치 착지 러너에게도 안정적입니다. 2E/4E 와이드 옵션이 있어 발볼 넓은 한국 러너도 편하게 착용할 수 있고, 토박스 여유가 충분해 장거리 부종에도 대응됩니다. 600km 내구성으로 km당 약 315원의 가성비를 제공하며, 평발 러너도 편안합니다. "무릎 괜찮나요?" 질문에 자신있게 추천할 수 있는 신발입니다.',
    },
    {
      userType: '입문 러너',
      rating: 88,
      text: '올해 1월부터 러닝 시작했는데, 동네 러닝 크루 선배가 880 추천해줘서 270mm 2E 와이드로 샀습니다. 발볼이 넓은 한국인 발이라 와이드 필수였어요. 토박스가 넉넉해서 발가락이 자유롭고 새끼발가락 눌림이 전혀 없습니다. 잠실 석촌호수 한 바퀴(2.5km)부터 시작해서 지금은 5km 35분대까지 왔어요. 무릎이 원래 약한 편인데 39.7mm 힐 스택 쿠셔닝 덕분에 6개월째 무릎 통증 한 번도 없었습니다. 286g이 좀 무겁긴 한데, 입문자한테는 40mm 스택의 Fresh Foam X가 확실히 무릎을 지켜주는 느낌이라 오히려 안심이 됩니다. 18만 9천원에 600km 내구성이면 가성비도 좋고, 평발 기미가 있지만 안정성 8/10이라 발바닥 피로도 적습니다.',
    },
    {
      userType: '중급 러너',
      rating: 78,
      text: '월 120km 정도 뛰는데 리커버리 데이용으로 씁니다. 1080 v14가 메인이고 880은 천천히 뛸 때 신는 용도예요. 286g이 인터벌이나 빠른 페이스에는 확실히 부담되지만 6:00/km 이상 편하게 뛸 때는 40mm 힐 스택의 Fresh Foam X 쿠셔닝이 묵직하고 무릎 보호에 좋습니다. 4mm 드롭이 자연스러운 전환을 도와 뒤꿈치 착지에서 전족부로 부드럽게 넘어갑니다. 400km 넘게 신었는데 아웃솔 마모도 거의 없어서 600km 내구성은 충분히 달성할 것 같고, km당 약 315원으로 가성비가 뛰어납니다. 발볼이 넓어서 275mm 2E 와이드로 착용 중인데 토박스 여유가 충분해 한국 러너 발에 잘 맞고, 18만 9천원에 가성비 최고의 리커버리화입니다.',
    },
    {
      userType: '평발 러너',
      rating: 85,
      text: '평발이라 신발 고르기가 항상 어려웠는데, 275mm 2E 와이드로 신으니 발볼이 편하고 아치 부분도 너무 세게 잡지 않아서 좋습니다. 토박스 여유가 넉넉해 발가락이 자유롭고 장거리 뛸 때 부종이 와도 괜찮습니다. 분당 탄천에서 주 3회 5~7km 뛰고 있는데 286g 무게가 오히려 안정적으로 느껴지고, 39.7mm 힐 스택이 무릎 충격을 확실히 줄여줍니다. 이전에 신던 나이키 페가수스가 토박스가 좁아 발볼이 꽉 끼었는데 880은 처음부터 길들일 필요가 없었습니다. 한국 러너 중 평발이 많다고 하는데, 880이 안정성 8/10으로 평발에도 충분히 대응되고 18만 9천원에 600km 내구성이면 km당 약 315원으로 가성비까지 좋습니다. 4mm 드롭의 자연스러운 전환도 평발 특유의 과내전을 완화해주는 느낌이에요.',
    },
  ],

  similarShoes: ['new-balance-1080-v15', 'new-balance-1080-v14', 'brooks-glycerin-22', 'asics-gel-nimbus-28'],
  purchaseLinks: [{ store: '네이버', url: 'https://naver.me/GRurbDtu' }],
};
