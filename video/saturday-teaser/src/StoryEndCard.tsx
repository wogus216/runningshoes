import { AbsoluteFill, Img, staticFile } from "remotion";
import { ARCHIVE_LINES, COLORS, FONT, MONO } from "./theme";

/**
 * 스토리 마지막 장 — 링크 스티커를 얹을 판.
 *
 * 왜 릴스와 따로 만드나:
 *   릴스에는 누를 수 있는 링크가 없다(스티커는 스토리 기능이다). 그래서 릴스 엔드카드는
 *   'TO BE CONTINUED' 로 두는 게 맞다 — 없는 버튼을 가리키면 거짓말이 된다.
 *   반대로 스토리에는 버튼이 있으므로, 누를 이유를 대는 판이 따로 필요하다.
 *
 * 시제도 다르다: 'TO BE CONTINUED' 는 다음 편(미래) 얘기지만
 * 버튼은 '지금 볼 게 있다'를 전제로 누른다. 그래서 여기서는 현재형으로 쓴다.
 *
 * 레이아웃 규칙 — 인스타 스토리는 위아래 약 250px 을 앱 UI 가 덮는다.
 * 글자는 250~1400 안에 두고, 1400~1670 을 통째로 비워 스티커 자리로 남긴다.
 * 화살표가 그 빈자리를 가리키므로 '무엇을 누르라는 건지'가 그림으로 설명된다.
 *
 * 애니메이션이 없다 — remotion still 로 한 프레임만 뽑는 판이라 프레임에 의존하지 않는다.
 */
export const StoryEndCard: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.asphalt, color: COLORS.paper }}>
      <AbsoluteFill style={{ overflow: "hidden" }}>
        <Img
          src={staticFile("images/hero-sunrise.webp")}
          style={{
            width: "100%",
            height: 900,
            objectFit: "cover",
            objectPosition: "52% 44%",
            filter: "grayscale(1) contrast(1.12)",
          }}
        />
      </AbsoluteFill>

      {/* 사진 아래를 배경색으로 완전히 녹여 글자·스티커 영역을 깨끗하게 만든다 */}
      <AbsoluteFill
        style={{
          background:
            "linear-gradient(180deg, rgba(6,8,9,.42) 0%, rgba(6,8,9,.06) 26%, rgba(6,8,9,.86) 44%, #060809 50%, #060809 100%)",
        }}
      />

      <div style={{ position: "absolute", left: 82, right: 82, top: 1000 }}>
        <div
          style={{
            color: COLORS.signal,
            fontFamily: MONO,
            fontSize: 26,
            fontWeight: 600,
            letterSpacing: "0.18em",
          }}
        >
          첫 번째 이야기
        </div>

        {/* 릴스 엔드카드와 같은 두 줄이다(ARCHIVE_LINES). 한쪽만 고치면 두 판이 다른 말을 한다 */}
        {ARCHIVE_LINES.map((line, index) => (
          <div
            key={line}
            style={{
              marginTop: index === 0 ? 38 : 0,
              fontFamily: FONT,
              fontSize: 86,
              fontWeight: 920,
              lineHeight: 1.16,
              letterSpacing: "-0.055em",
              color: COLORS.paperDeep,
              wordBreak: "keep-all",
            }}
          >
            {line}
          </div>
        ))}

        <div
          style={{
            marginTop: 62,
            display: "flex",
            alignItems: "center",
            gap: 22,
            color: "rgba(212,205,196,.62)",
            fontFamily: MONO,
            fontSize: 24,
            fontWeight: 600,
            letterSpacing: "0.16em",
          }}
        >
          <span>여기 눌러서 보기</span>
          <span style={{ width: 120, height: 2, background: "rgba(212,205,196,.32)" }} />
        </div>

        {/* 스티커 자리를 가리키는 화살표. 이 아래로는 아무것도 두지 않는다 */}
        <div
          style={{
            marginTop: 26,
            color: COLORS.signal,
            fontFamily: FONT,
            fontSize: 92,
            fontWeight: 900,
            lineHeight: 1,
          }}
        >
          ↓
        </div>
      </div>
    </AbsoluteFill>
  );
};
