import type { Shoe } from '@/types/shoe';

// 원문 재확인:2026-11-09. 명시한 범위와 한계는 verification 참조.
export const shoe: Shoe = {
  id: 'new-balance-sc-trainer-v3',
  slug: 'new-balance-sc-trainer-v3',
  brand: 'New Balance',
  name: 'SC Trainer V3',
  image: '/images/shoes/newbalance/sctrainerv3/side.webp',
  images: [
    '/images/shoes/newbalance/sctrainerv3/side.webp',
    '/images/shoes/newbalance/sctrainerv3/front.webp',
    '/images/shoes/newbalance/sctrainerv3/back.webp',
    '/images/shoes/newbalance/sctrainerv3/top.webp',
    '/images/shoes/newbalance/sctrainerv3/outsole.webp',
  ],
  category: '쿠션화',
  description: 'PEBA·EVA FuelCell 블렌드 · Energy Arc 카본 · 중앙 void 구조의 SC Trainer V3. 실험실 278g·힐/전족부 36.8/29.5mm. 한국 현재 정가 미확인.',
  oneliner: '278g 실험실 무게 · PEBA·EVA FuelCell 블렌드 · Energy Arc 카본 · 중앙 void',
  editorComment: "2026-11-09 원문 재확인. 한국 실운영 검색 0건·남녀카테고리미노출이지만 관련카드에는 여성 B NBPFGS162B 정가 249,000원·할인 174,300원이 표시됐습니다. 대상상품상세는 빈화면이어서 현재 판매·확정 SKU·폭·재고·정가 필드는 미확인으로 둡니다. QA·pay캐시 가격과사이즈를 현재확인값으로 쓰지 않으며 검색 0건을 전체 미판매로 단정하지 않습니다. DOR 소개 261g(남성 US9.5)·209g(여성 US7),40/34mm·6mm. RR278g·36.8/29.5mm·7.3mm 와 RR 브랜드메타 41/35mm·6mm·278/232g 도 각각구분합니다. RR 은 폼을 20%PEBA·80%EVA로 설명하며 제조사의 새 배합 확인과 구분합니다. 주폼 21.8AC·보조 27.5AC 와리뷰어의단단한 주행감은다릅니다. 다른 폼 450km실험을 이 모델 500km수명이나 EVA블렌드 우위 증명으로 쓰지 않습니다. DOR Nathan(남성 US9.5,평소 9)은 반업 후 공간은 편했지만 길이가 약간 길다고 느꼈습니다. Andrea(여성 US9.5)는 정사이즈에서도 낮은 앞코로 엄지발톱 통증·중족의 느슨함을 느꼈고, David(남성 US9.5)는 충분한 볼륨·고정과 긴 주행을 선호했습니다. byline은 Matt이지만 실제 본문의 Nathan·Andrea·David 의견을 Matt의 착화 경험으로 만들지 않습니다. 한국 현재 와이드 SKU 는 미확인입니다. RR 내부 최광폭 95.9mm·엄지 73.5mm·높이 25.9mm 는 한국 와이드의 치수가 아니며 인솔·양말 포함 고정을 확인하세요. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.",
  tags: [
    '슈퍼 트레이너',
    '카본 플레이트',
    '템포런',
  ],
  specs: {
    weight: 278,
    cushioning: 9,
    responsiveness: 7,
    stability: 7,
    drop: 7.3,
  },
  biomechanics: {
    stackHeight: {
      heel: 36.8,
      forefoot: 29.5,
    },
    drop: 7.3,
    carbonPlate: true,
    plateType: 'Energy Arc full-length carbon plate',
    midsoleType: 'PEBA·EVA FuelCell 블렌드 · Energy Arc 카본 · 중앙 void',
  },
  detailedSpecs: {
    weight: "278g (RunRepeat 공시 검체 정책:남성 US9). DOR 소개 261g(남성 US9.5)·209g(여성 US7),40/34mm·6mm. RR278g·36.8/29.5mm·7.3mm 와 RR 브랜드메타 41/35mm·6mm·278/232g 도 각각구분합니다.",
    stackHeight: '36.8/29.5mm (RunRepeat 힐/전족부 실측)',
    drop: '7.3mm (RunRepeat 실측). 출처별 공시 조건은 무게 항목에 구분.',
    midsole: "PEBA·EVA FuelCell 블렌드 · Energy Arc 카본 · 중앙 void · 21.8 AC(Asker C) · 힐/전족부 SA 144/118 · 에너지 리턴 66.1/64.5%. RR 은 폼을 20%PEBA·80%EVA로 설명하며 제조사의 새 배합 확인과 구분합니다. 주폼 21.8AC·보조 27.5AC 와리뷰어의단단한 주행감은다릅니다. 다른 폼 450km실험을 이 모델 500km수명이나 EVA블렌드 우위 증명으로 쓰지 않습니다.",
    plate: "Energy Arc 전장 카본과 중앙홈. 기존 매직스피드 4를 비카본대안으로 소개한 문구는 잘못이어서 제거합니다.",
    width: "RunRepeat 내부 최광폭 95.9mm / 엄지 부위 73.5mm / 엄지 높이 25.9mm. 한국 현재 와이드 SKU 는 미확인입니다. RR 내부 최광폭 95.9mm·엄지 73.5mm·높이 25.9mm 는 한국 와이드의 치수가 아니며 인솔·양말 포함 고정을 확인하세요.",
    durability: "검증된 공통 수명 km 미확인. 짧은 착화·마모 깊이를 수명 km로 환산하지 않습니다.",
    price: "한국 실운영 검색 0건·남녀카테고리미노출이지만 관련카드에는 여성 B NBPFGS162B 정가 249,000원·할인 174,300원이 표시됐습니다. 대상상품상세는 빈화면이어서 현재 판매·확정 SKU·폭·재고·정가 필드는 미확인으로 둡니다. QA·pay캐시 가격과사이즈를 현재확인값으로 쓰지 않으며 검색 0건을 전체 미판매로 단정하지 않습니다.",
  },
  koreanFootFit: {
    toBoxWidth: 'standard',
  },
  priceAnalysis: {
    priceTier: 'premium',
    alternatives: [
      'saucony-endorphin-speed-5',
      'asics-magic-speed-4',
      'hoka-mach-x-3',
    ],
  },
  targetUsers: {
    recommended: [
      "Energy Arc·중앙홈·블렌드폼의 전환을 비교하려는 러너",
      "앞코 높이·길이·힐 고정을 실물로 확인하려는 러너",
    ],
    notRecommended: [
      "실제 착화에서 엄지발톱 압박·중족의 느슨함이 생기는 경우",
      "대상상세·현재 판매 조건을 확인하지 못한 매물",
    ],
  },
  features: [
    'PEBA·EVA FuelCell 블렌드 · Energy Arc 카본 · 중앙 void',
    '278g · 힐/전족부 36.8/29.5mm (RunRepeat)',
    "힐/전족부 SA 144/118 · 에너지 리턴 66.1/64.5% (RunRepeat). RR 은 폼을 20%PEBA·80%EVA로 설명하며 제조사의 새 배합 확인과 구분합니다. 주폼 21.8AC·보조 27.5AC 와리뷰어의단단한 주행감은다릅니다. 다른 폼 450km실험을 이 모델 500km수명이나 EVA블렌드 우위 증명으로 쓰지 않습니다.",
    "한국 현재 와이드 SKU 는 미확인입니다. RR 내부 최광폭 95.9mm·엄지 73.5mm·높이 25.9mm 는 한국 와이드의 치수가 아니며 인솔·양말 포함 고정을 확인하세요.",
  ],
  reviews: [
    {
      userType: '원문 기반 에디터 분석',
      source: 'editor',
      sourceUrl: 'https://runrepeat.com/new-balance-fuel-cell-super-comp-trainer-v-3',
      text: "278g 과 SA 144/118·에너지 리턴 66.1/64.5% 는 해외 실험실 검체의 값이며 기록 향상률·임상 효과가 아닙니다. RR 은 폼을 20%PEBA·80%EVA로 설명하며 제조사의 새 배합 확인과 구분합니다. 주폼 21.8AC·보조 27.5AC 와리뷰어의단단한 주행감은다릅니다. 다른 폼 450km실험을 이 모델 500km수명이나 EVA블렌드 우위 증명으로 쓰지 않습니다. 한국 현재 와이드 SKU 는 미확인입니다. RR 내부 최광폭 95.9mm·엄지 73.5mm·높이 25.9mm 는 한국 와이드의 치수가 아니며 인솔·양말 포함 고정을 확인하세요.",
    },
    {
      userType: '외부 착화 의견 요약 · Doctors of Running',
      source: 'editor',
      sourceUrl: 'https://www.doctorsofrunning.com/new-balance-fuelcell-sc-trainer-v3/',
      text: "DOR Nathan(남성 US9.5,평소 9)은 반업 후 공간은 편했지만 길이가 약간 길다고 느꼈습니다. Andrea(여성 US9.5)는 정사이즈에서도 낮은 앞코로 엄지발톱 통증·중족의 느슨함을 느꼈고, David(남성 US9.5)는 충분한 볼륨·고정과 긴 주행을 선호했습니다. byline은 Matt이지만 실제 본문의 Nathan·Andrea·David 의견을 Matt의 착화 경험으로 만들지 않습니다.",
    },
  ],
  similarShoes: [
    'saucony-endorphin-speed-5',
    'asics-magic-speed-4',
    'hoka-mach-x-3',
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
      url: 'https://naver.me/GiahurkU',
    },
  ],
  verification: {
    checkedAt: '2026-11-09',
    scope: "한국 확인 SKU 의 정가·폭, 해외 실험실 수치·구조·외부 착화 의견을 재확인했습니다. 제품 전체 검증 완료 표지가 아닙니다.",
    sources: [
      {
        label: '뉴발란스 한국 실운영 검색 범위',
        url: 'https://www.nbkorea.com/product/searchResult.action?schWord=SC%20Trainer%20V3',
        note: "검색 0건은 전체 미판매확정 아님.",
      },
      {
        label: '실운영 관련카드가 나온 원문',
        url: 'https://www.nbkorea.com/product/productDetail.action?styleCode=NBPFGF723K&colCode=19&cIdx=',
        note: "관련카드 249000/174300원표시. 대상상세빈화면으로현재 판매 확정못함.",
      },
      {
        label: '관련카드 대상상세 접근범위',
        url: 'https://www.nbkorea.com/product/productDetail.action?rccode=pc_detail_a2&styleCode=NBPFGS162B&colCode=19',
        note: '빈화면·옵션미확인.',
      },
      {
        label: 'RunRepeat SC Trainer V3',
        url: 'https://runrepeat.com/new-balance-fuel-cell-super-comp-trainer-v-3',
        note: "공시 검체 정책:남성 US9. 개별 검체 SKU·폭은 미확인. 278g · 36.8/29.5mm · 드롭 7.3mm. SA 144/118 · ER 66.1/64.5%. RR 은 폼을 20%PEBA·80%EVA로 설명하며 제조사의 새 배합 확인과 구분합니다. 주폼 21.8AC·보조 27.5AC 와리뷰어의단단한 주행감은다릅니다. 다른 폼 450km실험을 이 모델 500km수명이나 EVA블렌드 우위 증명으로 쓰지 않습니다.",
      },
      {
        label: 'Doctors of Running 착화 리뷰',
        url: 'https://www.doctorsofrunning.com/new-balance-fuelcell-sc-trainer-v3/',
        note: "DOR 소개 261g(남성 US9.5)·209g(여성 US7),40/34mm·6mm. RR278g·36.8/29.5mm·7.3mm 와 RR 브랜드메타 41/35mm·6mm·278/232g 도 각각구분합니다.",
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
