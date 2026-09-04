'use client';

import { useEffect } from 'react';

const clamp = (value: number) => Math.min(1, Math.max(0, value));

export function OidoScrollDirector() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>('[data-oido-story]');
    const progress = document.querySelector<HTMLElement>('[data-story-progress]');
    const hero = document.querySelector<HTMLElement>('[data-oido-scene="hero"]');
    const heroMedia = document.querySelector<HTMLElement>('[data-hero-media]');
    const boxScene = document.querySelector<HTMLElement>('[data-box-scene]');
    const basket = document.querySelector<HTMLElement>('[data-basket]');
    const lidLeft = document.querySelector<HTMLElement>('[data-box-lid="l"]');
    const lidRight = document.querySelector<HTMLElement>('[data-box-lid="r"]');
    const lining = document.querySelector<HTMLElement>('[data-box-lining]');
    const boxTitle = document.querySelector<HTMLElement>('[data-box-title]');
    const boxItems = document.querySelectorAll<HTMLElement>('[data-box-item]');
    const finish = document.querySelector<HTMLElement>('[aria-labelledby="finish-title"]');
    const journeyDistance = document.querySelector<HTMLElement>('[data-journey-distance]');
    const journeyProgress = document.querySelector<HTMLElement>('[data-journey-progress]');
    const journeyMeter = document.querySelector<HTMLElement>('[data-journey-meter]');
    const passSection = document.querySelector<HTMLElement>('[data-pass-section]');
    const runnicPass = document.querySelector<HTMLButtonElement>('[data-runnic-pass]');
    const reveals = document.querySelectorAll<HTMLElement>('[data-reveal]');
    // 마지막 바구니 — 히어로와 같은 스크럽이다. IntersectionObserver 로 한 번에 닫으면
    // 여는 쪽만 스크롤에 매달리고 닫는 쪽은 툭 떨어져서 두 장면이 다른 물건처럼 보인다
    const closingStage = document.querySelector<HTMLElement>('[data-closing-stage]');
    const closingSticky = document.querySelector<HTMLElement>('[data-closing-sticky]');
    const closingBasket = document.querySelector<HTMLElement>('[data-closing-basket]');
    const closingLidL = document.querySelector<HTMLElement>('[data-closing-lid="l"]');
    const closingLidR = document.querySelector<HTMLElement>('[data-closing-lid="r"]');
    const closingLining = document.querySelector<HTMLElement>('[data-closing-lining]');
    const closingTitle = document.querySelector<HTMLElement>('[data-closing-title]');
    const closingSeal = document.querySelector<HTMLElement>('[data-closing-seal]');
    const closingCue = document.querySelector<HTMLElement>('[data-closing-cue]');
    const closingItems = document.querySelectorAll<HTMLElement>('[data-closing-item]');

    if (!root || !progress || !hero || !heroMedia || !boxScene || !basket || !lidLeft || !lidRight || !lining || !boxTitle || !finish || !journeyDistance || !journeyProgress || !journeyMeter) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) (entry.target as HTMLElement).dataset.visible = 'true';
      });
    }, { threshold: 0.16 });

    // 캡션·섹션에 박아 둔 data-km 을 문서 좌표와 짝지어 정렬해 둔다(레이아웃이 바뀌면 다시 잰다)
    const kmNodes = Array.from(document.querySelectorAll<HTMLElement>('[data-km]'));
    let anchors: { y: number; km: number }[] = [];
    const measureAnchors = (start: number, end: number) => {
      const mid = window.innerHeight / 2;
      anchors = kmNodes
        .map((element) => {
          const box = element.getBoundingClientRect();
          return { y: box.top + window.scrollY + box.height / 2 - mid, km: Number(element.dataset.km) };
        })
        .sort((a, b) => a.y - b.y);
      // 양 끝을 고정해야 히어로 직후와 마지막 구간에서도 값이 튀지 않는다
      anchors.unshift({ y: start, km: 0 });
      anchors.push({ y: end, km: 21.51 });
    };

    const kmAtViewportCenter = (start: number, end: number, y: number) => {
      if (!anchors.length) measureAnchors(start, end);
      if (y <= anchors[0].y) return 0;
      for (let i = 1; i < anchors.length; i += 1) {
        const prev = anchors[i - 1];
        const next = anchors[i];
        if (y <= next.y) {
          const span = Math.max(1, next.y - prev.y);
          return prev.km + (next.km - prev.km) * clamp((y - prev.y) / span);
        }
      }
      return 21.51;
    };

    reveals.forEach((element) => observer.observe(element));
    const togglePass = () => {
      if (!runnicPass || !passSection) return;
      const willOpen = runnicPass.getAttribute('aria-expanded') !== 'true';
      runnicPass.setAttribute('aria-expanded', String(willOpen));
      runnicPass.setAttribute('aria-label', willOpen ? '런크닉 패스 앞면 다시 보기' : '런크닉 패스를 뒤집어 준비물 확인하기');
      passSection.dataset.passOpen = String(willOpen);
    };
    runnicPass?.addEventListener('click', togglePass);
    let frame = 0;

    // 스크롤 위치 자체는 건드리지 않는다 — 휠·터치를 가로채는 방식(Lenis 류)은 모바일 관성과
    // 접근성을 같이 망가뜨린다. 대신 연출을 구동하는 좌표만 실제 스크롤을 뒤쫓게 한다.
    // EASE 로 붙는 속도를, MAX_STEP 으로 최대 속도를 잡는다 — 화면을 세게 튕겨도 뚜껑은
    // 프레임당 MAX_STEP 이상 열리지 못하므로 개봉이 한 번에 스킵되지 않는다.
    const EASE = .085;
    const MAX_STEP = 42; // px/frame ≈ 2,500px/s. 보통 읽으며 내리는 속도(~800px/s)는 그대로 통과한다
    let smoothY = window.scrollY;

    const update = () => {
      frame = 0;
      const realY = window.scrollY;
      if (reduceMotion.matches) {
        smoothY = realY;
      } else {
        const diff = realY - smoothY;
        smoothY = Math.abs(diff) < .5
          ? realY
          : smoothY + Math.max(-MAX_STEP, Math.min(MAX_STEP, diff * EASE));
      }
      // 요소는 실제 스크롤 위치에 그려져 있다 — rect 를 감쇠 좌표계로 옮기려면 이 차이를 더한다
      const lag = realY - smoothY;

      const pageRange = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      progress.style.transform = `scaleX(${clamp(smoothY / pageRange)})`;

      const journeyStart = hero.offsetHeight * .55;
      const journeyEnd = finish.offsetTop + finish.offsetHeight * .72;
      const journey = clamp((smoothY - journeyStart) / Math.max(1, journeyEnd - journeyStart));
      // 오도미터는 스크롤이 아니라 이야기 좌표로 움직여야 한다. 스크롤 비례로 두면
      // "0.00 KM / 출발" 이라고 쓴 사진 위에 5.12 가, "20.80 KM" 위에 18.33 이 떴다.
      // 캡션 km 을 앵커로 잡고 그 사이를 선형 보간하면 화면의 두 숫자가 같은 말을 한다.
      journeyDistance.textContent = kmAtViewportCenter(journeyStart, journeyEnd, smoothY).toFixed(2);
      journeyProgress.style.transform = `scaleX(${journey})`;
      const finishRect = finish.getBoundingClientRect();
      const finishCopyIsEntering = finishRect.top + lag < window.innerHeight * .16;
      journeyMeter.dataset.active = journey > .005 && journey < .995 && !finishCopyIsEntering ? 'true' : 'false';

      const heroRect = hero.getBoundingClientRect();
      const heroProgress = clamp(-(heroRect.top + lag) / Math.max(1, heroRect.height - window.innerHeight));
      heroMedia.style.transform = reduceMotion.matches ? 'none' : `scale(${1.03 + heroProgress * 0.07})`;
      // 배율 1.25 는 히어로 스크롤 예산의 80% 지점에서 개봉을 끝내버렸다. 1.0 으로 예산 전체를 쓰고,
      // 소멸 시작도 .7 → .78 로 늦춰 박스가 화면에 머무는 구간을 늘린다
      const boxProgress = reduceMotion.matches ? 1 : heroProgress;
      const unpackProgress = clamp((boxProgress - .16) / .5);
      const dissolveProgress = clamp((boxProgress - .78) / .22);
      // 뚜껑 두 짝이 각자 바깥쪽 경첩을 축으로 젖혀진다. 96도면 옆으로 눕는다(118도는 위로 뻗어 어색)
      const openDeg = 96 * boxProgress;
      lidLeft.style.transform = `rotate(${-openDeg}deg)`;
      lidRight.style.transform = `rotate(${openDeg}deg)`;
      // 뚜껑이 어느 정도 열린 뒤에 안감이 올라와야 순서가 물리와 맞는다
      lining.style.opacity = String(clamp((boxProgress - .18) / .30));
      boxTitle.style.opacity = String(1 - clamp(boxProgress / .26));
      basket.style.transform = `translate(-50%, -50%) scale(${1 + unpackProgress * .08})`;
      boxScene.style.opacity = String(1 - dissolveProgress);
      boxScene.style.pointerEvents = boxProgress > .78 ? 'none' : 'auto';
      boxItems.forEach((element, index) => {
        const itemProgress = clamp((boxProgress - (.18 + index * .055)) / .28);
        element.style.opacity = String(itemProgress);
        element.style.transform = `translateY(${(1 - itemProgress) * 28}px) rotate(var(--item-tilt, 0deg))`;
      });

      // 마지막 바구니를 닫는다 — 히어로 개봉의 역재생이라 각도(96도)·구간 순서를 그대로 뒤집는다
      let closingCoversHeader = false;
      if (closingStage && closingSticky && closingBasket && closingLidL && closingLidR && closingLining && closingTitle) {
        const stageRect = closingStage.getBoundingClientRect();
        const shut = reduceMotion.matches
          ? 1
          : clamp(-(stageRect.top + lag) / Math.max(1, stageRect.height - window.innerHeight));
        // ease-out(1-(1-t)^3)은 첫 1/4 에서 96도→28도를 다 써버리고 나머지 스크롤 절반이
        // 정지 화면이 됐다. smoothstep 은 시작·끝만 무르고 가운데를 고르게 쓴다
        const t = clamp(shut / .78);
        const seated = t * t * (3 - 2 * t);
        const closeDeg = 96 * (1 - seated);
        closingLidL.style.transform = `rotate(${-closeDeg}deg)`;
        closingLidR.style.transform = `rotate(${closeDeg}deg)`;
        // 안감은 뚜껑이 덮이기 전에 먼저 접힌다(히어로에서는 열린 뒤에 올라왔다)
        closingLining.style.opacity = String(1 - clamp((shut - .28) / .34));
        closingTitle.style.opacity = String(clamp((shut - .62) / .26));
        closingBasket.style.transform = `translate(-50%, -50%) scale(${1.06 - seated * .06})`;
        if (closingSeal) closingSeal.style.opacity = String(clamp((shut - .84) / .12));
        if (closingCue) closingCue.style.opacity = String(1 - clamp(shut / .5));
        closingItems.forEach((element, index) => {
          const packed = 1 - clamp((shut - (.05 + index * .05)) / .26);
          element.style.opacity = String(packed);
          element.style.transform = `translateY(${(1 - packed) * 26}px) rotate(var(--item-tilt, 0deg))`;
        });
        // 스티키 패널이 종이색이라 헤더 밑에 깔리는 순간 헤더 글자가 배경에 묻는다.
        // 여기만 감쇠 좌표가 아니라 실제 위치를 쓴다 — 패널은 실제 스크롤 위치에 그려지므로
        // lag 를 더하면 헤더 색이 화면에 깔린 배경보다 늦게 뒤집혀 한동안 글자가 묻는다
        const stickyRect = closingSticky.getBoundingClientRect();
        closingCoversHeader = stickyRect.top <= 84 && stickyRect.bottom >= 84;
      }
      // 종이(밝은) 배경 위에서는 밝은 헤더 글자가 읽히지 않는다 — 그동안만 잉크색으로.
      // 히어로 박스와 마지막 바구니가 같은 조건이라 한 플래그로 묶는다
      root.dataset.paperBg = String(boxProgress < .78 || closingCoversHeader);

      // 감쇠 좌표가 아직 실제 스크롤을 따라잡는 중이면 스크롤 이벤트가 멎어도 계속 그린다.
      // 따라잡으면 루프를 놓아준다 — 상시 rAF 는 가만히 있어도 배터리를 먹는다
      if (smoothY !== window.scrollY) requestUpdate();
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    // 뷰포트가 바뀌거나 lazy 이미지가 들어오면 앵커 좌표가 낡는다 — 비우면 다음 프레임에 다시 잰다
    const remeasure = () => {
      anchors = [];
      requestUpdate();
    };

    update();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', remeasure);
    window.addEventListener('load', remeasure);
    reduceMotion.addEventListener('change', requestUpdate);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      observer.disconnect();
      runnicPass?.removeEventListener('click', togglePass);
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', remeasure);
      window.removeEventListener('load', remeasure);
      reduceMotion.removeEventListener('change', requestUpdate);
    };
  }, []);

  return null;
}
