'use client';

import { useEffect } from 'react';

/**
 * 모바일 사이트 내 이동을 전체 페이지 로드로 바꾸는 실험 (2026-09-27 시작).
 *
 * 왜: AdSense 자동 광고(앵커·인페이지·사이드레일)는 문서가 새로 로드될 때만 배치된다.
 * Next `<Link>` 의 클라이언트 이동에서는 다시 돌지 않아, 세션의 2번째 페이지부터
 * (전체 페이지뷰의 50%) 자동 광고가 새로 뜨지 않았다 — 9/1~21 AdSense 페이지뷰 12,553 이
 * GA 세션 11,977 과 같고(1.05배, 일별 r=0.95) GA 페이지뷰 23,984 의 절반이었다.
 * 자동 광고가 수익의 77%(모바일 앵커 단독 47%)라 그 절반이 비어 있던 셈이다.
 *
 * 설계:
 * - 모바일(767px 이하)만 적용 — 데스크톱은 그대로 둬 같은 기간 대조군으로 쓴다.
 * - capture 단계에서 preventDefault 만 해 `<Link>` 의 클라이언트 이동을 막는다
 *   (Link 는 e.defaultPrevented 면 이동하지 않는다 — next 15.5 app-dir/link.js).
 * - 실제 이동은 window bubble 단계에서 한다. 링크 안의 버튼(찜·비교 담기)은
 *   stopPropagation 을 부르므로 이벤트가 window 까지 오지 않고, 이동도 일어나지 않는다.
 *   React onClick(추적 이벤트 등)은 그 전에 전부 실행된다.
 *
 * 판정: `npm run adsense -- --by device` 의 세션당 수익·세션당 자동 광고 노출을
 * 모바일(실험) vs 데스크톱(대조)로 전후 비교. 방문당 페이지 수가 10% 넘게 줄면 끈다.
 * 끄려면 ENABLED 를 false 로.
 */
const ENABLED = true;
const MOBILE_QUERY = '(max-width: 767px)';

export function shouldFullReload(): boolean {
  return ENABLED && typeof window !== 'undefined' && window.matchMedia(MOBILE_QUERY).matches;
}

function reloadTarget(event: MouseEvent): URL | null {
  if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return null;
  const anchor = (event.target as Element | null)?.closest?.('a[href]') as HTMLAnchorElement | null;
  if (!anchor || anchor.closest('[data-soft-nav]')) return null;
  if ((anchor.target && anchor.target !== '_self') || anchor.hasAttribute('download')) return null;
  const url = new URL(anchor.href, window.location.href);
  if (url.origin !== window.location.origin) return null;
  // 같은 문서 안 이동(목차 #해시)·지금 페이지 재클릭은 건드리지 않는다
  if (url.pathname === window.location.pathname && url.search === window.location.search) return null;
  return url;
}

export function FullReloadNav() {
  useEffect(() => {
    if (!ENABLED) return;
    let pending: URL | null = null;

    const onCapture = (event: MouseEvent) => {
      pending = null;
      if (!shouldFullReload() || event.defaultPrevented) return;
      const url = reloadTarget(event);
      if (!url) return;
      event.preventDefault();
      pending = url;
    };
    const onBubble = () => {
      const url = pending;
      pending = null;
      if (url) window.location.assign(url.href);
    };

    window.addEventListener('click', onCapture, true);
    window.addEventListener('click', onBubble);
    return () => {
      window.removeEventListener('click', onCapture, true);
      window.removeEventListener('click', onBubble);
    };
  }, []);

  return null;
}
