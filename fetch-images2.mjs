import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';

const BASE_DIR = '/Users/kwonjaehyeon/Programming/sancho/runningshoes/public/images/shoes';

function download(url, filepath) {
  return new Promise((resolve, reject) => {
    const mod = url.startsWith('https') ? https : http;
    const req = mod.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36', 'Accept': 'image/*,*/*' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, filepath).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) return reject(new Error(`HTTP ${res.statusCode}`));
      const stream = fs.createWriteStream(filepath);
      res.pipe(stream);
      stream.on('finish', () => { stream.close(); resolve(); });
    });
    req.on('error', reject);
  });
}

async function fetchBrooks(browser) {
  console.log('\n=== Brooks Glycerin Max 2 ===');
  const page = await browser.newPage();
  try {
    await page.goto('https://www.brooksrunning.com/en_us/mens/shoes/road-running-shoes/glycerin-max-2/110479.html',
      { waitUntil: 'networkidle2', timeout: 30000 });
    await new Promise(r => setTimeout(r, 3000));

    // Get product gallery images specifically
    const urls = await page.evaluate(() => {
      // Brooks uses data-srcset or srcset for gallery images
      const gallery = document.querySelectorAll('.pdp-gallery__image img, .product-image img, [data-component="productImages"] img');
      const results = [];
      gallery.forEach(img => {
        const src = img.currentSrc || img.src || img.dataset?.src;
        if (src && !src.includes('svg') && src.includes('110479')) results.push(src);
      });

      // Also try to get from srcset
      document.querySelectorAll('img[srcset]').forEach(img => {
        const srcset = img.getAttribute('srcset');
        if (srcset && srcset.includes('110479')) {
          const parts = srcset.split(',').map(s => s.trim().split(' ')[0]);
          results.push(...parts);
        }
      });

      // Try data-src
      document.querySelectorAll('img[data-src]').forEach(img => {
        const src = img.dataset.src;
        if (src && src.includes('110479')) results.push(src);
      });

      // Get ALL image URLs that contain the product ID
      document.querySelectorAll('img').forEach(img => {
        const src = img.currentSrc || img.src;
        if (src && src.includes('110479')) results.push(src);
      });

      return [...new Set(results)];
    });

    console.log(`  Found ${urls.length} product image URLs`);
    urls.forEach((u, i) => console.log(`  [${i}] ${u.substring(0, 150)}`));

    const dir = path.join(BASE_DIR, 'brooks/glycerinmax2');
    const names = ['side', 'top', 'outsole', 'front', 'back'];

    // Filter for unique product views
    const uniqueUrls = urls.filter(u => u.includes('dw/image') && u.includes('110479'));

    for (let i = 0; i < Math.min(uniqueUrls.length, 5); i++) {
      const fname = `${names[i]}.jpg`;
      const fpath = path.join(dir, fname);
      try {
        await download(uniqueUrls[i], fpath);
        const sz = fs.statSync(fpath).size;
        console.log(`  ${sz > 5000 ? '✅' : '❌'} ${fname}: ${(sz/1024).toFixed(0)}KB`);
      } catch (err) {
        console.log(`  ❌ ${fname}: ${err.message}`);
      }
    }
  } finally {
    await page.close();
  }
}

async function fetchHoka(browser) {
  console.log('\n=== Hoka Cielo X1 ===');
  const page = await browser.newPage();
  try {
    await page.goto('https://www.hoka.com/en/us/race-shoes/cielo-x1/1147910.html',
      { waitUntil: 'networkidle2', timeout: 30000 });
    await new Promise(r => setTimeout(r, 5000));

    // Get product gallery images
    const urls = await page.evaluate(() => {
      const results = [];
      // Hoka uses Deckers CDN
      document.querySelectorAll('img').forEach(img => {
        const src = img.currentSrc || img.src;
        if (src && (src.includes('deckers.com') || src.includes('1147910'))) {
          results.push({ src, w: img.naturalWidth, h: img.naturalHeight, alt: img.alt });
        }
      });

      // Also check picture sources
      document.querySelectorAll('picture source').forEach(src => {
        const srcset = src.getAttribute('srcset');
        if (srcset && (srcset.includes('deckers') || srcset.includes('1147910'))) {
          results.push({ src: srcset.split(' ')[0], w: 0, h: 0, alt: '' });
        }
      });

      // Check data attributes
      document.querySelectorAll('[data-src], [data-image]').forEach(el => {
        const src = el.dataset.src || el.dataset.image;
        if (src && (src.includes('deckers') || src.includes('1147910'))) {
          results.push({ src, w: 0, h: 0, alt: '' });
        }
      });

      return results;
    });

    console.log(`  Found ${urls.length} Hoka product URLs`);
    const unique = [...new Map(urls.map(u => [u.src, u])).values()];
    unique.forEach((u, i) => console.log(`  [${i}] ${u.src.substring(0, 150)}`));

    const dir = path.join(BASE_DIR, 'hoka/cielox1');
    const names = ['side', 'top', 'outsole', 'front', 'back'];

    for (let i = 0; i < Math.min(unique.length, 5); i++) {
      const ext = unique[i].src.includes('.png') ? '.png' : '.jpg';
      const fname = `${names[i]}${ext}`;
      const fpath = path.join(dir, fname);
      try {
        await download(unique[i].src, fpath);
        const sz = fs.statSync(fpath).size;
        console.log(`  ${sz > 5000 ? '✅' : '❌'} ${fname}: ${(sz/1024).toFixed(0)}KB`);
      } catch (err) {
        console.log(`  ❌ ${fname}: ${err.message}`);
      }
    }
  } finally {
    await page.close();
  }
}

async function fetchMizunoPure(browser) {
  console.log('\n=== Mizuno Hyperwarp Pure ===');
  const page = await browser.newPage();
  try {
    await page.goto('https://usa.mizuno.com/running-hyperwarp-pure-running-shoe/',
      { waitUntil: 'networkidle2', timeout: 30000 });
    await new Promise(r => setTimeout(r, 3000));

    const urls = await page.evaluate(() => {
      const results = [];
      document.querySelectorAll('img').forEach(img => {
        const src = img.currentSrc || img.src;
        if (src && src.includes('adis.ws') && !src.includes('icon')) {
          results.push({ src, w: img.naturalWidth, h: img.naturalHeight });
        }
      });
      // Check for data attributes
      document.querySelectorAll('[data-src]').forEach(el => {
        if (el.dataset.src && el.dataset.src.includes('adis.ws')) {
          results.push({ src: el.dataset.src, w: 0, h: 0 });
        }
      });
      return results;
    });

    console.log(`  Found ${urls.length} Mizuno Pure URLs`);
    const unique = [...new Map(urls.map(u => [u.src.split('?')[0], u])).values()];
    unique.forEach((u, i) => console.log(`  [${i}] ${u.src.substring(0, 150)}`));

    const dir = path.join(BASE_DIR, 'mizuno/hyperwarppure');
    const names = ['side', 'top', 'outsole', 'front', 'back'];

    for (let i = 0; i < Math.min(unique.length, 5); i++) {
      // Modify URL for higher res
      let url = unique[i].src.replace(/w=\d+/, 'w=1200').replace(/h=\d+/, 'h=1200');
      const fname = `${names[i]}.jpg`;
      const fpath = path.join(dir, fname);
      try {
        await download(url, fpath);
        const sz = fs.statSync(fpath).size;
        console.log(`  ${sz > 5000 ? '✅' : '❌'} ${fname}: ${(sz/1024).toFixed(0)}KB`);
      } catch (err) {
        console.log(`  ❌ ${fname}: ${err.message}`);
      }
    }
  } finally {
    await page.close();
  }
}

async function fetchMizunoElite(browser) {
  console.log('\n=== Mizuno Hyperwarp Elite ===');
  const page = await browser.newPage();
  try {
    await page.goto('https://usa.mizuno.com/running-hyperwarp-elite-unisex',
      { waitUntil: 'networkidle2', timeout: 30000 });
    await new Promise(r => setTimeout(r, 3000));

    const urls = await page.evaluate(() => {
      const results = [];
      document.querySelectorAll('img').forEach(img => {
        const src = img.currentSrc || img.src;
        if (src && src.includes('adis.ws') && !src.includes('icon')) {
          results.push({ src, w: img.naturalWidth, h: img.naturalHeight });
        }
      });
      return results;
    });

    console.log(`  Found ${urls.length} Mizuno Elite URLs`);
    const unique = [...new Map(urls.map(u => [u.src.split('?')[0], u])).values()];
    unique.forEach((u, i) => console.log(`  [${i}] ${u.src.substring(0, 150)}`));

    const dir = path.join(BASE_DIR, 'mizuno/hyperwarpelit');
    const names = ['side', 'top', 'outsole', 'front', 'back'];

    for (let i = 0; i < Math.min(unique.length, 5); i++) {
      let url = unique[i].src.replace(/w=\d+/, 'w=1200').replace(/h=\d+/, 'h=1200');
      const fname = `${names[i]}.jpg`;
      const fpath = path.join(dir, fname);
      try {
        await download(url, fpath);
        const sz = fs.statSync(fpath).size;
        console.log(`  ${sz > 5000 ? '✅' : '❌'} ${fname}: ${(sz/1024).toFixed(0)}KB`);
      } catch (err) {
        console.log(`  ❌ ${fname}: ${err.message}`);
      }
    }
  } finally {
    await page.close();
  }
}

async function main() {
  const browser = await puppeteer.connect({ browserURL: 'http://localhost:9222' });

  await fetchBrooks(browser);
  await fetchHoka(browser);
  await fetchMizunoPure(browser);
  await fetchMizunoElite(browser);

  browser.disconnect();
  console.log('\n✅ All done!');
}

main().catch(console.error);
