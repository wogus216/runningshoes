'use client';

import { useEffect, useRef } from 'react';

type LazyRouteVideoProps = {
  src: string;
  poster: string;
  className?: string;
  ariaLabel: string;
};

/** Route replay videos stay poster-only until the activity card is near the viewport. */
export function LazyRouteVideo({ src, poster, className, ariaLabel }: LazyRouteVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const load = () => {
      if (video.src) return;
      video.src = src;
      video.load();
      void video.play().catch(() => undefined);
    };

    if (!('IntersectionObserver' in window)) {
      load();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          load();
          observer.disconnect();
        }
      },
      { rootMargin: '300px 0px' },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [src]);

  return (
    <video
      ref={videoRef}
      className={className}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="none"
      aria-label={ariaLabel}
    />
  );
}
