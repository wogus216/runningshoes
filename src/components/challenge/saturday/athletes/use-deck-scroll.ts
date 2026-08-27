'use client';

import { useEffect, type RefObject } from 'react';
import type { SaturdayGsap } from './use-saturday-gsap';

/*
 * 스크롤 트랙 배분. 트랙 320svh, 무대 100svh 이므로 무대가 실제로 붙어 있는 구간은
 * 앞쪽 70% 뿐이다. 등장·정지·그리드가 전부 그 안에서 끝나야 한다 —
 * 이 선을 넘겨 배치하면 그리드가 열리자마자 무대가 위로 흘러가 버린다(실제로 겪었다).
 *
 *   0 ~ 50%   일곱 장이 한 장씩 올라온다        (약 160svh)
 *   50 ~ 58%  아무 일도 없다. 잠깐 정지          (약 26svh)
 *   58 ~ 70%  그리드로 펼쳐진 채 붙어 있다       (약 38svh)
 *   70 ~ 100% 무대가 그리드를 든 채 위로 빠진다  (약 96svh)
 */
const RISE_END = '50% top';
const GRID_START = '58% top';

/*
 * 카드가 올라오는 시작 시점. 뒤로 갈수록 간격이 좁아진다 —
 * 일곱 번이 같은 박자로 반복되면 셋째 장부터 지루해지고, 마지막 세 장이 몰아치면 장면이 닫힌다.
 * 간격: .95 → .90 → .85 → .75 → .65 → .55
 */
const CUES = [0, 0.95, 1.85, 2.7, 3.45, 4.1, 4.65];
const CARD_RISE = 1;
const TIMELINE_END = CUES[CUES.length - 1] + CARD_RISE;
/** 이 시점을 넘긴 카드가 '화면 맨 위'다. 절반 넘게 올라왔을 때 이름을 바꾼다 */
const ON_TOP_AT = 0.55;

type DeckScrollArgs = {
  lib: SaturdayGsap | null;
  trackRef: RefObject<HTMLElement | null>;
  deckRef: RefObject<HTMLDivElement | null>;
  cardsRef: RefObject<(HTMLButtonElement | null)[]>;
  /** 지금 스택 맨 위에 있는 선수. 아직 아무도 안 올라왔으면 -1 */
  onActiveChange: (index: number) => void;
};

// 프로필이 열려도 이 연출을 되돌리지 않는다. 되돌리면 트랙 높이가 사라져
// 뒤에 있던 스크롤 위치가 통째로 튄다 — 프로필은 그 위에 덮이는 fixed 레이어일 뿐이다.

/**
 * 장면 2~3 담당 — 일곱 장이 한 장씩 올라와 쌓이고(scrub), 잠깐 멎었다가,
 * 같은 사진이 자기 그리드 자리로 이동한다(Flip).
 *
 * 카드를 지우고 새 그리드를 그리지 않는다. DOM 노드는 처음부터 끝까지 같은 일곱 개다.
 * 움직이는 것은 사진의 위치와 크기뿐이다 — 카드를 장식하는 모션은 넣지 않는다.
 */
export function useDeckScroll({
  lib,
  trackRef,
  deckRef,
  cardsRef,
  onActiveChange,
}: DeckScrollArgs) {
  useEffect(() => {
    const track = trackRef.current;
    const deck = deckRef.current;
    const cards = (cardsRef.current ?? []).filter(
      (card): card is HTMLButtonElement => card !== null,
    );

    if (!lib || !track || !deck || cards.length === 0) return;

    const { gsap, ScrollTrigger, Flip } = lib;
    let layout: 'stack' | 'grid' = 'stack';
    let active = -1;

    const context = gsap.context(() => {
      track.dataset.motion = 'on';
      track.dataset.phase = 'stack';
      deck.dataset.layout = 'stack';

      // 나중에 올라온 카드가 위에 놓인다
      cards.forEach((card, index) => {
        gsap.set(card, { zIndex: index + 1 });
      });

      const rise = gsap.timeline({
        scrollTrigger: {
          trigger: track,
          start: 'top top',
          end: RISE_END,
          scrub: 0.5,
          onUpdate: (self) => {
            const time = self.progress * TIMELINE_END;
            let next = -1;
            for (let i = 0; i < cards.length; i += 1) {
              if (time >= (CUES[i] ?? 0) + ON_TOP_AT) next = i;
            }
            if (next === active) return;
            active = next;
            onActiveChange(next);
          },
        },
      });

      cards.forEach((card, index) => {
        const cue = CUES[index] ?? index;

        // 위치는 끝까지 움직인다. 175% 는 무대(overflow:hidden) 바깥이다 —
        // 화면 안에서 나타나지 않고 아래에서 밀려 들어온다.
        rise.from(
          card,
          { yPercent: 175, duration: CARD_RISE, ease: 'power2.out' },
          cue,
        );

        // 불투명해지는 건 앞 20%에서 끝난다. 그 구간은 아직 무대 밖이다.
        // 카드에 흰 매트가 없어서 반투명한 채로 올라오면 앞장과 유령처럼 겹쳐 보인다.
        //
        // autoAlpha(=visibility) 가 아니라 opacity 를 쓴다 — visibility:hidden 이면
        // 아직 안 올라온 카드가 포커스를 받을 수 없어 키보드로 일곱 명을 건너뛰게 된다.
        // 안 보이는 카드의 마우스 클릭은 CSS 의 pointer-events 로 막는다.
        rise.from(
          card,
          { opacity: 0, duration: CARD_RISE * 0.2, ease: 'none' },
          cue,
        );
      });

      const flipTo = (next: 'stack' | 'grid') => {
        if (layout === next) return;
        layout = next;

        const state = Flip.getState(cards);
        deck.dataset.layout = next;
        track.dataset.phase = next;
        // 스크럽 트윈이 남긴 인라인 transform 을 걷어야 Flip 이 '진짜 최종 자리'로 간다
        gsap.set(cards, { clearProps: 'transform,opacity' });

        Flip.from(state, {
          duration: 0.8,
          ease: 'power3.inOut',
          absolute: true,
          scale: true,
          stagger: 0.03,
        });
      };

      ScrollTrigger.create({
        trigger: track,
        start: GRID_START,
        end: 'bottom bottom',
        onEnter: () => flipTo('grid'),
        onLeaveBack: () => flipTo('stack'),
      });
    }, track);

    return () => {
      context.revert();
      delete track.dataset.motion;
      delete track.dataset.phase;
      // 연출을 끄면 기본 상태(그리드 한 화면)로 돌아간다. 일곱 명은 항상 보인다
      deck.dataset.layout = 'grid';
    };
  }, [lib, trackRef, deckRef, cardsRef, onActiveChange]);
}
