/**
 * GA4 홈 이벤트 래퍼.
 *
 * `src/app/layout.tsx`가 gtag.js를 로드하고 `window.gtag`를 정의한다(GA4 표준 초기화).
 * 이 모듈은 새 애널리틱스 스택을 붙이지 않고, 그 위에 얇은 타입 안전 래퍼만 얹는다.
 * SSG(output: export) 환경이라 서버 렌더 중에도 호출될 수 있으므로 `window`/`gtag`가
 * 없으면 조용히 no-op 한다.
 */

export type HomeEvent =
  | 'home_recommend_start'
  | 'home_problem_category_click'
  | 'home_shoe_detail_click'
  | 'home_best_click'
  | 'home_compare_click'
  | 'home_blog_click'
  | 'home_resume_click'
  | 'home_ad_view'
  | 'home_filter_apply'
  | 'home_search_start'
  | 'home_shoe_index_expand'
  | 'home_trust_methodology_open'
  | 'home_resume_clear';

export type EventParams = {
  device_type?: 'mobile' | 'desktop';
  visitor_type?: 'new' | 'returning';
  section_name?: string;
  item_name?: string;
  destination_path?: string;
  filter_name?: string;
  filter_value?: string;
};

type Gtag = (command: 'event', event: string, params?: Record<string, unknown>) => void;

export type PurchaseClickInput = {
  href: string;
  siteOrigin: string;
  product_type: 'shoe' | 'apparel';
  product_name: string;
  product_id?: string;
  brand?: string;
  apparel_category?: string;
  store: string;
  page_slug: string;
  button_position: string;
};

/** 실제 제휴 단축 링크만 제휴로 분류한다. 네이버 쇼핑 검색·공식몰은 none. */
export function buildPurchaseClick(input: PurchaseClickInput) {
  let destination: URL;
  try {
    destination = new URL(input.href);
  } catch {
    return null;
  }
  if (!['http:', 'https:'].includes(destination.protocol) || destination.origin === input.siteOrigin) return null;

  const host = destination.hostname.toLowerCase();
  const affiliate_type = host === 'naver.me'
    ? 'naver'
    : host === 'link.coupang.com' || host === 'coupa.ng'
      ? 'coupang'
      : 'none';

  return {
    product_type: input.product_type,
    product_name: input.product_name,
    ...(input.product_id && { product_id: input.product_id }),
    ...(input.brand && { brand: input.brand }),
    ...(input.apparel_category && { apparel_category: input.apparel_category }),
    store: input.store || host,
    page_slug: input.page_slug,
    button_position: input.button_position,
    affiliate_type,
    destination_host: host,
  };
}

/** 구매 확정이 아닌 외부 구매처 이동 클릭. 링크 이동을 지연시키지 않는다. */
export function trackPurchaseClick(params: NonNullable<ReturnType<typeof buildPurchaseClick>>): void {
  if (typeof window === 'undefined') return;
  const gtag = (window as unknown as { gtag?: Gtag }).gtag;
  if (typeof gtag !== 'function') return;
  gtag('event', 'purchase_link_click', { ...params, transport_type: 'beacon' });
}

const fired = new Set<string>();

/** gtag가 없는 환경(SSR, 애드블락 등)에서는 조용히 무시한다. */
export function track(event: HomeEvent, params: EventParams = {}): void {
  if (typeof window === 'undefined') return;
  const gtag = (window as unknown as { gtag?: Gtag }).gtag;
  if (typeof gtag !== 'function') return;
  gtag('event', event, params);
}

/** 같은 key로는 세션 내 1회만 발화한다(광고 노출·인덱스 확장 등 중복 방지). */
export function trackOnce(key: string, event: HomeEvent, params?: EventParams): void {
  if (fired.has(key)) return;
  fired.add(key);
  track(event, params);
}

/** 테스트 전용: trackOnce의 발화 이력을 초기화한다. */
export function __resetOnceForTest(): void {
  fired.clear();
}
