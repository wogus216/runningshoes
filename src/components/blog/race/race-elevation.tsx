import type { RaceElevationPoint } from '@/types/blog';
import { buildElevationPath } from '@/lib/blog/elevation-path';

const W = 600;
const H = 120;

/**
 * 고도 프로파일. 거리·고도는 사실 데이터라 저작권 대상이 아니다 —
 * 대회 공식 코스맵을 쓰지 않는 이유는 스펙 9-1절에 있다.
 *
 * ⚠️ 수치가 없으면 렌더하지 않는다. 추정으로 그린 산 모양은 실측처럼 읽힌다.
 */
export function RaceElevation({
  points,
  source,
}: {
  points: RaceElevationPoint[];
  source?: string;
}) {
  const { line, area, minM, maxM } = buildElevationPath(points, W, H);
  if (!line) return null;

  const lastKm = points[points.length - 1].km;

  return (
    <figure className="race-elev">
      <svg
        className="race-elev__svg"
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="none"
        role="img"
        aria-label={`고도 프로파일 — 최저 ${minM}m, 최고 ${maxM}m, 총 ${lastKm}km`}
      >
        <path className="race-elev__area" d={area} />
        <path className="race-elev__line" d={line} />
      </svg>
      <figcaption className="race-elev__cap">
        <span>최저 {minM}m · 최고 {maxM}m · {lastKm}km</span>
        {source && <span>출처 {source}</span>}
      </figcaption>
    </figure>
  );
}
