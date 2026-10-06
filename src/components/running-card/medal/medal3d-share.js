// Share image layout for 3D-1, in M3's grammar: masthead, the medal, one legend line, the four numbers (예시 next to a
// sample's label), the extra line, the note, allrunabout.com bottom right. The medal itself is drawn by the caller
// (a front-on WebGL render at the figure's pixel size); this file only lays out the page around it.
import { DAYS, GOALS } from './medal3d-relief.js';

export const SHARE_SIZES = { story: [1080, 1920], feed: [1080, 1350] };
const THEMES = {
  stage: { bg: '#17150f', glow: 'rgba(247,244,237,.075)', ink: '#f7f4ed', muted: 'rgba(247,244,237,.64)', rule: 'rgba(247,244,237,.24)', tag: 'rgba(247,244,237,.5)', part: '#ff8a52' },
  paper: { bg: '#f7f4ed', glow: 'rgba(255,255,255,.7)', ink: '#17150f', muted: '#6e6a5e', rule: '#d9d4c8', tag: '#7c7768', part: '#c73800' },
};
const km = n => n.toLocaleString('ko-KR', { maximumFractionDigits: 2 });
const paceColon = s => `${Math.floor(s / 60)}:${String(Math.round(s % 60)).padStart(2, '0')}`;

function fitText(g, text, x, y, maxWidth, size, weight, family = 'StudySans') {
  g.font = `${weight} ${size}px ${family}, sans-serif`;
  const s = size * Math.min(1, maxWidth / g.measureText(text).width);
  g.font = `${weight} ${s}px ${family}, sans-serif`; g.fillText(text, x, y);
}
// Runs of [text, colour, weight], shrunk together to fit one line.
function runs(g, items, x, y, maxWidth, size) {
  const measure = s => items.reduce((n, [t, , w]) => { g.font = `${w} ${s}px StudySans, sans-serif`; return n + g.measureText(t).width; }, 0);
  const s = size * Math.min(1, maxWidth / measure(size));
  g.textAlign = 'left';
  for (const [t, c, w] of items) { g.font = `${w} ${s}px StudySans, sans-serif`; g.fillStyle = c; g.fillText(t, x, y); x += g.measureText(t).width; }
}
function numberCell(g, th, [label, n, unitText, sample], x, y, w, h, { labelSize, numberSize, unitSize, base }) {
  g.fillStyle = th.rule; g.fillRect(x, y, w, 2);
  g.textAlign = 'left'; g.font = `450 ${labelSize}px StudySans, sans-serif`; g.fillStyle = th.muted; g.fillText(label, x, y + labelSize * 1.6);
  if (sample) {
    const tx = x + g.measureText(label).width + 14;
    g.font = `550 ${labelSize * .76}px StudySans, sans-serif`; const tw = g.measureText('예시').width + 20, tH = labelSize * 1.15;
    g.strokeStyle = th.tag; g.lineWidth = 2; g.beginPath(); if (g.roundRect) g.roundRect(tx, y + labelSize * .72, tw, tH, 8); else g.rect(tx, y + labelSize * .72, tw, tH); g.stroke();
    g.fillStyle = th.ink; g.fillText('예시', tx + 10, y + labelSize * .72 + tH * .74);
  }
  g.font = `450 ${unitSize}px StudySans, sans-serif`; const unitW = unitText ? g.measureText(unitText).width + 10 : 0;
  let size = numberSize; g.font = `700 ${size}px StudyCondensed, sans-serif`;
  const fit = (w - unitW) / Math.max(g.measureText(n).width, 1); if (fit < 1) { size *= fit; g.font = `700 ${size}px StudyCondensed, sans-serif`; }
  g.fillStyle = th.ink; g.fillText(n, x, y + h - base);
  if (unitText) { const nw = g.measureText(n).width; g.font = `450 ${unitSize}px StudySans, sans-serif`; g.fillText(unitText, x + nw + 10, y + h - base); }
}

// info: { rec, coins, samples, entered, finish, backdrop }. renderFigure(fig) draws the medal into fig and returns its fit.
export async function drawShare(g, kind, info, renderFigure) {
  await Promise.all(['700 100px StudyCondensed', '450 40px StudySans', '550 40px StudySans', '650 40px StudySans'].map(f => document.fonts.load(f, '러닝 카드 산초 지난 28일 0123456789:/km회 예시 allrunabout.com')));
  const [W, H] = SHARE_SIZES[kind], story = kind === 'story', M = 84, th = THEMES[info.backdrop] || THEMES.stage;
  const { rec } = info, entered = new Set(info.entered), samples = new Set(info.samples);
  g.fillStyle = th.bg; g.fillRect(0, 0, W, H);
  // Masthead, as on the page.
  const top = story ? 150 : 104;
  g.textBaseline = 'alphabetic'; g.textAlign = 'left'; g.font = '650 42px StudySans, sans-serif';
  let x = M;
  for (const [t, c] of [['러닝 카드', th.ink], [' / ', th.muted], ['산초', th.ink]]) { g.fillStyle = c; g.fillText(t, x, top); x += g.measureText(t).width; }
  g.textAlign = 'right'; g.font = '450 40px StudySans, sans-serif'; g.fillStyle = th.muted; g.fillText('지난 28일', W - M, top);
  g.fillStyle = th.rule; g.fillRect(M, top + 36, W - 2 * M, 2);
  // The medal: the whole width, from under the masthead rule to the legend. The feed gives it about two thirds of the width.
  const figure = story ? { x: 0, y: top + 40, w: W, h: 1186 - top - 40, fit: { widthShare: .80, heightShare: .80, bottomPad: .02 } }
    : { x: 0, y: top + 40, w: W, h: H - 312 - top - 40, fit: { widthShare: .72, heightShare: .84, bottomPad: .02 } };
  const glow = g.createRadialGradient(W / 2, figure.y + figure.h * .64, 0, W / 2, figure.y + figure.h * .64, W * .55);
  glow.addColorStop(0, th.glow); glow.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = glow; g.fillRect(0, figure.y, W, figure.h);
  // The ribbon runs up out of the figure; the rule above it reads as the edge of the picture.
  g.save(); g.beginPath(); g.rect(figure.x, figure.y, figure.w, figure.h); g.clip();
  const fitInfo = renderFigure(figure);
  g.restore();
  g.fillStyle = th.rule; g.fillRect(M, top + 36, W - 2 * M, 2);
  // Legend: one coin per input, read clockwise from one o'clock.
  const legendY = story ? 1226 : H - 286, size = story ? 30 : 26;
  const names = ['총거리', '횟수', '페이스', '최장거리', '강한 훈련', '목표', '요일'];
  runs(g, [['동전 하나에 입력 하나 — 1시 방향부터 시계 방향  ', th.muted, 450], ...names.flatMap((n, i) => [...(i ? [[' · ', th.muted, 450]] : []), [n, th.ink, 550]])], M, legendY, W - 2 * M, size);
  // Four numbers. A sample carries 예시 next to its label; a coin not entered yet shows a dash.
  const cell = (key, label, n, unit) => [label, entered.has(key) ? n : '—', entered.has(key) ? unit : '', samples.has(key)];
  const entries = [cell('distance', '28일 총거리', km(rec.distance), 'km'), cell('count', '러닝 횟수', String(rec.count), '회'), cell('pace', '평균 페이스', paceColon(rec.pace), '/km'), cell('longest', '최장거리', km(rec.longest), 'km')];
  let ruleY;
  if (story) {
    const gridTop = 1262, cellW = (W - 2 * M - 48) / 2, cellH = 210;
    entries.forEach((e, i) => numberCell(g, th, e, M + (i % 2) * (cellW + 48), gridTop + Math.floor(i / 2) * cellH, cellW, cellH, { labelSize: 34, numberSize: 132, unitSize: 36, base: 36 }));
    ruleY = gridTop + 2 * cellH + 18;
  } else {
    const gridTop = H - 262, gap = 24, cellW = (W - 2 * M - 3 * gap) / 4, cellH = 128, short = ['총거리', '횟수', '페이스', '최장거리'];
    entries.forEach((e, i) => numberCell(g, th, [short[i], ...e.slice(1)], M + i * (cellW + gap), gridTop, cellW, cellH, { labelSize: 27, numberSize: 80, unitSize: 28, base: 14 }));
    ruleY = H - 120;
  }
  g.fillStyle = th.rule; g.fillRect(M, ruleY, W - 2 * M, 2);
  const rest = ['hard', 'goal', 'days'].every(k => entered.has(k));
  const extra = rest ? `강한 훈련 ${rec.hard >= 6 ? '6회 이상' : `${rec.hard}회`} · 목표 ${GOALS[rec.goal]}${rec.days.length ? ` · ${rec.days.map(d => DAYS[d]).join('·')}` : ''}` : '강한 훈련 · 목표 · 요일은 아직 입력 전이에요.';
  g.textAlign = 'left'; g.fillStyle = th.ink; fitText(g, extra, M, story ? ruleY + 60 : H - 76, W - 2 * M, story ? 36 : 32, 550);
  const note = samples.size ? '예시 표시는 직접 입력하지 않은 시연 값이라, 그 동전은 각인하지 않은 민짜로 남겼어요.'
    : info.coins.includes('empty') ? '아직 입력하지 않은 자리는 빈 소켓으로 남겼어요.' : '';
  if (note) { g.fillStyle = th.muted; fitText(g, note, M, story ? ruleY + 116 : H - 30, story ? W - 2 * M : W - 2 * M - 250, story ? 30 : 24, 450); }
  // Site address: the image travels without the app.
  g.textAlign = 'right'; g.font = '450 28px StudySans, sans-serif'; g.fillStyle = th.muted; g.fillText('allrunabout.com', W - M, H - (story ? 52 : 30));
  return fitInfo;
}
