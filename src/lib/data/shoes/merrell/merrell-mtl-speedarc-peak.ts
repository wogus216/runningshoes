import type { Shoe } from '@/types/shoe';

// 원문 재확인:2026-11-10. 확인 범위와 한계는 verification 참조.
export const shoe: Shoe = {
  id: 'merrell-mtl-speedarc-peak',
  slug: 'merrell-mtl-speedarc-peak',
  brand: 'Merrell',
  name: 'MTL 스피드아크 피크',
  image: '/images/shoes/merrell/mtl-speedarc-peak/side.webp',
  images: [
    '/images/shoes/merrell/mtl-speedarc-peak/side.webp',
    '/images/shoes/merrell/mtl-speedarc-peak/angle.webp',
    '/images/shoes/merrell/mtl-speedarc-peak/back.webp',
    '/images/shoes/merrell/mtl-speedarc-peak/top.webp',
    '/images/shoes/merrell/mtl-speedarc-peak/outsole.webp',
  ],
  category: '트레일',
  description: '위층 FloatPro Infinity PEBA · 아래 FloatPro · 3/4 포크형 카본 구조의 MTL 스피드아크 피크. RunRepeat 실험실 검체 303g·37/26.1mm. 한국 공식 확인 정가 339,000원 (2026-11-10).',
  oneliner: '위층 FloatPro Infinity PEBA · 아래 FloatPro · 3/4 포크형 카본 · 303g (RunRepeat 실험실 검체)',
  editorComment: '2026-11-10 원문 재확인. 2026-11-10 09:41~09:44 KST 한국 공식 HTTP 원문 확인: M26A1-ULC300FLD (unisex·폭 미확인) 정가 339,000원·표시 판매/할인가 339,000원; M26A1-ULC301BLK (unisex·폭 미확인) 정가 339,000원·표시 판매/할인가 339,000원. 정가는 소비자가 필드 기준입니다. 옵션 선택·최종 결제·규격별 재고는 미확인입니다. 쿠폰을 임의 차감하지 않습니다. RR303g·37/26.1mm·10.9mm와 재전재 브랜드305/278g(기준 사이즈 미확인)·32/26mm·6mm를 나눕니다. 한국 확인 문서의 무게·전체 스택 공시는 미확인입니다. 34.8AC는 위층PEBA 값이고 하층 경도는 미확인입니다. 접지계수1.02는 젖은 콘크리트 시험으로 바위·진흙·젖은뿌리 최상위 보장이 아닙니다. BR79·건조65%도 실제 더운 산행에서의 편안함 보장이 아니며450km·와이드 부재·모든 기록 향상을 제거했습니다. 정확 Speedarc Peak의 DOR·RTR 개별 착화 리뷰는 미확인입니다. 브랜드 주장과 랩 수치를 개인 트레일 레이스·여름 산행 경험처럼 소개하지 않습니다. 다른 Speedarc모델의 리뷰를 옮기지 않습니다. RR 내부 최광폭 94mm·엄지 72.6mm·높이 26.2mm입니다. 한국 여성·와이드의 치수로 직접 대입하지 말고 실제 길이·발가락 위 공간·힐 고정을 확인하세요. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.',
  tags: [
    '트레일',
    '카본',
    'PEBA',
    '레이싱',
    '비브람',
  ],
  specs: {
    weight: 303,
    drop: 10.9,
  },
  biomechanics: {
    stackHeight: {
      heel: 37,
      forefoot: 26.1,
    },
    drop: 10.9,
    carbonPlate: true,
    plateType: '3/4 forked carbon FlexPlate',
    midsoleType: '위층 FloatPro Infinity PEBA · 아래 FloatPro · 3/4 포크형 카본',
  },
  koreanFootFit: {
  },
  targetUsers: {
    recommended: [
      '실제 규격·주요 노면에서 고정과 전환을 비교하려는 러너',
      '공시·검체·리뷰어의 노면과 발형 조건을 구분하려는 러너',
    ],
    notRecommended: [
      '시착·주행에서 압박·마찰·불편한 전환이 남는 경우',
      '콘크리트 시험을 모든 바위·진흙 안전으로 읽는 경우',
    ],
  },
  features: [
    '위층 FloatPro Infinity PEBA · 아래 FloatPro · 3/4 포크형 카본',
    '303g · 37/26.1mm · 드롭 10.9mm (RunRepeat 실험실 검체)',
    '한국 공식·RR은3/4 길이 분기형 카본 FlexPlate를 확인합니다. 위층PEBA·아래FloatPro·TPEE 인솔을 같은 폼으로 뭉뚱그리지 않습니다. Vibram Megagrip Elite·Matryx는 확인한 구조입니다.',
    'RR 내부 최광폭 94mm·엄지 72.6mm·높이 26.2mm입니다. 한국 여성·와이드의 치수로 직접 대입하지 말고 실제 길이·발가락 위 공간·힐 고정을 확인하세요.',
  ],
  priceAnalysis: {
    priceTier: 'super-premium',
    alternatives: [
      'hoka-tecton-x-3',
      'salomon-s-lab-pulsar-4',
      'asics-metafuji-trail',
    ],
    msrp: 339000,
  },
  detailedSpecs: {
    weight: '303g (RunRepeat 실험실 검체). RR303g·37/26.1mm·10.9mm와 재전재 브랜드305/278g(기준 사이즈 미확인)·32/26mm·6mm를 나눕니다. 한국 확인 문서의 무게·전체 스택 공시는 미확인입니다.',
    stackHeight: '37/26.1mm (RunRepeat 실험실 검체, 힐/전족부). 출처별 다른 공시는 무게 항목 참조.',
    drop: '10.9mm (RunRepeat 실험실 검체). RR303g·37/26.1mm·10.9mm와 재전재 브랜드305/278g(기준 사이즈 미확인)·32/26mm·6mm를 나눕니다. 한국 확인 문서의 무게·전체 스택 공시는 미확인입니다.',
    midsole: '위층 FloatPro Infinity PEBA · 아래 FloatPro · 3/4 포크형 카본. 주폼 34.8AC, 힐/전족부 SA 135/88·에너지 리턴 61.9/64.1%. 34.8AC는 위층PEBA 값이고 하층 경도는 미확인입니다. 접지계수1.02는 젖은 콘크리트 시험으로 바위·진흙·젖은뿌리 최상위 보장이 아닙니다. BR79·건조65%도 실제 더운 산행에서의 편안함 보장이 아니며450km·와이드 부재·모든 기록 향상을 제거했습니다.',
    plate: '한국 공식·RR은3/4 길이 분기형 카본 FlexPlate를 확인합니다. 위층PEBA·아래FloatPro·TPEE 인솔을 같은 폼으로 뭉뚱그리지 않습니다. Vibram Megagrip Elite·Matryx는 확인한 구조입니다.',
    width: 'RR 내부 최광폭 94mm·엄지 부위 72.6mm·높이 26.2mm. RR 내부 최광폭 94mm·엄지 72.6mm·높이 26.2mm입니다. 한국 여성·와이드의 치수로 직접 대입하지 말고 실제 길이·발가락 위 공간·힐 고정을 확인하세요.',
    durability: '검증된 공통 수명 km 미확인. 국소 마모·짧은 착화 후기를 주행 수명으로 환산하지 않습니다.',
    price: '2026-11-10 09:41~09:44 KST 한국 공식 HTTP 원문 확인: M26A1-ULC300FLD (unisex·폭 미확인) 정가 339,000원·표시 판매/할인가 339,000원; M26A1-ULC301BLK (unisex·폭 미확인) 정가 339,000원·표시 판매/할인가 339,000원. 정가는 소비자가 필드 기준입니다. 옵션 선택·최종 결제·규격별 재고는 미확인입니다. 쿠폰을 임의 차감하지 않습니다.',
  },
  reviews: [
    {
      userType: '원문 기반 에디터 분석',
      source: 'editor',
      sourceUrl: 'https://runrepeat.com/merrell-mtl-speed-arc-peak',
      text: 'RR303g·37/26.1mm·10.9mm와 재전재 브랜드305/278g(기준 사이즈 미확인)·32/26mm·6mm를 나눕니다. 한국 확인 문서의 무게·전체 스택 공시는 미확인입니다. 34.8AC는 위층PEBA 값이고 하층 경도는 미확인입니다. 접지계수1.02는 젖은 콘크리트 시험으로 바위·진흙·젖은뿌리 최상위 보장이 아닙니다. BR79·건조65%도 실제 더운 산행에서의 편안함 보장이 아니며450km·와이드 부재·모든 기록 향상을 제거했습니다.',
    },
    {
      userType: '원문 기반 확인 범위 · 착화 후기 미확인',
      source: 'editor',
      sourceUrl: 'https://runrepeat.com/merrell-mtl-speed-arc-peak',
      text: '정확 Speedarc Peak의 DOR·RTR 개별 착화 리뷰는 미확인입니다. 브랜드 주장과 랩 수치를 개인 트레일 레이스·여름 산행 경험처럼 소개하지 않습니다. 다른 Speedarc모델의 리뷰를 옮기지 않습니다.',
    },
  ],
  similarShoes: [
    'hoka-tecton-x-3',
    'salomon-s-lab-pulsar-4',
    'asics-metafuji-trail',
  ],
  verification: {
    checkedAt: '2026-11-10',
    scope: '한국 상품 조건, 해외 실험실·제조사 공시와 외부 착화 의견의 확인 범위를 구분했습니다. 제품 전체 검증 완료 표지가 아닙니다.',
    sources: [
      {
        label: '한국 공식 kr-speedarc-feature',
        url: 'https://merrellkorea.co.kr/project/MTL_speedARC_Peak.html',
        note: 'opened_original_cached_body; 공식 CarbonFlexPlate는3/4포크형카본.위FloatProInfinity PEBA/아래FloatPro구조,Matryx Kevlar+고강도polyamide,VibramMegagripElite.공용BLACK/FLASHDANCE339000.제조사설계설명이며임상/기록효능으로전환안함.',
      },
      {
        label: '한국 공식 kr-speedarc-flash',
        url: 'https://merrellkorea.co.kr/product/unisex-mtl-speedarc-peakflashdance/3072/',
        note: 'opened_original_cached_body; 공용FLASHDANCE M26A1-ULC300FLD,SEO J00005583.339000/339000.옵션230~290 5mm단위/300.실시간재고미검증.',
      },
      {
        label: '한국 공식 kr-speedarc-black',
        url: 'https://merrellkorea.co.kr/product/unisex-mtl-speedarc-peakblack/3071/',
        note: 'opened_original_cached_body; 공용BLACK M26A1-ULC301BLK,SEO J00005833.339000/339000.옵션230~290 5mm단위/300.',
      },
      {
        label: 'RunRepeat 동세대 실험실 원문',
        url: 'https://runrepeat.com/merrell-mtl-speed-arc-peak',
        note: '공시 일반 검체 정책은 남성 US9. 실제 검체 라벨·폭 미확인. 303g·37/26.1mm·10.9mm. 34.8AC는 위층PEBA 값이고 하층 경도는 미확인입니다. 접지계수1.02는 젖은 콘크리트 시험으로 바위·진흙·젖은뿌리 최상위 보장이 아닙니다. BR79·건조65%도 실제 더운 산행에서의 편안함 보장이 아니며450km·와이드 부재·모든 기록 향상을 제거했습니다.',
      },
      {
        label: 'RunRepeat 측정법',
        url: 'https://runrepeat.com/testing-methodology',
        note: 'AC·HA·HC, SA·에너지 리턴, BR·구방식1~5와 내부/외부 폭을 구분합니다. 일반 정책은 개별 라벨 확인과 다릅니다.',
      },
      {
        label: '한국 공식 가격 HTTP 확인 · M26A1-ULC300FLD',
        url: 'https://merrellkorea.co.kr/product/unisex-mtl-speedarc-peakflashdance/3072/',
        note: '2026-11-10 직접 GET/HTTP200; 소비자가 339,000원, 표시 판매/할인가 339,000원. 재고·결제 검증 아님. 실제 HTTP Date: Tue, 10 Nov 2026 00:42:23 GMT',
      },
      {
        label: '한국 공식 가격 HTTP 확인 · M26A1-ULC301BLK',
        url: 'https://merrellkorea.co.kr/product/unisex-mtl-speedarc-peakblack/3071/',
        note: '2026-11-10 직접 GET/HTTP200; 소비자가 339,000원, 표시 판매/할인가 339,000원. 재고·결제 검증 아님. 실제 HTTP Date: Tue, 10 Nov 2026 00:42:23 GMT',
      },
    ],
    limitations: [
      '모델별 임상 예방·치료 등급, 공통 최적 페이스·주행 수명·km당 비용은 미확인으로 제거했습니다.',
      '에디터 평점·1~10점·발볼 및 계절 분류·구매 링크는 모든 항목을 새로 검증한 수치나 임상 효과가 아닙니다.',
      '판매 조건은 확인한 상품·시점에 한정합니다. 미확인을 미출시·단종·전국 재고 없음으로 해석하지 않습니다.',
      '정확한 동세대 DOR 개별 착화 리뷰 미확인. 다른 세대로 대체하지 않음.',
      '정가를 현재 결제 가능 재고와 분리했습니다. 상세 가격의 SKU·성별·시점을 확인하세요.',
    ],
  },
  price: 339000,
};
