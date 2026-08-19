'use client';

import { useEffect, useState } from 'react';
import { missionDdayLabel } from '@/lib/challenge/stats';

// 서버 초기 마크업은 날짜(2026.11.15)를 보여주고,
// hydration 뒤에만 KST 기준 D-N / D-DAY / MISSION DAY PASSED로 갱신한다.
export function DdayCounter() {
  const [label, setLabel] = useState('2026.11.15');

  useEffect(() => {
    setLabel(missionDdayLabel(new Date()));
  }, []);

  return <span suppressHydrationWarning>{label}</span>;
}
