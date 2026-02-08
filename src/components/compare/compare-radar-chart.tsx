'use client';

import { useMemo } from 'react';
import type { Shoe } from '@/types/shoe';

type CompareRadarChartProps = {
  shoes: Shoe[];
};

const CHART_SIZE = 400;
const CENTER = CHART_SIZE / 2;
const RADIUS = 150;
const LEVELS = 5;

const metrics = [
  { key: 'cushioning', label: '쿠셔닝' },
  { key: 'responsiveness', label: '반응성' },
  { key: 'stability', label: '안정성' },
  { key: 'durability', label: '내구성' },
  { key: 'value', label: '가성비' },
];

const colors = [
  { stroke: '#57534e', fill: 'rgba(87, 83, 78, 0.2)' },
  { stroke: '#f093fb', fill: 'rgba(240, 147, 251, 0.2)' },
  { stroke: '#00f2fe', fill: 'rgba(0, 242, 254, 0.2)' },
  { stroke: '#ffd700', fill: 'rgba(255, 215, 0, 0.2)' },
];

function polarToCartesian(angle: number, radius: number): { x: number; y: number } {
  const radian = (angle - 90) * (Math.PI / 180);
  return {
    x: CENTER + radius * Math.cos(radian),
    y: CENTER + radius * Math.sin(radian),
  };
}

export function CompareRadarChart({ shoes }: CompareRadarChartProps) {
  const angleStep = 360 / metrics.length;

  // 각 신발의 데이터 포인트 계산
  const shoesData = useMemo(() => {
    return shoes.map((shoe, idx) => {
      const values = metrics.map(metric => {
        if (metric.key === 'value') {
          return (shoe.priceAnalysis?.valueRating || 5) / 10;
        }
        if (metric.key === 'durability') {
          // 내구성은 500km 기준으로 정규화
          return Math.min((shoe.specs?.durability || 300) / 600, 1);
        }
        const value = shoe.specs?.[metric.key as keyof typeof shoe.specs];
        return typeof value === 'number' ? value / 10 : 0.5;
      });

      const points = values.map((value, i) => {
        const point = polarToCartesian(i * angleStep, RADIUS * value);
        return `${point.x},${point.y}`;
      }).join(' ');

      return {
        shoe,
        values,
        points,
        color: colors[idx % colors.length],
      };
    });
  }, [shoes, angleStep]);

  // 배경 그리드 레벨
  const gridLevels = Array.from({ length: LEVELS }, (_, i) => {
    const levelRadius = (RADIUS / LEVELS) * (i + 1);
    const points = metrics.map((_, idx) => {
      const point = polarToCartesian(idx * angleStep, levelRadius);
      return `${point.x},${point.y}`;
    }).join(' ');
    return points;
  });

  // 축 라인
  const axisLines = metrics.map((_, idx) => {
    const end = polarToCartesian(idx * angleStep, RADIUS);
    return { x1: CENTER, y1: CENTER, x2: end.x, y2: end.y };
  });

  // 라벨 위치
  const labels = metrics.map((metric, idx) => {
    const pos = polarToCartesian(idx * angleStep, RADIUS + 30);
    return { ...metric, x: pos.x, y: pos.y };
  });

  return (
    <div className="flex flex-col lg:flex-row items-center gap-8">
      {/* 레이더 차트 */}
      <div className="flex-shrink-0">
        <svg width={CHART_SIZE} height={CHART_SIZE} className="overflow-visible">
          {/* 배경 그리드 */}
          {gridLevels.map((points, idx) => (
            <polygon
              key={idx}
              points={points}
              fill="none"
              stroke="#e2e8f0"
              strokeWidth="1"
            />
          ))}

          {/* 축 라인 */}
          {axisLines.map((line, idx) => (
            <line
              key={idx}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke="#e2e8f0"
              strokeWidth="1"
            />
          ))}

          {/* 신발 데이터 폴리곤 */}
          {shoesData.map((data, idx) => (
            <polygon
              key={idx}
              points={data.points}
              fill={data.color.fill}
              stroke={data.color.stroke}
              strokeWidth="2"
              className="transition-all duration-300"
            />
          ))}

          {/* 데이터 포인트 */}
          {shoesData.map((data, shoeIdx) =>
            data.values.map((value, metricIdx) => {
              const pos = polarToCartesian(metricIdx * angleStep, RADIUS * value);
              return (
                <circle
                  key={`${shoeIdx}-${metricIdx}`}
                  cx={pos.x}
                  cy={pos.y}
                  r="4"
                  fill={data.color.stroke}
                  stroke="white"
                  strokeWidth="2"
                />
              );
            })
          )}

          {/* 라벨 */}
          {labels.map((label, idx) => (
            <text
              key={idx}
              x={label.x}
              y={label.y}
              textAnchor="middle"
              dominantBaseline="middle"
              className="text-xs font-medium fill-slate-600"
            >
              {label.label}
            </text>
          ))}
        </svg>
      </div>

      {/* 범례 */}
      <div className="flex flex-col gap-3">
        <h4 className="text-sm font-semibold text-slate-700">범례</h4>
        {shoesData.map((data, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <span
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: data.color.stroke }}
            />
            <div>
              <p className="text-xs text-slate-500">{data.shoe.brand}</p>
              <p className="text-sm font-semibold text-slate-900">{data.shoe.name}</p>
            </div>
          </div>
        ))}

        {/* 스펙 수치 표시 */}
        <div className="mt-4 pt-4 border-t border-slate-200">
          <h4 className="text-sm font-semibold text-slate-700 mb-3">상세 수치</h4>
          <div className="space-y-2">
            {metrics.map(metric => (
              <div key={metric.key} className="flex items-center gap-2">
                <span className="text-xs text-slate-500 w-16">{metric.label}</span>
                {shoesData.map((data, idx) => {
                  let displayValue: string;
                  if (metric.key === 'value') {
                    displayValue = `${data.shoe.priceAnalysis?.valueRating || '-'}/10`;
                  } else if (metric.key === 'durability') {
                    displayValue = `${data.shoe.specs?.durability || '-'}km`;
                  } else {
                    const val = data.shoe.specs?.[metric.key as keyof typeof data.shoe.specs];
                    displayValue = typeof val === 'number' ? `${val}/10` : '-';
                  }
                  return (
                    <span
                      key={idx}
                      className="text-xs font-medium px-2 py-1 rounded"
                      style={{ backgroundColor: `${data.color.stroke}20`, color: data.color.stroke }}
                    >
                      {displayValue}
                    </span>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
