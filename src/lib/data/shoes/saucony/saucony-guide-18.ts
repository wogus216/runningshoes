import type { Shoe } from '@/types/shoe';

// 원문 재확인:2026-11-09. 명시한 범위와 한계는 verification 참조.
export const shoe: Shoe = {
  id: 'saucony-guide-18',
  slug: 'saucony-guide-18',
  brand: 'Saucony',
  name: '가이드 18',
  image: '/images/shoes/saucony/guide18.webp',
  images: [
    '/images/shoes/saucony/guide18/side.webp',
    '/images/shoes/saucony/guide18/top.webp',
    '/images/shoes/saucony/guide18/outsole.webp',
  ],
  category: '안정화',
  description: 'PWRRUN · CenterPath 구조의 가이드 18. 실험실 278g·힐/전족부 36/27.7mm. 한국 현재 정가 미확인.',
  oneliner: '278g 실험실 무게 · PWRRUN · CenterPath',
  editorComment: '2026-11-09 원문 재확인. 한국 공식 가이드18 검색에서 정확한18세대 상품을 찾지 못해 현재 정가·성별·폭·SKU·재고는 미확인입니다. 검색된19세대의 가격·폭을18에 적용하지 않으며 단종·미출시로 판단하지 않습니다. DOR 소개 남성272g(US9)·여성245g(US8),35/29mm·드롭6mm. RR278g·36.0/27.7mm·8.3mm와 조건을 구분합니다. RR 원문은 인솔 인쇄8mm와 제조사 확인6mm도 함께 기록합니다. RR의 인솔 PWRRUN PB/Pebax 재료 설명은 한국 제조사 원문 사양으로 재확인하지 못했습니다. 메인폼 PWRRUN과 인솔 재료를 혼동하지 않습니다. DOR의 Matt(US10)은 대체로 길이가 맞지만 앞쪽 테이퍼·낮은 전방 볼륨으로 새끼발가락 압박과 토가드 마찰을 느꼈고 Bach(US9.5)은 보통 폭과 좋은 중족 고정을 느꼈습니다. 넓은 바닥·측벽의 CenterPath이며 전통 미디얼 포스트로 설명하지 않습니다. Matt의 젖은 노면 미끄러짐과 RR 접지시험은 다른 조건입니다. 한국 와이드 현재SKU는 미확인입니다. RR 내부 최광폭96.3mm·엄지73.6mm·높이34.3mm를 개인 발등 압박 부재로 해석하지 않습니다. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.',
  tags: [
    '안정화',
    '입문',
    '과내전 지원',
  ],
  specs: {
    weight: 278,
    cushioning: 8,
    responsiveness: 7,
    stability: 8,
    drop: 8.3,
  },
  biomechanics: {
    stackHeight: {
      heel: 36,
      forefoot: 27.7,
    },
    drop: 8.3,
    carbonPlate: false,
    plateType: null,
    midsoleType: 'PWRRUN · CenterPath',
  },
  koreanFootFit: {
    toBoxWidth: 'standard',
  },
  targetUsers: {
    recommended: [
      'PWRRUN과 CenterPath의 롤링을 시착 비교하려는 러너',
      '앞쪽 형태·중족부 고정을 직접 확인하려는 러너',
    ],
    notRecommended: [
      '앞쪽 테이퍼·토가드 마찰이 불편한 경우',
      '매우 높은 반응성이 우선인 경우',
    ],
  },
  features: [
    'PWRRUN · CenterPath',
    '278g · 힐/전족부 36/27.7mm (RunRepeat)',
    '힐/전족부 SA 124/119 · 에너지 리턴 61.3/62% (RunRepeat). RR의 인솔 PWRRUN PB/Pebax 재료 설명은 한국 제조사 원문 사양으로 재확인하지 못했습니다. 메인폼 PWRRUN과 인솔 재료를 혼동하지 않습니다.',
    '한국 와이드 현재SKU는 미확인입니다. RR 내부 최광폭96.3mm·엄지73.6mm·높이34.3mm를 개인 발등 압박 부재로 해석하지 않습니다.',
  ],
  priceAnalysis: {
    priceTier: 'mid',
    alternatives: [
      'asics-gel-kayano-32',
      'brooks-adrenaline-gts-25',
      'new-balance-860-v14',
    ],
  },
  detailedSpecs: {
    weight: '278g (RunRepeat 공시 검체 정책:남성US9). DOR 소개 남성272g(US9)·여성245g(US8),35/29mm·드롭6mm. RR278g·36.0/27.7mm·8.3mm와 조건을 구분합니다. RR 원문은 인솔 인쇄8mm와 제조사 확인6mm도 함께 기록합니다.',
    stackHeight: '36/27.7mm (RunRepeat 힐/전족부 실측)',
    drop: '8.3mm (RunRepeat 실측). 출처별 공시 조건은 무게 항목에 구분.',
    midsole: 'PWRRUN · CenterPath · 38.3 AC(Asker C) · 힐/전족부 SA 124/119 · 에너지 리턴 61.3/62%. RR의 인솔 PWRRUN PB/Pebax 재료 설명은 한국 제조사 원문 사양으로 재확인하지 못했습니다. 메인폼 PWRRUN과 인솔 재료를 혼동하지 않습니다.',
    plate: '확인한 원문 설명에 전장 카본 플레이트는 보고되지 않음',
    width: 'RunRepeat 내부 최광폭 96.3mm / 엄지 부위 73.6mm / 엄지 높이 34.3mm. 한국 와이드 현재SKU는 미확인입니다. RR 내부 최광폭96.3mm·엄지73.6mm·높이34.3mm를 개인 발등 압박 부재로 해석하지 않습니다.',
    durability: '검증된 공통 수명km 미확인. 짧은 착화·마모 깊이를 수명km로 환산하지 않습니다.',
    price: '한국 공식 가이드18 검색에서 정확한18세대 상품을 찾지 못해 현재 정가·성별·폭·SKU·재고는 미확인입니다. 검색된19세대의 가격·폭을18에 적용하지 않으며 단종·미출시로 판단하지 않습니다.',
  },
  reviews: [
    {
      userType: '원문 기반 에디터 분석',
      source: 'editor',
      sourceUrl: 'https://runrepeat.com/saucony-guide-18',
      text: '278g과 SA 124/119·에너지 리턴 61.3/62%는 해외 실험실 검체의 값이며 기록 향상률·임상 효과가 아닙니다. RR의 인솔 PWRRUN PB/Pebax 재료 설명은 한국 제조사 원문 사양으로 재확인하지 못했습니다. 메인폼 PWRRUN과 인솔 재료를 혼동하지 않습니다. 한국 와이드 현재SKU는 미확인입니다. RR 내부 최광폭96.3mm·엄지73.6mm·높이34.3mm를 개인 발등 압박 부재로 해석하지 않습니다.',
    },
    {
      userType: '외부 착화 의견 요약 · Doctors of Running',
      source: 'editor',
      sourceUrl: 'https://www.doctorsofrunning.com/saucony-guide-18-review-2025/',
      text: 'DOR의 Matt(US10)은 대체로 길이가 맞지만 앞쪽 테이퍼·낮은 전방 볼륨으로 새끼발가락 압박과 토가드 마찰을 느꼈고 Bach(US9.5)은 보통 폭과 좋은 중족 고정을 느꼈습니다. 넓은 바닥·측벽의 CenterPath이며 전통 미디얼 포스트로 설명하지 않습니다. Matt의 젖은 노면 미끄러짐과 RR 접지시험은 다른 조건입니다.',
    },
  ],
  similarShoes: [
    'asics-gel-kayano-32',
    'brooks-adrenaline-gts-25',
    'new-balance-860-v14',
    'hoka-gaviota-6',
  ],
  purchaseLinks: [
  ],
  verification: {
    checkedAt: '2026-11-09',
    scope: '한국 확인SKU의 정가·폭, 해외 실험실 수치·구조·외부 착화 의견을 재확인했습니다. 제품 전체 검증 완료 표지가 아닙니다.',
    sources: [
      {
        label: '써코니 한국 공식 검색 확인 범위',
        url: 'https://www.saucony.co.kr/product/search.html?banner_action=&order_by=recent&category_no=42&keyword=%EA%B0%80%EC%9D%B4%EB%93%9C+18',
        note: '정확한Guide18 상품 미확인. Guide19의 가격·판매 폭을 옮기지 않음.',
      },
      {
        label: 'RunRepeat 가이드 18',
        url: 'https://runrepeat.com/saucony-guide-18',
        note: '공시 검체 정책:남성US9. 개별 검체SKU·폭은 미확인. 278g · 36/27.7mm · 드롭8.3mm. SA 124/119 · ER 61.3/62%. RR의 인솔 PWRRUN PB/Pebax 재료 설명은 한국 제조사 원문 사양으로 재확인하지 못했습니다. 메인폼 PWRRUN과 인솔 재료를 혼동하지 않습니다.',
      },
      {
        label: 'Doctors of Running 착화 리뷰',
        url: 'https://www.doctorsofrunning.com/saucony-guide-18-review-2025/',
        note: 'DOR 소개 남성272g(US9)·여성245g(US8),35/29mm·드롭6mm. RR278g·36.0/27.7mm·8.3mm와 조건을 구분합니다. RR 원문은 인솔 인쇄8mm와 제조사 확인6mm도 함께 기록합니다.',
      },
      {
        label: 'RunRepeat 측정법',
        url: 'https://runrepeat.com/testing-methodology',
        note: '내부 최광폭·엄지 너비·외부 플랫폼 폭은 다른 값입니다. AC와HA는 직접 비교하지 않습니다. 시점·측정법 버전의 차이를 구분하세요.',
      },
    ],
    limitations: [
      '질환 예방·치료 효과, 공통 최적 페이스와 수명km는 확인하지 못해 관련 등급·수명·km당 비용을 비웁니다.',
      '에디터 평점·1~10점·발볼 및 계절 적합성 분류는 실험실 단위나 임상 효과가 아닙니다.',
      '판매·재고는 확인한SKU·성별·폭·시점에만 적용합니다. 미확인을 미판매·단종·미출시로 해석하지 않습니다.',
    ],
  },
};
