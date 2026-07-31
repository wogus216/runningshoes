import type { Shoe } from '@/types/shoe';

export const shoe: Shoe = {
  id: 'nike-pegasus-41',
  slug: 'nike-pegasus-41',
  brand: 'Nike',
  name: '페가수스 41',
  image: '/images/shoes/nike/pegasus41/side.webp',
  images: ['/images/shoes/nike/pegasus41/side.webp', '/images/shoes/nike/pegasus41/outsole.webp', '/images/shoes/nike/pegasus41/top.webp', '/images/shoes/nike/pegasus41/pair.webp'],
  category: '입문화',
  rating: 4,
  price: 159000,
  description: '초보부터 중급까지, 모든 러너를 위한 올라운더 러닝화입니다. 편안한 착화감과 충분한 쿠셔닝으로 첫 러닝화로 완벽한 선택입니다.',
  oneliner: '15만원대에 550km 굴리는, 검증된 입문 올라운더',
  editorComment: 'ReactX 폼으로 281g 무게 대비 뛰어난 쿠셔닝(9/10 점수)을 제공하며, 550km 내구성으로 km당 약 289원이라는 압도적 가성비를 자랑합니다. 아식스 젤 님버스 28(20만원)보다 4만원 저렴하면서 쿠셔닝은 거의 동급이고, 와이드/X-와이드 옵션까지 갖춰 발볼 넓은 한국 러너도 선택 가능합니다. 11mm 하이드롭으로 힐스트라이커(뒤꿈치 착지 러너)에게 최적화되어 있으나, 중족부 착지 러너라면 브룩스 고스트 맥스(6mm 드롭)가 더 적합합니다.\n\n사이즈·구매 가이드: 토박스가 표준 폭이라 발볼이 보통인 러너에게 맞고, 광폭이면 와이드·X-와이드 옵션을 함께 보세요. 정가 159,000원에 내구성 550km 기준 km당 약 289원입니다. 같은 입문화 카테고리로는 페가수스 42·젤 님버스 28이 대안입니다.',
  tags: ['입문화', '데일리 러닝', '쿠셔닝 우수'],

  specs: {
    weight: 281,
    cushioning: 9,
    responsiveness: 7,
    stability: 8,
    drop: 11,
    durability: 550,
  },

  biomechanics: {
    stackHeight: {
      heel: 34,
      forefoot: 22,
    },
    drop: 11,
    carbonPlate: false,
    plateType: null,
    midsoleType: 'ReactX Foam',
    optimalPace: '5:00-7:00 min/km',
  },

  injuryPrevention: {
    plantarFasciitis: 'excellent',
    achillesTendinopathy: 'excellent',
    kneeIssues: 'caution',
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
    recommended: ['러닝 입문자 (쿠셔닝 중시)', '무릎 보호가 필요한 러너', '장거리 편안함 원하는 분', '가성비 좋은 올라운더 찾는 분', '뒤꿈치 착지(RFS) 러너', '데일리 5-10km 주행'],
    notRecommended: ['마라톤 기록 단축 목표', '초경량 레이싱화 찾는 분', '강한 반발력 원하는 상급자', '대회용 전문 러닝화 필요'],
  },

  features: ['최상급 착화감', '충분한 쿠셔닝 (초보자 최우선)', '적정 무게 (280g)', '뛰어난 가성비 (15만원대)'],

  priceAnalysis: {
    msrp: 159000,
    streetPrice: 135000,
    costPerKm: 289,
    valueRating: 9,
    priceTier: 'mid',
    alternatives: ['asics-gel-nimbus-28', 'new-balance-880-v15', 'hoka-clifton-10'],
  },

  reviews: [
    {
      userType: '에디터 분석',
      rating: 85,
      text: '"초보도 신을 수 있나요?" 질문에 가장 자신있게 추천하는 입문화입니다. 15만원대로 가성비 좋고, ReactX 폼으로 281g 무게 대비 편안한 쿠셔닝을 제공합니다. 550km 뛰어난 내구성으로 km당 약 289원 수준이며, 34mm 힐 스택과 11mm 하이드롭으로 무릎 보호와 힐스트라이커 착지에 최적화되어 있습니다. 와이드/X-와이드 옵션이 있어 발볼 넓은 한국 러너도 토박스 압박 없이 선택 가능합니다. 53% 에너지 리턴은 최신 폼 대비 부족하지만 데일리 훈련에는 충분하고, 표준 사이즈가 좁은 편이라 반드시 신어보세요. 평발 러너도 와이드 + 교정 인솔로 활용 가능합니다. 한국 러너 입문화 부동의 1위로, 5km 조깅부터 하프마라톤 훈련까지 올라운드로 커버하는 데일리 트레이너입니다.',
    },
    {
        userType: '예상 적합 — 주 3회 전후로 시작하는 입문 러너',
        text: '주 3회 안팎으로 러닝을 시작한 입문 러너에게 무난한 선택입니다. 11mm 드롭이라 뒤꿈치 착지가 익숙한 초기 단계에서 전환 부담이 적고, 힐 34mm 스택이 아스팔트 충격을 받아냅니다. 폼이 무르지 않은 편이라 초기 착화감은 다소 단단하게 느껴질 수 있는데, 그만큼 형태 유지가 좋아 내구성 550km 기준 km당 약 289원으로 운용 비용이 낮습니다. 5km부터 하프까지 한 켤레로 커버하는 올라운더 성격이라 용도를 아직 정하지 못한 단계에 맞습니다. 와이드 옵션이 있어 발볼 넓은 러너의 선택지가 넓지만, 아치 지지가 강한 편은 아니라 평발이 뚜렷하면 안정화 계열을 함께 검토하세요.',
      },
    {
        userType: '로테이션 — 주행거리를 받쳐주는 기본축',
        text: '월 150km 안팎의 주행거리에서 이지런과 LSD를 받치는 기본축으로 맞습니다. 힐 34mm 스택에 내구성 550km, km당 약 289원이라 거리를 많이 쌓아도 운용 비용이 낮습니다. 다만 281g으로 무거운 편이라 인터벌 같은 속도 세션에서는 무게가 체감되므로, 빠른 날은 가벼운 모델로 나누는 로테이션이 전제입니다. 와이드 옵션이 있어 발볼 넓은 경우에도 장거리 압박이 적고, 아치 지지가 필요하면 같은 브랜드 스트럭처 계열이 맞습니다.',
      },
    {
        userType: '비용 관점 — 세일 시점을 노릴 때의 단가',
        text: '데일리 중 운용 비용이 가장 낮은 축입니다. 정가 기준으로도 내구성 550km라 단가가 낮은데, 연말 세일 시점에 12만원대로 잡으면 km당 약 289원까지 내려갑니다. 폼과 아웃솔 모두 마모가 느린 편이라 500km를 넘겨도 쿠션이 급격히 죽지 않습니다. 281g에 힐 34mm 스택으로 성능은 표준적이지만, 매년 재고가 풀리는 대중 모델이라 세일 접근성이 좋다는 점이 실질적인 이점입니다. 와이드 옵션이 있어 발볼 넓은 경우에도 대응되며, 아치 지지가 필요하면 같은 브랜드 스트럭처 계열이 맞습니다.',
      },
    {
        userType: '적합성 경계 — 4E급 발볼은 와이드 전제, 심한 과내전은 부적합',
        text: '발볼이 4E급이면 표준 사이즈로는 새끼발가락 압박이 생겨 5km 이후 저림으로 이어지기 쉽습니다. 와이드 옵션이 있으므로 처음부터 와이드를 전제로 보는 것이 맞습니다. 아치 지지는 중립 수준이라 가벼운 평발까지는 대응되지만, 과내전이 뚜렷하다면 안정화 계열(스트럭처 26·카야노)이 구조적으로 맞습니다. 교정 인솔로 일부 보완할 수는 있으나 미드솔에 지지 구조가 없다는 점은 그대로입니다. 힐 34mm 스택에 11mm 드롭이라 뒤꿈치 착지에는 무리가 없고, 내구성 550km 기준 km당 약 289원입니다.',
      },
  ],

  detailedSpecs: {
    weight: '281g (남성 US 9 기준) / 240g (여성 US 7)',
    stackHeight: '힐 34mm / 포어풋 22mm',
    drop: '11mm (표준 드롭, 뒤꿈치 착지 유도)',
    midsole: 'ReactX 폼 (EVA보다 우수한 에너지 리턴)',
    plate: '없음 (자연스러운 발 움직임, 초보자 안전)',
    outsole: '고무 + 와플 패턴 (내구성 우수)',
    upper: '엔지니어드 메쉬 (통기성 우수)',
    width: '표준 (와이드, X-와이드 옵션 있음)',
    durability: '500-600km (내구성 우수)',
    price: '₩159,000 (MSRP) / 세일 시 ₩120,000~',
    costPerKm: '약 ₩289/km (550km 기준)',
    footType: '평발 OK / 높은 아치 OK / 와이드 옵션 있음',
    landingPattern: '뒤꿈치 착지(RFS) 최적',
  },

  similarShoes: ['nike-pegasus-42', 'adidas-supernova-rise-2', 'asics-gel-nimbus-28', 'new-balance-880-v15', 'hoka-clifton-10'],
  relatedPosts: [
    { slug: 'novablast-5-vs-pegasus-41-daily-cushion-2026', title: '노바블라스트 5 vs 페가수스 41 — 데일리 쿠션 대결' },
    { slug: 'nike-pegasus-41-vs-42-comparison', title: '페가수스 41 vs 42 — 세대 비교' },
    { slug: 'first-running-shoe-guide-2026', title: '첫 러닝화 완벽 가이드' },
  ],
  purchaseLinks: [{ store: '네이버', url: 'https://naver.me/FxCvSGHY' }],
};
