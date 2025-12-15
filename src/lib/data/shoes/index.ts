import type { Shoe } from '@/types/shoe';
import { nikeShoes } from './nike';
import { adidasShoes } from './adidas';
import { asicsShoes } from './asics';
import { newbalanceShoes } from './newbalance';
import { sauconyShoes } from './saucony';
import { pumaShoes } from './puma';
import { hokaShoes } from './hoka';
import { brooksShoes } from './brooks';
import { mizunoShoes } from './mizuno';
import { onShoes } from './on';

export const categoryOrder: string[] = ['입문화', '데일리', '쿠션화', '레이싱', '안정화'];

export const shoes: Shoe[] = [
  ...nikeShoes,
  ...adidasShoes,
  ...asicsShoes,
  ...newbalanceShoes,
  ...hokaShoes,
  ...onShoes,
  ...sauconyShoes,
  ...brooksShoes,
  ...mizunoShoes,
  ...pumaShoes,
];

// 유틸리티 함수들
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

// 비슷한 신발 정보를 가져오는 함수 (필요한 필드만 추출)
export type SimilarShoeInfo = {
  slug: string;
  brand: string;
  name: string;
  rating: number;
  category: string;
  specs?: {
    cushioning: number;
    weight: number;
    stability: number;
  };
  priceAnalysis?: {
    valueRating: number;
  };
};

export function getSimilarShoesData(slugs: string[]): SimilarShoeInfo[] {
  const result: SimilarShoeInfo[] = [];

  for (const slug of slugs) {
    const shoe = shoes.find((s) => s.slug === slug);
    if (shoe && shoe.slug) {
      result.push({
        slug: shoe.slug,
        brand: shoe.brand,
        name: shoe.name,
        rating: shoe.rating,
        category: shoe.category,
        specs: shoe.specs ? {
          cushioning: shoe.specs.cushioning,
          weight: shoe.specs.weight,
          stability: shoe.specs.stability,
        } : undefined,
        priceAnalysis: shoe.priceAnalysis ? {
          valueRating: shoe.priceAnalysis.valueRating,
        } : undefined,
      });
    }
  }

  return result;
}

export default shoes;
