import type { CSSProperties } from 'react';
import { SATURDAY_CHAT } from '@/lib/data/challenge/saturday';
import styles from '@/app/(challenge)/saturday/saturday.module.css';

/**
 * 단톡방 발췌 — sticky 무대에서 뭉치가 한 개씩 교체되고,
 * 뭉치 안에서는 메시지가 한 줄씩 도착한다.
 *
 * 전부 스크롤 진행도(--scene-progress)의 함수라 되감으면 대화도 되감긴다.
 * JS는 늘리지 않았다 — 크루 명단에 쓴 방식 그대로 CSS calc 으로만 계산한다.
 *
 * 카톡 UI(노란 말풍선·프로필)는 흉내내지 않는다. 흉내내는 순간
 * '진짜 대화'가 '진짜인 척하는 그래픽'이 된다.
 */
export function ChatLog() {
  return (
    <section
      className={`${styles.scene} ${styles.chatScene}`}
      data-cinematic-scene="chat"
      aria-labelledby="chat-title"
      style={{ '--burst-count': SATURDAY_CHAT.length } as CSSProperties}
    >
      <div className={`${styles.stage} ${styles.chatStage}`}>
        <header className={styles.chatHeader}>
          <span className={styles.lightKicker}>원본 · 각색 없음</span>
          <h2 id="chat-title">단톡방 그대로</h2>
        </header>

        <ol className={styles.chatBursts}>
          {SATURDAY_CHAT.map((burst, burstIndex) => (
            <li
              className={styles.burst}
              key={burst.id}
              style={{ '--burst-index': burstIndex } as CSSProperties}
            >
              <p className={styles.burstLabel}>{burst.label}</p>
              <ol className={styles.burstLines}>
                {burst.lines.map((line, lineIndex) => (
                  <li
                    className={line.punch ? styles.punchLine : undefined}
                    key={`${burst.id}-${lineIndex}`}
                    style={{ '--line-index': lineIndex } as CSSProperties}
                  >
                    <span className={styles.who}>{line.who}</span>
                    <span className={styles.said}>{line.text}</span>
                  </li>
                ))}
              </ol>
            </li>
          ))}
        </ol>

        <div className={styles.progress} aria-hidden="true"><i /></div>
      </div>
    </section>
  );
}
