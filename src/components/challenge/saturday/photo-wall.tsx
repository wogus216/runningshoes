import { SATURDAY_PHOTOS } from '@/lib/data/challenge/saturday';
import styles from '@/app/(challenge)/saturday/saturday.module.css';

/**
 * 크루가 실제로 찍은 사진.
 *
 * 아홉 장 전부 폰 세로 사진이라 full-bleed 배경으로 못 쓴다 — 가로로 자르면
 * 인물이 잘리고, 무엇보다 '폰으로 찍은 사진'이라는 질감이 사라진다.
 * 그래서 자르지 않고 세로 그대로 벽에 붙인다. 세로가 약점이 아니라 형식이 된다.
 */
export function PhotoWall() {
  return (
    <section className={styles.wallSection} aria-labelledby="wall-title">
      <div className={styles.wallInner}>
        <header className={styles.wallHeader}>
          <span className={styles.lightKicker}>방이 생기기 전부터</span>
          <h2 id="wall-title">이미 같이 뛰고 있었다</h2>
        </header>

        <ul className={styles.wall}>
          {SATURDAY_PHOTOS.map((photo) => (
            <li className={photo.feature ? styles.featureCell : undefined} key={photo.src}>
              <img
                src={`/images/challenge/saturday/crew/${photo.src}.webp`}
                alt={photo.alt}
                loading="lazy"
                decoding="async"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
