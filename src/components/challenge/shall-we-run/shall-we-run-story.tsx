'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { paintStory, STORY_DURATION, STORY_SCENES } from './story-timeline';
import styles from './story.module.css';
import { MARATHONS } from './marathons';

declare global {
  interface Window {
    /** Installed only with ?capture=1, for the local video renderer. */
    setShallWeRunTime?: (seconds: number) => void;
  }
}

function RundayMark() {
  return <a className={styles.rundayMark} href="https://link.runday.co.kr/app" target="_blank" rel="noopener noreferrer">
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src="/images/challenge/shall-we-run/runday-app-icon.jpg" width="44" height="44" alt="" />
    <span><strong>런데이 × 쉘위런</strong><small>시네마런 챌린지</small></span>
  </a>;
}

export function ShallWeRunStory() {
  const rootRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const [badgeFailed, setBadgeFailed] = useState(false);

  useEffect(() => {
    const root = rootRef.current;
    const rail = railRef.current;
    if (!root || !rail) return;
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const capture = new URLSearchParams(window.location.search).get('capture') === '1';
    let disposed = false;
    let generation = 0;
    let cleanup: (() => void) | undefined;
    const previousOverflow = document.body.style.overflowX;
    // body overflow:hidden would become the sticky stage's scrolling ancestor.
    document.body.style.overflowX = 'clip';
    const start = async () => {
      const currentGeneration = ++generation;
      cleanup?.();
      cleanup = undefined;
      root.removeAttribute('data-enhanced');
      root.removeAttribute('data-capture');
      root.removeAttribute('data-paper');
      root.removeAttribute('style');
      root.querySelectorAll<HTMLElement>('[data-scene]').forEach(el => {
        el.removeAttribute('style'); el.removeAttribute('aria-hidden'); el.removeAttribute('inert');
      });
      if (capture) {
        root.dataset.enhanced = 'true'; root.dataset.capture = 'true';
        window.setShallWeRunTime = t => paintStory(root, t);
        paintStory(root, 0);
        cleanup = () => { delete window.setShallWeRunTime; };
        return;
      }
      if (media.matches) return;
      try {
        const [{ gsap }, { ScrollTrigger }] = await Promise.all([import('gsap'), import('gsap/ScrollTrigger')]);
        if (disposed || media.matches || currentGeneration !== generation) return;
        gsap.registerPlugin(ScrollTrigger);
        root.dataset.enhanced = 'true';
        const trigger = ScrollTrigger.create({
          trigger: rail, start: 'top top', end: 'bottom bottom',
          onUpdate: self => paintStory(root, self.progress * STORY_DURATION),
          onRefresh: self => paintStory(root, self.progress * STORY_DURATION),
        });
        paintStory(root, trigger.progress * STORY_DURATION);
        const onNav = (event: MouseEvent) => {
          if (!(event.target instanceof Element)) return;
          const link = event.target.closest<HTMLElement>('[data-nav-scene], [data-marathon-link]');
          if (!link) return;
          event.preventDefault();
          const time = link.dataset.marathonLink !== undefined
            ? 3.15 + Number(link.dataset.marathonLink)
            : STORY_SCENES[Number(link.dataset.navScene)].start + 0.6;
          window.scrollTo({ top: trigger.start + (time / STORY_DURATION) * (trigger.end - trigger.start), behavior: 'smooth' });
        };
        root.addEventListener('click', onNav);
        cleanup = () => { trigger.kill(); root.removeEventListener('click', onNav); };
      } catch {
        // A failed optional motion chunk leaves the server-rendered story readable.
        if (!disposed && currentGeneration === generation) root.removeAttribute('data-enhanced');
      }
    };
    void start();
    media.addEventListener('change', start);
    return () => {
      disposed = true; generation++; cleanup?.(); media.removeEventListener('change', start);
      document.body.style.overflowX = previousOverflow;
    };
  }, []);

  return (
    <div ref={rootRef} className={styles.story}>
      <div ref={railRef} className={styles.rail}>
        <div className={styles.stage}>
          <div className={styles.backdrop} aria-hidden="true">
            {MARATHONS.map(race => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={race.id} data-race-photo src={race.src} alt="" fetchPriority={race.id === 'new-york' ? 'high' : 'low'} decoding="async" style={{ objectPosition: race.position }} />
            ))}
          </div>
          <div className={styles.track} aria-hidden="true"><i /><i /><i /><i /></div>
          <header className={styles.header}>
            <Link href="/">allrunabout<span> / 개인 러닝 기록</span></Link>
            <span>2026.10.11</span>
          </header>
          <section id="start" data-scene className={`${styles.scene} ${styles.start}`}>
            <div className={styles.staticHero} aria-hidden="true">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={MARATHONS[6].src} alt="" fetchPriority="high" decoding="async" />
            </div>
            <p className={styles.context}>런데이 × 쉘위런 시네마런 챌린지</p>
            <h1><span>영화가</span><span>시작되기 전에,</span><em>나는 달렸다.</em></h1>
            <div className={styles.run} aria-hidden="true">RUN.</div>
            <p className={styles.signature}>한 편의 영화를 기다리는 나의 출발.<span>뉴욕 마라톤 대회 자료사진</span></p>
          </section>
          <section id="film" data-scene className={`${styles.scene} ${styles.film}`}>
            <div className={styles.seven} aria-hidden="true">7</div>
            <div className={styles.filmCopy}>
              <p className={styles.filmTitle}>쉘위런 <span>SHALL WE RUN</span></p>
              <h2>우리는 왜<br /><em>달리는가?</em></h2>
              <p>션의 세계 7대 마라톤 도전을 따라가는<br />러닝 다큐멘터리.</p>
              <div className={styles.marks} aria-label="세계 7개 대회의 자료사진">
                {MARATHONS.map((race, i) => <button key={race.id} type="button" data-marathon-link={i} aria-label={`${race.city} 마라톤 사진으로 이동`} aria-pressed="false"><span>{i + 1}</span></button>)}
              </div>
              <div className={styles.raceLabels}>
                {MARATHONS.map((race, i) => <p key={race.id} data-race-label hidden={i !== 0}><strong>{race.name}</strong><span>{race.city} 마라톤 · 대회 자료사진</span></p>)}
              </div>
            </div>
            <div className={styles.staticGallery}>
              {MARATHONS.map(race => <figure key={race.id}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={race.src} alt={`${race.city} 마라톤 자료사진`} width="720" height="480" style={{ objectPosition: race.position }} />
                <figcaption>{race.city} 마라톤</figcaption>
              </figure>)}
            </div>
          </section>
          <section id="weekend" data-scene className={`${styles.scene} ${styles.weekend}`}>
            <p className={styles.personal}>나는 왜 달렸을까.</p>
            <h2>주말엔,<br />나가기가<br /><em>쉽지 않았다.</em></h2>
            <p>평소에도 달렸지만,<br />주말의 출발은 쉽지 않았다.</p>
            <div className={styles.startingLine} aria-hidden="true" />
          </section>
          <section id="reason" data-scene className={`${styles.scene} ${styles.reason}`}>
            <div className={styles.reasonFirst}><RundayMark /><h2>이번엔,<br /><em>나갈 이유가</em><br />있었다.</h2><p>런데이 앱에서 신청한 챌린지가<br />주말에 나갈 이유가 됐다.</p></div>
            <div className={styles.reasonLast}><RundayMark /><h2>그래서,<br />조금 더<br /><em>달렸다.</em></h2><p>영화를 기다리는 마음이<br />나를 한 번 더 밖으로 데려갔다.</p></div>
          </section>
          <section id="finish" data-scene className={`${styles.scene} ${styles.finish}`}>
            <h2>결국, <em>달렸다.</em></h2>
            <p className={styles.finishTitle}>런데이 × 쉘위런 시네마런 챌린지 완주</p>
            {/* The complete original badge, including mission text and date. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/challenge/shall-we-run/badge-original.jpg" width="1080" height="1317" alt="런데이 쉘위런 시네마런 챌린지 누적 11.2km 미션 달성 완주 배지, 2026년 10월 11일" className={styles.badge} hidden={badgeFailed} onError={() => setBadgeFailed(true)} />
            {badgeFailed && <p className={styles.badgeNotice}>배지 이미지를 불러오지 못했습니다.<br />완주 배지 획득 · 2026.10.11</p>}
            <p className={styles.achievement}>누적 <strong>11.2km</strong> 미션 달성</p>
            <a className={styles.original} href="/images/challenge/shall-we-run/badge-original.jpg" target="_blank" rel="noopener noreferrer">완주 배지 원본 보기 ↗</a>
          </section>
          <section id="next" data-scene className={`${styles.scene} ${styles.next}`}>
            <div className={styles.waiting}><h2>영화를<br />기다리며,<br /><em>한 번 더 달렸다.</em></h2></div>
            <div className={styles.invite}><h2>다음 한 걸음,<br /><em>같이 달릴까요?</em></h2><p>당신의 다음 출발을 응원합니다.</p></div>
            <div className={styles.endCredits}><p>쉘위런 · 2026.10.16 메가박스 단독 개봉</p><a href="https://www.instagram.com/sancho216_doit/" target="_blank" rel="noopener noreferrer">@sancho216_doit ↗</a><span>allrunabout.com</span></div>
          </section>
          <nav className={styles.navigation} aria-label="러닝 이야기 장면">
            {STORY_SCENES.map((scene, i) => <a key={scene.id} href={`#${scene.id}`} data-nav-scene={i}>{scene.label}</a>)}
          </nav>
        </div>
      </div>
      <footer className={styles.footer}>
        <div>
          <h2>내가 기다리는 영화, 쉘위런.</h2>
          <p>션의 세계 7대 마라톤 도전을 통해 “우리는 왜 달리는가?”를 묻는 다큐멘터리. 달리기와 나눔, 함께하는 사람들의 이야기를 담고, 박보검이 내레이션으로 참여합니다.</p>
          <p>평소에도 달리긴 하는데, 주말엔 밖에 나가는 게 쉽지 않더라고요. 〈쉘위런〉 개봉을 기다리다가 런데이 시네마런 챌린지에 참여했어요. 덕분에 주말에도 한 번 더 나가서 달렸고, 누적 11.2km 미션을 마쳤어요. 배지를 받고 나니까 이번 러닝을 기념으로 남기고 싶어서 이 페이지를 만들었어요.</p>
          <p className={styles.sources}>
            <a href="https://sbsstar.net/article/N1008763307/seans-world-marathon-journey-to-be-released-in-documentary-film-narrated-by-park-bogum" target="_blank" rel="noopener noreferrer">영화 소개 출처 ↗</a>
            <a href="https://www.instagram.com/p/Dd7knECEras/" target="_blank" rel="noopener noreferrer">런데이 챌린지 안내 ↗</a>
          </p>
          <section className={styles.rundayInfo} aria-labelledby="runday-heading">
            <RundayMark />
            <h2 id="runday-heading">내 출발을 만든 앱, 런데이.</h2>
            <p>챌린지 신청부터 완주 배지를 받기까지, 런데이 앱으로 참여했어요. 달릴 목표가 생기니까 주말에도 한 번 더 나가게 되더라고요.</p>
            <div className={styles.appLinks}>
              <a href="https://link.runday.co.kr/app" target="_blank" rel="noopener noreferrer">런데이 앱 열기 ↗</a>
              <a href="https://apps.apple.com/kr/app/runday/id1042937618" target="_blank" rel="noopener noreferrer">App Store ↗</a>
              <a href="https://play.google.com/store/apps/details?id=com.hanbit.rundayfree&hl=ko" target="_blank" rel="noopener noreferrer">Google Play ↗</a>
            </div>
            <p className={styles.appSource}><a href="https://www.runday.co.kr/" target="_blank" rel="noopener noreferrer">런데이 공식 사이트 ↗</a> · 앱 아이콘: 런데이 App Store 제공 이미지</p>
          </section>
          <Link className={styles.back} href="/">allrunabout으로 돌아가기 ↗</Link>
          <details id="photo-credits" className={styles.photoCredits}>
            <summary>세계 7개 대회 사진 출처</summary>
            <p>개최연도가 다른 대회 자료사진입니다. 사진은 크기·표시 영역·색조를 조정해 사용했으며, 각 사진의 이용 조건을 따릅니다.</p>
            <ul>{MARATHONS.map(race => <li key={race.id}><strong>{race.city}</strong> — {race.author} · <a href={race.source} target="_blank" rel="noopener noreferrer">사진 원본</a> · <a href={race.licenseUrl} target="_blank" rel="noopener noreferrer">{race.license}</a></li>)}</ul>
            <p>가공된 사진 파일은 해당 원본과 동일한 라이선스로 제공합니다.</p>
          </details>
        </div>
        <p className={styles.colophon}>2026.10.11의 기록 · sancho216_doit</p>
      </footer>
    </div>
  );
}
