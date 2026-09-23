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
  description: '디비에이트 나이트로 4에서 카본 PWRPLATE를 덜어낸 "플레이트 없는" 버전입니다. 100% PEBA NITROFOAM 단일 폼으로 RunRepeat 실측 215g의 경량을 달성해, 데일리 러닝부터 스피드 훈련까지 한 켤레로 소화하는 부드러운 슈퍼폼 트레이너입니다.',
  oneliner: '플레이트 없는 100% PEBA 슈퍼폼, 실측 215g 경량 데일리+스피드',
  editorComment: 'RunRepeat이 2026-09-22 기준 정식 랩 테스트를 게시해 형제 모델(디비에이트 나이트로 4) 기준 추정치를 전량 실측값으로 교체했습니다. 퓨어의 핵심은 "카본 플레이트를 뺀 대신 100% PEBA 단일 폼"이라는 선택입니다. 디비4(브랜드 공식 250g)보다 가벼운 실측 215g에, 충격흡수 SA 힐 141(로드화 평균 131)·에너지 리턴 힐 68.9%·전족 72.9%(평균 58.8%)로 플레이트 없이도 슈퍼폼급 반발력을 보여줍니다. 미드솔 경도는 38.6 AC로 평균(35.5 AC)보다 살짝 단단한 축이고, 저온에서의 경화율은 단 2%로 겨울철에도 폼 성능이 거의 그대로 유지됩니다. 18만 9천원으로 디비4(₩219,000)보다 3만원 저렴하면서 PEBA 폼·PUMAGRIP을 그대로 가져와 가성비가 뛰어납니다. RunRepeat도 종합 93점(Superb)을 줄 만큼 "슈퍼슈즈만큼 가볍고 재미있는데 비싸지 않다"는 평입니다. 단, 플레이트가 없어 탄탄하고 직접적인 피드백을 원하면 디비4가, 바닥감 명확한 레이싱은 엘리트 4가 낫습니다. RunRepeat 분해 결과 아디다스 EVO SL과 유사한 미드풋 보강 섕크(전체 카본 플레이트는 아님)가 확인됐습니다. 와이드 옵션은 RunRepeat이 확인한 브랜드 스펙상 Normal·Wide 두 폭으로 나옵니다(이전 "출시 시점 미확인" 표기를 정정). 다만 토박스 내구성은 RunRepeat 실측 1/5(평균 2.6)로 낮아, PUMA의 800km 설계 주장과 달리 어퍼가 먼저 닳을 가능성이 있습니다 — 아웃솔 마모는 0.7mm(평균 1.1mm)로 양호하지만 어퍼가 병목이 될 수 있어 내구성 추정을 보수적으로 조정했습니다.\n\n사이즈·구매 가이드: 토박스 너비는 RunRepeat 실측 74.0mm로 표준 상한에 가깝고 와이드 옵션도 있어 발볼이 넓은 러너도 선택지가 있습니다. 다만 토박스 높이는 실측 23.3mm(평균 27.0mm)로 낮은 편이라 발등이 높으면 답답할 수 있습니다. 189,000원 ÷ 650km(어퍼 내구 반영 보수적 추정) = km당 약 291원으로 여전히 데일리화 중 상위권 가성비입니다. 플레이트 반발감을 원하면 디비에이트 나이트로 4, 더 부드러운 라이드를 유지하며 스택을 높이고 싶다면 마하 6을 비교해보세요.',
  tags: ['슈퍼폼 트레이너', 'PEBA', '무플레이트', '데일리+스피드'],

  specs: {
    weight: 215,
    cushioning: 9,
    responsiveness: 8,
    stability: 6,
    drop: 9.6,
    durability: 650,
  },

  biomechanics: {
    stackHeight: {
      heel: 37.2,
      forefoot: 27.6,
    },
    drop: 9.6,
    carbonPlate: false,
    midsoleType: '100% PEBA NITROFOAM (단일 폼, 무플레이트 — 미드풋 보강 섕크 있음)',
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
    wideOptions: true,
    winterCompatibility: 'excellent',
    summerCompatibility: 'excellent',
  },

  targetUsers: {
    recommended: ['데일리 트레이닝', '템포·인터벌 변속 훈련', '가벼운 슈퍼폼 선호', '플레이트 경직감이 불편한 러너', '가성비 슈퍼폼 찾는 러너'],
    notRecommended: ['탄탄한 직접적 피드백 선호', '최대 안정성 필요', '바닥감 명확한 레이싱화 원하는 러너', '어퍼 내구성을 중시하는 러너 (토박스 내구 1/5)'],
  },

  features: [
    '100% PEBA NITROFOAM 단일 폼 — RunRepeat 실측 SA 힐 141, 에너지 리턴 68.9%/72.9%',
    '플레이트 없는 유연한 라이드 (미드풋 보강 섕크만 있음)',
    'PUMAGRIP 아웃솔 — 접지력 CoF 0.71, 마모 0.7mm(RunRepeat 실측)',
    'RunRepeat 실측 215g 경량 (브랜드 공식 220g)',
    '통기성 엔지니어드 메쉬 (재활용 소재) · 와이드 옵션 있음(Normal/Wide, RunRepeat 확인)',
  ],

  priceAnalysis: {
    msrp: 189000,
    streetPrice: 170000,
    costPerKm: 291,
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
        text: '같은 라인에서 플레이트가 들어간 모델과 비교하면 성격이 갈립니다. 100% PEBA 폼이 더 부드럽게 받아주고 플레이트 특유의 튕김이 없어, 착지 정확도를 요구하지 않고 매일 신기 편합니다. RunRepeat 실측 215g으로 가볍고 8~12km 이지런에서 페이스를 올려도 폼이 따라옵니다(에너지 리턴 힐 68.9%·전족 72.9%). 여름 통기성도 무난합니다. 189,000원에 실측 아웃솔 마모 0.7mm를 반영한 내구 추정 650km 기준 km당 약 291원으로 슈퍼폼 모델 중 운용 비용이 낮은 편입니다. 와이드 옵션이 있어(Normal/Wide) 발볼이 넓어도 선택지가 있지만, 토박스 내구성이 1/5로 낮으니 거친 노면 위주라면 어퍼 마모를 주기적으로 확인하세요.',
      },
    {
        userType: '예상 적합 — 플레이트 없이 슈퍼폼만 경험하고 싶을 때',
        text: '카본 플레이트의 부담 없이 슈퍼폼 감각만 먼저 경험하려는 단계에 맞습니다. 100% PEBA 폼에 실측 215g의 무게라, 플레이트가 없어도(미드풋 보강 섕크만 있음) 착지에서 앞으로 굴러가는 감각이 나옵니다. 플레이트가 요구하는 착지 정확도나 하체 부하가 없어 러닝 6개월 안팎의 단계에서도 무리가 적습니다. 다만 안정성 요소가 강한 편은 아니라 발목 주변 근력이 아직 붙지 않았다면 거리를 서서히 늘리는 편이 안전합니다. 189,000원에 내구 추정 650km(아웃솔 실측은 우수하나 어퍼 내구가 상대적으로 약함)로, 이 가격대 슈퍼폼 중 여전히 준수한 교체 주기입니다.',
      },
  ],

  detailedSpecs: {
    weight: '215g (RunRepeat 실측) · 브랜드 공식 220g(UK8) · 213g(US9 RTR 실측)',
    stackHeight: '힐 37.2mm / 포어풋 27.6mm (RunRepeat 실측) · 브랜드 공식 38/30mm',
    drop: '9.6mm (RunRepeat 실측) · 브랜드 공식 8mm',
    midsole: '100% PEBA NITROFOAM 단일 폼 (디비4의 듀얼폼과 달리 단일 구조) · 경도 38.6 AC, 저온 경화율 2%(RunRepeat 실측)',
    plate: '없음 (디비4의 카본 PWRPLATE 제거) — RunRepeat 분해 결과 EVO SL 유사 미드풋 보강 섕크 확인',
    outsole: 'PUMAGRIP 러버 · 접지력 CoF 0.71 · 마모 0.7mm(RunRepeat 실측)',
    upper: '경량 엔지니어드 메쉬 (재활용 소재, 통기성 우수) · 토박스 내구성 1/5(RunRepeat 실측, 평균 2.6)로 상대적 약점',
    width: '표준(RunRepeat 실측 토박스 74.0mm, 높이 23.3mm) · 와이드 옵션 있음(Normal/Wide, RunRepeat 확인)',
    durability: '650km 추정 (아웃솔 마모 0.7mm 양호·토박스 내구 1/5 열세 — RunRepeat 실측 반영, 공식 800km 설계보다 보수적)',
    price: '₩189,000 (MSRP)',
    costPerKm: '약 ₩291/km (650km 기준)',
    footType: '표준 발볼 (RunRepeat 실측 토박스 74.0mm)',
    landingPattern: '미드풋~힐스트라이크',
  },

  similarShoes: ['puma-deviate-nitro-4', 'hoka-mach-6', 'saucony-endorphin-speed-5', 'saucony-ride-19'],
  relatedPosts: [
    { slug: 'running-shoe-500km-replacement-myth-2026', title: '"500km 교체설"의 진실 — 소재별 수명' },
  ],
  purchaseLinks: [{ store: '네이버', url: 'https://naver.me/GhwHPxQp'}, { store: '푸마 공식', url: 'https://kr.puma.com/kr/ko/pd/deviate-pure-nitro/313904.html' }, { store: '쿠팡', url: 'https://link.coupang.com/a/g5Zatu6Ulo' }],
};
