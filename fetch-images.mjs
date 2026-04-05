import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';

const BASE_DIR = '/Users/kwonjaehyeon/Programming/sancho/runningshoes/public/images/shoes';

const shoes = [
  {
    name: 'Brooks Glycerin Max 2',
    dir: 'brooks/glycerinmax2',
    url: 'https://www.brooksrunning.com/en_us/mens/shoes/road-running-shoes/glycerin-max-2/110479.html',
  },
  {
    name: 'Hoka Cielo X1',
    dir: 'hoka/cielox1',
    url: 'https://www.hoka.com/en/us/race-shoes/cielo-x1/1147910.html',
  },
  {
    name: 'NB Balos V1',
    dir: 'newbalance/balosv1',
    url: 'https://www.newbalance.com/pd/fresh-foam-x-balos-v1/MBALV1-50403.html',
  },
  {
    name: 'Mizuno Hyperwarp Pro',
    dir: 'mizuno/hyperwarppro',
    url: 'https://usa.mizuno.com/running-hyperwarp-pro-unisex',
  },
];

function download(url, filepath) {
  return new Promise((resolve, reject) => {
    const mod = url.startsWith('https') ? https : http;
    mod.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, filepath).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) return reject(new Error(`HTTP ${res.statusCode}`));
      const stream = fs.createWriteStream(filepath);
      res.pipe(stream);
      stream.on('finish', () => { stream.close(); resolve(filepath); });
    }).on('error', reject);
  });
}

async function main() {
  const browser = await puppeteer.connect({
    browserURL: 'http://localhost:9222',
  });

  for (const shoe of shoes) {
    console.log(`\n=== ${shoe.name} ===`);
    const page = await browser.newPage();

    try {
      await page.goto(shoe.url, { waitUntil: 'networkidle2', timeout: 30000 });
      await new Promise(r => setTimeout(r, 5000));

      // Scroll down to trigger lazy loading
      await page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight / 2);
      });
      await new Promise(r => setTimeout(r, 2000));

      // Extract all significant images
      const images = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('img'))
          .map(img => ({
            src: img.currentSrc || img.src,
            alt: img.alt || '',
            w: img.naturalWidth,
            h: img.naturalHeight,
          }))
          .filter(i => i.src && i.w > 300 && i.h > 300)
          .filter(i => !i.src.includes('svg') && !i.src.includes('icon') && !i.src.includes('logo') && !i.src.includes('badge'));
      });

      console.log(`  Found ${images.length} large images`);

      // Sort by size (largest first) and take top 5
      const top = images.sort((a, b) => (b.w * b.h) - (a.w * a.h)).slice(0, 5);

      const dir = path.join(BASE_DIR, shoe.dir);
      // Clean old invalid files
      try {
        for (const f of fs.readdirSync(dir)) {
          const p = path.join(dir, f);
          if (fs.statSync(p).size < 5000) fs.unlinkSync(p);
        }
      } catch {}

      const names = ['side', 'top', 'outsole', 'front', 'back'];
      for (let i = 0; i < top.length; i++) {
        const img = top[i];
        const ext = img.src.includes('.png') ? '.png' : '.jpg';
        const fname = `${names[i]}${ext}`;
        const fpath = path.join(dir, fname);

        try {
          await download(img.src, fpath);
          const sz = fs.statSync(fpath).size;
          if (sz < 5000) {
            fs.unlinkSync(fpath);
            console.log(`  ❌ ${fname}: too small (${sz}b) - removed`);
          } else {
            console.log(`  ✅ ${fname}: ${(sz/1024).toFixed(0)}KB (${img.w}x${img.h})`);
          }
        } catch (err) {
          console.log(`  ❌ ${fname}: ${err.message}`);
        }
      }

      // Print all URLs for reference
      console.log('  URLs:');
      top.forEach((img, i) => console.log(`    [${i}] ${img.src.substring(0, 150)}`));

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
