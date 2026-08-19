import type { RaceElevationPoint } from '@/types/blog';

export interface ElevationPath {
  /** 선 경로 */
  line: string;
  /** 바닥까지 닫은 면 경로 */
  area: string;
  minM: number;
  maxM: number;
}

/**
 * 고도 점들을 SVG 경로로 바꾼다. 순수 함수라 테스트 가능하고,
 * 이미지가 아니라 마크업이라 다크모드·반응형·갱신이 전부 따라온다.
 */
export function buildElevationPath(
  points: RaceElevationPoint[],
  width: number,
  height: number,
): ElevationPath {
  if (points.length < 2) {
    return { line: '', area: '', minM: 0, maxM: 0 };
  }

  const kms = points.map((p) => p.km);
  const ms = points.map((p) => p.m);
  const minKm = Math.min(...kms);
  const maxKm = Math.max(...kms);
  const minM = Math.min(...ms);
  const maxM = Math.max(...ms);

  const kmSpan = maxKm - minKm || 1;
  const mSpan = maxM - minM;

  const coords = points.map((p) => {
    const x = ((p.km - minKm) / kmSpan) * width;
    // 고도가 전부 같으면 0으로 나누게 되므로 가운데에 둔다
    const y = mSpan === 0 ? height / 2 : height - ((p.m - minM) / mSpan) * height;
    return `${round(x)} ${round(y)}`;
  });

  const line = `M ${coords.join(' L ')}`;
  const area = `${line} L ${round(width)} ${round(height)} L 0 ${round(height)} Z`;

  return { line, area, minM, maxM };
}

function round(n: number): number {
  return Math.round(n * 100) / 100;
}
