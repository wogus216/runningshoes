'use client';

import { useEffect, useRef, useState } from 'react';
import { ADSENSE_CLIENT_ID } from '@/lib/constants';

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
  lazy?: boolean;
  minHeight?: number;
}

// 광고 스켈레톤 컴포넌트
function AdSkeleton({ minHeight = 100 }: { minHeight?: number }) {
  return (
    <div
      className="bg-surface rounded-lg animate-pulse flex items-center justify-center"
      style={{ minHeight }}
    >
      <span className="text-tertiary text-xs">광고 로딩 중...</span>
    </div>
  );
}

// AdBlock 감지 시 대안 콘텐츠
function AdBlockMessage() {
  const [showHelp, setShowHelp] = useState(false);

  return (
    <div className="bg-surface rounded-xl p-4 text-center border border-border">
      <p className="text-secondary text-sm">
        광고 차단기가 감지되었습니다.
      </p>
      <p className="text-tertiary text-xs mt-1">
        이 사이트는 광고 수익으로 무료 운영됩니다.
      </p>
      <button
        onClick={() => setShowHelp(!showHelp)}
        className="mt-2 text-accent text-xs hover:underline"
      >
        {showHelp ? '닫기' : '광고 차단 해제 방법'}
      </button>
      {showHelp && (
        <div className="mt-3 text-left text-xs text-tertiary bg-white rounded-lg p-3">
          <ol className="list-decimal list-inside space-y-1">
            <li>브라우저 확장 프로그램 아이콘 클릭</li>
            <li>이 사이트에서 일시 중지 또는 비활성화 선택</li>
            <li>페이지 새로고침</li>
          </ol>
        </div>
      )}
    </div>
  );
}

export function AdUnit({
  slot,
  format = 'auto',
  responsive = true,
  className = '',
  lazy = true,
  minHeight = 100,
}: AdUnitProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const adRef = useRef<HTMLModElement>(null);
  const isLoaded = useRef(false);
  const [isVisible, setIsVisible] = useState(!lazy);
  const [isAdBlocked, setIsAdBlocked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Lazy loading: Intersection Observer
  useEffect(() => {
    if (!lazy) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [lazy]);

  // 광고 로드
  useEffect(() => {
    if (!isVisible || isLoaded.current) return;

    try {
      if (typeof window !== 'undefined' && adRef.current) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        isLoaded.current = true;

        // AdBlock 감지: 2초 후 광고 높이 확인
        setTimeout(() => {
          const adElement = adRef.current;
          if (adElement) {
            const rect = adElement.getBoundingClientRect();
            if (rect.height === 0) {
              setIsAdBlocked(true);
            }
          }
          setIsLoading(false);
        }, 2000);
      }
    } catch (error) {
      console.error('AdSense error:', error);
      setIsAdBlocked(true);
      setIsLoading(false);
    }
  }, [isVisible]);

  // AdSense 스크립트 존재 확인
  useEffect(() => {
    const checkAdSenseScript = () => {
      const scripts = document.querySelectorAll('script[src*="adsbygoogle"]');
      if (scripts.length === 0) {
        setIsAdBlocked(true);
        setIsLoading(false);
      }
    };

    // 페이지 로드 후 확인
    if (document.readyState === 'complete') {
      checkAdSenseScript();
    } else {
      window.addEventListener('load', checkAdSenseScript);
      return () => window.removeEventListener('load', checkAdSenseScript);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={`ad-container my-4 ${className}`}
      style={{ minHeight: isLoading ? minHeight : undefined }}
    >
      {isAdBlocked ? (
        <AdBlockMessage />
      ) : !isVisible ? (
        <AdSkeleton minHeight={minHeight} />
      ) : (
        <>
          {isLoading && <AdSkeleton minHeight={minHeight} />}
          <ins
            ref={adRef}
            className="adsbygoogle"
            style={{ display: isLoading ? 'none' : 'block' }}
            data-ad-client={ADSENSE_CLIENT_ID}
            data-ad-slot={slot}
            data-ad-format={format}
            data-full-width-responsive={responsive ? 'true' : 'false'}
          />
        </>
      )}
    </div>
  );
}

// 메인 페이지 히어로 아래 광고
export function MainHeroAd() {
  return <AdUnit slot="8834471707" format="horizontal" className="max-w-4xl mx-auto" minHeight={90} />;
}

// 메인 페이지 중간 광고 (신발 목록 사이)
export function MainMidListAd() {
  return <AdUnit slot="8834471707" format="horizontal" className="max-w-4xl mx-auto" minHeight={90} />;
}

// 상세 페이지 스펙 아래 광고
export function DetailSpecAd() {
  return <AdUnit slot="3504285605" format="auto" minHeight={250} />;
}

// 상세 페이지 하단 광고
export function DetailFooterAd() {
  return <AdUnit slot="3504285605" format="horizontal" minHeight={90} />;
}

// 비교 페이지 광고
export function CompareAd() {
  return <AdUnit slot="3504285605" format="rectangle" className="max-w-md mx-auto" minHeight={250} />;
}

// 추천 페이지 광고
export function RecommendAd() {
  return <AdUnit slot="3504285605" format="auto" minHeight={250} />;
}
