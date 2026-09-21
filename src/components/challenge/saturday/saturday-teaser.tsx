import Link from 'next/link';
import { ChatLog } from './chat-log';
import { CinematicDirector } from './cinematic-director';
import { CrewReveal } from './crew-reveal';
import { MissionHero } from './mission-hero';
import { PhotoWall } from './photo-wall';
import { RaceTarget } from './race-target';
import { SATURDAY_COPY } from '@/lib/data/challenge/saturday';
import styles from '@/app/(challenge)/saturday/saturday.module.css';

export function SaturdayTeaser() {
  return (
    <div className={styles.saturday} data-saturday>
      <a className={styles.skipLink} href="#saturday-main">본문 바로가기</a>
      <header className={styles.header}>
        <Link className={styles.brand} href="/saturday" aria-label="쎄러데이 처음으로">
          <i aria-hidden="true" />
          <span>SATURDAY RUNNING CREW</span>
        </Link>
        <div className={styles.missionStatus}>
          <span>첫 번째 이야기</span>
          <span className={styles.statusLong}>일곱 명 접수 완료</span>
        </div>
      </header>

      <main id="saturday-main" className={styles.main}>
        <MissionHero />
        {/* 히어로(검정) → 단톡(새벽 하늘) → 크루(종이) 순으로 화면이 한 계단씩 밝아진다 */}
        <ChatLog />
        <CrewReveal />
        {/* 크루를 소개한 뒤 실제 사진 — 지금까지 어떻게 뛰어왔는지 */}
        <PhotoWall />
        <RaceTarget />
      </main>

      {/* 이름 → 유래 → 농담 순서다. 유래가 빠지면 농담이 전제 없이 던져진다 */}
      <footer className={styles.footer}>
        <div>
          <strong>쎄러데이</strong>
          <span>SATURDAY RUNNING CREW</span>
          <small className={styles.nameOrigin}>{SATURDAY_COPY.footer.nameOrigin}</small>
        </div>
        <p>{SATURDAY_COPY.footer.joke}</p>
        <Link href="/">러닝의 모든것에서 만듭니다 ↗</Link>
      </footer>
      <CinematicDirector />
    </div>
  );
}
