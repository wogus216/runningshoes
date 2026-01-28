import type { Brand, BrandTechnology, TechnologyCategory } from '@/types/brand';
import { nikeBrand } from './nike';
import { adidasBrand } from './adidas';
import { asicsBrand } from './asics';
import { hokaBrand } from './hoka';
import { brooksBrand } from './brooks';
import { sauconyBrand } from './saucony';
import { onBrand } from './on';
import { newBalanceBrand } from './newbalance';
import { pumaBrand } from './puma';
import { mizunoBrand } from './mizuno';

// 모든 브랜드 데이터
export const brands: Brand[] = [
  nikeBrand,
  adidasBrand,
  asicsBrand,
  hokaBrand,
  brooksBrand,
  sauconyBrand,
  onBrand,
  newBalanceBrand,
  pumaBrand,
  mizunoBrand,
];

// 브랜드 ID로 브랜드 데이터 가져오기
export function getBrandById(id: string): Brand | undefined {
  return brands.find((brand) => brand.id === id.toLowerCase());
}

// 브랜드 slug로 브랜드 데이터 가져오기 (getBrandById와 동일)
export function getBrandBySlug(slug: string): Brand | undefined {
  return getBrandById(slug);
}

// 모든 브랜드 목록 가져오기
export function getAllBrands(): Brand[] {
  return brands;
}

// 특정 브랜드의 모든 기술 가져오기
export function getTechnologiesByBrand(brandId: string): BrandTechnology[] {
  const brand = getBrandById(brandId);
  return brand?.technologies ?? [];
}

// 특정 카테고리의 기술만 필터링
export function filterTechnologiesByCategory(
  technologies: BrandTechnology[],
  category: TechnologyCategory
): BrandTechnology[] {
  return technologies.filter((tech) => tech.category === category);
}

// 특정 신발에 적용된 기술 가져오기
export function getTechnologiesForShoe(brandId: string, shoeSlug: string): BrandTechnology[] {
  const technologies = getTechnologiesByBrand(brandId);
  return technologies.filter((tech) => tech.usedInShoes.includes(shoeSlug));
}

// 모든 브랜드 ID 목록 (Static Generation용)
export function getAllBrandSlugs(): string[] {
  return brands.map((brand) => brand.id);
}

// 카테고리별 기술 그룹화
export function groupTechnologiesByCategory(
  technologies: BrandTechnology[]
): Record<TechnologyCategory, BrandTechnology[]> {
  return technologies.reduce(
    (acc, tech) => {
      if (!acc[tech.category]) {
        acc[tech.category] = [];
      }
      acc[tech.category].push(tech);
      return acc;
    },
    {} as Record<TechnologyCategory, BrandTechnology[]>
  );
}

// 기술의 사용 신발 수 계산
export function countShoesUsingTechnology(technology: BrandTechnology): number {
  return technology.usedInShoes.length;
}

// 브랜드의 총 기술 수 계산
export function countTechnologies(brand: Brand): number {
  return brand.technologies.length;
}

// 브랜드명으로 기술 데이터 존재 여부 확인
export function hasTechnologyData(brandName: string): boolean {
  const brandId = brandName.toLowerCase().replace(/\s+/g, '');
  // New Balance -> newbalance 형태로 변환
  const normalizedId = brandId === 'newbalance' ? 'new-balance' : brandId;
  const brand = brands.find(
    (b) => b.id === brandId || b.id === normalizedId || b.name.toLowerCase() === brandName.toLowerCase()
  );
  return brand !== undefined && brand.technologies.length > 0;
}

// 브랜드명으로 기술 페이지 URL 생성
export function getBrandTechnologyUrl(brandName: string): string | null {
  const brandId = brandName.toLowerCase().replace(/\s+/g, '-');
  // 특수 케이스 처리
  const normalizedId = brandId === 'new-balance' ? 'new-balance' : brandId;
  const brand = brands.find(
    (b) => b.id === normalizedId || b.name.toLowerCase() === brandName.toLowerCase()
  );
  if (brand && brand.technologies.length > 0) {
    return `/brands/${brand.id}/technology`;
  }
  return null;
}

// Re-export individual brands
export {
  nikeBrand,
  adidasBrand,
  asicsBrand,
  hokaBrand,
  brooksBrand,
  sauconyBrand,
  onBrand,
  newBalanceBrand,
  pumaBrand,
  mizunoBrand,
};
