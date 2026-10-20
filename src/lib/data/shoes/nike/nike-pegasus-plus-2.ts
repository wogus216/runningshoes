import type { Shoe } from '@/types/shoe';

export const shoe: Shoe = {
  id: 'nike-pegasus-plus-2',
  slug: 'nike-pegasus-plus-2',
  brand: 'Nike',
  name: '페가수스 플러스 2',
  category: '데일리',
  rating: 4.5,
  price: 219000,
  status: 'new',
  image: '/images/shoes/nike/pegasus-plus-2/side.webp',
  description:
    '1세대의 약점이던 미드풋 고정과 좁은 토박스를 손보고, 전족부에 노출형 에어 줌 유닛을 새로 넣은 템포 트레이너. 스택은 38/28mm로 높아졌고 한국 정가는 219,000원(나이키 코리아, 2026-10-02 기준 판매 중)입니다.',
  oneliner: 'ZoomX에 전족부 에어 줌을 더한 2세대 — 핏은 확 좋아졌고 성격은 데일리에 가깝다',
  editorComment:
    '2026년 8월 말 글로벌 출시 후 국내 판매도 시작됐고(2026-10-02 나이키 코리아 확인), 2026-10-12 RunRepeat 랩 데이터가 게시됐습니다. 힐 충격흡수는 147 SA(평균 131)로 1세대(125 SA)보다 크게 올랐지만, 에너지 리턴은 전족부 69.0%·힐 65.5%로 1세대와 비슷해 나이키가 내세운 반발 향상은 랩에서 확인되지 않았습니다. 토박스는 71.3mm로 평균(73.2mm)보다 1.9mm 좁습니다.\n\n1세대에서 가장 많이 지적된 문제가 두 가지였습니다 — 미드풋이 헐거워 발이 밀리는 것과, 좁고 뾰족한 토박스였습니다. 2세대는 거싯 텅과 일체형 레이싱 루프로 앞의 문제를 잡았고, MR10 2.0 라스트로 앞볼에 여유를 줬습니다. Doctors of Running 리뷰어는 자신이 테스트한 나이키 트레이너 중 핏이 가장 좋다고 평가했고, 1세대의 딱딱하던 ZoomX가 중간 정도로 유연해졌다는 점도 함께 짚었습니다.\n\n다만 이름이 말하는 것과 실제 성격은 조금 다릅니다. 나이키는 템포 트레이너로 소개하지만, Believe in the Run은 전족부 에어 줌의 반발이 템포 훈련을 감당할 만큼은 아니며 데일리 트레이너 쪽에 치우친다고 봤습니다. 무게는 RunRepeat 실측 247g으로, RunRepeat은 1세대와 거의 같다고 봤습니다(나이키 공식 258g은 US M9 표기라 측정 주체가 다릅니다). "페가수스 42보다 10% 가볍다"는 나이키 설명은 전작이 아니라 일반 페가수스와의 비교라, 1세대에서 넘어오는 러너는 더 가벼워질 거라 기대하지 않는 편이 좋습니다.\n\n구조적으로 유의할 점은 힐과 미드풋 폭입니다. Doctors of Running은 뒤꿈치가 좁고 미드풋 플랫폼이 매우 좁아 힐 스트라이커에게 불안정할 수 있다고 봤고, 10mm 드롭에 힐 베벨이 작아 미드풋·포어풋 착지에서는 뒤꿈치가 걸리는 느낌이 든다고 했습니다. 반대로 높은 드롭은 아킬레스 부담을 낮추는 방향이라, 아킬레스가 약한 러너에게는 유리합니다.\n\n사이즈·구매 가이드: 정사이즈 권장이고 앞볼 여유는 1세대보다 나아졌다는 평이지만 RunRepeat 토박스 실측은 71.3mm로 넉넉한 편은 아니고, 나이키 코리아 제품 페이지(2026-09-03 확인)에는 와이드 옵션이 없습니다(1세대도 미제공). 한국 정가는 219,000원(2026-10-02 판매 페이지 재확인)으로 1세대와 같은 값입니다 — 미국 정가가 1세대 $180에서 $165로 내려갔지만 국내가에는 반영되지 않았습니다.',
  tags: ['데일리', '템포', 'ZoomX', '에어 줌', '신상'],
  specs: {
    weight: 258,
    cushioning: 9,
    responsiveness: 8,
    stability: 5,
    drop: 10,
    durability: 450,
  },
  biomechanics: {
    stackHeight: { heel: 38, forefoot: 28 },
    drop: 10,
    carbonPlate: false,
    plateType: null,
    midsoleType: 'ZoomX + 전족부 노출형 커브드 Air Zoom 유닛',
    optimalPace: '4:30-6:00 min/km',
  },
  injuryPrevention: {
    plantarFasciitis: 'good',
    achillesTendinopathy: 'excellent',
    kneeIssues: 'good',
    shinSplints: 'caution',
  },
  koreanFootFit: {
    toBoxWidth: 'standard',
    flatFootCompatibility: 'poor',
    wideOptions: false,
    winterCompatibility: 'excellent',
    summerCompatibility: 'good',
  },
  targetUsers: {
    recommended: [
      '데일리 훈련에 가끔 업템포를 섞는 러너',
      '1세대의 헐거운 미드풋·좁은 토박스에서 불편을 겪은 러너',
      '아킬레스가 약해 높은 드롭이 필요한 러너',
      '중립 발',
    ],
    notRecommended: [
      '본격 인터벌·레이스용을 찾는 러너',
      '평발·과내전',
      '뒤꿈치 착지 비중이 큰 러너',
      '낮은 드롭·로커형 발놀림을 선호하는 러너',
    ],
  },
  priceAnalysis: {
    msrp: 219000,
    costPerKm: 487,
    valueRating: 7,
    priceTier: 'premium',
    alternatives: ['nike-pegasus-plus', 'saucony-endorphin-speed-5', 'asics-novablast-5'],
  },
  features: [
    '전족부 노출형 커브드 Air Zoom 유닛 (신규)',
    '재설계 ZoomX — 1세대보다 유연해진 반발',
    'MR10 2.0 라스트로 넓어진 앞볼',
    '거싯 텅 + 일체형 레이싱 루프로 미드풋 고정 개선',
    '플렉스 존이 들어간 모던 와플 아웃솔',
  ],
  detailedSpecs: {
    weight: '258g (US M9 공식 스펙 기준) / 247g (RunRepeat 랩 실측, 2026-10-12 게시) / 270g (Doctors of Running US M10 실측) — 측정 주체·기준 사이즈에 따라 다름',
    stackHeight: '힐 38mm / 포어풋 28mm (나이키 스펙시트) · RunRepeat 절단 실측 힐 37.7mm / 포어풋 27.3mm',
    drop: '10mm (공식) · RunRepeat 실측 10.4mm',
    midsole: 'ZoomX 재배합 + 전족부 노출형 Air Zoom 유닛 — RunRepeat 실측: 충격흡수 힐 147 SA·전족부 122 SA(평균 131 SA, 1세대 125·79 SA) · 에너지 리턴 전족부 69.0%·힐 65.5%(평균 61.5%, 1세대와 비슷) · 경도 29.8 AC(평균 35.4 AC, 냉동 후 3% 단단해짐) · 종방향 강성 15.7N(평균 15.5N) · 비틀림 강성 9.7Nm(평균 14.3Nm)',
    plate: '없음',
    outsole: '모던 와플 아웃솔 (플렉스 존 적용) — RunRepeat 전족부 접지 계수 0.49(평균 0.53)',
    upper: '엔지니어드 플라이니트 + 거싯 텅 · 리플렉티브 요소',
    width: '표준폭 — 나이키 코리아 제품 페이지에 와이드 옵션 없음 (2026-09-03 확인, 1세대도 미제공). RunRepeat 토박스 71.3mm(평균 73.2mm보다 1.9mm 좁음)·최대폭 94.0mm(평균 95.2mm)·토박스 높이 26.8mm — RunRepeat: "a solid option for runners with narrow or medium-width feet, but those requiring a genuinely wide forefoot should look elsewhere". 평균 대비 3mm 미만 차이이고 tapered·snug 명시가 없어 standard 유지',
    durability: '400~500km (추정) — RunRepeat 아웃솔 마모 1.1mm(평균 1.1mm)·아웃솔 두께 2.4mm(평균 3.1mm)·토박스 내구 3/5·힐 패딩 내구 4/5. km 범위는 이 사이트 추정이며, 리뷰어는 아웃솔이 아니라 ZoomX 폼이 수명을 먼저 제한할 것으로 예상',
    price: '219,000원 (나이키 코리아 공식, 2026-10-02 확인 — 남·여 동일, 사이즈 선택·장바구니 활성 = 판매 중. 9/3엔 "출시 예정" 표시였음) · 미국 $165 · 1세대 한국 정가와 동일',
    footType: '중립 발',
    landingPattern: 'MFS',
  },
  reviews: [
    {
      userType: '에디터 분석 — RunRepeat 랩이 확인한 것과 확인하지 못한 것',
      text: '2026-10-12 게시된 RunRepeat 랩에서 가장 크게 달라진 수치는 충격흡수입니다. 힐 147 SA·전족부 122 SA로 1세대(125·79 SA)보다 크게 올라 평균(131 SA)을 넘었고, 경도도 29.8 AC로 평균(35.4 AC)보다 부드럽게 나왔습니다. 반면 나이키가 1세대보다 최소 18% 높다고 밝힌 에너지 리턴은 전족부 69.0%·힐 65.5%로 1세대와 비슷하게 측정돼, 에어 줌 유닛이 반발 수치를 끌어올렸다는 근거는 랩에서 나오지 않았습니다. 토박스는 71.3mm로 평균(73.2mm)보다 조금 좁고, 전족부 접지 계수 0.49도 평균(0.53) 아래입니다. 설계 변경은 세 가지입니다 — 전족부에 노출형 에어 줌 유닛이 새로 들어갔고, 스택이 공식 기준 34/24mm에서 38/28mm로 올라갔으며, 라스트가 MR10 2.0으로 바뀌어 앞볼이 넓어졌습니다. 무게는 RunRepeat 실측 247g으로 1세대와 거의 같아, 스택과 에어 줌을 더하고도 무게를 지켰다는 것이 RunRepeat의 평가입니다.',
    },
    {
      userType: 'Believe in the Run 리뷰 종합 — 이름은 템포, 성격은 데일리',
      text: 'Believe in the Run은 종합 A 티어(디자인 A·가치 A·퍼포먼스 B)를 줬습니다. 호평은 락다운 개선에 몰렸습니다 — 재설계된 아치 밴드가 1세대의 미드풋 미끄러짐을 해소했고, 넓어진 토박스와 매끄러운 와플 아웃솔 전환도 함께 꼽혔습니다. 유보는 에어 줌에 있습니다. 전족부 유닛이 기대만큼의 반발을 내주지 못해 템포 훈련용으로는 부족하고, 표방하는 성격보다 데일리 트레이너에 가깝다고 봤습니다. 10mm 드롭이 로커형 신발에 비해 발놀림을 둔하게 만든다는 지적도 있었습니다. 리뷰어 표현으로는 "페가수스와 알파플라이의 아이" 같은 외형에, 페가수스치고는 재미있는 라이드라는 평입니다.',
    },
    {
      userType: 'Doctors of Running 관점 — 핏은 최상, 힐 구조는 갈린다',
      text: 'Doctors of Running은 핏 A·퍼포먼스 B·가치 A-를 매기며 1세대 대비 "대폭 개선"으로 평가했습니다. 스펙이 비슷해 보여도 체감 차이가 크고, 1세대의 밀도 높고 딱딱하던 ZoomX가 중간 정도로 유연해졌다는 것이 핵심입니다. 리뷰어는 자신이 테스트한 나이키 트레이너 가운데 핏이 가장 좋다고 했고, 양말 없이 신어도 될 만큼 내부 마감이 정돈됐다고 덧붙였습니다. 반면 구조 지적은 분명합니다 — 좁은 뒤꿈치와 매우 좁은 미드풋 플랫폼이 힐 스트라이커에게 불안정을 만들 수 있으며, 이는 베이퍼플라이 3에서 일부 러너가 겪은 문제와 유사하다고 봤습니다. 10mm 드롭에 작은 힐 베벨이 겹쳐 미드풋 착지에서 뒤꿈치가 걸리는 느낌이 페이스가 빨라질수록 심해진다는 서술도 있었습니다.',
    },
    {
      userType: '예상 적합 — 한 켤레로 데일리와 가벼운 업템포를 겸하는 경우',
      text: '주간 30~50km를 소화하며 대부분을 이지런으로 채우고 주 1회 정도 페이스를 올리는 러너에게 맞을 가능성이 있습니다. 힐 38mm 스택에 ZoomX 조합이라 매일 아스팔트를 달려도 쿠션이 부족하지 않고, 앞볼 여유가 1세대보다 늘었다는 평이 있지만 RunRepeat 토박스 실측이 71.3mm(평균 73.2mm)라 발볼이 표준인 러너까지가 안전한 범위입니다. 다만 아치 지지가 없는 중립 전용 구조에 미드풋 플랫폼이 좁아, 발이 안쪽으로 무너지는 러너에게는 권하기 어렵습니다. 인터벌이나 레이스를 목표로 한다면 플레이트가 있는 모델을 따로 두는 편이 낫습니다. 한국 정가는 219,000원으로, 1세대와 같은 값에 스택·핏이 개선된 만큼 1세대 대비 충격흡수가 크게 오른 만큼 가성비는 나쁘지 않습니다.',
    },
  ],
  similarShoes: ['nike-pegasus-plus', 'nike-pegasus-42', 'nike-vomero-plus', 'adidas-hyperboost-run'],
  relatedPosts: [
    { slug: 'nike-pegasus-42-vs-pegasus-plus-2-daily-2026', title: '페가수스 42 vs 플러스 2 — 5만원 더 내고 얻는 것과 잃는 것' },
    { slug: 'nike-pegasus-plus-2-release-2026', title: '페가수스 플러스 2 공식 발표 — ZoomX + 전족부 에어' },
  ],
};
