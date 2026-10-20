import type { Shoe } from '@/types/shoe';

// 2026-10-20 등록 — 출처: 디아도라 한국 공식몰(diadorakorea.com) 상품 4617·4619·5186 판매가,
// RunRepeat 랩 리뷰(runrepeat.com/diadora-mythos-blushield-volo-5, 2025-12-31, 남성 US 9 시료),
// 디아도라 공식 테크 페이지(diadora.com/en/kr/tecnology-running)의 Blushield 설명. 점수는 랩 수치를 문서 C절 매핑에 대입.
export const shoe: Shoe = {
  id: 'diadora-mythos-blushield-volo-5',
  slug: 'diadora-mythos-blushield-volo-5',
  brand: 'Diadora',
  name: '미토스 블루실드 볼로 5',
  image: '/images/shoes/diadora/mythos-blushield-volo-5/side.webp',
  images: [
    '/images/shoes/diadora/mythos-blushield-volo-5/side.webp',
    '/images/shoes/diadora/mythos-blushield-volo-5/angle.webp',
    '/images/shoes/diadora/mythos-blushield-volo-5/top.webp',
    '/images/shoes/diadora/mythos-blushield-volo-5/outsole.webp',
  ],
  category: '안정화',
  rating: 4,
  status: 'new',
  price: 229000,
  description:
    '디아도라의 Blushield 지지 구조를 넣은 안정화 데일리. RunRepeat 안정성 평가가 높고 아웃솔이 두꺼워(3.8mm) 내구성이 좋지만, 반발은 힐 42.8%로 낮고 실측 드롭이 11.2mm로 큽니다. 토박스 71.0mm로 좁은 편. 한국 공식몰 정가 229,000원.',
  oneliner: '거슬리지 않는 지지의 Blushield 안정화 — 반발은 낮고 드롭은 높다',
  editorComment:
    '"평발인데 딱딱하게 받치는 안정화는 싫다"는 러너에게 고려해 볼 만한 성격입니다. RunRepeat는 Blushield 구조가 "거슬리지 않는(non-intrusive) 지지"를 준다고 평가했고, 비틀림 강성이 높은 반면 앞뒤로는 잘 휘어 자연스러운 착지감이라고 적었습니다. 충격흡수는 힐 137 SA·전족부 106 SA, 경도 20.0 HA로 지지 중심의 균형형 세팅입니다. 아웃솔은 Duratech 5000 고무를 3.8mm 두께로 깔아 마모가 0.8mm에 그쳤습니다.\n\n아쉬운 점은 분명합니다. 반발이 힐 42.8%·전족부 47.4%로 데일리 평균에 크게 못 미쳐 RunRepeat가 "지루한 라이드"를 단점으로 꼽았고, 실측 드롭이 11.2mm(공칭 10mm)로 높아 저드롭 선호 러너에겐 맞지 않습니다. 무게는 281g으로 안정화로는 무난하지만, 어퍼(토박스) 내구성은 낮게 나왔습니다.\n\n사이즈·구매 가이드: 토박스 폭 71.0mm(RunRepeat 평균 73.2mm)로 RunRepeat가 "best for narrow feet"라고 정리했고, 한국 공식몰에 와이드 버전은 없습니다. 발볼 넓은 평발 러너라면 와이드가 있는 안정화가 우선입니다. 정가 229,000원은 우리 DB의 가이드 19(179,000원)·아라히 8(199,000원)보다 높습니다.',
  tags: ['안정화', '데일리', 'Blushield', '뒤꿈치 착지', '내구성'],

  specs: {
    weight: 281,
    cushioning: 8,
    responsiveness: 5,
    stability: 8,
    drop: 11,
    durability: 600,
  },

  biomechanics: {
    stackHeight: { heel: 40.0, forefoot: 28.8 },
    drop: 11,
    carbonPlate: false,
    plateType: null,
    midsoleType: 'ANIMA (EVA) + Blushield 지지 구조',
    optimalPace: '5:30-7:30 min/km (이지·스테디런)',
  },

  injuryPrevention: {
    plantarFasciitis: 'good',
    achillesTendinopathy: 'good',
    kneeIssues: 'good',
    shinSplints: 'good',
  },

  koreanFootFit: {
    toBoxWidth: 'narrow',
    flatFootCompatibility: 'good',
    wideOptions: false,
    winterCompatibility: 'good',
    summerCompatibility: 'fair',
  },

  targetUsers: {
    recommended: [
      '가벼운 지지가 필요한 뒤꿈치 착지 러너',
      '강한 아치 지지보다 자연스러운 안정감을 원하는 평발·과내전 러너',
      '아웃솔 내구성을 중시하는 러너',
    ],
    notRecommended: [
      '반발감 있는 라이드를 원하는 러너 (반발 42.8~47.4%)',
      '저드롭을 선호하는 러너 (실측 드롭 11.2mm)',
      '발볼이 넓은 러너 (토박스 71.0mm, 와이드 없음)',
    ],
  },

  features: [
    'Blushield 지지 구조 — 발 모양에 맞춘 모르포 베이스 + 충격 완충 코어 (디아도라 공식)',
    'ANIMA 미드솔 — 충격흡수 힐 137 SA / 전족부 106 SA, 경도 20.0 HA (RunRepeat)',
    '힐 40.0mm / 전족부 28.8mm, 실측 드롭 11.2mm',
    'Duratech 5000 아웃솔 — 고무 두께 3.8mm, 마모 0.8mm',
    'DDATTIVO 인솔 — 힐 쪽 두꺼운 쿠션 블록(최대 7.9mm)',
  ],

  priceAnalysis: {
    msrp: 229000,
    costPerKm: 382,
    valueRating: 5,
    priceTier: 'premium',
    alternatives: ['saucony-guide-19', 'hoka-arahi-8'],
    valueAdvantages: [
      'RunRepeat 안정성 89점 — 지지가 거슬리지 않는 평가',
      '3.8mm 두꺼운 고무로 아웃솔 마모 0.8mm',
      '전족부 미드솔 폭 110.8mm로 안정화치고 날렵한 플랫폼',
    ],
  },

  detailedSpecs: {
    weight: '281g (RunRepeat 실측, 남성 US 9) / 브랜드 공칭 295g',
    stackHeight: '힐 40.0mm / 전족부 28.8mm (RunRepeat 실측, 전족부 일부는 Blushield 구조 높이) — 브랜드 공칭 36/26mm',
    drop: '11.2mm (실측) — 브랜드 공칭 10mm',
    midsole: 'ANIMA (EVA) + Blushield — 경도 20.0 HA, 반발 힐 42.8% / 전족부 47.4%',
    plate: '없음 (Blushield 지지 구조)',
    outsole: 'Duratech 5000 고무, 두께 3.8mm, 마모 0.8mm',
    upper: '프리미엄 메시 어퍼, 혀 패딩 1.5mm — 토박스 내구성은 RunRepeat "Bad"',
    width: '좁음 — 실내 폭 94.1mm·토박스 폭 71.0mm·높이 23.5mm (RunRepeat, 남성 US 9). RunRepeat: "it is, again, best for narrow feet"',
    durability: '500~700km — 아웃솔은 우수, 어퍼 토박스 내구성이 약점',
    price: '₩229,000 (2026-10-20 디아도라 한국 공식몰 확인)',
    costPerKm: '약 ₩382/km (내구성 범위 중간값 기준)',
    footType: '중립 ~ 과내전',
    landingPattern: 'RFS (RunRepeat 표기)',
  },

  reviews: [
    {
      userType: '예상 적합 — 강한 아치 지지가 불편했던 가벼운 과내전 러너',
      text: '딱딱한 메디얼 포스트 같은 강한 교정보다 자연스러운 안정감을 원한다면 맞을 가능성이 있습니다. RunRepeat 안정성 평가가 89점으로 높으면서도 지지가 거슬리지 않는다고 평가됐고, 앞뒤로는 유연해 착지감이 자연스러운 편입니다. 다만 반발이 40%대라 페이스를 올리는 날에는 둔하게 느껴질 수 있어, 이지·스테디런 전용으로 두는 운용이 맞습니다.',
    },
    {
      userType: '예상 적합 — 발볼 넓은 평발 러너',
      text: '이 조건에는 신중해야 합니다. 지지 구조 자체는 평발 러너에게 도움이 되는 방향이지만, 토박스 폭이 71.0mm로 평균보다 좁고 높이도 23.5mm로 낮아 발볼 넓은 발에는 앞쪽 압박이 생길 수 있습니다. 한국 공식몰에 와이드도 없으므로, 와이드가 있는 다른 안정화와 비교해 보고 시착 후 결정하는 편이 안전합니다.',
    },
  ],

  similarShoes: ['saucony-guide-19', 'hoka-arahi-8', 'asics-gel-kayano-33'],
  purchaseLinks: [
    { store: '디아도라 공식몰', url: 'https://www.diadorakorea.com/product/detail.html?product_no=4617', price: 229000, isOfficial: true },
  ],
};
