import type { Shoe } from '@/types/shoe';

export const shoe: Shoe = {
  id: 'puma-deviate-pure-nitro',
  slug: 'puma-deviate-pure-nitro',
  brand: 'Puma',
  name: '디비에이트 나이트로 퓨어',
  image: '/images/shoes/puma/deviate-pure-nitro/side.webp',
  images: [
    '/images/shoes/puma/deviate-pure-nitro/side.webp',
    '/images/shoes/puma/deviate-pure-nitro/front.webp',
    '/images/shoes/puma/deviate-pure-nitro/back.webp',
    '/images/shoes/puma/deviate-pure-nitro/angle.webp',
    '/images/shoes/puma/deviate-pure-nitro/outsole.webp',
  ],
  category: '데일리',
  rating: 4.5,
  price: 189000,
  description: '디비에이트 나이트로 4에서 카본 PWRPLATE를 덜어낸 "플레이트 없는" 버전입니다. 100% PEBA NITROFOAM 단일 폼으로 220g 경량을 달성해, 데일리 러닝부터 스피드 훈련까지 한 켤레로 소화하는 부드러운 슈퍼폼 트레이너입니다.',
  oneliner: '플레이트 없는 100% PEBA 슈퍼폼, 220g 경량 데일리+스피드',
  editorComment: '2026-06-04 출시 직후로 RunRepeat 랩 데이터 미게시 상태이며, SA/HA/에너지 리턴/토박스 너비 수치는 형제 모델(디비에이트 나이트로 4) 기준 추정치입니다. 퓨어의 핵심은 "카본 플레이트를 뺀 대신 100% PEBA 단일 폼"이라는 선택입니다. 디비4(250g)보다 30g 가벼운 220g에, 플레이트 경직감 없이 유연하고 부드러운 라이드를 줍니다. 18만 9천원으로 디비4(₩219,000)보다 3만원 저렴하면서 PEBA 폼·PUMAGRIP·800km 설계를 그대로 가져와 가성비가 뛰어납니다. Road Trail Run이 9.5~9.6/10을 줄 만큼 "슈퍼슈즈만큼 가볍고 재미있는데 비싸지 않다"는 평. 단, 플레이트가 없어 탄탄하고 직접적인 피드백을 원하면 디비4가, 바닥감 명확한 레이싱은 엘리트 4가 낫습니다. 와이드 옵션은 출시 시점 미확인이라 발볼 넓은 러너는 매장 착화를 권합니다.\n\n사이즈·구매 가이드: 토박스 너비가 표준(standard)이나 와이드 옵션은 출시 시점 미확인이므로 발볼 넓은 러너는 매장에서 착화 후 결정하세요. 189,000원 ÷ 800km = km당 약 236원으로 데일리화 중 최고 수준의 가성비입니다. 플레이트 반발감을 원하면 디비에이트 나이트로 4, 더 부드러운 라이드를 유지하며 스택을 높이고 싶다면 마하 6을 비교해보세요.',
  tags: ['슈퍼폼 트레이너', 'PEBA', '무플레이트', '데일리+스피드'],

  specs: {
    weight: 220,
    cushioning: 8,
    responsiveness: 7,
    stability: 6,
    drop: 8,
    durability: 800,
  },

  biomechanics: {
    stackHeight: {
      heel: 38,
      forefoot: 30,
    },
    drop: 8,
    carbonPlate: false,
    midsoleType: '100% PEBA NITROFOAM (단일 폼, 무플레이트)',
    optimalPace: '4:30-6:00 min/km',
  },

  injuryPrevention: {
    plantarFasciitis: 'good',
    achillesTendinopathy: 'good',
    kneeIssues: 'good',
    shinSplints: 'good',
  },

  koreanFootFit: {
    toBoxWidth: 'standard',
    flatFootCompatibility: 'good',
    wideOptions: false,
    winterCompatibility: 'good',
    summerCompatibility: 'excellent',
  },

  targetUsers: {
    recommended: ['데일리 트레이닝', '템포·인터벌 변속 훈련', '가벼운 슈퍼폼 선호', '플레이트 경직감이 불편한 러너', '가성비 슈퍼폼 찾는 러너'],
    notRecommended: ['탄탄한 직접적 피드백 선호', '최대 안정성 필요', '바닥감 명확한 레이싱화 원하는 러너'],
  },

  features: ['100% PEBA NITROFOAM 단일 폼', '플레이트 없는 유연한 라이드', 'PUMAGRIP 아웃솔', '220g 경량 (디비4 대비 -30g)', '통기성 엔지니어드 메쉬 (재활용 소재)'],

  priceAnalysis: {
    msrp: 189000,
    streetPrice: 170000,
    costPerKm: 236,
    valueRating: 9,
    priceTier: 'mid',
    alternatives: ['puma-velocity-nitro-4', 'hoka-mach-6', 'saucony-ride-19'],
  },

  reviews: [
    {
      userType: 'Road Trail Run',
      rating: 95,
      text: '슈퍼슈즈만큼 가볍고 유연하며 재미있는데, 그렇게 비싸지도 않습니다. 100% PEBA 폼 기반이라 경량(US9 213g)이면서 쿠션과 에너지 리턴이 뛰어나고, 플레이트가 없어 자연스럽고 유연한 라이드를 줍니다. 데일리 트레이닝부터 어떤 거리의 레이스까지 망설임 없이 신을 수 있는 최상급 데일리 트레이너입니다. PUMAGRIP 아웃솔 커버리지가 넓어 젖은 노면에서도 그립이 좋습니다. 다만 "너무 부드럽다"고 느낄 수 있어, 탄탄한 라이드를 선호하는 러너에게는 맞지 않을 수 있습니다.',
    },
    {
      userType: '중급 러너',
      rating: 4.5,
      text: '카본 플레이트가 부담스러워서 무플레이트 슈퍼폼을 찾다가 골랐습니다. 220g이라 발이 가볍고, 100% PEBA 폼이 디비4보다 더 말랑하게 받아줘요. 한강 데일리 8~12km에 쓰는데 이지런도 편하고 중간에 페이스 올려도 폼이 따라옵니다. 플레이트 특유의 튕기는 느낌은 없지만 그게 오히려 매일 신기 편한 이유예요. 18만 9천원에 800km 설계라 km당 약 236원, 가성비가 좋습니다. 여름 통기성도 괜찮아서 더운 날 데일리로 제격입니다. 발볼은 표준이고 와이드가 아직 없어서 볼 넓은 분은 신어보고 사세요.',
    },
    {
      userType: '입문 러너',
      rating: 4,
      text: '러닝 시작한 지 6개월 된 초보 러너입니다. 카본 플레이트 신발은 아직 부담스러워서 무플레이트인 퓨어를 골랐는데, 220g이라 가볍고 100% PEBA 폼이 부드럽게 받아줘서 첫 슈퍼폼 경험으로 딱 좋았어요. 여의도 한강공원에서 주 3회 6~8km씩 5분30초 페이스로 뛰는데, 플레이트 없이도 발이 편하게 굴러가는 느낌이라 부담이 없습니다. 다만 안정성이 아주 뛰어난 편은 아니라서 발목이 아직 약한 초반에는 살짝 신경이 쓰이긴 해요. 189,000원에 800km까지 버틴다니 초보 입장에서도 부담 없이 오래 신을 수 있을 것 같습니다.',
    },
  ],

  detailedSpecs: {
    weight: '220g (UK8 공식) / 213g (US9 RTR 실측)',
    stackHeight: '힐 38mm / 포어풋 30mm (공식)',
    drop: '8mm (공식)',
    midsole: '100% PEBA NITROFOAM 단일 폼 (디비4의 듀얼폼과 달리 단일 구조)',
    plate: '없음 (디비4의 카본 PWRPLATE 제거)',
    outsole: 'PUMAGRIP 러버',
    upper: '경량 엔지니어드 메쉬 (재활용 소재, 통기성 우수)',
    width: '표준 (와이드 옵션 출시 시점 미확인)',
    durability: '약 800km (공식 설계)',
    price: '₩189,000 (MSRP)',
    costPerKm: '약 ₩236/km (800km 기준)',
    footType: '표준 발볼 (추정 토박스 ~70-72mm, 형제 모델 기준)',
    landingPattern: '미드풋~힐스트라이크',
  },

  similarShoes: ['puma-deviate-nitro-4', 'hoka-mach-6', 'saucony-endorphin-speed-5', 'saucony-ride-19'],
  purchaseLinks: [
    { store: '네이버', url: 'https://naver.me/GhwHPxQp' },
    { store: '푸마 공식', url: 'https://kr.puma.com/kr/ko/pd/deviate-pure-nitro/313904.html' },
  ],
};
