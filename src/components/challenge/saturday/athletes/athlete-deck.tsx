'use client';

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
} from 'react';
import { AthleteProfile } from './athlete-profile';
import type { AthleteView } from './types';
import { useDeckScroll } from './use-deck-scroll';
import { usePrefersReducedMotion, useSaturdayGsap } from './use-saturday-gsap';
import styles from '@/app/(challenge)/saturday/athletes/athletes.module.css';

type DeckProps = {
  athletes: AthleteView[];
  /** 아무도 아직 소개되지 않은 첫 화면의 사진. 일곱 장이 그 위로 올라온다 */
  intro: {
    photo: string;
    photoAlt: string;
    objectPosition?: string;
    tone?: string;
  };
  copy: {
    /** 오프닝 카피 — 아직 아무 카드도 올라오지 않은 첫 화면에서만 보인다 */
    eyebrow: string;
    titleLead: string;
    titleTail: string;
    sub: string;
    scrollHint: string;
    gridTitle: string;
    gridLine: string;
    gridHint: string;
    photoNotice: string;
    /** 본인 사진이 아직 없는 카드에 직접 붙는 표기. 그 카드에만 뜬다 */
    photoPendingBadge: string;
    statsPending: string;
  };
};

// 열림 전환이 끝나지 않아도 화면이 잠기지 않게 하는 상한. 실제 트윈은 420ms다
const CLOSE_FALLBACK_MS = 700;

export function AthleteDeck({ athletes, intro, copy }: DeckProps) {
  const trackRef = useRef<HTMLElement>(null);
  const deckRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const gridCopyRef = useRef<HTMLDivElement>(null);
  const profileMediaRef = useRef<HTMLDivElement>(null);
  const previousSelected = useRef<number | null>(null);
  const closeTimer = useRef<number | null>(null);
  const counterRef = useRef<HTMLElement>(null);
  /** 카운터가 지금 화면에 보여주고 있는 실수값. 다음 트윈이 여기서 이어받는다 */
  const counterValue = useRef(1);

  const [selected, setSelected] = useState<number | null>(null);
  const [closing, setClosing] = useState(false);
  /** 스택에서 지금 맨 위에 있는 선수. 아직 아무도 안 올라왔으면 -1 — 그동안은 오프닝 카피가 보인다 */
  const [active, setActive] = useState(-1);
  /** JS·모션이 없으면 기본값 그대로 'grid' — 일곱 명이 항상 보인다 */
  const [phase, setPhase] = useState<'stack' | 'grid'>('grid');

  const reducedMotion = usePrefersReducedMotion();
  const lib = useSaturdayGsap(!reducedMotion);

  useDeckScroll({
    lib,
    trackRef,
    deckRef,
    cardsRef,
    gridCopyRef,
    onActiveChange: setActive,
    onPhaseChange: setPhase,
  });

  const total = athletes.length;
  const activeAthlete = active >= 0 ? athletes[active] : null;

  // 오프닝 카피(아직 아무도 안 올라옴) → 카드별 이름·캐릭터 문장(01~07번 도착) → 그리드 안내문
  const showIntro = phase === 'stack' && active < 0;
  const showActiveInfo = phase === 'stack' && active >= 0;
  const showGridHint = phase === 'grid';

  // 지금까지 도착한 카드 / 전체. 그리드로 펼쳐지는 순간 07/07 에서 딱 멈춰 고조감의 정점을 찍는다
  const counterIndex = showGridHint ? total : (activeAthlete?.index ?? 1);
  const counterLabel = `${String(counterIndex).padStart(2, '0')}/${String(total).padStart(2, '0')}`;

  /*
   * JSX 는 항상 counterLabel 을 그린다 — JS 가 늦게 뜨거나 실패해도(reduced-motion 포함)
   * 숫자가 비어 보이지 않는다. GSAP 이 있을 때만 이 effect 가 그 위에 덧그려서
   * 02→03 을 뚝뚝 끊지 않고 굴린다. 그리드에 막 도착한 순간에는 숫자가 멈추는 동시에
   * 살짝 튀었다가 가라앉는다 — 그 정지가 이 장면의 고조점이다.
   */
  useEffect(() => {
    const el = counterRef.current;
    if (!el || !lib) return;

    const { gsap } = lib;
    const proxy = { n: counterValue.current };
    const tl = gsap.timeline();

    tl.to(proxy, {
      n: counterIndex,
      duration: 0.3,
      ease: 'power2.out',
      onUpdate: () => {
        counterValue.current = proxy.n;
        el.textContent = `${String(Math.round(proxy.n)).padStart(2, '0')}/${String(total).padStart(2, '0')}`;
      },
    });

    if (showGridHint) {
      tl.fromTo(
        el,
        { scale: 1.4 },
        { scale: 1, duration: 0.4, ease: 'power3.out' },
        '-=0.15',
      );
    }

    return () => {
      tl.kill();
    };
  }, [lib, counterIndex, showGridHint, total]);

  const mediaOf = (index: number) =>
    cardsRef.current[index]?.querySelector<HTMLElement>('[data-media]') ?? null;

  /**
   * 장면 4 — 카드 사진이 프로필 사진 자리로 확대된다.
   * 새로 열 때만 돈다. 이전·다음 이동은 카드가 화면 뒤에 있어 같은 전환을 쓸 수 없다.
   */
  useLayoutEffect(() => {
    const wasClosed = previousSelected.current === null;
    previousSelected.current = selected;

    if (selected === null || !wasClosed || !lib) return;

    const target = profileMediaRef.current;
    const origin = mediaOf(selected);
    if (!target || !origin) return;

    const { gsap, Flip } = lib;
    // 프로필 사진을 카드 자리에 포갠 뒤, 그 상태에서 제자리로 되돌아오게 한다
    Flip.fit(target, origin, { scale: true });
    const fromCard = Flip.getState(target);
    gsap.set(target, { clearProps: 'transform' });
    const tween = Flip.from(fromCard, {
      duration: 0.55,
      ease: 'power3.inOut',
      scale: true,
    });

    return () => {
      tween.kill();
      gsap.set(target, { clearProps: 'transform' });
    };
  }, [selected, lib]);

  // 프로필이 떠 있는 동안 뒤 화면이 따라 움직이지 않게 한다.
  // documentElement 의 overflow 만 막는다 — 문서 높이가 그대로라 스크롤 위치와 ScrollTrigger 가 산다
  useEffect(() => {
    if (selected === null) return;
    const root = document.documentElement;
    const previous = root.style.overflow;
    root.style.overflow = 'hidden';
    return () => {
      root.style.overflow = previous;
    };
  }, [selected]);

  useEffect(
    () => () => {
      if (closeTimer.current) window.clearTimeout(closeTimer.current);
    },
    [],
  );

  const finishClose = useCallback((index: number | null) => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setClosing(false);
    setSelected(null);
    if (index !== null) cardsRef.current[index]?.focus();
  }, []);

  const closeProfile = useCallback(() => {
    const index = selected;
    const target = profileMediaRef.current;
    const destination = index === null ? null : mediaOf(index);

    if (!lib || !target || !destination) {
      finishClose(index);
      return;
    }

    setClosing(true);
    // 트윈이 어떤 이유로든 완료 콜백을 못 부르면 화면이 열린 채 굳는다. 상한을 둔다
    closeTimer.current = window.setTimeout(
      () => finishClose(index),
      CLOSE_FALLBACK_MS,
    );

    lib.Flip.fit(target, destination, {
      scale: true,
      duration: 0.42,
      ease: 'power3.inOut',
      onComplete: () => finishClose(index),
    });
  }, [lib, selected, finishClose]);

  /*
   * 키보드로 카드에 도착하면 스택 구간을 건너뛰고 그리드로 보낸다.
   * 스택은 스크롤이 만드는 장면이라 Tab 으로는 도달할 방법이 없고,
   * 그대로 두면 키보드 사용자에게는 일곱 명이 보이지 않는 사진 더미로만 남는다.
   */
  const skipStackOnFocus = useCallback(() => {
    const deck = deckRef.current;
    const track = trackRef.current;
    if (!deck || !track || deck.dataset.layout !== 'stack') return;

    const trackTop = track.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: trackTop + track.offsetHeight * 0.64 });
  }, []);

  const current = selected === null ? null : athletes[selected];

  return (
    <>
      <section
        className={styles.track}
        ref={trackRef}
        /* page.tsx 의 프리페인트 스크립트가 이 id 로 찾아 첫 프레임을 스택으로 세운다 */
        id="athletes-track"
        aria-labelledby="starting-seven"
      >
        <div className={styles.stage}>
          <p className={styles.stageLabel}>
            {showIntro ? (
              <span className={styles.stageEyebrow}>{copy.eyebrow}</span>
            ) : (
              /* GSAP 이 뜨면 위 effect 가 이 위에 덧그려서 숫자를 굴린다 */
              <b ref={counterRef}>{counterLabel}</b>
            )}
          </p>

          <div
            className={styles.deck}
            ref={deckRef}
            data-layout="grid"
            onFocus={skipStackOnFocus}
          >
            {/*
              오프닝 사진. 카드 일곱 장 뒤(z-index 0)에 깔려 있다가 01번이 올라오면 덮인다.
              그리드에서는 CSS 가 지운다 — 여덟 번째 칸을 차지하면 안 된다.
              이 페이지의 첫 화면이므로 LCP 요소도 여기다.
            */}
            <span
              className={styles.introCard}
              style={
                {
                  '--focus': intro.objectPosition,
                  '--tone': intro.tone,
                } as CSSProperties
              }
            >
              <img
                className={styles.photo}
                src={`/images/challenge/saturday/${intro.photo}.webp`}
                alt={intro.photoAlt}
                width={1200}
                height={1600}
                decoding="async"
                fetchPriority="high"
              />
            </span>

            {athletes.map((athlete, index) => (
              <button
                type="button"
                className={styles.card}
                key={athlete.name}
                ref={(node) => {
                  cardsRef.current[index] = node;
                }}
                onClick={() => setSelected(index)}
                aria-label={
                  athlete.isPlaceholder
                    ? `${athlete.name} 선수 소개 열기 (${copy.photoPendingBadge})`
                    : `${athlete.name} 선수 소개 열기`
                }
              >
                <span
                  className={styles.cardMedia}
                  data-media
                  style={
                    {
                      '--focus': athlete.objectPosition,
                      '--tone': athlete.tone,
                    } as CSSProperties
                  }
                >
                  <img
                    className={styles.photo}
                    src={`/images/challenge/saturday/${athlete.photoSrc}.webp`}
                    alt=""
                    width={860}
                    height={1147}
                    decoding="async"
                  />
                  <span className={styles.cardIndex} aria-hidden="true">
                    {String(athlete.index).padStart(2, '0')}
                  </span>
                  {/* 이 사진이 본인이 아니라는 사실은 그 카드 위에서 말한다.
                      상단 바에 합계('임시 이미지 2명')만 적으면 둘이 누구인지 알 수 없어
                      나머지 다섯 장까지 의심하게 된다. 낭독기에는 aria-label 이 같은 말을 한다 */}
                  {athlete.isPlaceholder && (
                    <span className={styles.cardPending} aria-hidden="true">
                      {copy.photoPendingBadge}
                    </span>
                  )}
                </span>
                <span className={styles.cardMeta} data-meta>
                  <span className={styles.cardName}>{athlete.name}</span>
                  <span className={styles.cardRole}>{athlete.role}</span>
                </span>
              </button>
            ))}

            {/*
              격자 한가운데를 비워 카피를 앉힌다. 얼굴 위에 글자를 겹치지 않는다.
              이 페이지의 유일한 <h1> — 오프닝에서 먼저 들었던 같은 두 줄의 결론이다
            */}
            <div className={styles.gridCopy} ref={gridCopyRef}>
              {/* 라벨과 큰 두 줄은 두 개의 제목이 아니라 하나의 제목이다.
                  예전에는 h1 이 10px 라벨 하나였고 큰 줄은 p 였다 — 보이는 위계와 문서가 반대였다 */}
              <h1 className={styles.gridCopyHeading} id="starting-seven">
                <span className={styles.gridCopyLabel}>{copy.gridTitle}</span>
                <span className={styles.gridCopyLine}>{copy.gridLine}</span>
              </h1>
            </div>
          </div>

          {/*
            첫 화면엔 오프닝 카피(01번만 도착), 카드가 한 장씩 올라오는 동안엔
            그 선수의 이름·캐릭터 문장, 그리드에서는 안내문 — 셋 중 하나만 뜬다
          */}
          <div className={styles.stageFoot}>
            {showIntro && (
              // 진짜 <h1> 은 그리드의 gridCopy 쪽에 있다(항상 DOM에 존재) — 여긴 그 후렴의
              // 첫 등장이라 헤딩을 또 만들지 않는다
              <div className={styles.introFoot}>
                <p className={styles.introFootTitle}>
                  {copy.titleLead}
                  <em>{copy.titleTail}</em>
                </p>
                <p className={styles.introFootSub}>{copy.sub}</p>
                <p className={styles.introFootHint}>{copy.scrollHint}</p>
              </div>
            )}

            {showActiveInfo && activeAthlete && (
              <div className={styles.activeInfo} aria-hidden="true">
                <p className={styles.activeName}>
                  <i>{String(activeAthlete.index).padStart(2, '0')}</i>
                  {activeAthlete.name}
                  <span className={styles.activeRole}>{activeAthlete.role}</span>
                </p>
                <p className={styles.activeLine}>{activeAthlete.characterLine}</p>
              </div>
            )}

            {showGridHint && <p className={styles.gridHint}>{copy.gridHint}</p>}
          </div>
        </div>
      </section>

      {current && (
        <AthleteProfile
          athlete={current}
          total={total}
          closing={closing}
          mediaRef={profileMediaRef}
          photoNotice={copy.photoNotice}
          statsPending={copy.statsPending}
          onPrev={() => setSelected((index) => Math.max(0, (index ?? 0) - 1))}
          onNext={() =>
            setSelected((index) => Math.min(total - 1, (index ?? 0) + 1))
          }
          onClose={closeProfile}
        />
      )}
    </>
  );
}
