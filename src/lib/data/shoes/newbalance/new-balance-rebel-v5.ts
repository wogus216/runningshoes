import type { Shoe } from '@/types/shoe';

// 원문 재확인:2026-11-09. 명시한 범위와 한계는 verification 참조.
export const shoe: Shoe = {
  id: 'new-balance-rebel-v5',
  slug: 'new-balance-rebel-v5',
  brand: 'New Balance',
  name: '레벨 V5',
  image: '/images/shoes/newbalance/rebelv5/side.webp',
  images: [
    '/images/shoes/newbalance/rebelv5/side.webp',
    '/images/shoes/newbalance/rebelv5/front.webp',
    '/images/shoes/newbalance/rebelv5/back.webp',
    '/images/shoes/newbalance/rebelv5/top.webp',
    '/images/shoes/newbalance/rebelv5/outsole.webp',
  ],
  category: '데일리',
  price: 219000,
  description: "PEBA·EVA FuelCell 블렌드 · 비플레이트 구조의 레벨 V5. 실험실 220g·힐/전족부 33/26.7mm. 한국 확인 정가 219,000원.",
  oneliner: '220g 실험실 무게 · PEBA·EVA FuelCell 블렌드 · 비플레이트',
  editorComment: "2026-11-09 원문 재확인. 한국 실운영 공식 여성 D NBPFGF723K Black·남성 2E NBPFGF722L Black 정가 219,000원. 여성 230/235/240/250mm 선택 가능,225/245/255mm 품절이었고 확인한남성색 250~290mm 는 모두품절이었습니다. 남성 D·여성 B의 현재 상품은 미확인입니다. SCRebelV1과 섞지 않습니다. 한국공시 남성 225g·여성 180g 은 측정 사이즈 미공시입니다. DOR 소개 같은 무게는 남성 US9.5·여성 US7,35/29mm·6mm 이며 RR220g·33.0/26.7mm·6.3mm 와 구분합니다. RR25.9AC 는 현재경도이며 기존 11.5HA 와 직접비교하지 않습니다. 한국공식 스택증가 2.5mm 와 DOR Matt의 5mm 문구가 충돌합니다. RR 동일리뷰의 젖은길부정서술과 접지절 0.53의긍정설명도 보존하며 모든노면 안전을 보장하지 않습니다. DOR Matt(남성 US10)은 앞쪽은 여유있지만 낮은발등 중족부의 안쪽압박·거싯마찰을 느꼈습니다. Andrea(여성 US9.5)는 앞쪽이 편했지만 중족이 넓어 코너에서 발이 움직였다고 적었습니다. Nathan은 길이·앞발·힐 고정과 여러훈련 활용을 긍정적으로 평가했고 Matt·Andrea는 빠르거나 피로한긴주행에서 한계를 느꼈습니다. 개인별 용도를 하나의 최적 페이스로 합치지 않습니다. 한국남성 2E·여성 D 상품을 확인했지만 모든 넓은 발의 적합 보장은 아닙니다. RR 내부 최광폭 96.1mm·엄지 75.0mm·높이 27.9mm 와 개인의 발등·힐 고정을 함께 확인하세요. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.",
  tags: [
    '데일리',
    '경량',
    '반발력',
  ],
  specs: {
    weight: 220,
    drop: 6.3,
  },
  biomechanics: {
    stackHeight: {
      heel: 33,
      forefoot: 26.7,
    },
    drop: 6.3,
    carbonPlate: false,
    plateType: null,
    midsoleType: 'PEBA·EVA FuelCell 블렌드 · 비플레이트',
  },
  detailedSpecs: {
    weight: "220g (RunRepeat 공시 검체 정책:남성 US9). 한국공시 남성 225g·여성 180g 은 측정 사이즈 미공시입니다. DOR 소개 같은 무게는 남성 US9.5·여성 US7,35/29mm·6mm 이며 RR220g·33.0/26.7mm·6.3mm 와 구분합니다.",
    stackHeight: '33/26.7mm (RunRepeat 힐/전족부 실측)',
    drop: '6.3mm (RunRepeat 실측). 출처별 공시 조건은 무게 항목에 구분.',
    midsole: "PEBA·EVA FuelCell 블렌드 · 비플레이트 · 25.9 AC(Asker C) · 힐/전족부 SA 145/105 · 에너지 리턴 59.8/67.3%. RR25.9AC 는 현재경도이며 기존 11.5HA 와 직접비교하지 않습니다. 한국공식 스택증가 2.5mm 와 DOR Matt의 5mm 문구가 충돌합니다. RR 동일리뷰의 젖은길부정서술과 접지절 0.53의긍정설명도 보존하며 모든노면 안전을 보장하지 않습니다.",
    plate: "RR·DOR 은 비플레이트 유연한 중립형으로 설명합니다. 다른 FuelCell모델의 카본을 전용하지 않습니다.",
    width: "RunRepeat 내부 최광폭 96.1mm / 엄지 부위 75mm / 엄지 높이 27.9mm. 한국남성 2E·여성 D 상품을 확인했지만 모든 넓은 발의 적합 보장은 아닙니다. RR 내부 최광폭 96.1mm·엄지 75.0mm·높이 27.9mm 와 개인의 발등·힐 고정을 함께 확인하세요.",
    durability: "검증된 공통 수명 km 미확인. 짧은 착화·마모 깊이를 수명 km로 환산하지 않습니다.",
    price: "한국 실운영 공식 여성 D NBPFGF723K Black·남성 2E NBPFGF722L Black 정가 219,000원. 여성 230/235/240/250mm 선택 가능,225/245/255mm 품절이었고 확인한남성색 250~290mm 는 모두품절이었습니다. 남성 D·여성 B의 현재 상품은 미확인입니다. SCRebelV1과 섞지 않습니다.",
  },
  koreanFootFit: {
    wideOptions: true,
  },
  priceAnalysis: {
    msrp: 219000,
    priceTier: 'mid',
    alternatives: [
      'saucony-kinvara-16',
      'hoka-mach-6',
      'asics-novablast-5',
    ],
  },
  targetUsers: {
    recommended: [
      "비플레이트 FuelCell블렌드의 유연한 전환을 비교하려는 러너",
      "한국 2E·D실물의 발등 압박·코너 고정을 확인하려는 러너",
    ],
    notRecommended: [
      "직접 착화에서 중족 압박·발 움직임이 해결되지 않는 경우",
      "판매규격과 실제 색상 재고를 확인하지 못한 경우",
    ],
  },
  features: [
    'PEBA·EVA FuelCell 블렌드 · 비플레이트',
    '220g · 힐/전족부 33/26.7mm (RunRepeat)',
    "힐/전족부 SA 145/105 · 에너지 리턴 59.8/67.3% (RunRepeat). RR25.9AC 는 현재경도이며 기존 11.5HA 와 직접비교하지 않습니다. 한국공식 스택증가 2.5mm 와 DOR Matt의 5mm 문구가 충돌합니다. RR 동일리뷰의 젖은길부정서술과 접지절 0.53의긍정설명도 보존하며 모든노면 안전을 보장하지 않습니다.",
    "한국남성 2E·여성 D 상품을 확인했지만 모든 넓은 발의 적합 보장은 아닙니다. RR 내부 최광폭 96.1mm·엄지 75.0mm·높이 27.9mm 와 개인의 발등·힐 고정을 함께 확인하세요.",
  ],
  reviews: [
    {
      userType: '원문 기반 에디터 분석',
      source: 'editor',
      sourceUrl: 'https://runrepeat.com/new-balance-fuel-cell-rebel-v-5',
      text: "220g 과 SA 145/105·에너지 리턴 59.8/67.3% 는 해외 실험실 검체의 값이며 기록 향상률·임상 효과가 아닙니다. RR25.9AC 는 현재경도이며 기존 11.5HA 와 직접비교하지 않습니다. 한국공식 스택증가 2.5mm 와 DOR Matt의 5mm 문구가 충돌합니다. RR 동일리뷰의 젖은길부정서술과 접지절 0.53의긍정설명도 보존하며 모든노면 안전을 보장하지 않습니다. 한국남성 2E·여성 D 상품을 확인했지만 모든 넓은 발의 적합 보장은 아닙니다. RR 내부 최광폭 96.1mm·엄지 75.0mm·높이 27.9mm 와 개인의 발등·힐 고정을 함께 확인하세요.",
    },
    {
      userType: '외부 착화 의견 요약 · Doctors of Running',
      source: 'editor',
      sourceUrl: 'https://www.doctorsofrunning.com/new-balance-fuelcell-rebel-v5-review/',
      text: "DOR Matt(남성 US10)은 앞쪽은 여유있지만 낮은발등 중족부의 안쪽압박·거싯마찰을 느꼈습니다. Andrea(여성 US9.5)는 앞쪽이 편했지만 중족이 넓어 코너에서 발이 움직였다고 적었습니다. Nathan은 길이·앞발·힐 고정과 여러훈련 활용을 긍정적으로 평가했고 Matt·Andrea는 빠르거나 피로한긴주행에서 한계를 느꼈습니다. 개인별 용도를 하나의 최적 페이스로 합치지 않습니다.",
    },
  ],
  similarShoes: [
    'hoka-mach-6',
    'saucony-kinvara-16',
    'asics-novablast-5',
  ],
  purchaseLinks: [
    {
      store: '네이버',
      url: 'https://naver.me/5dA8aEyH',
    },
    {
      store: '쿠팡',
      url: 'https://link.coupang.com/a/g5YR0Aqh3Y',
    },
  ],
  verification: {
    checkedAt: '2026-11-09',
    scope: "한국 확인 SKU 의 정가·폭, 해외 실험실 수치·구조·외부 착화 의견을 재확인했습니다. 제품 전체 검증 완료 표지가 아닙니다.",
    sources: [
      {
        label: '뉴발란스 한국 women · NBPFGF723K · D(약간넓음)',
        url: 'https://www.nbkorea.com/product/productDetail.action?styleCode=NBPFGF723K&colCode=19&cIdx=',
        note: "확인 SKU 정가 219000원. 색상·규격·사이즈별상태는 본문조건 참조.",
      },
      {
        label: '뉴발란스 한국 men · NBPFGF722L · 2E(약간넓음)',
        url: 'https://www.nbkorea.com/product/productDetail.action?styleCode=NBPFGF722L&colCode=19&cIdx=',
        note: "확인 SKU 정가 219000원. 색상·규격·사이즈별상태는 본문조건 참조.",
      },
      {
        label: 'RunRepeat 레벨 V5',
        url: 'https://runrepeat.com/new-balance-fuel-cell-rebel-v-5',
        note: "공시 검체 정책:남성 US9. 개별 검체 SKU·폭은 미확인. 220g · 33/26.7mm · 드롭 6.3mm. SA 145/105 · ER 59.8/67.3%. RR25.9AC 는 현재경도이며 기존 11.5HA 와 직접비교하지 않습니다. 한국공식 스택증가 2.5mm 와 DOR Matt의 5mm 문구가 충돌합니다. RR 동일리뷰의 젖은길부정서술과 접지절 0.53의긍정설명도 보존하며 모든노면 안전을 보장하지 않습니다.",
      },
      {
        label: 'Doctors of Running 착화 리뷰',
        url: 'https://www.doctorsofrunning.com/new-balance-fuelcell-rebel-v5-review/',
        note: "한국공시 남성 225g·여성 180g 은 측정 사이즈 미공시입니다. DOR 소개 같은 무게는 남성 US9.5·여성 US7,35/29mm·6mm 이며 RR220g·33.0/26.7mm·6.3mm 와 구분합니다.",
      },
      {
        label: 'RunRepeat 측정법',
        url: 'https://runrepeat.com/testing-methodology',
        note: "내부 최광폭·엄지 너비·외부 플랫폼 폭은 다른 값입니다. AC 와 HA 는 직접 비교하지 않습니다. 시점·측정법 버전의 차이를 구분하세요.",
      },
    ],
    limitations: [
      "질환 예방·치료 효과, 공통 최적 페이스와 수명 km는 확인하지 못해 관련 등급·수명·km당 비용을 비웁니다.",
      '에디터 평점·1~10점·발볼 및 계절 적합성 분류는 실험실 단위나 임상 효과가 아닙니다.',
      "판매·재고는 확인한 SKU·성별·폭·시점에만 적용합니다. 미확인을 미판매·단종·미출시로 해석하지 않습니다.",
    ],
  },
};
