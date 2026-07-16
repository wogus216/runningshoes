import type { Shoe } from '@/types/shoe';

export const shoe: Shoe = {
  id: 'li-ning-red-hare-9',
  slug: 'li-ning-red-hare-9',
  brand: 'Li-Ning',
  name: '레드헤어 9',
  image: '/images/shoes/lining/red-hare-9/side.webp',
  images: [
    '/images/shoes/lining/red-hare-9/side.webp',
    '/images/shoes/lining/red-hare-9/angle.webp',
  ],
  category: '입문화',
  rating: 4,
  status: 'new',
  price: 95000,
  description:
    '적토마 9 라인 중 가장 저렴한 무플레이트 입문 트레이너입니다. 단층 폼의 소프트한 쿠션과 전족 와이드 설계가 강점입니다.',
  oneliner: '10만 원 미만 입문 적토마 — 발볼 넓은 한국 러너를 위한 가성비 베이스',
  tags: ['입문화', '입문', '가성비', '중국 러닝화', '와이드', '통근', '데일리', 'Li-Ning'],

  specs: {
    weight: 320,
    cushioning: 6,
    responsiveness: 5,
    stability: 6,
    drop: 9,
    durability: 600,
  },

  biomechanics: {
    stackHeight: {
      heel: 32,
      forefoot: 23,
    },
    drop: 9,
    carbonPlate: false,
    plateType: null,
    midsoleType: 'LIGHT FOAM ULTRA (단층 EVA)',
    optimalPace: '5:30-7:00 min/km',
  },

  injuryPrevention: {
    plantarFasciitis: 'good',
    achillesTendinopathy: 'good',
    kneeIssues: 'good',
    shinSplints: 'good',
  },

  koreanFootFit: {
    toBoxWidth: 'standard',
    flatFootCompatibility: 'fair',
    wideOptions: false,
    winterCompatibility: 'fair',
    summerCompatibility: 'fair',
  },

  targetUsers: {
    recommended: [
      '러닝을 막 시작한 입문·학생 러너 (체력검정·통근 겸용)',
      'km당 5:30~7:00 페이스의 가벼운 조깅 위주 러너',
      '발볼이 넓어 9 Ultra·9 PRO(좁은 핏)가 부담스러운 한국 러너',
      '10만 원 미만으로 푹신한 입문 트레이너를 찾는 가성비 러너',
    ],
    notRecommended: [
      '체중이 많이 나가는 러너 (BMI 24 초과 시 미드솔 지지 부족)',
      '고강도 마라톤·템포 훈련 위주 러너 (단층 폼 반발 부족)',
      '가벼운 레이싱화를 원하는 러너 (약 320g으로 무거운 편)',
      '국내 AS·정식 유통이 중요한 러너 (직구·구매대행만 존재)',
    ],
  },

  features: [
    'LIGHT FOAM ULTRA 단층 폼 — 마시멜로급 소프트 쿠션, 무릎 부담 낮음',
    '전족 와이드 설계 — 적토마 9 라인 중 발볼 여유가 가장 큼',
    'TUFF RB 아웃솔 — 500km+ 내구성',
    '무플레이트 입문 트레이너 — 적토마 9 가족 중 가장 저렴(CNY 399)',
    '체력검정·통근·가벼운 훈련 겸용 범용성',
  ],

  priceAnalysis: {
    msrp: 95000,
    streetPrice: 75000,
    costPerKm: 158,
    valueRating: 9,
    priceTier: 'budget',
    alternatives: ['hoka-clifton-10', 'brooks-ghost-17', 'saucony-ride-19'],
    valueAdvantages: [
      'CNY 399 정가 — 직구 시 10만 원 미만 (프로모션 시 더 저렴)',
      '입문 메이저 브랜드(15만~18만)의 절반 값',
      'TUFF RB 아웃솔 내구성으로 km당 약 158원 수준',
    ],
  },

  detailedSpecs: {
    weight: '약 320g (CN40/US7 실측, 识货 커뮤니티) · US M9 환산 약 335g (추정)',
    stackHeight: '공식 미공개 — 힐 약 32mm / 전족 약 23mm 추정 (드롭 9mm 실측 기반)',
    drop: '9mm (커뮤니티 실측, 공식 미공개)',
    midsole: 'LIGHT FOAM ULTRA 단층 EVA계 폼 (제조사 리바운드 약 50% 표기)',
    plate: '없음(무플레이트) — 9 Ultra 유리섬유·9 PRO TPU와 달리 베이스는 플레이트 미탑재',
    outsole: 'TUFF RB 풀레스 러버 (500km+ 내구성, 전족 집중 마모 보고)',
    upper: '이중 자카드 메시 + 열융착 — 통기성 보통(slight breathable)',
    width: '전족 와이드 설계 표기(mm 미확인) — 적토마 9 라인 중 발볼 여유 가장 큼',
    durability: '약 600km (TUFF RB 아웃솔)',
    price: '직구 7만~10만 원대 (CNY 399 정가, 프로모션 CNY 140~200) · 한국 미정식출시',
    costPerKm: '약 ₩158/km (600km 기준)',
    footType: '중립~넓은 발. 입문·통근·체력검정 겸용',
    landingPattern: '힐~미드풋. 이지 페이스 입문',
  },

  reviews: [
    {
      userType: '산초 에디터 분석',
      rating: 4,
      text:
        '적토마 9 삼형제 중 막내이자 가장 저렴한 입문 모델입니다. 단층 LIGHT FOAM은 상위 Boom 폼만큼 튀지는 않지만 무릎 부담 적은 소프트 쿠션이 입문자에게 무난해요. 무엇보다 9 Ultra·9 PRO와 달리 전족이 넓게 설계돼, 발볼 넓어 적토마를 포기했던 한국 러너에게는 이 베이스가 오히려 맞을 수 있습니다. 약 320g으로 무거운 편이라 빠른 훈련용은 아닙니다.',
      source: 'editor',
      sourceUrl: 'https://www.shopnings.com/li-ning-red-hare-9-men-s-running-shoes/',
    },
    {
      userType: '중국 사용자 후기 (Shihuo)',
      rating: 4,
      text:
        'LIGHT FOAM ULTRA가 두꺼운 마시멜로를 밟는 듯한 쿠션감이다. 학생 체력검정과 통근, 가벼운 훈련까지 한 켤레로 해결되는 가성비가 좋다. 500km를 신어도 전족부 외에는 마모가 거의 없었다.',
      source: 'community',
      sourceUrl: 'https://m.shihuo.cn/page/findCommunityDetail?id=5751423',
    },
  ],

  editorComment:
    '2026년 1월 적토마 9 가족(Ultra·PRO·베이스) 동시 출시 중 베이스 모델입니다. 신상 + 비주류 브랜드라 RunRepeat 등 독립 랩 데이터가 없고, 무게(약 320g/CN40)·드롭(9mm)은 识货 커뮤니티 실측, 스택 수치는 공식 미공개라 드롭 기반 추정치입니다(detailedSpecs에 추정 표기). 9 Ultra(유리섬유 플레이트 맥스쿠션)·9 PRO(TPU 데일리)와 달리 베이스는 단층 폼 무플레이트 입문 트레이너이며, 전족 와이드 설계로 발볼 넓은 러너 적합성이 형제 모델보다 높습니다.\n\n사이즈·구매 가이드: 토박스가 표준 폭이고 전족 와이드 설계라 적토마 9 시리즈 중 발볼 넓은 러너에게 가장 잘 맞습니다. 병행가 95,000원에 내구성 600km 기준 km당 약 158원으로, 입문화 중 압도적 가성비입니다. 정식 유통·AS를 원하면 클리프턴 10이나 880 V15가 비슷한 입문 쿠션화 대안입니다.',

  similarShoes: ['li-ning-red-hare-9-pro', 'hoka-clifton-10', 'new-balance-880-v15'],
};
