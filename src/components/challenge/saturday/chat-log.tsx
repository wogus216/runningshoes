import type { CSSProperties } from 'react';
import { SATURDAY_CHAT } from '@/lib/data/challenge/saturday';
import styles from '@/app/(challenge)/saturday/saturday.module.css';

/** 운영자 본인. 이 사람 말만 오른쪽에 붙는다 — 대화가 대화로 읽히는 최소 장치 */
const ME = '재춘';

/**
 * 단톡방 발췌 — sticky 무대에서 뭉치가 한 개씩 교체되고,
 * 뭉치 안에서는 메시지가 한 줄씩 도착한다.
 *
 * 말풍선 '문법'(좌우 정렬·연속 발화 묶음·시각)은 가져오되 카카오톡의 '옷'
 * (노란 말풍선·프로필·읽음 표시)은 입히지 않는다. 남의 UI를 베끼면 진짜 대화가
 * 진짜인 척하는 그래픽이 되고, 광고가 붙는 페이지에서 남의 트레이드드레스를
 * 그리는 일이 된다. 색은 이 페이지 팔레트 안에서만 쓴다.
 *
 * 없는 장치는 만들지 않는다 — 읽음 표시(1)나 프로필 사진은 데이터가 없으므로 넣지 않는다.
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
                {burst.lines.map((line, lineIndex) => {
                  const previous = burst.lines[lineIndex - 1];
                  // 같은 사람이 이어 말하면 이름을 다시 적지 않는다
                  const sameSpeaker = previous?.who === line.who;
                  // at 에 'MM.DD' 가 붙어 있으면 그날부터 날이 바뀐 것
                  const dayBreak = line.at.includes('.') ? line.at.split(' ')[0] : null;

                  return (
                    <li
                      className={[
                        line.who === ME ? styles.mine : '',
                        line.punch ? styles.punchLine : '',
                      ]
                        .filter(Boolean)
                        .join(' ')}
                      key={`${burst.id}-${lineIndex}`}
                      style={{ '--line-index': lineIndex } as CSSProperties}
                    >
                      {dayBreak ? <span className={styles.dayBreak}>{dayBreak}</span> : null}
                      <span className={styles.who} data-repeat={sameSpeaker || undefined}>
                        {line.who}
                      </span>
                      <span className={styles.bubble}>{line.text}</span>
                      <time className={styles.at}>{line.at.split(' ').pop()}</time>
                    </li>
                  );
                })}
              </ol>
            </li>
          ))}
        </ol>

        <div className={styles.progress} aria-hidden="true"><i /></div>
      </div>
    </section>
  );
}
