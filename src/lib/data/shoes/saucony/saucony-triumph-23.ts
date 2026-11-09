import type { Shoe } from '@/types/shoe';

// 원문 재확인:2026-11-09. 명시한 범위와 한계는 verification 참조.
export const shoe: Shoe = {
  id: 'saucony-triumph-23',
  slug: 'saucony-triumph-23',
  brand: 'Saucony',
  name: '트라이엄프 23',
  image: '/images/shoes/saucony/triumph23.webp',
  images: [
    '/images/shoes/saucony/triumph23/side.webp',
    '/images/shoes/saucony/triumph23/top.webp',
    '/images/shoes/saucony/triumph23/outsole.webp',
  ],
  category: '쿠션화',
  rating: 4,
  price: 199000,
  description: '전장 PWRRUN PB · Super Responsive Sockliner · 비플레이트 구조의 트라이엄프 23. 실험실 272g·힐/전족부 42.3/32.3mm. 한국 확인 정가199,000원.',
  oneliner: '272g 실험실 무게 · 전장 PWRRUN PB · Super Responsive Sockliner · 비플레이트',
  editorComment: '2026-11-09 원문 재확인. 한국 공식 남성 일반M S21023-130·여성 일반M S11023-148·남성 W와이드 S21024-203·여성 W와이드 S11024-201 정가199,000원. 확인 시 남성 와이드250/255/260mm·여성 와이드230/235mm 선택 가능이었습니다. W를2E/D로 임의 매핑하지 않으며 색상·사이즈별 현재 재고와 할인은 별도입니다. DOR 소개263g(남성US9)·239g(여성US8),37/27mm·10mm. RR272g·42.3/32.3mm·10.0mm와 스택 차이가 커 동일 공시·실측으로 합치지 않습니다. RR 경도42.8AC와 리뷰어의 부드러운 전체 착화감은 다른 지표입니다. RR Dremel마모0.7mm와 DOR초기 실도로 마모는 조건이 달라 수명km로 환산하지 않습니다. RR 굽힘 본문17.4N·최신표17.5N,혀 본문semi·표full 충돌을 보존합니다. 신방식80BR·건조59%를 구연기1~5점과 직접 비교하지 않습니다. DOR의 Matt(남성US10)은 대체로 길이가 맞고 보통 폭·낮은 볼륨, 앞코 테이퍼와 윗면 가드 압박을 느꼈습니다. 거싯·힐패딩 고정은 좋았지만 단단한 카운터가 자신의 뒤꿈치 돌출 부위를 자극했습니다. 부드럽고 반응성 있는 폼 체감과 초기 힐 전환, 노출폼·뒤가쪽 고무의 초기 마모를 기록했습니다. 한국 남녀W와이드 SKU를 확인했지만 모든 넓은 발의 적합 보장은 아닙니다. RR 내부 최광폭93.8mm·엄지71.4mm·높이26.8mm와 외부 전족 플랫폼124.0mm는 다른 치수입니다. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.',
  tags: [
    '쿠션화',
    '맥시멀',
    '장거리',
    'PEBA',
  ],
  specs: {
    weight: 272,
    cushioning: 9,
    responsiveness: 9,
    stability: 6,
    drop: 10,
  },
  biomechanics: {
    stackHeight: {
      heel: 42.3,
      forefoot: 32.3,
    },
    drop: 10,
    carbonPlate: false,
    plateType: null,
    midsoleType: '전장 PWRRUN PB · Super Responsive Sockliner · 비플레이트',
  },
  koreanFootFit: {
    toBoxWidth: 'narrow',
    winterCompatibility: 'good',
    summerCompatibility: 'good',
    wideOptions: true,
  },
  targetUsers: {
    recommended: [
      '전장 PWRRUN PB의 전환과 한국W와이드 고정을 비교하려는 러너',
      '앞코 윗면·카운터 압박을 직접 확인하려는 러너',
    ],
    notRecommended: [
      '직접 착화에서 카운터·앞코 가드 압박이 생기는 경우',
      '로커 위치와 힐 고정이 맞지 않는 경우',
    ],
  },
  features: [
    '전장 PWRRUN PB · Super Responsive Sockliner · 비플레이트',
    '272g · 힐/전족부 42.3/32.3mm (RunRepeat)',
    '힐/전족부 SA 149/136 · 에너지 리턴 67.6/71.2% (RunRepeat). RR 경도42.8AC와 리뷰어의 부드러운 전체 착화감은 다른 지표입니다. RR Dremel마모0.7mm와 DOR초기 실도로 마모는 조건이 달라 수명km로 환산하지 않습니다. RR 굽힘 본문17.4N·최신표17.5N,혀 본문semi·표full 충돌을 보존합니다. 신방식80BR·건조59%를 구연기1~5점과 직접 비교하지 않습니다.',
    '한국 남녀W와이드 SKU를 확인했지만 모든 넓은 발의 적합 보장은 아닙니다. RR 내부 최광폭93.8mm·엄지71.4mm·높이26.8mm와 외부 전족 플랫폼124.0mm는 다른 치수입니다.',
  ],
  priceAnalysis: {
    msrp: 199000,
    valueRating: 7,
    priceTier: 'premium',
    alternatives: [
      'hoka-bondi-9',
      'asics-gel-nimbus-28',
      'new-balance-1080-v14',
    ],
  },
  detailedSpecs: {
    weight: '272g (RunRepeat 공시 검체 정책:남성US9). DOR 소개263g(남성US9)·239g(여성US8),37/27mm·10mm. RR272g·42.3/32.3mm·10.0mm와 스택 차이가 커 동일 공시·실측으로 합치지 않습니다.',
    stackHeight: '42.3/32.3mm (RunRepeat 힐/전족부 실측)',
    drop: '10mm (RunRepeat 실측). 출처별 공시 조건은 무게 항목에 구분.',
    midsole: '전장 PWRRUN PB · Super Responsive Sockliner · 비플레이트 · 42.8 AC(Asker C) · 힐/전족부 SA 149/136 · 에너지 리턴 67.6/71.2%. RR 경도42.8AC와 리뷰어의 부드러운 전체 착화감은 다른 지표입니다. RR Dremel마모0.7mm와 DOR초기 실도로 마모는 조건이 달라 수명km로 환산하지 않습니다. RR 굽힘 본문17.4N·최신표17.5N,혀 본문semi·표full 충돌을 보존합니다. 신방식80BR·건조59%를 구연기1~5점과 직접 비교하지 않습니다.',
    plate: 'DOR 원문은 플레이트 없음으로 명시합니다.',
    width: 'RunRepeat 내부 최광폭 93.8mm / 엄지 부위 71.4mm / 엄지 높이 26.8mm. 한국 남녀W와이드 SKU를 확인했지만 모든 넓은 발의 적합 보장은 아닙니다. RR 내부 최광폭93.8mm·엄지71.4mm·높이26.8mm와 외부 전족 플랫폼124.0mm는 다른 치수입니다.',
    durability: '검증된 공통 수명km 미확인. 짧은 착화·마모 깊이를 수명km로 환산하지 않습니다.',
    price: '한국 공식 남성 일반M S21023-130·여성 일반M S11023-148·남성 W와이드 S21024-203·여성 W와이드 S11024-201 정가199,000원. 확인 시 남성 와이드250/255/260mm·여성 와이드230/235mm 선택 가능이었습니다. W를2E/D로 임의 매핑하지 않으며 색상·사이즈별 현재 재고와 할인은 별도입니다.',
  },
  reviews: [
    {
      userType: '원문 기반 에디터 분석',
      source: 'editor',
      sourceUrl: 'https://runrepeat.com/saucony-triumph-23',
      text: '272g과 SA 149/136·에너지 리턴 67.6/71.2%는 해외 실험실 검체의 값이며 기록 향상률·임상 효과가 아닙니다. RR 경도42.8AC와 리뷰어의 부드러운 전체 착화감은 다른 지표입니다. RR Dremel마모0.7mm와 DOR초기 실도로 마모는 조건이 달라 수명km로 환산하지 않습니다. RR 굽힘 본문17.4N·최신표17.5N,혀 본문semi·표full 충돌을 보존합니다. 신방식80BR·건조59%를 구연기1~5점과 직접 비교하지 않습니다. 한국 남녀W와이드 SKU를 확인했지만 모든 넓은 발의 적합 보장은 아닙니다. RR 내부 최광폭93.8mm·엄지71.4mm·높이26.8mm와 외부 전족 플랫폼124.0mm는 다른 치수입니다.',
    },
    {
      userType: '외부 착화 의견 요약 · Doctors of Running',
      source: 'editor',
      sourceUrl: 'https://www.doctorsofrunning.com/saucony-triumph-23-review-2025/',
      text: 'DOR의 Matt(남성US10)은 대체로 길이가 맞고 보통 폭·낮은 볼륨, 앞코 테이퍼와 윗면 가드 압박을 느꼈습니다. 거싯·힐패딩 고정은 좋았지만 단단한 카운터가 자신의 뒤꿈치 돌출 부위를 자극했습니다. 부드럽고 반응성 있는 폼 체감과 초기 힐 전환, 노출폼·뒤가쪽 고무의 초기 마모를 기록했습니다.',
    },
  ],
  similarShoes: [
    'hoka-bondi-9',
    'asics-gel-nimbus-28',
    'new-balance-1080-v14',
    'brooks-glycerin-22',
  ],
  purchaseLinks: [
    {
      store: '네이버',
      url: 'https://naver.me/xqb7bLT9',
    },
    {
      store: '쿠팡',
      url: 'https://link.coupang.com/a/g5Zlv5t1JA',
    },
  ],
  verification: {
    checkedAt: '2026-11-09',
    scope: '한국 확인SKU의 정가·폭, 해외 실험실 수치·구조·외부 착화 의견을 재확인했습니다. 제품 전체 검증 완료 표지가 아닙니다.',
    sources: [
      {
        label: '한국 공식 men · M(일반) · S21023-130',
        url: 'https://www.saucony.co.kr/product/detail.html?product_no=182',
        note: '한국 공식 남성 일반M S21023-130·여성 일반M S11023-148·남성 W와이드 S21024-203·여성 W와이드 S11024-201 정가199,000원. 확인 시 남성 와이드250/255/260mm·여성 와이드230/235mm 선택 가능이었습니다. W를2E/D로 임의 매핑하지 않으며 색상·사이즈별 현재 재고와 할인은 별도입니다.',
      },
      {
        label: '한국 공식 women · M(일반) · S11023-148',
        url: 'https://www.saucony.co.kr/product/detail.html?product_no=200',
        note: '한국 공식 남성 일반M S21023-130·여성 일반M S11023-148·남성 W와이드 S21024-203·여성 W와이드 S11024-201 정가199,000원. 확인 시 남성 와이드250/255/260mm·여성 와이드230/235mm 선택 가능이었습니다. W를2E/D로 임의 매핑하지 않으며 색상·사이즈별 현재 재고와 할인은 별도입니다.',
      },
      {
        label: '한국 공식 men · W(와이드) · S21024-203',
        url: 'https://www.saucony.co.kr/product/detail.html?product_no=325',
        note: '한국 공식 남성 일반M S21023-130·여성 일반M S11023-148·남성 W와이드 S21024-203·여성 W와이드 S11024-201 정가199,000원. 확인 시 남성 와이드250/255/260mm·여성 와이드230/235mm 선택 가능이었습니다. W를2E/D로 임의 매핑하지 않으며 색상·사이즈별 현재 재고와 할인은 별도입니다.',
      },
      {
        label: '한국 공식 women · W(와이드) · S11024-201',
        url: 'https://www.saucony.co.kr/product/detail.html?product_no=198',
        note: '한국 공식 남성 일반M S21023-130·여성 일반M S11023-148·남성 W와이드 S21024-203·여성 W와이드 S11024-201 정가199,000원. 확인 시 남성 와이드250/255/260mm·여성 와이드230/235mm 선택 가능이었습니다. W를2E/D로 임의 매핑하지 않으며 색상·사이즈별 현재 재고와 할인은 별도입니다.',
      },
      {
        label: 'RunRepeat 트라이엄프 23',
        url: 'https://runrepeat.com/saucony-triumph-23',
        note: '공시 검체 정책:남성US9. 개별 검체SKU·폭은 미확인. 272g · 42.3/32.3mm · 드롭10mm. SA 149/136 · ER 67.6/71.2%. RR 경도42.8AC와 리뷰어의 부드러운 전체 착화감은 다른 지표입니다. RR Dremel마모0.7mm와 DOR초기 실도로 마모는 조건이 달라 수명km로 환산하지 않습니다. RR 굽힘 본문17.4N·최신표17.5N,혀 본문semi·표full 충돌을 보존합니다. 신방식80BR·건조59%를 구연기1~5점과 직접 비교하지 않습니다.',
      },
      {
        label: 'Doctors of Running 착화 리뷰',
        url: 'https://www.doctorsofrunning.com/saucony-triumph-23-review-2025/',
        note: 'DOR 소개263g(남성US9)·239g(여성US8),37/27mm·10mm. RR272g·42.3/32.3mm·10.0mm와 스택 차이가 커 동일 공시·실측으로 합치지 않습니다.',
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
