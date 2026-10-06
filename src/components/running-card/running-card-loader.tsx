'use client';

import dynamic from 'next/dynamic';
import { useCallback, useEffect, useState } from 'react';
// 스타일은 라우트와 함께 실어 메달 청크가 오기 전에도 화면이 잉크색이다. 선택자는 전부 .rcm 아래라 다른 페이지에 새지 않는다.
import './medal/medal3d-flow.css';
import './medal/ruler.css';
import './running-card-result.css';

// three 와 메달 모듈은 이 동적 청크(와 그 안의 import('three'))에만 실린다 — 토요일 페이지와 같은 방식.
const RunningCardMedal = dynamic(() => import('./running-card-medal'), {
  ssr: false,
  loading: () => <div className="rcm" />,
});
// 공유 링크 화면은 메달·three 없이 따로 싣는다.
const RunningCardShared = dynamic(() => import('./running-card-shared'), {
  ssr: false,
  loading: () => <div className="rcm" />,
});

// ?card= 가 있으면 공유받은 화면부터(S4, D11). '내 메달 만들기'를 누르면 쿼리를 지우고 메달 흐름을 연다.
// run: '처음부터 다시 하기'마다 하나씩 올려 메달 흐름을 새로 마운트한다(기록·명판·판정이 처음 상태로).
export function RunningCardLoader() {
  const [card, setCard] = useState<string | null | undefined>(undefined);
  const [run, setRun] = useState(0);

  useEffect(() => {
    setCard(new URLSearchParams(window.location.search).get('card'));
  }, []);

  const start = useCallback(() => {
    const url = new URL(window.location.href);
    url.searchParams.delete('card');
    window.history.replaceState(window.history.state, '', url);
    setCard(null);
    window.scrollTo(0, 0);
  }, []);

  const restart = useCallback(() => {
    setRun((n) => n + 1);
    window.scrollTo(0, 0);
  }, []);

  if (card === undefined) return <div className="rcm" />;
  if (card) return <RunningCardShared raw={card} onStart={start} />;
  return <RunningCardMedal key={run} onRestart={restart} />;
}
