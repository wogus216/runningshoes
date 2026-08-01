'use client';

import { useEffect, useRef } from 'react';
import { AdSlot } from '@/components/ads/ad-slot';
import { ADSENSE_SLOTS } from '@/lib/constants';
import { trackOnce } from '@/lib/analytics';

/** 광고 영역의 절반 이상이 보이면 "도달"로 본다(광고 조회 가능성 근사치). */
const VIEWABLE = 0.5;

/**
 * 홈 광고 슬롯 + 도달 계측.
 *
 * 홈의 성과는 자체 광고 수익이 아니라 순회로 판단하지만(스펙 §1), 개편이 **광고 도달률을
 * 떨어뜨리지는 않았는지**는 확인해야 한다. 인덱스가 122행에서 16행으로 줄어 도달률이
 * 오를 것으로 봤는데(§7), 검증하려면 실제 도달 이벤트가 필요하다.
 *
 * `AdSlot` 자체에 넣지 않는 이유: 공용 컴포넌트라 다른 페이지에서도 `home_ad_view` 가
 * 발화하게 된다. 슬롯 ID·개수·위치는 건드리지 않고 관측만 덧댄다(§7).
 *
 * `trackOnce` 라 스크롤로 지나쳤다 돌아와도 세션당 1회만 발화한다.
 */
export function HomeAdSlot() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          trackOnce('home_ad_view', 'home_ad_view', { section_name: 'ad' });
          io.disconnect();
        }
      },
      { threshold: VIEWABLE },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <AdSlot slot={ADSENSE_SLOTS.homeBottom} format="auto" label="홈 하단 광고" />
    </div>
  );
}
