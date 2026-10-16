'use client';

import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState, type RefObject } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X } from 'lucide-react';
import { trackOnce, type RunnerPromoEventParams } from '@/lib/analytics';
import { useBottomAnchorAd } from '@/components/ads/use-bottom-anchor-ad';
import { img } from '@/lib/image';
import { PROMO_CAMPAIGN_ID, browserStores, canAutoShow, hideForADay, markShown } from '@/lib/running-card-promo';

/*
  블로그 본문 끝·신발 핵심 박스 끝에 도달하면 뜨는 작은 러닝카드 안내 카드(비차단).
  배경을 어둡게 하거나 스크롤·포커스를 잡지 않는다 — 닫지 않아도 본문과 링크를 그대로 쓸 수 있다.

  이 컴포넌트가 놓인 자리가 감지 지점이다. 뜨는 조건(모두 만족):
    1. 이 탭에서 아직 안 띄웠고 24시간 숨김 기간이 아니다(저장소가 막혔거나 값이 깨졌으면 안 띄운다)
    2. 방문자가 직접 입력(휠·터치·키·클릭)한 뒤 아래로 스크롤했다 — 스크롤 복원·해시 이동만으로는 안 뜬다
    3. 감지 지점이 화면 하단 카드 영역(CARD_ZONE) 위로 올라왔다(IntersectionObserver) — 카드가 뜨는 순간
       아직 읽는 중인 본문 마지막 줄을 덮지 않고, 본문 뒤 영역 위에 놓이게
    4. 대화상자·메뉴·비교 패널을 쓰는 중이 아니고, 하단 앵커 광고가 떠 있지 않다
    5. 다른 고정 UI 를 피해도 헤더 아래에 들어갈 공간이 있다
  자리: 모바일은 화면 맨 아래(읽는 구간 밖)에 붙는다. 맨 위로·비교 버튼이 카드 위로 비켜 올라가고(--promo-clearance),
  구매 바만은 매출 동선이라 카드가 그 위로 올라간다. PC 는 우하단, 비교 버튼이 있으면 그 위.
  한 번 뜬 뒤에는 감지 지점이 화면 밖으로 나가도 닫지 않는다. 4·5가 깨지는 동안만 잠시 비켜 준다.
  읽기 속도 추정·체류 타이머·exit intent 는 넣지 않았다 — 빠른 스크롤과 실제 읽기를 구분할 수 있다고 보지 않는다.
*/

type Source = { sourceType: 'blog' | 'shoe'; sourceSlug: string };

/** 카드와 다른 고정 UI·헤더 사이 간격(px) */
const GAP = 8;
/** 화면 하단에서 카드가 차지하는 높이(px). 모바일 카드 176–198px + 아래 여백 12px + 간격. 감지 지점이 이 위로 올라와야 뜬다. */
const CARD_ZONE = 240;

// 메달은 현재 제품 렌더러 출력(scripts/assets/running-card-og-athena.png, 640×800)을 192×240 WebP 로 줄인 것이다.
// sharp resize(192, 240, lanczos3) → webp({ quality: 80, alphaQuality: 90, effort: 6 }). 글자 든 OG 이미지를 줄여 쓰지 않는다.
const MEDAL_SRC = '/images/running-card-promo-medal.webp';

export function RunningCardPromo(source: Source) {
  const sentinelRef = useRef<HTMLSpanElement>(null);
  const [eligible, setEligible] = useState(false);
  const finish = useCallback(() => setEligible(false), []);
  const checked = useRef(false);

  // 저장소는 클라이언트에서만 읽는다(SSG·hydration 유지). 안 띄울 탭이면 감지 장치를 하나도 달지 않는다.
  // 한 번만 판정한다 — canAutoShow 가 깨진 값을 지우므로, Strict Mode 의 두 번째 실행이 판정을 뒤집지 않게.
  useEffect(() => {
    if (checked.current) return;
    checked.current = true;
    setEligible(canAutoShow(browserStores(), Date.now()));
  }, []);

  return (
    // 신발 상세는 space-y-4 안이라, 높이 0 인 이 자리에도 위 여백이 붙어 간격이 16px 늘어난다 — !mt-0 으로 막는다.
    <div className="!mt-0">
      {/* 감지 지점. 카드를 닫을 때 포커스가 카드 안에 있었으면 여기로 돌려준다(다음 Tab 이 본문 다음 요소로 이어진다). */}
      <span ref={sentinelRef} tabIndex={-1} className="block h-0 outline-none" />
      {/* 닫았거나 1회 기록을 못 남기면 컨트롤러째 내려 감시 장치(IO·MutationObserver·리스너)를 정리한다 */}
      {eligible && <PromoController {...source} sentinelRef={sentinelRef} onDone={finish} />}
    </div>
  );
}

type Stage = 'waiting' | 'measuring' | 'shown';

type ControllerProps = Source & { sentinelRef: RefObject<HTMLSpanElement | null>; onDone: () => void };

function PromoController({ sourceType, sourceSlug, sentinelRef, onDone }: ControllerProps) {
  const titleId = useId();
  const cardRef = useRef<HTMLElement>(null);
  const [stage, setStage] = useState<Stage>('waiting');
  const [aside, setAside] = useState(false);
  const [medalFailed, setMedalFailed] = useState(false);
  const anchorAtBottom = useBottomAnchorAd();

  const stageRef = useRef(stage);
  stageRef.current = stage;
  const anchorRef = useRef(anchorAtBottom);
  anchorRef.current = anchorAtBottom;
  const scrolledDown = useRef(false);
  const inView = useRef(false);
  const evaluateRef = useRef<() => void>(() => {});
  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;

  const params: RunnerPromoEventParams = { campaign_id: PROMO_CAMPAIGN_ID, source_type: sourceType, source_slug: sourceSlug };

  evaluateRef.current = () => {
    const blocked = anchorRef.current || overlayOpen();
    if (stageRef.current === 'waiting') {
      if (scrolledDown.current && inView.current && !blocked) setStage('measuring');
    } else if (stageRef.current === 'shown' && cardRef.current) {
      const { hasRoom, clearance } = place(cardRef.current);
      const stepAside = blocked || !hasRoom;
      // 숨기기(visibility:hidden) 전에 포커스를 옮긴다 — 숨긴 뒤에는 브라우저가 포커스를 body 로 떨어뜨린다
      if (stepAside && cardRef.current.contains(document.activeElement)) sentinelRef.current?.focus({ preventScroll: true });
      setAside(stepAside);
      setClearance(stepAside ? '' : clearance);
    }
  };

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const evaluate = () => evaluateRef.current();

    // 사용자 입력 없이 일어난 스크롤(복원·해시 이동)은 세지 않는다. 입력 뒤 아래로 움직였을 때만 한 번 켠다.
    let intent = false;
    let lastY = window.scrollY;
    const intentEvents = ['wheel', 'touchstart', 'keydown', 'pointerdown'] as const;
    const onIntent = () => { intent = true; };
    function stopScrollWatch() {
      intentEvents.forEach((type) => window.removeEventListener(type, onIntent));
      window.removeEventListener('scroll', onScroll);
    }
    function onScroll() {
      const y = window.scrollY;
      if (intent && y > lastY) {
        scrolledDown.current = true;
        stopScrollWatch();
        evaluate();
      }
      lastY = y;
    }
    if (!scrolledDown.current) {
      intentEvents.forEach((type) => window.addEventListener(type, onIntent, { passive: true }));
      window.addEventListener('scroll', onScroll, { passive: true });
    }

    // '닿았거나 지나쳤다'로 본다 — 광고 앵커·비교 패널 때문에 미뤄진 사이 감지 지점이 화면 위로 지나가도,
    // 막힌 게 풀리면 뜰 수 있게. (위로 되돌아가 감지 지점이 카드 영역 아래로 내려가면 다시 false)
    const io = new IntersectionObserver(([entry]) => {
      inView.current = entry.rootBounds ? entry.boundingClientRect.top < entry.rootBounds.bottom : entry.isIntersecting;
      evaluate();
    }, { rootMargin: `0px 0px -${CARD_ZONE}px 0px` });
    io.observe(sentinel);

    // 뒤로 가기로 메모리에서 복원된 페이지(bfcache)에는 떠 있던 카드를 남기지 않는다(지시서 3절). 닫기로 세지 않는다.
    const onPageShow = (event: PageTransitionEvent) => {
      if (event.persisted && stageRef.current !== 'waiting') onDoneRef.current();
    };
    window.addEventListener('pageshow', onPageShow);

    // 대화상자·메뉴·비교 패널·다른 고정 UI 의 상태 변화. 카드 자신의 변화는 건너뛴다(자기 갱신 루프 방지).
    // 같은 노드를 한 관찰자로 두 번 observe 하면 옵션이 덮어써진다 — 직계 자식(포털로 붙는 대화상자·비교 버튼)과
    // 하위 속성(메뉴 open·비교 패널·구매 바 표시 상태)을 관찰자 둘로 나눈다.
    let frame: number | null = null;
    const onMutation = (records: MutationRecord[]) => {
      const root = sentinel.parentElement;
      if (root && records.every((r) => root.contains(r.target))) return;
      if (frame !== null) return;
      frame = window.requestAnimationFrame(() => {
        frame = null;
        evaluate();
      });
    };
    const portals = new MutationObserver(onMutation);
    const states = new MutationObserver(onMutation);
    portals.observe(document.body, { childList: true });
    states.observe(document.body, { subtree: true, attributes: true, attributeFilter: ['class', 'aria-hidden', 'aria-label', 'aria-modal', 'open'] });
    window.addEventListener('resize', evaluate);

    return () => {
      stopScrollWatch();
      io.disconnect();
      portals.disconnect();
      states.disconnect();
      window.removeEventListener('resize', evaluate);
      window.removeEventListener('pageshow', onPageShow);
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, [sentinelRef]);

  // 하단 앵커 광고가 뜨거나 닫힐 때
  useEffect(() => {
    evaluateRef.current();
  }, [anchorAtBottom]);

  // 화면에 그리기 전에 자리를 잡고, 공간이 있을 때만 이 탭의 1회를 쓴다. 기록을 못 남기면 띄우지 않는다.
  useLayoutEffect(() => {
    if (stage !== 'measuring' || !cardRef.current) return;
    const { hasRoom, clearance } = place(cardRef.current);
    if (!hasRoom) setStage('waiting');
    // 마운트 뒤에 다른 탭에서 닫았거나(24시간 숨김) 이 탭의 다른 문서(bfcache 복원 전)가 1회를 썼을 수 있다 — 띄우기 직전에 다시 본다
    else if (!canAutoShow(browserStores(), Date.now())) onDone();
    else if (markShown(browserStores())) {
      setClearance(clearance);
      setStage('shown');
    } else onDone();
  }, [stage, onDone]);

  // 닫거나 페이지를 떠나면 비켜 올라갔던 버튼을 제자리로
  useEffect(() => () => setClearance(''), []);

  // 실제로 보인 순간 1회. 억제(비켜 준 상태)·후보 단계는 보내지 않는다.
  useEffect(() => {
    if (stage === 'shown' && !aside) trackOnce('runner-promo-viewed', 'runner_promo_viewed', params);
  });

  // 폰트 교체·메달 이미지 실패로 카드 높이가 바뀌면 버튼이 비켜 올라갈 높이와 공간 판정을 다시 한다.
  // 카드 안의 변화는 MutationObserver 에서 걸러지므로 크기는 따로 본다.
  useEffect(() => {
    const card = cardRef.current;
    if (stage !== 'shown' || !card) return;
    const ro = new ResizeObserver(() => evaluateRef.current());
    ro.observe(card);
    return () => ro.disconnect();
  }, [stage]);

  if (stage === 'waiting') return null;

  // 카드를 내린다. 포커스가 카드 안에 있었으면 감지 지점으로 돌려준다.
  const remove = () => {
    if (cardRef.current?.contains(document.activeElement)) sentinelRef.current?.focus({ preventScroll: true });
    onDone();
  };

  const close = () => {
    hideForADay(browserStores(), Date.now());
    trackOnce('runner-promo-dismissed', 'runner_promo_dismissed', params);
    remove();
  };

  const hidden = stage === 'measuring' || aside;

  return (
    <aside
      ref={cardRef}
      aria-labelledby={titleId}
      onKeyDown={(event) => {
        if (event.key === 'Escape') close();
      }}
      className={[
        // 구매 바가 미끄러져 들어올 때(200ms) 같이 올라간다
        'fixed inset-x-3 z-40 transition-[bottom] duration-200 ease-out motion-reduce:transition-none md:left-auto md:right-6 md:w-[400px]',
        hidden ? 'invisible pointer-events-none' : 'animate-[fade-in-up_240ms_ease-out_both] motion-reduce:animate-none',
      ].join(' ')}
    >
      <div className="relative flex gap-3 rounded-[6px] bg-[#17150F] p-4 text-[#F5EFDF] shadow-[0_12px_32px_rgba(23,21,15,0.32)] ring-1 ring-white/10 md:gap-4">
        {!medalFailed && (
          <div className="relative h-20 w-16 shrink-0 md:h-[90px] md:w-[72px]" aria-hidden="true">
            <div className="absolute inset-x-0 bottom-0 top-5 rounded-full bg-[radial-gradient(closest-side,rgba(196,167,117,0.32),transparent)]" />
            <Image
              src={img(MEDAL_SRC)}
              alt=""
              width={72}
              height={90}
              loading="eager"
              onError={() => setMedalFailed(true)}
              className="relative h-full w-full object-contain"
            />
          </div>
        )}
        <div className="min-w-0 flex-1 pr-7">
          <p className="text-[11px] font-semibold leading-4 tracking-[0.08em] text-[#C4A775]">디지털 메달</p>
          <p id={titleId} className="mt-1 text-base font-bold leading-snug [word-break:keep-all] md:text-[17px]">
            내 러닝 기록이 메달에 새겨진다면?
          </p>
          <p className="mt-1 text-[13px] leading-relaxed text-[#C6BDAC] [word-break:keep-all]">
            지난 28일 기록으로 나의 러닝 유형을 만나보세요.
          </p>
          <Link
            href="/running-card"
            prefetch={false}
            onClick={() => {
              hideForADay(browserStores(), Date.now());
              trackOnce('runner-promo-clicked', 'runner_promo_clicked', { ...params, transport_type: 'beacon' });
              // 새 탭으로 열었거나 뒤로 가기로 돌아와도 카드가 남지 않게. 이동은 링크가 그대로 한다.
              remove();
            }}
            className="mt-3 inline-flex min-h-[44px] items-center rounded-full bg-[#FF4D00] px-4 text-sm font-bold text-[#17150F] transition-colors hover:bg-[#FF6A26] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5EFDF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#17150F]"
          >
            내 러닝카드 만들기 →
          </Link>
        </div>
        <button
          type="button"
          onClick={close}
          aria-label="러닝카드 안내 닫기"
          className="absolute right-1 top-1 flex h-11 w-11 items-center justify-center rounded-full text-[#C6BDAC] transition-colors hover:bg-white/10 hover:text-[#F5EFDF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5EFDF]"
        >
          <X className="h-[18px] w-[18px]" aria-hidden="true" />
        </button>
      </div>
    </aside>
  );
}

/** 검색 대화상자·헤더 메뉴·펼친 비교 패널을 쓰는 중인가. 그동안은 띄우지 않고, 떠 있으면 잠시 비켜 준다. */
function overlayOpen(): boolean {
  return document.querySelector('[aria-modal="true"], dialog[open], header details[open], [data-floating-ui] [aria-label="비교함 접기"]') !== null;
}

/** 모바일에서 맨 위로·비교 버튼이 카드 위로 비켜 올라갈 높이(그 버튼들의 bottom 이 max(기본, 이 값)). 빈 문자열이면 제자리. */
function setClearance(value: string) {
  if (value) document.documentElement.style.setProperty('--promo-clearance', value);
  else document.documentElement.style.removeProperty('--promo-clearance');
}

/**
 * 카드 자리를 잡는다. z-index 로 덮지 않는다.
 *   - data-floating-ui(구매 바, PC 의 비교 버튼): 카드가 그 위로 올라간다
 *   - data-floating-ui="yields"(맨 위로·비교 버튼): 모바일에서는 카드가 맨 아래에 붙고 버튼이 비킨다(clearance)
 * hasRoom: 헤더 아래에 들어갈 공간이 있는가. clearance: 모바일 버튼이 올라갈 CSS 높이(PC 는 빈 문자열).
 *
 * 고정 요소의 offsetTop/offsetHeight 는 transform 을 무시한 최종 자리라, 미끄러져 들어오는 중인 구매 바도
 * 도착할 자리로 계산된다. 숨은 상태의 고정 UI 는 pointer-events:none 이라(구매 바·맨 위로 버튼) 그걸로 거른다.
 */
function place(card: HTMLElement): { hasRoom: boolean; clearance: string } {
  const vh = window.innerHeight;
  const mobile = !window.matchMedia('(min-width: 768px)').matches;
  const base = mobile ? 12 : 24;
  const left = card.offsetLeft;
  const right = left + card.offsetWidth;

  let lift = 0;
  document.querySelectorAll<HTMLElement>('[data-floating-ui]').forEach((el) => {
    if (mobile && el.dataset.floatingUi === 'yields') return;
    if (el.offsetHeight === 0 || getComputedStyle(el).pointerEvents === 'none') return;
    const top = el.offsetTop;
    const l = el.offsetLeft;
    if (l + el.offsetWidth <= left || l >= right) return; // 가로로 안 겹친다
    if (top + el.offsetHeight / 2 < vh / 2) return; // 위쪽에 있다(앵커 광고 때 헤더 아래로 옮겨 간 구매 바)
    lift = Math.max(lift, vh - top + GAP);
  });

  const bottom = lift
    ? `max(calc(env(safe-area-inset-bottom) + ${base}px), ${lift}px)`
    : `calc(env(safe-area-inset-bottom) + ${base}px)`;
  card.style.bottom = bottom;

  // bottom 이 전환(200ms) 중이어도 도착할 자리로 판단한다. safe-area 는 뺀 근사다.
  const headerBottom = Math.max(0, document.querySelector('body header')?.getBoundingClientRect().bottom ?? 0);
  const top = vh - Math.max(base, lift) - card.offsetHeight;
  return {
    hasRoom: top >= headerBottom + GAP,
    clearance: mobile ? `calc(${bottom} + ${card.offsetHeight + GAP}px)` : '',
  };
}
