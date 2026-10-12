'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { AdSlot } from '@/components/ads/ad-slot';
import { trackRunner } from '@/lib/runner-analysis/track';
import { ADSENSE_SLOTS } from '@/lib/constants';
import { getCharacterPresentation, LEAD_NOTE, LEAD_TAG, PUBLIC_AXES, RECOVERY_MARGIN_NOTE } from '@/lib/runner-analysis/presentation';
import { sharedRunnerCardUrl } from '@/lib/runner-analysis/share';
import type { JudgedRunner } from './running-card-medal';
import { runnerShareAnalysis, type RunnerShareAnalysis } from '@/lib/runner-analysis/explain';

export type ShareKind = 'story' | 'feed';
export type SharePage = 'cover' | 'analysis';
// medal3d-share.js 의 card 와 같은 모양. 화면에 보이는 문장 그대로이고, 입력 경로·예시·fallbacksUsed 는 없다.
export type ShareCard = {
  house: string;
  name: string;
  title: string;
  oracle: string;
  scores: Array<{ label: string; value: number; lead: boolean }>;
  analysis: { visible: RunnerShareAnalysis; hidden: RunnerShareAnalysis };
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
function shareCardOf({ analysis, title, explanation }: JudgedRunner): ShareCard {
  const character = analysis.match.character;
  const presentation = getCharacterPresentation(character.id);
  return {
    house: character.house,
    name: character.name,
    title,
    oracle: presentation.oracle,
    scores: PUBLIC_AXES.map(([axis, label]) => ({ label, value: analysis.publicScores[axis], lead: axis === explanation.lead.axis })),
    analysis: { visible: runnerShareAnalysis(explanation, false), hidden: runnerShareAnalysis(explanation, true) },
    leadTag: LEAD_TAG,
    recoveryNote: RECOVERY_MARGIN_NOTE,
  };
}

// 메달 아래에서 개인 소개 → 유형 근거 → 점수 해석 → 강점과 균형 → 다음 행동으로 읽는다.
// 공유 이미지는 같은 설명에서 만든 짧은 요약을 사용한다.
export function RunningCardResult({ judged, drawResultMedal, finishRevision, shareImage, onRestart }: {
  judged: JudgedRunner;
  drawResultMedal: (canvas: HTMLCanvasElement) => Promise<void>;
  finishRevision: number;
  shareImage: ShareImage;
  onRestart: () => void;
}) {
  const { analysis, explanation } = judged;
  const character = analysis.match.character;
  const card = shareCardOf(judged);
  const lead = card.scores.find((s) => s.lead)!;
  const medalCanvas = useRef<HTMLCanvasElement>(null);
  const [medalStatus, setMedalStatus] = useState<'loading' | 'ready' | 'error'>('loading');

  useEffect(() => {
    const canvas = medalCanvas.current;
    if (!canvas) return;
    let active = true;
    drawResultMedal(canvas).then(() => {
      if (active) setMedalStatus('ready');
    }).catch(() => {
      if (active) setMedalStatus('error');
    });
    return () => { active = false; };
  }, [drawResultMedal, finishRevision, character.id]);

  return (
    <section className="rc-result" id="rc-result" aria-labelledby="rc-result-name">
      <div className="rc-result-mast"><span>RUNNING CARD / 28D</span><span>나의 메달 분석</span></div>
      <figure className="rc-result-medal" data-status={medalStatus}>
        <canvas ref={medalCanvas} width={640} height={640} role="img" aria-label={`${character.name}을 상징하는 표식 하나가 새겨진 원형 메달`} />
        {medalStatus === 'loading' && <figcaption>메달을 새기는 중…</figcaption>}
        {medalStatus === 'error' && <figcaption>메달을 보여주지 못했어요. 위의 완성된 메달을 확인해 주세요.</figcaption>}
      </figure>
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

      <section className="rc-section rc-introduction" aria-labelledby="rc-intro-title">
        <h3 id="rc-intro-title">지난 28일의 나</h3>
        <p>{explanation.introduction.text}</p>
      </section>

      <section className="rc-section" aria-labelledby="rc-evidence-title">
        <h3 id="rc-evidence-title">이 인물과 닮은 이유</h3>
        <ol className="rc-evidence">
          {explanation.evidence.map((e, i) => (
            <li key={e.family}>
              <span aria-hidden="true">0{i + 1}</span>
              <div><b>{e.text}</b><p>{e.interpretation}</p></div>
            </li>
          ))}
        </ol>
        <p className="rc-reading-note">러닝 기록의 특성 80%와 목표 20%를 함께 비교한 유형이에요.</p>
      </section>

      <section className="rc-section" aria-labelledby="rc-scores-title">
        <h3 id="rc-scores-title">세 점수 읽기</h3>
        <p className="rc-reading-note">지난 28일을 읽는 자체 지표예요. 다른 러너와의 순위나 실력 등급은 아니에요.</p>
        <div className="rc-score-insights">
          {explanation.scoreInsights.map((score) => (
            <div key={score.axis} className={`rc-insight${score.lead ? ' is-lead' : ''}`}>
              <div className="rc-insight-heading">
                <h4>{score.label}{score.lead && <small>{LEAD_TAG}</small>}</h4>
                <strong>{score.value}<small>/ 100</small></strong>
              </div>
              <span className="rc-bar" aria-hidden="true"><i style={{ width: `${score.value}%` }} /></span>
              <p>{score.summary}</p>
              <details>
                <summary>{score.label} 계산 근거</summary>
                <p>{score.detail}</p>
              </details>
            </div>
          ))}
        </div>
      </section>

      <section className="rc-section" aria-labelledby="rc-balance-title">
        <h3 id="rc-balance-title">내 스타일의 강점과 균형</h3>
        <dl className="rc-notes">
          <div><dt>강점 · {explanation.strength.title}</dt><dd>{explanation.strength.text}</dd></div>
          <div><dt>살펴볼 점 · {explanation.watchout.title}</dt><dd>{explanation.watchout.text}</dd></div>
          <div className="rc-next"><dt>내 스타일을 살리는 한 가지</dt><dd><b>{explanation.nextAction.title}</b><p>{explanation.nextAction.text}</p></dd></div>
        </dl>
      </section>

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

  function downloadSaved(file: Saved) {
    if ('download' in HTMLAnchorElement.prototype) {
      const link = document.createElement('a');
      link.href = file.url;
      link.download = file.name;
      document.body.append(link);
      link.click();
      link.remove();
      setStatus(`${file.page === 'cover' ? '1장 표지' : '2장 분석'} 다운로드를 시작했어요.`);
      return;
    }
    const tab = window.open(file.url, '_blank');
    if (tab) {
      tab.opener = null;
      setStatus(`${file.page === 'cover' ? '1장 표지' : '2장 분석'}를 새 탭에서 열었어요. 길게 눌러 저장하세요.`);
    } else {
      setStatus('이미지를 열지 못했어요. 팝업 허용 후 다시 눌러 주세요.');
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
        켜면 기록 메달의 숫자·요일과 소개의 기록 수치를 숨겨요. 러닝 스타일 해석과 인물·세 점수는 남아요.
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
      <p className="rc-share-note">1장은 메달 표지, 2장은 내 러닝 소개·점수 해석·강점과 균형을 담은 요약이에요.</p>
      <p className="rc-share-note">링크는 인물과 세 점수만 전해요. 내 기록을 해석한 설명까지 전하려면 이미지를 공유하세요.</p>
      <p className="rc-status" role="status">{status}</p>
      {saved.length > 0 && typeof navigator !== 'undefined' && navigator.canShare?.({ files: saved.map((m) => m.file) }) && (
        <button type="button" className="rc-primary" disabled={busy} onClick={shareFiles}>
          {saved.length === 2 ? '이미지 2장 함께 보내기' : '표지 이미지 공유·저장'}
        </button>
      )}
      {saved.length > 0 && (
        <>
          <p className="rc-share-note">
            {saved.length === 2
              ? '한 장만 다운로드됐다면 아래에서 빠진 이미지를 따로 저장하세요. 두 장을 다른 앱으로 함께 보내려면 위 버튼을 누르세요.'
              : '표지 이미지가 다운로드되지 않았다면 아래 버튼으로 다시 저장할 수 있어요.'}
          </p>
          <div className="rc-open">
            {saved.map((file) => (
              <button key={file.page} type="button" disabled={busy} onClick={() => downloadSaved(file)}>
                {file.page === 'cover' ? '1장 표지 다운로드' : '2장 분석 다운로드'}
              </button>
            ))}
          </div>
        </>
      )}
      <p className="rc-share-note">이미지 열기는 현재 숨기기·크기 설정을 반영해요. 다운로드가 되지 않으면 열어서 길게 눌러 저장하세요.</p>
      <div className="rc-open">
        <button type="button" disabled={busy} onClick={() => openImage('cover')}>1장 표지 열기</button>
        <button type="button" disabled={busy} onClick={() => openImage('analysis')}>2장 분석 열기</button>
      </div>
    </section>
  );
}
