import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import { shoes } from '../src/lib/data/shoes';
import { thumbnailPath } from '../src/lib/shoe-thumbnail-path';

// A high collar can center the bounding box while leaving most of the shoe below it.
// Fill the silhouette between its upper and sole so white mesh counts as part of the shoe.
async function studioOffset(trimmed: Buffer) {
  const { data, info } = await sharp(trimmed)
    .resize(120, 68, { fit: 'contain', background: '#fff' }).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  let area = 0;
  let sumX = 0;
  let sumY = 0;
  for (let x = 0; x < info.width; x++) {
    let top = info.height;
    let bottom = -1;
    for (let y = 0; y < info.height; y++) {
      const i = (y * info.width + x) * info.channels;
      if (Math.min(data[i], data[i + 1], data[i + 2]) >= 232) continue;
      top = Math.min(top, y);
      bottom = y;
    }
    const height = bottom - top + 1;
    if (height < 2) continue;
    area += height;
    sumX += x * height;
    sumY += (top + bottom) / 2 * height;
  }
  if (!area) return { x: 0, y: 0 };
  const dx = (info.width - 1) / 2 - sumX / area;
  const dy = (info.height - 1) / 2 - sumY / area;
  // Only adjust a visible imbalance. Keep at least four pixels of the outer padding on every edge.
  return {
    x: Math.abs(dx) > info.width * 0.06 ? Math.max(-12, Math.min(12, Math.round(dx * 2))) : 0,
    y: Math.abs(dy) > info.height * 0.11 ? Math.max(-8, Math.min(8, Math.round(dy * 2))) : 0,
  };
}

async function generate() {
  // Some galleries open with a different view from the catalog thumbnail.
  const sources = Array.from(new Set(shoes.flatMap(shoe => [shoe.image, shoe.images?.[0]])));
  const thumbnails: string[] = [];
  for (const source of sources) {
    if (!source?.startsWith('/images/shoes/')) continue;
    const input = path.join('public', source);
    const output = path.join('public', thumbnailPath(source));
    await mkdir(path.dirname(output), { recursive: true });

    // Flatten invisible RGB before measuring margins. Keep photographs with
    // textured corners intact, since their background is part of the frame.
    const pixels = await sharp(input).rotate().flatten({ background: '#fff' }).removeAlpha().toColourspace('srgb').png().toBuffer();
    const { data, info } = await sharp(pixels).resize({ width: 48, height: 48, fit: 'inside' }).raw().toBuffer({ resolveWithObject: true });
    const cornerOffsets = [0, info.width - 1, info.width * (info.height - 1), info.width * info.height - 1];
    const uniform = cornerOffsets.every(offset => [0, 1, 2].every(c => Math.abs(data[offset * info.channels + c] - data[c]) < 12));
    const crop = sharp(pixels);
    if (uniform) crop.trim({ threshold: 8, background: { r: data[0], g: data[1], b: data[2] } });
    // Some studio shots have a horizontal gradient behind the shoe. A
    // single background colour can leave a large strip above the upper.
    const sidesMatch = Array.from({ length: info.height }, (_, row) => {
      const left = row * info.width * info.channels;
      const right = left + (info.width - 1) * info.channels;
      return [0, 1, 2].every(c => data[left + c] > 190 && Math.abs(data[left + c] - data[right + c]) < 8);
    }).every(Boolean);
    let trimmed = await crop.png().toBuffer();
    if (sidesMatch) {
      const visibleRows = [];
      for (let y = 0; y < info.height; y++) {
        const left = y * info.width * info.channels;
        for (let x = 1; x < info.width - 1; x++) {
          const pixel = left + x * info.channels;
          if ([0, 1, 2].some(c => Math.abs(data[pixel + c] - data[left + c]) > 10)) {
            visibleRows.push(y);
            break;
          }
        }
      }
      if (visibleRows.length && visibleRows.length < info.height * 0.8) {
        const { width, height } = await sharp(pixels).metadata();
        if (width && height) {
          const top = Math.max(0, Math.floor((visibleRows[0] - 2) * height / info.height));
          const bottom = Math.min(height, Math.ceil((visibleRows[visibleRows.length - 1] + 3) * height / info.height));
          const strip = await sharp(pixels).extract({ left: 0, top, width, height: bottom - top }).png().toBuffer();
          trimmed = await sharp(strip).trim({ threshold: 8 }).png().toBuffer();
        }
      }
    }
    const offset = uniform || sidesMatch ? await studioOffset(trimmed) : { x: 0, y: 0 };
    await sharp(trimmed).resize(480, 270, { fit: 'contain', background: '#fff' })
      .extend({ top: 12 + offset.y, bottom: 12 - offset.y, left: 16 + offset.x, right: 16 - offset.x, background: '#fff' }).webp({ quality: 84 }).toFile(output);
    thumbnails.push(source);
  }
  await writeFile('src/lib/data/shoe-thumbnails.json', JSON.stringify(thumbnails.sort(), null, 2) + '\n');
}

generate().catch(error => { console.error(error); process.exitCode = 1; });
