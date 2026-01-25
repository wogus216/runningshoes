'use client';

import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

interface AdUnitProps {
  slot: string;
  format?: 'auto' | 'fluid' | 'rectangle' | 'horizontal' | 'vertical';
  responsive?: boolean;
  className?: string;
}

export function AdUnit({ slot, format = 'auto', responsive = true, className = '' }: AdUnitProps) {
  const adRef = useRef<HTMLModElement>(null);
  const isLoaded = useRef(false);

  useEffect(() => {
    if (isLoaded.current) return;

    try {
      if (typeof window !== 'undefined' && adRef.current) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        isLoaded.current = true;
      }
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, []);

  return (
    <div className={`ad-container my-4 ${className}`}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-5040630448523471"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? 'true' : 'false'}
      />
    </div>
  );
}

// 메인 페이지 히어로 아래 광고
export function MainHeroAd() {
  return <AdUnit slot="8834471707" format="horizontal" className="max-w-4xl mx-auto" />;
}

// 상세 페이지 스펙 아래 광고
export function DetailSpecAd() {
  return <AdUnit slot="3504285605" format="auto" />;
}

// 상세 페이지 하단 광고
export function DetailFooterAd() {
  return <AdUnit slot="3504285605" format="horizontal" />;
}
