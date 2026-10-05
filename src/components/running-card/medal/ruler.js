// Ruler — a horizontal scale like a body-weight app: a fixed brass needle at the centre, an ink tick band that slides under
// it. Drag (touch, mouse, pen) or use the keyboard; on release the band glides on its momentum and settles on the nearest tick.
// Standalone module: needs ruler.css, knows nothing about the page that hosts it.
//
//   import * as Ruler from './ruler.js';
//   const ruler = Ruler.create(el, { min: 0, max: 500, step: 1, majorEvery: 10, value: 150,
//     format: n => String(n), valueText: n => `${n}킬로미터`, label: '총거리',
//     onInput: n => {},   // the rounded value changed while moving (at most once per animation frame)
//     onChange: n => {},  // the band came to rest on a value after a drag, a glide or a key press
//     reduced: () => false });  // optional; true = no glide, the band snaps to a tick at once
//   ruler.set(value)        // from outside (keypad); never calls onInput/onChange
//   ruler.setRange(min, max); ruler.setLabel(text); ruler.destroy();
const mediaReduce = matchMedia('(prefers-reduced-motion: reduce)');
const clamp = (n, low, high) => Math.max(low, Math.min(high, n));
const TAU = 260;          // ms: glide time constant. Release velocity v carries the band v * TAU further.
const MAX_CARRY = 160;    // ticks: the longest glide a fling can start.

export function create(el, options = {}) {
  const o = Object.assign({ min: 0, max: 100, step: 1, majorEvery: 10, mediumEvery: 5, pxPerStep: 10, value: 0, format: n => String(n), valueText: null, label: '', onInput() {}, onChange() {}, reduced: () => false }, options);
  el.classList.add('ruler');
  el.setAttribute('role', 'slider'); el.setAttribute('aria-orientation', 'horizontal'); el.tabIndex = 0;
  if (o.label) el.setAttribute('aria-label', o.label);
  const canvas = document.createElement('canvas'), needle = document.createElement('span');
  canvas.className = 'ruler-band'; needle.className = 'ruler-needle'; needle.setAttribute('aria-hidden', 'true'); canvas.setAttribute('aria-hidden', 'true');
  el.append(canvas, needle);
  const g = canvas.getContext('2d');

  let pos = clamp(o.value, o.min, o.max);   // what the band shows, in value units (fractional while moving)
  let value = pos;                          // the value the page knows
  let W = 0, H = 0, dpr = 1, raf = 0, dirty = true, destroyed = false;
  let drag = null, glide = null, emitPending = false, restPending = false, lastBuzz = 0;
  const reduced = () => mediaReduce.matches || !!o.reduced();
  const snap = v => clamp(Math.round(v / o.step) * o.step, o.min, o.max);

  function aria() {
    el.setAttribute('aria-valuemin', String(o.min)); el.setAttribute('aria-valuemax', String(o.max));
    el.setAttribute('aria-valuenow', String(value));
    el.setAttribute('aria-valuetext', o.valueText ? o.valueText(value) : o.format(value));
  }
  function size() {
    const r = el.getBoundingClientRect();
    W = Math.round(r.width); H = Math.round(r.height); dpr = Math.min(devicePixelRatio || 1, 2);
    canvas.width = W * dpr; canvas.height = H * dpr; dirty = true; request();
  }
  const css = name => getComputedStyle(el).getPropertyValue(name).trim();

  function draw() {
    if (!W || !H) return;
    g.setTransform(dpr, 0, 0, dpr, 0, 0); g.clearRect(0, 0, W, H);
    const ink = css('--ruler-ink') || '#302e26', font = css('--ruler-font') || 'sans-serif', cx = W / 2, ppu = o.pxPerStep / o.step;
    const k = Math.min(1, H / 48), baseY = Math.round(5 * k), lenMinor = 11 * k, lenMedium = 18 * k, lenMajor = 25 * k, labelY = H - Math.round(5 * k);
    const first = Math.max(Math.ceil((pos - cx / ppu - 1) / o.step), Math.ceil(o.min / o.step));
    const last = Math.min(Math.floor((pos + cx / ppu + 1) / o.step), Math.floor(o.max / o.step));
    g.strokeStyle = ink; g.fillStyle = ink; g.textAlign = 'center'; g.textBaseline = 'alphabetic';
    g.font = `700 ${k < 1 ? 12 : 13}px ${font}`;
    for (let i = first; i <= last; i++) {
      const v = i * o.step, x = Math.round(cx + (v - pos) * ppu) + .5, major = i % o.majorEvery === 0, medium = i % o.mediumEvery === 0;
      g.globalAlpha = major ? 1 : medium ? .75 : .45; g.lineWidth = major ? 1.6 : 1;
      g.beginPath(); g.moveTo(x, baseY); g.lineTo(x, baseY + (major ? lenMajor : medium ? lenMedium : lenMinor)); g.stroke();
      if (major) { g.globalAlpha = 1; g.fillText(o.format(v), x, labelY); }
    }
    g.globalAlpha = 1;
  }
  function request() { if (!raf && !destroyed) raf = requestAnimationFrame(frame); }

  function note(v) {
    if (v === value) return;
    value = v; emitPending = true; aria();
    // Android only (iOS Safari has no vibrate; Chrome refuses it before the first completed tap): a very short tick per value, never faster than the hand can feel.
    const now = performance.now();
    if (navigator.vibrate && navigator.userActivation?.hasBeenActive !== false && now - lastBuzz > 35) { lastBuzz = now; try { navigator.vibrate(4); } catch { /* optional */ } }
  }
  function frame(now) {
    raf = 0;
    if (glide) {
      const t = now - glide.start, k = Math.exp(-t / glide.tau);
      pos = glide.target - (glide.target - glide.from) * k;
      if (Math.abs(glide.target - pos) < .12 || t > glide.tau * 9) { pos = glide.target; glide = null; restPending = !drag; }
      else note(snap(pos));
      if (!glide) note(snap(pos));
      dirty = true;
    }
    if (dirty) { draw(); dirty = false; }
    if (emitPending) { emitPending = false; o.onInput(value); }
    if (restPending && !glide && !drag) { restPending = false; o.onChange(value); }
    if (glide) request();
  }

  function glideTo(target, from = pos, velocity = 0, tau = TAU) {
    const to = snap(target);
    if (reduced() || Math.abs(to - from) < .001 && !velocity) { glide = null; pos = to; note(to); restPending = true; dirty = true; request(); return; }
    glide = { start: performance.now(), from, target: to, tau }; request();
  }

  // Pointer: the band follows the finger one to one (the value under the needle is the one that counts).
  const samples = [];
  el.addEventListener('pointerdown', e => {
    if (e.button !== 0 && e.pointerType === 'mouse') return;
    glide = null; restPending = false;
    drag = { id: e.pointerId, x: e.clientX, from: pos };
    samples.length = 0; samples.push([performance.now(), pos]);
    try { el.setPointerCapture(e.pointerId); } catch { /* the pointer may already be gone */ }
    el.classList.add('is-dragging');
  });
  el.addEventListener('pointermove', e => {
    if (!drag || drag.id !== e.pointerId) return;
    const ppu = o.pxPerStep / o.step;
    pos = clamp(drag.from - (e.clientX - drag.x) / ppu, o.min, o.max);
    if (reduced()) pos = snap(pos);
    const now = performance.now(); samples.push([now, pos]); while (samples.length > 2 && now - samples[0][0] > 100) samples.shift();
    note(snap(pos)); dirty = true; request();
  });
  function release(e) {
    if (!drag || drag.id !== e.pointerId) return;
    try { el.releasePointerCapture(e.pointerId); } catch { /* already released */ }
    drag = null; el.classList.remove('is-dragging');
    const now = performance.now(), [t0, p0] = samples[0] || [now, pos];
    // Velocity over the last ~100 ms; a hand that stopped before lifting carries nothing.
    const stale = now - (samples[samples.length - 1]?.[0] ?? now) > 60, v = !stale && now > t0 ? (pos - p0) / (now - t0) : 0;
    const carry = clamp(v * TAU, -MAX_CARRY * o.step, MAX_CARRY * o.step);
    glideTo(pos + (reduced() ? 0 : carry), pos, v);
  }
  el.addEventListener('pointerup', release); el.addEventListener('pointercancel', release);

  // Keyboard: ±1 tick, PageUp/PageDown ±10, Home/End. A key press moves to the next tick, never a fraction.
  el.addEventListener('keydown', e => {
    const unit = o.step, big = o.majorEvery * unit, fromTick = Math.round(value / unit);
    let target;
    if (e.key === 'Home') target = o.min; else if (e.key === 'End') target = o.max;
    else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') target = value % unit ? Math.ceil(value / unit) * unit : (fromTick + 1) * unit;
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') target = value % unit ? Math.floor(value / unit) * unit : (fromTick - 1) * unit;
    else if (e.key === 'PageUp') target = value + big; else if (e.key === 'PageDown') target = value - big;
    else return;
    e.preventDefault(); glide = null;
    // A key step slides briefly to the next tick; a long jump (Home, End, PageUp) lands at once.
    glideTo(clamp(target, o.min, o.max), pos, 0, Math.abs(target - value) > big ? 1 : 70);
  });

  const observer = new ResizeObserver(size); observer.observe(el);
  if (document.fonts) document.fonts.ready.then(() => { dirty = true; request(); });
  aria(); size();

  return {
    set(v) {
      if (!Number.isFinite(v)) return;
      v = clamp(v, o.min, o.max);
      if ((drag || glide) && v === value) return;   // the page echoing our own value back
      glide = null; drag = null; el.classList.remove('is-dragging');
      pos = value = v; aria(); dirty = true; request();
    },
    setRange(min, max) {
      if (min === o.min && max === o.max) return;
      o.min = min; o.max = Math.max(min, max); pos = clamp(pos, o.min, o.max); value = clamp(value, o.min, o.max); aria(); dirty = true; request();
    },
    setLabel(text) { el.setAttribute('aria-label', text); },
    get value() { return value; },
    destroy() { destroyed = true; cancelAnimationFrame(raf); observer.disconnect(); el.replaceChildren(); el.classList.remove('ruler', 'is-dragging'); },
  };
}
