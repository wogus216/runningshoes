import type { Shoe } from '@/types/shoe';
import { categoryOrder as sharedCategoryOrder } from '@/types/shoe';
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

// Re-export from types/shoe.ts to keep a single source of truth
export const categoryOrder: readonly string[] = sharedCategoryOrder;

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

// Memoized defaults — computed once per module load (static at build time)
let _defaultByCategory: Record<string, Shoe[]> | null = null;
let _defaultByBrand: Record<string, Shoe[]> | null = null;
let _defaultBrands: string[] | null = null;

function groupByKey(list: Shoe[], key: 'category' | 'brand'): Record<string, Shoe[]> {
  return list.reduce<Record<string, Shoe[]>>((acc, shoe) => {
    const k = shoe[key];
    if (!acc[k]) acc[k] = [];
    acc[k].push(shoe);
    return acc;
  }, {});
}

export function groupShoesByCategory(shoesList: Shoe[] = shoes): Record<string, Shoe[]> {
  if (shoesList === shoes) {
    if (!_defaultByCategory) _defaultByCategory = groupByKey(shoes, 'category');
    return _defaultByCategory;
  }
  return groupByKey(shoesList, 'category');
}

export function groupShoesByBrand(shoesList: Shoe[] = shoes): Record<string, Shoe[]> {
  if (shoesList === shoes) {
    if (!_defaultByBrand) _defaultByBrand = groupByKey(shoes, 'brand');
    return _defaultByBrand;
  }
  return groupByKey(shoesList, 'brand');
}

export function getBrandsFromShoes(shoesList: Shoe[] = shoes): string[] {
  if (shoesList === shoes) {
    if (!_defaultBrands) _defaultBrands = Array.from(new Set(shoes.map((s) => s.brand))).sort();
    return _defaultBrands;
  }
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
  image?: string;
  price?: number;
  specs?: {
    cushioning: number;
    weight: number;
    stability: number;
  };
  priceAnalysis?: {
    valueRating: number;
  };
  koreanFootFit?: {
    toBoxWidth: string;
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
        image: shoe.image,
        price: shoe.price,
        specs: shoe.specs ? {
          cushioning: shoe.specs.cushioning,
          weight: shoe.specs.weight,
          stability: shoe.specs.stability,
        } : undefined,
        priceAnalysis: shoe.priceAnalysis ? {
          valueRating: shoe.priceAnalysis.valueRating,
        } : undefined,
        koreanFootFit: shoe.koreanFootFit ? {
          toBoxWidth: shoe.koreanFootFit.toBoxWidth,
        } : undefined,
      });
    }
  }

  return result;
}

export default shoes;
