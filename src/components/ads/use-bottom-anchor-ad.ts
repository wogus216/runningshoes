'use client';

import { useEffect, useState } from 'react';

/**
 * AdSense 자동 광고 앵커가 **화면 하단에** 떠 있는지.
 *
 * 모바일 앵커는 펼친 상태가 390×330px(화면의 39%)이고 z-index 가 최대라, 하단 고정 UI 를
 * 그대로 덮는다(2026-09-27 라이브 실측 — 신발 상세 구매 바가 완전히 가려졌다). 광고 바로 옆에
 * 우리 버튼을 두면 오클릭 유도가 되므로, 앵커가 있는 동안에는 하단 UI 를 다른 곳으로 옮긴다.
 *
 * 앵커는 AdSense 가 body 직계 자식 `ins.adsbygoogle[data-anchor-status]` 로 넣는다.
 * 닫으면 status 가 displayed 가 아니게 되고, 상단 앵커(top:0)는 하단 UI 와 겹치지 않으므로 제외한다.
 */
export function useBottomAnchorAd(): boolean {
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    let anchor: Element | null = null;

    const check = () => {
      const el = document.querySelector('body > ins.adsbygoogle[data-anchor-status]');
      if (el !== anchor) {
        attrObserver.disconnect();
        anchor = el;
        if (el) attrObserver.observe(el, { attributes: true, attributeFilter: ['data-anchor-status', 'style'] });
      }
      if (!el || el.getAttribute('data-anchor-status') !== 'displayed') {
        setAtBottom(false);
        return;
      }
      const style = getComputedStyle(el);
      const rect = el.getBoundingClientRect();
      const visible = style.display !== 'none' && style.visibility !== 'hidden' && rect.height > 0;
      setAtBottom(visible && rect.top > 0 && rect.bottom >= window.innerHeight - 4);
    };

    const attrObserver = new MutationObserver(check);
    const bodyObserver = new MutationObserver(check);
    bodyObserver.observe(document.body, { childList: true });
    window.addEventListener('resize', check);
    check();

    return () => {
      attrObserver.disconnect();
      bodyObserver.disconnect();
      window.removeEventListener('resize', check);
    };
  }, []);

  return atBottom;
}
