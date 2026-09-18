(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const postcard = document.querySelector('.postcard');
  const steps = postcard ? Array.from(postcard.querySelectorAll('.postcard-actions li')) : [];
  const floorPhotos = Array.from(document.querySelectorAll('.floor-photo'));
  const course = document.querySelector('.plates-course');
  const active = new Set();
  const clamp = n => Math.max(0, Math.min(1, n));
  let frame = 0;
  function render() {
    frame = 0;
    if (reduced.matches || document.hidden) return;
    const height = window.innerHeight;
    floorPhotos.forEach(photo => {
      if (!active.has(photo)) return;
      const entry = clamp((height * .95 - photo.getBoundingClientRect().top) / (height * .5));
      photo.style.setProperty('--floor-entry', String(entry));
    });
    if (postcard && active.has(postcard)) {
      const rect = postcard.getBoundingClientRect();
      const progress = clamp((height * .9 - rect.top) / Math.min(rect.height, height * .85));
      steps.forEach((step, i) => step.style.setProperty('--step-reveal', String(clamp(progress * 3 - i))));
    }
    if (course && active.has(course)) {
      const rect = course.getBoundingClientRect();
      course.style.setProperty('--course', String(clamp((height * .6 - rect.top) / rect.height)));
    }
  }
  function schedule() {
    if (!frame && !reduced.matches && active.size && !document.hidden) frame = requestAnimationFrame(render);
  }
  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => entry.isIntersecting ? active.add(entry.target) : active.delete(entry.target));
    schedule();
  }, {rootMargin:'15% 0px'});
  [postcard, course, ...floorPhotos].filter(Boolean).forEach(element => observer.observe(element));
  window.addEventListener('scroll', schedule, {passive:true});
  window.addEventListener('resize', schedule, {passive:true});
  document.addEventListener('visibilitychange', schedule);
  reduced.addEventListener('change', () => {
    if (reduced.matches) {
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
      steps.forEach(step => step.style.removeProperty('--step-reveal'));
      floorPhotos.forEach(photo => photo.style.removeProperty('--floor-entry'));
      if (course) course.style.removeProperty('--course');
    } else schedule();
  });
})();
