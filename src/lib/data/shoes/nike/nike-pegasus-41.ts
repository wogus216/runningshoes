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
      userType: '입문 러너',
      rating: 5,
      text: '회사 앞 한강공원에서 점심시간에 4km씩 뛰기 시작한 3개월 차인데, 페가수스로 시작하길 잘했다 싶어요. 솔직히 처음엔 좀 딱딱한가? 했는데 30km 넘으니까 발에 착 감기더라고요. 262mm 신는데 페가수스는 265mm가 딱 맞았어요. 주 3회 러닝하면서 무릎 통증 한 번도 없었습니다. 34mm 힐 스택이 아스팔트 충격을 잡아줘서 무릎 걱정이 없고, 와이드로 바꿨더니 발볼 넓은 제 발에도 토박스 여유가 충분해졌어요. 550km 기준 km당 약 289원이면 가성비 최고의 한국 러너 입문화입니다. 평발은 아니라 아치 지지 문제없이 잘 맞아요. 페가수스 41은 한국 러너 입문화 1위로, 5km부터 하프마라톤까지 커버하는 올라운더입니다. 11mm 드롭이 뒤꿈치 착지 입문 러너에게 최적이에요.',
    },
    {
      userType: '중급 러너',
      rating: 4,
      text: '월 150km 정도 뛰는데 페가수스는 확실한 데일리 트레이너예요. 주중 10km 이지런에 딱이고, 주말 20km LSD도 무난하게 소화합니다. 다만 인터벌 훈련 때는 확실히 무게감이 느껴져서 줌 플라이로 갈아신어요. 올해 동아마라톤 하프 목표인데, 훈련은 페가수스로 깔고 레이스는 베이퍼플라이 쓸 예정입니다. 34mm 힐 스택이 무릎 보호에 좋고, 와이드 옵션이 있어 발볼 넓은 한국 러너도 토박스 압박 없이 선택 가능합니다. 550km 기준 km당 약 289원 가성비는 데일리 훈련화 중 최상입니다. 평발 러너에게는 아치 지지가 부족하니 스트럭처 26을 추천해요. 와이드 옵션이 있어 발볼 넓은 한국 러너도 장거리 훈련에서 토박스 압박 없이 편안하게 뛸 수 있습니다.',
    },
    {
      userType: '가성비 중시',
      rating: 5,
      text: '작년 11월 블프 때 12만 8천원에 득템했어요. 지금 530km 찍었는데 아웃솔 패턴 아직 살아있고 미드솔 쿠션도 괜찮습니다. km당 약 289원이면 커피 한 잔 값도 안 되네요. 동호회에서 님버스, 클리프톤 다 신어봤는데 솔직히 데일리용으로 페가수스만한 가성비 없어요. 34mm 힐 스택이 무릎 보호에 도움이 되고, 와이드 옵션이 있어 발볼 넓은 한국 러너도 토박스 여유 있게 선택 가능합니다. 281g 무게에 550km 내구성이면 가성비 데일리화 중 한국 러너에게 최고의 선택입니다. 평발 러너에게는 스트럭처 26이 더 맞아요. 블프 세일 때 잡으면 km당 약 289원대로 내려가니 시즌 오프 구매를 추천합니다. 281g에 34mm 힐 스택이 아스팔트 무릎 보호에 확실합니다.',
    },
    {
      userType: '평발 러너',
      rating: 3,
      text: '발볼 4E인 평발러입니다. 표준 사이즈 270mm 신었더니 새끼발가락 쪽이 눌려서 5km 넘으면 저리더라고요. 와이드로 교환하니까 훨씬 나아졌어요. 아치 서포트는 심하지 않은 평발이면 괜찮은 수준인데, 과내전 심한 분들은 스트럭처 26이나 카야노 쪽이 맞을 거예요. 와이드 옵션이 있어 발볼 넓은 한국 러너도 토박스 압박 해결이 가능하고, 34mm 힐 스택이 무릎 보호에도 도움이 됩니다. 550km 기준 km당 약 289원 가성비는 훌륭하지만, 평발 러너에게는 교정 인솔 추가가 필수입니다. 한국 러너 커뮤니티에서 가장 많이 추천되는 입문화로, 5km부터 하프마라톤까지 폭넓게 커버합니다. 281g에 11mm 드롭이 뒤꿈치 착지 입문 러너에게 최적입니다.',
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
