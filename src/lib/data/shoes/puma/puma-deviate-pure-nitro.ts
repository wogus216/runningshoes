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
  editorComment: '2026-06-04 출시 직후로 RunRepeat 랩 데이터 미게시 상태이며, SA/HA/에너지 리턴/토박스 너비 수치는 형제 모델(디비에이트 나이트로 4) 기준 추정치입니다. 퓨어의 핵심은 "카본 플레이트를 뺀 대신 100% PEBA 단일 폼"이라는 선택입니다. 디비4(250g)보다 30g 가벼운 220g에, 플레이트 경직감 없이 유연하고 부드러운 라이드를 줍니다. 18만 9천원으로 디비4(₩219,000)보다 3만원 저렴하면서 PEBA 폼·PUMAGRIP·800km 설계를 그대로 가져와 가성비가 뛰어납니다. Road Trail Run이 9.5~9.6/10을 줄 만큼 "슈퍼슈즈만큼 가볍고 재미있는데 비싸지 않다"는 평. 단, 플레이트가 없어 탄탄하고 직접적인 피드백을 원하면 디비4가, 바닥감 명확한 레이싱은 엘리트 4가 낫습니다. 와이드 옵션은 출시 시점 미확인이라 발볼 넓은 러너는 매장 착화를 권합니다. 100% PEBA인데 800km 내구 표기라는 조합은 이례적입니다 — 아웃솔·구조 내구는 길어도 PEBA 폼의 반발은 마일리지에 따라 조용히 줄어드니(450km 실도로 실험에서 PEBA 굽힘 에너지 리턴 −24.6%), 후반부엔 쿠션 데일리로 성격이 변한다고 생각하면 정확합니다.\n\n사이즈·구매 가이드: 토박스 너비가 표준(standard)이나 와이드 옵션은 출시 시점 미확인이므로 발볼 넓은 러너는 매장에서 착화 후 결정하세요. 189,000원 ÷ 800km = km당 약 236원으로 데일리화 중 최고 수준의 가성비입니다. 플레이트 반발감을 원하면 디비에이트 나이트로 4, 더 부드러운 라이드를 유지하며 스택을 높이고 싶다면 마하 6을 비교해보세요.',
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
        userType: '모델 선택 — 같은 라인의 플레이트 모델 대비',
        text: '같은 라인에서 플레이트가 들어간 모델과 비교하면 성격이 갈립니다. 100% PEBA 폼이 더 부드럽게 받아주고 플레이트 특유의 튕김이 없어, 착지 정확도를 요구하지 않고 매일 신기 편합니다. 220g으로 가볍고 8~12km 이지런에서 페이스를 올려도 폼이 따라옵니다. 여름 통기성도 무난합니다. 189,000원에 내구성 800km 설계라 km당 약 236원으로 슈퍼폼 모델 중 운용 비용이 낮습니다. 와이드 옵션이 없어 발볼이 넓다면 시착이 필요합니다.',
      },
    {
        userType: '예상 적합 — 플레이트 없이 슈퍼폼만 경험하고 싶을 때',
        text: '카본 플레이트의 부담 없이 슈퍼폼 감각만 먼저 경험하려는 단계에 맞습니다. 100% PEBA 폼에 220g의 무게라, 플레이트가 없어도 착지에서 앞으로 굴러가는 감각이 나옵니다. 플레이트가 요구하는 착지 정확도나 하체 부하가 없어 러닝 6개월 안팎의 단계에서도 무리가 적습니다. 다만 안정성 요소가 강한 편은 아니라 발목 주변 근력이 아직 붙지 않았다면 거리를 서서히 늘리는 편이 안전합니다. 189,000원에 내구성 800km로, 이 가격대 슈퍼폼 중 교체 주기가 가장 긴 축입니다.',
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
  relatedPosts: [
    { slug: 'running-shoe-500km-replacement-myth-2026', title: '"500km 교체설"의 진실 — 소재별 수명' },
  ],
  purchaseLinks: [
    { store: '네이버', url: 'https://naver.me/GhwHPxQp' },
    { store: '푸마 공식', url: 'https://kr.puma.com/kr/ko/pd/deviate-pure-nitro/313904.html' },
  ],
};
