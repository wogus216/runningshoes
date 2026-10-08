'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { AdSlot } from '@/components/ads/ad-slot';
import { trackRunner } from '@/lib/runner-analysis/track';
import { ADSENSE_SLOTS } from '@/lib/constants';
import { getCharacterPresentation, LEAD_NOTE, LEAD_TAG, PUBLIC_AXES, RECOVERY_MARGIN_NOTE } from '@/lib/runner-analysis/presentation';
import { sharedRunnerCardUrl } from '@/lib/runner-analysis/share';
import type { JudgedRunner } from './running-card-medal';
import { RunnerScores } from './running-card-scores';

export type ShareKind = 'story' | 'feed';
export type SharePage = 'cover' | 'analysis';
// medal3d-share.js 의 card 와 같은 모양. 화면에 보이는 문장 그대로이고, 입력 경로·예시·fallbacksUsed 는 없다.
export type ShareCard = {
  house: string;
  name: string;
  title: string;
  oracle: string;
  scores: Array<{ label: string; value: number; lead: boolean }>;
  evidence: Array<{ text: string; hiddenText: string }>;
  strength: string;
  watchout: string;
  next: string;
  leadTag: string;
  recoveryNote: string;
  // 그림은 선택 사항이다. 현재 결과·공유 표지는 메달을 중심으로 그린다.
  image?: string;
  imageFocus?: number;
};
export type ShareImage = (kind: ShareKind, page: SharePage, options: { card: ShareCard; hideNumbers: boolean }) => Promise<Blob>;

const SIZES: Record<ShareKind, { name: string; size: string }> = {
  story: { name: '스토리', size: '1080×1920' },
  feed: { name: '피드', size: '1080×1350' },
};
const RACE_NAMES: Record<number, string> = { 5: '5km', 10: '10km', 21.0975: '하프', 42.195: '풀코스' };

const minutesText = (minutes: number) => {
  const h = Math.floor(minutes / 60), m = Math.round(minutes % 60);
  return [h ? `${h}시간` : '', m || !h ? `${m}분` : ''].filter(Boolean).join(' ');
};

function shareCardOf({ analysis, title, explanation }: JudgedRunner): ShareCard {
  const character = analysis.match.character;
  const presentation = getCharacterPresentation(character.id);
  return {
    house: character.house,
    name: character.name,
    title,
    oracle: presentation.oracle,
    scores: PUBLIC_AXES.map(([axis, label]) => ({ label, value: analysis.publicScores[axis], lead: axis === explanation.lead.axis })),
    evidence: explanation.evidence.map(({ text, hiddenText }) => ({ text, hiddenText })),
    strength: explanation.strength.text,
    watchout: explanation.watchout.text,
    next: explanation.nextAction.text,
    leadTag: LEAD_TAG,
    recoveryNote: RECOVERY_MARGIN_NOTE,
  };
}

// 결과 카드(S4, 설계 §3-2). 위의 3D 메달에서 이어지는 기록 요약(가문·인물·칭호·대표 수치·신탁) → 분석(세 점수·근거 2·강점·맹점·다음 14일)
// → 회복 여유 정의 → 광고 1 → 공유 → 신발 추천 → 다시 하기. 메달 아래 같은 문서에서 열린다(D5).
export function RunningCardResult({ judged, shareImage, onRestart }: { judged: JudgedRunner; shareImage: ShareImage; onRestart: () => void }) {
  const { analysis, snapshot } = judged;
  const character = analysis.match.character;
  const card = shareCardOf(judged);
  const lead = card.scores.find((s) => s.lead)!;
  const raceGoal = snapshot.raceGoal;

  return (
    <section className="rc-result" id="rc-result" aria-labelledby="rc-result-name">
      <div className="rc-result-mast"><span>RUNNING CARD / 28D</span><span>나의 메달 분석</span></div>
      <p className="rc-house">{character.house} 가문</p>
      <h2 className="rc-name" id="rc-result-name" tabIndex={-1}>{character.name}</h2>
      <p className="rc-epithet">{card.title}</p>
      <div className="rc-lead">
        <strong>{lead.value}</strong>
        <p>
          <span>{lead.label}</span>
          <small>{LEAD_NOTE}</small>
        </p>
      </div>
      <blockquote className="rc-oracle"><p>“{card.oracle}”</p></blockquote>

      <section className="rc-section" aria-labelledby="rc-scores-title">
        <h3 id="rc-scores-title">세 점수</h3>
        <RunnerScores scores={card.scores} />
        {raceGoal && (
          <p className="rc-race">
            훈련 자극에는 목표 기록({RACE_NAMES[raceGoal.distanceKm] ?? `${raceGoal.distanceKm}km`} {minutesText(raceGoal.targetTimeMinutes)})과 평균 페이스의 차이가 10% 들어 있어요.
          </p>
        )}
      </section>

      <section className="rc-section" aria-labelledby="rc-evidence-title">
        <h3 id="rc-evidence-title">이 인물이 된 기록</h3>
        <ol className="rc-evidence">
          {card.evidence.map((e, i) => (
            <li key={e.text}><span>0{i + 1}</span>{e.text}</li>
          ))}
        </ol>
      </section>

      <dl className="rc-notes">
        <div><dt>강점</dt><dd>{card.strength}</dd></div>
        <div><dt>놓치기 쉬운 것</dt><dd>{card.watchout}</dd></div>
        <div className="rc-next"><dt>다음 14일, 한 가지</dt><dd>{card.next}</dd></div>
      </dl>

      <p className="rc-def">{RECOVERY_MARGIN_NOTE}</p>

      <AdSlot slot={ADSENSE_SLOTS.runningCardResult} format="auto" label="러닝 카드 결과 아래 광고" />

      <ShareBlock id={character.id} card={card} scores={analysis.publicScores} shareImage={shareImage} />

      <Link href="/recommend" prefetch={false} className="rc-shoes">
        <span>
          <b>러닝화 추천 받기</b>
          <small>경험·주간 거리·발볼·부상 이력·예산을 묻는 맞춤 추천</small>
        </span>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
      </Link>
      <button type="button" className="rc-restart" onClick={onRestart}>처음부터 다시 하기</button>
    </section>
  );
}

type Saved = { page: SharePage; url: string; name: string; file: File };

function ShareBlock({ id, card, scores, shareImage }: { id: string; card: ShareCard; scores: JudgedRunner['analysis']['publicScores']; shareImage: ShareImage }) {
  const [kind, setKind] = useState<ShareKind>('story');
  const [hideNumbers, setHideNumbers] = useState(false);
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState('');
  const [saved, setSaved] = useState<Saved[]>([]);
  const urls = useRef<string[]>([]);

  useEffect(() => () => urls.current.forEach((url) => URL.revokeObjectURL(url)), []);

  function clearSaved() {
    urls.current.forEach((url) => URL.revokeObjectURL(url));
    urls.current = [];
    setSaved([]);
    setStatus('');
  }

  async function openImage(page: SharePage) {
    if (busy) return;
    const tab = window.open('', '_blank');
    if (!tab) {
      setStatus('새 탭이 차단됐어요. 팝업을 허용하고 다시 눌러 주세요.');
      return;
    }
    tab.opener = null;
    tab.document.title = '러닝 카드 이미지 준비 중';
    tab.document.body.textContent = '현재 설정으로 이미지를 만드는 중이에요.';
    setBusy(true);
    try {
      const blob = await shareImage(kind, page, { card, hideNumbers });
      const url = URL.createObjectURL(blob);
      urls.current.push(url);
      tab.location.href = url;
      setStatus('현재 설정으로 이미지를 열었어요. 길게 눌러 저장할 수 있어요.');
    } catch {
      tab.close();
      setStatus('이미지를 열지 못했어요. 다시 눌러 주세요.');
    } finally {
      setBusy(false);
    }
  }

  async function shareFiles() {
    try {
      await navigator.share({ files: saved.map((m) => m.file), title: '러닝 카드' });
      setStatus('기기 저장·공유 화면을 열었어요.');
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') return;
      setStatus('기기 공유를 열지 못했어요. 아래 이미지 열기를 이용해 주세요.');
    }
  }

  async function save(pages: SharePage[]) {
    if (busy) return;
    const { name, size } = SIZES[kind];
    // a[download]이 없는 브라우저는 누른 순간 창을 연다(나중에 열면 팝업으로 막힌다) — 표지 한 장만 그 창에 싣는다.
    const fallback = 'download' in HTMLAnchorElement.prototype ? null : window.open('', '_blank');
    setBusy(true);
    setStatus(`${name} 이미지 ${pages.length}장을 만드는 중이에요.`);
    try {
      const made: Saved[] = [];
      for (const page of pages) {
        const blob = await shareImage(kind, page, { card, hideNumbers });
        const order = page === 'cover' ? 1 : 2;
        const filename = `running-card-${id}-${order}-${page}-${kind}-${size.replace('×', 'x')}.png`;
        made.push({ page, url: URL.createObjectURL(blob), name: filename, file: new File([blob], filename, { type: 'image/png' }) });
      }
      urls.current.forEach((url) => URL.revokeObjectURL(url));
      urls.current = made.map((m) => m.url);
      setSaved(made);
      // 이미지를 만들어 저장(또는 새 탭)까지 넘긴 순간. 기록 숫자는 매개변수에 없다 — 숨김 여부만.
      trackRunner(pages.length === 2 ? 'runner_carousel_saved' : 'runner_cover_saved', { character_id: id, image_size: kind, hide_numbers: hideNumbers ? 'true' : 'false' });
      if (fallback) {
        fallback.location.href = made[0].url;
        setStatus(`새 탭에 ${name} 표지를 열었어요. 길게 눌러 저장하세요. 나머지는 아래에서 열 수 있어요.`);
      } else {
        for (const m of made) {
          const link = document.createElement('a');
          link.href = m.url; link.download = m.name;
          document.body.append(link); link.click(); link.remove();
          await new Promise((resolve) => setTimeout(resolve, 300));
        }
        setStatus(navigator.canShare?.({ files: made.map((m) => m.file) })
          ? `${name} 이미지 ${made.length}장을 만들었어요. 아래 '기기에 저장·공유'를 눌러 저장하세요.`
          : `${name} 이미지(${size}) ${made.length}장 저장을 시작했어요. 저장되지 않으면 아래에서 이미지를 열어 저장하세요.`);
      }
    } catch {
      fallback?.close();
      setStatus('이미지를 만들지 못했어요. 한 번 더 눌러 주세요.');
    } finally {
      setBusy(false);
    }
  }

  async function shareLink() {
    const url = sharedRunnerCardUrl(window.location.origin, { characterId: id, scores });
    const text = `지난 28일, 내 러닝 카드는 ${card.name} — ${card.title}`;
    try {
      if (navigator.share) {
        trackRunner('runner_share_started', { character_id: id, share_method: 'share' });
        await navigator.share({ title: '러닝 카드', text, url });
        setStatus('공유 화면을 열었어요.');
        return;
      }
      trackRunner('runner_share_started', { character_id: id, share_method: 'clipboard' });
      await navigator.clipboard.writeText(`${text}\n${url}`);
      setStatus('링크를 복사했어요.');
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') return;
      setStatus('링크를 공유하지 못했어요. 한 번 더 눌러 주세요.');
    }
  }

  return (
    <section className="rc-share" aria-labelledby="rc-share-title">
      <h3 id="rc-share-title">공유</h3>
      <fieldset className="rc-sizes">
        <legend className="sr-only">이미지 크기</legend>
        {(Object.keys(SIZES) as ShareKind[]).map((k) => (
          <label key={k}>
            <input type="radio" name="rc-size" value={k} checked={kind === k} disabled={busy} onChange={() => { clearSaved(); setKind(k); }} />
            <span>{SIZES[k].name}<small>{SIZES[k].size}</small></span>
          </label>
        ))}
      </fieldset>
      <button type="button" className="rc-toggle" aria-pressed={hideNumbers} aria-describedby="rc-hide-note" disabled={busy} onClick={() => { clearSaved(); setHideNumbers((v) => !v); }}>
        이미지에서 내 기록 숨기기
        <i aria-hidden="true" />
      </button>
      {/* 무엇이 지워지는지는 누르기 전에 읽혀야 한다 — 저장 버튼 아래 있던 설명을 토글 바로 아래로 옮겼다(S5-E). */}
      <p className="rc-toggle-note" id="rc-hide-note">
        켜면 이미지 속 메달의 기록 동전(총거리·횟수·페이스·최장거리·강한 훈련·요일)에 항목 이름만 남고, 근거는 숫자 없는 말로 바뀌어요.
      </p>
      <div className="rc-actions">
        <button type="button" className="rc-primary" disabled={busy} onClick={() => save(['cover', 'analysis'])}>
          {busy ? '이미지를 만드는 중…' : '이미지 2장 저장'}
        </button>
        <div className="rc-row">
          <button type="button" disabled={busy} onClick={() => save(['cover'])}>표지만 저장</button>
          <button type="button" onClick={shareLink}>링크 공유</button>
        </div>
      </div>
      <p className="rc-share-note">링크에는 인물과 세 점수만 담기고 입력한 기록은 담기지 않아요.</p>
      <p className="rc-status" role="status">{status}</p>
      {saved.length > 0 && typeof navigator !== 'undefined' && navigator.canShare?.({ files: saved.map((m) => m.file) }) && (
        <button type="button" className="rc-primary" disabled={busy} onClick={shareFiles}>기기에 저장·공유</button>
      )}
      <p className="rc-share-note">다운로드가 되지 않으면 이미지를 열어 길게 눌러 저장하세요. 이미지 열기는 현재 숨기기·크기 설정을 반영해요.</p>
      <div className="rc-open">
        <button type="button" disabled={busy} onClick={() => openImage('cover')}>1장 표지 열기</button>
        <button type="button" disabled={busy} onClick={() => openImage('analysis')}>2장 분석 열기</button>
      </div>
    </section>
  );
}
