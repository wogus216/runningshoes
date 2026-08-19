'use client';

import { useEffect, useState } from 'react';
import type { RaceMeta } from '@/types/blog';
import { deriveRaceStatus, type RaceStatusKind } from '@/lib/blog/race-status';

/**
 * 상태 배지 — 이 파일이 이 기능의 유일한 클라이언트 컴포넌트다.
 *
 * SSG라 빌드 시점에 D-day를 굳히면 다음 배포까지 낡는다(그 사고가 실제로 있었다).
 * 그래서 브라우저의 현재 시각으로 계산한다. 서버 렌더 시점에는 날짜 텍스트만
 * 보여주므로 JS가 없어도 정보는 남는다.
 *
 * ⚠️ 모듈 스코프에서 데이터 getter를 부르지 않는다 — prop만 받는다.
 */
export function RaceStatusBadge({ meta }: { meta: RaceMeta }) {
  const [kind, setKind] = useState<RaceStatusKind | null>(null);
  const [label, setLabel] = useState<string>('');

  useEffect(() => {
    const s = deriveRaceStatus(meta, new Date());
    setKind(s.kind);
    setLabel(s.label);
  }, [meta]);

  // hydration 전 — 날짜 텍스트로 대체한다
  if (kind === null) {
    const fallback = meta.registrationStart
      ? `접수 ${meta.registrationStart.slice(5, 10).replace('-', '월 ')}일`
      : '접수 미정';
    return <span className="race-badge race-badge--tbd">{fallback}</span>;
  }

  return (
    <span className={`race-badge race-badge--${kind}`}>
      {kind === 'open' && <span className="race-badge__pulse" aria-hidden="true" />}
      {label}
    </span>
  );
}
