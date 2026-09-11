// 티켓 비율별 좌표. 인스타 업로드 규격에 맞춘 3종.
//  4:5  1080x1350 — 피드 세로. 인스타가 허용하는 가장 긴 세로라 잘림 없음(기본값)
//  9:16 1080x1920 — 스토리 전면
//  16:9 1920x1080 — 가로. 피드 가로 한계 1.91:1 안이라 역시 잘림 없음
// 3:4(0.75)는 피드 세로 한계 4:5(0.8)보다 길어 인스타가 위아래를 잘라내므로 넣지 않았다.
export type TicketRatio = '4:5' | '9:16' | '16:9';

export const TICKET_RATIOS: { id: TicketRatio; label: string; note: string }[] = [
  { id: '4:5', label: '4:5', note: '피드 세로' },
  { id: '9:16', label: '9:16', note: '스토리' },
  { id: '16:9', label: '16:9', note: '가로' },
];

export type TicketLayout = {
  width: number; height: number; landscape: boolean;
  headerRightX: number;
  frame: { x: number; y: number; width: number; height: number };
  captionX: number; captionY: number; captionMax: number; captionSize: number;
  dateX: number; dateY: number;
  distanceX: number; distanceY: number; distanceSize: number; kmX: number; kmY: number;
  dashY: number; dashFrom: number; dashTo: number;
  rowLabelY: number; rowValueY: number; cols: [number, number, number]; colMax: [number, number, number];
  lineY: number; footY: number; msgY: number; msgX: number; msgMax: number; msgSize: number;
};

export function ticketLayout(ratio: TicketRatio): TicketLayout {
  if (ratio === '16:9') {
    return {
      width: 1920, height: 1080, landscape: true, headerRightX: 1758,
      frame: { x: 48, y: 116, width: 900, height: 916 },
      captionX: 82, captionY: 975, captionMax: 810, captionSize: 54,
      dateX: 1010, dateY: 190,
      distanceX: 1000, distanceY: 440, distanceSize: 200, kmX: 1820, kmY: 439,
      dashY: 500, dashFrom: 1010, dashTo: 1872,
      rowLabelY: 566, rowValueY: 618, cols: [1010, 1300, 1600], colMax: [250, 260, 272],
      lineY: 690, footY: 752, msgY: 840, msgX: 1010, msgMax: 850, msgSize: 34,
    };
  }
  // 세로 두 종은 같은 세로 스택. 남는 높이는 전부 사진이 가져간다.
  const height = ratio === '9:16' ? 1920 : 1350;
  const extra = height - 1350;
  return {
    width: 1080, height, landscape: false, headerRightX: 918,
    frame: { x: 48, y: 116, width: 984, height: 580 + extra },
    captionX: 82, captionY: 651 + extra, captionMax: 890, captionSize: 58,
    dateX: 60, dateY: 752 + extra,
    distanceX: 50, distanceY: 955 + extra, distanceSize: 226, kmX: 932, kmY: 954 + extra,
    dashY: 994 + extra, dashFrom: 48, dashTo: 1032,
    rowLabelY: 1048 + extra, rowValueY: 1096 + extra, cols: [60, 350, 685], colMax: [245, 260, 335],
    lineY: 1140 + extra, footY: 1195 + extra, msgY: 1265 + extra, msgX: 60, msgMax: 950, msgSize: 34,
  };
}
