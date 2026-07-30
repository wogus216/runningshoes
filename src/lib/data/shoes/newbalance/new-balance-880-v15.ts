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
        userType: '예상 적합 — 2.5km부터 5km로 늘려가는 단계',
        text: '짧은 거리부터 시작해 5km로 늘려가는 입문 단계에 맞습니다. 힐 39.7mm 스택의 Fresh Foam X라 착지 충격이 관절로 전달되는 정도가 적고, 안정성 8/10 수준이라 가벼운 평발 성향까지 대응됩니다. 286g으로 무겁지만 이 단계의 페이스에서는 접지 안정감으로 작용합니다. 2E 와이드가 있고 토박스도 넉넉해 발볼이 넓은 경우 새끼발가락 압박이 적습니다. 189,000원·내구성 600km 기준으로 첫 신발의 비용 부담이 낮은 편입니다.',
      },
    {
        userType: '로테이션 — 6분대 이상의 회복 담당',
        text: '메인 쿠션화와 짝을 이뤄 회복일을 담당하기에 맞습니다. 286g으로 무거워 빠른 페이스에는 부담이지만, 6분/km 이상에서는 40mm 힐 스택의 Fresh Foam X가 묵직하게 받쳐줍니다. 4mm의 낮은 드롭이라 뒤꿈치에서 전족부로의 전환이 부드럽습니다. 아웃솔 마모가 느려 내구성 600km에 근접하게 쓸 수 있고 km당 약 315원입니다. 2E 와이드가 있어 발볼 대응도 됩니다.',
      },
    {
        userType: '예상 적합 — 아치를 세게 잡지 않는 평발 대응',
        text: '평발 성향이지만 안정화의 강한 아치 지지가 불편했던 경우에 맞습니다. 안정성 8/10 수준으로 과내전을 완만하게 잡으면서 아치를 세게 밀어올리지 않아, 지지가 과할 때 생기는 불편이 적습니다. 토박스 여유가 넉넉해 장거리에서 발이 부어도 압박이 덜하고, 길들이는 기간 없이 바로 신을 수 있는 편입니다. 힐 39.7mm 스택에 4mm 드롭이라 전환도 자연스럽습니다. 2E 와이드가 있고, 189,000원·내구성 600km 기준 km당 약 315원입니다.',
      },
  ],

  similarShoes: ['new-balance-1080-v15', 'new-balance-1080-v14', 'brooks-glycerin-22', 'asics-gel-nimbus-28'],
  purchaseLinks: [{ store: '네이버', url: 'https://naver.me/GRurbDtu' }],
};
