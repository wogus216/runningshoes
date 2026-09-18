(() => {
  const sequence = document.querySelector('.archive-sequence');
  if (!sequence) return;
  const sticky = sequence.querySelector('.archive-sticky');
  const pictures = Array.from(sequence.querySelectorAll('.archive-picture'));
  const dates = Array.from(sequence.querySelectorAll('.archive-date'));
  const links = Array.from(sequence.querySelectorAll('[data-year]'));
  const line = sequence.querySelector('.archive-line i');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const tallEnough = matchMedia('(min-height: 620px)');
  const clamp = (n, lo = 0, hi = 1) => Math.max(lo, Math.min(hi, n));
  const ease = n => { const t = clamp(n); return t * t * (3 - 2 * t); };
  // Give the facade-color change more scroll distance; these are pacing stops, not years.
  const stops = [0, .18, .36, .70, 1];
  let enhanced = false;
  let near = true;
  let frame = 0;
  let selected = -1;

  function render() {
    frame = 0;
    if (!enhanced || !near || document.hidden) return;
    const range = Math.max(1, sequence.offsetHeight - sticky.offsetHeight);
    const scrollProgress = clamp(-sequence.getBoundingClientRect().top / range);
    const progress = clamp((scrollProgress - .055) / .89);
    let index = 0;
    while (index < pictures.length - 1 && progress >= stops[index + 1]) index++;
    const fraction = index === pictures.length - 1 ? 0 : (progress - stops[index]) / (stops[index + 1] - stops[index]);
    // Read the photograph first; then pass it as the next record approaches.
    const transition = index === pictures.length - 1 ? 0 : ease((fraction - .32) / .64);
    pictures.forEach((picture, i) => {
      let x = 32, y = 4, scale = .65, opacity = 0;
      if (i === index) {
        x = -60 * transition;
        y = -2 * transition;
        scale = 1 + .06 * transition;
        opacity = 1 - ease((transition - .18) / .60);
      } else if (i === index + 1) {
        x = 32 * (1 - transition);
        y = 4 * (1 - transition);
        scale = .65 + .35 * transition;
        opacity = .26 + .74 * ease(transition / .75);
      } else if (i === index + 2) {
        opacity = .26 * ease((transition - .65) / .35);
      }
      picture.style.transform = `translate3d(${x}%,${y}%,0) scale(${scale})`;
      picture.style.opacity = String(opacity);
      picture.style.zIndex = String(pictures.length - i);
      const dateOpacity = i === index ? 1 - ease((transition - .30) / .20) : i === index + 1 ? ease((transition - .58) / .22) : 0;
      dates[i].style.opacity = String(dateOpacity);
      dates[i].style.transform = `translate3d(0,${i === index ? -8 * transition : 8 * (1 - transition)}px,0)`;
    });
    line.style.transform = `scaleX(${progress})`;
    const active = Math.min(pictures.length - 1, index + (transition >= .62 ? 1 : 0));
    if (active !== selected) {
      selected = active;
      links.forEach((link, i) => {
        if (i === active) link.setAttribute('aria-current', 'true');
        else link.removeAttribute('aria-current');
        pictures[i].setAttribute('aria-hidden', String(i !== active));
      });
    }
  }

  function schedule() {
    if (!frame && enhanced && near && !document.hidden) frame = requestAnimationFrame(render);
  }
  function setMode() {
    enhanced = !reduced.matches && tallEnough.matches;
    sequence.classList.toggle('archive-ready', enhanced);
    selected = -1;
    if (enhanced) {
      near = true;
      schedule();
    } else {
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
      pictures.forEach(picture => { picture.style.removeProperty('transform'); picture.style.removeProperty('opacity'); picture.style.removeProperty('z-index'); picture.removeAttribute('aria-hidden'); });
      dates.forEach(date => { date.style.removeProperty('opacity'); date.style.removeProperty('transform'); });
      links.forEach(link => link.removeAttribute('aria-current'));
      line.style.transform = 'scaleX(0)';
    }
  }
  links.forEach((link, index) => link.addEventListener('click', event => {
    if (!enhanced) return;
    event.preventDefault();
    const top = sequence.getBoundingClientRect().top + window.scrollY;
    const range = Math.max(1, sequence.offsetHeight - sticky.offsetHeight);
    const fraction = .055 + stops[index] * .89;
    window.scrollTo({top: top + range * fraction + 1, behavior:'smooth'});
  }));
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      near = entries[0].isIntersecting;
      if (near) schedule();
    }, {rootMargin:'80% 0px'});
    observer.observe(sequence);
  }
  window.addEventListener('scroll', schedule, {passive:true});
  window.addEventListener('resize', schedule, {passive:true});
  reduced.addEventListener('change', setMode);
  tallEnough.addEventListener('change', setMode);
  document.addEventListener('visibilitychange', schedule);
  setMode();
})();
