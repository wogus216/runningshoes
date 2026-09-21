import type { Fabric, FabricType } from '@/types/fabric';
import { materialFabrics } from './materials';
import { brandmarkFabrics } from './brandmarks';
import { metricFabrics } from './metrics';
import { reportFabrics } from './reports';

export const fabrics: Fabric[] = [
  ...materialFabrics,
  ...brandmarkFabrics,
  ...metricFabrics,
  ...reportFabrics,
];

export function getFabrics(): Fabric[] {
  return fabrics;
}

export function getFabricBySlug(slug: string): Fabric | undefined {
  return fabrics.find((fabric) => fabric.slug === slug);
}

export function getAllFabricSlugs(): string[] {
  return fabrics.map((fabric) => fabric.slug);
}

export function groupFabricsByType(list: Fabric[] = fabrics): Record<FabricType, Fabric[]> {
  return list.reduce<Record<FabricType, Fabric[]>>(
    (acc, fabric) => {
      acc[fabric.type].push(fabric);
      return acc;
    },
    { material: [], brandmark: [], metric: [], report: [] },
  );
}

/**
 * `related` 가 가리키는 slug 중 실제로 존재하는 것만 돌려준다.
 *
 * 존재하지 않는 slug 는 조용히 버리는 게 아니라 개발 중 콘솔에 남긴다 —
 * 신발 쪽에서 `similarShoes` 가 없는 slug 를 가리켜 링크가 죽은 이력이 있다.
 */
export function getRelatedFabrics(fabric: Fabric): Fabric[] {
  return (fabric.related ?? [])
    .map((slug) => {
      const found = getFabricBySlug(slug);
      if (!found && process.env.NODE_ENV !== 'production') {
        console.warn(`[fabrics] ${fabric.slug}.related 가 없는 slug 를 가리킵니다: ${slug}`);
      }
      return found;
    })
    .filter((f): f is Fabric => Boolean(f));
}
