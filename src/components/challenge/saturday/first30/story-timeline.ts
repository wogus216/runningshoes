// Each chapter holds before the next cut. These are narrative beats, not GPS samples.
export const chapterStops = [0, .28, .49, .72, .95] as const;
const beats = [[0, 0], [.12, 0], [.24, 1], [.32, 1], [.44, 2], [.55, 2], [.67, 3], [.77, 3], [.9, 4], [1, 4]] as const;

export function chapterAt(progress: number) {
  const p = Math.max(0, Math.min(1, progress));
  for (let i = 1; i < beats.length; i++) {
    const [end, to] = beats[i];
    if (p <= end) {
      const [start, from] = beats[i - 1];
      const t = (p - start) / (end - start);
      return from + (to - from) * t * t * (3 - 2 * t);
    }
  }
  return 4;
}
