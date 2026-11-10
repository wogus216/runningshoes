import type { Shoe } from '@/types/shoe';

// 원문 재확인:2026-11-09. 명시한 범위와 한계는 verification 참조.
export const shoe: Shoe = {
  id: 'hoka-rocket-x-3',
  slug: 'hoka-rocket-x-3',
  brand: 'Hoka',
  name: '로켓 X 3',
  image: '/images/shoes/hoka/rocketX3/side.webp',
  images: [
    '/images/shoes/hoka/rocketX3/side.webp',
    '/images/shoes/hoka/rocketX3/front.webp',
    '/images/shoes/hoka/rocketX3/top.webp',
    '/images/shoes/hoka/rocketX3/outsole.webp',
  ],
  category: '레이싱',
  price: 299000,
  description: "이중 PEBA · 날개형 전장 카본 구조의 로켓 X 3. 실험실 220g·힐/전족부 39.6/29.6mm. 한국 확인 정가 299,000원.",
  oneliner: '220g 실험실 무게 · 이중 PEBA · 날개형 전장 카본',
  editorComment: "2026-11-09 원문 재확인. 호카 코리아 공식 연결스토어 남녀공용 1168724-SNLG 할인전 299,000원·확인 당시 판매가 164,450원.250~290mm(5mm 간격)·300mm 선택 가능,230~245mm·295mm 는품절 표시였습니다. 한국 현재 와이드·문자폭코드는미확인이며 실결제 재고를 보장하지 않습니다. DOR 소개 210g(남성 US9/여성 US10.5)·40/33mm·드롭 7mm. RR220g·39.6/29.6mm·10.0mm 와구분하고 공시와실측을 평균내지 않습니다. RR 주폼 34.3AC·보조 35.0AC 를구분합니다. 국소 Dremel0.9mm 와 DOR 노출폼초기마모는부위·조건이 다릅니다. 저온변화 3% 를한국 겨울 내내 동일한 착화 보장으로,다른 폼 450km연구를 이 모델 300km수명으로 전용하지 않습니다. DOR Matt(남성 US10)은 길이가 맞고 밀착되는중간볼륨,비거싯 혀 정리와 양말 필요성을 언급했습니다. Andrea(본문여성 US9.5/남성 8.5표기)는 앞쪽과 고정은 만족했으나 본인의 안쪽 전족 이동이 방해되고 발목·건 통증이 반복돼 사용을 중단했습니다. Matt이선호한 유도와 Andrea불편을 한 문장으로 합치거나 모든 러너의 질환 위험으로 일반화하지 않습니다. 한국 현재 와이드 SKU 는미확인입니다. RR 내부 최광폭 92.0mm·엄지 70.0mm·높이 26.9mm 와리뷰어의발가락공간체감은 다른측정·개인조건입니다. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.",
  tags: [
    '레이싱',
    '카본 플레이트',
    'PEBA 폼',
  ],
  specs: {
    weight: 220,
    cushioning: 10,
    responsiveness: 10,
    stability: 6,
    drop: 10,
  },
  biomechanics: {
    stackHeight: {
      heel: 39.6,
      forefoot: 29.6,
    },
    drop: 10,
    carbonPlate: true,
    plateType: 'full-length winged carbon plate',
    midsoleType: '이중 PEBA · 날개형 전장 카본',
  },
  koreanFootFit: {
    toBoxWidth: 'narrow',
  },
  targetUsers: {
    recommended: [
      "날개형카본과 로커전환을 시착 비교하려는 러너",
      '앞쪽고정·혀·안쪽전환이자신에게맞는지확인하려는러너',
    ],
    notRecommended: [
      "직접 착화에서발목·건통증이나반복불편이생기는경우",
      '혀고정·안쪽전환이자신에게맞지않는경우',
    ],
  },
  features: [
    '이중 PEBA · 날개형 전장 카본',
    '220g · 힐/전족부 39.6/29.6mm (RunRepeat)',
    "힐/전족부 SA 155/112 · 에너지 리턴 73.9/78% (RunRepeat). RR 주폼 34.3AC·보조 35.0AC 를구분합니다. 국소 Dremel0.9mm 와 DOR 노출폼초기마모는부위·조건이 다릅니다. 저온변화 3% 를한국 겨울 내내 동일한 착화 보장으로,다른 폼 450km연구를 이 모델 300km수명으로 전용하지 않습니다.",
    "한국 현재 와이드 SKU 는미확인입니다. RR 내부 최광폭 92.0mm·엄지 70.0mm·높이 26.9mm 와리뷰어의발가락공간체감은 다른측정·개인조건입니다.",
  ],
  priceAnalysis: {
    msrp: 299000,
    priceTier: 'premium',
    alternatives: [
      'nike-alphafly-3',
      'asics-metaspeed-sky-plus',
      'new-balance-sc-elite-v5',
    ],
  },
  reviews: [
    {
      userType: '원문 기반 에디터 분석',
      source: 'editor',
      sourceUrl: 'https://runrepeat.com/hoka-rocket-x-3',
      text: "220g 과 SA 155/112·에너지 리턴 73.9/78% 는 해외 실험실 검체의 값이며 기록 향상률·임상 효과가 아닙니다. RR 주폼 34.3AC·보조 35.0AC 를구분합니다. 국소 Dremel0.9mm 와 DOR 노출폼초기마모는부위·조건이 다릅니다. 저온변화 3% 를한국 겨울 내내 동일한 착화 보장으로,다른 폼 450km연구를 이 모델 300km수명으로 전용하지 않습니다. 한국 현재 와이드 SKU 는미확인입니다. RR 내부 최광폭 92.0mm·엄지 70.0mm·높이 26.9mm 와리뷰어의발가락공간체감은 다른측정·개인조건입니다.",
    },
    {
      userType: '외부 착화 의견 요약 · Doctors of Running',
      source: 'editor',
      sourceUrl: 'https://www.doctorsofrunning.com/hoka-rocket-x-3-review-2025/',
      text: "DOR Matt(남성 US10)은 길이가 맞고 밀착되는중간볼륨,비거싯 혀 정리와 양말 필요성을 언급했습니다. Andrea(본문여성 US9.5/남성 8.5표기)는 앞쪽과 고정은 만족했으나 본인의 안쪽 전족 이동이 방해되고 발목·건 통증이 반복돼 사용을 중단했습니다. Matt이선호한 유도와 Andrea불편을 한 문장으로 합치거나 모든 러너의 질환 위험으로 일반화하지 않습니다.",
    },
  ],
  detailedSpecs: {
    weight: "220g (RunRepeat 공시 검체 정책:남성 US9). DOR 소개 210g(남성 US9/여성 US10.5)·40/33mm·드롭 7mm. RR220g·39.6/29.6mm·10.0mm 와구분하고 공시와실측을 평균내지 않습니다.",
    stackHeight: '39.6/29.6mm (RunRepeat 힐/전족부 실측)',
    drop: '10mm (RunRepeat 실측). 출처별 공시 조건은 무게 항목에 구분.',
    midsole: "이중 PEBA · 날개형 전장 카본 · 34.3 AC(Asker C) · 힐/전족부 SA 155/112 · 에너지 리턴 73.9/78%. RR 주폼 34.3AC·보조 35.0AC 를구분합니다. 국소 Dremel0.9mm 와 DOR 노출폼초기마모는부위·조건이 다릅니다. 저온변화 3% 를한국 겨울 내내 동일한 착화 보장으로,다른 폼 450km연구를 이 모델 300km수명으로 전용하지 않습니다.",
    plate: "2층 PEBA 사이의 날개형 전장 카본. 포크형 판재와 구분하며 지지구조를 임상등급으로 쓰지 않습니다.",
    width: "RunRepeat 내부 최광폭 92mm / 엄지 부위 70mm / 엄지 높이 26.9mm. 한국 현재 와이드 SKU 는미확인입니다. RR 내부 최광폭 92.0mm·엄지 70.0mm·높이 26.9mm 와리뷰어의발가락공간체감은 다른측정·개인조건입니다.",
    durability: "검증된 공통 수명 km 미확인. 짧은 착화·마모 깊이를 수명 km로 환산하지 않습니다.",
    price: "호카 코리아 공식 연결스토어 남녀공용 1168724-SNLG 할인전 299,000원·확인 당시 판매가 164,450원.250~290mm(5mm 간격)·300mm 선택 가능,230~245mm·295mm 는품절 표시였습니다. 한국 현재 와이드·문자폭코드는미확인이며 실결제 재고를 보장하지 않습니다.",
  },
  similarShoes: [
    'nike-alphafly-3',
    'asics-metaspeed-sky-plus',
    'new-balance-sc-elite-v5',
    'saucony-endorphin-pro-4',
  ],
  relatedPosts: [
    {
      slug: 'running-shoe-plate-guide-2026',
      title: '플레이트 완전 해설 — 카본·유리섬유·나일론',
    },
  ],
  purchaseLinks: [
    {
      store: '쿠팡',
      url: 'https://link.coupang.com/a/h6ZefnQHq8',
    },
  ],
  verification: {
    checkedAt: '2026-11-09',
    scope: "한국 확인 SKU 의 정가·폭, 해외 실험실 수치·구조·외부 착화 의견을 재확인했습니다. 제품 전체 검증 완료 표지가 아닙니다.",
    sources: [
      {
        label: '호카 코리아 공식 스토어 연결',
        url: 'https://linktr.ee/hoka_korea',
        note: "이번 live에서 brand.naver.com/hoka연결을재확인했습니다.",
      },
      {
        label: '한국 공식 unisex · null · 1168724-SNLG',
        url: 'https://brand.naver.com/hoka/products/12280100916',
        note: "호카 코리아 공식 연결스토어 남녀공용 1168724-SNLG 할인전 299,000원·확인 당시 판매가 164,450원.250~290mm(5mm 간격)·300mm 선택 가능,230~245mm·295mm 는품절 표시였습니다. 한국 현재 와이드·문자폭코드는미확인이며 실결제 재고를 보장하지 않습니다.",
      },
      {
        label: 'RunRepeat 로켓 X 3',
        url: 'https://runrepeat.com/hoka-rocket-x-3',
        note: "공시 검체 정책:남성 US9. 개별 검체 SKU·폭은 미확인. 220g · 39.6/29.6mm · 드롭 10mm. SA 155/112 · ER 73.9/78%. RR 주폼 34.3AC·보조 35.0AC 를구분합니다. 국소 Dremel0.9mm 와 DOR 노출폼초기마모는부위·조건이 다릅니다. 저온변화 3% 를한국 겨울 내내 동일한 착화 보장으로,다른 폼 450km연구를 이 모델 300km수명으로 전용하지 않습니다.",
      },
      {
        label: 'Doctors of Running 착화 리뷰',
        url: 'https://www.doctorsofrunning.com/hoka-rocket-x-3-review-2025/',
        note: "DOR 소개 210g(남성 US9/여성 US10.5)·40/33mm·드롭 7mm. RR220g·39.6/29.6mm·10.0mm 와구분하고 공시와실측을 평균내지 않습니다.",
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
