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
}: AdSlotProps) {
  const pushedRef = useRef(false);

  useEffect(() => {
    if (pushedRef.current) return;
    if (!slot || !ADSENSE_CLIENT_ID) return;
    if (typeof window === 'undefined') return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushedRef.current = true;
    } catch {
      // AdSense 스크립트 로드 전 호출 시 silent fail — afterInteractive로 곧 로드됨
    }
  }, [slot]);

  if (!slot || !ADSENSE_CLIENT_ID) return null;

  return (
    <aside
      className={`ad-slot my-10 not-prose ${className}`.trim()}
      aria-label={label}
      role="complementary"
    >
      <div className="text-[10px] uppercase tracking-wider text-gray-400 mb-1 text-center">
        Advertisement
      </div>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', textAlign: 'center' }}
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
