export type ShoeStatus = "new" | "updated" | "featured" | "great";

export interface Shoe {
  brand: string;
  name: string;
  category: string;
  rating: number;
  image?: string;
  status?: ShoeStatus;
}
