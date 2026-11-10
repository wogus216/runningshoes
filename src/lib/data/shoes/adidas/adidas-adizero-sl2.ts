import type { Shoe } from '@/types/shoe';

// 원문 재확인:2026-11-09. 명시한 범위와 한계는 verification 참조.
export const shoe: Shoe = {
  id: 'adidas-adizero-sl2',
  slug: 'adidas-adizero-sl2',
  brand: 'Adidas',
  name: '아디제로 SL2',
  image: '/images/shoes/adidas/adizerosl2.webp',
  images: [
    '/images/shoes/adidas/adizerosl2.webp',
    '/images/shoes/adidas/adizerosl2/side.webp',
    '/images/shoes/adidas/adizerosl2/back.webp',
  ],
  category: '데일리',
  price: 149000,
  description: 'Lightstrike 2.0 외피 · 전장 Lightstrike Pro 인서트 · 비플레이트 구조의 아디제로 SL2. 실험실 245g·힐/전족부 34.9/26.7mm. 한국 확인 정가149,000원.',
  oneliner: '245g 실험실 무게 · Lightstrike 2.0 외피 · 전장 Lightstrike Pro 인서트 · 비플레이트',
  editorComment: '2026-11-09 원문 재확인. 한국 공식 여성 레귤러 JI2994·남성 레귤러 JQ0354·남성 와이드 JI2986 정가149,000원. 확인 시 표시할인가104,300원은 행사·SKU·시점 조건이며 앱 추가할인 최종가는 계산하지 않았습니다. 여성·남성 와이드 일부 사이즈 선택 가능, 남성 레귤러 정확한 현재 사이즈는 미확인입니다. 한국 공시 여성206g(240mm)·35/26mm·드롭9mm, 남성 와이드238g(270mm)·36/27mm·9mm, 남성 레귤러238g(270mm)·36/26mm·10mm. DOR 소개236g(남성US9)·210g(여성US8),36/26mm·10mm와 RR245g·34.9/26.7mm·8.2mm는 조건을 나눠 보세요. RR 주폼36.8AC와 보조폼35.6AC는 위치가 다릅니다. 공식SKU 드롭9/10mm와 RR8.2mm, RR 통기시험5/5와 리뷰어 열감, 사이즈 업 투표와 Matt 정사이즈 의견을 하나로 단정하지 않습니다. DOR의 Matt(남성US10)은 길이가 맞지만 낮고 조이는 볼륨·앞코 테이퍼·따뜻하고 거친 메쉬·회전 중 혀 이동을 언급했습니다. 반응과 유연한 전족부는 데일리·빠른 훈련에 활용할 수 있다고 평가했지만 안정형 중립화로 분류하지는 않았습니다. 개인의40마일 마모 관찰을 수명km로 바꾸지 않습니다. 한국 남성 와이드 JI2986을 확인했습니다. 여성 와이드·전 사이즈 재고를 확인한 것은 아닙니다. RR 내부 최광폭98.3mm·엄지71.7mm·높이26.2mm는 같은 부위의 값이 아닙니다. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.',
  tags: [
    '데일리',
    '템포',
    '경량',
  ],
  specs: {
    weight: 245,
    cushioning: 8,
    responsiveness: 7,
    stability: 7,
    drop: 8.2,
  },
  biomechanics: {
    stackHeight: {
      heel: 34.9,
      forefoot: 26.7,
    },
    drop: 8.2,
    carbonPlate: false,
    plateType: null,
    midsoleType: 'Lightstrike 2.0 외피 · 전장 Lightstrike Pro 인서트 · 비플레이트',
  },
  koreanFootFit: {
    toBoxWidth: 'standard',
    wideOptions: true,
  },
  targetUsers: {
    recommended: [
      '이중폼 비플레이트의 유연한 전환을 비교하려는 러너',
      '남성 와이드의 실제 고정과 앞코 볼륨을 확인하려는 러너',
    ],
    notRecommended: [
      '혀 이동·거친 메쉬·앞쪽 압박이 불편한 경우',
      '직접 착화에서 중족부 고정이 맞지 않는 경우',
    ],
  },
  features: [
    'Lightstrike 2.0 외피 · 전장 Lightstrike Pro 인서트 · 비플레이트',
    '245g · 힐/전족부 34.9/26.7mm (RunRepeat)',
    '힐/전족부 SA 136/107 · 에너지 리턴 56.1/64.3% (RunRepeat). RR 주폼36.8AC와 보조폼35.6AC는 위치가 다릅니다. 공식SKU 드롭9/10mm와 RR8.2mm, RR 통기시험5/5와 리뷰어 열감, 사이즈 업 투표와 Matt 정사이즈 의견을 하나로 단정하지 않습니다.',
    '한국 남성 와이드 JI2986을 확인했습니다. 여성 와이드·전 사이즈 재고를 확인한 것은 아닙니다. RR 내부 최광폭98.3mm·엄지71.7mm·높이26.2mm는 같은 부위의 값이 아닙니다.',
  ],
  priceAnalysis: {
    msrp: 149000,
    priceTier: 'mid',
    alternatives: [
      'nike-rival-fly-4',
      'saucony-kinvara-16',
    ],
  },
  detailedSpecs: {
    weight: '245g (RunRepeat 공시 검체 정책:남성US9). 한국 공시 여성206g(240mm)·35/26mm·드롭9mm, 남성 와이드238g(270mm)·36/27mm·9mm, 남성 레귤러238g(270mm)·36/26mm·10mm. DOR 소개236g(남성US9)·210g(여성US8),36/26mm·10mm와 RR245g·34.9/26.7mm·8.2mm는 조건을 나눠 보세요.',
    stackHeight: '34.9/26.7mm (RunRepeat 힐/전족부 실측)',
    drop: '8.2mm (RunRepeat 실측). 출처별 공시 조건은 무게 항목에 구분.',
    midsole: 'Lightstrike 2.0 외피 · 전장 Lightstrike Pro 인서트 · 비플레이트 · 36.8 AC(Asker C) · 힐/전족부 SA 136/107 · 에너지 리턴 56.1/64.3%. RR 주폼36.8AC와 보조폼35.6AC는 위치가 다릅니다. 공식SKU 드롭9/10mm와 RR8.2mm, RR 통기시험5/5와 리뷰어 열감, 사이즈 업 투표와 Matt 정사이즈 의견을 하나로 단정하지 않습니다.',
    plate: 'RR 원문은 플레이트·EnergyRods 없음으로 설명합니다. 고무는 Continental로 표시하지 않습니다.',
    width: 'RunRepeat 내부 최광폭 98.3mm / 엄지 부위 71.7mm / 엄지 높이 26.2mm. 한국 남성 와이드 JI2986을 확인했습니다. 여성 와이드·전 사이즈 재고를 확인한 것은 아닙니다. RR 내부 최광폭98.3mm·엄지71.7mm·높이26.2mm는 같은 부위의 값이 아닙니다.',
    durability: '검증된 공통 수명km 미확인. 짧은 착화·마모 깊이를 수명km로 환산하지 않습니다.',
    price: '한국 공식 여성 레귤러 JI2994·남성 레귤러 JQ0354·남성 와이드 JI2986 정가149,000원. 확인 시 표시할인가104,300원은 행사·SKU·시점 조건이며 앱 추가할인 최종가는 계산하지 않았습니다. 여성·남성 와이드 일부 사이즈 선택 가능, 남성 레귤러 정확한 현재 사이즈는 미확인입니다.',
  },
  reviews: [
    {
      userType: '원문 기반 에디터 분석',
      source: 'editor',
      sourceUrl: 'https://runrepeat.com/adidas-adizero-sl2',
      text: '245g과 SA 136/107·에너지 리턴 56.1/64.3%는 해외 실험실 검체의 값이며 기록 향상률·임상 효과가 아닙니다. RR 주폼36.8AC와 보조폼35.6AC는 위치가 다릅니다. 공식SKU 드롭9/10mm와 RR8.2mm, RR 통기시험5/5와 리뷰어 열감, 사이즈 업 투표와 Matt 정사이즈 의견을 하나로 단정하지 않습니다. 한국 남성 와이드 JI2986을 확인했습니다. 여성 와이드·전 사이즈 재고를 확인한 것은 아닙니다. RR 내부 최광폭98.3mm·엄지71.7mm·높이26.2mm는 같은 부위의 값이 아닙니다.',
    },
    {
      userType: '외부 착화 의견 요약 · Doctors of Running',
      source: 'editor',
      sourceUrl: 'https://www.doctorsofrunning.com/adidas-adizero-sl-2-review-2024/',
      text: 'DOR의 Matt(남성US10)은 길이가 맞지만 낮고 조이는 볼륨·앞코 테이퍼·따뜻하고 거친 메쉬·회전 중 혀 이동을 언급했습니다. 반응과 유연한 전족부는 데일리·빠른 훈련에 활용할 수 있다고 평가했지만 안정형 중립화로 분류하지는 않았습니다. 개인의40마일 마모 관찰을 수명km로 바꾸지 않습니다.',
    },
  ],
  similarShoes: [
    'nike-rival-fly-4',
    'saucony-kinvara-16',
  ],
  purchaseLinks: [
    {
      store: '네이버',
      url: 'https://naver.me/FE3AfoAm',
    },
  ],
  verification: {
    checkedAt: '2026-11-09',
    scope: '한국 확인SKU의 정가·폭, 해외 실험실 수치·구조·외부 착화 의견을 재확인했습니다. 제품 전체 검증 완료 표지가 아닙니다.',
    sources: [
      {
        label: '한국 공식 women · regular · JI2994',
        url: 'https://www.adidas.co.kr/%EC%95%84%EB%94%94%EC%A0%9C%EB%A1%9C-sl2/JI2994.html',
        note: '한국 공식 여성 레귤러 JI2994·남성 레귤러 JQ0354·남성 와이드 JI2986 정가149,000원. 확인 시 표시할인가104,300원은 행사·SKU·시점 조건이며 앱 추가할인 최종가는 계산하지 않았습니다. 여성·남성 와이드 일부 사이즈 선택 가능, 남성 레귤러 정확한 현재 사이즈는 미확인입니다.',
      },
      {
        label: '한국 공식 men · wide · JI2986',
        url: 'https://www.adidas.co.kr/%EC%95%84%EB%94%94%EC%A0%9C%EB%A1%9C-sl2-%EC%99%80%EC%9D%B4%EB%93%9C/JI2986.html',
        note: '한국 공식 여성 레귤러 JI2994·남성 레귤러 JQ0354·남성 와이드 JI2986 정가149,000원. 확인 시 표시할인가104,300원은 행사·SKU·시점 조건이며 앱 추가할인 최종가는 계산하지 않았습니다. 여성·남성 와이드 일부 사이즈 선택 가능, 남성 레귤러 정확한 현재 사이즈는 미확인입니다.',
      },
      {
        label: '한국 공식 men · regular · JQ0354',
        url: 'https://www.adidas.co.kr/%EC%95%84%EB%94%94%EC%A0%9C%EB%A1%9C-sl-2/JQ0354.html',
        note: '한국 공식 여성 레귤러 JI2994·남성 레귤러 JQ0354·남성 와이드 JI2986 정가149,000원. 확인 시 표시할인가104,300원은 행사·SKU·시점 조건이며 앱 추가할인 최종가는 계산하지 않았습니다. 여성·남성 와이드 일부 사이즈 선택 가능, 남성 레귤러 정확한 현재 사이즈는 미확인입니다.',
      },
      {
        label: 'RunRepeat 아디제로 SL2',
        url: 'https://runrepeat.com/adidas-adizero-sl2',
        note: '공시 검체 정책:남성US9. 개별 검체SKU·폭은 미확인. 245g · 34.9/26.7mm · 드롭8.2mm. SA 136/107 · ER 56.1/64.3%. RR 주폼36.8AC와 보조폼35.6AC는 위치가 다릅니다. 공식SKU 드롭9/10mm와 RR8.2mm, RR 통기시험5/5와 리뷰어 열감, 사이즈 업 투표와 Matt 정사이즈 의견을 하나로 단정하지 않습니다.',
      },
      {
        label: 'Doctors of Running 착화 리뷰',
        url: 'https://www.doctorsofrunning.com/adidas-adizero-sl-2-review-2024/',
        note: '한국 공시 여성206g(240mm)·35/26mm·드롭9mm, 남성 와이드238g(270mm)·36/27mm·9mm, 남성 레귤러238g(270mm)·36/26mm·10mm. DOR 소개236g(남성US9)·210g(여성US8),36/26mm·10mm와 RR245g·34.9/26.7mm·8.2mm는 조건을 나눠 보세요.',
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
