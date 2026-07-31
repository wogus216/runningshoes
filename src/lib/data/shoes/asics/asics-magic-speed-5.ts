import type { Shoe } from '@/types/shoe';

export const shoe: Shoe = {
  id: 'asics-magic-speed-5',
  slug: 'asics-magic-speed-5',
  brand: 'Asics',
  name: '매직스피드 5',
  image: '/images/shoes/asics/magicspeed5/side.webp',
  images: [
    '/images/shoes/asics/magicspeed5/side.webp',
    '/images/shoes/asics/magicspeed5/top.webp',
    '/images/shoes/asics/magicspeed5/outsole.webp',
    '/images/shoes/asics/magicspeed5/front.webp',
    '/images/shoes/asics/magicspeed5/back.webp',
  ],
  category: '레이싱',
  rating: 4.5,
  status: 'new',
  price: 229000,
  description: '아식스의 가성비 카본 레이싱화. FF Leap + FF Blast+ 듀얼 폼과 포크형 카본 플레이트로 전작 대비 50g 경량화되어 템포런부터 대회까지 폭넓게 활용 가능합니다.',
  oneliner: '193g에 포크형 카본, 50g 감량된 가성비 레이서',
  editorComment: '매직스피드 5는 전작(242g) 대비 50g 감량한 193g으로 완전히 다른 신발이 되었습니다. FF Leap 상층+FF Blast+ 하층의 듀얼 폼 구성으로 에너지 리턴이 64.6%/62.6%(힐/전족부)에 달합니다. 포크형 카본 플레이트는 풀렝스보다 유연해 전환이 자연스럽고, 초보자도 부담 없이 접근할 수 있습니다. 22만 9천원으로 메타스피드(39만 9천원)의 절반 가격에 카본 레이싱을 경험할 수 있어 가성비가 뛰어납니다. 카본 효과는 그룹 평균이 아니라 개인 반응으로 판단해야 합니다(연구상 편차 ±11%p). 보급형 카본의 장점은 부담 없이 그 검증을 해볼 수 있다는 것 — 포인트 훈련에서 기록 변화를 직접 재보세요.\n\n사이즈·구매 가이드: 토박스가 표준 폭이고 와이드 옵션이 없어 발볼 넓은 러너는 반드시 매장에서 착화 후 구매하거나 줌 플라이 6를 검토하세요. 정가 229,000원에 내구성 400km 기준 km당 약 572원으로, 카본 레이싱화 가성비 입문으로 합리적입니다. 전작 매직스피드 4 대비 50g 경량화가 핵심이며, 더 많은 훈련 거리를 소화하고 싶다면 엔돌핀 스피드 5가 대안입니다.',
  tags: ['레이싱', '카본', '템포', '가성비'],

  specs: {
    weight: 193,
    cushioning: 6,
    responsiveness: 8,
    stability: 5,
    drop: 7,
    durability: 400,
  },

  biomechanics: {
    stackHeight: { heel: 37, forefoot: 30 },
    drop: 7,
    carbonPlate: true,
    plateType: 'forked carbon fiber',
    midsoleType: 'FF Leap + FF Blast+',
    optimalPace: '3:30-5:00 min/km',
  },

  injuryPrevention: {
    plantarFasciitis: 'caution',
    achillesTendinopathy: 'caution',
    kneeIssues: 'good',
    shinSplints: 'caution',
  },

  koreanFootFit: {
    toBoxWidth: 'standard',
    flatFootCompatibility: 'fair',
    wideOptions: false,
    winterCompatibility: 'fair',
    summerCompatibility: 'good',
  },

  targetUsers: {
    recommended: ['템포런/인터벌 훈련', '대회 입문 러너', '카본화 첫 경험', '가성비 레이싱'],
    notRecommended: ['데일리 이지런', '과내전 러너', '발볼 넓은 러너'],
  },

  features: ['FF Leap + FF Blast+ 듀얼 폼', '포크형 카본 파이버 플레이트', '193g 초경량 (전작 대비 -50g)', '에너지 리턴 64.6%/62.6%', 'ASICSGRIP 아웃솔'],

  priceAnalysis: {
    msrp: 229000,
    costPerKm: 572,
    valueRating: 8,
    priceTier: 'premium',
    alternatives: ['nike-zoom-fly-6', 'adidas-boston-13', 'saucony-endorphin-speed-5'],
  },

  detailedSpecs: {
    weight: '193g (US M9)',
    stackHeight: '힐 37mm / 포어풋 30mm',
    drop: '7mm',
    midsole: 'FF Leap (상층) + FF Blast+ (하층)',
    plate: '포크형 카본 파이버 플레이트',
    outsole: 'ASICSGRIP 러버',
    upper: '경량 엔지니어드 메쉬',
    width: '표준',
    durability: '400km',
    price: '₩229,000',
    costPerKm: '약 ₩572/km (400km 기준)',
    footType: '중립',
    landingPattern: '중족부/전족부 착지',
  },

  reviews: [
    {
      userType: '에디터 분석',
      rating: 87,
      text: '"카본화를 처음 사봐도 될까요?"라는 질문에 가장 먼저 권하는 아식스 가성비 레이싱화입니다. 전작(242g) 대비 50g 감량한 193g으로 완전히 새로운 신발이 되었으며, FF Leap 상층+FF Blast+ 하층 듀얼 폼으로 에너지 리턴이 64.6%/62.6%(힐/전족부)에 달합니다. 포크형 카본 플레이트는 풀렝스보다 유연해 힐스트라이커도 자연스럽게 전환할 수 있습니다. 37mm 힐 스택에 7mm 드롭으로 카본화 입문자도 부담 없이 적응할 수 있는 구조입니다. 22만 9천원으로 메타스피드 레이(39만 9천원)의 57% 가격에 카본 레이싱을 경험할 수 있어 가성비가 탁월합니다. 단, 와이드 옵션이 없어 발볼 넓은 한국 러너는 토박스 압박에 주의가 필요합니다. 발볼 넓으면 반드시 매장 착화 후 구매하거나 한 사이즈 업을 고려하세요. 400km 내구성으로 km당 약 572원, 대회와 템포 훈련 모두에 활용할 수 있어 뛰어난 선택입니다.',
    },
    {
        userType: '세대 비교 — 매직 스피드 4에서 넘어오는 경우',
        text: '전작 대비 무게가 약 50g 줄어든 것이 체감 차이의 핵심입니다. 37mm 스택을 유지하면서 193g에 들어가, 전작의 무겁고 단단하던 성격이 상당히 정리됐습니다. 플레이트가 포크형이라 풀렝스 카본보다 전환이 부드러워 발목에 걸리는 부담이 적고, 7mm 드롭이라 힐 착지 성향에서도 적응이 수월합니다. 에너지 리턴 64.6%로 인터벌 후반까지 탄성이 남습니다. 22만원대·내구성 400km 기준 km당 약 572원으로, 주당 20km 수준의 템포·인터벌 운용이면 1년가량 씁니다.',
      },
    {
        userType: '예상 적합 — 힐 착지 성향의 카본 입문',
        text: '카본화는 전족부 착지가 전제라는 통념 때문에 망설이는 경우, 이 모델은 예외에 가깝습니다. 플레이트가 포크형이라 강성이 한 번에 걸리지 않아 전환이 완만하고, 힐 착지 성향에서도 부담이 적습니다. 5분/km 안팎에서도 추진이 느껴지는 수준이라 훈련 중 레이스 감각을 익히는 용도에 맞습니다. 193g으로 가볍고 37mm 스택이라 충격 흡수도 확보했습니다. 다만 내구성 400km로 짧은 편이고 km당 약 572원이며, 와이드 옵션이 없어 발볼이 넓다면 시착이 필요합니다.',
      },
  ],

  similarShoes: ['nike-zoom-fly-6', 'adidas-boston-13', 'saucony-endorphin-speed-5', 'asics-magic-speed-4'],
  relatedPosts: [
    { slug: 'running-shoe-plate-guide-2026', title: '플레이트 완전 해설 — 카본·유리섬유·나일론' },
  ],
  purchaseLinks: [{ store: '네이버', url: 'https://naver.me/FNtPEotN' }],
};
