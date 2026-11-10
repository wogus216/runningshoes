import type { Shoe } from '@/types/shoe';

// 원문 재확인:2026-11-09. 명시한 범위와 한계는 verification 참조.
export const shoe: Shoe = {
  id: 'asics-superblast-2',
  slug: 'asics-superblast-2',
  brand: 'Asics',
  name: '슈퍼블라스트 2',
  image: '/images/shoes/asics/superblast2/1.webp',
  images: [
    '/images/shoes/asics/superblast2/1.webp',
    '/images/shoes/asics/superblast2/2.webp',
    '/images/shoes/asics/superblast2/3.webp',
    '/images/shoes/asics/superblast2/4.webp',
    '/images/shoes/asics/superblast2/5.webp',
  ],
  category: '레이싱',
  description: 'FF TURBO+ 상부 · FF BLAST PLUS ECO 하부 · 비플레이트 구조의 슈퍼블라스트 2. 실험실 252g·힐/전족부 42.8/34.6mm. 한국 현재 정가 미확인.',
  oneliner: '252g 실험실 무게 · FF TURBO+ 상부 · FF BLAST PLUS ECO 하부 · 비플레이트',
  editorComment: '2026-11-09 원문 재확인. 한국 공식 슈퍼블라스트2 검색에서 상품을 찾지 못해 현재 정가·성별·폭·SKU·재고는 미확인입니다. 검색 부재를 단종·국내 미출시로 해석하지 않습니다. DOR 소개249g(남성US9/여성US10.5),45/37mm·드롭8mm. RR252g은 측정에 사용한 왼발 값이며 오른발8.55oz·왼발8.90oz 차이가 보고돼 양발 평균으로 사용하지 않습니다. RR 주폼35.2AC·보조폼41.0AC는 다른 측정입니다. 하부는FF BLAST PLUS ECO이며 원형 슈퍼블라스트의 폼 이름과 혼용하지 않습니다. DOR의 Matt(US10)은 길이가 대체로 맞지만 앞쪽 테이퍼·혀 접힘·카운터·거친 메쉬를 언급했고 David(US9.5)은 길들이기 후 고정이 나아졌다고 느꼈습니다. 두 리뷰어는 플레이트 없이 단단한 구조와 앞쪽 반응을 평가했습니다. RR의 PEBA 계열 화학 설명은 리뷰 출처의 설명이며 한국 제조사의 신규 확인으로 바꾸지 않습니다. 한국 와이드 현재SKU는 미확인입니다. RR 내부 최광폭94.7mm·엄지72.3mm·높이27.7mm를 외부 바닥 폭과 구분하세요. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.',
  tags: [
    '슈퍼트레이너',
    '고반발',
    '데일리레이서',
    '훈련용',
  ],
  specs: {
    weight: 252,
    drop: 8.2,
  },
  biomechanics: {
    stackHeight: {
      heel: 42.8,
      forefoot: 34.6,
    },
    drop: 8.2,
    carbonPlate: false,
    plateType: null,
    midsoleType: 'FF TURBO+ 상부 · FF BLAST PLUS ECO 하부 · 비플레이트',
  },
  koreanFootFit: {
  },
  targetUsers: {
    recommended: [
      '비플레이트 이중폼의 전환감을 시착 비교하려는 러너',
      '앞쪽 굽힘·고정과 카운터를 확인하려는 러너',
    ],
    notRecommended: [
      '앞쪽 테이퍼·혀 접힘·카운터가 불편한 경우',
      '매우 유연한 앞쪽을 선호하는 경우',
    ],
  },
  features: [
    'FF TURBO+ 상부 · FF BLAST PLUS ECO 하부 · 비플레이트',
    '252g · 힐/전족부 42.8/34.6mm (RunRepeat)',
    '힐/전족부 SA 130/138 · 에너지 리턴 65.4/65.5% (RunRepeat). RR 주폼35.2AC·보조폼41.0AC는 다른 측정입니다. 하부는FF BLAST PLUS ECO이며 원형 슈퍼블라스트의 폼 이름과 혼용하지 않습니다.',
    '한국 와이드 현재SKU는 미확인입니다. RR 내부 최광폭94.7mm·엄지72.3mm·높이27.7mm를 외부 바닥 폭과 구분하세요.',
  ],
  priceAnalysis: {
    priceTier: 'premium',
    alternatives: [
      'nike-zoom-fly-6',
      'saucony-endorphin-speed-5',
      'new-balance-sc-trainer-v3',
    ],
  },
  detailedSpecs: {
    weight: '252g (RunRepeat 공시 검체 정책:남성US9). DOR 소개249g(남성US9/여성US10.5),45/37mm·드롭8mm. RR252g은 측정에 사용한 왼발 값이며 오른발8.55oz·왼발8.90oz 차이가 보고돼 양발 평균으로 사용하지 않습니다.',
    stackHeight: '42.8/34.6mm (RunRepeat 힐/전족부 실측)',
    drop: '8.2mm (RunRepeat 실측). 출처별 공시 조건은 무게 항목에 구분.',
    midsole: 'FF TURBO+ 상부 · FF BLAST PLUS ECO 하부 · 비플레이트 · 35.2 AC(Asker C) · 힐/전족부 SA 130/138 · 에너지 리턴 65.4/65.5%. RR 주폼35.2AC·보조폼41.0AC는 다른 측정입니다. 하부는FF BLAST PLUS ECO이며 원형 슈퍼블라스트의 폼 이름과 혼용하지 않습니다.',
    plate: '확인한 원문 설명에 전장 카본 플레이트는 보고되지 않음',
    width: 'RunRepeat 내부 최광폭 94.7mm / 엄지 부위 72.3mm / 엄지 높이 27.7mm. 한국 와이드 현재SKU는 미확인입니다. RR 내부 최광폭94.7mm·엄지72.3mm·높이27.7mm를 외부 바닥 폭과 구분하세요.',
    durability: '검증된 공통 수명km 미확인. 짧은 착화·마모 깊이를 수명km로 환산하지 않습니다.',
    price: '한국 공식 슈퍼블라스트2 검색에서 상품을 찾지 못해 현재 정가·성별·폭·SKU·재고는 미확인입니다. 검색 부재를 단종·국내 미출시로 해석하지 않습니다.',
  },
  reviews: [
    {
      userType: '원문 기반 에디터 분석',
      source: 'editor',
      sourceUrl: 'https://runrepeat.com/asics-superblast-2',
      text: '252g과 SA 130/138·에너지 리턴 65.4/65.5%는 해외 실험실 검체의 값이며 기록 향상률·임상 효과가 아닙니다. RR 주폼35.2AC·보조폼41.0AC는 다른 측정입니다. 하부는FF BLAST PLUS ECO이며 원형 슈퍼블라스트의 폼 이름과 혼용하지 않습니다. 한국 와이드 현재SKU는 미확인입니다. RR 내부 최광폭94.7mm·엄지72.3mm·높이27.7mm를 외부 바닥 폭과 구분하세요.',
    },
    {
      userType: '외부 착화 의견 요약 · Doctors of Running',
      source: 'editor',
      sourceUrl: 'https://www.doctorsofrunning.com/asics-superblast-2-review-2024/',
      text: 'DOR의 Matt(US10)은 길이가 대체로 맞지만 앞쪽 테이퍼·혀 접힘·카운터·거친 메쉬를 언급했고 David(US9.5)은 길들이기 후 고정이 나아졌다고 느꼈습니다. 두 리뷰어는 플레이트 없이 단단한 구조와 앞쪽 반응을 평가했습니다. RR의 PEBA 계열 화학 설명은 리뷰 출처의 설명이며 한국 제조사의 신규 확인으로 바꾸지 않습니다.',
    },
  ],
  similarShoes: [
    'nike-zoom-fly-6',
    'saucony-endorphin-speed-5',
    'new-balance-sc-trainer-v3',
  ],
  purchaseLinks: [
    {
      store: '쿠팡',
      url: 'https://link.coupang.com/a/g5YxEs1B6q',
    },
  ],
  verification: {
    checkedAt: '2026-11-09',
    scope: '한국 확인SKU의 정가·폭, 해외 실험실 수치·구조·외부 착화 의견을 재확인했습니다. 제품 전체 검증 완료 표지가 아닙니다.',
    sources: [
      {
        label: '아식스 한국 공식 검색 범위',
        url: 'https://asics.co.kr/goods/search?keyword_log_flag=Y&search_text=%EC%8A%88%ED%8D%BC%EB%B8%94%EB%9D%BC%EC%8A%A4%ED%8A%B8+2',
        note: '현재 상품0건 확인. 전체 국내 미판매를 의미하지 않습니다.',
      },
      {
        label: 'RunRepeat 슈퍼블라스트 2',
        url: 'https://runrepeat.com/asics-superblast-2',
        note: '공시 검체 정책:남성US9. 개별 검체SKU·폭은 미확인. 252g · 42.8/34.6mm · 드롭8.2mm. SA 130/138 · ER 65.4/65.5%. RR 주폼35.2AC·보조폼41.0AC는 다른 측정입니다. 하부는FF BLAST PLUS ECO이며 원형 슈퍼블라스트의 폼 이름과 혼용하지 않습니다.',
      },
      {
        label: 'Doctors of Running 착화 리뷰',
        url: 'https://www.doctorsofrunning.com/asics-superblast-2-review-2024/',
        note: 'DOR 소개249g(남성US9/여성US10.5),45/37mm·드롭8mm. RR252g은 측정에 사용한 왼발 값이며 오른발8.55oz·왼발8.90oz 차이가 보고돼 양발 평균으로 사용하지 않습니다.',
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
