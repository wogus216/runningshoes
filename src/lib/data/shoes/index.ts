import type { Shoe, KoreanFootFit } from '@/types/shoe';
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
import { liningShoes } from './lining';
import { salomonShoes } from './salomon';

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
  ...liningShoes,
  ...salomonShoes,
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

/**
 * 카드/필터 표시용 경량 타입 — reviews, detailedSpecs, editorComment,
 * purchaseLinks, similarShoes, images 등 무거운 필드 제거.
 * 클라이언트 번들 ~50% 절감 목표 (461KB → ~200KB).
 */
export type CardShoe = Pick<Shoe,
  | 'id' | 'slug' | 'brand' | 'name' | 'category' | 'rating'
  | 'image' | 'price' | 'tags' | 'oneliner'
  | 'specs' | 'biomechanics' | 'injuryPrevention' | 'koreanFootFit'
  | 'targetUsers' | 'priceAnalysis' | 'features'
>;

export function toCardShoe(shoe: Shoe): CardShoe {
  // 제외 필드 (클라이언트 번들 절감):
  // reviews, detailedSpecs, editorComment, purchaseLinks, similarShoes, images,
  // description, status (2026-07 소비처 전수 조사에서 사용 0회 확인)
  return {
    id: shoe.id,
    slug: shoe.slug,
    brand: shoe.brand,
    name: shoe.name,
    category: shoe.category,
    rating: shoe.rating,
    image: shoe.image,
    price: shoe.price,
    tags: shoe.tags,
    oneliner: shoe.oneliner,
    features: shoe.features,
    specs: shoe.specs,
    biomechanics: shoe.biomechanics,
    injuryPrevention: shoe.injuryPrevention,
    koreanFootFit: shoe.koreanFootFit,
    targetUsers: shoe.targetUsers,
    priceAnalysis: shoe.priceAnalysis,
  };
}

export function getCardShoes(): CardShoe[] {
  return shoes.map(toCardShoe);
}

/**
 * 카드 그리드/필터 표면 전용 초경량 타입 — 홈·브랜드뷰·계층뷰가 사용.
 * 중첩 객체도 실사용 서브필드만 유지 (2026-07 필드별 실측: 123KB → ~40KB).
 * 비교 담기는 CompareItem(slug 기반)이라 전체 객체가 필요 없다.
 * 전체 데이터가 필요한 비교/추천은 CardShoe를 그대로 쓴다.
 */
export type GridShoe = Pick<Shoe,
  | 'id' | 'slug' | 'brand' | 'name' | 'category' | 'rating'
  | 'image' | 'price' | 'tags' | 'oneliner' | 'injuryPrevention'
> & {
  specs?: { weight?: number };
  biomechanics?: { drop?: number; carbonPlate?: boolean };
  koreanFootFit?: Pick<KoreanFootFit, 'toBoxWidth' | 'flatFootCompatibility' | 'winterCompatibility'>;
  priceAnalysis?: { valueRating?: number; msrp?: number };
  /** targetUsers.recommended에 초보/입문 포함 여부 사전계산 (카드 뱃지용) */
  beginnerFriendly?: boolean;
};

export function toGridShoe(shoe: Shoe): GridShoe {
  return {
    id: shoe.id,
    slug: shoe.slug,
    brand: shoe.brand,
    name: shoe.name,
    category: shoe.category,
    rating: shoe.rating,
    image: shoe.image,
    price: shoe.price,
    tags: shoe.tags,
    oneliner: shoe.oneliner,
    injuryPrevention: shoe.injuryPrevention,
    specs: shoe.specs ? { weight: shoe.specs.weight } : undefined,
    biomechanics: shoe.biomechanics
      ? { drop: shoe.biomechanics.drop, carbonPlate: shoe.biomechanics.carbonPlate }
      : undefined,
    koreanFootFit: shoe.koreanFootFit
      ? {
          toBoxWidth: shoe.koreanFootFit.toBoxWidth,
          flatFootCompatibility: shoe.koreanFootFit.flatFootCompatibility,
          winterCompatibility: shoe.koreanFootFit.winterCompatibility,
        }
      : undefined,
    priceAnalysis: shoe.priceAnalysis
      ? { valueRating: shoe.priceAnalysis.valueRating, msrp: shoe.priceAnalysis.msrp }
      : undefined,
    beginnerFriendly:
      shoe.targetUsers?.recommended?.some((t) => t.includes('초보') || t.includes('입문')) ?? false,
  };
}

export function getGridShoes(): GridShoe[] {
  return shoes.map(toGridShoe);
}

export default shoes;
