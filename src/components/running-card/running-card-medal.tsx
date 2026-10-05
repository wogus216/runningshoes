'use client';

import { useEffect, useRef } from 'react';
import { mountMedalFlow } from './medal/medal3d-flow';

// 3D 메달 입력 흐름(3D-3 시안, vanilla three)을 붙였다 뗀다. 화면과 동작은 전부 medal3d-flow.js 가 가진다.
// 마운트할 때마다 마크업을 새로 쓰고, 뗄 때 렌더러·워커·타이머·문서 리스너를 정리한다.
export default function RunningCardMedal() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = container.current;
    if (!el) return;
    return mountMedalFlow(el);
  }, []);

  return <div ref={container} className="rcm" />;
}
