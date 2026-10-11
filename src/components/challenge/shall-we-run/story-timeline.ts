/** Seconds are an editing timeline, not a measurement of the runner's activity. */
export const STORY_DURATION = 34;
export const STORY_SCENES = [
  { id: 'start', start: 0, end: 3, label: '출발' },
  { id: 'film', start: 3, end: 10, label: '쉘위런' },
  { id: 'weekend', start: 10, end: 15, label: '주말' },
  { id: 'reason', start: 15, end: 20, label: '달릴 이유' },
  { id: 'finish', start: 20, end: 27, label: '완주' },
  { id: 'next', start: 27, end: 34, label: '다음 한 걸음' },
] as const;

export const clamp = (n: number, min = 0, max = 1) => Math.min(max, Math.max(min, n));
const ease = (n: number) => 1 - Math.pow(1 - clamp(n), 3);

/** One DOM director for both native scrolling and deterministic reel capture. */
export function paintStory(root: HTMLElement, seconds: number) {
  const t = clamp(seconds, 0, STORY_DURATION);
  const scenes = root.querySelectorAll<HTMLElement>('[data-scene]');
  STORY_SCENES.forEach((scene, i) => {
    const element = scenes[i];
    if (!element) return;
    const active = t >= scene.start && (t < scene.end || i === scenes.length - 1);
    const entering = scene.start === 0 ? 1 : ease((t - scene.start) / 0.32);
    // A firm cut avoids an empty frame between chapters; the incoming text settles.
    element.style.opacity = active ? '1' : '0';
    element.style.visibility = active ? 'visible' : 'hidden';
    element.style.transform = `translateY(${active ? (1 - entering) * 18 : 0}px)`;
    element.setAttribute('aria-hidden', String(!active));
    element.toggleAttribute('inert', !active);
  });
  const paper = t >= 20 && t < 27;
  const lineTime = Math.min(t, 30);
  root.dataset.paper = String(paper);
  root.style.setProperty('--line-x', `${-30 + clamp(lineTime / STORY_DURATION) * 55}%`);
  root.style.setProperty('--line-turn', `${-15 + clamp(lineTime / STORY_DURATION) * 25}deg`);
  root.style.setProperty('--line-scale', String(0.6 + clamp(t / 20) * 0.7));
  root.style.setProperty('--seven-rise', `${(1 - ease((t - 3) / 1.1)) * 45}px`);
  root.style.setProperty('--late-opacity', String(ease((t - 17.5) / 0.45)));
  root.style.setProperty('--early-opacity', String(1 - ease((t - 17.5) / 0.45)));
  root.style.setProperty('--invite-opacity', String(ease((t - 29.4) / 0.45)));
  root.style.setProperty('--waiting-opacity', String(1 - ease((t - 29.4) / 0.45)));
  root.querySelectorAll<HTMLElement>('[data-nav-scene]').forEach((link, i) => {
    link.setAttribute('aria-current', t >= STORY_SCENES[i].start && t < STORY_SCENES[i].end ? 'step' : 'false');
  });
}
