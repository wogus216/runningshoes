import type { CSSProperties, ReactNode } from "react";
import { Easing, interpolate, useCurrentFrame } from "remotion";

type Props = {
  children: ReactNode;
  start: number;
  duration?: number;
  exitAt?: number;
  style?: CSSProperties;
};

export const TextReveal: React.FC<Props> = ({
  children,
  start,
  duration = 14,
  exitAt,
  style,
}) => {
  const frame = useCurrentFrame();
  const end = start + duration;
  const exitEnd = exitAt === undefined ? undefined : exitAt + 8;
  const input = exitAt === undefined ? [start, end] : [start, end, exitAt, exitEnd!];
  const output = exitAt === undefined ? [0, 1] : [0, 1, 1, 0];

  return (
    <div
      style={{
        opacity: interpolate(frame, input, output, {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.bezier(0.16, 1, 0.3, 1),
        }),
        translate: `0 ${interpolate(frame, [start, end], [64, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.bezier(0.16, 1, 0.3, 1),
        })}px`,
        filter: `blur(${interpolate(frame, [start, end], [10, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        })}px)`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};
