import type { Shoe } from '@/types/shoe';

// 원문 추가 대조:2026-11-11. 확인 범위와 한계는 verification 참조.
export const shoe: Shoe = {
  id: 'nike-alphafly-4',
  slug: 'nike-alphafly-4',
  brand: 'Nike',
  name: '알파플라이 4',
  image: '/images/shoes/nike/alphafly4/side.webp',
  images: [
    '/images/shoes/nike/alphafly4/side.webp',
  ],
  imageCaption: '알파플라이 4 남성 상용 모델 IU4686-002의 측면 사진입니다. 한국 판매 색상·사이즈·품번은 별도로 확인하세요.',
  imageSource: { title: 'Nike 공식 상품 갤러리', url: 'https://www.nike.com/t/alphafly-4-mens-road-racing-shoes-EC33rkiZ' },
  category: '레이싱',
  specs: { weight: 190, drop: 6.2 },
  price: 349000,
  noindex: true,
  description: 'ZoomX LT + ZoomX · 카본 Flyplate · 전족 Air Zoom2개 구조의 알파플라이 4. RunRepeat 실험실 검체 190g·39/32.8mm. 한국 확인 정가 349,000원.',
  oneliner: 'ZoomX LT + ZoomX · 카본 Flyplate · 전족 Air Zoom2개 · 190g (RunRepeat 실험실 검체)',
  editorComment: '2026-11-11 원문 대조·11/12 한국 신규 색상 공개 자료 후속 확인. 11/10 관찰과 11/12 추가 응답을 구분합니다. 한국 남성 IU4686-002·여성 IZ9609-002 및 신규 IM5546-800·IM5547-600의 11/10 공식 상품 원문에서 정가·표시가격 349,000원을 확인했습니다. 11/10에는 기존 두 품번의 10/29 오전 10시 디지털 런치가 종료된 품절 상태이고 신규 두 색상은 출시 예정이었습니다. 11/12 직접 받은 신규 IM5546-800·IM5547-600 공식 공개 상품 데이터에는 availabilityDate가 11/12 오전 10시(KST), 상태가 BUYABLE_BUY로 바뀌었습니다. 다른 웹 추출 응답에는 종전 출시 예정 안내가 남아 있어 응답 시차를 구분합니다. 실제 규격 선택·결제 가능 재고·전국 매장 재고는 미확인입니다. 남성공시는 188g(265mm)·8mm, 여성 188g 은 상세 265mm·하단 270mm 로 내부기준이 상충합니다. 한국 265mm 공시를 RunRepeat 남성 US9 검체와 같은 사이즈로 비교하지 않습니다. 2026-11-08 공개 RR 원문은 실제남성 US9 190g·39/32.8mm·6.2mm 입니다. RR 브랜드 191/168g(사이즈미확인)·39/31mm·8mm 와 구분합니다. 주폼 32.3AC(ZoomX LT)·보조 30AC(기존 ZoomX)를 구분합니다. Nike는 전작 대비 에너지 반환력 10% 향상과 265mm 기준 무게 5% 감소를 주장합니다. 에너지 반환 시험 조건은 확인하지 못했습니다. RR77.5/79.9% 와 직접같은시험으로 보지 않습니다. 아웃솔마모 2.9mm·두께 1.8mm 를 원문대로 남겨 오타교정·수명으로 바꾸지 않습니다. DOR의 Nathan Brown은 정사이즈와 레이서치고 여유 있는 앞코, 코너에서의 안정적인 갑피 고정을 평가했습니다. 전작보다 부드럽고 탄력 있으며 차분하고 리듬 있는 전환을 느꼈지만 삐걱거리는 소음을 지적했습니다. 직접 페이지는 접근이 제한돼 검색에 수집된 DOR 원문을 대조했습니다. 소개 표의 198g(남성 US9)·39/31mm·8mm를 실제 테스터의 검체 사이즈·측정값으로 적용하지 않습니다. RR 내부 최광폭 92mm·엄지 72.2mm·높이 28.8mm 입니다. 실제검체의 폭·색상 SKU 는 미확인이고 한국 와이드나 모든발의 반업을 이값으로 정하지 않습니다. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.',
  tags: [
    '레이싱',
    '마라톤',
    '카본 플레이트',
    '슈퍼슈즈',
  ],
  detailedSpecs: {
    weight: '190g (RunRepeat 실험실 검체). 2026-11-08 공개 RR 원문은 실제남성 US9 190g·39/32.8mm·6.2mm 입니다. RR 브랜드 191/168g(사이즈미확인)·39/31mm·8mm 와 구분합니다.',
    stackHeight: '39/32.8mm (RunRepeat 실험실 검체, 힐/전족부). 출처별 다른 공시는 무게 항목 참조.',
    drop: '6.2mm (RunRepeat 실험실 검체). 2026-11-08 공개 RR 원문은 실제남성 US9 190g·39/32.8mm·6.2mm 입니다. RR 브랜드 191/168g(사이즈미확인)·39/31mm·8mm 와 구분합니다.',
    midsole: 'ZoomX LT + ZoomX · 카본 Flyplate · 전족 Air Zoom2개. 주폼 32.3AC·보조 30AC, 힐/전족부 SA 157/117·에너지 리턴 77.5/79.9%. 주폼 32.3AC(ZoomX LT)·보조 30AC(기존 ZoomX)를 구분합니다. Nike는 전작 대비 에너지 반환력 10% 향상과 265mm 기준 무게 5% 감소를 주장합니다. 에너지 반환 시험 조건은 확인하지 못했습니다. RR77.5/79.9% 와 직접같은시험으로 보지 않습니다. 아웃솔마모 2.9mm·두께 1.8mm 를 원문대로 남겨 오타교정·수명으로 바꾸지 않습니다.',
    plate: '카본 섬유 Flyplate와 전족 Air Zoom2개, Atomknit·FastShot 구조입니다.',
    width: 'RR 내부 최광폭 92mm·엄지 부위 72.2mm·높이 28.8mm. RR 내부 최광폭 92mm·엄지 72.2mm·높이 28.8mm 입니다. 실제검체의 폭·색상 SKU 는 미확인이고 한국 와이드나 모든발의 반업을 이값으로 정하지 않습니다.',
    durability: '검증된 공통 수명 km 미확인. 국소 마모·짧은 착화 후기를 주행 수명으로 환산하지 않습니다.',
    price: '한국 남성 IU4686-002·여성 IZ9609-002 및 신규 IM5546-800·IM5547-600의 11/10 공식 상품 원문에서 정가·표시가격 349,000원을 확인했습니다. 11/10에는 기존 두 품번의 10/29 오전 10시 디지털 런치가 종료된 품절 상태이고 신규 두 색상은 출시 예정이었습니다. 11/12 직접 받은 신규 IM5546-800·IM5547-600 공식 공개 상품 데이터에는 availabilityDate가 11/12 오전 10시(KST), 상태가 BUYABLE_BUY로 바뀌었습니다. 다른 웹 추출 응답에는 종전 출시 예정 안내가 남아 있어 응답 시차를 구분합니다. 실제 규격 선택·결제 가능 재고·전국 매장 재고는 미확인입니다. 남성공시는 188g(265mm)·8mm, 여성 188g 은 상세 265mm·하단 270mm 로 내부기준이 상충합니다. 한국 265mm 공시를 RunRepeat 남성 US9 검체와 같은 사이즈로 비교하지 않습니다.',
  },
  similarShoes: [
    'nike-alphafly-3',
    'adidas-adios-pro-5',
  ],
  biomechanics: {
    stackHeight: {
      heel: 39,
      forefoot: 32.8,
    },
    drop: 6.2,
    carbonPlate: true,
    plateType: 'Carbon-fiber Flyplate',
    midsoleType: 'ZoomX LT + ZoomX · 카본 Flyplate · 전족 Air Zoom2개',
  },
  targetUsers: {
    recommended: [
      '새로공개된독립 랩과공식사양을구분하려는러너',
      '실제규격에서앞코·Atomknit고정을비교하려는 러너',
    ],
    notRecommended: [
      '한국 265mm 공시와 RRUS9를같은 검체로비교하는경우',
      '제조사 10% 리턴을개인기록 향상률로읽는경우',
    ],
  },
  features: [
    'ZoomX LT + ZoomX · 카본 Flyplate · 전족 Air Zoom2개',
    '190g · 39/32.8mm · 드롭 6.2mm (RunRepeat 실험실 검체)',
    '카본 섬유 Flyplate와 전족 Air Zoom2개, Atomknit·FastShot 구조입니다.',
    'RR 내부 최광폭 92mm·엄지 72.2mm·높이 28.8mm 입니다. 실제검체의 폭·색상 SKU 는 미확인이고 한국 와이드나 모든발의 반업을 이값으로 정하지 않습니다.',
  ],
  reviews: [
    {
      userType: '원문 기반 에디터 분석',
      source: 'editor',
      sourceUrl: 'https://runrepeat.com/nike-alphafly-4',
      text: '2026-11-08 공개 RR 원문은 실제남성 US9 190g·39/32.8mm·6.2mm 입니다. RR 브랜드 191/168g(사이즈미확인)·39/31mm·8mm 와 구분합니다. 주폼 32.3AC(ZoomX LT)·보조 30AC(기존 ZoomX)를 구분합니다. Nike는 전작 대비 에너지 반환력 10% 향상과 265mm 기준 무게 5% 감소를 주장합니다. 에너지 반환 시험 조건은 확인하지 못했습니다. RR77.5/79.9% 와 직접같은시험으로 보지 않습니다. 아웃솔마모 2.9mm·두께 1.8mm 를 원문대로 남겨 오타교정·수명으로 바꾸지 않습니다.',
    },
    {
      userType: '외부 착화 의견 요약 · Doctors of Running',
      source: 'editor',
      sourceUrl: 'https://www.doctorsofrunning.com/nike-alphafly-4-review/',
      text: 'DOR의 Nathan Brown은 정사이즈와 레이서치고 여유 있는 앞코, 코너에서의 안정적인 갑피 고정을 평가했습니다. 전작보다 부드럽고 탄력 있으며 차분하고 리듬 있는 전환을 느꼈지만 삐걱거리는 소음을 지적했습니다. 직접 페이지는 접근이 제한돼 검색에 수집된 DOR 원문을 대조했습니다. 소개 표의 198g(남성 US9)·39/31mm·8mm를 실제 테스터의 검체 사이즈·측정값으로 적용하지 않습니다.',
    },
  ],
  verification: {
    checkedAt: '2026-11-12',
    scope: '한국 상품 조건, 해외 실험실·제조사 공시와 외부 착화 의견의 확인 범위를 구분했습니다. 제품 전체 검증 완료 표지가 아닙니다. 11/12 추가 대조는 한국 신규 두 색상의 공개 상품 데이터·응답 시차에 한정합니다.',
    sources: [
      {
        label: 'Doctors of Running 동세대 착화 리뷰',
        url: 'https://www.doctorsofrunning.com/nike-alphafly-4-review/',
        note: '2026-11-05 Nathan Brown. 직접 페이지 403으로 검색에 수집된 원문을 대조했습니다. 소개 표의 남성 US9 198g과 실제 착화 검체 사이즈를 구분합니다.',
      },
      {
        label: '한국 공식 IU4686-002 · men',
        url: 'https://www.nike.com/kr/t/%EB%82%98%EC%9D%B4%ED%82%A4-%EC%95%8C%ED%8C%8C%ED%94%8C%EB%9D%BC%EC%9D%B4-4-%EB%82%A8%EC%84%B1-%EB%A1%9C%EB%93%9C-%EB%A0%88%EC%9D%B4%EC%8B%B1%ED%99%94-MjzZW7jo/IU4686-002',
        note: '11/10 공식 원문 정가·표시가격 349,000원. 한국10/29 10시 런치 종료·현재 품절 공시. 실제 결제·전국 재고는 미확인.',
      },
      {
        label: '한국 공식 IZ9609-002 · women',
        url: 'https://www.nike.com/kr/t/%EB%82%98%EC%9D%B4%ED%82%A4-%EC%95%8C%ED%8C%8C%ED%94%8C%EB%9D%BC%EC%9D%B4-4-%EC%97%AC%EC%84%B1-%EB%A1%9C%EB%93%9C-%EB%A0%88%EC%9D%B4%EC%8B%B1%ED%99%94-1af9ax1E/IZ9609-002',
        note: '11/10 공식 원문 정가·표시가격 349,000원. 한국10/29 10시 런치 종료·현재 품절 공시. 실제 결제·전국 재고는 미확인.',
      },
      {
        label: 'Nike 한국 IM5546-800 신규 색상',
        url: 'https://www.nike.com/kr/t/%EB%82%98%EC%9D%B4%ED%82%A4-%EC%95%8C%ED%8C%8C%ED%94%8C%EB%9D%BC%EC%9D%B4-4-%EB%82%A8%EC%84%B1-%EB%A1%9C%EB%93%9C-%EB%A0%88%EC%9D%B4%EC%8B%B1%ED%99%94-BxYAEFvI/IM5546-800',
        note: '11/10 정가·표시가격349,000원·출시 예정 안내. 11/12 직접 공개 상품 데이터는 같은 가격·availabilityDate 11/12 10:00 KST·BUYABLE_BUY 상태입니다. 별도 웹 추출은 종전 예정 안내를 반환해 실제 렌더 UI·사이즈별 결제·전국 재고는 확정하지 않습니다.',
      },
      {
        label: 'Nike 한국 IM5547-600 신규 색상',
        url: 'https://www.nike.com/kr/t/%EB%82%98%EC%9D%B4%ED%82%A4-%EC%95%8C%ED%8C%8C%ED%94%8C%EB%9D%BC%EC%9D%B4-4-%EC%97%AC%EC%84%B1-%EB%A1%9C%EB%93%9C-%EB%A0%88%EC%9D%B4%EC%8B%B1%ED%99%94-k8OU59AI/IM5547-600',
        note: '11/10 정가·표시가격349,000원·출시 예정 안내. 11/12 직접 공개 상품 데이터는 같은 가격·availabilityDate 11/12 10:00 KST·BUYABLE_BUY 상태입니다. 별도 웹 추출은 종전 예정 안내를 반환해 실제 렌더 UI·사이즈별 결제·전국 재고는 확정하지 않습니다.',
      },
      {
        label: 'Nike 한국 공식 발표',
        url: 'https://about.nike.com/ko/newsroom/releases/4-644',
        note: '9/17 선행·10/29 확대 발매 안내와 전작 대비 에너지 반환력 10% 향상·265mm 기준 무게 5% 감소라는 제조사 주장. 독립 시험·개인 효과와 구분합니다.',
      },
      {
        label: 'RunRepeat 동세대 실험실 원문',
        url: 'https://runrepeat.com/nike-alphafly-4',
        note: '실제 남성 US9 표기를 원문에서 확인했습니다. 검체 색상 SKU·폭·무게 보정 적용 여부는 미확인. 190g·39/32.8mm·6.2mm. 주폼 32.3AC(ZoomX LT)·보조 30AC(기존 ZoomX)를 구분합니다. Nike는 전작 대비 에너지 반환력 10% 향상과 265mm 기준 무게 5% 감소를 주장합니다. 에너지 반환 시험 조건은 확인하지 못했습니다. RR77.5/79.9% 와 직접같은시험으로 보지 않습니다. 아웃솔마모 2.9mm·두께 1.8mm 를 원문대로 남겨 오타교정·수명으로 바꾸지 않습니다.',
      },
      {
        label: 'RunRepeat 측정법',
        url: 'https://runrepeat.com/testing-methodology',
        note: 'AC·HA·HC, SA·에너지 리턴, BR·구방식 1~5와 내부/외부 폭을 구분합니다. 일반 정책은 개별 라벨 확인과 다릅니다.',
      },
      {
        label: 'Nike 공식 제품·측면 사진 · IU4686-002',
        url: 'https://www.nike.com/t/alphafly-4-mens-road-racing-shoes-EC33rkiZ',
        note: '2026-11-10 정확 상용 남성 SKU와 이미지 대조. 기존 대표 밑창 사진을 같은 SKU 측면으로 교체. Proto 색상 별칭을 미출시 개발 시제품으로 해석하지 않음.',
      },
      {
        label: 'Nike IU4686-002 공식 측면 원본',
        url: 'https://static.nike.com/a/images/4868d7a4-594e-488f-afc4-662626aee2fb/AIR%2BZM%2BALPHAFLY%2BNEXT%25%2B4.png',
        note: '2026-11-10 HTTP200 원본 회수·시각 대조. 실물 검체의 사이즈·폭·성능 시험을 의미하지 않음.',
      },
    ],
    limitations: [
      '모델별 임상 예방·치료 등급, 공통 최적 페이스·주행 수명·km당 비용은 미확인으로 제거했습니다.',
      '에디터 평점·1~10점·발볼 및 계절 분류·구매 링크는 모든 항목을 새로 검증한 수치나 임상 효과가 아닙니다.',
      '판매 조건은 확인한 상품·시점에 한정합니다. 미확인을 미출시·단종·전국 재고 없음으로 해석하지 않습니다.',
      'DOR 직접 페이지는 접근 제한 상태여서 검색에 수집된 2026-11-05 Nathan Brown 원문을 대조했습니다. 실제 착화 검체의 사이즈는 별도로 확인하지 못했습니다. 개인의 앞코 여유 체감과 RunRepeat 내부 폭 실측은 조건이 다릅니다.',
    ],
  },
};
