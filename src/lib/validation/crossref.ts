/**
 * 다른 신발의 수치를 문자열로 옮겨 적은 서술이 DB 와 어긋났는지 찾는다 — `npm run validate` 10번 · `npm run check:crossref`
 *
 * 2026-10-23 전체 점검에서 차단 124건 중 약 80건이 이 유형이었다. "본디 9(220,000원)"처럼 비교 대상 신발의
 * 가격·무게를 기억으로 적어 두면, 그 신발 파일이 갱신돼도 인용은 따라오지 않는다(본디 9 는 DB 229,000원인데
 * 신발 5파일·블로그 3편이 220,000원). 같은 파일 안에서 "1만원 저렴"과 "7만원 저렴"이 공존한 곳도 4곳이었다.
 *
 * 판정 기준(오탐을 줄이려고 좁게 잡았다):
 *  - 별칭 바로 뒤 30자 안의 첫 숫자만 그 신발의 값으로 본다. 다른 별칭이 끼면 거기서 끊는다.
 *  - 가격: 콤마·"N만 N천원" 표기는 ±1,000원, "N만원대"는 [N만, N만+9,999], "N만원"은 ±9,999원으로 본다(반올림 서술 허용).
 *  - 무게: specs.weight 또는 detailedSpecs.weight 문자열 속 어느 숫자와도 ±5g 밖이면 다른 값이다(공식·랩 기준 혼재 허용).
 *  - 할인·직구·미국가·와이드·GTX·이전 표기처럼 정가가 아닌 값을 말하는 문맥은 비교하지 않는다.
 *  - 차액("OO보다 N만원 저렴"): 주어가 확실한 신발 파일에서만 자기 price 로 계산해 ±5,000원 밖이면 다른 값이다.
 * "다른 값"은 어느 쪽이 맞는지 판정하지 않는다. DB 가 틀렸을 수도 있으니 1차 소스로 확인한 뒤 고친다.
 */

export interface CrossrefShoe {
  slug: string;
  brand: string;
  name: string;
  price?: number;
  weight?: number;
  weightNote?: string;
}

export type CrossrefKind = 'price' | 'weight' | 'gap';

export interface CrossrefHit {
  file: string;
  line: number;
  kind: CrossrefKind;
  slug: string;
  alias: string;
  found: string;
  db: string;
  excerpt: string;
}

const BRAND_SLUG_PREFIX = [
  'new-balance-', 'under-armour-', 'li-ning-', 'nike-', 'adidas-', 'asics-', 'hoka-', 'on-', 'saucony-',
  'brooks-', 'diadora-', 'mizuno-', 'prospecs-', 'puma-', 'kiprun-', 'merrell-', 'salomon-',
];

/** 한글 표기가 매체·글마다 갈리는 단어. 왼쪽이 DB 표기다. */
const SPELLING_VARIANTS: Record<string, string[]> = {
  엔돌핀: ['엔도르핀'],
  클리프톤: ['클리프턴'],
  씨엘로: ['시엘로'],
  테크톤: ['텍톤'],
  레드헤어: ['레드 헤어'],
  '스카이+': ['스카이 플러스', '스카이플러스'],
  '엣지+': ['엣지 플러스', '엣지플러스'],
};

/** 이름 앞에 붙었다 떨어졌다 하는 시리즈 접두어 — 떼어 낸 별칭도 만든다. */
const DROPPABLE_PREFIX = ['젤 ', '아디제로 ', 'ACG '];
/** 이름 끝의 세대 표기가 생략되는 1세대 모델 */
const DROPPABLE_SUFFIX = [' V1'];

const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/** 공백 유무를 가리지 않는 정규식 조각 — "본디 9"·"본디9" 둘 다 잡는다 */
const tokenPattern = (alias: string) => alias.trim().split(/\s+/).map(escape).join('\\s*');

export function buildAliases(shoe: CrossrefShoe): string[] {
  const out = new Set<string>();
  const add = (a: string) => { const t = a.trim(); if (t.length >= 2) out.add(t); };
  const bases = [shoe.name];
  for (const p of DROPPABLE_PREFIX) if (shoe.name.startsWith(p)) bases.push(shoe.name.slice(p.length));
  for (const s of DROPPABLE_SUFFIX) if (shoe.name.endsWith(s)) bases.push(shoe.name.slice(0, -s.length));
  // "라이트스프레이"는 이름 앞뒤 어디에도 붙는다("라이트스프레이 클라우드몬스터 3 하이퍼"·"클라우드붐 스트라이크 2 라이트스프레이")
  const LS = '라이트스프레이';
  if (shoe.name.endsWith(` ${LS}`)) bases.push(`${LS} ${shoe.name.slice(0, -LS.length - 1)}`);
  if (shoe.name.startsWith(`${LS} `)) bases.push(`${shoe.name.slice(LS.length + 1)} ${LS}`);
  for (const b of bases) {
    add(b);
    for (const [from, tos] of Object.entries(SPELLING_VARIANTS)) if (b.includes(from)) for (const to of tos) add(b.replace(from, to));
  }
  const prefix = BRAND_SLUG_PREFIX.find((p) => shoe.slug.startsWith(p));
  if (prefix) {
    const en = shoe.slug.slice(prefix.length).replace(/-/g, ' ');
    add(en);
    if (en.startsWith('gel ')) add(en.slice(4));
  }
  // 숫자 하나뿐인 별칭(예: "880 v15"에서 떨어져 나온 "880")은 만들지 않는다 — 위 규칙으로는 생기지 않지만 방어한다
  return Array.from(out).filter((a) => !/^\d+$/.test(a));
}

interface AliasEntry { alias: string; re: RegExp; shoe: CrossrefShoe }

export function buildAliasIndex(shoes: CrossrefShoe[]): AliasEntry[] {
  const entries: AliasEntry[] = [];
  for (const shoe of shoes) {
    for (const alias of buildAliases(shoe)) {
      // 앞은 글자·숫자가 아니어야 한다. 뒤는 ① 숫자가 바로 붙거나("카야노 3"→"카야노 33") ② 공백 뒤 1~2자리 세대 번호가
      // 오면("소닉블라스트"→"소닉블라스트 2") 다른 모델이다. 표 칸처럼 뒤에 가격·무게("카야노 33 199,000원")가 오는 건 허용한다.
      // 한글 조사("카야노 32보다")는 막지 않는다.
      const re = new RegExp(`(?<![가-힣A-Za-z0-9])${tokenPattern(alias)}(?![0-9])(?!\\s[0-9]{1,2}(?![0-9,]))(?![A-Za-z+])`, 'giu');
      entries.push({ alias, re, shoe });
    }
  }
  // 긴 별칭부터 — "클라우드몬스터 3 하이퍼"를 "클라우드몬스터 3"보다 먼저 소비한다
  return entries.sort((a, b) => b.alias.length - a.alias.length);
}

const NON_MSRP_CONTEXT = /할인|세일|특가|최저|아울렛|병행|직구|해외|미국|\$|USD|달러|이전|구형|당시|출시가|인상|인하|GTX|와이드|고어텍스|여성|우먼|키즈|쿠팡|네이버|중고|리셀|KREAM|크림|무신사|쿠폰|프로모션|엔화|위안|CNY|¥|추정|이월/i;

/** 별칭과 숫자 사이에 허용하는 것 — 구두점·공백과 조사 하나뿐. "엘리트는 퓨어(139g)"처럼 다른 단어가 끼면 그 숫자는 이 신발 것이 아니다 */
const LEAD = '[\\s(（:：=·,—\\-|¦]*(?:은|는|이|가|도|만|과|와)?[\\s(（:：=·|¦]*(?:약\\s*)?';

interface PriceRead { min: number; max: number; raw: string }

/** 창 앞머리에서 가격 하나를 읽는다. 첫 숫자가 가격이 아니면(무게·mm 등) 가격은 없다. */
export function readPrice(windowText: string): PriceRead | null {
  const w = windowText;
  const patterns: [RegExp, (m: RegExpMatchArray) => PriceRead][] = [
    [new RegExp(`^${LEAD}₩\\s?(\\d{1,3}(?:,\\d{3})+)`), (m) => { const v = +m[1].replace(/,/g, ''); return { min: v - 1000, max: v + 1000, raw: m[0] }; }],
    [new RegExp(`^${LEAD}₩?(\\d{1,3}(?:,\\d{3})+)\\s?원`), (m) => { const v = +m[1].replace(/,/g, ''); return { min: v - 1000, max: v + 1000, raw: m[0] }; }],
    [new RegExp(`^${LEAD}(\\d{1,2})만\\s?(\\d)천\\s?원`), (m) => { const v = +m[1] * 10000 + +m[2] * 1000; return { min: v - 1000, max: v + 1000, raw: m[0] }; }],
    [new RegExp(`^${LEAD}(\\d{1,2})\\.(\\d)만\\s?원`), (m) => { const v = +m[1] * 10000 + +m[2] * 1000; return { min: v - 1000, max: v + 1000, raw: m[0] }; }],
    [new RegExp(`^${LEAD}(\\d{1,2})만\\s?원(대|선)?`), (m) => { const v = +m[1] * 10000; return m[2] ? { min: v, max: v + 9999, raw: m[0] } : { min: v - 9999, max: v + 9999, raw: m[0] }; }],
  ];
  for (const [re, f] of patterns) {
    const m = w.match(re);
    if (!m) continue;
    // "보다 7만원 저렴"·"대비 2만원 비싸" 같은 차액은 이 신발의 가격이 아니다
    const tail = w.slice(m[0].length, m[0].length + 8);
    const read = f(m);
    // 5만원 미만은 신발 정가일 수 없다(validate 4번 범위) — "가 4만원"·"— 3만원"은 차액이다
    if ((read.min + read.max) / 2 < 60000) return null;
    if (/^\s*(을|를|이|가|은|는)?\s*(가량|정도|이상)?\s*(저렴|싸|싼|비싸|비싼|더|차|낮|높|절약|아끼|올라|내려)/.test(tail) || /차이|비싼|싼데/.test(w.slice(m[0].length, m[0].length + 14))) return null;
    return read;
  }
  return null;
}

export function readWeight(windowText: string): { value: number; raw: string } | null {
  const m = windowText.match(new RegExp(`^${LEAD}(\\d{3})\\s?g(?![a-z])`, 'i'));
  return m ? { value: +m[1], raw: m[0] } : null;
}

const weightCandidates = (s: CrossrefShoe) => {
  const vals = new Set<number>();
  if (s.weight) vals.add(s.weight);
  for (const m of Array.from((s.weightNote ?? '').matchAll(/(\d{3})\s?g/g))) vals.add(+m[1]);
  return Array.from(vals);
};

/** HTML 태그·마크다운 강조를 걷어 표 칸("<td>본디 9</td><td>229,000원</td>")을 한 줄 문장처럼 읽게 한다 */
export function plainLine(line: string): string {
  return line
    .replace(/<\/t[dh]>\s*<t[dh][^>]*>/g, ' ¦ ') // 표 칸 경계는 남긴다 — 가격 칸이 무게 칸 뒤에 와도 찾을 수 있게
    .replace(/<[^>]+>/g, ' ').replace(/\*\*/g, '').replace(/&nbsp;/g, ' ').replace(/\s{2,}/g, ' ');
}

const won = (n: number) => `${n.toLocaleString('ko-KR')}원`;

export interface ScanOptions {
  /** 신발 파일이면 그 신발 slug — 차액 서술의 주어로 쓴다 */
  selfSlug?: string;
}

export function scanLine(text: string, file: string, line: number, index: AliasEntry[], bySlug: Map<string, CrossrefShoe>, opts: ScanOptions = {}): CrossrefHit[] {
  const t = plainLine(text);
  if (/^\s*\/\//.test(text)) return [];
  // 1) 별칭 위치를 긴 것부터 잡고 겹치는 짧은 별칭은 버린다
  const spans: { start: number; end: number; entry: AliasEntry }[] = [];
  for (const entry of index) {
    entry.re.lastIndex = 0;
    for (const m of Array.from(t.matchAll(entry.re))) {
      const start = m.index ?? 0; const end = start + m[0].length;
      if (spans.some((s) => start < s.end && end > s.start)) continue;
      spans.push({ start, end, entry });
    }
  }
  spans.sort((a, b) => a.start - b.start);
  const hits: CrossrefHit[] = [];
  spans.forEach((sp, i) => {
    const nextStart = spans[i + 1]?.start ?? t.length;
    const window = t.slice(sp.end, Math.min(sp.end + 30, nextStart)).split(/[.。!?]\s/)[0];
    const before = t.slice(Math.max(0, sp.start - 12), sp.start);
    const context = before + t.slice(sp.start, sp.end) + window;
    const shoe = sp.entry.shoe;
    const excerpt = t.slice(Math.max(0, sp.start - 20), Math.min(t.length, sp.end + 40)).trim();
    const base = { file, line, slug: shoe.slug, alias: t.slice(sp.start, sp.end), excerpt };
    if (NON_MSRP_CONTEXT.test(context)) return;
    const price = readPrice(window);
    if (price && shoe.price) {
      if (shoe.price < price.min || shoe.price > price.max) hits.push({ ...base, kind: 'price', found: price.raw.trim(), db: won(shoe.price) });
      return;
    }
    const wt = readWeight(window);
    if (wt) {
      const cands = weightCandidates(shoe);
      if (cands.length && !cands.some((c) => Math.abs(c - wt.value) <= 5)) hits.push({ ...base, kind: 'weight', found: wt.raw.trim(), db: cands.map((c) => `${c}g`).join('/') });
    }
    // 표 행이면 별칭 칸 뒤 4칸 안에서 가격 칸을 찾는다("베이퍼플라이 4 ¦ 166g ¦ 2025.3 ¦ 약 35만원" — 2026-10-23 놓친 사례)
    if (shoe.price && t.includes('¦')) {
      const cells = t.slice(sp.end, nextStart).split('¦').slice(1, 5);
      for (const cell of cells) {
        if (NON_MSRP_CONTEXT.test(cell)) continue;
        const pr = readPrice(cell);
        if (!pr) continue;
        if (shoe.price < pr.min || shoe.price > pr.max) hits.push({ ...base, kind: 'price', found: pr.raw.trim(), db: won(shoe.price) });
        break;
      }
    }
  });
  // 2) 차액 — 주어가 분명한 신발 파일에서만
  const self = opts.selfSlug ? bySlug.get(opts.selfSlug) : undefined;
  if (self?.price) {
    for (const sp of spans) {
      const other = sp.entry.shoe;
      if (other.slug === self.slug || !other.price) continue;
      const after = t.slice(sp.end, sp.end + 40);
      const m = after.match(/^[^.]{0,20}?보다\s*(?:약\s*)?(\d{1,2})만\s*(?:(\d)천\s*)?원\s*(?:가량|정도|이상)?\s*(저렴|싸|낮|비싸|높|더 비싸|더 저렴)/);
      if (!m) continue;
      if (NON_MSRP_CONTEXT.test(t.slice(Math.max(0, sp.start - 12), sp.end + 40))) continue;
      const claimed = +m[1] * 10000 + (m[2] ? +m[2] * 1000 : 0);
      const cheaper = !/비싸|높/.test(m[3]);
      const actual = cheaper ? other.price - self.price : self.price - other.price;
      if (Math.abs(actual - claimed) > 5000) {
        hits.push({
          file, line, kind: 'gap', slug: other.slug, alias: t.slice(sp.start, sp.end),
          found: `${won(claimed)} ${cheaper ? '저렴' : '비쌈'}`,
          db: `${self.slug} ${won(self.price)} vs ${won(other.price)} → ${actual >= 0 ? won(actual) : `반대로 ${won(-actual)}`}`,
          excerpt: t.slice(Math.max(0, sp.start - 20), Math.min(t.length, sp.end + 45)).trim(),
        });
      }
    }
  }
  return hits;
}

export function scanText(source: string, file: string, index: AliasEntry[], bySlug: Map<string, CrossrefShoe>, opts: ScanOptions = {}): CrossrefHit[] {
  return source.split('\n').flatMap((l, i) => scanLine(l, file, i + 1, index, bySlug, opts));
}
