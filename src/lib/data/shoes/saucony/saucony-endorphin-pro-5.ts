import type { Shoe } from '@/types/shoe';

// 원문 재확인:2026-11-09. 명시한 범위와 한계는 verification 참조.
export const shoe: Shoe = {
  id: 'saucony-endorphin-pro-5',
  slug: 'saucony-endorphin-pro-5',
  brand: 'Saucony',
  name: '엔돌핀 프로 5',
  image: '/images/shoes/saucony/endorphinpro5/side.webp',
  images: [
    '/images/shoes/saucony/endorphinpro5/side.webp',
    '/images/shoes/saucony/endorphinpro5/top.webp',
    '/images/shoes/saucony/endorphinpro5/outsole.webp',
    '/images/shoes/saucony/endorphinpro5/front.webp',
    '/images/shoes/saucony/endorphinpro5/back.webp',
  ],
  category: '레이싱',
  rating: 5,
  price: 299000,
  description: 'PWRRUN HG 상층 · PWRRUN PB 하층 · 전족 슬롯형 전장 카본 구조의 엔돌핀 프로 5. 실험실 215g·힐/전족부 36.5/27.8mm. 한국 확인 정가299,000원.',
  oneliner: '215g 실험실 무게 · PWRRUN HG 상층 · PWRRUN PB 하층 · 전족 슬롯형 전장 카본',
  editorComment: '2026-11-09 원문 재확인. 한국 공식 기본형 남성 S101360-1002·여성 S101308-1008 일반M 정가299,000원. 확인 시 남성250~300mm, 여성230~255mm 선택 가능이었고 여성220/225mm는 품절 표시였습니다. 한국 와이드 SKU는 미확인이며 별도 Pro5 S의339,000원을 기본형에 넣지 않습니다. DOR 소개206g(남성US9)·178g(여성US8),39.5/31.5mm·8mm. Matt 본인US10실측230g과 RR215g·36.5/27.8mm·8.7mm는 조건이 다릅니다. RR 주폼33.3AC·상층29.8AC는 전작의 해당 폼보다 낮지만 Matt의 전체 주행감은 더 단단했습니다. 물성과 형상·개인 체감을 합치지 않습니다. 공식 젖은 접지15%향상은 시험 조건이 미공시된 제조사 주장으로 RR CoF개선률이나 모든 노면 안전으로 환산하지 않습니다. DOR의 Matt(남성US10)은 길이가 맞고 앞쪽에 여유가 있지만 뻣뻣한 메쉬·얇은 혀의 주름·끈 압박·내부 미끄러짐·높은 뒤 탭의 마찰을 언급했습니다. 폼 경도와 별개로 전작보다 단단한 주행감을 느꼈으며 긴 주행보다 자신의 인터벌·템포에서 좋았다고 평가했습니다. Andrea에 대한 본문 간접 언급을 독립 착화 리뷰로 만들지 않습니다. 한국 와이드 SKU는 미확인입니다. RR 내부 최광폭95.2mm·엄지69.3mm·높이27.8mm는 한국 일반M의 모든 사이즈를 나타내지 않습니다. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.',
  tags: [
    '레이싱',
    '카본',
    '풀마라톤',
    '하프마라톤',
  ],
  specs: {
    weight: 215,
    cushioning: 8,
    responsiveness: 10,
    stability: 5,
    drop: 8.7,
  },
  biomechanics: {
    stackHeight: {
      heel: 36.5,
      forefoot: 27.8,
    },
    drop: 8.7,
    carbonPlate: true,
    plateType: 'full-length carbon plate (forefoot slotted)',
    midsoleType: 'PWRRUN HG 상층 · PWRRUN PB 하층 · 전족 슬롯형 전장 카본',
  },
  koreanFootFit: {
    toBoxWidth: 'narrow',
    winterCompatibility: 'fair',
    summerCompatibility: 'good',
  },
  targetUsers: {
    recommended: [
      '전족 슬롯형 카본의 굽힘·전환을 시착 비교하려는 러너',
      '혀·뒤 탭·앞코 고정을 직접 확인하려는 러너',
    ],
    notRecommended: [
      '직접 착화에서 끈 압박·뒤 탭 마찰이 생기는 경우',
      '내부 미끄러짐이나 전환이 불편한 경우',
    ],
  },
  features: [
    'PWRRUN HG 상층 · PWRRUN PB 하층 · 전족 슬롯형 전장 카본',
    '215g · 힐/전족부 36.5/27.8mm (RunRepeat)',
    '힐/전족부 SA 137/107 · 에너지 리턴 72.8/75.8% (RunRepeat). RR 주폼33.3AC·상층29.8AC는 전작의 해당 폼보다 낮지만 Matt의 전체 주행감은 더 단단했습니다. 물성과 형상·개인 체감을 합치지 않습니다. 공식 젖은 접지15%향상은 시험 조건이 미공시된 제조사 주장으로 RR CoF개선률이나 모든 노면 안전으로 환산하지 않습니다.',
    '한국 와이드 SKU는 미확인입니다. RR 내부 최광폭95.2mm·엄지69.3mm·높이27.8mm는 한국 일반M의 모든 사이즈를 나타내지 않습니다.',
  ],
  priceAnalysis: {
    msrp: 299000,
    valueRating: 6,
    priceTier: 'super-premium',
    alternatives: [
      'nike-vaporfly-4',
      'asics-metaspeed-sky-plus',
      'adidas-adios-pro-4',
    ],
  },
  detailedSpecs: {
    weight: '215g (RunRepeat 공시 검체 정책:남성US9). DOR 소개206g(남성US9)·178g(여성US8),39.5/31.5mm·8mm. Matt 본인US10실측230g과 RR215g·36.5/27.8mm·8.7mm는 조건이 다릅니다.',
    stackHeight: '36.5/27.8mm (RunRepeat 힐/전족부 실측)',
    drop: '8.7mm (RunRepeat 실측). 출처별 공시 조건은 무게 항목에 구분.',
    midsole: 'PWRRUN HG 상층 · PWRRUN PB 하층 · 전족 슬롯형 전장 카본 · 33.3 AC(Asker C) · 힐/전족부 SA 137/107 · 에너지 리턴 72.8/75.8%. RR 주폼33.3AC·상층29.8AC는 전작의 해당 폼보다 낮지만 Matt의 전체 주행감은 더 단단했습니다. 물성과 형상·개인 체감을 합치지 않습니다. 공식 젖은 접지15%향상은 시험 조건이 미공시된 제조사 주장으로 RR CoF개선률이나 모든 노면 안전으로 환산하지 않습니다.',
    plate: '전장 카본 파이버 플레이트의 전족 슬롯·포크 형상. Pro5 S와 기본형을 구분합니다.',
    width: 'RunRepeat 내부 최광폭 95.2mm / 엄지 부위 69.3mm / 엄지 높이 27.8mm. 한국 와이드 SKU는 미확인입니다. RR 내부 최광폭95.2mm·엄지69.3mm·높이27.8mm는 한국 일반M의 모든 사이즈를 나타내지 않습니다.',
    durability: '검증된 공통 수명km 미확인. 짧은 착화·마모 깊이를 수명km로 환산하지 않습니다.',
    price: '한국 공식 기본형 남성 S101360-1002·여성 S101308-1008 일반M 정가299,000원. 확인 시 남성250~300mm, 여성230~255mm 선택 가능이었고 여성220/225mm는 품절 표시였습니다. 한국 와이드 SKU는 미확인이며 별도 Pro5 S의339,000원을 기본형에 넣지 않습니다.',
  },
  reviews: [
    {
      userType: '원문 기반 에디터 분석',
      source: 'editor',
      sourceUrl: 'https://runrepeat.com/saucony-endorphin-pro-5',
      text: '215g과 SA 137/107·에너지 리턴 72.8/75.8%는 해외 실험실 검체의 값이며 기록 향상률·임상 효과가 아닙니다. RR 주폼33.3AC·상층29.8AC는 전작의 해당 폼보다 낮지만 Matt의 전체 주행감은 더 단단했습니다. 물성과 형상·개인 체감을 합치지 않습니다. 공식 젖은 접지15%향상은 시험 조건이 미공시된 제조사 주장으로 RR CoF개선률이나 모든 노면 안전으로 환산하지 않습니다. 한국 와이드 SKU는 미확인입니다. RR 내부 최광폭95.2mm·엄지69.3mm·높이27.8mm는 한국 일반M의 모든 사이즈를 나타내지 않습니다.',
    },
    {
      userType: '외부 착화 의견 요약 · Doctors of Running',
      source: 'editor',
      sourceUrl: 'https://www.doctorsofrunning.com/saucony-endorphin-pro-5-review-2026/',
      text: 'DOR의 Matt(남성US10)은 길이가 맞고 앞쪽에 여유가 있지만 뻣뻣한 메쉬·얇은 혀의 주름·끈 압박·내부 미끄러짐·높은 뒤 탭의 마찰을 언급했습니다. 폼 경도와 별개로 전작보다 단단한 주행감을 느꼈으며 긴 주행보다 자신의 인터벌·템포에서 좋았다고 평가했습니다. Andrea에 대한 본문 간접 언급을 독립 착화 리뷰로 만들지 않습니다.',
    },
  ],
  similarShoes: [
    'nike-vaporfly-4',
    'asics-metaspeed-sky-plus',
    'adidas-adios-pro-4',
    'saucony-endorphin-elite-2',
  ],
  relatedPosts: [
    {
      slug: 'running-shoe-plate-guide-2026',
      title: '플레이트 완전 해설 — 카본·유리섬유·나일론',
    },
  ],
  purchaseLinks: [
    {
      store: '네이버',
      url: 'https://naver.me/GntOt6w9',
    },
    {
      store: '쿠팡',
      url: 'https://link.coupang.com/a/g5ZfV0CjFA',
    },
  ],
  verification: {
    checkedAt: '2026-11-09',
    scope: '한국 확인SKU의 정가·폭, 해외 실험실 수치·구조·외부 착화 의견을 재확인했습니다. 제품 전체 검증 완료 표지가 아닙니다.',
    sources: [
      {
        label: '한국 공식 men · M(일반) · S101360-1002',
        url: 'https://www.saucony.co.kr/product/detail.html?product_no=583',
        note: '한국 공식 기본형 남성 S101360-1002·여성 S101308-1008 일반M 정가299,000원. 확인 시 남성250~300mm, 여성230~255mm 선택 가능이었고 여성220/225mm는 품절 표시였습니다. 한국 와이드 SKU는 미확인이며 별도 Pro5 S의339,000원을 기본형에 넣지 않습니다.',
      },
      {
        label: '한국 공식 women · M(일반) · S101308-1008',
        url: 'https://www.saucony.co.kr/product/detail.html?product_no=582',
        note: '한국 공식 기본형 남성 S101360-1002·여성 S101308-1008 일반M 정가299,000원. 확인 시 남성250~300mm, 여성230~255mm 선택 가능이었고 여성220/225mm는 품절 표시였습니다. 한국 와이드 SKU는 미확인이며 별도 Pro5 S의339,000원을 기본형에 넣지 않습니다.',
      },
      {
        label: 'RunRepeat 엔돌핀 프로 5',
        url: 'https://runrepeat.com/saucony-endorphin-pro-5',
        note: '공시 검체 정책:남성US9. 개별 검체SKU·폭은 미확인. 215g · 36.5/27.8mm · 드롭8.7mm. SA 137/107 · ER 72.8/75.8%. RR 주폼33.3AC·상층29.8AC는 전작의 해당 폼보다 낮지만 Matt의 전체 주행감은 더 단단했습니다. 물성과 형상·개인 체감을 합치지 않습니다. 공식 젖은 접지15%향상은 시험 조건이 미공시된 제조사 주장으로 RR CoF개선률이나 모든 노면 안전으로 환산하지 않습니다.',
      },
      {
        label: 'Doctors of Running 착화 리뷰',
        url: 'https://www.doctorsofrunning.com/saucony-endorphin-pro-5-review-2026/',
        note: 'DOR 소개206g(남성US9)·178g(여성US8),39.5/31.5mm·8mm. Matt 본인US10실측230g과 RR215g·36.5/27.8mm·8.7mm는 조건이 다릅니다.',
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
