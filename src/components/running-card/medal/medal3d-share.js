// Share images (S4, D6): two pages drawn straight onto a canvas, in M3's grammar (ink page, masthead, allrunabout.com
// bottom right). 1 = the cover: the medal with its struck plate, then the house, the figure, the epithet and the oracle —
// or, when the figure has a picture (S5-D), the picture over the whole page with the medal small beside the name.
// 2 = the analysis page: the three scores, the two pieces of evidence, strength, watch-out, the next 14 days, and what
// 회복 여유 is not. The medal itself is drawn by the caller (a front-on WebGL render, or the flat drawing); this file only
// lays out the page around it.
// card (running-card-result.tsx): { house, name, title, oracle, scores: [{ label, value, lead }], evidence: [{ text,
// hiddenText }], strength, watchout, next, leadTag, recoveryNote, image? }. Nothing about where the numbers came from (예시·입력 경로·
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
  const text = [card.house, card.name, card.title, card.oracle, card.strength, card.watchout, card.next, card.leadTag, card.recoveryNote,
    ...card.evidence.flatMap(e => [e.text, e.hiddenText]), ...card.scores.map(s => s.label), '가문 세 점수 이 인물이 된 기록 강점 놓치기 쉬운 것 다음 14일, 한 가지 “”', extra].join(' ');
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

// The words of page 1, from the bottom up (so the medal takes what is left): the oracle (two lines at most), a short
// rule, the epithet, the name, the house.
function coverWords(g, H, story, card, width) {
  const z = story ? { oracle: 46, lh: 64, title: 44, name: 128, house: 34, gap: 92 } : { oracle: 36, lh: 50, title: 36, name: 96, house: 28, gap: 70 };
  font(g, 450, z.oracle);
  const oracle = wrap(g, `“${card.oracle}”`, width).slice(0, 2);
  const lastOracle = H - (story ? 64 : 36) - z.gap;
  const firstOracle = lastOracle - (oracle.length - 1) * z.lh;
  const ruleY = firstOracle - z.oracle - z.lh * .55;
  const titleY = ruleY - z.title * .95;
  const nameY = titleY - z.title * 1.55;
  const houseY = nameY - z.name * 1.08;
  return { z, oracle, firstOracle, ruleY, titleY, nameY, houseY };
}
// nameWidth: the house and the name give way to the medal beside them on the picture cover.
function drawWords(g, card, L, width, nameWidth = width) {
  g.textAlign = 'left';
  g.fillStyle = TH.part; fitText(g, `${card.house} 가문`, M, L.houseY, nameWidth, L.z.house, 600);
  g.fillStyle = TH.ink; fitText(g, card.name, M, L.nameY, nameWidth, L.z.name, 760);
  fitText(g, card.title, M, L.titleY, width, L.z.title, 500);
  g.fillStyle = TH.rule; g.fillRect(M, L.ruleY, 120, 3);
  g.fillStyle = TH.ink; font(g, 450, L.z.oracle);
  L.oracle.forEach((line, i) => g.fillText(line, M, L.firstOracle + i * L.z.lh));
}

const AI_LABEL = 'AI 생성 이미지';
const loadPicture = src => new Promise(resolve => { const img = new Image(); img.onload = () => resolve(img); img.onerror = () => resolve(null); img.src = src; });

// Page 1. renderFigure(fig, target?) draws the medal into fig ({ x, y, w, h, fit }) on target (default: the page) and
// returns its fit. With the figure's picture (card.image, S5-D) the page is the picture with the medal on it; without one
// (the 14 held back for their marks), or if it does not load, the page is the medal cover.
export async function drawCover(g, kind, card, renderFigure) {
  const [picture] = await Promise.all([card.image ? loadPicture(card.image) : null, fontsFor(card, AI_LABEL)]);
  const [W, H] = SHARE_SIZES[kind], story = kind === 'story', width = W - 2 * M;
  if (picture) return pictureCover(g, W, H, story, width, card, renderFigure, picture);
  g.fillStyle = TH.bg; g.fillRect(0, 0, W, H);
  const rule = masthead(g, W, story);
  const L = coverWords(g, H, story, card, width);
  const figure = { x: 0, y: rule + 4, w: W, h: L.houseY - L.z.house - (story ? 36 : 22) - rule - 4, fit: story ? { widthShare: .86, heightShare: .86, bottomPad: .02 } : { widthShare: .70, heightShare: .88, bottomPad: .02 } };
  const glow = g.createRadialGradient(W / 2, figure.y + figure.h * .64, 0, W / 2, figure.y + figure.h * .64, W * .55);
  glow.addColorStop(0, TH.glow); glow.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = glow; g.fillRect(0, figure.y, W, figure.h);
  // The ribbon runs up out of the figure; the rule above it reads as the edge of the picture.
  g.save(); g.beginPath(); g.rect(figure.x, figure.y, figure.w, figure.h); g.clip();
  const fit = renderFigure(figure);
  g.restore();
  g.fillStyle = TH.rule; g.fillRect(M, rule, W - 2 * M, 2);
  drawWords(g, card, L, width);
  address(g, W, H, story);
  return fit;
}

// Page 1 with the picture (운영자 결정 2026-10-07): the picture covers the page, shaded under the masthead and down into
// the words; the medal stands small at the right beside the house and the name, its ribbon fading into the picture.
// The picture says 'AI 생성 이미지', as on the result card.
function pictureCover(g, W, H, story, width, card, renderFigure, picture) {
  // A story page (9:16, as the picture) shows it whole. A feed page (4:5) cuts it: the head (imageFocus, its height in the
  // picture) goes to 36% of the page, as far as the picture reaches — heads sit anywhere from 13% to 44% of the pictures.
  const s = Math.max(W / picture.naturalWidth, H / picture.naturalHeight), pw = picture.naturalWidth * s, ph = picture.naturalHeight * s;
  const py = Math.min(0, Math.max(H - ph, H * .36 - (card.imageFocus ?? .3) * ph));
  g.fillStyle = TH.bg; g.fillRect(0, 0, W, H);
  g.imageSmoothingEnabled = true; g.imageSmoothingQuality = 'high';
  g.drawImage(picture, (W - pw) / 2, py, pw, ph);
  const L = coverWords(g, H, story, card, width), wordsTop = L.houseY - L.z.house;
  const topShade = story ? 360 : 300, top = g.createLinearGradient(0, 0, 0, topShade);
  top.addColorStop(0, 'rgba(23,21,15,.62)'); top.addColorStop(1, 'rgba(23,21,15,0)');
  g.fillStyle = top; g.fillRect(0, 0, W, topShade);
  const from = wordsTop - (story ? 520 : 400), low = g.createLinearGradient(0, from, 0, H);
  low.addColorStop(0, 'rgba(23,21,15,0)');
  low.addColorStop((wordsTop - 40 - from) / (H - from), 'rgba(23,21,15,.88)');
  low.addColorStop(1, 'rgba(23,21,15,.96)');
  g.fillStyle = low; g.fillRect(0, from, W, H - from);
  const rule = masthead(g, W, story);
  // The label on a dark pill under the masthead, right.
  const ls = story ? 28 : 24, padX = ls * .6, padY = ls * .38;
  font(g, 500, ls); g.textAlign = 'right'; g.textBaseline = 'alphabetic';
  const lw = g.measureText(AI_LABEL).width, ly = rule + (story ? 36 : 28);
  g.fillStyle = 'rgba(23,21,15,.58)'; g.beginPath();
  if (g.roundRect) g.roundRect(W - M - lw - 2 * padX, ly, lw + 2 * padX, ls + 2 * padY, (ls + 2 * padY) / 2); else g.rect(W - M - lw - 2 * padX, ly, lw + 2 * padX, ls + 2 * padY);
  g.fill();
  g.fillStyle = 'rgba(247,244,237,.86)'; g.fillText(AI_LABEL, W - M - padX, ly + padY + ls * .86);
  // The medal on its own transparent canvas (both renders leave the background clear), the top of the ribbon faded out,
  // then set on the page with a soft shadow. Its foot sits on the name's line.
  const mw = story ? 400 : 340, mh = Math.round(mw * 1.35), off = document.createElement('canvas');
  off.width = mw; off.height = mh;
  const o = off.getContext('2d');
  const fit = renderFigure({ x: 0, y: 0, w: mw, h: mh, fit: { widthShare: .98, heightShare: .74, bottomPad: .01 } }, o);
  o.globalCompositeOperation = 'destination-in';
  const fade = o.createLinearGradient(0, 0, 0, mh * .3);
  fade.addColorStop(0, 'rgba(0,0,0,0)'); fade.addColorStop(1, '#000');
  o.fillStyle = fade; o.fillRect(0, 0, mw, mh);
  g.save(); g.shadowColor = 'rgba(0,0,0,.5)'; g.shadowBlur = 36; g.shadowOffsetY = 10;
  g.drawImage(off, W - M - mw, L.nameY + (story ? 14 : 10) - mh);
  g.restore();
  drawWords(g, card, L, width, width - fit.medalWidth - 32);
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
    // The three scores: label, a 0–100 bar, the integer. The lead score (the axis the figure's target puts highest) in the accent, with leadTag.
    y += 84 * s;
    put(() => { g.fillStyle = TH.muted; fitText(g, '세 점수', M, y, width, 30 * s, 550); });
    y += 26 * s;
    for (const score of card.scores) {
      const rowTop = y, c = score.lead ? TH.part : TH.ink;
      put(() => {
        g.fillStyle = TH.rule; g.fillRect(M, rowTop, width, 2);
        g.textAlign = 'left'; g.fillStyle = c; font(g, 550, 38 * s); g.fillText(score.label, M, rowTop + 58 * s);
        if (score.lead) { const lw = g.measureText(score.label).width; g.fillStyle = TH.muted; font(g, 450, 26 * s); g.fillText(card.leadTag, M + lw + 16 * s, rowTop + 58 * s); }
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
