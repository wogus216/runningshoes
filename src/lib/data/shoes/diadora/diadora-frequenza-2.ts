import type { Shoe } from '@/types/shoe';

// 2026-10-20 등록 — 출처: 디아도라 한국 공식몰(diadorakorea.com) 상품 5646·5168 판매가,
// RunRepeat 랩 리뷰(runrepeat.com/diadora-frequenza-2, 2025-12-29, 남성 US 9 시료). 점수는 랩 수치를 문서 C절 매핑에 대입.
export const shoe: Shoe = {
  id: 'diadora-frequenza-2',
  slug: 'diadora-frequenza-2',
  brand: 'Diadora',
  name: '프리퀀자 2',
  image: '/images/shoes/diadora/frequenza-2/side.webp',
  images: [
    '/images/shoes/diadora/frequenza-2/side.webp',
    '/images/shoes/diadora/frequenza-2/angle.webp',
    '/images/shoes/diadora/frequenza-2/top.webp',
    '/images/shoes/diadora/frequenza-2/outsole.webp',
  ],
  category: '데일리',
  rating: 4,
  status: 'new',
  price: 259000,
  description:
    '227g으로 가벼운 디아도라의 데일리 트레이너. ANIMA N2 폼이 경도 11.8 HA로 매우 부드럽고 힐 충격흡수가 161 SA로 높지만, 실측 드롭이 11.8mm로 커서 뒤꿈치 착지 러너에게 맞춰진 신발입니다. 토박스는 71.6mm로 좁은 편. 한국 공식몰 정가 259,000원.',
  oneliner: '227g·11.8 HA 초연질 — 뒤꿈치 착지형 경량 데일리',
  editorComment:
    '"가볍고 푹신한 데일리 하나로 조깅부터 템포까지"를 원하는 러너에게 수치상 가능성이 있는 신발입니다. RunRepeat 랩에서 227g(남성 US 9)으로 가볍고, ANIMA N2 폼 경도가 11.8 HA로 랩 평균의 절반 수준이라 매우 부드럽습니다. 반발은 힐 59.4%·전족부 62.7%로 데일리용으로 무난한 수준이고, RunRepeat는 이지런·롱런·템포를 한 켤레로 소화하려는 뒤꿈치 착지 러너에게 맞다고 봤습니다.\n\n성격을 가르는 건 드롭입니다. 공칭 8mm지만 실측은 11.8mm(힐 36.5mm / 전족부 24.7mm)라, 충격흡수가 힐 161 SA인 데 비해 전족부는 113 SA로 평범합니다. 뒤꿈치로 착지하면 아주 푹신하고, 앞발 착지라면 평범한 쿠션으로 느껴질 수 있는 구조입니다. 플랫폼이 좁아 안정성은 낮은 편입니다.\n\n사이즈·구매 가이드: 토박스 폭 71.6mm(RunRepeat 평균 73.2mm)에 RunRepeat가 "narrow, tapered toebox"라고 적어 발볼 넓은 한국 러너에겐 불리하고, 한국 공식몰에 와이드 버전은 없습니다. 정가 259,000원은 반발이 더 높다고 RunRepeat가 짚은 마하 6(185,000원)·아디제로 Evo SL(209,000원)보다 높습니다.',
  tags: ['데일리', '경량', '템포 겸용', '뒤꿈치 착지', '고드롭'],

  specs: {
    weight: 227,
    cushioning: 10,
    responsiveness: 7,
    stability: 5,
    drop: 12,
    durability: 550,
  },

  biomechanics: {
    stackHeight: { heel: 36.5, forefoot: 24.7 },
    drop: 12,
    carbonPlate: false,
    plateType: null,
    midsoleType: 'ANIMA N2 (질소 주입 EVA)',
    optimalPace: '4:45-7:00 min/km (이지런~템포)',
  },

  injuryPrevention: {
    plantarFasciitis: 'good',
    achillesTendinopathy: 'good',
    kneeIssues: 'caution',
    shinSplints: 'good',
  },

  koreanFootFit: {
    toBoxWidth: 'narrow',
    flatFootCompatibility: 'poor',
    wideOptions: false,
    winterCompatibility: 'good',
    summerCompatibility: 'fair',
  },

  targetUsers: {
    recommended: [
      '이지런·롱런·템포를 한 켤레로 돌리려는 뒤꿈치 착지 러너',
      '230g 안팎의 가벼운 데일리를 찾는 러너',
      '아주 부드러운 쿠션을 선호하는 러너',
      '발볼이 좁은 러너',
    ],
    notRecommended: [
      '발볼이 넓은 러너 (토박스 71.6mm, 와이드 없음)',
      '평발·과내전으로 지지가 필요한 러너 (좁은 플랫폼, 안정성 낮음)',
      '저드롭을 선호하는 앞발 착지 러너 (실측 드롭 11.8mm)',
    ],
  },

  features: [
    'ANIMA N2 미드솔 — 경도 11.8 HA, 반발 힐 59.4% / 전족부 62.7% (RunRepeat)',
    '227g (남성 US 9 실측)',
    '힐 36.5mm / 전족부 24.7mm, 실측 드롭 11.8mm',
    'Duratech 5000 부분 고무 아웃솔 — 마모 0.7mm, 두께 2.8mm',
    '에너지 리턴 전족부 62.7% (RunRepeat 실측)',
  ],

  priceAnalysis: {
    msrp: 259000,
    costPerKm: 471,
    valueRating: 5,
    priceTier: 'premium',
    alternatives: ['hoka-mach-6', 'adidas-adizero-evo-sl'],
    valueAdvantages: [
      '227g으로 같은 가격대 데일리 중 가벼운 편',
      '힐 충격흡수 161 SA — 뒤꿈치 착지 시 쿠션이 큼',
      '노출 폼이 넓은데도 아웃솔 마모 0.7mm로 양호',
    ],
  },

  detailedSpecs: {
    weight: '227g (RunRepeat 실측, 남성 US 9) / 브랜드 공칭 230g',
    stackHeight: '힐 36.5mm / 전족부 24.7mm (RunRepeat 실측) — 브랜드 공칭 36/28mm',
    drop: '11.8mm (실측) — 브랜드 공칭 8mm',
    midsole: 'ANIMA N2 (질소 주입 EVA) — 경도 11.8 HA, 충격흡수 힐 161 SA / 전족부 113 SA',
    plate: '없음',
    outsole: 'Duratech 5000 부분 고무 + 노출 폼, 두께 2.8mm, 마모 0.7mm',
    upper: '경량 메시, 혀 패딩 1.5mm',
    width: '좁음 — 토박스 폭 71.6mm·높이 23.9mm (RunRepeat, 남성 US 9). RunRepeat: "the narrow, tapered toebox is a real limitation"',
    durability: '450~650km — 고무 마모는 적지만 노출 폼 면적이 넓음',
    price: '₩259,000 (2026-10-20 디아도라 한국 공식몰 확인)',
    costPerKm: '약 ₩471/km (내구성 범위 중간값 기준)',
    footType: '중립 발',
    landingPattern: 'RFS (RunRepeat 표기)',
  },

  reviews: [
    {
      userType: '예상 적합 — 한 켤레로 조깅과 템포를 함께 하는 뒤꿈치 착지 러너',
      text: '227g으로 가볍고 반발이 60% 안팎이라, 평소 조깅 페이스와 주 1회 템포를 한 켤레로 오가려는 경우에 맞는 수치입니다. 실측 드롭 11.8mm에 힐 충격흡수가 161 SA라 뒤꿈치로 착지할 때 쿠션이 가장 크게 작동하는 구조입니다. 다만 플랫폼이 좁고 폼이 매우 부드러워(11.8 HA) 코너나 피로한 후반에는 흔들림이 생길 수 있습니다.',
    },
    {
      userType: '예상 적합 — 무릎 부담이 걱정되는 과내전 러너',
      text: '이 조건에는 맞지 않을 가능성이 높습니다. RunRepeat는 안정성이 제한적이라고 평가했고, 아주 부드러운 폼과 좁은 플랫폼 조합은 발이 안쪽으로 무너지는 러너에게 지지를 주지 못합니다. 같은 브랜드에서 지지를 원한다면 미토스 블루실드 볼로 5, 다른 브랜드라면 안정화 카테고리를 보는 편이 맞습니다.',
    },
  ],

  similarShoes: ['hoka-mach-6', 'adidas-adizero-evo-sl', 'adidas-supernova-rise-2'],
  purchaseLinks: [
    { store: '디아도라 공식몰', url: 'https://www.diadorakorea.com/product/detail.html?product_no=5646', price: 259000, isOfficial: true },
  ],
};
