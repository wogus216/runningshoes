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
  // Nike
  { brand: "Nike", name: "페가수스 41", category: "입문화", rating: 4 },
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
