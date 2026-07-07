// 이미지 CDN 프리픽스
// 방문자가 로드하는 실사용 이미지를 외부 CDN(jsDelivr)에서 서빙해 Vercel 전송량을 줄인다.
// 프로덕션에서만 NEXT_PUBLIC_IMAGE_CDN을 설정하고, 로컬·프리뷰는 미설정 → 상대경로 그대로
// 폴백하므로 개발/롤백에 지장이 없다. env 를 비우면 즉시 로컬 경로로 복귀한다.
// (OG·JSON-LD·메타 이미지는 origin 유지 — 여기서 다루지 않는다.)
const CDN = process.env.NEXT_PUBLIC_IMAGE_CDN || '';

/** 단일 이미지 경로에 CDN 프리픽스를 붙인다. 외부 URL(http…)·빈 값은 그대로 반환. */
export function img(path?: string): string {
  if (!path || path.startsWith('http')) return path ?? '';
  return CDN ? `${CDN}${path}` : path;
}

/** 블로그 본문 HTML 문자열 안의 로컬 <img src="/images/…">(및 srcset)을 CDN으로 치환.
 *  외부 https 이미지(unsplash 등)는 `/images/` 로 시작하지 않아 걸리지 않는다. */
export function withCdnImages(html: string): string {
  if (!CDN) return html;
  return html.replace(/(src|srcset)="\/images\//g, `$1="${CDN}/images/`);
}
