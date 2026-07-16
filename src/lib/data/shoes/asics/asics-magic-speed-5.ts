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
  editorComment: '매직스피드 5는 전작(242g) 대비 50g 감량한 193g으로 완전히 다른 신발이 되었습니다. FF Leap 상층+FF Blast+ 하층의 듀얼 폼 구성으로 에너지 리턴이 64.6%/62.6%(힐/전족부)에 달합니다. 포크형 카본 플레이트는 풀렝스보다 유연해 전환이 자연스럽고, 초보자도 부담 없이 접근할 수 있습니다. 22만 9천원으로 메타스피드(39만 9천원)의 절반 가격에 카본 레이싱을 경험할 수 있어 가성비가 뛰어납니다.\n\n사이즈·구매 가이드: 토박스가 표준 폭이고 와이드 옵션이 없어 발볼 넓은 러너는 반드시 매장에서 착화 후 구매하거나 줌 플라이 6를 검토하세요. 정가 229,000원에 내구성 400km 기준 km당 약 572원으로, 카본 레이싱화 가성비 입문으로 합리적입니다. 전작 매직스피드 4 대비 50g 경량화가 핵심이며, 더 많은 훈련 거리를 소화하고 싶다면 엔돌핀 스피드 5가 대안입니다.',
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
      userType: '중급 러너',
      rating: 5,
      text: 'MS4에서 업그레이드했는데 50g 차이가 정말 체감됩니다. 여의도 트랙에서 인터벌 훈련(1km×5, 4:00/km 페이스)을 하는데 포크형 카본이 풀렝스보다 전환이 부드러워 발목 부담이 적어요. 전작의 무겁고 딱딱한 느낌이 싹 사라졌고, 37mm 스택인데도 193g이라 가볍게 느껴집니다. 발볼이 표준인 제게는 핏이 딱 맞고 토박스 여유도 충분합니다. 에너지 리턴 64.6%라는 수치가 실제 주행 중에도 느껴질 정도로 탄성이 좋아서, 인터벌 후반부에도 다리가 덜 무겁습니다. 무릎 통증은 없었고, 7mm 드롭이 힐스트라이커인 저도 적응하기에 적당한 수준이었어요. 22만원대 카본화 중에서 이 가성비는 찾기 힘듭니다. 400km 기준 km당 약 572원으로, 주당 20km 정도 템포/인터벌 훈련에 활용하면 1년은 쓸 수 있어요.',
    },
    {
      userType: '입문 러너',
      rating: 4,
      text: '10K 대회 준비용으로 첫 카본화를 구입했어요. 표준 275mm 착용 중인데 핏이 잘 맞습니다. 카본화가 딱딱하고 전족부 착지 안 하면 못 쓴다는 말을 들었는데, 포크형이라 그런지 전환이 자연스럽고 힐스트라이커인 저도 부담이 없었어요. 5분/km 페이스에서도 추진력이 느껴지고, 37mm 스택이 아스팔트 충격을 흡수해 무릎 걱정도 덜었습니다. 발볼이 표준이라 토박스 압박은 없었는데, 발볼 넓은 분들은 매장에서 꼭 착화해보세요. 와이드 옵션이 없어서 발볼 넓은 한국 러너에게는 아쉬운 부분입니다. 193g 무게가 이렇게 가볍다고는 생각 못 했어요. 400km 내구성이 좀 짧은 게 아쉽지만, km당 약 572원으로 훈련 중 레이싱 느낌을 낼 수 있어 가성비 측면에서 만족합니다.',
    },
  ],

  similarShoes: ['nike-zoom-fly-6', 'adidas-boston-13', 'saucony-endorphin-speed-5', 'asics-magic-speed-4'],
  purchaseLinks: [{ store: '네이버', url: 'https://naver.me/FNtPEotN' }],
};
