import type { Shoe } from '@/types/shoe';

// 원문 재확인:2026-11-09. 확인 범위와 한계는 verification 참조.
export const shoe: Shoe = {
  id: 'on-cloudmonster-hyper',
  slug: 'on-cloudmonster-hyper',
  brand: 'On',
  name: '클라우드몬스터 하이퍼',
  image: '/images/shoes/on/cloudmonster_Hyper.webp',
  images: [
    '/images/shoes/on/cloudmonsterhyper/side.webp',
    '/images/shoes/on/cloudmonsterhyper/front.webp',
    '/images/shoes/on/cloudmonsterhyper/back.webp',
    '/images/shoes/on/cloudmonsterhyper/top.webp',
    '/images/shoes/on/cloudmonsterhyper/outsole.webp',
  ],
  category: '쿠션화',
  description: '초대 Helion HF(PEBA/Pebax) · Helion · CloudTec 구조의 클라우드몬스터 하이퍼. RunRepeat 실험실 검체 258g·39.7/33mm. 한국 현재 정가 미확인.',
  oneliner: '초대 Helion HF(PEBA/Pebax) · Helion · CloudTec · 258g (RunRepeat 실험실 검체)',
  editorComment: '2026-11-09 원문 재확인. 초대 한국 남녀 상품 URL이 목록으로 연결되어 현재 가격·SKU·폭·재고 미확인입니다. 기존259,000원·와이드 없음 확정과 맥스쿠션 회복 효과를 현재 사실로 쓰지 않습니다. RR 브랜드37/31mm·6mm·남성255g/여성221g, 미국 공식265g은 기준 사이즈 미확인입니다. DOR44/38mm·6mm, 남성272g/9.3oz의 내부 단위 불일치와 여성212g/7.5oz를 그대로 구분합니다. RR은258g·39.7/33mm·6.7mm입니다. 주폼34.9AC는 흰 Helion HF 영역이고 보조52.3AC의 정확 위치는 미확인입니다. PEBA계 Helion HF와 더 단단한 Helion 외곽·아래층을 구분합니다. 이전 세대가 아닌 별도 Cloudmonster2와의 34g 차이를 자동 성능 개선으로 읽지 않습니다. 450km·4:30~5:30 전용·힐 착지 무릎 위험·임상 회복 보장은 철회합니다. DOR Matt(남성US10)은 약간 길고 힐이 단단하며 전족 전환이 늦어 기대보다 덜 튄다고 느꼈습니다. David(남성US9.5)는 조금 길어도 고정이 좋았지만 낮은 양말에서 칼라 마찰을 느꼈습니다. Andrea(여성US9.5)는 앞코·고정이 좋고 칼라 마찰은 없었으며 본인의 중족 착지에서 탄성을 느꼈지만 빠르게 달릴 때 안쪽 전족 저항을 느꼈습니다. RR 내부 최광폭97.9mm·엄지73.3mm·높이26.6mm입니다. 엄지 부위 너비만으로 발 전체가 넓다고 하거나 모든 러너의 반업을 정하지 않습니다. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.',
  tags: [
    '쿠션화',
    '템포런',
    '장거리',
  ],
  specs: {
    weight: 258,
    cushioning: 8,
    responsiveness: 7,
    stability: 6,
    drop: 6.7,
  },
  biomechanics: {
    stackHeight: {
      heel: 39.7,
      forefoot: 33,
    },
    drop: 6.7,
    carbonPlate: false,
    plateType: null,
    midsoleType: '초대 Helion HF(PEBA/Pebax) · Helion · CloudTec',
  },
  koreanFootFit: {
    toBoxWidth: 'standard',
  },
  priceAnalysis: {
    priceTier: 'premium',
    alternatives: [
      'saucony-endorphin-speed-5',
      'nike-pegasus-plus',
      'asics-superblast-2',
    ],
  },
  targetUsers: {
    recommended: [
      '플레이트 없는 초대 Hyper의 로커·쿠션을 비교하려는 러너',
      '실제 규격에서 길이·칼라 높이·고정을 확인하려는 러너',
    ],
    notRecommended: [
      '직접 착화에서 칼라 마찰이나 전환 불편이 지속되는 경우',
      '초대와 3 Hyper의 가격·검체가 혼용된 매물',
    ],
  },
  features: [
    '초대 Helion HF(PEBA/Pebax) · Helion · CloudTec',
    '258g · 39.7/33mm · 드롭 6.7mm (RunRepeat 실험실 검체)',
    '초대 Hyper는 Speedboard·플레이트가 없습니다. 3 Hyper·Lightspray·LS의 수치를 대입하지 않습니다.',
    'RR 내부 최광폭97.9mm·엄지73.3mm·높이26.6mm입니다. 엄지 부위 너비만으로 발 전체가 넓다고 하거나 모든 러너의 반업을 정하지 않습니다.',
  ],
  reviews: [
    {
      userType: '원문 기반 에디터 분석',
      source: 'editor',
      sourceUrl: 'https://runrepeat.com/on-cloudmonster-hyper',
      text: 'RR 브랜드37/31mm·6mm·남성255g/여성221g, 미국 공식265g은 기준 사이즈 미확인입니다. DOR44/38mm·6mm, 남성272g/9.3oz의 내부 단위 불일치와 여성212g/7.5oz를 그대로 구분합니다. RR은258g·39.7/33mm·6.7mm입니다. 주폼34.9AC는 흰 Helion HF 영역이고 보조52.3AC의 정확 위치는 미확인입니다. PEBA계 Helion HF와 더 단단한 Helion 외곽·아래층을 구분합니다. 이전 세대가 아닌 별도 Cloudmonster2와의 34g 차이를 자동 성능 개선으로 읽지 않습니다. 450km·4:30~5:30 전용·힐 착지 무릎 위험·임상 회복 보장은 철회합니다.',
    },
    {
      userType: '외부 착화 의견 요약 · Doctors of Running',
      source: 'editor',
      sourceUrl: 'https://www.doctorsofrunning.com/on-cloudmonster-hyper-review-2024/',
      text: 'DOR Matt(남성US10)은 약간 길고 힐이 단단하며 전족 전환이 늦어 기대보다 덜 튄다고 느꼈습니다. David(남성US9.5)는 조금 길어도 고정이 좋았지만 낮은 양말에서 칼라 마찰을 느꼈습니다. Andrea(여성US9.5)는 앞코·고정이 좋고 칼라 마찰은 없었으며 본인의 중족 착지에서 탄성을 느꼈지만 빠르게 달릴 때 안쪽 전족 저항을 느꼈습니다.',
    },
  ],
  detailedSpecs: {
    weight: '258g (RunRepeat 실험실 검체). RR 브랜드37/31mm·6mm·남성255g/여성221g, 미국 공식265g은 기준 사이즈 미확인입니다. DOR44/38mm·6mm, 남성272g/9.3oz의 내부 단위 불일치와 여성212g/7.5oz를 그대로 구분합니다. RR은258g·39.7/33mm·6.7mm입니다.',
    stackHeight: '39.7/33mm (RunRepeat 실험실 검체, 힐/전족부). 출처별 다른 공시는 무게 항목 참조.',
    drop: '6.7mm (RunRepeat 실험실 검체). RR 브랜드37/31mm·6mm·남성255g/여성221g, 미국 공식265g은 기준 사이즈 미확인입니다. DOR44/38mm·6mm, 남성272g/9.3oz의 내부 단위 불일치와 여성212g/7.5oz를 그대로 구분합니다. RR은258g·39.7/33mm·6.7mm입니다.',
    midsole: '초대 Helion HF(PEBA/Pebax) · Helion · CloudTec. 주폼 34.9AC·보조 52.3AC, 힐/전족부 SA 138/118·에너지 리턴 54.4/60.2%. 주폼34.9AC는 흰 Helion HF 영역이고 보조52.3AC의 정확 위치는 미확인입니다. PEBA계 Helion HF와 더 단단한 Helion 외곽·아래층을 구분합니다. 이전 세대가 아닌 별도 Cloudmonster2와의 34g 차이를 자동 성능 개선으로 읽지 않습니다. 450km·4:30~5:30 전용·힐 착지 무릎 위험·임상 회복 보장은 철회합니다.',
    plate: '초대 Hyper는 Speedboard·플레이트가 없습니다. 3 Hyper·Lightspray·LS의 수치를 대입하지 않습니다.',
    width: 'RR 내부 최광폭 97.9mm·엄지 부위 73.3mm·높이 26.6mm. RR 내부 최광폭97.9mm·엄지73.3mm·높이26.6mm입니다. 엄지 부위 너비만으로 발 전체가 넓다고 하거나 모든 러너의 반업을 정하지 않습니다.',
    durability: '검증된 공통 수명 km 미확인. 국소 마모·짧은 착화 후기를 주행 수명으로 환산하지 않습니다.',
    price: '초대 한국 남녀 상품 URL이 목록으로 연결되어 현재 가격·SKU·폭·재고 미확인입니다. 기존259,000원·와이드 없음 확정과 맥스쿠션 회복 효과를 현재 사실로 쓰지 않습니다.',
  },
  similarShoes: [
    'saucony-endorphin-speed-5',
    'nike-pegasus-plus',
    'hoka-mach-6',
  ],
  relatedPosts: [
    {
      slug: 'on-cloudmonster-hyper-vs-3-hyper-comparison-2026',
      title: '하이퍼 vs 3 하이퍼 — 같은 값, 갈리는 성능',
    },
  ],
  purchaseLinks: [
    {
      store: '네이버',
      url: 'https://naver.me/IIDykY3x',
    },
  ],
  verification: {
    checkedAt: '2026-11-09',
    scope: '한국 상품 조건, 해외 실험실·제조사 공시와 외부 착화 의견의 확인 범위를 구분했습니다. 제품 전체 검증 완료 표지가 아닙니다.',
    sources: [
      {
        label: '한국 초대 남성 접근 범위',
        url: 'https://www.on.com/ko-kr/products/cloudmonster-hyper-m-3me1013',
        note: '상품 대신 목록 연결. 현재 가격 미확인.',
      },
      {
        label: '한국 초대 여성 접근 범위',
        url: 'https://www.on.com/ko-kr/products/cloudmonster-hyper-w-3we1012',
        note: '상품 대신 목록 연결.',
      },
      {
        label: '미국 초대 공식',
        url: 'https://www.on.com/en-us/products/cloudmonster-hyper-m-3me1013',
        note: '265g·6mm·Speedboard 제거. 회복 홍보는 임상 효능 근거 아님.',
      },
      {
        label: 'RunRepeat 동세대 실험실 원문',
        url: 'https://runrepeat.com/on-cloudmonster-hyper',
        note: '공시 일반 검체 정책은 남성 US9. 실제 검체 라벨·폭 미확인. 258g·39.7/33mm·6.7mm. 주폼34.9AC는 흰 Helion HF 영역이고 보조52.3AC의 정확 위치는 미확인입니다. PEBA계 Helion HF와 더 단단한 Helion 외곽·아래층을 구분합니다. 이전 세대가 아닌 별도 Cloudmonster2와의 34g 차이를 자동 성능 개선으로 읽지 않습니다. 450km·4:30~5:30 전용·힐 착지 무릎 위험·임상 회복 보장은 철회합니다.',
      },
      {
        label: 'Doctors of Running 동세대 원문',
        url: 'https://www.doctorsofrunning.com/on-cloudmonster-hyper-review-2024/',
        note: 'RR 브랜드37/31mm·6mm·남성255g/여성221g, 미국 공식265g은 기준 사이즈 미확인입니다. DOR44/38mm·6mm, 남성272g/9.3oz의 내부 단위 불일치와 여성212g/7.5oz를 그대로 구분합니다. RR은258g·39.7/33mm·6.7mm입니다.',
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
