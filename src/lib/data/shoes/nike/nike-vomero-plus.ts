import type { Shoe } from '@/types/shoe';

// 원문 재확인:2026-11-09. 명시한 범위와 한계는 verification 참조.
export const shoe: Shoe = {
  id: 'nike-vomero-plus',
  slug: 'nike-vomero-plus',
  brand: 'Nike',
  name: '보메로 플러스',
  image: '/images/shoes/nike/vomero-plus/side.webp',
  images: [
    '/images/shoes/nike/vomero-plus/side.webp',
    '/images/shoes/nike/vomero-plus/outsole.webp',
    '/images/shoes/nike/vomero-plus/top.webp',
    '/images/shoes/nike/vomero-plus/pair.webp',
  ],
  category: '쿠션화',
  rating: 5,
  price: 219000,
  description: '전장 ZoomX 폼 구조의 보메로 플러스. 실험실 289g·힐/전족부 42.3/32.7mm. 한국 확인 정가219,000원.',
  oneliner: '289g 실험실 무게 · 전장 ZoomX 폼',
  editorComment: '2026-11-09 원문 재확인. 한국 공식 남성 레귤러 IM8336-100·여성 IR7597-170 정가219,000원, 남성 와이드 IH3251-001 정가209,000원으로 SKU별 차이가 있습니다. 대표 가격은 남성 레귤러 SKU 기준입니다. 남성 확인SKU 일부 사이즈 선택 가능, 확인 여성SKU는 품절이며 여성 와이드·문자 폭코드는 미확인입니다. 한국 공시 남성292g(280mm)·여성242g(250mm),드롭10mm. DOR 소개 남성281g(US9)·여성243g(US8),43/33mm·10mm와 RR289g·42.3/32.7mm·9.6mm는 조건이 다릅니다. RR 개별 검체 사이즈·폭 라벨은 이번에 독립 확인하지 못했습니다. RR은 ZoomX를 TPE 기반이라고 설명하지만 제조사 세부 화학 배합은 미확인입니다. 실험실 SA·에너지 리턴은 무릎 보호·회복 촉진·반복 장거리 효능을 검증한 값이 아닙니다. DOR의 Matt(남성US10)은 길이가 맞고 보통~낮은 볼륨, 테이퍼 앞코와 패딩·카운터 압박을 언급했습니다. 눌리기보다 튕기는 체감과 부드러운 힐 전환을 느꼈으나, 개인적으로 속도를 올릴 때 둔했고 매우 긴 회차에서는 충분히 안정적이지 않았다고 평가했습니다. 이 경험을 전 러너의 최적 페이스나30km 후 피로 감소로 바꾸지 않습니다. 한국 남성 와이드 IH3251-001은 확인했지만 여성 와이드 부재를 확정하지 않습니다. RR 내부 최광폭94.6mm·엄지71.1mm·높이26.2mm는 길이와 볼륨을 전부 설명하지 못합니다. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.',
  tags: [
    '쿠션화',
    '맥스쿠션',
    '장거리',
  ],
  specs: {
    weight: 289,
    cushioning: 9,
    responsiveness: 8,
    stability: 7,
    drop: 9.6,
  },
  biomechanics: {
    stackHeight: {
      heel: 42.3,
      forefoot: 32.7,
    },
    drop: 9.6,
    carbonPlate: false,
    plateType: null,
    midsoleType: '전장 ZoomX 폼',
  },
  koreanFootFit: {
    toBoxWidth: 'narrow',
    winterCompatibility: 'good',
    summerCompatibility: 'fair',
    wideOptions: true,
  },
  targetUsers: {
    recommended: [
      '전장 ZoomX의 압축·전환을 시착 비교하려는 러너',
      '남성 와이드SKU와 레귤러의 고정을 비교하려는 러너',
    ],
    notRecommended: [
      '카운터 압박·앞코 테이퍼가 불편한 경우',
      '직접 착화에서 긴 회차의 고정이 맞지 않는 경우',
    ],
  },
  features: [
    '전장 ZoomX 폼',
    '289g · 힐/전족부 42.3/32.7mm (RunRepeat)',
    '힐/전족부 SA 147/131 · 에너지 리턴 67.1/68.8% (RunRepeat). RR은 ZoomX를 TPE 기반이라고 설명하지만 제조사 세부 화학 배합은 미확인입니다. 실험실 SA·에너지 리턴은 무릎 보호·회복 촉진·반복 장거리 효능을 검증한 값이 아닙니다.',
    '한국 남성 와이드 IH3251-001은 확인했지만 여성 와이드 부재를 확정하지 않습니다. RR 내부 최광폭94.6mm·엄지71.1mm·높이26.2mm는 길이와 볼륨을 전부 설명하지 못합니다.',
  ],
  priceAnalysis: {
    msrp: 219000,
    valueRating: 7,
    priceTier: 'premium',
    alternatives: [
      'hoka-bondi-9',
      'brooks-glycerin-22',
    ],
  },
  detailedSpecs: {
    weight: '289g (RunRepeat 공시 검체 정책:남성US9). 한국 공시 남성292g(280mm)·여성242g(250mm),드롭10mm. DOR 소개 남성281g(US9)·여성243g(US8),43/33mm·10mm와 RR289g·42.3/32.7mm·9.6mm는 조건이 다릅니다. RR 개별 검체 사이즈·폭 라벨은 이번에 독립 확인하지 못했습니다.',
    stackHeight: '42.3/32.7mm (RunRepeat 힐/전족부 실측)',
    drop: '9.6mm (RunRepeat 실측). 출처별 공시 조건은 무게 항목에 구분.',
    midsole: '전장 ZoomX 폼 · 32.5 AC(Asker C) · 힐/전족부 SA 147/131 · 에너지 리턴 67.1/68.8%. RR은 ZoomX를 TPE 기반이라고 설명하지만 제조사 세부 화학 배합은 미확인입니다. 실험실 SA·에너지 리턴은 무릎 보호·회복 촉진·반복 장거리 효능을 검증한 값이 아닙니다.',
    plate: '확인한 구조 원문은 ZoomX 폼을 설명하며 별도 플레이트의 근거는 확보하지 못했습니다. 미기재를 절개상 부재 확정으로 바꾸지 않습니다.',
    width: 'RunRepeat 내부 최광폭 94.6mm / 엄지 부위 71.1mm / 엄지 높이 26.2mm. 한국 남성 와이드 IH3251-001은 확인했지만 여성 와이드 부재를 확정하지 않습니다. RR 내부 최광폭94.6mm·엄지71.1mm·높이26.2mm는 길이와 볼륨을 전부 설명하지 못합니다.',
    durability: '검증된 공통 수명km 미확인. 짧은 착화·마모 깊이를 수명km로 환산하지 않습니다.',
    price: '한국 공식 남성 레귤러 IM8336-100·여성 IR7597-170 정가219,000원, 남성 와이드 IH3251-001 정가209,000원으로 SKU별 차이가 있습니다. 대표 가격은 남성 레귤러 SKU 기준입니다. 남성 확인SKU 일부 사이즈 선택 가능, 확인 여성SKU는 품절이며 여성 와이드·문자 폭코드는 미확인입니다.',
  },
  reviews: [
    {
      userType: '원문 기반 에디터 분석',
      source: 'editor',
      sourceUrl: 'https://runrepeat.com/nike-vomero-plus',
      text: '289g과 SA 147/131·에너지 리턴 67.1/68.8%는 해외 실험실 검체의 값이며 기록 향상률·임상 효과가 아닙니다. RR은 ZoomX를 TPE 기반이라고 설명하지만 제조사 세부 화학 배합은 미확인입니다. 실험실 SA·에너지 리턴은 무릎 보호·회복 촉진·반복 장거리 효능을 검증한 값이 아닙니다. 한국 남성 와이드 IH3251-001은 확인했지만 여성 와이드 부재를 확정하지 않습니다. RR 내부 최광폭94.6mm·엄지71.1mm·높이26.2mm는 길이와 볼륨을 전부 설명하지 못합니다.',
    },
    {
      userType: '외부 착화 의견 요약 · Doctors of Running',
      source: 'editor',
      sourceUrl: 'https://www.doctorsofrunning.com/nike-vomero-plus-review-2025/',
      text: 'DOR의 Matt(남성US10)은 길이가 맞고 보통~낮은 볼륨, 테이퍼 앞코와 패딩·카운터 압박을 언급했습니다. 눌리기보다 튕기는 체감과 부드러운 힐 전환을 느꼈으나, 개인적으로 속도를 올릴 때 둔했고 매우 긴 회차에서는 충분히 안정적이지 않았다고 평가했습니다. 이 경험을 전 러너의 최적 페이스나30km 후 피로 감소로 바꾸지 않습니다.',
    },
  ],
  similarShoes: [
    'nike-vomero-18',
    'hoka-bondi-9',
    'new-balance-1080-v14',
    'nike-vomero-premium',
  ],
  relatedPosts: [
    {
      slug: 'nike-vomero-18-vs-vomero-plus-max-cushion-2026',
      title: '보메로 18 vs 보메로 플러스',
    },
  ],
  purchaseLinks: [
    {
      store: '네이버',
      url: 'https://naver.me/Faeh6rMC',
    },
    {
      store: '쿠팡',
      url: 'https://link.coupang.com/a/g5Y1xkHLEW',
    },
  ],
  verification: {
    checkedAt: '2026-11-09',
    scope: '한국 확인SKU의 정가·폭, 해외 실험실 수치·구조·외부 착화 의견을 재확인했습니다. 제품 전체 검증 완료 표지가 아닙니다.',
    sources: [
      {
        label: '한국 공식 men · 레귤러 · IM8336-100',
        url: 'https://www.nike.com/kr/t/보메로-플러스-남성-로드-러닝화-SUmL0LYm/IM8336-100',
        note: '한국 공식 남성 레귤러 IM8336-100·여성 IR7597-170 정가219,000원, 남성 와이드 IH3251-001 정가209,000원으로 SKU별 차이가 있습니다. 대표 가격은 남성 레귤러 SKU 기준입니다. 남성 확인SKU 일부 사이즈 선택 가능, 확인 여성SKU는 품절이며 여성 와이드·문자 폭코드는 미확인입니다.',
      },
      {
        label: '한국 공식 men · 와이드 · IH3251-001',
        url: 'https://www.nike.com/kr/t/나이키-보메로-플러스-남성-로드-러닝화와이드-SUmL0LYm/IH3251-001',
        note: '한국 공식 남성 레귤러 IM8336-100·여성 IR7597-170 정가219,000원, 남성 와이드 IH3251-001 정가209,000원으로 SKU별 차이가 있습니다. 대표 가격은 남성 레귤러 SKU 기준입니다. 남성 확인SKU 일부 사이즈 선택 가능, 확인 여성SKU는 품절이며 여성 와이드·문자 폭코드는 미확인입니다.',
      },
      {
        label: '한국 공식 women · null · IR7597-170',
        url: 'https://www.nike.com/kr/t/나이키-보메로-플러스-여성-로드-러닝화-6gudqavg',
        note: '한국 공식 남성 레귤러 IM8336-100·여성 IR7597-170 정가219,000원, 남성 와이드 IH3251-001 정가209,000원으로 SKU별 차이가 있습니다. 대표 가격은 남성 레귤러 SKU 기준입니다. 남성 확인SKU 일부 사이즈 선택 가능, 확인 여성SKU는 품절이며 여성 와이드·문자 폭코드는 미확인입니다.',
      },
      {
        label: 'RunRepeat 보메로 플러스',
        url: 'https://runrepeat.com/nike-vomero-plus',
        note: '공시 검체 정책:남성US9. 개별 검체SKU·폭은 미확인. 289g · 42.3/32.7mm · 드롭9.6mm. SA 147/131 · ER 67.1/68.8%. RR은 ZoomX를 TPE 기반이라고 설명하지만 제조사 세부 화학 배합은 미확인입니다. 실험실 SA·에너지 리턴은 무릎 보호·회복 촉진·반복 장거리 효능을 검증한 값이 아닙니다.',
      },
      {
        label: 'Doctors of Running 착화 리뷰',
        url: 'https://www.doctorsofrunning.com/nike-vomero-plus-review-2025/',
        note: '한국 공시 남성292g(280mm)·여성242g(250mm),드롭10mm. DOR 소개 남성281g(US9)·여성243g(US8),43/33mm·10mm와 RR289g·42.3/32.7mm·9.6mm는 조건이 다릅니다. RR 개별 검체 사이즈·폭 라벨은 이번에 독립 확인하지 못했습니다.',
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
