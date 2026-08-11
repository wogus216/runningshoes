import { toRadarAxes } from '@/lib/challenge/stats';
import type { CrewStats, RadarAxes } from '@/types/challenge';

// 시계 방향 12시부터. 라벨 순서와 axisValues 순서는 반드시 일치해야 한다.
const AXIS_LABELS = ['주력', '지구력', '스피드', '꾸준함'] as const;

function axisValues(a: RadarAxes): number[] {
  return [a.power, a.endurance, a.speed, a.consistency];
}

function polygon(values: number[], cx: number, cy: number, r: number): string {
  return values
    .map((v, i) => {
      const angle = ((-90 + i * 90) * Math.PI) / 180;
      const d = (v / 100) * r;
      return `${(cx + d * Math.cos(angle)).toFixed(1)},${(cy + d * Math.sin(angle)).toFixed(1)}`;
    })
    .join(' ');
}

export function StatRadar({
  baseline,
  final,
  size = 120,
}: {
  baseline: CrewStats;
  final?: CrewStats;
  size?: number;
}) {
  const c = size / 2;
  const r = size / 2 - 18; // 라벨 자리
  const basePoints = polygon(axisValues(toRadarAxes(baseline)), c, c, r);
  const finalPoints = final ? polygon(axisValues(toRadarAxes(final)), c, c, r) : null;

  const label = final
    ? `준비 시작과 대회 직전의 러닝 지표 비교: ${AXIS_LABELS.join(', ')}`
    : `러닝 지표: ${AXIS_LABELS.join(', ')}`;

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      width={size}
      height={size}
      role="img"
      aria-label={label}
      className="mx-auto block"
    >
      {/* 격자 — 25% 간격 4겹 */}
      {[0.25, 0.5, 0.75, 1].map((ratio) => (
        <polygon
          key={ratio}
          points={polygon([100, 100, 100, 100], c, c, r * ratio)}
          fill="none"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="1"
        />
      ))}
      {/* 축선 */}
      {[0, 1, 2, 3].map((i) => {
        const angle = ((-90 + i * 90) * Math.PI) / 180;
        return (
          <line
            key={i}
            x1={c}
            y1={c}
            x2={c + r * Math.cos(angle)}
            y2={c + r * Math.sin(angle)}
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="1"
          />
        );
      })}
      {/* 베이스라인 */}
      <polygon
        points={basePoints}
        fill={finalPoints ? 'rgba(255,255,255,0.10)' : 'rgba(96,165,250,0.28)'}
        stroke={finalPoints ? 'rgba(255,255,255,0.45)' : '#60a5fa'}
        strokeWidth="1.5"
      />
      {/* 대회 직전 (있을 때만) */}
      {finalPoints && (
        <polygon
          points={finalPoints}
          fill="rgba(251,146,60,0.28)"
          stroke="#fb923c"
          strokeWidth="2"
        />
      )}
      {/* 라벨 */}
      {AXIS_LABELS.map((text, i) => {
        const angle = ((-90 + i * 90) * Math.PI) / 180;
        const lr = r + 12;
        return (
          <text
            key={text}
            x={c + lr * Math.cos(angle)}
            y={c + lr * Math.sin(angle)}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="9"
            fontWeight="700"
            fill="rgba(255,255,255,0.55)"
          >
            {text}
          </text>
        );
      })}
    </svg>
  );
}
