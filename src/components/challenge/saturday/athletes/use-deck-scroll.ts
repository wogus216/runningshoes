'use client';

import { useEffect, type RefObject } from 'react';
import type { SaturdayGsap } from './use-saturday-gsap';

/*
 * 스크롤 트랙 배분. 트랙 400svh, 무대 100svh 이므로 무대가 실제로 붙어 있는 구간은
 * 앞쪽 70% 뿐이다. 등장·정지·그리드가 전부 그 안에서 끝나야 한다 —
 * 이 선을 넘겨 배치하면 그리드가 열리자마자 무대가 위로 흘러가 버린다(실제로 겪었다).
 *
 *   0 ~ 50%   01번(재춘)은 이미 도착해 있고, 02~07번이 한 장씩 올라온다  (약 200svh)
 *             — 그중 맨 앞 11%(약 22svh)는 아무 카드도 움직이지 않는 정지 구간이다.
 *             이 페이지에 막 들어온 사람이 카드 스택을 히어로로 감상할 시간이다.
 *   50 ~ 58%  아무 일도 없다. 잠깐 정지          (약 32svh)
 *   58 ~ 100% 그리드로 펼쳐진 채 붙어 있다       (약 168svh)
 */
const RISE_END_FRACTION = 0.5;
const GRID_START_FRACTION = 0.58;
const RISE_END = `${RISE_END_FRACTION * 100}% top`;
const GRID_START = `${GRID_START_FRACTION * 100}% top`;

/*
 * 01번(재춘)은 애니메이션 없이 처음부터 제자리다 — 이 페이지의 첫 화면 자체가
 * 이미 도착한 카드 스택이어야 하기 때문이다. 그래서 이 타임라인은 02~07번 여섯 장만 다룬다.
 *
 * HOLD 는 02번이 올라오기 전의 정지 구간(스크롤 20~30svh 상당). 그 뒤로는 간격이
 * 좁아진다 — 여섯 번이 같은 박자로 반복되면 지루해지고, 마지막 장들이 몰아쳐야 장면이 닫힌다.
 * 간격: .90 → .85 → .75 → .65 → .55
 */
const HOLD = 0.6;
const GAPS = [0.9, 0.85, 0.75, 0.65, 0.55];
const CUES = GAPS.reduce<number[]>(
  (acc, gap) => [...acc, acc[acc.length - 1] + gap],
  [HOLD],
);
const CARD_RISE = 1;
const TIMELINE_END = CUES[CUES.length - 1] + CARD_RISE;
/** 이 시점을 넘긴 카드가 '화면 맨 위'다. 절반 넘게 올라왔을 때 이름을 바꾼다 */
const ON_TOP_AT = 0.55;

type DeckScrollArgs = {
  lib: SaturdayGsap | null;
  trackRef: RefObject<HTMLElement | null>;
  deckRef: RefObject<HTMLDivElement | null>;
  cardsRef: RefObject<(HTMLButtonElement | null)[]>;
  /** 격자 한가운데 THE STARTING SEVEN 카피. Flip 이 끝나기 전부터 겹쳐 들어온다 */
  gridCopyRef: RefObject<HTMLDivElement | null>;
  /** 지금 스택 맨 위에 있는 선수. 01번(재춘)만 도착해 있으면 -1 (오프닝 카피가 대신 보인다) */
  onActiveChange: (index: number) => void;
  /** 'stack' | 'grid'. 모션 감소·JS 미로딩 상태에서는 한 번도 불리지 않는다(기본값 그리드 유지) */
  onPhaseChange: (phase: 'stack' | 'grid') => void;
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
  gridCopyRef,
  onActiveChange,
  onPhaseChange,
}: DeckScrollArgs) {
  useEffect(() => {
    const track = trackRef.current;
    const deck = deckRef.current;
    const gridCopy = gridCopyRef.current;
    const cards = (cardsRef.current ?? []).filter(
      (card): card is HTMLButtonElement => card !== null,
    );
    /*
     * 올라오는 연출은 카드가 아니라 '카드 안의 사진'에 건다.
     *
     * 둘 다 카드에 걸면 Flip(그리드↔스택)과 스크럽 타임라인이 같은 元素의 transform 을
     * 두고 싸운다. 되감기에서 스태거 뒤쪽 카드는 Flip 이 늦게 끝나 스크럽이 재렌더를 멈춘 뒤에
     * 마지막으로 transform 을 쓰고, 그 카드는 영원히 그 자리에 남는다 —
     * 실측(1440×900, 0→2600→0)에서 첫 화면에 일곱 장이 전부 겹쳐 보였고 카운터만 01 이었다.
     * 끝난 뒤에 고쳐 주는 방식(clearProps + invalidate + 강제 재렌더)도 시도했지만
     * 스크럽이 다시 그리지 않아 회복되지 않았다.
     *
     * 그래서 소유권을 아예 나눈다: Flip 은 .card 를, 스크럽은 [data-media] 를 만진다.
     * 서로 다른 요소라 순서·타이밍과 무관하게 최종 상태가 항상 옳다.
     * 무대(.deck[data-layout='stack'])가 overflow:hidden 이라 사진이 카드 밖으로 내려가는
     * 모습은 예전과 똑같이 '아래에서 밀려 들어오는' 것으로 보인다.
     *
     * 01번(재춘)은 애니메이션 대상이 아니다. 처음부터 제자리라 스크럽에서 뺀다.
     */
    const medias = cards
      .map((card) => card.querySelector<HTMLElement>('[data-media]'))
      .filter((media): media is HTMLElement => media !== null);
    const risingMedias = medias.slice(1);

    if (!lib || !track || !deck || cards.length === 0) return;

    const { gsap, ScrollTrigger, Flip } = lib;
    let layout: 'stack' | 'grid' = 'stack';
    let active = -1;

    const context = gsap.context(() => {
      track.dataset.motion = 'on';
      track.dataset.phase = 'stack';
      deck.dataset.layout = 'stack';
      onPhaseChange('stack');

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
            for (let i = 0; i < risingMedias.length; i += 1) {
              if (time >= (CUES[i] ?? 0) + ON_TOP_AT) next = i + 1;
            }
            if (next === active) return;
            active = next;
            onActiveChange(next);
          },
        },
      });

      risingMedias.forEach((media, index) => {
        const cue = CUES[index] ?? index;
        // 짝수/홀수를 번갈아 반대로 틀어 올린다. 도착하면 다시 0도로 정돈된다(.from 기준값)
        const tilt = index % 2 === 0 ? -1 : 1;

        // 위치는 끝까지 움직인다. 175% 는 무대(overflow:hidden) 바깥이다 —
        // 화면 안에서 나타나지 않고 아래에서 밀려 들어온다.
        rise.from(
          media,
          { yPercent: 175, rotate: tilt, duration: CARD_RISE, ease: 'power2.out' },
          cue,
        );

        // 불투명해지는 건 앞 20%에서 끝난다. 그 구간은 아직 무대 밖이다.
        // 사진에 흰 매트가 없어서 반투명한 채로 올라오면 앞장과 유령처럼 겹쳐 보인다.
        //
        // autoAlpha(=visibility) 가 아니라 opacity 를 쓴다 — visibility:hidden 이면
        // 아직 안 올라온 카드가 포커스를 받을 수 없어 키보드로 일곱 명을 건너뛰게 된다.
        // 안 보이는 카드의 마우스 클릭은 CSS 의 pointer-events 로 막는다.
        rise.from(
          media,
          { opacity: 0, duration: CARD_RISE * 0.2, ease: 'none' },
          cue,
        );
      });

      /*
       * 카드 도착 마무리 → 그리드 확장(Flip) → 중앙 카피 등장, 이 세 박자를 순서대로 잇지 않고
       * 겹친다 — Flip 이 끝나기 0.35초 전부터 카피가 따라붙는다. 레퍼런스(Codrops Sticky Grid
       * Scroll)가 쓰는 방식과 같다: 겹친 이징이 '쌓여서 터지는' 고조감을 만든다.
       * 역방향(그리드→스택)에서는 카피가 다시 카드 뒤로 숨을 뿐이라 겹칠 이유가 없다 — 그냥 지운다.
       */
      const flipTo = (next: 'stack' | 'grid') => {
        if (layout === next) return;
        layout = next;

        const state = Flip.getState(cards);
        deck.dataset.layout = next;
        track.dataset.phase = next;
        onPhaseChange(next);
        // 지난번 Flip 이 남긴 인라인 transform 을 걷어야 이번 Flip 이 '진짜 최종 자리'로 간다.
        // 사진([data-media])은 건드리지 않는다 — 저건 스크럽 타임라인 소유다
        gsap.set(cards, { clearProps: 'transform,opacity' });

        const tl = gsap.timeline();
        tl.add(
          Flip.from(state, {
            duration: 0.8,
            ease: 'power3.inOut',
            absolute: true,
            scale: true,
            stagger: 0.03,
          }),
        );

        if (!gridCopy) return;
        if (next === 'grid') {
          tl.fromTo(
            gridCopy,
            { opacity: 0, y: 14 },
            { opacity: 1, y: 0, duration: 0.5, ease: 'power2.inOut' },
            '-=0.35',
          );
        } else {
          gsap.set(gridCopy, { clearProps: 'opacity,transform' });
        }
      };

      ScrollTrigger.create({
        trigger: track,
        start: GRID_START,
        end: 'bottom bottom',
        onEnter: () => flipTo('grid'),
        onLeaveBack: () => flipTo('stack'),
      });

      /*
       * 초기 동기화 — 새로고침이 스크롤 위치를 복원하면(또는 앵커로 트랙 중간에 바로 진입하면)
       * 이미 트랙 한가운데서 마운트된다. onEnter/onUpdate 는 '경계를 지나는 순간'에만 불려서
       * 이 경우엔 한 번도 안 불리고 07번 사진만 다 올라온 채 이전 활성 카드 텍스트가 눌어붙는다
       * (실측으로 확인). 현재 스크롤 기준으로 active 와 그리드 전환을 한 번 강제로 맞춘다.
       *
       * ScrollTrigger 의 `.progress`/`.isActive` 를 그대로 믿지 않는다 — `create()` 직후엔
       * 아직 내부 측정이 끝나지 않아 매 요청마다 값이 다르게 잡혔다(실측으로 확인, 새로고침
       * 안 했는데도 그리드가 열려버리는 오탐 포함). 대신 트랙의 실제 화면 좌표를 직접 잰다.
       */
      const trackTop = track.getBoundingClientRect().top + window.scrollY;
      const trackHeight = track.offsetHeight; // data-motion='on' 반영 위해 강제 리플로우
      const riseSpan = trackHeight * RISE_END_FRACTION;
      const initialRiseProgress =
        riseSpan > 0
          ? Math.min(1, Math.max(0, (window.scrollY - trackTop) / riseSpan))
          : 0;

      const initialTime = initialRiseProgress * TIMELINE_END;
      let initialActive = -1;
      for (let i = 0; i < risingMedias.length; i += 1) {
        if (initialTime >= (CUES[i] ?? 0) + ON_TOP_AT) initialActive = i + 1;
      }
      active = initialActive;
      onActiveChange(initialActive);

      if (window.scrollY >= trackTop + trackHeight * GRID_START_FRACTION) {
        flipTo('grid');
      }
    }, track);

    return () => {
      context.revert();
      delete track.dataset.motion;
      delete track.dataset.phase;
      // 연출을 끄면 기본 상태(그리드 한 화면)로 돌아간다. 일곱 명은 항상 보인다
      deck.dataset.layout = 'grid';
      if (gridCopy) gsap.set(gridCopy, { clearProps: 'opacity,transform' });
      onPhaseChange('grid');
    };
  }, [lib, trackRef, deckRef, cardsRef, gridCopyRef, onActiveChange, onPhaseChange]);
}
