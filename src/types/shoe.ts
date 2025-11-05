export type ShoeStatus = "new" | "updated" | "featured" | "great";

export interface Shoe {
  brand: string;
  name: string;
  category: string;
  rating: number;
  image?: string;
  status?: ShoeStatus;
}

export const categoryOrder = [
  '입문화',
  '맥스쿠션화',
  '데일리',
  '안정화',
  '울트라',
  '경량트레일러닝',
  '플레이트',
  '슈퍼트레이너',
  '카본플레이트',
  '중거리',
  '레이싱'
] as const;

export type Category = typeof categoryOrder[number];
