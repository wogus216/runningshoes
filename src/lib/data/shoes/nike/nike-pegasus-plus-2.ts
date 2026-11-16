import type { Shoe } from '@/types/shoe';

// 원문 재확인:2026-11-10. 확인 범위와 한계는 verification 참조.
export const shoe: Shoe = {
  id: 'nike-pegasus-plus-2',
  slug: 'nike-pegasus-plus-2',
  brand: 'Nike',
  name: '페가수스 플러스 2',
  category: '데일리',
  price: 219000,
  imageCaption: "pegasus plus 2 사진(IM2541-600 · 플래시 크림슨/블랙/라이트 스모크 그레이/메탈릭 실버)은 Nike 공식 상품 갤러리와 모델·색상·구도를 대조했습니다. 사진 품번을 한국 판매 규격·가격으로 읽지 마세요.",
  imageSource: {"title":"Nike 공식 상품 갤러리","url":"https://www.nike.com/kr/t/나이키-페가수스-플러스-2-남성-로드-러닝화-k7TxLWJb/IM2541-600"},
  image: '/images/shoes/nike/pegasus-plus-2/side.webp',
  description: '훈련용 ZoomX · 전족 전폭 Air Zoom1개 구조의 페가수스 플러스 2. RunRepeat 실험실 검체 247g·37.7/27.3mm. 한국 IM2541-600 표시 정가 219,000원(11/13 확인).',
  oneliner: '훈련용 ZoomX · 전족 전폭 Air Zoom1개 · 247g (RunRepeat 실험실 검체)',
  editorComment: "2026-11-11 원문 대조. 2026-11-13 Nike 한국 공식 IM2541-600 공개 본문과 선택 제품 데이터에서 표시 정가 219,000원·판매 표시 219,000원을 확인했습니다. 대표 가격은 이 정확 상품의 정가이며 모든 색상·성별·특별판의 동일 가격이나 실제 결제·선택 사이즈 재고를 보장하지 않습니다. 이전 다른 SKU·여성·와이드의 가격/옵션은 이번에 재확인하지 않았습니다. DOR 소개 270g(남성 US10)/226g(여성 US8)·38/28mm·10mm, RR 브랜드 265/215g(사이즈미확인)·38/28mm·10mm, 실제 247g·37.7/27.3mm·10.4mm 를 구분합니다. 한국공식은반사디테일을명시하지만 RR 검체는없음으로상충합니다. Nike의 2026-08-20 공식 발표는 초대 페가수스 플러스 대비 최소 18% 높은 에너지 반환력을 주장합니다. 비교 시험 조건이 RunRepeat와 같다고 확인하지 못했으므로 실험실 절대 수치와 직접 비교하지 않습니다. RR 젖은콘크리트 0.49와 Andrea의좋은젖은도로체감은다릅니다.주행 수명과 질환별 보호 효과, 모든 발에 대한 적합성을 이 자료로 보장할 수 없습니다. DOR Andrea(여성 US9.5)는 정사이즈·높은전족볼륨과중간테이퍼, 끈을더조여야하는중족과좋은뒤쪽고정을느꼈습니다. 이지·업템포와본인의마라톤강도를선호했지만 역치강도에서는무게가더느껴지고작은베벨·높은드롭의힐전환이거칠었습니다. 개인경험을고정페이스·착지금지로바꾸지않습니다. RR 내부 최광폭 94mm·엄지 71.3mm·높이 26.8mm 입니다. 개인의넉넉한앞코체감이나정사이즈안내가 모든한국발의적합·와이드여부를 보장하지 않습니다. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.",
  tags: [
    '데일리',
    '템포',
    'ZoomX',
    '에어 줌',
    '신상',
  ],
  specs: {
    weight: 247,
    drop: 10.4,
  },
  biomechanics: {
    stackHeight: { heel: 37.7, forefoot: 27.3 },
    drop: 10.4,
    carbonPlate: false,
    plateType: null,
    midsoleType: '훈련용 ZoomX · 전족 전폭 Air Zoom1개',
  },
  koreanFootFit: {
  },
  targetUsers: {
    recommended: [
      "전족 Air Zoom·훈련용 ZoomX의전환을비교하려는 러너",
      '실제규격에서중족끈조임·앞코볼륨을확인하려는러너',
    ],
    notRecommended: [
      "끈을조이면발등 압박·힐 슬립이남는경우",
    ],
  },
  priceAnalysis: {
    priceTier: 'premium',
    alternatives: [
      'nike-pegasus-plus',
      'saucony-endorphin-speed-5',
      'asics-novablast-5',
    ],
  },
  features: [
    '훈련용 ZoomX · 전족 전폭 Air Zoom1개',
    '247g · 37.7/27.3mm · 드롭 10.4mm (RunRepeat 실험실 검체)',
    "Nike의 2026-08-20 공식 발표는 플레이트 없는 구조로 설명합니다. 전족부 Air Zoom 유닛을 플레이트와 구분하세요.",
    "RR 내부 최광폭 94mm·엄지 71.3mm·높이 26.8mm 입니다. 개인의넉넉한앞코체감이나정사이즈안내가 모든한국발의적합·와이드여부를 보장하지 않습니다.",
  ],
  detailedSpecs: {
    weight: "247g (RunRepeat 실험실 검체). DOR 소개 270g(남성 US10)/226g(여성 US8)·38/28mm·10mm, RR 브랜드 265/215g(사이즈미확인)·38/28mm·10mm, 실제 247g·37.7/27.3mm·10.4mm 를 구분합니다.",
    stackHeight: '37.7/27.3mm (RunRepeat 실험실 검체, 힐/전족부). 출처별 다른 공시는 무게 항목 참조.',
    drop: "10.4mm (RunRepeat 실험실 검체). DOR 소개 270g(남성 US10)/226g(여성 US8)·38/28mm·10mm, RR 브랜드 265/215g(사이즈미확인)·38/28mm·10mm, 실제 247g·37.7/27.3mm·10.4mm 를 구분합니다.",
    midsole: "훈련용 ZoomX · 전족 전폭 Air Zoom1개. 주폼 29.8AC, 힐/전족부 SA 147/122·에너지 리턴 65.5/69%. 한국공식은반사디테일을명시하지만 RR 검체는없음으로상충합니다. Nike의 2026-08-20 공식 발표는 초대 페가수스 플러스 대비 최소 18% 높은 에너지 반환력을 주장합니다. 비교 시험 조건이 RunRepeat와 같다고 확인하지 못했으므로 실험실 절대 수치와 직접 비교하지 않습니다. RR 젖은콘크리트 0.49와 Andrea의좋은젖은도로체감은다릅니다.주행 수명과 질환별 보호 효과, 모든 발에 대한 적합성을 이 자료로 보장할 수 없습니다.",
    plate: "Nike의 2026-08-20 공식 발표는 플레이트 없는 구조로 설명합니다. 전족부 Air Zoom 유닛을 플레이트와 구분하세요.",
    width: "RR 내부 최광폭 94mm·엄지 부위 71.3mm·높이 26.8mm. RR 내부 최광폭 94mm·엄지 71.3mm·높이 26.8mm 입니다. 개인의넉넉한앞코체감이나정사이즈안내가 모든한국발의적합·와이드여부를 보장하지 않습니다.",
    durability: '검증된 공통 수명 km 미확인. 국소 마모·짧은 착화 후기를 주행 수명으로 환산하지 않습니다.',
    price: "2026-11-13 Nike 한국 공식 IM2541-600 공개 본문과 선택 제품 데이터에서 표시 정가 219,000원·판매 표시 219,000원을 확인했습니다. 대표 가격은 이 정확 상품의 정가이며 모든 색상·성별·특별판의 동일 가격이나 실제 결제·선택 사이즈 재고를 보장하지 않습니다. 이전 다른 SKU·여성·와이드의 가격/옵션은 이번에 재확인하지 않았습니다.",
  },
  reviews: [
    {
      userType: '원문 기반 에디터 분석',
      source: 'editor',
      sourceUrl: 'https://runrepeat.com/nike-pegasus-plus-2',
      text: "DOR 소개 270g(남성 US10)/226g(여성 US8)·38/28mm·10mm, RR 브랜드 265/215g(사이즈미확인)·38/28mm·10mm, 실제 247g·37.7/27.3mm·10.4mm 를 구분합니다. 한국공식은반사디테일을명시하지만 RR 검체는없음으로상충합니다. Nike의 2026-08-20 공식 발표는 초대 페가수스 플러스 대비 최소 18% 높은 에너지 반환력을 주장합니다. 비교 시험 조건이 RunRepeat와 같다고 확인하지 못했으므로 실험실 절대 수치와 직접 비교하지 않습니다. RR 젖은콘크리트 0.49와 Andrea의좋은젖은도로체감은다릅니다.주행 수명과 질환별 보호 효과, 모든 발에 대한 적합성을 이 자료로 보장할 수 없습니다.",
    },
    {
      userType: '외부 착화 의견 요약 · Doctors of Running',
      source: 'editor',
      sourceUrl: 'https://www.doctorsofrunning.com/nike-pegasus-plus-2-review/',
      text: "DOR Andrea(여성 US9.5)는 정사이즈·높은전족볼륨과중간테이퍼, 끈을더조여야하는중족과좋은뒤쪽고정을느꼈습니다. 이지·업템포와본인의마라톤강도를선호했지만 역치강도에서는무게가더느껴지고작은베벨·높은드롭의힐전환이거칠었습니다. 개인경험을고정페이스·착지금지로바꾸지않습니다.",
    },
  ],
  similarShoes: [
    'nike-pegasus-plus',
    'nike-pegasus-42',
    'nike-vomero-plus',
    'adidas-hyperboost-run',
  ],
  relatedPosts: [
    {
      slug: 'nike-pegasus-42-vs-pegasus-plus-2-daily-2026',
      title: '페가수스42 vs플러스2 —39g 검체차이보다 전족Air·앞코·전환 비교',
    },
    {
      slug: 'nike-pegasus-plus-2-release-2026',
      title: '페가수스 플러스2 업데이트 — ZoomX·전족Air Zoom, 한국 캐시와 실측 정리',
    },
  ],
  verification: {
    checkedAt: '2026-11-13',
    scope: '한국 상품 조건, 해외 실험실·제조사 공시와 외부 착화 의견의 확인 범위를 구분했습니다. 제품 전체 검증 완료 표지가 아닙니다. 2026-11-13 후속 확인은 정확 한국 상품의 표시 정가·할인가 범위입니다. 기존 랩·착화 의견을 새로 전수 검증한 날짜가 아닙니다.',
    sources: [
      {
        "label": "Nike 한국 공식 IM2541-600 — 2026-11-13 표시 정가 확인",
        "url": "https://www.nike.com/kr/t/%EB%82%98%EC%9D%B4%ED%82%A4-%ED%8E%98%EA%B0%80%EC%88%98%EC%8A%A4-%ED%94%8C%EB%9F%AC%EC%8A%A4-2-%EB%82%A8%EC%84%B1-%EB%A1%9C%EB%93%9C-%EB%9F%AC%EB%8B%9D%ED%99%94-k7TxLWJb/IM2541-600",
        "note": "한국·선택품번일치,KRW initialPrice 219,000원/currentPrice 219,000원과본문표시대조.정가와할인가구분.실제결제·재고미검증."
      },
      {
        "label": "Nike 페가수스 플러스 2 공식 발표",
        "url": "https://about.nike.com/en/newsroom/releases/unlock-race-day-speed-for-everyday-runs-with-nike-new-tempo-trainer-the-pegasus-plus-2",
        "note": "2026-08-20 발표: 비플레이트 구조, 초대 대비 최소 18% 에너지 반환력 개선 주장과 반사 요소. 독립 비교시험이나 실험실 절대 리턴 수치로 해석하지 않습니다."
      },
      {
        "label": "한국 공식 캐시 IM2541-600 · men",
        "url": "https://www.nike.com/kr/t/%EB%82%98%EC%9D%B4%ED%82%A4-%ED%8E%98%EA%B0%80%EC%88%98%EC%8A%A4-%ED%94%8C%EB%9F%AC%EC%8A%A4-2-%EB%82%A8%EC%84%B1-%EB%A1%9C%EB%93%9C-%EB%9F%AC%EB%8B%9D%ED%99%94-k7TxLWJb/IM2541-600",
        "note": "표시 정가 219000원. 2026-11-10 조회 당시 지난주로 표시된 캐시입니다. 현재 가격·선택 재고는 미확인입니다."
      },
      {
        "label": "한국 공식 캐시 IM2543-600 · women",
        "url": "https://www.nike.com/kr/t/%EB%82%98%EC%9D%B4%ED%82%A4-%ED%8E%98%EA%B0%80%EC%88%98%EC%8A%A4-%ED%94%8C%EB%9F%AC%EC%8A%A4-2-%EC%97%AC%EC%84%B1-%EB%A1%9C%EB%93%9C-%EB%9F%AC%EB%8B%9D%ED%99%94-k7TxLWJb/IM2543-600",
        "note": "표시 정가 219000원. 2026-11-10 조회 당시 4일 전으로 표시된 캐시입니다. 현재 가격·선택 재고는 미확인입니다."
      },
      {
        "label": "RunRepeat 동세대 실험실 원문",
        "url": "https://runrepeat.com/nike-pegasus-plus-2",
        "note": "공시 일반 검체 정책은 남성 US9. 실제 검체 라벨·폭 미확인. 247g·37.7/27.3mm·10.4mm. 한국공식은반사디테일을명시하지만 RR 검체는없음으로상충합니다. Nike의 2026-08-20 공식 발표는 초대 페가수스 플러스 대비 최소 18% 높은 에너지 반환력을 주장합니다. 비교 시험 조건이 RunRepeat와 같다고 확인하지 못했으므로 실험실 절대 수치와 직접 비교하지 않습니다. RR 젖은콘크리트 0.49와 Andrea의좋은젖은도로체감은다릅니다.주행 수명과 질환별 보호 효과, 모든 발에 대한 적합성을 이 자료로 보장할 수 없습니다."
      },
      {
        "label": "Doctors of Running 동세대 원문",
        "url": "https://www.doctorsofrunning.com/nike-pegasus-plus-2-review/",
        "note": "DOR 소개 270g(남성 US10)/226g(여성 US8)·38/28mm·10mm, RR 브랜드 265/215g(사이즈미확인)·38/28mm·10mm, 실제 247g·37.7/27.3mm·10.4mm 를 구분합니다."
      },
      {
        "label": "RunRepeat 측정법",
        "url": "https://runrepeat.com/testing-methodology",
        "note": "AC·HA·HC, SA·에너지 리턴, BR·구방식 1~5와 내부/외부 폭을 구분합니다. 일반 정책은 개별 라벨 확인과 다릅니다."
      }
    ],
    limitations: [
      '모델별 임상 예방·치료 등급, 공통 최적 페이스·주행 수명·km당 비용은 미확인으로 제거했습니다.',
      '에디터 평점·1~10점·발볼 및 계절 분류·구매 링크는 모든 항목을 새로 검증한 수치나 임상 효과가 아닙니다.',
      '판매 조건은 확인한 상품·시점에 한정합니다. 미확인을 미출시·단종·전국 재고 없음으로 해석하지 않습니다.',
    ],
  },
};
