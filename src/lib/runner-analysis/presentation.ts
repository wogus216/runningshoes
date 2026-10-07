// 인물별 표시 문구. 원본은 프로토타입 `codex/running-card-prototype`(aa794de)의 같은 파일이다.
// 칭호(title)는 S3, 신탁·강점·맹점·다음 행동은 S4에서 가져왔다. 둘 다 원본과 글자 단위로 대조하는 스크립트로 옮겼다.
// 칭호를 설계 §6에 대조한 결과는 docs/running-card-s3-report.md 3절에 있다. 걸린 4개와 아레스는 운영자 결정(2026-10-06)으로
// 바꿨고(헤스티아·디오니소스·프시케·오르페우스·아레스), 경계 6개는 그대로 두었다. 나머지는 aa794de 원문 그대로다.
// 신탁·강점·맹점·다음 행동은 §6 대조 결과(docs/running-card-s4-report.md 3-2 걸림 19·3-3 경계 1–13)의 대체안으로 바꿨다
// (운영자 결정 2026-10-07). 경계 14 페넬로페의 다음 행동은 걷기라도 활동을 늘리는 말이라 문장과 nextRunRaises 를 그대로 둔다.
// 나머지는 aa794de 원문 그대로다.
// 원본의 englishName(D9 — 단독 NIKE)·rhythm(결과 카드에 자리 없음)은 가져오지 않았다.
// image 는 S5-C(2026-10-07)에 원본 PNG 를 WebP 로 바꿔 넣었다. AI 생성 이미지이고 출처는 public/images/running-card/IMAGE_CREDITS.md.
// 옷·신발에 상표처럼 읽히는 표식이 있는 14명은 image 가 없다(표식을 지운 판 재생성 대기, docs/running-card-s5-report.md S5-C·S5-D).
// 제우스·오르페우스·아폴론·벨레로폰·아탈란타·탈로스(S5-C 판정) + 헤파이스토스·아레스·헥토르·펜테실레이아(리드 판단 2026-10-07)
// + 헤라·포세이돈·페넬로페·시시포스(리드가 원본 해상도로 확대해 찾음, 2026-10-07).
// 결과 카드·공유받은 화면은 image 가 없으면 그림 자리를 비우지 않고 건너뛴다. 공유 이미지 1장째는 image 가 있을 때만 그림을 배경으로 깔고(S5-D), 없으면 메달 표지 그대로다.
// watchout 은 맹점 규칙 1–4에 걸리지 않을 때 쓰는 인물별 기본 맹점, nextRun 은 다음 14일 행동이다(explain.ts).
// nextRunRaises: 거리·속도를 늘리는 다음 행동. 회복 여유가 50 미만이면 explain.ts 가 이 문장을 쓰지 않는다(스펙 434행).
type CharacterPresentation = {
  title: string;
  image?: string;
  // 그림 속 머리 중심의 세로 위치(0=위, 1=아래). 리드가 10% 눈금을 그은 접촉 시트로 눈대중한 값(2026-10-07, ±0.03 정도).
  // 피드(4:5) 공유 이미지가 그림을 자를 때 머리를 남기는 데만 쓴다(medal3d-share.js). image 가 있으면 반드시 있다.
  imageFocus?: number;
  oracle: string;
  strength: string;
  watchout: string;
  nextRun: string;
  nextRunRaises?: true;
};

const PRESENTATIONS: Record<string, CharacterPresentation> = {
  heracles: {
    title: '먼 거리를 묵묵히 완수하는 자',
    image: '/images/running-card/heracles.webp',
    imageFocus: .17,
    oracle: '먼 길은 이미 너의 편이다.',
    strength: '한 번 정한 거리를 끝까지 가져가는 힘이 선명합니다.',
    watchout: '긴 거리를 감당하는 힘에 비해 훈련 변화는 적은 편입니다.',
    nextRun: '이번 주 한 번은 평소보다 짧고 가볍게 달리세요.',
  },
  athena: {
    title: '페이스를 설계하는 자',
    image: '/images/running-card/athena.webp',
    imageFocus: .13,
    oracle: '계획은 이미 결승선을 향한다.',
    strength: '거리와 자극, 리듬을 함께 조절하는 감각이 좋습니다.',
    watchout: '계획이 촘촘할수록 쉬는 날도 계획 안에 넣어야 합니다.',
    nextRun: '다음 러닝은 평소보다 조금 여유 있는 페이스로 마무리하세요.',
  },
  odysseus: {
    title: '항로가 바뀌어도 끝내 도착하는 자',
    image: '/images/running-card/odysseus.webp',
    imageFocus: .25,
    oracle: '길을 읽는 사람은 돌아가도 길을 잃지 않는다.',
    strength: '상황이 달라도 긴 호흡을 유지하는 적응력이 있습니다.',
    watchout: '리듬이 흔들리는 주에는 목표를 작게 다시 잡는 편이 좋습니다.',
    nextRun: '다음 한 번은 거리보다 일정한 호흡에만 집중해 보세요.',
  },
  achilles: {
    title: '가장 빠른 순간을 노리는 자',
    image: '/images/running-card/achilles.webp',
    imageFocus: .33,
    oracle: '빠름은 준비된 리듬에서 나온다.',
    strength: '강한 자극이 필요한 날에 집중도를 끌어올리는 힘이 있습니다.',
    watchout: '빠른 날 다음의 빈 공간도 훈련 일부로 남겨 두세요.',
    nextRun: '다음 러닝은 기록 대신 편안한 대화 페이스로 달리세요.',
  },
  hestia: {
    title: '꺼지지 않는 리듬을 지키는 자',
    image: '/images/running-card/hestia.webp',
    imageFocus: .13,
    oracle: '작은 불빛이 가장 오래 길을 밝힌다.',
    strength: '무리하지 않고도 러닝을 생활 안에 남기는 힘이 있습니다.',
    watchout: '익숙함이 편안해질수록 가끔은 새로운 자극도 필요합니다.',
    nextRun: '다음 러닝도 짧게라도 평소 리듬대로 이어가세요.',
  },
  sisyphus: {
    title: '반복으로 산을 넘는 자',
    oracle: '오늘의 한 걸음도 결국 경사를 바꾼다.',
    strength: '눈에 띄지 않는 날에도 루틴을 유지하는 힘이 단단합니다.',
    watchout: '같은 방식이 길어지면 기록의 변화를 알아차리기 어려울 수 있습니다.',
    nextRun: '이번 주 한 번은 평소 코스의 반대 방향으로 달려보세요.',
  },
  poseidon: {
    title: '파도를 밀어내며 나아가는 자',
    oracle: '거친 리듬도 너를 멈추게 하진 못한다.',
    strength: '거리와 강도가 커져도 앞으로 나아가는 힘이 있습니다.',
    watchout: '강한 날이 이어질수록 달린 날 사이 간격을 먼저 확보하세요.',
    nextRun: '다음 러닝은 거리를 줄이고 호흡이 편한 페이스로 마치세요.',
  },
  apollo: {
    title: '가장 빛나는 리듬을 찾는 자',
    oracle: '빠름은 빛처럼 정확한 순간에 온다.',
    strength: '훈련의 자극과 페이스 변화를 섬세하게 받아들이는 편입니다.',
    watchout: '좋은 감각을 쫓다 보면 쉬운 날의 가치를 잊기 쉽습니다.',
    nextRun: '다음 한 번은 기록계를 보지 말고 몸이 편한 속도로 달리세요.',
  },
  artemis: {
    title: '자기만의 길을 읽는 자',
    image: '/images/running-card/artemis.webp',
    imageFocus: .16,
    oracle: '고요한 길 위에서 가장 먼 곳을 본다.',
    strength: '스스로 리듬을 지키며 긴 호흡을 이어가는 힘이 있습니다.',
    watchout: '잘 달리는 주일수록 달린 날 사이 간격도 함께 살펴보세요.',
    nextRun: '다음 러닝은 평소보다 짧게, 풍경을 느끼는 속도로 달려보세요.',
  },
  zeus: {
    title: '폭풍 속에서도 리듬을 지배하는 자',
    oracle: '천둥이 울려도 너의 보폭은 흔들리지 않는다.',
    strength: '강한 목표 앞에서 집중도와 추진력을 동시에 끌어올립니다.',
    watchout: '앞서 나가는 날일수록 다음 러닝까지의 간격을 먼저 정해 두세요.',
    nextRun: '다음 러닝은 기록보다 부드러운 착지에 집중해 보세요.',
  },
  hera: {
    title: '자기 리듬을 품위 있게 지키는 자',
    oracle: '흔들리지 않는 리듬이 가장 멀리 데려간다.',
    strength: '무리하지 않고도 목표를 향한 질서를 오래 유지합니다.',
    watchout: '계획이 흐트러진 날에는 스스로에게 너무 엄격해지지 마세요.',
    nextRun: '다음 한 번은 평소 코스를 편안한 대화 페이스로 달리세요.',
  },
  demeter: {
    title: '자기 페이스를 길러내는 자',
    image: '/images/running-card/demeter.webp',
    imageFocus: .16,
    oracle: '천천히 쌓은 계절은 결국 너의 거리가 된다.',
    strength: '서두르지 않고 꾸준히 다음 러닝을 이어갑니다.',
    watchout: '편안한 리듬에 머물면 새로운 자극이 늦어질 수 있습니다.',
    nextRun: '이번 주 한 번은 마지막 10분만 조금 경쾌하게 달려보세요.',
    nextRunRaises: true,
  },
  ares: {
    title: '불꽃 같은 자극을 다루는 자',
    oracle: '강함은 방향을 가질 때 오래 남는다.',
    strength: '강한 세션에서 몰입과 추진력이 선명합니다.',
    watchout: '강한 날 뒤의 쉬는 날을 건너뛰면 리듬이 무너질 수 있습니다.',
    nextRun: '다음 러닝은 짧게, 대화할 수 있는 속도로 달리세요.',
  },
  aphrodite: {
    title: '기분 좋은 리듬을 오래 남기는 자',
    image: '/images/running-card/aphrodite.webp',
    imageFocus: .19,
    oracle: '즐거움이야말로 가장 오래 가는 동력이다.',
    strength: '부담 없는 루틴을 스스로 만들어 갑니다.',
    watchout: '편안함만 이어지면 목표가 흐려질 수 있습니다.',
    nextRun: '이번 주 한 번은 평소보다 5분만 더, 가볍게 이어가세요.',
    nextRunRaises: true,
  },
  hephaestus: {
    title: '보이지 않는 시간을 단단히 쌓는 자',
    oracle: '가장 단단한 발걸음은 꺼지지 않는 불에서 나온다.',
    strength: '작은 훈련을 차곡차곡 쌓아 기반을 만듭니다.',
    watchout: '쌓인 거리를 의지로만 버티지 말고 달린 날 사이 간격도 살펴보세요.',
    nextRun: '다음 러닝은 평소보다 짧게 달리고 가볍게 끝내세요.',
  },
  hermes: {
    title: '가벼운 발걸음으로 길을 여는 자',
    image: '/images/running-card/hermes.webp',
    imageFocus: .44,
    oracle: '빠른 사람은 먼저 가는 대신 더 멀리 본다.',
    strength: '짧은 자극과 빠른 전환 속에서 리듬을 찾는 감각이 좋습니다.',
    watchout: '속도를 올리는 만큼 천천히 달리는 날도 남겨 두세요.',
    nextRun: '다음 러닝은 20분 동안 시계를 보지 않고 가볍게 달리세요.',
  },
  dionysus: {
    title: '달리는 즐거움으로 리듬을 잇는 자',
    image: '/images/running-card/dionysus.webp',
    imageFocus: .31,
    oracle: '몸이 즐거운 길은 다시 찾게 된다.',
    strength: '즐거움을 동력으로 삼아 러닝을 오래 이어갑니다.',
    watchout: '즐겁게 빨라진 날 다음에는 한 번 쉬어 가세요.',
    nextRun: '다음 러닝은 좋아하는 코스에서 말할 수 있는 속도로 즐겨보세요.',
  },
  persephone: {
    title: '계절이 바뀌어도 다시 피어나는 자',
    image: '/images/running-card/persephone.webp',
    imageFocus: .44,
    oracle: '쉬어 가는 날도 다음 계절의 시작이다.',
    strength: '자신에게 맞는 속도로 꾸준히 다시 나섭니다.',
    watchout: '쉬어 가는 주에는 예전 기록과 자신을 비교하지 마세요.',
    nextRun: '다음 러닝은 평소보다 짧게, 편한 속도로만 달려 보세요.',
  },
  perseus: {
    title: '결정적인 순간을 꿰뚫는 자',
    image: '/images/running-card/perseus.webp',
    imageFocus: .40,
    oracle: '방향을 정한 발걸음은 흔들리지 않는다.',
    strength: '목표를 향한 빠른 훈련에서 집중력이 뚜렷합니다.',
    watchout: '강한 날이 이어지면 쉬운 러닝을 일정에 먼저 넣어두세요.',
    nextRun: '다음 러닝은 첫 10분을 천천히 시작해 일정한 호흡으로 마치세요.',
  },
  penelope: {
    title: '하루의 약속을 오래 지키는 자',
    oracle: '이어온 하루들이 너의 가장 긴 길이다.',
    strength: '무리 없이 정해진 러닝 리듬을 오래 유지하는 힘이 있습니다.',
    watchout: '익숙한 일정만 반복하면 새로운 목표가 흐려질 수 있습니다.',
    nextRun: '이번 주 한 번은 평소 코스 끝에서 5분만 더 걸어보세요.',
    nextRunRaises: true,
  },
  theseus: {
    title: '복잡한 길에서도 방향을 찾는 자',
    image: '/images/running-card/theseus.webp',
    imageFocus: .40,
    oracle: '갈림길에서도 너의 리듬은 답을 안다.',
    strength: '거리와 훈련 자극을 함께 조절하며 목표로 나아갑니다.',
    watchout: '훈련이 잘 풀리는 때일수록 거리가 쌓이는 속도를 살펴보세요.',
    nextRun: '다음 러닝은 속도를 바꾸지 않고 편안한 리듬으로 마치세요.',
  },
  orpheus: {
    title: '자신만의 리듬을 따르는 자',
    oracle: '좋은 리듬은 오래 달릴 이유를 남긴다.',
    strength: '자신에게 맞는 러닝을 스스로 골라 이어갑니다.',
    watchout: '편안한 페이스가 익숙해지면 가벼운 변화도 시도해 보세요.',
    nextRun: '다음 러닝은 마지막 5분만 조금 경쾌하게 달려보세요.',
    nextRunRaises: true,
  },
  atalanta: {
    title: '자기 속도로 앞서 나가는 자',
    oracle: '빠른 발은 고요한 준비에서 완성된다.',
    strength: '속도를 높이는 훈련에서 민첩함과 집중력이 돋보입니다.',
    watchout: '강한 자극 다음에는 쉬는 날을 먼저 확보하세요.',
    nextRun: '다음 러닝은 오르막을 피하고 대화할 수 있는 속도로 달리세요.',
  },
  nike: {
    title: '결승선을 향해 리듬을 끌어올리는 자',
    image: '/images/running-card/nike.webp',
    imageFocus: .31,
    oracle: '승리는 마지막 보폭까지 자신을 지키는 일이다.',
    strength: '목표가 뚜렷할 때 빠른 훈련을 꾸준히 이어갑니다.',
    watchout: '기록을 노리는 기간에는 쉬는 날도 훈련의 일부입니다.',
    nextRun: '다음 러닝은 기록을 재지 말고 몸이 편한 속도로 달리세요.',
  },
  themis: {
    title: '강약의 균형을 읽는 자',
    image: '/images/running-card/themis.webp',
    imageFocus: .37,
    oracle: '오래 가는 리듬은 균형에서 시작된다.',
    strength: '꾸준한 빈도와 회복 여유를 함께 지키는 힘이 있습니다.',
    watchout: '익숙한 강도에 머물 때는 목표에 맞는 변화를 살펴보세요.',
    nextRun: '다음 한 번은 평소 거리를 유지하며 마지막 5분만 경쾌하게 달리세요.',
    nextRunRaises: true,
  },
  bellerophon: {
    title: '속도를 높이며 길을 여는 자',
    oracle: '높이 오르는 날에도 발밑의 리듬을 잊지 마라.',
    strength: '빠른 훈련에 반응하며 기록을 향해 나아갑니다.',
    watchout: '강한 세션에 비해 회복 여유가 적을 수 있습니다.',
    nextRun: '다음 러닝은 속도를 낮추고 편안한 호흡만 확인하세요.',
  },
  daedalus: {
    title: '자기 훈련을 설계하는 자',
    image: '/images/running-card/daedalus.webp',
    imageFocus: .42,
    oracle: '정교한 하루가 더 먼 내일을 만든다.',
    strength: '훈련 자극과 일상의 리듬을 함께 조절합니다.',
    watchout: '계획이 어긋난 날에는 거리를 줄여 다시 맞춰 보세요.',
    nextRun: '다음 러닝은 시작 전 목표를 하나만 정하고 가볍게 마치세요.',
  },
  orion: {
    title: '먼 길의 끝을 바라보는 자',
    image: '/images/running-card/orion.webp',
    imageFocus: .40,
    oracle: '먼 곳을 보는 눈은 오늘의 보폭을 아낀다.',
    strength: '긴 거리를 감당하며 자기 호흡을 유지하는 힘이 있습니다.',
    watchout: '긴 러닝 다음에는 다음 러닝까지의 간격을 먼저 살펴보세요.',
    nextRun: '다음 러닝은 평소보다 짧게 달리며 호흡을 편하게 유지하세요.',
  },
  hector: {
    title: '긴 레이스를 끝까지 지키는 자',
    oracle: '마지막까지 남는 힘은 쌓아 온 걸음에서 나온다.',
    strength: '거리와 빠른 훈련을 꾸준히 이어갈 기반이 있습니다.',
    watchout: '잘 버티는 주에도 쉬는 날을 지나치지 마세요.',
    nextRun: '다음 러닝은 평소보다 짧게, 대화할 수 있는 속도로 달리세요.',
  },
  penthesilea: {
    title: '강한 순간에 중심을 지키는 자',
    oracle: '속도를 다루는 힘은 멈출 때도 빛난다.',
    strength: '빠른 훈련에서도 긴 호흡을 잃지 않는 추진력이 있습니다.',
    watchout: '강한 자극 뒤에는 쉬운 날을 분명히 남겨두세요.',
    nextRun: '다음 러닝은 기록을 보지 말고 가벼운 페이스로 마치세요.',
  },
  psyche: {
    title: '작은 걸음을 오래 믿는 자',
    image: '/images/running-card/psyche.webp',
    imageFocus: .16,
    oracle: '다시 달릴 수 있는 마음이 길을 이어준다.',
    strength: '무리하지 않고 자신의 리듬을 꾸준히 이어갑니다.',
    watchout: '편안한 러닝이 익숙해졌다면 목표에 맞는 변화를 살펴보세요.',
    nextRun: '다음 러닝은 편한 속도로 시작해 마지막 5분만 경쾌하게 달리세요.',
    nextRunRaises: true,
  },
  eros: {
    title: '달리는 즐거움을 먼저 찾는 자',
    image: '/images/running-card/eros.webp',
    imageFocus: .27,
    oracle: '즐거운 한 걸음이 다음 걸음을 부른다.',
    strength: '짧고 빠른 러닝에서 에너지와 몰입이 살아납니다.',
    watchout: '기분 좋은 속도로 달린 뒤에도 쉬는 날을 남겨두세요.',
    nextRun: '다음 한 번은 속도 목표 없이 20분만 가볍게 달리세요.',
  },
  prometheus: {
    title: '먼 거리를 향해 불을 밝히는 자',
    image: '/images/running-card/prometheus.webp',
    imageFocus: .31,
    oracle: '오래 타는 불은 서두르지 않는다.',
    strength: '긴 거리와 훈련 자극을 함께 감당하는 힘이 있습니다.',
    watchout: '훈련이 잘 되는 주에도 회복 여유를 점검해 보세요.',
    nextRun: '다음 러닝은 평소보다 거리를 줄이고 편안하게 마치세요.',
  },
  talos: {
    title: '흔들림 없이 거리를 쌓는 자',
    oracle: '단단함은 반복한 하루의 모양을 닮는다.',
    strength: '꾸준한 러닝으로 긴 거리를 버틸 기반을 만듭니다.',
    watchout: '같은 방식이 오래 이어지면 새로운 자극이 부족할 수 있습니다.',
    nextRun: '이번 주 한 번은 평소 코스를 짧게 달리고 가볍게 끝내세요.',
  },
  pheidippides: {
    title: '긴 길의 끝까지 호흡을 잇는 자',
    image: '/images/running-card/pheidippides.webp',
    imageFocus: .26,
    oracle: '먼 길일수록 다음 한 걸음을 아껴라.',
    strength: '긴 거리를 향한 집중력과 지속력이 뚜렷합니다.',
    watchout: '긴 러닝을 한 뒤에는 쉬는 날을 확보하세요.',
    nextRun: '다음 러닝은 거리 대신 편안한 호흡에 집중해 짧게 달리세요.',
  },
  ariadne: {
    title: '흩어진 길을 리듬으로 잇는 자',
    image: '/images/running-card/ariadne.webp',
    imageFocus: .33,
    oracle: '너만의 길은 다시 이어 달릴 수 있다.',
    strength: '일상 속에서도 러닝을 꾸준히 이어가는 힘이 있습니다.',
    watchout: '익숙한 페이스가 길어지면 가벼운 새 자극을 시도해 보세요.',
    nextRun: '다음 러닝은 낯선 짧은 코스를 편안한 속도로 달려보세요.',
  },
};

export const PRESENTATION_IDS = Object.keys(PRESENTATIONS);

export function getCharacterPresentation(id: string): CharacterPresentation {
  const presentation = PRESENTATIONS[id];
  if (!presentation) throw new Error(`Missing presentation for runner character: ${id}`);
  return presentation;
}

export function getCharacterTitle(id: string): string {
  return getCharacterPresentation(id).title;
}

// 공개 3축(스펙 '공개 지표'). 결과 카드·공유 이미지·공유 링크 화면이 같은 순서와 이름을 쓴다.
export const PUBLIC_AXES = [
  ['endurance', '지구력'],
  ['stimulus', '훈련 자극'],
  ['recoveryMargin', '회복 여유'],
] as const;

// 대표 수치(운영자 결정 2026-10-07): 공개 3축 중 인물 목표값이 가장 높은 축의 사용자 점수. 같으면 지구력 · 훈련 자극 · 회복 여유 순.
// 인물만으로 축이 정해지므로 결과 카드와 공유 링크 화면이 갈리지 않는다. 스펙 168행('판정에 가장 크게 기여한 축')과 다르다.
export function leadAxisOf(target: Record<(typeof PUBLIC_AXES)[number][0], number>) {
  return PUBLIC_AXES.map(([axis]) => axis).reduce((best, axis) => (target[axis] > target[best] ? axis : best));
}
// 표기(리드 판단 2026-10-07): 결과 카드 표지 띠의 설명 줄은 LEAD_NOTE, 점수 줄 꼬리표(결과 카드·공유받은 화면·공유 2장 분석)는
// 같은 말이 두 번 나오지 않게 짧은 LEAD_TAG. '대표 수치'라는 말은 화면·이미지에 쓰지 않는다.
export const LEAD_NOTE = '이 인물의 중심 점수';
export const LEAD_TAG = '중심 점수';

// 회복 여유는 몸의 회복이 아니다(스펙 12·283행, 설계 §6-4). 3축이 보이는 곳에 이 줄을 함께 둔다.
// 설계 §6-4 예시는 '고른 요일 사이 간격'이지만, 요일을 건너뛰면 엔진이 28일 ÷ 횟수로 간격을 어림하므로 '달린 날'로 쓴다.
export const RECOVERY_MARGIN_NOTE = '회복 여유: 달린 날 사이 간격과 1회 거리로 본 훈련 여백이에요. 몸의 회복 상태가 아니에요.';
