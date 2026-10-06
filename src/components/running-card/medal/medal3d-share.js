// Share images (S4, D6): two pages drawn straight onto a canvas, in M3's grammar (ink page, masthead, allrunabout.com
// bottom right). 1 = the cover: the medal with its struck plate, then the house, the figure, the epithet and the oracle.
// 2 = the analysis page: the three scores, the two pieces of evidence, strength, watch-out, the next 14 days, and what
// 회복 여유 is not. The medal itself is drawn by the caller (a front-on WebGL render, or the flat drawing); this file only
// lays out the page around it.
// card (running-card-result.tsx): { house, name, title, oracle, scores: [{ label, value, lead }], evidence: [{ text,
// hiddenText }], strength, watchout, next, recoveryNote }. Nothing about where the numbers came from (예시·입력 경로·
// fallbacksUsed) is in it.
// Text: the masthead keeps the medal subset (StudySans); the card's sentences use the page's Pretendard Variable (the
// site's dynamic subset, loaded by unicode range for exactly these letters — the result card shows the same sentences),
// with StudySans behind it. Numbers are StudyCondensed, as on the coins.

export const SHARE_SIZES = { story: [1080, 1920], feed: [1080, 1350] };
const TH = { bg: '#17150f', glow: 'rgba(247,244,237,.075)', ink: '#f7f4ed', muted: 'rgba(247,244,237,.64)', rule: 'rgba(247,244,237,.24)', track: 'rgba(247,244,237,.16)', part: '#ff8a52' };
const SANS = '"Pretendard Variable", StudySans, sans-serif';
const M = 84;

const font = (g, weight, size, family = SANS) => { g.font = `${weight} ${size}px ${family}`; };
function fitText(g, text, x, y, maxWidth, size, weight, family = SANS) {
  font(g, weight, size, family);
  const s = size * Math.min(1, maxWidth / g.measureText(text).width);
  font(g, weight, s, family); g.fillText(text, x, y);
}
// Korean breaks between words (word-break: keep-all); a word longer than the line breaks between letters.
function wrap(g, text, maxWidth) {
  const lines = [];
  let line = '';
  for (const word of text.split(' ')) {
    const next = line ? `${line} ${word}` : word;
    if (g.measureText(next).width <= maxWidth) { line = next; continue; }
    if (line) lines.push(line);
    line = word;
    while (line.length > 1 && g.measureText(line).width > maxWidth) {
      let i = line.length - 1;
      while (i > 1 && g.measureText(line.slice(0, i)).width > maxWidth) i--;
      lines.push(line.slice(0, i)); line = line.slice(i);
    }
  }
  if (line) lines.push(line);
  return lines;
}

async function fontsFor(card, extra = '') {
  const text = [card.house, card.name, card.title, card.oracle, card.strength, card.watchout, card.next, card.recoveryNote,
    ...card.evidence.flatMap(e => [e.text, e.hiddenText]), ...card.scores.map(s => s.label), '가문 세 점수 대표 수치 이 인물이 된 기록 강점 놓치기 쉬운 것 다음 14일, 한 가지 “”', extra].join(' ');
  await Promise.all([
    document.fonts.load(`500 40px "Pretendard Variable"`, text),
    ...['700 100px StudyCondensed', '450 40px StudySans', '650 40px StudySans'].map(f => document.fonts.load(f, '러닝 카드 산초 지난 28일 0123456789 allrunabout.com')),
  ]).catch(() => {});
}

// Masthead as on the page; returns the y of its rule.
function masthead(g, W, story) {
  const top = story ? 150 : 104;
  g.textBaseline = 'alphabetic'; g.textAlign = 'left'; font(g, 650, 42, 'StudySans, sans-serif');
  let x = M;
  for (const [t, c] of [['러닝 카드', TH.ink], [' / ', TH.muted], ['산초', TH.ink]]) { g.fillStyle = c; g.fillText(t, x, top); x += g.measureText(t).width; }
  g.textAlign = 'right'; font(g, 450, 40, 'StudySans, sans-serif'); g.fillStyle = TH.muted; g.fillText('지난 28일', W - M, top);
  g.fillStyle = TH.rule; g.fillRect(M, top + 36, W - 2 * M, 2);
  return top + 36;
}
function address(g, W, H, story) {
  g.textAlign = 'right'; font(g, 450, story ? 28 : 24, 'StudySans, sans-serif'); g.fillStyle = TH.muted;
  g.fillText('allrunabout.com', W - M, H - (story ? 64 : 36));
}

// Page 1. renderFigure(fig) draws the medal into fig ({ x, y, w, h, fit }) and returns its fit.
export async function drawCover(g, kind, card, renderFigure) {
  await fontsFor(card);
  const [W, H] = SHARE_SIZES[kind], story = kind === 'story', width = W - 2 * M;
  g.fillStyle = TH.bg; g.fillRect(0, 0, W, H);
  const rule = masthead(g, W, story);
  // The words, from the bottom up, so the medal takes what is left.
  const z = story ? { oracle: 46, lh: 64, title: 44, name: 128, house: 34, gap: 92 } : { oracle: 36, lh: 50, title: 36, name: 96, house: 28, gap: 70 };
  font(g, 450, z.oracle);
  const oracle = wrap(g, `“${card.oracle}”`, width).slice(0, 2);
  const lastOracle = H - (story ? 64 : 36) - z.gap;
  const firstOracle = lastOracle - (oracle.length - 1) * z.lh;
  const ruleY = firstOracle - z.oracle - z.lh * .55;
  const titleY = ruleY - z.title * .95;
  const nameY = titleY - z.title * 1.55;
  const houseY = nameY - z.name * 1.08;
  const figure = { x: 0, y: rule + 4, w: W, h: houseY - z.house - (story ? 36 : 22) - rule - 4, fit: story ? { widthShare: .86, heightShare: .86, bottomPad: .02 } : { widthShare: .70, heightShare: .88, bottomPad: .02 } };
  const glow = g.createRadialGradient(W / 2, figure.y + figure.h * .64, 0, W / 2, figure.y + figure.h * .64, W * .55);
  glow.addColorStop(0, TH.glow); glow.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = glow; g.fillRect(0, figure.y, W, figure.h);
  // The ribbon runs up out of the figure; the rule above it reads as the edge of the picture.
  g.save(); g.beginPath(); g.rect(figure.x, figure.y, figure.w, figure.h); g.clip();
  const fit = renderFigure(figure);
  g.restore();
  g.fillStyle = TH.rule; g.fillRect(M, rule, W - 2 * M, 2);
  g.textAlign = 'left';
  g.fillStyle = TH.part; fitText(g, `${card.house} 가문`, M, houseY, width, z.house, 600);
  g.fillStyle = TH.ink; fitText(g, card.name, M, nameY, width, z.name, 760);
  fitText(g, card.title, M, titleY, width, z.title, 500);
  g.fillStyle = TH.rule; g.fillRect(M, ruleY, 120, 3);
  g.fillStyle = TH.ink; font(g, 450, z.oracle);
  oracle.forEach((line, i) => g.fillText(line, M, firstOracle + i * z.lh));
  address(g, W, H, story);
  return fit;
}

// Page 2. The record numbers in the evidence give way to their hiddenText when hideNumbers.
export async function drawAnalysis(g, kind, card, hideNumbers) {
  await fontsFor(card);
  const [W, H] = SHARE_SIZES[kind], story = kind === 'story', width = W - 2 * M;
  // Laid out top-down at scale s; the scale shrinks until the page ends above the footnote and the address.
  const page = (s, draw) => {
    const put = (fn) => { if (draw) fn(); };
    let y = (story ? 186 : 140) + 100 * s;
    put(() => { g.textAlign = 'left'; g.fillStyle = TH.part; fitText(g, `${card.house} 가문`, M, y, width, 32 * s, 600); });
    y += 100 * s;
    put(() => { g.fillStyle = TH.ink; fitText(g, card.name, M, y, width, 92 * s, 760); });
    y += 62 * s;
    put(() => { g.fillStyle = TH.ink; fitText(g, card.title, M, y, width, 40 * s, 500); });
    // The three scores: label, a 0–100 bar, the integer. The lead score (판정에 가장 크게 기여한 축) in the accent.
    y += 84 * s;
    put(() => { g.fillStyle = TH.muted; fitText(g, '세 점수', M, y, width, 30 * s, 550); });
    y += 26 * s;
    for (const score of card.scores) {
      const rowTop = y, c = score.lead ? TH.part : TH.ink;
      put(() => {
        g.fillStyle = TH.rule; g.fillRect(M, rowTop, width, 2);
        g.textAlign = 'left'; g.fillStyle = c; font(g, 550, 38 * s); g.fillText(score.label, M, rowTop + 58 * s);
        if (score.lead) { const lw = g.measureText(score.label).width; g.fillStyle = TH.muted; font(g, 450, 26 * s); g.fillText('대표 수치', M + lw + 16 * s, rowTop + 58 * s); }
        const barW = width - 190 * s, by = rowTop + 80 * s;
        g.fillStyle = TH.track; g.fillRect(M, by, barW, 8 * s);
        g.fillStyle = c; g.fillRect(M, by, barW * Math.max(0, Math.min(100, score.value)) / 100, 8 * s);
        g.textAlign = 'right'; g.fillStyle = c; font(g, 700, 92 * s, 'StudyCondensed, sans-serif'); g.fillText(String(score.value), W - M, rowTop + 92 * s);
      });
      y += 112 * s;
    }
    // Evidence: the two records this figure came from.
    y += 70 * s;
    put(() => { g.textAlign = 'left'; g.fillStyle = TH.muted; fitText(g, '이 인물이 된 기록', M, y, width, 30 * s, 550); });
    card.evidence.forEach((e, i) => {
      y += 66 * s;
      put(() => {
        g.textAlign = 'left'; g.fillStyle = TH.part; font(g, 700, 40 * s, 'StudyCondensed, sans-serif'); g.fillText(`0${i + 1}`, M, y);
        g.fillStyle = TH.ink; fitText(g, hideNumbers ? e.hiddenText : e.text, M + 76 * s, y, width - 76 * s, 40 * s, 600);
      });
    });
    // Strength, watch-out, the next 14 days.
    y += 40 * s;
    for (const [label, text, accent] of [['강점', card.strength], ['놓치기 쉬운 것', card.watchout], ['다음 14일, 한 가지', card.next, true]]) {
      y += 70 * s;
      const at = y;
      put(() => { g.textAlign = 'left'; g.fillStyle = accent ? TH.part : TH.muted; fitText(g, label, M, at, width, 28 * s, 550); });
      font(g, 450, 38 * s);
      for (const line of wrap(g, text, width)) {
        y += 54 * s;
        const ly = y;
        put(() => { g.fillStyle = TH.ink; font(g, 450, 38 * s); g.fillText(line, M, ly); });
      }
    }
    return y;
  };
  // Footnote (what 회복 여유 is) and the address sit at the bottom.
  const noteSize = story ? 26 : 23, noteLh = noteSize * 1.45;
  font(g, 450, noteSize);
  const note = wrap(g, card.recoveryNote, width);
  const noteTop = H - (story ? 64 : 36) - 54 - (note.length - 1) * noteLh;
  let s = story ? 1 : .8;
  while (s > .6 && page(s, false) > noteTop - noteSize - 40) s -= .02;
  g.fillStyle = TH.bg; g.fillRect(0, 0, W, H);
  masthead(g, W, story);
  page(s, true);
  g.fillStyle = TH.rule; g.fillRect(M, noteTop - noteSize - 22, width, 2);
  g.textAlign = 'left'; g.fillStyle = TH.muted; font(g, 450, noteSize);
  note.forEach((line, i) => g.fillText(line, M, noteTop + i * noteLh));
  address(g, W, H, story);
}
