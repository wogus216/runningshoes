import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const BASE_DIR = '/Users/kwonjaehyeon/Programming/sancho/runningshoes/public/images/shoes';

async function extractImagesFromPage(page, dir, selector = null) {
  // Extract images as base64 from the loaded page (bypasses CDN restrictions)
  const images = await page.evaluate((sel) => {
    const results = [];
    const imgs = sel
      ? document.querySelectorAll(sel)
      : document.querySelectorAll('img');

    for (const img of imgs) {
      if (img.naturalWidth < 300 || img.naturalHeight < 300) continue;
      const src = img.currentSrc || img.src;
      if (!src || src.includes('svg') || src.includes('icon') || src.includes('logo') || src.includes('badge')) continue;

      try {
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        const dataUrl = canvas.toDataURL('image/png');
        results.push({
          data: dataUrl,
          w: img.naturalWidth,
          h: img.naturalHeight,
          src: src.substring(0, 100),
          alt: img.alt || ''
        });
      } catch (e) {
        // CORS might prevent canvas extraction
        results.push({
          data: null,
          w: img.naturalWidth,
          h: img.naturalHeight,
          src: src.substring(0, 100),
          alt: img.alt || '',
          error: e.message
        });
      }
    }
    return results;
  }, selector);

  return images;
}

async function saveImages(images, dir, names) {
  fs.mkdirSync(dir, { recursive: true });
  let saved = 0;

  // Sort by size (largest first)
  const sorted = images
    .filter(img => img.data)
    .sort((a, b) => (b.w * b.h) - (a.w * a.h));

  // Remove duplicates (same dimensions = likely same image)
  const unique = [];
  const seen = new Set();
  for (const img of sorted) {
    const key = `${img.w}x${img.h}`;
    if (!seen.has(key)) {
      seen.add(key);
      unique.push(img);
    }
  }

  for (let i = 0; i < Math.min(unique.length, names.length); i++) {
    const img = unique[i];
    const base64 = img.data.replace(/^data:image\/\w+;base64,/, '');
    const buffer = Buffer.from(base64, 'base64');
    const fpath = path.join(dir, `${names[i]}.png`);
    fs.writeFileSync(fpath, buffer);
    console.log(`  ✅ ${names[i]}.png: ${(buffer.length / 1024).toFixed(0)}KB (${img.w}x${img.h})`);
    saved++;
  }

  // Report images that couldn't be extracted (CORS)
  const failed = images.filter(img => !img.data);
  if (failed.length > 0) {
    console.log(`  ⚠️ ${failed.length} images blocked by CORS:`);
    failed.slice(0, 3).forEach(img => console.log(`    ${img.src} (${img.error})`));
  }

  return saved;
}

async function main() {
  const browser = await puppeteer.connect({ browserURL: 'http://localhost:9222' });
  const names = ['side', 'top', 'outsole', 'front', 'back'];

  // === Brooks Glycerin Max 2 ===
  console.log('\n=== Brooks Glycerin Max 2 ===');
  {
    const page = await browser.newPage();
    try {
      await page.goto('https://www.brooksrunning.com/en_us/mens/shoes/road-running-shoes/glycerin-max-2/110479.html',
        { waitUntil: 'networkidle0', timeout: 45000 });
      await new Promise(r => setTimeout(r, 5000));

      // Click through gallery thumbnails to load all images
      const thumbs = await page.$$('.pdp-gallery__thumb, .product-thumbnails button, [data-testid="thumbnail"]');
      for (const thumb of thumbs.slice(0, 7)) {
        try { await thumb.click(); await new Promise(r => setTimeout(r, 1000)); } catch {}
      }

      const images = await extractImagesFromPage(page);
      console.log(`  Total extractable images: ${images.filter(i => i.data).length}`);
      const saved = await saveImages(images, path.join(BASE_DIR, 'brooks/glycerinmax2'), names);
      if (saved === 0) console.log('  ⚠️ No images extracted - try manual download');
    } catch (err) {
      console.log(`  ERROR: ${err.message}`);
    } finally {
      await page.close();
    }
  }

  // === Hoka Cielo X1 ===
  console.log('\n=== Hoka Cielo X1 ===');
  {
    const page = await browser.newPage();
    try {
      await page.goto('https://www.hoka.com/en/us/race-shoes/cielo-x1/1147910.html',
        { waitUntil: 'domcontentloaded', timeout: 45000 });
      await new Promise(r => setTimeout(r, 8000));

      // Click gallery thumbnails
      const thumbs = await page.$$('.pdp-thumbnails button, .product-thumbnails button, [data-testid="thumbnail"]');
      for (const thumb of thumbs.slice(0, 7)) {
        try { await thumb.click(); await new Promise(r => setTimeout(r, 1000)); } catch {}
      }

      const images = await extractImagesFromPage(page);
      console.log(`  Total extractable images: ${images.filter(i => i.data).length}`);
      const saved = await saveImages(images, path.join(BASE_DIR, 'hoka/cielox1'), names);
      if (saved === 0) console.log('  ⚠️ No images extracted - try manual download');
    } catch (err) {
      console.log(`  ERROR: ${err.message}`);
    } finally {
      await page.close();
    }
  }

  // === Mizuno Hyperwarp Pure ===
  console.log('\n=== Mizuno Hyperwarp Pure ===');
  {
    const page = await browser.newPage();
    try {
      await page.goto('https://usa.mizuno.com/running-hyperwarp-pure-running-shoe/',
        { waitUntil: 'networkidle2', timeout: 30000 });
      await new Promise(r => setTimeout(r, 3000));

      // Click through thumbnails
      const thumbs = await page.$$('.productView-thumbnail, .slick-slide');
      for (const thumb of thumbs.slice(0, 7)) {
        try { await thumb.click(); await new Promise(r => setTimeout(r, 800)); } catch {}
      }

      const images = await extractImagesFromPage(page);
      console.log(`  Total extractable images: ${images.filter(i => i.data).length}`);
      const saved = await saveImages(images, path.join(BASE_DIR, 'mizuno/hyperwarppure'), names);
    } catch (err) {
      console.log(`  ERROR: ${err.message}`);
    } finally {
      await page.close();
    }
  }

  // === Mizuno Hyperwarp Elite ===
  console.log('\n=== Mizuno Hyperwarp Elite ===');
  {
    const page = await browser.newPage();
    try {
      await page.goto('https://usa.mizuno.com/running-hyperwarp-elite-unisex',
        { waitUntil: 'networkidle2', timeout: 30000 });
      await new Promise(r => setTimeout(r, 3000));

      const thumbs = await page.$$('.productView-thumbnail, .slick-slide');
      for (const thumb of thumbs.slice(0, 7)) {
        try { await thumb.click(); await new Promise(r => setTimeout(r, 800)); } catch {}
      }

      const images = await extractImagesFromPage(page);
      console.log(`  Total extractable images: ${images.filter(i => i.data).length}`);
      const saved = await saveImages(images, path.join(BASE_DIR, 'mizuno/hyperwarpelit'), names);
    } catch (err) {
      console.log(`  ERROR: ${err.message}`);
    } finally {
      await page.close();
    }
  }

  browser.disconnect();
  console.log('\n✅ Done!');
}

main().catch(console.error);
