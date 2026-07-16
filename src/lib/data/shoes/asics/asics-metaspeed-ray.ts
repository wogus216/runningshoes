import type { Shoe } from '@/types/shoe';

export const shoe: Shoe = {
  id: 'asics-metaspeed-ray',
  slug: 'asics-metaspeed-ray',
  brand: 'Asics',
  name: '메타스피드 레이',
  image: '/images/shoes/asics/metaspeedray/side.webp',
  images: [
    '/images/shoes/asics/metaspeedray/side.webp',
    '/images/shoes/asics/metaspeedray/top.webp',
    '/images/shoes/asics/metaspeedray/outsole.webp',
    '/images/shoes/asics/metaspeedray/front.webp',
    '/images/shoes/asics/metaspeedray/back.webp',
  ],
  category: '레이싱',
  rating: 5,
  status: 'new',
  price: 399000,
  description: '아식스의 초경량 엘리트 레이싱화. 129g이라는 놀라운 무게에 FF Leap ATPU 폼과 3/4 카본 플레이트로 전족부 착지 러너에게 최고의 에너지 리턴(81%)을 제공합니다.',
  oneliner: '129g 초경량, 81% 에너지 리턴의 전족부 특화 레이서',
  editorComment: '메타스피드 레이는 129g이라는 시장 최경량 무게로 "가벼움의 극한"을 추구한 엘리트 레이싱화입니다. FF Leap(ATPU) 폼은 FF Turbo+ 대비 15% 가볍고 13.7% 더 탄성 있으며, 전족부 에너지 리턴 81%는 업계 최고 수준입니다. 3/4 카본 플레이트라는 파격적 선택으로 전족부 착지 러너에게 최적화되어 있지만, 힐스트라이커에겐 비추천입니다. 39만 9천원으로 메타스피드 스카이(32만 9천원)보다 비싸지만, 5K~마라톤 전 거리에서 기록 단축을 노리는 엘리트에게 새로운 무기입니다.\n\n사이즈·구매 가이드: 토박스가 좁고 와이드 옵션이 없어 발볼 넓은 러너에게는 맞지 않습니다. 반드시 매장에서 착화 후 결정하거나, 발볼이 넓다면 메타스피드 스카이+를 선택하세요. 정가 399,000원에 내구성 200km 기준 km당 약 1,995원으로 대회 전용으로만 아껴 사용해야 합니다. 전족부 착지 패턴이 아니라면 메타스피드 스카이+나 메타스피드 엣지+가 더 적합합니다.',
  tags: ['레이싱', '카본', '엘리트', '초경량', '전족부'],

  specs: {
    weight: 129,
    cushioning: 6,
    responsiveness: 10,
    stability: 3,
    drop: 5,
    durability: 200,
  },

  biomechanics: {
    stackHeight: { heel: 39.5, forefoot: 34.5 },
    drop: 5,
    carbonPlate: true,
    plateType: '3/4-length carbon',
    midsoleType: 'FF Leap (ATPU)',
    optimalPace: '3:00-4:30 min/km',
  },

  injuryPrevention: {
    plantarFasciitis: 'warning',
    achillesTendinopathy: 'caution',
    kneeIssues: 'caution',
    shinSplints: 'caution',
  },

  koreanFootFit: {
    toBoxWidth: 'narrow',
    flatFootCompatibility: 'poor',
    wideOptions: false,
    winterCompatibility: 'fair',
    summerCompatibility: 'excellent',
  },

  targetUsers: {
    recommended: ['전족부/중족부 착지 엘리트', '서브3 마라토너', '5K/10K 기록 도전', '초경량 레이서 선호'],
    notRecommended: ['힐스트라이커', '입문 러너', '데일리 훈련용', '과내전/안정화 필요', '발볼 넓은 러너'],
  },

  features: ['129g 시장 최경량', 'FF Leap ATPU 미드솔', '3/4 카본 플레이트', '81% 전족부 에너지 리턴', '전족부 착지 최적화'],

  priceAnalysis: {
    msrp: 399000,
    costPerKm: 1995,
    valueRating: 5,
    priceTier: 'super-premium',
    alternatives: ['asics-metaspeed-sky-plus', 'nike-alphafly-3', 'saucony-endorphin-elite-2'],
  },

  detailedSpecs: {
    weight: '129g (US M9)',
    stackHeight: '힐 39.5mm / 포어풋 34.5mm',
    drop: '5mm',
    midsole: 'FF Leap (ATPU 기반, FF Turbo+ 대비 15% 경량)',
    plate: '3/4 카본 플레이트',
    outsole: '최소 러버',
    upper: '초경량 메쉬',
    width: '좁음',
    durability: '200km',
    price: '₩399,000',
    costPerKm: '약 ₩1,995/km (200km 기준)',
    footType: '전족부/중족부 착지 전용',
    landingPattern: '전족부 착지 전용',
  },

  reviews: [
    {
      userType: '에디터 분석',
      rating: 90,
      text: '129g이라는 무게는 손에 들면 "이게 러닝화가 맞나?"라는 의문이 드는 초경량입니다. FF Leap ATPU 폼의 전족부 에너지 리턴 81%는 업계 최상위 수준이며, 39.5mm 힐 스택에 5mm 드롭의 설계로 전족부 착지 러너에게 완벽하게 최적화되어 있습니다. 하지만 토박스가 좁고 와이드 옵션이 없어 발볼 넓은 한국 러너에게는 비추천입니다. 3/4 카본 플레이트는 전족부에 스냅을 집중시키는 대신 힐 착지 시 불안정하므로 힐스트라이커는 반드시 피해야 합니다. 39만 9천원에 200km 대회 전용 수명은 km당 약 1,995원이지만, 기록 단축의 가치와 129g의 가벼움은 서브2:50 이상 엘리트에게는 충분한 이유가 됩니다. 평발이나 과내전 러너에게도 안정성 부족으로 비추천이며, 이 경우 메타스피드 스카이+를 검토하세요. 가민 워치 착지 패턴 데이터를 먼저 확인한 뒤 구매하길 권합니다.',
    },
    {
      userType: '상급 러너',
      rating: 5,
      text: '서브2:50 마라토너로 여러 슈퍼슈즈를 써봤는데, 메타스피드 레이의 129g은 신발을 안 신은 것 같은 느낌입니다. 하프 PB를 1분 20초 단축했어요. 전족부 착지하는 저에게 이 신발은 완벽합니다. 카본의 스냅이 전족부에 집중되어 추진력이 엄청나고, 39.5mm 스택인데도 100g대 무게라 발이 전혀 무겁지 않습니다. 단점은 토박스가 좁아서 발볼 넓은 러너는 발가락이 조일 수 있고 와이드 옵션도 없어요. 제 경우 270mm 착용 중인데 표준 발볼이라 핏은 나쁘지 않습니다. 대회 전용으로 200km 기준 km당 약 1,995원이니 훈련용으로는 비효율적이고, 대회 3~4회 전용으로 아껴 쓰면 2년은 갑니다. 전족부 착지 러너라면 가장 먼저 검토해볼 초경량 레이서입니다.',
    },
    {
      userType: '중급 러너',
      rating: 3,
      text: '10K 대회용으로 첫 구입했는데 솔직히 힐스트라이커인 저에게는 맞지 않았습니다. 3/4 카본 플레이트라 뒤꿈치 착지 시 힐 쪽 지지가 없고 미끄러지는 느낌이 들었어요. 구매 전에 가민 워치 착지 패턴을 확인했더니 힐스트라이크 90%였거든요. 발볼도 좁아서 268mm 착용하는 제 발이 조이는 느낌이었고, 토박스가 5km 이후부터 불편해졌습니다. 결국 메타스피드 스카이+로 교환했는데 스카이+가 훨씬 잘 맞더라고요. 39만 9천원이라는 가격을 생각하면 본인 착지 패턴 확인이 필수입니다. 전족부 착지가 맞는 분에게는 129g + 81% 에너지 리턴이 혁신적이겠지만, 한국 러너 대부분이 힐스트라이커인 걸 감안하면 구매 전 꼭 트레드밀 분석을 받아보길 권합니다.',
    },
  ],

  similarShoes: ['asics-metaspeed-sky-plus', 'asics-metaspeed-edge-plus', 'nike-alphafly-3', 'saucony-endorphin-elite-2'],
  purchaseLinks: [],
};
