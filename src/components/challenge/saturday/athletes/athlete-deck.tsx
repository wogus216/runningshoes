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
  copy: {
    gridTitle: string;
    gridLine: string;
    gridHint: string;
    photoNotice: string;
    /** 아직 본인 사진이 없는 인원 표기. 전원 확보되면 null */
    photoPending: string | null;
    statsPending: string;
    statsPendingNote: string;
  };
};

// 열림 전환이 끝나지 않아도 화면이 잠기지 않게 하는 상한. 실제 트윈은 420ms다
const CLOSE_FALLBACK_MS = 700;

export function AthleteDeck({ athletes, copy }: DeckProps) {
  const trackRef = useRef<HTMLElement>(null);
  const deckRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const profileMediaRef = useRef<HTMLDivElement>(null);
  const previousSelected = useRef<number | null>(null);
  const closeTimer = useRef<number | null>(null);

  const [selected, setSelected] = useState<number | null>(null);
  const [closing, setClosing] = useState(false);
  /** 스택에서 지금 맨 위에 있는 선수. 무대 바닥의 이름 한 줄이 이걸 읽는다 */
  const [active, setActive] = useState(-1);

  const reducedMotion = usePrefersReducedMotion();
  const lib = useSaturdayGsap(!reducedMotion);

  useDeckScroll({ lib, trackRef, deckRef, cardsRef, onActiveChange: setActive });

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

  const total = athletes.length;
  const current = selected === null ? null : athletes[selected];
  const activeAthlete = active >= 0 ? athletes[active] : null;

  return (
    <>
      <section
        className={styles.track}
        ref={trackRef}
        aria-labelledby="starting-seven"
      >
        <div className={styles.stage}>
          <p className={styles.stageLabel}>
            <b>01 — {String(total).padStart(2, '0')}</b>
            <span>{copy.photoPending}</span>
          </p>

          <div
            className={styles.deck}
            ref={deckRef}
            data-layout="grid"
            onFocus={skipStackOnFocus}
          >
            {athletes.map((athlete, index) => (
              <button
                type="button"
                className={styles.card}
                key={athlete.name}
                ref={(node) => {
                  cardsRef.current[index] = node;
                }}
                onClick={() => setSelected(index)}
                aria-label={`${athlete.name} 선수 소개 열기`}
              >
                <span
                  className={styles.cardMedia}
                  data-media
                  style={{ '--focus': athlete.objectPosition } as CSSProperties}
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
                </span>
                <span className={styles.cardMeta}>
                  <span className={styles.cardName}>{athlete.name}</span>
                  <span className={styles.cardRole}>{athlete.role}</span>
                </span>
              </button>
            ))}

            {/* 격자 한가운데를 비워 카피를 앉힌다. 얼굴 위에 글자를 겹치지 않는다 */}
            <div className={styles.gridCopy}>
              <span className={styles.gridCopyLabel} id="starting-seven">
                {copy.gridTitle}
              </span>
              <p className={styles.gridCopyLine}>{copy.gridLine}</p>
            </div>
          </div>

          {/* 스택에서는 지금 올라온 한 명만, 그리드에서는 안내문 */}
          <div className={styles.stageFoot}>
            <p className={styles.activeName} aria-hidden="true">
              {activeAthlete ? (
                <>
                  <i>{String(activeAthlete.index).padStart(2, '0')}</i>
                  {activeAthlete.name}
                  <span className={styles.activeRole}>{activeAthlete.role}</span>
                </>
              ) : null}
            </p>
            <p className={styles.gridHint}>{copy.gridHint}</p>
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
          statsPendingNote={copy.statsPendingNote}
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
