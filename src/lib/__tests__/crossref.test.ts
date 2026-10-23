import { describe, expect, it } from 'vitest';
import { buildAliases, buildAliasIndex, readPrice, scanLine, type CrossrefShoe } from '@/lib/validation/crossref';

const SHOES: CrossrefShoe[] = [
  { slug: 'hoka-bondi-9', brand: 'Hoka', name: '본디 9', price: 229000, weight: 303 },
  { slug: 'asics-gel-kayano-32', brand: 'Asics', name: '젤 카야노 32', price: 199000, weight: 295 },
  { slug: 'asics-gel-kayano-33', brand: 'Asics', name: '젤 카야노 33', price: 199000, weight: 298 },
  { slug: 'on-cloudrunner-2', brand: 'On', name: '클라우드러너 2', price: 189000, weight: 275 },
  { slug: 'asics-sonicblast', brand: 'Asics', name: '소닉블라스트', price: 229000, weight: 255 },
  { slug: 'asics-sonicblast-2', brand: 'Asics', name: '소닉블라스트 2', price: 229000, weight: 242 },
  { slug: 'on-cloudmonster-3', brand: 'On', name: '클라우드몬스터 3', price: 229000, weight: 295 },
  { slug: 'on-cloudmonster-3-hyper', brand: 'On', name: '클라우드몬스터 3 하이퍼', price: 259000, weight: 264 },
  { slug: 'saucony-endorphin-speed-5', brand: 'Saucony', name: '엔돌핀 스피드 5', price: 219000, weight: 238, weightNote: '공식 241g · 랩 238g' },
  { slug: 'nike-zoom-fly-6', brand: 'Nike', name: '줌 플라이 6', price: 209000, weight: 248 },
  { slug: 'asics-gel-nimbus-28', brand: 'Asics', name: '젤 님버스 28', price: 199000, weight: 278 },
  { slug: 'mizuno-hyperwarp-elite', brand: 'Mizuno', name: '하이퍼워프 엘리트', price: 279000, weight: 170 },
];
const index = buildAliasIndex(SHOES);
const withSelf = [...SHOES, { slug: 'asics-gel-slowcush', brand: 'Asics', name: '젤 슬로우쿠시', price: 249000, weight: 298 }];
const bySlugAll = new Map(withSelf.map((s) => [s.slug, s]));
const scan = (text: string, selfSlug?: string) => scanLine(text, 'x.ts', 1, index, bySlugAll, { selfSlug });

describe('buildAliases', () => {
  it('시리즈 접두어를 뗀 별칭과 slug 영문 별칭을 만든다', () => {
    const a = buildAliases(SHOES[1]);
    expect(a).toEqual(expect.arrayContaining(['젤 카야노 32', '카야노 32', 'gel kayano 32', 'kayano 32']));
  });
  it('표기 변형을 만든다', () => {
    expect(buildAliases(SHOES[8])).toContain('엔도르핀 스피드 5');
  });
});

describe('readPrice', () => {
  it('콤마·만천·만원대 표기를 읽는다', () => {
    expect(readPrice('(₩220,000)보다')).toMatchObject({ min: 219000, max: 221000 });
    expect(readPrice(' 22만 9천원')).toMatchObject({ min: 228000, max: 230000 });
    expect(readPrice('(22만원대)')).toMatchObject({ min: 220000, max: 229999 });
  });
  it('차액 서술은 가격으로 읽지 않는다', () => {
    expect(readPrice('보다 7만원 저렴하고')).toBeNull();
    expect(readPrice(' 대비 2만원 비싸지만')).toBeNull();
  });
});

describe('scanLine — 다른 값', () => {
  it('실제 사례: 본디 9 가격을 220,000원으로 적은 곳을 잡는다', () => {
    const hits = scan('Bondi 9(₩220,000)보다 2만원 싸면서');
    expect(hits.map((h) => h.kind)).toContain('price');
  });
  it('실제 사례: 무게를 다른 값으로 적은 곳을 잡는다', () => {
    expect(scan('본디 9(293g) 대비 75g 경량화')[0]).toMatchObject({ kind: 'weight', slug: 'hoka-bondi-9' });
  });
  it('실제 사례: 신발 파일 안 차액 "카야노 32보다 7만원 저렴"(실제 1만원)을 잡는다', () => {
    const hits = scan('18만 9천원으로 카야노 32보다 7만원 저렴하고', 'on-cloudrunner-2');
    expect(hits).toHaveLength(1);
    expect(hits[0]).toMatchObject({ kind: 'gap', slug: 'asics-gel-kayano-32' });
  });
  it('표 칸의 가격을 읽는다', () => {
    expect(scan('<td>젤 카야노 33</td><td>209,000원</td>')[0]).toMatchObject({ kind: 'price', slug: 'asics-gel-kayano-33' });
  });
});

describe('scanLine — 2026-10-23 실데이터 오탐 회귀', () => {
  it('"보다 N만원 비싸지만"을 저렴으로 읽지 않는다("비싸" 안의 "싸")', () => {
    expect(scan('249,000원은 님버스 28(199,000원)보다 5만원 비싸고', 'asics-gel-slowcush')).toEqual([]);
  });
  it('"— 3만원·34g 차이" 같은 차액은 가격이 아니다', () => {
    expect(scan("title: '줌 플라이 6 vs X — 3만원·34g 차이'")).toEqual([]);
  });
  it('별칭과 숫자 사이에 다른 단어가 끼면 읽지 않는다', () => {
    expect(scan('하이퍼워프 엘리트는 퓨어(139g/34mm)와 프로 사이')).toEqual([]);
  });
  it('"N만원"은 위아래 반올림을 허용하되 1만원 넘게 어긋나면 잡는다', () => {
    expect(scan('젤 님버스 28(20만원)')).toEqual([]);
    expect(scan('줌 플라이 6은 19만원에 카본')[0]).toMatchObject({ kind: 'price' });
  });
});

describe('scanLine — 표 행', () => {
  it('무게 칸 뒤에 오는 가격 칸도 읽는다(2026-10-23 베이퍼플라이 4 "약 35만원" 놓친 사례)', () => {
    const hits = scan('<tr><td>본디 9</td><td>303g</td><td>2024.9</td><td>약 25만원</td></tr>');
    expect(hits).toEqual([expect.objectContaining({ kind: 'price', slug: 'hoka-bondi-9' })]);
  });
  it('맞는 가격 칸·할인 칸은 통과', () => {
    expect(scan('<tr><td>본디 9</td><td>303g</td><td>229,000원</td></tr>')).toEqual([]);
    expect(scan('<tr><td>본디 9</td><td>303g</td><td>세일 179,000원</td></tr>')).toEqual([]);
  });
});

describe('scanLine — 맞는 값·다른 모델은 통과', () => {
  it('맞는 가격·무게·차액은 통과', () => {
    expect(scan('본디 9(229,000원)')).toEqual([]);
    expect(scan('<td>젤 카야노 33</td><td>199,000원</td>')).toEqual([]);
    expect(scan('카야노 32보다 1만원 저렴', 'on-cloudrunner-2')).toEqual([]);
    expect(scan('엔돌핀 스피드 5(241g)')).toEqual([]);
  });
  it('세대 번호가 붙으면 다른 모델로 본다', () => {
    expect(scan('소닉블라스트 2(229,000원)')).toEqual([]);
    expect(scan('클라우드몬스터 3 하이퍼(259,000원)')).toEqual([]);
  });
  it('할인·직구·와이드 문맥은 비교하지 않는다', () => {
    expect(scan('세일 중인 본디 9 179,000원')).toEqual([]);
    expect(scan('본디 9 와이드 239,000원')).toEqual([]);
  });
  it('주석 줄은 건너뛴다', () => {
    expect(scan('  // 본디 9(220,000원) — 옛 값')).toEqual([]);
  });
});
