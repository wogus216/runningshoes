import type { Shoe } from '@/types/shoe';

// 원문 재확인:2026-11-09. 명시한 범위와 한계는 verification 참조.
export const shoe: Shoe = {
  id: 'brooks-ghost-max-3',
  slug: 'brooks-ghost-max-3',
  brand: 'Brooks',
  name: '고스트 맥스 3',
  image: '/images/shoes/brooks/ghostmax3/side.webp',
  images: [
    '/images/shoes/brooks/ghostmax3/side.webp',
    '/images/shoes/brooks/ghostmax3/front.webp',
    '/images/shoes/brooks/ghostmax3/back.webp',
    '/images/shoes/brooks/ghostmax3/top.webp',
    '/images/shoes/brooks/ghostmax3/outsole.webp',
  ],
  category: '쿠션화',
  price: 179000,
  description: '질소 주입 DNA LOFT v3 구조의 고스트 맥스 3. 한국 남성 Medium1104641D162·Wide1104642E078 정가179,000원. 공식 원문은 캐시 응답이라 실시간 재고·할인가는 미확인.',
  oneliner: '303g 실험실 무게 · 질소 주입 DNA LOFT v3',
  editorComment: '2026-11-09 원문 재확인. 한국 남성 Medium1104641D162·Wide1104642E078 정가179,000원. 공식 원문은 캐시 응답이라 실시간 재고·할인가는 미확인. DOR 소개306g(남성US9/여성10.5)·39/33mm·드롭6mm. 한국 공식 상품의 현재 무게·스택·드롭을 직접 확인한 것은 아님. RunRepeat 실측 303g,힐/전족부 38.5/31.2mm·드롭7.3mm입니다.  DOR의 Matt은 US10에서 여유 있는 메쉬와 인솔 공간, 쉬운 러닝의 전환을 평가했지만 무게·낮은 반응과 움직이는 혀를 주의점으로 들었습니다.30마일의 마모 관찰에서700km 공통 수명을 만들지 않습니다. 한국 남성Medium·Wide 상품 확인. 여성 한국 상품과 실시간 사이즈별 재고는 미확인입니다. 표의 내부 치수는 해외 실험실 검체 기준입니다. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.',
  specs: {
    weight: 303,
    cushioning: 8,
    responsiveness: 6,
    stability: 7,
    drop: 7.3,
  },
  biomechanics: {
    stackHeight: {
      heel: 38.5,
      forefoot: 31.2,
    },
    drop: 7.3,
    carbonPlate: false,
    midsoleType: '질소 주입 DNA LOFT v3',
  },
  koreanFootFit: {
    toBoxWidth: 'standard',
    wideOptions: true,
  },
  targetUsers: {
    recommended: [
      '쉬운 러닝·걷기의 로커 감각을 비교하려는 러너',
      '한국 남성 와이드 상품을 확인하려는 러너',
    ],
    notRecommended: [
      '가벼운 무게·높은 반응성이 우선인 경우',
      '혀의 움직임이나 뒤꿈치 고정이 맞지 않는 경우',
    ],
  },
  features: [
    '질소 주입 DNA LOFT v3',
    '303g (RunRepeat 남성US9 공시 기준)',
    '힐/전족부 SA 134/116 · 에너지 리턴 51.3/50.5% (RunRepeat)',
    '한국 남성Medium·Wide 상품 확인. 여성 한국 상품과 실시간 사이즈별 재고는 미확인입니다. 표의 내부 치수는 해외 실험실 검체 기준입니다.',
  ],
  priceAnalysis: {
    msrp: 179000,
    priceTier: 'mid',
    alternatives: [
      'hoka-bondi-9',
      'asics-gel-nimbus-28',
    ],
  },
  reviews: [
    {
      userType: '원문 기반 에디터 분석',
      source: 'editor',
      sourceUrl: 'https://runrepeat.com/brooks-ghost-max-3',
      text: '303g과 SA 134/116·에너지 리턴 51.3/50.5%는 해외 실험실 검체의 값이며 기록 향상률·임상 효과가 아닙니다.  한국 남성Medium·Wide 상품 확인. 여성 한국 상품과 실시간 사이즈별 재고는 미확인입니다. 표의 내부 치수는 해외 실험실 검체 기준입니다.',
    },
    {
      userType: '외부 착화 의견 요약 · Doctors of Running',
      source: 'editor',
      sourceUrl: 'https://www.doctorsofrunning.com/brooks-ghost-max-3-review-2025/',
      text: 'DOR의 Matt은 US10에서 여유 있는 메쉬와 인솔 공간, 쉬운 러닝의 전환을 평가했지만 무게·낮은 반응과 움직이는 혀를 주의점으로 들었습니다.30마일의 마모 관찰에서700km 공통 수명을 만들지 않습니다.',
    },
  ],
  detailedSpecs: {
    weight: '303g (RunRepeat 남성US9 공시 기준). DOR 소개306g(남성US9/여성10.5)·39/33mm·드롭6mm. 한국 공식 상품의 현재 무게·스택·드롭을 직접 확인한 것은 아님.',
    stackHeight: '38.5/31.2mm (RunRepeat 힐/전족부). ',
    drop: '7.3mm (RunRepeat 실측). 공시 조건은 무게 항목에 구분.',
    midsole: '질소 주입 DNA LOFT v3 · 33.8 AC · 힐/전족부 SA 134/116 · 에너지 리턴 51.3/50.5% (RunRepeat)',
    plate: '확인한 원문 설명에 전장 카본 플레이트는 보고되지 않음',
    width: 'RunRepeat 내부 최광폭 95.3mm / 엄지 부위 73.4mm / 엄지 높이 28.1mm. 한국 남성Medium·Wide 상품 확인. 여성 한국 상품과 실시간 사이즈별 재고는 미확인입니다. 표의 내부 치수는 해외 실험실 검체 기준입니다.',
    durability: '검증된 공통 수명km 미확인. 짧은 착화·마모 깊이를 수명km로 환산하지 않습니다.',
    price: '한국 남성 Medium1104641D162·Wide1104642E078 정가179,000원. 공식 원문은 캐시 응답이라 실시간 재고·할인가는 미확인.',
  },
  similarShoes: [
    'hoka-bondi-9',
    'asics-gel-nimbus-28',
    'new-balance-1080-v14',
    'brooks-glycerin-max-2',
  ],
  relatedPosts: [
    {
      slug: 'running-shoe-500km-replacement-myth-2026',
      title: '"500km 교체설"의 진실 — 소재별 수명',
    },
  ],
  purchaseLinks: [
  ],
  tags: [
    '쿠션화',
    '맥시멀',
    '장거리',
  ],
  verification: {
    checkedAt: '2026-11-09',
    scope: '한국 확인SKU의 정가·폭, 해외 실험실 수치·구조·외부 착화 의견을 재확인했습니다. 제품 전체 검증 완료 표지가 아닙니다.',
    sources: [
      {
        label: '남성 고스트 맥스3 화이트(MEDIUM)',
        url: 'https://brooksrunning.co.kr/product/detail.html?item_code=P00000XL000M&product_no=609',
        note: '한국 남성 Medium1104641D162·Wide1104642E078 정가179,000원. 공식 원문은 캐시 응답이라 실시간 재고·할인가는 미확인.',
      },
      {
        label: '남성 고스트 맥스3 라임(WIDE)',
        url: 'https://brooksrunning.co.kr/product/black-friday-%EB%82%A8%EC%84%B1-%EA%B3%A0%EC%8A%A4%ED%8A%B8-%EB%A7%A5%EC%8A%A4-3%EB%9D%BC%EC%9E%84-wide/613/category/86/display/1/',
        note: '한국 남성 Medium1104641D162·Wide1104642E078 정가179,000원. 공식 원문은 캐시 응답이라 실시간 재고·할인가는 미확인.',
      },
      {
        label: 'RunRepeat 고스트 맥스 3',
        url: 'https://runrepeat.com/brooks-ghost-max-3',
        note: '남성US9 공시 기준. 303g · 38.5/31.2mm · 드롭7.3mm. 힐/전족부 SA 134/116 · ER 51.3/50.5%. ',
      },
      {
        label: 'Doctors of Running 착화 리뷰',
        url: 'https://www.doctorsofrunning.com/brooks-ghost-max-3-review-2025/',
        note: 'DOR 소개306g(남성US9/여성10.5)·39/33mm·드롭6mm. 한국 공식 상품의 현재 무게·스택·드롭을 직접 확인한 것은 아님.',
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
