// Loaded only when someone asks to keep their ticket. No screenshot library needed.
export async function downloadTicket() {
  await document.fonts.ready;
  const photo = new Image();
  photo.src = '/images/challenge/saturday/first30/pointing.webp';
  await photo.decode();
  const canvas = document.createElement('canvas');
  canvas.width = 1080; canvas.height = 1350;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Canvas unavailable');
  const family = getComputedStyle(document.querySelector('[data-first30-root]') ?? document.body).fontFamily;
  const text = (value: string, x: number, y: number, size: number, color = '#eeece5', weight = 500) => {
    ctx.fillStyle = color; ctx.font = `${weight} ${size}px ${family}`; ctx.fillText(value, x, y);
  };
  ctx.fillStyle = '#111110'; ctx.fillRect(0, 0, 1080, 1350);
  ctx.strokeStyle = '#54504b'; ctx.strokeRect(20, 20, 1040, 1310);
  text('SATURDAY RUNNING CLUB', 60, 83, 22, '#eeece5', 750);
  text('NO. 001', 918, 83, 18, '#ff542b');
  const cropHeight = photo.naturalWidth * 580 / 984;
  ctx.drawImage(photo, 0, (photo.naturalHeight - cropHeight) * .67, photo.naturalWidth, cropHeight, 48, 116, 984, 580);
  const shade = ctx.createLinearGradient(0, 490, 0, 696);
  shade.addColorStop(0, '#00000000'); shade.addColorStop(1, '#000000c0');
  ctx.fillStyle = shade; ctx.fillRect(48, 490, 984, 206);
  text('계획에 없던 5km.', 82, 651, 58, '#eeece5', 850);
  text('MY FIRST 30K / 2026.09.05', 60, 752, 20, '#ff542b');
  text('30', 50, 955, 226, '#eeece5', 900);
  const wholeWidth = ctx.measureText('30').width;
  text('.02', 50 + wholeWidth - 10, 955, 226, '#ff542b', 900);
  text('KM', 932, 954, 24);
  ctx.setLineDash([7, 9]); ctx.strokeStyle = '#686158';
  ctx.beginPath(); ctx.moveTo(48, 994); ctx.lineTo(1032, 994); ctx.stroke(); ctx.setLineDash([]);
  for (const [label, value, x] of [['RUNNER', '권재현', 60], ['DATE', '05 SEP 2026', 350], ['ROUTE', '신대방 ↔ 마곡나루', 685]] as const) {
    text(label, x, 1048, 18, '#aaa6a0'); text(value, x, 1096, 26, '#eeece5', 600);
  }
  ctx.strokeStyle = '#45413b'; ctx.beginPath(); ctx.moveTo(48, 1140); ctx.lineTo(1032, 1140); ctx.stroke();
  text('25 KM PLANNED → 30.02 KM DONE', 60, 1195, 20, '#aaa6a0');
  text('함께 달린 형묵에게.', 60, 1234, 20, '#aaa6a0');
  text('이제 러닝의 계절이 왔다.', 60, 1290, 25, '#ff542b', 700);
  const blob = await new Promise<Blob>((resolve, reject) => canvas.toBlob(value => value ? resolve(value) : reject(new Error('Export failed')), 'image/png'));
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a'); link.href = url; link.download = 'saturday-first-30k-20260905.png';
  document.body.appendChild(link); link.click(); link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 60000);
}

type CustomTicket = {
  runner: string;
  distance: string;
  date: string;
  route: string;
  caption: string;
  message: string;
  photoSrc: string;
};

export async function downloadCustomTicket(data: CustomTicket) {
  await document.fonts.ready;
  const photo = new Image();
  photo.src = data.photoSrc;
  await photo.decode();
  const canvas = document.createElement('canvas');
  canvas.width = 1080; canvas.height = 1350;
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

  ctx.fillStyle = '#111110'; ctx.fillRect(0, 0, 1080, 1350);
  ctx.strokeStyle = '#54504b'; ctx.strokeRect(20, 20, 1040, 1310);
  text('SATURDAY RUNNING CLUB', 60, 83, 22, '#eeece5', 750);
  text('YOUR RUN', 918, 83, 18, '#ff542b');

  const frame = { x: 48, y: 116, width: 984, height: 580 };
  const scale = Math.max(frame.width / photo.naturalWidth, frame.height / photo.naturalHeight);
  const sourceWidth = frame.width / scale;
  const sourceHeight = frame.height / scale;
  ctx.drawImage(photo, (photo.naturalWidth - sourceWidth) / 2, (photo.naturalHeight - sourceHeight) / 2, sourceWidth, sourceHeight, frame.x, frame.y, frame.width, frame.height);
  const shade = ctx.createLinearGradient(0, 470, 0, 696);
  shade.addColorStop(0, '#00000000'); shade.addColorStop(1, '#000000c8');
  ctx.fillStyle = shade; ctx.fillRect(48, 470, 984, 226);
  fitText(data.caption || '오늘의 러닝.', 82, 651, 890, 58, '#eeece5', 850);

  const [year = '2026', month = '09', day = '05'] = data.date.split('-');
  const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  text(`RUNNING MEMORY / ${year}.${month}.${day}`, 60, 752, 20, '#ff542b');
  const [whole = '0', fraction = '00'] = data.distance.split('.');
  const distanceSize = whole.length > 2 ? 174 : 226;
  text(whole, 50, 955, distanceSize, '#eeece5', 900);
  const wholeWidth = ctx.measureText(whole).width;
  text(`.${fraction.padEnd(2, '0').slice(0, 2)}`, 50 + wholeWidth - 8, 955, distanceSize, '#ff542b', 900);
  text('KM', 932, 954, 24);

  ctx.setLineDash([7, 9]); ctx.strokeStyle = '#686158';
  ctx.beginPath(); ctx.moveTo(48, 994); ctx.lineTo(1032, 994); ctx.stroke(); ctx.setLineDash([]);
  text('RUNNER', 60, 1048, 18, '#aaa6a0'); fitText(data.runner || '나의 이름', 60, 1096, 245, 26, '#eeece5', 600);
  text('DATE', 350, 1048, 18, '#aaa6a0'); text(`${day} ${monthNames[Math.max(0, Number(month) - 1)] ?? 'SEP'} ${year}`, 350, 1096, 26, '#eeece5', 600);
  text('ROUTE', 685, 1048, 18, '#aaa6a0'); fitText(data.route || '나의 코스', 685, 1096, 335, 26, '#eeece5', 600);
  ctx.strokeStyle = '#45413b'; ctx.beginPath(); ctx.moveTo(48, 1140); ctx.lineTo(1032, 1140); ctx.stroke();
  text('ONE RUN. ONE MEMORY.', 60, 1195, 20, '#aaa6a0');
  fitText(data.message || '준비는 계속된다.', 60, 1265, 950, 34, '#ff542b', 700);

  const blob = await new Promise<Blob>((resolve, reject) => canvas.toBlob(value => value ? resolve(value) : reject(new Error('Export failed')), 'image/png'));
  const url = URL.createObjectURL(blob);
  const safeName = (data.runner || 'runner').replace(/[^\p{L}\p{N}_-]+/gu, '-');
  const link = document.createElement('a'); link.href = url; link.download = `saturday-running-ticket-${safeName}.png`;
  document.body.appendChild(link); link.click(); link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 60000);
}
