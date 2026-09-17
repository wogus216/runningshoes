(() => {
  const hero = document.querySelector('.hero');
  const stage = document.querySelector('.photo-stage');
  const canvas = document.querySelector('#erase');
  const oldImage = document.querySelector('.past-fallback');
  const currentImage = document.querySelector('.present');
  const oldLabel = document.querySelector('.year-past');
  const nowLabel = document.querySelector('.year-now');
  const cue = document.querySelector('.scroll-cue');
  const switchButton = document.querySelector('.still-switch');
  const preference = matchMedia('(prefers-reduced-motion: reduce)');
  const context = canvas.getContext('2d');
  const layer = document.createElement('canvas');
  const layerContext = layer.getContext('2d');
  const mask = document.createElement('canvas');
  mask.width = 180;
  mask.height = 250;
  const maskContext = mask.getContext('2d');
  let ready = false;
  let raf = 0;
  let target = 0;
  let progress = 0;
  let previousTime = 0;
  let needsPaint = true;
  let field;
  let maskPixels;
  const clamp = (value) => Math.max(0, Math.min(1, value));
  const smooth = (value) => { const x = clamp(value); return x * x * (3 - 2 * x); };

  // A deterministic sequence of broad, overlapping hand passes. The mask has
  // spatially varying arrival times, so reverse scrolling restores every mark.
  function createField() {
    const w = mask.width, h = mask.height;
    const values = new Float32Array(w * h).fill(1.02);
    const grain = new Float32Array(w * h);
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        grain[y * w + x] = Math.sin(x * .67 + y * .43) * .0027
          + Math.sin(x * .18 - y * .31) * .0032
          + Math.sin(x * .054 + y * .061) * .006;
      }
    }
    for (let row = 0; row < 9; row++) {
      for (let step = 0; step <= 86; step++) {
        const t = step / 86;
        const sweep = row % 2 ? 1 - t : t;
        const cx = -.23 + 1.46 * sweep;
        const cy = -.035 + row * .135 + Math.sin(t * Math.PI * 1.35 + row * .7) * .025;
        const rx = .196 + .017 * Math.sin(t * Math.PI);
        const ry = .10 + .012 * Math.sin(t * 5 + row);
        const left = Math.max(0, Math.floor((cx - rx * 1.18) * w));
        const right = Math.min(w - 1, Math.ceil((cx + rx * 1.18) * w));
        const top = Math.max(0, Math.floor((cy - ry * 1.18) * h));
        const bottom = Math.min(h - 1, Math.ceil((cy + ry * 1.18) * h));
        const arrival = .035 + (row + t) / 9 * .84;
        for (let y = top; y <= bottom; y++) {
          const dy = (y / h - cy) / ry;
          for (let x = left; x <= right; x++) {
            const dx = (x / w - cx) / rx;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance > 1.18) continue;
            const index = y * w + x;
            values[index] = Math.min(values[index], arrival + distance * .067 + grain[index]);
          }
        }
      }
    }
    return values;
  }

  function drawArchive(ctx, image, width, height) {
    // Exclude the white print border; leave the archival source untouched.
    // Bounds are measured against the supplied 540 × 670 image.
    const sourceX = image.naturalWidth * 12 / 540;
    const sourceY = image.naturalHeight * 13 / 670;
    const sourceWidth = image.naturalWidth * 516 / 540;
    const sourceHeight = image.naturalHeight * 644 / 670;
    const scale = Math.max(width / sourceWidth, height / sourceHeight);
    const drawWidth = sourceWidth * scale;
    const drawHeight = sourceHeight * scale;
    ctx.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight,
      (width - drawWidth) * .5, (height - drawHeight) * .5, drawWidth, drawHeight);
  }

  function paint(value) {
    if (!ready) return;
    const pixels = maskPixels.data;
    for (let i = 0; i < field.length; i++) {
      const opacity = value <= 0 ? 1 : value >= 1 ? 0 : 1 - smooth((value - field[i]) / .065);
      pixels[i * 4 + 3] = Math.round(opacity * 255);
    }
    maskContext.putImageData(maskPixels, 0, 0);
    context.globalCompositeOperation = 'source-over';
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(layer, 0, 0);
    context.globalCompositeOperation = 'destination-in';
    context.drawImage(mask, 0, 0, canvas.width, canvas.height);
    context.globalCompositeOperation = 'source-over';
    oldLabel.style.opacity = String(1 - smooth((value - .18) / .50));
    nowLabel.style.opacity = String(smooth((value - .65) / .28));
    cue.style.opacity = String(1 - smooth(value / .18));
  }

  function animate(time) {
    raf = 0;
    if (document.hidden || preference.matches || !ready) return;
    const dt = previousTime ? Math.min(48, time - previousTime) : 16;
    previousTime = time;
    progress += (target - progress) * (1 - Math.exp(-dt / 65));
    if (Math.abs(target - progress) < .0005) progress = target;
    if (needsPaint || progress !== target) paint(progress);
    else paint(target);
    needsPaint = false;
    if (progress !== target) raf = requestAnimationFrame(animate);
  }

  function updateTarget() {
    if (!ready || preference.matches) return;
    const rect = hero.getBoundingClientRect();
    const travel = hero.offsetHeight - document.querySelector('.hero-stage').offsetHeight;
    const sectionProgress = clamp(-rect.top / Math.max(1, travel));
    target = clamp((sectionProgress - .08) / .76);
    if (!raf && (needsPaint || Math.abs(target - progress) > .0001)) raf = requestAnimationFrame(animate);
  }

  function resize() {
    if (!ready || preference.matches) return;
    const bounds = stage.getBoundingClientRect();
    const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
    canvas.width = layer.width = Math.round(bounds.width * ratio);
    canvas.height = layer.height = Math.round(bounds.height * ratio);
    drawArchive(layerContext, oldImage, layer.width, layer.height);
    needsPaint = true;
    updateTarget();
  }

  function applyPreference() {
    if (raf) cancelAnimationFrame(raf);
    raf = 0;
    previousTime = 0;
    const still = preference.matches || !ready;
    document.body.classList.toggle('reduced', still);
    document.body.classList.toggle('motion-ready', !still);
    switchButton.hidden = !still;
    if (still) {
      oldLabel.style.opacity = '';
      nowLabel.style.opacity = '';
    } else {
      document.body.classList.remove('show-current');
      switchButton.textContent = '현재 사진 보기';
      resize();
    }
  }
  switchButton.addEventListener('click', () => {
    const showing = document.body.classList.toggle('show-current');
    switchButton.textContent = showing ? '과거 사진 보기' : '현재 사진 보기';
  });
  const imageReady = image => image.complete
    ? (image.naturalWidth ? Promise.resolve() : Promise.reject(new Error('image unavailable')))
    : new Promise((resolve, reject) => { image.addEventListener('load', resolve, {once:true}); image.addEventListener('error', reject, {once:true}); });
  Promise.all([imageReady(oldImage), imageReady(currentImage)]).then(() => {
    if (!context || !layerContext || !maskContext) { applyPreference(); return; }
    field = createField();
    maskPixels = maskContext.createImageData(mask.width, mask.height);
    ready = true;
    applyPreference();
  }).catch(() => { applyPreference(); });
  window.addEventListener('scroll', updateTarget, {passive:true});
  window.addEventListener('resize', resize, {passive:true});
  preference.addEventListener('change', applyPreference);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { if (raf) cancelAnimationFrame(raf); raf = 0; }
    else { previousTime = 0; needsPaint = true; updateTarget(); }
  });
})();
