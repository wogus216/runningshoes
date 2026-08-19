'use client';

import { useEffect } from 'react';

const thresholds: Record<string, [number, number, number]> = {
  hero: [0.22, 0.48, 0.76],
  crew: [0.18, 0.4, 0.73],
  race: [0.22, 0.5, 0.8],
};

export function CinematicDirector() {
  useEffect(() => {
    const scenes = Array.from(
      document.querySelectorAll<HTMLElement>('[data-cinematic-scene]'),
    );
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;

    const update = () => {
      frame = 0;

      // 모션 감소: data-beat를 아예 제거해 CSS 기본 상태(완성 포스터)로 되돌린다
      if (reduceMotion.matches) {
        scenes.forEach((scene) => {
          delete scene.dataset.beat;
          scene.style.removeProperty('--scene-progress');
        });
        return;
      }

      const viewportHeight = window.innerHeight;
      const scrollTop = window.scrollY;

      const measurements = scenes.map((scene) => {
        const top = scene.getBoundingClientRect().top + scrollTop;
        const range = Math.max(1, scene.offsetHeight - viewportHeight);
        const progress = Math.min(1, Math.max(0, (scrollTop - top) / range));
        const key = scene.dataset.cinematicScene ?? 'hero';
        const points = thresholds[key] ?? thresholds.hero;
        const beat =
          progress < points[0] ? 0 : progress < points[1] ? 1 : progress < points[2] ? 2 : 3;

        return { scene, progress, beat };
      });

      measurements.forEach(({ scene, progress, beat }) => {
        scene.dataset.beat = String(beat);
        scene.style.setProperty('--scene-progress', progress.toFixed(3));
      });
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate, { passive: true });
    reduceMotion.addEventListener('change', requestUpdate);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      reduceMotion.removeEventListener('change', requestUpdate);
    };
  }, []);

  return null;
}
