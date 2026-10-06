// 인물별 표시 문구. 원본은 프로토타입 `codex/running-card-prototype`(aa794de)의 같은 파일이다.
// S3는 칭호(title)만 가져온다 — 완료 제목이 `{인물명}` + `{칭호}`로 바뀐다.
// 신탁·강점·맹점·다음 행동은 S4에서 문구 검수(설계 §6)와 함께 가져온다.
// 칭호를 설계 §6에 대조한 결과는 docs/running-card-s3-report.md 3절에 있다(걸린 것도 바꾸지 않고 보고만 했다).
type CharacterPresentation = {
  title: string;
};

const PRESENTATIONS: Record<string, CharacterPresentation> = {
  heracles: { title: '먼 거리를 묵묵히 완수하는 자' },
  athena: { title: '페이스를 설계하는 자' },
  odysseus: { title: '항로가 바뀌어도 끝내 도착하는 자' },
  achilles: { title: '가장 빠른 순간을 노리는 자' },
  hestia: { title: '매일의 리듬을 지키는 자' },
  sisyphus: { title: '반복으로 산을 넘는 자' },
  poseidon: { title: '파도를 밀어내며 나아가는 자' },
  apollo: { title: '가장 빛나는 리듬을 찾는 자' },
  artemis: { title: '자기만의 길을 읽는 자' },
  zeus: { title: '폭풍 속에서도 리듬을 지배하는 자' },
  hera: { title: '자기 리듬을 품위 있게 지키는 자' },
  demeter: { title: '자기 페이스를 길러내는 자' },
  ares: { title: '불꽃 같은 자극을 밀어붙이는 자' },
  aphrodite: { title: '기분 좋은 리듬을 오래 남기는 자' },
  hephaestus: { title: '보이지 않는 시간을 단단히 쌓는 자' },
  hermes: { title: '가벼운 발걸음으로 길을 여는 자' },
  dionysus: { title: '즐거운 리듬을 함께 나누는 자' },
  persephone: { title: '계절이 바뀌어도 다시 피어나는 자' },
  perseus: { title: '결정적인 순간을 꿰뚫는 자' },
  penelope: { title: '하루의 약속을 오래 지키는 자' },
  theseus: { title: '복잡한 길에서도 방향을 찾는 자' },
  orpheus: { title: '몸의 리듬을 듣는 자' },
  atalanta: { title: '자기 속도로 앞서 나가는 자' },
  nike: { title: '결승선을 향해 리듬을 끌어올리는 자' },
  themis: { title: '강약의 균형을 읽는 자' },
  bellerophon: { title: '속도를 높이며 길을 여는 자' },
  daedalus: { title: '자기 훈련을 설계하는 자' },
  orion: { title: '먼 길의 끝을 바라보는 자' },
  hector: { title: '긴 레이스를 끝까지 지키는 자' },
  penthesilea: { title: '강한 순간에 중심을 지키는 자' },
  psyche: { title: '작은 회복을 오래 믿는 자' },
  eros: { title: '달리는 즐거움을 먼저 찾는 자' },
  prometheus: { title: '먼 거리를 향해 불을 밝히는 자' },
  talos: { title: '흔들림 없이 거리를 쌓는 자' },
  pheidippides: { title: '긴 길의 끝까지 호흡을 잇는 자' },
  ariadne: { title: '흩어진 길을 리듬으로 잇는 자' },
};

export const PRESENTATION_IDS = Object.keys(PRESENTATIONS);

export function getCharacterTitle(id: string): string {
  const presentation = PRESENTATIONS[id];
  if (!presentation) throw new Error(`Missing presentation for runner character: ${id}`);
  return presentation.title;
}
