'use client';

import { useEffect, useState } from 'react';
import type { GridShoe } from '@/lib/data/shoes';
import type { BlogCardMeta } from '@/types/blog';
import type { DataStatus } from '@/lib/home/data-status';
import type { ProblemThumb } from '@/lib/home/problem-counts';
import type { HomeStats } from '@/lib/home/stats';
import { hasAnyRecent } from '@/lib/recent';
import { HomeAdSlot } from '@/components/home/home-ad-slot';
import { KineticHero } from '@/components/home/kinetic-hero';
import { ResumeSection } from '@/components/home/resume-section';
import { ProblemExplorer } from '@/components/home/problem-explorer';
import { RecommendationProcess } from '@/components/home/recommendation-process';
import { TrustMetrics } from '@/components/home/trust-metrics';
import { ShoeIndexPreview } from '@/components/home/shoe-index-preview';
import { EditorialSection } from '@/components/home/editorial-section';
import { FinalCTA } from '@/components/home/final-cta';

export interface HomeContentProps {
  shoes: GridShoe[];
  stats: HomeStats;
  posts: BlogCardMeta[];
  /** 고민 slug → /best 매트릭스 결과 수 */
  problemCounts: Record<string, number>;
  /** 고민별 탐색 주요 패널 썸네일 */
  problemThumbs: ProblemThumb[];
  /** 신발 slug → 데이터 상태 */
  dataStatuses: Record<string, DataStatus>;
  brandCount: number;
  gelCount: number;
  categoryCount: number;
}

/** ISO → "07.31" */
function shortDate(iso: string | null): string | undefined {
  if (!iso) return undefined;
  return `${iso.slice(5, 7)}.${iso.slice(8, 10)}`;
}

/**
 * 홈 조립.
 *
 * 이 컴포넌트는 **배치만** 담당한다. 데이터 산출은 서버 페이지(`(main)/page.tsx`)와
 * `src/lib/home/*` 가 하고, 여기서는 순서와 재방문 분기만 결정한다.
 *
 * 재방문 분기(스펙 §5): 기록이 있으면 이어보기가 들어가고 **추천 작동 방식은 빠진다**.
 * 이미 아는 사용자에게 9문항 설명을 반복하면 이어보기와 인덱스 사이가 멀어져 순회 효율이
 * 떨어진다. 추천 진입은 히어로 CTA·헤더·최종 밴드로 여전히 세 번 열려 있다.
 *
 * 서버 렌더와 하이드레이션 첫 렌더는 모두 "신규 방문자" 상태다 — 정적 HTML 에는 추천 작동
 * 방식이 남아 크롤러가 읽고, 재방문자에게만 마운트 후 빠진다.
 */
export function HomeContent({
  shoes,
  stats,
  posts,
  problemCounts,
  problemThumbs,
  dataStatuses,
  brandCount,
  gelCount,
  categoryCount,
}: HomeContentProps) {
  const [returning, setReturning] = useState(false);

  useEffect(() => {
    setReturning(hasAnyRecent());
  }, []);

  const [lead, ...rest] = posts;

  return (
    <>
      <KineticHero />

      <ResumeSection validSlugs={shoes.map((s) => s.slug)} questionCount={stats.questionCount} />

      <ProblemExplorer counts={problemCounts} leadThumbs={problemThumbs} />

      {!returning && (
        <RecommendationProcess questionCount={stats.questionCount} minutes={stats.estimatedMinutes} />
      )}

      <TrustMetrics shoeCount={stats.shoeCount} lastUpdated={stats.lastUpdated} />

      <ShoeIndexPreview shoes={shoes} statuses={dataStatuses} />

      {/* 홈 하단 광고 — 인덱스와 에디토리얼 사이. 현행 "결과 그리드 ↔ Beyond Shoes" 경계를
          그대로 승계한다. 슬롯 ID·개수·위치를 바꾸지 않고 도달 계측만 덧댄다(스펙 §7·§8). */}
      <HomeAdSlot />

      {lead && <EditorialSection lead={lead} items={rest.slice(0, 6)} />}

      <FinalCTA
        questionCount={stats.questionCount}
        minutes={stats.estimatedMinutes}
        shoeCount={stats.shoeCount}
        categoryCount={categoryCount}
        brandCount={brandCount}
        gelCount={gelCount}
        updatedLabel={shortDate(stats.lastUpdated)}
      />
    </>
  );
}
