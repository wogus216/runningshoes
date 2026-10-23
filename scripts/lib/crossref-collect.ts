/**
 * 교차 검증 대상 수집 — 신발 데이터 파일 전체 + 블로그 월별 파일 전체를 줄 단위로 읽는다.
 * 데이터를 import 해 DB 값을 만들고, 본문은 텍스트로 읽어 위치(파일:줄)를 남긴다(validate 7번과 같은 방식).
 */
import fs from 'node:fs';
import path from 'node:path';
import { shoes } from '../../src/lib/data/shoes';
import { buildAliasIndex, scanText, type CrossrefHit, type CrossrefShoe } from '../../src/lib/validation/crossref';

const ROOT = path.resolve(__dirname, '../..');

export function crossrefShoes(): CrossrefShoe[] {
  return shoes.map((s) => ({
    slug: s.slug,
    brand: s.brand,
    name: s.name,
    price: s.price,
    weight: s.specs?.weight,
    weightNote: s.detailedSpecs?.weight,
  }));
}

export function collectCrossrefHits(): CrossrefHit[] {
  const db = crossrefShoes();
  const index = buildAliasIndex(db);
  const bySlug = new Map(db.map((s) => [s.slug, s]));
  const hits: CrossrefHit[] = [];
  const shoesDir = path.join(ROOT, 'src/lib/data/shoes');
  for (const dir of fs.readdirSync(shoesDir)) {
    const d = path.join(shoesDir, dir);
    if (!fs.statSync(d).isDirectory()) continue;
    for (const f of fs.readdirSync(d)) {
      if (!f.endsWith('.ts') || f === 'index.ts') continue;
      const slug = f.replace(/\.ts$/, '');
      hits.push(...scanText(fs.readFileSync(path.join(d, f), 'utf8'), `shoes/${dir}/${f}`, index, bySlug, { selfSlug: slug }));
    }
  }
  const blogDir = path.join(ROOT, 'src/lib/data/blog/posts');
  for (const f of fs.readdirSync(blogDir).filter((x) => x.endsWith('.ts') && x !== 'index.ts').sort()) {
    hits.push(...scanText(fs.readFileSync(path.join(blogDir, f), 'utf8'), `blog/${f}`, index, bySlug));
  }
  return hits;
}
