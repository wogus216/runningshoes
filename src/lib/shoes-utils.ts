/**
 * 순수 유틸리티 함수 — 신발 데이터 모듈과 독립적으로 import 가능.
 * 클라이언트 컴포넌트는 여기서 import해야 461KB 데이터 번들이 끌려오지 않음.
 */

type MinShoe = {
  brand: string;
  category: string;
};

export function groupByBrand<T extends MinShoe>(list: T[]): Record<string, T[]> {
  return list.reduce<Record<string, T[]>>((acc, shoe) => {
    if (!acc[shoe.brand]) acc[shoe.brand] = [];
    acc[shoe.brand].push(shoe);
    return acc;
  }, {});
}

export function groupByCategory<T extends MinShoe>(list: T[]): Record<string, T[]> {
  return list.reduce<Record<string, T[]>>((acc, shoe) => {
    if (!acc[shoe.category]) acc[shoe.category] = [];
    acc[shoe.category].push(shoe);
    return acc;
  }, {});
}

export function uniqueBrands<T extends MinShoe>(list: T[]): string[] {
  return Array.from(new Set(list.map((s) => s.brand))).sort();
}
