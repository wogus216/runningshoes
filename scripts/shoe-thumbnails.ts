import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import path from 'node:path';
import sharp from 'sharp';
import { removeBackground } from '@imgly/background-removal-node';
import { shoes } from '../src/lib/data/shoes';
import { thumbnailPath, cutoutPath } from '../src/lib/shoe-thumbnail-path';

const transparent = { r: 0, g: 0, b: 0, alpha: 0 };

async function trimSilhouette(pixels: Buffer) {
  const { data, info } = await sharp(pixels).extractChannel('alpha').raw().toBuffer({ resolveWithObject: true });
  let left = info.width;
  let right = -1;
  let top = info.height;
  let bottom = -1;
  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      if (data[y * info.width + x] < 16) continue;
      left = Math.min(left, x);
      right = Math.max(right, x);
      top = Math.min(top, y);
      bottom = y;
    }
  }
  if (right < left) throw new Error('Empty shoe silhouette');
  // Keep a narrow antialiased fringe outside the measured silhouette.
  left = Math.max(0, left - 2);
  top = Math.max(0, top - 2);
  right = Math.min(info.width - 1, right + 2);
  bottom = Math.min(info.height - 1, bottom + 2);
  return sharp(pixels).extract({ left, top, width: right - left + 1, height: bottom - top + 1 }).png().toBuffer();
}

async function studioOffset(trimmed: Buffer) {
  const { data, info } = await sharp(trimmed).resize(120, 68, { fit: 'contain', background: transparent })
    .extractChannel('alpha').raw().toBuffer({ resolveWithObject: true });
  let area = 0;
  let sumX = 0;
  let sumY = 0;
  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      const alpha = data[y * info.width + x];
      area += alpha;
      sumX += x * alpha;
      sumY += y * alpha;
    }
  }
  if (!area) return { x: 0, y: 0 };
  const dx = (info.width - 1) / 2 - sumX / area;
  const dy = (info.height - 1) / 2 - sumY / area;
  return {
    x: Math.abs(dx) > info.width * 0.06 ? Math.max(-12, Math.min(12, Math.round(dx * 2))) : 0,
    y: Math.abs(dy) > info.height * 0.11 ? Math.max(-8, Math.min(8, Math.round(dy * 2))) : 0,
  };
}

async function saveFramed(pixels: Buffer, offset: { x: number; y: number }, source: string, scale: number) {
  const output = path.join('public', source);
  await mkdir(path.dirname(output), { recursive: true });
  await sharp(pixels).resize(480 * scale, 270 * scale, { fit: 'contain', background: transparent })
    .extend({
      top: (12 + offset.y) * scale, bottom: (12 - offset.y) * scale,
      left: (16 + offset.x) * scale, right: (16 - offset.x) * scale, background: transparent,
    }).webp({ quality: 87, alphaQuality: 100 }).toFile(output);
}

// Reviewed masks protect white foam and fine edges that automatic segmentation missed.
// A replacement photograph gets a different hash and goes through segmentation again.
async function cutOutOpaque(source: string, original: Buffer, png: Buffer, masks: Set<string>) {
  const hash = createHash('sha256').update(original).digest('hex').slice(0, 16);
  const filename = path.basename(path.dirname(source)) + '-' + hash + '.png';
  if (masks.has(filename)) {
    const alpha = await sharp(path.join('scripts/shoe-masks', filename)).greyscale().raw().toBuffer({ resolveWithObject: true });
    const rgb = await sharp(png).removeAlpha().png().toBuffer();
    return sharp(rgb).joinChannel(alpha.data, { raw: { width: alpha.info.width, height: alpha.info.height, channels: 1 } }).png().toBuffer();
  }
  const image = new Blob([new Uint8Array(png)], { type: 'image/png' });
  const cutout = await removeBackground(image, { model: 'medium', output: { format: 'image/png' } });
  return Buffer.from(await cutout.arrayBuffer());
}

async function generate() {
  const sources = new Set(shoes.flatMap(shoe => [shoe.image, shoe.images?.[0]]));
  const masks = new Set(await readdir('scripts/shoe-masks'));
  const thumbnails: string[] = [];
  const cutouts: string[] = [];
  for (const source of Array.from(sources)) {
    if (!source?.startsWith('/images/shoes/')) continue;
    const original = await readFile(path.join('public', source));
    let pixels = await sharp(original).rotate().toColourspace('srgb').ensureAlpha().png().toBuffer();
    const { isOpaque } = await sharp(pixels).stats();
    if (isOpaque) pixels = await cutOutOpaque(source, original, pixels, masks);
    const trimmed = await trimSilhouette(pixels);
    const offset = await studioOffset(trimmed);
    await saveFramed(trimmed, offset, thumbnailPath(source), 1);
    thumbnails.push(source);
    if (isOpaque) {
      await saveFramed(trimmed, offset, cutoutPath(source), 2);
      cutouts.push(source);
    }
  }
  await writeFile('src/lib/data/shoe-thumbnails.json', JSON.stringify(thumbnails.sort(), null, 2) + '\n');
  await writeFile('src/lib/data/shoe-cutouts.json', JSON.stringify(cutouts.sort(), null, 2) + '\n');
}

generate().catch(error => { console.error(error); process.exitCode = 1; });
