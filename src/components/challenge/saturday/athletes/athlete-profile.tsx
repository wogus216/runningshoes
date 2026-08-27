'use client';

import { useEffect, useRef, type CSSProperties, type RefObject } from 'react';
import type { AthleteView } from './types';
import styles from '@/app/(challenge)/saturday/athletes/athletes.module.css';

type ProfileProps = {
  athlete: AthleteView;
  total: number;
  closing: boolean;
  /** 공유 사진 전환의 대상. 카드에서 이 요소로 확대된다 */
  mediaRef: RefObject<HTMLDivElement | null>;
  photoNotice: string;
  statsPending: string;
  statsPendingNote: string;
  onPrev: () => void;
  onNext: () => void;
  onClose: () => void;
};

export function AthleteProfile({
  athlete,
  total,
  closing,
  mediaRef,
  photoNotice,
  statsPending,
  statsPendingNote,
  onPrev,
  onNext,
  onClose,
}: ProfileProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  // 열리면 이름으로 포커스를 옮긴다. 화면 낭독기는 여기서부터 읽는다.
  // 시각적 포커스 링은 CSS 에서 뺐다 — 여긴 누를 수 있는 요소가 아니다
  useEffect(() => {
    headingRef.current?.focus();
  }, [athlete.index]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key === 'ArrowLeft' && athlete.index > 1) onPrev();
      if (event.key === 'ArrowRight' && athlete.index < total) onNext();

      // aria-modal 만으로는 Tab 이 뒤 페이지로 새어 나간다. 순환시켜 가둔다
      if (event.key !== 'Tab') return;
      const root = rootRef.current;
      if (!root) return;

      const focusable = Array.from(
        root.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (!root.contains(active)) {
        event.preventDefault();
        first.focus();
      } else if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [athlete.index, total, onPrev, onNext, onClose]);

  const focus = { '--focus': athlete.objectPosition } as CSSProperties;

  return (
    <div
      className={styles.profile}
      ref={rootRef}
      data-closing={closing ? 'true' : undefined}
      role="dialog"
      aria-modal="true"
      aria-label={`${athlete.name} 선수 소개`}
    >
      <div className={styles.profileBar}>
        <button type="button" className={styles.profileClose} onClick={onClose}>
          닫기 ✕
        </button>
      </div>

      <div className={styles.profileScroll}>
        <div className={styles.profileMedia} ref={mediaRef} style={focus}>
          {/* next/image 는 이 프로젝트에서 unoptimized 라 이득이 없고, Flip 이 감싸는 래퍼까지
              측정하게 되어 전환이 어긋난다. 사이트의 다른 크루 사진과 같은 <img> 를 쓴다 */}
          <img
            className={styles.photo}
            src={`/images/challenge/saturday/${athlete.photoSrc}.webp`}
            alt={athlete.photoAlt}
            width={860}
            height={1147}
            decoding="async"
          />
        </div>

        {/* key — 선수를 바꾸면 본문이 다시 들어온다 */}
        <div className={styles.profileBody} key={athlete.index}>
          {/* 본인 사진이 아직 없는 사람만. 사진 위에 얹으면 밝은 컷에서 읽히지 않아 아래 줄로 뒀다 */}
          {athlete.isPlaceholder && (
            <p className={styles.photoNotice}>{photoNotice}</p>
          )}

          <p className={styles.profileIndex}>
            <b>
              {String(athlete.index).padStart(2, '0')} /{' '}
              {String(total).padStart(2, '0')}
            </b>
            <span>{athlete.role}</span>
          </p>

          {/* 영문과 한글은 두 개의 제목이 아니라 하나의 이름이다 */}
          <h2 className={styles.profileName} ref={headingRef} tabIndex={-1}>
            {athlete.nameLatin}
            <em> · {athlete.name}</em>
          </h2>

          {/* 이름 다음으로 가장 크게 읽혀야 하는 줄 */}
          <p className={styles.profileLine}>{athlete.characterLine}</p>

          {/* 라벨은 전부 영문 모노, 값은 한글. 없는 건 '측정 전'이라고 쓴다 */}
          <dl className={styles.profileFacts}>
            <div>
              <dt>Event</dt>
              <dd>{athlete.distanceLabel}</dd>
            </div>
            <div>
              <dt>Known for</dt>
              <dd data-pending={athlete.knownFor ? undefined : 'true'}>
                {athlete.knownFor ?? statsPending}
              </dd>
            </div>
            <div className={styles.factWide}>
              <dt>Running type</dt>
              <dd data-pending={athlete.runningType ? undefined : 'true'}>
                {athlete.runningType ?? `${statsPending} — ${statsPendingNote}`}
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <nav className={styles.profileNav} aria-label="선수 이동">
        <button type="button" onClick={onPrev} disabled={athlete.index <= 1}>
          ← 이전 선수
        </button>
        <button type="button" className={styles.navAll} onClick={onClose}>
          전체 목록
        </button>
        <button
          type="button"
          className={styles.navNext}
          onClick={onNext}
          disabled={athlete.index >= total}
        >
          다음 선수 →
        </button>
      </nav>
    </div>
  );
}
