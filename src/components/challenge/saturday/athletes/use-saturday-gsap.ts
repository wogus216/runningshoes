'use client';

import { useEffect, useRef, useState } from 'react';
import type { Flip } from 'gsap/Flip';
import type { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { gsap as Gsap } from 'gsap';

export type SaturdayGsap = {
  gsap: typeof Gsap;
  ScrollTrigger: typeof ScrollTrigger;
  Flip: typeof Flip;
};

/**
 * GSAP 은 `/saturday/athletes` 에서만 쓴다. 전역 번들에 들어가지 않도록 동적 import 하고,
 * 모션 감소일 때는 아예 내려받지 않는다 — 쓰지 않을 코드를 받게 하지 않는다.
 */
export function useSaturdayGsap(enabled: boolean) {
  const libRef = useRef<SaturdayGsap | null>(null);
  const [lib, setLib] = useState<SaturdayGsap | null>(null);

  useEffect(() => {
    if (!enabled || libRef.current) {
      if (libRef.current) setLib(libRef.current);
      return;
    }

    let cancelled = false;

    void (async () => {
      const [core, scrollTrigger, flip] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
        import('gsap/Flip'),
      ]);
      if (cancelled) return;

      core.gsap.registerPlugin(scrollTrigger.ScrollTrigger, flip.Flip);
      const loaded: SaturdayGsap = {
        gsap: core.gsap,
        ScrollTrigger: scrollTrigger.ScrollTrigger,
        Flip: flip.Flip,
      };
      libRef.current = loaded;
      setLib(loaded);
    })();

    return () => {
      cancelled = true;
    };
  }, [enabled]);

  return lib;
}

/** 서버에서는 항상 false. 클라이언트 마운트 후 실제 값으로 바뀌고 변경도 따라간다 */
export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReduced(query.matches);
    sync();
    query.addEventListener('change', sync);
    return () => query.removeEventListener('change', sync);
  }, []);

  return reduced;
}
