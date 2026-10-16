// 블로그·신발 상세의 러닝카드 안내 카드 노출 상태. 브라우저 저장소만 쓴다 — 서버·로그인·기기 간 동기화는 없다.
//   - 같은 탭 세션: 사이트 전체에서 자동 노출 1회(sessionStorage)
//   - 닫기·참여 클릭: 그 시각부터 24시간 이 브라우저에서 숨김(localStorage 에 만료 시각)
// 저장소가 막혔거나 값이 깨졌으면 자동으로 띄우지 않는다. 본문은 그대로 동작한다.

/** GA 매개변수로만 쓴다. 문구·디자인을 바꿔 다시 잴 때 올린다. */
export const PROMO_CAMPAIGN_ID = 'running_card_promo_v1';

// 키에는 캠페인 버전을 넣지 않는다 — 버전을 올려 배포해도 방문자가 받아 둔 24시간 숨김이 풀리지 않게.
const SESSION_KEY = 'arb:running-card-promo:shown';
const HIDE_KEY = 'arb:running-card-promo:hidden-until';
export const HIDE_MS = 24 * 60 * 60 * 1000;

export type PromoStores = { session: Storage; local: Storage };

/** 저장소 접근 자체가 SecurityError 로 막히는 브라우저가 있다. 그때는 null. */
export function browserStores(): PromoStores | null {
  try {
    return { session: window.sessionStorage, local: window.localStorage };
  } catch {
    return null;
  }
}

/**
 * 이 탭에서 자동으로 띄워도 되는가. 이미 띄웠거나, 숨김 기간이거나, 읽을 수 없거나 값이 깨졌으면 false.
 * 깨진 값(숫자가 아님·24시간보다 먼 미래 — 기기 시계가 틀렸던 흔적)은 이번엔 띄우지 않고 지워서 다음부터 스스로 복구된다.
 */
export function canAutoShow(stores: PromoStores | null, now: number): boolean {
  if (!stores) return false;
  try {
    if (stores.session.getItem(SESSION_KEY) !== null) return false;
    const raw = stores.local.getItem(HIDE_KEY);
    if (raw === null) return true;
    const until = Number(raw);
    if (raw.trim() === '' || !Number.isFinite(until) || until - now > HIDE_MS) {
      stores.local.removeItem(HIDE_KEY);
      return false;
    }
    return now >= until;
  } catch {
    return false;
  }
}

/** 이 탭에서 띄웠다고 적는다. 적지 못하면 1회 제한을 지킬 수 없으니 false — 호출한 쪽은 띄우지 않는다. */
export function markShown(stores: PromoStores | null): boolean {
  if (!stores) return false;
  try {
    stores.session.setItem(SESSION_KEY, PROMO_CAMPAIGN_ID);
    return true;
  } catch {
    return false;
  }
}

/** 닫기·참여 클릭 시각부터 24시간 숨긴다. 자정 기준이 아니라 경과 시간이다. 적지 못해도 조용히 넘어간다. */
export function hideForADay(stores: PromoStores | null, now: number): void {
  try {
    stores?.local.setItem(HIDE_KEY, String(now + HIDE_MS));
  } catch {
    // 저장 실패 — 이 탭은 세션 1회 제한으로 이미 다시 뜨지 않는다.
  }
}
