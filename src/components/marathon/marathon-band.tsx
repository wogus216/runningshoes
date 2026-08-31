'use client';

import { useState } from 'react';
import type { Band } from '@/lib/marathon/bands';
import { MarathonRow } from './marathon-row';
import styles from './marathon-list.module.css';

const STEP = 12;

/**
 * 시점 밴드 하나.
 *
 * 펼친 밴드(접수중·곧 열림)는 12행씩 점진 확장하고, 접힌 밴드(접수 마감·지난 대회)는
 * `<details>` 안에 **전체 행을 담는다** — 접힌 채로 확장 버튼까지 두면 조작이 두 단계가 된다.
 * 어느 쪽이든 행은 전부 마크업에 남아 대회 링크 100개가 정적 HTML에 보존된다.
 */
export function MarathonBand({
  band,
  today,
  defaultOpen,
  note,
}: {
  band: Band;
  today: string;
  defaultOpen: boolean;
  note?: string;
}) {
  const [shown, setShown] = useState(STEP);

  if (band.events.length === 0) return null;

  if (!defaultOpen) {
    return (
      <details className={`${styles.band} ${styles.folded}`}>
        <summary>
          <h2 className={styles.bandTitle}>{band.label}</h2>
          <span className={styles.bandCount}>{band.events.length}</span>
        </summary>
        <div>
          {band.events.map((e) => (
            <MarathonRow key={e.id} event={e} today={today} />
          ))}
        </div>
      </details>
    );
  }

  // 잘라내지 않고 전부 렌더한 뒤 초과분을 숨긴다 — 대회 링크를 정적 HTML에 남기기 위해서다.
  const remaining = Math.max(0, band.events.length - shown);

  return (
    <section className={styles.band}>
      <div className={styles.bandHead}>
        <h2 className={styles.bandTitle}>{band.label}</h2>
        <span className={styles.bandCount}>{band.events.length}</span>
      </div>

      <div>
        {band.events.map((e, i) => (
          <MarathonRow key={e.id} event={e} today={today} folded={i >= shown} />
        ))}
      </div>

      {remaining > 0 && (
        <div className={styles.expand}>
          <button
            type="button"
            className={styles.expandB}
            onClick={() => setShown((n) => n + STEP)}
          >
            {remaining > STEP ? `대회 ${STEP}개 더 보기` : `전체 ${band.events.length}개 보기`}
            <span aria-hidden="true">↓</span>
          </button>
        </div>
      )}

      {note && <p className={styles.bandNote}>{note}</p>}
    </section>
  );
}
