import type { Shoe } from '@/types/shoe';

// 원문 재확인:2026-11-09. 확인 범위와 한계는 verification 참조.
export const shoe: Shoe = {
  id: 'asics-sonicblast',
  slug: 'asics-sonicblast',
  brand: 'Asics',
  name: '소닉블라스트',
  image: '/images/shoes/asics/sonicblast/1.webp',
  images: [
    '/images/shoes/asics/sonicblast/1.webp',
    '/images/shoes/asics/sonicblast/2.webp',
    '/images/shoes/asics/sonicblast/3.webp',
    '/images/shoes/asics/sonicblast/4.webp',
    '/images/shoes/asics/sonicblast/5.webp',
  ],
  category: '쿠션화',
  price: 229000,
  description: 'FF TURBO SQUARED 상층 + FF BLAST MAX 하층 · Pebax ASTROPLATE 구조의 소닉블라스트. RunRepeat 실험실 검체 255g·45.4/36.4mm. 한국 확인 가격 229,000원.',
  oneliner: 'FF TURBO SQUARED 상층 + FF BLAST MAX 하층 · Pebax ASTROPLATE · 255g (RunRepeat 실험실 검체)',
  editorComment: '2026-11-09 원문 재확인. 한국 남성 1011C083.750·여성 1012B862.020 확인 상품 표시 가격은 229,000원입니다. 남성 255~280mm·290mm, 여성 230~255mm가 선택 가능이었습니다. 남성 250/285mm·여성 260mm는 품절 표시였고 현재 한국 와이드·문자 폭 코드는 미확인입니다. 한국 공시 남성 256g·여성 223g은 측정 사이즈 미표기입니다. 일본 공식 남성 256g은 27cm 한쪽 조건입니다. DOR 소개는 남성 US9 255g, 남성 46/38mm·여성 45/37mm·8mm이며 여성 무게 칸은 오타로 미확인입니다. RR 255g·45.4/36.4mm·9mm와 구분합니다. 한국 원문의 아웃솔 칸은 FF Turbo2/FF Blast Max, 미드솔 칸은 ASICS Grip으로 뒤바뀐 것으로 보입니다. 제조사 일본·캐나다 원문으로 폼과 ASICSGRIP 아웃솔을 대조했고 원문 오류를 감추지 않습니다. 37.5AC·보조39.9AC를 구분하며 전족 접지 0.96·통기 5/5·국소 마모 1.0mm는 모든 노면·계절·500km 수명 보장이 아닙니다. DOR David(남성 US9.5)는 정사이즈·앞발 약간 여유와 얇은 메시·거싯 혀 고정을 좋아했습니다. 느슨한 노력에서는 힐 충격·단단한 중족 전환이 어색했고 빠르게 움직일 때 나아졌다고 적었습니다. Nathan은 본문 실착 US9.5·평소 US9라는 조건이 다르며 어퍼는 편했지만 일상 노력의 강한 중족·토스프링 전환이 맞지 않았다고 느꼈습니다. 이를 공통 최적 페이스로 합치지 않습니다. RR 내부 최광폭 92.8mm·엄지 70.1mm·높이 25.4mm를 개인의 반업 기준으로 만들지 않습니다. 한국 와이드 현재 SKU는 미확인입니다. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.',
  tags: [
    '템포',
    '슈퍼트레이너',
    '고스택',
    'ASTROPLATE',
    '플레이트',
  ],
  specs: {
    weight: 255,
    drop: 9,
  },
  biomechanics: {
    stackHeight: {
      heel: 45.4,
      forefoot: 36.4,
    },
    drop: 9,
    carbonPlate: false,
    plateType: 'three-quarter-length Pebax ASTROPLATE',
    midsoleType: 'FF TURBO SQUARED 상층 + FF BLAST MAX 하층 · Pebax ASTROPLATE',
  },
  koreanFootFit: {
  },
  targetUsers: {
    recommended: [
      'Pebax·이중폼·강한 로커의 전환을 비교하려는 러너',
      '앞코·발등·힐 전환을 실제 규격에서 확인하려는 러너',
    ],
    notRecommended: [
      '직접 착화에서 앞코 압박·전환 불편이 생기는 경우',
      '카본이나 소닉블라스트2로 세대·소재가 혼용된 매물',
    ],
  },
  features: [
    'FF TURBO SQUARED 상층 + FF BLAST MAX 하층 · Pebax ASTROPLATE',
    '255g · 45.4/36.4mm · 드롭 9mm (RunRepeat 실험실 검체)',
    '약 3/4 길이 Pebax ASTROPLATE. 일본 제조사 resin 명칭과 캐나다 공식 PEBAX 설명을 확인했으며 카본으로 표시하지 않습니다.',
    'RR 내부 최광폭 92.8mm·엄지 70.1mm·높이 25.4mm를 개인의 반업 기준으로 만들지 않습니다. 한국 와이드 현재 SKU는 미확인입니다.',
  ],
  priceAnalysis: {
    msrp: 229000,
    priceTier: 'premium',
    alternatives: [
      'asics-superblast-3',
      'asics-megablast',
      'saucony-endorphin-speed-5',
    ],
  },
  detailedSpecs: {
    weight: '255g (RunRepeat 실험실 검체). 한국 공시 남성 256g·여성 223g은 측정 사이즈 미표기입니다. 일본 공식 남성 256g은 27cm 한쪽 조건입니다. DOR 소개는 남성 US9 255g, 남성 46/38mm·여성 45/37mm·8mm이며 여성 무게 칸은 오타로 미확인입니다. RR 255g·45.4/36.4mm·9mm와 구분합니다.',
    stackHeight: '45.4/36.4mm (RunRepeat 실험실 검체, 힐/전족부). 출처별 다른 공시는 무게 항목 참조.',
    drop: '9mm (RunRepeat 실험실 검체). 한국 공시 남성 256g·여성 223g은 측정 사이즈 미표기입니다. 일본 공식 남성 256g은 27cm 한쪽 조건입니다. DOR 소개는 남성 US9 255g, 남성 46/38mm·여성 45/37mm·8mm이며 여성 무게 칸은 오타로 미확인입니다. RR 255g·45.4/36.4mm·9mm와 구분합니다.',
    midsole: 'FF TURBO SQUARED 상층 + FF BLAST MAX 하층 · Pebax ASTROPLATE. 주폼 37.5AC·보조 39.9AC, 힐/전족부 SA 149/133·에너지 리턴 68.9/68.9%. 한국 원문의 아웃솔 칸은 FF Turbo2/FF Blast Max, 미드솔 칸은 ASICS Grip으로 뒤바뀐 것으로 보입니다. 제조사 일본·캐나다 원문으로 폼과 ASICSGRIP 아웃솔을 대조했고 원문 오류를 감추지 않습니다. 37.5AC·보조39.9AC를 구분하며 전족 접지 0.96·통기 5/5·국소 마모 1.0mm는 모든 노면·계절·500km 수명 보장이 아닙니다.',
    plate: '약 3/4 길이 Pebax ASTROPLATE. 일본 제조사 resin 명칭과 캐나다 공식 PEBAX 설명을 확인했으며 카본으로 표시하지 않습니다.',
    width: 'RR 내부 최광폭 92.8mm·엄지 부위 70.1mm·높이 25.4mm. RR 내부 최광폭 92.8mm·엄지 70.1mm·높이 25.4mm를 개인의 반업 기준으로 만들지 않습니다. 한국 와이드 현재 SKU는 미확인입니다.',
    durability: '검증된 공통 수명 km 미확인. 국소 마모·짧은 착화 후기를 주행 수명으로 환산하지 않습니다.',
    price: '한국 남성 1011C083.750·여성 1012B862.020 확인 상품 표시 가격은 229,000원입니다. 남성 255~280mm·290mm, 여성 230~255mm가 선택 가능이었습니다. 남성 250/285mm·여성 260mm는 품절 표시였고 현재 한국 와이드·문자 폭 코드는 미확인입니다.',
  },
  reviews: [
    {
      userType: '원문 기반 에디터 분석',
      source: 'editor',
      sourceUrl: 'https://runrepeat.com/asics-sonicblast',
      text: '한국 공시 남성 256g·여성 223g은 측정 사이즈 미표기입니다. 일본 공식 남성 256g은 27cm 한쪽 조건입니다. DOR 소개는 남성 US9 255g, 남성 46/38mm·여성 45/37mm·8mm이며 여성 무게 칸은 오타로 미확인입니다. RR 255g·45.4/36.4mm·9mm와 구분합니다. 한국 원문의 아웃솔 칸은 FF Turbo2/FF Blast Max, 미드솔 칸은 ASICS Grip으로 뒤바뀐 것으로 보입니다. 제조사 일본·캐나다 원문으로 폼과 ASICSGRIP 아웃솔을 대조했고 원문 오류를 감추지 않습니다. 37.5AC·보조39.9AC를 구분하며 전족 접지 0.96·통기 5/5·국소 마모 1.0mm는 모든 노면·계절·500km 수명 보장이 아닙니다.',
    },
    {
      userType: '외부 착화 의견 요약 · Doctors of Running',
      source: 'editor',
      sourceUrl: 'https://www.doctorsofrunning.com/asics-sonicblast-review-2025/',
      text: 'DOR David(남성 US9.5)는 정사이즈·앞발 약간 여유와 얇은 메시·거싯 혀 고정을 좋아했습니다. 느슨한 노력에서는 힐 충격·단단한 중족 전환이 어색했고 빠르게 움직일 때 나아졌다고 적었습니다. Nathan은 본문 실착 US9.5·평소 US9라는 조건이 다르며 어퍼는 편했지만 일상 노력의 강한 중족·토스프링 전환이 맞지 않았다고 느꼈습니다. 이를 공통 최적 페이스로 합치지 않습니다.',
    },
  ],
  similarShoes: [
    'asics-sonicblast-2',
    'asics-superblast-3',
    'asics-megablast',
    'saucony-endorphin-speed-5',
  ],
  purchaseLinks: [
    {
      store: '쿠팡',
      url: 'https://link.coupang.com/a/g5YwYegQXQ',
    },
  ],
  relatedPosts: [
    {
      slug: 'asics-sonicblast-review-2026',
      title: '아식스 소닉블라스트 후기',
    },
    {
      slug: 'running-shoe-plate-guide-2026',
      title: '플레이트 완전 해설 — 카본·유리섬유·나일론',
    },
  ],
  verification: {
    checkedAt: '2026-11-09',
    scope: '한국 상품 조건, 해외 실험실·제조사 공시와 외부 착화 의견의 확인 범위를 구분했습니다. 제품 전체 검증 완료 표지가 아닙니다.',
    sources: [
      {
        label: '한국 men · 1011C083.750',
        url: 'https://asics.co.kr/p/20665',
        note: '확인 가격 229,000원. 색상·사이즈별 상태는 본문 참조.',
      },
      {
        label: '한국 women · 1012B862.020',
        url: 'https://www.asics.co.kr/p/21004',
        note: '확인 가격 229,000원. 색상·사이즈별 상태는 본문 참조.',
      },
      {
        label: 'ASICS 동세대 공식 구조 원문',
        url: 'https://corp.asics.com/jp/press/article/2025-08-13_tokyo-collection',
        note: 'Original Sonicblast model1011C083/1012B862: topFF TURBO SQUARED/lowerFF BLAST MAX, ASTROPLATE resin plate, ASICSGRIP,256g at27.0cm one shoe. Japan timing/price not Korean MSRP.',
      },
      {
        label: 'ASICS 동세대 공식 구조 원문',
        url: 'https://www.asics.com/ca/en-ca/sonicblast-1011c083-100',
        note: 'Original1011C083.100: explicitly PEBAX plate, two-layer FF TURBO SQUARED/FF BLAST MAX,ASICSGRIP. No foreign price conversion.',
      },
      {
        label: 'RunRepeat 동세대 실험실 원문',
        url: 'https://runrepeat.com/asics-sonicblast',
        note: '공시 일반 검체 정책은 남성 US9. 실제 검체 라벨·폭 미확인. 255g·45.4/36.4mm·9mm. 한국 원문의 아웃솔 칸은 FF Turbo2/FF Blast Max, 미드솔 칸은 ASICS Grip으로 뒤바뀐 것으로 보입니다. 제조사 일본·캐나다 원문으로 폼과 ASICSGRIP 아웃솔을 대조했고 원문 오류를 감추지 않습니다. 37.5AC·보조39.9AC를 구분하며 전족 접지 0.96·통기 5/5·국소 마모 1.0mm는 모든 노면·계절·500km 수명 보장이 아닙니다.',
      },
      {
        label: 'Doctors of Running 동세대 원문',
        url: 'https://www.doctorsofrunning.com/asics-sonicblast-review-2025/',
        note: '한국 공시 남성 256g·여성 223g은 측정 사이즈 미표기입니다. 일본 공식 남성 256g은 27cm 한쪽 조건입니다. DOR 소개는 남성 US9 255g, 남성 46/38mm·여성 45/37mm·8mm이며 여성 무게 칸은 오타로 미확인입니다. RR 255g·45.4/36.4mm·9mm와 구분합니다.',
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
