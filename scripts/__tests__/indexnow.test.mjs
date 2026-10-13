import { test } from 'node:test';
import assert from 'node:assert/strict';
import { changedDataRoutes, changedRoutes, gitText } from '../indexnow.mjs';

test('월별 글 하나를 고치면 해당 글만 통지한다', () => {
  const before = `export const posts = [{slug: 'one', content: 'old'}, {slug: 'two', content: 'unchanged'}];`;
  const after = `export const posts = [{slug: 'new', content: 'new'}, {slug: 'one', content: 'updated'}, {slug: 'two', content: 'unchanged'}];`;
  assert.deepEqual(changedDataRoutes(before, after, '/blog'), [
    { path: '/blog/one', deleted: false }, { path: '/blog/new', deleted: false },
  ]);
});

test('삭제·slug 교체도 통지하며 본문 문자열은 페이지로 해석하지 않는다', () => {
  assert.deepEqual(changedDataRoutes(`const p = { slug: 'old', content: "slug: 'fake'" };`, `const p = { slug: 'new', content: 'text' };`, '/shoes'), [
    { path: '/shoes/old', deleted: true }, { path: '/shoes/new', deleted: false },
  ]);
});

test('일정 데이터는 id를 사용하고, sitemap에 없는 noindex URL은 제외한다', () => {
  const changes = [{ file: 'src/lib/data/marathon/2026-10.ts', before: `const p = [{id: 'race', status: 'open'}];`, after: `const p = [{id: 'race', status: 'closed'}, {id: 'hidden', noindex: true}];` }];
  assert.deepEqual(changedRoutes(changes, ['https://allrunabout.com/marathon/race', 'https://allrunabout.com/marathon']), [
    'https://allrunabout.com/marathon/race', 'https://allrunabout.com/marathon',
  ]);
});

test('공유 신발 설명 변경은 색인 가능한 신발 URL만 대상으로 한다', () => {
  assert.deepEqual(changedRoutes([{file: 'src/lib/seo/shoe-description.ts'}], ['https://allrunabout.com/shoes/one', 'https://allrunabout.com/blog/one']), ['https://allrunabout.com/shoes/one']);
});

test('큰 월별 원본도 기본 1MB 버퍼 제한에 잘리지 않는다', () => {
  const source = gitText('show', 'HEAD:src/lib/data/blog/posts/2026-06.ts');
  assert.ok(Buffer.byteLength(source) > 1024 * 1024);
  assert.ok(source.trimEnd().endsWith('];'));
});
