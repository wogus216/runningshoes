import type { Shoe } from '@/types/shoe';

export const shoe: Shoe = {
  id: 'saucony-endorphin-pro-4',
  slug: 'saucony-endorphin-pro-4',
  brand: 'Saucony',
  name: '엔돌핀 프로 4',
  image: '/images/shoes/saucony/endorphin_Pro4.webp',
  images: ['/images/shoes/saucony/endorphinpro4/side.webp', '/images/shoes/saucony/endorphinpro4/top.webp', '/images/shoes/saucony/endorphinpro4/outsole.webp'],
  category: '레이싱',
  rating: 5,
  price: 269000,
  description: 'Saucony의 카본 레이싱화로, PWRRUN PB+HG 미드솔과 풀렝스 카본 플레이트로 강력한 추진력을 제공합니다. 하프~풀 마라톤에 적합합니다.',
  oneliner: '118.9mm 광폭 전족부, 슈퍼슈즈 초심자도 안정적으로',
  editorComment: '슈퍼슈즈를 처음 신는 러너가 가장 걱정하는 건 불안정한 착지인데, 엔돌핀 프로 4의 118.9mm 넓은 전족부 플랫폼이 그 불안을 줄여줍니다. 71.7% 에너지 리턴은 베이퍼플라이 3(75.4%)에 못 미치지만, 26만 9천원으로 5만원 이상 저렴하고 안정성에서 앞섭니다. 220g은 v3보다 무거워졌지만 내구성 개선으로 훈련 겸용이 가능해진 트레이드오프입니다. 서브4 목표 러너가 첫 슈퍼슈즈로 고르기에 가장 안전한 선택이며, 발볼이 좁은 편이라 시착은 필수입니다. PWRRUN PB(PEBA) 폼은 450km 실도로 마모 실험 기준으로 에너지 리턴 손실이 큰 계열입니다 — 수명 표기를 감안해 레이스·포인트 훈련 전용으로 아껴 신으세요.\n\n사이즈·구매 가이드: 토박스가 좁은 편(narrow)이므로 발볼이 넓다면 반드시 시착하고, 와이드 옵션이 없어 넓은 발 러너에게는 맞지 않을 수 있습니다. 정가 269,000원에 내구성 300km 기준 km당 약 897원으로 대회 전용 운용을 권장합니다. 같은 레이싱화로는 알파플라이 3·로켓 X 3이 대안입니다.',
  tags: ['레이싱', '카본', '마라톤', '슈퍼화'],

  specs: {
    weight: 220,
    cushioning: 7,
    responsiveness: 9,
    stability: 5,
    drop: 10,
    durability: 300,
  },

  biomechanics: {
    stackHeight: {
      heel: 38.1,
      forefoot: 28.6,
    },
    drop: 9.5,
    carbonPlate: true,
    plateType: 'curved',
    midsoleType: 'PWRRUN PB+HG',
    optimalPace: '3:30-5:00 min/km',
  },

  injuryPrevention: {
    plantarFasciitis: 'good',
    achillesTendinopathy: 'good',
    kneeIssues: 'caution',
    shinSplints: 'good',
  },

  koreanFootFit: {
    toBoxWidth: 'narrow',
    flatFootCompatibility: 'fair',
    wideOptions: false,
    winterCompatibility: 'fair',
    summerCompatibility: 'good',
  },

  targetUsers: {
    recommended: ['하프마라톤', '풀마라톤', '서브-4 목표', '상급 러너'],
    notRecommended: ['입문 러너', '데일리 트레이닝', '과내전 러너'],
  },

  features: ['PWRRUN PB+HG 미드솔', '풀렝스 카본 플레이트', '9.5mm 드롭', '레이싱 전용'],

  priceAnalysis: {
    msrp: 269000,
    streetPrice: 239000,
    costPerKm: 897,
    valueRating: 6,
    priceTier: 'premium',
    alternatives: ['nike-alphafly-3', 'asics-metaspeed-sky-plus', 'adidas-adios-pro-4'],
  },

  detailedSpecs: {
    weight: '220g (남성 US 9 기준, RunRepeat 실측)',
    stackHeight: '힐 38.1mm / 포어풋 28.6mm (실측)',
    drop: '9.5mm (실측) / 8mm (브랜드 공식)',
    midsole: 'PWRRUN PB+HG (PEBA + 경량 폼)',
    plate: '풀렝스 카본 플레이트',
    outsole: '경량 러버',
    upper: '경량 메쉬',
    width: '표준 (D)',
    durability: '300km+',
    price: '269,000원',
    costPerKm: '약 ₩897/km (300km 기준)',
    footType: '중립',
    landingPattern: '중족부/전족부 착지',
  },

  reviews: [
    {
      userType: '에디터 분석',
      rating: 87,
      text: '서브4~서브3:30 목표 러너를 위한 가성비 슈퍼슈즈입니다. 26만원대로 베이퍼플라이(31만원)보다 저렴하면서, 71.7% 에너지 리턴과 SA 139 충격흡수로 하프~풀마라톤에 최적화되어 있습니다. 220g 경량에 39.5mm 힐 스택, 8mm 드롭 구성이고, 118.9mm 넓은 전족부 플랫폼으로 슈퍼슈즈 중 안정성이 높아 첫 슈퍼슈즈 러너에게 추천합니다. HA 13.6 소프트 폼으로 쿠셔닝이 편안하고 토박스가 좁은 편이라 발볼 넓은 한국 러너는 반드시 시착하세요. 300km 내구성에 km당 약 897원이라 대회 전용이 적합하며, 무릎 보호와 추진력의 균형이 뛰어납니다. 평발 러너에게는 안정성이 부족할 수 있으니 프로 5를 추천하고, 가성비와 안정성을 모두 잡은 입문 레이싱화입니다.',
    },
    {
        userType: '예상 적합 — 첫 슈퍼슈즈를 찾는 서브3:40 전후 러너',
        text: '첫 카본 레이서를 고르는 서브3:40 전후 러너에게 맞을 가능성이 있습니다. 220g의 무게에 에너지 리턴 71.7%로 후반 추진력을 유지하는 쪽이고, SA 139의 충격흡수가 30km 이후 다리에 쌓이는 부담을 덜어주는 구성입니다. 베이퍼플라이 3과 비교하면 에너지 리턴은 다소 낮지만, 전족부 118.9mm의 넓은 접지면 덕에 후반 착지 안정성에서 유리합니다. 언덕 구간이 섞인 코스에서도 추진력이 급격히 죽지 않는 성격입니다. 다만 토박스 자체는 좁은 편이라 발볼이 넓다면 시착이 필요합니다. 26만원대로 최상위 레이서군에서는 접근성이 좋은 가격대입니다.',
      },
    {
        userType: '예상 적합 — 서브4 벽을 넘으려는 단계',
        text: '서브4 전후에서 기록을 밀어올리려는 단계에 맞습니다. 220g의 무게에 카본 플레이트로 전환에서 굴러가는 추진이 만들어지고, SA 139의 충격흡수와 에너지 리턴 71.7% 조합이라 후반 페이스 유지에 유리합니다. 26만원대로 베이퍼플라이 계열(31만원)보다 5만원 낮아 첫 슈퍼슈즈의 진입 부담도 상대적으로 작습니다. 다만 토박스가 좁아 발볼이 넓으면 10km를 넘길 때 새끼발가락 압박이 생기므로, 이 부분은 시착으로 확인해야 합니다.',
      },
    {
        userType: '비용 관점 — 첫 슈퍼슈즈의 진입 부담',
        text: '첫 슈퍼슈즈를 고를 때 가격 부담을 낮추는 선택지입니다. 26만원대로 최상단 모델(알파플라이 3 37만원) 대비 10만원 이상 낮고, 내구성 300km 기준 대회 3회면 회당 약 8만원 수준입니다. 성능은 220g의 무게에 에너지 리턴 71.7%, SA 139의 충격흡수로 서브4~서브3:30 구간에 부족함이 없습니다. 즉 기록 목표가 아직 확정적이지 않은 단계에서 슈퍼슈즈 감각을 확인하기에 위험이 적은 가격대입니다. 토박스가 좁아 발볼이 넓다면 불편할 수 있습니다.',
      },
  ],

  similarShoes: ['nike-alphafly-3', 'asics-metaspeed-sky-plus', 'hoka-rocket-x-3', 'puma-deviate-nitro-elite-3'],
  relatedPosts: [
    { slug: 'running-shoe-plate-guide-2026', title: '플레이트 완전 해설 — 카본·유리섬유·나일론' },
  ],
  purchaseLinks: [{ store: '네이버', url: 'https://naver.me/57QzqCm0' }],
};
