// Loaded only when someone asks to keep their ticket. No screenshot library needed.
import { ticketLayout, type TicketRatio } from './ticket-layout';

const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

function startCanvas(ratio: TicketRatio) {
  const layout = ticketLayout(ratio);
  const canvas = document.createElement('canvas');
  canvas.width = layout.width; canvas.height = layout.height;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Canvas unavailable');
  const family = getComputedStyle(document.querySelector('[data-first30-root]') ?? document.body).fontFamily;
  const text = (value: string, x: number, y: number, size: number, color = '#eeece5', weight = 500) => {
    ctx.fillStyle = color; ctx.font = `${weight} ${size}px ${family}`; ctx.fillText(value, x, y);
  };
  const fitText = (value: string, x: number, y: number, maxWidth: number, size: number, color = '#eeece5', weight = 500) => {
    ctx.font = `${weight} ${size}px ${family}`;
    const fitted = Math.min(size, size * maxWidth / Math.max(ctx.measureText(value).width, 1));
    text(value, x, y, fitted, color, weight);
  };
  ctx.fillStyle = '#111110'; ctx.fillRect(0, 0, layout.width, layout.height);
  ctx.strokeStyle = '#54504b'; ctx.strokeRect(20, 20, layout.width - 40, layout.height - 40);
  return { canvas, ctx, layout, text, fitText };
}

/** 사진을 프레임에 꽉 채우되 비율은 유지(center crop). */
function drawCover(ctx: CanvasRenderingContext2D, photo: HTMLImageElement, frame: TicketLayoutFrame, focusY = 0.5) {
  const scale = Math.max(frame.width / photo.naturalWidth, frame.height / photo.naturalHeight);
  const sourceWidth = frame.width / scale;
  const sourceHeight = frame.height / scale;
  ctx.drawImage(
    photo,
    (photo.naturalWidth - sourceWidth) / 2,
    (photo.naturalHeight - sourceHeight) * focusY,
    sourceWidth, sourceHeight,
    frame.x, frame.y, frame.width, frame.height,
  );
}
type TicketLayoutFrame = { x: number; y: number; width: number; height: number };

async function saveCanvas(canvas: HTMLCanvasElement, fileName: string) {
  const blob = await new Promise<Blob>((resolve, reject) =>
    canvas.toBlob(value => value ? resolve(value) : reject(new Error('Export failed')), 'image/png'));
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a'); link.href = url; link.download = fileName;
  document.body.appendChild(link); link.click(); link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 60000);
}

export async function downloadTicket(ratio: TicketRatio = '4:5') {
  await document.fonts.ready;
  const photo = new Image();
  photo.src = '/images/challenge/saturday/first30/pointing.webp';
  await photo.decode();
  const { canvas, ctx, layout, text } = startCanvas(ratio);

  text('SATURDAY RUNNING CLUB', 60, 83, 22, '#eeece5', 750);
  text('NO. 001', layout.headerRightX, 83, 18, '#ff542b');
  drawCover(ctx, photo, layout.frame, 0.67);
  const shadeTop = layout.frame.y + layout.frame.height - 206;
  const shade = ctx.createLinearGradient(0, shadeTop, 0, layout.frame.y + layout.frame.height);
  shade.addColorStop(0, '#00000000'); shade.addColorStop(1, '#000000c0');
  ctx.fillStyle = shade; ctx.fillRect(layout.frame.x, shadeTop, layout.frame.width, 206);
  text('계획에 없던 5km.', layout.captionX, layout.captionY, layout.captionSize, '#eeece5', 850);
  text('MY FIRST 30K / 2026.09.05', layout.dateX, layout.dateY, 20, '#ff542b');

  text('30', layout.distanceX, layout.distanceY, layout.distanceSize, '#eeece5', 900);
  const wholeWidth = ctx.measureText('30').width;
  text('.02', layout.distanceX + wholeWidth - 10, layout.distanceY, layout.distanceSize, '#ff542b', 900);
  text('KM', layout.kmX, layout.kmY, 24);

  ctx.setLineDash([7, 9]); ctx.strokeStyle = '#686158';
  ctx.beginPath(); ctx.moveTo(layout.dashFrom, layout.dashY); ctx.lineTo(layout.dashTo, layout.dashY); ctx.stroke(); ctx.setLineDash([]);
  const rows: [string, string][] = [['RUNNER', '권재현'], ['DATE', '05 SEP 2026'], ['ROUTE', '신대방 ↔ 마곡나루']];
  rows.forEach(([label, value], index) => {
    text(label, layout.cols[index], layout.rowLabelY, 18, '#aaa6a0');
    text(value, layout.cols[index], layout.rowValueY, 26, '#eeece5', 600);
  });
  ctx.strokeStyle = '#45413b'; ctx.beginPath(); ctx.moveTo(layout.dashFrom, layout.lineY); ctx.lineTo(layout.dashTo, layout.lineY); ctx.stroke();
  text('25 KM PLANNED → 30.02 KM DONE', layout.msgX, layout.footY, 20, '#aaa6a0');
  text('함께 달린 형묵에게.', layout.msgX, layout.footY + 39, 20, '#aaa6a0');
  text('이제 러닝의 계절이 왔다.', layout.msgX, layout.msgY + 25, 25, '#ff542b', 700);

  await saveCanvas(canvas, `saturday-first-30k-20260905-${ratio.replace(':', 'x')}.png`);
}

type CustomTicket = {
  runner: string;
  distance: string;
  date: string;
  route: string;
  caption: string;
  message: string;
  photoSrc: string;
  ratio?: TicketRatio;
};

export async function downloadCustomTicket(data: CustomTicket) {
  await document.fonts.ready;
  const ratio = data.ratio ?? '4:5';
  const photo = new Image();
  photo.src = data.photoSrc;
  await photo.decode();
  const { canvas, ctx, layout, text, fitText } = startCanvas(ratio);

  text('SATURDAY RUNNING CLUB', 60, 83, 22, '#eeece5', 750);
  text('YOUR RUN', layout.headerRightX, 83, 18, '#ff542b');

  drawCover(ctx, photo, layout.frame);
  const shadeTop = layout.frame.y + layout.frame.height - 226;
  const shade = ctx.createLinearGradient(0, shadeTop, 0, layout.frame.y + layout.frame.height);
  shade.addColorStop(0, '#00000000'); shade.addColorStop(1, '#000000c8');
  ctx.fillStyle = shade; ctx.fillRect(layout.frame.x, shadeTop, layout.frame.width, 226);
  fitText(data.caption || '오늘의 러닝.', layout.captionX, layout.captionY, layout.captionMax, layout.captionSize, '#eeece5', 850);

  const [year = '2026', month = '09', day = '05'] = data.date.split('-');
  text(`RUNNING MEMORY / ${year}.${month}.${day}`, layout.dateX, layout.dateY, 20, '#ff542b');
  const [whole = '0', fraction = '00'] = data.distance.split('.');
  const distanceSize = whole.length > 2 ? Math.round(layout.distanceSize * 0.77) : layout.distanceSize;
  text(whole, layout.distanceX, layout.distanceY, distanceSize, '#eeece5', 900);
  const wholeWidth = ctx.measureText(whole).width;
  text(`.${fraction.padEnd(2, '0').slice(0, 2)}`, layout.distanceX + wholeWidth - 8, layout.distanceY, distanceSize, '#ff542b', 900);
  text('KM', layout.kmX, layout.kmY, 24);

  ctx.setLineDash([7, 9]); ctx.strokeStyle = '#686158';
  ctx.beginPath(); ctx.moveTo(layout.dashFrom, layout.dashY); ctx.lineTo(layout.dashTo, layout.dashY); ctx.stroke(); ctx.setLineDash([]);
  const rows: [string, string][] = [
    ['RUNNER', data.runner || '나의 이름'],
    ['DATE', `${day} ${monthNames[Math.max(0, Number(month) - 1)] ?? 'SEP'} ${year}`],
    ['ROUTE', data.route || '나의 코스'],
  ];
  rows.forEach(([label, value], index) => {
    text(label, layout.cols[index], layout.rowLabelY, 18, '#aaa6a0');
    fitText(value, layout.cols[index], layout.rowValueY, layout.colMax[index], 26, '#eeece5', 600);
  });
  ctx.strokeStyle = '#45413b'; ctx.beginPath(); ctx.moveTo(layout.dashFrom, layout.lineY); ctx.lineTo(layout.dashTo, layout.lineY); ctx.stroke();
  text('ONE RUN. ONE MEMORY.', layout.msgX, layout.footY, 20, '#aaa6a0');
  fitText(data.message || '준비는 계속된다.', layout.msgX, layout.msgY, layout.msgMax, layout.msgSize, '#ff542b', 700);

  const safeName = (data.runner || 'runner').replace(/[^\p{L}\p{N}_-]+/gu, '-');
  await saveCanvas(canvas, `saturday-running-ticket-${safeName}-${ratio.replace(':', 'x')}.png`);
}
