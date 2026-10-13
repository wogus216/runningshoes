#!/usr/bin/env node
// Cloudflare 배포 성공 후 실행. 월별 데이터는 바뀐 객체만 비교해 통지한다.
import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import ts from 'typescript';

const SITE = 'https://allrunabout.com';
const CACHE = '.cache/indexnow-sha';
export const gitText = (...args) => execFileSync('git', args, { encoding: 'utf8', maxBuffer: 32 * 1024 * 1024 }).trim();
const git = gitText;

export function dataEntries(source, field) {
  const file = ts.createSourceFile('data.ts', source, ts.ScriptTarget.Latest, true);
  const entries = new Map();
  function visit(node) {
    if (ts.isObjectLiteralExpression(node)) {
      const prop = node.properties.find(p => ts.isPropertyAssignment(p) && p.name.getText(file) === field);
      if (prop && ts.isStringLiteral(prop.initializer)) {
        entries.set(prop.initializer.text, node.getText(file));
        return; // 본문 내부 객체는 페이지로 수집하지 않는다
      }
    }
    ts.forEachChild(node, visit);
  }
  visit(file);
  return entries;
}

export function changedDataRoutes(before, after, prefix, field = 'slug') {
  const oldEntries = dataEntries(before, field);
  const newEntries = dataEntries(after, field);
  return [...new Set([...oldEntries.keys(), ...newEntries.keys()])]
    .filter(id => oldEntries.get(id) !== newEntries.get(id))
    .map(id => ({ path: `${prefix}/${id}`, deleted: !newEntries.has(id) }));
}

async function fetchText(url) {
  const response = await fetch(url, { signal: AbortSignal.timeout(30000) });
  if (!response.ok) throw new Error(`${response.status}: ${url}`);
  return response.text();
}

async function sitemapUrls(url = `${SITE}/sitemap.xml`) {
  const xml = await fetchText(url);
  const locations = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1].replaceAll('&amp;', '&'));
  if (xml.includes('<sitemapindex')) return (await Promise.all(locations.map(sitemapUrls))).flat();
  return locations;
}

export function changedRoutes(changes, urls) {
  const candidates = new Map();
  const add = (path, deleted = false) => candidates.set(`${SITE}${path}`, deleted);
  const addPrefix = prefix => urls.filter(u => new URL(u).pathname.startsWith(prefix)).forEach(u => candidates.set(u, false));
  for (const { file, before, after } of changes) {
    let prefix;
    let field = 'slug';
    if (/^src\/lib\/data\/blog\/posts\/\d{4}-\d{2}\.ts$/.test(file)) prefix = '/blog';
    else if (/^src\/lib\/data\/shoes\/[^/]+\/[^/]+\.ts$/.test(file) && !file.endsWith('/index.ts')) prefix = '/shoes';
    else if (/^src\/lib\/data\/marathon\/[^/]+\.ts$/.test(file) && !file.endsWith('/index.ts')) { prefix = '/marathon'; field = 'id'; }
    if (prefix) {
      for (const route of changedDataRoutes(before, after, prefix, field)) add(route.path, route.deleted);
      add(prefix);
      continue;
    }
    if (file === 'src/lib/seo/shoe-description.ts') { addPrefix('/shoes/'); continue; }
    if (file === 'src/app/layout.tsx') { urls.forEach(u => candidates.set(u, false)); continue; }
    const page = /^src\/app\/(.*)\/(page|layout)\.tsx$/.exec(file);
    if (page) {
      const route = page[1].split('/').filter(p => !p.startsWith('(')).join('/');
      if (route.includes('[')) addPrefix(`/${route.split('/[')[0]}/`);
      else add(`/${route}`);
    }
  }
  const indexable = new Set(urls);
  return [...candidates].filter(([url, deleted]) => deleted || indexable.has(url)).map(([url]) => url);
}

async function main() {
  const args = process.argv.slice(2);
  const head = git('rev-parse', 'HEAD');
  const baseArg = args.find(a => a.startsWith('--base='))?.slice(7);
  const base = baseArg || (existsSync(CACHE) ? readFileSync(CACHE, 'utf8').trim() : `${head}^`);
  if (existsSync(CACHE) && !baseArg) {
    try { git('merge-base', '--is-ancestor', base, head); }
    catch { console.log('더 최신 배포가 이미 통지되어 이번 제출을 건너뜁니다.'); return; }
  }
  const files = git('diff', '--name-only', base, head).split('\n').filter(file => file.startsWith('src/') && /\.tsx?$/.test(file));
  const readAt = (ref, file) => {
    if (!git('ls-tree', '--name-only', ref, '--', file)) return '';
    return git('show', `${ref}:${file}`);
  };
  const changes = files.map(file => ({ file, before: readAt(base, file), after: readAt(head, file) }));
  const sitemapFile = args.find(a => a.startsWith('--sitemap-file='))?.slice(15);
  const urls = sitemapFile
    ? [...readFileSync(sitemapFile, 'utf8').matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1].replaceAll('&amp;', '&'))
    : await sitemapUrls();
  const routes = !baseArg && !existsSync(CACHE) ? urls : changedRoutes(changes, urls);
  console.log(`IndexNow: ${routes.length} URL (${base.slice(0, 8)} → ${head.slice(0, 8)})`);
  if (sitemapFile && !args.includes('--dry-run')) throw new Error('--sitemap-file은 --dry-run에서만 사용할 수 있습니다.');
  if (args.includes('--dry-run')) { console.log(routes.join('\n')); return; }
  if (routes.length) {
    const key = readFileSync('public/indexnow-key.txt', 'utf8').trim();
    const keyLocation = `${SITE}/indexnow-key.txt`;
    if ((await fetchText(keyLocation)).trim() !== key) throw new Error('배포된 IndexNow 키가 일치하지 않습니다.');
    for (let i = 0; i < routes.length; i += 10000) {
      const response = await fetch('https://api.indexnow.org/indexnow', {
        method: 'POST', headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify({ host: new URL(SITE).host, key, keyLocation, urlList: routes.slice(i, i + 10000) }),
        signal: AbortSignal.timeout(30000),
      });
      if (![200, 202].includes(response.status)) throw new Error(`IndexNow 제출 실패: HTTP ${response.status}`);
      console.log(response.status === 200 ? 'IndexNow 수신 완료 (HTTP 200)' : 'IndexNow 수신, 키 검증 대기 (HTTP 202)');
    }
  }
  mkdirSync('.cache', { recursive: true });
  writeFileSync(CACHE, head);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch(error => { console.error(error.message); process.exitCode = 1; });
}
