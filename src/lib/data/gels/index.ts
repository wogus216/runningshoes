import type { Gel, GelCategory, SimilarGelInfo } from '@/types/gel';
import { premiumGels } from './premium';
import { koreanGels } from './korean';
import { classicGels } from './classic';

export const gelCategoryOrder: GelCategory[] = ['프리미엄', '스테디셀러', '가성비'];

export const gels: Gel[] = [
  ...premiumGels,
  ...koreanGels,
  ...classicGels,
];

export function getGels(): Gel[] {
  return gels;
}

export function getGelBySlug(slug: string): Gel | undefined {
  return gels.find((gel) => gel.slug === slug);
}

export function groupGelsByCategory(gelsList: Gel[] = gels): Record<string, Gel[]> {
  return gelsList.reduce<Record<string, Gel[]>>((acc, gel) => {
    if (!acc[gel.category]) {
      acc[gel.category] = [];
    }
    acc[gel.category].push(gel);
    return acc;
  }, {});
}

export function groupGelsByBrand(gelsList: Gel[] = gels): Record<string, Gel[]> {
  return gelsList.reduce<Record<string, Gel[]>>((acc, gel) => {
    if (!acc[gel.brand]) {
      acc[gel.brand] = [];
    }
    acc[gel.brand].push(gel);
    return acc;
  }, {});
}

export function getBrandsFromGels(gelsList: Gel[] = gels): string[] {
  return Array.from(new Set(gelsList.map((gel) => gel.brand))).sort();
}

export function getSimilarGelsData(slugs: string[]): SimilarGelInfo[] {
  const result: SimilarGelInfo[] = [];

  for (const slug of slugs) {
    const gel = gels.find((g) => g.slug === slug);
    if (gel) {
      result.push({
        slug: gel.slug,
        brand: gel.brand,
        name: gel.name,
        rating: gel.rating,
        category: gel.category,
        image: gel.image,
        price: gel.price,
        nutritionFacts: {
          totalCarbs: gel.nutritionFacts.totalCarbs,
          caffeine: gel.nutritionFacts.caffeine,
          calories: gel.nutritionFacts.calories,
        },
        ratings: {
          overall: gel.ratings.overall,
          giComfort: gel.ratings.giComfort,
        },
      });
    }
  }

  return result;
}

export default gels;
