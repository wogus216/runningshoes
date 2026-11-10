import type { Shoe } from '@/types/shoe';

// 원문 재확인:2026-11-09. 명시한 범위와 한계는 verification 참조.
export const shoe: Shoe = {
  id: 'brooks-glycerin-22',
  slug: 'brooks-glycerin-22',
  brand: 'Brooks',
  name: '글리세린 22',
  image: '/images/shoes/brooks/glycerin22/side.webp',
  images: [
    '/images/shoes/brooks/glycerin22/side.webp',
    '/images/shoes/brooks/glycerin22/front.webp',
    '/images/shoes/brooks/glycerin22/back.webp',
    '/images/shoes/brooks/glycerin22/top.webp',
    '/images/shoes/brooks/glycerin22/outsole.webp',
  ],
  category: '쿠션화',
  status: 'featured',
  price: 209000,
  description: '질소 주입 DNA Tuned 구조의 글리세린 22. 실험실 293g·힐/전족부 38.5/28.2mm. 한국 확인 정가209,000원.',
  oneliner: '293g 실험실 무게 · 질소 주입 DNA Tuned',
  editorComment: '2026-11-09 원문 재확인. 한국 공식 원문 남성MEDIUM1104451D097/1104451D175·WIDE1104452E020 정가209,000원 확인. 여성WIDE1204341D151은 약1년 전 원문이어서 현재판매·재고와 구분합니다. 현재 할인·재고는 미확인입니다. DOR 소개 남성289g(US9)·여성258g(US8),39/29mm·드롭10mm. David실제US9.5, RR293g·38.5/28.2mm·10.3mm를 구분. RR과 DOR은 DNA Tuned의 큰셀·작은셀 위치를 다르게 설명합니다.30.0AC·보조37.6AC의 측정값만으로 밀도배치를 확정하지 않습니다. DOR의 David은 US9.5에서 길이가 맞고 힐·중족부가 고정되며 앞쪽에 여유가 있다고 느꼈습니다. Bach은 GTS보다 유연하고 부드럽다고 봤습니다. 기본형에 GuideRails가 있다고 설명하지 않으며 개인의 평발착화 선호를 임상등급으로 바꾸지 않습니다. 한국 남성MEDIUM·WIDE 원문을 확인했지만 여성현재상품은 미확인입니다. RR 엄지높이23.6mm와 DOR의 넓게느껴진 앞쪽 의견은 다른조건입니다. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.',
  specs: {
    weight: 293,
    drop: 10.3,
  },
  biomechanics: {
    stackHeight: {
      heel: 38.5,
      forefoot: 28.2,
    },
    drop: 10.3,
    carbonPlate: false,
    midsoleType: '질소 주입 DNA Tuned',
  },
  koreanFootFit: {
    wideOptions: true,
  },
  targetUsers: {
    recommended: [
      'DNA Tuned 기본형의 착화를 비교하려는 러너',
      '한국 남성WIDE 상품을 확인하려는 러너',
    ],
    notRecommended: [
      '낮은 앞쪽 높이에서 압박이 생기는 경우',
      '매우 가벼운 모델이 필요한 경우',
    ],
  },
  features: [
    '질소 주입 DNA Tuned',
    '293g · 힐/전족부 38.5/28.2mm (RunRepeat)',
    '힐/전족부 SA 133/109 · 에너지 리턴 54.8/58.4% (RunRepeat). RR과 DOR은 DNA Tuned의 큰셀·작은셀 위치를 다르게 설명합니다.30.0AC·보조37.6AC의 측정값만으로 밀도배치를 확정하지 않습니다.',
    '한국 남성MEDIUM·WIDE 원문을 확인했지만 여성현재상품은 미확인입니다. RR 엄지높이23.6mm와 DOR의 넓게느껴진 앞쪽 의견은 다른조건입니다.',
  ],
  priceAnalysis: {
    msrp: 209000,
    priceTier: 'premium',
    alternatives: [
      'asics-gel-nimbus-28',
      'nike-vomero-18',
    ],
  },
  reviews: [
    {
      userType: '원문 기반 에디터 분석',
      source: 'editor',
      sourceUrl: 'https://runrepeat.com/brooks-glycerin-22',
      text: '293g과 SA 133/109·에너지 리턴 54.8/58.4%는 해외 실험실 검체의 값이며 기록 향상률·임상 효과가 아닙니다. RR과 DOR은 DNA Tuned의 큰셀·작은셀 위치를 다르게 설명합니다.30.0AC·보조37.6AC의 측정값만으로 밀도배치를 확정하지 않습니다. 한국 남성MEDIUM·WIDE 원문을 확인했지만 여성현재상품은 미확인입니다. RR 엄지높이23.6mm와 DOR의 넓게느껴진 앞쪽 의견은 다른조건입니다.',
    },
    {
      userType: '외부 착화 의견 요약 · Doctors of Running',
      source: 'editor',
      sourceUrl: 'https://www.doctorsofrunning.com/brooks-glycerin-22-review-2025/',
      text: 'DOR의 David은 US9.5에서 길이가 맞고 힐·중족부가 고정되며 앞쪽에 여유가 있다고 느꼈습니다. Bach은 GTS보다 유연하고 부드럽다고 봤습니다. 기본형에 GuideRails가 있다고 설명하지 않으며 개인의 평발착화 선호를 임상등급으로 바꾸지 않습니다.',
    },
  ],
  detailedSpecs: {
    weight: '293g (RunRepeat 공시 검체 정책:남성US9). DOR 소개 남성289g(US9)·여성258g(US8),39/29mm·드롭10mm. David실제US9.5, RR293g·38.5/28.2mm·10.3mm를 구분.',
    stackHeight: '38.5/28.2mm (RunRepeat 힐/전족부 실측)',
    drop: '10.3mm (RunRepeat 실측). 출처별 공시 조건은 무게 항목에 구분.',
    midsole: '질소 주입 DNA Tuned · 30 AC(Asker C) · 힐/전족부 SA 133/109 · 에너지 리턴 54.8/58.4%. RR과 DOR은 DNA Tuned의 큰셀·작은셀 위치를 다르게 설명합니다.30.0AC·보조37.6AC의 측정값만으로 밀도배치를 확정하지 않습니다.',
    plate: '확인한 원문 설명에 전장 카본 플레이트는 보고되지 않음',
    width: 'RunRepeat 내부 최광폭 96.3mm / 엄지 부위 73.7mm / 엄지 높이 23.6mm. 한국 남성MEDIUM·WIDE 원문을 확인했지만 여성현재상품은 미확인입니다. RR 엄지높이23.6mm와 DOR의 넓게느껴진 앞쪽 의견은 다른조건입니다.',
    durability: '검증된 공통 수명km 미확인. 짧은 착화·마모 깊이를 수명km로 환산하지 않습니다.',
    price: '한국 공식 원문 남성MEDIUM1104451D097/1104451D175·WIDE1104452E020 정가209,000원 확인. 여성WIDE1204341D151은 약1년 전 원문이어서 현재판매·재고와 구분합니다. 현재 할인·재고는 미확인입니다.',
  },
  similarShoes: [
    'asics-gel-nimbus-28',
    'nike-vomero-18',
    'new-balance-1080-v14',
  ],
  relatedPosts: [
    {
      slug: 'running-shoe-500km-replacement-myth-2026',
      title: '"500km 교체설"의 진실 — 소재별 수명',
    },
  ],
  purchaseLinks: [
    {
      store: '쿠팡',
      url: 'https://link.coupang.com/a/g5YAmJn1Q4',
    },
  ],
  tags: [
    '쿠션화',
    '프리미엄',
    '장거리',
    '데일리',
  ],
  verification: {
    checkedAt: '2026-11-09',
    scope: '한국 확인SKU의 정가·폭, 해외 실험실 수치·구조·외부 착화 의견을 재확인했습니다. 제품 전체 검증 완료 표지가 아닙니다.',
    sources: [
      {
        label: '한국 공식 men · WIDE · 1104452E020',
        url: 'https://www.brooksrunning.co.kr/product/black-friday-%EB%82%A8%EC%84%B1-%EA%B8%80%EB%A6%AC%EC%84%B8%EB%A6%B0-22%EB%B8%94%EB%9E%99-wide/471/',
        note: '한국 공식 원문 남성MEDIUM1104451D097/1104451D175·WIDE1104452E020 정가209,000원 확인. 여성WIDE1204341D151은 약1년 전 원문이어서 현재판매·재고와 구분합니다. 현재 할인·재고는 미확인입니다.',
      },
      {
        label: '한국 공식 men · MEDIUM · 1104451D097',
        url: 'https://brooksrunning.co.kr/product/detail.html?product_no=547',
        note: '한국 공식 원문 남성MEDIUM1104451D097/1104451D175·WIDE1104452E020 정가209,000원 확인. 여성WIDE1204341D151은 약1년 전 원문이어서 현재판매·재고와 구분합니다. 현재 할인·재고는 미확인입니다.',
      },
      {
        label: '한국 공식 men · MEDIUM · 1104451D175',
        url: 'https://brooksrunning.co.kr/product/%EB%82%A8%EC%84%B1-%EA%B8%80%EB%A6%AC%EC%84%B8%EB%A6%B0-22%ED%99%94%EC%9D%B4%ED%8A%B8-medium/478/',
        note: '한국 공식 원문 남성MEDIUM1104451D097/1104451D175·WIDE1104452E020 정가209,000원 확인. 여성WIDE1204341D151은 약1년 전 원문이어서 현재판매·재고와 구분합니다. 현재 할인·재고는 미확인입니다.',
      },
      {
        label: '한국 공식 women · WIDE · 1204341D151',
        url: 'https://brooksrunning.co.kr/product/%EC%97%AC%EC%84%B1-%EA%B8%80%EB%A6%AC%EC%84%B8%EB%A6%B0-22%ED%99%94%EC%9D%B4%ED%8A%B8-wide/480/',
        note: '한국 공식 원문 남성MEDIUM1104451D097/1104451D175·WIDE1104452E020 정가209,000원 확인. 여성WIDE1204341D151은 약1년 전 원문이어서 현재판매·재고와 구분합니다. 현재 할인·재고는 미확인입니다.',
      },
      {
        label: 'RunRepeat 글리세린 22',
        url: 'https://runrepeat.com/brooks-glycerin-22',
        note: '공시 검체 정책:남성US9. 개별 검체SKU·폭은 미확인. 293g · 38.5/28.2mm · 드롭10.3mm. SA 133/109 · ER 54.8/58.4%. RR과 DOR은 DNA Tuned의 큰셀·작은셀 위치를 다르게 설명합니다.30.0AC·보조37.6AC의 측정값만으로 밀도배치를 확정하지 않습니다.',
      },
      {
        label: 'Doctors of Running 착화 리뷰',
        url: 'https://www.doctorsofrunning.com/brooks-glycerin-22-review-2025/',
        note: 'DOR 소개 남성289g(US9)·여성258g(US8),39/29mm·드롭10mm. David실제US9.5, RR293g·38.5/28.2mm·10.3mm를 구분.',
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
