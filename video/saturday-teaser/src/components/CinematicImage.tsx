import type { CSSProperties } from "react";
import { Easing, Img, interpolate, staticFile, useCurrentFrame } from "remotion";

type Props = {
  src: string;
  fromScale?: number;
  toScale?: number;
  fromX?: number;
  toX?: number;
  fromY?: number;
  toY?: number;
  duration: number;
  style?: CSSProperties;
};

export const CinematicImage: React.FC<Props> = ({
  src,
  fromScale = 1.08,
  toScale = 1.16,
  fromX = 0,
  toX = 0,
  fromY = 0,
  toY = 0,
  duration,
  style,
}) => {
  const frame = useCurrentFrame();

  return (
    <Img
      src={staticFile(src)}
      style={{
        position: "absolute",
        inset: -80,
        width: "calc(100% + 160px)",
        height: "calc(100% + 160px)",
        objectFit: "cover",
        scale: interpolate(frame, [0, duration], [fromScale, toScale], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.bezier(0.33, 1, 0.68, 1),
        }),
        translate: `${interpolate(frame, [0, duration], [fromX, toX], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        })}px ${interpolate(frame, [0, duration], [fromY, toY], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        })}px`,
        ...style,
      }}
    />
  );
};
