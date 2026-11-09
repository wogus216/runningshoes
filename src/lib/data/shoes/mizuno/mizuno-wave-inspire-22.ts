import type { Shoe } from '@/types/shoe';

// 원문 재확인:2026-11-09. 확인 범위와 한계는 verification 참조.
export const shoe: Shoe = {
  id: 'mizuno-wave-inspire-22',
  slug: 'mizuno-wave-inspire-22',
  brand: 'Mizuno',
  name: '웨이브 인스파이어 22',
  image: '/images/shoes/mizuno/waveinspire22/side.webp',
  images: [
    '/images/shoes/mizuno/waveinspire22/side.webp',
  ],
  category: '안정화',
  rating: 4,
  price: 169000,
  description: '질소 주입 ENERZY NXT · 힐~중족 Wave Plate 구조의 웨이브 인스파이어 22. RunRepeat 실험실 검체 280g·36.6/29mm. 한국 확인 가격 169,000원.',
  oneliner: '질소 주입 ENERZY NXT · 힐~중족 Wave Plate · 280g (RunRepeat 실험실 검체)',
  editorComment: '2026-11-09 원문 재확인. 한국 기본 J1GC264455·여성 W J1GD264474는 보통(2E), SW J1GC264551·여성 W SW J1GD264571은 넓음(4E)입니다. 모두 정가 169,000원·확인시 판매가 135,200원입니다. 기본은 255~275mm, W 기본은 225~250mm, SW는 250~295mm, W SW는 230~255mm가 선택 가능이었습니다. 무W 상품의 성별은 한국 제목에 명시되지 않아 단독 성별을 확정하지 않습니다. 한국 한쪽 무게는 일반 293g·SW 295g(27cm), 여성 일반·SW 250g(24.5cm), 38.5/28.5mm·10mm입니다. DOR 소개 281g(남성 US9)·241g(여성 US8), 37/27mm·10mm와 RR 280g·36.6/29.0mm·7.6mm를 구분합니다. 공식 드롭 10mm와 실측 7.6mm를 평균내지 않습니다. 30.8AC·보조 43.3AC의 층 위치는 미확인입니다. RR의 매끄러운 느낌과 Bach의 강직감은 개인차이며 질환별 적합 등급으로 합치지 않습니다. 국소 마모 0.5mm를 800km 수명으로 환산하지 않습니다. DOR Bach의 실제 검체 사이즈·폭은 이번 원문에서 미확인입니다. 힐이 넓고 얕으며 안감이 미끄러워 계속 들릴 듯했고 끈·두꺼운 양말로 해결하지 못했다고 적었습니다. 중족·전족은 이미 밀착돼 다운사이즈도 해법으로 보지 않았습니다. 초기 강직감은 일부 완화됐지만 힐 핏 때문에 긴 착화와 걷기도 불편했다는 개인 경험입니다. RR 내부 최광폭 97.3mm·엄지 72.7mm·높이 27.7mm를 한국 SW 4E 치수로 쓰지 않습니다. SW도 실제 발등·힐 고정을 확인해야 합니다. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.',
  tags: [
    '안정화',
    'Wave 플레이트',
    '신상',
  ],
  specs: {
    weight: 280,
    cushioning: 8,
    responsiveness: 6,
    stability: 7,
    drop: 7.6,
  },
  biomechanics: {
    stackHeight: {
      heel: 36.6,
      forefoot: 29,
    },
    drop: 7.6,
    carbonPlate: false,
    plateType: 'heel-to-midfoot Wave Plate; exact material unverified',
    midsoleType: '질소 주입 ENERZY NXT · 힐~중족 Wave Plate',
  },
  koreanFootFit: {
    toBoxWidth: 'standard',
    winterCompatibility: 'good',
    summerCompatibility: 'good',
    wideOptions: true,
  },
  targetUsers: {
    recommended: [
      'Wave Plate의 뒤~중족 전환과 힐 고정을 비교하려는 러너',
      '기본 2E·SW 4E를 실제 규격에서 시착하려는 러너',
    ],
    notRecommended: [
      '직접 착화에서 끈 조절 후에도 힐 슬립이 남는 경우',
      '폭 선택만으로 통증·질환 예방을 기대하는 경우',
    ],
  },
  priceAnalysis: {
    msrp: 169000,
    valueRating: 8,
    priceTier: 'mid',
    alternatives: [
      'mizuno-wave-inspire-21',
      'asics-gel-kayano-33',
      'brooks-adrenaline-gts-25',
    ],
  },
  features: [
    '질소 주입 ENERZY NXT · 힐~중족 Wave Plate',
    '280g · 36.6/29mm · 드롭 7.6mm (RunRepeat 실험실 검체)',
    '힐~중족 Wave Plate. 정확한 소재는 미확인이며 전장 카본으로 표시하지 않습니다.',
    'RR 내부 최광폭 97.3mm·엄지 72.7mm·높이 27.7mm를 한국 SW 4E 치수로 쓰지 않습니다. SW도 실제 발등·힐 고정을 확인해야 합니다.',
  ],
  detailedSpecs: {
    weight: '280g (RunRepeat 실험실 검체). 한국 한쪽 무게는 일반 293g·SW 295g(27cm), 여성 일반·SW 250g(24.5cm), 38.5/28.5mm·10mm입니다. DOR 소개 281g(남성 US9)·241g(여성 US8), 37/27mm·10mm와 RR 280g·36.6/29.0mm·7.6mm를 구분합니다.',
    stackHeight: '36.6/29mm (RunRepeat 실험실 검체, 힐/전족부). 출처별 다른 공시는 무게 항목 참조.',
    drop: '7.6mm (RunRepeat 실험실 검체). 한국 한쪽 무게는 일반 293g·SW 295g(27cm), 여성 일반·SW 250g(24.5cm), 38.5/28.5mm·10mm입니다. DOR 소개 281g(남성 US9)·241g(여성 US8), 37/27mm·10mm와 RR 280g·36.6/29.0mm·7.6mm를 구분합니다.',
    midsole: '질소 주입 ENERZY NXT · 힐~중족 Wave Plate. 주폼 30.8AC·보조 43.3AC, 힐/전족부 SA 125/115·에너지 리턴 52.7/52.8%. 공식 드롭 10mm와 실측 7.6mm를 평균내지 않습니다. 30.8AC·보조 43.3AC의 층 위치는 미확인입니다. RR의 매끄러운 느낌과 Bach의 강직감은 개인차이며 질환별 적합 등급으로 합치지 않습니다. 국소 마모 0.5mm를 800km 수명으로 환산하지 않습니다.',
    plate: '힐~중족 Wave Plate. 정확한 소재는 미확인이며 전장 카본으로 표시하지 않습니다.',
    width: 'RR 내부 최광폭 97.3mm·엄지 부위 72.7mm·높이 27.7mm. RR 내부 최광폭 97.3mm·엄지 72.7mm·높이 27.7mm를 한국 SW 4E 치수로 쓰지 않습니다. SW도 실제 발등·힐 고정을 확인해야 합니다.',
    durability: '검증된 공통 수명 km 미확인. 국소 마모·짧은 착화 후기를 주행 수명으로 환산하지 않습니다.',
    price: '한국 기본 J1GC264455·여성 W J1GD264474는 보통(2E), SW J1GC264551·여성 W SW J1GD264571은 넓음(4E)입니다. 모두 정가 169,000원·확인시 판매가 135,200원입니다. 기본은 255~275mm, W 기본은 225~250mm, SW는 250~295mm, W SW는 230~255mm가 선택 가능이었습니다. 무W 상품의 성별은 한국 제목에 명시되지 않아 단독 성별을 확정하지 않습니다.',
  },
  reviews: [
    {
      userType: '원문 기반 에디터 분석',
      source: 'editor',
      sourceUrl: 'https://runrepeat.com/mizuno-wave-inspire-22',
      text: '한국 한쪽 무게는 일반 293g·SW 295g(27cm), 여성 일반·SW 250g(24.5cm), 38.5/28.5mm·10mm입니다. DOR 소개 281g(남성 US9)·241g(여성 US8), 37/27mm·10mm와 RR 280g·36.6/29.0mm·7.6mm를 구분합니다. 공식 드롭 10mm와 실측 7.6mm를 평균내지 않습니다. 30.8AC·보조 43.3AC의 층 위치는 미확인입니다. RR의 매끄러운 느낌과 Bach의 강직감은 개인차이며 질환별 적합 등급으로 합치지 않습니다. 국소 마모 0.5mm를 800km 수명으로 환산하지 않습니다.',
    },
    {
      userType: '외부 착화 의견 요약 · Doctors of Running',
      source: 'editor',
      sourceUrl: 'https://www.doctorsofrunning.com/mizuno-wave-inspire-22-quick-evaluation/',
      text: 'DOR Bach의 실제 검체 사이즈·폭은 이번 원문에서 미확인입니다. 힐이 넓고 얕으며 안감이 미끄러워 계속 들릴 듯했고 끈·두꺼운 양말로 해결하지 못했다고 적었습니다. 중족·전족은 이미 밀착돼 다운사이즈도 해법으로 보지 않았습니다. 초기 강직감은 일부 완화됐지만 힐 핏 때문에 긴 착화와 걷기도 불편했다는 개인 경험입니다.',
    },
  ],
  similarShoes: [
    'mizuno-wave-inspire-21',
    'asics-gel-kayano-33',
    'brooks-adrenaline-gts-25',
    'brooks-glycerin-gts-23',
  ],
  relatedPosts: [
    {
      slug: 'mizuno-running-shoes-lineup-tier-guide-2026',
      title: '미즈노 러닝화 계급도',
    },
  ],
  verification: {
    checkedAt: '2026-11-09',
    scope: '한국 상품 조건, 해외 실험실·제조사 공시와 외부 착화 의견의 확인 범위를 구분했습니다. 제품 전체 검증 완료 표지가 아닙니다.',
    sources: [
      {
        label: '한국 J1GC264455 · 보통(2E)',
        url: 'https://kor.mizuno.com/product/detail.html?product_no=12155&cate_no=1165&display_group=1',
        note: '정가 169,000원·확인시 판매 135,200원. 상품별 상태는 본문 참조.',
      },
      {
        label: 'J1GC264455 공식 상세 이미지',
        url: 'https://kor.mizuno.com/web/product/26aw_detail_page/J1GC264455-D.jpg',
        note: '기본 2E/SW 4E와 기준 사이즈별 한쪽 무게 확인.',
      },
      {
        label: '한국 J1GD264474 · 보통(2E)',
        url: 'https://kor.mizuno.com/product/detail.html?product_no=12158&cate_no=1165&display_group=1',
        note: '정가 169,000원·확인시 판매 135,200원. 상품별 상태는 본문 참조.',
      },
      {
        label: 'J1GD264474 공식 상세 이미지',
        url: 'https://kor.mizuno.com/web/product/26aw_detail_page/J1GD264474-D.jpg',
        note: '기본 2E/SW 4E와 기준 사이즈별 한쪽 무게 확인.',
      },
      {
        label: '한국 J1GC264551 · 넓음(4E)',
        url: 'https://kor.mizuno.com/product/detail.html?product_no=12080&cate_no=1165&display_group=1',
        note: '정가 169,000원·확인시 판매 135,200원. 상품별 상태는 본문 참조.',
      },
      {
        label: 'J1GC264551 공식 상세 이미지',
        url: 'https://kor.mizuno.com/web/product/26aw_detail_page/J1GC264551-D.jpg',
        note: '기본 2E/SW 4E와 기준 사이즈별 한쪽 무게 확인.',
      },
      {
        label: '한국 J1GD264571 · 넓음(4E)',
        url: 'https://kor.mizuno.com/product/detail.html?product_no=12081&cate_no=1165&display_group=1',
        note: '정가 169,000원·확인시 판매 135,200원. 상품별 상태는 본문 참조.',
      },
      {
        label: 'J1GD264571 공식 상세 이미지',
        url: 'https://kor.mizuno.com/web/product/26aw_detail_page/J1GD264571-D.jpg',
        note: '기본 2E/SW 4E와 기준 사이즈별 한쪽 무게 확인.',
      },
      {
        label: 'RunRepeat 동세대 실험실 원문',
        url: 'https://runrepeat.com/mizuno-wave-inspire-22',
        note: '공시 일반 검체 정책은 남성 US9. 실제 검체 라벨·폭 미확인. 280g·36.6/29mm·7.6mm. 공식 드롭 10mm와 실측 7.6mm를 평균내지 않습니다. 30.8AC·보조 43.3AC의 층 위치는 미확인입니다. RR의 매끄러운 느낌과 Bach의 강직감은 개인차이며 질환별 적합 등급으로 합치지 않습니다. 국소 마모 0.5mm를 800km 수명으로 환산하지 않습니다.',
      },
      {
        label: 'Doctors of Running 동세대 원문',
        url: 'https://www.doctorsofrunning.com/mizuno-wave-inspire-22-quick-evaluation/',
        note: '한국 한쪽 무게는 일반 293g·SW 295g(27cm), 여성 일반·SW 250g(24.5cm), 38.5/28.5mm·10mm입니다. DOR 소개 281g(남성 US9)·241g(여성 US8), 37/27mm·10mm와 RR 280g·36.6/29.0mm·7.6mm를 구분합니다.',
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
