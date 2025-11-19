import type { Shoe } from "@/types/shoe";

export const categoryOrder: string[] = [
  "입문화",
  "맥스쿠션화",
  "데일리",
  "안정화",
  "울트라",
  "경량트레일러닝",
  "플레이트",
  "슈퍼트레이너",
  "카본플레이트",
  "중거리",
  "레이싱",
];

const shoes: Shoe[] = [
  // Nike - 페가수스 41 (완전한 데이터)
  {
    id: 'nike-pegasus-41',
    slug: 'nike-pegasus-41',
    brand: "Nike",
    name: "페가수스 41",
    category: "입문화",
    rating: 4,
    price: 159000,
    description: '초보부터 중급까지, 모든 러너를 위한 올라운더 러닝화입니다. 편안한 착화감(76% 구매 결정 1순위)과 충분한 쿠셔닝으로 첫 러닝화로 완벽한 선택입니다.',
    tags: ['입문화', '데일리 러닝', '쿠셔닝 우수'],

    specs: {
      weight: 280,
      cushioning: 9,
      responsiveness: 7,
      stability: 8,
      drop: 10,
      durability: 550
    },

    biomechanics: {
      stackHeight: {
        heel: 32,
        forefoot: 22
      },
      drop: 10,
      carbonPlate: false,
      plateType: null,
      midsoleType: 'ReactX Foam',
      optimalPace: '5:00-7:00 min/km'
    },

    injuryPrevention: {
      plantarFasciitis: 'excellent',
      achillesTendinopathy: 'excellent',
      kneeIssues: 'caution',
      shinSplints: 'excellent'
    },

    koreanFootFit: {
      toBoxWidth: 'standard',
      flatFootCompatibility: 'good',
      wideOptions: false,
      winterCompatibility: 'good'
    },

    targetUsers: {
      recommended: [
        '러닝 입문자 (쿠셔닝 중시)',
        '무릎 보호가 필요한 러너',
        '장거리 편안함 원하는 분',
        '가성비 좋은 올라운더 찾는 분',
        '뒤꿈치 착지(RFS) 러너 (~85%)',
        '데일리 5-10km 주행'
      ],
      notRecommended: [
        '마라톤 기록 단축 목표',
        '초경량 레이싱화 찾는 분',
        '강한 반발력 원하는 상급자',
        '대회용 전문 러닝화 필요'
      ]
    },

    features: [
      '최상급 착화감 (76% 1순위)',
      '충분한 쿠셔닝 (초보자 최우선)',
      '적정 무게 (280g)',
      '뛰어난 가성비 (15만원대)'
    ],

    priceAnalysis: {
      msrp: 159000,
      streetPrice: 135000,
      costPerKm: 280,
      valueRating: 9,
      priceTier: 'mid',
      alternatives: [
        '아식스 쿠무루스 27',
        '뉴발란스 880 V14',
        '호카 클리프턴 10'
      ]
    },

    reviews: [
      {
        userType: '입문 러너',
        rating: 5,
        text: '처음 러닝 시작하면서 구매했는데 발이 너무 편해요. 쿠션이 푹신해서 무릎에 무리가 안 가는 느낌이고, 5km 뛰고 나서도 발이 안 아파서 놀랐습니다. 디자인도 예뻐서 일상에서도 신고 다녀요! 가성비 최고!'
      },
      {
        userType: '중급 러너',
        rating: 4,
        text: '데일리 러닝용으로는 정말 좋습니다. 편안하고 안정적이에요. 다만 마라톤 기록 단축을 원한다면 조금 무거울 수 있어요. 훈련용으로는 최고지만 레이스용은 베이퍼플라이 따로 준비했습니다. 발볼이 표준이라 와이드 옵션 있으면 더 좋겠어요.'
      },
      {
        userType: '가성비 중시',
        rating: 5,
        text: '나이키 페가수스는 "검증된 올라운더"라는 말이 괜히 있는 게 아니에요. 15만원대 가격에 이 정도 성능이면 정말 만족스럽습니다. 500km 넘게 신었는데 아직도 쿠션이 살아있어요. 주변에도 많이 추천했어요! 초보 러너 첫 신발로 강력 추천합니다.'
      },
      {
        userType: '평발 러너',
        rating: 3,
        text: '평발인데 아치 서포트가 적당해서 괜찮았어요. 다만 심한 과내전이 있다면 GT-2000 같은 안정화가 더 나을 것 같아요. 발볼이 넓은 편인데 표준 폭이라 약간 답답했습니다. 와이드 사이즈가 있으면 완벽할 것 같아요.'
      }
    ],

    detailedSpecs: {
      weight: '280g (남성 US 9 기준) / 240g (여성 US 7)',
      stackHeight: '힐 32mm / 포어풋 22mm (최적 범위 초과)',
      drop: '10mm (표준 드롭, 뒤꿈치 착지 유도)',
      midsole: 'ReactX 폼 (EVA보다 우수한 에너지 리턴)',
      plate: '없음 (자연스러운 발 움직임, 초보자 안전)',
      outsole: '고무 + 와플 패턴 (내구성 우수)',
      upper: '엔지니어드 메쉬 (통기성 우수)',
      width: '표준 (와이드 옵션 없음 - 한국인 발에 주의)',
      durability: '500-600km (내구성 우수)',
      price: '₩159,000 (MSRP) / 세일 시 ₩120,000~',
      costPerKm: '약 ₩280/km (550km 기준 - 가성비 우수)',
      footType: '평발 OK / 높은 아치 OK / 발볼 넓음 주의',
      landingPattern: '뒤꿈치 착지(RFS) 최적 (~85% 러너)'
    },

    similarShoes: ['adidas-supernova-rise-2', 'asics-cumulus-27', 'newbalance-880-v14', 'hoka-clifton-10']
  },
  { brand: "Nike", name: "페가수스 프리미엄", category: "입문화", rating: 4 },
  { brand: "Nike", name: "보메로 18", category: "맥스쿠션화", rating: 5 },
  { brand: "Nike", name: "인빈시블 3", category: "맥스쿠션화", rating: 5 },
  { brand: "Nike", name: "스트럭처 26", category: "안정화", rating: 4 },
  { brand: "Nike", name: "알파플라이 3", category: "플레이트", rating: 5 },
  { brand: "Nike", name: "발할라 8", category: "슈퍼트레이너", rating: 4 },
  { brand: "Nike", name: "줌 플라이 6", category: "카본플레이트", rating: 4 },
  // Adidas
  { brand: "Adidas", name: "아디스타 3", category: "입문화", rating: 4 },
  { brand: "Adidas", name: "슈퍼노바 라이즈2", category: "입문화", rating: 4 },
  { brand: "Adidas", name: "슈퍼노바 프리미엄", category: "맥스쿠션화", rating: 4 },
  { brand: "Adidas", name: "글라이드라이드 맥스", category: "안정화", rating: 4 },
  { brand: "Adidas", name: "아디지로 9", category: "데일리", rating: 4 },
  { brand: "Adidas", name: "보스턴 12", category: "경량트레일러닝", rating: 5 },
  { brand: "Adidas", name: "아디제로 프로 3", category: "레이싱", rating: 5 },
  // Asics
  { brand: "Asics", name: "쿠무루스 27", category: "입문화", rating: 4 },
  { brand: "Asics", name: "캘리포니아 27", category: "맥스쿠션화", rating: 4 },
  { brand: "Asics", name: "글라이드라이드 맥스", category: "안정화", rating: 4 },
  { brand: "Asics", name: "님버스 코스트 3", category: "울트라", rating: 4 },
  { brand: "Asics", name: "슈퍼블라스트 2", category: "플레이트", rating: 5 },
  { brand: "Asics", name: "메타스피드 스카이+", category: "레이싱", rating: 5 },
  // New Balance
  { brand: "New Balance", name: "퓨얼셀 프로펠 V5", category: "입문화", rating: 4 },
  { brand: "New Balance", name: "프레시폼 880 V14", category: "데일리", rating: 4 },
  { brand: "New Balance", name: "프레시폼 알고 V6", category: "안정화", rating: 4 },
  { brand: "New Balance", name: "퓨얼셀 슈퍼콤프 트레이너 V3", category: "플레이트", rating: 5 },
  { brand: "New Balance", name: "SC 엘리트 V4", category: "카본플레이트", rating: 5 },
  // Saucony
  { brand: "Saucony", name: "액솔 3", category: "입문화", rating: 4 },
  { brand: "Saucony", name: "트라이엄프 22", category: "맥스쿠션화", rating: 4 },
  { brand: "Saucony", name: "템포 2", category: "데일리", rating: 4 },
  { brand: "Saucony", name: "라이드 18", category: "안정화", rating: 4 },
  { brand: "Saucony", name: "킨바라 15", category: "경량트레일러닝", rating: 4 },
  // Puma
  { brand: "Puma", name: "벨로시티 니트로 4", category: "데일리", rating: 4 },
  { brand: "Puma", name: "메그니파이 니트로 3", category: "맥스쿠션화", rating: 4 },
  { brand: "Puma", name: "포에버런 니트로", category: "울트라", rating: 4 },
  { brand: "Puma", name: "데비에이트 니트로 3", category: "카본플레이트", rating: 4 },
  // Hoka
  { brand: "Hoka", name: "클리프턴 10", category: "입문화", rating: 5 },
  { brand: "Hoka", name: "본디 9", category: "맥스쿠션화", rating: 4 },
  { brand: "Hoka", name: "마크 3", category: "데일리", rating: 4 },
  { brand: "Hoka", name: "아라히 7", category: "안정화", rating: 4 },
  { brand: "Hoka", name: "스카이워드 X", category: "플레이트", rating: 5 },
  // Brooks
  { brand: "Brooks", name: "고스트 17", category: "데일리", rating: 5 },
  { brand: "Brooks", name: "글리세린 22", category: "맥스쿠션화", rating: 5 },
  { brand: "Brooks", name: "GTS 25", category: "안정화", rating: 4 },
  { brand: "Brooks", name: "하이퍼리온 템포 2", category: "플레이트", rating: 4 },
  // Mizuno
  { brand: "Mizuno", name: "웨이브 라이더 28", category: "데일리", rating: 4 },
  { brand: "Mizuno", name: "네오 코스모", category: "맥스쿠션화", rating: 4 },
  { brand: "Mizuno", name: "웨이브 스카이 8", category: "안정화", rating: 4 },
  { brand: "Mizuno", name: "웨이브 리벨리온 프로 2", category: "카본플레이트", rating: 5 },
  // On
  { brand: "On", name: "클라우드 서퍼 7", category: "입문화", rating: 4 },
  { brand: "On", name: "클라우드몬스터 2", category: "맥스쿠션화", rating: 4 },
  { brand: "On", name: "클라우드스트라토스 3", category: "플레이트", rating: 5 },
  { brand: "On", name: "클라우드붐 에코 3", category: "레이싱", rating: 4 },
];

export function getShoes(): Shoe[] {
  return shoes;
}

export function groupShoesByCategory(shoesList: Shoe[] = shoes): Record<string, Shoe[]> {
  return shoesList.reduce<Record<string, Shoe[]>>((acc, shoe) => {
    if (!acc[shoe.category]) {
      acc[shoe.category] = [];
    }
    acc[shoe.category].push(shoe);
    return acc;
  }, {});
}

export function groupShoesByBrand(shoesList: Shoe[] = shoes): Record<string, Shoe[]> {
  return shoesList.reduce<Record<string, Shoe[]>>((acc, shoe) => {
    if (!acc[shoe.brand]) {
      acc[shoe.brand] = [];
    }
    acc[shoe.brand].push(shoe);
    return acc;
  }, {});
}

export function getBrandsFromShoes(shoesList: Shoe[] = shoes): string[] {
  return Array.from(new Set(shoesList.map((shoe) => shoe.brand))).sort();
}

export function getShoeBySlug(slug: string): Shoe | undefined {
  return shoes.find((shoe) => shoe.slug === slug);
}
