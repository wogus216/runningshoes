import type { Shoe } from '@/types/shoe';

// 원문 재확인:2026-11-09. 명시한 범위와 한계는 verification 참조.
export const shoe: Shoe = {
  id: 'mizuno-wave-inspire-21',
  slug: 'mizuno-wave-inspire-21',
  brand: 'Mizuno',
  name: '웨이브 인스파이어 21',
  imageCaption: "웨이브 인스파이어 21 사진(J1GC254401 · Tradewinds/neo mint/frontier blue)입니다. 공식 상품 사진과 대조했으며 구매할 성별·폭·색상 옵션과 구분하세요.",
  imageSource: {"title":"Mizuno 공식 상품 갤러리","url":"https://emea.mizuno.com/eu/en/wave-inspire-21/J1GC254401.html"},
  image: "/images/shoes/mizuno/waveinspire21/side.webp",
  images: [
    "/images/shoes/mizuno/waveinspire21/side.webp",
    "/images/shoes/mizuno/waveinspire21/front.webp",
    "/images/shoes/mizuno/waveinspire21/back.webp",
    "/images/shoes/mizuno/waveinspire21/top.webp",
  ],
  category: '안정화',
  price: 159000,
  description: 'ENERZY 본체 · 힐 ENERZY NXT · Wave plate 구조의 웨이브 인스파이어 21. 실험실 286g·힐/전족부 38/25.1mm. 한국 확인 정가159,000원.',
  oneliner: '286g 실험실 무게 · ENERZY 본체 · 힐 ENERZY NXT · Wave plate',
  editorComment: '2026-11-09 원문 재확인. 현행 한국 공식몰kor.mizuno.com에서 남성일반J1GC254455·남성SW J1GC254503·여성SW J1GD254673 정가159,000원 확인. 확인남성SKU는품절이었고 여성은구매버튼표시만확인해 사이즈별실재고는미확인입니다. SW를2E·4E로매핑하지않습니다. DOR 소개 남성292g(US9)·여성249g(US8),38/26mm·드롭12mm. RR286g·38/25.1mm·12.9mm와구분. RR브랜드칸140g은다른원문과충돌해채택하지않습니다. RR 경도는 ENERZY 층26.6HA 구방식이며 현재AC값·힐ENERZY NXT 경도는 미확인입니다. 다른 모델의AC와 직접 비교·환산하지 않습니다. DOR의 Matt은 US10에서 길이가 맞고 앞쪽 공간은 넓지만 발등 볼륨이 낮다고 느꼈으며 단단한 카운터 압박을 경험했습니다. 힐은 단단하고 약간 튕기며 앞쪽은 더 부드럽고 유연하다고 평가했습니다. 힐·중족부 Wave plate의 소재와 카본 여부는 이번에 확인하지 못했습니다. 한국 남성일반·남녀SW 상품을 확인했습니다. RR 내부98.4/73.5/30.9mm는 해외검체의 다른위치 치수이며 한국SW나 발볼110mm를 수용한다는 보증이 아닙니다. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.',
  tags: [
    '안정화',
    '과내전',
  ],
  specs: {
    weight: 286,
    drop: 12.9,
  },
  biomechanics: {
    stackHeight: {
      heel: 38,
      forefoot: 25.1,
    },
    drop: 12.9,
    carbonPlate: false,
    midsoleType: 'ENERZY 본체 · 힐 ENERZY NXT · Wave plate',
  },
  koreanFootFit: {
    wideOptions: true,
  },
  targetUsers: {
    recommended: [
      'Wave plate와 높은 실측드롭의 착화를 비교하려는 러너',
      '한국SW 판매규격과 실제볼륨을 확인하려는 러너',
    ],
    notRecommended: [
      '단단한 카운터·낮은 발등공간이 불편한 경우',
      '매우 가벼운 무게·낮은 드롭이 우선인 경우',
    ],
  },
  features: [
    'ENERZY 본체 · 힐 ENERZY NXT · Wave plate',
    '286g · 힐/전족부 38/25.1mm (RunRepeat)',
    '힐/전족부 SA 126/99 · 에너지 리턴 53.3/51.5% (RunRepeat). RR 경도는 ENERZY 층26.6HA 구방식이며 현재AC값·힐ENERZY NXT 경도는 미확인입니다. 다른 모델의AC와 직접 비교·환산하지 않습니다.',
    '한국 남성일반·남녀SW 상품을 확인했습니다. RR 내부98.4/73.5/30.9mm는 해외검체의 다른위치 치수이며 한국SW나 발볼110mm를 수용한다는 보증이 아닙니다.',
  ],
  priceAnalysis: {
    msrp: 159000,
    priceTier: 'mid',
    alternatives: [
      'asics-gel-kayano-32',
      'brooks-adrenaline-gts-25',
      'nike-structure-26',
    ],
  },
  reviews: [
    {
      userType: '원문 기반 에디터 분석',
      source: 'editor',
      sourceUrl: 'https://runrepeat.com/mizuno-wave-inspire-21',
      text: '286g과 SA 126/99·에너지 리턴 53.3/51.5%는 해외 실험실 검체의 값이며 기록 향상률·임상 효과가 아닙니다. RR 경도는 ENERZY 층26.6HA 구방식이며 현재AC값·힐ENERZY NXT 경도는 미확인입니다. 다른 모델의AC와 직접 비교·환산하지 않습니다. 한국 남성일반·남녀SW 상품을 확인했습니다. RR 내부98.4/73.5/30.9mm는 해외검체의 다른위치 치수이며 한국SW나 발볼110mm를 수용한다는 보증이 아닙니다.',
    },
    {
      userType: '외부 착화 의견 요약 · Doctors of Running',
      source: 'editor',
      sourceUrl: 'https://www.doctorsofrunning.com/mizuno-wave-inspire-21-review-2025/',
      text: 'DOR의 Matt은 US10에서 길이가 맞고 앞쪽 공간은 넓지만 발등 볼륨이 낮다고 느꼈으며 단단한 카운터 압박을 경험했습니다. 힐은 단단하고 약간 튕기며 앞쪽은 더 부드럽고 유연하다고 평가했습니다. 힐·중족부 Wave plate의 소재와 카본 여부는 이번에 확인하지 못했습니다.',
    },
  ],
  detailedSpecs: {
    weight: '286g (RunRepeat 공시 검체 정책:남성US9). DOR 소개 남성292g(US9)·여성249g(US8),38/26mm·드롭12mm. RR286g·38/25.1mm·12.9mm와구분. RR브랜드칸140g은다른원문과충돌해채택하지않습니다.',
    stackHeight: '38/25.1mm (RunRepeat 힐/전족부 실측)',
    drop: '12.9mm (RunRepeat 실측). 출처별 공시 조건은 무게 항목에 구분.',
    midsole: 'ENERZY 본체 · 힐 ENERZY NXT · Wave plate · 26.6 HA (구방식) · 힐/전족부 SA 126/99 · 에너지 리턴 53.3/51.5%. RR 경도는 ENERZY 층26.6HA 구방식이며 현재AC값·힐ENERZY NXT 경도는 미확인입니다. 다른 모델의AC와 직접 비교·환산하지 않습니다.',
    plate: '확인한 원문 설명에 전장 카본 플레이트는 보고되지 않음',
    width: 'RunRepeat 내부 최광폭 98.4mm / 엄지 부위 73.5mm / 엄지 높이 30.9mm. 한국 남성일반·남녀SW 상품을 확인했습니다. RR 내부98.4/73.5/30.9mm는 해외검체의 다른위치 치수이며 한국SW나 발볼110mm를 수용한다는 보증이 아닙니다.',
    durability: '검증된 공통 수명km 미확인. 짧은 착화·마모 깊이를 수명km로 환산하지 않습니다.',
    price: '현행 한국 공식몰kor.mizuno.com에서 남성일반J1GC254455·남성SW J1GC254503·여성SW J1GD254673 정가159,000원 확인. 확인남성SKU는품절이었고 여성은구매버튼표시만확인해 사이즈별실재고는미확인입니다. SW를2E·4E로매핑하지않습니다.',
  },
  similarShoes: [
    'asics-gel-kayano-33',
    'asics-gel-kayano-32',
    'brooks-adrenaline-gts-25',
  ],
  relatedPosts: [
    {
      slug: 'running-shoe-midsole-foam-guide-2026',
      title: '러닝화 미드솔 폼 읽는 법: 재료·발포 공정·상품명을 구분하자',
    },
  ],
  verification: {
    checkedAt: '2026-11-09',
    scope: '한국 확인SKU의 정가·폭, 해외 실험실 수치·구조·외부 착화 의견을 재확인했습니다. 제품 전체 검증 완료 표지가 아닙니다.',
    sources: [
      {
        label: '한국 공식 men · SW · J1GC254503',
        url: 'https://kor.mizuno.com/product/detail.html?product_no=10618&cate_no=803&display_group=1&mall=sports',
        note: '정가159,000원,확인시점표시판매가111,300원. SKU별재고구분; SW폭코드매핑미확인.',
      },
      {
        label: '한국 공식 men · 일반(별도 SW 표기 없음) · J1GC254455',
        url: 'https://kor.mizuno.com/product/detail.html?product_no=10623&cate_no=803&display_group=1&mall=sports',
        note: '정가159,000원,확인시점표시판매가111,300원. SKU별재고구분; SW폭코드매핑미확인.',
      },
      {
        label: '한국 공식 women · SW (W) · J1GD254673',
        url: 'https://kor.mizuno.com/product/detail.html?cate_no=821&product_no=10072',
        note: '정가159,000원,확인시점표시판매가111,300원. SKU별재고구분; SW폭코드매핑미확인.',
      },
      {
        label: 'RunRepeat 웨이브 인스파이어 21',
        url: 'https://runrepeat.com/mizuno-wave-inspire-21',
        note: '공시 검체 정책:남성US9. 개별 검체SKU·폭은 미확인. 286g · 38/25.1mm · 드롭12.9mm. SA 126/99 · ER 53.3/51.5%. RR 경도는 ENERZY 층26.6HA 구방식이며 현재AC값·힐ENERZY NXT 경도는 미확인입니다. 다른 모델의AC와 직접 비교·환산하지 않습니다.',
      },
      {
        label: 'Doctors of Running 착화 리뷰',
        url: 'https://www.doctorsofrunning.com/mizuno-wave-inspire-21-review-2025/',
        note: 'DOR 소개 남성292g(US9)·여성249g(US8),38/26mm·드롭12mm. RR286g·38/25.1mm·12.9mm와구분. RR브랜드칸140g은다른원문과충돌해채택하지않습니다.',
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
