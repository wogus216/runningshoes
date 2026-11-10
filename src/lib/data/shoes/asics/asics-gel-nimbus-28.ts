import type { Shoe } from '@/types/shoe';

// 원문 재확인:2026-11-09. 명시한 범위와 한계는 verification 참조.
export const shoe: Shoe = {
  id: 'asics-gel-nimbus-28',
  slug: 'asics-gel-nimbus-28',
  brand: 'Asics',
  name: '젤 님버스 28',
  image: '/images/shoes/asics/gel_Nimbus28.webp',
  images: [
    '/images/shoes/asics/nimbus28/side.webp',
    '/images/shoes/asics/nimbus28/front.webp',
    '/images/shoes/asics/nimbus28/back.webp',
    '/images/shoes/asics/nimbus28/angle.webp',
    '/images/shoes/asics/nimbus28/outsole.webp',
  ],
  category: '쿠션화',
  price: 199000,
  description: 'FF BLAST PLUS + 힐 PureGEL 구조의 젤 님버스 28. 한국 기본형 남성 일반1011C127.102·2E1011C144.404, 여성 일반1012B899.403·D1012B917.251 정가199,000원. Platinum 등 변형은 가격 비교에서 제외.',
  oneliner: '278g 실험실 무게 · FF BLAST PLUS + 힐 PureGEL',
  editorComment: '2026-11-09 원문 재확인. 한국 기본형 남성 일반1011C127.102·2E1011C144.404, 여성 일반1012B899.403·D1012B917.251 정가199,000원. Platinum 등 변형은 가격 비교에서 제외. 한국 남성 상품표281g(측정 사이즈 미공시). DOR 소개 남성280g(US9)·43.5/35.5mm·드롭8mm. RR 브랜드칸283g과도 구분. RunRepeat 실측 278g,힐/전족부 43/34.9mm·드롭8.1mm입니다. RunRepeat 결과표는43.0/34.9mm·드롭8.1mm이나 전족부 본문에는34.3mm도 남아 있습니다. 표와 본문의 충돌을 공개하고 결과표 기준을 구분합니다. DOR의 Matt은 US10에서 넓이 여유를 느꼈으나 얇은 혀의 끈 압박, 전작보다 단단하고 뻣뻣한 주행감을 지적했습니다. 체감 드롭과 종아리 불편은 개인 경험이며 실측 드롭이나 모델의 부상 효과로 쓰지 않습니다. 한국 남성 일반·2E, 여성 일반·D 상품을 확인했습니다. 4E는 공식 카테고리의 서로 다른 응답이 충돌해 현재SKU·재고 미확인입니다. RR 엄지 높이는22.7mm로 발가락 위 압박도 확인하세요. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.',
  tags: [
    '쿠션화',
    '맥시멀',
    '장거리',
    '충격흡수',
  ],
  specs: {
    weight: 278,
    drop: 8.1,
  },
  biomechanics: {
    stackHeight: {
      heel: 43,
      forefoot: 34.9,
    },
    drop: 8.1,
    carbonPlate: false,
    plateType: null,
    midsoleType: 'FF BLAST PLUS + 힐 PureGEL',
  },
  koreanFootFit: {
    wideOptions: true,
  },
  targetUsers: {
    recommended: [
      '쿠션형 뉴트럴 트레이너의 착화를 비교하는 러너',
      '한국 남성2E·여성D 옵션을 찾는 러너',
    ],
    notRecommended: [
      '발가락 위 공간·끈 압박에 민감한 경우',
      '뻣뻣한 전환감이 맞지 않는 경우',
    ],
  },
  features: [
    'FF BLAST PLUS + 힐 PureGEL',
    '278g (RunRepeat 남성US9 공시 기준)',
    '힐/전족부 SA 137/133 · 에너지 리턴 44.2/45.9% (RunRepeat)',
    '한국 남성 일반·2E, 여성 일반·D 상품을 확인했습니다. 4E는 공식 카테고리의 서로 다른 응답이 충돌해 현재SKU·재고 미확인입니다. RR 엄지 높이는22.7mm로 발가락 위 압박도 확인하세요.',
  ],
  priceAnalysis: {
    msrp: 199000,
    priceTier: 'premium',
    alternatives: [
      'new-balance-1080-v14',
      'hoka-clifton-10',
      'brooks-glycerin-22',
    ],
  },
  detailedSpecs: {
    weight: '278g (RunRepeat 남성US9 공시 기준). 한국 남성 상품표281g(측정 사이즈 미공시). DOR 소개 남성280g(US9)·43.5/35.5mm·드롭8mm. RR 브랜드칸283g과도 구분.',
    stackHeight: '43/34.9mm (RunRepeat 힐/전족부). RunRepeat 결과표는43.0/34.9mm·드롭8.1mm이나 전족부 본문에는34.3mm도 남아 있습니다. 표와 본문의 충돌을 공개하고 결과표 기준을 구분합니다.',
    drop: '8.1mm (RunRepeat 실측). 공시 조건은 무게 항목에 구분.',
    midsole: 'FF BLAST PLUS + 힐 PureGEL · 38.8 AC · 힐/전족부 SA 137/133 · 에너지 리턴 44.2/45.9% (RunRepeat)',
    plate: '확인한 원문 설명에 전장 카본 플레이트는 보고되지 않음',
    width: 'RunRepeat 내부 최광폭 97.6mm / 엄지 부위 72.5mm / 엄지 높이 22.7mm. 한국 남성 일반·2E, 여성 일반·D 상품을 확인했습니다. 4E는 공식 카테고리의 서로 다른 응답이 충돌해 현재SKU·재고 미확인입니다. RR 엄지 높이는22.7mm로 발가락 위 압박도 확인하세요.',
    durability: '검증된 공통 수명km 미확인. 짧은 착화·마모 깊이를 수명km로 환산하지 않습니다.',
    price: '한국 기본형 남성 일반1011C127.102·2E1011C144.404, 여성 일반1012B899.403·D1012B917.251 정가199,000원. Platinum 등 변형은 가격 비교에서 제외.',
  },
  reviews: [
    {
      userType: '원문 기반 에디터 분석',
      source: 'editor',
      sourceUrl: 'https://runrepeat.com/asics-gel-nimbus-28',
      text: '278g과 SA 137/133·에너지 리턴 44.2/45.9%는 해외 실험실 검체의 값이며 기록 향상률·임상 효과가 아닙니다. RunRepeat 결과표는43.0/34.9mm·드롭8.1mm이나 전족부 본문에는34.3mm도 남아 있습니다. 표와 본문의 충돌을 공개하고 결과표 기준을 구분합니다. 한국 남성 일반·2E, 여성 일반·D 상품을 확인했습니다. 4E는 공식 카테고리의 서로 다른 응답이 충돌해 현재SKU·재고 미확인입니다. RR 엄지 높이는22.7mm로 발가락 위 압박도 확인하세요.',
    },
    {
      userType: '외부 착화 의견 요약 · Doctors of Running',
      source: 'editor',
      sourceUrl: 'https://www.doctorsofrunning.com/asics-gel-nimbus-28-review-2026/',
      text: 'DOR의 Matt은 US10에서 넓이 여유를 느꼈으나 얇은 혀의 끈 압박, 전작보다 단단하고 뻣뻣한 주행감을 지적했습니다. 체감 드롭과 종아리 불편은 개인 경험이며 실측 드롭이나 모델의 부상 효과로 쓰지 않습니다.',
    },
  ],
  similarShoes: [
    'new-balance-1080-v14',
    'hoka-clifton-10',
    'brooks-glycerin-22',
  ],
  relatedPosts: [
    {
      slug: 'new-balance-1080-v15-vs-asics-nimbus-28-premium-cushion-2026',
      title: '1080 v15 vs 님버스 28 — 프리미엄 쿠션 대결',
    },
    {
      slug: 'pegasus-42-vs-nimbus-28-daily-cushion-2026',
      title: '페가수스 42 vs 젤 님버스 28 — 데일리 대결',
    },
    {
      slug: 'asics-running-shoes-lineup-tier-guide-2026',
      title: '아식스 러닝화 계급도',
    },
  ],
  purchaseLinks: [
    {
      store: '네이버',
      url: 'https://naver.me/551GfvQ6',
    },
  ],
  verification: {
    checkedAt: '2026-11-09',
    scope: '한국 확인SKU의 정가·폭, 해외 실험실 수치·구조·외부 착화 의견을 재확인했습니다. 제품 전체 검증 완료 표지가 아닙니다.',
    sources: [
      {
        label: '한국 공식 남성 · unlabeled standard · 1011C127.102',
        url: 'https://www.asics.co.kr/p/AKR_112630225-102',
        note: '한국 기본형 남성 일반1011C127.102·2E1011C144.404, 여성 일반1012B899.403·D1012B917.251 정가199,000원. Platinum 등 변형은 가격 비교에서 제외.',
      },
      {
        label: '한국 공식 남성 · 2E · 1011C144.404',
        url: 'https://www.asics.co.kr/p/AKR_112630226-404',
        note: '한국 기본형 남성 일반1011C127.102·2E1011C144.404, 여성 일반1012B899.403·D1012B917.251 정가199,000원. Platinum 등 변형은 가격 비교에서 제외.',
      },
      {
        label: '한국 공식 여성 · unlabeled standard · 1012B899.403',
        url: 'https://www.asics.co.kr/p/AKR_112630228-403',
        note: '한국 기본형 남성 일반1011C127.102·2E1011C144.404, 여성 일반1012B899.403·D1012B917.251 정가199,000원. Platinum 등 변형은 가격 비교에서 제외.',
      },
      {
        label: '한국 공식 여성 · D · 1012B917.251',
        url: 'https://www.asics.co.kr/p/AKR_112630229-251',
        note: '한국 기본형 남성 일반1011C127.102·2E1011C144.404, 여성 일반1012B899.403·D1012B917.251 정가199,000원. Platinum 등 변형은 가격 비교에서 제외.',
      },
      {
        label: 'RunRepeat 젤 님버스 28',
        url: 'https://runrepeat.com/asics-gel-nimbus-28',
        note: '남성US9 공시 기준. 278g · 43/34.9mm · 드롭8.1mm. 힐/전족부 SA 137/133 · ER 44.2/45.9%. RunRepeat 결과표는43.0/34.9mm·드롭8.1mm이나 전족부 본문에는34.3mm도 남아 있습니다. 표와 본문의 충돌을 공개하고 결과표 기준을 구분합니다.',
      },
      {
        label: 'Doctors of Running 착화 리뷰',
        url: 'https://www.doctorsofrunning.com/asics-gel-nimbus-28-review-2026/',
        note: '한국 남성 상품표281g(측정 사이즈 미공시). DOR 소개 남성280g(US9)·43.5/35.5mm·드롭8mm. RR 브랜드칸283g과도 구분.',
      },
      {
        label: 'RunRepeat 측정법',
        url: 'https://runrepeat.com/testing-methodology',
        note: '검체·측정 위치·버전에 따라 조건이 다릅니다. 내부 최광폭·엄지 너비·외부 플랫폼 폭은 다른 값이고, AC와HA는 직접 비교하지 않습니다.',
      },
    ],
    limitations: [
      '모델별 질환 예방·치료 효과, 공통 최적 페이스와 수명km를 확인하지 못했습니다. 해당 등급·수명값·km당 비용은 비웁니다.',
      '에디터 평점·1~10점·발볼 및 계절 적합성 분류는 실험실 단위나 임상 효과가 아닙니다.',
      '확인한 상품·성별·폭·시점의 조건만 적용합니다. 재고·구매가는 판매처에서 다시 확인하세요.',
    ],
  },
};
