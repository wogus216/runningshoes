import { ImageResponse } from 'next/og';
import { RACE_META, SATURDAY_COPY } from '@/lib/data/challenge/saturday';

// 정본에서 읽는다. 전에는 카피·대회명·장소를 여기 하드코딩해 둬서
// "saturday.ts만 고치면 페이지 전체가 갱신된다"는 데이터 파일의 약속이 OG에서만 깨져 있었다.
export const alt = `${RACE_META.datePoster}, ${SATURDAY_COPY.hero.hook} — 쎄러데이 러닝 크루`;
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
            <div style={{ marginTop: 38, fontSize: 44, fontWeight: 800 }}>{SATURDAY_COPY.hero.hook}</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', fontSize: 18, lineHeight: 1.5 }}>
            <span>{RACE_META.name}</span>
            <span style={{ color: '#afaea0' }}>{RACE_META.place}</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
