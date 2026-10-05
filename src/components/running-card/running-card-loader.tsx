'use client';

import dynamic from 'next/dynamic';
// 스타일은 라우트와 함께 실어 메달 청크가 오기 전에도 화면이 잉크색이다. 선택자는 전부 .rcm 아래라 다른 페이지에 새지 않는다.
import './medal/medal3d-flow.css';
import './medal/ruler.css';

// three 와 메달 모듈은 이 동적 청크(와 그 안의 import('three'))에만 실린다 — 토요일 페이지와 같은 방식.
const RunningCardMedal = dynamic(() => import('./running-card-medal'), {
  ssr: false,
  loading: () => <div className="rcm" />,
});

export function RunningCardLoader() {
  return <RunningCardMedal />;
}
