import type { CSSProperties } from 'react';
import { SATURDAY_CHAT } from '@/lib/data/challenge/saturday';
import styles from '@/app/(challenge)/saturday/saturday.module.css';

/** 운영자 본인. 이 사람 말만 오른쪽에 붙는다 — 대화가 대화로 읽히는 최소 장치 */
const ME = '재춘';

/** 방이 열린 해. at 은 'HH:MM' 또는 'MM.DD HH:MM' 이라 연도는 여기서 붙인다 */
const CHAT_YEAR = '2026';
/** 날짜가 없는 줄은 직전 날짜를 잇는다 — 뭉치 첫 줄에는 항상 날짜가 있다 */
const FALLBACK_DATE = '08.10';

/** 화면 표기('12:15')를 기계가 읽는 datetime 으로 바꾼다 */
function toIsoTime(at: string): string {
  const parts = at.split(' ');
  const [date, time] = parts.length === 2 ? parts : [FALLBACK_DATE, parts[0]];
  return `${CHAT_YEAR}-${date.replace('.', '-')}T${time}`;
}

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
                {/* 줄이 도착하기 시작하는 지점을 줄 수로 나눠 계산한다.
                    고정 간격이면 줄이 적은 뭉치가 일찍 끝나 남은 스크롤이 죽는다.
                    어느 뭉치든 마지막 줄이 span 의 70% 지점에서 시작하고,
                    남은 30%가 뭉치 전체를 읽는 시간이 된다. */}
                {burst.lines.map((line, lineIndex) => {
                  const step = burst.lines.length > 1 ? 0.62 / (burst.lines.length - 1) : 0;
                  const lineStart = (0.08 + lineIndex * step).toFixed(4);
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
                      style={{ '--line-start': lineStart } as CSSProperties}
                    >
                      {dayBreak ? <span className={styles.dayBreak}>{dayBreak}</span> : null}
                      {/* 남의 말이다. 인용으로 표시해야 스크린리더가 본문과 구분해 읽는다 */}
                      <cite className={styles.who} data-repeat={sameSpeaker || undefined}>
                        {line.who}
                      </cite>
                      <blockquote className={styles.bubble}>{line.text}</blockquote>
                      <time className={styles.at} dateTime={toIsoTime(line.at)}>
                        {line.at.split(' ').pop()}
                      </time>
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
