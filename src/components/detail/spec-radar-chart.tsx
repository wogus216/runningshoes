"use client";

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import type { ShoeSpecs } from "@/types/shoe";

type SpecRadarChartProps = {
  specs: ShoeSpecs;
  priceValueRating?: number;
};

export function SpecRadarChart({ specs, priceValueRating = 9 }: SpecRadarChartProps) {
  const data = [
    {
      subject: '착화감 (76%)',
      value: 10,
    },
    {
      subject: '쿠셔닝',
      value: specs.cushioning,
    },
    {
      subject: '경량성',
      value: 7,
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
        <span className="text-4xl">📊</span>
        성능 한눈에 보기
      </h2>

      <div className="bg-white rounded-2xl p-8 shadow-md">
        <ResponsiveContainer width="100%" height={400}>
          <RadarChart data={data}>
            <PolarGrid stroke="rgba(102, 126, 234, 0.1)" />
            <PolarAngleAxis
              dataKey="subject"
              tick={{ fill: '#667eea', fontSize: 13, fontWeight: 700 }}
            />
            <PolarRadiusAxis angle={90} domain={[0, 10]} tick={{ fontSize: 12, fontWeight: 600 }} />
            <Radar
              name="페가수스 41"
              dataKey="value"
              stroke="#667eea"
              fill="rgba(102, 126, 234, 0.2)"
              fillOpacity={0.6}
              strokeWidth={3}
            />
          </RadarChart>
        </ResponsiveContainer>

        <p className="text-center text-sm text-gray-500 mt-4">
          * 한국 소비자 조사:{" "}
          <strong className="text-[#667eea]">착화감이 76%로 구매 결정 1순위</strong>
        </p>
      </div>
    </section>
  );
}
