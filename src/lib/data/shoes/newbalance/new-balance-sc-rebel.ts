import type { Shoe } from '@/types/shoe';

// 원문 재확인:2026-11-10. 확인 범위와 한계는 verification 참조.
export const shoe: Shoe = {
  id: 'new-balance-sc-rebel',
  slug: 'new-balance-sc-rebel',
  brand: 'New Balance',
  name: 'SC Rebel V1',
  imageCaption: "SC Rebel 사진은 뉴발란스 MREBX4A2(Pistachio Butter / Morel) 공식 이미지와 대조했습니다. 한국 공식 갤러리 기록이 있으나 사진 품번을 한국 현재 판매 조건으로 읽지 마세요.",
  imageSource: {"title":"New Balance 상품 갤러리","url":"https://www.newbalance.com/pd/supercomp-rebel/MREBX4A2-D-14.html"},
  image: '/images/shoes/newbalance/screbel/side.webp',
  images: [
    '/images/shoes/newbalance/screbel/side.webp',
    '/images/shoes/newbalance/screbel/front.webp',
    '/images/shoes/newbalance/screbel/back.webp',
    '/images/shoes/newbalance/screbel/angle.webp',
    '/images/shoes/newbalance/screbel/outsole.webp',
    '/images/shoes/newbalance/screbel/top.webp',
  ],
  category: '레이싱',
  description: 'SuperComp Rebel · Infinion · 지면 쪽 EnergyARC 구조의 SC Rebel V1. RunRepeat 실험실 검체 207g·38.3/29.5mm. 한국 현재 정가 미확인.',
  oneliner: 'SuperComp Rebel · Infinion · 지면 쪽 EnergyARC · 207g (RunRepeat 실험실 검체)',
  editorComment: '2026-11-10 원문 재확인. 한국 공식 캐시: 공식403·정확 상품 원문 미확인. 현재 가격·선택 재고는 미확인입니다. 판매캐시와 현재 결제가는 다를 수 있으며 글로벌 폭을 한국 판매 증거로 쓰지 않습니다. 미국 공식222g(남성9.5M)·4mm, DOR 소개218g(남성US9.5)/174g(여성US7)·40/36mm·4mm와 RR207g·38.3/29.5mm·8.8mm를 구분합니다. 같은 검체의 감량·개인 체감 드롭으로 고정하지 않습니다. 미국 공식은 Infinion과 propulsion plate만 명시합니다. RR A-TPU와 DOR의 TPEE/EVA 같다는 추측을 합쳐 조성을 확정하지 않습니다. 한국259,000원·2E 발매·8월22일 출시·450km·미확인 매체9.99점·입문자 금지 보장을 반복하지 않습니다. DOR Matt(남성US10)는 낮고 테이퍼진 레이스 같은 정사이즈 핏·좋은 거싯 고정, 튀는 힐·어색한 중족 돌출·이른 전족 구름을 적었습니다.35마일 동안 다용도 훈련과 추가 중족 구조를 좋아했지만 팀원들의 다른 핏에는 실제 사이즈가 없어 임의로 채우지 않습니다. RR 내부 최광폭 94.1mm·엄지 71.2mm·높이 24.8mm입니다. 너비 하나로 발등·길이·힐 고정이나 한국 와이드 적합을 보장하지 않습니다. 실제 규격·양말에서 접촉과 전환을 확인하세요. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.',
  tags: [
    '레이싱',
    '슈퍼 트레이너',
    'Energy Arc',
    'Infinion',
  ],
  specs: {
    weight: 207,
    drop: 8.8,
  },
  biomechanics: {
    stackHeight: {
      heel: 38.3,
      forefoot: 29.5,
    },
    drop: 8.8,
    carbonPlate: true,
    plateType: 'Carbon-containing EnergyARC; material descriptions conflict',
    midsoleType: 'SuperComp Rebel · Infinion · 지면 쪽 EnergyARC',
  },
  detailedSpecs: {
    weight: '207g (RunRepeat 실험실 검체). 미국 공식222g(남성9.5M)·4mm, DOR 소개218g(남성US9.5)/174g(여성US7)·40/36mm·4mm와 RR207g·38.3/29.5mm·8.8mm를 구분합니다. 같은 검체의 감량·개인 체감 드롭으로 고정하지 않습니다.',
    stackHeight: '38.3/29.5mm (RunRepeat 실험실 검체, 힐/전족부). 출처별 다른 공시는 무게 항목 참조.',
    drop: '8.8mm (RunRepeat 실험실 검체). 미국 공식222g(남성9.5M)·4mm, DOR 소개218g(남성US9.5)/174g(여성US7)·40/36mm·4mm와 RR207g·38.3/29.5mm·8.8mm를 구분합니다. 같은 검체의 감량·개인 체감 드롭으로 고정하지 않습니다.',
    midsole: 'SuperComp Rebel · Infinion · 지면 쪽 EnergyARC. 주폼 31AC, 힐/전족부 SA 168/119·에너지 리턴 72.7/78.4%. 미국 공식은 Infinion과 propulsion plate만 명시합니다. RR A-TPU와 DOR의 TPEE/EVA 같다는 추측을 합쳐 조성을 확정하지 않습니다. 한국259,000원·2E 발매·8월22일 출시·450km·미확인 매체9.99점·입문자 금지 보장을 반복하지 않습니다.',
    plate: '정확 SuperComp Rebel은 Rebelv5와 별개입니다. RR은 carbon-infused판을 full carbon-fibre와 구분하지만 DOR은 전장 carbon-fibre라고 적었습니다. 탄소 포함 구조와 정확 섬유·복합재 조성·길이는 별개로 읽고 원문 상충을 남깁니다.',
    width: 'RR 내부 최광폭 94.1mm·엄지 부위 71.2mm·높이 24.8mm. RR 내부 최광폭 94.1mm·엄지 71.2mm·높이 24.8mm입니다. 너비 하나로 발등·길이·힐 고정이나 한국 와이드 적합을 보장하지 않습니다. 실제 규격·양말에서 접촉과 전환을 확인하세요.',
    durability: '검증된 공통 수명 km 미확인. 국소 마모·짧은 착화 후기를 주행 수명으로 환산하지 않습니다.',
    price: '한국 공식 캐시: 공식403·정확 상품 원문 미확인. 현재 가격·선택 재고는 미확인입니다. 판매캐시와 현재 결제가는 다를 수 있으며 글로벌 폭을 한국 판매 증거로 쓰지 않습니다.',
  },
  koreanFootFit: {
  },
  priceAnalysis: {
    priceTier: 'premium',
    alternatives: [
      'asics-superblast-3',
      'adidas-hyperboost-edge',
      'new-balance-sc-trainer-v3',
    ],
  },
  targetUsers: {
    recommended: [
      '실제 규격에서 앞코·힐 고정과 전환을 비교하려는 러너',
      '공시·실측·개인 체감의 조건을 구분하려는 러너',
    ],
    notRecommended: [
      '시착에서 압박·마찰·불편한 전환이 남는 경우',
      '짧은 시험과 광고를 수명·개인 기록·임상 효과로 읽는 경우',
    ],
  },
  features: [
    'SuperComp Rebel · Infinion · 지면 쪽 EnergyARC',
    '207g · 38.3/29.5mm · 드롭 8.8mm (RunRepeat 실험실 검체)',
    '정확 SuperComp Rebel은 Rebelv5와 별개입니다. RR은 carbon-infused판을 full carbon-fibre와 구분하지만 DOR은 전장 carbon-fibre라고 적었습니다. 탄소 포함 구조와 정확 섬유·복합재 조성·길이는 별개로 읽고 원문 상충을 남깁니다.',
    'RR 내부 최광폭 94.1mm·엄지 71.2mm·높이 24.8mm입니다. 너비 하나로 발등·길이·힐 고정이나 한국 와이드 적합을 보장하지 않습니다. 실제 규격·양말에서 접촉과 전환을 확인하세요.',
  ],
  reviews: [
    {
      userType: '원문 기반 에디터 분석',
      source: 'editor',
      sourceUrl: 'https://runrepeat.com/new-balance-super-comp-rebel',
      text: '미국 공식222g(남성9.5M)·4mm, DOR 소개218g(남성US9.5)/174g(여성US7)·40/36mm·4mm와 RR207g·38.3/29.5mm·8.8mm를 구분합니다. 같은 검체의 감량·개인 체감 드롭으로 고정하지 않습니다. 미국 공식은 Infinion과 propulsion plate만 명시합니다. RR A-TPU와 DOR의 TPEE/EVA 같다는 추측을 합쳐 조성을 확정하지 않습니다. 한국259,000원·2E 발매·8월22일 출시·450km·미확인 매체9.99점·입문자 금지 보장을 반복하지 않습니다.',
    },
    {
      userType: '외부 착화 의견 요약 · Doctors of Running',
      source: 'editor',
      sourceUrl: 'https://www.doctorsofrunning.com/new-balance-supercomp-rebel-review/',
      text: 'DOR Matt(남성US10)는 낮고 테이퍼진 레이스 같은 정사이즈 핏·좋은 거싯 고정, 튀는 힐·어색한 중족 돌출·이른 전족 구름을 적었습니다.35마일 동안 다용도 훈련과 추가 중족 구조를 좋아했지만 팀원들의 다른 핏에는 실제 사이즈가 없어 임의로 채우지 않습니다.',
    },
  ],
  similarShoes: [
    'asics-superblast-3',
    'adidas-hyperboost-edge',
    'new-balance-sc-trainer-v3',
  ],
  relatedPosts: [
    {
      slug: 'new-balance-sc-rebel-vs-asics-superblast-3-super-trainer-2026',
      title: 'SC 레벨 vs 슈퍼블라스트 3 — 같은 값 슈퍼 트레이너',
    },
    {
      slug: 'new-balance-sc-rebel-korea-launch-2026',
      title: 'SC 레벨 한국 출시 — 구매 경로 정리',
    },
    {
      slug: 'new-balance-sc-rebel-preview-2026',
      title: 'SC 레벨 프리뷰 — 해외 리뷰가 이례적으로 높은 이유',
    },
    {
      slug: 'new-balance-running-shoes-lineup-tier-guide-2026',
      title: '뉴발란스 러닝화 라인업 — 모델·세대·폭',
    },
    {
      slug: 'running-shoe-plate-guide-2026',
      title: '플레이트 완전 해설 — 카본·유리섬유·나일론',
    },
  ],
  verification: {
    checkedAt: '2026-11-10',
    scope: '한국 상품 조건, 해외 실험실·제조사 공시와 외부 착화 의견의 확인 범위를 구분했습니다. 제품 전체 검증 완료 표지가 아닙니다.',
    sources: [
      {
        label: '한국 공식 확인 실패 범위',
        url: 'https://www.nbkorea.com/',
        note: '403. 정확한국가격·SKU·와이드·선택재고 미확인.',
      },
      {
        label: '미국 공식 SuperComp Rebel',
        url: 'https://www.newbalance.com/pd/supercomp-rebel/MREBX9S5-2E-115.html',
        note: 'Official read does not specify TPEE/A-TPU or carbon-infused/full carbon-fibre. US membership/add-to-bag text not KR stock. USD price not converted.',
      },
      {
        label: 'RunRepeat 동세대 실험실 원문',
        url: 'https://runrepeat.com/new-balance-super-comp-rebel',
        note: '공시 일반 검체 정책은 남성 US9. 실제 검체 라벨·폭 미확인. 207g·38.3/29.5mm·8.8mm. 미국 공식은 Infinion과 propulsion plate만 명시합니다. RR A-TPU와 DOR의 TPEE/EVA 같다는 추측을 합쳐 조성을 확정하지 않습니다. 한국259,000원·2E 발매·8월22일 출시·450km·미확인 매체9.99점·입문자 금지 보장을 반복하지 않습니다.',
      },
      {
        label: 'Doctors of Running 동세대 원문',
        url: 'https://www.doctorsofrunning.com/new-balance-supercomp-rebel-review/',
        note: '미국 공식222g(남성9.5M)·4mm, DOR 소개218g(남성US9.5)/174g(여성US7)·40/36mm·4mm와 RR207g·38.3/29.5mm·8.8mm를 구분합니다. 같은 검체의 감량·개인 체감 드롭으로 고정하지 않습니다.',
      },
      {
        label: 'RunRepeat 측정법',
        url: 'https://runrepeat.com/testing-methodology',
        note: 'AC·HA·HC, SA·에너지 리턴, BR·구방식1~5와 내부/외부 폭을 구분합니다. 일반 정책은 개별 라벨 확인과 다릅니다.',
      },
    ],
    limitations: [
      '모델별 임상 예방·치료 등급, 공통 최적 페이스·주행 수명·km당 비용은 미확인으로 제거했습니다.',
      '에디터 평점·1~10점·발볼 및 계절 분류·구매 링크는 모든 항목을 새로 검증한 수치나 임상 효과가 아닙니다.',
      '판매 조건은 확인한 상품·시점에 한정합니다. 미확인을 미출시·단종·전국 재고 없음으로 해석하지 않습니다.',
    ],
  },
};
