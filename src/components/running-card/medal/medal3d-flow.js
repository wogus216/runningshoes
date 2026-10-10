// 3D-2 — the input flow of medal-flow.html on the 3D-1 medal: one coin of the seven-coin ring per step.
//   · Every place starts as an empty socket with its step number (01 … 07) on the floor.
//   · The open step's coin hovers over its socket and its relief follows the entry — a 256 face while the ruler or the
//     keypad is moving, then 512 and a fine face once the hand stops. Faces are built in Web Workers (OffscreenCanvas);
//     where a worker cannot draw the study fonts, on this thread.
//   · Next drops the coin into its socket and strikes it: the relief's normal strength, polish contrast, clear coat and
//     real height (a displacement map on a dense face mesh) rise to full in one move. No map is rebuilt for it. A value
//     left as the sample drops a blank — a coin with no relief.
//   · The camera stays close to the open coin (about 260px across on a 390×844 screen, its neighbours and the ring cut by
//     the edges), glides to the next place, and pulls back to the whole medal and its ribbon at the end.
// 3D-3: the step bar is the seven places in small (syncNav); after a strike the camera looks at the whole medal for a
// moment on its way to the next place (PEEK; any input cuts it short; ?peek=0 or the review switch turns it off); a
// seated coin whose face depends on another step (04 on 01) is struck again with its new face (restrike).
// Layers as in 3D-1: body medal3d-body.js · relief medal3d-relief.js · share layout medal3d-share.js. The input logic is
// medal-flow.js's (questions, keypad, ruler, checks, samples, navigation), copied, with the medal drawing replaced.
// Site port (S2): the study page's script as one mount. mountMedalFlow(container) writes the page into the container,
// binds it, and returns destroy(), which stops the frame loop, the workers and the timers, removes the document
// listeners, frees the WebGL objects and the context, and empties the container. The study's review tools (panel,
// ?nogl/?worker=0/… switches, window.__medal3dFlow and its timings) are left out; the medal and the input are the same.
import * as Relief from './medal3d-relief.js';
import { proceduralBody, strap, coinAt, faceGeometry, BOUNDS } from './medal3d-body.js';
import { drawCover, drawAnalysis, SHARE_SIZES } from './medal3d-share.js';
import * as Ruler from './ruler.js';
import { MARKUP } from './medal3d-flow-markup.js';

// The body of mountMedalFlow is the study script, kept at its own indentation so it diffs line for line against ad6d632.
// judge({ values, origins, raceGoal }) → { ok: true, analysis, title, … } | { ok: false, reason: 'sample' | 'invalid', fields }
// (running-card-medal.tsx: snapshotFromFlowInput → analyzeRunner, title = the figure's epithet). Called after 07; the
// analysis stays in this mount.
// S4: onReveal(verdict) when the title turns to the figure (the result card opens under the medal), onReveal(null) when
// the finished medal is left; onOpenResult() from '분석 펼쳐보기'. Returns { destroy, shareImage } (the result card's
// share buttons call shareImage).
// S5: onStep(n) when step n (1 … 7) is accepted and its coin struck — the measurement events live in React.
// S6: figures ({ id, house, name } of every figure) — the names the reveal shuffles through before the plate is struck.
export function mountMedalFlow(container, { judge, onReveal, onOpenResult, onStep, onFinishChange, figures = [] }) {
container.innerHTML = MARKUP;
let destroyed = false, observer = null;

const $ = selector => container.querySelector(selector);
const $$ = selector => Array.from(container.querySelectorAll(selector));

// ==== input flow (medal-flow.js) ======================================================================================
const root = $('.journey'), measure = document.createElement('canvas').getContext('2d');
const numeric = $('#record-value'), minutes = $('#pace-minutes'), seconds = $('#pace-seconds');
const heading = $('#scene-heading');
const timeInputs = { h: $('#time-hours'), m: $('#time-minutes'), s: $('#time-seconds') };
const paceMode = $('#pace-mode'), derived = $('#field-derived');
let timeMode = false;
const error = $('#field-error'), form = $('#record-form');
// Same order as the coins (Relief.KEYS): 1 시 방향부터 시계 방향.
const scenes = ['distance', 'count', 'pace', 'longest', 'hard', 'goal', 'days'];
const last = scenes.length - 1, done = scenes.length;
// Only the four record numbers start as visible samples. Hard training and goal are required and start empty.
const sample = () => ({ distance: '150', count: '8', minutes: '5', seconds: '30', longest: '30', hard: null, goal: null, days: [] });
const sampleOrigins = () => ({ distance: 'sample', count: 'sample', pace: 'sample', longest: 'sample', hard: 'empty', goal: 'empty', days: 'empty' });
let values = sample(), stage = 0, furthest = 0, touched = false, complete = false;
let origins = sampleOrigins();
let width = 390, height = 844;
let keyboard = false;
// S6 reveal (see 'reveal' below): declared up here because changeStage() and destroy() stop it.
const reveal = { on: false, played: false, t0: 0, timers: [], raf: 0, last: 0, shuffleRaf: 0, landed: false, sparks: [], names: [], shown: -1, nextSwap: 0, ctx: null, scale: 1 };
const view = { zoom: 1 };
const mediaReduce = matchMedia('(prefers-reduced-motion: reduce)');
const reduced = () => mediaReduce.matches;
const clamp = (n, low, high) => Math.max(low, Math.min(high, n));
const lerp = (a, b, t) => a + (b - a) * t;
const value = key => Number.isFinite(Number(values[key])) ? Number(values[key]) : 0;
const safe = key => Math.max(0, value(key));
const format = n => n.toLocaleString('ko-KR', { maximumFractionDigits: 2 });
const animations = new Set();
const copy = [
  ['DISTANCE / 01', '지난 28일 동안,<br>얼마나 달렸나요?', '28일 총거리', 'km', '다음: 러닝 횟수', '숫자를 누르거나 눈금자를 밀어 조절하세요.'],
  ['REPETITION / 02', '지난 28일 동안,<br>몇 번 달렸나요?', '러닝 횟수', '회', '다음: 평균 페이스', '하루에 두 번 달렸다면 2회로 세요.'],
  ['TEMPO / 03', '지난 28일 동안,<br>평균 페이스는?', '평균 페이스', '', '다음: 최장거리', '1km를 달리는 데 걸린 평균 시간이에요.'],
  ['FARTHEST / 04', '지난 28일 중,<br>가장 멀리 달린 날은?', '최장거리', 'km', '다음: 강한 훈련', '한 번의 러닝에서 달린 가장 긴 거리예요.'],
  ['INTENSITY / 05', '지난 28일 중,<br>강하게 달린 건 몇 번?', '강한 훈련 횟수', '회', '다음: 목표', '없었다면 0회를 고르세요.', '인터벌·템포·레이스처럼 숨이 찬 러닝을 세요.'],
  ['PURPOSE / 06', '지금 러닝의<br>가장 큰 목표는?', '목표', '', '다음: 요일', '고르면 동전의 상징이 바뀌어요.'],
  ['WEEKDAYS / 07', '평소 어느 요일에<br>달리나요?', '평소 러닝 요일', '', '메달 보기', '선택 항목이에요. 주로 달리는 요일을 고르면 그 간격으로 회복 여유를 계산해요.'],
];
// Goal keys match the engine (habit/endurance/record/race/health_fun). The second name is the emblem on coin 06.
const goals = { habit: ['습관', '감긴 고리'], endurance: ['지구력', '두 봉우리'], record: ['기록', '스톱워치'], race: ['대회', '결승 아치'], health_fun: ['건강과 재미', '∞ 고리'] };
const dayNames = ['월', '화', '수', '목', '금', '토', '일'];
const dayList = () => values.days.map(d => dayNames[d]).join('·');
const hardText = () => values.hard === 6 ? '6회 이상' : `${values.hard}회`;
const paceLabel = () => `${value('minutes')}:${String(value('seconds')).padStart(2, '0')}`;

// Same contract as RecordsStep. Empty required fields stay empty, never receive sample defaults.
function validation(index) {
  const key = scenes[index];
  if (index === 4) {
    if (values.hard === null) return '강한 훈련 횟수를 골라 주세요. 없었다면 0회예요.';
    // 6 stands for "6회 이상", so it needs at least six runs.
    if (values.hard > safe('count')) return `러닝 횟수가 ${format(value('count'))}회라 그보다 많이 고를 수 없어요. 다시 골라 주세요.`;
    return '';
  }
  if (index === 5) return values.goal ? '' : '목표를 하나 골라 주세요.';
  if (index === 6) return '';
  if (index === 2 && timeMode) return timeValidation();
  if (index === 2) {
    if (!values.minutes.trim() || !values.seconds.trim()) return '분과 초를 모두 입력해 주세요. 0초도 적어주세요.';
    if (!/^\d+$/.test(values.minutes) || value('minutes') < 2 || value('minutes') > 12) return '분은 2부터 12까지 입력해 주세요.';
    if (!/^\d+$/.test(values.seconds) || value('seconds') > 59) return '초는 0부터 59까지 입력해 주세요.';
    return '';
  }
  if (!values[key].trim()) return `${copy[index][2]}를 입력해 주세요.`;
  if (!/^(?:\d+(?:\.\d*)?|\.\d+)$/.test(values[key]) || !Number.isFinite(Number(values[key]))) return '올바른 숫자로 입력해 주세요.';
  if (index === 1 && (!Number.isInteger(value('count')) || value('count') < 1)) return '러닝 횟수는 1회 이상의 정수로 입력해 주세요.';
  if (value(key) <= 0) return `${copy[index][2]}는 0보다 커야 해요.`;
  if (index === 3 && value('longest') > value('distance')) return `최장거리는 총거리 ${format(value('distance'))}km 이하여야 해요.`;
  // The longest single run can never be shorter than the mean run. 0.05km absorbs decimal entry noise.
  if (index === 3 && value('longest') < value('distance') / value('count') - .05) {
    return value('count') === 1 ? '1회만 달렸다면 최장거리는 총거리와 같아요.' : `가장 긴 한 번은 평균 한 번(${format(Math.round(value('distance') / value('count') * 10) / 10)}km)보다 짧을 수 없어요.`;
  }
  return '';
}
// Total-time entry: pace = total time / total distance, then the usual 2:00-12:59 range applies to that result.
const timeSeconds = () => Number(timeInputs.h.value || 0) * 3600 + Number(timeInputs.m.value || 0) * 60 + Number(timeInputs.s.value || 0);
function timeValidation() {
  const { h, m, s } = timeInputs;
  if (!h.value.trim() || !m.value.trim()) return '시간과 분을 모두 입력해 주세요. 0도 적어주세요.';
  if (![h, m, s].every(el => /^\d*$/.test(el.value.trim()))) return '시간·분·초는 정수로 입력해 주세요.';
  if (Number(m.value) > 59 || Number(s.value) > 59) return '분과 초는 0부터 59까지 입력해 주세요.';
  if (timeSeconds() <= 0) return '총 시간은 0보다 커야 해요.';
  if (validation(0)) return '먼저 총거리를 올바르게 입력해 주세요.';
  const pace = Math.round(timeSeconds() / value('distance'));
  if (pace < 120) return `계산된 페이스가 ${paceText(pace)}/km예요. 1km당 2분 이상이 되도록 입력해 주세요.`;
  if (pace >= 780) return '계산된 페이스가 1km당 12분을 넘어요. 총 시간을 다시 확인해 주세요.';
  return '';
}
const paceText = sec => `${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, '0')}`;
// Soft check: odd but possible values get one confirmation press, never a block.
function outlier(index) {
  const average = value('distance') / Math.max(value('count'), 1), parts = [];
  if (index === 1 && average > 60) parts.push(`한 번 평균 ${format(Math.round(average * 10) / 10)}km예요.`);
  if (index === 1 && value('count') > 56) parts.push(`28일에 ${format(value('count'))}회예요.`);
  if (index === 2 && value('minutes') * 60 + value('seconds') < 170) parts.push(`평균 페이스 ${paceLabel()}/km예요.`);
  return parts.length ? `${parts.join(' ')} 맞다면 한 번 더 눌러 주세요.` : '';
}
let noteShown = '';
// A note takes the place of the hint and the derived line, so the panel never grows over the coin.
function setNote(text) { noteShown = text; $('#field-note').textContent = text; $('#interaction').classList.toggle('has-note', !!text); }
const clearNote = () => setNote('');
function sampleItems() {
  const text = [`총거리 ${format(value('distance'))}km`, `러닝 횟수 ${format(value('count'))}회`, `페이스 ${paceLabel()}/km`, `최장거리 ${format(value('longest'))}km`];
  return scenes.slice(0, 4).map((key, i) => origins[key] === 'sample' ? { index: i, text: text[i] } : null).filter(Boolean);
}
function hideConfirm() { $('#sample-confirm').hidden = true; root.classList.remove('confirming'); }
function showConfirm(items) {
  $('#sample-confirm-text').textContent = `${items.map(item => item.text).join(', ')}는 예시값 그대로예요. 내 기록이 맞으면 이 숫자로 새기고 판정해요.`;
  $('#sample-confirm').hidden = false; root.classList.add('confirming');
  $('#sample-confirm-text').focus({ preventScroll: true });
}
// The coin shows the last valid value of each record, so a half-typed number never jumps the relief around.
const shown = { distance: 150, count: 8, pace: 330, longest: 30 };
function trackShown() {
  if (!validation(0)) shown.distance = value('distance');
  if (/^\d+$/.test(values.count.trim()) && value('count') >= 1) shown.count = value('count');
  if (/^\d+$/.test(values.minutes) && /^\d+$/.test(values.seconds) && value('minutes') >= 2 && value('minutes') <= 12 && value('seconds') <= 59) shown.pace = value('minutes') * 60 + value('seconds');
  if (value('longest') > 0 && value('longest') <= value('distance')) shown.longest = value('longest');
}
function showError(force = false) {
  const message = (touched || force) ? validation(stage) : '';
  error.textContent = message;
  $('#interaction').classList.toggle('has-error', !!message);
  [numeric, minutes, seconds, ...Object.values(timeInputs)].forEach(el => el.setAttribute('aria-invalid', String(!!message && !el.closest('[hidden]'))));
  return !validation(stage);
}
function animate(el, frames, duration = 400, delay = 0) {
  if (reduced() || keyboard) return;
  const animation = el.animate(frames, { duration, delay, fill: 'backwards', easing: 'cubic-bezier(.16,1,.3,1)' });
  animations.add(animation);
  animation.finished.catch(() => {}).finally(() => animations.delete(animation));
}
// A strike already under way keeps going: it belongs to the step just left.
function stopMotion() { animations.forEach(a => a.cancel()); }

function fitNumber() {
  // Fit the actual font metrics, including 500 and long decimals, without animating font-size.
  // The count row also carries the − and ＋1회 buttons beside the number.
  // 01 and 04 carry the ruler under the number, so their number is a little smaller to keep the panel clear of the coin.
  const ruled = stage === 0 || stage === 3;
  const base = Math.min(width * .235, 92) * (height < 700 ? (ruled ? .66 : .72) : (ruled ? .88 : 1) * (height <= 780 ? .91 : 1));
  const available = stage === 1 ? width - 48 - 176 : (width - 48) * .79;
  measure.font = `700 ${base}px StudyCondensed`;
  const measured = measure.measureText(numeric.value || '0').width;
  const size = Math.max(24, Math.min(base, base * available / Math.max(measured + 8, 1)));
  numeric.style.fontSize = `${size}px`;
  numeric.style.width = `${Math.min(available, Math.max(size * .65, measured * size / base + 9))}px`;
}
function updateControl() {
  const longest = stage === 3;
  $('#ruler').hidden = stage !== 0 && !longest;
  if (stage !== 0 && !longest) return;
  ruler.setRange(0, longest ? safe('distance') : Math.max(500, safe('distance')));
  ruler.set(safe(longest ? 'longest' : 'distance'));
  ruler.setLabel(longest ? '눈금자로 최장거리 조절' : '눈금자로 총거리 조절');
}
// Derived lines use only what the runner already entered; hidden while the current input is invalid.
const tenth = n => format(Math.round(n * 10) / 10);
const halfKm = 21.0975, fullKm = 42.195;
function derivedText() {
  if (stage === 4) {
    if (validation(4)) return '';
    return values.hard === 0 ? `강한 훈련 없이 러닝 ${format(value('count'))}회` : `러닝 ${format(value('count'))}회 중 ${hardText()}`;
  }
  if (stage === 5) return values.goal ? `목표 동전 · ${goals[values.goal][1]}${wantsRace() && raceGoal ? ` · ${raceText(raceGoal)}` : ''}` : '';
  if (stage === 6) return values.days.length ? `${dayList()} · 주 ${values.days.length}일` : '';
  if (stage === 0 || validation(stage) || validation(0)) return '';
  const distance = value('distance');
  if (stage === 1) return `한 번에 평균 ${tenth(distance / value('count'))}km`;
  if (stage === 2) {
    if (timeMode) return `계산된 페이스 ${paceText(Math.round(timeSeconds() / distance))}/km`;
    const total = Math.round(distance * (value('minutes') * 60 + value('seconds')) / 60), h = Math.floor(total / 60), m = total % 60;
    return `총 ${h ? `${h}시간` : ''}${h && m ? ' ' : ''}${m || !h ? `${m}분` : ''}`;
  }
  const share = value('longest') / distance * 100;
  const text = `총거리의 ${share >= 10 ? Math.round(share) : tenth(share)}%`;
  // Defined distances: half 21.0975 km, full 42.195 km.
  return value('longest') > fullKm ? `${text} · 풀코스 거리를 넘었어요` : value('longest') > halfKm ? `${text} · 하프 거리를 넘었어요` : text;
}
// 07: more days than the runs make in a week (round(runs ÷ 4)) read as a shorter rest between runs. A line, never a block.
const daysOver = () => values.days.length > Math.round(safe('count') / 4);
function updateHint() {
  derived.textContent = derivedText();
  const over = stage === 6 && daysOver();
  $('#field-hint').classList.toggle('is-warn', over);
  if (stage >= 4) {
    $('#field-hint').textContent = stage === 4 && safe('count') < 6 ? `러닝 ${format(value('count'))}회보다 많은 선택지는 고를 수 없어요.`
      : over ? `28일 동안 ${format(value('count'))}회면 주 ${tenth(value('count') / 4)}회꼴이에요. 가끔 달린 요일은 빼고 주로 달리는 요일만 골라 주세요.`
      : copy[stage][5];
    $('#next-label').textContent = stage === last && !values.days.length ? '요일은 건너뛸게요' : copy[stage][4];
    return;
  }
  const isSample = origins[scenes[stage]] === 'sample';
  const instruction = stage === 2 ? (timeMode ? '시간·분을 눌러 입력' : '분·초를 눌러 입력') : '숫자를 눌러 입력';
  $('#record-label').innerHTML = `${stage === 2 && timeMode ? '28일 총 시간' : copy[stage][2]} <span>${isSample ? '예시 · ' : ''}${instruction}</span>`;
  $('#field-hint').textContent = stage === 1 && value('count') > DOT_CAP ? `동전의 점은 ${DOT_CAP}개까지만 새겨요. 횟수는 입력값 그대로예요.` : copy[stage][5];
  const submittedValue = stage === 2 ? `${value('minutes')}분 ${value('seconds')}초` : `${format(value(scenes[stage]))}${stage === 1 ? '회' : 'km'}`;
  $('#next-label').textContent = isSample ? `예시 ${submittedValue}로 다음` : copy[stage][4];
}
// Choice controls mirror values; an option above the run count is disabled, and a stale choice stays visible with its error.
function syncChoices() {
  $$('input[name=hard]').forEach(radio => { const n = Number(radio.value); radio.checked = values.hard === n; radio.disabled = n > safe('count'); });
  $$('input[name=goal]').forEach(radio => { radio.checked = values.goal === radio.value; });
  $$('[data-day]').forEach(button => button.setAttribute('aria-pressed', String(values.days.includes(Number(button.dataset.day)))));
}
function paceToTime() {
  // Prefill from the current pace x distance so switching modes shows the same run.
  const ok = !validation(0) && !(!/^\d+$/.test(values.minutes) || !/^\d+$/.test(values.seconds));
  const total = ok ? Math.round(value('distance') * (value('minutes') * 60 + value('seconds'))) : NaN;
  const fill = (el, n) => { el.value = Number.isFinite(n) ? String(n) : ''; };
  fill(timeInputs.h, Math.floor(total / 3600)); fill(timeInputs.m, Math.floor(total % 3600 / 60)); fill(timeInputs.s, total % 60);
}
function setTimeMode(on) {
  timeMode = on && stage === 2 && !validation(0);
  if (timeMode) paceToTime();
  paceMode.setAttribute('aria-pressed', String(timeMode));
  $('.pace-fields').hidden = stage !== 2 || timeMode; $('.time-fields').hidden = !timeMode;
  $('#record-label').setAttribute('for', stage === 2 ? (timeMode ? 'time-hours' : 'pace-minutes') : 'record-value');
  paceMode.hidden = stage !== 2; paceMode.disabled = !!validation(0);
}
function syncInputs() {
  numeric.value = stage < 4 ? values[scenes[stage]] || '' : '';
  minutes.value = values.minutes; seconds.value = values.seconds;
  hideConfirm(); trackShown(); clearNote(); syncChoices(); fitNumber(); updateControl(); updateHint(); showError();
}
const choiceFields = { 4: '#hard-fields', 5: '#goal-fields', 6: '#day-fields' };
function changeStage(next, instant = false) {
  const left = complete ? -1 : stage;
  // Leaving the finished medal closes the result card: it belongs to the record as it was judged.
  if (left === -1) onReveal(null);
  stopMotion(); stopReveal(); stage = next; complete = false; touched = false; hideConfirm(); settlePlate();
  if (stage === 3 && origins.longest === 'sample') {
    values.longest = String(Math.min(value('distance'), Math.max(30, Math.ceil(value('distance') / value('count') * 10) / 10)));
  }
  $('.chapters').classList.remove('is-done');
  root.dataset.scene = scenes[stage];
  $('.complete').hidden = true;
  const text = copy[stage];
  $('#chapter-name').textContent = text[0]; heading.innerHTML = text[1];
  $('#scene-def').textContent = text[6] || ''; $('#scene-def').hidden = !text[6];
  $('#unit').textContent = text[3];
  $('#record').hidden = stage >= 4;
  Object.entries(choiceFields).forEach(([index, selector]) => { $(selector).hidden = Number(index) !== stage; });
  $('#number-row').hidden = stage === 2; setTimeMode(false); syncRaceToggle();
  $$('.count-step').forEach(button => { button.hidden = stage !== 1; });
  numeric.inputMode = stage === 1 ? 'numeric' : 'decimal';
  numeric.setAttribute('aria-label', text[2]);
  $('#previous').disabled = stage === 0;
  $$('[data-go]').forEach((button, index) => {
    button.disabled = index > furthest;
    if (index === stage) button.setAttribute('aria-current', 'step'); else button.removeAttribute('aria-current');
  });
  syncInputs();
  // Arriving at a dependent step after editing earlier values: show the conflict before the next press.
  if ((stage === 3 || (stage === 4 && values.hard !== null)) && validation(stage)) { touched = true; showError(true); }
  $('#gl').tabIndex = -1;
  commit(left);
  // Just struck (Next): the camera waits for the impact before it moves on.
  go({ instant, afterStrike: !instant && lastStrikeAt > performance.now() - 120 });
  syncNav();
  if (!instant) {
    animate($('.scene-intro'), [{ opacity: .2, transform: 'translateY(5px)' }, { opacity: 1, transform: 'translateY(0)' }], 320);
    if (choiceFields[stage]) animate($(choiceFields[stage]), [{ opacity: 0 }, { opacity: 1 }], 280, 120);
  }
  root.scrollIntoView({ behavior: 'instant', block: 'start' });
  if (keyboard) heading.focus({ preventScroll: true });
}
function focusField() {
  if (stage === 2) {
    const invalidPacePart = !values.minutes.trim() || !/^\d+$/.test(values.minutes) || value('minutes') < 2 || value('minutes') > 12 ? minutes : seconds;
    (timeMode ? timeInputs.h : invalidPacePart).focus();
  } else if (stage === 4 || stage === 5) {
    const group = $$(`input[name=${stage === 4 ? 'hard' : 'goal'}]`);
    (group.find(radio => radio.checked && !radio.disabled) || group.find(radio => !radio.disabled)).focus();
  } else if (stage === 6) $('[data-day]').focus();
  else numeric.focus();
}
function navigate(next, instant = false) {
  if (next > stage) {
    // Recheck earlier values after backtracking, including longest versus a changed total and hard training versus a lowered count.
    const invalid = Array.from({ length: Math.min(Math.max(stage, next - 1), last) + 1 }, (_, i) => i).find(i => validation(i));
    if (invalid !== undefined) {
      if (invalid !== stage) changeStage(invalid, true);
      touched = true; showError(true); focusField(); return;
    }
    const note = next === stage + 1 ? outlier(stage) : '';
    if (note && noteShown !== note) { setNote(note); return; }
    // The coin of this step is struck now, before any confirmation, so the medal answers the press itself.
    strike(stage, instant);
    onStep(stage + 1);
    // Sample values stay marked as samples so the final step can still ask about them.
    if (origins[scenes[stage]] !== 'sample') origins[scenes[stage]] = 'confirmed';
    furthest = Math.max(furthest, Math.min(next, last));
  }
  if (next === done) toResult(instant); else changeStage(next, instant);
}
// After 07: the input goes to judge() (the S1 adapter, then the engine). Sample numbers left: the confirm block (D1 — no
// judgement on numbers the runner has not made theirs). A value the adapter refuses: back to its step. Otherwise the
// analysis is kept and the medal completes. fallbacksUsed stays in the analysis and is never shown.
const fieldStage = { distance: 0, count: 1, pace: 2, longest: 3, hard: 4, goal: 5, days: 6, raceGoal: 5 };
let analysis = null, epithet = '', verdictKept = null;
function toResult(instant) {
  const verdict = judge({ values: { ...values, days: [...values.days] }, origins: { ...origins }, raceGoal });
  if (!verdict.ok) {
    if (verdict.reason === 'sample') { showConfirm(sampleItems()); return; }
    const field = verdict.fields[0];
    changeStage(fieldStage[field] ?? 0, true);
    touched = true; showError(true);
    if (field === 'raceGoal') openRaceGoal(true); else focusField();
    return;
  }
  analysis = verdict.analysis; epithet = verdict.title; verdictKept = verdict;
  finish(instant);
}
// Only reached with no sample left (judge refuses samples, D1), so the summary carries no 예시 tag.
function finish(instant) {
  const left = complete ? -1 : stage;
  stopMotion(); complete = true; hideConfirm(); syncRaceToggle();
  $$('[data-go]').forEach(button => button.removeAttribute('aria-current'));
  $('.chapters').classList.add('is-done');
  root.dataset.scene = 'complete'; $('.complete').hidden = false;
  $('#summary').replaceChildren(...summaryEntries().map(([lead, label, n, unit]) => {
    const row = document.createElement('div'); row.className = 'summary-item';
    // The lead words go on short screens, where the four numbers share one row.
    const dt = document.createElement('dt'), head = document.createElement('span'); head.className = 'dt-lead'; head.textContent = lead; dt.append(head, label);
    const dd = document.createElement('dd'); dd.textContent = n;
    const small = document.createElement('small'); small.textContent = unit; dd.append(small); row.append(dt, dd); return row;
  }));
  $('#summary-extra').textContent = extraLine();
  $('#complete-figure').setAttribute('aria-label', describe());
  $('#gl').setAttribute('aria-label', describe()); $('#gl').tabIndex = 0;
  commit(left);
  const quick = instant || stillMedal();
  const wideIn = go({ instant: quick, afterStrike: !quick && lastStrikeAt > performance.now() - 120 });
  // S6: the first completion of a mount is staged — the plate waits for the reveal, which brings the panel in itself.
  const staged = !quick && !reveal.played;
  if (staged) playReveal(wideIn);
  engrave(quick, staged ? REVEAL.strike : wideIn);
  syncNav();
  if (!quick && !staged) {
    const panel = $('.complete'); panel.getAnimations().forEach(a => a.cancel());
    panel.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 420, delay: 560, fill: 'backwards', easing: 'ease-out' });
  }
  (staged ? $('#reveal-skip') : $('#complete-title')).focus({ preventScroll: true });
  root.scrollIntoView({ behavior: 'instant', block: 'start' });
}
const summaryEntries = () => [['28일', '총거리', format(value('distance')), 'km'], ['러닝', '횟수', format(value('count')), '회'], ['평균', '페이스', paceLabel(), '/km'], ['', '최장거리', format(value('longest')), 'km']];
const extraLine = () => `강한 훈련 ${hardText()} · 목표 ${goals[values.goal][0]}${values.days.length ? ` · ${dayList()}` : ''}`;

function inputChanged(key, raw) {
  values[key] = raw; touched = true;
  origins[scenes[stage]] = 'edited';
  hideConfirm(); trackShown(); clearNote(); fitNumber(); updateControl(); updateHint(); showError();
  live();
}
numeric.addEventListener('input', () => inputChanged(scenes[stage], numeric.value));
minutes.addEventListener('input', () => inputChanged('minutes', minutes.value));
seconds.addEventListener('input', () => inputChanged('seconds', seconds.value));
function timeChanged() {
  touched = true; origins.pace = 'edited'; hideConfirm(); clearNote();
  const { h, m, s } = timeInputs;
  // Hours/minutes/seconds -> pace seconds per km. Out-of-range results are stored too, so the error names the real cause.
  if ([h, m, s].every(el => /^\d*$/.test(el.value.trim())) && h.value.trim() && m.value.trim() && Number(m.value) < 60 && Number(s.value) < 60 && timeSeconds() > 0 && !validation(0)) {
    const pace = Math.round(timeSeconds() / value('distance'));
    values.minutes = String(Math.floor(pace / 60)); values.seconds = String(pace % 60);
    minutes.value = values.minutes; seconds.value = values.seconds;
  }
  trackShown(); updateHint(); showError();
  live();
}
Object.values(timeInputs).forEach(el => el.addEventListener('input', timeChanged));
paceMode.addEventListener('click', () => {
  setTimeMode(!timeMode); clearNote(); updateHint(); showError();
  (timeMode ? timeInputs.h : minutes).focus();
});
[numeric, minutes, seconds, ...Object.values(timeInputs)].forEach(input => {
  input.addEventListener('focus', () => input.select());
  input.addEventListener('keydown', e => {
    const next = { [minutes.id]: seconds, [timeInputs.h.id]: timeInputs.m, [timeInputs.m.id]: timeInputs.s }[input.id];
    if (e.key === 'Enter' && next) { e.preventDefault(); next.focus(); }
  });
});
function choiceChanged() {
  touched = true; hideConfirm(); clearNote(); syncChoices(); syncRaceToggle(); updateHint(); showError();
  live();
}
$$('input[name=hard]').forEach(radio => radio.addEventListener('change', () => { values.hard = Number(radio.value); origins.hard = 'edited'; choiceChanged(); }));
$$('input[name=goal]').forEach(radio => radio.addEventListener('change', () => { values.goal = radio.value; origins.goal = 'edited'; choiceChanged(); }));
$$('[data-day]').forEach(button => button.addEventListener('click', () => {
  const d = Number(button.dataset.day);
  values.days = values.days.includes(d) ? values.days.filter(n => n !== d) : [...values.days, d].sort((a, b) => a - b);
  origins.days = 'edited'; choiceChanged();
}));
// Enter on a radio advances like Enter in a number field.
$$('.choices input').forEach(radio => radio.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); form.requestSubmit(); } }));
form.addEventListener('submit', e => { e.preventDefault(); if (!validation(stage)) document.activeElement.blur(); navigate(stage + 1); });
// '이 숫자가 내 기록이 맞아요': the samples become the runner's numbers (confirmed). Their blanks are struck as the whole
// medal comes into view, the way 04 is struck again (held blank until then; at once without the camera move).
function confirmSamples() {
  const rec = liveRec();
  sampleItems().forEach(({ index }) => {
    origins[scenes[index]] = 'confirmed';
    if (!struck.has(index)) return;
    held.add(index); restrikes.add(index);
    want(Relief.signature(scenes[index], rec, 'struck', RES.seat), coinMsg(scenes[index], rec, 'struck', RES.seat), 3);
  });
  toResult();
}
$('#sample-keep').addEventListener('click', confirmSamples);
$('#sample-edit').addEventListener('click', () => {
  const first = sampleItems()[0];
  changeStage(first ? first.index : 0, true);
  (stage === 2 ? minutes : numeric).focus();
});
$('#previous').addEventListener('click', () => navigate(Math.max(0, stage - 1)));

// ---- 06 target (optional): distance and time for '대회'·'기록' (S1 handoff 4, D2) --------------------------------------
// The engine compares the average pace with the target pace only when it has one (score.ts targetPressure); the adapter
// passes it for these two goals only. It opens over the input panel, where the confirm block opens.
const raceNames = { 5: '5km', 10: '10km', 21.0975: '하프', 42.195: '풀' };
let raceGoal = null;
const wantsRace = () => values.goal === 'race' || values.goal === 'record';
const spanText = min => { const h = Math.floor(min / 60), m = Math.round(min % 60); return `${h ? `${h}시간` : ''}${h && m ? ' ' : ''}${m || !h ? `${m}분` : ''}`; };
const raceText = g => `${raceNames[g.distanceKm]} ${spanText(g.targetTimeMinutes)}`;
// The way in is one line right under the goal chips, where the eye is after choosing (it was over the question, top right,
// and was not found on a phone). It takes the hint's place; the sheet never opens by itself.
function syncRaceToggle() {
  const button = $('#race-goal-open'), show = !complete && stage === 5 && wantsRace();
  button.hidden = !show; $('#interaction').classList.toggle('race-goal-entry', show);
  const label = button.querySelector('b');
  if (raceGoal) label.textContent = raceText(raceGoal); else label.innerHTML = '<span aria-hidden="true">＋ </span>목표 기록 넣기';
  button.querySelector('small').textContent = raceGoal ? '· 고치기' : '선택';
  button.setAttribute('aria-label', raceGoal ? `목표 기록 ${raceText(raceGoal)}, 고치기` : '목표 거리와 기록 넣기, 선택 항목');
  if (!show) closeRaceGoal(false);
}
function raceEntry() {
  const distance = Number($$('input[name=race-distance]').find(r => r.checked)?.value || 0), h = $('#race-hours').value.trim(), m = $('#race-minutes').value.trim();
  // field: where the cursor goes when the entry is refused.
  if (!distance) return { error: '목표 거리를 골라 주세요.', field: 'distance' };
  if (!h && !m) return { error: '목표 기록을 입력해 주세요.', field: 'hours' };
  if (!/^\d*$/.test(h)) return { error: '시간과 분은 정수로 입력해 주세요.', field: 'hours' };
  if (!/^\d*$/.test(m)) return { error: '시간과 분은 정수로 입력해 주세요.', field: 'minutes' };
  if (Number(m) > 59) return { error: '분은 0부터 59까지 입력해 주세요.', field: 'minutes' };
  const total = Number(h || 0) * 60 + Number(m || 0);
  if (total <= 0) return { error: '목표 기록은 0보다 커야 해요.', field: 'hours' };
  // The engine reads a target pace between 2:30 and 12:00 per km only.
  const pace = total * 60 / distance;
  if (pace < 150 || pace > 720) return { error: `목표 페이스가 ${paceText(Math.round(pace))}/km예요. 1km당 2분 30초에서 12분 사이가 되도록 확인해 주세요.`, field: 'hours' };
  return { goal: { distanceKm: distance, targetTimeMinutes: total }, pace: Math.round(pace) };
}
function raceStatus(force) {
  const entry = raceEntry(), status = $('#race-goal-status');
  status.textContent = entry.goal ? `목표 페이스 ${paceText(entry.pace)}/km` : force ? entry.error : '';
  status.classList.toggle('is-error', !entry.goal && force);
  return entry;
}
function openRaceGoal(force = false) {
  const g = raceGoal;
  $$('input[name=race-distance]').forEach(r => { r.checked = !!g && Number(r.value) === g.distanceKm; });
  $('#race-hours').value = g ? String(Math.floor(g.targetTimeMinutes / 60)) : '';
  $('#race-minutes').value = g ? String(Math.round(g.targetTimeMinutes % 60)) : '';
  $('#race-goal').hidden = false; root.classList.add('race-goal-on');
  $('#race-goal-open').setAttribute('aria-expanded', 'true');
  raceStatus(force);
  $('#race-goal-title').focus({ preventScroll: true });
}
function closeRaceGoal(restoreFocus = true) {
  if ($('#race-goal').hidden) return;
  $('#race-goal').hidden = true; root.classList.remove('race-goal-on');
  $('#race-goal-open').setAttribute('aria-expanded', 'false');
  if (restoreFocus && !$('#race-goal-open').hidden) $('#race-goal-open').focus();
}
function setRaceGoal(goal) { raceGoal = goal; closeRaceGoal(); syncRaceToggle(); updateHint(); }
$('#race-goal-open').addEventListener('click', () => openRaceGoal());
$('#race-goal-save').addEventListener('click', () => {
  const entry = raceStatus(true);
  if (entry.goal) setRaceGoal(entry.goal);
  else ({ distance: $('input[name=race-distance]'), hours: $('#race-hours'), minutes: $('#race-minutes') })[entry.field].focus();
});
$('#race-goal-clear').addEventListener('click', () => setRaceGoal(null));
$('#race-goal').addEventListener('keydown', e => { if (e.key === 'Escape') { e.preventDefault(); closeRaceGoal(); } });
$$('input[name=race-distance]').forEach(radio => radio.addEventListener('change', () => raceStatus(false)));
// The sheet sits inside the form: Enter moves on or saves here, never submits the step.
[$('#race-hours'), $('#race-minutes')].forEach(input => {
  input.addEventListener('input', () => raceStatus(false));
  input.addEventListener('focus', () => input.select());
  input.addEventListener('keydown', e => { if (e.key !== 'Enter') return; e.preventDefault(); if (input.id === 'race-hours') $('#race-minutes').focus(); else $('#race-goal-save').click(); });
});
$$('input[name=race-distance]').forEach(radio => radio.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); $('#race-hours').focus(); } }));
$$('[data-go]').forEach(button => button.addEventListener('click', () => navigate(Number(button.dataset.go))));
$('#add-run').addEventListener('click', () => { values.count = String(Math.max(1, Math.floor(safe('count')) + 1)); origins.count = 'edited'; touched = true; syncInputs(); live(); });
$('#subtract-run').addEventListener('click', () => { values.count = String(Math.max(1, Math.floor(safe('count')) - 1)); origins.count = 'edited'; touched = true; syncInputs(); live(); });
// 01 total distance and 04 longest run are also set with the ruler below the number. The medal is only tilted, never
// used as an input. The ruler reports a rounded value at most once per frame; the number, the checks and the coin follow.
const ruler = Ruler.create($('#ruler'), {
  min: 0, max: 500, step: 1, majorEvery: 10, value: 150, format, valueText: n => `${format(n)}킬로미터. 숫자 직접 입력도 가능해요.`,
  reduced,
  onInput: n => {
    const key = scenes[stage];
    values[key] = String(n); origins[key] = 'edited'; touched = true; syncInputs();
    live();
  },
  onChange: () => { liveUntil = 0; syncCoins(); },
});
$('#ruler').addEventListener('pointerdown', () => { cutPeek(); });

// ==== the medal's state ===============================================================================================
const coinNames = ['총거리', '횟수', '페이스', '최장거리', '강한 훈련', '목표', '요일'];
$$('[data-go]').forEach(button => { button.dataset.name = button.getAttribute('aria-label'); });
// Beyond 60 runs the dots would shrink into texture; the number itself is kept as entered (Relief.map.dots).
const DOT_CAP = 60;
let struck = new Set(), committed = null, lastStrikeAt = -1e9;
function markOf(i) {
  const key = scenes[i], sampleLeft = i < 4 && origins[key] === 'sample';
  // 요일 is optional: touching it or striking it answers it, even with no day chosen.
  const answered = i < 4 || (key === 'days' ? origins.days === 'edited' || struck.has(i) : values[key] !== null);
  if (!complete && i === stage) return sampleLeft || !answered ? 'cue' : 'live';
  if (complete || struck.has(i)) return sampleLeft ? 'guide' : 'engraved';
  return 'guide';
}
// The relief's record: the last valid numbers and the choices.
const liveRec = () => ({ distance: shown.distance, count: Math.max(1, Math.round(shown.count)), pace: clamp(Math.round(shown.pace), 120, 779), longest: shown.longest, hard: values.hard ?? 0, goal: values.goal || 'habit', days: [...values.days] });
// Each place: face 'empty' (a socket: not reached) · 'blank' (no relief: the sample, or nothing chosen yet) · 'struck'.
// hover = the open step's coin, held over its socket while its value is being set.
function places() {
  return scenes.map((key, i) => {
    const m = markOf(i), open = !complete && i === stage;
    if (open) return { face: m === 'live' ? 'struck' : 'blank', hover: true };
    if (complete || struck.has(i)) return { face: m === 'engraved' && !held.has(i) ? 'struck' : 'blank', hover: false };
    return { face: 'empty', hover: false };
  });
}
// The open coin follows the live entry; a seated one shows the record it was struck with (or set down with).
const recFor = (k, p) => p.hover ? liveRec() : slots[k]?.rec || committed || liveRec();
// A seated coin's face can depend on another step's value (04's ridden share on 01's total distance). When that value
// changes, the coin keeps its face until it is struck again where it can be seen: on the look at the whole medal after a
// Next, on the way to the completed medal, or when its own step is opened. Same input, same face, once it has been.
const restrikes = new Set();
// Confirmed samples whose coins still show their blank until they are struck (confirmSamples).
const held = new Set();
const faceFamily = (k, rec) => Relief.signature(scenes[k], rec, 'struck', 0);
function commit(left) {
  committed = liveRec();
  if (slots[left] && struck.has(left)) slots[left].rec = committed;
  restrikes.delete(complete ? -1 : stage);
  slots.forEach((slot, k) => {
    if (k === left || (!complete && k === stage) || !struck.has(k) || !slot.rec || markOf(k) !== 'engraved') return;
    if (faceFamily(k, slot.rec) === faceFamily(k, committed)) return;
    restrikes.add(k);
    // The new face is made now so it is ready when the coin comes down with it.
    want(Relief.signature(scenes[k], committed, 'struck', RES.seat), coinMsg(scenes[k], committed, 'struck', RES.seat), 3);
  });
}
function strike(i, instant) {
  struck.add(i);
  const p = places()[i];
  $('#medal-status').textContent = p.face === 'struck' ? `${coinNames[i]} 동전을 새겼어요.` : i < 4 ? `${coinNames[i]}는 예시값이라 각인하지 않은 민짜를 앉혔어요.` : '';
  committed = liveRec();
  if (slots[i]) slots[i].rec = committed;
  restrikes.delete(i);
  strikeCoin(i, instant || stillMedal());
  syncNav();
}
// The step bar is the medal in miniature: an empty place shows its socket number, a struck coin its own relief (drawn
// small from the face the medal shows), a blank its plain face, and the open place an orange ring. The names say the same.
const navStates = { empty: '빈 자리', struck: '새김', blank: '예시값 민짜', open: '지금 입력 중' };
const thumbs = new Map();
function syncNav() {
  const P = places(), dpr = Math.min(2, devicePixelRatio || 1);
  $$('[data-go]').forEach((button, k) => {
    const open = !complete && k === stage, slot = slots[k];
    const state = open ? 'open' : P[k].face === 'empty' ? 'empty' : P[k].face;
    button.dataset.state = state;
    button.setAttribute('aria-label', `${button.dataset.name}, ${state === 'empty' && button.disabled ? '아직 빈 자리' : navStates[state]}`);
    const sig = state === 'struck' || state === 'blank' ? slot?.sig || null : null, canvas = button.querySelector('canvas');
    const N = Math.round(canvas.clientWidth * dpr) || 52, drawn = `${sig}|${finishKey}|${N}`;
    if (!sig || !faces.has(sig) || canvas.dataset.drawn === drawn) return;
    if (canvas.width !== N) { canvas.width = canvas.height = N; }
    canvas.getContext('2d').putImageData(thumb(sig, N), 0, 0);
    canvas.dataset.drawn = drawn;
  });
}
// A coin N device pixels across from its face maps: the face averaged over each pixel and lit as in the flat preview
// (Relief.preview), inside a polished rim.
function thumb(sig, N) {
  const key = `${sig}|${finishKey}|${N}`;
  if (thumbs.has(key)) return thumbs.get(key);
  const d = faces.get(sig).data, S = d.S, f = FINISHES[finishKey], hex = s => [1, 3, 5].map(i => parseInt(s.slice(i, i + 2), 16));
  const metal = hex(f.metal), oxide = hex(f.oxide), out = new ImageData(N, N), c = N / 2, R = c - .5, RF = R * .87, step = S / (2 * RF);
  const Ln = Math.hypot(-.5, -.62, .6), L = [-.5 / Ln, -.62 / Ln, .6 / Ln];
  for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
    const o = (y * N + x) * 4, dx = x + .5 - c, dy = y + .5 - c, r = Math.hypot(dx, dy);
    if (r > R + .5) continue;
    let col;
    if (r > RF) {
      // The rim: polished metal, brighter toward the key light (upper left).
      const lit = .78 + .32 * clamp((-dx - dy) / (r * 1.414), -1, 1);
      col = metal.map(v => v * lit);
    } else {
      // Three by three samples per pixel; the face map's square is the face disc. Maps for WebGL are stored bottom-up.
      let p = 0, nx = 0, ny = 0, nz = 0;
      for (let j = 0; j < 3; j++) for (let i = 0; i < 3; i++) {
        const sx = clamp(Math.floor(S / 2 + (dx + (i - 1) / 3) * step), 0, S - 1), sy = clamp(Math.floor(S / 2 + (dy + (j - 1) / 3) * step), 0, S - 1);
        const q = (glOk ? S - 1 - sy : sy) * S + sx;
        p += d.polish[q]; nx += d.normal[q * 4]; ny += d.normal[q * 4 + 1]; nz += d.normal[q * 4 + 2];
      }
      p /= 9 * 255; nx = nx / 9 / 127.5 - 1; ny = -(ny / 9 / 127.5 - 1); nz = nz / 9 / 127.5 - 1;
      const lam = clamp(nx * L[0] + ny * L[1] + nz * L[2], 0, 1), spec = Math.pow(lam, 18) * p;
      col = [0, 1, 2].map(i => (oxide[i] + (metal[i] - oxide[i]) * p) * (.35 + .75 * lam) + spec * 90);
    }
    out.data[o] = clamp(col[0], 0, 255); out.data[o + 1] = clamp(col[1], 0, 255); out.data[o + 2] = clamp(col[2], 0, 255);
    out.data[o + 3] = 255 * clamp(R + .5 - r, 0, 1);
  }
  thumbs.set(key, out);
  return out;
}
function describe() {
  const rec = liveRec(), P = places();
  const parts = scenes.map((k, i) => `${String(i + 1).padStart(2, '0')} ${Relief.NAMES[k]} ${P[i].face === 'empty' ? '빈 자리' : P[i].face === 'blank' ? '각인 안 한 민짜(예시값)' : Relief.label(k, rec)}`);
  const named = plate.figure ? ` 가운데 명판에는 ${plate.figure.house} 가문 기호와 ${plate.figure.name}.` : '';
  return `지난 28일의 메달. 끈 아래 동전 일곱 개가 가운데 판을 둘러싼 고리예요. 한 시 방향부터 시계 방향으로 ${parts.join(', ')}.${named}`;
}

// ==== the eighth strike: the plate ====================================================================================
// After 07 the judgement goes onto the centre plate: the figure's house sign and name (Relief.plate(figure), built like a
// face). It is struck in the coins' grammar once the whole medal is in view — the new face at preview strength for a
// drop's time, then on impact the relief rises to full in 260ms and the medal gives once (strikeCoin) — and then the
// title turns to the figure and its epithet. While the map is made, the line under the title (a status) says the spec's
// wait line, once. Reduced motion or a slow renderer: the plate and the title change at once. Without WebGL the flat
// drawing shows the plate's preview. The plate keeps its figure while the record is edited; a new figure strikes again.
const WAIT = '28일의 기록을 신화로 번역하고 있어요';
// figure: the one struck on the plate ({ id, name, house, title }) · pending: the id whose map is on its way · s: strike
// strength (uPlate) · h: only a tween's clock, the wait until the whole medal is in view · ready: the map's promise.
const plate ={ sig: 'plate', figure: null, s: 1, h: 0, pending: null, ready: null, at: 0, waiting: null };
const uPlate = { value: 1 };
const plateSig = f => `plate:${f.id}`;
function engrave(quick, wideIn) {
  const c = analysis.match.character, f = { id: c.id, name: c.name, house: c.house, title: epithet };
  if (plate.figure && plate.figure.id === f.id) { plate.pending = null; plate.ready = null; titled(f, false); return; }
  untitled();
  plate.pending = f.id;
  // plate.at, not a closure: 건너뛰기 brings the strike forward while the plate's map is still being built.
  plate.at = performance.now() + (wideIn ?? 0);
  plate.ready = want(plateSig(f), { type: 'plate', figure: { name: f.name, house: f.house } }, 0).then(() => { if (!destroyed && plate.pending === f.id) strikePlate(f, quick); });
}
function strikePlate(f, quick) {
  const at = plate.at;
  // Without WebGL there is no tween to wait on: the flat plate is struck when the reveal says so.
  if (reveal.on && !renderer && complete && at > performance.now() + 16) {
    plate.waiting = () => { plate.waiting = null; if (!destroyed && plate.pending === f.id) strikePlate(f, quick); };
    later(plate.waiting, at - performance.now()); return;
  }
  plate.pending = null;
  if (quick || !renderer || !complete) { showPlate(f); plate.s = 1; dirty(); if (reveal.on) revealImpact(f); titled(f, true); return; }
  stopTween(plate, 's');
  tween(plate, 'h', 1, Math.max(1, at - performance.now()), t => t, 0, () => {
    showPlate(f); plate.s = PREVIEW; dirty();
    if (reveal.on) later(() => revealImpact(f), DROP);
    tween(plate, 's', 1, 260, easeOut, DROP, () => titled(f, true));
    recoil.v = 0; tween(recoil, 'v', 1, 280, t => t, DROP, () => { recoil.v = 0; });
  });
}
// The plate's maps go onto the enamel; maps of plates no longer shown are let go.
function showPlate(f) {
  const sig = plateSig(f);
  plate.sig = sig; plate.figure = f;
  if (renderer) setPlate(sig);
  for (const [s, face] of faces) {
    if (s === sig || (s !== 'plate' && !s.startsWith('plate:'))) continue;
    if (face.tex) Object.values(face.tex).forEach(freeTexture);
    faces.delete(s); flats.delete(s);
  }
  dirty();
}
// Leaving the finished medal mid-strike: the plate is struck at once.
function settlePlate() {
  for (let t = tweens.find(x => x.obj === plate); t; t = tweens.find(x => x.obj === plate)) { tweens.splice(tweens.indexOf(t), 1); t.obj[t.prop] = t.to; if (t.onDone) t.onDone(); }
}
function untitled() {
  $('#complete-title').textContent = '지난 28일의 메달';
  const line = $('#complete-epithet'); line.textContent = WAIT; line.classList.add('is-wait');
}
function titled(f, struck) {
  const title = $('#complete-title'), line = $('#complete-epithet');
  title.textContent = f.name; line.textContent = f.title; line.classList.remove('is-wait');
  // The eighth strike is done: the result card opens under the medal (S4, D5).
  if (complete) onReveal(verdictKept);
  if (!struck) return;
  $('#medal-status').textContent = Relief.plateStatus(f);
  $('#complete-figure').setAttribute('aria-label', describe()); $('#gl').setAttribute('aria-label', describe());
  if (complete) [title, line].forEach(el => animate(el, [{ opacity: .2, transform: 'translateY(5px)' }, { opacity: 1, transform: 'translateY(0)' }], 320));
  if (complete && reveal.on) endReveal();
}

// ==== reveal: the judgement before the figure (S6, 운영자 요청 2026-10-10) ===========================================
// The first completion of a mount takes about ten seconds instead of one: the medal sways under the light while the seven
// coins are struck again one by one under their records, the figures shuffle, the plate is struck with a flash and
// sparks, and only then do the title, the panel and the result card (its ad slot untouched) come in. Once per mount;
// never with reduced motion or a slow renderer (finish() passes quick); 건너뛰기 ends it at once. The plate is struck at
// REVEAL.strike or when its map is ready, whichever is later, and everything after the strike waits for the strike.
const REVEAL = { first: 1150, step: 640, shuffle: 5900, strike: 8800, hold: 560 };
function later(fn, ms) { reveal.timers.push(setTimeout(() => { if (!destroyed && reveal.on) fn(); }, ms)); }
function revealRecords() {
  const days = dayList();
  return [
    ['총거리', value('distance'), 'km'], ['러닝 횟수', value('count'), '회'], ['평균 페이스', paceLabel(), '/km'], ['최장거리', value('longest'), 'km'],
    ['강한 훈련', hardText(), ''], ['목표', goals[values.goal]?.[0] ?? '', ''], ['평소 요일', days || '고르지 않음', ''],
  ];
}
function playReveal(wideIn) {
  const box = $('#reveal'), bar = $('#reveal-bar');
  Object.assign(reveal, { on: true, played: true, t0: performance.now(), landed: false, shown: -1 });
  $('.complete').inert = true;
  root.classList.add('revealing');
  box.hidden = false; box.classList.remove('is-out', 'is-shuffle', 'is-landed');
  $('#reveal-kicker').textContent = 'JUDGEMENT / 28D';
  $('#reveal-step').textContent = '기록을 메달에 새기는 중'; $('#reveal-of').textContent = '00 / 07';
  $('#reveal-label').textContent = '지난 28일, 일곱 개의 기록'; $('#reveal-value').textContent = '';
  $('#reveal-record').hidden = false; $('#reveal-figure').hidden = true;
  bar.getAnimations().forEach(a => a.cancel());
  bar.animate([{ transform: 'scaleX(0)' }, { transform: 'scaleX(1)' }], { duration: REVEAL.strike + DROP, easing: 'linear', fill: 'forwards' });
  $('#medal-status').textContent = '일곱 개의 기록으로 어울리는 인물을 찾고 있어요';
  sizeSparks();
  // The camera backs off a little as it arrives and comes in slowly until the strike.
  const first = Math.max(REVEAL.first, (wideIn ?? 0) + 120);
  view.zoom = 1; tween(view, 'zoom', 1.07, first, easeOut, 0, () => tween(view, 'zoom', .99, REVEAL.strike - first, easeInOut));
  const records = revealRecords();
  records.forEach((rec, k) => later(() => revealCoin(k, rec), first + k * REVEAL.step));
  later(revealShuffle, REVEAL.shuffle);
  loop();
}
function revealCoin(k, [label, n, unit]) {
  $('#reveal-of').textContent = `0${k + 1} / 07`;
  $('#reveal-label').textContent = `0${k + 1} ${label}`;
  const out = $('#reveal-value');
  if (typeof n === 'number') {
    const t0 = performance.now(), count = now => {
      if (!reveal.on || out.dataset.k !== String(k)) return;
      const e = easeOut(clamp((now - t0) / 460, 0, 1));
      out.textContent = format(Number.isInteger(n) ? Math.round(n * e) : Math.round(n * e * 10) / 10);
      out.append(Object.assign(document.createElement('small'), { textContent: unit }));
      if (e < 1) requestAnimationFrame(count);
    };
    out.dataset.k = String(k); requestAnimationFrame(count);
  } else {
    out.dataset.k = String(k); out.textContent = n;
    if (unit) out.append(Object.assign(document.createElement('small'), { textContent: unit }));
  }
  $('#reveal-record').animate([{ opacity: 0, transform: 'translateY(10px)', filter: 'blur(4px)' }, { opacity: 1, transform: 'none', filter: 'blur(0)' }], { duration: 300, easing: 'cubic-bezier(.16,1,.3,1)' });
  // The coin is lifted and struck again (a coin still being re-struck with a changed face is left to that).
  const slot = slots[k], hit = () => { const p = coinScreen(k); burstAt(p, 18, .7); ripple(p, p.r * 2.4); };
  if (!renderer || !slot || !slot.present || slot.striking) { hit(); return; }
  stopTween(slot, 'z'); stopTween(slot, 's'); slot.striking = true;
  tween(slot, 'z', .24, 170, easeOut, 0, () => {
    slot.s = .5;
    tween(slot, 'z', 0, 140, easeIn, 0, () => {
      hit();
      recoil.v = 0; tween(recoil, 'v', 1, 220, t => t, 0, () => { recoil.v = 0; });
      tween(slot, 's', 1, 300, easeOut, 0, () => { slot.striking = false; });
    });
  });
}
function revealShuffle() {
  $('#reveal').classList.add('is-shuffle');
  $('#reveal-kicker').textContent = `MATCHING / ${figures.length} FIGURES`;
  $('#reveal-step').textContent = '어울리는 인물을 찾는 중';
  $('#reveal-record').hidden = true; $('#reveal-figure').hidden = false;
  const own = analysis?.match.character.id;
  reveal.names = figures.filter(f => f.id !== own);
  if (!reveal.names.length) reveal.names = [{ house: '', name: '…' }];
  reveal.nextSwap = 0; reveal.shuffleRaf = requestAnimationFrame(shuffleFrame);
}
// Fast at first, slowing toward the strike like a wheel coming to rest; the right name only lands with the plate.
function shuffleFrame(now) {
  reveal.shuffleRaf = 0;
  if (!reveal.on || reveal.landed || destroyed) return;
  if (now >= reveal.nextSwap) {
    let i = Math.floor(Math.random() * reveal.names.length);
    if (reveal.names.length > 1 && i === reveal.shown) i = (i + 1) % reveal.names.length;
    reveal.shown = i;
    const f = reveal.names[i];
    $('#reveal-house').textContent = f.house ? `${f.house} 가문` : ''; $('#reveal-name').textContent = f.name;
    const t = clamp((now - reveal.t0 - REVEAL.shuffle) / (REVEAL.strike - REVEAL.shuffle), 0, 1);
    reveal.nextSwap = now + 55 + 300 * t * t;
  }
  reveal.shuffleRaf = requestAnimationFrame(shuffleFrame);
}
// The eighth strike lands: the figure's own name, a flash and sparks from the plate, a ring, the medal giving under it.
function revealImpact(f) {
  if (!reveal.on || reveal.landed) return;
  reveal.landed = true; cancelAnimationFrame(reveal.shuffleRaf);
  const box = $('#reveal');
  box.classList.remove('is-shuffle'); box.classList.add('is-landed');
  $('#reveal-record').hidden = true; $('#reveal-figure').hidden = false;
  $('#reveal-kicker').textContent = 'STRUCK / 08';
  $('#reveal-step').textContent = '여덟 번째 각인'; $('#reveal-of').textContent = '08 / 08';
  $('#reveal-house').textContent = `${f.house} 가문`; $('#reveal-name').textContent = f.name;
  $('#reveal-figure').animate([{ transform: 'scale(1.16)', opacity: .3, filter: 'blur(6px)' }, { transform: 'none', opacity: 1, filter: 'blur(0)' }], { duration: 560, easing: 'cubic-bezier(.16,1,.3,1)' });
  const p = plateScreen(), flash = $('#reveal-flash');
  burstAt(p, 96, 1.25); ripple(p, 240, 'is-big'); later(() => ripple(p, 150), 90);
  flash.style.setProperty('--x', `${p.x}px`); flash.style.setProperty('--y', `${p.y}px`);
  flash.animate([{ opacity: 0 }, { opacity: .95, offset: .1 }, { opacity: 0 }], { duration: 760, easing: 'ease-out' });
  root.animate([{ transform: 'none' }, { transform: 'translate(-3px,2px)' }, { transform: 'translate(3px,-2px)' }, { transform: 'translate(-1px,1px)' }, { transform: 'none' }], { duration: 280, easing: 'ease-out' });
  tween(view, 'zoom', 1.035, 110, easeOut, 0, () => tween(view, 'zoom', 1, 640, easeOut));
}
// After the strike the name holds a moment, then the overlay gives way to the panel and '분석 펼쳐보기' calls.
function endReveal() {
  later(() => {
    $('#reveal').classList.add('is-out');
    root.classList.remove('revealing');
    // The overlay's words go first (.2s), so its name and the panel's title never stand on each other.
    const panel = $('.complete'); panel.getAnimations().forEach(a => a.cancel());
    panel.animate([{ opacity: 0, transform: 'translateY(8px)' }, { opacity: 1, transform: 'none' }], { duration: 560, delay: 200, fill: 'backwards', easing: 'cubic-bezier(.16,1,.3,1)' });
    $('#open-result').classList.add('is-calling');
    later(() => { stopReveal(); $('#complete-title').focus({ preventScroll: true }); }, 600);
  }, REVEAL.hold);
}
// Ends the reveal where it stands (건너뛰기, leaving the medal, destroy): no timers, no overlay, the medal back to face.
function stopReveal() {
  $('.complete').inert = false;
  if (!reveal.on && $('#reveal').hidden) return;
  reveal.on = false; reveal.timers.forEach(clearTimeout); reveal.timers = [];
  cancelAnimationFrame(reveal.shuffleRaf); reveal.shuffleRaf = 0;
  $('#reveal').hidden = true; root.classList.remove('revealing'); plate.waiting = null;
  if (destroyed) return;
  stopTween(view, 'zoom'); view.zoom = 1;
  if (renderer && !drag) spring = true;
  dirty();
}
function skipReveal() {
  if (!reveal.on) return;
  plate.at = performance.now();
  const waiting = plate.waiting;
  settleNow(); stopReveal(); waiting?.();
  $('.complete').getAnimations().forEach(a => a.cancel());
  $('#open-result').classList.add('is-calling');
  $('#complete-title').focus({ preventScroll: true });
}
// A point of the medal on screen, with r: how many pixels one unit (about a coin's radius) spans there.
const toScreen = (x, y, z) => {
  if (!renderer || !THREE) { const f = boxOf($('#complete-figure')); return { x: f.x + f.w / 2, y: f.y + f.h / 2, r: Math.min(f.w, f.h) / 8 }; }
  const at = (dx) => { const v = new THREE.Vector3(x + dx, y, z); medal.localToWorld(v); v.project(camera); return { x: (v.x + 1) / 2 * width, y: (1 - v.y) / 2 * height }; };
  const p = at(0), q = at(1);
  return { x: p.x, y: p.y, r: Math.hypot(q.x - p.x, q.y - p.y) };
};
const coinScreen = k => { const [x, y] = coinAt(k); return toScreen(x, y, .27); };
const plateScreen = () => toScreen(0, 0, .2);
function ripple(p, size, cls = '') {
  const el = document.createElement('i');
  el.className = `reveal-ring ${cls}`.trim(); el.style.cssText = `left:${p.x}px;top:${p.y}px;width:${size}px;height:${size}px`;
  $('#reveal-fx').append(el);
  el.animate([{ transform: 'translate(-50%,-50%) scale(.3)', opacity: 1 }, { transform: 'translate(-50%,-50%) scale(1.7)', opacity: 0 }], { duration: 680, easing: 'cubic-bezier(.16,1,.3,1)', fill: 'forwards' })
    .finished.then(() => el.remove(), () => el.remove());
}
function sizeSparks() {
  const c = $('#reveal-sparks'), r = Math.min(2, devicePixelRatio || 1);
  c.width = Math.round(width * r); c.height = Math.round(height * r);
  reveal.ctx = c.getContext('2d'); reveal.scale = r;
}
function burstAt(p, n, power) {
  if (!reveal.ctx || $('#reveal-sparks').width !== Math.round(width * reveal.scale)) sizeSparks();
  for (let i = 0; i < n; i++) {
    const a = Math.random() * Math.PI * 2, v = (120 + Math.random() * 460) * power;
    reveal.sparks.push({ x: p.x, y: p.y, vx: Math.cos(a) * v, vy: Math.sin(a) * v - 80 * power, life: 0, max: .4 + Math.random() * .6, w: 1 + Math.random() * 1.8, hot: Math.random() });
  }
  if (!reveal.raf) { reveal.last = performance.now(); reveal.raf = requestAnimationFrame(sparkFrame); }
}
function sparkFrame(now) {
  reveal.raf = 0;
  const g = reveal.ctx;
  if (!g || destroyed) return;
  const dt = Math.min(.05, (now - reveal.last) / 1000); reveal.last = now;
  g.setTransform(reveal.scale, 0, 0, reveal.scale, 0, 0); g.clearRect(0, 0, width, height);
  g.globalCompositeOperation = 'lighter'; g.lineCap = 'round';
  reveal.sparks = reveal.sparks.filter(s => (s.life += dt) < s.max);
  for (const s of reveal.sparks) {
    const k = 1 - s.life / s.max, x0 = s.x, y0 = s.y, slow = Math.pow(.2, dt);
    s.vx *= slow; s.vy = s.vy * slow + 560 * dt; s.x += s.vx * dt; s.y += s.vy * dt;
    g.strokeStyle = `hsla(${36 + s.hot * 14},100%,${60 + s.hot * 32}%,${k})`; g.lineWidth = s.w * (.5 + k);
    g.beginPath(); g.moveTo(x0 - (s.x - x0) * 1.8, y0 - (s.y - y0) * 1.8); g.lineTo(s.x, s.y); g.stroke();
  }
  g.globalCompositeOperation = 'source-over';
  if (reveal.sparks.length) reveal.raf = requestAnimationFrame(sparkFrame); else g.clearRect(0, 0, width, height);
}
$('#reveal-skip').addEventListener('click', skipReveal);

// ==== faces: built in workers (or here), cached by signature =========================================================
// The probe context is given back at once, so it does not count against the page's WebGL contexts.
const glOk = (() => { const gl = document.createElement('canvas').getContext('webgl2'); gl?.getExtension('WEBGL_lose_context')?.loseContext(); return !!gl; })();
const COARSE = matchMedia('(pointer: coarse)').matches;
// Face sizes: 256 while a value is moving, 512 for every seated coin (and the share image), the fine size for the open
// coin the camera is close to. Touch devices stop at 768 and keep a smaller cache (iOS Safari's memory limit).
const RES = { drag: 256, seat: 512, focus: COARSE ? 768 : 1024 };
const BUDGET = (COARSE ? 24 : 64) * 1048576;
// Canvas fonts: subsets with the letters the faces and the share image draw (scripts/build-medal-fonts.js); the same files
// back the StudySans/StudyCondensed faces of medal3d-flow.css on this thread.
const FONTS = [
  { family: 'StudySans', url: new URL('./fonts/medal-sans.woff2', import.meta.url).href, descriptors: { weight: '45 920' } },
  { family: 'StudyCondensed', url: new URL('./fonts/medal-condensed.woff2', import.meta.url).href, descriptors: { weight: '700' } },
];
const faces = new Map();   // sig → { data, tex, bytes, kind, used }
const jobs = new Map(), byId = new Map(), pool = [];
let via = null, mainBusy = false, jobId = 0, mainTimer = 0, builderTimer = 0;
// Workers started but not answered yet (the pool holds the ready ones); both are terminated on destroy.
const waiting = [];
const family = sig => sig.replace(/:\d+$/, '');
const blankSig = S => `blank:${S}`;
const coinMsg = (key, rec, state, S) => ({ type: 'coin', key, rec, state, S });
function startBuilder() {
  // The faces are built on this thread when there is no module worker, a worker fails or cannot draw the fonts
  // (data.reason), or none answers within six seconds.
  const fallback = () => { if (via || destroyed) return; via = 'main'; pool.splice(0).concat(waiting.splice(0)).forEach(p => p.w.terminate()); pump(); };
  if (typeof Worker === 'undefined') return fallback();
  for (let i = 0; i < 2; i++) {
    let w;
    try { w = new Worker(new URL('./medal3d-flow-worker.js', import.meta.url), { type: 'module' }); } catch { clearTimeout(builderTimer); return fallback(); }
    const p = { w, busy: false, job: null };
    waiting.push(p);
    w.onerror = e => { e.preventDefault?.(); if (!pool.includes(p)) { clearTimeout(builderTimer); fallback(); } };
    w.onmessage = ({ data }) => {
      if (data.type === 'ready') {
        if (!data.ok) { clearTimeout(builderTimer); return fallback(); }
        if (via === 'main') { w.terminate(); return; }
        waiting.splice(waiting.indexOf(p), 1);
        clearTimeout(builderTimer); via = 'worker'; pool.push(p); pump(); return;
      }
      const j = byId.get(data.id); p.busy = false; p.job = null;
      if (j) finishJob(j, data);
      pump();
    };
  }
  // The font files are read once here and handed to both workers (a worker fetching them itself downloads them again).
  Promise.all(FONTS.map(f => fetch(f.url).then(r => r.arrayBuffer()).then(data => ({ ...f, data }))))
    .then(fonts => {
      if (destroyed) return;
      pool.concat(waiting).forEach(p => p.w.postMessage({ type: 'init', fonts: fonts.map(f => ({ ...f, data: f.data.slice(0) })) }));
      if (!via) builderTimer = setTimeout(fallback, 6000);
    })
    .catch(fallback);
}
// Highest priority first, oldest first among equals. Only one large face at a time, so a fine face never holds up
// both workers while a preview is waiting.
function pick() {
  const large = pool.some(p => p.busy && p.job.msg.S >= 768);
  let best = null;
  for (const j of jobs.values()) if (j.state === 'queued' && !(large && j.msg.S >= 768) && (!best || j.prio < best.prio || (j.prio === best.prio && j.t < best.t))) best = j;
  return best;
}
function pump() {
  if (via === 'worker') {
    for (const p of pool) {
      if (p.busy) continue;
      const j = pick(); if (!j) return;
      p.busy = true; p.job = j; j.state = 'running'; j.started = performance.now();
      p.w.postMessage({ ...j.msg, id: j.id, up: glOk });
    }
  } else if (via === 'main' && !mainBusy) {
    const j = pick(); if (!j) return;
    mainBusy = true; j.state = 'running';
    mainTimer = setTimeout(() => { if (destroyed) return; finishJob(j, buildHere(j.msg)); mainBusy = false; pump(); }, 0);
  }
}
// The same builds as the worker, on this thread.
function buildHere(m) {
  const flip = (a, w, h, ch) => glOk ? Relief.bottomUp(a, w, h, ch) : a;
  if (m.type === 'coin') { const f = Relief.coin(m.key, m.rec, m.state, m.S, { height: true }), S = f.S; return { S, polish: flip(f.polish, S, S, 1), normal: flip(f.normal, S, S, 4), orm: flip(f.orm, S, S, 2), height: flip(f.height, S, S, 1) }; }
  if (m.type === 'socket') { const f = Relief.socket(m.S, m.label), S = f.S; return { S, polish: flip(f.polish, S, S, 1), normal: flip(f.normal, S, S, 4), orm: flip(f.orm, S, S, 2) }; }
  if (m.type === 'plate') { const p = Relief.plate(m.figure); return { W: p.W, Hh: p.Hh, polish: flip(p.polish, p.W, p.Hh, 1), normal: flip(p.normal, p.W, p.Hh, 4), orm: flip(p.orm, p.W, p.Hh, 2), metal: flip(p.metal, p.W, p.Hh, 1) }; }
  const r = Relief.ribbon(m.W); return { W: r.W, Hh: r.Hh, print: flip(new Uint8Array(r.print), r.W, r.Hh, 4), normal: flip(r.normal, r.W, r.Hh, 4) };
}
function finishJob(j, data) {
  jobs.delete(j.sig); byId.delete(j.id);
  const bytes = ['polish', 'normal', 'orm', 'height', 'metal', 'print'].reduce((n, k) => n + (data[k] ? data[k].length : 0), 0) * 4 / 3;
  faces.set(j.sig, { data, tex: null, bytes, kind: j.msg.type, used: performance.now() });
  j.resolve(j.sig);
  evict();
  built(j.sig);
}
// Ask for a face. A newer value for the open coin drops the older ones still waiting for the same place.
function want(sig, msg, prio = 3, place = null) {
  if (faces.has(sig)) { faces.get(sig).used = performance.now(); return Promise.resolve(sig); }
  let j = jobs.get(sig);
  if (j) { j.prio = Math.min(j.prio, prio); return j.promise; }
  if (!msg) return Promise.resolve(sig);
  if (place !== null) for (const [s, o] of jobs) if (o.place === place && o.state === 'queued' && family(s) !== family(sig)) { jobs.delete(s); byId.delete(o.id); }
  j = { sig, msg, prio, place, id: ++jobId, state: 'queued', t: performance.now() };
  j.promise = new Promise(r => { j.resolve = r; });
  jobs.set(sig, j); byId.set(j.id, j);
  pump();
  return j.promise;
}
// Least recently used coin faces go past the budget; faces on the medal (or about to be) stay, and so do the faces a
// share render is waiting on (sharePins: the record-hidden faces are on no slot until the render swaps them in).
const sharePins = new Set();
function evict() {
  const inUse = new Set([...slots.flatMap(s => [s.sig, s.wantSig]), ...sharePins]);
  const coins = [...faces.entries()].filter(([, f]) => f.kind === 'coin').sort((a, b) => a[1].used - b[1].used);
  let total = coins.reduce((n, [, f]) => n + f.bytes, 0);
  for (const [sig, f] of coins) {
    if (total <= BUDGET) break;
    if (inUse.has(sig)) continue;
    if (f.tex) Object.values(f.tex).forEach(t => t.dispose());
    faces.delete(sig); total -= f.bytes;
  }
}

// ==== 3D ==============================================================================================================
const FINISHES = {
  gold: { name: '새틴 골드', metal: '#f6d58c', oxide: '#241707', env: 1.02, key: 4.2, rim: 2.6 },
  silver: { name: '산화 은', metal: '#eeede9', oxide: '#1e1c1a', env: .75 },
  brass: { name: '앤티크 황동', metal: '#f0d9a8', oxide: '#17110b', env: .8 },
};
let finishKey = 'gold';
// Hover: how far the open coin floats over its socket. ENTER: where a coin comes in from (and leaves to). PREVIEW: the
// relief strength while the value is open. RELIEF: real height per unit of H in coin units — the same .10 the normal map
// assumes (medal3d-relief.js coin(): depth), so the mesh and the shading agree. Letters and lines stand about .046 above
// the cast ground, near the rim's height; the domes about .06.
const HOVER = .34, ENTER = 1.3, PREVIEW = .55, RELIEF = .10, DROP = 180, FOV = 22;
// The look at the whole medal after a strike (ms): it starts backing off as the relief rises, holds, goes on. A coin
// struck again meanwhile holds it longer.
const PEEK = { at: DROP + 60, out: 360, hold: 220, restrike: 340, in: 520 };
const peekOn = true;
const LIGHT_PASS = true;
const useDisp = true;
const DPR = Math.min(2, devicePixelRatio || 1);
let DRAG_DPR = Math.min(1.25, DPR);
// A renderer that needs more than 120ms for a frame (a software one, like SwiftShader without a GPU) would play the glide
// and the strike as a slideshow; there the medal cuts straight to each state, as with reduced motion, and a drag draws at
// half resolution. Measured once, right after the first frame.
let slowGL = false;
const stillMedal = () => reduced() || slowGL;
let THREE = null, renderer = null, scene, camera, body, medal, pivot, key, rim, maxAniso = 1, kit, denseGeo = null, midGeo = null, flatGeo = null, sharing = false, envTarget = null;
const uMetal = { value: null }, uOxide = { value: null }, uEnamel = { value: null };
const solids = [], slots = [];
let liveUntil = 0, idleTimer = 0, rig = null, camTween = null, shadowDirty = true, quality = 'full', flatMode = false;
const recoil = { v: 0 };

// ---- materials (3D-1's kit) ------------------------------------------------------------------------------------------
// Albedo from the polish map: oxide where it is 0, the finish's metal where it is 1. With `turn`, the anisotropic highlight
// runs round the coin's centre and only where the metal is polished. With `strike`, uStrike (0…1) is how far the relief
// has been struck: below 1 the polish contrast and the roughness map fade toward an even satin (`ground`; the plate's
// letters fade into its enamel instead, ground 0).
function polished(mat, { metal = uMetal, oxide = uOxide, turn = false, strike = null, ground = .62 } = {}) {
  mat.onBeforeCompile = sh => {
    sh.uniforms.uMetal = metal; sh.uniforms.uOxide = oxide;
    if (strike) sh.uniforms.uStrike = strike;
    let fs = sh.fragmentShader.replace('#include <common>', `#include <common>\nuniform vec3 uMetal;\nuniform vec3 uOxide;${strike ? '\nuniform float uStrike;' : ''}`)
      .replace('#include <map_fragment>', `#ifdef USE_MAP\n\tfloat polishK = texture2D( map, vMapUv ).r;${strike ? `\n\tpolishK = mix( ${ground.toFixed(2)}, polishK, uStrike );` : ''}\n\tdiffuseColor.rgb *= mix( uOxide, uMetal, polishK );\n#else\n\tfloat polishK = 1.0;\n#endif`);
    if (strike) fs = fs.replace('#include <roughnessmap_fragment>', '#include <roughnessmap_fragment>\n\troughnessFactor = mix( 0.36, roughnessFactor, uStrike );');
    if (turn) fs = fs.replace('#include <lights_physical_fragment>', THREE.ShaderChunk.lights_physical_fragment.replace('vec2 anisotropyV = anisotropyVector;',
      '#ifdef USE_MAP\n\t\tvec2 turnUv = vMapUv - 0.5;\n\t\tvec2 anisotropyV = normalize( vec2( - turnUv.y, turnUv.x ) + 1e-4 ) * anisotropyVector.x * polishK;\n\t#else\n\t\tvec2 anisotropyV = anisotropyVector;\n\t#endif'));
    sh.fragmentShader = fs;
  };
  mat.customProgramCacheKey = () => `polish${turn ? '-turn' : ''}${strike ? '-strike' : ''}${ground !== .62 ? `-${ground}` : ''}`;
  return mat;
}
function applyFinish() {
  const f = FINISHES[finishKey];
  uMetal.value = new THREE.Color(f.metal); uOxide.value = new THREE.Color(f.oxide); uEnamel.value = new THREE.Color('#17150f');
  if (scene) scene.environmentIntensity = f.env;
  if (key) key.intensity = f.key || 3.6;
  if (rim) rim.intensity = f.rim || 2.2;
  for (const [m, p] of solids) m.color.lerpColors(uOxide.value, uMetal.value, p);
}
function dataTex(src, w, h, channels, colorSpace = null, repeat = false) {
  const t = new THREE.DataTexture(src, w, h, channels === 1 ? THREE.RedFormat : channels === 2 ? THREE.RGFormat : THREE.RGBAFormat, THREE.UnsignedByteType);
  Object.assign(t, { colorSpace: colorSpace || THREE.NoColorSpace, generateMipmaps: true, minFilter: THREE.LinearMipmapLinearFilter, magFilter: THREE.LinearFilter, anisotropy: maxAniso, unpackAlignment: 1, needsUpdate: true });
  if (repeat) t.wrapT = THREE.RepeatWrapping;
  return t;
}
// Textures are made on first use: the data may arrive before three.js has loaded.
function texOf(sig) {
  const f = faces.get(sig);
  if (!f.tex && THREE) {
    const d = f.data, S = d.S;
    f.tex = { polish: dataTex(d.polish, S, S, 1), normal: dataTex(d.normal, S, S, 4), orm: dataTex(d.orm, S, S, 2) };
    if (d.height) f.tex.height = dataTex(d.height, S, S, 1);
  }
  f.used = performance.now();
  return f.tex;
}
let blank1 = null;
// 1×1 stand-ins, so every material compiles with the same maps it will have later.
function placeholders() {
  const t = (data, ch, cs) => { const x = dataTex(new Uint8Array(data), 1, 1, ch, cs); x.generateMipmaps = false; x.minFilter = THREE.LinearFilter; return x; };
  return { polish: t([158], 1), normal: t([128, 128, 255, 255], 4), orm: t([255, 150], 2), height: t([0], 1), orm4: t([255, 150, 0, 255], 4), print: t([255, 77, 0, 255], 4, THREE.SRGBColorSpace) };
}

// ---- the place states on the mesh -------------------------------------------------------------------------------------
function applyFace(slot, sig) {
  const t = texOf(sig), m = slot.face.material;
  Object.assign(m, { map: t.polish, normalMap: t.normal, roughnessMap: t.orm, aoMap: t.orm, clearcoatMap: t.polish, displacementMap: t.height || blank1.height });
  slot.sig = sig; slot.kind = sig.startsWith('blank') ? 'blank' : 'struck'; slot.S = Number(sig.split(':').pop());
  dirty();
}
// The best face there is for what the place wants: the exact one, else the same value at another size, else what it shows.
function showBest(slot) {
  if (!slot.wantSig || !renderer && !flatMode) return;
  let use = faces.has(slot.wantSig) ? slot.wantSig : null;
  if (!use) { const fam = family(slot.wantSig); for (const S of [RES.focus, RES.seat, RES.drag]) if (faces.has(`${fam}:${S}`)) { use = `${fam}:${S}`; break; } }
  if (use && use !== slot.sig) { if (renderer) applyFace(slot, use); else { slot.sig = use; slot.kind = use.startsWith('blank') ? 'blank' : 'struck'; dirty(); } syncNav(); }
}
function built(sig) {
  if (sig.startsWith('socket:') && renderer) { const k = Number(sig.split(':')[1]) - 1; setFloor(k, sig); }
  for (const s of slots) if (s.wantSig && family(s.wantSig) === family(sig)) showBest(s);
}
// What each place should show now, and the faces it asks for.
function syncCoins() {
  const P = places(), moving = performance.now() < liveUntil;
  P.forEach((p, k) => {
    const slot = slots[k]; if (!slot) return;
    slot.place = p;
    if (p.face === 'empty') { slot.wantSig = null; return; }
    if (p.face === 'blank') { slot.wantSig = blankSig(RES.seat); want(slot.wantSig, coinMsg('distance', liveRec(), 'blank', RES.seat), p.hover ? 0 : 3); }
    else {
      const key = scenes[k], rec = recFor(k, p), sigAt = S => Relief.signature(key, rec, 'struck', S);
      if (p.hover) {
        const have = S => faces.has(sigAt(S));
        if (moving) { slot.wantSig = sigAt(RES.drag); want(slot.wantSig, coinMsg(key, rec, 'struck', RES.drag), 0, k); }
        else {
          // Quick face first only when nothing sharper of this value exists yet (a chip just chosen, a value just typed).
          slot.wantSig = sigAt(RES.focus);
          if (!have(RES.seat) && !have(RES.focus)) want(sigAt(RES.drag), coinMsg(key, rec, 'struck', RES.drag), 0, k);
          if (!have(RES.focus)) want(sigAt(RES.seat), coinMsg(key, rec, 'struck', RES.seat), 1, k);
          want(slot.wantSig, coinMsg(key, rec, 'struck', RES.focus), 2, k);
        }
      } else { slot.wantSig = sigAt(RES.seat); want(slot.wantSig, coinMsg(key, rec, 'struck', RES.seat), 3); }
    }
    showBest(slot);
  });
  // Fine faces still waiting for a place that is no longer open are not needed any more.
  for (const [s, j] of jobs) if (j.place !== null && j.state === 'queued' && (complete || j.place !== stage)) { jobs.delete(s); byId.delete(j.id); }
}
// A value moved: a quick face now, the fine one when the hand has been still for a moment.
function live() {
  liveUntil = performance.now() + 220;
  clearTimeout(idleTimer); idleTimer = setTimeout(() => syncCoins(), 240);
  syncCoins(); dirty();
  cutPeek();
}

// ---- motion ------------------------------------------------------------------------------------------------------------
const easeInOut = t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
const easeOut = t => 1 - Math.pow(1 - t, 3);
const easeIn = t => t * t;
const tweens = [];
function tween(obj, prop, to, dur, ease = easeInOut, delay = 0, onDone = null) {
  stopTween(obj, prop);
  tweens.push({ obj, prop, from: null, to, start: performance.now() + delay, dur, ease, onDone });
  loop();
}
function stopTween(obj, prop) { for (let i = tweens.length - 1; i >= 0; i--) if (tweens[i].obj === obj && tweens[i].prop === prop) tweens.splice(i, 1); }
function stepTweens(now) {
  for (const t of [...tweens]) {
    if (now < t.start) continue;
    if (t.from === null) t.from = t.obj[t.prop];
    const k = clamp((now - t.start) / t.dur, 0, 1);
    t.obj[t.prop] = t.from + (t.to - t.from) * t.ease(k);
    if (k >= 1) { tweens.splice(tweens.indexOf(t), 1); if (t.onDone) t.onDone(); }
  }
  return tweens.length > 0;
}
function settleNow() {
  while (tweens.length) { const t = tweens.shift(); t.obj[t.prop] = t.to; if (t.onDone) t.onDone(); }
  if (camTween) { rig = camTween.to; camTween = null; }
  dirty();
}
// Arrange the medal for the step (or the end): which coin hovers, which are seated, where the camera is. Returns in how
// many ms the whole medal will be in view on this move (null: not on this move, or at once).
function go({ instant = false, afterStrike = false, enterDelay = null } = {}) {
  const quick = instant || stillMedal();
  // Without WebGL the camera cuts and never shows the whole medal during the input: the face changes at once there.
  if (quick || !renderer) flushRestrikes();
  syncCoins();
  slots.forEach(slot => {
    const p = slot.place;
    if (!p) return;
    if (p.face === 'empty') { if (slot.present && !slot.leaving) leave(slot, quick); return; }
    const z = p.hover ? HOVER : 0, s = p.hover ? PREVIEW : 1;
    // Opened again while it was still coming down (a strike, a re-strike): it is picked up from where it is.
    if (p.hover && slot.striking) { stopTween(slot, 'z'); stopTween(slot, 's'); slot.striking = false; }
    if (!slot.present || slot.leaving) {
      // A coin comes in from above, as if set down by hand, as the camera arrives; it is not drawn before that.
      const delay = enterDelay ?? (afterStrike ? 590 : 140);
      stopTween(slot, 'z'); slot.leaving = false; slot.present = true; slot.s = s;
      if (quick) { slot.z = z; slot.showAt = 0; } else { slot.z = ENTER; slot.showAt = performance.now() + delay; tween(slot, 'z', z, 340, easeOut, delay); }
      dirty();
    } else if (!slot.striking) {
      if (quick) { stopTween(slot, 'z'); stopTween(slot, 's'); slot.z = z; slot.s = s; dirty(); }
      else { if (slot.z !== z) tween(slot, 'z', z, 300, easeInOut, afterStrike ? 200 : 0); if (slot.s !== s) tween(slot, 's', s, 300, easeInOut, afterStrike ? 200 : 0); }
    }
  });
  const wideIn = moveCamera(quick, afterStrike);
  // Coins waiting to be struck again are struck as the whole medal comes into view.
  if (wideIn !== null) restrikes.forEach(k => restrike(k, Math.max(0, wideIn - 60)));
  return wideIn;
}
function flushRestrikes() {
  restrikes.forEach(k => { const slot = slots[k]; if (!slot) return; stopTween(slot, 'z'); stopTween(slot, 's'); slot.z = 0; slot.s = 1; slot.striking = false; slot.rec = committed; });
  restrikes.clear(); held.clear();
}
// Struck again with a face that changed elsewhere: lifted a little, set down with the new face, the relief rising as in a
// strike. The medal does not give under it; it is a smaller blow than Next.
function restrike(k, delay) {
  const slot = slots[k];
  if (!slot) return;
  slot.striking = true;
  tween(slot, 'z', .2, 140, easeOut, delay, () => {
    restrikes.delete(k); held.delete(k); slot.rec = committed; slot.s = PREVIEW;
    syncCoins(); syncNav();
    tween(slot, 'z', 0, 150, easeIn, 0, () => tween(slot, 's', 1, 260, easeOut, 0, () => { slot.striking = false; }));
  });
}
// A place left before its Next: the coin is lifted off.
function leave(slot, quick) {
  stopTween(slot, 's');
  if (quick) { stopTween(slot, 'z'); slot.present = false; slot.sig = null; dirty(); return; }
  slot.leaving = true;
  tween(slot, 'z', ENTER, 240, easeIn, 0, () => { if (slot.leaving) { slot.present = false; slot.leaving = false; slot.sig = null; dirty(); } });
}
// Next: the coin drops into its socket (accelerating), and on impact the relief rises to full while the whole medal
// gives a little under the blow. Nothing glints; the change is in the metal.
function strikeCoin(k, quick) {
  const slot = slots[k];
  lastStrikeAt = performance.now();
  if (!slot) return;
  syncCoins();
  stopTween(slot, 'z'); stopTween(slot, 's');
  slot.leaving = false; slot.present = true; slot.showAt = 0;
  if (quick) { slot.z = 0; slot.s = 1; slot.striking = false; dirty(); return; }
  // From a blank (요일 skipped is still an answer) the relief rises from nothing.
  if (slot.place.face === 'struck' && slot.kind !== 'struck') slot.s = 0;
  slot.striking = true;
  tween(slot, 'z', 0, DROP, easeIn);
  tween(slot, 's', 1, 260, easeOut, DROP, () => { slot.striking = false; });
  // S6: a few sparks and a ring where it lands (the reveal's, smaller). Not drawn flat: the flat coin has no fall.
  if (renderer) setTimeout(() => { if (destroyed) return; const p = coinScreen(k); burstAt(p, 12, .55); ripple(p, p.r * 2.4); }, DROP);
  recoil.v = 0; tween(recoil, 'v', 1, 280, t => t, DROP, () => { recoil.v = 0; });
}
// Moves the camera; returns in how many ms the whole medal will be in view on this move (null: it will not be).
function moveCamera(quick, afterStrike) {
  if (!renderer) { dirty(); return null; }
  const to = targetRig(), now = performance.now();
  if (!rig || quick) { rig = to; camTween = null; dirty(); return null; }
  // With the look at the whole medal: back off to it as the relief rises, hold it a moment (longer while a coin is
  // struck again), then on to the next place.
  if (afterStrike && !complete && peekOn) {
    camTween = { from: { ...rig }, via: wideRig(), to, start: now + PEEK.at, out: PEEK.out, hold: PEEK.hold + (restrikes.size ? PEEK.restrike : 0), in: PEEK.in };
    loop();
    return PEEK.at + PEEK.out;
  }
  // After a strike the camera waits for the impact and the first of the relief rising, then moves on.
  camTween = { from: { ...rig }, to, start: now + (afterStrike ? DROP + 160 : 0), dur: complete ? 860 : 680, bump: complete ? 0 : .07 };
  loop();
  return complete ? camTween.start - now + camTween.dur : null;
}
// Input while the camera is backing off or holding the whole medal: it goes to the open coin now.
function cutPeek() {
  const c = camTween, now = performance.now();
  if (!c || !c.via || now - c.start >= c.out + c.hold) return;
  camTween = { from: { ...rig }, to: c.to, start: now, dur: 420, bump: 0 };
  loop();
}
const mixRig = (a, b, e) => ({ x: lerp(a.x, b.x, e), y: lerp(a.y, b.y, e), D: lerp(a.D, b.D, e), fx: lerp(a.fx, b.fx, e), fy: lerp(a.fy, b.fy, e) });
function stepCamera(now) {
  if (!camTween) return false;
  const c = camTween;
  if (now < c.start) return true;
  if (c.via) {
    const t = now - c.start;
    if (t < c.out) { rig = mixRig(c.from, c.via, easeInOut(t / c.out)); return true; }
    if (t < c.out + c.hold) { rig = { ...c.via }; return true; }
    const k = clamp((t - c.out - c.hold) / c.in, 0, 1);
    rig = mixRig(c.via, c.to, easeInOut(k));
    if (k >= 1) { rig = c.to; camTween = null; return false; }
    return true;
  }
  const t = clamp((now - c.start) / c.dur, 0, 1), e = easeInOut(t);
  rig = { ...mixRig(c.from, c.to, e), D: lerp(c.from.D, c.to.D, e) * (1 + c.bump * Math.sin(Math.PI * t)) };
  if (t >= 1) { rig = c.to; camTween = null; return false; }
  return true;
}

// ---- framing ----------------------------------------------------------------------------------------------------------
const boxOf = el => { const r = el.getBoundingClientRect(), base = root.getBoundingClientRect(); return { x: r.left - base.left, y: r.top - base.top, w: r.width, h: r.height }; };
// A camera looking straight at the medal that puts world point `at` on screen point `screen` with `ppu` pixels per unit
// at depth z.
function rigAt(at, screen, ppu, z = .24) {
  const D = z + height / ppu / 2 / Math.tan(FOV * Math.PI / 360);
  return { x: at.x - (screen.x - width / 2) / ppu, y: at.y + (screen.y - height / 2) / ppu, D, fx: at.x, fy: at.y };
}
// Input: the open coin in the middle of the space between the question and the input panel, at about two thirds of the
// screen width (≥ 240px across on 390×844), so its neighbours and the ring show at the edges.
// The hovering coin is nearer the camera and leans, so it draws about 4% larger than R; the band keeps 12px around that.
const coinRadius = band => Math.max(60, Math.min((band.h / 2 - 12) / 1.04, width * .34));
function focusRig(k) {
  const band = boxOf($('#medal-stage')), [fx, fy] = coinAt(k);
  return rigAt({ x: fx, y: fy }, { x: band.x + band.w / 2, y: band.y + band.h / 2 }, coinRadius(band));
}
// End: the whole medal in the figure box; the ribbon rises behind the title.
function completeRig() {
  const f = boxOf($('#complete-figure')), mw = 2 * BOUNDS.x, mh = BOUNDS.top - BOUNDS.bottom, k = Math.min(.97 * f.w / mw, .96 * f.h / mh);
  return rigAt({ x: 0, y: 0 }, { x: f.x + f.w / 2, y: f.y + f.h / 2 }, k, .2);
}
// The whole medal (the ring of coins; the ribbon goes under the question) in the same space, for the look after a strike.
function wideRig() {
  const band = boxOf($('#medal-stage')), k = Math.min(.96 * band.w / (2 * BOUNDS.x), .96 * band.h / (BOUNDS.top - BOUNDS.bottom));
  return rigAt({ x: 0, y: 0 }, { x: band.x + band.w / 2, y: band.y + band.h / 2 }, k, .2);
}
const targetRig = () => complete ? completeRig() : focusRig(stage);
// 3D-1's framing, for the share image: the medal fills the width, sits near the bottom, the ribbon above.
function fitShare(cam, w, h, { widthShare = .95, heightShare = .80, bottomPad = .065 } = {}) {
  const mw = 2 * BOUNDS.x, mh = BOUNDS.top - BOUNDS.bottom, k = Math.min(widthShare * w / mw, heightShare * h / mh);
  const visH = h / k, D = visH / 2 / Math.tan(FOV * Math.PI / 360), yc = BOUNDS.bottom - bottomPad * h / k + visH / 2;
  cam.fov = FOV; cam.aspect = w / h; cam.position.set(0, yc, D); cam.lookAt(0, yc, 0); cam.near = Math.max(.1, D - 12); cam.far = D + 12; cam.updateProjectionMatrix();
  return { k, medalWidth: k * mw, coinRadius: k };
}

// ---- frame loop, tilt -------------------------------------------------------------------------------------------------
const tilt = { x: 0, y: 0, vx: 0, vy: 0 }, MAX = 25 * Math.PI / 180;
let drag = null, spring = false, lastFrame = 0, raf = 0;
function dirty() { if (renderer || flatMode) loop(); }
function loop() { if (!raf) raf = requestAnimationFrame(frame); }
function applyRig() {
  if (!rig) return;
  const D = rig.D * view.zoom;
  camera.fov = FOV; camera.aspect = width / height; camera.position.set(rig.x, rig.y, D); camera.lookAt(rig.x, rig.y, 0);
  camera.near = Math.max(.1, D - 4); camera.far = D + 4; camera.updateProjectionMatrix();
  pivot.position.set(rig.fx, rig.fy, -.045 * Math.sin(Math.PI * recoil.v)); medal.position.set(-rig.fx, -rig.fy, 0);
  pivot.rotation.set(tilt.x, tilt.y, 0);
}
function applySlots() {
  for (const slot of slots) {
    const on = slot.present && performance.now() >= slot.showAt;
    slot.coin.visible = on;
    const geo = slowGL ? flatGeo : sharing || (!complete && slot.k === stage) ? denseGeo : midGeo;
    if (slot.face.geometry !== geo) { slot.face.geometry = geo; shadowDirty = true; }
    if (on !== slot.wasOn) { slot.wasOn = on; shadowDirty = true; }
    // A hovering coin also leans a few degrees toward the key light, and lies flat once it has landed.
    if (on && slot.coin.position.z !== slot.z) { const lean = clamp(slot.z / HOVER, 0, 1); slot.coin.position.z = slot.z; slot.coin.rotation.set(.07 * lean, -.06 * lean, 0); shadowDirty = true; }
    const s = slot.kind === 'struck' ? slot.s : 1, m = slot.face.material;
    m.userData.strike.value = s; m.normalScale.set(s, s); m.aoMapIntensity = s; m.clearcoat = .03 + .47 * s;
    const disp = useDisp && !slowGL;
    m.displacementScale = disp ? Math.max(1e-5, RELIEF * .8 * s) : 1e-5; m.displacementBias = -.1 * RELIEF * s * (disp ? 1 : 0);
    // The shadow of a hovering coin on its socket, thrown to the lower right (away from the key light, a little longer
    // than the key's own angle so it reads from straight on), fading as the coin lands.
    const h = on ? clamp((slot.z - .12) / (HOVER - .12), 0, 1.4) : 0, [x, y] = coinAt(slot.k);
    slot.blob.visible = h > .01;
    if (slot.blob.visible) { slot.blob.material.opacity = .7 * Math.min(1, h); const d = .10 + slot.z - .225; slot.blob.position.set(x + 1.05 * d, y - 1.3 * d, .226); slot.blob.scale.setScalar(1 + .12 * Math.max(0, h - 1)); }
  }
}
function setQuality(q) {
  if (quality === q || !renderer || (!LIGHT_PASS && q === 'drag')) return;
  quality = q;
  renderer.setPixelRatio(q === 'drag' ? DRAG_DPR : DPR); renderer.setSize(width, height, false);
  if (q === 'full') shadowDirty = true;
}
let poseKey = '';
function render() {
  applyRig(); applySlots();
  // The plate's strike: as a coin's face, the letters' metal and their walls come up with it.
  uPlate.value = plate.s; kit.enamel.normalScale.set(plate.s, plate.s);
  // The wall shadow follows the medal's pose (tilt, the give under a strike); redrawn whenever that pose changed.
  const pose = `${pivot.rotation.x.toFixed(5)},${pivot.rotation.y.toFixed(5)},${pivot.position.z.toFixed(5)}`;
  if (pose !== poseKey) { poseKey = pose; shadowDirty = true; }
  if (shadowDirty && quality === 'full') { renderer.shadowMap.needsUpdate = true; shadowDirty = false; }
  renderer.render(scene, camera);
}
function frame(now) {
  raf = 0;
  if (destroyed) return;
  if (flatMode) { stepTweens(now); stepCamera(now); flatDraw(); if (tweens.length || camTween) loop(); return; }
  if (!renderer) return;
  if (spring) {
    const dt = Math.min(.034, (now - (lastFrame || now)) / 1000 || .016), K = 120, C = 2 * Math.sqrt(K) * .62;
    for (const [p, v] of [['x', 'vx'], ['y', 'vy']]) { tilt[v] += (-K * tilt[p] - C * tilt[v]) * dt; tilt[p] += tilt[v] * dt; }
    if (Math.abs(tilt.x) + Math.abs(tilt.y) < .0006 && Math.abs(tilt.vx) + Math.abs(tilt.vy) < .002) { tilt.x = tilt.y = tilt.vx = tilt.vy = 0; spring = false; setQuality('full'); }
  }
  // S6 reveal: the medal sways under the light, settling to face front just before the plate is struck.
  if (reveal.on && !reveal.landed && !drag) {
    const t = (now - reveal.t0) / 1000, a = clamp(t / 1.2, 0, 1) * clamp((REVEAL.strike / 1000 - t) / .9, 0, 1);
    tilt.x = a * .06 * Math.sin(t * 1.7); tilt.y = a * .2 * Math.sin(t * 1.1);
  }
  const moving = stepTweens(now) | stepCamera(now);
  lastFrame = now;
  render();
  if (moving || spring || drag || reveal.on) loop(); else lastFrame = 0;
}
// Drag the medal to hold it to the light; it springs back to face you. Never an input.
function bindTilt(canvas) {
  canvas.addEventListener('pointerdown', e => {
    if (e.button > 0) return;
    drag = { id: e.pointerId, x: e.clientX, y: e.clientY, tx: tilt.x, ty: tilt.y }; spring = false; tilt.vx = tilt.vy = 0;
    setQuality('drag'); canvas.setPointerCapture(e.pointerId); loop();
  });
  canvas.addEventListener('pointermove', e => {
    if (!drag || e.pointerId !== drag.id) return;
    const w = Math.max(240, canvas.clientWidth);
    tilt.y = clamp(drag.ty + (e.clientX - drag.x) / w * 1.25, -MAX, MAX);
    tilt.x = clamp(drag.tx + (e.clientY - drag.y) / w * 1.25, -MAX, MAX);
    loop();
  });
  const release = () => {
    if (!drag) return;
    drag = null;
    if (stillMedal()) { tilt.x = tilt.y = tilt.vx = tilt.vy = 0; spring = false; setQuality('full'); } else spring = true;
    loop();
  };
  for (const ev of ['pointerup', 'pointercancel', 'lostpointercapture']) canvas.addEventListener(ev, release);
  const keys = { ArrowLeft: ['y', -1], ArrowRight: ['y', 1], ArrowUp: ['x', -1], ArrowDown: ['x', 1] };
  canvas.addEventListener('keydown', e => {
    const k = keys[e.key]; if (!k) return; e.preventDefault();
    if (!drag) { drag = { id: 'key', x: 0, y: 0, tx: 0, ty: 0 }; setQuality('drag'); }
    tilt[k[0]] = k[1] * MAX * .72; spring = false; loop();
  });
  canvas.addEventListener('keyup', e => { if (keys[e.key] && drag && drag.id === 'key') release(); });
  canvas.addEventListener('blur', () => { if (drag && drag.id === 'key') release(); });
}

// ---- studio, scene, prewarm -------------------------------------------------------------------------------------------
// 3D-1's photo studio for the reflections: a dark room, a large softbox up front on the left, a tall strip on the right,
// a kicker high behind, a low bounce card.
function studioScene() {
  const s = new THREE.Scene();
  s.add(new THREE.Mesh(new THREE.SphereGeometry(30, 32, 16), new THREE.MeshBasicMaterial({ color: new THREE.Color(.018, .016, .014), side: THREE.BackSide })));
  const panel = (w, h, power, pos, tint = 0xffffff) => {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ color: new THREE.Color(tint).multiplyScalar(power), side: THREE.DoubleSide }));
    m.position.set(...pos); m.lookAt(0, 0, 0); s.add(m);
  };
  panel(12, 8, 6, [-10, 9, 10]);
  panel(3.5, 16, 3.2, [13, 1, 2], 0xfff2e6);
  panel(10, 5, 2.2, [3, 11, -11]);
  panel(16, 4, .7, [0, -11, 7], 0xffe9d6);
  panel(18, 6, 1.1, [2, 3, 16]);
  return s;
}
function blobTexture() {
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const g = c.getContext('2d'), r = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  r.addColorStop(0, 'rgba(0,0,0,.92)'); r.addColorStop(.66, 'rgba(0,0,0,.8)'); r.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = r; g.fillRect(0, 0, 128, 128);
  return new THREE.CanvasTexture(c);
}
function setFloor(k, sig) {
  const t = texOf(sig), m = slots[k].floor.material;
  Object.assign(m, { map: t.polish, normalMap: t.normal, roughnessMap: t.orm, aoMap: t.orm });
  dirty();
}
const sync = () => { const gl = renderer.getContext(), px = new Uint8Array(4); gl.readPixels(0, 0, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, px); };
async function start3d() {
  THREE = await import('./medal3d-three.js');
  if (destroyed) return;
  const canvas = $('#gl');
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(DPR); renderer.setSize(width, height, false);
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1;
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFShadowMap; renderer.shadowMap.autoUpdate = false;
  maxAniso = Math.min(8, renderer.capabilities.getMaxAnisotropy());
  // A software renderer is known by name before the first frame where the browser tells it; the frame time is the check.
  const gl = renderer.getContext(), dbg = gl.getExtension('WEBGL_debug_renderer_info');
  const rendererName = dbg ? gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL) : '';
  if (/swiftshader|llvmpipe|software/i.test(rendererName)) slowGL = true;
  scene = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer), studio = studioScene();
  envTarget = pmrem.fromScene(studio, .04); scene.environment = envTarget.texture; pmrem.dispose(); disposeTree(studio);
  camera = new THREE.PerspectiveCamera(FOV, width / height, .1, 100);
  key = new THREE.DirectionalLight(0xffffff, 3.6);
  key.position.set(-5, 6.5, 9); key.target.position.set(0, .3, 0);
  key.castShadow = true; key.shadow.mapSize.set(1024, 1024);
  Object.assign(key.shadow.camera, { left: -7, right: 7, top: 9, bottom: -7, near: 1, far: 30 });
  key.shadow.bias = -.0003; key.shadow.normalBias = .012; key.shadow.radius = 6; key.shadow.blurSamples = 16;
  rim = new THREE.DirectionalLight(0xfff4e8, 2.2);
  rim.position.set(6, 3.5, -5);
  scene.add(key, key.target, rim);
  const wall = new THREE.Mesh(new THREE.PlaneGeometry(80, 80), new THREE.ShadowMaterial({ opacity: .36 }));
  wall.position.z = -1.3; wall.receiveShadow = true; scene.add(wall);
  blank1 = placeholders();
  const P = blank1;
  kit = {
    metal(polish, roughness, { anisotropy = 0, clearcoat = 0 } = {}) { const m = new THREE.MeshPhysicalMaterial({ metalness: 1, roughness, anisotropy, clearcoat, clearcoatRoughness: .08 }); solids.push([m, polish]); return m; },
    face() {
      const strike = { value: 1 };
      const m = polished(new THREE.MeshPhysicalMaterial({ map: P.polish, normalMap: P.normal, roughnessMap: P.orm, aoMap: P.orm, clearcoatMap: P.polish, displacementMap: P.height, displacementScale: 1e-5, metalness: 1, roughness: 1, clearcoat: .5, clearcoatRoughness: .1, anisotropy: .5 }), { turn: true, strike });
      m.userData.strike = strike; return m;
    },
    socketFloor: null,
  };
  const floorMat = () => polished(new THREE.MeshPhysicalMaterial({ map: P.polish, normalMap: P.normal, roughnessMap: P.orm, aoMap: P.orm, metalness: 1, roughness: 1, anisotropy: .3 }), { turn: true });
  kit.socketFloor = floorMat();
  kit.enamel = polished(new THREE.MeshPhysicalMaterial({ map: P.polish, normalMap: P.normal, roughnessMap: P.orm4, aoMap: P.orm4, metalnessMap: P.orm4, metalness: 1, roughness: 1, clearcoat: 1, clearcoatRoughness: .06 }), { oxide: uEnamel, strike: uPlate, ground: 0 });
  kit.ribbon = new THREE.MeshPhysicalMaterial({ map: P.print, normalMap: P.normal, normalScale: new THREE.Vector2(.55, .55), color: new THREE.Color('#9a9a9a'), roughness: .66, metalness: 0, sheen: .45, sheenRoughness: .5, sheenColor: new THREE.Color('#ff9a66'), side: THREE.DoubleSide });
  // A dense face mesh (96 rings × 384) so the displacement map can raise the relief; 3D-1 uses 24 × 160.
  // Face meshes by distance: dense (96 rings × 384) for the open coin the camera is close to and for the share image,
  // medium (48 × 192, about a vertex per screen pixel at the end) for the rest, 3D-1's 24 × 160 on a slow renderer.
  body = proceduralBody(THREE, kit, { face: [96, 384] });
  denseGeo = body.slots[0].face.geometry; midGeo = faceGeometry(THREE, 48, 192); flatGeo = faceGeometry(THREE);
  const blobTex = blobTexture();
  body.slots.forEach((s, k) => {
    s.floor.material = floorMat();
    const blob = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 2.6), new THREE.MeshBasicMaterial({ map: blobTex, color: 0x000000, transparent: true, opacity: 0, depthWrite: false }));
    blob.visible = false; body.root.add(blob);
    // present: the place has a coin (it may still be waiting to be drawn until showAt).
    slots.push(Object.assign(s, { k, blob, present: false, showAt: 0, z: 0, s: 1, sig: null, wantSig: null, kind: 'blank', S: 0, place: null, leaving: false, striking: false }));
    s.coin.visible = false;
  });
  medal = new THREE.Group(); medal.add(body.root, strap(THREE, kit, body.ringTop, 4));
  pivot = new THREE.Group(); pivot.add(medal); scene.add(pivot);
  applyFinish();
  // Prewarm: every coin shown, hovering and seated, with the hover shadows, so every program the steps need — the face
  // with displacement and its shadow-depth variant, the numbered floors, the blobs — compiles now, not at the first Next.
  rig = targetRig();
  slots.forEach((s, k) => { s.present = true; s.z = k % 2 ? HOVER : 0; s.kind = 'struck'; s.s = PREVIEW; });
  applyRig(); applySlots();
  // Parallel compile where the driver offers it (three warns otherwise); either way it is done before the first frame.
  if (renderer.extensions.has('KHR_parallel_shader_compile')) await renderer.compileAsync(scene, camera); else renderer.compile(scene, camera);
  if (destroyed) return;
  renderer.shadowMap.needsUpdate = true; renderer.render(scene, camera); sync();
  slots.forEach(s => { s.present = false; s.z = 0; s.s = 1; s.kind = 'blank'; s.blob.visible = false; });
  shadowDirty = true;
  bindTilt(canvas);
}
// Plate and ribbon maps from the builder: the plate's AO/roughness and metal channels go into one texture as in 3D-1.
function setPlate(sig) {
  const f = faces.get(sig);
  if (!f.tex) {
    const d = f.data, n = d.W * d.Hh, orm = new Uint8Array(n * 4);
    for (let i = 0; i < n; i++) { orm[i * 4] = d.orm[i * 2]; orm[i * 4 + 1] = d.orm[i * 2 + 1]; orm[i * 4 + 2] = d.metal[i]; orm[i * 4 + 3] = 255; }
    f.tex = { polish: dataTex(d.polish, d.W, d.Hh, 1), normal: dataTex(d.normal, d.W, d.Hh, 4), orm: dataTex(orm, d.W, d.Hh, 4) };
  }
  const o = f.tex.orm;
  Object.assign(kit.enamel, { map: f.tex.polish, normalMap: f.tex.normal, roughnessMap: o, aoMap: o, metalnessMap: o });
}
function setRibbon(sig) {
  const d = faces.get(sig).data;
  faces.get(sig).tex = { print: dataTex(d.print, d.W, d.Hh, 4, THREE.SRGBColorSpace, true), normal: dataTex(d.normal, d.W, d.Hh, 4, null, true) };
  Object.assign(kit.ribbon, { map: faces.get(sig).tex.print, normalMap: faces.get(sig).tex.normal });
}

// ---- without WebGL: the same faces, flat ----------------------------------------------------------------------------
const flats = new Map();
function flatFace(sig) {
  if (!flats.has(sig)) {
    const d = faces.get(sig).data, f = FINISHES[finishKey], hex = s => [1, 3, 5].map(i => parseInt(s.slice(i, i + 2), 16));
    const c = document.createElement('canvas'); c.width = c.height = d.S;
    c.getContext('2d').putImageData(Relief.preview({ S: d.S, polish: d.polish, normal: d.normal }, hex(f.metal), hex(f.oxide)), 0, 0);
    flats.set(sig, c);
  }
  return flats.get(sig);
}
function flatDraw() {
  const cv = $('#flat'), dpr = Math.min(2, devicePixelRatio || 1);
  if (cv.width !== Math.round(width * dpr)) { cv.width = Math.round(width * dpr); cv.height = Math.round(height * dpr); }
  const g = cv.getContext('2d'); g.setTransform(dpr, 0, 0, dpr, 0, 0); g.clearRect(0, 0, width, height);
  const r = complete ? completeRig() : focusRig(stage), ppu = height / ((r.D - .24) * 2 * Math.tan(FOV * Math.PI / 360));
  flatPaint(g, width, height, ppu, r.x, r.y);
}
// The flat medal into g (w × h): ppu pixels per unit, world point (cx, cy) in the middle. The share image passes its own
// framing (fitShare's) and, with the record hidden, the record coins' name-only faces.
function flatPaint(g, width, height, ppu, cx, cy, faceOf = slot => slot.sig) {
  const P = (x, y) => [width / 2 + (x - cx) * ppu, height / 2 - (y - cy) * ppu], f = FINISHES[finishKey];
  g.fillStyle = '#ff4d00';
  for (const s of [-1, 1]) { const a = .40, [x0, y0] = P(0, 3.48); g.beginPath(); g.moveTo(x0 - .95 * ppu, y0); g.lineTo(x0 + .95 * ppu, y0); g.lineTo(x0 + (.95 + s * 14 * Math.sin(a)) * ppu, y0 - 14 * ppu); g.lineTo(x0 + (-.95 + s * 14 * Math.sin(a)) * ppu, y0 - 14 * ppu); g.fill(); }
  g.fillStyle = f.metal; g.beginPath();
  for (let i = 0; i < 7; i++) { const [x, y] = P(...coinAt(i)); g.moveTo(x + 1.16 * ppu, y); g.arc(x, y, 1.16 * ppu, 0, Math.PI * 2); }
  g.fill();
  slots.forEach(slot => {
    const [x, y] = P(...coinAt(slot.k)), sig = faceOf(slot);
    g.fillStyle = f.oxide; g.beginPath(); g.arc(x, y, ppu, 0, Math.PI * 2); g.fill();
    if (!slot.present || !sig || !faces.has(sig)) {
      g.strokeStyle = 'rgba(247,244,237,.45)'; g.setLineDash([5, 4]); g.lineWidth = 1.5; g.beginPath(); g.arc(x, y, .84 * ppu, 0, Math.PI * 2); g.stroke(); g.setLineDash([]);
      g.fillStyle = 'rgba(247,244,237,.6)'; g.font = `700 ${Math.max(10, .3 * ppu)}px StudyCondensed, sans-serif`; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(String(slot.k + 1).padStart(2, '0'), x, y);
      return;
    }
    const lift = slot.z * .06 * ppu;
    g.save(); g.beginPath(); g.arc(x - lift, y - lift, .93 * ppu, 0, Math.PI * 2); g.clip(); g.drawImage(flatFace(sig), x - lift - .93 * ppu, y - lift - .93 * ppu, 1.86 * ppu, 1.86 * ppu); g.restore();
  });
  const [px, py] = P(0, 0); g.fillStyle = '#17150f'; g.beginPath(); if (g.roundRect) g.roundRect(px - 1.09 * ppu, py - .36 * ppu, 2.18 * ppu, .72 * ppu, .1 * ppu); else g.rect(px - 1.09 * ppu, py - .36 * ppu, 2.18 * ppu, .72 * ppu); g.fill();
  // The struck plate: its own maps, lit flat as the coins are.
  if (plate.figure && faces.has(plate.sig)) { g.save(); g.clip(); g.drawImage(flatPlate(plate.sig), px - 1.09 * ppu, py - .36 * ppu, 2.18 * ppu, .72 * ppu); g.restore(); return; }
  g.fillStyle = f.metal; g.font = `650 ${.22 * ppu}px StudySans, sans-serif`; g.textAlign = 'center'; g.textBaseline = 'alphabetic'; g.fillText('지난 28일', px, py - .06 * ppu);
}
function flatPlate(sig) {
  if (!flats.has(sig)) {
    const d = faces.get(sig).data, hex = s => [1, 3, 5].map(i => parseInt(s.slice(i, i + 2), 16));
    const c = document.createElement('canvas'); c.width = d.W; c.height = d.Hh;
    c.getContext('2d').putImageData(Relief.preview({ W: d.W, Hh: d.Hh, polish: d.polish, normal: d.normal }, hex(FINISHES[finishKey].metal), hex('#17150f')), 0, 0);
    flats.set(sig, c);
  }
  return flats.get(sig);
}

// ---- completion: finish, share images --------------------------------------------------------------------------------
$$('input[name=finish]').forEach(input => input.addEventListener('change', () => {
  finishKey = input.value; flats.clear();
  if (renderer) applyFinish();
  dirty(); syncNav();
  onFinishChange?.();
}));
// '분석 펼쳐보기': a plate still on its way is struck at once (its map first), then the result card is shown (S4).
$('#open-result').addEventListener('click', async () => {
  if (plate.ready) await plate.ready;
  if (destroyed || !complete) return;
  settlePlate(); onOpenResult();
});
// All seated coins at the seat size, and the plate being struck, before a share render.
function facesReady() { syncCoins(); return Promise.all([...slots.filter(s => s.wantSig).map(s => want(s.wantSig, null, 1).then(() => showBest(s))), plate.ready]); }
const SUPER = 2;
// With the record hidden, the coins that carry it (01 총거리 … 05 강한 훈련, and 07 요일 — the days run are a routine
// someone could follow) show only the record's name on share image 1. They used to go blank, and five blank coins read
// as unopened badge slots (S5-E, 운영자 결정 2026-10-08). 06 목표 is a choice, not a record, and stays.
const HIDDEN = new Set([0, 1, 2, 3, 4, 6]);
const hiddenSig = k => `${scenes[k]}:hidden:${RES.seat}`;
// The medal for share image 1 in the figure box: a front-on WebGL render, or without WebGL the flat drawing in the same
// framing (it used to be the screen's layout scaled down, so the medal came out small).
function renderFigure(g, fig, hideNumbers) {
  const faceOf = slot => (hideNumbers && HIDDEN.has(slot.k) ? hiddenSig(slot.k) : slot.sig);
  if (!renderer) {
    // fitShare's framing without a camera: k pixels per unit, the medal's bottom bottomPad × h above the box's bottom.
    const { widthShare = .95, heightShare = .80, bottomPad = .065 } = fig.fit, mw = 2 * BOUNDS.x, mh = BOUNDS.top - BOUNDS.bottom;
    const k = Math.min(widthShare * fig.w / mw, heightShare * fig.h / mh), yc = BOUNDS.bottom - bottomPad * fig.h / k + fig.h / k / 2;
    // Clipped to the box as the WebGL render is: the flat ribbon runs 14 units up and crossed the analysis image's header
    // (S6 QA 2026-10-10, '지난 28일' under the small medal).
    g.save(); g.translate(fig.x, fig.y); g.beginPath(); g.rect(0, 0, fig.w, fig.h); g.clip(); flatPaint(g, fig.w, fig.h, k, 0, yc, faceOf); g.restore();
    return { k, medalWidth: k * mw, coinRadius: k };
  }
  const swapped = [];
  for (const slot of slots) { const sig = faceOf(slot); if (sig !== slot.sig) { swapped.push([slot, slot.sig]); applyFace(slot, sig); } }
  const keepPr = renderer.getPixelRatio(), keepTilt = [tilt.x, tilt.y];
  const shadowAt = size => { key.shadow.mapSize.set(size, size); if (key.shadow.map) { key.shadow.map.dispose(); key.shadow.map = null; } renderer.shadowMap.needsUpdate = true; };
  renderer.setPixelRatio(1); renderer.setSize(fig.w * SUPER, fig.h * SUPER, false); shadowAt(2048);
  const cam = camera.clone(), f = fitShare(cam, fig.w, fig.h, fig.fit);
  tilt.x = tilt.y = 0; sharing = true; applySlots(); pivot.rotation.set(0, 0, 0); pivot.position.set(0, 0, 0); medal.position.set(0, 0, 0);
  renderer.render(scene, cam); sharing = false;
  g.imageSmoothingEnabled = true; g.imageSmoothingQuality = 'high';
  g.drawImage(renderer.domElement, fig.x, fig.y, fig.w, fig.h);
  for (const [slot, sig] of swapped) applyFace(slot, sig);
  shadowAt(1024);
  renderer.setPixelRatio(keepPr); renderer.setSize(width, height, false); [tilt.x, tilt.y] = keepTilt; shadowDirty = true; render();
  return f;
}
// Share images (D6), drawn on canvas (no DOM capture): 'cover' = the medal with its struck plate + figure, epithet,
// oracle · 'analysis' = the three scores, the two pieces of evidence, strength, watch-out, next 14 days. card holds the
// result card's texts (running-card-result.tsx); the layout is medal3d-share.js. Resolves to a PNG blob.
async function shareImage(kind, page, { card, hideNumbers = false }) {
  if (!complete) throw new Error('share before the medal is finished');
  const [W, H] = SHARE_SIZES[kind], c = document.createElement('canvas');
  c.width = W; c.height = H;
  const g = c.getContext('2d');
  if (page === 'cover') {
    await facesReady();
    const pins = hideNumbers ? [...HIDDEN].map(hiddenSig) : [];
    pins.forEach(sig => sharePins.add(sig));
    try {
      if (hideNumbers) await Promise.all([...HIDDEN].map(k => want(hiddenSig(k), coinMsg(scenes[k], liveRec(), 'hidden', RES.seat), 0)));
      if (destroyed) throw new Error('destroyed');
      settleNow();
      // drawCover waits for the picture and the fonts first; the flow may be torn down ('다시 하기') in between.
      await drawCover(g, kind, card, (fig, target = g) => {
        if (destroyed) throw new Error('destroyed');
        return renderFigure(target, fig, hideNumbers);
      });
    } finally { pins.forEach(sig => sharePins.delete(sig)); }
  } else {
    await facesReady();
    const pins = hideNumbers ? [...HIDDEN].map(hiddenSig) : [];
    pins.forEach(sig => sharePins.add(sig));
    try {
      if (hideNumbers) await Promise.all([...HIDDEN].map(k => want(hiddenSig(k), coinMsg(scenes[k], liveRec(), 'hidden', RES.seat), 0)));
      if (destroyed) throw new Error('destroyed');
      settleNow();
      await drawAnalysis(g, kind, card, hideNumbers, (fig, target = g) => {
        if (destroyed) throw new Error('destroyed');
        return renderFigure(target, fig, hideNumbers);
      });
    } finally { pins.forEach(sig => sharePins.delete(sig)); }
  }
  return new Promise((resolve, reject) => c.toBlob(b => (b ? resolve(b) : reject(new Error('toBlob'))), 'image/png'));
}

// The result card uses the same struck faces and finish as the completed medal and the share cover.
async function drawResultMedal(canvas) {
  if (!complete) throw new Error('preview before the medal is finished');
  await facesReady();
  if (destroyed || !complete) throw new Error('medal is gone');
  settleNow();
  const g = canvas.getContext('2d');
  g.clearRect(0, 0, canvas.width, canvas.height);
  renderFigure(g, { x: 0, y: 0, w: canvas.width, h: canvas.height,
    fit: { widthShare: .94, heightShare: .94, bottomPad: .03 } }, false);
  // Only the medal belongs in the result portrait; the long ribbon is cut by this square frame.
  g.save();
  g.globalCompositeOperation = 'destination-out';
  const fade = g.createLinearGradient(0, 0, 0, 50);
  fade.addColorStop(0, '#000'); fade.addColorStop(.55, '#000'); fade.addColorStop(1, 'transparent');
  g.fillStyle = fade; g.fillRect(0, 0, canvas.width, 50);
  g.restore();
}

// ---- page ------------------------------------------------------------------------------------------------------------
function resize() {
  width = root.clientWidth; height = root.clientHeight;
  fitNumber(); updateControl();
  if (renderer) {
    renderer.setSize(width, height, false);
    const to = targetRig();
    if (camTween) { camTween.to = to; if (camTween.via) camTween.via = wideRig(); } else rig = to;
    shadowDirty = true; dirty();
  } else if (flatMode) dirty();
}
function applyReduce() { root.classList.toggle('reduced-motion', reduced()); if (reduced()) settleNow(); }
mediaReduce.addEventListener('change', applyReduce);
$('#edit-records').addEventListener('click', () => changeStage(0, true));

const onKeyDown = () => { keyboard = true; };
const onPointerDown = () => { keyboard = false; };
const onVisibility = () => { if (document.hidden) settleNow(); };
document.addEventListener('keydown', onKeyDown);
document.addEventListener('pointerdown', onPointerDown, true);
document.addEventListener('visibilitychange', onVisibility);


async function start() {
  startBuilder();
  changeStage(0, true); resize(); applyReduce();
  // Sockets, the shared blank, the plate and the ribbon come first: the first frame needs them.
  const first = [
    ...scenes.map((_, k) => want(`socket:${String(k + 1).padStart(2, '0')}:256`, { type: 'socket', S: 256, label: String(k + 1).padStart(2, '0') }, 0)),
    want(blankSig(RES.seat), coinMsg('distance', liveRec(), 'blank', RES.seat), 0),
    // Touch devices get the ribbon at half width (256 × 2048): the rib pitch runs along its length and stays the same, and
    // the ribbon is under 200 device pixels wide on a phone. 5.6 MB less GPU memory.
    want('plate', { type: 'plate' }, 1), want('ribbon', { type: 'ribbon', W: COARSE ? 256 : 512 }, 1),
  ];
  await Promise.all(['700 40px StudyCondensed', '700 40px StudySans', '650 40px StudySans', '450 40px StudySans'].map(f => document.fonts.load(f, '지난 28일 0123456789 KM 회 월화수목금토일 allrunabout 건강과 재미'))).catch(() => {});
  if (destroyed) return;
  if (!glOk) {
    for (let k = 0; k < 7; k++) slots.push({ k, present: false, showAt: 0, z: 0, s: 1, sig: null, wantSig: null, kind: 'blank', place: null, leaving: false, striking: false });
    flatMode = true; root.classList.add('no-gl'); $('#stage-note').hidden = true; $('#medal-status').textContent = '3D를 그릴 수 없어 같은 부조를 평면으로 보여 드려요';
    await Promise.all(first);
    if (destroyed) return;
    syncCoins(); go({ instant: true }); dirty();
    observer = new ResizeObserver(resize); observer.observe(root);
    return;
  }
  await start3d();
  if (destroyed) return;
  await Promise.all(first);
  if (destroyed) return;
  scenes.forEach((_, k) => setFloor(k, `socket:${String(k + 1).padStart(2, '0')}:256`));
  setPlate('plate'); setRibbon('ribbon');
  rig = targetRig();
  // The first frame shows the seven empty sockets; the open coin is set down over 01 once the medal has faded in.
  syncCoins();
  slots.forEach(s => { if (s.wantSig && faces.has(s.wantSig)) Object.values(texOf(s.wantSig)).forEach(t => renderer.initTexture(t)); });
  render(); sync();
  const tf = performance.now(); render(); sync();
  if (performance.now() - tf > 120) slowGL = true;
  if (slowGL) DRAG_DPR = Math.min(.5, DPR);
  root.classList.add('gl-ready'); $('#stage-note').hidden = true;
  if (complete || stage) go({ instant: true }); else go({ instant: stillMedal(), enterDelay: 420 });
  observer = new ResizeObserver(resize); observer.observe(root);
}
start().catch(e => {
  if (destroyed) return;
  console.error(e);
  $('#stage-note').hidden = false; $('#stage-note').textContent = '3D 메달을 불러오지 못했어요. 새로고침해 주세요.';
});

// ---- teardown ----------------------------------------------------------------------------------------------------------
// A disposed texture also lets go of its pixels. three keeps a disposed renderer reachable from a texture of its own
// module (a lookup table's dispose listener), and that renderer's shadow pass still holds the depth materials it made
// from ours, with our maps (displacement, polish) in them: without this a remount kept about 2MB of face data per mount
// (dev Fast Refresh, measured with a heap snapshot).
function freeTexture(t) { t.dispose(); t.image = null; }
// Geometries, materials and every texture a material holds (the face maps, the placeholders, the blob shadow).
function disposeTree(object) {
  object.traverse(o => {
    o.geometry?.dispose();
    for (const m of [o.material].flat()) {
      if (!m) continue;
      for (const v of Object.values(m)) if (v && v.isTexture) freeTexture(v);
      m.dispose();
    }
  });
}
function destroy() {
  if (destroyed) return;
  destroyed = true;
  stopReveal(); cancelAnimationFrame(reveal.raf);
  cancelAnimationFrame(raf); raf = 0;
  clearTimeout(idleTimer); clearTimeout(mainTimer); clearTimeout(builderTimer);
  stopMotion(); tweens.length = 0; camTween = null;
  pool.splice(0).concat(waiting.splice(0)).forEach(p => p.w.terminate());
  jobs.clear(); byId.clear();
  observer?.disconnect();
  ruler.destroy();
  document.removeEventListener('keydown', onKeyDown);
  document.removeEventListener('pointerdown', onPointerDown, true);
  document.removeEventListener('visibilitychange', onVisibility);
  mediaReduce.removeEventListener('change', applyReduce);
  if (renderer) {
    for (const f of faces.values()) if (f.tex) Object.values(f.tex).forEach(freeTexture);
    if (blank1) Object.values(blank1).forEach(freeTexture);
    if (scene) disposeTree(scene);
    [denseGeo, midGeo, flatGeo, kit?.socketFloor].forEach(x => x?.dispose());
    envTarget?.dispose();
    key?.shadow?.map?.dispose();
    renderer.dispose();
    renderer.forceContextLoss();
    renderer = null;
  }
  faces.clear(); flats.clear(); thumbs.clear();
  // The scene graph holds every face map through its materials' textures. Whatever still holds destroy() (React keeps
  // an effect's cleanup for a while) must not keep them.
  slots.length = 0; solids.length = 0;
  THREE = scene = camera = body = medal = pivot = key = rim = kit = blank1 = envTarget = denseGeo = midGeo = flatGeo = null;
  container.replaceChildren();
}
return { destroy, shareImage, drawResultMedal };
}
