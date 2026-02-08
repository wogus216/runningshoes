"use client";

import { BarChart3 } from 'lucide-react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import type { ShoeSpecs } from "@/types/shoe";

type SpecRadarChartProps = {
  specs: ShoeSpecs;
  priceValueRating?: number;
  shoeName?: string;
};

// 무게 기반 경량성 점수 계산
function getLightnessScore(weight: number): number {
  if (weight < 200) return 10;
  if (weight < 220) return 9;
  if (weight < 250) return 8;
  if (weight < 280) return 7;
  if (weight < 300) return 6;
  if (weight < 320) return 5;
  return 4;
}

// 스펙 기반 착화감 점수 계산 (쿠셔닝과 안정성의 조합)
function getComfortScore(specs: ShoeSpecs): number {
  const base = (specs.cushioning * 0.5 + specs.stability * 0.3 + (10 - Math.abs(specs.drop - 10) / 2) * 0.2);
  return Math.min(10, Math.round(base * 10) / 10);
}

export function SpecRadarChart({ specs, priceValueRating = 7, shoeName }: SpecRadarChartProps) {
  const lightnessScore = getLightnessScore(specs.weight);
  const comfortScore = getComfortScore(specs);

  const data = [
    {
      subject: '착화감',
      value: comfortScore,
    },
    {
      subject: '쿠셔닝',
      value: specs.cushioning,
    },
    {
      subject: '경량성',
      value: lightnessScore,
    },
    {
      subject: '반발력',
      value: specs.responsiveness,
    },
    {
      subject: '안정성',
      value: specs.stability,
    },
    {
      subject: '가성비',
      value: priceValueRating,
    },
  ];

  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-black flex items-center gap-4">
        <BarChart3 className="h-8 w-8 text-stone-700" />
        성능 한눈에 보기
      </h2>

      <div className="bg-white rounded-2xl p-4 md:p-8 shadow-md">
        <div className="h-[280px] md:h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={data} outerRadius="65%">
              <PolarGrid stroke="rgba(120, 113, 108, 0.15)" />
              <PolarAngleAxis
                dataKey="subject"
                tick={{ fill: '#57534e', fontSize: 11, fontWeight: 700 }}
              />
              <PolarRadiusAxis angle={90} domain={[0, 10]} tick={{ fontSize: 10, fontWeight: 600 }} />
              <Radar
                name={shoeName || "성능"}
                dataKey="value"
                stroke="#57534e"
                fill="rgba(120, 113, 108, 0.2)"
                fillOpacity={0.6}
                strokeWidth={3}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        <p className="text-center text-sm text-gray-500 mt-4">
          * 6가지 핵심 항목을 10점 만점으로 평가했습니다
        </p>
      </div>
    </section>
  );
}
