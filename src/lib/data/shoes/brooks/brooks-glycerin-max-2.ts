import type { Shoe } from '@/types/shoe';

export const shoe: Shoe = {
  id: 'brooks-glycerin-max-2',
  slug: 'brooks-glycerin-max-2',
  brand: 'Brooks',
  name: '글리세린 맥스 2',
  image: '/images/shoes/brooks/glycerinmax2/side.webp',
  images: [
    '/images/shoes/brooks/glycerinmax2/side.webp',
    '/images/shoes/brooks/glycerinmax2/top.webp',
  ],
  category: '쿠션화',
  rating: 4,
  status: 'new',
  price: 249000,
  description: '브룩스의 맥시멀 쿠션화. DNA Tuned 미드솔과 47mm 힐 스택으로 극강의 쿠셔닝과 로커 기반 스무스 라이드를 제공합니다.',
  oneliner: '312g에 47mm 스택, 극강의 맥시멀 쿠셔닝',
  editorComment: '글리세린 맥스 2는 47mm 힐/41mm 전족부라는 맥시멀 스택으로 극강의 충격흡수를 제공합니다. v1 대비 로커가 강화되고 피팅이 스너그해져 안정성이 개선되었지만, DNA Tuned 폼이 전작보다 단단해져 "재미"가 줄었다는 평가가 있습니다. 312g(US M9)으로 무거운 편이지만, 리커버리런과 이지데이에 최적화된 신발입니다. 24만 9천원으로 글리세린 맥스 v1(23만 9천원)보다 1만원 올랐고, 본디 9(22만 9천원)보다 2만원 비싸지만 스택이 7mm 더 높습니다.\n\n사이즈·구매 가이드: 토박스가 표준 폭이고 와이드 옵션도 있어 발볼 넓은 러너도 선택할 수 있지만, v2의 스너그 피팅 특성상 반 사이즈 업을 권장합니다. 정가 249,000원에 내구성 600km 기준 km당 약 415원으로, 맥시멀 쿠션화 중 관절 보호 성능 대비 납득 가능한 수준입니다. 더 부드러운 맥시멀을 원하면 본디 9, 가격을 낮추고 싶다면 글리세린 맥스 v1이나 님버스 28이 대안입니다.',
  tags: ['쿠션화', '맥시멀', '리커버리', '장거리'],

  specs: {
    weight: 312,
    cushioning: 10,
    responsiveness: 4,
    stability: 7,
    drop: 6,
    durability: 600,
  },

  biomechanics: {
    stackHeight: { heel: 47, forefoot: 41 },
    drop: 6,
    carbonPlate: false,
    plateType: null,
    midsoleType: 'DNA Tuned',
    optimalPace: '5:30-7:00+ min/km',
  },

  injuryPrevention: {
    plantarFasciitis: 'excellent',
    achillesTendinopathy: 'excellent',
    kneeIssues: 'excellent',
    shinSplints: 'excellent',
  },

  koreanFootFit: {
    toBoxWidth: 'standard',
    flatFootCompatibility: 'good',
    wideOptions: true,
    winterCompatibility: 'good',
    summerCompatibility: 'fair',
  },

  targetUsers: {
    recommended: ['리커버리 러닝', '장거리 이지런', '맥시멀 쿠셔닝 선호', '무릎/관절 보호 필요', '체중 있는 러너'],
    notRecommended: ['빠른 페이스 러닝', '경량화 선호', '템포런/인터벌'],
  },

  features: ['47mm 맥시멀 힐 스택', 'DNA Tuned 미드솔', '강화된 로커 지오메트리', '트리플 자카드 메쉬 어퍼', '스너그 피팅'],

  priceAnalysis: {
    msrp: 249000,
    costPerKm: 415,
    valueRating: 6,
    priceTier: 'premium',
    alternatives: ['hoka-bondi-9', 'asics-gel-nimbus-28', 'new-balance-1080-v15'],
  },

  detailedSpecs: {
    weight: '312g (US M9)',
    stackHeight: '힐 47mm / 포어풋 41mm',
    drop: '6mm',
    midsole: 'DNA Tuned (질소 주입 폼)',
    plate: '없음',
    outsole: '러버 아웃솔',
    upper: '트리플 자카드 메쉬',
    width: '표준 (와이드 옵션 있음)',
    durability: '600km',
    price: '₩249,000',
    costPerKm: '약 ₩415/km (600km 기준)',
    footType: '중립',
    landingPattern: '힐스트라이크~미드풋',
  },

  reviews: [
    {
      userType: '에디터 분석',
      rating: 78,
      text: '47mm 힐 스택이 주는 맥시멀 쿠셔닝은 리커버리와 이지데이에 최적입니다. 249,000원에 312g 무게로 본디 9(229,000원)보다 2만원 비싸지만, 스택이 7mm 더 높아 SA 충격흡수가 탁월하고 무릎 보호 성능은 excellent 등급입니다. v1 대비 DNA Tuned의 HA 경도가 올라 단단해진 점은 아쉽지만 로커가 강화되어 전환이 매끄럽습니다. 600km 내구성이면 km당 약 415원으로 가성비는 높지 않지만, 관절 보호가 절실한 러너에게 투자 가치가 있습니다. 와이드 옵션이 있어 발볼 넓은 한국 러너도 착용 가능하고, 평발 호환성도 good 등급입니다. 토박스 여유는 표준이라 반 사이즈 업을 권장하며, 6분/km 이상 느린 이지런 전용으로 적합합니다.',
    },
    {
        userType: '예상 적합 — 충격 완화 최우선의 저강도 러닝',
        text: '착지 충격을 줄이는 것이 최우선인 저강도 러닝·걷기 병행 용도에 맞는 맥시멀 쿠션화입니다. 스택이 두꺼워 아스팔트나 완만한 산길에서 관절로 올라오는 충격을 크게 줄이는 구조입니다. 다만 312g으로 이 등급에서도 무거운 축이라 페이스를 올리는 용도에는 맞지 않습니다. 와이드를 고르더라도 전체 핏이 꽉 맞는 편이라 반 치수 여유를 두는 편이 낫습니다. 무릎 통증이 반복된다면 신발 이전에 훈련량과 전문의 판단이 먼저입니다.',
      },
    {
        userType: '세대 비교 — v1보다 단단해진 방향',
        text: '전작 v1에서 성격이 바뀐 세대입니다. DNA Tuned가 더 단단해져 v1의 푹신한 감각은 줄었고, 대신 로커 전환이 개선됐습니다. 회복 조깅에서 최대한 부드러운 감각을 원했다면 이 변화는 후퇴로 느껴질 수 있고, 반대로 지나치게 물러 페이스가 안 나오던 문제를 겪었다면 개선입니다. 맥시멀 쿠션화로서의 완성도 자체는 유지되므로, v1을 기준으로 삼고 있다면 시착으로 감각 차이를 먼저 확인하는 편이 좋습니다.',
      },
  ],

  similarShoes: ['hoka-bondi-9', 'brooks-glycerin-max', 'asics-gel-nimbus-28', 'new-balance-1080-v15'],
  relatedPosts: [
    { slug: 'bondi-9-vs-glycerin-max-2-cushion-2026', title: '본디 9 vs 글리세린 맥스 2 — 맥스쿠션 대결' },
  ],
  purchaseLinks: [{ store: '네이버', url: 'https://naver.me/GM36EYXT' }],
};
