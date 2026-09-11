'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import styles from './first-thirty.module.css';
import { chapterStops } from './story-timeline';
import { TicketMaker } from './ticket-maker';

const Stage = dynamic(() => import('./thirty-stage'), { ssr: false });
const root = '/images/challenge/saturday/first30';
const photos = [
  { file: 'station', alt: '러닝을 시작한 신대방역 주변', caption: '여기서 출발.' },
  { file: 'riverside', alt: '햇빛이 쏟아지는 한강변과 자전거들', caption: '한강은 이런 얼굴이었다.' },
  { file: 'running-front', alt: '한강 산책로에서 카메라를 향해 달리는 러너', caption: '달리는 중.' },
  { file: 'running-back', alt: '햇빛 아래 한강변을 달리는 러너의 뒷모습', caption: '조금 더, 앞으로.' },
  { file: 'gel-break', alt: '한강에서 에너지젤을 먹는 러너', caption: '잠깐의 보급.' },
  { file: 'sunlight', alt: '강한 햇빛 아래 한강변에 선 러너', caption: '이날의 햇빛.' },
  { file: 'pause', alt: '한강변에서 잠시 쉬는 러너', caption: '숨 한번 고르고.' },
  { file: 'river-walk', alt: '한강 옆을 걷는 러너', caption: '강 옆에서.' },
  { file: 'riverside-runner', alt: '한강과 나무 앞에 선 러너', caption: '기억해둘 풍경.' },
  { file: 'portrait', alt: '검은 러닝복과 모자를 쓴 러너', caption: '러닝의 한 장면.' },
  { file: 'pointing', alt: '강변에서 손을 뻗어 가리키는 러너', caption: '러닝 내내 즐거웠다.' },
  { file: 'running-front-two', alt: '한강 옆 붉은 길을 따라 달리는 러너', caption: '한 발씩.' },
  { file: 'running-back-two', alt: '다리 쪽으로 달리는 러너의 뒷모습', caption: '돌아가는 길 위에서.' },
];

export function FirstThirtyStory() {
  // Static story is the initial render and remains available without JS or WebGL.
  const [motion, setMotion] = useState(false);
  const [webglFailed, setWebglFailed] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const [saving, setSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');
  const photoOpen = selected !== null;
  const story = useRef<HTMLDivElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const routeVideo = useRef<HTMLVideoElement>(null);
  const handleWebglFailure = useCallback(() => setWebglFailed(true), []);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setMotion(!preference.matches);
    update();
    preference.addEventListener('change', update);
    return () => preference.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (!photoOpen) return;
    const el = dialog.current;
    if (!el) return;
    if (el.open) return;
    const opener = document.activeElement as HTMLElement | null;
    el.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { el.close(); document.body.style.overflow = previous; opener?.focus({ preventScroll: true }); };
  }, [photoOpen]);

  useEffect(() => {
    const video = routeVideo.current;
    if (!video || !motion) { video?.pause(); return; }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) void video.play().catch(() => undefined);
      else video.pause();
    }, { threshold: .45 });
    observer.observe(video);
    return () => { observer.disconnect(); video.pause(); };
  }, [motion]);

  const saveTicket = async () => {
    setSaving(true); setSaveMessage('');
    try {
      const { downloadTicket } = await import('./ticket-download');
      await downloadTicket();
      setSaveMessage('기념 티켓을 저장했어요.');
    } catch { setSaveMessage('저장하지 못했어요. 다시 시도해주세요.'); }
    finally { setSaving(false); }
  };

  const animated = motion && !webglFailed;
  return (
    <div className={styles.story} data-first30-root>
      <a className={styles.skip} href="#first30-record">기록과 사진으로 건너뛰기</a>
      <header className={styles.header}>
        <Link href="/saturday" className={styles.wordmark}>SATURDAY<span>RUNNING CLUB</span></Link>
        <div className={styles.headerRight}>
          <span className={styles.edition}>A RUN TO REMEMBER / 001</span>
          <button type="button" onClick={() => setMotion(!motion)} disabled={webglFailed} aria-pressed={animated}>
            <i aria-hidden="true" data-on={animated} />{webglFailed ? '사진으로 감상' : animated ? '모션 끄기' : '모션 켜기'}
          </button>
        </div>
      </header>

      <main>
        <div ref={story} className={`${styles.journey} ${animated ? styles.animated : styles.static}`} id="first30-start">
          <div className={styles.stage}>
            {animated ? <Stage hostRef={story} onFailure={handleWebglFailure} /> : null}
            <div className={styles.filmEdge} aria-hidden="true"><span>05 SEP 2026</span><span>SHINDAEBANG ↔ MAGONGNARU</span></div>
            <section className={`${styles.scene} ${styles.opening}`} data-scene="0">
              <div className={styles.heroTop}><span>원래 목표 / THE PLAN</span><span>25 KM</span></div>
              <div className={styles.fallbackNumber} aria-hidden="true">25</div>
              <div className={styles.heroCopy}>
                <p className={styles.eyebrow}>MY FIRST 30K</p>
                <h1>계획에 없던 <em>5km.</em></h1>
                <p>원래는 25km만 뛸 생각이었다.</p>
              </div>
              <div className={styles.heroBottom}><span>2026.09.05 <i /> 07:29 START</span><a href="#first30-river" onClick={(event) => {
                if (!animated || !story.current) return;
                event.preventDefault();
                const stageHeight = story.current.firstElementChild?.clientHeight ?? window.innerHeight;
                window.scrollTo({ top: story.current.offsetTop + (story.current.offsetHeight - stageHeight) * chapterStops[1], behavior: 'smooth' });
              }}>그날 속으로 <span aria-hidden="true">↓</span></a></div>
            </section>

            <section className={`${styles.scene} ${styles.river}`} data-scene="1" id="first30-river">
              <div className={styles.sceneCopy}><p className={styles.eyebrow}>01 / 한강으로</p><h2>별생각 없이.<br />기분은 좋게.</h2><p>신대방역에서 마곡나루를 찍고 돌아오기.<br />마라톤을 준비하는 어느 토요일.</p></div>
              <div className={styles.riverImage}><Image src={`${root}/riverside.webp`} alt="햇빛이 비치는 한강변" fill sizes="(max-width: 700px) 85vw, 42vw" /></div>
              <span className={styles.sideNote}>햇빛. 한강. 그리고 러닝.</span>
            </section>

            <section className={`${styles.scene} ${styles.wall}`} data-scene="2">
              <span className={styles.giantDistance} aria-hidden="true">23<span>KM</span></span>
              <div className={styles.sceneCopy}><p className={styles.eyebrow}>02 / 슬슬, 쉽지 않다</p><h2><span>“이 정도 고통</span><span>아무것도 아니다.</span><em>즐거운 거다.”</em></h2><p>23km쯤부터 힘들어졌다.<br />나는 계속 이렇게 말했다.</p></div>
            </section>

            <section className={`${styles.scene} ${styles.together}`} data-scene="3">
              <div className={styles.togetherPhoto}><Image src={`${root}/pause.webp`} alt="한강변에서 잠시 쉬는 러너와 그날의 풍경" fill sizes="(max-width: 700px) 90vw, 48vw" /><span className={styles.photoAnnotation}>그날의 한 장면 / 05 SEP</span></div>
              <div className={styles.sceneCopy}><p className={styles.eyebrow}>03 / 28 KM</p><h2>덕분에,<br />계속 갔다.</h2><p>28km. 형묵이 덕분에<br />포기하지 않았다.</p><span className={styles.thanks}>PACE MAKER <b>형묵</b></span></div>
            </section>

            <section className={`${styles.scene} ${styles.finish}`} data-scene="4">
              <p className={styles.eyebrow}>04 / 생각보다 조금 더 멀리</p>
              <div className={styles.fallbackNumber} aria-hidden="true">30</div>
              <div className={styles.finishCopy}><h2>내 인생,<br />첫 30km.</h2><p>이걸 해냈다는 게 신기했다.</p><span>ACTUAL DISTANCE <b>30.02 KM</b></span></div>
            </section>

            <div className={styles.meter} aria-hidden="true"><p data-chapter-label>00 / THE PLAN</p><span data-distance>00.00</span><small>/ 30.02 KM</small><div><i data-progress /></div></div>
          </div>
        </div>

        <section className={styles.record} id="first30-record" tabIndex={-1}>
          <div className={styles.recordCopy}><p className={styles.eyebrow}>THE RECEIPT / 남겨둔 기록</p><h2>30<span>.02</span><small>KM</small></h2><p>목표보다 5.02km 더.<br />내가 달려본 가장 긴 거리.</p><dl><div><dt>날짜</dt><dd>2026.09.05</dd></div><div><dt>출발</dt><dd>07:29 · 신대방역</dd></div><div><dt>코스</dt><dd>마곡나루 찍고 돌아오기</dd></div><div><dt>함께</dt><dd>형묵</dd></div></dl></div>
          <figure className={styles.routeVideo}><video ref={routeVideo} controls loop playsInline muted preload="metadata" poster={`${root}/route-poster.webp`} aria-label="2026년 9월 5일 러닝 경로 영상, 최종 거리 30.02km"><source src={`${root}/route.mp4`} type="video/mp4" /><a href={`${root}/route.mp4`}>러닝 경로 영상 보기</a></video><figcaption><span aria-hidden="true">●</span> 30KM REPLAY · 그날 달린 길 / GARMIN 기록</figcaption></figure>
        </section>

        <section className={styles.memories} aria-labelledby="memory-title">
          <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>CONTACT SHEET / 그날의 조각들</p><h2 id="memory-title">러닝 내내 즐거웠다.</h2></div><span>옆으로 넘겨보기 ↔</span></div>
          <div className={styles.photoRail}>
            {photos.map((photo, i) => <button type="button" className={styles.photoCard} key={photo.file} onClick={() => setSelected(i)} aria-label={`${photo.alt}, 크게 보기`}><div><Image src={`${root}/${photo.file}.webp`} alt={photo.alt} fill sizes="(max-width: 700px) 72vw, 340px" /></div><span><b>{String(i + 1).padStart(2, '0')}</b>{photo.caption}<i aria-hidden="true">↗</i></span></button>)}
          </div>
        </section>

        <Credits motion={animated} />
        <section className={styles.ending} id="first30-ending" tabIndex={-1}>
          <p className={styles.eyebrow}>TO BE CONTINUED</p><h2>이제 러닝의<br /><em>계절이 왔다.</em></h2><p>준비는 계속된다.</p>
          <article className={styles.finishTicket} aria-label="첫 30킬로미터 완주 기념 카드">
            <header className={styles.ticketHeader}><span>SATURDAY RUNNING CLUB</span><span>NO. 001</span></header>
            <figure className={styles.ticketPhoto}><Image src={`${root}/pointing.webp`} alt="한강 앞에서 팔을 뻗은 러너" fill sizes="(max-width: 700px) 90vw, 620px" /><figcaption>계획에 없던 5km.</figcaption></figure>
            <div className={styles.ticketDistance}><small>MY FIRST 30K / 2026.09.05</small><strong>30<span>.02</span></strong><b>KM</b></div>
            <dl><div><dt>RUNNER</dt><dd>권재현</dd></div><div><dt>DATE</dt><dd>05 SEP 2026</dd></div><div><dt>ROUTE</dt><dd>신대방 ↔ 마곡나루</dd></div></dl>
            <p><span>25 KM PLANNED → 30.02 KM DONE</span><span>함께 달린 형묵에게.</span></p>
          </article>
          <button className={styles.saveTicket} onClick={saveTicket} disabled={saving}>{saving ? '티켓 만드는 중…' : '기념 티켓 저장 ↓'}</button>
          <p className={styles.saveStatus} role="status">{saveMessage}</p>
          <a className={styles.makeOwnLink} href="#ticket-maker">내 기록으로 티켓 만들기 ↘</a>
          <div><a href="#first30-start">처음부터 다시 ↗</a><Link href="/saturday">쎄러데이로 ↗</Link></div><span className={styles.endDate}>첫 30km의 기억 · 2026.09.05</span>
        </section>
        <TicketMaker />
      </main>

      <dialog className={styles.lightbox} ref={dialog} onClose={() => setSelected(null)} onClick={(event) => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
        {selected !== null ? <><button type="button" autoFocus className={styles.close} onClick={() => dialog.current?.close()} aria-label="사진 닫기">닫기 ×</button><Image src={`${root}/${photos[selected].file}.webp`} alt={photos[selected].alt} width={1200} height={1600} sizes="90vw" /><p>{photos[selected].caption}</p><div className={styles.lightboxNav}><button type="button" onClick={() => setSelected((selected + photos.length - 1) % photos.length)} aria-label="이전 사진">←</button><span>{selected + 1} / {photos.length}</span><button type="button" onClick={() => setSelected((selected + 1) % photos.length)} aria-label="다음 사진">→</button></div></> : null}
      </dialog>
    </div>
  );
}

function Credits({ motion }: { motion: boolean }) {
  const section = useRef<HTMLElement>(null);
  const reel = useRef<HTMLDivElement>(null);
  const animation = useRef<Animation | null>(null);
  const inView = useRef(false);
  const manualPause = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [finished, setFinished] = useState(false);
  const reduced = !motion;

  useEffect(() => {
    if (reduced || !section.current || !reel.current) return;
    const node = reel.current;
    const windowHeight = node.parentElement?.clientHeight ?? 470;
    const player = node.animate([{ transform: `translateY(${windowHeight * .65}px)` }, { transform: 'translateY(-100%)' }], { duration: 32000, fill: 'both', easing: 'linear' });
    player.pause(); animation.current = player; manualPause.current = false; setFinished(false);
    player.onfinish = () => { setPlaying(false); setFinished(true); };
    const sync = () => {
      if (player.playState === 'finished') return;
      if (inView.current && !document.hidden && !manualPause.current) { player.play(); setPlaying(true); }
      else { player.pause(); setPlaying(false); }
    };
    const observer = new IntersectionObserver(([entry]) => { inView.current = entry.isIntersecting; sync(); }, { threshold: .15 });
    observer.observe(section.current); document.addEventListener('visibilitychange', sync);
    return () => { observer.disconnect(); document.removeEventListener('visibilitychange', sync); player.cancel(); animation.current = null; };
  }, [reduced]);

  return <section ref={section} className={styles.credits} aria-labelledby="credits-title">
    <div className={styles.creditsHeader}><p className={styles.eyebrow} id="credits-title">이 러닝을 함께 만든</p><span>THE END CREDITS</span></div>
    <div className={`${styles.creditWindow} ${reduced ? styles.creditStatic : ''}`}>
      <div className={styles.creditReel} ref={reel}>
        <p className={styles.creditTitle}>계획에 없던<br /><strong>5km.</strong></p>
        <div className={styles.creditRole}><small>첫 30KM를 달린</small><b>권재현</b></div>
        <div className={styles.creditRole}><small>페이스메이커 · 28KM의 고마움</small><b>형묵</b></div>
        <div className={styles.creditSupply}><Image src={`${root}/energy-gel.webp`} alt="그날 먹은 스포식스 에너지젤" width={135} height={180} /><div className={styles.creditRole}><small>에너지 보급</small><b>스포식스</b><span>에너지젤</span></div></div>
        <div className={styles.creditSupply}><Image src={`${root}/gatorade.webp`} alt="게토레이 음료" width={135} height={135} /><div className={styles.creditRole}><small>수분 보급</small><b>게토레이</b></div></div>
        <div className={styles.creditRole}><small>그날의 배경</small><b>한강</b></div>
        <p className={styles.creditLast}>덕분에, 좋은 추억 하나.<br /><span>2026.09.05 / 30.02 KM</span></p>
      </div>
      {!reduced && finished ? <p className={styles.creditAfterword}>덕분에,<br />좋은 추억 하나.<span>30.02 KM / 05 SEP 2026</span></p> : null}
    </div>
    <div className={styles.creditControls}>{!reduced ? <button type="button" onClick={() => { const player = animation.current; if (!player) return; if (finished) { player.currentTime = 0; setFinished(false); } if (playing && !finished) { manualPause.current = true; player.pause(); setPlaying(false); } else { manualPause.current = false; player.play(); setPlaying(true); } }}>{finished ? '크레딧 다시 보기 ↺' : playing ? '일시정지 Ⅱ' : '크레딧 재생 ▷'}</button> : <span>함께해줘서 고마워.</span>}<a href="#first30-ending">마지막 장면으로 ↓</a></div>
  </section>;
}
