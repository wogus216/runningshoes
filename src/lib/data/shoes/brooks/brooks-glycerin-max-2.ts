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
  oneliner: '318g(랩)에 47mm 스택(브랜드), 극강의 맥시멀 쿠셔닝',
  editorComment: '글리세린 맥스 2는 47mm 힐/41mm 전족부라는 맥시멀 스택으로 극강의 충격흡수를 제공합니다. RunRepeat 랩(남성 US 9 기준)으로는 힐 45.4mm·포어풋 37.3mm, 드롭 8.1mm, 무게 318g, 힐 충격흡수 137 SA이고, 경도는 30.9 AC로 v1(31.9 AC)과 거의 같습니다. 에너지 리턴은 포어풋 49.6%로 랩 평균(61.5%)보다 낮아 반발보다 쿠션 위주입니다. 무거운 편이지만, 리커버리런과 이지데이에 최적화된 신발입니다. 24만 9천원으로 글리세린 맥스 v1(23만 9천원)보다 1만원 올랐고, 본디 9(22만 9천원)보다 2만원 비싸지만 스택이 7mm 더 높습니다.\n\n사이즈·구매 가이드: RunRepeat 랩 토박스는 73.4mm로 평균(73.2mm) 수준이고, 전체 폭 96.5mm는 랩이 "slightly roomier than the average running shoe"라고 적은 수치라 보통 발볼이면 정사이즈부터 보면 됩니다. 정가 249,000원에 예상 수명 500~700km(추정) 기준 km당 약 360~500원으로, 맥시멀 쿠션화 중 관절 보호 성능 대비 납득 가능한 수준입니다. 더 부드러운 맥시멀을 원하면 본디 9, 가격을 낮추고 싶다면 글리세린 맥스 v1이나 님버스 28이 대안입니다.',
  tags: ['쿠션화', '맥시멀', '리커버리', '장거리'],

  specs: {
    weight: 318,
    cushioning: 8,
    responsiveness: 6,
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
    wideOptions: false,
    winterCompatibility: 'good',
    summerCompatibility: 'fair',
  },

  targetUsers: {
    recommended: ['리커버리 러닝', '장거리 이지런', '맥시멀 쿠셔닝 선호', '무릎/관절 보호 필요', '체중 있는 러너'],
    notRecommended: ['빠른 페이스 러닝', '경량화 선호', '템포런/인터벌'],
  },

  features: ['47mm 맥시멀 힐 스택', 'DNA Tuned 미드솔', '강화된 로커 지오메트리', '트리플 자카드 메쉬 어퍼', '랩 토박스 73.4mm (평균 수준)'],

  priceAnalysis: {
    msrp: 249000,
    costPerKm: 415,
    valueRating: 6,
    priceTier: 'premium',
    alternatives: ['hoka-bondi-9', 'asics-gel-nimbus-28', 'new-balance-1080-v15'],
  },

  detailedSpecs: {
    weight: '318g (RunRepeat 랩 실측, 남성 US 9) · 기존 표기 312g(US M9)',
    stackHeight: '힐 45.4mm / 포어풋 37.3mm (RunRepeat 랩 실측, 남성 US 9) · 브랜드 47/41mm',
    drop: '8.1mm (RunRepeat 랩 실측) · 브랜드 6mm',
    midsole: 'DNA Tuned (질소 주입 폼)',
    plate: '없음',
    outsole: '러버 아웃솔',
    upper: '트리플 자카드 메쉬',
    width: '표준 — RunRepeat 랩 토박스 73.4mm(평균 73.2mm, 남성 US 9), Width/Fit 96.5mm. 랩 본문 "It’s not the roomiest design we’ve tested, but it should comfortably work for most runners". 한국 공식몰은 남 MEDIUM(D)·여 MEDIUM(B)만 판매, 와이드 없음(2026-10-20 확인)',
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
      text: '47mm 힐 스택이 주는 맥시멀 쿠셔닝은 리커버리와 이지데이에 최적입니다. 249,000원에 318g(랩) 무게로 본디 9(229,000원)보다 2만원 비싸지만, 스택이 7mm 더 높아 SA 충격흡수가 탁월하고 무릎 보호 성능은 excellent 등급입니다. 랩 경도는 30.9 AC로 v1(31.9 AC)과 거의 같은 부드러운 쪽입니다. 600km 내구성이면 km당 약 415원으로 가성비는 높지 않지만, 관절 보호가 절실한 러너에게 투자 가치가 있습니다. 한국 공식몰에는 와이드 없이 MEDIUM만 있어 발볼이 아주 넓다면 시착이 먼저이고, 평발 호환성은 good 등급입니다. 토박스는 랩 73.4mm로 평균 수준이며, 6분/km 이상 느린 이지런 전용으로 적합합니다.',
    },
    {
        userType: '예상 적합 — 충격 완화 최우선의 저강도 러닝',
        text: '착지 충격을 줄이는 것이 최우선인 저강도 러닝·걷기 병행 용도에 맞는 맥시멀 쿠션화입니다. 스택이 두꺼워 아스팔트나 완만한 산길에서 관절로 올라오는 충격을 크게 줄이는 구조입니다. 다만 318g(랩)으로 이 등급에서도 무거운 축이라 페이스를 올리는 용도에는 맞지 않습니다. 랩 토박스 73.4mm·전체 폭 96.5mm로 평균 이상이라 보통 발볼이면 정사이즈부터 시착해 보면 됩니다. 무릎 통증이 반복된다면 신발 이전에 훈련량과 전문의 판단이 먼저입니다.',
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
  purchaseLinks: [{ store: '쿠팡', url: 'https://link.coupang.com/a/g5YA29QMeW' }],
};
