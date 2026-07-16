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
  editorComment: '슈퍼슈즈를 처음 신는 러너가 가장 걱정하는 건 불안정한 착지인데, 엔돌핀 프로 4의 118.9mm 넓은 전족부 플랫폼이 그 불안을 줄여줍니다. 71.7% 에너지 리턴은 베이퍼플라이 3(75.4%)에 못 미치지만, 26만 9천원으로 5만원 이상 저렴하고 안정성에서 앞섭니다. 220g은 v3보다 무거워졌지만 내구성 개선으로 훈련 겸용이 가능해진 트레이드오프입니다. 서브4 목표 러너가 첫 슈퍼슈즈로 고르기에 가장 안전한 선택이며, 발볼이 좁은 편이라 시착은 필수입니다.\n\n사이즈·구매 가이드: 토박스가 좁은 편(narrow)이므로 발볼이 넓다면 반드시 시착하고, 와이드 옵션이 없어 넓은 발 러너에게는 맞지 않을 수 있습니다. 정가 269,000원에 내구성 300km 기준 km당 약 897원으로 대회 전용 운용을 권장합니다. 같은 레이싱화로는 알파플라이 3·로켓 X 3이 대안입니다.',
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
    { userType: '상급 러너', rating: 5, text: '2025 제주 제라 마라톤에서 처음 신었습니다. 서브3:40 목표였는데 3:33으로 PB 달성했어요. 220g 경량에 71.7% 에너지 리턴이 후반부 추진력을 살려줬고, SA 139 충격흡수가 35km 벽에서도 무릎을 보호해줬습니다. 베이퍼플라이 3이랑 비교하면 에너지 리턴은 약간 떨어지지만, 118.9mm 넓은 전족부 덕에 30km 이후에도 착지가 안정적이었습니다. 토박스는 좁은 편이라 발볼 넓으면 주의하세요. 26만원대로 가성비 좋고 한국 대회 코스 특성상 언덕이 많은 구간에서도 카본 추진력이 잘 살아있어서 첫 슈퍼슈즈로 강추합니다.' },
    { userType: '중급 러너', rating: 4, text: '서브4 벽을 깨려고 두 달 전에 구매했습니다. 220g 카본 플레이트 신발이 처음인데, 처음 200m 뛰는 순간 "아, 이거구나" 싶었어요. 발이 앞으로 굴러가는 추진력이 확실하고 SA 139 충격흡수 덕에 무릎 보호도 괜찮습니다. 71.7% 에너지 리턴이 후반부 페이스 유지에 큰 도움이 되고, 26만원대 가성비도 베이퍼플라이(31만원) 대비 5만원 저렴합니다. 다만 토박스가 좁아서 265mm에 발볼이 넓은 편인 저는 10km 이상 뛰면 새끼발가락이 압박돼요. 한국 러닝 커뮤니티에서도 첫 슈퍼슈즈 추천 1순위인 이유를 알겠습니다.' },
    { userType: '가성비 중시', rating: 4, text: '슈퍼슈즈 처음이라 가격이 부담이었는데, 26만원대에 잡아서 구매했습니다. 알파플라이 3이 37만원인 거 생각하면 10만원 이상 절약한 가성비 좋은 선택이죠. 220g 경량에 71.7% 에너지 리턴으로 대회 3번(300km) 정도 신을 수 있으니 대회당 약 8만원 정도입니다. SA 139 충격흡수가 무릎을 보호해주고, 토박스가 좁아 발볼 넓으면 불편할 수 있지만 표준 발볼이면 핏이 좋아요. 한국 서브4 러너에게는 무릎도 보호해주면서 레이싱 성능까지 갖춘 합리적인 투자라고 봅니다.' },
  ],

  similarShoes: ['nike-alphafly-3', 'asics-metaspeed-sky-plus', 'hoka-rocket-x-3', 'puma-deviate-nitro-elite-3'],
  purchaseLinks: [{ store: '네이버', url: 'https://naver.me/57QzqCm0' }],
};
