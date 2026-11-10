import type { Shoe } from '@/types/shoe';

// 원문 재확인:2026-11-10. 확인 범위와 한계는 verification 참조.
export const shoe: Shoe = {
  id: 'salomon-s-lab-pulsar-4',
  slug: 'salomon-s-lab-pulsar-4',
  brand: 'Salomon',
  name: 'S/LAB 펄사 4',
  image: '/images/shoes/salomon/slab-pulsar-4/side.webp',
  images: [
    '/images/shoes/salomon/slab-pulsar-4/side.webp',
    '/images/shoes/salomon/slab-pulsar-4/angle.webp',
    '/images/shoes/salomon/slab-pulsar-4/back.webp',
    '/images/shoes/salomon/slab-pulsar-4/top.webp',
    '/images/shoes/salomon/slab-pulsar-4/outsole.webp',
  ],
  category: '트레일',
  description: 'S/LAB Pulsar4 · 두 층 Energy Foam · MATRYX·Quicklace 구조의 S/LAB 펄사 4. RunRepeat 실험실 검체 247g·32.6/25.5mm. 한국 현재 정가 미확인.',
  oneliner: 'S/LAB Pulsar4 · 두 층 Energy Foam · MATRYX·Quicklace · 247g (RunRepeat 실험실 검체)',
  editorComment: '2026-11-10 원문 재확인. 한국 L47770300 캐시는 단일 가격 340,000원·Standard·250g(기준 사이즈 미공시)·6mm를 표시했습니다. 명시적 MSRP·현재 가격·와이드는 미확인입니다. 225~295mm 목록은 재입고 알림창에 있어 현재 구매 가능 재고가 아닙니다. 뒷굽 높이 원문의 cm:34 단위 이상을 임의로 34mm나 340mm로 고치지 않습니다. RR 247g·32.6/25.5mm·7.1mm, DOR 소개 252g(남성 US9)·35/29mm·6mm, RR 재전재 브랜드 31/25mm·6mm는 서로 다른 자료입니다. 17.5HA는 구방식으로 AC는 미확인입니다. DOR의 반응성 체감과 RR 리턴 47.7/57.6%는 다른 종류의 근거입니다. DOR 4mm 러그와 RR 3mm도 구분합니다. 20~80km 처방·350km 수명·카본 트레일이라는 기존 설명을 철회합니다. DOR 2025 여름 다모델 정리에서 David는 아주 밀착되는 입구와 착화 후 보통~좁은 핏, 단단하지만 반응성 있고 민첩한 주행을 적었습니다. 긴 주행에서는 본인에게 덜 편했습니다. 실제 착화 사이즈는 미확인이며 개별 전체 리뷰가 아닌 요약 글입니다. RR 내부 최광폭 94.9mm·엄지 74mm·높이 31mm입니다. DOR의 밀착 체감과 합쳐 모든 넓은 발에 적합하다고 판정하지 않습니다. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.',
  tags: [
    '트레일',
    '레이싱',
    '엘리트',
    'S/LAB',
    '경량',
  ],
  specs: {
    weight: 247,
    cushioning: 8,
    responsiveness: 7,
    stability: 8,
    drop: 7.1,
  },
  biomechanics: {
    stackHeight: {
      heel: 32.6,
      forefoot: 25.5,
    },
    drop: 7.1,
    carbonPlate: false,
    midsoleType: 'S/LAB Pulsar4 · 두 층 Energy Foam · MATRYX·Quicklace',
    plateType: null,
  },
  koreanFootFit: {
    toBoxWidth: 'standard',
  },
  targetUsers: {
    recommended: [
      '밀착되는 입구와 Quicklace 고정을 실제 규격에서 확인하려는 러너',
      '카본 없는 구조의 지면 감각을 비교하려는 러너',
    ],
    notRecommended: [
      '입구·중족 압박이나 장거리 마찰이 남는 경우',
      '얇은 보호 필름을 카본으로 소개한 설명',
    ],
  },
  features: [
    'S/LAB Pulsar4 · 두 층 Energy Foam · MATRYX·Quicklace',
    '247g · 32.6/25.5mm · 드롭 7.1mm (RunRepeat 실험실 검체)',
    'RR은 카본과 록플레이트가 없다고 명시합니다. DOR의 얇은 보호 필름 설명을 카본으로 바꾸지 않습니다.',
    'RR 내부 최광폭 94.9mm·엄지 74mm·높이 31mm입니다. DOR의 밀착 체감과 합쳐 모든 넓은 발에 적합하다고 판정하지 않습니다.',
  ],
  priceAnalysis: {
    priceTier: 'premium',
    alternatives: [
      'hoka-tecton-x-3',
      'salomon-pulsar',
    ],
  },
  detailedSpecs: {
    weight: '247g (RunRepeat 실험실 검체). RR 247g·32.6/25.5mm·7.1mm, DOR 소개 252g(남성 US9)·35/29mm·6mm, RR 재전재 브랜드 31/25mm·6mm는 서로 다른 자료입니다.',
    stackHeight: '32.6/25.5mm (RunRepeat 실험실 검체, 힐/전족부). 출처별 다른 공시는 무게 항목 참조.',
    drop: '7.1mm (RunRepeat 실험실 검체). RR 247g·32.6/25.5mm·7.1mm, DOR 소개 252g(남성 US9)·35/29mm·6mm, RR 재전재 브랜드 31/25mm·6mm는 서로 다른 자료입니다.',
    midsole: 'S/LAB Pulsar4 · 두 층 Energy Foam · MATRYX·Quicklace. 폼 경도 17.5 HA (구방식), AC 미확인. 힐/전족부 SA 133/112·에너지 리턴 47.7/57.6%. 17.5HA는 구방식으로 AC는 미확인입니다. DOR의 반응성 체감과 RR 리턴 47.7/57.6%는 다른 종류의 근거입니다. DOR 4mm 러그와 RR 3mm도 구분합니다. 20~80km 처방·350km 수명·카본 트레일이라는 기존 설명을 철회합니다.',
    plate: 'RR은 카본과 록플레이트가 없다고 명시합니다. DOR의 얇은 보호 필름 설명을 카본으로 바꾸지 않습니다.',
    width: 'RR 내부 최광폭 94.9mm·엄지 부위 74mm·높이 31mm. RR 내부 최광폭 94.9mm·엄지 74mm·높이 31mm입니다. DOR의 밀착 체감과 합쳐 모든 넓은 발에 적합하다고 판정하지 않습니다.',
    durability: '검증된 공통 수명 km 미확인. 국소 마모·짧은 착화 후기를 주행 수명으로 환산하지 않습니다.',
    price: '한국 L47770300 캐시는 단일 가격 340,000원·Standard·250g(기준 사이즈 미공시)·6mm를 표시했습니다. 명시적 MSRP·현재 가격·와이드는 미확인입니다. 225~295mm 목록은 재입고 알림창에 있어 현재 구매 가능 재고가 아닙니다. 뒷굽 높이 원문의 cm:34 단위 이상을 임의로 34mm나 340mm로 고치지 않습니다.',
  },
  reviews: [
    {
      userType: '원문 기반 에디터 분석',
      source: 'editor',
      sourceUrl: 'https://runrepeat.com/salomon-s-lab-pulsar-4',
      text: 'RR 247g·32.6/25.5mm·7.1mm, DOR 소개 252g(남성 US9)·35/29mm·6mm, RR 재전재 브랜드 31/25mm·6mm는 서로 다른 자료입니다. 17.5HA는 구방식으로 AC는 미확인입니다. DOR의 반응성 체감과 RR 리턴 47.7/57.6%는 다른 종류의 근거입니다. DOR 4mm 러그와 RR 3mm도 구분합니다. 20~80km 처방·350km 수명·카본 트레일이라는 기존 설명을 철회합니다.',
    },
    {
      userType: '외부 착화 의견 요약 · Doctors of Running',
      source: 'editor',
      sourceUrl: 'https://www.doctorsofrunning.com/monday-shakeout-summer-2025-trail-shoe/',
      text: 'DOR 2025 여름 다모델 정리에서 David는 아주 밀착되는 입구와 착화 후 보통~좁은 핏, 단단하지만 반응성 있고 민첩한 주행을 적었습니다. 긴 주행에서는 본인에게 덜 편했습니다. 실제 착화 사이즈는 미확인이며 개별 전체 리뷰가 아닌 요약 글입니다.',
    },
  ],
  similarShoes: [
    'hoka-tecton-x-3',
    'salomon-pulsar',
  ],
  relatedPosts: [
    {
      slug: 'tecton-x-3-vs-ultrafly-vs-s-lab-pulsar-carbon-trail-2026',
      title: '카본 트레일 레이서 3파전 — 테크톤 X 3 vs 울트라플라이 vs S/LAB 펄사 4',
    },
    {
      slug: 'salomon-pulsar-vs-ultra-glide-vs-s-lab-trail-2026',
      title: '살로몬 트레일 3종 — 펄사 vs 울트라 글라이드 4 vs S/LAB',
    },
  ],
  verification: {
    checkedAt: '2026-11-10',
    scope: '한국 상품 조건, 해외 실험실·제조사 공시와 외부 착화 의견의 확인 범위를 구분했습니다. 제품 전체 검증 완료 표지가 아닙니다.',
    sources: [
      {
        label: '한국 공식 L47770300',
        url: 'https://salomon.co.kr/products/l47770300',
        note: '캐시 today; 단일 표시 가격은 명시적 MSRP 확인과 다름. 현재 선택 재고·가격 미확인.',
      },
      {
        label: 'RunRepeat 동세대 실험실 원문',
        url: 'https://runrepeat.com/salomon-s-lab-pulsar-4',
        note: '공시 일반 검체 정책은 남성 US9. 실제 검체 라벨·폭 미확인. 247g·32.6/25.5mm·7.1mm. 17.5HA는 구방식으로 AC는 미확인입니다. DOR의 반응성 체감과 RR 리턴 47.7/57.6%는 다른 종류의 근거입니다. DOR 4mm 러그와 RR 3mm도 구분합니다. 20~80km 처방·350km 수명·카본 트레일이라는 기존 설명을 철회합니다.',
      },
      {
        label: 'Doctors of Running 동세대 원문',
        url: 'https://www.doctorsofrunning.com/monday-shakeout-summer-2025-trail-shoe/',
        note: 'RR 247g·32.6/25.5mm·7.1mm, DOR 소개 252g(남성 US9)·35/29mm·6mm, RR 재전재 브랜드 31/25mm·6mm는 서로 다른 자료입니다.',
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
