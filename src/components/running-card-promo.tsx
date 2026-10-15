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
    3. 감지 지점이 화면에 들어왔다(IntersectionObserver)
    4. 대화상자·메뉴·비교 패널을 쓰는 중이 아니고, 하단 앵커 광고가 떠 있지 않다
    5. 다른 고정 UI(구매 바·비교·맨 위로)를 피해 올려도 헤더 아래에 들어갈 공간이 있다
  한 번 뜬 뒤에는 감지 지점이 화면 밖으로 나가도 닫지 않는다. 4·5가 깨지는 동안만 잠시 비켜 준다.
  읽기 속도 추정·체류 타이머·exit intent 는 넣지 않았다 — 빠른 스크롤과 실제 읽기를 구분할 수 있다고 보지 않는다.
*/

type Source = { sourceType: 'blog' | 'shoe'; sourceSlug: string };

/** 카드와 다른 고정 UI·헤더 사이 간격(px) */
const GAP = 8;

// 메달은 현재 제품 렌더러 출력(scripts/assets/running-card-og-athena.png, 640×800)을 192×240 WebP 로 줄인 것이다.
// sharp resize(192, 240, lanczos3) → webp({ quality: 80, alphaQuality: 90, effort: 6 }). 글자 든 OG 이미지를 줄여 쓰지 않는다.
const MEDAL_SRC = '/images/running-card-promo-medal.webp';

export function RunningCardPromo(source: Source) {
  const sentinelRef = useRef<HTMLSpanElement>(null);
  const [eligible, setEligible] = useState(false);
  const finish = useCallback(() => setEligible(false), []);

  // 저장소는 클라이언트에서만 읽는다(SSG·hydration 유지). 안 띄울 탭이면 감지 장치를 하나도 달지 않는다.
  useEffect(() => {
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

  const params: RunnerPromoEventParams = { campaign_id: PROMO_CAMPAIGN_ID, source_type: sourceType, source_slug: sourceSlug };

  evaluateRef.current = () => {
    const blocked = anchorRef.current || overlayOpen();
    if (stageRef.current === 'waiting') {
      if (scrolledDown.current && inView.current && !blocked) setStage('measuring');
    } else if (stageRef.current === 'shown' && cardRef.current) {
      const hasRoom = place(cardRef.current);
      setAside(blocked || !hasRoom);
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

    const io = new IntersectionObserver(([entry]) => {
      inView.current = entry.isIntersecting;
      evaluate();
    });
    io.observe(sentinel);

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
    if (!place(cardRef.current)) setStage('waiting');
    else if (markShown(browserStores())) setStage('shown');
    else onDone();
  }, [stage, onDone]);

  // 실제로 보인 순간 1회. 억제(비켜 준 상태)·후보 단계는 보내지 않는다.
  useEffect(() => {
    if (stage === 'shown' && !aside) trackOnce('runner-promo-viewed', 'runner_promo_viewed', params);
  });

  // 비켜 주는 동안 카드 안 포커스가 허공에 남지 않게
  useEffect(() => {
    if (aside && cardRef.current?.contains(document.activeElement)) sentinelRef.current?.focus({ preventScroll: true });
  }, [aside, sentinelRef]);

  if (stage === 'waiting') return null;

  const close = () => {
    hideForADay(browserStores(), Date.now());
    trackOnce('runner-promo-dismissed', 'runner_promo_dismissed', params);
    if (cardRef.current?.contains(document.activeElement)) sentinelRef.current?.focus({ preventScroll: true });
    onDone();
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
        'fixed inset-x-3 z-40 md:left-auto md:right-6 md:w-[400px]',
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

/**
 * 카드를 다른 고정 UI(data-floating-ui) 위로 올려 겹치지 않게 놓는다. z-index 로 덮지 않는다.
 * 헤더 아래에 들어갈 공간이 없으면 false.
 *
 * 고정 요소의 offsetTop/offsetHeight 는 transform 을 무시한 최종 자리라, 미끄러져 들어오는 중인 구매 바도
 * 도착할 자리로 계산된다. 숨은 상태의 고정 UI 는 pointer-events:none 이라(구매 바·맨 위로 버튼) 그걸로 거른다.
 */
function place(card: HTMLElement): boolean {
  const vh = window.innerHeight;
  const base = window.matchMedia('(min-width: 768px)').matches ? 24 : 12;
  const left = card.offsetLeft;
  const right = left + card.offsetWidth;

  let lift = 0;
  document.querySelectorAll<HTMLElement>('[data-floating-ui]').forEach((el) => {
    if (el.offsetHeight === 0 || getComputedStyle(el).pointerEvents === 'none') return;
    const top = el.offsetTop;
    const l = el.offsetLeft;
    if (l + el.offsetWidth <= left || l >= right) return; // 가로로 안 겹친다
    if (top + el.offsetHeight / 2 < vh / 2) return; // 위쪽에 있다(앵커 광고 때 헤더 아래로 옮겨 간 구매 바)
    lift = Math.max(lift, vh - top + GAP);
  });

  card.style.bottom = lift
    ? `max(calc(env(safe-area-inset-bottom) + ${base}px), ${lift}px)`
    : `calc(env(safe-area-inset-bottom) + ${base}px)`;

  const headerBottom = Math.max(0, document.querySelector('body header')?.getBoundingClientRect().bottom ?? 0);
  return card.getBoundingClientRect().top >= headerBottom + GAP;
}
