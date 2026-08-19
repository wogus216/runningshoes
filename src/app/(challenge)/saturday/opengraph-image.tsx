import { ImageResponse } from 'next/og';

export const alt = '11 / 15, 농담은 접수됐다 — 쎄러데이 러닝 크루';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const dynamic = 'force-static';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          flexDirection: 'column',
          justifyContent: 'space-between',
          overflow: 'hidden',
          background: '#060809',
          color: '#d4cdc4',
          padding: '58px 68px 52px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            position: 'absolute',
            width: 420,
            height: 900,
            right: 105,
            top: -120,
            background: '#f3cc7c',
            transform: 'skewX(-18deg)',
            opacity: 0.16,
          }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 20, letterSpacing: 6 }}>
          <span>첫 번째 이야기</span>
          <span>SATURDAY RUNNING CREW</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', fontSize: 206, fontWeight: 900, letterSpacing: -18, lineHeight: 0.82 }}>
              11<span style={{ color: '#f3cc7c' }}>/</span>15
            </div>
            <div style={{ marginTop: 38, fontSize: 44, fontWeight: 800 }}>농담은 접수됐다.</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', fontSize: 18, lineHeight: 1.5 }}>
            <span>손기정평화마라톤</span>
            <span style={{ color: '#afaea0' }}>임진각 · 파주</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
