'use client';

import { useEffect, type RefObject } from 'react';
import type { SaturdayGsap } from './use-saturday-gsap';

/*
 * 스크롤 트랙 배분. 트랙 540svh, 무대 100svh 이므로 무대가 실제로 붙어 있는 구간은
 * 앞쪽 81% 뿐이다. 등장·정지·그리드가 전부 그 안에서 끝나야 한다 —
 * 이 선을 넘겨 배치하면 그리드가 열리자마자 무대가 위로 흘러가 버린다(실제로 겪었다).
 *
 *   0 ~ 50%   01~07번이 한 장씩 올라온다                      (약 270svh)
 *             — 그중 맨 앞 24%(약 65svh)는 오프닝 사진만 있는 정지 구간이다.
 *             이 페이지에 막 들어온 사람이 첫 화면을 감상할 시간이다.
 *   50 ~ 58%  아무 일도 없다. 잠깐 정지                        (약 43svh)
 *   58 ~ 100% 그리드로 펼쳐진 채 붙어 있다                     (약 227svh)
 *
 * 480 → 540svh 로 늘렸다: 올라오는 카드가 여섯 장에서 일곱 장이 됐는데
 * 트랙이 그대로면 한 장당 스크롤이 줄어 몰아치듯 지나간다.
 */
const RISE_END_FRACTION = 0.5;
const GRID_START_FRACTION = 0.58;
const RISE_END = `${RISE_END_FRACTION * 100}% top`;
const GRID_START = `${GRID_START_FRACTION * 100}% top`;

/*
 * 일곱 장이 전부 올라온다. 그 앞에는 개인이 아닌 오프닝 사진 한 장이 서 있다
 * (athlete-deck.tsx 의 introCard) — 예전에는 01번 카드가 그 자리를 대신해서
 * 재춘만 '등장'하지 못하고 배경처럼 서 있었다.
 *
 * HOLD 는 01번이 올라오기 전의 정지 구간(약 63svh). 폰에서 스와이프 한 번 안쪽이라
 * 첫 카드는 금방 온다.
 *
 * 간격은 전부 같다(.90). 예전에는 .95→.55 로 좁혀 가며 '몰아치는' 고조를 만들었는데,
 * 실측해 보니 마지막 카드가 168px 간격이라 폰에서 한 번 튕기면(관성 포함 1000px 이상)
 * 두세 명이 통째로 지나갔다. 리듬보다 '한 명씩 만난다'가 이 페이지의 조건이다.
 * 고조는 이제 카운터(01/07)와 그리드 도착이 만든다.
 *
 * 트랙도 540→800svh 로 늘려 한 장당 약 400px 을 준다(아래 SNAP 과 함께 쓴다).
 */
const HOLD = 1.2;
const GAPS = [0.9, 0.9, 0.9, 0.9, 0.9, 0.9];
const CUES = GAPS.reduce<number[]>(
  (acc, gap) => [...acc, acc[acc.length - 1] + gap],
  [HOLD],
);
const CARD_RISE = 1;
const TIMELINE_END = CUES[CUES.length - 1] + CARD_RISE;

/*
 * 스크롤이 멈추면 가장 가까운 '카드가 막 도착한 지점'으로 붙는다.
 *
 * 거리를 늘리는 것만으로는 부족하다 — 폰의 관성 스크롤은 손을 뗀 뒤에도 계속 굴러서
 * 사람과 사람 사이 어중간한 자리에 서기 쉽다. 스냅이 있으면 아무리 세게 튕겨도
 * 착지는 항상 누군가의 얼굴 위다.
 *
 * 0 은 오프닝(아무도 안 올라온 상태)이다. 이 자리도 하나의 장면이라 스냅 대상에 넣는다.
 */
const SNAP_POINTS = [
  0,
  ...CUES.map((cue) => (cue + CARD_RISE) / TIMELINE_END),
];
/** 이 시점을 넘긴 카드가 '화면 맨 위'다. 절반 넘게 올라왔을 때 이름을 바꾼다 */
const ON_TOP_AT = 0.55;

type DeckScrollArgs = {
  lib: SaturdayGsap | null;
  trackRef: RefObject<HTMLElement | null>;
  deckRef: RefObject<HTMLDivElement | null>;
  cardsRef: RefObject<(HTMLButtonElement | null)[]>;
  /** 격자 한가운데 THE STARTING SEVEN 카피. Flip 이 끝나기 전부터 겹쳐 들어온다 */
  gridCopyRef: RefObject<HTMLDivElement | null>;
  /** 지금 스택 맨 위에 있는 선수. 아직 한 장도 안 올라왔으면 -1 (오프닝 카피가 보인다) */
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
     * 일곱 장 전부가 대상이다. 예전에는 01번을 뺐는데(첫 화면에 이미 놓여 있어서),
     * 지금 그 자리는 오프닝 사진이 맡는다.
     */
    const risingMedias = cards
      .map((card) => card.querySelector<HTMLElement>('[data-media]'))
      .filter((media): media is HTMLElement => media !== null);
    /** 격자에서만 보이는 이름표. 스택에서는 CSS 가 display:none 으로 지운다 */
    const metas = cards
      .map((card) => card.querySelector<HTMLElement>('[data-meta]'))
      .filter((meta): meta is HTMLElement => meta !== null);

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
          /*
           * delay 0.1 — 손이 아직 화면에 있거나 관성이 살아 있는 동안에는 끼어들지 않는다.
           * duration 상한 0.45 — 멀리 튕겼을 때 되돌아오는 길이 너무 길면 '끌려간다'고 느낀다.
           */
          snap: {
            snapTo: SNAP_POINTS,
            duration: { min: 0.15, max: 0.45 },
            delay: 0.1,
            ease: 'power2.inOut',
            /*
             * directional 기본값(true)은 '스크롤하던 방향으로 속도만큼 더 밀어서' 붙인다.
             * 세게 튕기면 그 투영이 서너 명을 건너뛰어 버려서, 고치려던 문제를 그대로 재현한다.
             * false 로 두면 관성이 멎은 자리에서 '가장 가까운 사람'으로 붙는다.
             *
             * inertia 도 끈다 — 켜져 있으면 '이 속도면 여기까지 가겠다'를 예측해서 그 지점에
             * 붙이는데, 실측에서 2000px 튕김이 마지막 07번까지 날아갔다(directional 만 꺼도 동일).
             * 둘 다 꺼야 '멈춘 자리에서 가장 가까운 사람'이 된다.
             */
            directional: false,
            inertia: false,
          },
          onUpdate: (self) => {
            const time = self.progress * TIMELINE_END;
            let next = -1;
            for (let i = 0; i < risingMedias.length; i += 1) {
              if (time >= (CUES[i] ?? 0) + ON_TOP_AT) next = i;
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

        /*
         * absolute: true 를 쓰지 않는다.
         *
         * 그리드의 행은 사진 비율을 지키려고 min-content 다(athletes.module.css).
         * absolute 는 트윈 동안 일곱 장을 전부 흐름에서 빼내는데, 그러면 행을 채우는
         * 것이 하나도 남지 않아 행 높이가 0 으로 붕괴한다. Flip 은 그 붕괴한 격자를
         * 최종 자리로 알고 트윈하고, 트윈이 끝나 흐름으로 돌아오는 순간 진짜 격자
         * 좌표로 튄다 — 실측(390×844): 07번이 y=754 까지 내려갔다가 517 로 237px 되튐.
         *
         * 빼면 카드가 흐름에 남은 채 transform 으로만 움직인다. 첫 프레임부터 행 높이가
         * 최종값이라 되튐이 없다.
         */
        const tl = gsap.timeline();
        tl.add(
          Flip.from(state, {
            duration: 0.8,
            ease: 'power3.inOut',
            scale: true,
            stagger: 0.03,
          }),
        );

        /*
         * 이름표는 카드가 흩어진 뒤에 켠다.
         *
         * 격자 레이아웃이 붙는 순간 .cardMeta 의 display:none 이 풀리는데, 그때 카드는
         * 아직 스택 자리에 겹쳐 있다 — 일곱 개의 이름이 한 점에 포개져 글자 덩어리로 보였다
         * (실측 캡처로 확인). Flip 이 0.8초라 절반쯤 지난 뒤부터 0.35초에 걸쳐 올린다.
         */
        if (next === 'grid') {
          tl.fromTo(
            metas,
            { opacity: 0 },
            { opacity: 1, duration: 0.35, ease: 'power2.out' },
            0.5,
          );
        } else {
          gsap.set(metas, { clearProps: 'opacity' });
        }

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
        if (initialTime >= (CUES[i] ?? 0) + ON_TOP_AT) initialActive = i;
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
