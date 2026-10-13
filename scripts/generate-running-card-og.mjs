// 정적 배포에서도 공유 크롤러가 바로 읽는 대표 이미지. 실행: node scripts/generate-running-card-og.mjs
// 기존 AI 인물 일러스트의 출처: public/images/running-card/IMAGE_CREDITS.md
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const root = new URL('../', import.meta.url);
const portrait = await sharp(fileURLToPath(new URL('public/images/running-card/athena.webp', root)))
  .resize(520, 630, { fit: 'cover', position: 'top' })
  .png().toBuffer();

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="fade"><stop stop-color="#17150f"/><stop offset="1" stop-color="#17150f" stop-opacity="0"/></linearGradient>
    <linearGradient id="shade" x2="0" y2="1"><stop stop-color="#17150f" stop-opacity="0"/><stop offset="1" stop-color="#17150f" stop-opacity=".92"/></linearGradient>
  </defs>
  <rect width="1200" height="630" fill="#17150f"/>
  <image href="data:image/png;base64,${portrait.toString('base64')}" x="680" width="520" height="630"/>
  <rect x="680" width="150" height="630" fill="url(#fade)"/>
  <rect x="680" y="380" width="520" height="250" fill="url(#shade)"/>
  <g font-family="Apple SD Gothic Neo, Noto Sans CJK KR, sans-serif">
    <text x="64" y="76" fill="#c4a775" font-size="20" letter-spacing="4">RUNNING CARD / 28 DAYS</text>
    <text x="60" y="215" fill="#f5efdf" font-size="86" font-weight="800">나는 어떤</text>
    <text x="60" y="317" fill="#f5efdf" font-size="86" font-weight="800">러너일까?</text>
    <text x="64" y="393" fill="#c6bdac" font-size="28">지난 28일의 기록으로 찾는 나의 러닝 유형</text>
    <rect x="64" y="442" width="302" height="60" rx="30" fill="#c4a775"/>
    <text x="89" y="481" fill="#17150f" font-size="25" font-weight="700">나만의 러닝카드 만들기 →</text>
    <path d="M64 548H614" stroke="#494134"/>
    <text x="64" y="587" fill="#eee4d0" font-size="22" font-weight="700">올런바웃</text>
    <text x="614" y="587" fill="#a69a85" font-size="19" text-anchor="end">allrunabout.com</text>
    <text x="928" y="530" fill="#ead5aa" font-size="16" letter-spacing="4" text-anchor="middle">ATHENA</text>
    <text x="928" y="569" fill="#fff5e3" font-size="30" font-weight="700" text-anchor="middle">페이스를 설계하는 자</text>
    <text x="928" y="600" fill="#c6bdac" font-size="16" text-anchor="middle">러닝 유형 카드 예시</text>
  </g>
</svg>`;

const output = fileURLToPath(new URL('public/images/running-card-og-v1.png', root));
await sharp(Buffer.from(svg)).png({ compressionLevel: 9, palette: true, quality: 90 }).toFile(output);
console.log(`OG 이미지 생성: ${output} (1200×630)`);
