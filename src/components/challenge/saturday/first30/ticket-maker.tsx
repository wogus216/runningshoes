'use client';

import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from 'react';
import styles from './first-thirty.module.css';
import { TICKET_RATIOS, type TicketRatio } from './ticket-layout';

const fallbackPhoto = '/images/challenge/saturday/first30/pointing.webp';
const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

function dateLabels(value: string) {
  const [year = '2026', month = '09', day = '05'] = value.split('-');
  return {
    compact: `${year}.${month}.${day}`,
    ticket: `${day} ${months[Math.max(0, Number(month) - 1)] ?? 'SEP'} ${year}`,
  };
}

function distanceParts(value: string) {
  const parsed = Math.min(999, Math.max(0, Number(value.replace(',', '.')) || 0)).toFixed(2);
  const [whole, fraction] = parsed.split('.');
  return { value: parsed, whole, fraction };
}

export function TicketMaker() {
  const [runner, setRunner] = useState('김형묵');
  const [distance, setDistance] = useState('10.00');
  const [date, setDate] = useState('2026-09-13');
  const [route, setRoute] = useState('출발지 ↔ 도착지');
  const [caption, setCaption] = useState('오늘의 러닝.');
  const [message, setMessage] = useState('준비는 계속된다.');
  const [photoUrl, setPhotoUrl] = useState(fallbackPhoto);
  const [ratio, setRatio] = useState<TicketRatio>('4:5');
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState('');
  const formattedDate = useMemo(() => dateLabels(date), [date]);
  const formattedDistance = useMemo(() => distanceParts(distance), [distance]);

  useEffect(() => () => {
    if (photoUrl.startsWith('blob:')) URL.revokeObjectURL(photoUrl);
  }, [photoUrl]);

  const choosePhoto = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (photoUrl.startsWith('blob:')) URL.revokeObjectURL(photoUrl);
    setPhotoUrl(URL.createObjectURL(file));
    setStatus('사진을 티켓에 넣었어요.');
  };

  const save = async (event: FormEvent) => {
    event.preventDefault(); setSaving(true); setStatus('');
    try {
      const { downloadCustomTicket } = await import('./ticket-download');
      await downloadCustomTicket({ runner, distance: formattedDistance.value, date, route, caption, message, photoSrc: photoUrl, ratio });
      setStatus('나만의 러닝 티켓을 저장했어요.');
    } catch { setStatus('티켓을 저장하지 못했어요. 다시 시도해주세요.'); }
    finally { setSaving(false); }
  };

  return <section className={styles.ticketMaker} id="ticket-maker" aria-labelledby="ticket-maker-title">
    <div className={styles.makerHeading}>
      <p className={styles.eyebrow}>YOUR RUN / YOUR CREDIT</p>
      <h2 id="ticket-maker-title">당신의 러닝도<br />한 장의 영화처럼.</h2>
      <p>사진과 기록은 이 기기 안에서만 사용됩니다.</p>
    </div>
    <div className={styles.makerGrid}>
      <form className={styles.makerForm} onSubmit={save}>
        <label className={styles.photoInput}><span>러닝 사진</span><input type="file" accept="image/*" onChange={choosePhoto} /><b>사진 선택 ↗</b></label>
        <div className={styles.inputPair}>
          <label><span>이름</span><input value={runner} maxLength={18} onChange={e => setRunner(e.target.value)} required /></label>
          <label><span>거리 (KM)</span><input value={distance} inputMode="decimal" maxLength={6} onChange={e => setDistance(e.target.value)} required /></label>
        </div>
        <label><span>달린 날짜</span><input type="date" value={date} onChange={e => setDate(e.target.value)} required /></label>
        <label><span>코스</span><input value={route} maxLength={28} onChange={e => setRoute(e.target.value)} required /></label>
        <label><span>사진 위 한마디</span><input value={caption} maxLength={24} onChange={e => setCaption(e.target.value)} required /></label>
        <label><span>마지막 문장</span><input value={message} maxLength={30} onChange={e => setMessage(e.target.value)} required /></label>
        <div className={styles.ratioPicker} role="group" aria-label="저장할 이미지 비율">{TICKET_RATIOS.map(option => <button key={option.id} type="button" onClick={() => setRatio(option.id)} aria-pressed={ratio === option.id} data-on={ratio === option.id || undefined}><b>{option.label}</b><small>{option.note}</small></button>)}</div><button type="submit" disabled={saving}>{saving ? '티켓 만드는 중…' : '내 티켓 저장 ↓'}</button>
        <p role="status">{status}</p>
      </form>

      <article className={`${styles.finishTicket} ${styles.customTicket}`} aria-label="입력한 러닝 기록의 기념 티켓 미리보기">
        <header className={styles.ticketHeader}><span>SATURDAY RUNNING CLUB</span><span>YOUR RUN</span></header>
        <figure className={`${styles.ticketPhoto} ${styles.customPhoto}`} style={{ backgroundImage: `url(${photoUrl})` }} role="img" aria-label="선택한 러닝 사진 미리보기"><figcaption>{caption || '오늘의 러닝.'}</figcaption></figure>
        <div className={styles.ticketDistance}><small>RUNNING MEMORY / {formattedDate.compact}</small><strong>{formattedDistance.whole}<span>.{formattedDistance.fraction}</span></strong><b>KM</b></div>
        <dl><div><dt>RUNNER</dt><dd>{runner || '나의 이름'}</dd></div><div><dt>DATE</dt><dd>{formattedDate.ticket}</dd></div><div><dt>ROUTE</dt><dd>{route || '나의 코스'}</dd></div></dl>
        <p><span>ONE RUN. ONE MEMORY.</span><span>{message || '준비는 계속된다.'}</span></p>
      </article>
    </div>
  </section>;
}
