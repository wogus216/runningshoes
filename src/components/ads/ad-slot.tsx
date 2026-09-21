'use client';

import { useEffect, useRef } from 'react';
import { ADSENSE_CLIENT_ID } from '@/lib/constants';

type AdFormat = 'auto' | 'fluid' | 'rectangle' | 'horizontal' | 'vertical';

type AdSlotProps = {
  slot: string;
  format?: AdFormat;
  layout?: string;
  layoutKey?: string;
  className?: string;
  label?: string;
  /** CLS 방지용 예약 높이(px). 미지정 시 format 기반 기본값. */
  minHeight?: number;
};

declare global {
  interface Window {
    adsbygoogle?: Array<Record<string, unknown>>;
  }
}

export function AdSlot({
  slot,
  format = 'auto',
  layout,
  layoutKey,
  className = '',
  label = '광고',
  minHeight,
}: AdSlotProps) {
  const pushedRef = useRef(false);
  const containerRef = useRef<HTMLElement>(null);
  // fluid(in-article)는 가변이라 보수적으로, display/auto는 모바일 반응형 배너 높이로 예약
  const reservedHeight = minHeight ?? (format === 'fluid' ? 200 : 280);

  useEffect(() => {
    if (!slot || !ADSENSE_CLIENT_ID) return;
    if (typeof window === 'undefined') return;

    const loadAd = () => {
      if (pushedRef.current) return;

      // 광고 슬롯이 실제 뷰포트 근처에 왔을 때만 AdSense를 로드한다.
      // 전역 레이아웃에서 즉시 로드하던 160KB+ 스크립트를 초기 렌더 경로에서 제외한다.
      if (!document.querySelector('script[data-adsense-loader]')) {
        const script = document.createElement('script');
        script.async = true;
        script.crossOrigin = 'anonymous';
        script.dataset.adsenseLoader = 'true';
        script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`;
        document.head.appendChild(script);
      }

      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        pushedRef.current = true;
      } catch {
        // 네트워크 차단 등으로 실패하면 다음 마운트에서 다시 시도한다.
      }
    };

    const container = containerRef.current;
    if (!container) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          loadAd();
          observer.disconnect();
        }
      },
      { rootMargin: '300px 0px' },
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, [slot]);

  if (!slot || !ADSENSE_CLIENT_ID) return null;

  return (
    <aside
      ref={containerRef}
      className={`ad-slot my-10 not-prose ${className}`.trim()}
      aria-label={label}
      role="complementary"
    >
      <div className="text-[10px] uppercase tracking-wider text-gray-400 mb-1 text-center">
        Advertisement
      </div>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', textAlign: 'center', minHeight: `${reservedHeight}px` }}
        data-ad-client={ADSENSE_CLIENT_ID}
        data-ad-slot={slot}
        data-ad-format={format}
        {...(layout ? { 'data-ad-layout': layout } : {})}
        {...(layoutKey ? { 'data-ad-layout-key': layoutKey } : {})}
        data-full-width-responsive="true"
      />
    </aside>
  );
}
