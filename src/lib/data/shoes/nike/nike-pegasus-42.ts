import type { Shoe } from '@/types/shoe';

export const shoe: Shoe = {
  id: 'nike-pegasus-42',
  slug: 'nike-pegasus-42',
  brand: 'Nike',
  name: '페가수스 42',
  image: '/images/shoes/nike/pegasus42/side.webp',
  images: [
    '/images/shoes/nike/pegasus42/side.webp',
    '/images/shoes/nike/pegasus42/angle.webp',
    '/images/shoes/nike/pegasus42/back.webp',
    '/images/shoes/nike/pegasus42/front.webp',
    '/images/shoes/nike/pegasus42/outsole.webp',
  ],
  category: '입문화',
  rating: 4,
  price: 169000,
  description: '페가수스 시리즈의 42번째 버전. 풀 렝스 Air Zoom 유닛과 힐 스택 +2.4mm(실측) 증가로 힐 쿠셔닝이 개선됐고, 169,000원에 한국 와이드 옵션까지 정식 출시된 데일리 입문화입니다.',
  oneliner: '16만원대 풀 렝스 Air Zoom + 와이드 옵션, 한국 입문화 가성비 최상위',
  editorComment: '2026-04-25 RunRepeat 랩 데이터 게시로 추정에서 실측 기반으로 업데이트했습니다. 핵심 사실: ① 힐 스택 33.6→36mm(실측, +2.4mm)와 힐 SA 125→131(+6)로 힐 착지 부드러움은 확실히 개선됐고, ② 그러나 나이키 공식 "에너지 리턴 +15%"는 실측 힐 55.5%→57.1%(+1.6%p) / 전족부 61.4%→61.2%(±0)로 사실상 마케팅 수준이며, ③ 공식 스펙 전족부 27mm/드롭 10mm vs RunRepeat 실측 22mm/14mm로 5mm 불일치가 확인됐습니다. ④ 토박스도 "확대" 주장과 달리 41(72.9mm) 대비 72.3mm로 실측은 비슷하지만, 한국 와이드 옵션이 정식 출시(남성·여성 모두 169,000원)되어 발볼 4E급도 기본 SKU로 안전하게 갈 수 있게 된 게 한국 러너 관점의 진짜 개선입니다. BITR은 B티어(Design A / Value A / Performance C, "6-13km 스윗스팟의 원 트릭 포니"), RTR은 8.79/10("더 부드럽지만 286g 무게 열세")으로 평가했습니다. 169,000원 + 와이드 + 풀 렝스 Air Zoom 조합은 동급(노바블라스트 5, 클리프턴 10) 대비 가성비 우위지만, 페이스 훈련이나 하프 이상 롱런에는 보메로 18이나 줌 플라이 6을 분리하세요.\n\n사이즈·구매 가이드: 토박스가 표준 폭이라 발볼이 보통인 러너에게 맞고, 광폭이면 한국 공식 출시된 와이드 옵션(동일 169,000원)을 선택하세요. 정가 169,000원에 내구성 600km 기준 km당 약 282원입니다. 같은 입문화 카테고리로는 페가수스 41·클리프톤 10이 대안입니다.',
  tags: ['입문화', '데일리 러닝', 'Air Zoom', '2026 신상', '와이드 옵션'],

  specs: {
    weight: 286,
    cushioning: 8,
    responsiveness: 7,
    stability: 7,
    drop: 10,
    durability: 600,
  },

  biomechanics: {
    stackHeight: {
      heel: 37,
      forefoot: 27,
    },
    drop: 10,
    carbonPlate: false,
    plateType: null,
    midsoleType: 'ReactX Foam + 풀 렝스 Air Zoom',
    optimalPace: '5:00-7:00 min/km',
  },

  injuryPrevention: {
    plantarFasciitis: 'excellent',
    achillesTendinopathy: 'excellent',
    kneeIssues: 'good',
    shinSplints: 'excellent',
  },

  koreanFootFit: {
    toBoxWidth: 'standard',
    flatFootCompatibility: 'good',
    wideOptions: true,
    winterCompatibility: 'good',
    summerCompatibility: 'fair',
  },

  targetUsers: {
    recommended: ['러닝 입문자 (쿠셔닝 + 안정성 균형)', '일상 5-13km 데일리 트레이닝', '페가수스 41 업그레이드 원하는 러너', '발볼 넓어 와이드 SKU 필요한 러너 (정식 출시)', '무릎 보호 원하는 뒤꿈치 착지 러너', '가성비 좋은 올라운더 찾는 분'],
    notRecommended: ['하프마라톤 이상 롱런 위주 러너', '스피드/템포 훈련 전용화 필요', '초경량 레이싱화 찾는 분', '주 100km+ 고볼륨 훈련 러너', '강한 반발력 슈퍼슈즈 원하는 상급자'],
  },

  features: ['풀 렝스 곡선형 Air Zoom 유닛 (전작 듀얼 포드 개선)', '36mm 힐 스택 실측 (41 대비 +2.4mm 부드러움)', '한국 와이드 옵션 정식 출시 (남성·여성)', 'ReactX 폼 + 워플 아웃솔 (그립력 개선)', 'BITR Value A등급 (16만원대 가성비 최상위)'],

  priceAnalysis: {
    msrp: 169000,
    streetPrice: 145000,
    costPerKm: 282,
    valueRating: 8,
    priceTier: 'mid',
    alternatives: ['nike-pegasus-41', 'asics-gel-nimbus-28', 'new-balance-880-v15', 'hoka-clifton-10'],
  },

  reviews: [
    {
      userType: '에디터 분석',
      rating: 80,
      text: '페가수스 42는 2026-04-25 RunRepeat 랩 데이터 공개로 변화의 실체가 드러난 버전입니다. 핵심은 "힐은 진짜 개선, 전족부는 마케팅". 힐 스택이 33.6→36mm(실측, +2.4mm) 늘고 힐 SA가 125→131(+6)로 부드러워졌으며, ReactX 폼 + 풀 렝스 Air Zoom 조합이 41의 듀얼 포드 대비 안정적인 힐 착지를 만듭니다. 그러나 나이키가 강조한 "에너지 리턴 +15%"는 실측 기준 힐 +1.6%p / 전족부 0%p로 사실상 마케팅 수준이고, 공식 스펙 전족부 27mm/드롭 10mm vs RunRepeat 실측 22mm/14mm의 5mm 불일치도 확인됐습니다. 한국 러너 입장에서 진짜 의미 있는 변화는 두 가지: ① 169,000원에 한국 와이드 옵션이 남성·여성 모두 정식 출시되어 발볼 4E급도 기본 SKU로 안전하게 갈 수 있고, ② 36mm 힐 스택 + ReactX + Air Zoom 조합이 한강 아스팔트 5-10km 데일리에서 무릎 보호를 41보다 확실하게 잡아준다는 점입니다. BITR은 B티어(Design A / Value A / Performance C, "원 트릭 포니, 6-13km 스윗스팟"), RTR은 8.79/10("더 부드럽지만 286g 무게 열세")으로 평가하며 둘 다 "입문급 데일리 트레이너 가성비 최상위"라는 포지션에 동의했습니다. 286g 무게와 평범한 에너지 리턴 때문에 페이스 훈련이나 하프 이상 롱런은 부적합하므로, 데일리 입문화 1켤레로 16만원대 가성비를 원하면 페가수스 42, 같은 가격대에서 더 가벼운 반발감을 원하면 노바블라스트 5나 페가수스 플러스를 고려하세요.',
    },
    {
      userType: '41 업그레이드 러너',
      rating: 4,
      text: '2년 전 페가수스 41 (270mm)을 600km까지 굴리다가 42로 갈아탔습니다. 첫인상은 "전족부가 확실히 살아있다"입니다. 41은 뒤꿈치 중심 쿠션이고 포어풋은 상대적으로 퍽퍽했는데, 42는 풀 렝스 Air Zoom 덕분에 중족~전족부 착지에서도 반발감이 느껴져요. 5km 이지런은 41보다 확실히 가볍게 뛰어집니다. 다만 10km 넘어가면 286g 무게가 느껴지는 건 여전해요. 가격은 1만원 올랐지만 Air Zoom 풀렝스 구조 감안하면 납득 가능한 수준이고, 37mm 하이스택이 아스팔트 무릎 충격을 잘 잡아줍니다. 41 사용자에게 업그레이드 추천하되, 가성비만 본다면 41 블프 세일 가격이 더 매력적일 수 있어요. 16만원대 입문 데일리 트레이너로 5km부터 10km까지 편하게 커버하는 한국 러너 베스트셀러 라인업입니다.',
    },
    {
      userType: '데일리 입문 러너',
      rating: 4,
      text: '러닝 4개월차 초보입니다. 페가수스 시리즈가 입문에 좋다고 해서 42부터 시작했어요. 표준 270mm로 시작했는데 토박스가 41보다 넓다는 리뷰 보고 안심했고, 실제로 5km 뛴 후에도 발가락 눌림 없었어요. 37mm 힐 스택이 아스팔트 충격을 잘 흡수해줘서 한강공원 5km 돌 때 무릎 편안합니다. 10mm 드롭으로 뒤꿈치 착지 입문 러너에게 적합하고, 속도 낼 생각은 없으니 약간 무거운 286g도 신경 안 쓰입니다. 16만원대로 브랜드화 중 가성비 최상위권이고, 입문 러너에게 "첫 러닝화 뭐 살까" 질문에 자신 있게 추천할 수 있는 신발입니다. 페가수스 42는 한국 러너 입문화 베스트로, 5km부터 10km까지 데일리 훈련 커버에 최적입니다.',
    },
    {
      userType: '발볼 넓은 러너',
      rating: 4,
      text: '발볼 4E급인 한국 러너입니다. 페가수스 41 때는 표준 사이즈 토박스가 좁아서 와이드를 찾아 헤맸는데, 42는 출시 시점부터 한국 나이키 공식몰에 남성·여성 와이드 옵션이 동일 169,000원으로 정식 출시됐습니다. 저는 와이드 265mm로 갔고 5km 한강 코스 5번 돌면서 새끼발가락·엄지발가락 양쪽 모두 압박 없이 편안했습니다. RunRepeat 실측으로는 토박스 너비(72.3mm)가 41(72.9mm)과 거의 비슷하지만, 와이드 SKU가 표준 가격으로 풀린 게 핵심 — 발볼 4E급은 무조건 와이드로 가시면 됩니다. 36mm 힐 스택 + ReactX + Air Zoom 조합이 뒤꿈치 착지 시 무릎 보호도 잘 잡아주고, 드롭 10mm(공식)/14mm(실측) 모두 입문 러너 친화적입니다. 16만원대 입문 데일리 트레이너 중 한국 발볼 친화도가 가장 개선된 옵션입니다.',
    },
  ],

  detailedSpecs: {
    weight: '286g (RunRepeat 실측, US M9 기준 — 41의 281g 대비 +5g)',
    stackHeight: '힐 37mm / 포어풋 27mm (나이키 공식) — RunRepeat 실측 36/22mm, 전족부 5mm 불일치',
    drop: '10mm (나이키 공식) — RunRepeat 실측 14mm',
    midsole: 'ReactX 폼 + 풀 렝스 곡선형 Air Zoom 유닛 (전작 듀얼 포드 구성에서 개선)',
    plate: '없음 (자연스러운 발 움직임, Air Zoom으로 반발력 보강)',
    outsole: '고무 + 업데이트된 와플 패턴 (그립력·전환 개선)',
    upper: '신규 경량 엔지니어드 메쉬',
    width: '표준 (실측 토박스 72.3mm) — 한국 와이드 옵션 정식 출시 (남성·여성, 동일 169,000원)',
    durability: '600km 이상 예상 (41 아웃솔 0.9mm 마모 깊이 기준, 구성 동일)',
    price: '₩169,000 (MSRP) / 세일 시 ₩145,000~',
    costPerKm: '약 ₩282/km (600km 기준)',
    footType: '평발 OK / 높은 아치 OK / 와이드 옵션으로 발볼 4E급도 가능',
    landingPattern: '뒤꿈치~미드풋 착지 (드롭 10mm 공식 / 14mm 실측)',
  },

  similarShoes: ['nike-pegasus-41', 'adidas-supernova-rise-2', 'asics-gel-nimbus-28', 'new-balance-880-v15', 'hoka-clifton-10'],
  relatedPosts: [
    { slug: 'pegasus-42-vs-nimbus-28-daily-cushion-2026', title: '페가수스 42 vs 젤 님버스 28 — 데일리 대결' },
    { slug: 'nike-pegasus-41-vs-42-comparison', title: '페가수스 41 vs 42 — 세대 비교' },
    { slug: 'nike-pegasus-42-review', title: '페가수스 42 심층 후기' },
    { slug: 'nike-pegasus-premium-vs-vomero-18', title: '페가수스 프리미엄 vs 보메로 18' },
  ],
  purchaseLinks: [{ store: '네이버', url: 'https://naver.me/xG0f5GZl' }],
};
